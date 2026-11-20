const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./generic-DpR5QS-s.js","./rolldown-runtime-wTHAN5bU.js","./iframe-Dfus02Vk.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-DdoAR19-.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-BsAIw8gp.css","./http-r4AwQInT.js","./distribution-DsVqercy.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { bt as realm, ht as init_types } from "./iframe-Dfus02Vk.js";
// ../../core/blong-gogo/src/adapter/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm((blong) => ({
			url: import.meta.url,
			validation: blong.type.Object({
				http: blong.type.Boolean(),
				browser: blong.type.Boolean()
			}),
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/generic.ts": () => __vitePreload(() => import("./generic-DpR5QS-s.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/http.ts": () => __vitePreload(() => import("./http-r4AwQInT.js"), __vite__mapDeps([13,1,14,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
			}) : ["./browser"],
			config: { default: {
				http: false,
				generic: false,
				browser: true
			} }
		}));
	})))();
}
init_browser();
export { browser_default as default };
