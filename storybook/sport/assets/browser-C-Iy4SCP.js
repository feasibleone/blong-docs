const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./gatewayTestRun-7bO3UWSJ.js","./rolldown-runtime-DpEnGzO4.js","./preload-helper-Dd0jen5G.js","./iframe-DG6UCJRm.js","./react-dBA6YJJt.js","./browser-BFI3d8P5.js","./App-BJ8EhoWL.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./init-CJmYRsnZ.js","./testMeterHttpFlow-B9VRagtM.js","./gatewayApplicationModel-WvrTvXbl.js","./gatewayBundleModel-DtPLefuf.js","./gatewaySubscriptionModel-RHhFxB1x.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Et as init_types, jt as realm } from "./iframe-DG6UCJRm.js";
// ../blong-gateway/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/gatewayTestRun.ts": () => __vitePreload(() => import("./gatewayTestRun-7bO3UWSJ.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-CJmYRsnZ.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/test/test/testMeterHttpFlow.ts": () => __vitePreload(() => import("./testMeterHttpFlow-B9VRagtM.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/gatewayApplicationModel.ts": () => __vitePreload(() => import("./gatewayApplicationModel-WvrTvXbl.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/gatewayBundleModel.ts": () => __vitePreload(() => import("./gatewayBundleModel-DtPLefuf.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/gatewaySubscriptionModel.ts": () => __vitePreload(() => import("./gatewaySubscriptionModel-RHhFxB1x.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
			}) : ["./meta/model", "./browser"]
		}));
	})))();
}
init_browser();
export { browser_default as default };
