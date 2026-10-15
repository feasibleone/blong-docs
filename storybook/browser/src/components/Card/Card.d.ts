import { ReactNode } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
export interface ICardProps {
    /** Card title shown in the header */
    title?: string | ReactNode;
    children?: ReactNode;
    readOnly?: boolean;
    loading?: boolean;
    collapsible?: boolean;
    /** Additional CSS class */
    className?: string;
    /** Unique element ID for design-mode anchoring */
    id?: string;
    /**
     * When provided, the card resolves its title, fields, and read-only state
     * from the nearest Form context and renders its own fields.
     * The `children` prop is ignored when cardName is active.
     */
    cardName?: string;
    /** Column index within the form grid — supplied by Deck for design-mode DnD. */
    colIdx?: number;
    /**
     * Suppress the card title. Used when a tab contains a single card whose
     * title would duplicate the tab's label. Titles still show in design mode.
     */
    hideTitle?: boolean;
}
export declare function Card({ title, children, readOnly, loading, collapsible, className, id, cardName, colIdx, hideTitle, }: ICardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Card.d.ts.map