const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./portalConfigGet-B2MVjK__.js","./rolldown-runtime-wTHAN5bU.js","./iframe-DzCJG9bn.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-RsDW9gku.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./init-COY-SLOr.js","./blong.digest.component-B31f0VV3.js","./blong.flow.component-B1Gqw8w0.js","./blong.search.component-D1yHhbit.js","./blong.template.component-CU4jf90i.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Et as init_types, jt as realm } from "./iframe-DzCJG9bn.js";
// ../../core/blong-realm/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/portal/portalConfigGet.ts": () => __vitePreload(() => import("./portalConfigGet-B2MVjK__.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-COY-SLOr.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./component/blong.digest.component.ts": () => __vitePreload(() => import("./blong.digest.component-B31f0VV3.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./component/blong.flow.component.ts": () => __vitePreload(() => import("./blong.flow.component-B1Gqw8w0.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./component/blong.search.component.ts": () => __vitePreload(() => import("./blong.search.component-D1yHhbit.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./component/blong.template.component.ts": () => __vitePreload(() => import("./blong.template.component-CU4jf90i.js"), __vite__mapDeps([17,1,3,2,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
