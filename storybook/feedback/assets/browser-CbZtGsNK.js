const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./backend-D5FUCvH2.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-IrD74JhJ.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./storage-DcNMvwyi.js","./storagePermissionsGet-41Ef4H-l.js","./storagePermissionsSet-Cidv9uyx.js","./storageTokenDelete-i6Tm9WzK.js","./storageTokenGet-MimeJqHZ.js","./storageTokenSet-I_IReg1a.js","./storage-hwz38uHh.js","./authGoogleLogin-CysF48pO.js","./authGoogleRedirect-CE8HCJhI.js","./authLogin-4Ah9yDd6.js","./authLogout-CgQ4FdQ-.js","./authRegister-DF8d15lb.js","./authSessionGet-CfLIytN0.js","./auth-BQa89vU1.js","./uiI18nMissing-DZR6SzCu.js","./portalConfigMerge-dLv56Wud.js","./portalConfig-CFd7hZf0.js","./portalDropdownList-_gtMQVbg.js","./portalMenuItem-BE6FcUJy.js","./portalParamsGet-Dj99nISl.js","./portalTabClose-CCFGpoL7.js","./portalTabShow-CZ2wvjDt.js","./ready-DiJxpwIx.js","./portal-C5r-d552.js","./subject-Hs09XZoU.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { _n as init_types, xn as realm } from "./iframe-IrD74JhJ.js";
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
				"./adapter/backend.ts": () => __vitePreload(() => import("./backend-D5FUCvH2.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storage.ts": () => __vitePreload(() => import("./storage-DcNMvwyi.js"), __vite__mapDeps([11,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storagePermissionsGet.ts": () => __vitePreload(() => import("./storagePermissionsGet-41Ef4H-l.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storagePermissionsSet.ts": () => __vitePreload(() => import("./storagePermissionsSet-Cidv9uyx.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenDelete.ts": () => __vitePreload(() => import("./storageTokenDelete-i6Tm9WzK.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenGet.ts": () => __vitePreload(() => import("./storageTokenGet-MimeJqHZ.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage/storageTokenSet.ts": () => __vitePreload(() => import("./storageTokenSet-I_IReg1a.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/storage.ts": () => __vitePreload(() => import("./storage-hwz38uHh.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authGoogleLogin.ts": () => __vitePreload(() => import("./authGoogleLogin-CysF48pO.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authGoogleRedirect.ts": () => __vitePreload(() => import("./authGoogleRedirect-CE8HCJhI.js"), __vite__mapDeps([19,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authLogin.ts": () => __vitePreload(() => import("./authLogin-4Ah9yDd6.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authLogout.ts": () => __vitePreload(() => import("./authLogout-CgQ4FdQ-.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authRegister.ts": () => __vitePreload(() => import("./authRegister-DF8d15lb.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth/authSessionGet.ts": () => __vitePreload(() => import("./authSessionGet-CfLIytN0.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/auth.ts": () => __vitePreload(() => import("./auth-BQa89vU1.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/component/uiI18nMissing.ts": () => __vitePreload(() => import("./uiI18nMissing-DZR6SzCu.js"), __vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalConfigMerge.ts": () => __vitePreload(() => import("./portalConfigMerge-dLv56Wud.js"), __vite__mapDeps([26,1,3,2,4,5,6,7,8,9,10,27]), import.meta.url),
				"./orchestrator/portal/portalDropdownList.ts": () => __vitePreload(() => import("./portalDropdownList-_gtMQVbg.js"), __vite__mapDeps([28,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalMenuItem.ts": () => __vitePreload(() => import("./portalMenuItem-BE6FcUJy.js"), __vite__mapDeps([29,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalParamsGet.ts": () => __vitePreload(() => import("./portalParamsGet-Dj99nISl.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalTabClose.ts": () => __vitePreload(() => import("./portalTabClose-CCFGpoL7.js"), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/portalTabShow.ts": () => __vitePreload(() => import("./portalTabShow-CZ2wvjDt.js"), __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal/ready.ts": () => __vitePreload(() => import("./ready-DiJxpwIx.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/portal.ts": () => __vitePreload(() => import("./portal-C5r-d552.js"), __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./orchestrator/subject.ts": () => __vitePreload(() => import("./subject-Hs09XZoU.js"), __vite__mapDeps([35,1,3,2,4,5,6,7,8,9,10]), import.meta.url)
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
