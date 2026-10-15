import { IHandlerProxy, ILogger, IMeta } from '@feasibleone/blong';
import { QueryClient } from '@tanstack/react-query';
import { ReactNode } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { TranslationDict } from '../state/appStore.js';
import { ISchemaRegistry } from '../types/schema.js';
/** Portal-specific UI configuration accessed from IHandlerProxy.config.portal */
export interface IBlongPortalConfig {
    /** URL to fetch the OpenAPI schema document from (default: '/openapi.json') */
    schemaUrl?: string;
    /** Application base URL */
    baseUrl?: string;
    /** Enable debug mode */
    debug?: boolean;
    /**
     * TEST-ONLY: when `true`, the wrapped handler proxy is exposed as the
     * `window.__blongHandler` global so Playwright / E2E tests can invoke
     * server methods directly from the page.  Exposing the handler in a real
     * deployment would let any script call privileged methods, so this must
     * only ever be enabled by a test intent (e.g. the `playwright` intent) —
     * never in production.
     */
    testHook?: boolean;
    /**
     * Login route — when set, the global error dialog shows a "Login" button
     * that navigates here. Typically used when a dropdown / load error indicates
     * an expired session (401 / unauthenticated).
     */
    loginRoute?: string;
    /** Login screen configuration (self-registration / social login). */
    login?: {
        /**
         * Action dispatched as `component/${registerPage}` when the Register
         * button is clicked on the Login screen.
         */
        registerPage?: string;
        /**
         * Value the username field starts with. A realm that authenticates against something other
         * than a password store — a cluster identity, say — names the account here, because the
         * form requires a name even when the secret is the whole credential.
         */
        username?: string;
        /**
         * Help about the password field, revealed by a question-mark button beside its label: what
         * belongs there, and the command that produces one. Kept beside the field rather than as
         * prose on the page, so it is there when someone needs it and out of the way otherwise.
         */
        tokenHint?: {
            text?: string;
            command?: string;
        };
    };
    /** Google OAuth configuration for the "Continue with Google" flow. */
    google?: {
        /** Authorization server base URL (real Google, or the local mock). */
        baseUrl?: string;
        clientId?: string;
        redirectUri?: string;
        scope?: string;
    };
    /**
     * Per-language translation dictionaries (English key → translated string).
     * When provided, the app registers them and `setLanguage(language)` swaps
     * the active table to the matching language's dictionary — so the UI locale
     * follows the user's preferred language returned at login.
     */
    translations?: Record<string, TranslationDict>;
    /**
     * UI languages offered by the menubar language switcher (ad-hoc switching).
     * Each entry is `{value, label}` where `value` matches a translation-
     * dictionary key.  When omitted, the switcher derives the list from the
     * keys of `translations` (and hides when fewer than two are available).
     */
    languages?: Array<{
        value: string;
        label: string;
    }>;
}
type AnyHandlerProxy = IHandlerProxy<Record<string, unknown>>;
/** Context value shape */
export interface IBlongContextValue {
    /** Handler proxy — call methods via handler.subjectObjectPredicate(params, $meta) */
    handler: AnyHandlerProxy['handler'];
    /** Runtime configuration — portal UI settings in config.portal */
    config: Record<string, unknown> & {
        portal?: IBlongPortalConfig;
    };
    /** Injected Library functions from the handler group */
    lib: AnyHandlerProxy['lib'];
    /** Typed errors from the realm's error layer */
    errors: AnyHandlerProxy['errors'];
    /** Schema registry for OpenAPI schema resolution */
    schemaRegistry: ISchemaRegistry;
    /** TanStack Query client (created internally, exposed for advanced use) */
    queryClient: QueryClient;
    /** Logger instance */
    log?: ILogger;
}
/** Hook to access the blong context value — throws if used outside provider */
export declare function useBlong(): IBlongContextValue;
export interface IBlongProviderProps {
    /**
     * Handler proxy injected by the browser platform (from ready.ts).
     * config.portal may contain schemaUrl, baseUrl, debug, loginRoute.
     */
    handlerProxy: IHandlerProxy<{
        portal?: IBlongPortalConfig;
    } & Record<string, unknown>>;
    /** Logger instance */
    log?: ILogger;
    /** Custom schema registry (default: singleton) */
    schemaRegistry?: ISchemaRegistry;
    children: ReactNode;
}
/** Provider component — wrap your application root with this */
export declare function BlongProvider({ handlerProxy, schemaRegistry, log, children, }: IBlongProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Create a minimal IHandlerProxy from a dispatch function.
 * Useful in tests and Storybook where the full runtime is not available.
 */
export declare function makeHandlerProxy(dispatch: (method: string, params?: Record<string, unknown>, $meta?: IMeta) => Promise<unknown>, config?: {
    portal?: IBlongPortalConfig;
} & Record<string, unknown>): IHandlerProxy<{
    portal?: IBlongPortalConfig;
} & Record<string, unknown>>;
export {};
//# sourceMappingURL=BlongContext.d.ts.map