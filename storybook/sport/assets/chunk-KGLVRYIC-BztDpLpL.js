import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { S as init_default_module, _ as init_file_system_provider, b as createDefaultCoreModule, g as EmptyFileSystem, h as init_chunk_K5T4RW27, i as CommonValueConverter, m as __name, o as InfoGrammarGeneratedModule, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as init_dependency_injection, x as createDefaultSharedCoreModule, y as inject } from "./chunk-K5T4RW27-DXbIW-NN.js";
//#region ../../common/temp/node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-KGLVRYIC.mjs
function createInfoServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const Info = inject(createDefaultCoreModule({ shared }), InfoGrammarGeneratedModule, InfoModule);
	shared.ServiceRegistry.register(Info);
	return {
		shared,
		Info
	};
}
var InfoTokenBuilder, InfoModule;
function init_chunk_KGLVRYIC() {
	return (init_chunk_KGLVRYIC = __esmMin((() => {
		init_chunk_K5T4RW27();
		init_file_system_provider(), init_default_module(), init_dependency_injection();
		InfoTokenBuilder = class extends AbstractMermaidTokenBuilder {
			static {
				__name(this, "InfoTokenBuilder");
			}
			constructor() {
				super(["info", "showInfo"]);
			}
		};
		InfoModule = { parser: {
			TokenBuilder: /* @__PURE__ */ __name(() => new InfoTokenBuilder(), "TokenBuilder"),
			ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
		} };
		__name(createInfoServices, "createInfoServices");
	})))();
}
//#endregion
export { createInfoServices as n, init_chunk_KGLVRYIC as r, InfoModule as t };
