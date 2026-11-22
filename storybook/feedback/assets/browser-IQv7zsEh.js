const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./feedbackReview-BJptH0mE.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./iframe-CFJfMZ3i.js","./react-DUbJxPEF.js","./App-D0I1Wyqw.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-CGV3BbKH.css","./portalConfigGet-DE496uQT.js","./init-DzvZqnp3.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { at as init_types, lt as realm } from "./iframe-CFJfMZ3i.js";
// browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/component/feedbackReview.ts": () => __vitePreload(() => import("./feedbackReview-BJptH0mE.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/orchestrator/portal/portalConfigGet.ts": () => __vitePreload(() => import("./portalConfigGet-DE496uQT.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-DzvZqnp3.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url)
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
