import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
import { n as mergePortalConfigs } from "./portalConfig-BKE9jbZ0.js";
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
