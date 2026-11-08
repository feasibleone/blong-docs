const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./generic-YlcozqF4.js","./rolldown-runtime-wTHAN5bU.js","./iframe-BFtoPRqr.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-DX5E6ahH.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-CqBUs-JR.css","./http-CHP4B0xs.js","./distribution-DsVqercy.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, lt as realm } from "./iframe-BFtoPRqr.js";
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
				"./browser/generic.ts": () => __vitePreload(() => import("./generic-YlcozqF4.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/http.ts": () => __vitePreload(() => import("./http-CHP4B0xs.js"), __vite__mapDeps([12,1,13,2,3,4,5,6,7,8,9,10,11]), import.meta.url)
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
