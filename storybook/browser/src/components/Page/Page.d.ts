import { default as React } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { IToolbarButton } from '../../index.js';
export interface IBreadcrumbItem {
    label: string;
    /** Action name to navigate on click */
    action?: string;
}
export interface IPageProps {
    title?: string;
    breadcrumbs?: IBreadcrumbItem[];
    /** Toolbar buttons (left) */
    toolbar?: IToolbarButton[];
    /** Toolbar buttons (right) */
    toolbarRight?: IToolbarButton[];
    /** Form id to wire submit buttons */
    formId?: string;
    className?: string;
    children?: React.ReactNode;
}
export declare function Page({ title, breadcrumbs, toolbar, toolbarRight, formId, className, children, }: IPageProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Page.d.ts.map