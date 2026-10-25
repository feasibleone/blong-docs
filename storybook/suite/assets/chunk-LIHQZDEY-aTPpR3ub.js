import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { S as init_default_module, _ as init_file_system_provider, b as createDefaultCoreModule, f as TreemapGrammarGeneratedModule, g as EmptyFileSystem, h as init_chunk_K5T4RW27, m as __name, n as AbstractMermaidValueConverter, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as init_dependency_injection, x as createDefaultSharedCoreModule, y as inject } from "./chunk-K5T4RW27-DXbIW-NN.js";
//#region ../../common/temp/node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-LIHQZDEY.mjs
function registerValidationChecks(services) {
	const validator = services.validation.TreemapValidator;
	const registry = services.validation.ValidationRegistry;
	if (registry) {
		const checks = { Treemap: validator.checkSingleRoot.bind(validator) };
		registry.register(checks, validator);
	}
}
function createTreemapServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const Treemap = inject(createDefaultCoreModule({ shared }), TreemapGrammarGeneratedModule, TreemapModule);
	shared.ServiceRegistry.register(Treemap);
	registerValidationChecks(Treemap);
	return {
		shared,
		Treemap
	};
}
var TreemapTokenBuilder, classDefRegex, TreemapValueConverter, TreemapValidator, TreemapModule;
function init_chunk_LIHQZDEY() {
	return (init_chunk_LIHQZDEY = __esmMin((() => {
		init_chunk_K5T4RW27();
		init_file_system_provider(), init_default_module(), init_dependency_injection();
		TreemapTokenBuilder = class extends AbstractMermaidTokenBuilder {
			static {
				__name(this, "TreemapTokenBuilder");
			}
			constructor() {
				super(["treemap"]);
			}
		};
		classDefRegex = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/;
		TreemapValueConverter = class extends AbstractMermaidValueConverter {
			static {
				__name(this, "TreemapValueConverter");
			}
			runCustomConverter(rule, input, _cstNode) {
				if (rule.name === "NUMBER2") return parseFloat(input.replace(/,/g, ""));
				else if (rule.name === "SEPARATOR") return input.substring(1, input.length - 1);
				else if (rule.name === "STRING2") return input.substring(1, input.length - 1);
				else if (rule.name === "INDENTATION") return input.length;
				else if (rule.name === "ClassDef") {
					if (typeof input !== "string") return input;
					const match = classDefRegex.exec(input);
					if (match) return {
						$type: "ClassDefStatement",
						className: match[1],
						styleText: match[2] || void 0
					};
				}
			}
		};
		__name(registerValidationChecks, "registerValidationChecks");
		TreemapValidator = class {
			static {
				__name(this, "TreemapValidator");
			}
			/**
			* Validates that a treemap has only one root node.
			* A root node is defined as a node that has no indentation.
			*/
			checkSingleRoot(doc, accept) {
				let rootNodeIndentation;
				for (const row of doc.TreemapRows) {
					if (!row.item) continue;
					if (rootNodeIndentation === void 0 && row.indent === void 0) rootNodeIndentation = 0;
					else if (row.indent === void 0) accept("error", "Multiple root nodes are not allowed in a treemap.", {
						node: row,
						property: "item"
					});
					else if (rootNodeIndentation !== void 0 && rootNodeIndentation >= parseInt(row.indent, 10)) accept("error", "Multiple root nodes are not allowed in a treemap.", {
						node: row,
						property: "item"
					});
				}
			}
		};
		TreemapModule = {
			parser: {
				TokenBuilder: /* @__PURE__ */ __name(() => new TreemapTokenBuilder(), "TokenBuilder"),
				ValueConverter: /* @__PURE__ */ __name(() => new TreemapValueConverter(), "ValueConverter")
			},
			validation: { TreemapValidator: /* @__PURE__ */ __name(() => new TreemapValidator(), "TreemapValidator") }
		};
		__name(createTreemapServices, "createTreemapServices");
	})))();
}
//#endregion
export { createTreemapServices as n, init_chunk_LIHQZDEY as r, TreemapModule as t };
