import { Expect, Page } from '@playwright/test';
import { Portal } from '../playwright.js';
import { IRedactPattern } from './redact.js';
/** Minimal test function interface — accepts any Playwright TestType that provides a `portal` fixture. */
export interface ITestFn {
    (title: string, fn: (args: {
        portal: Portal;
    }) => Promise<void>): void;
    describe: (title: string, fn: () => void) => void;
    /** In-body skip: `test.skip(condition, description)` aborts the running test. */
    skip: (condition?: boolean, description?: string) => void;
}
export interface IFieldValue {
    /** Explicit widget type override (normally auto-detected from the DOM). */
    widget?: 'select' | 'dropdown' | 'textarea' | 'number' | 'date' | 'datetime' | 'checkbox' | 'text'
    /** Click-to-cycle cell (`widget.type: 'cycle'`) — `value` is the cell's state label. */
     | 'cycle';
    /** Value to set. */
    value: string | number | boolean;
}
export type FieldMap = Record<string, string | number | boolean | IFieldValue>;
export interface IBrowseModelOptions {
    subject: string;
    object: string;
    /** Optional search text to type before taking the screenshot (filters table rows). */
    searchText?: string;
    /**
     * Volatile substrings to redact (`###`) in every capture this helper takes — a minted
     * id, a wall clock, the generated tail of a name. Redaction keeps the cell, its column
     * and its header in the picture, where masking the cell would hide all three.
     */
    redact?: IRedactPattern[];
}
export interface ICreateAndEditModelOptions {
    subject: string;
    object: string;
    /** Fields to fill when creating a new record. Key is the field name attribute. */
    fields: FieldMap;
    /** Fields to change when editing (subset of fields). */
    editFields?: FieldMap;
    /**
     * Master-detail (IModelSpec.details): for each detail entity the create test
     * switches to its tab (a sibling array property, e.g. `line`), adds rows in
     * the editable table, commits them and captures tab screenshots; the edit
     * test also screenshots the detail tab showing the loaded rows and, when
     * `editFields` is set, toggles cells on the first loaded row to prove that
     * editing details works end-to-end.
     *
     * ```ts
     * details: [
     *     {object: 'line', rows: 2, fields: {
     *         lineName: 'Widget', lineQuantity: 2,
     *     }},
     *     // Pivot detail (rows come from a dropdown, no Add button):
     *     {object: 'role', pivot: true, fields: {granted: true}},
     *     // A tab whose label differs from the detail object name, narrowed to
     *     // one row so the capture does not depend on the rest of the table:
     *     {object: 'matrix', tab: 'Record Access', pivot: true,
     *      filters: {targetName: '(all records)'}, fields: {
     *         find: {widget: 'cycle', value: 'Allow'},
     *     }},
     * ]
     * ```
     */
    details?: Array<{
        /** Detail entity name, e.g. 'line' — matches `IModelSpec.details[].object`. */
        object: string;
        /**
         * Tab-menu label, when the model declares a custom one in
         * `layouts.edit.items` (e.g. the ACL detail `matrix` is labelled
         * "Record Access").  Defaults to the capitalised `object`.
         */
        tab?: string;
        /**
         * Which captures to take of this tab — each defaults to `true`.  Set one
         * to `false` to skip that screenshot (e.g. a read-only tab whose empty
         * state adds nothing).
         */
        screenshots?: {
            /** Create test: the tab as it opens, before anything is added. */
            empty?: boolean;
            /** Create test: the tab after its rows were added or toggled. */
            filled?: boolean;
            /** Edit test: the tab with the loaded record's rows. */
            open?: boolean;
            /** Edit test: the tab after `editFields` were applied to a row. */
            editDirty?: boolean;
        };
        /**
         * Pivot-table detail (the model widget declares `widget.pivot`): the
         * rows come from a named dropdown (there is no Add button) and
         * assignment happens by toggling boolean cells in row-edit mode. The
         * create test toggles `fields` on the first `rows` pivot rows.
         */
        pivot?: boolean;
        /**
         * Whether the detail table offers an Add button for creating rows.
         * Defaults to true for non-pivot tables; set false for view/toggle-only
         * tables (e.g. the model widget has `actions.allowAdd: false`).
         */
        allowAdd?: boolean;
        /** Fields for one detail row (column name → value), e.g. `{lineName, lineQuantity}`. */
        fields?: FieldMap;
        /** Number of rows to add in the create test (default 1). */
        rows?: number;
        /**
         * Fields to toggle on the first loaded row during the edit test — proves
         * that editing a detail (not just creating it) works end-to-end. The
         * change is persisted by the final form save of the edit test.
         */
        editFields?: FieldMap;
        /**
         * Column filters to type before capturing this tab (column name → text,
         * matched case-insensitively on the cell's text).  Use it to pin a table
         * whose row set is not deterministic — e.g. the ACL matrix lists every
         * role and user in the graph, so a capture without a filter drifts with
         * whatever else the run created.  The column must declare `filter: true`
         * in the model, which renders the input as `${object}-filter-${column}`.
         */
        filters?: FieldMap;
    }>;
    /**
     * Optional browse-search text to filter by before opening a row in the
     * generated edit test, so it targets a specific (e.g. test-created) row
     * instead of the first row of the unfiltered table.
     */
    search?: string;
    /**
     * Navigator node (its label) to select in the generated edit test before
     * filtering. Required whenever the browse table declares `widget.master`:
     * such a table shows only the subtree the navigator has selected, the
     * navigator auto-selects the first node it loads (`NavigatorWidget`), and a
     * text search only ever looks inside that subtree — so a row outside it is
     * unreachable until its branch is selected, which is also what a user does.
     */
    navigatorNode?: string;
    /**
     * Whether the create test should also apply `editFields` right after save
     * (in the same tab).  Defaults to `true`.  Set to `false` when the created
     * record must keep its create default so the edit test can change a
     * non-text field (e.g. a date) to a distinct value.
     */
    editInCreate?: boolean;
    /**
     * Skip the create test (it is reported as skipped) and keep only the edit
     * test, which then edits a *seeded* record found via `search`.  Use it for an
     * entity whose records cannot be created through the UI — e.g. one whose
     * record-level guard refuses the caller's own new record.
     */
    skipCreate?: boolean;
    /**
     * Volatile substrings to redact (`###`) in every capture this helper takes — a minted
     * id, a wall clock, the generated tail of a name. Redaction keeps the cell, its column
     * and its header in the picture, where masking the cell would hide all three.
     */
    redact?: IRedactPattern[];
    /**
     * Prefix for every baseline name, defaulting to `\`${subject}-${object}\``.
     * Set it when a second spec drives the same entity (e.g. one covering only a
     * detail tab), so the two do not compete for the same screenshot files.
     */
    baselinePrefix?: string;
}
/** Fill form fields, auto-detecting widget types from the DOM. */
export declare function fillFields(page: Page, fields: FieldMap): Promise<void>;
/**
 * Select a node in a browse page's navigator tree by its label.
 *
 * A table that declares `widget.master` renders only the subtree the navigator
 * has selected, and the navigator selects its first loaded node — the record the
 * page was built around. A spec that means to reach a row outside that branch (a
 * record another spec of the same run created, say) has to select the branch
 * first, exactly as a user would: a text search narrows a table, it never widens
 * one, so the row is unreachable until its branch is the selected one.
 */
