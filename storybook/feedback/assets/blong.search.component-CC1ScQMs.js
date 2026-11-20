const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Search-D94RIOZS.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./shell-BedTcraa.js","./appStore-p_jHiGC2.js","./react-dom-BZ-DbxSX.js","./iframe-Dr-ELyHG.js","./preload-helper-DJ4GxKnf.js","./App-CjPLPfYu.js","./App-hWw_HkPx.css","./iframe-CGV3BbKH.css","./useRealmData-D1H0JlF0.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { X as init_types, Y as handler } from "./iframe-Dr-ELyHG.js";
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
				const { Search } = await import("./Search-D94RIOZS.js");
				return { Search };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)).Search
		}) }));
	})))();
}
init_blong_search_component();
export { blong_search_component_default as default };
