import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { J as init_types, q as handler } from "./iframe-BslwTayt.js";
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
