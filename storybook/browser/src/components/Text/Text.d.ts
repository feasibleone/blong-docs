import { default as React } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
interface ITextProps {
    /** Explicit translation key. */
    id?: string;
    /** Raw text used as both the translation key and the English fallback. */
    children?: React.ReactNode;
    params?: Record<string, string | number>;
    prefix?: string;
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
}
export declare function Text({ id, children, params, prefix, as: Tag, className }: ITextProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Text.d.ts.map