import { ITestRunCatalogEntry } from './TestRunPage.js';
export interface ITestRunCatalogSettings {
    /** The scenarios the host allows; defaults to the list passed to the factory. */
    tests?: ITestRunCatalogEntry[];
    /** Set false in an environment where the page must exist but run nothing. */
    enabled?: boolean;
}
/**
 * Build a catalog handler definition a host layer can export. The host file is named `catalogGet.ts`
 * to match this function's name; place it in a handler group the host realm activates.
 */
export declare function createTestRunCatalogHandler(fallback?: ITestRunCatalogEntry[], method?: string): import('@feasibleone/blong').Definition<Record<string, unknown>, import('@feasibleone/blong').AdapterContext>;
//# sourceMappingURL=testRunCatalogHandler.d.ts.map