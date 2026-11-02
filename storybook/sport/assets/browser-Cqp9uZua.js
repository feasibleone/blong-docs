const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./portalConfigGet-BnRLB3xl.js","./rolldown-runtime-wTHAN5bU.js","./iframe-BHvXl2EW.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./init-BYZRLCE8.js","./blong.digest.component-gO22ckQ4.js","./blong.flow.component-CPTlqqmv.js","./blong.incident.component-CXhpM0Es.js","./blong.search.component-D1bQ2nkl.js","./blong.template.component-Bmk8jYKw.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Sn as realm, _n as init_types } from "./iframe-BHvXl2EW.js";
// ../../core/blong-realm/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/portal/portalConfigGet.ts": () => __vitePreload(() => import("./portalConfigGet-BnRLB3xl.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-BYZRLCE8.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./component/blong.digest.component.ts": () => __vitePreload(() => import("./blong.digest.component-gO22ckQ4.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./component/blong.flow.component.ts": () => __vitePreload(() => import("./blong.flow.component-CPTlqqmv.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./component/blong.incident.component.ts": () => __vitePreload(() => import("./blong.incident.component-CXhpM0Es.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./component/blong.search.component.ts": () => __vitePreload(() => import("./blong.search.component-D1bQ2nkl.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./component/blong.template.component.ts": () => __vitePreload(() => import("./blong.template.component-Bmk8jYKw.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10]), import.meta.url)
			}) : ["./browser/orchestrator"],
			config: { default: {
				orchestrator: true,
				component: true,
				blong: { diagram: { renderer: "mermaid" } }
			} }
		}));
	})))();
}
init_browser();
export { browser_default as default };
