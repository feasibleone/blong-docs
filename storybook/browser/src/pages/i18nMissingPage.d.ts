/**
 * The untranslated-strings page.
 *
 * Lists what this session rendered and the dictionary could not answer — the same
 * report the Playwright seed writer consumes, shown instead of written. Client
 * only: it reads the collector and offers the lines as text, because writing a
 * seed file is the runner's job and two writers of one file would race (`D-634`).
 *
 * The workflow it supports is the one a browser is good at: open the screens that
 * matter, then read the list. A Playwright run covers the ones nobody opens.
 */
export declare function I18nMissingPage(): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=i18nMissingPage.d.ts.map