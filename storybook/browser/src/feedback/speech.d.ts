import { IFeedbackSpeechConfig, ISherpaSpeechConfig } from '../types/portal.js';
/** What one engine has heard (`@@D-758`). */
export interface ISpeechPhrase {
    /** The phrase still being recognised; it is replaced as the engine refines it. */
    interim: string;
    /** A phrase the engine considers finished; empty when none finished. */
    final: string;
}
/**
 * What the microphone has at the moment (`D-774`).
 *
 * Three states rather than two, because a room is rarely silent: a chair creak or
 * a fan is a sound and not a voice, and an indicator that says "hearing" for both
 * teaches a person to ignore it.
 */
export type SpeechLevel = 'silence' | 'sound' | 'speech';
/**
 * What an engine says about the microphone and the wait it is counting down
 * (`D-774` `D-775`).
 *
 * The wait is reported rather than assumed because only the engine knows which
 * tier it is in, and the bar that shows it must not lie about how long is left.
 */
export interface ISpeechActivity {
    /** What is in the microphone now. */
    level: SpeechLevel;
    /** The wait being counted down at this moment, in milliseconds. */
    waitMs: number;
    /** How many times the wait has started again in this session. */
    idle: number;
}
/** One engine that can turn speech into text. */
export interface ISpeechEngine {
    /**
     * Open the microphone and report what is heard.
     *
     * Rejects when the microphone cannot be opened at all — no permission, no
     * device, or a model that failed to load — so the caller can say so once
     * instead of leaving a dead button. A session that opens and then gives up
     * reports it through `onEnd`, which is what keeps the switch from reading as
     * listening when nothing is.
     */
    start(onPhrase: (phrase: ISpeechPhrase) => void, onEnd?: (reason?: string) => void, 
    /**
     * What the microphone has and how long it will wait (`D-774` `D-775`).
     *
     * An engine reports it when it changes rather than per frame, so a callout
     * can draw the room it is in and the time it has left while the words are
     * still on their way.
     */
    onActivity?: (activity: ISpeechActivity) => void): Promise<void>;
    /** Close the microphone; safe to call when nothing is open. */
    stop(): void;
}
/**
 * How dictation behaves in this page (`D-763`).
 *
 * All three are the person's, not the suite's: whether recognition runs on the
 * device, whether the text comes back punctuated, and whether English is forced
 * over the portal's own language. They sit outside React beside the session, so
 * a box can be closed and reopened without losing them, and they are not
 * persisted on purpose — a reload is how a person gets the defaults back.
 */
export interface ISpeechPreferences {
    /** Recognise on the device where the browser can, instead of a cloud service. */
    onDevice: boolean;
    /** Write the punctuation a speaker did not say. */
    punctuation: boolean;
    /** Dictate in English whatever language the portal is in. */
    english: boolean;
}
/**
 * The switches before anyone touches them: punctuated, the portal's language, and
 * recognition on the device when the browser offers it.
 *
 * On-device is the default again (`D-769`): the silence that looked like a deaf
 * model was the pause clock counting the service's warm-up, not the model failing
 * (`D-772`). The fallback stays, because a model really can be deaf.
 */
export declare const SPEECH_PREFERENCES_DEFAULT: ISpeechPreferences;
/** The switches as they stand, for `useSyncExternalStore`. */
export declare function speechPreferences(): ISpeechPreferences;
/** Hear about a switch changing; the returned function unsubscribes. */
export declare function subscribeSpeechPreferences(listener: () => void): () => void;
/** Change the switches; anything not named keeps its value (`D-763`). */
export declare function setSpeechPreferences(patch: Partial<ISpeechPreferences>): void;
/** Put the switches back where they started — a test's cleanup, not a person's. */
export declare function resetSpeechPreferences(): void;
/**
 * The slice of the Web Speech API this module uses, written out because the DOM
 * library ships no declarations for it — the API is still `webkit`-prefixed in
 * the browsers that have it.
 */
