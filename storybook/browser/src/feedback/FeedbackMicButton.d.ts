import { SpeechError } from './useFeedbackSpeech.js';
export interface IFeedbackMicButtonProps {
    /** This box is the one being dictated into. */
    listening: boolean;
    /** Why the last attempt failed, when it did. */
    error?: SpeechError;
    onToggle: () => void;
}
export declare function FeedbackMicButton({ listening, error, onToggle }: IFeedbackMicButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FeedbackMicButton.d.ts.map