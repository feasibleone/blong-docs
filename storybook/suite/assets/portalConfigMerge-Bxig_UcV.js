import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, q as handler } from "./iframe-DXhqEaHK.js";
import { n as mergePortalConfigs } from "./portalConfig-2SpIqrim.js";
//#region ../../core/blong-browser/orchestrator/portal/portalConfigMerge.ts
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
//#endregion
init_portalConfigMerge();
export { portalConfigMerge_default as default };
