import { ReactNode } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { IFeedbackItem } from '@feasibleone/blong';
import { IFormatConfig } from '../lib/format.js';
import { ActionRegistry, IBlongError } from '../types/action.js';
import { IAuthState, IUserProfile, PermissionMap } from '../types/permission.js';
import { IPortalConfig, IPortalState, ITab } from '../types/portal.js';
/** Toast notification */
export interface IToast {
    id: string;
    severity: 'success' | 'info' | 'warn' | 'error';
    summary?: string;
    detail?: ReactNode;
    life?: number;
}
/** Translation dictionary */
export type TranslationDict = Record<string, string>;
/** Inline hint shown near a button (success or error feedback) */
export interface IHint {
    target: HTMLElement | null;
    message: string;
    error: boolean;
}
/**
 * The user's explicit theme choice (set by the theme switcher). Undefined
 * fields mean "not chosen" — the Theme component then derives them from the
 * `IThemeConfig` prop. Persisted to `localStorage` so the choice survives a
 * reload.
 */
export interface IThemeSelection {
    /** Selected theme-option id (e.g. `lara-blue`, `glass`). */
    themeId?: string;
    /** Selected palette for themes that offer both light and dark variants. */
    palette?: 'light' | 'dark';
    /**
     * Text direction. Set by the Storybook toolbar (the portal itself offers no
     * direction control), so it lives beside the user's theme choice and shares
     * its persistence — `Theme` reads it in preference to its `direction` prop,
     * which is how a toolbar toggle reaches a story whose container owns `Theme`.
     */
    direction?: 'ltr' | 'rtl';
}
/** One language's database half: the label dictionary. */
export interface ITranslationBundle {
    label?: TranslationDict;
}
/**
 * Feedback mode's draft (`@@T-461`).
 *
 * `active` is the only member the deep components subscribe to — a card, a field
 * row or a `Text` asks "am I addressable?" and nothing else. Hover geometry and
 * callout placement live in the overlay's own state, so moving the pointer over a
 * page does not re-render the page.
 */
export interface IFeedbackDraft {
    active: boolean;
    /** Draft comments by target id; one box per target, so a second click edits the first. */
    items: Record<string, IFeedbackItem>;
}
/** Complete app state */
export interface IAppState {
    auth: IAuthState;
    portal: IPortalState;
    toasts: IToast[];
    feedback: IFeedbackDraft;
    loader: {
        active: boolean;
        message?: string;
        count: number;
    };
    translations: TranslationDict;
    /**
     * Per-language dictionaries registered by the app via
     * `setTranslationsByLanguage`.  When non-empty, `setLanguage` swaps the
     * active `translations` table to the matching language's dictionary
     * (English falls back to an empty dict = English strings).
     */
    translationsByLanguage: Record<string, TranslationDict>;
    /**
     * The database half, per language: the label dictionary. Loaded after login
     * and on a language switch, so a corrected translation needs no release. A
     * record's own name is not here on purpose — it is translated by the query
     * that reads it (`D-635`).
     */
    translationBundle: Record<string, ITranslationBundle>;
    /**
     * Reads one language's bundle from the server. `App` registers it from the
     * merged portal configuration, so a suite without `blong-core` simply has
     * none and the bundled dictionary remains the whole answer.
     */
    translationLoader?: (language: string) => Promise<ITranslationBundle>;
    /**
     * A dictionary set directly through `setTranslations`.
     *
     * It is the last layer and survives a language switch, which is the contract
     * tests and Storybook rely on: set the dictionary, then set the language.
     * `setTranslationsByLanguage` clears it, because that call declares the
     * configuration layer instead.
     */
    translationOverride?: TranslationDict;
    language: string;
    /**
     * Formatting configuration, resolved user → system → the language default by
     * `useFormatValue` (see `lib/format.ts`). The user layer is the person's own
     * preference and arrives with the profile; the system layer is the app's.
     */
    format: {
        user?: IFormatConfig;
        system?: IFormatConfig;
    };
    actions: ActionRegistry;
    error: IBlongError | null;
    hint: IHint | null;
    /** Explicit theme choice made via the theme switcher (see IThemeSelection). */
    theme: IThemeSelection;
    /**
     * When true, the login popup is shown — set when an operation hits an
     * expired/invalid session (401) and the client-side token renewal failed.
     * The user logs in via the popup and re-invokes the operation.
     */
    loginPrompt: boolean;
}
/** App store actions */
export interface IAppActions {
    setToken: (token: string | null) => void;
    setProfile: (profile: IUserProfile | null) => void;
    setPermissions: (permissions: PermissionMap) => void;
    logout: () => void;
    openTab: (tab: ITab) => void;
    closeTab: (id: string) => void;
    setActiveTab: (id: string | null) => void;
    setTabDirty: (id: string, dirty: boolean) => void;
    setTabTitle: (id: string, title: string) => void;
    updateTabComponent: (id: string, component: React.ComponentType<Record<string, unknown>>) => void;
    setPortalConfig: (config: IPortalConfig | null) => void;
    showToast: (toast: Omit<IToast, 'id'>) => void;
    clearToast: (id: string) => void;
    clearAllToasts: () => void;
    setLoading: (active: boolean, message?: string) => void;
    setTranslations: (dict: TranslationDict) => void;
    setTranslationsByLanguage: (dicts: Record<string, TranslationDict>) => void;
    setLanguage: (language: string) => void;
    setTranslationBundle: (language: string, bundle: ITranslationBundle) => void;
    setTranslationLoader: (loader?: (language: string) => Promise<ITranslationBundle>) => void;
    /**
     * Switch language and load its database bundle when it is not loaded yet.
     * The synchronous `setLanguage` is the one every caller keeps using; this is
     * the awaitable form a test or the login handler wants.
     */
    languageActivate: (language: string) => Promise<void>;
    /** Set one layer of the formatting configuration; `undefined` clears it. */
    setFormat: (scope: 'user' | 'system', config: IFormatConfig | undefined) => void;
    registerActions: (actions: ActionRegistry) => void;
    showError: (error: IBlongError) => void;
    clearError: () => void;
    /** Replace the explicit theme selection (persisted to localStorage). */
    setTheme: (selection: IThemeSelection) => void;
    /**
     * Merge a text direction into the theme selection. Separate from `setTheme`
     * because that one replaces: a caller that only knows the direction (the
     * Storybook toolbar) must not discard the theme and palette beside it.
     */
    setDirection: (direction: 'ltr' | 'rtl') => void;
    setLoginPrompt: (visible: boolean) => void;
    showHint: (target: HTMLElement | null, message: string, error: boolean) => void;
    clearHint: () => void;
    /** Enter or leave the mode. Leaving keeps the draft until `feedbackReset`. */
    feedbackActivate: (active: boolean) => void;
    /** Add or replace one draft item, keyed by its logical target id. */
    feedbackAdd: (item: IFeedbackItem) => void;
    /** Patch one draft item (its comment as the person types). */
    feedbackUpdate: (targetId: string, patch: Partial<IFeedbackItem>) => void;
    feedbackRemove: (targetId: string) => void;
    /** Drop the whole draft and clear the target rings. */
    feedbackReset: () => void;
}
export declare const useAppStore: import('zustand').UseBoundStore<import('zustand').StoreApi<IAppState & IAppActions>>;
//# sourceMappingURL=appStore.d.ts.map