const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./portalConfigGet-Cwlzv_06.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-jjCxrJpo.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css","./init-BK_OOgX3.js","./blong.digest.component-Dq9L5auU.js","./blong.flow.component-DsItwq3S.js","./blong.incident.component-DTXAGp4E.js","./blong.search.component-BREXJCj_.js","./blong.template.component-DzmogBBO.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Qt as realm, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-realm/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/portal/portalConfigGet.ts": () => __vitePreload(() => import("./portalConfigGet-Cwlzv_06.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-BK_OOgX3.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./component/blong.digest.component.ts": () => __vitePreload(() => import("./blong.digest.component-Dq9L5auU.js"), __vite__mapDeps([12,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./component/blong.flow.component.ts": () => __vitePreload(() => import("./blong.flow.component-DsItwq3S.js"), __vite__mapDeps([13,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./component/blong.incident.component.ts": () => __vitePreload(() => import("./blong.incident.component-DTXAGp4E.js"), __vite__mapDeps([14,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./component/blong.search.component.ts": () => __vitePreload(() => import("./blong.search.component-BREXJCj_.js"), __vite__mapDeps([15,1,3,2,4,5,6,7,8,9,10]), import.meta.url),
				"./component/blong.template.component.ts": () => __vitePreload(() => import("./blong.template.component-DzmogBBO.js"), __vite__mapDeps([16,1,3,2,4,5,6,7,8,9,10]), import.meta.url)
			}) : ["./browser/orchestrator"],
			config: { default: {
				orchestrator: true,
				component: true,
				blong: { diagram: { renderer: "mermaid" } }
			} }
		}));
	})))();
}
//#endregion
init_browser();
export { browser_default as default };
