const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-DxEs-0qb.js","./rolldown-runtime-V4kyJ4NV.js","./preload-helper-C3TOwP4X.js","./iframe-BfCOoPG7.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css","./storage-D4XRCei0.js","./storagePermissionsGet-QQ61cwkY.js","./storagePermissionsSet-BY4xegxB.js","./storageTokenDelete-CbCvj5Sj.js","./storageTokenGet-Cvh9fHQ8.js","./storageTokenSet-CZZN9ti9.js","./storage-Bi-ih9ht.js","./authGoogleLogin-DVGLj_7j.js","./authGoogleRedirect-4iAap2Fh.js","./authLogin-BYL_SO9e.js","./authLogout-C6DC09PW.js","./authRegister-DBB7XF42.js","./authSessionGet-p4LNtzVT.js","./auth-C2sI2ke8.js","./portalConfigMerge-BU4-niuz.js","./portalDropdownList-DVCPxT4V.js","./portalMenuItem-ClfdEE9W.js","./portalParamsGet-Bl0ZQzLl.js","./portalTabClose-ATYb2jL0.js","./portalTabShow-BuJtCuNw.js","./ready-DeUxIFd6.js","./portal-By8sFBdq.js","./subject-BF-de1Rb.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Qt as realm, qt as init_types } from "./iframe-BfCOoPG7.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-DxEs-0qb.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-D4XRCei0.js"), __vite__mapDeps([11,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-QQ61cwkY.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-BY4xegxB.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-CbCvj5Sj.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-Cvh9fHQ8.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-CZZN9ti9.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-Bi-ih9ht.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-DVGLj_7j.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-4iAap2Fh.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-BYL_SO9e.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-C6DC09PW.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-DBB7XF42.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-p4LNtzVT.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-C2sI2ke8.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-BU4-niuz.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-DVCPxT4V.js"), __vite__mapDeps([26,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-ClfdEE9W.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-Bl0ZQzLl.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-ATYb2jL0.js"), __vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-BuJtCuNw.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-DeUxIFd6.js"), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-By8sFBdq.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-BF-de1Rb.js"), __vite__mapDeps([33,1,3,2,4,5,6,7,8,9,10]), import.meta.url)
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
