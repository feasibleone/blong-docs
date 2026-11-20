const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./selfRegistration-DFoUU_7I.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-D5MtwBLZ.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-BeXqXP1l.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-B4ggmZbP.css","./init-BT6u5l3Z.js","./db-D_mZnSO6.js","./partyConsentModel-0zIOzs-q.js","./partyOrganizationModel-Cv2-iHAJ.js","./partyPersonModel-DmrfLs3b.js","./partyUnitModel-DhYBSDDu.js","./schema-D1OaJ5q2.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { St as realm, _t as init_types } from "./iframe-D5MtwBLZ.js";
// ../blong-party/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/selfRegistration.ts": () => __vitePreload(() => import("./selfRegistration-DFoUU_7I.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-BT6u5l3Z.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/db/db.ts": () => __vitePreload(() => import("./db-D_mZnSO6.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyConsentModel.ts": () => __vitePreload(() => import("./partyConsentModel-0zIOzs-q.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyOrganizationModel.ts": () => __vitePreload(() => import("./partyOrganizationModel-Cv2-iHAJ.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyPersonModel.ts": () => __vitePreload(() => import("./partyPersonModel-DmrfLs3b.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/partyUnitModel.ts": () => __vitePreload(() => import("./partyUnitModel-DhYBSDDu.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/type/schema.ts": () => __vitePreload(() => import("./schema-D1OaJ5q2.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
