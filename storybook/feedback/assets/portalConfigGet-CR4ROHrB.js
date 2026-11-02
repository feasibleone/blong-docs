import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _n as init_types, gn as handler } from "./iframe-IrD74JhJ.js";
// browser/orchestrator/portal/portalConfigGet.ts
var portalConfigGet_default;
function init_portalConfigGet() {
	return (init_portalConfigGet = __esmMin((() => {
		init_types();
		portalConfigGet_default = handler(() => ({ async portalConfigGet() {
			return { menu: [{
				id: "feedback",
				title: "Feedback",
				items: [{
					title: "Review",
					method: "feedback.review",
					icon: "pi pi-comment"
				}]
			}] };
		} }));
	})))();
}
init_portalConfigGet();
export { portalConfigGet_default as default };
