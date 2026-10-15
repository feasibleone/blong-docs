/**
 * blongEvents — typed event bus for blong-browser.
 *
 * A thin wrapper around the native browser `EventTarget` API, typed for the
 * events that blong-browser emits internally. Using `EventTarget` means zero extra
 * dependencies and native browser performance.
 *
 * ## Events
 *
 * | Type               | Fired when                                      |
 * |--------------------|-------------------------------------------------|
 * | `action:before`    | Before any dispatch call                        |
 * | `action:success`   | After a dispatch call resolves successfully     |
 * | `action:error`     | After a dispatch call rejects                   |
 *
 * ## Usage
 *
 * ```ts
 * import {blongEvents} from '@feasibleone/blong-browser';
 *
 * // Subscribe
 * const off = blongEvents.on('action:success', ({method, result}) => {
 *     console.log(method, result);
 * });
 *
 * // Unsubscribe
 * off();
 * ```
 */
/** All event payloads emitted by blong-browser */
export interface BlongEventMap {
    /** Emitted before every dispatch call */
    'action:before': {
        method: string;
        params: unknown;
    };
    /** Emitted after a dispatch call resolves */
    'action:success': {
        method: string;
        params: unknown;
        result: unknown;
    };
    /** Emitted after a dispatch call rejects */
    'action:error': {
        method: string;
        params: unknown;
        error: unknown;
    };
}
type BlongEventType = keyof BlongEventMap;
type BlongListener<K extends BlongEventType> = (detail: BlongEventMap[K]) => void;
declare class BlongEventBus extends EventTarget {
    /**
     * Subscribe to an event. Returns an `off` function that removes the listener.
     *
     * @example
     * const off = blongEvents.on('action:success', ({method, result}) => { ... });
     * // later:
     * off();
     */
    on<K extends BlongEventType>(type: K, listener: BlongListener<K>): () => void;
    /**
     * Emit an event with a typed payload. Called internally by blong-browser — user
     * code rarely needs to call this directly.
     */
    emit<K extends BlongEventType>(type: K, detail: BlongEventMap[K]): void;
}
/** Singleton event bus — import and subscribe from anywhere */
export declare const blongEvents: BlongEventBus;
export {};
//# sourceMappingURL=eventBus.d.ts.map