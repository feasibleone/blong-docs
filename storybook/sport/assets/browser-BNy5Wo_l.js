const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-CPdu0qVk.js","./rolldown-runtime-wTHAN5bU.js","./iframe-BHvXl2EW.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./testMeterHttpFlow-DYA_0_d-.js","./gatewayApplicationModel-DDb3WmNr.js","./gatewayBundleModel-B4Tf-kqM.js","./gatewaySubscriptionModel-vn3VZ7bx.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Sn as realm, _n as init_types } from "./iframe-BHvXl2EW.js";
// ../blong-gateway/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-CPdu0qVk.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./browser/test/test/testMeterHttpFlow.ts": () => __vitePreload(() => import("./testMeterHttpFlow-DYA_0_d-.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/model/gatewayApplicationModel.ts": () => __vitePreload(() => import("./gatewayApplicationModel-DDb3WmNr.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/model/gatewayBundleModel.ts": () => __vitePreload(() => import("./gatewayBundleModel-B4Tf-kqM.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./meta/model/gatewaySubscriptionModel.ts": () => __vitePreload(() => import("./gatewaySubscriptionModel-vn3VZ7bx.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10]), import.meta.url)
			}) : ["./meta/model", "./browser"]
		}));
	})))();
}
init_browser();
export { browser_default as default };
