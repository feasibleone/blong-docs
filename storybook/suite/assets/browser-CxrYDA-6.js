const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-D3YCXVQs.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-BfCOoPG7.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css","./marineFixture-BVHqYxPY.js","./marine-data-BrdnYbhJ.js","./marineCoralModel-SxYWtPBh.js","./marineFamilyModel-B7AxuVQG.js","./marineHabitatModel-BqOcPbRy.js","./marineSpeciesModel-m8KZV99r.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Qt as realm, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../demo/blong-marine/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-D3YCXVQs.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/fixture/marineFixture.ts": () => __vitePreload(() => import("./marineFixture-BVHqYxPY.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10,12]), import.meta.url),
				"./meta/model/marineCoralModel.ts": () => __vitePreload(() => import("./marineCoralModel-SxYWtPBh.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,12]), import.meta.url),
				"./meta/model/marineFamilyModel.ts": () => __vitePreload(() => import("./marineFamilyModel-B7AxuVQG.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/model/marineHabitatModel.ts": () => __vitePreload(() => import("./marineHabitatModel-BqOcPbRy.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/model/marineSpeciesModel.ts": () => __vitePreload(() => import("./marineSpeciesModel-m8KZV99r.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10]), import.meta.url)
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
