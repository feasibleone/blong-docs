import { default as React } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
type LoginStep = 'credentials' | 'otp' | 'newPassword';
interface ILoginCredentials {
    username: string;
    password: string;
}
export interface ILoginProps {
    onLogin: (credentials: ILoginCredentials) => Promise<void>;
    onOtp?: (otp: string) => Promise<void>;
    onNewPassword?: (passwords: {
        newPassword: string;
        confirmPassword: string;
    }) => Promise<void>;
    /**
     * Application / brand name displayed next to the logo icon.
     * Also used as the document-level page title on the login screen.
     */
    title?: string;
    /** PrimeIcons class for the brand icon (e.g. 'pi pi-cog'). Default: 'pi pi-circle'. */
    logoIcon?: string;
    /** URL for a brand logo image (renders instead of logoIcon when set). */
    logoUrl?: string;
    /**
     * Pluggable React component rendered above the brand area,
     * e.g. for tenant banners, announcements, or extra branding.
     */
    titleComponent?: React.ComponentType;
    /**
     * Organisation brand area rendered below the login card.
     * Equal height to the product area above — keeps the card centred.
     *
     * Pass a fully custom component via `orgComponent`, or use the
     * built-in row layout via `orgTitle` + `orgIcon` / `orgLogoUrl`.
     */
    orgComponent?: React.ComponentType;
    /** Organisation name shown in the footer brand area. */
    orgTitle?: string;
    /** PrimeIcons class for the org icon (e.g. 'pi pi-building'). */
    orgIcon?: string;
    /** URL for the org logo image (renders instead of orgIcon when set). */
    orgLogoUrl?: string;
    /**
     * Action name dispatched as `component/${registerPage}` when the Register button is
     * clicked.  The resolved component is shown in place of the login form.
     *
     * When set, a "Register" button appears in the top-right corner.
     */
    registerPage?: string;
    /** Label for the Register button.  Default: 'Register'. */
    registerLabel?: string;
    /** External error to display above the form. */
    error?: string;
    loading?: boolean;
    /** Initial step — useful for Storybook previews and unit tests. */
    initialStep?: LoginStep;
    /**
     * Google social-login button.  When `onGoogle` is provided, a
     * "Continue with Google" button is rendered below the login form.
     */
    googleLogin?: {
        onGoogle?: () => void;
        label?: string;
    };
    /** Username the form starts with; see the realm's `login.username` config. */
    defaultUsername?: string;
    /** What belongs in the password field, and how to get one. */
    passwordHint?: {
        text?: string;
        command?: string;
    };
}
export declare function Login({ onLogin, onOtp, onNewPassword, title, logoIcon, logoUrl, titleComponent: TitleComponent, orgComponent: OrgComponent, orgTitle, orgIcon, orgLogoUrl, registerPage, registerLabel, error: externalError, loading: externalLoading, initialStep, googleLogin, defaultUsername, passwordHint, }: ILoginProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Login.d.ts.map