interface ISpeechAlternative {
    readonly transcript: string;
}
interface ISpeechResult {
    readonly isFinal: boolean;
    readonly length: number;
    readonly [index: number]: ISpeechAlternative;
}
export interface ISpeechResultEvent {
    readonly resultIndex: number;
    readonly results: ArrayLike<ISpeechResult>;
}
export interface ISpeechErrorEvent {
    readonly error: string;
}
export interface ISpeechRecognition {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    /**
     * Recognise on this device rather than through the browser's service
     * (`D-763`).
     *
     * Chrome exposes it on the recogniser; a browser that has no on-device model
     * leaves the property off entirely, which is what the mode reads as "the
     * switch has nothing to do here".
     */
    processLocally?: boolean;
    start(): void;
    stop(): void;
    abort(): void;
    onresult: ((event: ISpeechResultEvent) => void) | null;
    onerror: ((event: ISpeechErrorEvent) => void) | null;
    onend: (() => void) | null;
    /**
     * Fired when the recogniser decides it is hearing a voice, before it can
     * transcribe any of it (`D-772` `D-774`).
     *
     * It is the only signal a session gets while recognition is still working on
     * the first phrase, so the pause clock listens to it and the callout shows the
     * voice with it: without it a slow service would be cut off in the middle of a
     * sentence, and the person would have nothing to look at while they wait. A
     * browser that does not fire it leaves the clock on results alone.
     */
    onspeechstart?: ((event: Event) => void) | null;
    onspeechend?: ((event: Event) => void) | null;
    /**
     * Fired for any sound above the room, whether or not it is a voice (`D-774`).
     *
     * It arrives earlier than `speechstart`, which is why the indicator listens to
     * it: "there is something in the microphone" and "that something is a voice"
     * are different answers, and only the second one deserves a pulse.
     */
    onsoundstart?: ((event: Event) => void) | null;
    onsoundend?: ((event: Event) => void) | null;
}
export interface ISpeechRecognitionConstructor {
    new (): ISpeechRecognition;
    /**
     * What the browser can do with a language, which is how the mode knows
     * whether on-device recognition is possible at all (`D-763`).
     *
     * It answers `available`, `downloadable`, `downloading` or `unavailable`, and
     * a browser that does not implement it says nothing rather than no.
     */
    available?: (options: {
        langs: string[];
        processLocally?: boolean;
    }) => Promise<string>;
}
/** The recogniser the browser exposes, under either of its two names. */
export declare function speechRecognitionConstructor(): ISpeechRecognitionConstructor | undefined;
/**
 * Can this recogniser run on the device rather than through a service (`D-763`)?
 *
 * `available` is the newer of the two answers and the more reliable one; the
 * property check covers a browser that shipped on-device recognition before it
 * shipped the question. Both are read off the constructor rather than a
 * constructed recogniser: a caller is a button deciding whether to render, and
 * building one to ask would cost a recogniser per callout.
 */
export declare function localRecognitionAvailable(Constructor?: ISpeechRecognitionConstructor | undefined): boolean;
/**
 * How long a session keeps the microphone open after the last thing it heard
 * (`D-765`).
 *
 * Eight seconds rather than four (`D-775`): the pause and the engine's own
 * finalisation of a phrase are close together, and four seconds often closed the
 * box on a phrase that was about to be finalised — which then arrived as the
 * unfinished interim instead.
 */
export declare const SPEECH_SILENCE_MS = 8000;
/**
 * How long a session waits for the first sign of a voice before closing itself
 * (`D-772`).
 *
 * Recognition takes a while to become live — the service has to be reached, or a
 * model loaded, and the first session of a page is the slowest — so this is not a
 * pause and must not be measured as one. It is a ceiling on a session where
 * nothing happens at all, which is what keeps a dead microphone from reading as
 * listening forever.
 */
export declare const SPEECH_START_GRACE_MS = 15000;
/**
 * How long a session that has heard a voice waits for the first word of it
 * (`D-772`).
 *
 * Between a voice and its first transcription the recogniser is still working; the
 * four-second pause belongs to a recogniser that is answering, so it only starts
 * measuring once something has been transcribed.
 */
