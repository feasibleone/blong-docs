const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Incident-DzdoIzUZ.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./shell-BedTcraa.js","./appStore-p_jHiGC2.js","./react-dom-BZ-DbxSX.js","./iframe-BslwTayt.js","./preload-helper-DJ4GxKnf.js","./App-aUJ8LCxO.js","./App-BdnVsVE1.css","./iframe-DD0X1HUh.css","./useRealmData-GO7PwA6c.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { J as init_types, q as handler } from "./iframe-BslwTayt.js";
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
				const { Incident } = await import("./Incident-DzdoIzUZ.js");
				return { Incident };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)).Incident
		}) }));
	})))();
}
init_blong_incident_component();
export { blong_incident_component_default as default };
