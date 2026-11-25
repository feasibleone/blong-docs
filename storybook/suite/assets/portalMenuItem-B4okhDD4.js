import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
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
