import { TestType } from '@playwright/test';
/**
 * Creates a new test object extended with browser-side coverage collection.
 *
 * The fixture runs automatically (`auto: true`) — it starts JS coverage
 * collection at the beginning of each test and writes the results to
 * `NODE_V8_COVERAGE` directory after the test completes.
 *
 * @param testType - The Playwright test object to extend.
 * @returns A new test object with the coverage fixture added.
 */
export declare function coverageFixture<TestArgs extends Record<string, any>, WorkerArgs extends Record<string, any>>(testType: TestType<TestArgs, WorkerArgs>): TestType<TestArgs, WorkerArgs>;
/**
 * Pre-extended test with browser-side coverage collection enabled.
 *
 * Use this instead of importing from `@feasibleone/blong-browser/playwright`
 * when you want to collect browser JS coverage during test runs.
 *
 * ```ts
 * import {test, expect} from '@feasibleone/blong-browser/playwright/coverage';
 * ```
 *
 * Note: This test does NOT include the `portal` fixture. Compose fixtures
 * when you need both coverage and portal support:
 * ```ts
 * import {test as baseTest, expect} from '@feasibleone/blong-browser/playwright';
 * import {coverageFixture} from '@feasibleone/blong-browser/playwright/coverage';
 * const test = coverageFixture(baseTest);
 * ```
 */
export declare const test: TestType<import('@playwright/test').PlaywrightTestArgs & import('@playwright/test').PlaywrightTestOptions, import('@playwright/test').PlaywrightWorkerArgs & import('@playwright/test').PlaywrightWorkerOptions>;
//# sourceMappingURL=coverage.d.ts.map