import { FeedbackTargetKind } from '@feasibleone/blong';
import { ReactNode } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { IFeedbackModelContext } from './ids.js';
/** Whether the mode is on; published once, by `App` (`@@D-667`). */
export declare const FeedbackActiveContext: import('../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react').Context<boolean>;
/** What a page tells its children about itself; `null` outside a model page. */
export declare const FeedbackPageContext: import('../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react').Context<IFeedbackModelContext | null>;
/** The path of the enclosing container, already composed. */
export declare const FeedbackPathContext: import('../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react').Context<string | null>;
/** The mode's own switch, read without subscribing to the store. */
export declare function useFeedbackActive(): boolean;
/** The path in scope, for a component that needs to extend it by hand. */
export declare function useFeedbackPath(): string | undefined;
export interface IFeedbackNode {
    /** The element's own identifier. */
    id: string;
    /** The path its children extend. */
    path: string;
    /** Attributes to spread on the element. */
    attributes: Record<string, string>;
}
/**
 * Publish a composed path to the subtree.
 *
 * Rendered whether or not the mode is on — with no path when it is off. A call site
 * that returned its children bare instead would move the whole subtree under a
 * different parent the moment the mode is switched on, and React remounts a subtree
 * whose parent changes: a table lost its search and its page, a form lost its
 * fields, at exactly the moment the reader meant to comment on them (`@@D-744`).
 * Nothing is visible either way: a provider renders no element, and `null` is the
 * value a consumer already reads outside one.
 */
export declare function FeedbackPath({ path, children }: {
    path?: string;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Address one element and extend the path for its children.
 *
 * Take the node, spread `attributes`, and wrap the children in
 * `<FeedbackPath path={node.path}>` — the whole protocol. `undefined` while the
 * mode is off, so the call site spreads nothing and nests nothing.
 */
export declare function useFeedbackNode(kind: FeedbackTargetKind, name?: string, label?: string): IFeedbackNode | undefined;
/**
 * The page root: its identifier and the path its children extend.
 *
 * Read from the context the component owns rather than one it inherits — an
 * `Editor` publishes the context it was given, so it cannot read it from the tree
 * above itself.
 */
export declare function useFeedbackPage(context: IFeedbackModelContext | null | undefined): IFeedbackNode | undefined;
/** The identifier of one segment, for a place that builds a path by hand. */
export declare function segmentId(kind: FeedbackTargetKind, name?: string): string;
/**
 * A factory for components that render targets in a loop — a table whose rows are
 * columns, a list of cards. Hooks cannot be called inside a `map`, so the context
 * is read once here and the returned function composes an identifier per item.
 *
 * `undefined` while the mode is off: the call sites write `target?.(…)`, and an
 * optional call evaluates none of its arguments.
 */
export declare function useFeedbackTargetFactory(base?: string): ((kind: FeedbackTargetKind, name?: string, label?: string) => Record<string, string>) | undefined;
/** Attributes for the page root, when the path is not needed. */
export declare function useFeedbackPageTarget(context: IFeedbackModelContext | null | undefined): Record<string, string> | undefined;
/**
 * Attributes to spread on an element that is addressable but has no addressable
 * children — a label, a column header, a button.
 *
 * `undefined` while the mode is off, so the caller spreads nothing at all.
 *
 * @param kind  the kind of thing the element is
 * @param name  the model's own name for it (`cardName`, a dotted field path, a
 *              toolbar action, a menu method); never an index
 * @param label the translated visible label, so a reader without the source has
 *              a chance of finding the element the identifier names
 */
export declare function useFeedbackTarget(kind: FeedbackTargetKind, name?: string, label?: string): Record<string, string> | undefined;
/**
 * Address a single element the parent cannot annotate itself.
 *
 * The parent cannot call a hook for a path its own provider has not published
 * yet, and some children own their markup — a PrimeReact table renders its
 * columns inside itself, so the table has to be the one carrying the step. This
 * clones that one element with the attributes and publishes the path above it.
 *
 * For anything the parent does render itself, compose the step by hand instead
 * (`appendSegment(page.path, 'toolbar')` + `<FeedbackPath>`) — that costs no
 * component at all. While the mode is off the child comes back untouched: no
 * provider, no clone, no wrapper.
 */
export declare function FeedbackRegion({ kind, name, label, children, }: {
    kind: FeedbackTargetKind;
    name?: string;
    label?: string;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=useFeedbackTarget.d.ts.map