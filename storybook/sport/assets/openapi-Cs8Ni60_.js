import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { At as orchestrator, Et as init_types } from "./iframe-DG6UCJRm.js";
// ../../core/blong-gogo/src/orchestrator/common/openapi.ts
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
init_openapi();
export { openapi_default as default };
