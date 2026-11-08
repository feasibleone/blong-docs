const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-BmgQtbTn.js","./rolldown-runtime-wTHAN5bU.js","./iframe-Kwn0esJL.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-BWvWt_tT.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-Dz1ZBwrY.css","./marineFixture-R7j5jcBe.js","./marine-data-BdXyCeGK.js","./marineCoralModel-OnXqQ0_g.js","./marineFamilyModel-B34-M6Dx.js","./marineHabitatModel-CsleOQ-w.js","./marineSpeciesModel-BP-JaYW7.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { nt as init_types, st as realm } from "./iframe-Kwn0esJL.js";
// ../../demo/blong-marine/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-BmgQtbTn.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/fixture/marineFixture.ts": () => __vitePreload(() => import("./marineFixture-R7j5jcBe.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11,13]), import.meta.url),
				"./meta/model/marineCoralModel.ts": () => __vitePreload(() => import("./marineCoralModel-OnXqQ0_g.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11,13]), import.meta.url),
				"./meta/model/marineFamilyModel.ts": () => __vitePreload(() => import("./marineFamilyModel-B34-M6Dx.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/marineHabitatModel.ts": () => __vitePreload(() => import("./marineHabitatModel-CsleOQ-w.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/marineSpeciesModel.ts": () => __vitePreload(() => import("./marineSpeciesModel-BP-JaYW7.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url)
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
