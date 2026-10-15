import { IEnrichedSchema } from '@feasibleone/blong';
import { default as React } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { Control, UseFormGetValues, UseFormSetValue } from 'react-hook-form';
import { FlatLayoutConfig, ILayoutResult, IResolvedCard } from '../../hooks/useLayout.js';
/**
 * Props injected into every custom editor component.
 * `Input` renders the widget for a named schema field.
 * `Label` renders the field's label.
 * `ErrorLabel` renders the field's validation error.
 */
export interface ICustomEditorProps {
    Input: React.ComponentType<{
        name: string;
        className?: string;
        fieldClass?: string;
    }>;
    Label: React.ComponentType<{
        name?: string;
        className?: string;
        label?: string;
    }>;
    ErrorLabel: React.ComponentType<{
        name?: string;
        className?: string;
    }>;
}
/**
 * A custom editor component.
 * Must carry a static `properties` array listing the schema field names it covers.
 * These are used to correctly track visible fields and skip schema filtering.
 */
export type ICustomEditor = React.ComponentType<ICustomEditorProps> & {
    properties: string[];
};
export interface ITableSelection {
    row: Record<string, unknown>;
    index: number;
}
export interface IFormContext {
    schema: IEnrichedSchema | undefined;
    /** Resolved card map produced by useLayout */
    cards: Record<string, IResolvedCard>;
    control: Control<Record<string, unknown>>;
    dropdowns: Record<string, {
        value: unknown;
        label: string;
    }[]> | undefined;
    onChange: ((value: Record<string, unknown>) => void) | undefined;
    handleTableSelect: (fieldName: string, selection: ITableSelection | null) => void;
    setValue: UseFormSetValue<Record<string, unknown>>;
    /**
     * Non-subscribing snapshot of the current form values. Stable reference from
     * react-hook-form — calling it always returns the latest values without causing
     * the caller to subscribe to future value changes.
     */
    getValues: UseFormGetValues<Record<string, unknown>>;
    checkPermission: ((permission: string) => boolean) | undefined;
    /**
     * Named method handlers for field-change dispatch and other programmatic actions.
     * Keyed by method name; each receives a params object and returns a Promise.
     */
    methods?: Record<string, (params: unknown) => Promise<unknown>>;
    /**
     * Default method name to call on every field change.
     * Individual fields can override this with `widget.onChange`.
     */
    onFieldChange?: string;
    /** Custom editor components, keyed by widget name used in card `widgets` arrays */
    editors?: Record<string, ICustomEditor>;
    layoutResult: ILayoutResult;
    /** Active layout key */
    layout: string;
    /** Form element id — needed by Steps submit button */
    formId: string;
    /** Called when the user reorders cards in design mode */
    onLayoutChange?: (layoutKey: string, newLayout: FlatLayoutConfig) => void;
}
export declare const FormContext: React.Context<IFormContext | null>;
/**
 * Returns the stable form context, or null when called outside a Form.
 * Deck and Card use the null return to decide whether to operate in
 * context-driven mode or children-passthrough mode.
 */
export declare function useBlongForm(): IFormContext | null;
export interface IFormStateContext {
    tableSelections: Record<string, ITableSelection | null>;
    readOnly: boolean;
    loading: boolean;
    /** Current editor mode — forwarded from the parent Editor for debug display */
    editorMode?: string;
    /** Effective resolved layout key — forwarded from the parent Editor for debug display */
    editorLayout?: string;
    /**
     * When true, the Editor is in "report" mode (queryAction is set).
     * Table widgets with `listAction` will not fetch until `reportParams` is defined.
     */
    reportMode?: boolean;
    /**
     * Filter params submitted by the report's "Run Report" button.
     * Set to a plain object when the user runs the report, undefined before the first run.
     * Table widgets merge these into their list query params (before paging/sort/filter).
     */
    reportParams?: Record<string, unknown>;
}
export declare const FormStateContext: React.Context<IFormStateContext | null>;
/**
 * Returns the slow-changing form state context (tableSelections, readOnly, loading).
 * Components that only need these values will not rerender during typing.
 */
export declare function useBlongFormState(): IFormStateContext | null;
//# sourceMappingURL=FormContext.d.ts.map