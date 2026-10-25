const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./selfRegistration-B1ocNRhJ.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js","./BlongContext-B_6NAJve.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./primereact-_rYrCq5a.js","./Deck-B7MkA9kL.js","./browser-vpOcWc6g.js","./inputtext.esm-DVdHXlQv.js","./react-dom--p2_7awc.js","./Deck-DVlB4hMN.css","./datatable.esm-CRrgT_ub.js","./SocialLoginButton-D-HL9k-O.js","./SocialLoginButton-D5DfaH7a.css","./iframe-DxBhgsxq.js","./preload-helper-C3TOwP4X.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./__vite-browser-external-bwQQhMfC.js","./attachable-B3-ly0Fu.js","./iframe-Dy8lWZD5.css","./selfRegistration-DaFHH4qd.css","./init-DQFwCbuk.js","./db-BYCNtsKp.js","./partyConsentModel-C6l8YlDL.js","./partyOrganizationModel-DjeTXuZ0.js","./partyPersonModel-C-_wXrQk.js","./partyUnitModel-CSSIQPYP.js","./schema-DHzNVQmf.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { $ as realm, J as init_types } from "./iframe-DxBhgsxq.js";
//#region ../blong-party/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/selfRegistration.ts": () => __vitePreload(() => import("./selfRegistration-B1ocNRhJ.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-DQFwCbuk.js"), __vite__mapDeps([23,1,15,16,2,17,18,8,19,20,4,5,6,7,3,9,10,11,12,21]), import.meta.url),
				"./meta/db/db.ts": () => __vitePreload(() => import("./db-BYCNtsKp.js"), __vite__mapDeps([24,1,15,16,2,17,18,8,19,20,4,5,6,7,3,9,10,11,12,21]), import.meta.url),
				"./meta/model/partyConsentModel.ts": () => __vitePreload(() => import("./partyConsentModel-C6l8YlDL.js"), __vite__mapDeps([25,1,15,16,2,17,18,8,19,20,4,5,6,7,3,9,10,11,12,21]), import.meta.url),
				"./meta/model/partyOrganizationModel.ts": () => __vitePreload(() => import("./partyOrganizationModel-DjeTXuZ0.js"), __vite__mapDeps([26,1,15,16,2,17,18,8,19,20,4,5,6,7,3,9,10,11,12,21]), import.meta.url),
				"./meta/model/partyPersonModel.ts": () => __vitePreload(() => import("./partyPersonModel-C-_wXrQk.js"), __vite__mapDeps([27,1,15,16,2,17,18,8,19,20,4,5,6,7,3,9,10,11,12,21]), import.meta.url),
				"./meta/model/partyUnitModel.ts": () => __vitePreload(() => import("./partyUnitModel-CSSIQPYP.js"), __vite__mapDeps([28,1,15,16,2,17,18,8,19,20,4,5,6,7,3,9,10,11,12,21]), import.meta.url),
				"./meta/type/schema.ts": () => __vitePreload(() => import("./schema-DHzNVQmf.js"), __vite__mapDeps([29,1,15,16,2,17,18,8,19,20,4,5,6,7,3,9,10,11,12,21]), import.meta.url)
			}) : ["./meta", "./browser/orchestrator"],
			config: { default: {
				meta: true,
				orchestrator: true,
				component: true
			} }
		}));
	})))();
}
//#endregion
init_browser();
export { browser_default as default };
