import { defineConfig, PlaywrightTestConfig } from '@playwright/test';
import { IBlongTestOptions } from '../playwright.js';
type BlongConfig = PlaywrightTestConfig<IBlongTestOptions> & {
    /**
     * npm package names whose `test/` directories should be included.
     * Each realm runs as a separate Playwright project.
     *
     * Adding a realm to a suite:
     * ```ts
     * realmPackages: ['@feasibleone/blong-marine', '@feasibleone/my-realm'],
     * ```
     */
    realmPackages?: string[];
    /**
     * Port for the backend (blong/blong-watch) server.
     * Defaults to env `PLAYWRIGHT_BACKEND_PORT` or `8080`.
     */
    backendPort?: number;
    /**
     * Port for the frontend (Vite) dev server.
     * Defaults to env `PLAYWRIGHT_FRONTEND_PORT` or `5173`.
     */
    frontendPort?: number;
};
export declare function defineBlongConfig(overrides?: BlongConfig): ReturnType<typeof defineConfig<IBlongTestOptions>>;
export {};
//# sourceMappingURL=config.d.ts.map