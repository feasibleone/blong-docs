import { Row } from './model.js';
export interface ITableListOptions {
    /** The handler that reads a page, e.g. `portal.bundle.find`. Empty when not a list. */
    listAction: string;
    /** Params the widget declares for its own list read. */
    listParams?: Record<string, unknown>;
    /** The result key holding the rows (default `items`). */
    resultSet: string;
    /** The params the report form submitted, when the widget runs as a report. */
    reportParams?: Record<string, unknown>;
    reportMode: boolean;
    /** The label columns the read should project. */
    labelFields: string[];
    /** Master-detail keys the server narrows by, when the table is cascaded. */
    cascadeFilter?: Record<string, unknown>;
    pageSize: number;
    handler: Record<string, (params: Record<string, unknown>, meta: Record<string, unknown>) => Promise<unknown>>;
}
export declare function useTableList({ listAction, listParams, resultSet, reportParams, reportMode, labelFields, cascadeFilter, pageSize, handler, }: ITableListOptions): {
    isListMode: boolean;
    rows: Row[];
    total: number | undefined;
    hasMore: boolean;
    loading: boolean;
    params: {
        paging: {
            pageSize: number;
            pageNumber: number;
            /**
             * Ask the server for the size of the whole result, not just the
             * page. The paginator's arrows need it: without a total the
             * widget only knows the rows it was handed, so every page looked
             * like the last one and the forward arrows stayed disabled.
             * A read that ignores the flag answers rows alone, which the
             * paginator still handles by asking whether the page is full.
             */
            count: boolean;
        };
        orderBy?: {
            field: string;
            dir: string;
        }[] | undefined;
        search?: string | undefined;
        filterBy?: {
            [k: string]: string;
        } | undefined;
        labels?: string[] | undefined;
    };
    searchInput: string;
    onSearchChange: (value: string) => void;
    columnFilterInputs: Record<string, string>;
    committedFilters: Record<string, string>;
    onColumnFilterChange: (field: string, value: string) => void;
    sortField: string | null;
    sortOrder: 1 | -1;
    onSortChange: (field: string | null, order: 1 | -1) => void;
    first: number;
    setFirst: import('../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react').Dispatch<import('../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react').SetStateAction<number>>;
    /** Back to the first page — a new parent row, or a new report run. */
    resetPage: () => void;
    pageSize: number;
    setPageSize: import('../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react').Dispatch<import('../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react').SetStateAction<number>>;
};
//# sourceMappingURL=useTableList.d.ts.map