const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-D6rRCM9n.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-DxBhgsxq.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./browser-vpOcWc6g.js","./__vite-browser-external-bwQQhMfC.js","./attachable-B3-ly0Fu.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./primereact-_rYrCq5a.js","./Deck-B7MkA9kL.js","./BlongContext-B_6NAJve.js","./inputtext.esm-DVdHXlQv.js","./react-dom--p2_7awc.js","./Deck-DVlB4hMN.css","./datatable.esm-CRrgT_ub.js","./iframe-Dy8lWZD5.css","./testMeterHttpFlow-TSRwJ_OT.js","./gatewayApplicationModel-D7A5RqJa.js","./gatewayBundleModel-DELiIs2M.js","./gatewaySubscriptionModel-lBR-pOE-.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { $ as realm, J as init_types } from "./iframe-DxBhgsxq.js";
//#region ../blong-gateway/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-D6rRCM9n.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./browser/test/test/testMeterHttpFlow.ts": () => __vitePreload(() => import("./testMeterHttpFlow-TSRwJ_OT.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./meta/model/gatewayApplicationModel.ts": () => __vitePreload(() => import("./gatewayApplicationModel-D7A5RqJa.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./meta/model/gatewayBundleModel.ts": () => __vitePreload(() => import("./gatewayBundleModel-DELiIs2M.js"), __vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./meta/model/gatewaySubscriptionModel.ts": () => __vitePreload(() => import("./gatewaySubscriptionModel-lBR-pOE-.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url)
			}) : ["./meta/model", "./browser"]
		}));
	})))();
}
//#endregion
init_browser();
export { browser_default as default };
