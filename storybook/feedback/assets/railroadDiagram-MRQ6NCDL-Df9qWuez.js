import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { C as createRailroadServices, n as init_mermaid_parser_core, t as MermaidParseError } from "./mermaid-parser.core-_L3Y2WiQ.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { Ft as init_chunk_X3CZISLH, It as log } from "./src-I6ywMk2o.js";
import { A as init_chunk_BG4553SI } from "./chunk-BG4553SI-D_NoodJ5.js";
import { i as renderer, n as getStyles, r as init_chunk_OY52VR5R, t as db } from "./chunk-OY52VR5R-Bpl-suoj.js";
import { n as populateCommonDb, t as init_chunk_JWPE2WC7 } from "./chunk-JWPE2WC7-lCN7UnOX.js";
import { l as init_chunk_OHR5NZHT } from "./mermaid.core-Ddf65Lcl.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/railroadDiagram-MRQ6NCDL.mjs
var langiumParser, transformExpression, transformRule, populateDb, diagram;
function init_railroadDiagram_MRQ6NCDL() {
	return (init_railroadDiagram_MRQ6NCDL = __esmMin((() => {
		init_chunk_OY52VR5R();
		init_chunk_JWPE2WC7();
		init_chunk_OHR5NZHT();
		init_chunk_BG4553SI();
		init_chunk_X3CZISLH();
		init_chunk_Y2CYZVJY();
		init_mermaid_parser_core();
		langiumParser = createRailroadServices().Railroad.parser.LangiumParser;
		transformExpression = /* @__PURE__ */ __name((expr) => {
			switch (expr.$type) {
				case "RailroadTerminalExpr": return {
					type: "terminal",
					value: expr.value
				};
				case "RailroadNonTerminalExpr": return {
					type: "nonterminal",
					name: expr.name
				};
				case "RailroadSpecialExpr": return {
					type: "special",
					text: expr.text
				};
				case "RailroadSequenceExpr": {
					const elements = expr.elements.map(transformExpression);
					return elements.length === 1 ? elements[0] : {
						type: "sequence",
						elements
					};
				}
				case "RailroadChoiceExpr": {
					const alternatives = expr.alternatives.map(transformExpression);
					return alternatives.length === 1 ? alternatives[0] : {
						type: "choice",
						alternatives
					};
				}
				case "RailroadOptionalExpr": return {
					type: "optional",
					element: transformExpression(expr.element)
				};
				case "RailroadOneOrMoreExpr": return {
					type: "repetition",
					element: transformExpression(expr.element),
					min: 1,
					max: Infinity
				};
				case "RailroadZeroOrMoreExpr": return {
					type: "repetition",
					element: transformExpression(expr.element),
					min: 0,
					max: Infinity
				};
				default: throw new Error(`Unsupported railroad expression: ${expr.$type}`);
			}
		}, "transformExpression");
		transformRule = /* @__PURE__ */ __name((rule) => {
			return {
				name: rule.name,
				definition: transformExpression(rule.definition)
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
					log.debug("[Railroad Parser] Starting Langium parse");
					const result = langiumParser.parse(input);
					if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) throw new MermaidParseError(result);
					const ast = result.value;
					log.debug("[Railroad Parser] Parsed rules:", ast.rules.length);
					populateDb(ast);
					log.debug("[Railroad Parser] Parse complete");
				}, "parse"),
				parser: { yy: db }
			},
			db,
			renderer,
			styles: getStyles
		};
	})))();
}
init_railroadDiagram_MRQ6NCDL();
export { diagram };
