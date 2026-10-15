const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./info-OMHHGYJF-C8Lhe1yZ.js","./rolldown-runtime-V4kyJ4NV.js","./chunk-K5T4RW27-Dftul4Wh.js","./reduce-tlqKsVcO.js","./_baseFor-B9y9xzaI.js","./mermaid.core-B5v0-G0M.js","./preload-helper-C3TOwP4X.js","./src-D4MYY-mY.js","./linear-DenSrLP0.js","./defaultLocale-BOfwCSUT.js","./init-LJTXqKmY.js","./ordinal-GKARqQmH.js","./arc-D86mv2Ju.js","./path-DIPRVYpw.js","./dist-Dnv0KVkE.js","./chunk-5PVQY5BW-pM_bLo1g.js","./chunk-ICPOFSXX-7_BdXDsq.js","./line-DwxDYhJR.js","./array-DFDgVivh.js","./diagram-G4DWMVQ6-CcWkD5oO.js","./chunk-4BX2VUAB-FaBKiw39.js","./chunk-EDXVE4YY-DmZVfhKf.js","./chunk-X2U36JSP-Clg7uKXj.js","./ganttDiagram-T4ZO3ILL-Cq2Okeh9.js","./pieDiagram-DEJITSTG-C-I9VGpO.js","./sankeyDiagram-XADWPNL6-B2baESSF.js","./xychartDiagram-5P7HB3ND-BRhMlCGP.js","./chunk-U2HBQHQK-BzcRMGlh.js","./chunk-BSJP7CBP-BorMUaVQ.js","./chunk-ZZ45TVLE-BTdk-MvS.js","./chunk-5FUZZQ4R-mcp3kHAi.js","./rough.esm-BGhd6KFS.js","./chunk-ENJZ2VHE-4BODpzK7.js","./flatten-B0rdK1NP.js","./packet-4T2RLAQJ-DJOHxI75.js","./pie-ZZUOXDRM-CCaUyHEB.js","./treeView-SZITEDCU-kO3Oe6N1.js","./architecture-YZFGNWBL-DJ54yVUG.js","./gitGraph-7Q5UKJZL-BdPeyut-.js","./radar-PYXPWWZC-CWZodvXN.js","./treemap-W4RFUUIX-BQmqIINf.js","./wardley-RL74JXVD-C1kJchqR.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { S as init_default_module, _ as init_file_system_provider, a as GitGraphGrammarGeneratedModule, b as createDefaultCoreModule, c as PacketGrammarGeneratedModule, d as TreeViewGrammarGeneratedModule, f as TreemapGrammarGeneratedModule, g as EmptyFileSystem, h as init_chunk_K5T4RW27, i as CommonValueConverter, l as PieGrammarGeneratedModule, m as __name, n as AbstractMermaidValueConverter, o as InfoGrammarGeneratedModule, p as WardleyGrammarGeneratedModule, r as ArchitectureGrammarGeneratedModule, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, u as RadarGrammarGeneratedModule, v as init_dependency_injection, x as createDefaultSharedCoreModule, y as inject } from "./chunk-K5T4RW27-Dftul4Wh.js";
//#region ../../common/temp/node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-7N4EOEYR.mjs
function createArchitectureServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const Architecture = inject(createDefaultCoreModule({ shared }), ArchitectureGrammarGeneratedModule, ArchitectureModule);
	shared.ServiceRegistry.register(Architecture);
	return {
		shared,
		Architecture
	};
}
var ArchitectureTokenBuilder, ArchitectureValueConverter, ArchitectureModule;
function init_chunk_7N4EOEYR() {
	return (init_chunk_7N4EOEYR = __esmMin((() => {
		init_chunk_K5T4RW27();
		init_file_system_provider(), init_default_module(), init_dependency_injection();
		ArchitectureTokenBuilder = class extends AbstractMermaidTokenBuilder {
			static {
				__name(this, "ArchitectureTokenBuilder");
			}
			constructor() {
				super(["architecture"]);
			}
		};
		ArchitectureValueConverter = class extends AbstractMermaidValueConverter {
			static {
				__name(this, "ArchitectureValueConverter");
			}
			runCustomConverter(rule, input, _cstNode) {
				if (rule.name === "ARCH_ICON") return input.replace(/[()]/g, "").trim();
				else if (rule.name === "ARCH_TEXT_ICON") return input.replace(/["()]/g, "");
				else if (rule.name === "ARCH_TITLE") {
					let result = input.replace(/^\[|]$/g, "").trim();
					if (result.startsWith("\"") && result.endsWith("\"") || result.startsWith("'") && result.endsWith("'")) {
						result = result.slice(1, -1);
						result = result.replace(/\\"/g, "\"").replace(/\\'/g, "'");
					}
					return result.trim();
				}
			}
		};
		ArchitectureModule = { parser: {
			TokenBuilder: /* @__PURE__ */ __name(() => new ArchitectureTokenBuilder(), "TokenBuilder"),
			ValueConverter: /* @__PURE__ */ __name(() => new ArchitectureValueConverter(), "ValueConverter")
		} };
		__name(createArchitectureServices, "createArchitectureServices");
	})))();
}
//#endregion
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
//#region ../../common/temp/node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-FOC6F5B3.mjs
function createPacketServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const Packet = inject(createDefaultCoreModule({ shared }), PacketGrammarGeneratedModule, PacketModule);
	shared.ServiceRegistry.register(Packet);
	return {
		shared,
		Packet
	};
}
var PacketTokenBuilder, PacketModule;
function init_chunk_FOC6F5B3() {
	return (init_chunk_FOC6F5B3 = __esmMin((() => {
		init_chunk_K5T4RW27();
		init_file_system_provider(), init_default_module(), init_dependency_injection();
		PacketTokenBuilder = class extends AbstractMermaidTokenBuilder {
			static {
				__name(this, "PacketTokenBuilder");
			}
			constructor() {
				super(["packet"]);
			}
		};
		PacketModule = { parser: {
			TokenBuilder: /* @__PURE__ */ __name(() => new PacketTokenBuilder(), "TokenBuilder"),
			ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
		} };
		__name(createPacketServices, "createPacketServices");
	})))();
}
//#endregion
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
//#region ../../common/temp/node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/mermaid-parser.core.mjs
async function parse(diagramType, text) {
	const initializer = initializers[diagramType];
	if (!initializer) throw new Error(`Unknown diagram type: ${diagramType}`);
	if (!parsers[diagramType]) await initializer();
	const result = parsers[diagramType].parse(text);
	if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) throw new MermaidParseError(result);
	return result.value;
}
var parsers, initializers, MermaidParseError;
function init_mermaid_parser_core() {
	return (init_mermaid_parser_core = __esmMin((() => {
		init_chunk_LIHQZDEY();
		init_chunk_CIAEETIT();
		init_chunk_67CJDMHE();
		init_chunk_KGLVRYIC();
		init_chunk_FOC6F5B3();
		init_chunk_AA7GKIK3();
		init_chunk_ORNJ4GCN();
		init_chunk_7N4EOEYR();
		init_chunk_2KRD3SAO();
		init_chunk_K5T4RW27();
		init_preload_helper();
		parsers = {};
		initializers = {
			info: /* @__PURE__ */ __name(async () => {
				const { createInfoServices: createInfoServices2 } = await __vitePreload(async () => {
					const { createInfoServices: createInfoServices2 } = await import("./info-OMHHGYJF-C8Lhe1yZ.js");
					return { createInfoServices: createInfoServices2 };
				}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url);
				parsers.info = createInfoServices2().Info.parser.LangiumParser;
			}, "info"),
			packet: /* @__PURE__ */ __name(async () => {
				const { createPacketServices: createPacketServices2 } = await __vitePreload(async () => {
					const { createPacketServices: createPacketServices2 } = await import("./packet-4T2RLAQJ-DJOHxI75.js");
					return { createPacketServices: createPacketServices2 };
				}, __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url);
				parsers.packet = createPacketServices2().Packet.parser.LangiumParser;
			}, "packet"),
			pie: /* @__PURE__ */ __name(async () => {
				const { createPieServices: createPieServices2 } = await __vitePreload(async () => {
					const { createPieServices: createPieServices2 } = await import("./pie-ZZUOXDRM-CCaUyHEB.js");
					return { createPieServices: createPieServices2 };
				}, __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url);
				parsers.pie = createPieServices2().Pie.parser.LangiumParser;
			}, "pie"),
			treeView: /* @__PURE__ */ __name(async () => {
				const { createTreeViewServices: createTreeViewServices2 } = await __vitePreload(async () => {
					const { createTreeViewServices: createTreeViewServices2 } = await import("./treeView-SZITEDCU-kO3Oe6N1.js");
					return { createTreeViewServices: createTreeViewServices2 };
				}, __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url);
				parsers.treeView = createTreeViewServices2().TreeView.parser.LangiumParser;
			}, "treeView"),
			architecture: /* @__PURE__ */ __name(async () => {
				const { createArchitectureServices: createArchitectureServices2 } = await __vitePreload(async () => {
					const { createArchitectureServices: createArchitectureServices2 } = await import("./architecture-YZFGNWBL-DJ54yVUG.js");
					return { createArchitectureServices: createArchitectureServices2 };
				}, __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url);
				parsers.architecture = createArchitectureServices2().Architecture.parser.LangiumParser;
			}, "architecture"),
			gitGraph: /* @__PURE__ */ __name(async () => {
				const { createGitGraphServices: createGitGraphServices2 } = await __vitePreload(async () => {
					const { createGitGraphServices: createGitGraphServices2 } = await import("./gitGraph-7Q5UKJZL-BdPeyut-.js");
					return { createGitGraphServices: createGitGraphServices2 };
				}, __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url);
				parsers.gitGraph = createGitGraphServices2().GitGraph.parser.LangiumParser;
			}, "gitGraph"),
			radar: /* @__PURE__ */ __name(async () => {
				const { createRadarServices: createRadarServices2 } = await __vitePreload(async () => {
					const { createRadarServices: createRadarServices2 } = await import("./radar-PYXPWWZC-CWZodvXN.js");
					return { createRadarServices: createRadarServices2 };
				}, __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url);
				parsers.radar = createRadarServices2().Radar.parser.LangiumParser;
			}, "radar"),
			treemap: /* @__PURE__ */ __name(async () => {
				const { createTreemapServices: createTreemapServices2 } = await __vitePreload(async () => {
					const { createTreemapServices: createTreemapServices2 } = await import("./treemap-W4RFUUIX-BQmqIINf.js");
					return { createTreemapServices: createTreemapServices2 };
				}, __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url);
				parsers.treemap = createTreemapServices2().Treemap.parser.LangiumParser;
			}, "treemap"),
			wardley: /* @__PURE__ */ __name(async () => {
				const { createWardleyServices: createWardleyServices2 } = await __vitePreload(async () => {
					const { createWardleyServices: createWardleyServices2 } = await import("./wardley-RL74JXVD-C1kJchqR.js");
					return { createWardleyServices: createWardleyServices2 };
				}, __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), import.meta.url);
				parsers.wardley = createWardleyServices2().Wardley.parser.LangiumParser;
			}, "wardley")
		};
		__name(parse, "parse");
		MermaidParseError = class extends Error {
			constructor(result) {
				const lexerErrors = result.lexerErrors.map((err) => {
					return `Lexer error on line ${err.line !== void 0 && !isNaN(err.line) ? err.line : "?"}, column ${err.column !== void 0 && !isNaN(err.column) ? err.column : "?"}: ${err.message}`;
				}).join("\n");
				const parserErrors = result.parserErrors.map((err) => {
					return `Parse error on line ${err.token.startLine !== void 0 && !isNaN(err.token.startLine) ? err.token.startLine : "?"}, column ${err.token.startColumn !== void 0 && !isNaN(err.token.startColumn) ? err.token.startColumn : "?"}: ${err.message}`;
				}).join("\n");
				super(`Parsing failed: ${lexerErrors} ${parserErrors}`);
				this.result = result;
			}
			static {
				__name(this, "MermaidParseError");
			}
		};
	})))();
}
//#endregion
export { init_chunk_KGLVRYIC as C, ArchitectureModule as D, init_chunk_67CJDMHE as E, createArchitectureServices as O, createInfoServices as S, createGitGraphServices as T, init_chunk_AA7GKIK3 as _, init_chunk_CIAEETIT as a, init_chunk_FOC6F5B3 as b, init_chunk_LIHQZDEY as c, init_chunk_ORNJ4GCN as d, RadarModule as f, createPieServices as g, PieModule as h, createWardleyServices as i, init_chunk_7N4EOEYR as k, TreeViewModule as l, init_chunk_2KRD3SAO as m, parse as n, TreemapModule as o, createRadarServices as p, WardleyModule as r, createTreemapServices as s, init_mermaid_parser_core as t, createTreeViewServices as u, PacketModule as v, GitGraphModule as w, InfoModule as x, createPacketServices as y };
