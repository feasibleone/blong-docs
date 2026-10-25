import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { E as log, T as init_chunk_AGHRB4JF, w as __name } from "./src-sxmhTtP3.js";
import { A as init_chunk_ICPOFSXX, c as configureSvgSize } from "./chunk-ICPOFSXX-BJUpm1HO.js";
import { n as selectSvgElement, t as init_chunk_426QAEUC } from "./chunk-426QAEUC-D7S82RV7.js";
import { n as parse, t as init_mermaid_parser_core } from "./mermaid-parser.core-DEiTatBO.js";
//#region ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-42DDH7IO.mjs
var parser, DEFAULT_INFO_DB, diagram;
function init_infoDiagram_42DDH7IO() {
	return (init_infoDiagram_42DDH7IO = __esmMin((() => {
		init_chunk_426QAEUC();
		init_chunk_ICPOFSXX();
		init_chunk_AGHRB4JF();
		init_mermaid_parser_core();
		parser = { parse: /* @__PURE__ */ __name(async (input) => {
			const ast = await parse("info", input);
			log.debug(ast);
		}, "parse") };
		DEFAULT_INFO_DB = { version: "11.14.0" };
		diagram = {
			parser,
			db: { getVersion: /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion") },
			renderer: { draw: /* @__PURE__ */ __name((text, id, version) => {
				log.debug("rendering info diagram\n" + text);
				const svg = selectSvgElement(id);
				configureSvgSize(svg, 100, 400, true);
				svg.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
			}, "draw") }
		};
	})))();
}
//#endregion
init_infoDiagram_42DDH7IO();
export { diagram };
