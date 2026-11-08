const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-Op9g2VUs.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-BslwTayt.js","./react-DUbJxPEF.js","./App-aUJ8LCxO.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-DD0X1HUh.css","./storage-FaNDwfTd.js","./storagePermissionsGet-CbZONYge.js","./storagePermissionsSet-DurVmHkd.js","./storageTokenDelete-D9tcUy7Z.js","./storageTokenGet-BT_sn5ja.js","./storageTokenSet-D1TtCMaF.js","./storage-DVMPQFYi.js","./authGoogleLogin-BwtEahvX.js","./authGoogleRedirect-DzIPnovg.js","./authLogin-DQonF5RN.js","./authLogout-DeprSDPT.js","./authRegister-De3uNvQ_.js","./authSessionGet-Cxs9KnFx.js","./auth-DIE57KZG.js","./uiI18nMissing-L6OVcneu.js","./portalConfigMerge-a9yRAhpF.js","./portalConfig-D_F_e55G.js","./portalDropdownList-IGbJaS4f.js","./portalMenuItem-D1ZjhilF.js","./portalParamsGet-DoNdB1N6.js","./portalTabClose-2MJcyYnu.js","./portalTabShow-61bIzD2u.js","./ready-BU22bJNb.js","./portal-DGtvhdaD.js","./subject-HxerDgqa.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { J as init_types, Q as realm } from "./iframe-BslwTayt.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-Op9g2VUs.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-FaNDwfTd.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-CbZONYge.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-DurVmHkd.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-D9tcUy7Z.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-BT_sn5ja.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-D1TtCMaF.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-DVMPQFYi.js"), __vite__mapDeps([18,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-BwtEahvX.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-DzIPnovg.js"), __vite__mapDeps([20,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-DQonF5RN.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-DeprSDPT.js"), __vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-De3uNvQ_.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-Cxs9KnFx.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-DIE57KZG.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-L6OVcneu.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-a9yRAhpF.js"), __vite__mapDeps([27,1,3,2,4,5,6,7,8,9,10,11,28]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-IGbJaS4f.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-D1ZjhilF.js"), __vite__mapDeps([30,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-DoNdB1N6.js"), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-2MJcyYnu.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-61bIzD2u.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-BU22bJNb.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-DGtvhdaD.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-HxerDgqa.js"), __vite__mapDeps([36,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url)
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
