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

import * as dagre from 'dagre';
import * as React from 'react';
import { classes, stylesheet } from 'typestyle';
import { fontsize, color } from '../Css';

interface Segment {
  height: number;
  left: number;
  top: number;
  width: number;
}

interface Edge {
  color?: string;
  from: string;
  to: string;
  segments: Segment[];
  isPlaceholder?: boolean;
}

const css = stylesheet({
  arrowHead: {
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    borderTopColor: color.grey,
    borderWidth: '7px 6px 0 6px',
    content: `''`,
    position: 'absolute',
    top: -5,
    zIndex: 2,
  },
  icon: {
    borderRadius: '0px 2px 2px 0px',
    padding: '5px 7px 0px 7px',
  },
  label: {
    flexGrow: 1,
    fontSize: 15,
    lineHeight: '2em',
    margin: 'auto',
    overflow: 'hidden',
    paddingLeft: 15,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  line: {
    position: 'absolute',
  },
  node: {
    $nest: {
      '&:hover': {
        borderColor: color.theme,
      },
    },
    backgroundColor: color.background,
    border: 'solid 1px #d6d6d6',
    borderRadius: 3,
    boxSizing: 'content-box',
    color: '#124aa4',
    cursor: 'pointer',
    display: 'flex',
    fontSize: fontsize.medium,
    margin: 10,
    position: 'absolute',
    zIndex: 1,
  },
  nodeSelected: {
    border: `solid 2px ${color.theme}`,
  },
  placeholderNode: {
    margin: 10,
    position: 'absolute',
    // TODO: can this be calculated?
    transform: 'translate(73px, 16px)'
  },
  root: {
    backgroundColor: color.graphBg,
    borderLeft: 'solid 1px ' + color.divider,
    flexGrow: 1,
    overflow: 'auto',
    position: 'relative',
  },
  startCircle: {
    borderRadius: 7,
    content: '',
    display: 'inline-block',
    height: 8,
    position: 'absolute',
    width: 8,
    zIndex: 0,
  },
});

interface GraphProps {
  graph: dagre.graphlib.Graph;
  onClick?: (id: string) => void;
  selectedNodeId?: string;
}

interface GraphState {
  hoveredNode?: string;
}

export default class Graph extends React.Component<GraphProps, GraphState> {
  private LEFT_OFFSET = 100;
  private TOP_OFFSET = 42;
  private EDGE_THICKNESS = 2;
  private EDGE_X_BUFFER = 30;

  constructor(props: any) {
    super(props);

    this.state = {};
  }

  public render(): JSX.Element | null {
    const { graph } = this.props;
    const displayEdges: Edge[] = [];
    const displayEdgeStartPoints: number[][] = [];

    if (!graph.nodes().length) {
      return null;
    }
    dagre.layout(graph);

    // Creates the lines that constitute the edges connecting the graph
    graph.edges().forEach((edgeInfo) => {
      const edge = graph.edge(edgeInfo);
      const segments: Segment[] = [];

      if (edge.points.length > 1) {
        for (let i = 1; i < edge.points.length; i++) {

          let x1 = edge.points[i - 1].x;
          let y1 = edge.points[i - 1].y;

          // Make all edges start at the bottom center of the node
          if (i === 1) {
            const sourceNode = graph.node(edgeInfo.v);
            // If first segment's x value is too far to the right, move it EDGE_X_BUFFER pixels in
            // from the right end of the destination node
            const rightmostAcceptableXPos =
              sourceNode.x + sourceNode.width - this.LEFT_OFFSET - this.EDGE_X_BUFFER;
            if (rightmostAcceptableXPos <= x1) {
              x1 = rightmostAcceptableXPos;
            }

            // If first segment's x value is too far to the left, move it EDGE_X_BUFFER pixels in
            // from the left end of the destination node
            const leftmostAcceptableXPos =
              sourceNode.x - this.LEFT_OFFSET + this.EDGE_X_BUFFER;
            if (leftmostAcceptableXPos >= x1) {
              x1 = leftmostAcceptableXPos;
            }
            y1 = sourceNode.y + (sourceNode.height / 2);
          }

          let x2 = edge.points[i].x;
          let y2 = edge.points[i].y;

          // Adjustments made to final segment for each edge
          if (i === edge.points.length - 1) {
            const destinationNode = graph.node(edgeInfo.w);

            // Placeholder nodes never need adjustment because they always have only a single incoming edge
            if (!destinationNode.isPlaceholder) {
              // Set the final segment's y value to point to the top of the destination node
              y2 = destinationNode.y - this.TOP_OFFSET + 7;

              // If final segment's x value is too far to the right, move it EDGE_X_BUFFER pixels in
              // from the right end of the destination node
              const rightmostAcceptableXPos =
                destinationNode.x + destinationNode.width - this.LEFT_OFFSET - this.EDGE_X_BUFFER;
              if (rightmostAcceptableXPos <= x2) {
                x2 = rightmostAcceptableXPos;
              }

              // If final segment's x value is too far to the left, move it EDGE_X_BUFFER pixels in
              // from the left end of the destination node
              const leftmostAcceptableXPos =
                destinationNode.x - this.LEFT_OFFSET + this.EDGE_X_BUFFER;
              if (leftmostAcceptableXPos >= x2) {
                x2 = leftmostAcceptableXPos;
              }
            }
          }

          // How we render line segments depends on whether the layout dagre gave us calls for a
          // vertical, a horizontal, or a diagonal line.
          if (x1 === x2) {
            // Solely vertical segment
            const length = (y2 - y1) + 1;
            segments.push({
              height: length % 2 === 0 ? length : length - 1,
              left: this.LEFT_OFFSET + x1,
              top: this.TOP_OFFSET + y1,
              width: this.EDGE_THICKNESS,
            });
          } else if (y1 === y2) {
            // Solely horizontal segment
            const length = x2 - x1;
            const xMid = (x1 + x2) / 2;
            segments.push({
              height: this.EDGE_THICKNESS,
              left: this.LEFT_OFFSET + xMid - (length / 2),
              top: this.TOP_OFFSET + y1,
              width: length,
            });
          } else {
            // If the points given form a diagonal line, then split that line into 3 segments, two
            // vertical, and one horizontal.

            // Vertical segment 1
            const verticalSegmentLength = (y2 - y1) / 2;
            segments.push({
              height: verticalSegmentLength + 2,
              left: this.LEFT_OFFSET + x1,
              top: this.TOP_OFFSET + y1,
              width: this.EDGE_THICKNESS,
            });

            // Horizontal segment
            const horizontalSegmentLength = Math.abs(x2 - x1) + 1;
            segments.push({
              height: this.EDGE_THICKNESS,
              left: this.LEFT_OFFSET + Math.min(x1, x2),
              top: this.TOP_OFFSET + ((y1 + y2) / 2),
              width: horizontalSegmentLength,
            });

            // Vertical segment 2
            segments.push({
              height: verticalSegmentLength + 1,
              left: this.LEFT_OFFSET + x2,
              top: this.TOP_OFFSET + ((y1 + y2) / 2),
              width: this.EDGE_THICKNESS,
            });
          }

          // Store the first point of the edge to draw the edge start circle
          if (i === 1) {
            displayEdgeStartPoints.push([x1, y1]);
          }
        }
      }
      displayEdges.push({
        color: edge.color,
        from: edgeInfo.v,
        isPlaceholder: edge.isPlaceholder,
        segments,
        to: edgeInfo.w
      });
    });

    const { hoveredNode } = this.state;
    const highlightNode = this.props.selectedNodeId || hoveredNode;

    return (
      <div className={css.root}>
        {graph.nodes().map(id => Object.assign(graph.node(id), { id })).map((node, i) => (
          <div className={classes(node.isPlaceholder ? css.placeholderNode : css.node, 'graphNode',
            node.id === this.props.selectedNodeId ? css.nodeSelected : '')} key={i}
            onMouseEnter={() => {
              if (!this.props.selectedNodeId) {
                this.setState({ hoveredNode: node.id });
              } 
            }}
            onMouseLeave={() => {
              if (this.state.hoveredNode === node.id) {
                this.setState({ hoveredNode: undefined });
              }
            }}
            onClick={() => (!node.isPlaceholder && this.props.onClick) && this.props.onClick(node.id)}
            style={{
              backgroundColor: node.bgColor, left: node.x,
              maxHeight: node.height,
              minHeight: node.height,
              top: node.y,
              transition: 'left 0.5s, top 0.5s',
              width: node.width,
            }}>
            <div className={css.label}>{node.label}</div>
            <div className={css.icon} style={{ background: node.statusColoring }}>{node.icon}</div>
          </div>
        ))}

        {displayEdges.map((edge, i) => {
          const edgeColor = this.getEdgeColor(edge, highlightNode);
          return (
            <div key={i}>
              {edge.segments.map((segment, l) => (
                <div className={css.line}
                  key={l} style={{
                    backgroundColor: edgeColor,
                    height: segment.height,
                    left: segment.left,
                    top: segment.top,
                    transition: 'left 0.5s, top 0.5s',
                    width: segment.width,
                  }} />
              ))}
              {!edge.isPlaceholder && (
                <div className={css.arrowHead} style={{
                  borderTopColor: edgeColor,
                  left: edge.segments[edge.segments.length - 1].left - 5,
                  top: edge.segments[edge.segments.length - 1].top + edge.segments[edge.segments.length - 1].height - 5
                }} />
              )}
            </div>
          );}
        )}

        {/* {displayEdgeStartPoints.map((point, i) => (
          <div className={css.startCircle} key={i} style={{
            left: `calc(${point[0]}px - 3px + ${this.LEFT_OFFSET}px)`,
            top: `calc(${point[1]}px - 3px + ${this.TOP_OFFSET}px)`,
          }} />
        ))} */}
      </div>
    );
  }
  
  private getEdgeColor(edge: Edge, highlightNode?: string): string {
    if (highlightNode) {
      if (edge.from === highlightNode) {
        return color.theme;
      }
      if (edge.to === highlightNode) {
        return color.themeDarker;
      }
    }
    if (edge.isPlaceholder) {
      return color.weak;
    }
    return color.grey;
  }
}
