import { Plugin } from 'vite';
/** One login the toolbar can offer. */
export interface IStorybookRole {
    username: string;
    password: string;
}
/** The resolved `storybook:` configuration. */
export interface IStorybookBackendConfig {
    target: string;
    roles: Record<string, IStorybookRole>;
}
/** Resolve the `storybook:` section of `.blong_devrc` over the built-in defaults. */
export declare function readStorybookBackendConfig(cwd?: string): IStorybookBackendConfig;
/**
 * The `define` entries the toolbar reads to know which roles to offer.
 *
 * The value is injected rather than fetched because Storybook needs the items
 * synchronously when it builds the toolbar.
 */
export declare function storybookBackendDefine(cwd?: string): Record<string, string>;
/**
 * The Vite plugin.  Mount it in a Storybook `viteFinal` (`storybookMain` adds it
 * automatically) — it is inert in a production build, where `configureServer`
 * never runs.
 */
export declare function storybookBackend(cwd?: string): Plugin;
//# sourceMappingURL=storybookBackend.d.ts.map