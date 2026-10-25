import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { S as init_default_module, _ as init_file_system_provider, b as createDefaultCoreModule, g as EmptyFileSystem, h as init_chunk_K5T4RW27, m as __name, n as AbstractMermaidValueConverter, p as WardleyGrammarGeneratedModule, s as MermaidGeneratedSharedModule, v as init_dependency_injection, x as createDefaultSharedCoreModule, y as inject } from "./chunk-K5T4RW27-DXbIW-NN.js";
//#region ../../common/temp/node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-CIAEETIT.mjs
function createWardleyServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const Wardley = inject(createDefaultCoreModule({ shared }), WardleyGrammarGeneratedModule, WardleyModule);
	shared.ServiceRegistry.register(Wardley);
	return {
		shared,
		Wardley
	};
}
var WardleyValueConverter, WardleyModule;
function init_chunk_CIAEETIT() {
	return (init_chunk_CIAEETIT = __esmMin((() => {
		init_chunk_K5T4RW27();
		init_file_system_provider(), init_default_module(), init_dependency_injection();
		WardleyValueConverter = class extends AbstractMermaidValueConverter {
			static {
				__name(this, "WardleyValueConverter");
			}
			runCustomConverter(rule, input, _cstNode) {
				switch (rule.name.toUpperCase()) {
					case "LINK_LABEL": return input.substring(1).trim();
					default: return;
				}
			}
		};
		WardleyModule = { parser: { ValueConverter: /* @__PURE__ */ __name(() => new WardleyValueConverter(), "ValueConverter") } };
		__name(createWardleyServices, "createWardleyServices");
	})))();
}
//#endregion
export { createWardleyServices as n, init_chunk_CIAEETIT as r, WardleyModule as t };
