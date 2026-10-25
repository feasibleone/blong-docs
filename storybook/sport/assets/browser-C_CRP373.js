const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-BH7C60vI.js","./rolldown-runtime-V4kyJ4NV.js","./preload-helper-C3TOwP4X.js","./iframe-DxBhgsxq.js","./react-DUVFSkmT.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./browser-vpOcWc6g.js","./__vite-browser-external-bwQQhMfC.js","./attachable-B3-ly0Fu.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./primereact-_rYrCq5a.js","./Deck-B7MkA9kL.js","./BlongContext-B_6NAJve.js","./inputtext.esm-DVdHXlQv.js","./react-dom--p2_7awc.js","./Deck-DVlB4hMN.css","./datatable.esm-CRrgT_ub.js","./iframe-Dy8lWZD5.css","./storage-e4ORVnmj.js","./storagePermissionsGet-C7PW6jNc.js","./storagePermissionsSet-Cl5rXHmG.js","./storageTokenDelete-Bd0mrlLl.js","./storageTokenGet-DthSxWCR.js","./storageTokenSet-CodYuIcB.js","./storage-DTl1HaeH.js","./authGoogleLogin-B0-fiaCz.js","./authGoogleRedirect-CqKeracU.js","./authLogin-C56OCU9F.js","./authLogout-mE9aheo0.js","./authRegister-C21myBgx.js","./authSessionGet-6Z4O36Sb.js","./auth-C4Swbedm.js","./portalConfigMerge-D9mtV1Pp.js","./portalConfig-2SpIqrim.js","./portalDropdownList-DvOQc_5-.js","./portalMenuItem-C0PYeyXt.js","./portalParamsGet-Xm908fAe.js","./portalTabClose-B_YsCCmD.js","./portalTabShow-BbZzFBfo.js","./ready-B4_aHo3m.js","./portal-BmHurqkA.js","./subject-BxaFE1ya.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { $ as realm, J as init_types } from "./iframe-DxBhgsxq.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-BH7C60vI.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-e4ORVnmj.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-C7PW6jNc.js"), __vite__mapDeps([21,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-Cl5rXHmG.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-Bd0mrlLl.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-DthSxWCR.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-CodYuIcB.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-DTl1HaeH.js"), __vite__mapDeps([26,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-B0-fiaCz.js"), __vite__mapDeps([27,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-CqKeracU.js"), __vite__mapDeps([28,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-C56OCU9F.js"), __vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-mE9aheo0.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-C21myBgx.js"), __vite__mapDeps([31,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-6Z4O36Sb.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-C4Swbedm.js"), __vite__mapDeps([33,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-D9mtV1Pp.js"), __vite__mapDeps([34,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,35]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-DvOQc_5-.js"), __vite__mapDeps([36,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-C0PYeyXt.js"), __vite__mapDeps([37,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-Xm908fAe.js"), __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-B_YsCCmD.js"), __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-BbZzFBfo.js"), __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-B4_aHo3m.js"), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-BmHurqkA.js"), __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-BxaFE1ya.js"), __vite__mapDeps([43,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url)
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
