const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-CP_SokF0.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-jjCxrJpo.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css","./marineFixture-JQCHkopE.js","./marine-data-BrdnYbhJ.js","./marineCoralModel-CPmmQJwR.js","./marineFamilyModel-B9891Llb.js","./marineHabitatModel-Btb9Hdc8.js","./marineSpeciesModel-DTHgeO7C.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Qt as realm, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../demo/blong-marine/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-CP_SokF0.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/fixture/marineFixture.ts": () => __vitePreload(() => import("./marineFixture-JQCHkopE.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10,12]), import.meta.url),
				"./meta/model/marineCoralModel.ts": () => __vitePreload(() => import("./marineCoralModel-CPmmQJwR.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,12]), import.meta.url),
				"./meta/model/marineFamilyModel.ts": () => __vitePreload(() => import("./marineFamilyModel-B9891Llb.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/model/marineHabitatModel.ts": () => __vitePreload(() => import("./marineHabitatModel-Btb9Hdc8.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/model/marineSpeciesModel.ts": () => __vitePreload(() => import("./marineSpeciesModel-DTHgeO7C.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10]), import.meta.url)
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
//#endregion
init_browser();
export { browser_default as default };
