import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Et as init_types, Tt as handler } from "./iframe-DG6UCJRm.js";
// ../blong-viewer/browser/orchestrator/portal/portalConfigGet.ts
var portalConfigGet_default;
function init_portalConfigGet() {
	return (init_portalConfigGet = __esmMin((() => {
		init_types();
		portalConfigGet_default = handler(() => ({ async portalConfigGet() {
			return { menu: [{
				id: "viewer",
				title: "Observability",
				items: [{
					title: "Logs",
					method: "viewer.log",
					icon: "pi pi-list"
				}]
			}] };
		} }));
	})))();
}
init_portalConfigGet();
export { portalConfigGet_default as default };
