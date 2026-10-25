import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, Q as orchestrator } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-gogo/src/orchestrator/common/openapi.ts
var openapi_default;
function init_openapi() {
	return (init_openapi = __esmMin((() => {
		init_types();
		openapi_default = orchestrator(({ registry }) => ({
			activation: { default: {
				type: "openapi",
				namespace: ["openapi"],
				imports: [/(?<!codec)\.openapi$/],
				api: { namespace: {} }
			} },
			async start() {
				super.connect();
				const result = await super.start({});
				const assets = {};
				for (const [key, value] of Object.entries(this.config.api.namespace)) assets[key] = await this.attach?.(`${value}.asset`);
				await registry.loadApi("orchestrator.openapi.api", { namespace: assets }, "assets");
				return result;
			}
		}));
	})))();
}
//#endregion
init_openapi();
export { openapi_default as default };
