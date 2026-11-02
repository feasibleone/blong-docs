import { IFeedbackRect } from './placement.js';
export interface IFeedbackCropProps {
    region: IFeedbackRect;
    onMove: (dx: number, dy: number) => void;
    onResize: (dx: number, dy: number) => void;
}
export declare function FeedbackCrop({ region, onMove, onResize }: IFeedbackCropProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FeedbackCrop.d.ts.map