export declare const SPEECH_FIRST_RESULT_MS = 10000;
/**
 * One recogniser, restarted when the browser ends it.
 *
 * `continuous` does not mean "until stopped": Chrome ends recognition after a few
 * seconds of silence and fires `onend`, so a restart is what keeps a box listening
 * while its person thinks. Every error but `no-speech` latches the engine shut:
 * `no-speech` is a quiet microphone and is normal, while a refusal or an
 * unreachable recognition service would be raised again by every restart, in a
 * loop that spins for as long as the box is open.
 *
 * The pause is tiered (`D-772`): a session that has produced a transcription has
 * eight seconds of silence between phrases, one that has heard a voice but no
 * words has ten, and one that has heard nothing at all has fifteen. Recognition is
 * not instant, and the first use of a page is the slowest; a flat four seconds
 * closed the microphone in the middle of a sentence the recogniser was still
 * working on.
 *
 * On-device recognition is asked for when the person left the switch on and this
 * browser has a model for the language. A language the device cannot do — or would
 * have to download a model for — falls back to the service rather than failing:
 * setting the flag alone makes the recogniser refuse to start at all.
 */
export declare function createWebSpeechEngine(language: string, Constructor?: ISpeechRecognitionConstructor | undefined, options?: {
    silenceMs?: number;
    startGraceMs?: number;
    firstResultMs?: number;
}): ISpeechEngine | undefined;
/** A recogniser stream: what the audio is fed into. */
export interface ISherpaStream {
    acceptWaveform(sampleRate: number, samples: Float32Array): void;
}
/** The slice of `sherpa-onnx` this module uses, so the package never has to be installed. */
export interface ISherpaRecognizer {
    createStream(): ISherpaStream;
    isReady(stream: ISherpaStream): boolean;
    decode(stream: ISherpaStream): void;
    isEndpoint(stream: ISherpaStream): boolean;
    reset(stream: ISherpaStream): void;
    getResult(stream: ISherpaStream): {
        text: string;
    };
}
export interface ISherpaModule {
    createOnlineRecognizer(config: unknown): ISherpaRecognizer;
}
/** Everything the sherpa engine reaches the browser through; injected for tests. */
export interface ISherpaEnvironment {
    loadModule?: (moduleName: string) => Promise<ISherpaModule>;
    getUserMedia?: (constraints: MediaStreamConstraints) => Promise<MediaStream>;
    createAudioContext?: (sampleRate: number) => AudioContext;
    /** The capture node; injected because jsdom has no `AudioWorkletNode`. */
    createWorkletNode?: (context: AudioContext) => AudioWorkletNode;
    /** How long a pause ends the session; default `SPEECH_SILENCE_MS`. */
    silenceMs?: number;
    /** How long a session waits for a first voice; default `SPEECH_START_GRACE_MS`. */
    startGraceMs?: number;
    /** How long a voice has to produce words; default `SPEECH_FIRST_RESULT_MS`. */
    firstResultMs?: number;
}
/**
 * The shipped loader: a real dynamic import, so the optional package is not
 * required to install.
 *
 * Exported because it is the one thing a capability probe has to exercise
 * directly: calling it imports the module, which downloads no model, while
 * starting a session would fetch 73 MB.
 */
export declare function loadSherpaModule(moduleName?: string): Promise<ISherpaModule>;
/**
 * Resample to the model's rate with linear interpolation.
 *
 * The device rarely runs at 16 kHz, and a model fed 48 kHz audio transcribes
 * noise: the browser gives no way to demand a rate, so the conversion is ours.
 */
