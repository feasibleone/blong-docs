const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-D-K-9yN1.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-Dd4aRJs7.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./storage-CaAF7AOh.js","./storagePermissionsGet-C3hQHjqt.js","./storagePermissionsSet-k7JfH3uH.js","./storageTokenDelete-BvI9jcO2.js","./storageTokenGet-BactMQ7W.js","./storageTokenSet-Bn6UkJnz.js","./storage-CZY2IsyF.js","./authGoogleLogin-CnQ70-h7.js","./authGoogleRedirect-B7hRKeXA.js","./authLogin-D-tltTLs.js","./authLogout-Bg700NST.js","./authRegister-D10xfBCM.js","./authSessionGet-BbaLsbfs.js","./auth-CBdEWLt0.js","./uiI18nMissing-CinFvMZi.js","./portalConfigMerge-Ddi4kdoM.js","./portalConfig-CFd7hZf0.js","./portalDropdownList-BkOFY2MJ.js","./portalMenuItem-lPotpzkn.js","./portalParamsGet-D8oyVala.js","./portalTabClose-C88uRVKl.js","./portalTabShow-MHGfsAl-.js","./ready-CcDg3NYs.js","./portal-B4TTS8KB.js","./subject-BsgGIyo7.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Sn as realm, _n as init_types } from "./iframe-Dd4aRJs7.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-D-K-9yN1.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-CaAF7AOh.js"), __vite__mapDeps([11,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-C3hQHjqt.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-k7JfH3uH.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-BvI9jcO2.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-BactMQ7W.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-Bn6UkJnz.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-CZY2IsyF.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-CnQ70-h7.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-B7hRKeXA.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-D-tltTLs.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-Bg700NST.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-D10xfBCM.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-BbaLsbfs.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-CBdEWLt0.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-CinFvMZi.js"), __vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-Ddi4kdoM.js"), __vite__mapDeps([26,1,3,2,4,5,6,7,8,9,10,27]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-BkOFY2MJ.js"), __vite__mapDeps([28,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-lPotpzkn.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-D8oyVala.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-C88uRVKl.js"), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-MHGfsAl-.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-CcDg3NYs.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-B4TTS8KB.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-BsgGIyo7.js"), __vite__mapDeps([35,1,3,2,4,5,6,7,8,9,10]), import.meta.url)
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
