declare global {
    var IS_REACT_ACT_ENVIRONMENT: boolean;
}
/**
 * Run one test case with **only the mirrors it declares** silenced.
 *
 * `[blong] error toast`, `[blong] error dialog` and `[blong] <method> failed` are
 * written to the browser console on purpose: they are how an agent or a Playwright
 * spec, which reads the page through `page.on('console')`, sees a failed call or a
 * popup it has no other handle on. A unit test asserts the store state or the DOM
 * those lines mirror, so it has no reader for them — and the stack trace a rejected
 * call prints is the bulk of this suite's stderr, which is how a reader learns to
 * skip stderr entirely and misses the one line that was real.
 *
 * Every call that does not match one of `expected` is passed to the console that was
 * there before, so the mute cannot hide the failure a case is *not* about: a mirror
 * the case did not predict — a second toast, a dialog from another code path — still
 * prints, where a mute of `console.error` as a whole would have swallowed it. That is
 * also what makes a stale pattern visible: a line the helper was supposed to match but
 * no longer does reappears in the run's stderr instead of being lost.
 *
 * `expected` is required, and its entries are substrings of what the call printed —
 * matched against every argument, so a method name in the first and an error message in
 * the third can both be named:
 *
 * ```ts
 * it(
 *     'returns error state when dispatch rejects',
 *     muteErrorMirrors(async () => {
 *         …
 *     }, ['fail.method failed', 'Query failed']),
 * );
 * ```
 *
 * Wraps the case rather than the file: the mute is lifted before the next case runs
 * (this suite configures no `restoreMocks`), and it puts back the function it found
 * rather than delegating to a spy, so a case that patches `console.error` itself — or
 * nests this helper — still gets its own function back.
 */
export declare function muteErrorMirrors<T>(body: () => T | Promise<T>, expected: string | readonly string[]): () => Promise<void>;
//# sourceMappingURL=setup.d.ts.map