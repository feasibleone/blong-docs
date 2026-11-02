import { FeedbackTargetKind, IFeedbackTarget } from '@feasibleone/blong';
export declare const FEEDBACK_ID_ATTR = "data-feedback-id";
export declare const FEEDBACK_KIND_ATTR = "data-feedback-kind";
export declare const FEEDBACK_LABEL_ATTR = "data-feedback-label";
/** Marks the mode's own chrome, which the guard lets through and the capture hides. */
export declare const FEEDBACK_UI_ATTR = "data-feedback-ui";
/** Set on `<html>` while the screenshot is taken, so the overlay leaves the picture. */
export declare const FEEDBACK_CAPTURE_ATTR = "data-feedback-capture";
/** What a page tells its children about itself. */
export interface IFeedbackModelContext {
    /** Realm or, for a framework screen, `blong`. */
    subject: string;
    /** Model object, or the page name for a screen that belongs to no model. */
    object: string;
    /** `browse` | `new` | `open` | `report` | `report.<id>` | `page`. */
    page: string;
}
/** The context a page that names no model gets, so an identifier always exists. */
export declare function fallbackContext(route: string): IFeedbackModelContext;
/** The page an identifier starts from: `sport.club.open`, `blong.portal.page`. */
export declare function pageIdOf(context: IFeedbackModelContext | null | undefined): string;
/**
 * A name that survives a translation and a redesign: the ASCII form of the
 * English label, lower case, hyphenated. `Legal Name` → `legal-name`.
 *
 * It is the _source_ text, never what the screen shows — a language switch must
 * not move an identifier — and an empty answer means "no name", not `''`.
 */
export declare function nameOfLabel(text: string | undefined): string | undefined;
/** One step of the path: the kind, and the model's name for the thing when it has one. */
export declare function segmentOf(kind: FeedbackTargetKind, name?: string): string;
/** Compose a path from a page id and the segments below it. */
export declare function buildFeedbackPath(pageId: string, segments: readonly string[]): string;
/** Append one segment to a path. */
export declare function appendSegment(path: string, kind: FeedbackTargetKind, name?: string): string;
/**
 * The readable tail of an identifier, for a badge: the last named segment and
 * whatever unnamed parts follow it.
 *
 * `…/field:clubShortName/label:clubs` → `clubShortName.label-clubs`; the page
 * itself, which has no named segment, answers with its own id.
 */
export declare function shortTargetId(id: string): string;
/** Attributes to spread on an element, or an empty object when the mode is off. */
export declare function feedbackAttributes(id: string | undefined, kind: FeedbackTargetKind, label?: string): Record<string, string>;
/**
 * An identifier for a framework screen that belongs to no realm.
 *
 * `blong` is the subject of the portal's own chrome — its menu, its tabs, its
 * page — so a comment about the menubar still names something (`@@D-657`).
 */
export declare function portalFeedbackId(part: 'tab' | 'menu' | 'menuItem' | 'page', partId?: string): string;
/** The nearest addressable ancestor of an event target. */
export declare function closestFeedbackTarget(node: EventTarget | null): HTMLElement | null;
/** Whether the node belongs to the mode's own chrome (callouts, bar, toggle). */
export declare function isFeedbackUi(node: EventTarget | null): boolean;
/** A short description of the element, so a reader has context when an id goes stale. */
export declare function domHintOf(element: HTMLElement): string | undefined;
/** Read the target an element carries. */
export declare function targetOf(element: HTMLElement): IFeedbackTarget | null;
/** The element's rectangle in the coordinates a callout is positioned in. */
export declare function rectOf(element: Element): {
    x: number;
    y: number;
    width: number;
    height: number;
};
//# sourceMappingURL=ids.d.ts.map