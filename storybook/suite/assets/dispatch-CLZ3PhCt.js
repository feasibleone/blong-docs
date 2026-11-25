import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { F as declareCall, I as init_responseContext, L as namespaceOf, Ot as orchestrator, ft as recordedCall, lt as init_lib, wt as init_types } from "./iframe-Na9SG7k6.js";
// ../../core/blong-gogo/src/orchestrator/common/dispatch.ts
var dispatch_default;
function init_dispatch() {
	return (init_dispatch = __esmMin((() => {
		init_types();
		init_lib();
		init_responseContext();
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
