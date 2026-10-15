import { ButtonProps } from 'primereact/button';
import { DataTable as PrimeDataTable } from 'primereact/datatable';
import { FileUpload as PrimeFileUpload, FileUploadProps } from 'primereact/fileupload';
import { Menu as PrimeMenu, MenuProps } from 'primereact/menu';
import { OverlayPanel as PrimeOverlayPanel, OverlayPanelProps } from 'primereact/overlaypanel';
import { Toast as PrimeToast, ToastProps } from 'primereact/toast';
import { default as React } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { AutoCompleteProps } from 'primereact/autocomplete';
import { AvatarProps } from 'primereact/avatar';
import { BreadCrumbProps } from 'primereact/breadcrumb';
import { CalendarProps } from 'primereact/calendar';
import { CardProps } from 'primereact/card';
import { CheckboxProps } from 'primereact/checkbox';
import { ChipsProps } from 'primereact/chips';
import { ColumnProps } from 'primereact/column';
import { ConfirmDialogProps } from 'primereact/confirmdialog';
import { ConfirmPopupProps } from 'primereact/confirmpopup';
import { DataViewProps } from 'primereact/dataview';
import { DialogProps } from 'primereact/dialog';
import { DropdownProps } from 'primereact/dropdown';
import { ImageProps } from 'primereact/image';
import { InputMaskProps } from 'primereact/inputmask';
import { InputNumberProps } from 'primereact/inputnumber';
import { InputTextProps } from 'primereact/inputtext';
import { InputTextareaProps } from 'primereact/inputtextarea';
import { MenubarProps } from 'primereact/menubar';
import { MessageProps } from 'primereact/message';
import { MultiSelectProps } from 'primereact/multiselect';
import { PanelProps } from 'primereact/panel';
import { PanelMenuProps } from 'primereact/panelmenu';
import { PasswordProps } from 'primereact/password';
import { ProgressBarProps } from 'primereact/progressbar';
import { ProgressSpinnerProps } from 'primereact/progressspinner';
import { SelectButtonProps } from 'primereact/selectbutton';
import { SkeletonProps } from 'primereact/skeleton';
import { SplitButtonProps } from 'primereact/splitbutton';
import { SplitterProps } from 'primereact/splitter';
import { StepsProps } from 'primereact/steps';
import { TabMenuProps } from 'primereact/tabmenu';
import { TabViewProps } from 'primereact/tabview';
import { ToolbarProps } from 'primereact/toolbar';
import { TreeProps } from 'primereact/tree';
import { TreeSelectProps } from 'primereact/treeselect';
import { TreeTableProps } from 'primereact/treetable';
/**
 * PrimeReact intermediary components for blong-browser.
 *
 * React 19 removed support for `defaultProps` on function components. This file
 * wraps every PrimeReact component used in blong-browser and hard-codes the
 * non-null / non-undefined default prop values that PrimeReact previously relied
 * on `defaultProps` to supply.
 *
 * Consumers should import from this module instead of directly from 'primereact/*'.
 * Functions and types that are not affected (e.g. `addLocale`, `locale`, `confirmDialog`,
 * `SplitterPanel`, `TabPanel`) are re-exported as-is.
 */
