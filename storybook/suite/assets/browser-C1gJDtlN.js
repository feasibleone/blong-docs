const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-CX7YG1OS.js","./rolldown-runtime-wTHAN5bU.js","./iframe-D5_otGjj.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-j-lPdz5p.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css","./marineFixture-DQUJsVDi.js","./marine-data-BdXyCeGK.js","./marineCoralModel-BwlOXzCo.js","./marineFamilyModel-B0AQ4RqU.js","./marineHabitatModel-UGLdCJzg.js","./marineSpeciesModel-DZBPx_EB.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { kt as realm, wt as init_types } from "./iframe-D5_otGjj.js";
// ../../demo/blong-marine/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-CX7YG1OS.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/fixture/marineFixture.ts": () => __vitePreload(() => import("./marineFixture-DQUJsVDi.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12,14]), import.meta.url),
				"./meta/model/marineCoralModel.ts": () => __vitePreload(() => import("./marineCoralModel-BwlOXzCo.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12,14]), import.meta.url),
				"./meta/model/marineFamilyModel.ts": () => __vitePreload(() => import("./marineFamilyModel-B0AQ4RqU.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/marineHabitatModel.ts": () => __vitePreload(() => import("./marineHabitatModel-UGLdCJzg.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/marineSpeciesModel.ts": () => __vitePreload(() => import("./marineSpeciesModel-DZBPx_EB.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
