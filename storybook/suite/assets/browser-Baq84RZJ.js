const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-D5effi8g.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-Kwn0esJL.js","./react-DUbJxPEF.js","./App-BWvWt_tT.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-Dz1ZBwrY.css","./storage-am8dq9Zw.js","./storagePermissionsGet-DupUFjT-.js","./storagePermissionsSet-YlTo7qhu.js","./storageTokenDelete-CB5GyYx8.js","./storageTokenGet-C3m6nycP.js","./storageTokenSet-DXIJPMFy.js","./storage-JKpkIFKn.js","./authGoogleLogin-CkbTxsRc.js","./authGoogleRedirect-B-bCwaQ6.js","./authLogin-7UQ3pgMW.js","./authLogout-4-SPgAor.js","./authRegister-BsCwGvEY.js","./authSessionGet-pRdLnRYv.js","./auth-DnAD9Lsi.js","./uiI18nMissing-BVXmXSy0.js","./portalConfigMerge-CMyQ6p6c.js","./portalConfig-D_F_e55G.js","./portalDropdownList-BCPxuNKH.js","./portalMenuItem-DiEnMkOz.js","./portalParamsGet-DfPAe3K-.js","./portalTabClose-ATQnCbLd.js","./portalTabShow-D1rK5zkB.js","./ready-CAE6ajS0.js","./portal-BVBDPpht.js","./subject-BFYXWnCh.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { nt as init_types, st as realm } from "./iframe-Kwn0esJL.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-D5effi8g.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-am8dq9Zw.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-DupUFjT-.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-YlTo7qhu.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-CB5GyYx8.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-C3m6nycP.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-DXIJPMFy.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-JKpkIFKn.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-CkbTxsRc.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-B-bCwaQ6.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-7UQ3pgMW.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-4-SPgAor.js"), __vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-BsCwGvEY.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-pRdLnRYv.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-DnAD9Lsi.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-BVXmXSy0.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-CMyQ6p6c.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10,11,28]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-BCPxuNKH.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-DiEnMkOz.js"), __vite__mapDeps([30,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-DfPAe3K-.js"), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-ATQnCbLd.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-D1rK5zkB.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-CAE6ajS0.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-BVBDPpht.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-BFYXWnCh.js"), __vite__mapDeps([36,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url)
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
