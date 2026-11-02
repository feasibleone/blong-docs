const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Flow-Cav64h7w.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./BlongContext-B-oAdKSg.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./Theme-D6ncdTNb.js","./iframe-IrD74JhJ.js","./iframe-Dy8lWZD5.css","./Theme-DmFyobZp.css","./useRealmData-DC8bvFuc.js","./Flow-C1R5lKp7.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { _n as init_types, gn as handler } from "./iframe-IrD74JhJ.js";
// ../../core/blong-realm/component/blong.flow.component.ts
var blong_flow_component_default;
function init_blong_flow_component() {
	return (init_blong_flow_component = __esmMin((() => {
		init_types();
		init_preload_helper();
		blong_flow_component_default = handler(() => ({ "blong.flow.browse": async () => ({
			title: "Flow",
			permission: "blong.flow.find",
			component: async () => (await __vitePreload(async () => {
				const { Flow } = await import("./Flow-Cav64h7w.js");
				return { Flow };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), import.meta.url)).Flow
		}) }));
	})))();
}
init_blong_flow_component();
export { blong_flow_component_default as default };
