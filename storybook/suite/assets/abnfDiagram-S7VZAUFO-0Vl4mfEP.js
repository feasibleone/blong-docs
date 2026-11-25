import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { b as createRailroadAbnfServices, n as init_mermaid_parser_core, t as MermaidParseError } from "./mermaid-parser.core-_L3Y2WiQ.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { Ft as init_chunk_X3CZISLH, It as log } from "./src-I6ywMk2o.js";
import { A as init_chunk_BG4553SI } from "./chunk-BG4553SI-D_NoodJ5.js";
import { i as renderer, n as getStyles, r as init_chunk_OY52VR5R, t as db } from "./chunk-OY52VR5R-Bpl-suoj.js";
import { n as populateCommonDb, t as init_chunk_JWPE2WC7 } from "./chunk-JWPE2WC7-lCN7UnOX.js";
import { l as init_chunk_OHR5NZHT } from "./mermaid.core-Ddf65Lcl.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/abnfDiagram-S7VZAUFO.mjs
var langiumParser, transformAlternation, transformConcatenation, parseRepeat, transformElement, transformPrimary, transformRule, populateDb, diagram;
function init_abnfDiagram_S7VZAUFO() {
	return (init_abnfDiagram_S7VZAUFO = __esmMin((() => {
		init_chunk_OY52VR5R();
		init_chunk_JWPE2WC7();
		init_chunk_OHR5NZHT();
		init_chunk_BG4553SI();
		init_chunk_X3CZISLH();
		init_chunk_Y2CYZVJY();
		init_mermaid_parser_core();
		langiumParser = createRailroadAbnfServices().RailroadAbnf.parser.LangiumParser;
		transformAlternation = /* @__PURE__ */ __name((alt) => {
			const alternatives = alt.alternatives.map(transformConcatenation);
			if (alternatives.length === 1) return alternatives[0];
			return {
				type: "choice",
				alternatives
			};
		}, "transformAlternation");
		transformConcatenation = /* @__PURE__ */ __name((concat) => {
			const elements = concat.elements.map(transformElement);
			if (elements.length === 1) return elements[0];
			return {
				type: "sequence",
				elements
			};
		}, "transformConcatenation");
		parseRepeat = /* @__PURE__ */ __name((repeat) => {
			if (repeat.includes("*")) {
				const [minStr, maxStr] = repeat.split("*");
				return {
					min: minStr ? parseInt(minStr, 10) : 0,
					max: maxStr ? parseInt(maxStr, 10) : Infinity
				};
			}
			const exact = parseInt(repeat, 10);
			return {
				min: exact,
				max: exact
			};
		}, "parseRepeat");
		transformElement = /* @__PURE__ */ __name((element) => {
			const inner = transformPrimary(element.primary);
			if (!element.repeat) return inner;
			const { min, max } = parseRepeat(element.repeat);
			if (min === 0 && max === 1) return {
				type: "optional",
				element: inner
			};
			return {
				type: "repetition",
				element: inner,
				min,
				max
			};
		}, "transformElement");
		transformPrimary = /* @__PURE__ */ __name((primary) => {
			switch (primary.$type) {
				case "AbnfStringLiteral": return {
					type: "terminal",
					value: primary.value
				};
				case "AbnfNumVal": return {
					type: "terminal",
					value: primary.value
				};
				case "AbnfRuleName": return {
					type: "nonterminal",
					name: primary.name
				};
				case "AbnfGroup": return transformAlternation(primary.element);
				case "AbnfOptionalGroup": return {
					type: "optional",
					element: transformAlternation(primary.element)
				};
				default: throw new Error(`Unsupported ABNF primary node: ${primary.$type}`);
			}
		}, "transformPrimary");
		transformRule = /* @__PURE__ */ __name((rule) => {
			return {
				name: rule.name,
				definition: transformAlternation(rule.definition)
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
					log.debug("[ABNF Parser] Starting Langium parse");
					const result = langiumParser.parse(input);
					if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) throw new MermaidParseError(result);
					const ast = result.value;
					log.debug("[ABNF Parser] Parsed rules:", ast.rules.length);
					populateDb(ast);
					log.debug("[ABNF Parser] Parse complete");
				}, "parse"),
				parser: { yy: db }
			},
			db,
			renderer,
			styles: getStyles
		};
	})))();
}
init_abnfDiagram_S7VZAUFO();
export { diagram };
