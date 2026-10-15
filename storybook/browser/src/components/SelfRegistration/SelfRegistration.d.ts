export interface ISelfRegistrationCredentials {
    emailAddress: string;
    password: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    birthDate?: string;
    gender?: string;
    nationality?: string;
    occupation?: string;
}
export interface ISelfRegistrationProps {
    onRegister: (credentials: ISelfRegistrationCredentials) => Promise<void>;
    /** Starts the Google OAuth flow (window redirect). Optional. */
    onGoogle?: () => Promise<void> | void;
    /** Return to the login screen. Optional. */
    onBack?: () => void;
    title?: string;
    logoIcon?: string;
    logoUrl?: string;
    orgTitle?: string;
    orgIcon?: string;
    orgLogoUrl?: string;
    /** External error to display above the form. */
    error?: string;
    loading?: boolean;
    /** Label for the submit button. Default: 'Create account'. */
    submitLabel?: string;
}
export declare function SelfRegistration({ onRegister, onGoogle, onBack, title, logoIcon, logoUrl, orgTitle, orgIcon, orgLogoUrl, error: externalError, loading: externalLoading, submitLabel, }: ISelfRegistrationProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SelfRegistration.d.ts.map