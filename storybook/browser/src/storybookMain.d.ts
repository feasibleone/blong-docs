import { StorybookConfig } from '@storybook/react-vite';
export interface IBlongStorybookMainOptions {
    /**
     * Absolute path of the `.storybook/` directory — pass `__dirname`.
     * Used to build the relative story globs and monorepo fs.allow paths.
     */
    importMetaDirname: string;
    /**
     * Additional stories globs relative to the package root (one level up from
     * `.storybook/`). Defaults to `['../src/**\/*.stories.@(ts|tsx)']`.
     */
    localStories?: string[];
    /**
     * npm package names whose `src/stories/` (or resolved story paths) should
     * be included. The helper resolves each package's location and appends its
     * stories to the `stories` array with correct absolute paths.
     *
     * Adding a realm to a suite:
     * ```ts
     * realmPackages: ['@feasibleone/blong-marine', '@feasibleone/my-realm'],
     * ```
     */
    realmPackages?: string[];
    /**
     * Additional Storybook addons. Merged after the defaults
     * (`@storybook/addon-a11y`).
     */
    extraAddons?: string[];
}
export declare function defineBlongStorybookMain(options: IBlongStorybookMainOptions): StorybookConfig;
//# sourceMappingURL=storybookMain.d.ts.map