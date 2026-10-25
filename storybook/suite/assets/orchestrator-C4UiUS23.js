const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dispatch-B123LDq_.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-DXhqEaHK.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./browser-vpOcWc6g.js","./__vite-browser-external-bwQQhMfC.js","./attachable-B3-ly0Fu.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./primereact-B8YiuDoh.js","./inputtext.esm-DVdHXlQv.js","./react-dom--p2_7awc.js","./datatable.esm-CRrgT_ub.js","./Editor-CXwS--8T.js","./BlongContext-B_6NAJve.js","./Editor-NYbxgPCc.css","./iframe-Dy8lWZD5.css","./openapi-BrCN2AcJ.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { $ as realm, J as init_types } from "./iframe-DXhqEaHK.js";
//#region ../../core/blong-gogo/src/orchestrator/index.ts
var orchestrator_default;
function init_orchestrator() {
	return (init_orchestrator = __esmMin((() => {
		init_types();
		init_preload_helper();
		orchestrator_default = realm((blong) => ({
			url: import.meta.url,
			validation: blong.type.Object({
				openapi: blong.type.Boolean(),
				dispatch: blong.type.Boolean(),
				common: blong.type.Boolean()
			}),
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./common/dispatch.ts": () => __vitePreload(() => import("./dispatch-B123LDq_.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./common/openapi.ts": () => __vitePreload(() => import("./openapi-BrCN2AcJ.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url)
			}) : ["./common"],
			config: { default: {
				openapi: false,
				dispatch: false,
				common: true
			} }
		}));
	})))();
}
//#endregion
init_orchestrator();
export { orchestrator_default as default };
