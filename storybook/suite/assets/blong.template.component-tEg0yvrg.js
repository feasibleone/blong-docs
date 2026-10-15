const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Template-Brxg2Dfu.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./inputtext.esm-BsWCZcbt.js","./appStore-8DTFQjf-.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./useRealmData-D3zGTSoh.js","./BlongContext-Gs5GTHA4.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Kt as handler, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-realm/component/blong.template.component.ts
var blong_template_component_default;
function init_blong_template_component() {
	return (init_blong_template_component = __esmMin((() => {
		init_types();
		init_preload_helper();
		blong_template_component_default = handler(() => ({ "blong.template.browse": async () => ({
			title: "Template",
			permission: "blong.template.find",
			component: async () => (await __vitePreload(async () => {
				const { Template } = await import("./Template-Brxg2Dfu.js");
				return { Template };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]), import.meta.url)).Template
		}) }));
	})))();
}
//#endregion
init_blong_template_component();
export { blong_template_component_default as default };
