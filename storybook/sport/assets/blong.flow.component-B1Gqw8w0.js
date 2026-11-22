const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Flow-Db8zLHQ4.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./App-RsDW9gku.js","./preload-helper-DJ4GxKnf.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-DzCJG9bn.js","./browser-BYUjCXlM.js","./iframe-W-GhGhIc.css","./useRealmData-D9GT--Hn.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Et as init_types, Tt as handler } from "./iframe-DzCJG9bn.js";
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
				const { Flow } = await import("./Flow-Db8zLHQ4.js");
				return { Flow };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url)).Flow
		}) }));
	})))();
}
init_blong_flow_component();
export { blong_flow_component_default as default };
