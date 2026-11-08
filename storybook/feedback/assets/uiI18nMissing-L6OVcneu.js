const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./i18nMissingPage-OcBlwO48.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { J as init_types, q as handler } from "./iframe-BslwTayt.js";
// ../../core/blong-browser/orchestrator/component/uiI18nMissing.ts
var uiI18nMissing_default;
function init_uiI18nMissing() {
	return (init_uiI18nMissing = __esmMin((() => {
		init_types();
		init_preload_helper();
		uiI18nMissing_default = handler(function uiI18nMissing() {
			return { "ui.i18n.missing": async () => ({
				title: "Untranslated strings",
				component: async () => {
					const { I18nMissingPage } = await __vitePreload(async () => {
						const { I18nMissingPage } = await import("./i18nMissingPage-OcBlwO48.js");
						return { I18nMissingPage };
					}, __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url);
					return I18nMissingPage;
				}
			}) };
		});
	})))();
}
init_uiI18nMissing();
export { uiI18nMissing_default as default };
