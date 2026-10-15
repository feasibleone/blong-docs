import { ICommanderModelRef } from '../../viewers/resolveViewer.js';
export interface ICommanderLevel {
    resourceType: string;
    label?: string;
    keyField?: string;
    labelField?: string;
    viewer?: string;
    permission?: string;
    model?: ICommanderModelRef;
    /** Triple + params that list the children of this level's nodes. */
    list: {
        method: string;
        resultSet?: string;
        params?: Record<string, unknown> | ((parent: Record<string, unknown> | null) => Record<string, unknown>);
    };
    /** Triple + params that open a node (leaf viewer fetch). */
    open?: {
        method: string;
        params?: Record<string, unknown>;
    };
}
export interface ICommanderSource {
    name: string;
    label: string;
    icon?: string;
    permission?: string;
    levels: ICommanderLevel[];
}
export interface ICommanderProps {
    /** Configured source descriptors (see `realm/blong-commander`). */
    sources: ICommanderSource[];
    /** Custom children loader (overrides the default handler[method] call). */
    listChildren?: (level: ICommanderLevel, parent: Record<string, unknown> | null) => Promise<Record<string, unknown>[]>;
    /** Custom node getter for leaf viewers. */
    getNode?: (level: ICommanderLevel, node: Record<string, unknown>) => Promise<unknown>;
    /** Model refs for model-system recognition (`{subject}.{object}`). */
    models?: ICommanderModelRef[];
    /** Show a ".." up-to-parent row at the top of the table (config-toggleable). */
    showParentRow?: boolean;
    className?: string;
}
export declare function Commander({ sources, listChildren: listChildrenProp, getNode: getNodeProp, models, showParentRow, className, }: ICommanderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Commander.d.ts.map