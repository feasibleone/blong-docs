import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_mermaid_parser_core, r as parse } from "./mermaid-parser.core-_L3Y2WiQ.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { Ft as init_chunk_X3CZISLH, It as log } from "./src-I6ywMk2o.js";
import { A as init_chunk_BG4553SI, c as configureSvgSize } from "./chunk-BG4553SI-D_NoodJ5.js";
import { l as init_chunk_OHR5NZHT, u as selectSvgElement } from "./mermaid.core-Ddf65Lcl.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-KBXO4MBG.mjs
var parser, DEFAULT_INFO_DB, diagram;
function init_infoDiagram_KBXO4MBG() {
	return (init_infoDiagram_KBXO4MBG = __esmMin((() => {
		init_chunk_OHR5NZHT();
		init_chunk_BG4553SI();
		init_chunk_X3CZISLH();
		init_chunk_Y2CYZVJY();
		init_mermaid_parser_core();
		parser = { parse: /* @__PURE__ */ __name(async (input) => {
			const ast = await parse("info", input);
			log.debug(ast);
		}, "parse") };
		DEFAULT_INFO_DB = { version: "12.3.0" };
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
init_infoDiagram_KBXO4MBG();
export { diagram };
