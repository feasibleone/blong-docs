const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-BOmmerji.js","./rolldown-runtime-V4kyJ4NV.js","./preload-helper-C3TOwP4X.js","./iframe-jjCxrJpo.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css","./storage-DP88ZRSu.js","./storagePermissionsGet-Bk-l-5kU.js","./storagePermissionsSet-CUeueSna.js","./storageTokenDelete-DFF3-Xmd.js","./storageTokenGet-N0aM6spH.js","./storageTokenSet-Cph6fB1e.js","./storage-DtipeWt6.js","./authGoogleLogin-BKaJQ-DC.js","./authGoogleRedirect-Bv5Osa_j.js","./authLogin-DTihD-Wt.js","./authLogout-CVyfSWku.js","./authRegister-DsBu7IaE.js","./authSessionGet-DlyGV6rE.js","./auth-uj1WRLND.js","./portalConfigMerge-Cf7vRHwf.js","./portalConfig-2SpIqrim.js","./portalDropdownList-BLwyb2uJ.js","./portalMenuItem-Dx4n-eqV.js","./portalParamsGet-eBPO_dKf.js","./portalTabClose-Cta6fxhL.js","./portalTabShow-BTYYwnSo.js","./ready-CTa4OanS.js","./portal-Klct2fV6.js","./subject-DjPoJpLE.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Qt as realm, qt as init_types } from "./iframe-jjCxrJpo.js";
//#endregion
//#region ../../core/blong-browser/browser.ts
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-BOmmerji.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-DP88ZRSu.js"), __vite__mapDeps([11,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-Bk-l-5kU.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-CUeueSna.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-DFF3-Xmd.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-N0aM6spH.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-Cph6fB1e.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-DtipeWt6.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-BKaJQ-DC.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-Bv5Osa_j.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-DTihD-Wt.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-CVyfSWku.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-DsBu7IaE.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-DlyGV6rE.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-uj1WRLND.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-Cf7vRHwf.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,26]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-BLwyb2uJ.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-Dx4n-eqV.js"), __vite__mapDeps([28,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-eBPO_dKf.js"), __vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-Cta6fxhL.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-BTYYwnSo.js"), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-CTa4OanS.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-Klct2fV6.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-DjPoJpLE.js"), __vite__mapDeps([34,1,3,2,4,5,6,7,8,9,10]), import.meta.url)
			}) : ["./adapter", "./orchestrator"],
			config: { default: {
				orchestrator: true,
				backend: true,
				adapter: true
			} }
		}));
	})))();
}
//#endregion
init_browser$1();
export { browser_default as default };
