const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-CT2jFRZn.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-D5MtwBLZ.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-BeXqXP1l.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-B4ggmZbP.css","./storage-DIwwPEKi.js","./storagePermissionsGet-BiI2dWPH.js","./storagePermissionsSet-DjIUkHum.js","./storageTokenDelete-CV8GABee.js","./storageTokenGet-BfA7fe08.js","./storageTokenSet-DUcARKK3.js","./storage-DsC-Mf4D.js","./signal-UGwQ3A6y.js","./authGoogleLogin-K4T89mGG.js","./authGoogleRedirect-CXwJnWd0.js","./authLogin-CTVwg_KF.js","./authLogout-HLSd_lPW.js","./authRegister-D8r0Hkn-.js","./authSessionGet-CMGzrZwV.js","./auth-BdLQDKoI.js","./uiI18nMissing-BVcoCJbE.js","./portalConfigMerge-C0PHVQDk.js","./portalConfig-D75ejM0s.js","./portalDropdownList-B_5Z_V_B.js","./portalMenuItem-CHusCWVl.js","./portalParamsGet-CC2UgRBa.js","./portalTabClose-w0I0uIDf.js","./portalTabShow-DNpxeXTN.js","./ready-DnudS_J-.js","./portal-BKqQ29ks.js","./subject-D07G1GQE.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { St as realm, _t as init_types } from "./iframe-D5MtwBLZ.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-CT2jFRZn.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-DIwwPEKi.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-BiI2dWPH.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-DjIUkHum.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-CV8GABee.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-BfA7fe08.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-DUcARKK3.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-DsC-Mf4D.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./lukaot/signal.ts": () => __vitePreload(() => import("./signal-UGwQ3A6y.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-K4T89mGG.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-CXwJnWd0.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-CTVwg_KF.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-HLSd_lPW.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-D8r0Hkn-.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-CMGzrZwV.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-BdLQDKoI.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-BVcoCJbE.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-C0PHVQDk.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10,11,12,30]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-B_5Z_V_B.js"), __vite__mapDeps([31,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-CHusCWVl.js"), __vite__mapDeps([32,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-CC2UgRBa.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-w0I0uIDf.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-DNpxeXTN.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-DnudS_J-.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-BKqQ29ks.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-D07G1GQE.js"), __vite__mapDeps([38,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
