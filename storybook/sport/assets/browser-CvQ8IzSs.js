const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./selfRegistration-CRwrEOSz.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./BlongContext-Cb6PlRk2.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./SocialLoginButton-6RhozmEL.js","./iframe-BHvXl2EW.js","./preload-helper-DJ4GxKnf.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./SocialLoginButton-D5DfaH7a.css","./selfRegistration-DaFHH4qd.css","./init-ST0pgaym.js","./db-DvtEPJPZ.js","./partyConsentModel-BekcRjAI.js","./partyOrganizationModel-Ri0Zkya3.js","./partyPersonModel-DXpeJe-A.js","./partyUnitModel-DWPp3Uub.js","./schema-DGCVbwjJ.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Sn as realm, _n as init_types } from "./iframe-BHvXl2EW.js";
// ../blong-party/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/selfRegistration.ts": () => __vitePreload(() => import("./selfRegistration-CRwrEOSz.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-ST0pgaym.js"), __vite__mapDeps([15,1,9,10,2,4,5,6,7,11,12]), import.meta.url),
				"./meta/db/db.ts": () => __vitePreload(() => import("./db-DvtEPJPZ.js"), __vite__mapDeps([16,1,9,10,2,4,5,6,7,11,12]), import.meta.url),
				"./meta/model/partyConsentModel.ts": () => __vitePreload(() => import("./partyConsentModel-BekcRjAI.js"), __vite__mapDeps([17,1,9,10,2,4,5,6,7,11,12]), import.meta.url),
				"./meta/model/partyOrganizationModel.ts": () => __vitePreload(() => import("./partyOrganizationModel-Ri0Zkya3.js"), __vite__mapDeps([18,1,9,10,2,4,5,6,7,11,12]), import.meta.url),
				"./meta/model/partyPersonModel.ts": () => __vitePreload(() => import("./partyPersonModel-DXpeJe-A.js"), __vite__mapDeps([19,1,9,10,2,4,5,6,7,11,12]), import.meta.url),
				"./meta/model/partyUnitModel.ts": () => __vitePreload(() => import("./partyUnitModel-DWPp3Uub.js"), __vite__mapDeps([20,1,9,10,2,4,5,6,7,11,12]), import.meta.url),
				"./meta/type/schema.ts": () => __vitePreload(() => import("./schema-DGCVbwjJ.js"), __vite__mapDeps([21,1,9,10,2,4,5,6,7,11,12]), import.meta.url)
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
