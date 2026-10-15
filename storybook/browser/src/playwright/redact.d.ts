import { Page } from '@playwright/test';
/**
 * Redacting volatile *text*, instead of the elements that carry it.
 *
 * `mask` — Playwright's, and this package's captures (`pages.ts`, `docs.ts`) — paints an
 * element's box. That is the right answer when the whole cell is noise, and the wrong one
 * as soon as part of it is the point: a pod is `coredns-5d78c9869d-4tm59`, where only the
 * ReplicaSet hash and the pod suffix vary, so painting the Name column hides the workload
 * the table is about. The same for the navigator tree that lists those names, and for an
 * identity column whose value is a random `resourceVersion`: the column, its header and
 * the table's shape are all worth seeing, and only the value is not.
 *
 * So this replaces the *substring*: every match becomes a placeholder (`###`), and the
 * surrounding text, the layout and the columns stay as they are.
 *
 * Two consequences worth knowing before reaching for it:
 *
 * 1. The page is rewritten for the rest of the test. Playwright gives each test its own
 *    page, so a redaction cannot leak into another test, and a navigation resets the DOM
 *    — read any text a later step depends on (a row to click, an id to follow) *before*
 *    redacting it.
 * 2. The match is per text node, so a value split across elements (`<span>a</span>b`) is
 *    two texts and neither matches a pattern written for the whole. Elements that are
 *    not rendered (`script`, `style`) are skipped, and shadow roots are not crossed.
 */
/** What to hide: a literal substring (matched as text), or a pattern. */
export type IRedactPattern = string | RegExp;
/** Where to redact, and what to put in place of a match. */
export interface IRedactPageTextOptions {
    /** Selector of the subtrees to rewrite (default: the whole body). */
    within?: string;
    /** What a match becomes (default `###`). */
    placeholder?: string;
}
/** The default placeholder — enough to say "a value was here", no more. */
export declare const REDACTED = "###";
/**
 * Replace every match in `text` with the placeholder.
 *
 * A string is matched literally and a pattern as a regex. "Generic" means the caller
 * names the volatile substring rather than this guessing at one: a rule that hid every
 * long word would redact prose, and a golden that has lost a sentence it never meant to
 * hide is worse than one with a random id in it.
 */
export declare function redactText(text: string, patterns: readonly IRedactPattern[], placeholder?: string): string;
/**
 * Redact `patterns` in the text of everything `within` matches.
 *
 * The rule for a pattern is `redactText`'s, restated in the page because a `RegExp`
 * cannot cross into one: both halves are three lines, and neither should grow logic the
 * other does not have.
 */
export declare function redactPageText(page: Page, patterns: readonly IRedactPattern[], { within, placeholder }?: IRedactPageTextOptions): Promise<void>;
//# sourceMappingURL=redact.d.ts.map