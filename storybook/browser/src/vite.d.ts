import { UserConfig, defineConfig } from 'vite';
/**
 * Name of the plugin that keeps fixtures out of an app build.
 *
 * Exported so `defineBlongStorybookMain` removes the very same plugin instead of
 * repeating the string: Storybook is the one build that wants the real rows.
 */
export declare const DROP_FIXTURES = "blong-drop-fixtures";
export interface IBlongViteOptions {
    /**
     * `import.meta.url` from the caller's vite.config.ts.
     * Used to derive the correct `server.fs.allow` path for primeicons assets.
     */
    importMetaUrl: string;
    /** Any Vite UserConfig overrides merged on top of the defaults. */
    overrides?: UserConfig;
    /** Override the RPC proxy target (defaults to 'http://localhost:8080'). */
    rpcTarget?: string;
}
export declare function defineBlongViteConfig({ importMetaUrl, overrides, rpcTarget, }: IBlongViteOptions): ReturnType<typeof defineConfig>;
//# sourceMappingURL=vite.d.ts.map