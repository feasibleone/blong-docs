import { ICycleCellState, IEnrichedFieldSchema, IWidgetProps } from '@feasibleone/blong';
export type Row = Record<string, unknown>;
export type DropdownOption = {
    value: unknown;
    label: string;
    [k: string]: unknown;
};
/** The key a form row carries so an edit lands on the row it was made on. */
export declare const KEY = "__key";
/**
 * The widget type a column renders as. A declared `widget.type` wins; otherwise the
 * schema is read for the shape the column must show.
 */
export declare function resolveWidgetType(schema: IEnrichedFieldSchema): string;
/**
 * Named state sets for a `cycle` cell — the boolean cases a pivot toggles.
 * Clicking the cell advances to the next state, so the column needs no
 * row-edit mode.  The empty state renders as a blank cell and is named
 * `Not set` (also the cell's `title`, which tests read).
 */
export declare const CYCLE_PRESETS: Record<string, ICycleCellState[]>;
export declare function resolveCycleStates(schema: IEnrichedFieldSchema): ICycleCellState[];
export declare function isCycleCell(schema: IEnrichedFieldSchema): boolean;
/** Cycle values compare loosely, so `true`/`1` and `null`/`undefined` are one state. */
export declare function sameCycleValue(a: unknown, b: unknown): boolean;
export declare function currentCycleState(states: ICycleCellState[], value: unknown): ICycleCellState | undefined;
/** An unset cell advances to the first state of the cycle. */
export declare function nextCycleState(states: ICycleCellState[], value: unknown): ICycleCellState;
export declare function getColumnOptions(schema: IEnrichedFieldSchema, dropdowns?: Record<string, unknown[]>): DropdownOption[];
/**
 * Narrow a pick-list's options to the row they are offered for.
 *
 * `optionsFilter: {optionProperty: rowField}` is the explicit form, and several
 * pairs are a conjunction. `parent` is the shorthand for the common case, where the
 * option carries the key under the field's own name — or under `parent`, which is
 * how the form-level cascade already works, so both conventions are honoured. A row
 * field with no value yet leaves the list whole: the first pick must not be blocked
 * by the very value it is about to set. @@D-615
 */
export declare function optionsForRow(options: DropdownOption[], schema: IEnrichedFieldSchema, row: Row | undefined): DropdownOption[];
/**
 * The fields a pick writes beside its key: the label the column shows (`widget.body`)
 * and whatever `widget.lookup` copies from the option — so a saved row never carries
 * a label that disagrees with its key. `@@D-614`
 */
export declare function pickPatch(fieldSchema: IEnrichedFieldSchema, options: DropdownOption[], picked: unknown): Row;
/** The columns a table renders, from `widget.columns` or from the item schema. */
export declare function resolveColumns(widget: IWidgetProps['schema']['widget'], items: IWidgetProps['schema']['items']): {
    field: string;
    header: string;
    filter?: boolean;
    sortable?: boolean;
    fieldSchema: IEnrichedFieldSchema;
}[];
/** An empty row for the columns a table declares, seeded with its own defaults. */
export declare function newRow(colFields: string[], properties?: Record<string, IEnrichedFieldSchema>): Row;
export declare function resolveParentField(parent?: string): string | undefined;
/**
 * Extract the stable key value from a parent selection row.
 * Uses `keyFieldName` as the primary key field.
 * `keyFieldName` defaults to 'id' in the widget config, so this value
 * is always valid when the widget is properly configured.
 */
export declare function getParentKeyValue(parentRow: Record<string, unknown> | null, keyFieldName: string): unknown;
//# sourceMappingURL=model.d.ts.map