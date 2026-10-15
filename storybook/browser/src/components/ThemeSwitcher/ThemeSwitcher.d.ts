export interface IThemeSwitcherProps {
    /** Extra class name for the wrapper. */
    className?: string;
}
/**
 * ThemeSwitcher — the theme selector shown in the portal menubar, to the left
 * of the language switcher.
 *
 * A dropdown picks the theme family (Light/Dark variants of a family share one
 * entry; Glass/Wood are standalone). When the selected theme provides both a
 * light and a dark variant, a single borderless sun/moon icon button appears
 * next to the dropdown to flip between them. The icon shows the mode the button
 * switches **to**: a moon while light mode is active, a sun while dark mode is
 * active.
 *
 * The choice is written to `appStore.setTheme` (persisted to localStorage) and
 * applied by the `<Theme>` provider. Render it inside `<Theme>` so `useTheme()`
 * has the effective theme.
 *
 * Renders nothing when `IThemeConfig.switcher` is `false`.
 */
export declare function ThemeSwitcher({ className }: IThemeSwitcherProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=ThemeSwitcher.d.ts.map