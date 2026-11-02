/**
 * FeedbackSubmitBar.tsx — the mode's whole workflow in three buttons
 * (`@@T-462`, `@@T-490`).
 *
 * It reports how many comments are waiting, opens the crop, and takes the one
 * action that leaves the mode: submit. Discarding keeps the mode open (the draft
 * is only dropped after the confirmation the caller decides on).
 */
export interface IFeedbackSubmitBarProps {
    count: number;
    busy: boolean;
    /** While cropping, the label asks to finish rather than to start. */
    cropping: boolean;
    /** Whether a region is already chosen, so the button reads as an edit. */
    cropped: boolean;
    onCrop: () => void;
    onSubmit: () => void;
    onDiscard: () => void;
}
export declare function FeedbackSubmitBar({ count, busy, cropping, cropped, onCrop, onSubmit, onDiscard, }: IFeedbackSubmitBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FeedbackSubmitBar.d.ts.map