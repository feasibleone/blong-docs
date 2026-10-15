import { ReactNode } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
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
/** Complete app state */
export interface IAppState {
    auth: IAuthState;
    portal: IPortalState;
    toasts: IToast[];
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
    language: string;
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
}
export declare const useAppStore: import('zustand').UseBoundStore<import('zustand').StoreApi<IAppState & IAppActions>>;
//# sourceMappingURL=appStore.d.ts.map