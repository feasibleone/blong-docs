const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-CF9QDPRK.js","./rolldown-runtime-DpEnGzO4.js","./preload-helper-Dd0jen5G.js","./iframe-DG6UCJRm.js","./react-dBA6YJJt.js","./browser-BFI3d8P5.js","./App-BJ8EhoWL.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./storage-DO0UQCzt.js","./storagePermissionsGet-DTh55zZu.js","./storagePermissionsSet-N9u0hll7.js","./storageTokenDelete-DGQlxDgm.js","./storageTokenGet-CmwdJqjC.js","./storageTokenSet-8PSH1n9g.js","./storage-4Po_ZxkM.js","./signal-Dog3JS6p.js","./authGoogleLogin-GKMTWd1z.js","./authGoogleRedirect-m3KLNmMt.js","./authLogin-DoCQU2Ni.js","./authLogout-BbFWMBl9.js","./authRegister-Cn8UWsfu.js","./authSessionGet-DDPd8ApI.js","./auth-B1JNdaJW.js","./uiI18nMissing-DhnRBCHf.js","./portalConfigMerge-DmewPax9.js","./portalConfig-BKE9jbZ0.js","./portalDropdownList-BOG2SkA4.js","./portalMenuItem-CEiWPP7H.js","./portalParamsGet-BuXwsVNp.js","./portalTabClose-Bu6Lrglf.js","./portalTabShow-ddWLI4jW.js","./ready-BhPz_DA5.js","./portal-CSF3CWHc.js","./subject-BzpR3dRM.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Et as init_types, jt as realm } from "./iframe-DG6UCJRm.js";
// ../../core/blong-browser/browser.ts
var browser_default;
function init_browser$1() {
	return (init_browser$1 = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm((blong) => ({
			url: import.meta.url,
			validation: blong.type.Object({
				adapter: blong.type.Boolean(),
				orchestrator: blong.type.Boolean(),
				backend: blong.type.Boolean()
			}),
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-CF9QDPRK.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-DO0UQCzt.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-DTh55zZu.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-N9u0hll7.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-DGQlxDgm.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-CmwdJqjC.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-8PSH1n9g.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-4Po_ZxkM.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./lukaot/signal.ts": () => __vitePreload(() => import("./signal-Dog3JS6p.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-GKMTWd1z.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-m3KLNmMt.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-DoCQU2Ni.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-BbFWMBl9.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-Cn8UWsfu.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-DDPd8ApI.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-B1JNdaJW.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-DhnRBCHf.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-DmewPax9.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10,11,12,30]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-BOG2SkA4.js"), __vite__mapDeps([31,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-CEiWPP7H.js"), __vite__mapDeps([32,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-BuXwsVNp.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-Bu6Lrglf.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-ddWLI4jW.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-BhPz_DA5.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-CSF3CWHc.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-BzpR3dRM.js"), __vite__mapDeps([38,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
			}) : [
				"./adapter",
				"./lukaot",
				"./orchestrator"
			],
			config: { default: {
				orchestrator: true,
				backend: true,
				adapter: true
			} }
		}));
	})))();
}
init_browser$1();
export { browser_default as default };
