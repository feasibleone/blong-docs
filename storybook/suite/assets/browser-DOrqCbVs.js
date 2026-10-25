const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./portalConfigGet-CPdSAIuE.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-DXhqEaHK.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./browser-vpOcWc6g.js","./__vite-browser-external-bwQQhMfC.js","./attachable-B3-ly0Fu.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./primereact-B8YiuDoh.js","./inputtext.esm-DVdHXlQv.js","./react-dom--p2_7awc.js","./datatable.esm-CRrgT_ub.js","./Editor-CXwS--8T.js","./BlongContext-B_6NAJve.js","./Editor-NYbxgPCc.css","./iframe-Dy8lWZD5.css","./init-C8nN5_8l.js","./blong.digest.component-Dv-0Y0mF.js","./blong.flow.component-PGt7jzZT.js","./blong.incident.component-Cegr-A_Q.js","./blong.search.component-CsYCma_x.js","./blong.template.component-Bq_yENVI.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { $ as realm, J as init_types } from "./iframe-DXhqEaHK.js";
//#region ../../core/blong-realm/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm(() => ({
			url: import.meta.url,
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/orchestrator/portal/portalConfigGet.ts": () => __vitePreload(() => import("./portalConfigGet-CPdSAIuE.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./browser/orchestrator/subject/init.ts": () => __vitePreload(() => import("./init-C8nN5_8l.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./component/blong.digest.component.ts": () => __vitePreload(() => import("./blong.digest.component-Dv-0Y0mF.js"), __vite__mapDeps([21,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./component/blong.flow.component.ts": () => __vitePreload(() => import("./blong.flow.component-PGt7jzZT.js"), __vite__mapDeps([22,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./component/blong.incident.component.ts": () => __vitePreload(() => import("./blong.incident.component-Cegr-A_Q.js"), __vite__mapDeps([23,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./component/blong.search.component.ts": () => __vitePreload(() => import("./blong.search.component-CsYCma_x.js"), __vite__mapDeps([24,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./component/blong.template.component.ts": () => __vitePreload(() => import("./blong.template.component-Bq_yENVI.js"), __vite__mapDeps([25,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url)
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
