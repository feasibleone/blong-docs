import { Expect } from '@playwright/test';
import { ITestFn } from './model.js';
/** One page: its method, or the method plus the parts that differ for it. */
export interface IOpenPage {
    /** The portal menu method — a semantic triple, e.g. `blong.flow.browse`. */
    method: string;
    /** Baseline name for this page, overriding the default. */
    screenshot?: string;
    /** Wait for this page's table. Defaults to the spec-wide `waitForTableData`. */
    waitForTableData?: boolean;
    /**
     * Text typed into the page's filter (`browse-search`) before capturing.
     *
     * A page whose content grows with every run — a change stream, a list of what
     * has been observed so far — is only stable once its rows are pinned to a
     * stable subset. The same idea as `browseModel`'s `searchText`.
     */
    searchText?: string;
    /**
     * Locators masked in the capture, for a cell whose value cannot repeat: an id
     * minted per execution, a wall clock. Masking is honest here and pinning is
     * not — the cell shows something, it just cannot be the same something twice.
     */
    mask?: readonly string[];
    /**
     * Capture this element instead of the whole page.
     *
     * Filtering pins *which* rows a table shows; it does not pin *how many*, and a
     * stream that grows during a run (a change digest) therefore cannot be captured
     * whole. Capturing the first row is exact — the row is the newest one of its
     * kind, and its content is what the page is for.
     */
    region?: string;
    /** Documentation image for this page, relative to the docs tree. Overrides {@link IOpenPagesOptions.docs}. */
    docs?: string;
}
export interface IOpenPagesOptions {
    /** The pages to open, in order. A bare string takes every default. */
    methods: readonly (string | IOpenPage)[];
    /** Baseline name for a method. Defaults to the triple with dots replaced by dashes. */
    screenshot?: (method: string) => string;
    /** Wait for each page's table to render. Defaults to `true`. */
    waitForTableData?: boolean;
    /** Filter text typed into every page. Defaults to none. */
    searchText?: string;
    /** Prefix every baseline, to keep two specs off the same screenshot files. */
    baselinePrefix?: string;
    /**
     * Also write a documentation image for a page, named relative to the docs tree —
     * `patterns/img/access-role-browse.png`, say. The page is captured with the same
     * `searchText`, `mask` and `region` the baseline uses, so the picture is pinned by the
     * settings a reader can see rather than by a second set that could drift from them.
     *
     * The image is written only when `BLONG_CAPTURE_DOCS=1` (see
     * {@link captureDocs}), so a CI run checks the page without overwriting a committed
     * picture.
     */
    docs?: (method: string) => string | undefined;
    /**
     * Write only the documentation images: skip the baseline comparison entirely.
     *
     * For a spec whose pages exist to be photographed rather than to be guarded — a realm
     * showing a feature the docs describe, where a new baseline would be a snapshot nobody
     * asked to maintain. Requires {@link IOpenPagesOptions.docs}.
     */
    docsOnly?: boolean;
}
/**
 * Register one test per page. Each opens the page from the portal menu, waits for
 * its data and captures it, so a realm states its pages as a list.
 *
 * `waitForTableData: false` is for a page that legitimately has no table — a
 * search page before anything is typed, say — where the wait could only time out.
 */
export declare function openPages(test: ITestFn, expect: Expect, { methods, screenshot, waitForTableData, searchText: defaultSearchText, baselinePrefix, docs, docsOnly, }: IOpenPagesOptions): void;
//# sourceMappingURL=pages.d.ts.map