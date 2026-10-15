import { IWidgetProps } from '@feasibleone/blong';
/**
 * DropdownWidget — wraps PrimeReact Dropdown with cascade-filtering support.
 *
 * When a `parent` field is configured in the schema and the widget is rendered inside
 * a Form, it delegates to `ConnectedDropdown` which subscribes only to that specific
 * parent field via `useWatch`.  This means the dropdown only rerenders when the parent
 * field changes — not on every keystroke in any field.
 *
 * When used standalone (no Form context / no parent), rendering is handled directly.
 */
export declare function DropdownWidget(props: IWidgetProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DropdownWidget.d.ts.map