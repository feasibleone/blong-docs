const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./generic-FoP0y2Hs.js","./rolldown-runtime-wTHAN5bU.js","./iframe-Dd4aRJs7.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./http-37OUrdVb.js","./distribution-DsVqercy.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Sn as realm, _n as init_types } from "./iframe-Dd4aRJs7.js";
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
				"./browser/generic.ts": () => __vitePreload(() => import("./generic-FoP0y2Hs.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./browser/http.ts": () => __vitePreload(() => import("./http-37OUrdVb.js"), __vite__mapDeps([11,1,12,2,3,4,5,6,7,8,9,10]), import.meta.url)
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
