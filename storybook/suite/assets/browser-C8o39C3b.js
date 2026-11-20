const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-DRFw8-pV.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-Dfus02Vk.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-DdoAR19-.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-BsAIw8gp.css","./storage-ClRtZGQh.js","./storagePermissionsGet-q1aAXDOI.js","./storagePermissionsSet-BIE4qJPA.js","./storageTokenDelete--NuTh7aY.js","./storageTokenGet-iFCvlpF6.js","./storageTokenSet-CldMDFRk.js","./storage-4aNQhafF.js","./signal-Rty85ix8.js","./authGoogleLogin-dwSTvWIT.js","./authGoogleRedirect-GXpZY4-Q.js","./authLogin-r4QjPuvY.js","./authLogout-uEMuhg3o.js","./authRegister-B4dlpi9j.js","./authSessionGet-C0Bax2t-.js","./auth-Bu-7PpU3.js","./uiI18nMissing-j9q1Ryqx.js","./portalConfigMerge-DOHUigaH.js","./portalConfig-D75ejM0s.js","./portalDropdownList-B7UH1d_l.js","./portalMenuItem-DvVRqzJr.js","./portalParamsGet-zK4E0jVP.js","./portalTabClose-CHrdKtjx.js","./portalTabShow-C1_qLh4I.js","./ready-Cz4AHVNj.js","./portal-k6GDqvZD.js","./subject-Ba2vHUoF.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { bt as realm, ht as init_types } from "./iframe-Dfus02Vk.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-DRFw8-pV.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-ClRtZGQh.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-q1aAXDOI.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-BIE4qJPA.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete--NuTh7aY.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-iFCvlpF6.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-CldMDFRk.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-4aNQhafF.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./lukaot/signal.ts": () => __vitePreload(() => import("./signal-Rty85ix8.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-dwSTvWIT.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-GXpZY4-Q.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-r4QjPuvY.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-uEMuhg3o.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-B4dlpi9j.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-C0Bax2t-.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-Bu-7PpU3.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-j9q1Ryqx.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-DOHUigaH.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10,11,12,30]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-B7UH1d_l.js"), __vite__mapDeps([31,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-DvVRqzJr.js"), __vite__mapDeps([32,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-zK4E0jVP.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-CHrdKtjx.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-C1_qLh4I.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-Cz4AHVNj.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-k6GDqvZD.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-Ba2vHUoF.js"), __vite__mapDeps([38,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
