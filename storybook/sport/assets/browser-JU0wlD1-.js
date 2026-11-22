const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-Dvxg7tLN.js","./rolldown-runtime-wTHAN5bU.js","./iframe-DzCJG9bn.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-RsDW9gku.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./coreLabelModel-DMQ96LPf.js","./coreTranslationModel-xYbMKYFE.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Et as init_types, jt as realm } from "./iframe-DzCJG9bn.js";
// ../blong-core/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-Dvxg7tLN.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/coreLabelModel.ts": () => __vitePreload(() => import("./coreLabelModel-DMQ96LPf.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./meta/model/coreTranslationModel.ts": () => __vitePreload(() => import("./coreTranslationModel-xYbMKYFE.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
			}) : ["./meta/model", "./browser"],
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
