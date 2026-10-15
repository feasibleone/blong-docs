/**
 * themeRegistry — the catalogue of selectable themes for the blong-browser
 * theme switcher.
 *
 * Two kinds of entries:
 *  - **PrimeReact theme families** — a family groups the light/dark variants of
 *    a PrimeReact theme (e.g. `lara-light-blue` + `lara-dark-blue`). Families
 *    that ship a single variant (e.g. `saga-blue`, `vela-blue`) expose that one
 *    folder and get no light/dark toggle.
 *  - **blong visual variants** — `glass` and `wood`: CSS layers shipped with
 *    blong-browser (`glass.css` / `wood.css`) applied on top of a base
 *    PrimeReact theme. They have no light/dark variants.
 *
 * `THEME_LOADERS` maps each PrimeReact theme folder name to an `?inline` CSS
 * import. Theme writes the resolved CSS into a single `<style>` element, which
 * keeps exactly one theme active at a time. Loading themes as side-effect
 * imports (the previous approach) is not viable for a runtime switcher: an
 * already-imported theme module is never re-injected, so revisiting a theme
 * would leave a later-loaded theme winning.
 */
/** Matches `PaletteType` in `Theme.tsx` (kept local to avoid an import cycle). */
export type ThemePalette = 'light' | 'dark';
/** A blong visual variant layered on top of a base PrimeReact theme. */
export type BlongThemeVariant = 'glass' | 'wood';
/** One selectable entry in the theme switcher. */
export interface IPrimeThemeOption {
    /** Stable id — persisted in the app store and used as the dropdown value. */
    id: string;
    /** Human-readable label (a product/proper name, so not translated). */
    label: string;
    /** PrimeReact theme folder for the light variant (absent when unavailable). */
    light?: string;
    /** PrimeReact theme folder for the dark variant (absent when unavailable). */
    dark?: string;
    /** Set for blong-only variants (glass/wood); these have no light/dark pair. */
    variant?: BlongThemeVariant;
}
/** A dropdown group of related themes. */
export interface IThemeGroup {
    label: string;
    items: IPrimeThemeOption[];
}
/** Dropdown groups, in display order. Blong variants come first. */
export declare const THEME_GROUPS: IThemeGroup[];
/** Flat list of every selectable theme (derived from `THEME_GROUPS`). */
export declare const THEME_OPTIONS: IPrimeThemeOption[];
/**
 * Option the Theme resolves to when a configured/default folder is not present
 * in the registry. Every legacy folder is registered, so this is a safety net.
 */
export declare const FALLBACK_THEME_OPTION: IPrimeThemeOption;
/**
 * `?inline` imports of every PrimeReact theme. Explicit entries (rather than
 * `import.meta.glob`) keep Vite's bundling deterministic — globbing files under
 * `node_modules` is not reliable across package managers.
 */
export declare const THEME_LOADERS: Record<string, () => Promise<{
    default: string;
}>>;
/** Look up a theme option by its stable id. */
export declare function themeOptionById(id: string): IPrimeThemeOption | undefined;
/** Find the option that owns a given PrimeReact theme folder. */
export declare function themeOptionByFolder(folder: string): IPrimeThemeOption | undefined;
/** The palette a PrimeReact theme folder represents, or `undefined` if unknown. */
export declare function paletteOfFolder(folder: string): ThemePalette | undefined;
/** Resolve the PrimeReact folder to load for an option at a given palette. */
export declare function resolveThemeFolder(option: IPrimeThemeOption, palette: ThemePalette): string;
/**
 * Resolve a `IThemeConfig.name` string — which may be a theme-option id
 * (`lara-blue`, `glass`) or a PrimeReact folder name (`lara-dark-blue`) — to an
 * option plus its palette.
 */
export declare function themeOptionByName(name: string): {
    option: IPrimeThemeOption;
    palette: ThemePalette;
} | undefined;
/** Load the CSS text for a PrimeReact theme folder (empty string if unknown). */
export declare function loadThemeCss(folder: string): Promise<string>;
//# sourceMappingURL=themeRegistry.d.ts.map