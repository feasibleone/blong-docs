const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accessTestRun-BEp-dO9T.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-BFtoPRqr.js","./react-DUbJxPEF.js","./App-DX5E6ahH.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-CqBUs-JR.css","./accessUserProfile-DvjTCgdR.js","./init-jueVi3iW.js","./testAuthorizationFlow-D4OQifk6.js","./testSessionFlow-DeG3T8md.js","./accessAccessModel-C35CEew8.js","./accessAclModel-Cs13sQa6.js","./accessActionModel-8g0sJkWZ.js","./accessAuditModel-zKwHH5Sy.js","./accessCapabilityModel-QjS-6_eg.js","./accessFlowModel-DQc-OjSv.js","./accessPolicyModel-KrSJXcHT.js","./accessRoleModel-YFLr2Rsh.js","./accessSessionModel-md0XkAqy.js","./accessUserModel-B3rsx5UD.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, lt as realm } from "./iframe-BFtoPRqr.js";
// ../blong-access/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/accessTestRun.ts": () => __vitePreload(() => import("./accessTestRun-BEp-dO9T.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/orchestrator/component/accessUserProfile.ts": () => __vitePreload(() => import("./accessUserProfile-DvjTCgdR.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-jueVi3iW.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/test/test/testAuthorizationFlow.ts": () => __vitePreload(() => import("./testAuthorizationFlow-D4OQifk6.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/test/test/testSessionFlow.ts": () => __vitePreload(() => import("./testSessionFlow-DeG3T8md.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessAccessModel.ts": () => __vitePreload(() => import("./accessAccessModel-C35CEew8.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessAclModel.ts": () => __vitePreload(() => import("./accessAclModel-Cs13sQa6.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessActionModel.ts": () => __vitePreload(() => import("./accessActionModel-8g0sJkWZ.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessAuditModel.ts": () => __vitePreload(() => import("./accessAuditModel-zKwHH5Sy.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessCapabilityModel.ts": () => __vitePreload(() => import("./accessCapabilityModel-QjS-6_eg.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessFlowModel.ts": () => __vitePreload(() => import("./accessFlowModel-DQc-OjSv.js"), __vite__mapDeps([21,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessPolicyModel.ts": () => __vitePreload(() => import("./accessPolicyModel-KrSJXcHT.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessRoleModel.ts": () => __vitePreload(() => import("./accessRoleModel-YFLr2Rsh.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessSessionModel.ts": () => __vitePreload(() => import("./accessSessionModel-md0XkAqy.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessUserModel.ts": () => __vitePreload(() => import("./accessUserModel-B3rsx5UD.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url)
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
