const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-rOuEntd5.js","./rolldown-runtime-wTHAN5bU.js","./iframe-Dd4aRJs7.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./marineFixture-CKgDxSUi.js","./marine-data-BdXyCeGK.js","./marineCoralModel-BuKwX9hD.js","./marineFamilyModel-tAtY0NAw.js","./marineHabitatModel-DtfdEAOD.js","./marineSpeciesModel-DjVAJ2sP.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Sn as realm, _n as init_types } from "./iframe-Dd4aRJs7.js";
// ../../demo/blong-marine/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-rOuEntd5.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/fixture/marineFixture.ts": () => __vitePreload(() => import("./marineFixture-CKgDxSUi.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10,12]), import.meta.url),
				"./meta/model/marineCoralModel.ts": () => __vitePreload(() => import("./marineCoralModel-BuKwX9hD.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,12]), import.meta.url),
				"./meta/model/marineFamilyModel.ts": () => __vitePreload(() => import("./marineFamilyModel-tAtY0NAw.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/model/marineHabitatModel.ts": () => __vitePreload(() => import("./marineHabitatModel-DtfdEAOD.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/model/marineSpeciesModel.ts": () => __vitePreload(() => import("./marineSpeciesModel-DjVAJ2sP.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10]), import.meta.url)
			}) : [
				"./meta/model",
				"./meta/fixture",
				"./browser/orchestrator"
			],
			config: { default: {
				meta: true,
				orchestrator: true
			} }
		}));
	})))();
}
init_browser();
export { browser_default as default };
