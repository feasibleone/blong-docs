const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./selfRegistration-BoyByKX-.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-DzCJG9bn.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-RsDW9gku.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./init-CaVt03eT.js","./db-BlD1NXFa.js","./partyConsentModel-VdFXYBCw.js","./partyOrganizationModel-B2cdXYpI.js","./partyPersonModel-DNewWs8I.js","./partyUnitModel-D6U5vYLR.js","./schema-D2t2duo3.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Et as init_types, jt as realm } from "./iframe-DzCJG9bn.js";
// ../blong-party/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/selfRegistration.ts": () => __vitePreload(() => import("./selfRegistration-BoyByKX-.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-CaVt03eT.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/db/db.ts": () => __vitePreload(() => import("./db-BlD1NXFa.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyConsentModel.ts": () => __vitePreload(() => import("./partyConsentModel-VdFXYBCw.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyOrganizationModel.ts": () => __vitePreload(() => import("./partyOrganizationModel-B2cdXYpI.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyPersonModel.ts": () => __vitePreload(() => import("./partyPersonModel-DNewWs8I.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyUnitModel.ts": () => __vitePreload(() => import("./partyUnitModel-D6U5vYLR.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/type/schema.ts": () => __vitePreload(() => import("./schema-D2t2duo3.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
