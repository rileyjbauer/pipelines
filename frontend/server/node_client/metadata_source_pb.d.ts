// package: ml_metadata
// file: metadata_source.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class RecordSet extends jspb.Message { 
    clearColumnNamesList(): void;
    getColumnNamesList(): Array<string>;
    setColumnNamesList(value: Array<string>): void;
    addColumnNames(value: string, index?: number): string;

    clearRecordsList(): void;
    getRecordsList(): Array<RecordSet.Record>;
    setRecordsList(value: Array<RecordSet.Record>): void;
    addRecords(value?: RecordSet.Record, index?: number): RecordSet.Record;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSet.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSet): RecordSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSet;
    static deserializeBinaryFromReader(message: RecordSet, reader: jspb.BinaryReader): RecordSet;
}

export namespace RecordSet {
    export type AsObject = {
        columnNamesList: Array<string>,
        recordsList: Array<RecordSet.Record.AsObject>,
    }


    export class Record extends jspb.Message { 
        clearValuesList(): void;
        getValuesList(): Array<string>;
        setValuesList(value: Array<string>): void;
        addValues(value: string, index?: number): string;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Record.AsObject;
        static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Record;
        static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
    }

    export namespace Record {
        export type AsObject = {
            valuesList: Array<string>,
        }
    }

}

export class MetadataSourceQueryConfig extends jspb.Message { 
    getMetadataSourceType(): MetadataSourceType;
    setMetadataSourceType(value: MetadataSourceType): void;


