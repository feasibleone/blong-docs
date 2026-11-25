const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./i18nMissingPage-Dqgm6Qqj.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { at as init_types, it as handler } from "./iframe-DRWtcwdA.js";
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
						const { I18nMissingPage } = await import("./i18nMissingPage-Dqgm6Qqj.js");
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
