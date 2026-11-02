/** The seed targets a spec may declare. */
export interface ISeedOptions {
    language?: string;
    /** Path of the label seed, e.g. `meta/db/bg-coreLabelSeed.yaml`. */
    label?: string;
    /** Path of the resource seed. */
    translation?: string;
}
/** What a test reports: the keys it rendered that the dictionary could not answer. */
export interface ISeedReport {
    language?: string;
    missing?: readonly string[];
    missingResources?: readonly string[];
}
/**
 * The language and a block scalar's lines, from a seed file.
 *
 * The format is deliberately hand-editable: two keys, and one pair per line in a
 * YAML literal block, so a diff is one line per translation.
 */
export declare function parseSeed(text: string, block: string): Map<string, string>;
/** The `languageCode` a seed declares, or the fallback. */
export declare function seedLanguage(text: string, fallback?: string): string;
/** Render a seed file: the language, then the sorted pairs of the block. */
export declare function serializeSeed(languageCode: string, block: string, entries: Map<string, string>): string;
/**
 * Add the missing keys to a seed's text, keeping every line that is already
 * there — including an empty one, which is a TODO marker somebody may have
 * written by hand (`D-631`).
 */
export declare function mergeSeed(text: string, block: string, additions: Iterable<string>, fallbackLanguage?: string): {
    text: string;
    added: number;
    kept: number;
};
/** Merge additions into one seed file under its lock, atomically. */
export declare function writeSeedFile(file: string, block: string, additions: Iterable<string>, fallbackLanguage?: string): {
    added: number;
    kept: number;
};
/** The directory this run's per-test reports go to. */
export declare function pendingDir(options: ISeedOptions): string;
/**
 * `globalSetup`: mint the run token and clear debris.
 *
 * The token keeps an aborted run's pending files away from this one; directories
 * a day old are removed because nothing will ever claim them.
 */
export declare function startTranslationRun(options: ISeedOptions): string;
/** Write one test's report; a no-op when the spec declared no seed. */
export declare function writePendingReport(options: ISeedOptions, report: ISeedReport): string | undefined;
/**
 * `globalTeardown`: merge every pending report of this run into the seeds.
 *
 * Called once per run, after every worker has finished, which is what makes it
 * the one writer (`D-632`). The return value is the run's summary line.
 */
export declare function mergePendingTranslations(options: ISeedOptions): {
    label: number;
    translation: number;
    runs: number;
};
//# sourceMappingURL=translate.d.ts.map