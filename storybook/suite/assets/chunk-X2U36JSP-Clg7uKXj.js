import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { T as init_chunk_AGHRB4JF, w as __name } from "./src-D4MYY-mY.js";
import { A as init_chunk_ICPOFSXX, b as getConfig2 } from "./chunk-ICPOFSXX-7_BdXDsq.js";
//#region ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-X2U36JSP.mjs
var solidStateFill, compileStyles, styles2Map, isLabelStyle, styles2String, userNodeOverrides, getStrokeDashArray;
function init_chunk_X2U36JSP() {
	return (init_chunk_X2U36JSP = __esmMin((() => {
		init_chunk_ICPOFSXX();
		init_chunk_AGHRB4JF();
		solidStateFill = /* @__PURE__ */ __name((color) => {
			const { handDrawnSeed } = getConfig2();
			return {
				fill: color,
				hachureAngle: 120,
				hachureGap: 4,
				fillWeight: 2,
				roughness: .7,
				stroke: color,
				seed: handDrawnSeed
			};
		}, "solidStateFill");
		compileStyles = /* @__PURE__ */ __name((node) => {
			const stylesMap = styles2Map([
				...node.cssCompiledStyles || [],
				...node.cssStyles || [],
				...node.labelStyle || []
			]);
			return {
				stylesMap,
				stylesArray: [...stylesMap]
			};
		}, "compileStyles");
		styles2Map = /* @__PURE__ */ __name((styles) => {
			const styleMap = /* @__PURE__ */ new Map();
			styles.forEach((style) => {
				const [key, value] = style.split(":");
				styleMap.set(key.trim(), value?.trim());
			});
			return styleMap;
		}, "styles2Map");
		isLabelStyle = /* @__PURE__ */ __name((key) => {
			return key === "color" || key === "font-size" || key === "font-family" || key === "font-weight" || key === "font-style" || key === "text-decoration" || key === "text-align" || key === "text-transform" || key === "line-height" || key === "letter-spacing" || key === "word-spacing" || key === "text-shadow" || key === "text-overflow" || key === "white-space" || key === "word-wrap" || key === "word-break" || key === "overflow-wrap" || key === "hyphens";
		}, "isLabelStyle");
		styles2String = /* @__PURE__ */ __name((node) => {
			const { stylesArray } = compileStyles(node);
			const labelStyles = [];
			const nodeStyles = [];
			const borderStyles = [];
			const backgroundStyles = [];
			stylesArray.forEach((style) => {
				const key = style[0];
				if (isLabelStyle(key)) labelStyles.push(style.join(":") + " !important");
				else {
					nodeStyles.push(style.join(":") + " !important");
					if (key.includes("stroke")) borderStyles.push(style.join(":") + " !important");
					if (key === "fill") backgroundStyles.push(style.join(":") + " !important");
				}
			});
			return {
				labelStyles: labelStyles.join(";"),
				nodeStyles: nodeStyles.join(";"),
				stylesArray,
				borderStyles,
				backgroundStyles
			};
		}, "styles2String");
		userNodeOverrides = /* @__PURE__ */ __name((node, options) => {
			const { themeVariables, handDrawnSeed } = getConfig2();
			const { nodeBorder, mainBkg } = themeVariables;
			const { stylesMap } = compileStyles(node);
			return Object.assign({
				roughness: .7,
				fill: stylesMap.get("fill") || mainBkg,
				fillStyle: "hachure",
				fillWeight: 4,
				hachureGap: 5.2,
				stroke: stylesMap.get("stroke") || nodeBorder,
				seed: handDrawnSeed,
				strokeWidth: stylesMap.get("stroke-width")?.replace("px", "") || 1.3,
				fillLineDash: [0, 0],
				strokeLineDash: getStrokeDashArray(stylesMap.get("stroke-dasharray"))
			}, options);
		}, "userNodeOverrides");
		getStrokeDashArray = /* @__PURE__ */ __name((strokeDasharrayStyle) => {
			if (!strokeDasharrayStyle) return [0, 0];
			const dashArray = strokeDasharrayStyle.trim().split(/\s+/).map(Number);
			if (dashArray.length === 1) {
				const val = isNaN(dashArray[0]) ? 0 : dashArray[0];
				return [val, val];
			}
			return [isNaN(dashArray[0]) ? 0 : dashArray[0], isNaN(dashArray[1]) ? 0 : dashArray[1]];
		}, "getStrokeDashArray");
	})))();
}
//#endregion
export { styles2String as a, solidStateFill as i, init_chunk_X2U36JSP as n, userNodeOverrides as o, isLabelStyle as r, compileStyles as t };
