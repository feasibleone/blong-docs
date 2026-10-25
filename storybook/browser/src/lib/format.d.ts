/**
 * `formatValue` — one place that turns a stored value into the text a reader sees.
 *
 * ### The specification
 *
 * A date column in a table, a date input in a form and a report cell show the same
 * field, so they format it the same way, through `Intl`:
 *
 * - **Dates are `medium`** — `Apr 2, 2026` in English, `2.04.2026 г.` in Bulgarian.
 *   A numeric style cannot be read across languages: `04/02/2026` is April 2nd in one
 *   locale and 4 February in another, so the locale's own month name is the only
 *   spelling that needs no key beside it.
 * - **Times are `medium`**, which leaves 12- or 24-hour to the locale — `7:15:32 AM`
 *   in English, `7:15:32` in Bulgarian — and keeps the seconds, because an import or
 *   an audit compares two of them.
 * - **Numbers are the locale's**, grouped by what the value means: a measure groups
 *   (`1,275.5`), a count, rank or year does not (`2032`).
 *
 * ### Where the settings come from
 *
 * Every part of it is configuration, and the layers resolve most specific first
 * (`@@D-616`):
 *
 * 1. **A column's own `widget.formatOptions`** — raw `Intl` options for its type.
 * 2. **The user's preference** — `setFormat('user', …)`, loaded with the profile.
 * 3. **The system-wide configuration** — `setFormat('system', …)`, set by the app.
 * 4. **The per-language default** — {@link languageDefaults}.
 *
 * The **locale is a setting, not an accident**: it defaults to the UI language, so a
 * cell agrees with the Calendar beside it (whose locale the language switch already
 * drives), and a user may point it at another language for the dates alone. It is
 * never taken from the machine, which would render the same record differently on two
 * developers' screens.
 */
/** The style presets a preference can choose — one word a settings UI can offer. */
export type DateStylePreset = 'full' | 'long' | 'medium' | 'short';
export type TimeStylePreset = 'full' | 'long' | 'medium' | 'short';
/** How a measured number is grouped. */
export type GroupingPreset = 'auto' | 'always' | 'never';
/** One layer of formatting configuration. Every key is optional. */
export interface IFormatConfig {
    /** BCP-47 language tag. Defaults to the UI language. */
    locale?: string;
    dateStyle?: DateStylePreset;
    timeStyle?: TimeStylePreset;
    /** 12- or 24-hour clock; unset leaves the locale's own choice. */
    hourCycle?: 'h12' | 'h23';
    /** ISO 4217 code a currency cell falls back to. */
    currency?: string;
    /** `auto` (a measure groups, a count does not), or forced either way. */
    grouping?: GroupingPreset;
}
/** Per-type overrides, as declared on `widget.formatOptions`. */
export interface IFormatOptions {
    date?: Intl.DateTimeFormatOptions;
    time?: Intl.DateTimeFormatOptions;
    dateTime?: Intl.DateTimeFormatOptions;
    number?: Intl.NumberFormatOptions;
    currency?: Intl.NumberFormatOptions & {
        currency?: string;
    };
    percent?: Intl.NumberFormatOptions;
}
export type FormatType = 'date' | 'time' | 'dateTime' | 'number' | 'integer' | 'currency' | 'percent';
/** What a component needs from the formatter once the settings are resolved. */
export type FormatFn = (value: unknown, type: FormatType, options?: IFormatOptions, useGrouping?: boolean) => string;
/** The fourth layer: what this language shows with no configuration at all. */
export declare function languageDefaults(language?: string): IFormatConfig;
/**
 * Resolve the layers into the configuration one value is formatted with.
 *
 * `user` beats `system` beats the language default, key by key — so a user who only
 * chose a 24-hour clock still gets the system's date style, and an app that never
 * configured anything gets the specification above.
 */
export declare function resolveFormatConfig(layers: {
    user?: IFormatConfig;
    system?: IFormatConfig;
    language?: string;
}): IFormatConfig;
/**
 * The display text of `value`, or the value itself when it cannot be read as its
 * declared type — a bad value is shown, never hidden.
 */
export declare function formatValue(value: unknown, type: FormatType, options?: IFormatOptions, useGrouping?: boolean, config?: IFormatConfig): string;
//# sourceMappingURL=format.d.ts.map