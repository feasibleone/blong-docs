import { ReactNode } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
export interface IDeckProps {
    id: string;
    /** When provided, renders these cards from FormContext (context-driven mode). */
    cardNames?: string[];
    /**
     * Card names to render as hidden inputs only (hidden: true in card config).
     * Only used in context-driven mode.
     */
    hiddenCardNames?: string[];
    /** Passthrough children — used when cardNames is not provided. */
    children?: ReactNode;
    readOnly?: boolean;
    loading?: boolean;
    className?: string;
    /**
     * When true, each rendered card hides its own title (used for tabs that
     * contain exactly one card, so the card title does not duplicate the tab
     * label). Titles still show in design mode.
     */
    hideCardTitles?: boolean;
}
export declare function Deck({ id, cardNames, hiddenCardNames, children, className, hideCardTitles, }: IDeckProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=Deck.d.ts.map