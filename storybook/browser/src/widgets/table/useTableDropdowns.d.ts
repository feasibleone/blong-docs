import { Row } from './model.js';
export interface ITableDropdownsOptions {
    /** The columns the table renders, and the schema they came from. */
    columns: string[];
    properties?: Record<string, {
        widget?: {
            dropdown?: string;
            body?: string;
        };
    }>;
    /** The options the caller already has, by dropdown name. */
    dropdowns?: Record<string, unknown[]>;
    /** The dropdown naming a pivot's slots, when the table is a pivot. */
    pivotDropdown?: string;
    /** Loads the named lists — `handler.portalDropdownList`. */
    load?: (names: string[]) => Promise<Record<string, unknown>>;
}
export declare function useTableDropdowns({ columns, properties, dropdowns, pivotDropdown, load, }: ITableDropdownsOptions): {
    resolvedDropdowns: {
        [x: string]: unknown[];
    };
    signature: string;
    labelFields: string[];
    pivotOptions: Row[] | undefined;
};
//# sourceMappingURL=useTableDropdowns.d.ts.map