import { IEnrichedSchema } from '@feasibleone/blong';
import { ReactNode } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { IToolbarButton } from '../../index.js';
export interface IExplorerColumn {
    field: string;
    header?: string;
    sortable?: boolean;
    filterable?: boolean;
    width?: string | number;
    /** Custom body template — action name returning a cell value */
    action?: string;
}
export interface IExplorerProps {
    /** Schema for the entity list items */
    schema?: IEnrichedSchema;
    /** Explicit column definitions; if omitted, derived from schema */
    columns?: IExplorerColumn[];
    /** Action name that loads the list */
    listAction?: string;
    /** Static params for the list action */
    listParams?: Record<string, unknown>;
    /**
     * Property name in the action response that contains the rows array.
     * Defaults to 'items'. Set to '' to use the response directly as an array.
     */
    resultSet?: string;
    /** Selection mode */
    selectionMode?: 'single' | 'multiple' | 'none';
    onSelectionChange?: (value: Record<string, unknown> | Record<string, unknown>[]) => void;
    /** Toolbar buttons (left) */
    toolbar?: IToolbarButton[];
    /** Toolbar buttons (right) */
    toolbarRight?: IToolbarButton[];
    /** Show a Navigator tree on the left */
    navigator?: {
        /** Action name for tree fetch */
        listAction: string;
        /** Field used as node key */
        keyField?: string;
        /** Field used as node label */
        labelField?: string;
        /** Field used as parent key (for building tree) */
        parentField?: string;
    };
    /**
     * Left-panel content — rendered in a side panel next to the table.
     * Typical use: a navigation component or additional filter form.
     */
    children?: ReactNode;
    /**
     * Right-panel renderer — receives the currently-selected row (or null) and
     * the total record count.  When provided a details panel is shown to the
     * right of the table.
     */
    details?: (row: RowData | null, total?: number) => ReactNode;
    /**
     * View layout.
     *  - `table` (default) — standard DataTable
     *  - `grid`            — DataView with cards
     */
    view?: 'table' | 'grid';
    /**
     * Card template for `view='grid'` — renders a single row as a card.
     * When omitted, a default key-value card based on the column definitions
     * is rendered.
     */
    cardTemplate?: (row: RowData) => ReactNode;
    /** Rows per page (default 25) */
    pageSize?: number;
    /** Row size */
    size?: 'small' | 'normal' | 'large';
    /**
     * Name of the primary key field in the row data — used for template
     * resolution (`\${id}` → `row[keyField]`) and for the DataTable `dataKey`.
     * Defaults to `'id'`.
     */
    keyField?: string;
    /** Initial fit-column-widths mode on (scrollable with sticky columns).  Defaults to false. */
    fit?: boolean;
    /**
     * Unique name for this explorer instance — used as the localStorage key for
     * persisting splitter panel sizes (`<name>.splitter`).
     */
    name?: string;
    className?: string;
}
type RowData = Record<string, unknown>;
export declare function Explorer({ schema, columns: columnsProp, listAction, listParams, selectionMode, onSelectionChange, toolbar, toolbarRight, navigator, children, details, view, cardTemplate, resultSet, pageSize: defaultPageSize, keyField, size, fit, name, className, }: IExplorerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Explorer.d.ts.map