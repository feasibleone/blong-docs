import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { S as init_default_module, _ as init_file_system_provider, b as createDefaultCoreModule, g as EmptyFileSystem, h as init_chunk_K5T4RW27, i as CommonValueConverter, m as __name, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, u as RadarGrammarGeneratedModule, v as init_dependency_injection, x as createDefaultSharedCoreModule, y as inject } from "./chunk-K5T4RW27-DXbIW-NN.js";
//#region ../../common/temp/node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-2KRD3SAO.mjs
function createRadarServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const Radar = inject(createDefaultCoreModule({ shared }), RadarGrammarGeneratedModule, RadarModule);
	shared.ServiceRegistry.register(Radar);
	return {
		shared,
		Radar
	};
}
var RadarTokenBuilder, RadarModule;
function init_chunk_2KRD3SAO() {
	return (init_chunk_2KRD3SAO = __esmMin((() => {
		init_chunk_K5T4RW27();
		init_file_system_provider(), init_default_module(), init_dependency_injection();
		RadarTokenBuilder = class extends AbstractMermaidTokenBuilder {
			static {
				__name(this, "RadarTokenBuilder");
			}
			constructor() {
				super(["radar-beta"]);
			}
		};
		RadarModule = { parser: {
			TokenBuilder: /* @__PURE__ */ __name(() => new RadarTokenBuilder(), "TokenBuilder"),
			ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
		} };
		__name(createRadarServices, "createRadarServices");
	})))();
}
//#endregion
export { createRadarServices as n, init_chunk_2KRD3SAO as r, RadarModule as t };
