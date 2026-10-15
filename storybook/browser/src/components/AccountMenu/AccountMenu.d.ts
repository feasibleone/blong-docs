/**
 * AccountMenu — the top-right account element in the portal menubar.
 *
 * Renders an avatar showing the current user's initials (derived from the
 * store profile — populated from the configured profile-get method — falling
 * back to a generic user icon). Clicking it opens a small menu with:
 *   - "Profile" — opens the configured profile page as a portal tab
 *   - "Sign out" — revokes the session and resets auth state
 *
 * The profile wiring is config-driven (see `IPortalConfig.profile`): `page`
 * is the component method that returns the profile page, `get` is the server
 * method returning the caller's own profile for the avatar. When neither is
 * configured the avatar still renders but only offers "Sign out".
 */
export interface IAccountMenuProps {
    /** Component method that opens the profile page (e.g. 'access.user.profile'). */
    profilePage?: string;
    /** Server method returning the caller's profile (e.g. 'access.profile.get'). */
    profileGet?: string;
}
export declare function AccountMenu({ profilePage, profileGet }: IAccountMenuProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AccountMenu.d.ts.map