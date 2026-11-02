import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { It as __name, Lt as init_chunk_AGHRB4JF, Rt as log } from "./src-BZTApG9x.js";
import { A as init_chunk_ICPOFSXX, c as configureSvgSize } from "./chunk-ICPOFSXX-w5HTQ3sU.js";
// ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-EDXVE4YY.mjs
var setupViewPortForSVG, calculateDimensionsWithPadding, createViewBox;
function init_chunk_EDXVE4YY() {
	return (init_chunk_EDXVE4YY = __esmMin((() => {
		init_chunk_ICPOFSXX();
		init_chunk_AGHRB4JF();
		setupViewPortForSVG = /* @__PURE__ */ __name((svg, padding, cssDiagram, useMaxWidth) => {
			svg.attr("class", cssDiagram);
			const { width, height, x, y } = calculateDimensionsWithPadding(svg, padding);
			configureSvgSize(svg, height, width, useMaxWidth);
			const viewBox = createViewBox(x, y, width, height, padding);
			svg.attr("viewBox", viewBox);
			log.debug(`viewBox configured: ${viewBox} with padding: ${padding}`);
		}, "setupViewPortForSVG");
		calculateDimensionsWithPadding = /* @__PURE__ */ __name((svg, padding) => {
			const bounds = svg.node()?.getBBox() || {
				width: 0,
				height: 0,
				x: 0,
				y: 0
			};
			return {
				width: bounds.width + padding * 2,
				height: bounds.height + padding * 2,
				x: bounds.x,
				y: bounds.y
			};
		}, "calculateDimensionsWithPadding");
		createViewBox = /* @__PURE__ */ __name((x, y, width, height, padding) => {
			return `${x - padding} ${y - padding} ${width} ${height}`;
		}, "createViewBox");
	})))();
}
export { setupViewPortForSVG as n, init_chunk_EDXVE4YY as t };
