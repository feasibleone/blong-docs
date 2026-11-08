const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accessTestRun-CBo1GDlE.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-Kwn0esJL.js","./react-DUbJxPEF.js","./App-BWvWt_tT.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-Dz1ZBwrY.css","./accessUserProfile-BBR6PUvC.js","./init-BVc5MOpV.js","./testAuthorizationFlow-CCH39XNS.js","./testSessionFlow-Dcl7ZZ8T.js","./accessAccessModel-5uI5JP0M.js","./accessAclModel-osKdSpuW.js","./accessActionModel-CVO8QnN5.js","./accessAuditModel-DodrOoX6.js","./accessCapabilityModel-BwORtFQZ.js","./accessFlowModel-BOEyXK73.js","./accessPolicyModel-B_VvHiYv.js","./accessRoleModel-DPNvfvSe.js","./accessSessionModel-DrpABc-o.js","./accessUserModel-DcGmWbfB.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { nt as init_types, st as realm } from "./iframe-Kwn0esJL.js";
// ../../realm/blong-access/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/accessTestRun.ts": () => __vitePreload(() => import("./accessTestRun-CBo1GDlE.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/orchestrator/component/accessUserProfile.ts": () => __vitePreload(() => import("./accessUserProfile-BBR6PUvC.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-BVc5MOpV.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/test/test/testAuthorizationFlow.ts": () => __vitePreload(() => import("./testAuthorizationFlow-CCH39XNS.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/test/test/testSessionFlow.ts": () => __vitePreload(() => import("./testSessionFlow-Dcl7ZZ8T.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessAccessModel.ts": () => __vitePreload(() => import("./accessAccessModel-5uI5JP0M.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessAclModel.ts": () => __vitePreload(() => import("./accessAclModel-osKdSpuW.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessActionModel.ts": () => __vitePreload(() => import("./accessActionModel-CVO8QnN5.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessAuditModel.ts": () => __vitePreload(() => import("./accessAuditModel-DodrOoX6.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessCapabilityModel.ts": () => __vitePreload(() => import("./accessCapabilityModel-BwORtFQZ.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessFlowModel.ts": () => __vitePreload(() => import("./accessFlowModel-BOEyXK73.js"), __vite__mapDeps([21,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessPolicyModel.ts": () => __vitePreload(() => import("./accessPolicyModel-B_VvHiYv.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessRoleModel.ts": () => __vitePreload(() => import("./accessRoleModel-DPNvfvSe.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessSessionModel.ts": () => __vitePreload(() => import("./accessSessionModel-DrpABc-o.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/accessUserModel.ts": () => __vitePreload(() => import("./accessUserModel-DcGmWbfB.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url)
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
