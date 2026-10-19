import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Wt as Internal, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-gogo/src/ResolutionLocal.ts
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
//#endregion
init_ResolutionLocal();
export { ResolutionLocal as default };
