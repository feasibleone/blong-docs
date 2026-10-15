import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Wt as Internal, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-gogo/src/ResolutionK8s.ts
var ResolutionK8s;
function init_ResolutionK8s() {
	return (init_ResolutionK8s = __esmMin((() => {
		init_types();
		ResolutionK8s = class extends Internal {
			#config = {
				portRpc: 8091,
				portGateway: 8080,
				domain: "svc.cluster.local",
				namespace: ""
			};
			#manifest;
			constructor(config, { manifest } = {}) {
				super();
				this.merge(this.#config, config);
				this.#manifest = manifest;
				if (!this.#config.namespace) {
					const env = {};
					this.#config.namespace = env?.BLONG_NAMESPACE ?? env?.KUBERNETES_NAMESPACE ?? "default";
				}
			}
			async resolve(service) {
				const isRpc = service.startsWith("rpc-");
				return {
					hostname: `${service.replace(/^rpc-/, "")}.${this.#config.namespace}.${this.#config.domain}`,
					port: `${isRpc ? this.#config.portRpc : this.#config.portGateway}`
				};
			}
			announce() {}
			async start() {}
			async stop() {}
		};
	})))();
}
//#endregion
init_ResolutionK8s();
export { ResolutionK8s as default };
