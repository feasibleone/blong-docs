import { ReactNode } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
export interface IThumbIndexItem {
    id: string;
    label?: string;
    icon?: string;
    items?: IThumbIndexItem[];
    /** Cards to render when this item is active */
    cards?: (string | string[])[];
}
export interface IThumbIndexProps {
    items: IThumbIndexItem[];
    orientation?: 'horizontal' | 'vertical' | 'top' | 'left' | 'bottom' | 'right';
    type?: 'tabs' | 'thumbs' | 'steps';
    /** Children rendering callback — receives the active item */
    renderContent?: (item: IThumbIndexItem) => ReactNode;
    activeId?: string;
    onChange?: (id: string) => void;
    className?: string;
}
export declare function ThumbIndex({ items, orientation, type, renderContent, activeId: controlledId, onChange, className, }: IThumbIndexProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=ThumbIndex.d.ts.map