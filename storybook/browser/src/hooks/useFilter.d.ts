export interface IFilterState<T = Record<string, unknown>> {
    filter: T;
    sort: {
        field: string;
        order: 1 | -1;
    } | null;
    page: number;
    pageSize: number;
}
export interface IUseFilterResult<T = Record<string, unknown>> {
    filterState: IFilterState<T>;
    setFilter: (filter: Partial<T>) => void;
    setSort: (sort: IFilterState['sort']) => void;
    setPage: (page: number) => void;
    setPageSize: (size: number) => void;
    resetFilter: () => void;
    /** Build params object for a fetch call */
    buildParams: () => IFilterState<T>;
}
export declare function useFilter<T extends Record<string, unknown>>(initialFilter?: Partial<T>, initialPageSize?: number): IUseFilterResult<T>;
//# sourceMappingURL=useFilter.d.ts.map