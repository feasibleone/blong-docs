const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-CVIsog5r.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-Dr-ELyHG.js","./react-DUbJxPEF.js","./App-CjPLPfYu.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-CGV3BbKH.css","./storage-B2AoTB1G.js","./storagePermissionsGet-C_czrzZi.js","./storagePermissionsSet-DiF-OTNG.js","./storageTokenDelete-CxmEhWc9.js","./storageTokenGet-COKUp1FQ.js","./storageTokenSet-CS2Rqc6q.js","./storage-lIyjaMEz.js","./signal-WnQJPBFR.js","./lukaot-CPYOO3Pb.js","./authGoogleLogin-DeHqdhrC.js","./authGoogleRedirect-CGKPGC-9.js","./authLogin-GQiFPaf_.js","./authLogout-CRhiUbzz.js","./authRegister-5VBzgf_y.js","./authSessionGet-BS4UP_ad.js","./auth-Ck7rYlT1.js","./uiI18nMissing-DJ1Wblkk.js","./portalConfigMerge-RQHmv_Qe.js","./portalConfig-D75ejM0s.js","./portalDropdownList-BagxKxJ6.js","./portalMenuItem-D_q4vUBK.js","./portalParamsGet-BA8FlJ9P.js","./portalTabClose-CdiBC6ch.js","./portalTabShow-DnzP-CDn.js","./ready-Cmnswexl.js","./portal-BiyBcKvh.js","./subject-B75Tr5c2.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { X as init_types, et as realm } from "./iframe-Dr-ELyHG.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-CVIsog5r.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-B2AoTB1G.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-C_czrzZi.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-DiF-OTNG.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-CxmEhWc9.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-COKUp1FQ.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-CS2Rqc6q.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-lIyjaMEz.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./lukaot/signal.ts": () => __vitePreload(() => import("./signal-WnQJPBFR.js"), __vite__mapDeps([19,1,20,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-DeHqdhrC.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-CGKPGC-9.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-GQiFPaf_.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-CRhiUbzz.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-5VBzgf_y.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-BS4UP_ad.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-Ck7rYlT1.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-DJ1Wblkk.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-RQHmv_Qe.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10,11,30]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-BagxKxJ6.js"), __vite__mapDeps([31,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-D_q4vUBK.js"), __vite__mapDeps([32,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-BA8FlJ9P.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-CdiBC6ch.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-DnzP-CDn.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-Cmnswexl.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-BiyBcKvh.js"), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-B75Tr5c2.js"), __vite__mapDeps([38,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url)
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
