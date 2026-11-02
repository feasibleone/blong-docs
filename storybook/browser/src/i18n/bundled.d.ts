import { TranslationDict } from '../state/appStore.js';
/**
 * The dictionary compiled into the bundle.
 *
 * Only what renders **before a session exists** belongs here: the login form,
 * the popup that asks for credentials again, self-registration and the OAuth
 * callback. Everything else is read from the database after login, so a
 * translation can be corrected without a release (`D-627`).
 *
 * It is the base layer of the composition, so a suite that configures
 * `portal.translations` overrides any entry here, and a database row overrides
 * both. English maps to an empty dictionary on purpose: the key is the English
 * string, so the fallback needs no table.
 */
export declare const bundledTranslations: Record<string, TranslationDict>;
/**
 * The active dictionary: bundled, then the suite's portal configuration, then
 * the database — later layers win, and English is an empty base (`D-627`).
 */
export declare function composeTranslations(language: string, config: Record<string, TranslationDict> | undefined, database: Record<string, TranslationDict> | undefined): TranslationDict;
//# sourceMappingURL=bundled.d.ts.map