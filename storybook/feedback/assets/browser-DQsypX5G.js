const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./generic-C7_D1H1F.js","./rolldown-runtime-DpEnGzO4.js","./iframe-DRWtcwdA.js","./preload-helper-Dd0jen5G.js","./react-dBA6YJJt.js","./App-BXXuylT2.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-CGV3BbKH.css","./http-BBardp-7.js","./distribution-hMJS4taS.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { at as init_types, lt as realm } from "./iframe-DRWtcwdA.js";
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
				"./browser/generic.ts": () => __vitePreload(() => import("./generic-C7_D1H1F.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/http.ts": () => __vitePreload(() => import("./http-BBardp-7.js"), __vite__mapDeps([12,1,13,2,3,4,5,6,7,8,9,10,11]), import.meta.url)
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
