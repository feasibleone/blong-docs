const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./info-OMHHGYJF-BWBCNKqc.js","./rolldown-runtime-V4kyJ4NV.js","./chunk-K5T4RW27-DXbIW-NN.js","./reduce-B8JZM-sh.js","./_baseFor-B9y9xzaI.js","./isEmpty-zcrDZYJI.js","./flatten-B4bMJ9xZ.js","./chunk-KGLVRYIC-BztDpLpL.js","./packet-4T2RLAQJ-Bc1n965T.js","./chunk-FOC6F5B3-CVJFzjxm.js","./pie-ZZUOXDRM-DmhCKVV_.js","./chunk-AA7GKIK3-BIrrn9aO.js","./treeView-SZITEDCU-CbxcnEug.js","./chunk-ORNJ4GCN-mN0z7vOK.js","./architecture-YZFGNWBL-Ccg9mxXh.js","./chunk-7N4EOEYR-DrrSjQwg.js","./gitGraph-7Q5UKJZL-C6IFhiEy.js","./chunk-67CJDMHE-C4ZA7dRj.js","./radar-PYXPWWZC-BPRfk6Sw.js","./chunk-2KRD3SAO-ZxjxboIw.js","./treemap-W4RFUUIX-BlX38bZP.js","./chunk-LIHQZDEY-aTPpR3ub.js","./wardley-RL74JXVD-D_FUV9oz.js","./chunk-CIAEETIT-df_SIM5l.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { h as init_chunk_K5T4RW27, m as __name } from "./chunk-K5T4RW27-DXbIW-NN.js";
import { r as init_chunk_7N4EOEYR } from "./chunk-7N4EOEYR-DrrSjQwg.js";
import { r as init_chunk_67CJDMHE } from "./chunk-67CJDMHE-C4ZA7dRj.js";
import { r as init_chunk_KGLVRYIC } from "./chunk-KGLVRYIC-BztDpLpL.js";
import { r as init_chunk_FOC6F5B3 } from "./chunk-FOC6F5B3-CVJFzjxm.js";
import { r as init_chunk_AA7GKIK3 } from "./chunk-AA7GKIK3-BIrrn9aO.js";
import { r as init_chunk_2KRD3SAO } from "./chunk-2KRD3SAO-ZxjxboIw.js";
import { r as init_chunk_ORNJ4GCN } from "./chunk-ORNJ4GCN-mN0z7vOK.js";
import { r as init_chunk_LIHQZDEY } from "./chunk-LIHQZDEY-aTPpR3ub.js";
import { r as init_chunk_CIAEETIT } from "./chunk-CIAEETIT-df_SIM5l.js";
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
					const { createInfoServices: createInfoServices2 } = await import("./info-OMHHGYJF-BWBCNKqc.js");
					return { createInfoServices: createInfoServices2 };
				}, __vite__mapDeps([0,1,2,3,4,5,6,7]), import.meta.url);
				parsers.info = createInfoServices2().Info.parser.LangiumParser;
			}, "info"),
			packet: /* @__PURE__ */ __name(async () => {
				const { createPacketServices: createPacketServices2 } = await __vitePreload(async () => {
					const { createPacketServices: createPacketServices2 } = await import("./packet-4T2RLAQJ-Bc1n965T.js");
					return { createPacketServices: createPacketServices2 };
				}, __vite__mapDeps([8,1,2,3,4,5,6,9]), import.meta.url);
				parsers.packet = createPacketServices2().Packet.parser.LangiumParser;
			}, "packet"),
			pie: /* @__PURE__ */ __name(async () => {
				const { createPieServices: createPieServices2 } = await __vitePreload(async () => {
					const { createPieServices: createPieServices2 } = await import("./pie-ZZUOXDRM-DmhCKVV_.js");
					return { createPieServices: createPieServices2 };
				}, __vite__mapDeps([10,1,2,3,4,5,6,11]), import.meta.url);
				parsers.pie = createPieServices2().Pie.parser.LangiumParser;
			}, "pie"),
			treeView: /* @__PURE__ */ __name(async () => {
				const { createTreeViewServices: createTreeViewServices2 } = await __vitePreload(async () => {
					const { createTreeViewServices: createTreeViewServices2 } = await import("./treeView-SZITEDCU-CbxcnEug.js");
					return { createTreeViewServices: createTreeViewServices2 };
				}, __vite__mapDeps([12,1,2,3,4,5,6,13]), import.meta.url);
				parsers.treeView = createTreeViewServices2().TreeView.parser.LangiumParser;
			}, "treeView"),
			architecture: /* @__PURE__ */ __name(async () => {
				const { createArchitectureServices: createArchitectureServices2 } = await __vitePreload(async () => {
					const { createArchitectureServices: createArchitectureServices2 } = await import("./architecture-YZFGNWBL-Ccg9mxXh.js");
					return { createArchitectureServices: createArchitectureServices2 };
				}, __vite__mapDeps([14,1,2,3,4,5,6,15]), import.meta.url);
				parsers.architecture = createArchitectureServices2().Architecture.parser.LangiumParser;
			}, "architecture"),
			gitGraph: /* @__PURE__ */ __name(async () => {
				const { createGitGraphServices: createGitGraphServices2 } = await __vitePreload(async () => {
					const { createGitGraphServices: createGitGraphServices2 } = await import("./gitGraph-7Q5UKJZL-C6IFhiEy.js");
					return { createGitGraphServices: createGitGraphServices2 };
				}, __vite__mapDeps([16,1,2,3,4,5,6,17]), import.meta.url);
				parsers.gitGraph = createGitGraphServices2().GitGraph.parser.LangiumParser;
			}, "gitGraph"),
			radar: /* @__PURE__ */ __name(async () => {
				const { createRadarServices: createRadarServices2 } = await __vitePreload(async () => {
					const { createRadarServices: createRadarServices2 } = await import("./radar-PYXPWWZC-BPRfk6Sw.js");
					return { createRadarServices: createRadarServices2 };
				}, __vite__mapDeps([18,1,2,3,4,5,6,19]), import.meta.url);
				parsers.radar = createRadarServices2().Radar.parser.LangiumParser;
			}, "radar"),
			treemap: /* @__PURE__ */ __name(async () => {
				const { createTreemapServices: createTreemapServices2 } = await __vitePreload(async () => {
					const { createTreemapServices: createTreemapServices2 } = await import("./treemap-W4RFUUIX-BlX38bZP.js");
					return { createTreemapServices: createTreemapServices2 };
				}, __vite__mapDeps([20,1,2,3,4,5,6,21]), import.meta.url);
				parsers.treemap = createTreemapServices2().Treemap.parser.LangiumParser;
			}, "treemap"),
			wardley: /* @__PURE__ */ __name(async () => {
				const { createWardleyServices: createWardleyServices2 } = await __vitePreload(async () => {
					const { createWardleyServices: createWardleyServices2 } = await import("./wardley-RL74JXVD-D_FUV9oz.js");
					return { createWardleyServices: createWardleyServices2 };
				}, __vite__mapDeps([22,1,2,3,4,5,6,23]), import.meta.url);
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
export { parse as n, init_mermaid_parser_core as t };
