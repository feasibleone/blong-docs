/**
 * Returns translated text for the given key.
 * Falls back to the key itself if no translation is found.
 *
 * @param id - Translation key (e.g. 'buttons.save') or raw English text
 * @param params - Interpolation parameters (e.g. {name: 'Alice'})
 */
export declare function useText(id: string | undefined, params?: Record<string, string | number | undefined>): string | undefined;
export declare function usePlaceholder(text: string | undefined): {
    placeholder: string;
} | object;
/**
 * useTranslate — returns a stable `t(text)` function for use outside JSX.
 * The returned function looks up the text in the translations store,
 * falling back to the original text.
 */
export declare function useTranslate(): (text: string | undefined) => string | undefined;
/**
 * useOptionLabel - the label of a _static_ option, translated.
 *
 * Only a label the model declares (`options: [{label: 'Female'}]`) is a
 * dictionary key. An option the server produced is data: it arrives already
 * translated, in the language the read was asked for, and is rendered as it
 * came — translating it here a second time would let a dictionary key collide
 * with a record's name (`D-635`).
 */
export declare function useOptionLabel(): (option: {
    value?: unknown;
    label?: string;
}) => string;
/**
 * translatedLabel - the dictionary's answer for a label, for a render path that is
 * a plain function rather than a component.
 *
 * `renderBody` in the table is called from the table's render, so it cannot call a
 * hook and reads the current store instead. It is only for a label the model
 * declares (a static option list); a label that came with a row is data and is
 * rendered as it arrived (`D-635`).
 */
export declare function translatedLabel(label: string): string;
//# sourceMappingURL=useText.d.ts.map