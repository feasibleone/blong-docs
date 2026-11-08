import { IFeedbackSpeechConfig } from '../types/portal.js';
import { ISpeechPreferences, SpeechLevel } from './speech.js';
/** Why dictation is not running, when it is not (`@@D-758`). */
export type SpeechError = 'unsupported' | 'denied' | 'failed';
/** What every callout reads. */
export interface ISpeechSnapshot {
    /** The box being dictated into, or `null` when nothing is listening. */
    listeningTargetId: string | null;
    /** The phrase the engine is still recognising, drawn as a caption. */
    interimText: string;
    /** What is in the microphone: a voice, some other sound, or a room (`D-774`). */
    level: SpeechLevel;
    /** The wait being counted down, in milliseconds (`D-775`). */
    waitMs: number;
    /** How many times the wait has started again, so a bar can start again with it. */
    idle: number;
    /** Set when the last attempt failed; cleared by the next one. */
    error?: SpeechError;
}
/** The current state, for `useSyncExternalStore`. */
export declare function speechSnapshot(): ISpeechSnapshot;
/** Subscribe to changes; the returned function unsubscribes. */
export declare function speechSubscribe(listener: () => void): () => void;
/** Close the microphone and forget which box was listening. */
export declare function speechStop(): void;
/**
 * Take the phrase still being recognised into the comment (`D-764`).
 *
 * Returns the words taken, so the caller appends exactly what was accepted rather
 * than reading the snapshot again; `undefined` when there was nothing to take. The
 * words are remembered and cut off whatever the engine reports next, so the phrase
 * is never written twice.
 */
export declare function speechTakeInterim(): string | undefined;
/**
 * Forget the phrase still being recognised without writing it (`D-764`).
 *
 * The words are dropped rather than undone: an engine that reports them again
 * while they are still being refined finds them already accounted for, and the
 * part it finishes with is what reaches the comment.
 */
export declare function speechDropInterim(): void;
/** What a start needs from the caller. */
export interface ISpeechOptions {
    /** Only start when the microphone is already granted (`@@D-758`). */
    auto?: boolean;
    /** The portal's language, which is what the person reads and therefore speaks. */
    language?: string;
    /** Where a finished phrase goes. */
    onText?: (targetId: string, transcript: string) => void;
}
/**
 * Start dictating into one box.
 *
 * `auto` is the path a click on a target or a focus in a callout takes, and it
 * refuses to run unless the microphone is already granted: a prompt raised by
 * clicking a card would ambush the person, and a prompt they dismiss poisons the
 * origin for the rest of the session (`@@D-758`).
 */
export declare function speechListen(targetId: string, config: IFeedbackSpeechConfig | undefined, options?: ISpeechOptions): Promise<boolean>;
/** Switch one box's dictation on or off. */
export declare function speechToggle(targetId: string, config: IFeedbackSpeechConfig | undefined, options?: ISpeechOptions): Promise<boolean>;
/**
 * Start the listening box again with the switches as they now stand (`D-767`).
 *
 * A recogniser reads its language and its on-device flag when it starts, so a pill
 * pressed mid-session would otherwise change nothing until the box was closed and
 * opened by hand — and the silence clock would go on running through the seconds
 * spent pressing it, closing the microphone the person was about to speak into.
 * Restarting re-reads both and gives the box a fresh pause budget.
 */
export declare function speechRestart(): Promise<boolean>;
/** The dictation state, bound to React (`@@D-758`). */
export interface IFeedbackSpeech extends ISpeechSnapshot {
    start: (targetId: string, config: IFeedbackSpeechConfig | undefined, options?: {
        auto?: boolean;
    }) => Promise<boolean>;
    toggle: (targetId: string, config: IFeedbackSpeechConfig | undefined) => Promise<boolean>;
    stop: () => void;
    /** Take the phrase under way into the comment (`D-764`); `undefined` when none. */
    acceptInterim: () => string | undefined;
    /** Dismiss the phrase under way without writing it (`D-764`). */
    clearInterim: () => void;
}
/**
 * Subscribe a component to the session, and give it the commands.
 *
 * `onText` is the one thing the caller supplies: a finished phrase has to reach
 * the draft, and this module knows nothing about the draft. The language is read
 * from the store rather than passed in, because every caller would pass the same
 * one — and a portal that switches language mid-session must dictate in the new
 * one (`D-761`).
 */
export declare function useFeedbackSpeech(onText: (targetId: string, transcript: string) => void): IFeedbackSpeech;
/**
 * The dictation switches, and the command that changes them (`D-763`).
 *
 * Bound to the same module-level store as the session, so the pill a person
 * presses changes what the next phrase does — and every callout shows the new
 * state — without any of it surviving a reload. A switch pressed while a box is
 * listening restarts that box, because a recogniser reads its language and its
 * on-device flag only when it starts (`D-767`).
 */
export declare function useSpeechPreferences(): {
    preferences: ISpeechPreferences;
    setPreference: (patch: Partial<ISpeechPreferences>) => void;
};
//# sourceMappingURL=useFeedbackSpeech.d.ts.map