import { FormatFn } from '../../lib/format.js';
import { IEnrichedFieldSchema } from '@feasibleone/blong';
import { default as React } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { DropdownOption, Row } from './model.js';
/**
 * The picks a row has made while it is being edited, by row key.
 *
 * PrimeReact keeps an editing row's draft to itself and memoizes the body cell, so
 * re-rendering the table does not reach a cell whose list depends on a sibling — the
 * context does, because a consumer re-renders whatever its memoized ancestors decide.
 * See `rowDrafts` for why the table has to remember the picks at all. `@@D-617`
 */
export declare const RowDraftContext: React.Context<Record<string, Row>>;
export declare function renderBody(widgetType: string, field: string, rowData: Row, cellId: string, options: DropdownOption[], keyFieldName: string, fieldSchema: IEnrichedFieldSchema, onCycle: ((value: unknown) => void) | undefined, format: FormatFn): React.ReactNode;
/**
 * One editing cell, rendered as a consumer of the row's recorded picks.
 *
 * A memoized cell in PrimeReact does not re-render when the table around it does, so
 * the list a cell offers is otherwise fixed at the moment the row entered edit mode —
 * whole, for a row that is still empty. Reading the picks from the context brings the
 * new list to the cell that depends on them. `@@D-617`
 */
export declare function RowCellEditor({ rowData, options, fieldSchema, render, }: {
    rowData: Row;
    options: DropdownOption[];
    fieldSchema: IEnrichedFieldSchema;
    render: (editedRow: Row, options: DropdownOption[]) => React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
/**
 * One cell that edits in place.
 *
 * The value it shows is its own, held here until the commit has round-tripped through
 * the form: an input bound straight to the committed value loses keystrokes whenever a
 * re-render lands between two of them, and what is on screen must never lag the
 * keyboard. Every change still commits as it happens. `@@D-618`
 */
export declare function InlineCellEditor({ rowData, field, options, fieldSchema, render, commit, }: {
    rowData: Row;
    field: string;
    options: DropdownOption[];
    fieldSchema: IEnrichedFieldSchema;
    render: (args: {
        rowData: Row;
        options: DropdownOption[];
        onDraft: (value: unknown) => void;
    }) => React.ReactNode;
    commit: (value: unknown) => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function renderEditor(widgetType: string, fieldSchema: IEnrichedFieldSchema, field: string, rowData: Row, cellId: string, cellName: string, editorCallback: (v: unknown) => void, options: DropdownOption[]): React.ReactNode;
//# sourceMappingURL=cells.d.ts.map