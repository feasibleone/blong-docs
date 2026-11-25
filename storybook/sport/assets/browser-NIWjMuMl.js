const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accessTestRun-BamDjX7M.js","./rolldown-runtime-DpEnGzO4.js","./preload-helper-Dd0jen5G.js","./iframe-DG6UCJRm.js","./react-dBA6YJJt.js","./browser-BFI3d8P5.js","./App-BJ8EhoWL.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./accessUserProfile-BoW7Neq-.js","./init-BkBFRc5q.js","./testAuthorizationFlow-BfIuHPpg.js","./testSessionFlow-CS0s43Z4.js","./accessAccessModel-C8xvV6oI.js","./accessAclModel-sw5TCbOx.js","./accessActionModel-C1FrDQRA.js","./accessAuditModel-CXZX7wcJ.js","./accessCapabilityModel-CfEEPnlx.js","./accessFlowModel-7twk3FnM.js","./accessPolicyModel-Dp_FI423.js","./accessRoleModel-EYANk0re.js","./accessSessionModel-BIEMWOlT.js","./accessUserModel-C7wIGYHI.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Et as init_types, jt as realm } from "./iframe-DG6UCJRm.js";
// ../blong-access/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/accessTestRun.ts": () => __vitePreload(() => import("./accessTestRun-BamDjX7M.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/component/accessUserProfile.ts": () => __vitePreload(() => import("./accessUserProfile-BoW7Neq-.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-BkBFRc5q.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testAuthorizationFlow.ts": () => __vitePreload(() => import("./testAuthorizationFlow-BfIuHPpg.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testSessionFlow.ts": () => __vitePreload(() => import("./testSessionFlow-CS0s43Z4.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAccessModel.ts": () => __vitePreload(() => import("./accessAccessModel-C8xvV6oI.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAclModel.ts": () => __vitePreload(() => import("./accessAclModel-sw5TCbOx.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessActionModel.ts": () => __vitePreload(() => import("./accessActionModel-C1FrDQRA.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAuditModel.ts": () => __vitePreload(() => import("./accessAuditModel-CXZX7wcJ.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessCapabilityModel.ts": () => __vitePreload(() => import("./accessCapabilityModel-CfEEPnlx.js"), __vite__mapDeps([21,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessFlowModel.ts": () => __vitePreload(() => import("./accessFlowModel-7twk3FnM.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessPolicyModel.ts": () => __vitePreload(() => import("./accessPolicyModel-Dp_FI423.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessRoleModel.ts": () => __vitePreload(() => import("./accessRoleModel-EYANk0re.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessSessionModel.ts": () => __vitePreload(() => import("./accessSessionModel-BIEMWOlT.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessUserModel.ts": () => __vitePreload(() => import("./accessUserModel-C7wIGYHI.js"), __vite__mapDeps([26,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
