const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-Brne0p0Q.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-DzCJG9bn.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-RsDW9gku.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./storage-B6PkZAsB.js","./storagePermissionsGet-BjTDJbao.js","./storagePermissionsSet-H2Jmt5Uk.js","./storageTokenDelete-DRLAR9mz.js","./storageTokenGet-B67GWyHe.js","./storageTokenSet-DkuarRyi.js","./storage-6xVRy_WM.js","./signal-CaL7Xrb-.js","./authGoogleLogin-CFN6_GKO.js","./authGoogleRedirect-DaJuhoTx.js","./authLogin-BH6hGoKA.js","./authLogout-C2x8S8WH.js","./authRegister-6UQQQbhp.js","./authSessionGet-CM-o48FQ.js","./auth-BOjgLUdP.js","./uiI18nMissing-DoiiNssl.js","./portalConfigMerge-DXryPx2_.js","./portalConfig-D75ejM0s.js","./portalDropdownList-Df_QBHgk.js","./portalMenuItem-D5dKvIAr.js","./portalParamsGet-89LfONae.js","./portalTabClose-CGki4IJX.js","./portalTabShow-Dy1DO62i.js","./ready-CSemYU9F.js","./portal-Bsh7Z5nR.js","./subject-Boqz1qq3.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Et as init_types, jt as realm } from "./iframe-DzCJG9bn.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-Brne0p0Q.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-B6PkZAsB.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-BjTDJbao.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-H2Jmt5Uk.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-DRLAR9mz.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-B67GWyHe.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-DkuarRyi.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-6xVRy_WM.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./lukaot/signal.ts": () => __vitePreload(() => import("./signal-CaL7Xrb-.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-CFN6_GKO.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-DaJuhoTx.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-BH6hGoKA.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-C2x8S8WH.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-6UQQQbhp.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-CM-o48FQ.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-BOjgLUdP.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-DoiiNssl.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-DXryPx2_.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10,11,12,30]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-Df_QBHgk.js"), __vite__mapDeps([31,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-D5dKvIAr.js"), __vite__mapDeps([32,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-89LfONae.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-CGki4IJX.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-Dy1DO62i.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-CSemYU9F.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-Bsh7Z5nR.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-Boqz1qq3.js"), __vite__mapDeps([38,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
