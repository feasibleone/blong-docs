import { Locator, Page } from '@playwright/test';
/** How an element is named: a ready-made locator, or a selector to build one from. */
export type ElementRef = Locator | string;
/** Where the docs site keeps images, relative to the repository root. */
export declare const DOCS_IMAGE_ROOT = "docs/blong/docs";
/** True when this run should write the committed images rather than only check the pages. */
export declare function shouldCaptureDocs(): boolean;
/**
 * Absolute path of a docs image.
 *
 * `name` is relative to the docs tree and says where the picture belongs, e.g.
 * `concepts/img/editor-toolbar-read.png` — the tier's own `img/` folder, so the page that
 * shows the image and the image sit in the same directory tree and a relative
 * `![](./img/…)` reference resolves in the source viewer as well as in the built site.
 */
export declare function docsImagePath(name: string): string;
export interface ICaptureDocsOptions {
    /**
     * Image name relative to the docs tree, including the tier's `img/` folder, e.g.
     * `concepts/img/editor-toolbar-read.png`.
     */
    name: string;
    /** What to photograph. Left out, the whole viewport is captured. */
    region?: ElementRef;
    /**
     * What to paint over before capturing — volatile content such as minted ids, session
     * tokens and clocks. A picture whose only difference between two runs is a timestamp
     * is a picture no reviewer can tell apart from a real change.
     *
     * Readonly because a caller passes the same list it gave the baseline: `openPages`
     * forwards its page's `mask` here unchanged, and a mutable parameter would force it to
     * copy a list this function never writes to.
     */
    mask?: readonly ElementRef[];
    /** Photograph the scrollable page rather than the viewport. Defaults to false. */
    fullPage?: boolean;
    /** How long to wait for the region to appear. Defaults to the suite's element budget. */
    timeout?: number;
}
/**
 * Capture one page state for the documentation.
 *
 * Always *waits* for the region, so the spec is a real smoke test on machines that are not
 * writing images. The PNG is written only under {@link shouldCaptureDocs}.
 *
 * Written with `page.screenshot({path})` rather than `toHaveScreenshot`, because the picture
 * belongs in the docs tree under the name the page references — an arbitrary path, not the
 * `*-snapshots/` directory Playwright owns — and because a docs image is reviewed rather than
 * compared. The waiting is therefore explicit: the region has to be visible, and one animation
 * frame has to have been spent, or a widget that fades in is photographed mid-fade.
 */
export declare function captureDocs(portal: {
    page: Page;
    browserErrors: string[];
}, { name, region, mask, fullPage, timeout }: ICaptureDocsOptions): Promise<void>;
/**
 * Fail when a committed docs image is missing or empty.
 *
 * The counterpart of {@link captureDocs} on a run that is not capturing: it cannot compare
 * bytes (font rendering differs between machines), but a page that references an image
 * nobody ever committed, or a capture that wrote a zero-byte file, is a broken page and
 * not a rendering difference. `blong-dev docs check` calls this through the manifest.
 */
export declare function expectDocsImagePresent(name: string): void;
//# sourceMappingURL=docs.d.ts.map