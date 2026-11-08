import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { it as init_types, rt as handler } from "./iframe-BFtoPRqr.js";
// ../blong-feedback/browser/orchestrator/portal/portalConfigGet.ts
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
