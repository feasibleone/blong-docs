const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accessTestRun-8v442JBC.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-D5_otGjj.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-j-lPdz5p.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css","./accessUserProfile-DGFvsfY3.js","./init-CjqlKgjm.js","./testAuthorizationFlow-B_CojmME.js","./testSessionFlow-Bh5oi1Po.js","./accessAccessModel-ByoEIVYC.js","./accessAclModel-CM2nUrSB.js","./accessActionModel-6y8kLofn.js","./accessAuditModel-CF5kwyIq.js","./accessCapabilityModel-Dm2GFYEW.js","./accessFlowModel-B-l-qqY1.js","./accessPolicyModel--pjagmWu.js","./accessRoleModel-Cnm6oSr2.js","./accessSessionModel-C5mF6ZV5.js","./accessUserModel-CWPkpGgW.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { kt as realm, wt as init_types } from "./iframe-D5_otGjj.js";
// ../../realm/blong-access/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/accessTestRun.ts": () => __vitePreload(() => import("./accessTestRun-8v442JBC.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/component/accessUserProfile.ts": () => __vitePreload(() => import("./accessUserProfile-DGFvsfY3.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-CjqlKgjm.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testAuthorizationFlow.ts": () => __vitePreload(() => import("./testAuthorizationFlow-B_CojmME.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testSessionFlow.ts": () => __vitePreload(() => import("./testSessionFlow-Bh5oi1Po.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAccessModel.ts": () => __vitePreload(() => import("./accessAccessModel-ByoEIVYC.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAclModel.ts": () => __vitePreload(() => import("./accessAclModel-CM2nUrSB.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessActionModel.ts": () => __vitePreload(() => import("./accessActionModel-6y8kLofn.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAuditModel.ts": () => __vitePreload(() => import("./accessAuditModel-CF5kwyIq.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessCapabilityModel.ts": () => __vitePreload(() => import("./accessCapabilityModel-Dm2GFYEW.js"), __vite__mapDeps([21,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessFlowModel.ts": () => __vitePreload(() => import("./accessFlowModel-B-l-qqY1.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessPolicyModel.ts": () => __vitePreload(() => import("./accessPolicyModel--pjagmWu.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessRoleModel.ts": () => __vitePreload(() => import("./accessRoleModel-Cnm6oSr2.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessSessionModel.ts": () => __vitePreload(() => import("./accessSessionModel-C5mF6ZV5.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessUserModel.ts": () => __vitePreload(() => import("./accessUserModel-CWPkpGgW.js"), __vite__mapDeps([26,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
