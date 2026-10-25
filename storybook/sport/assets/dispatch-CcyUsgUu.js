import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { I as recordedCall, J as init_types, N as init_lib, Q as orchestrator, b as init_semanticContext, x as namespaceOf, y as declareCall } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-gogo/src/orchestrator/common/dispatch.ts
var dispatch_default;
function init_dispatch() {
	return (init_dispatch = __esmMin((() => {
		init_types();
		init_lib();
		init_semanticContext();
		dispatch_default = orchestrator(({ remote }) => ({
			activation: { default: { type: "dispatch" } },
			start() {
				super.connect();
				return super.start();
			},
			async exec(...params) {
				const destination = this.config.destination;
				const appendNamespace = this.config.appendNamespace;
				const prefix = destination ?? appendNamespace;
				const separator = destination ? "/" : ".";
				if (prefix && params.length > 1) {
					const $meta = params.pop();
					if ($meta?.method) {
						const forwarded = prefix + separator + $meta.method;
						const declared = forwarded;
						const forward = async () => await recordedCall(this, declared, () => remote.dispatch(...params, {
							...$meta,
							method: forwarded
						}));
						return (await declareCall(namespaceOf($meta.method), declared, forward, $meta))?.[0];
					}
				}
			}
		}));
	})))();
}
//#endregion
init_dispatch();
export { dispatch_default as default };
