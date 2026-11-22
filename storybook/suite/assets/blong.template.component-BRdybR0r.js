const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Template-ClYjaVzP.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./shell-BedTcraa.js","./appStore-p_jHiGC2.js","./react-dom-BZ-DbxSX.js","./iframe-D5_otGjj.js","./preload-helper-DJ4GxKnf.js","./browser-BYUjCXlM.js","./App-j-lPdz5p.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css","./useRealmData-DQGtJp70.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Ct as handler, wt as init_types } from "./iframe-D5_otGjj.js";
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
				const { Template } = await import("./Template-ClYjaVzP.js");
				return { Template };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url)).Template
		}) }));
	})))();
}
init_blong_template_component();
export { blong_template_component_default as default };