export declare function selectNavigatorNode(page: Page, label: string): Promise<void>;
/**
 * A capture that redacts the spec's volatile text first.
 *
 * Redacting immediately before each capture — rather than once at the start of the test —
 * is what lets a spec name text the page rendered since the previous one: a value the save
 * returned, a row the detail tab loaded, a breadcrumb a drill wrote. A spec that names
 * nothing pays nothing, which is why the empty list is not even walked.
 *
 * Exported because it is the whole of this module's redaction behaviour: the file it writes
 * and the DOM it walks are elsewhere, so a unit test with a fake `expect` and a fake `page`
 * can pin that the two are called in that order, and that neither is called for nothing.
 */
export declare function captureWith(expect: Expect, redact?: readonly IRedactPattern[]): (page: Page, name: string) => Promise<void>;
/**
 * Generate a browse-page test for a model.
 * Opens the browse page via the menu and takes a screenshot.
 */
export declare function browseModel(test: ITestFn, expect: Expect, options: IBrowseModelOptions): void;
/**
 * Generate create + edit tests for a model.
 * Creates a new record, verifies it appears, then edits it.
 */
export declare function createAndEditModel(test: ITestFn, expect: Expect, options: ICreateAndEditModelOptions): void;
export interface ICleanupModelOptions {
    subject: string;
    object: string;
    /**
     * Search text that isolates this suite's test-created rows in the browse
     * table (e.g. a description marker like "Playwright" or a status like
     * "suspended").  Must NOT match the seeded rows used by the browse
     * screenshots.
     */
    search: string;
    /** Remove method (semantic triple) whose browse-toolbar button deletes the selected row. */
    removeMethod: string;
    /** Volatile substrings to redact (`###`) in the confirmation capture, as in `browseModel`. */
    redact?: IRedactPattern[];
}
/**
 * Generate a cleanup test that deletes test-created rows left over from
 * previous runs, via the browse page filter, so the DB does not need to be
 * dropped/recreated between runs.
 *
 * Registers a `cleanup {subject} {object}` test that runs first (tests execute
 * in declaration order), so a suite's leftover data is removed before the
 * browse/create/edit tests.  For each matching row it selects it, clicks the
 * Delete toolbar button, captures a screenshot of the confirmation dialog
 * (first delete only — the filtered table is deterministic), and confirms the
 * deletion.
 */
export declare function cleanupModel(test: ITestFn, expect: Expect, options: ICleanupModelOptions): void;
//# sourceMappingURL=model.d.ts.map