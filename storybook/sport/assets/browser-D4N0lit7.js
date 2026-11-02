const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-Dv6Om8C7.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-BHvXl2EW.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./storage-C1_5DYQQ.js","./storagePermissionsGet-A06zN4TJ.js","./storagePermissionsSet-Bb_5m1sj.js","./storageTokenDelete-DwvkZpp8.js","./storageTokenGet-D80maGU6.js","./storageTokenSet-ynn17luZ.js","./storage-BKLGV_vC.js","./authGoogleLogin-DlU6ZrGd.js","./authGoogleRedirect-BZjoivoO.js","./authLogin-D8rOZp8C.js","./authLogout-D0WJNItV.js","./authRegister-C7MINVO1.js","./authSessionGet-CsWCn3k_.js","./auth-DZ39hqb3.js","./uiI18nMissing-BngXosL_.js","./portalConfigMerge-DILfzTGa.js","./portalConfig-CFd7hZf0.js","./portalDropdownList-Dzin6b0q.js","./portalMenuItem-eka7_JbM.js","./portalParamsGet-BhLspPFD.js","./portalTabClose-De3-M7MT.js","./portalTabShow-D66ywkUF.js","./ready-BUrkC0Uh.js","./portal-DEhQgd6T.js","./subject-CYXNIME2.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Sn as realm, _n as init_types } from "./iframe-BHvXl2EW.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-Dv6Om8C7.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-C1_5DYQQ.js"), __vite__mapDeps([11,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-A06zN4TJ.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-Bb_5m1sj.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-DwvkZpp8.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-D80maGU6.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-ynn17luZ.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-BKLGV_vC.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-DlU6ZrGd.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-BZjoivoO.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-D8rOZp8C.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-D0WJNItV.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-C7MINVO1.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-CsWCn3k_.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-DZ39hqb3.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-BngXosL_.js"), __vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-DILfzTGa.js"), __vite__mapDeps([26,1,3,2,4,5,6,7,8,9,10,27]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-Dzin6b0q.js"), __vite__mapDeps([28,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-eka7_JbM.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-BhLspPFD.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-De3-M7MT.js"), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-D66ywkUF.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-BUrkC0Uh.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-DEhQgd6T.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-CYXNIME2.js"), __vite__mapDeps([35,1,3,2,4,5,6,7,8,9,10]), import.meta.url)
			}) : ["./adapter", "./orchestrator"],
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
