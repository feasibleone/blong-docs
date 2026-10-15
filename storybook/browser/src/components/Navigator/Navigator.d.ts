import { default as React } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
/** One step of a tree path (root → node). `key`/`label` are tree keys/labels. */
export interface INavigatorPathItem {
    key: string;
    label: string;
    data: Record<string, unknown>;
}
/** Imperative handle — lets a shell drive the tree (drill / go-up / reveal). */
export interface INavigatorHandle {
    /** Reveal (materialize + expand + select) a root→node path. */
    selectPath: (path: INavigatorPathItem[]) => Promise<void>;
    /**
     * Resolve a "/"-joined label path to a root→node path (materializing lazy
     * children as needed) and reveal it. Returns false when a label doesn't match.
     */
    jumpTo: (labels: string[]) => Promise<boolean>;
}
export interface INavigatorProps {
    /** Fetch function returning tree nodes */
    fetch?: () => Promise<Record<string, unknown[]>>;
    /** Lazy child fetch — called when a node is expanded and has no children yet */
    loadChildren?: (node: Record<string, unknown>) => Promise<Record<string, unknown>[]>;
    /** Called with the selected node value */
    onSelect?: (node: Record<string, unknown> | null) => void;
    /** Called with the full root→selected path (empty when nothing is selected). */
    onSelectPath?: (path: INavigatorPathItem[]) => void;
    keyField?: string;
    parentField?: string;
    field?: string;
    title?: string;
    /** Expected key in fetch result */
    resultSet?: string;
    /** Data passed directly (alternative to fetch) */
    data?: Record<string, unknown>[];
    /** Controlled expanded keys (object keyed by node key) */
    expandedKeys?: Record<string, boolean>;
    /** Called when the expanded set changes */
    onToggle?: (keys: Record<string, boolean>) => void;
    /** Node field holding the permission name; nodes without access are pruned */
    permissionField?: string;
    /** Node key to select + expand on mount (start at a branch) */
    startKey?: string;
    /** Mark nodes as tree leaves (no expander) based on their data */
    isLeaf?: (node: Record<string, unknown>) => boolean;
    /** Inline style for the underlying PrimeReact Tree (e.g. border/padding). */
    treeStyle?: React.CSSProperties;
    className?: string;
    /** React 19 ref-as-prop — imperative handle for driving the tree. */
    ref?: React.Ref<INavigatorHandle>;
}
export declare function Navigator({ data: staticData, fetch: fetchFn, loadChildren, onSelect, onSelectPath, keyField, parentField, field, title, resultSet, permissionField, startKey, expandedKeys: expandedKeysProp, onToggle, isLeaf, treeStyle, className, ref, }: INavigatorProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Navigator.d.ts.map