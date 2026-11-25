const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Flow-ZWV42N7i.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js","./App-BUQapjGL.js","./preload-helper-Dd0jen5G.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-Na9SG7k6.js","./browser-BFI3d8P5.js","./iframe-Bk4Mxfji.css","./useRealmData-DJI_PYpe.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
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
				const { Flow } = await import("./Flow-ZWV42N7i.js");
				return { Flow };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url)).Flow
		}) }));
	})))();
}
init_blong_flow_component();
export { blong_flow_component_default as default };
