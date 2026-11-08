const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dispatch-D-g-ba1m.js","./rolldown-runtime-wTHAN5bU.js","./iframe-BFtoPRqr.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-DX5E6ahH.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-CqBUs-JR.css","./openapi-C00UCwTQ.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, lt as realm } from "./iframe-BFtoPRqr.js";
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
				"./common/dispatch.ts": () => __vitePreload(() => import("./dispatch-D-g-ba1m.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./common/openapi.ts": () => __vitePreload(() => import("./openapi-C00UCwTQ.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url)
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
