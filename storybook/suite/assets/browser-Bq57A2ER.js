const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-DEin12hi.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-D5_otGjj.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-j-lPdz5p.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css","./storage-BO52FcQo.js","./storagePermissionsGet-DcjGv1JN.js","./storagePermissionsSet-BFLIsQmd.js","./storageTokenDelete-CxUOjUnG.js","./storageTokenGet-D8CVgP-R.js","./storageTokenSet-Bv_2x25o.js","./storage-qu57LIEd.js","./signal-Ba3t8kiu.js","./authGoogleLogin-tC-yjD_S.js","./authGoogleRedirect-B_-my2Ku.js","./authLogin-Brw_GHC6.js","./authLogout-Bdr1xYWk.js","./authRegister-Be1EWHRO.js","./authSessionGet-CrzaWGqx.js","./auth-D4GdCfny.js","./uiI18nMissing-D6y2p3so.js","./portalConfigMerge-DfDbANno.js","./portalConfig-D75ejM0s.js","./portalDropdownList-BAU1H_N2.js","./portalMenuItem-VcHOR3ns.js","./portalParamsGet-D7bvvS3X.js","./portalTabClose-COsQqmrR.js","./portalTabShow-KMViTwIs.js","./ready-BPqiEXJE.js","./portal-Bu5DbiEB.js","./subject-CVSYFMoV.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { kt as realm, wt as init_types } from "./iframe-D5_otGjj.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-DEin12hi.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-BO52FcQo.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-DcjGv1JN.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-BFLIsQmd.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-CxUOjUnG.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-D8CVgP-R.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-Bv_2x25o.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-qu57LIEd.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./lukaot/signal.ts": () => __vitePreload(() => import("./signal-Ba3t8kiu.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-tC-yjD_S.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-B_-my2Ku.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-Brw_GHC6.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-Bdr1xYWk.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-Be1EWHRO.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-CrzaWGqx.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-D4GdCfny.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-D6y2p3so.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-DfDbANno.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10,11,12,30]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-BAU1H_N2.js"), __vite__mapDeps([31,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-VcHOR3ns.js"), __vite__mapDeps([32,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-D7bvvS3X.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-COsQqmrR.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-KMViTwIs.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-BPqiEXJE.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-Bu5DbiEB.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-CVSYFMoV.js"), __vite__mapDeps([38,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
