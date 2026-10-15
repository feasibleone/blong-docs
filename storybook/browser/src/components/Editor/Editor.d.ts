import { ICardConfig, IEnrichedSchema } from '@feasibleone/blong';
import { LayoutConfig } from '../../hooks/useLayout.js';
import { IToolbarButton } from '../../index.js';
export interface IEditorProps {
    /** Schema for the entity being edited */
    schema?: IEnrichedSchema;
    /** Card configuration */
    cards?: Record<string, ICardConfig>;
    /** Active layout key */
    layout?: string;
    layouts?: Record<string, LayoutConfig>;
    /** Static initial value (skips loadAction when provided) */
    value?: Record<string, unknown>;
    /** Action name for loading the entity; result populates the form */
    loadAction?: string;
    /** Params for the load action */
    loadParams?: Record<string, unknown>;
    /** Action name for saving changed data (edit mode) */
    saveAction?: string;
    /**
     * Action name for creating new records (mode='new').
     * Falls back to `saveAction` when not provided.
     */
    createAction?: string;
    /** Called with the saved value on successful save */
    onSave?: (value: Record<string, unknown>) => void;
    /** Static dropdown data keyed by dropdown name — bypasses dispatch */
    dropdowns?: Record<string, {
        value: unknown;
        label: string;
    }[]>;
    /** Toolbar buttons (left side) */
    toolbar?: IToolbarButton[];
    /** Toolbar buttons (right side) */
    toolbarRight?: IToolbarButton[];
    /**
     * Initial editor mode.
     * - `'new'`  — editable, save creates a new record then switches to `'edit'`
     * - `'view'` — read-only; an Edit button appears when `editable` is true
     * - `'edit'` — editable, save updates the existing record
     */
    mode?: EditorMode;
    /**
     * @deprecated Use `mode` instead.
     * When `true`, equivalent to `mode="edit"`; when `false`, equivalent to `mode="view"`.
     */
    editMode?: boolean;
    /** Allow user to toggle from view to edit mode */
    editable?: boolean;
    /** Show design mode toggle cog button on the toolbar right side */
    designable?: boolean;
    /** Start in design mode (requires designable=true) */
    initialDesignMode?: boolean;
    /** Permission check passed to the form; cards with a permission key are only shown if this returns true */
    checkPermission?: (permission: string) => boolean;
    /**
     * Named method handlers for field-change dispatch.
     * Each receives `{field, value, form}` and returns a Promise.
     * Returning `false` aborts the field change.
     */
    methods?: Record<string, (params: unknown) => Promise<unknown>>;
    /**
     * Default method name to call on every field change (can be overridden per-field via `widget.onChange`).
     */
    onFieldChange?: string;
    /**
     * Custom editor components, keyed by the widget name used in card `widgets` arrays.
     * Each component receives `Input`, `Label`, and `ErrorLabel` factory components and
     * must declare a static `properties` array listing the schema fields it covers.
     */
    editors?: Record<string, import('../Form/FormContext.js').ICustomEditor>;
    className?: string;
    /**
     * Per-mode tab titles, keyed by `EditorMode` (`'new'`, `'edit'`, `'view'`).
     * Overrides the default title derived from `resolveTabTitle(mode, resolvedLayout)`.
     *
     * Using a plain object (instead of a function) keeps the value JSON-serializable so
     * it can be stored in model specs and user customisations without embedding JS code,
     * and each string is a discrete unit that can be looked up in a translation dictionary.
     *
     * Example: `title: {new: 'Create Coral', edit: 'Edit Coral'}`
     *
     * A bare string may also be passed when the title is the same across all modes.
     */
    title?: string | Record<string, string>;
    /**
     * Portal tab ID. When provided, the Editor keeps the tab title in sync with the
     * current mode via `setTabTitle`. Injected automatically by the Portal when it
     * renders tab components (`<tab.component tabId={tab.id} {...tab.params} />`).
     */
    tabId?: string;
    /**
     * TanStack Query namespace prefix for cache invalidation.
     * When set, clicking `__refresh__` in the toolbar invalidates all queries
     * whose key starts with `{refreshNamespace}.`. Auto-set by `subjectObjectBrowse`
     * to `{subject}.{object}` (e.g. `'marine.coral'`).
     */
    refreshNamespace?: string;
    /**
     * Action name to call when the "Run Report" button is clicked.
     * When set, the Editor enters "report" mode:
     * - No Save / Reset buttons; only a "Run Report" submit button.
     * - On form submit the form values are passed as `reportParams` to the table widget
     *   (via FormStateContext) so the table re-fetches with those params.
     * - The form is always editable (params input).
     */
    queryAction?: string;
}
/** Editor interaction mode. */
export type EditorMode = 'new' | 'view' | 'edit';
/**
 * Derive a display title from the current mode and resolved layout key.
 *
 * Splits the layout key at capital-letter boundaries and capitalises each word.
 * When the layout starts with the current mode the mode word is used directly;
 * otherwise only the capitalized mode is returned.
 *
 * Examples:
 *   ('edit', 'editSplit')       → 'Edit Split'
 *   ('edit', 'editThumbIndex')  → 'Edit Thumb Index'
 *   ('new',  'edit')            → 'New'   (mode != layout prefix → no suffix)
 *   ('view', 'viewDefault')     → 'View'  ('default' suffix filtered out)
 */
export declare function resolveTabTitle(mode: EditorMode, resolvedLayout: string): string;
export declare function Editor({ schema, cards, layout, layouts, value: staticValue, loadAction, loadParams, saveAction, createAction, onSave, dropdowns, toolbar, toolbarRight, mode: initialModeProp, editMode: initialEditMode, editable, designable, initialDesignMode, checkPermission, methods, onFieldChange, editors, className, title: titleProp, tabId, refreshNamespace, queryAction, }: IEditorProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Editor.d.ts.map