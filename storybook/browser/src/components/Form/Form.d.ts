import { ICardConfig, IEnrichedSchema } from '@feasibleone/blong';
import { default as React } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { FlatLayoutConfig, LayoutConfig } from '../../hooks/useLayout.js';
import { ITableSelection } from './FormContext.js';
export interface IFormProps {
    /** JSON-enriched schema describing fields */
    schema?: IEnrichedSchema;
    /** Card group definitions — each card lists visible fields */
    cards?: Record<string, ICardConfig>;
    /** Active layout key */
    layout?: string;
    /** Layout configuration map — layout key → list of deck rows */
    layouts?: Record<string, LayoutConfig>;
    /** Current form value */
    value?: Record<string, unknown>;
    /** Fired on every valid field change */
    onChange?: (value: Record<string, unknown>) => void;
    /** Fired when the form is submitted (after validation) */
    onSubmit?: (value: Record<string, unknown>) => void | Promise<void>;
    /** Render fields read-only (no inputs) */
    readOnly?: boolean;
    /** Show loading skeleton */
    loading?: boolean;
    /** External validation errors keyed by field name */
    serverErrors?: Record<string, string>;
    /** Form id for external submit buttons */
    id?: string;
    /**
     * Permission check callback. When provided, cards with a `permission` key are only
     * rendered if this function returns true. Cards without a permission key always render.
     * When omitted, all cards with a permission key are hidden (safe default).
     */
    checkPermission?: (permission: string) => boolean;
    /**
     * Static dropdown data. When provided, widgets whose `schema.widget.dropdown` key matches
     * an entry here will use the static options without dispatching portalDropdownList.
     */
    dropdowns?: Record<string, {
        value: unknown;
        label: string;
    }[]>;
    /**
     * Called whenever a table widget's single selection changes.
     * Receives the field name and the new selection (or null when deselected).
     * The Editor uses this to track the current row for toolbar template resolution.
     */
    onTableSelect?: (fieldName: string, selection: ITableSelection | null) => void;
    /**
     * Called in design mode when the user drags a card to a new position.
     * Receives the layout key and the updated FlatLayoutConfig so the caller can persist the change.
     */
    onLayoutChange?: (layoutKey: string, newLayout: FlatLayoutConfig) => void;
    /**
     * Called whenever the form's dirty state changes (false → true or true → false).
     * Backed by react-hook-form's `formState.isDirty` so it fires only on transitions,
     * not on every keystroke.
     */
    onDirtyChange?: (isDirty: boolean) => void;
    /**
     * Increment this counter to imperatively reset the form to its current `value`.
     * Useful when the parent needs to discard edits without changing the `value` prop reference
     * (e.g. the Editor's Reset button when no save has occurred and `value` hasn't changed).
     * The initial value of 0 is ignored — only increments trigger a reset.
     */
    resetKey?: number;
    /**
     * Optional side panel rendered alongside the form (e.g. the design inspector).
     * Rendered inside FormContext.Provider but outside the <form> element so its
     * inputs do not participate in form submission.
     */
    rightPanel?: React.ReactNode;
    /**
     * Named method handlers available to field widgets via `widget.onChange` or `onFieldChange`.
     * Each method receives `{field, value, form}` and returns a Promise.
     * Returning `false` from a method aborts the field change.
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
    editors?: Record<string, import('./FormContext.js').ICustomEditor>;
    /**
     * Current editor mode passed down from the Editor for display in the Form Inspector.
     * Does not affect form behaviour — purely informational.
     */
    editorMode?: string;
    /**
     * Resolved layout key passed down from the Editor for display in the Form Inspector.
     * Does not affect form behaviour — purely informational.
     */
    editorLayout?: string;
    /**
     * When true, signals that the Editor is in "report" mode.
     * Table widgets will not fetch until `reportParams` is non-undefined.
     */
    reportMode?: boolean;
    /**
     * Filter params submitted by the report's "Run Report" button.
     * Set after the first run; undefined means no report has been run yet.
     */
    reportParams?: Record<string, unknown>;
}
export declare function Form({ schema, cards: cardsConfig, layout, layouts, value, onChange, onSubmit, readOnly, loading, serverErrors, id, checkPermission, dropdowns, onTableSelect, onLayoutChange, onDirtyChange, resetKey, rightPanel, methods, onFieldChange, editors, editorMode, editorLayout, reportMode, reportParams, }: IFormProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Form.d.ts.map