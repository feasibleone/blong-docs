import { ReactNode } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
export interface IPathSegment {
    key: string;
    label: string;
}
/**
 * PathBar — the commander navigation bar: navigation buttons (back/forward/up/
 * refresh) on the left, a combined breadcrumb / "jump to path" widget that
 * fills the remaining space, and an optional search box — Windows-Explorer
 * style.
 *
 * The crumb/jump widget renders the breadcrumb; clicking a crumb navigates,
 * while clicking the empty space switches it into an editable "jump to path"
 * input (Enter navigates, Esc/Blur exits back to breadcrumbs).
 */
export declare function PathBar({ segments, onNavigate, onJump, nav, search, }: {
    segments: IPathSegment[];
    onNavigate?: (index: number) => void;
    onJump?: (path: string) => void;
    /** Navigation buttons rendered at the far left (back/forward/up/refresh). */
    nav?: ReactNode;
    /** Search input rendered at the far right. */
    search?: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PathBar.d.ts.map