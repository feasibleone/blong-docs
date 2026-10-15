import { IToolbarButton } from '../../index.js';
export interface IActionButtonProps extends IToolbarButton {
    /** Ref to the form element to submit before calling */
    formId?: string;
    className?: string;
    /** Called with true when the action starts, false when it finishes */
    onBusyChange?: (busy: boolean) => void;
    /** External disabled override — disables the button regardless of its configured `enabled` */
    disabled?: boolean;
}
export declare function ActionButton({ label, icon, action: actionRef, method, permission, submit: shouldSubmit, confirm: confirmMessage, enabled, visible, menu, params: extraParams, successHint, refresh, formId, className, onBusyChange, disabled: externalDisabled, }: IActionButtonProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=ActionButton.d.ts.map