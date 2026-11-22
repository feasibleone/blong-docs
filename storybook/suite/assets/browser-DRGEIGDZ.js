const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-wQj2ZW7k.js","./rolldown-runtime-wTHAN5bU.js","./iframe-D5_otGjj.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-j-lPdz5p.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css","./kustomizeFixture-Clo4GdMi.js","./kustomizeDeploymentModel-CNCVE7OL.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { kt as realm, wt as init_types } from "./iframe-D5_otGjj.js";
// ../../realm/blong-kustomize/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-wQj2ZW7k.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/fixture/kustomizeFixture.ts": () => __vitePreload(() => import("./kustomizeFixture-Clo4GdMi.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/kustomizeDeploymentModel.ts": () => __vitePreload(() => import("./kustomizeDeploymentModel-CNCVE7OL.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
