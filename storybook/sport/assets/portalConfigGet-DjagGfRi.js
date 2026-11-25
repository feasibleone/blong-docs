import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Et as init_types, Tt as handler } from "./iframe-DG6UCJRm.js";
// ../blong-blob/browser/orchestrator/portal/portalConfigGet.ts
var portalConfigGet_default;
function init_portalConfigGet() {
	return (init_portalConfigGet = __esmMin((() => {
		init_types();
		portalConfigGet_default = handler(() => ({ async portalConfigGet() {
			return { blob: { issue: "blob.scope.issue" } };
		} }));
	})))();
}
init_portalConfigGet();
export { portalConfigGet_default as default };
