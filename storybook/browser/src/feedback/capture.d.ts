import { IFeedbackShot } from '@feasibleone/blong';
export type FeedbackCaptureStatus = 'captured' | 'denied' | 'unavailable';
export interface ICaptureOutcome {
    status: FeedbackCaptureStatus;
    shot?: IFeedbackShot;
}
/**
 * Capture the screen, or say why not.
 *
 * `maxBytes` bounds the data URL, not the image: the payload travels through the
 * gateway's JSON body, whose limit is 1 MB by default. `region` is the part of the
 * viewport the submission keeps, in CSS pixels; without it the whole surface is
 * kept, and the caller's anchors are fractions of that same region (`@@T-490`).
 */
export declare function captureScreen(maxBytes?: number, region?: {
    x: number;
    y: number;
    width: number;
    height: number;
}): Promise<ICaptureOutcome>;
//# sourceMappingURL=capture.d.ts.map