    hasDropTypeTable(): boolean;
    clearDropTypeTable(): void;
    getDropTypeTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropTypeTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateTypeTable(): boolean;
    clearCreateTypeTable(): void;
    getCreateTypeTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateTypeTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckTypeTable(): boolean;
    clearCheckTypeTable(): void;
    getCheckTypeTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckTypeTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertArtifactType(): boolean;
    clearInsertArtifactType(): void;
    getInsertArtifactType(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertArtifactType(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertExecutionType(): boolean;
    clearInsertExecutionType(): void;
    getInsertExecutionType(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertExecutionType(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertContextType(): boolean;
    clearInsertContextType(): void;
    getInsertContextType(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertContextType(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectTypeById(): boolean;
    clearSelectTypeById(): void;
    getSelectTypeById(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectTypeById(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectTypeByName(): boolean;
    clearSelectTypeByName(): void;
    getSelectTypeByName(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectTypeByName(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectAllTypes(): boolean;
    clearSelectAllTypes(): void;
    getSelectAllTypes(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectAllTypes(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropTypePropertyTable(): boolean;
    clearDropTypePropertyTable(): void;
    getDropTypePropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropTypePropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateTypePropertyTable(): boolean;
    clearCreateTypePropertyTable(): void;
    getCreateTypePropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateTypePropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckTypePropertyTable(): boolean;
    clearCheckTypePropertyTable(): void;
    getCheckTypePropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckTypePropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertTypeProperty(): boolean;
    clearInsertTypeProperty(): void;
    getInsertTypeProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertTypeProperty(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectPropertyByTypeId(): boolean;
    clearSelectPropertyByTypeId(): void;
    getSelectPropertyByTypeId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectPropertyByTypeId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectLastInsertId(): boolean;
    clearSelectLastInsertId(): void;
    getSelectLastInsertId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectLastInsertId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropArtifactTable(): boolean;
    clearDropArtifactTable(): void;
    getDropArtifactTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropArtifactTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateArtifactTable(): boolean;
    clearCreateArtifactTable(): void;
    getCreateArtifactTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateArtifactTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckArtifactTable(): boolean;
    clearCheckArtifactTable(): void;
    getCheckArtifactTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckArtifactTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertArtifact(): boolean;
    clearInsertArtifact(): void;
    getInsertArtifact(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertArtifact(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectArtifactById(): boolean;
    clearSelectArtifactById(): void;
    getSelectArtifactById(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectArtifactById(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectArtifactsByTypeId(): boolean;
    clearSelectArtifactsByTypeId(): void;
    getSelectArtifactsByTypeId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectArtifactsByTypeId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectArtifactsByUri(): boolean;
    clearSelectArtifactsByUri(): void;
    getSelectArtifactsByUri(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectArtifactsByUri(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasUpdateArtifact(): boolean;
    clearUpdateArtifact(): void;
    getUpdateArtifact(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateArtifact(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropArtifactPropertyTable(): boolean;
    clearDropArtifactPropertyTable(): void;
    getDropArtifactPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropArtifactPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateArtifactPropertyTable(): boolean;
    clearCreateArtifactPropertyTable(): void;
    getCreateArtifactPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateArtifactPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckArtifactPropertyTable(): boolean;
    clearCheckArtifactPropertyTable(): void;
    getCheckArtifactPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckArtifactPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertArtifactProperty(): boolean;
    clearInsertArtifactProperty(): void;
    getInsertArtifactProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertArtifactProperty(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectArtifactPropertyByArtifactId(): boolean;
    clearSelectArtifactPropertyByArtifactId(): void;
    getSelectArtifactPropertyByArtifactId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectArtifactPropertyByArtifactId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasUpdateArtifactProperty(): boolean;
    clearUpdateArtifactProperty(): void;
    getUpdateArtifactProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateArtifactProperty(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDeleteArtifactProperty(): boolean;
    clearDeleteArtifactProperty(): void;
    getDeleteArtifactProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteArtifactProperty(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropExecutionTable(): boolean;
    clearDropExecutionTable(): void;
    getDropExecutionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropExecutionTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateExecutionTable(): boolean;
    clearCreateExecutionTable(): void;
    getCreateExecutionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateExecutionTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckExecutionTable(): boolean;
    clearCheckExecutionTable(): void;
    getCheckExecutionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckExecutionTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertExecution(): boolean;
    clearInsertExecution(): void;
    getInsertExecution(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertExecution(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectExecutionById(): boolean;
    clearSelectExecutionById(): void;
    getSelectExecutionById(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectExecutionById(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectExecutionsByTypeId(): boolean;
    clearSelectExecutionsByTypeId(): void;
    getSelectExecutionsByTypeId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectExecutionsByTypeId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasUpdateExecution(): boolean;
    clearUpdateExecution(): void;
    getUpdateExecution(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateExecution(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropExecutionPropertyTable(): boolean;
    clearDropExecutionPropertyTable(): void;
    getDropExecutionPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropExecutionPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateExecutionPropertyTable(): boolean;
    clearCreateExecutionPropertyTable(): void;
    getCreateExecutionPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateExecutionPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckExecutionPropertyTable(): boolean;
    clearCheckExecutionPropertyTable(): void;
    getCheckExecutionPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckExecutionPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertExecutionProperty(): boolean;
    clearInsertExecutionProperty(): void;
    getInsertExecutionProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertExecutionProperty(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectExecutionPropertyByExecutionId(): boolean;
    clearSelectExecutionPropertyByExecutionId(): void;
    getSelectExecutionPropertyByExecutionId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectExecutionPropertyByExecutionId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasUpdateExecutionProperty(): boolean;
    clearUpdateExecutionProperty(): void;
    getUpdateExecutionProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateExecutionProperty(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDeleteExecutionProperty(): boolean;
    clearDeleteExecutionProperty(): void;
    getDeleteExecutionProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteExecutionProperty(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropContextTable(): boolean;
    clearDropContextTable(): void;
    getDropContextTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropContextTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateContextTable(): boolean;
    clearCreateContextTable(): void;
    getCreateContextTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateContextTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckContextTable(): boolean;
    clearCheckContextTable(): void;
    getCheckContextTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckContextTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertContext(): boolean;
    clearInsertContext(): void;
    getInsertContext(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertContext(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectContextById(): boolean;
    clearSelectContextById(): void;
    getSelectContextById(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectContextById(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectContextsByTypeId(): boolean;
    clearSelectContextsByTypeId(): void;
    getSelectContextsByTypeId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectContextsByTypeId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasUpdateContext(): boolean;
    clearUpdateContext(): void;
    getUpdateContext(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateContext(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropContextPropertyTable(): boolean;
    clearDropContextPropertyTable(): void;
    getDropContextPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropContextPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateContextPropertyTable(): boolean;
    clearCreateContextPropertyTable(): void;
    getCreateContextPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateContextPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckContextPropertyTable(): boolean;
    clearCheckContextPropertyTable(): void;
    getCheckContextPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckContextPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertContextProperty(): boolean;
    clearInsertContextProperty(): void;
    getInsertContextProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertContextProperty(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectContextPropertyByContextId(): boolean;
    clearSelectContextPropertyByContextId(): void;
    getSelectContextPropertyByContextId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectContextPropertyByContextId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasUpdateContextProperty(): boolean;
    clearUpdateContextProperty(): void;
    getUpdateContextProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateContextProperty(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDeleteContextProperty(): boolean;
    clearDeleteContextProperty(): void;
    getDeleteContextProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteContextProperty(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropEventTable(): boolean;
    clearDropEventTable(): void;
    getDropEventTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropEventTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateEventTable(): boolean;
    clearCreateEventTable(): void;
    getCreateEventTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateEventTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckEventTable(): boolean;
    clearCheckEventTable(): void;
    getCheckEventTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckEventTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertEvent(): boolean;
    clearInsertEvent(): void;
    getInsertEvent(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertEvent(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectEventByArtifactId(): boolean;
    clearSelectEventByArtifactId(): void;
    getSelectEventByArtifactId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectEventByArtifactId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectEventByExecutionId(): boolean;
    clearSelectEventByExecutionId(): void;
    getSelectEventByExecutionId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectEventByExecutionId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropEventPathTable(): boolean;
    clearDropEventPathTable(): void;
    getDropEventPathTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropEventPathTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateEventPathTable(): boolean;
    clearCreateEventPathTable(): void;
    getCreateEventPathTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateEventPathTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckEventPathTable(): boolean;
    clearCheckEventPathTable(): void;
    getCheckEventPathTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckEventPathTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertEventPath(): boolean;
    clearInsertEventPath(): void;
    getInsertEventPath(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertEventPath(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectEventPathByEventId(): boolean;
    clearSelectEventPathByEventId(): void;
    getSelectEventPathByEventId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectEventPathByEventId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropAssociationTable(): boolean;
    clearDropAssociationTable(): void;
    getDropAssociationTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropAssociationTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateAssociationTable(): boolean;
    clearCreateAssociationTable(): void;
    getCreateAssociationTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateAssociationTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckAssociationTable(): boolean;
    clearCheckAssociationTable(): void;
    getCheckAssociationTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckAssociationTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertAssociation(): boolean;
    clearInsertAssociation(): void;
    getInsertAssociation(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertAssociation(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectAssociationByContextId(): boolean;
    clearSelectAssociationByContextId(): void;
    getSelectAssociationByContextId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectAssociationByContextId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectAssociationByExecutionId(): boolean;
    clearSelectAssociationByExecutionId(): void;
    getSelectAssociationByExecutionId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectAssociationByExecutionId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropAttributionTable(): boolean;
    clearDropAttributionTable(): void;
    getDropAttributionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropAttributionTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateAttributionTable(): boolean;
    clearCreateAttributionTable(): void;
    getCreateAttributionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateAttributionTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckAttributionTable(): boolean;
    clearCheckAttributionTable(): void;
    getCheckAttributionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckAttributionTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertAttribution(): boolean;
    clearInsertAttribution(): void;
    getInsertAttribution(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertAttribution(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectAttributionByContextId(): boolean;
    clearSelectAttributionByContextId(): void;
    getSelectAttributionByContextId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectAttributionByContextId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasSelectAttributionByArtifactId(): boolean;
    clearSelectAttributionByArtifactId(): void;
    getSelectAttributionByArtifactId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectAttributionByArtifactId(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasDropMlmdEnvTable(): boolean;
    clearDropMlmdEnvTable(): void;
    getDropMlmdEnvTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropMlmdEnvTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCreateMlmdEnvTable(): boolean;
    clearCreateMlmdEnvTable(): void;
    getCreateMlmdEnvTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateMlmdEnvTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;

    getSchemaVersion(): number;
    setSchemaVersion(value: number): void;


    hasCheckMlmdEnvTable(): boolean;
    clearCheckMlmdEnvTable(): void;
    getCheckMlmdEnvTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckMlmdEnvTable(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasInsertSchemaVersion(): boolean;
    clearInsertSchemaVersion(): void;
    getInsertSchemaVersion(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertSchemaVersion(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasUpdateSchemaVersion(): boolean;
    clearUpdateSchemaVersion(): void;
    getUpdateSchemaVersion(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateSchemaVersion(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    hasCheckTablesInV0132(): boolean;
    clearCheckTablesInV0132(): void;
    getCheckTablesInV0132(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckTablesInV0132(value?: MetadataSourceQueryConfig.TemplateQuery): void;


    getMigrationSchemesMap(): jspb.Map<number, MetadataSourceQueryConfig.MigrationScheme>;
    clearMigrationSchemesMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetadataSourceQueryConfig.AsObject;
    static toObject(includeInstance: boolean, msg: MetadataSourceQueryConfig): MetadataSourceQueryConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetadataSourceQueryConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetadataSourceQueryConfig;
    static deserializeBinaryFromReader(message: MetadataSourceQueryConfig, reader: jspb.BinaryReader): MetadataSourceQueryConfig;
}

export namespace MetadataSourceQueryConfig {
    export type AsObject = {
        metadataSourceType: MetadataSourceType,
        dropTypeTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createTypeTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkTypeTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertArtifactType?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertExecutionType?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertContextType?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectTypeById?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectTypeByName?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectAllTypes?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropTypePropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createTypePropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkTypePropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertTypeProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectPropertyByTypeId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectLastInsertId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropArtifactTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createArtifactTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkArtifactTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertArtifact?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectArtifactById?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectArtifactsByTypeId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectArtifactsByUri?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateArtifact?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropArtifactPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createArtifactPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkArtifactPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertArtifactProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectArtifactPropertyByArtifactId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateArtifactProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteArtifactProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropExecutionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createExecutionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkExecutionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertExecution?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectExecutionById?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectExecutionsByTypeId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateExecution?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropExecutionPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createExecutionPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkExecutionPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertExecutionProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectExecutionPropertyByExecutionId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateExecutionProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteExecutionProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropContextTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createContextTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkContextTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertContext?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectContextById?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectContextsByTypeId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateContext?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropContextPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createContextPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkContextPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertContextProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectContextPropertyByContextId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateContextProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteContextProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropEventTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createEventTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkEventTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertEvent?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectEventByArtifactId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectEventByExecutionId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropEventPathTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createEventPathTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkEventPathTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertEventPath?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectEventPathByEventId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropAssociationTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createAssociationTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkAssociationTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertAssociation?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectAssociationByContextId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectAssociationByExecutionId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropAttributionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createAttributionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkAttributionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertAttribution?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectAttributionByContextId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectAttributionByArtifactId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropMlmdEnvTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createMlmdEnvTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        schemaVersion: number,
        checkMlmdEnvTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertSchemaVersion?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateSchemaVersion?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkTablesInV0132?: MetadataSourceQueryConfig.TemplateQuery.AsObject,

        migrationSchemesMap: Array<[number, MetadataSourceQueryConfig.MigrationScheme.AsObject]>,
    }


    export class TemplateQuery extends jspb.Message { 
        getQuery(): string;
        setQuery(value: string): void;

        getParameterNum(): number;
        setParameterNum(value: number): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TemplateQuery.AsObject;
        static toObject(includeInstance: boolean, msg: TemplateQuery): TemplateQuery.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TemplateQuery, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TemplateQuery;
        static deserializeBinaryFromReader(message: TemplateQuery, reader: jspb.BinaryReader): TemplateQuery;
    }

    export namespace TemplateQuery {
        export type AsObject = {
            query: string,
            parameterNum: number,
        }
    }

    export class MigrationScheme extends jspb.Message { 
        clearUpgradeQueriesList(): void;
        getUpgradeQueriesList(): Array<MetadataSourceQueryConfig.TemplateQuery>;
        setUpgradeQueriesList(value: Array<MetadataSourceQueryConfig.TemplateQuery>): void;
        addUpgradeQueries(value?: MetadataSourceQueryConfig.TemplateQuery, index?: number): MetadataSourceQueryConfig.TemplateQuery;


        hasUpgradeVerification(): boolean;
        clearUpgradeVerification(): void;
        getUpgradeVerification(): MetadataSourceQueryConfig.MigrationScheme.VerificationScheme | undefined;
        setUpgradeVerification(value?: MetadataSourceQueryConfig.MigrationScheme.VerificationScheme): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MigrationScheme.AsObject;
        static toObject(includeInstance: boolean, msg: MigrationScheme): MigrationScheme.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MigrationScheme, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MigrationScheme;
        static deserializeBinaryFromReader(message: MigrationScheme, reader: jspb.BinaryReader): MigrationScheme;
    }

    export namespace MigrationScheme {
        export type AsObject = {
            upgradeQueriesList: Array<MetadataSourceQueryConfig.TemplateQuery.AsObject>,
            upgradeVerification?: MetadataSourceQueryConfig.MigrationScheme.VerificationScheme.AsObject,
        }


        export class VerificationScheme extends jspb.Message { 
            clearPreviousVersionSetupQueriesList(): void;
            getPreviousVersionSetupQueriesList(): Array<MetadataSourceQueryConfig.TemplateQuery>;
            setPreviousVersionSetupQueriesList(value: Array<MetadataSourceQueryConfig.TemplateQuery>): void;
            addPreviousVersionSetupQueries(value?: MetadataSourceQueryConfig.TemplateQuery, index?: number): MetadataSourceQueryConfig.TemplateQuery;

            clearPostMigrationVerificationQueriesList(): void;
            getPostMigrationVerificationQueriesList(): Array<MetadataSourceQueryConfig.TemplateQuery>;
            setPostMigrationVerificationQueriesList(value: Array<MetadataSourceQueryConfig.TemplateQuery>): void;
            addPostMigrationVerificationQueries(value?: MetadataSourceQueryConfig.TemplateQuery, index?: number): MetadataSourceQueryConfig.TemplateQuery;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): VerificationScheme.AsObject;
            static toObject(includeInstance: boolean, msg: VerificationScheme): VerificationScheme.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: VerificationScheme, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): VerificationScheme;
            static deserializeBinaryFromReader(message: VerificationScheme, reader: jspb.BinaryReader): VerificationScheme;
        }

        export namespace VerificationScheme {
            export type AsObject = {
                previousVersionSetupQueriesList: Array<MetadataSourceQueryConfig.TemplateQuery.AsObject>,
                postMigrationVerificationQueriesList: Array<MetadataSourceQueryConfig.TemplateQuery.AsObject>,
            }
        }

    }

}

export enum MetadataSourceType {
    UNKNOWN_METADATA_SOURCE = 0,
    FAKE_METADATA_SOURCE = 1,
    MYSQL_METADATA_SOURCE = 2,
    SQLITE_METADATA_SOURCE = 3,
}
