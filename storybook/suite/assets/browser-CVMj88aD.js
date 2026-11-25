const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-BaYmC_cZ.js","./rolldown-runtime-DpEnGzO4.js","./iframe-Na9SG7k6.js","./preload-helper-Dd0jen5G.js","./react-dBA6YJJt.js","./browser-BFI3d8P5.js","./App-BUQapjGL.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css","./kustomizeFixture-TcuAEfSM.js","./kustomizeDeploymentModel-BtSOExPR.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { kt as realm, wt as init_types } from "./iframe-Na9SG7k6.js";
// ../../realm/blong-kustomize/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-BaYmC_cZ.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/fixture/kustomizeFixture.ts": () => __vitePreload(() => import("./kustomizeFixture-TcuAEfSM.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/kustomizeDeploymentModel.ts": () => __vitePreload(() => import("./kustomizeDeploymentModel-BtSOExPR.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
			}) : [
				"./meta/model",
				"./meta/fixture",
				"./browser/orchestrator"
			],
			config: { default: {
				meta: true,
				orchestrator: true,
				component: true
			} }
		}));
	})))();
}
init_browser();
export { browser_default as default };
