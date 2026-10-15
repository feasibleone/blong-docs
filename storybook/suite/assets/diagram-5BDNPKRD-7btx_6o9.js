import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as parse, t as init_mermaid_parser_core } from "./mermaid-parser.core-Ror6jWwW.js";
import { E as log, T as init_chunk_AGHRB4JF, w as __name } from "./src-D4MYY-mY.js";
import { A as init_chunk_ICPOFSXX, C as getDiagramTitle, G as setDiagramTitle, H as setAccTitle, V as setAccDescription, _ as getAccDescription, a as clear, c as configureSvgSize, d as defaultConfig_default, v as getAccTitle, y as getConfig } from "./chunk-ICPOFSXX-7_BdXDsq.js";
import { r as cleanAndMerge, u as init_chunk_5PVQY5BW } from "./chunk-5PVQY5BW-pM_bLo1g.js";
import { n as populateCommonDb, t as init_chunk_4BX2VUAB } from "./chunk-4BX2VUAB-FaBKiw39.js";
import { n as init_chunk_QZHKN3VN, t as ImperativeState } from "./chunk-QZHKN3VN-BtBQmT0E.js";
import { l as init_chunk_426QAEUC, u as selectSvgElement } from "./mermaid.core-B5v0-G0M.js";
//#region ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/diagram-5BDNPKRD.mjs
var state, clear2, getRoot, getCount, defaultConfig, db_default, populate, parser, positionLabel, positionLine, drawTree, renderer_default, defaultTreeViewDiagramStyles, diagram;
function init_diagram_5BDNPKRD() {
	return (init_diagram_5BDNPKRD = __esmMin((() => {
		init_chunk_426QAEUC();
		init_chunk_4BX2VUAB();
		init_chunk_QZHKN3VN();
		init_chunk_5PVQY5BW();
		init_chunk_ICPOFSXX();
		init_chunk_AGHRB4JF();
		init_mermaid_parser_core();
		state = new ImperativeState(() => ({
			cnt: 1,
			stack: [{
				id: 0,
				level: -1,
				name: "/",
				children: []
			}]
		}));
		clear2 = /* @__PURE__ */ __name(() => {
			state.reset();
			clear();
		}, "clear");
		getRoot = /* @__PURE__ */ __name(() => {
			return state.records.stack[0];
		}, "getRoot");
		getCount = /* @__PURE__ */ __name(() => state.records.cnt, "getCount");
		defaultConfig = defaultConfig_default.treeView;
		db_default = {
			clear: clear2,
			addNode: /* @__PURE__ */ __name((level, name) => {
				while (level <= state.records.stack[state.records.stack.length - 1].level) state.records.stack.pop();
				const node = {
					id: state.records.cnt++,
					level,
					name,
					children: []
				};
				state.records.stack[state.records.stack.length - 1].children.push(node);
				state.records.stack.push(node);
			}, "addNode"),
			getRoot,
			getCount,
			getConfig: /* @__PURE__ */ __name(() => {
				return cleanAndMerge(defaultConfig, getConfig().treeView);
			}, "getConfig"),
			getAccTitle,
			getAccDescription,
			getDiagramTitle,
			setAccDescription,
			setAccTitle,
			setDiagramTitle
		};
		populate = /* @__PURE__ */ __name((ast) => {
			populateCommonDb(ast, db_default);
			ast.nodes.map((node) => db_default.addNode(node.indent ? parseInt(node.indent) : 0, node.name));
		}, "populate");
		parser = { parse: /* @__PURE__ */ __name(async (input) => {
			const ast = await parse("treeView", input);
			log.debug(ast);
			populate(ast);
		}, "parse") };
		positionLabel = /* @__PURE__ */ __name((x, y, node, domElem, config) => {
			const label = domElem.append("text").text(node.name).attr("dominant-baseline", "middle").attr("class", "treeView-node-label");
			const { height: labelHeight, width: labelWidth } = label.node().getBBox();
			const height = labelHeight + config.paddingY * 2;
			const width = labelWidth + config.paddingX * 2;
			label.attr("x", x + config.paddingX);
			label.attr("y", y + height / 2);
			node.BBox = {
				x,
				y,
				width,
				height
			};
		}, "positionLabel");
		positionLine = /* @__PURE__ */ __name((domElem, x1, y1, x2, y2, lineThickness) => {
			return domElem.append("line").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2).attr("stroke-width", lineThickness).attr("class", "treeView-node-line");
		}, "positionLine");
		drawTree = /* @__PURE__ */ __name((elem, root, config) => {
			let totalHeight = 0;
			let totalWidth = 0;
			const drawNode = /* @__PURE__ */ __name((elem2, node, config2, depth) => {
				const indent = depth * (config2.rowIndent + config2.paddingX);
				positionLabel(indent, totalHeight, node, elem2, config2);
				const { height, width } = node.BBox;
				positionLine(elem2, indent - config2.rowIndent, totalHeight + height / 2, indent, totalHeight + height / 2, config2.lineThickness);
				totalWidth = Math.max(totalWidth, indent + width);
				totalHeight += height;
			}, "drawNode");
			const processNode = /* @__PURE__ */ __name((node, depth = 0) => {
				drawNode(elem, node, config, depth);
				node.children.forEach((child) => {
					processNode(child, depth + 1);
				});
				const { x, y, height } = node.BBox;
				if (node.children.length) {
					const { y: endY, height: endHeight } = node.children[node.children.length - 1].BBox;
					positionLine(elem, x + config.paddingX, y + height, x + config.paddingX, endY + endHeight / 2 + config.lineThickness / 2, config.lineThickness);
				}
			}, "processNode");
			processNode(root);
			return {
				totalHeight,
				totalWidth
			};
		}, "drawTree");
		renderer_default = { draw: /* @__PURE__ */ __name((text, id, _ver, diagObj) => {
			log.debug("Rendering treeView diagram\n" + text);
			const db2 = diagObj.db;
			const root = db2.getRoot();
			const config = db2.getConfig();
			const svg = selectSvgElement(id);
			const treeElem = svg.append("g");
			treeElem.attr("class", "tree-view");
			const { totalHeight, totalWidth } = drawTree(treeElem, root, config);
			svg.attr("viewBox", `-${config.lineThickness / 2} 0 ${totalWidth} ${totalHeight}`);
			configureSvgSize(svg, totalHeight, totalWidth, config.useMaxWidth);
		}, "draw") };
		defaultTreeViewDiagramStyles = {
			labelFontSize: "16px",
			labelColor: "black",
			lineColor: "black"
		};
		diagram = {
			db: db_default,
			renderer: renderer_default,
			parser,
			styles: /* @__PURE__ */ __name(({ treeView }) => {
				const { labelFontSize, labelColor, lineColor } = cleanAndMerge(defaultTreeViewDiagramStyles, treeView);
				return `
    .treeView-node-label {
        font-size: ${labelFontSize};
        fill: ${labelColor};
    }
    .treeView-node-line {
        stroke: ${lineColor};
    }
    `;
			}, "styles")
		};
	})))();
}
//#endregion
init_diagram_5BDNPKRD();
export { diagram };
