const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Search-DfSL9nN6.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js","./jsx-runtime-WLy6qMFy.js","./shell-h_oHnhE9.js","./appStore-dUXbUZgf.js","./react-dom-APvmjNld.js","./iframe-Na9SG7k6.js","./preload-helper-Dd0jen5G.js","./browser-BFI3d8P5.js","./App-BUQapjGL.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css","./useRealmData-DJI_PYpe.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
// ../../core/blong-realm/component/blong.search.component.ts
var blong_search_component_default;
function init_blong_search_component() {
	return (init_blong_search_component = __esmMin((() => {
		init_types();
		init_preload_helper();
		blong_search_component_default = handler(() => ({ "blong.search.browse": async () => ({
			title: "Search",
			permission: "blong.search.find",
			component: async () => (await __vitePreload(async () => {
				const { Search } = await import("./Search-DfSL9nN6.js");
				return { Search };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url)).Search
		}) }));
	})))();
}
init_blong_search_component();
export { blong_search_component_default as default };
