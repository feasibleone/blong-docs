const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Flow-BpPoUbeq.js","./rolldown-runtime-V4kyJ4NV.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./BlongContext-B_6NAJve.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./inputtext.esm-DVdHXlQv.js","./react-dom--p2_7awc.js","./datatable.esm-CRrgT_ub.js","./Theme-l0qEzVuS.js","./primereact-B8YiuDoh.js","./Editor-CXwS--8T.js","./browser-vpOcWc6g.js","./Editor-NYbxgPCc.css","./iframe-DXhqEaHK.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./__vite-browser-external-bwQQhMfC.js","./attachable-B3-ly0Fu.js","./iframe-Dy8lWZD5.css","./Theme-DmFyobZp.css","./useRealmData-DUeXll-k.js","./Flow-C1R5lKp7.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { J as init_types, q as handler } from "./iframe-DXhqEaHK.js";
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
				const { Flow } = await import("./Flow-BpPoUbeq.js");
				return { Flow };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]), import.meta.url)).Flow
		}) }));
	})))();
}
//#endregion
init_blong_flow_component();
export { blong_flow_component_default as default };
