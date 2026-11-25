import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { Ft as init_chunk_X3CZISLH, It as log } from "./src-I6ywMk2o.js";
import { A as init_chunk_BG4553SI, c as configureSvgSize } from "./chunk-BG4553SI-D_NoodJ5.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-TU62E6Q5.mjs
var setupViewPortForSVG, calculateDimensionsWithPadding, createViewBox;
function init_chunk_TU62E6Q5() {
	return (init_chunk_TU62E6Q5 = __esmMin((() => {
		init_chunk_BG4553SI();
		init_chunk_X3CZISLH();
		init_chunk_Y2CYZVJY();
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
export { setupViewPortForSVG as n, init_chunk_TU62E6Q5 as t };
