const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./feedbackReview-D1HxYdXx.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-BHvXl2EW.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./portalConfigGet-BS_sWuBI.js","./init-BiUvFmJN.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Sn as realm, _n as init_types } from "./iframe-BHvXl2EW.js";
// ../blong-feedback/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/feedbackReview.ts": () => __vitePreload(() => import("./feedbackReview-D1HxYdXx.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./browser/orchestrator/portal/portalConfigGet.ts": () => __vitePreload(() => import("./portalConfigGet-BS_sWuBI.js"), __vite__mapDeps([11,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-BiUvFmJN.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10]), import.meta.url)
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
