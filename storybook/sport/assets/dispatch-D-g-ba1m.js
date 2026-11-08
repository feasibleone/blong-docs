import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { E as namespaceOf, K as recordedCall, T as init_semanticContext, U as init_lib, ct as orchestrator, it as init_types, w as declareCall } from "./iframe-BFtoPRqr.js";
// ../../core/blong-gogo/src/orchestrator/common/dispatch.ts
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
init_dispatch();
export { dispatch_default as default };
