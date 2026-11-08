import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { J as init_types, q as handler } from "./iframe-BslwTayt.js";
import { n as mergePortalConfigs } from "./portalConfig-D_F_e55G.js";
// ../../core/blong-browser/orchestrator/portal/portalConfigMerge.ts
var portalConfigMerge_default;
function init_portalConfigMerge() {
	return (init_portalConfigMerge = __esmMin((() => {
		init_types();
		portalConfigMerge_default = handler(() => async function portalConfigMerge(params, $meta) {
			const providers = this.findHandlers?.("portalConfigGet") ?? [];
			const answers = await Promise.all(providers.map((provider) => provider.call(this, params ?? {}, $meta)));
			return mergePortalConfigs(answers);
		});
	})))();
}
init_portalConfigMerge();
export { portalConfigMerge_default as default };
