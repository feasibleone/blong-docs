import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_mermaid_parser_core, r as parse } from "./mermaid-parser.core-_L3Y2WiQ.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { Ft as init_chunk_X3CZISLH, It as log } from "./src-I6ywMk2o.js";
import { A as init_chunk_BG4553SI, B as sanitizeText, C as getDiagramTitle, J as setDiagramTitle, U as setAccDescription, W as setAccTitle, _ as getAccDescription, a as clear, c as configureSvgSize, f as defaultConfig_default, v as getAccTitle, y as getConfig } from "./chunk-BG4553SI-D_NoodJ5.js";
import { n as populateCommonDb, t as init_chunk_JWPE2WC7 } from "./chunk-JWPE2WC7-lCN7UnOX.js";
import { a as registerIconPacks, n as init_chunk_R3KSYZAL, t as getIconSVG } from "./chunk-R3KSYZAL-yikI3adE.js";
import { f as init_chunk_6MUBBAK2, i as cleanAndMerge } from "./chunk-6MUBBAK2-DKYQU0dq.js";
import { n as init_chunk_2Q5K7J3B, t as ImperativeState } from "./chunk-2Q5K7J3B-D4g1KEbW.js";
import { l as init_chunk_OHR5NZHT, u as selectSvgElement } from "./mermaid.core-Ddf65Lcl.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/diagram-XPFHEONP.mjs
function isBoxDrawingFormat(lines) {
	return lines.some((line) => ALL_BOX_CHARS.test(line));
}
function inferSegmentWidth(contentLines) {
	for (const line of contentLines) {
		const match = BRANCH_CHAR.exec(line);
		if (match?.index && match.index > 0) return match.index;
	}
	return 4;
}
function remapErrorLines(message, lineMap) {
	return message.replace(/\bline\s+(\d+)\b/gi, (match, lineStr) => {
		const line = parseInt(lineStr, 10);
		const original = lineMap.get(line);
		return original ? `line ${original}` : match;
	});
}
function preprocessBoxDrawing(input) {
	const lines = input.split("\n");
	const lineMap = /* @__PURE__ */ new Map();
	let keywordIdx = -1;
	for (const [i, line] of lines.entries()) if (line.trim() === "treeView-beta") {
		keywordIdx = i;
		break;
	}
	if (keywordIdx === -1) return {
		text: input,
		lineMap
	};
	const contentLineTexts = [];
	for (let i = keywordIdx + 1; i < lines.length; i++) {
		const line = lines[i];
		if (line.trim() === "" || COMMENT_LINE.test(line) || METADATA_LINE.test(line)) continue;
		if (DECORATION_ONLY.test(line)) continue;
		contentLineTexts.push(line.replace(/\t/g, "    "));
	}
	if (!isBoxDrawingFormat(contentLineTexts)) return {
		text: input,
		lineMap
	};
	const segmentWidth = inferSegmentWidth(contentLineTexts);
	const outputLines = [];
	let outLineNo = 0;
	for (let i = 0; i <= keywordIdx; i++) {
		outputLines.push(lines[i]);
		outLineNo++;
		lineMap.set(outLineNo, i + 1);
	}
	for (let i = keywordIdx + 1; i < lines.length; i++) {
		const line = lines[i];
		const trimmed = line.trim();
		const origLineNo = i + 1;
		if (trimmed === "") {
			outputLines.push(line);
			outLineNo++;
			lineMap.set(outLineNo, origLineNo);
			continue;
		}
		if (COMMENT_LINE.test(line)) {
			outputLines.push(line);
			outLineNo++;
			lineMap.set(outLineNo, origLineNo);
			continue;
		}
		if (METADATA_LINE.test(line)) {
			outputLines.push(line);
			outLineNo++;
			lineMap.set(outLineNo, origLineNo);
			continue;
		}
		if (DECORATION_ONLY.test(line)) continue;
		const normalized = line.replace(/\t/g, "    ");
		const branchMatch = BRANCH_CHAR.exec(normalized);
		if (branchMatch?.index !== void 0) {
			const branchCol = branchMatch.index;
			const depth = Math.round(branchCol / segmentWidth) + 1;
			let pos = branchCol + 1;
			while (pos < normalized.length && DASH_CHAR.test(normalized[pos])) pos++;
			while (pos < normalized.length && normalized[pos] === " ") pos++;
			const content = normalized.slice(pos).trimEnd();
			if (!content) throw new Error(`Line ${origLineNo}: Empty node \u2014 expected a filename or directory name after the box-drawing prefix`);
			const indent = INDENT_UNIT.repeat(depth);
			outputLines.push(indent + content);
			outLineNo++;
			lineMap.set(outLineNo, origLineNo);
		} else if (/^[\s─━│┃└┗├┣]+$/.test(normalized)) continue;
		else if (ALL_BOX_CHARS.test(normalized)) {
			outputLines.push(line);
			outLineNo++;
			lineMap.set(outLineNo, origLineNo);
		} else if (/^\s+/.test(normalized)) throw new Error(`Line ${origLineNo}: Unexpected indentation without box-drawing characters. In box-drawing format, use \u251C\u2500\u2500 or \u2514\u2500\u2500 prefixes for indented nodes.`);
		else {
			outputLines.push(line);
			outLineNo++;
			lineMap.set(outLineNo, origLineNo);
		}
	}
	return {
		text: outputLines.join("\n"),
		lineMap
	};
}
function detectIcon(name, config) {
	const filenameIcon = config?.filenameIcons?.[name];
	if (filenameIcon) return filenameIcon;
	const dotIdx = name.lastIndexOf(".");
	if (dotIdx > 0) {
		const ext = name.substring(dotIdx).toLowerCase();
		const extensionIcons = config?.extensionIcons;
		return extensionIcons?.[ext] ?? extensionIcons?.[ext.slice(1)];
	}
}
function qualifyIcon(icon, defaultIconPack) {
	if (icon.includes(":")) return icon;
	if (icon in treeViewIcons.icons || !defaultIconPack) return `${treeViewIcons.prefix}:${icon}`;
	return `${defaultIconPack}:${icon}`;
}
function getNodeIcon(node, config) {
	if (node.icon === "none") return;
	if (node.icon) return qualifyIcon(node.icon, config.defaultIconPack);
	if (!config.showIcons) return;
	if (node.nodeType === "file") {
		const detected = detectIcon(node.name, config);
		if (detected === "none") return;
		if (detected) return qualifyIcon(detected, config.defaultIconPack);
	}
	return `${treeViewIcons.prefix}:${node.nodeType === "directory" ? "folder" : "file"}`;
}
var ALL_BOX_CHARS, BRANCH_CHAR, DASH_CHAR, DECORATION_ONLY, METADATA_LINE, COMMENT_LINE, INDENT_UNIT, state, clear2, getRoot, getCount, defaultConfig, db_default, populate, parser, treeViewIcons, ICON_SIZE, ICON_GAP, DESC_GAP, resolveNodeIcons, positionLabel, positionLine, drawTree, renderer_default, defaultTreeViewDiagramStyles, diagram;
function init_diagram_XPFHEONP() {
	return (init_diagram_XPFHEONP = __esmMin((() => {
		init_chunk_2Q5K7J3B();
		init_chunk_JWPE2WC7();
		init_chunk_OHR5NZHT();
		init_chunk_R3KSYZAL();
		init_chunk_6MUBBAK2();
		init_chunk_BG4553SI();
		init_chunk_X3CZISLH();
		init_chunk_Y2CYZVJY();
		init_mermaid_parser_core();
		ALL_BOX_CHARS = /[─━│┃└┗├┣]/;
		BRANCH_CHAR = /[└┗├┣]/;
		DASH_CHAR = /[─━]/;
		DECORATION_ONLY = /^[\s│┃]+$/;
		METADATA_LINE = /^\s*(title[\t ]|accTitle[\t ]*:|accDescr[\t ]*[:{])/;
		COMMENT_LINE = /^\s*%%/;
		INDENT_UNIT = "    ";
		__name(isBoxDrawingFormat, "isBoxDrawingFormat");
		__name(inferSegmentWidth, "inferSegmentWidth");
		__name(remapErrorLines, "remapErrorLines");
		__name(preprocessBoxDrawing, "preprocessBoxDrawing");
		state = new ImperativeState(() => ({
			cnt: 1,
			stack: [{
				id: 0,
				level: -1,
				name: "/",
				nodeType: "directory",
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
			addNode: /* @__PURE__ */ __name((level, name, nodeType, cssClass, icon, description) => {
				while (level <= state.records.stack[state.records.stack.length - 1].level) state.records.stack.pop();
				const node = {
					id: state.records.cnt++,
					level,
					name,
					nodeType,
					icon,
					cssClass,
					description,
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
			for (const node of ast.nodes) {
				const level = typeof node.indent === "number" ? node.indent : 0;
				let name = node.name;
				const isDirectory = name.endsWith("/");
				if (isDirectory) name = name.slice(0, -1);
				const nodeType = isDirectory ? "directory" : "file";
				const cssClass = node.classAnnotation || void 0;
				const rawIcon = node.iconAnnotation;
				const icon = rawIcon !== void 0 ? rawIcon || "none" : void 0;
				const rawDesc = node.descAnnotation || void 0;
				const description = rawDesc ? sanitizeText(rawDesc, getConfig()) : void 0;
				db_default.addNode(level, name, nodeType, cssClass, icon, description);
			}
		}, "populate");
		parser = { parse: /* @__PURE__ */ __name(async (input) => {
			const { text, lineMap } = preprocessBoxDrawing(input);
			try {
				const ast = await parse("treeView", text);
				log.debug(ast);
				populate(ast);
			} catch (error) {
				if (lineMap.size > 0 && error instanceof Error) error.message = remapErrorLines(error.message, lineMap);
				throw error;
			}
		}, "parse") };
		treeViewIcons = {
			prefix: "mermaid-treeview",
			height: 24,
			width: 24,
			icons: {
				folder: { body: "<path fill=\"currentColor\" d=\"M10.59 4.59A2 2 0 0 0 9.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.17z\"/>" },
				file: { body: "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42l-4.82-4.82A2 2 0 0 0 13.17 2H6Zm7.5 1.9l4.6 4.6h-3.6a1 1 0 0 1-1-1V3.9Z\" clip-rule=\"evenodd\"/>" }
			}
		};
		__name(detectIcon, "detectIcon");
		__name(qualifyIcon, "qualifyIcon");
		__name(getNodeIcon, "getNodeIcon");
		registerIconPacks([{
			name: treeViewIcons.prefix,
			icons: treeViewIcons
		}]);
		ICON_SIZE = 14;
		ICON_GAP = 4;
		DESC_GAP = 16;
		resolveNodeIcons = /* @__PURE__ */ __name(async (root, config) => {
			const nodeIcons = [];
			const collect = /* @__PURE__ */ __name((node) => {
				const icon = getNodeIcon(node, config);
				if (icon) nodeIcons.push({
					icon,
					node
				});
				node.children.forEach(collect);
			}, "collect");
			collect(root);
			const resolvedIcons = await Promise.all(nodeIcons.map(async ({ icon, node }) => ({
				id: node.id,
				svg: await getIconSVG(icon, {
					height: ICON_SIZE,
					width: ICON_SIZE
				})
			})));
			return new Map(resolvedIcons.map(({ id, svg }) => [id, svg]));
		}, "resolveNodeIcons");
		positionLabel = /* @__PURE__ */ __name((x, y, node, domElem, config, iconSVGs) => {
			const nodeGroup = domElem.append("g");
			let cssClasses = "treeView-node-label";
			if (node.nodeType === "directory") cssClasses += " treeView-node-dir";
			if (node.cssClass) cssClasses += ` ${node.cssClass}`;
			const iconOffset = ICON_SIZE + ICON_GAP;
			const icon = getNodeIcon(node, config);
			const showIcon = icon !== void 0;
			if (icon) nodeGroup.append("g").attr("class", "treeView-node-icon").attr("transform", `translate(${x + config.paddingX}, ${y + config.paddingY})`).html(iconSVGs.get(node.id) ?? "");
			const label = nodeGroup.append("text").text(node.name).attr("dominant-baseline", "middle").attr("class", cssClasses);
			const { height: labelHeight, width: labelWidth } = label.node().getBBox();
			const height = labelHeight + config.paddingY * 2;
			const labelX = x + config.paddingX + (showIcon ? iconOffset : 0);
			label.attr("x", labelX);
			label.attr("y", y + height / 2);
			const labelRightEdge = labelX + labelWidth;
			node.BBox = {
				x,
				y,
				width: labelWidth + config.paddingX * 2 + (showIcon ? iconOffset : 0),
				height
			};
			if (node.cssClass?.split(/\s+/).includes("highlight")) nodeGroup.insert("rect", ":first-child").attr("x", x).attr("y", y + 1).attr("width", 0).attr("height", height - 2).attr("rx", 3).attr("class", "treeView-highlight-bg");
			return {
				node,
				nodeGroup,
				labelRightEdge,
				centerY: y + height / 2
			};
		}, "positionLabel");
		positionLine = /* @__PURE__ */ __name((domElem, x1, y1, x2, y2, lineThickness) => {
			return domElem.append("line").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2).attr("stroke-width", lineThickness).attr("class", "treeView-node-line");
		}, "positionLine");
		drawTree = /* @__PURE__ */ __name((elem, root, config, iconSVGs) => {
			let totalHeight = 0;
			let totalWidth = 0;
			const renderInfos = [];
			const drawNode = /* @__PURE__ */ __name((elem2, node, config2, depth) => {
				const indent = depth * (config2.rowIndent + config2.paddingX);
				const info = positionLabel(indent, totalHeight, node, elem2, config2, iconSVGs);
				renderInfos.push(info);
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
			const nodesWithDesc = renderInfos.filter((ri) => ri.node.description);
			if (nodesWithDesc.length > 0) {
				const descX = Math.max(...renderInfos.map((ri) => ri.labelRightEdge)) + DESC_GAP;
				for (const ri of nodesWithDesc) {
					const descBBox = ri.nodeGroup.append("text").text(ri.node.description).attr("dominant-baseline", "middle").attr("class", "treeView-node-description").attr("x", descX).attr("y", ri.centerY).node().getBBox();
					totalWidth = Math.max(totalWidth, descX + descBBox.width + config.paddingX);
				}
			}
			for (const ri of renderInfos) if (ri.node.cssClass?.split(/\s+/).includes("highlight")) {
				const rect = ri.nodeGroup.select(".treeView-highlight-bg");
				if (!rect.empty()) {
					const rectWidth = totalWidth - ri.node.BBox.x + 8;
					rect.attr("width", rectWidth);
					totalWidth = Math.max(totalWidth, ri.node.BBox.x + rectWidth + 2);
				}
			}
			return {
				totalHeight,
				totalWidth
			};
		}, "drawTree");
		renderer_default = { draw: /* @__PURE__ */ __name(async (text, id, _ver, diagObj) => {
			log.debug("Rendering treeView diagram\n" + text);
			const db2 = diagObj.db;
			const root = db2.getRoot();
			const config = db2.getConfig();
			const svg = selectSvgElement(id);
			const treeElem = svg.append("g");
			treeElem.attr("class", "tree-view");
			const { totalHeight, totalWidth } = drawTree(treeElem, root, config, await resolveNodeIcons(root, config));
			svg.attr("viewBox", `-${config.lineThickness / 2} 0 ${totalWidth} ${totalHeight}`);
			configureSvgSize(svg, totalHeight, totalWidth, config.useMaxWidth);
		}, "draw") };
		defaultTreeViewDiagramStyles = {
			labelFontSize: "16px",
			labelColor: "black",
			lineColor: "black",
			iconColor: "#546e7a",
			descriptionColor: "#6a9955",
			highlightBg: "rgba(255, 193, 7, 0.15)",
			highlightStroke: "#ffc107"
		};
		diagram = {
			db: db_default,
			renderer: renderer_default,
			parser,
			styles: /* @__PURE__ */ __name(({ treeView }) => {
				const { labelFontSize, labelColor, lineColor, iconColor, descriptionColor, highlightBg, highlightStroke } = cleanAndMerge(defaultTreeViewDiagramStyles, treeView);
				return `
    .treeView-node-label {
        font-size: ${labelFontSize};
        fill: ${labelColor};
        white-space: pre;
    }
    .treeView-node-dir {
        font-weight: bold;
    }
    .treeView-node-line {
        stroke: ${lineColor};
    }
    .treeView-node-icon {
        color: ${iconColor};
    }
    .treeView-node-description {
        font-size: ${labelFontSize};
        fill: ${descriptionColor};
        font-style: italic;
        white-space: pre;
    }
    .treeView-highlight-bg {
        fill: ${highlightBg};
        stroke: ${highlightStroke};
        stroke-width: 1;
    }
    `;
			}, "styles")
		};
	})))();
}
init_diagram_XPFHEONP();
export { diagram };
