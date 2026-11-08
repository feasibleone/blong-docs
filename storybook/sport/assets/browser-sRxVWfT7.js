const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./selfRegistration-DvxSUk4W.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-BFtoPRqr.js","./react-DUbJxPEF.js","./App-DX5E6ahH.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-CqBUs-JR.css","./init-DxbnnoPE.js","./db-DjKtJdpd.js","./partyConsentModel-MoHygWgt.js","./partyOrganizationModel-CLMXMuFd.js","./partyPersonModel-B5g0DgXv.js","./partyUnitModel-h_grqCBy.js","./schema-CDEC_PH1.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, lt as realm } from "./iframe-BFtoPRqr.js";
// ../blong-party/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/selfRegistration.ts": () => __vitePreload(() => import("./selfRegistration-DvxSUk4W.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-DxbnnoPE.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/db/db.ts": () => __vitePreload(() => import("./db-DjKtJdpd.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/partyConsentModel.ts": () => __vitePreload(() => import("./partyConsentModel-MoHygWgt.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/partyOrganizationModel.ts": () => __vitePreload(() => import("./partyOrganizationModel-CLMXMuFd.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/partyPersonModel.ts": () => __vitePreload(() => import("./partyPersonModel-B5g0DgXv.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/partyUnitModel.ts": () => __vitePreload(() => import("./partyUnitModel-h_grqCBy.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/type/schema.ts": () => __vitePreload(() => import("./schema-CDEC_PH1.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url)
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
