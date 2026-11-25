import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { m as createRailroadPegServices, n as init_mermaid_parser_core, t as MermaidParseError } from "./mermaid-parser.core-_L3Y2WiQ.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { Ft as init_chunk_X3CZISLH, It as log } from "./src-I6ywMk2o.js";
import { A as init_chunk_BG4553SI } from "./chunk-BG4553SI-D_NoodJ5.js";
import { i as renderer, n as getStyles, r as init_chunk_OY52VR5R, t as db } from "./chunk-OY52VR5R-Bpl-suoj.js";
import { n as populateCommonDb, t as init_chunk_JWPE2WC7 } from "./chunk-JWPE2WC7-lCN7UnOX.js";
import { l as init_chunk_OHR5NZHT } from "./mermaid.core-Ddf65Lcl.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/pegDiagram-FD4XPPHP.mjs
var langiumParser, transformOrderedChoice, transformSequence, transformPrefix, nodeToLabel, transformSuffix, transformPrimary, transformRule, populateDb, diagram;
function init_pegDiagram_FD4XPPHP() {
	return (init_pegDiagram_FD4XPPHP = __esmMin((() => {
		init_chunk_OY52VR5R();
		init_chunk_JWPE2WC7();
		init_chunk_OHR5NZHT();
		init_chunk_BG4553SI();
		init_chunk_X3CZISLH();
		init_chunk_Y2CYZVJY();
		init_mermaid_parser_core();
		langiumParser = createRailroadPegServices().RailroadPeg.parser.LangiumParser;
		transformOrderedChoice = /* @__PURE__ */ __name((choice) => {
			const alternatives = choice.alternatives.map(transformSequence);
			if (alternatives.length === 1) return alternatives[0];
			return {
				type: "choice",
				alternatives
			};
		}, "transformOrderedChoice");
		transformSequence = /* @__PURE__ */ __name((sequence) => {
			const elements = sequence.elements.map(transformPrefix);
			if (elements.length === 1) return elements[0];
			return {
				type: "sequence",
				elements
			};
		}, "transformSequence");
		transformPrefix = /* @__PURE__ */ __name((prefix) => {
			const inner = transformSuffix(prefix.suffix);
			if (!prefix.operator) return inner;
			return {
				type: "special",
				text: prefix.operator === "&" ? `&${nodeToLabel(inner)}` : `!${nodeToLabel(inner)}`
			};
		}, "transformPrefix");
		nodeToLabel = /* @__PURE__ */ __name((node) => {
			switch (node.type) {
				case "terminal": return `"${node.value}"`;
				case "nonterminal": return node.name;
				case "special": return node.text;
				default: return "(...)";
			}
		}, "nodeToLabel");
		transformSuffix = /* @__PURE__ */ __name((suffix) => {
			const inner = transformPrimary(suffix.primary);
			if (!suffix.operator) return inner;
			switch (suffix.operator) {
				case "?": return {
					type: "optional",
					element: inner
				};
				case "*": return {
					type: "repetition",
					element: inner,
					min: 0,
					max: Infinity
				};
				case "+": return {
					type: "repetition",
					element: inner,
					min: 1,
					max: Infinity
				};
				default: throw new Error(`Unsupported PEG suffix operator: ${suffix.operator}`);
			}
		}, "transformSuffix");
		transformPrimary = /* @__PURE__ */ __name((primary) => {
			switch (primary.$type) {
				case "PegLiteral": return {
					type: "terminal",
					value: primary.value
				};
				case "PegIdentifier": return {
					type: "nonterminal",
					name: primary.name
				};
				case "PegGroup": return transformOrderedChoice(primary.element);
				case "PegAny": return {
					type: "special",
					text: primary.dot
				};
				default: throw new Error(`Unsupported PEG primary node: ${primary.$type}`);
			}
		}, "transformPrimary");
		transformRule = /* @__PURE__ */ __name((rule) => {
			return {
				name: rule.name,
				definition: transformOrderedChoice(rule.definition)
			};
		}, "transformRule");
		populateDb = /* @__PURE__ */ __name((ast) => {
			populateCommonDb(ast, db);
			if (ast.title) db.setTitle(ast.title);
			ast.rules.map((rule) => db.addRule(transformRule(rule)));
		}, "populateDb");
		diagram = {
			parser: {
				parse: /* @__PURE__ */ __name((input) => {
					db.clear();
					log.debug("[PEG Parser] Starting Langium parse");
					const result = langiumParser.parse(input);
					if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) throw new MermaidParseError(result);
					const ast = result.value;
					log.debug("[PEG Parser] Parsed rules:", ast.rules.length);
					populateDb(ast);
					log.debug("[PEG Parser] Parse complete");
				}, "parse"),
				parser: { yy: db }
			},
			db,
			renderer,
			styles: getStyles
		};
	})))();
}
init_pegDiagram_FD4XPPHP();
export { diagram };
