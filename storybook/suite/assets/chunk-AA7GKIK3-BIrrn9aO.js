import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { S as init_default_module, _ as init_file_system_provider, b as createDefaultCoreModule, g as EmptyFileSystem, h as init_chunk_K5T4RW27, l as PieGrammarGeneratedModule, m as __name, n as AbstractMermaidValueConverter, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as init_dependency_injection, x as createDefaultSharedCoreModule, y as inject } from "./chunk-K5T4RW27-DXbIW-NN.js";
//#region ../../common/temp/node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-AA7GKIK3.mjs
function createPieServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const Pie = inject(createDefaultCoreModule({ shared }), PieGrammarGeneratedModule, PieModule);
	shared.ServiceRegistry.register(Pie);
	return {
		shared,
		Pie
	};
}
var PieTokenBuilder, PieValueConverter, PieModule;
function init_chunk_AA7GKIK3() {
	return (init_chunk_AA7GKIK3 = __esmMin((() => {
		init_chunk_K5T4RW27();
		init_file_system_provider(), init_default_module(), init_dependency_injection();
		PieTokenBuilder = class extends AbstractMermaidTokenBuilder {
			static {
				__name(this, "PieTokenBuilder");
			}
			constructor() {
				super(["pie", "showData"]);
			}
		};
		PieValueConverter = class extends AbstractMermaidValueConverter {
			static {
				__name(this, "PieValueConverter");
			}
			runCustomConverter(rule, input, _cstNode) {
				if (rule.name !== "PIE_SECTION_LABEL") return;
				return input.replace(/"/g, "").trim();
			}
		};
		PieModule = { parser: {
			TokenBuilder: /* @__PURE__ */ __name(() => new PieTokenBuilder(), "TokenBuilder"),
			ValueConverter: /* @__PURE__ */ __name(() => new PieValueConverter(), "ValueConverter")
		} };
		__name(createPieServices, "createPieServices");
	})))();
}
//#endregion
export { createPieServices as n, init_chunk_AA7GKIK3 as r, PieModule as t };
