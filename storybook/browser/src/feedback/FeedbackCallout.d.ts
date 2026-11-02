import { IFeedbackRect } from './placement.js';
export interface IFeedbackCalloutProps {
    /** The element's identifier, shown as a tooltip and in the bevel. */
    targetId: string;
    box: IFeedbackRect;
    comment: string;
    onChange: (value: string) => void;
    onRemove: () => void;
    /** Pointer delta since the last frame, in CSS pixels. */
    onMove: (dx: number, dy: number) => void;
    onResize: (dx: number, dy: number) => void;
}
export declare function FeedbackCallout({ targetId, box, comment, onChange, onRemove, onMove, onResize, }: IFeedbackCalloutProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FeedbackCallout.d.ts.map