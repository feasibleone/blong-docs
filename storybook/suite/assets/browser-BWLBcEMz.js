const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accessTestRun-7Q6f1DGu.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-Dfus02Vk.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-DdoAR19-.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-BsAIw8gp.css","./accessUserProfile-ct9yMiFo.js","./init-BmCea9Is.js","./testAuthorizationFlow-OFSS5IQr.js","./testSessionFlow-Cm0rTg21.js","./accessAccessModel-CEtnruUY.js","./accessAclModel-D2RaAu1M.js","./accessActionModel-DUaauH5R.js","./accessAuditModel-BAfzIYXC.js","./accessCapabilityModel-Bg7i8wW4.js","./accessFlowModel--LzF-dbr.js","./accessPolicyModel-Cr0VfP3-.js","./accessRoleModel-BvRfR-FD.js","./accessSessionModel-C05UQWZi.js","./accessUserModel-DDGuJBku.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { bt as realm, ht as init_types } from "./iframe-Dfus02Vk.js";
// ../../realm/blong-access/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/accessTestRun.ts": () => __vitePreload(() => import("./accessTestRun-7Q6f1DGu.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/component/accessUserProfile.ts": () => __vitePreload(() => import("./accessUserProfile-ct9yMiFo.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-BmCea9Is.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testAuthorizationFlow.ts": () => __vitePreload(() => import("./testAuthorizationFlow-OFSS5IQr.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testSessionFlow.ts": () => __vitePreload(() => import("./testSessionFlow-Cm0rTg21.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAccessModel.ts": () => __vitePreload(() => import("./accessAccessModel-CEtnruUY.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAclModel.ts": () => __vitePreload(() => import("./accessAclModel-D2RaAu1M.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessActionModel.ts": () => __vitePreload(() => import("./accessActionModel-DUaauH5R.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessAuditModel.ts": () => __vitePreload(() => import("./accessAuditModel-BAfzIYXC.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessCapabilityModel.ts": () => __vitePreload(() => import("./accessCapabilityModel-Bg7i8wW4.js"), __vite__mapDeps([21,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessFlowModel.ts": () => __vitePreload(() => import("./accessFlowModel--LzF-dbr.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessPolicyModel.ts": () => __vitePreload(() => import("./accessPolicyModel-Cr0VfP3-.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessRoleModel.ts": () => __vitePreload(() => import("./accessRoleModel-BvRfR-FD.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessSessionModel.ts": () => __vitePreload(() => import("./accessSessionModel-C05UQWZi.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/accessUserModel.ts": () => __vitePreload(() => import("./accessUserModel-DDGuJBku.js"), __vite__mapDeps([26,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
