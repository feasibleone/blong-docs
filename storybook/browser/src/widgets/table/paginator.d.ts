export declare function TablePaginator({ first, pageSize, total, hasMore, onFirstChange, onPageSizeChange, }: {
    /** The index of the first row on screen. */
    first: number;
    pageSize: number;
    /** How many rows the whole result holds, when the read reported one. */
    total?: number;
    /** Whether a further page exists, when the total is unknown. */
    hasMore: boolean;
    onFirstChange: (first: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=paginator.d.ts.map