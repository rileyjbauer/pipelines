/*
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import CustomTable, { Column, Row } from '../components/CustomTable';
import Toolbar, { ToolbarActionConfig } from '../components/Toolbar';
import { ListRequest } from '../lib/Apis';
import { RouteComponentProps } from 'react-router-dom';
import { logger, errorToMessage } from '../lib/Utils';
import { ApiListExperimentsResponse, ApiExperiment, ExperimentServiceApi } from '../apis/experiment';
import { DialogProps } from '../components/Router';
import { ApiListPipelinesResponse, ApiPipeline, PipelineServiceApi } from 'src/apis/pipeline';

export interface ResourceSelectorProps extends RouteComponentProps {
  listApi: ExperimentServiceApi['listExperiment'] | PipelineServiceApi['listPipelines'];
  columns: Column[];
  emptyMessage: string;
  initialSortColumn: any;
  resourceToRow: (resource: ApiExperiment | ApiPipeline) => Row;
  selectionChanged: (resource: ApiExperiment | ApiPipeline) => void;
  title: string;
  updateDialog: (dialogProps: DialogProps) => void;
}

interface ResourceSelectorState {
  resources: Array<ApiExperiment | ApiPipeline>;
  rows: Row[];
  selectedIds: string[];
  toolbarActions: ToolbarActionConfig[];
}

class ResourceSelector extends React.Component<ResourceSelectorProps, ResourceSelectorState> {
  protected _isMounted = true;

  constructor(props: any) {
    super(props);

    this.state = {
      resources: [],
      rows: [],
      selectedIds: [],
      toolbarActions: [],
    };
  }

  public render(): JSX.Element {
    const { rows, selectedIds, toolbarActions } = this.state;
    const { columns, title, emptyMessage, initialSortColumn } = this.props;

    return (
      <React.Fragment>
        <Toolbar actions={toolbarActions} breadcrumbs={[]} pageTitle={title} />
        <CustomTable columns={columns} rows={rows} selectedIds={selectedIds} useRadioButtons={true}
          updateSelection={this._selectionChanged.bind(this)}
          initialSortColumn={initialSortColumn} reload={this._load.bind(this)}
          emptyMessage={emptyMessage} />
      </React.Fragment>
    );
  }

  public componentWillUnmount(): void {
    this._isMounted = false;
  }

  protected setStateSafe(newState: Partial<ResourceSelectorState>, cb?: () => void): void {
    if (this._isMounted) {
      this.setState(newState as any, cb);
    }
  }

  protected _selectionChanged(selectedIds: string[]): void {
    if (!Array.isArray(selectedIds) || selectedIds.length !== 1) {
      logger.error(`${selectedIds.length} resources were selected somehow`, selectedIds);
      return;
    }
    const selected = this.state.resources.find(r => r.id === selectedIds[0]);
    if (selected) {
      this.props.selectionChanged(selected);
    } else {
      logger.error(`Somehow no resource was found with ID: ${selectedIds[0]}`);
      return;
    }
    this.setStateSafe({ selectedIds });
  }

  protected async _load(request: ListRequest): Promise<string> {
      let resources: Array<ApiExperiment | ApiPipeline> = [];
      let nextPageToken = '';
      try {
        const response =
          await this.props.listApi(request.pageToken, request.pageSize, request.sortBy);

        if ((response as ApiListExperimentsResponse).experiments) {
          resources = (response as ApiListExperimentsResponse).experiments || [];
        } else if ((response as ApiListPipelinesResponse).pipelines) {
          resources = (response as ApiListPipelinesResponse).pipelines || [];
        } else {
          logger.error('Somehow response contained neither experiments nor pipelines');
        }
        nextPageToken = response.next_page_token || '';
      } catch (err) {
        const errorMessage = await errorToMessage(err);
        this.props.updateDialog({
          buttons: [{ text: 'Dismiss' }],
          content: 'List request failed with:\n' + errorMessage,
          title: 'Error retrieving resources',
        });
        logger.error('Could not get requested list of resources', errorMessage);
      }

      this.setStateSafe({ resources, rows: resources.map((r) => this.props.resourceToRow(r)) });
      return nextPageToken;
  }
}

export default ResourceSelector;