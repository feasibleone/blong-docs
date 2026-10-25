const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dagre-KV5264BT-BFIOiJyY.js","./rolldown-runtime-V4kyJ4NV.js","./flatten-B4bMJ9xZ.js","./reduce-B8JZM-sh.js","./_baseFor-B9y9xzaI.js","./isEmpty-zcrDZYJI.js","./src-sxmhTtP3.js","./linear-DvfV9_k2.js","./defaultLocale-BOfwCSUT.js","./init-LJTXqKmY.js","./ordinal-GKARqQmH.js","./arc-D86mv2Ju.js","./path-DIPRVYpw.js","./dist-Dnv0KVkE.js","./chunk-5PVQY5BW-BNrAsxxX.js","./chunk-ICPOFSXX-BJUpm1HO.js","./preload-helper-C3TOwP4X.js","./line-HDHYW3M7.js","./array-DFDgVivh.js","./diagram-G4DWMVQ6-BF0Wny34.js","./chunk-426QAEUC-D7S82RV7.js","./chunk-4BX2VUAB-rczDBZBs.js","./mermaid-parser.core-DEiTatBO.js","./chunk-K5T4RW27-DXbIW-NN.js","./chunk-7N4EOEYR-DrrSjQwg.js","./chunk-67CJDMHE-C4ZA7dRj.js","./chunk-KGLVRYIC-BztDpLpL.js","./chunk-FOC6F5B3-CVJFzjxm.js","./chunk-AA7GKIK3-BIrrn9aO.js","./chunk-2KRD3SAO-ZxjxboIw.js","./chunk-ORNJ4GCN-mN0z7vOK.js","./chunk-LIHQZDEY-aTPpR3ub.js","./chunk-CIAEETIT-df_SIM5l.js","./chunk-EDXVE4YY-DTwX_Iqs.js","./chunk-X2U36JSP-BI7WAZPD.js","./ganttDiagram-T4ZO3ILL-CXkkoelU.js","./pieDiagram-DEJITSTG-HA_JZ27Q.js","./sankeyDiagram-XADWPNL6-AuOPD8BK.js","./xychartDiagram-5P7HB3ND-BMzxbsLc.js","./chunk-U2HBQHQK-XL9Il3zU.js","./chunk-BSJP7CBP-95HEPAJh.js","./chunk-ZZ45TVLE-UdhaSN4G.js","./graphlib-BtK_sGpO.js","./clone-CXHzBNGy.js","./dagre-B3Oguxc8.js","./chunk-5FUZZQ4R-CEQB-hrF.js","./rough.esm-BGhd6KFS.js","./chunk-ENJZ2VHE-Bh5_WwlO.js","./cose-bilkent-S5V4N54A-Ckqiuqeo.js","./cytoscape.esm-D4Bdxiqy.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { E as log, T as init_chunk_AGHRB4JF, w as __name } from "./src-sxmhTtP3.js";
import { A as init_chunk_ICPOFSXX, s as common_default, y as getConfig } from "./chunk-ICPOFSXX-BJUpm1HO.js";
import { d as interpolateToCurve, u as init_chunk_5PVQY5BW } from "./chunk-5PVQY5BW-BNrAsxxX.js";
import { a as insertCluster, c as labelHelper, i as init_chunk_5FUZZQ4R, o as insertNode } from "./chunk-5FUZZQ4R-CEQB-hrF.js";
import { a as markers_default, i as insertEdgeLabel, n as init_chunk_ENJZ2VHE, o as positionEdgeLabel, r as insertEdge } from "./chunk-ENJZ2VHE-Bh5_WwlO.js";
//#region ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-336JU56O.mjs
var internalHelpers, layoutAlgorithms, registerLayoutLoaders, render, getRegisteredLayoutAlgorithm;
function init_chunk_336JU56O() {
	return (init_chunk_336JU56O = __esmMin((() => {
		init_chunk_ENJZ2VHE();
		init_chunk_5FUZZQ4R();
		init_chunk_5PVQY5BW();
		init_chunk_ICPOFSXX();
		init_chunk_AGHRB4JF();
		init_preload_helper();
		internalHelpers = {
			common: common_default,
			getConfig,
			insertCluster,
			insertEdge,
			insertEdgeLabel,
			insertMarkers: markers_default,
			insertNode,
			interpolateToCurve,
			labelHelper,
			log,
			positionEdgeLabel
		};
		layoutAlgorithms = {};
		registerLayoutLoaders = /* @__PURE__ */ __name((loaders) => {
			for (const loader of loaders) layoutAlgorithms[loader.name] = loader;
		}, "registerLayoutLoaders");
		(/* @__PURE__ */ __name(() => {
			registerLayoutLoaders([{
				name: "dagre",
				loader: /* @__PURE__ */ __name(async () => await __vitePreload(() => import("./dagre-KV5264BT-BFIOiJyY.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]), import.meta.url), "loader")
			}, ...[{
				name: "cose-bilkent",
				loader: /* @__PURE__ */ __name(async () => await __vitePreload(() => import("./cose-bilkent-S5V4N54A-Ckqiuqeo.js"), __vite__mapDeps([48,1,6,7,8,9,10,11,12,13,14,4,15,16,17,18,19,20,21,22,23,3,5,2,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,49]), import.meta.url), "loader")
			}]]);
		}, "registerDefaultLayoutLoaders"))();
		render = /* @__PURE__ */ __name(async (data4Layout, svg) => {
			if (!(data4Layout.layoutAlgorithm in layoutAlgorithms)) throw new Error(`Unknown layout algorithm: ${data4Layout.layoutAlgorithm}`);
			if (data4Layout.diagramId) for (const node of data4Layout.nodes) {
				const originalDomId = node.domId || node.id;
				node.domId = `${data4Layout.diagramId}-${originalDomId}`;
			}
			const layoutDefinition = layoutAlgorithms[data4Layout.layoutAlgorithm];
			const layoutRenderer = await layoutDefinition.loader();
			const { theme, themeVariables } = data4Layout.config;
			const { useGradient, gradientStart, gradientStop } = themeVariables;
			const svgId = svg.attr("id");
			svg.append("defs").append("filter").attr("id", `${svgId}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${theme?.includes("dark") ? "#FFFFFF" : "#000000"}`);
			svg.append("defs").append("filter").attr("id", `${svgId}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${theme?.includes("dark") ? "#FFFFFF" : "#000000"}`);
			if (useGradient) {
				const gradient = svg.append("linearGradient").attr("id", svg.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
				gradient.append("svg:stop").attr("offset", "0%").attr("stop-color", gradientStart).attr("stop-opacity", 1);
				gradient.append("svg:stop").attr("offset", "100%").attr("stop-color", gradientStop).attr("stop-opacity", 1);
			}
			return layoutRenderer.render(data4Layout, svg, internalHelpers, { algorithm: layoutDefinition.algorithm });
		}, "render");
		getRegisteredLayoutAlgorithm = /* @__PURE__ */ __name((algorithm = "", { fallback = "dagre" } = {}) => {
			if (algorithm in layoutAlgorithms) return algorithm;
			if (fallback in layoutAlgorithms) {
				log.warn(`Layout algorithm ${algorithm} is not registered. Using ${fallback} as fallback.`);
				return fallback;
			}
			throw new Error(`Both layout algorithms ${algorithm} and ${fallback} are not registered.`);
		}, "getRegisteredLayoutAlgorithm");
	})))();
}
//#endregion
export { render as i, init_chunk_336JU56O as n, registerLayoutLoaders as r, getRegisteredLayoutAlgorithm as t };
