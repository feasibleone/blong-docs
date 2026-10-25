import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { S as init_default_module, _ as init_file_system_provider, a as GitGraphGrammarGeneratedModule, b as createDefaultCoreModule, g as EmptyFileSystem, h as init_chunk_K5T4RW27, i as CommonValueConverter, m as __name, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as init_dependency_injection, x as createDefaultSharedCoreModule, y as inject } from "./chunk-K5T4RW27-DXbIW-NN.js";
//#region ../../common/temp/node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-67CJDMHE.mjs
function createGitGraphServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const GitGraph = inject(createDefaultCoreModule({ shared }), GitGraphGrammarGeneratedModule, GitGraphModule);
	shared.ServiceRegistry.register(GitGraph);
	return {
		shared,
		GitGraph
	};
}
var GitGraphTokenBuilder, GitGraphModule;
function init_chunk_67CJDMHE() {
	return (init_chunk_67CJDMHE = __esmMin((() => {
		init_chunk_K5T4RW27();
		init_dependency_injection(), init_default_module(), init_file_system_provider();
		GitGraphTokenBuilder = class extends AbstractMermaidTokenBuilder {
			static {
				__name(this, "GitGraphTokenBuilder");
			}
			constructor() {
				super(["gitGraph"]);
			}
		};
		GitGraphModule = { parser: {
			TokenBuilder: /* @__PURE__ */ __name(() => new GitGraphTokenBuilder(), "TokenBuilder"),
			ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
		} };
		__name(createGitGraphServices, "createGitGraphServices");
	})))();
}
//#endregion
export { createGitGraphServices as n, init_chunk_67CJDMHE as r, GitGraphModule as t };
