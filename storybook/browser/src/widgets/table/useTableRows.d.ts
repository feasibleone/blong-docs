import { Row } from './model.js';
export interface ITableRowsOptions {
    /** The form value, for a detail table. */
    value: unknown;
    /** The page the server sent, for a list table. */
    listRows: Row[];
    isListMode: boolean;
    pivotCfg?: {
        examples?: Row[];
        dropdown?: string;
        join?: Record<string, string>;
        defaults?: Row;
    };
    /** The slots a pivot overlays stored rows onto, when they are known. */
    pivotBaseRows?: Row[];
    /** The field a cascaded table is narrowed by, and the keys it maps to the parent. */
    parentFieldName?: string;
    masterMapping?: Record<string, string>;
    parentSelection?: {
        row: Record<string, unknown>;
        index: number;
    } | null;
    /** The columns that carry a filter, and the ones whose filter compares a key. */
    filterFields: string[];
    pickFields: Set<string>;
    /** What the filter inputs currently hold. */
    committedFilters: Record<string, string>;
}
export declare function useTableRows({ value, listRows, isListMode, pivotCfg, pivotBaseRows, parentFieldName, masterMapping, parentSelection, filterFields, pickFields, committedFilters, }: ITableRowsOptions): {
    /** The rows as the form holds them, each carrying the key an edit lands on. */
    rows: Row[];
    /** The rows the reader can see, before the view sort. */
    visibleRows: Row[];
    /** What the table renders: narrowed by the cascade and the filters, then sorted. */
    sortedRows: Row[];
    sortField: string | null;
    sortOrder: 1 | -1;
    /** Change the view's order; the stored order is untouched. */
    onSortChange: (field: string | null, order: 1 | -1) => void;
    /** The pivot's data fields, which a cell must not edit directly. */
    pivotJoinDataFields: Set<string>;
};
//# sourceMappingURL=useTableRows.d.ts.map