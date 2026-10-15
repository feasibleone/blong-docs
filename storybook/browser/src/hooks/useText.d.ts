/**
 * Returns translated text for the given key.
 * Falls back to the key itself if no translation is found.
 *
 * @param id - Translation key (e.g. 'buttons.save') or raw English text
 * @param params - Interpolation parameters (e.g. {name: 'Alice'})
 */
export declare function useText(id: string, params?: Record<string, string | number>): string;
/**
 * useTranslate — returns a stable `t(text)` function for use outside JSX.
 * The returned function looks up the text in the translations store,
 * falling back to the original text.
 */
export declare function useTranslate(): (text: string) => string;
//# sourceMappingURL=useText.d.ts.map