export declare function resample(samples: Float32Array, from: number, to: number): Float32Array;
/**
 * Dictation through a model that runs in the page.
 *
 * The microphone is opened at start and closed at stop; the recogniser itself
 * outlives the session (`sherpaRecognizer`). Endpoint detection is what turns a
 * pause into a finished phrase, which is the only place a final result comes from
 * in a streaming model. A pause of `SPEECH_SILENCE_MS` closes the session as an
 * ordinary end (`D-765`), so a box does not sit listening to an empty room.
 */
export declare function createSherpaEngine(config: ISherpaSpeechConfig, environment?: ISherpaEnvironment): Promise<ISpeechEngine>;
/** Everything the engines reach the browser through, injected so a test needs no microphone. */
export interface ISpeechEnvironment extends ISherpaEnvironment {
    recognition?: ISpeechRecognitionConstructor;
}
/** Put a stand-in in place of the browser; `undefined` puts the browser back. */
export declare function installSpeechEnvironment(environment?: ISpeechEnvironment): void;
/** The language tag an engine is handed. */
export declare function speechLanguage(language?: string): string;
/**
 * The language a session dictates in (`D-761`).
 *
 * The portal's own language wins, because a person reads the application in it
 * and a comment about a Bulgarian screen is going to be spoken in Bulgarian;
 * `speech.language` is only the fallback for a page that has no language of its
 * own. The English switch overrides both, which is the one way to dictate in
 * English over a portal that is not.
 */
export declare function resolveSpeechLanguage(sessionLanguage: string | undefined, configured?: string): string;
/** Can speech be recognised on this device rather than by a service (`D-763`)? */
export declare function localSpeechAvailable(environment?: ISpeechEnvironment): boolean;
/** Can this browser dictate at all, with the configured engine? */
export declare function speechSupported(engine?: 'webSpeech' | 'sherpa', environment?: ISpeechEnvironment): boolean;
/**
 * The engine the configuration names, or `undefined` when this browser cannot run
 * it.
 *
 * A misconfigured sherpa block throws rather than answering `undefined`: the
 * suite asked for a model and did not say where its files are, which is a fault
 * in the deployment and must not read as "this browser cannot dictate".
 */
export declare function createSpeechEngine(config: IFeedbackSpeechConfig | undefined, environment?: ISpeechEnvironment): Promise<ISpeechEngine | undefined>;
/**
 * What the browser says about the microphone, without asking for it.
 *
 * `unknown` covers the browsers that do not answer the query at all (Safari
 * before 16) and a name they reject, and it is read as "not granted": an
 * automatic start must never be the thing that raises a prompt (`@@D-758`).
 */
export declare function microphonePermission(): Promise<'granted' | 'denied' | 'prompt' | 'unknown'>;
/**
 * Append one finished phrase to the comment.
 *
 * Dictation and typing share one text: the person may have written a sentence and
 * then spoken the rest, so the phrase is joined with a single space unless the
 * text already ends in whitespace.
 */
export declare function appendSpeech(text: string, phrase: string): string;
/**
 * Write the punctuation a speaker leaves out (`D-762`).
 *
 * No engine here writes it: the Web Speech API returns bare words and a Zipformer
 * model produces no punctuation at all, so a comment arrives as one long clause.
 * The correction is deliberately small — a capital at the start and a full stop at
 * the end, a capital after each finished sentence, one space between the words —
 * because anything more would be guessing at what the person meant. A phrase that
 * already ends in `.`, `?`, `!` or `…` is left as it is; a decimal or a version
 * number is not a sentence break, since a break needs a space after it.
 */
export declare function punctuateSpeech(text: string): string;
/**
 * What is left of a phrase once the words already handled are taken off it
 * (`D-764`).
 *
 * A phrase is heard twice: once while it is being recognised, and again when it
 * finishes. A person may take the words under way into the comment, or dismiss
 * them, before that second report arrives — so the words already handled are
 * remembered and cut off the front of anything further, or the phrase would be
 * written twice. The comparison is by word and ignores case, because an engine
 * re-cases its interim result as the sentence becomes clear.
 */
export declare function remainingSpeech(text: string, handled: string): string;
export {};
//# sourceMappingURL=speech.d.ts.map