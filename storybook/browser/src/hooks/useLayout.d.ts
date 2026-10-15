import { ICardConfig, IEnrichedSchema, ISplitLayoutConfig, ISplitLayoutPanel, ITabLayoutConfig, LayoutConfig } from '@feasibleone/blong';
export type { FlatLayoutConfig, ISplitLayoutConfig, LayoutConfig } from '@feasibleone/blong';
/** Minimal shape of a custom editor that useLayout needs to know about */
interface IEditorDef {
    properties: string[];
}
/** Resolved card — enriched card config with derived field list */
export interface IResolvedCard {
    name: string;
    /** Card title; undefined means no title header (widget provides its own title) */
    label: string | undefined;
    fields: string[];
    config: ICardConfig;
    /**
     * Per-entry column overrides for ICardWidgetEntry objects.
     * Key is 'fieldName#id' (e.g. 'table#table1'); value is the column list.
     */
    columnOverrides?: Record<string, string[]>;
}
/** A resolved tab/step */
export interface IResolvedTab {
    id: string;
    label?: string;
    icon?: string;
    /** Each entry is a deck-group: one or more card names stacked in the same grid column. */
    cardNames: string[][];
    /** Optional React component rendered in place of cards */
    component?: React.ComponentType;
}
/** Result of useLayout */
export interface ILayoutResult {
    /** Resolved layout rows (array of decks, each deck is array of card names) — flat mode only */
    rows: string[][];
    /** Resolved cards with their field lists */
    cards: Record<string, IResolvedCard>;
    /** All visible field names */
    allFields: string[];
    /** Resolved tabs (populated in tab/steps mode, empty in flat mode) */
    tabs?: IResolvedTab[];
    /** Layout type: 'flat' | 'tabs' | 'steps' | 'split' */
    layoutType: 'flat' | 'tabs' | 'steps' | 'split';
    /** Tab orientation (only for tabs mode) */
    orientation?: string;
    /** Split layout panels (only for split mode) */
    panels?: ISplitLayoutPanel[];
}
/** Type guard: is the layout config in tab/steps form? */
export declare function isTabLayout(config: LayoutConfig): config is ITabLayoutConfig;
/** Type guard: is the layout config a split layout? */
export declare function isSplitLayout(config: LayoutConfig): config is ISplitLayoutConfig;
/**
 * Compute layout structure from schema + cards config + layout key.
 */
export declare function useLayout(schema: IEnrichedSchema | undefined, cardsConfig: Record<string, ICardConfig> | undefined, layoutKey: string, layouts: Record<string, LayoutConfig> | undefined, editors?: Record<string, IEditorDef>): ILayoutResult;
//# sourceMappingURL=useLayout.d.ts.map