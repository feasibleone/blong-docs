import { IResolvedModelSpec } from '@feasibleone/blong';
import { IMenuItem } from '../types/portal.js';
/** The shared root every `classifier: true` page lands in. */
export declare const CLASSIFIER_ROOT = "Classifiers";
/**
 * A leaf: the page's method, the label it sorts by, and where the model put it.
 *
 * `title` travels with the entry as the sort key and as the label a menu without a
 * component slice would fall back on; the portal still takes the rendered title
 * from the slice, so a translated page keeps its translated name.
 */
export interface IMenuLeaf {
    /** English label — `objectTitle` unless the model names one. */
    title: string;
    method: string;
    icon?: string;
    /** Position inside the group; absent means "after the ordered ones, alphabetically". */
    order?: number;
}
/** A group of entries — the portal renders this as a submenu. */
export interface IMenuGroup {
    id?: string;
    title: string;
    items: IMenuNode[];
}
export type IMenuNode = IMenuLeaf | IMenuGroup;
/** Stable, language-independent identifier for a group title. */
export declare function menuGroupId(title: string): string;
/** Resolved placement of one page: `undefined` means "no menu entry". */
export interface IMenuPlacement {
    root: string;
    group?: string;
}
/** Where a model's browse page belongs in the menubar. */
export declare function menuPlacement(model: IResolvedModelSpec): IMenuPlacement | undefined;
/** The menubar leaf for a model's browse page. */
export declare function menuLeaf(model: IResolvedModelSpec): IMenuLeaf;
/**
 * Add one page to the menu tree in place.
 *
 * `menus` is the aggregator's accumulated map — root title → its entries — so a
 * second realm contributing to `Classifiers` finds the root already there and
 * merges into its own submenu, and a suite that adds a group of its own does not
 * lose the generated ones.
 */
export declare function addMenuEntry(menus: Record<string, IMenuNode[]>, model: IResolvedModelSpec): void;
/**
 * The generated menu, with the shared classifier root last: a realm's own pages
 * are what its people open all day, and reference data is looked up by exception.
 */
export declare function menuGroups(menus: Record<string, IMenuNode[]>): IMenuItem[];
//# sourceMappingURL=menu.d.ts.map