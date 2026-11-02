const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-2hQnehbU.js","./rolldown-runtime-wTHAN5bU.js","./iframe-IrD74JhJ.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { _n as init_types, xn as realm } from "./iframe-IrD74JhJ.js";
// ../blong-login/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm((blong) => ({
			url: import.meta.url,
			validation: blong.type.Object({}),
			children: globalThis.window ? /* #__PURE__ */ Object.assign({ "./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-2hQnehbU.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url) }) : ["./browser", "./test"],
			config: {
				default: { browser: {} },
				dev: {},
				microservice: {},
				integration: { test: true }
			}
		}));
	})))();
}
init_browser();
export { browser_default as default };
