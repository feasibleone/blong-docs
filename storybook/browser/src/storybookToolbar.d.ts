import { useAppStore } from './state/appStore.js';
/** Key the toolbar remembers its choices under. */
export declare const STORYBOOK_CHOICES_KEY = "blong.storybook";
/** Where a story reads its data. */
export type StorybookBackend = 'mock' | 'jsonrpc' | 'mle';
/** The presentation choices the toolbar drives. */
export type StorybookDirection = 'ltr' | 'rtl';
/** Every choice the toolbar carries, as read from the globals. */
export interface IBlongStorybookOptions {
    backend?: StorybookBackend;
    role?: string;
    theme?: string;
    language?: string;
    direction?: StorybookDirection;
}
/** Options for {@link blongStorybookToolbar}. */
export interface IBlongStorybookToolbarOptions {
    /**
     * Offer the `backend` and `role` items.  Defaults to `false`; a preview of
     * a realm or suite passes `true` (its stories run on a platform with a
     * backend adapter, so there is something to switch).
     */
    backend?: boolean;
    /**
     * Roles the `role` item offers, in display order.  Defaults to the roles
     * the Storybook dev-server plugin found in `.blong_devrc`, falling back to
     * the seeded test users (`Admin`, `Manager`, `Guest`).
     */
    roles?: string[];
    /** Languages the `language` item offers.  Defaults to `en` and `bg`. */
    languages?: string[];
}
/**
 * Remember the choices a decorator observed.  Only the choices the app store
 * does not already persist are written here (theme and direction live in
 * `blong.theme`), so the toolbar and the portal's own theme switcher agree.
 */
export declare function writeStorybookChoices(options: IBlongStorybookOptions): void;
/**
 * The globals a preview starts from.  Storybook's own `?globals=` URL
 * parameter outranks these, which is what makes a state scriptable.
 */
export declare function blongStorybookInitialGlobals(options?: IBlongStorybookToolbarOptions): Record<string, string>;
/**
 * The `globalTypes` entry for the toolbar.  `dynamicTitle` puts the current
 * value in the toolbar button, so a screenshot shows which state it captured.
 */
export declare function blongStorybookGlobalTypes(options?: IBlongStorybookToolbarOptions): Record<string, unknown>;
/** `globalTypes` + `initialGlobals`, ready to spread into a preview. */
export declare function blongStorybookToolbar(options?: IBlongStorybookToolbarOptions): {
    globalTypes: Record<string, unknown>;
    initialGlobals: Record<string, string>;
};
/** The subset of the Storybook context the toolbar reads. */
export interface IBlongStorybookContext {
    globals?: Record<string, unknown>;
}
/**
 * Read the toolbar's choices out of the Storybook context and remember them.
 *
 * Typed by hand rather than with Storybook's `Decorator` so that this module
 * (and the `./storybook` entry it is exported from) does not depend on the
 * Storybook packages at build time.
 */
export declare function blongStorybookGlobals(context?: IBlongStorybookContext): IBlongStorybookOptions;
/**
 * The choices the reviewer actually changed — the globals that differ from the
 * ones the preview started from.
 *
 * Only those are applied.  A story may set its own `args.lang` or
 * `parameters.theme` (the Validation story renders in Bulgarian that way), and
 * the toolbar's *default* must not quietly override it: a reviewer who has not
 * touched the toolbar has expressed no opinion about the presentation.
 */
export declare function changedStorybookGlobals(options: IBlongStorybookOptions, initial: Record<string, unknown>): IBlongStorybookOptions;
/**
 * Write the presentation globals into the app store.
 *
 * Separate from the decorator so it can be unit-tested without a renderer, and
 * *idempotent*: a no-op when the store already holds the wanted value, because
 * `setTheme` persists to `localStorage` and re-writing it on every story would
 * be noise.
 */
export declare function applyStorybookGlobals(store: Pick<ReturnType<typeof useAppStore.getState>, 'theme' | 'language' | 'setTheme' | 'setDirection' | 'setLanguage'>, options: IBlongStorybookOptions): void;
//# sourceMappingURL=storybookToolbar.d.ts.map