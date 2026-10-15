export interface IOAuthCallbackProps {
    /** Swaps the authorization code for a session token (auth orchestrator). */
    onExchange: (params: {
        code: string;
        state?: string;
        redirectUri?: string;
    }) => Promise<void>;
    /** Invoked after a successful exchange so the App can drop this screen. */
    onSuccess?: () => void;
    title?: string;
    logoIcon?: string;
}
export declare function OAuthCallback({ onExchange, onSuccess, title, logoIcon }: IOAuthCallbackProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=OAuthCallback.d.ts.map