export { addLocale, locale, PrimeReactProvider } from 'primereact/api';
export { confirmDialog } from 'primereact/confirmdialog';
export { confirmPopup } from 'primereact/confirmpopup';
export { SplitterPanel } from 'primereact/splitter';
export type { AutoCompleteProps } from 'primereact/autocomplete';
export type { AvatarProps } from 'primereact/avatar';
export type { BreadCrumbProps } from 'primereact/breadcrumb';
export type { ButtonProps } from 'primereact/button';
export type { CalendarProps } from 'primereact/calendar';
export type { CardProps } from 'primereact/card';
export type { CheckboxProps } from 'primereact/checkbox';
export type { ChipsProps } from 'primereact/chips';
export type { ColumnProps } from 'primereact/column';
export type { ConfirmDialogProps } from 'primereact/confirmdialog';
export type { ConfirmPopupProps } from 'primereact/confirmpopup';
export type { DataTableProps } from 'primereact/datatable';
export type { DataViewProps } from 'primereact/dataview';
export type { DialogProps } from 'primereact/dialog';
export type { DropdownProps } from 'primereact/dropdown';
export type { FileUploadProps } from 'primereact/fileupload';
export type { ImageProps } from 'primereact/image';
export type { InputMaskProps } from 'primereact/inputmask';
export type { InputNumberProps } from 'primereact/inputnumber';
export type { InputTextProps } from 'primereact/inputtext';
export type { InputTextareaProps } from 'primereact/inputtextarea';
export type { MenubarProps } from 'primereact/menubar';
export type { MenuItem } from 'primereact/menuitem';
export type { MenuProps } from 'primereact/menu';
export type { MessageProps } from 'primereact/message';
export type { MultiSelectProps } from 'primereact/multiselect';
export type { OverlayPanelProps } from 'primereact/overlaypanel';
export type { PanelProps } from 'primereact/panel';
export type { PanelMenuProps } from 'primereact/panelmenu';
export type { PasswordProps } from 'primereact/password';
export type { ProgressBarProps } from 'primereact/progressbar';
export type { ProgressSpinnerProps } from 'primereact/progressspinner';
export type { SelectButtonProps } from 'primereact/selectbutton';
export type { SkeletonProps } from 'primereact/skeleton';
export type { SplitButtonProps } from 'primereact/splitbutton';
export type { SplitterProps } from 'primereact/splitter';
export type { StepsProps } from 'primereact/steps';
export type { TabMenuProps } from 'primereact/tabmenu';
export type { TabViewProps } from 'primereact/tabview';
export type { ToastProps } from 'primereact/toast';
export type { ToolbarProps } from 'primereact/toolbar';
export type { TreeProps } from 'primereact/tree';
export type { TreeNode } from 'primereact/treenode';
export type { TreeSelectProps } from 'primereact/treeselect';
export type { TreeTableProps } from 'primereact/treetable';
/** Compatibility alias: renamed/split in PrimeReact 10 — use onSelectionChange event directly for new code. */
export type DataTableSelectionChangeParams = {
    value: any;
    originalEvent?: any;
};
/** Sort event type extracted from DataTableProps (DataTableStateEvent is not exported in v10). */
export type DataTableSortParams = Parameters<NonNullable<import('primereact/datatable').DataTableProps<Record<string, any>[]>['onSort']>>[0];
/** TabPanelProps extended with the `__TYPE` discriminator PrimeReact TabView uses to identify
 *  panel children. React 19 removed defaultProps support, so callers pass `__TYPE="TabPanel"`
 *  explicitly; this type makes that prop valid. */
export type TabPanelProps = import('primereact/tabview').TabPanelProps & {
    __TYPE?: string;
};
export declare function Avatar({ shape, size, imageAlt, ...props }: AvatarProps): import("react/jsx-runtime").JSX.Element;
export declare function AutoComplete({ delay, minLength, scrollHeight, dropdownIcon, removeTokenIcon, ...props }: AutoCompleteProps): import("react/jsx-runtime").JSX.Element;
export declare function BreadCrumb(props: BreadCrumbProps): import("react/jsx-runtime").JSX.Element;
/**
 * Button — wraps PrimeReact Button with automatic label translation via the
 * `Text` component and a default `iconPos='left'`.
 */
