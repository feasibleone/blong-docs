const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dispatch-BZiGys68.js","./rolldown-runtime-DpEnGzO4.js","./iframe-DG6UCJRm.js","./preload-helper-Dd0jen5G.js","./react-dBA6YJJt.js","./browser-BFI3d8P5.js","./App-BJ8EhoWL.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./openapi-Cs8Ni60_.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Et as init_types, jt as realm } from "./iframe-DG6UCJRm.js";
// ../../core/blong-gogo/src/orchestrator/index.ts
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
				"./common/dispatch.ts": () => __vitePreload(() => import("./dispatch-BZiGys68.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./common/openapi.ts": () => __vitePreload(() => import("./openapi-Cs8Ni60_.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
			}) : ["./common"],
			config: { default: {
				openapi: false,
				dispatch: false,
				common: true
			} }
		}));
	})))();
}
init_orchestrator();
export { orchestrator_default as default };
