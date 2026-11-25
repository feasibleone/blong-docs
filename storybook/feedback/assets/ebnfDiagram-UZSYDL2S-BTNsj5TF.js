import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { _ as createRailroadEbnfServices, n as init_mermaid_parser_core, t as MermaidParseError } from "./mermaid-parser.core-_L3Y2WiQ.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { Ft as init_chunk_X3CZISLH, It as log } from "./src-I6ywMk2o.js";
import { A as init_chunk_BG4553SI } from "./chunk-BG4553SI-D_NoodJ5.js";
import { i as renderer, n as getStyles, r as init_chunk_OY52VR5R, t as db } from "./chunk-OY52VR5R-Bpl-suoj.js";
import { n as populateCommonDb, t as init_chunk_JWPE2WC7 } from "./chunk-JWPE2WC7-lCN7UnOX.js";
import { l as init_chunk_OHR5NZHT } from "./mermaid.core-Ddf65Lcl.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/ebnfDiagram-UZSYDL2S.mjs
var langiumParser, transformChoice, transformSequence, transformPrimary, transformPostfix, transformTerm, transformRule, populateDb, diagram;
function init_ebnfDiagram_UZSYDL2S() {
	return (init_ebnfDiagram_UZSYDL2S = __esmMin((() => {
		init_chunk_OY52VR5R();
		init_chunk_JWPE2WC7();
		init_chunk_OHR5NZHT();
		init_chunk_BG4553SI();
		init_chunk_X3CZISLH();
		init_chunk_Y2CYZVJY();
		init_mermaid_parser_core();
		langiumParser = createRailroadEbnfServices().RailroadEbnf.parser.LangiumParser;
		transformChoice = /* @__PURE__ */ __name((choice) => {
			const alternatives = choice.alternatives.map(transformSequence);
			if (alternatives.length === 1) return alternatives[0];
			return {
				type: "choice",
				alternatives
			};
		}, "transformChoice");
		transformSequence = /* @__PURE__ */ __name((sequence) => {
			const elements = sequence.elements.map(transformTerm);
			if (elements.length === 1) return elements[0];
			return {
				type: "sequence",
				elements
			};
		}, "transformSequence");
		transformPrimary = /* @__PURE__ */ __name((primary) => {
			switch (primary.$type) {
				case "EbnfTerminal": return {
					type: "terminal",
					value: primary.value
				};
				case "EbnfNonTerminal": return {
					type: "nonterminal",
					name: primary.name
				};
				case "EbnfSpecial": return {
					type: "special",
					text: primary.text
				};
				case "EbnfGroup": return transformChoice(primary.element);
				case "EbnfOptional": return {
					type: "optional",
					element: transformChoice(primary.element)
				};
				case "EbnfRepetition": return {
					type: "repetition",
					element: transformChoice(primary.element),
					min: 0,
					max: Infinity
				};
				default: throw new Error(`Unsupported EBNF primary node: ${primary.$type}`);
			}
		}, "transformPrimary");
		transformPostfix = /* @__PURE__ */ __name((node, postfix) => {
			switch (postfix.$type) {
				case "EbnfOptionalPostfix": return {
					type: "optional",
					element: node
				};
				case "EbnfZeroOrMorePostfix": return {
					type: "repetition",
					element: node,
					min: 0,
					max: Infinity
				};
				case "EbnfOneOrMorePostfix": return {
					type: "repetition",
					element: node,
					min: 1,
					max: Infinity
				};
				case "EbnfExceptionPostfix": return {
					type: "sequence",
					elements: [
						node,
						{
							type: "terminal",
							value: "-"
						},
						transformPrimary(postfix.except)
					]
				};
				default: throw new Error(`Unsupported EBNF postfix node: ${postfix.$type}`);
			}
		}, "transformPostfix");
		transformTerm = /* @__PURE__ */ __name((term) => {
			return term.postfixes.reduce((currentNode, postfix) => {
				return transformPostfix(currentNode, postfix);
			}, transformPrimary(term.base));
		}, "transformTerm");
		transformRule = /* @__PURE__ */ __name((rule) => {
			return {
				name: rule.name,
				definition: transformChoice(rule.definition)
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
					log.debug("[EBNF Parser] Starting Langium parse");
					const result = langiumParser.parse(input);
					if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) throw new MermaidParseError(result);
					const ast = result.value;
					log.debug("[EBNF Parser] Parsed rules:", ast.rules.length);
					populateDb(ast);
					log.debug("[EBNF Parser] Parse complete");
				}, "parse"),
				parser: { yy: db }
			},
			db,
			renderer,
			styles: getStyles
		};
	})))();
}
init_ebnfDiagram_UZSYDL2S();
export { diagram };
