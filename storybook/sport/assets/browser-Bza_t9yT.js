const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-3HOUoHPZ.js","./rolldown-runtime-wTHAN5bU.js","./iframe-BFtoPRqr.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-DX5E6ahH.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-CqBUs-JR.css","./coreLabelModel-BwS3M-eH.js","./coreTranslationModel-CHmaSj8P.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, lt as realm } from "./iframe-BFtoPRqr.js";
// ../blong-core/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-3HOUoHPZ.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/coreLabelModel.ts": () => __vitePreload(() => import("./coreLabelModel-BwS3M-eH.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./meta/model/coreTranslationModel.ts": () => __vitePreload(() => import("./coreTranslationModel-CHmaSj8P.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url)
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
