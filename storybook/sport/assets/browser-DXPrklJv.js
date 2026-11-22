const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./gatewayTestRun-CNzJWeFQ.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-DzCJG9bn.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-RsDW9gku.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./init-DIuXYDsM.js","./testMeterHttpFlow-DVZ1VZzq.js","./gatewayApplicationModel-BcwZmZKP.js","./gatewayBundleModel-7s1zZO_L.js","./gatewaySubscriptionModel-3nO7HMAc.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Et as init_types, jt as realm } from "./iframe-DzCJG9bn.js";
// ../blong-gateway/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/gatewayTestRun.ts": () => __vitePreload(() => import("./gatewayTestRun-CNzJWeFQ.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-DIuXYDsM.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testMeterHttpFlow.ts": () => __vitePreload(() => import("./testMeterHttpFlow-DVZ1VZzq.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/gatewayApplicationModel.ts": () => __vitePreload(() => import("./gatewayApplicationModel-BcwZmZKP.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/gatewayBundleModel.ts": () => __vitePreload(() => import("./gatewayBundleModel-7s1zZO_L.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/gatewaySubscriptionModel.ts": () => __vitePreload(() => import("./gatewaySubscriptionModel-3nO7HMAc.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
			}) : ["./meta/model", "./browser"]
		}));
	})))();
}
init_browser();
export { browser_default as default };
