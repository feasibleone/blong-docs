import { ButtonProps } from 'primereact/button';
import { InputTextProps } from 'primereact/inputtext';
import { Menu as PrimeMenu, MenuProps } from 'primereact/menu';
import { OverlayPanel as PrimeOverlayPanel, OverlayPanelProps } from 'primereact/overlaypanel';
import { TabPanelProps as PrimeTabPanelProps, TabViewProps } from 'primereact/tabview';
import { Toast as PrimeToast, ToastProps } from 'primereact/toast';
import { default as React } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { AvatarProps } from 'primereact/avatar';
import { ConfirmDialogProps } from 'primereact/confirmdialog';
import { ConfirmPopupProps } from 'primereact/confirmpopup';
import { DialogProps } from 'primereact/dialog';
import { DropdownProps } from 'primereact/dropdown';
import { MenubarProps } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { MessageProps } from 'primereact/message';
import { PasswordProps } from 'primereact/password';
import { ProgressSpinnerProps } from 'primereact/progressspinner';
export { addLocale, locale, PrimeReactProvider } from 'primereact/api';
/** The prop types of the components above, re-exported so a shell component can annotate its
 *  own props without reaching past this module into `primereact/*`. */
export type { AvatarProps, ButtonProps, ConfirmDialogProps, ConfirmPopupProps, DialogProps, DropdownProps, InputTextProps, MenubarProps, MenuItem, MenuProps, MessageProps, OverlayPanelProps, PasswordProps, ProgressSpinnerProps, TabViewProps, ToastProps, };
/** TabPanelProps extended with the `__TYPE` discriminator PrimeReact TabView uses to identify
 *  panel children. React 19 removed defaultProps support, so callers pass `__TYPE="TabPanel"`
 *  explicitly; this type makes that prop valid. */
export type TabPanelProps = PrimeTabPanelProps & {
    __TYPE?: string;
};
export declare function Avatar({ shape, size, imageAlt, ...props }: AvatarProps): import("react/jsx-runtime").JSX.Element;
export declare function Button({ 'aria-label': ariaLabel, label, iconPos, feedbackName, ...props }: ButtonProps & {
    feedbackName?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function ConfirmDialog(props: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
export declare function ConfirmPopup({ dismissable, ...props }: ConfirmPopupProps): import("react/jsx-runtime").JSX.Element;
export declare function Dialog({ modal, position, draggable, resizable, closable, closeOnEscape, focusOnShow, showHeader, keepInViewport, minX, minY, baseZIndex, ...props }: DialogProps): import("react/jsx-runtime").JSX.Element;
export declare function Dropdown({ dropdownIcon, scrollHeight, filterMatchMode, placeholder, ...props }: DropdownProps): import("react/jsx-runtime").JSX.Element;
export declare function InputText({ placeholder, ...props }: InputTextProps): import("react/jsx-runtime").JSX.Element;
export declare function Menubar(props: MenubarProps): import("react/jsx-runtime").JSX.Element;
export type Menu = PrimeMenu;
export declare function Menu({ ref, popup, popupAlignment, tabIndex, autoZIndex, baseZIndex, ...props }: MenuProps & {
    ref?: React.Ref<PrimeMenu>;
}): import("react/jsx-runtime").JSX.Element;
export declare function Message({ severity, ...props }: MessageProps): import("react/jsx-runtime").JSX.Element;
export type OverlayPanel = PrimeOverlayPanel;
export declare function OverlayPanel({ ref, dismissable, ...props }: OverlayPanelProps & {
    ref?: React.Ref<PrimeOverlayPanel>;
}): import("react/jsx-runtime").JSX.Element;
export declare function Password({ feedback, mediumRegex, strongRegex, ...props }: PasswordProps): import("react/jsx-runtime").JSX.Element;
export declare function ProgressSpinner({ strokeWidth, fill, animationDuration, ...props }: ProgressSpinnerProps): import("react/jsx-runtime").JSX.Element;
export declare function TabPanel({ __TYPE: _type, ...props }: TabPanelProps): import("react/jsx-runtime").JSX.Element;
export declare function TabView({ activeIndex, renderActiveOnly, ...props }: TabViewProps): import("react/jsx-runtime").JSX.Element;
export type Toast = PrimeToast;
export declare function Toast({ ref, position, baseZIndex, appendTo, ...props }: ToastProps & {
    ref?: React.Ref<PrimeToast>;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=shell.d.ts.map