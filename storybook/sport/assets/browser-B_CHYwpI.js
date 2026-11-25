const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./selfRegistration-Df8py3ZW.js","./rolldown-runtime-DpEnGzO4.js","./preload-helper-Dd0jen5G.js","./iframe-DG6UCJRm.js","./react-dBA6YJJt.js","./browser-BFI3d8P5.js","./App-BJ8EhoWL.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./init-D57qyFKV.js","./db-BLmssLyw.js","./partyConsentModel-BAt7d7yD.js","./partyOrganizationModel-Df61yFU7.js","./partyPersonModel-8EV0Abru.js","./partyUnitModel-DNVuXaTS.js","./schema-Cxi8xT-n.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Et as init_types, jt as realm } from "./iframe-DG6UCJRm.js";
// ../blong-party/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/selfRegistration.ts": () => __vitePreload(() => import("./selfRegistration-Df8py3ZW.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-D57qyFKV.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/db/db.ts": () => __vitePreload(() => import("./db-BLmssLyw.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyConsentModel.ts": () => __vitePreload(() => import("./partyConsentModel-BAt7d7yD.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyOrganizationModel.ts": () => __vitePreload(() => import("./partyOrganizationModel-Df61yFU7.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyPersonModel.ts": () => __vitePreload(() => import("./partyPersonModel-8EV0Abru.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyUnitModel.ts": () => __vitePreload(() => import("./partyUnitModel-DNVuXaTS.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/type/schema.ts": () => __vitePreload(() => import("./schema-Cxi8xT-n.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
			}) : ["./meta", "./browser/orchestrator"],
			config: { default: {
				meta: true,
				orchestrator: true,
				component: true
			} }
		}));
	})))();
}
init_browser();
export { browser_default as default };
