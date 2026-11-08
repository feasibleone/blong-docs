import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { it as init_types, rt as handler } from "./iframe-BFtoPRqr.js";
// ../../core/blong-browser/orchestrator/portal/portalMenuItem.ts
var portalMenuItem_default;
function init_portalMenuItem() {
	return (init_portalMenuItem = __esmMin((() => {
		init_types();
		portalMenuItem_default = handler(({ handler }) => async function portalMenuItem({ action }, $meta) {
			const componentHandler = handler[action];
			if (!componentHandler) return null;
			return componentHandler({}, {
				...$meta,
				method: action
			});
		});
	})))();
}
init_portalMenuItem();
export { portalMenuItem_default as default };
