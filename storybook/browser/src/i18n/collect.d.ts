/**
 * Rendered-string collector.
 *
 * `useText` reports every key it renders while collection is on, so the set is
 * exactly what the screen asked for — not what a regex over the source believes.
 * The report separates what was rendered from what the active dictionary could
 * not answer, which is the list a translation seed needs (`D-625`).
 *
 * Browser-only and dependency-free on purpose: this module is part of the app
 * bundle, and the file-system half of the feature lives in `src/playwright`
 * (`D-633`). Nothing here imports a `node:` builtin or a test runner.
 */
/** What a test (or the report page) reads: rendered keys, and the ones unanswered. */
export interface ITranslationReport {
    language: string;
    rendered: string[];
    missing: string[];
}
/** Turn collection on and drop what an earlier screen recorded. */
export declare function collectStart(): void;
/** Turn collection off — the normal state of a production app. */
export declare function collectStop(): void;
/** Whether a render is being recorded (cheap enough to check in `useText`). */
export declare function isCollecting(): boolean;
/**
 * Record one rendered key. Called from `useText`, so it covers `<Text>`, the
 * `Button` wrapper and every widget that renders through them.
 */
export declare function recordRendered(key: string): void;
/**
 * The current report, for the language the provider answers with.
 *
 * A key is missing when the active dictionary has no entry or an empty one — an
 * empty `labelText` is a seed TODO marker, not a translation (`D-631`).
 */
export declare function translationReport(): ITranslationReport;
/** The render count of one key, for the in-app page. */
export declare function renderedCounts(): Record<string, number>;
/** Let the store answer "which language, which dictionary" without a cycle. */
export declare function setTranslationProvider(next: () => {
    language: string;
    dictionary: Record<string, string>;
}): void;
//# sourceMappingURL=collect.d.ts.map