/**
 * guard.ts — how the mode freezes the UI (`@@T-465`, `@@D-659`).
 *
 * One capture-phase listener set on the document, installed only while the mode
 * is active. It stops the events PrimeReact uses to close an overlay or run a menu
 * command from ever reaching it, and `preventDefault` keeps focus where it is so a
 * `Dropdown` does not blur either. Nothing in the component tree has to know the
 * mode exists.
 *
 * Events that start inside the mode's own chrome (`[data-feedback-ui]`) pass
 * through untouched, so typing in a callout and pressing its buttons work. Escape
 * is swallowed everywhere else — a menu closes on it, and a menu that closes is
 * exactly what the mode must prevent.
 *
 * A hover-only affordance (a tooltip) cannot survive the pointer leaving the
 * element, so it is not frozen; the element's `title` attribute is copied into the
 * item instead.
 */
export interface IFeedbackGuardOptions {
    /** Called when a click lands on an addressable element. */
    onTargetClick: (element: HTMLElement, event: MouseEvent) => void;
}
/**
 * Install the guard; the returned function removes it.
 *
 * Must be called only while the mode is active — installing it permanently would
 * stop the whole application from responding to clicks.
 */
export declare function installFeedbackGuard({ onTargetClick }: IFeedbackGuardOptions): () => void;
//# sourceMappingURL=guard.d.ts.map