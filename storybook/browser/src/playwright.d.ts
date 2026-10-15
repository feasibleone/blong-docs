import { expect, Page } from '@playwright/test';
export { expect, Page };
/**
 * Default timeout (ms) for element-level waits in the Portal helpers.
 *
 * Kept deliberately short (3-5s) so a genuinely missing element fails fast
 * instead of hanging on the default ~30s test timeout. Test/global timeouts
 * stay generous because network + dev-server compile can still be slow.
 *
 * Override with the `BLONG_ELEMENT_TIMEOUT` env var to iterate faster: a page
 * that fails to render then costs seconds per element instead of minutes.
 */
export declare const BLONG_ELEMENT_TIMEOUT: number;
/**
 * Timeout (ms) for the app's **first** element after a navigation.
 *
 * The element budget above covers elements inside an application that is already
 * running. The login form is not one of them: the dev server serves the module graph
 * one file per request, so the app starts executing seconds after `page.goto()` has
 * resolved with `load`. Measured in CI, the app's first boot log appears 3-4.5s after
 * the document loaded and the form is in the DOM ~6s in, and the page is blank until
 * then — with several suites booting in parallel on a cold runner it is slower still.
 *
 * Bounding that wait by `BLONG_ELEMENT_TIMEOUT` is not "failing fast on a missing
 * element", it is racing the server: the fill is given its whole budget while there is
 * no form to fill, and a run where everything renders correctly is reported as
 * `page.fill: Timeout 5000ms exceeded`.
 *
 * 15s is roughly 2.5x the slowest boot measured in CI (F-223), and stays inside the
 * tightest test budget in the repository: `core/blong-realm` runs 20s smoke checks, and
 * a boot wait longer than the test it belongs to would be cut off by the test timeout
 * instead of reporting itself (D-246). Override with `BLONG_BOOT_TIMEOUT` to iterate
 * faster.
 */
export declare const BLONG_BOOT_TIMEOUT: number;
/** Options configurable via playwright.config.ts `use` block or CLI. */
export interface IBlongTestOptions {
    /** Login username. */
    blongUsername: string;
    /** Login password. */
    blongPassword: string;
    /** Grant all permissions after login. Defaults to `false`; set to `true` in suites that need it. */
    blongPermissions: boolean;
    /**
     * Browser messages this spec provokes on purpose, so the run does not print them.
     *
     * A spec that asserts a refusal (a role without the capability) or exercises the
     * renewal path (a revoked session) knows which lines the browser will report;
     * declaring them here keeps the evidence — the message is still collected in
     * `Portal.browserErrors` and still attached to a failure — while leaving it out of
     * the run's log, which is otherwise a wall of lines every reader learns to skip.
     *
     * **Substrings, not regular expressions.** A fixture option crosses Playwright's
     * worker boundary and arrives as plain JSON, where a `RegExp` is an empty object —
     * `patterns.some is not a function`, thrown the first time the page said anything.
     * The line a pattern is matched against is the whole note, URL and line number
     * included, so `'rpc/blong/flow/find'` finds a message whose own text names no URL.
     *
     * Hooked to the spec rather than to the message: "this spec expects this" is a
     * statement the author makes and a reviewer can check, where a global ignore list
     * would hide the same line in the spec that does *not* expect it.
     */
    blongExpectedBrowserErrors?: readonly string[];
}
/** How a spec declares the browser messages it provokes on purpose. */
export interface IPortalOptions {
    /** Messages not to echo; recorded and reported exactly as the others are. */
    expected?: readonly string[];
}
/**
 * Portal helper — wraps common portal interactions
 * so tests read like user stories rather than CSS selector chains.
 */
export declare class Portal {
    #private;
    readonly page: Page;
    /**
     * Everything the browser said during the session — console errors and warnings,
     * and uncaught exceptions.
     *
     * Collected, not just printed: a broken page is otherwise reported as whichever
     * element never appeared, and the reason stays in a trace nobody opens.
     */
    readonly browserErrors: string[];
    /** The first uncaught exception, if the page threw — the app is dead after it. */
    fatalError: Error | undefined;
    constructor(page: Page, options?: IPortalOptions);
    /** A failure carrying everything the browser said — never a bare timeout. */
    failure(reason: unknown): Error;
    /** Log in via the Login form. Waits for the portal menubar to appear. */
    login(username: string, password: string): Promise<void>;
    /**
     * Click a portal menu item by its semantic triple.
     * For grouped menus, first opens the parent group.
     *
     * @param method - semantic triple, e.g. 'marine.coral.browse'
     */
    menuClick(method: string): Promise<void>;
    /** Close a tab. Finds the close button inside the tab header. */
    tabClose(tabId: string): Promise<void>;
    /** Click the Save button and wait for the success icon. */
    save(): Promise<void>;
    /** Click the Edit button to enter edit mode. */
    edit(): Promise<void>;
    /** Click the Reset/Cancel button. */
    cancel(): Promise<void>;
    /** Click the Refresh button. */
    refresh(): Promise<void>;
    /**
     * Fill a text input by its field name.
     * Fields use `name` attributes like `coral.coralName`.
     */
    fill(fieldName: string, value: string): Promise<void>;
    /** Fill a textarea by its field name. */
    fillTextarea(fieldName: string, value: string): Promise<void>;
    /** Click a cell in a table. Uses data-testid pattern: `{fieldName}-{rowIndex}`. */
    tableRowClick(fieldName: string, rowIndex: number): Promise<void>;
    /**
     * Click a row that contains specific text in a table column.
     * Waits for the row to appear (useful after search/filter).
     */
    tableRowClickByText(text: string): Promise<void>;
    /** Click the Add button on a table widget. */
    tableAdd(fieldName: string): Promise<void>;
    /** Click the Delete button on a table widget. */
    tableDelete(fieldName: string): Promise<void>;
    /** Wait for the form to finish loading (loading skeleton disappears). */
    waitForFormLoad(): Promise<void>;
    /**
     * Wait for form data to be populated from the API.
     * Use after `waitForFormLoad()` when opening an existing record,
     * to ensure the API response has been received before filling fields.
     */
    waitForFormData(): Promise<void>;
    /** Wait for the table data to load (rows appear after loading completes). */
    waitForTableData(): Promise<void>;
}
/**
 * Playwright test fixture extended with blong portal and coverage support.
 *
 * The `portal` fixture automatically:
 * - Navigates to the app
 * - Logs in with configured credentials
 * - Provides a Portal helper for menu clicks, form fills, saves, etc.
 *
 * Browser-side JavaScript coverage is collected automatically when
 * `NODE_V8_COVERAGE` environment variable is set (by `blong-dev playwright --coverage`).
 * The coverage fixture runs silently and produces V8-format JSON files
 * compatible with `c8 report` aggregation.
 */
export declare const test: import('@playwright/test').TestType<import('@playwright/test').PlaywrightTestArgs & import('@playwright/test').PlaywrightTestOptions & IBlongTestOptions & {
    portal: Portal;
}, import('@playwright/test').PlaywrightWorkerArgs & import('@playwright/test').PlaywrightWorkerOptions>;
//# sourceMappingURL=playwright.d.ts.map