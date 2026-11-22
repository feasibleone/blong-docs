const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accessTestRun-K-SXMO-e.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-DzCJG9bn.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-RsDW9gku.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./accessUserProfile-ClRTWxkv.js","./init-y2420_9G.js","./testAuthorizationFlow-CeVPff7j.js","./testSessionFlow-D8D_LBYL.js","./accessAccessModel-CKWMGs_n.js","./accessAclModel-CESep0nd.js","./accessActionModel-B1HTXZ29.js","./accessAuditModel-BgtzA8cw.js","./accessCapabilityModel-D7lPG9-5.js","./accessFlowModel-BMgQ0Kpz.js","./accessPolicyModel-BGshU2b1.js","./accessRoleModel-BN6OZqcs.js","./accessSessionModel-BJyAG9nY.js","./accessUserModel-DMuIh1cD.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Et as init_types, jt as realm } from "./iframe-DzCJG9bn.js";
// ../blong-access/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/accessTestRun.ts": () => __vitePreload(() => import("./accessTestRun-K-SXMO-e.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/component/accessUserProfile.ts": () => __vitePreload(() => import("./accessUserProfile-ClRTWxkv.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-y2420_9G.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testAuthorizationFlow.ts": () => __vitePreload(() => import("./testAuthorizationFlow-CeVPff7j.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testSessionFlow.ts": () => __vitePreload(() => import("./testSessionFlow-D8D_LBYL.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAccessModel.ts": () => __vitePreload(() => import("./accessAccessModel-CKWMGs_n.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAclModel.ts": () => __vitePreload(() => import("./accessAclModel-CESep0nd.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessActionModel.ts": () => __vitePreload(() => import("./accessActionModel-B1HTXZ29.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAuditModel.ts": () => __vitePreload(() => import("./accessAuditModel-BgtzA8cw.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessCapabilityModel.ts": () => __vitePreload(() => import("./accessCapabilityModel-D7lPG9-5.js"), __vite__mapDeps([21,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessFlowModel.ts": () => __vitePreload(() => import("./accessFlowModel-BMgQ0Kpz.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessPolicyModel.ts": () => __vitePreload(() => import("./accessPolicyModel-BGshU2b1.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessRoleModel.ts": () => __vitePreload(() => import("./accessRoleModel-BN6OZqcs.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessSessionModel.ts": () => __vitePreload(() => import("./accessSessionModel-BJyAG9nY.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessUserModel.ts": () => __vitePreload(() => import("./accessUserModel-DMuIh1cD.js"), __vite__mapDeps([26,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
			}) : ["./meta/model", "./browser"],
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
