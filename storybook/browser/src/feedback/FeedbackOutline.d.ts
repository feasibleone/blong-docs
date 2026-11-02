import { IFeedbackRect } from './placement.js';
export interface IFeedbackOutlineProps {
    rect: IFeedbackRect;
    /** The element's identifier: its tail is the badge, the whole path the tooltip. */
    targetId: string;
    /** `hover` is the element under the pointer, `item` one that already has a comment. */
    tone: 'hover' | 'item';
}
export declare function FeedbackOutline({ rect, targetId, tone }: IFeedbackOutlineProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FeedbackOutline.d.ts.map