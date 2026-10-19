const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Flow-DOniRfO2.js","./rolldown-runtime-V4kyJ4NV.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./BlongContext-Gs5GTHA4.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./Theme-DlFJmlox.js","./iframe-jjCxrJpo.js","./iframe-Dy8lWZD5.css","./Theme-DmFyobZp.css","./useRealmData-D3zGTSoh.js","./Flow-C1R5lKp7.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Kt as handler, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-realm/component/blong.flow.component.ts
var blong_flow_component_default;
function init_blong_flow_component() {
	return (init_blong_flow_component = __esmMin((() => {
		init_types();
		init_preload_helper();
		blong_flow_component_default = handler(() => ({ "blong.flow.browse": async () => ({
			title: "Flow",
			permission: "blong.flow.find",
			component: async () => (await __vitePreload(async () => {
				const { Flow } = await import("./Flow-DOniRfO2.js");
				return { Flow };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), import.meta.url)).Flow
		}) }));
	})))();
}
//#endregion
init_blong_flow_component();
export { blong_flow_component_default as default };
