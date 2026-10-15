/** A selectable UI language — `value` matches the translation-dictionary key. */
export interface ILanguageOption {
    value: string;
    label: string;
}
export interface ILanguageSwitcherProps {
    /**
     * Explicit language list — wins over the portal config
     * (`config.portal.languages`).  When neither is set, the switcher falls
     * back to the keys of the configured translation dictionaries.
     */
    languages?: ILanguageOption[];
}
/**
 * LanguageSwitcher — the configurable UI-language selector in the portal
 * menubar, rendered to the left of the profile menu.
 *
 * It offers ad-hoc (client-side) switching: selecting a language calls
 * `appStore.setLanguage`, which swaps the active translation dictionary and
 * activates the matching PrimeReact locale.  The choice is NOT persisted to
 * the user profile — that is the profile page's `preferredLanguage` edit.
 *
 * The available languages are config-driven (`config.portal.languages`), with
 * a fallback to the keys of `config.portal.translations`.  When fewer than
 * two languages are configured the switcher renders nothing.
 */
export declare function LanguageSwitcher({ languages: languagesProp }: ILanguageSwitcherProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=LanguageSwitcher.d.ts.map