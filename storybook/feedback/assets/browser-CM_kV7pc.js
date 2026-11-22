const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-CXRiVCzf.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-CFJfMZ3i.js","./react-DUbJxPEF.js","./App-D0I1Wyqw.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-CGV3BbKH.css","./storage-CVtr03Ow.js","./storagePermissionsGet-BDD0dN25.js","./storagePermissionsSet-CTNfRdeS.js","./storageTokenDelete-8PVBryub.js","./storageTokenGet-GbYOASuq.js","./storageTokenSet-D_aSrCSM.js","./storage-DdMzS-tL.js","./signal-nExeCfi8.js","./lukaot-BTdnavbz.js","./authGoogleLogin-D8XnEZT6.js","./authGoogleRedirect-A2aDQT5e.js","./authLogin-CwshbvB2.js","./authLogout-CN4MhyDc.js","./authRegister-DNE02c2R.js","./authSessionGet-DzVJyDch.js","./auth-D2k1kFYT.js","./uiI18nMissing-ClvgZ_X-.js","./portalConfigMerge-CDsemEVm.js","./portalConfig-D75ejM0s.js","./portalDropdownList-kXeN7fAg.js","./portalMenuItem-CX4DJbOY.js","./portalParamsGet-COsL2Mh_.js","./portalTabClose-BWT6CK64.js","./portalTabShow-BPaOvgrl.js","./ready-DelBU86k.js","./portal-06x2wrKk.js","./subject-D7F_eVt9.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { at as init_types, lt as realm } from "./iframe-CFJfMZ3i.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-CXRiVCzf.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-CVtr03Ow.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-BDD0dN25.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-CTNfRdeS.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-8PVBryub.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-GbYOASuq.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-D_aSrCSM.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-DdMzS-tL.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./lukaot/signal.ts": () => __vitePreload(() => import("./signal-nExeCfi8.js"), __vite__mapDeps([19,1,20,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-D8XnEZT6.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-A2aDQT5e.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-CwshbvB2.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-CN4MhyDc.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-DNE02c2R.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-DzVJyDch.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-D2k1kFYT.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-ClvgZ_X-.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-CDsemEVm.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10,11,30]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-kXeN7fAg.js"), __vite__mapDeps([31,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-CX4DJbOY.js"), __vite__mapDeps([32,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-COsL2Mh_.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-BWT6CK64.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-BPaOvgrl.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-DelBU86k.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-06x2wrKk.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-D7F_eVt9.js"), __vite__mapDeps([38,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url)
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
