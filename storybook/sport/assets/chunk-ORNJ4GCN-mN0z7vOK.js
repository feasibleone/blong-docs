import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { S as init_default_module, _ as init_file_system_provider, b as createDefaultCoreModule, d as TreeViewGrammarGeneratedModule, g as EmptyFileSystem, h as init_chunk_K5T4RW27, m as __name, n as AbstractMermaidValueConverter, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as init_dependency_injection, x as createDefaultSharedCoreModule, y as inject } from "./chunk-K5T4RW27-DXbIW-NN.js";
//#region ../../common/temp/node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-ORNJ4GCN.mjs
function createTreeViewServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const TreeView = inject(createDefaultCoreModule({ shared }), TreeViewGrammarGeneratedModule, TreeViewModule);
	shared.ServiceRegistry.register(TreeView);
	return {
		shared,
		TreeView
	};
}
var TreeViewValueConverter, TreeViewTokenBuilder, TreeViewModule;
function init_chunk_ORNJ4GCN() {
	return (init_chunk_ORNJ4GCN = __esmMin((() => {
		init_chunk_K5T4RW27();
		init_file_system_provider(), init_default_module(), init_dependency_injection();
		TreeViewValueConverter = class extends AbstractMermaidValueConverter {
			static {
				__name(this, "TreeViewValueConverter");
			}
			runCustomConverter(rule, input, _cstNode) {
				if (rule.name === "INDENTATION") return input?.length || 0;
				else if (rule.name === "STRING2") return input.substring(1, input.length - 1);
			}
		};
		TreeViewTokenBuilder = class extends AbstractMermaidTokenBuilder {
			static {
				__name(this, "TreeViewTokenBuilder");
			}
			constructor() {
				super(["treeView-beta"]);
			}
		};
		TreeViewModule = { parser: {
			TokenBuilder: /* @__PURE__ */ __name(() => new TreeViewTokenBuilder(), "TokenBuilder"),
			ValueConverter: /* @__PURE__ */ __name(() => new TreeViewValueConverter(), "ValueConverter")
		} };
		__name(createTreeViewServices, "createTreeViewServices");
	})))();
}
//#endregion
export { createTreeViewServices as n, init_chunk_ORNJ4GCN as r, TreeViewModule as t };
