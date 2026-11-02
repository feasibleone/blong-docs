/**
 * useFeedbackFreeze.ts — a timer that waits while the mode is on (`@@T-465`).
 *
 * `ActionHint` hides itself after two seconds. Entering feedback mode in that
 * window must not lose the message, so the timer pauses with its remaining time
 * intact and resumes when the mode ends. The alternative — blocking the mode until
 * the hint expires — would make the switch feel broken instead.
 */
/**
 * Run `onElapsed` after `delay` ms, holding the clock while feedback mode is
 * active.
 *
 * @param delay    the full lifetime, in milliseconds
 * @param onElapsed called once per expiry
 * @param enabled  schedule anything at all; `false` disables the timer entirely
 * @param resetKey a value that identifies the thing being timed — a new hint
 *                 restarts the full lifetime when this changes
 */
export declare function useFeedbackFreeze(delay: number, onElapsed: () => void, enabled?: boolean, resetKey?: unknown): void;
//# sourceMappingURL=useFeedbackFreeze.d.ts.map