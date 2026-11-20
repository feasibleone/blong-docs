const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./gatewayTestRun-oUu5Urhc.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-D5MtwBLZ.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-BeXqXP1l.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-B4ggmZbP.css","./init-BTXtq_pP.js","./testMeterHttpFlow-B5uZrNqj.js","./gatewayApplicationModel-D5JhHRoj.js","./gatewayBundleModel-DB9UMWw4.js","./gatewaySubscriptionModel-CJN_J3Gq.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { St as realm, _t as init_types } from "./iframe-D5MtwBLZ.js";
// ../blong-gateway/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/gatewayTestRun.ts": () => __vitePreload(() => import("./gatewayTestRun-oUu5Urhc.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-BTXtq_pP.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testMeterHttpFlow.ts": () => __vitePreload(() => import("./testMeterHttpFlow-B5uZrNqj.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/gatewayApplicationModel.ts": () => __vitePreload(() => import("./gatewayApplicationModel-D5JhHRoj.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/gatewayBundleModel.ts": () => __vitePreload(() => import("./gatewayBundleModel-DB9UMWw4.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/gatewaySubscriptionModel.ts": () => __vitePreload(() => import("./gatewaySubscriptionModel-CJN_J3Gq.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
			}) : ["./meta/model", "./browser"]
		}));
	})))();
}
init_browser();
export { browser_default as default };
