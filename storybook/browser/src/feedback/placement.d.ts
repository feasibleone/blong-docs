/**
 * placement.ts — where a callout goes (`@@T-462`).
 *
 * Pure geometry, so the awkward part of the feature can be unit-tested without a
 * browser: given the anchor's rectangle, the callout's size, the viewport and the
 * callouts already placed, answer with a rectangle and the side it hung off.
 *
 * The rule is: right, below, left, above in that order, and the first candidate
 * that fits wins; among candidates that do not fit, the one covering the least of
 * what is already there wins (and covering the anchor itself counts as damage, so
 * a callout never hides the thing it is about).
 */
export interface IFeedbackRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface IPlacementSize {
    width: number;
    height: number;
}
export type IFeedbackSide = 'right' | 'below' | 'left' | 'above';
export interface IPlacement {
    rect: IFeedbackRect;
    side: IFeedbackSide;
}
export interface IPlacementInput {
    anchor: IFeedbackRect;
    size: IPlacementSize;
    viewport: {
        width: number;
        height: number;
    };
    /** Callouts already placed, in the order they were solved. */
    taken?: IFeedbackRect[];
    /** Distance between the anchor and the callout; default 8. */
    gap?: number;
}
/** The area two rectangles share; 0 when they do not touch. */
export declare function overlapArea(a: IFeedbackRect, b: IFeedbackRect): number;
/**
 * Place one callout.
 *
 * Each candidate is clamped into the viewport and scored: how much of it lands on
 * a callout already there, how much on the anchor, and how far it had to be moved
 * to fit at all. An unmoved candidate scores zero, so a side that mounts cleanly
 * always beats a side that had to be pushed.
 */
export declare function placeCallout({ anchor, size, viewport, taken, gap, }: IPlacementInput): IPlacement;
/** Solve several callouts at once, in order, each avoiding the ones before it. */
export declare function placeCallouts(anchors: Array<{
    key: string;
    anchor: IFeedbackRect;
}>, size: IPlacementSize, viewport: {
    width: number;
    height: number;
}): Record<string, IPlacement>;
/**
 * The line a callout draws back to the element it is about.
 *
 * Both ends sit on a border rather than a centre, so the line never runs under the
 * callout's own text and the arrowhead lands exactly on the ring the element
 * carries. The two centres decide the direction, which keeps the result stable
 * while a box is dragged.
 */
export declare function connectorOf(callout: IFeedbackRect, anchor: IFeedbackRect): {
    from: {
        x: number;
        y: number;
    };
    to: {
        x: number;
        y: number;
    };
};
/** The smallest box a person may resize a callout to. */
export declare const MIN_CALLOUT: {
    width: number;
    height: number;
};
/** A box moved by a pointer delta and kept inside the viewport. */
export declare function moveBox(box: IFeedbackRect, dx: number, dy: number, viewport: {
    width: number;
    height: number;
}): IFeedbackRect;
/** A box resized from its bottom-right corner, never below `MIN_CALLOUT`. */
export declare function resizeBox(box: IFeedbackRect, dx: number, dy: number, viewport: {
    width: number;
    height: number;
}): IFeedbackRect;
/** A rectangle as a fraction of a region, so a stored box survives a resize. */
export declare function toFraction(rect: IFeedbackRect, region: IFeedbackRect): IFeedbackRect;
/**
 * The arrowhead at the end of a connector, as an SVG `points` string.
 *
 * The tip sits exactly on the element's border, so the head touches the ring
 * rather than hovering near it, and the triangle is built from the line's own
 * direction so a dragged callout keeps its head pointing the right way.
 */
export declare function arrowHeadPoints(from: {
    x: number;
    y: number;
}, to: {
    x: number;
    y: number;
}, size?: number): string;
//# sourceMappingURL=placement.d.ts.map