export declare function Button({ 'aria-label': ariaLabel, label, iconPos, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export declare function Calendar({ showOnFocus, selectionMode, iconPos, hourFormat, icon, numberOfMonths, stepHour, stepMinute, stepSecond, stepMillisec, shortYearCutoff, view, clearButtonClassName, todayButtonClassName, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
export declare function Card(props: CardProps): import("react/jsx-runtime").JSX.Element;
export declare function Checkbox({ trueValue, falseValue, icon, ...props }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export declare function Chips({ removable, allowDuplicate, ...props }: ChipsProps): import("react/jsx-runtime").JSX.Element;
export declare function Column({ showFilterMenu, showFilterMatchModes, showFilterOperator, showAddButton, showApplyButton, showClearButton, showFilterMenuOptions, dataType, filterType, maxConstraints, rowReorderIcon, alignFrozen, cellEditValidatorEvent, exportable, reorderable, resizeable, ...props }: ColumnProps): import("react/jsx-runtime").JSX.Element;
export declare function ConfirmDialog(props: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
export declare function ConfirmPopup({ dismissable, ...props }: ConfirmPopupProps): import("react/jsx-runtime").JSX.Element;
export type DataTable = PrimeDataTable<any>;
export declare function DataTable({ ref, first, size, editMode, sortMode, columnResizeMode, defaultSortOrder, filterDelay, filterDisplay, pageLinkSize, csvSeparator, exportFilename, breakpoint, paginatorPosition, paginatorTemplate, currentPageReportTemplate, loadingIcon, expandedRowIcon, collapsedRowIcon, tabIndex, stateStorage, compareSelectionBy, ...props }: {
    ref?: React.Ref<PrimeDataTable<any>>;
    [key: string]: any;
}): import("react/jsx-runtime").JSX.Element;
export declare function DataView({ layout, first, paginatorPosition, pageLinkSize, loadingIcon, paginatorTemplate, currentPageReportTemplate, ...props }: DataViewProps): import("react/jsx-runtime").JSX.Element;
export declare function Dialog({ modal, position, draggable, resizable, closable, closeOnEscape, focusOnShow, showHeader, keepInViewport, minX, minY, baseZIndex, ...props }: DialogProps): import("react/jsx-runtime").JSX.Element;
export declare function Dropdown({ dropdownIcon, scrollHeight, filterMatchMode, ...props }: DropdownProps): import("react/jsx-runtime").JSX.Element;
export type FileUpload = PrimeFileUpload;
export declare function FileUpload({ ref, mode, previewWidth, ...props }: FileUploadProps & {
    ref?: React.Ref<PrimeFileUpload>;
}): import("react/jsx-runtime").JSX.Element;
export declare function Image(props: ImageProps): import("react/jsx-runtime").JSX.Element;
export declare function InputMask({ type, slotChar, autoClear, ...props }: InputMaskProps): import("react/jsx-runtime").JSX.Element;
export declare function InputNumber({ mode, buttonLayout, step, type, incrementButtonIcon, decrementButtonIcon, useGrouping, ...props }: InputNumberProps): import("react/jsx-runtime").JSX.Element;
export declare function InputText(props: InputTextProps): import("react/jsx-runtime").JSX.Element;
export declare function InputTextarea(props: InputTextareaProps): import("react/jsx-runtime").JSX.Element;
export declare function Menubar(props: MenubarProps): import("react/jsx-runtime").JSX.Element;
export type Menu = PrimeMenu;
export declare function Menu({ ref, popup, popupAlignment, tabIndex, autoZIndex, baseZIndex, ...props }: MenuProps & {
    ref?: React.Ref<PrimeMenu>;
}): import("react/jsx-runtime").JSX.Element;
export declare function Message({ severity, ...props }: MessageProps): import("react/jsx-runtime").JSX.Element;
export declare function MultiSelect({ display, dropdownIcon, scrollHeight, filterMatchMode, removeIcon, selectedItemsLabel, tabIndex, ...props }: MultiSelectProps): import("react/jsx-runtime").JSX.Element;
export type OverlayPanel = PrimeOverlayPanel;
export declare function OverlayPanel({ ref, dismissable, ...props }: OverlayPanelProps & {
    ref?: React.Ref<PrimeOverlayPanel>;
}): import("react/jsx-runtime").JSX.Element;
export declare function Panel({ expandIcon, collapseIcon, ...props }: PanelProps): import("react/jsx-runtime").JSX.Element;
export declare function PanelMenu(props: PanelMenuProps): import("react/jsx-runtime").JSX.Element;
export declare function Password({ feedback, mediumRegex, strongRegex, ...props }: PasswordProps): import("react/jsx-runtime").JSX.Element;
export declare function ProgressBar({ showValue, unit, mode, ...props }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
export declare function ProgressSpinner({ strokeWidth, fill, animationDuration, ...props }: ProgressSpinnerProps): import("react/jsx-runtime").JSX.Element;
export declare function SelectButton({ unselectable, ...props }: SelectButtonProps): import("react/jsx-runtime").JSX.Element;
export declare function Skeleton({ shape, width, height, animation, ...props }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
export declare function SplitButton({ dropdownIcon, loadingIcon, ...props }: SplitButtonProps): import("react/jsx-runtime").JSX.Element;
export declare function Splitter({ gutterSize, layout, stateStorage, ...props }: SplitterProps): import("react/jsx-runtime").JSX.Element;
export declare function Steps({ activeIndex, readOnly, ...props }: StepsProps): import("react/jsx-runtime").JSX.Element;
export declare function TabMenu({ activeIndex, ...props }: TabMenuProps): import("react/jsx-runtime").JSX.Element;
export declare function TabPanel({ __TYPE: _type, ...props }: TabPanelProps): import("react/jsx-runtime").JSX.Element;
export declare function TabView({ activeIndex, renderActiveOnly, ...props }: TabViewProps): import("react/jsx-runtime").JSX.Element;
export type Toast = PrimeToast;
export declare function Toast({ ref, position, baseZIndex, appendTo, ...props }: ToastProps & {
    ref?: React.Ref<PrimeToast>;
}): import("react/jsx-runtime").JSX.Element;
export declare function Toolbar(props: ToolbarProps): import("react/jsx-runtime").JSX.Element;
export declare function Tree({ filterBy, filterMode, loadingIcon, propagateSelectionUp, propagateSelectionDown, showHeader, ...props }: TreeProps): import("react/jsx-runtime").JSX.Element;
export declare function TreeSelect({ display, dropdownIcon, scrollHeight, filterBy, filterMode, selectionMode, ...props }: TreeSelectProps): import("react/jsx-runtime").JSX.Element;
export declare function TreeTable({ sortMode, columnResizeMode, defaultSortOrder, filterDelay, filterMode, pageLinkSize, loadingIcon, paginatorPosition, paginatorTemplate, currentPageReportTemplate, propagateSelectionUp, propagateSelectionDown, tabIndex, ...props }: TreeTableProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map