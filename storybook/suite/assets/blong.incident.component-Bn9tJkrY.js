const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Incident-D0UyXtbm.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./shell-BedTcraa.js","./appStore-p_jHiGC2.js","./react-dom-BZ-DbxSX.js","./iframe-Kwn0esJL.js","./preload-helper-DJ4GxKnf.js","./App-BWvWt_tT.js","./App-BdnVsVE1.css","./iframe-Dz1ZBwrY.css","./useRealmData-_K1FHSk9.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { nt as init_types, tt as handler } from "./iframe-Kwn0esJL.js";
// ../../core/blong-realm/component/blong.incident.component.ts
var blong_incident_component_default;
function init_blong_incident_component() {
	return (init_blong_incident_component = __esmMin((() => {
		init_types();
		init_preload_helper();
		blong_incident_component_default = handler(() => ({ "blong.incident.browse": async () => ({
			title: "Incident",
			permission: "blong.incident.find",
			component: async () => (await __vitePreload(async () => {
				const { Incident } = await import("./Incident-D0UyXtbm.js");
				return { Incident };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)).Incident
		}) }));
	})))();
}
init_blong_incident_component();
export { blong_incident_component_default as default };
