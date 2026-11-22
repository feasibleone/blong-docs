const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./portalConfigGet-DTaY1ZYh.js","./rolldown-runtime-wTHAN5bU.js","./iframe-CFJfMZ3i.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-D0I1Wyqw.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-CGV3BbKH.css","./init-DAxEGbwi.js","./blong.digest.component-DgbYTj0X.js","./blong.flow.component-DOB53546.js","./blong.search.component-DSerph8R.js","./blong.template.component-B3cvuit2.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { at as init_types, lt as realm } from "./iframe-CFJfMZ3i.js";
// ../../core/blong-realm/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/portal/portalConfigGet.ts": () => __vitePreload(() => import("./portalConfigGet-DTaY1ZYh.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-DAxEGbwi.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./component/blong.digest.component.ts": () => __vitePreload(() => import("./blong.digest.component-DgbYTj0X.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./component/blong.flow.component.ts": () => __vitePreload(() => import("./blong.flow.component-DOB53546.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./component/blong.search.component.ts": () => __vitePreload(() => import("./blong.search.component-DSerph8R.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url),
				"./component/blong.template.component.ts": () => __vitePreload(() => import("./blong.template.component-B3cvuit2.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10,11]), import.meta.url)
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
