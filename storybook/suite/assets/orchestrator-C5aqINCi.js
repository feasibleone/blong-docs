const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dispatch-D-7qDsFr.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-jjCxrJpo.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css","./openapi-BFCYcJsG.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Qt as realm, qt as init_types } from "./iframe-jjCxrJpo.js";
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
				"./common/dispatch.ts": () => __vitePreload(() => import("./dispatch-D-7qDsFr.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./common/openapi.ts": () => __vitePreload(() => import("./openapi-BFCYcJsG.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]), import.meta.url)
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
