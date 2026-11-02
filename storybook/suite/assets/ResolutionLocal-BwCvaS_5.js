import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _n as init_types, mn as Internal } from "./iframe-Dd4aRJs7.js";
// ../../core/blong-gogo/src/ResolutionLocal.ts
var ResolutionLocal;
function init_ResolutionLocal() {
	return (init_ResolutionLocal = __esmMin((() => {
		init_types();
		ResolutionLocal = class extends Internal {
			#config = {
				portRpc: 8091,
				portGateway: 8080,
				domain: "localhost"
			};
			#manifest;
			constructor(config, { manifest } = {}) {
				super();
				this.merge(this.#config, config);
				this.#manifest = manifest;
			}
			async resolve(service) {
				const isRpc = service.startsWith("rpc-");
				const manifestPort = this.#manifest ? await this.#manifest[isRpc ? "rpcPort" : "gatewayPort"] : void 0;
				return {
					hostname: "localhost",
					port: manifestPort != null ? `${manifestPort}` : isRpc ? `${this.#config.portRpc}` : `${this.#config.portGateway}`
				};
			}
			announce() {}
			async start() {}
			async stop() {}
		};
	})))();
}
init_ResolutionLocal();
export { ResolutionLocal as default };
