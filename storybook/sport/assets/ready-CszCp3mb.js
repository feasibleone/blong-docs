import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Et as init_types, Tt as handler, dt as init_lib, ft as methodId } from "./iframe-DG6UCJRm.js";
// ../../core/blong-gogo/src/codec/adapter/openapi/ready.ts
var ready_default;
function init_ready() {
	return (init_ready = __esmMin((() => {
		init_types();
		init_lib();
		ready_default = handler(({ config, lib: { load }, errors }) => {
			let handlers;
			const assets = {};
			return {
				async ready() {
					Object.keys(config.namespace).filter(Boolean).forEach((namespace) => {
						if (![].concat(this.config.namespace).find((n) => namespace.startsWith(n))) throw errors.openapiNamespaceNotDefined({ params: { namespace: namespace.split(".")[0] } });
					});
					for (const [key, value] of Object.entries(config.namespace)) assets[key] = await this.attach?.(`${value}.asset`);
					handlers = await load(assets, /./, this.configBase);
				},
				requestSend(params, $meta) {
					const handler = $meta.method ? handlers?.[methodId($meta.method)] : void 0;
					return handler ? handler.call(this, params, $meta) : params;
				},
				responseReceive(response) {
					return response.body;
				}
			};
		});
	})))();
}
init_ready();
export { ready_default as default };
