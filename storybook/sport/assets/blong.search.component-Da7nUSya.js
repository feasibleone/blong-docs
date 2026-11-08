const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Search-DVHVBaRV.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./shell-BedTcraa.js","./appStore-p_jHiGC2.js","./react-dom-BZ-DbxSX.js","./iframe-BFtoPRqr.js","./preload-helper-DJ4GxKnf.js","./App-DX5E6ahH.js","./App-BdnVsVE1.css","./iframe-CqBUs-JR.css","./useRealmData-BXzTgkF7.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, rt as handler } from "./iframe-BFtoPRqr.js";
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
				const { Search } = await import("./Search-DVHVBaRV.js");
				return { Search };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)).Search
		}) }));
	})))();
}
init_blong_search_component();
export { blong_search_component_default as default };
