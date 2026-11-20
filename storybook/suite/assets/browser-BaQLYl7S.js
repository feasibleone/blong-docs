const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-DrJD8QEq.js","./rolldown-runtime-wTHAN5bU.js","./iframe-Dfus02Vk.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-DdoAR19-.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-BsAIw8gp.css","./marineFixture-0I--JJwe.js","./marine-data-BdXyCeGK.js","./marineCoralModel-DAG3bPzX.js","./marineFamilyModel-DxPNWsJb.js","./marineHabitatModel-C_Y1nCe9.js","./marineSpeciesModel-BXRd07YS.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { bt as realm, ht as init_types } from "./iframe-Dfus02Vk.js";
// ../../demo/blong-marine/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-DrJD8QEq.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/fixture/marineFixture.ts": () => __vitePreload(() => import("./marineFixture-0I--JJwe.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12,14]), import.meta.url),
				"./meta/model/marineCoralModel.ts": () => __vitePreload(() => import("./marineCoralModel-DAG3bPzX.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12,14]), import.meta.url),
				"./meta/model/marineFamilyModel.ts": () => __vitePreload(() => import("./marineFamilyModel-DxPNWsJb.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/marineHabitatModel.ts": () => __vitePreload(() => import("./marineHabitatModel-C_Y1nCe9.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/marineSpeciesModel.ts": () => __vitePreload(() => import("./marineSpeciesModel-BXRd07YS.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
