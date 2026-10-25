const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Search-70VwlCCH.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./inputtext.esm-DVdHXlQv.js","./appStore-Cfk3hkpQ.js","./react-dom--p2_7awc.js","./useRealmData-DUeXll-k.js","./BlongContext-B_6NAJve.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { J as init_types, q as handler } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-realm/component/blong.search.component.ts
var blong_search_component_default;
function init_blong_search_component() {
	return (init_blong_search_component = __esmMin((() => {
		init_types();
		init_preload_helper();
		blong_search_component_default = handler(() => ({ "blong.search.browse": async () => ({
			title: "Search",
			permission: "blong.search.find",
			component: async () => (await __vitePreload(async () => {
				const { Search } = await import("./Search-70VwlCCH.js");
				return { Search };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8]), import.meta.url)).Search
		}) }));
	})))();
}
//#endregion
init_blong_search_component();
export { blong_search_component_default as default };
