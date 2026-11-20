import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _t as init_types, gt as handler } from "./iframe-D5MtwBLZ.js";
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
