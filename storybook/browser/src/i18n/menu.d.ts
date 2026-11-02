import { IPortalConfig } from '../types/portal.js';
/** The component method that opens the untranslated-strings page. */
export declare const TRANSLATION_REPORT_METHOD = "ui.i18n.missing";
/**
 * Add the untranslated-strings page to a portal that collects.
 *
 * The entry exists only while `translation.collect` is on, so a normal portal
 * — and every screenshot baseline taken from one — never grows a menu group it
 * cannot explain (`D-634`). Idempotent: composing the config twice must not list
 * the page twice.
 */
export declare function withTranslationReport(config: IPortalConfig): IPortalConfig;
//# sourceMappingURL=menu.d.ts.map