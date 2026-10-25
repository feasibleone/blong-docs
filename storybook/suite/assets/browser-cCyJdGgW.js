const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-BWcOS1W5.js","./rolldown-runtime-V4kyJ4NV.js","./preload-helper-C3TOwP4X.js","./iframe-DXhqEaHK.js","./react-DUVFSkmT.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./browser-vpOcWc6g.js","./__vite-browser-external-bwQQhMfC.js","./attachable-B3-ly0Fu.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./primereact-B8YiuDoh.js","./inputtext.esm-DVdHXlQv.js","./react-dom--p2_7awc.js","./datatable.esm-CRrgT_ub.js","./Editor-CXwS--8T.js","./BlongContext-B_6NAJve.js","./Editor-NYbxgPCc.css","./iframe-Dy8lWZD5.css","./storage-BNuTrK5N.js","./storagePermissionsGet-BSQ2sT4F.js","./storagePermissionsSet-ymPiyQpf.js","./storageTokenDelete-BuSjFv82.js","./storageTokenGet-Cuh1ecuQ.js","./storageTokenSet-C1gu_dOU.js","./storage-DDrumtc9.js","./authGoogleLogin-C00MHDLs.js","./authGoogleRedirect-Bty9qpXP.js","./authLogin-N06lawJz.js","./authLogout-DdArHUmI.js","./authRegister-D-7wXlWg.js","./authSessionGet-CVfte41q.js","./auth-D8tuMblE.js","./portalConfigMerge-Bxig_UcV.js","./portalConfig-2SpIqrim.js","./portalDropdownList-Umex4Wvs.js","./portalMenuItem-CHg_zvaW.js","./portalParamsGet-BwbOu3zY.js","./portalTabClose-DxPw8F_u.js","./portalTabShow-UrNQWgPm.js","./ready-BaeakK94.js","./portal-D7aqGcq-.js","./subject-Xhtp0M23.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { $ as realm, J as init_types } from "./iframe-DXhqEaHK.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-BWcOS1W5.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-BNuTrK5N.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-BSQ2sT4F.js"), __vite__mapDeps([21,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-ymPiyQpf.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-BuSjFv82.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-Cuh1ecuQ.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-C1gu_dOU.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-DDrumtc9.js"), __vite__mapDeps([26,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-C00MHDLs.js"), __vite__mapDeps([27,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-Bty9qpXP.js"), __vite__mapDeps([28,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-N06lawJz.js"), __vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-DdArHUmI.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-D-7wXlWg.js"), __vite__mapDeps([31,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-CVfte41q.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-D8tuMblE.js"), __vite__mapDeps([33,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-Bxig_UcV.js"), __vite__mapDeps([34,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,35]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-Umex4Wvs.js"), __vite__mapDeps([36,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-CHg_zvaW.js"), __vite__mapDeps([37,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-BwbOu3zY.js"), __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-DxPw8F_u.js"), __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-UrNQWgPm.js"), __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-BaeakK94.js"), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-D7aqGcq-.js"), __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-Xhtp0M23.js"), __vite__mapDeps([43,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url)
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
