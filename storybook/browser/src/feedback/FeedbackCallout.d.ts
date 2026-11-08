import { FeedbackSpeechEngine } from '../types/portal.js';
import { IFeedbackRect } from './placement.js';
import { SpeechLevel } from './speech.js';
import { SpeechError } from './useFeedbackSpeech.js';
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
    /** Dictation is available in this portal and in this browser (`@@D-758`). */
    speechAvailable?: boolean;
    /** This box is the one being dictated into. */
    listening?: boolean;
    /** The phrase the engine is still recognising. */
    interimText?: string;
    /** What is in the microphone: a voice, another sound, or a room (`D-774`). */
    level?: SpeechLevel;
    /** The wait the engine is counting down, in milliseconds (`D-775`). */
    waitMs?: number;
    /** How many times that wait has started again, which restarts the bar with it. */
    idle?: number;
    /** Why the last attempt to listen failed. */
    speechError?: SpeechError;
    /**
     * The person pointed at this box: start listening unless nothing is granted.
     *
     * Focus is the signal rather than a click, because a click that lands on the
     * text area focuses it anyway — one path, and it also covers a tab.
     */
    onListen?: () => void;
    onToggleListen?: () => void;
    /** Keep the phrase still being recognised (`D-764`). */
    onAcceptInterim?: () => void;
    /** Drop the phrase still being recognised (`D-764`). */
    onClearInterim?: () => void;
    /** The engine this portal dictates through; the pills depend on it (`D-763`). */
    speechEngine?: FeedbackSpeechEngine;
}
export declare function FeedbackCallout({ targetId, box, comment, onChange, onRemove, onMove, onResize, speechAvailable, listening, interimText, level, waitMs, idle, speechError, onListen, onToggleListen, onAcceptInterim, onClearInterim, speechEngine, }: IFeedbackCalloutProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FeedbackCallout.d.ts.map