import { BrowserContext, Page } from '@playwright/test';
import { Portal } from '../playwright.js';
/** The page a worker keeps for the whole of its life. */
export interface ISharedSession {
    /** The one page every test in this worker drives. */
    page: Page;
    /** Its context, so the worker closes exactly what it opened. */
    context: BrowserContext;
    /** Whether the first test has already signed this page in. */
    signedIn: boolean;
}
export declare const test: import('@playwright/test').TestType<import('@playwright/test').PlaywrightTestArgs & import('@playwright/test').PlaywrightTestOptions & import('../playwright.js').IBlongTestOptions & {
    portal: Portal;
} & {
    portal: Portal;
}, import('@playwright/test').PlaywrightWorkerArgs & import('@playwright/test').PlaywrightWorkerOptions & {
    sharedSession: ISharedSession;
}>;
export { expect } from '@playwright/test';
//# sourceMappingURL=shared.d.ts.map