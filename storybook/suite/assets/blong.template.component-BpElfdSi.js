const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Template-m7IeKXuD.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js","./jsx-runtime-WLy6qMFy.js","./shell-h_oHnhE9.js","./appStore-dUXbUZgf.js","./react-dom-APvmjNld.js","./iframe-Na9SG7k6.js","./preload-helper-Dd0jen5G.js","./browser-BFI3d8P5.js","./App-BUQapjGL.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css","./useRealmData-DJI_PYpe.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
// ../../core/blong-realm/component/blong.template.component.ts
var blong_template_component_default;
function init_blong_template_component() {
	return (init_blong_template_component = __esmMin((() => {
		init_types();
		init_preload_helper();
		blong_template_component_default = handler(() => ({ "blong.template.browse": async () => ({
			title: "Template",
			permission: "blong.template.find",
			component: async () => (await __vitePreload(async () => {
				const { Template } = await import("./Template-m7IeKXuD.js");
				return { Template };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url)).Template
		}) }));
	})))();
}
init_blong_template_component();
export { blong_template_component_default as default };
