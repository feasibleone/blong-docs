import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
// ../../realm/blong-viewer/browser/orchestrator/portal/portalConfigGet.ts
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
