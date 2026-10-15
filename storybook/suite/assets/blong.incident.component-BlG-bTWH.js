const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Incident-DN1Bxlj3.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./inputtext.esm-BsWCZcbt.js","./appStore-8DTFQjf-.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./useRealmData-D3zGTSoh.js","./BlongContext-Gs5GTHA4.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Kt as handler, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-realm/component/blong.incident.component.ts
var blong_incident_component_default;
function init_blong_incident_component() {
	return (init_blong_incident_component = __esmMin((() => {
		init_types();
		init_preload_helper();
		blong_incident_component_default = handler(() => ({ "blong.incident.browse": async () => ({
			title: "Incident",
			permission: "blong.incident.find",
			component: async () => (await __vitePreload(async () => {
				const { Incident } = await import("./Incident-DN1Bxlj3.js");
				return { Incident };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]), import.meta.url)).Incident
		}) }));
	})))();
}
//#endregion
init_blong_incident_component();
export { blong_incident_component_default as default };
