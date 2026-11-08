const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-DnyyyLES.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-BFtoPRqr.js","./react-DUbJxPEF.js","./App-DX5E6ahH.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-CqBUs-JR.css","./storage-CTSboT31.js","./storagePermissionsGet-DIcszMbm.js","./storagePermissionsSet-wM77jcq8.js","./storageTokenDelete-BW11VoYJ.js","./storageTokenGet-Bd5M0_86.js","./storageTokenSet-BDbMO_JF.js","./storage-JpuFzSJh.js","./authGoogleLogin-KDLfjsMI.js","./authGoogleRedirect-DtB5F2fo.js","./authLogin-DsG5k5ar.js","./authLogout-I0BIq8JM.js","./authRegister-BNiR8w6M.js","./authSessionGet-bF010hFM.js","./auth-CIviQo3y.js","./uiI18nMissing-DG557qXp.js","./portalConfigMerge-kxbxa9N_.js","./portalConfig-D_F_e55G.js","./portalDropdownList-EbfPV4dn.js","./portalMenuItem-BCL3Q9wS.js","./portalParamsGet-B4DLuiO6.js","./portalTabClose-B-nhfg4v.js","./portalTabShow-D8o8sSVy.js","./ready-CvsLJaBD.js","./portal-Ch9Uamb-.js","./subject-Bfzj1wMx.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, lt as realm } from "./iframe-BFtoPRqr.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-DnyyyLES.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-CTSboT31.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-DIcszMbm.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-wM77jcq8.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-BW11VoYJ.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-Bd5M0_86.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-BDbMO_JF.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-JpuFzSJh.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-KDLfjsMI.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-DtB5F2fo.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-DsG5k5ar.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-I0BIq8JM.js"), __vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-BNiR8w6M.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-bF010hFM.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-CIviQo3y.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-DG557qXp.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-kxbxa9N_.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10,11,28]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-EbfPV4dn.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-BCL3Q9wS.js"), __vite__mapDeps([30,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-B4DLuiO6.js"), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-B-nhfg4v.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-D8o8sSVy.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-CvsLJaBD.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-Ch9Uamb-.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-Bfzj1wMx.js"), __vite__mapDeps([36,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url)
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
