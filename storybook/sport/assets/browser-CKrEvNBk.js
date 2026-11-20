const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accessTestRun-Y7s6XJgC.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-D5MtwBLZ.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-BeXqXP1l.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-B4ggmZbP.css","./accessUserProfile-BeAsNWfr.js","./init-DS6gN74Z.js","./testAuthorizationFlow-CotPMVw4.js","./testSessionFlow-P9qjliT8.js","./accessAccessModel-BpB0VR-F.js","./accessAclModel-D2vDc08s.js","./accessActionModel-DPjdr5Lg.js","./accessAuditModel-CDY3kLIM.js","./accessCapabilityModel-CtBh788e.js","./accessFlowModel-CV5PIKhB.js","./accessPolicyModel-BNMRgP9m.js","./accessRoleModel-R0v_KrCF.js","./accessSessionModel-CSuDU0zI.js","./accessUserModel-CiLeuJdw.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { St as realm, _t as init_types } from "./iframe-D5MtwBLZ.js";
// ../blong-access/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/accessTestRun.ts": () => __vitePreload(() => import("./accessTestRun-Y7s6XJgC.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/component/accessUserProfile.ts": () => __vitePreload(() => import("./accessUserProfile-BeAsNWfr.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-DS6gN74Z.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testAuthorizationFlow.ts": () => __vitePreload(() => import("./testAuthorizationFlow-CotPMVw4.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testSessionFlow.ts": () => __vitePreload(() => import("./testSessionFlow-P9qjliT8.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAccessModel.ts": () => __vitePreload(() => import("./accessAccessModel-BpB0VR-F.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAclModel.ts": () => __vitePreload(() => import("./accessAclModel-D2vDc08s.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessActionModel.ts": () => __vitePreload(() => import("./accessActionModel-DPjdr5Lg.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAuditModel.ts": () => __vitePreload(() => import("./accessAuditModel-CDY3kLIM.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessCapabilityModel.ts": () => __vitePreload(() => import("./accessCapabilityModel-CtBh788e.js"), __vite__mapDeps([21,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessFlowModel.ts": () => __vitePreload(() => import("./accessFlowModel-CV5PIKhB.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessPolicyModel.ts": () => __vitePreload(() => import("./accessPolicyModel-BNMRgP9m.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessRoleModel.ts": () => __vitePreload(() => import("./accessRoleModel-R0v_KrCF.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessSessionModel.ts": () => __vitePreload(() => import("./accessSessionModel-CSuDU0zI.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessUserModel.ts": () => __vitePreload(() => import("./accessUserModel-CiLeuJdw.js"), __vite__mapDeps([26,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
