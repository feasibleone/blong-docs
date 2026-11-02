import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_BlongContext, r as useBlong } from "./BlongContext-Cb6PlRk2.js";
import { n as init_appStore, r as useAppStore } from "./appStore-p_jHiGC2.js";
// ../../core/blong-browser/src/feedback/placement.ts
/** The area two rectangles share; 0 when they do not touch. */
function overlapArea(a, b) {
	const width = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
	const height = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
	return width > 0 && height > 0 ? width * height : 0;
}
function clamp(value, min, max) {
	if (max < min) return min;
	return Math.min(Math.max(value, min), max);
}
/** The four candidates, before clamping, in preference order. */
function candidates(anchor, size, gap) {
	return [
		{
			side: "right",
			x: anchor.x + anchor.width + gap,
			y: anchor.y
		},
		{
			side: "below",
			x: anchor.x,
			y: anchor.y + anchor.height + gap
		},
		{
			side: "left",
			x: anchor.x - size.width - gap,
			y: anchor.y
		},
		{
			side: "above",
			x: anchor.x,
			y: anchor.y - size.height - gap
		}
	];
}
/**
* Place one callout.
*
* Each candidate is clamped into the viewport and scored: how much of it lands on
* a callout already there, how much on the anchor, and how far it had to be moved
* to fit at all. An unmoved candidate scores zero, so a side that mounts cleanly
* always beats a side that had to be pushed.
*/
function placeCallout({ anchor, size, viewport, taken = [], gap = 8 }) {
	let best;
	for (const [index, candidate] of candidates(anchor, size, gap).entries()) {
		const rect = {
			x: clamp(candidate.x, 0, viewport.width - size.width),
			y: clamp(candidate.y, 0, viewport.height - size.height),
			width: size.width,
			height: size.height
		};
		const moved = Math.abs(rect.x - candidate.x) + Math.abs(rect.y - candidate.y);
		const score = taken.reduce((total, other) => total + overlapArea(rect, other), 0) + overlapArea(rect, anchor) * 2 + moved + index / 100;
		if (!best || score < best.score) best = {
			score,
			rect,
			side: candidate.side
		};
	}
	return {
		rect: best.rect,
		side: best.side
	};
}
function centre(rect) {
	return {
		x: rect.x + rect.width / 2,
		y: rect.y + rect.height / 2
	};
}
/** Where the ray from `rect`'s centre towards `target` leaves `rect`. */
function borderPoint(rect, target, ring) {
	const from = centre(rect);
	const dx = target.x - from.x;
	const dy = target.y - from.y;
	if (!dx && !dy) return from;
	const alongX = dx ? (rect.width + ring) / 2 / Math.abs(dx) : Number.POSITIVE_INFINITY;
	const alongY = dy ? (rect.height + ring) / 2 / Math.abs(dy) : Number.POSITIVE_INFINITY;
	const scale = Math.min(alongX, alongY);
	return {
		x: from.x + dx * scale,
		y: from.y + dy * scale
	};
}
/**
* The line a callout draws back to the element it is about.
*
* Both ends sit on a border rather than a centre, so the line never runs under the
* callout's own text and the arrowhead lands exactly on the ring the element
* carries. The two centres decide the direction, which keeps the result stable
* while a box is dragged.
*/
function connectorOf(callout, anchor) {
	return {
		from: borderPoint(callout, centre(anchor), 0),
		to: borderPoint(anchor, centre(callout), 4)
	};
}
/** A box moved by a pointer delta and kept inside the viewport. */
function moveBox(box, dx, dy, viewport) {
	return {
		...box,
		x: clamp(box.x + dx, 0, viewport.width - box.width),
		y: clamp(box.y + dy, 0, viewport.height - box.height)
	};
}
/** A box resized from its bottom-right corner, never below `MIN_CALLOUT`. */
function resizeBox(box, dx, dy, viewport) {
	return {
		...box,
		width: clamp(box.width + dx, MIN_CALLOUT.width, viewport.width - box.x),
		height: clamp(box.height + dy, MIN_CALLOUT.height, viewport.height - box.y)
	};
}
/** A rectangle as a fraction of a region, so a stored box survives a resize. */
function toFraction(rect, region) {
	const round = (value) => Math.round(value * 1e4) / 1e4;
	const left = clamp(rect.x, region.x, region.x + region.width);
	const top = clamp(rect.y, region.y, region.y + region.height);
	return {
		x: round((left - region.x) / region.width),
		y: round((top - region.y) / region.height),
		width: round(clamp(rect.width, 0, region.x + region.width - left) / region.width),
		height: round(clamp(rect.height, 0, region.y + region.height - top) / region.height)
	};
}
/**
* The arrowhead at the end of a connector, as an SVG `points` string.
*
* The tip sits exactly on the element's border, so the head touches the ring
* rather than hovering near it, and the triangle is built from the line's own
* direction so a dragged callout keeps its head pointing the right way.
*/
function arrowHeadPoints(from, to, size = 10) {
	const dx = to.x - from.x;
	const dy = to.y - from.y;
	const length = Math.hypot(dx, dy) || 1;
	const ux = dx / length;
	const uy = dy / length;
	const base = {
		x: to.x - ux * size,
		y: to.y - uy * size
	};
	const half = size * .45;
	return [
		`${to.x},${to.y}`,
		`${base.x - uy * half},${base.y + ux * half}`,
		`${base.x + uy * half},${base.y - ux * half}`
	].join(" ");
}
var MIN_CALLOUT;
function init_placement() {
	return (init_placement = __esmMin((() => {
		MIN_CALLOUT = {
			width: 200,
			height: 120
		};
	})))();
}
// ../../core/blong-browser/src/feedback/useFeedbackConfig.ts
function useFeedbackConfig() {
	const { config } = useBlong();
	const composed = useAppStore((state) => state.portal.portalConfig?.feedback);
	return config.portal?.feedback ?? composed;
}
function init_useFeedbackConfig() {
	return (init_useFeedbackConfig = __esmMin((() => {
		init_BlongContext();
		init_appStore();
	})))();
}
export { init_placement as a, resizeBox as c, connectorOf as i, toFraction as l, useFeedbackConfig as n, moveBox as o, arrowHeadPoints as r, placeCallout as s, init_useFeedbackConfig as t };
