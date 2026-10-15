import { IPrimeThemeOption } from './themeRegistry.js';
import { ReactNode } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
export type PaletteType = 'light' | 'dark';
export type ThemeType = 'big' | 'compact';
/**
 * Visual variant layered on top of the selected palette theme:
 * - `standard` (default) — the plain PrimeReact theme.
 * - `glass` — high-contrast grayscale glass look layered on the palette
 *   theme (matte slate canvas, glossy charcoal panels with sharp skewed
 *   glares + 3D bevels, dark glass input plates, rectangular polished glass
 *   buttons, grayscale checkboxes and table rows). All glass rules live in
 *   `glass.css` and are scoped under the `blong-app-glass` class Theme adds
 *   to its wrapper, so the base theme stays intact unless `variant: 'glass'`
 *   is requested.
 */
export type ThemeVariant = 'standard' | 'glass' | 'wood';
/**
 * Maps each palette to the PrimeReact theme name for light and dark modes.
 * Theme CSS is at: `primereact/resources/themes/<name>/theme.css`
 */
export declare const PRIMEREACT_PALETTE_THEMES: Record<ThemeType, Record<PaletteType, string>>;
/** Font size in px for each palette — compact variants use 14, others 16. */
export declare const PALETTE_FONT_SIZES: Record<ThemeType, number>;
export interface IThemeConfig {
    type?: ThemeType;
    palette?: PaletteType;
    direction?: 'ltr' | 'rtl';
    primary?: string;
    variant?: ThemeVariant;
    /**
     * Explicit theme selection — either a theme-option id (`lara-blue`,
     * `glass`) or a PrimeReact theme folder name (`lara-dark-blue`). When set
     * it overrides the `type` + `palette` mapping below. The theme switcher
     * writes its choice to the app store, which outranks this default.
     */
    name?: string;
    /**
     * Whether to render the theme switcher in the portal menubar.
     * Defaults to `true` — set `false` to hide it for an app.
     */
    switcher?: boolean;
    /** Override the font size (px). Defaults to palette-based size. */
    fontSize?: number;
    /**
     * Custom PrimeReact locale data per language code.
     * Each entry is registered via addLocale(lang, options).
     * Only needed for locales not already bundled with PrimeReact.
     */
    languages?: Record<string, object>;
}
/**
 * Effective theme state exposed to descendants (notably the theme switcher in
 * the portal menubar). `selectTheme` / `selectPalette` persist the choice via
 * `appStore.setTheme`.
 */
export interface IThemeContextValue {
    /** Effective configuration (prop defaults merged with the user's choice). */
    config: IThemeConfig;
    /** Resolved theme-option id. */
    optionId: string;
    /** Resolved theme-option descriptor. */
    option: IPrimeThemeOption;
    /** Effective palette. */
    palette: PaletteType;
    /** True when the current theme offers both light and dark variants. */
    paletteToggle: boolean;
    /** Whether the theme switcher should render (`IThemeConfig.switcher`). */
    switcher: boolean;
    /** Select a theme option by id. */
    selectTheme: (themeId: string) => void;
    /** Select the light/dark palette for the current theme. */
    selectPalette: (palette: PaletteType) => void;
}
/**
 * Access the effective theme and the switcher setters from any descendant of
 * `<Theme>` (e.g. the portal menubar's theme switcher).
 */
export declare function useTheme(): IThemeContextValue;
/**
 * The palette in force, for a component that may be rendered outside `<Theme>`.
 *
 * `useTheme` throws where there is no provider, which is right for a component that
 * *needs* the theme: without one it is being used wrongly, and a crash names the
 * mistake. A viewer is not such a component — it draws what it is handed, and which
 * colours it draws in is an appearance rather than a requirement — so it reads the
 * palette when one is in force and gets `undefined` when none is, leaving the
 * meaning of "no theme" to the caller.
 */
export declare function useThemePalette(): PaletteType | undefined;
interface IThemeProps {
    theme: IThemeConfig;
    children: ReactNode;
}
export declare function Theme({ theme, children }: IThemeProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Theme.d.ts.map