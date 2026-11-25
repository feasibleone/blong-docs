import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { E as isEmResetFrame } from "./chunk-NGNAAXSQ-DHatXEyY.js";
import { n as init_mermaid_parser_core, r as parse } from "./mermaid-parser.core-_L3Y2WiQ.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { Ft as init_chunk_X3CZISLH, It as log, jt as select_default, t as init_src } from "./src-I6ywMk2o.js";
import { A as init_chunk_BG4553SI, B as sanitizeText, C as getDiagramTitle, J as setDiagramTitle, U as setAccDescription, W as setAccTitle, Z as setupGraphViewbox2, _ as getAccDescription, a as clear, b as getConfig2, f as defaultConfig_default, v as getAccTitle, y as getConfig } from "./chunk-BG4553SI-D_NoodJ5.js";
import { n as populateCommonDb, t as init_chunk_JWPE2WC7 } from "./chunk-JWPE2WC7-lCN7UnOX.js";
import { f as init_chunk_6MUBBAK2, i as cleanAndMerge, t as calculateTextDimensions, y as wrapLabel } from "./chunk-6MUBBAK2-DKYQU0dq.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/diagram-MHCOC4E2.mjs
function reset() {
	store = {};
}
function getState() {
	let state = initial;
	const { ast } = store;
	const diagramProps2 = getDiagramProps();
	if (!ast) throw new Error("No data for EventModel");
	ast.frames.forEach((frame, index) => {
		const textProps = calculateTextProps(frame, ast.dataEntities, diagramProps2);
		state = dispatch(state, {
			$kind: PositionFrameKind,
			index,
			frame,
			textProps
		});
		let sourceFrames = void 0;
		if (hasSourceFrame(frame)) {
			log.debug(`source frame`, frame.sourceFrames);
			sourceFrames = ast.frames.filter((currentFrame) => {
				return frame.sourceFrames.some((sf) => sf.$refText === currentFrame.name);
			});
			sourceFrames.forEach((sourceFrame) => {
				state = dispatch(state, {
					$kind: PositionRelationKind,
					index,
					frame,
					sourceFrame
				});
			});
		} else state = dispatch(state, {
			$kind: PositionRelationKind,
			index,
			frame
		});
	});
	state = {
		...state,
		sortedSwimlanesArray: sortedSwimlanesArray(state.swimlanes)
	};
	return state;
}
function setAst(ast) {
	store.ast = void 0;
	const frameIds = /* @__PURE__ */ new Set();
	for (const frame of ast.frames) {
		if (frameIds.has(frame.name)) {
			const line = frame.$cstNode?.range.start.line;
			const location = line === void 0 ? "" : ` on line ${line + 1}`;
			throw new Error(`Duplicate event modeling frame ID "${frame.name}"${location}`);
		}
		frameIds.add(frame.name);
	}
	store.ast = ast;
}
function getDiagramProps() {
	return diagramProps;
}
function extractNamespace(entityIdentifier) {
	const spl = entityIdentifier.split(".");
	if (spl.length === 2) return spl[0];
}
function extractName(entityIdentifier) {
	const spl = entityIdentifier.split(".");
	if (spl.length === 2) return spl[1];
	return entityIdentifier;
}
function findSwimlaneByNamespace(swimlanes, namespace) {
	if (!namespace || namespace.length === 0) return;
	return Object.values(swimlanes).find((swimlane) => swimlane.namespace === namespace);
}
function findNextAvailableIndex(swimlanes, boundaryMin, boundaryMax) {
	return Math.max(boundaryMin, ...Object.keys(swimlanes).filter((key) => {
		const index = Number.parseInt(key);
		return index > boundaryMin && index < boundaryMax;
	}).map((key) => Number.parseInt(key))) + 1;
}
function calculateSwimlaneProps(frame, swimlanes) {
	const namespace = extractNamespace(frame.entityIdentifier);
	const sw = findSwimlaneByNamespace(swimlanes, namespace);
	switch (frame.modelEntityType) {
		case "ui":
		case "pcr":
		case "processor":
			if (sw) return {
				index: sw.index,
				label: sw.namespace || diagramProps.labelUiAutomation
			};
			else if (namespace) return {
				index: findNextAvailableIndex(swimlanes, 0, 100),
				label: diagramProps.labelUiAutomationPrefix + namespace
			};
			return {
				index: 0,
				label: diagramProps.labelUiAutomation
			};
		case "rmo":
		case "readmodel":
		case "cmd":
		case "command":
			if (sw) return {
				index: sw.index,
				label: sw.namespace || diagramProps.labelCommandReadModel
			};
			else if (namespace) return {
				index: findNextAvailableIndex(swimlanes, 100, 200),
				label: diagramProps.labelCommandReadModelPrefix + namespace
			};
			return {
				index: 100,
				label: diagramProps.labelCommandReadModel
			};
		default:
			if (sw) return {
				index: sw.index,
				label: sw.namespace || diagramProps.labelEvents
			};
			else if (namespace) return {
				index: findNextAvailableIndex(swimlanes, 200, 300),
				label: diagramProps.labelEventsPrefix + namespace
			};
			return {
				index: 200,
				label: diagramProps.labelEvents
			};
	}
}
function calculateEntityVisualProps(frame) {
	const { themeVariables } = getConfig();
	switch (frame.modelEntityType) {
		case "ui": return {
			fill: themeVariables.emUiFill ?? "white",
			stroke: themeVariables.emUiStroke ?? "#dbdada"
		};
		case "pcr":
		case "processor": return {
			fill: themeVariables.emProcessorFill ?? "#edb3f6",
			stroke: themeVariables.emProcessorStroke ?? "#b88cbf"
		};
		case "rmo":
		case "readmodel": return {
			fill: themeVariables.emReadModelFill ?? "#d3f1a2",
			stroke: themeVariables.emReadModelStroke ?? "#a3b732"
		};
		case "cmd":
		case "command": return {
			fill: themeVariables.emCommandFill ?? "#bcd6fe",
			stroke: themeVariables.emCommandStroke ?? "#679ac3"
		};
		case "evt":
		case "event": return {
			fill: themeVariables.emEventFill ?? "#ffb778",
			stroke: themeVariables.emEventStroke ?? "#c19a0f"
		};
		default: return {
			fill: "red",
			stroke: "black"
		};
	}
}
function calculateTextProps(frame, dataEntities, diagramProps2) {
	const config = getConfig();
	const name = sanitizeText(extractName(frame.entityIdentifier) ?? "", config);
	let toHtml;
	const wrapLabelConfig = {
		fontSize: 16,
		fontWeight: 700,
		fontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		joinWith: "<br/>"
	};
	let content = `<b>${wrapLabel(name, diagramProps2.textMaxWidth, wrapLabelConfig)}</b>`;
	if (frame.dataInlineValue) {
		toHtml = frame.dataInlineValue;
		toHtml = toHtml.substring(toHtml.indexOf("{") + 1);
		toHtml = toHtml.substring(0, toHtml.lastIndexOf("}") - 1);
		toHtml = sanitizeText(toHtml, config);
		toHtml = wrapLabel(toHtml, diagramProps2.textMaxWidth, wrapLabelConfig);
		toHtml = toHtml.replaceAll(" ", "&nbsp;");
	}
	if (frame.dataReference) {
		const dataEntity = dataEntities.find((dataEntity2) => dataEntity2.name === frame.dataReference?.$refText);
		if (dataEntity) {
			toHtml = dataEntity.dataBlockValue;
			toHtml = toHtml.substring(toHtml.indexOf("{\n") + 2);
			toHtml = toHtml.substring(0, toHtml.lastIndexOf("}") - 1);
			toHtml = sanitizeText(toHtml, config);
			toHtml = wrapLabel(toHtml, diagramProps2.textMaxWidth, wrapLabelConfig);
			toHtml = toHtml.replaceAll(" ", "&nbsp;");
			toHtml += `<br/>`;
		}
	}
	const hasRenderedData = toHtml !== void 0;
	if (hasRenderedData) content += `<br/><br/><code style="text-align: left; display: block;max-width:${diagramProps2.textMaxWidth}px">${toHtml}</code>`;
	const textDimensionConfig = {
		fontSize: wrapLabelConfig.fontSize,
		fontWeight: wrapLabelConfig.fontWeight,
		fontFamily: wrapLabelConfig.fontFamily
	};
	const dimensions = calculateTextDimensions(content, textDimensionConfig);
	const calculatedWidthFix = hasRenderedData ? dimensions.width / 3 : dimensions.width;
	const props = {
		content,
		width: calculatedWidthFix,
		height: dimensions.height
	};
	log.debug(`[${frame.name}] ${frame.entityIdentifier} text`, props);
	return props;
}
function decidePositionFrame(state, _command) {
	const command = _command;
	const visual = calculateEntityVisualProps(command.frame);
	const dimension = {
		width: command.textProps.width + 2 * diagramProps.boxTextPadding,
		height: command.textProps.height + 2 * diagramProps.boxTextPadding
	};
	return [{
		$kind: FramePositionedKind,
		frame: command.frame,
		index: command.index,
		visual,
		dimension,
		textProps: command.textProps
	}];
}
function calculateX(swimlane, previousSwimlane, lastBox) {
	if (previousSwimlane === void 0) return diagramProps.contentStartX;
	if (previousSwimlane.index === swimlane.index && swimlane.r) return swimlane.r + diagramProps.boxPadding;
	if (lastBox === void 0) return diagramProps.contentStartX;
	return lastBox.r - diagramProps.boxOverlap + diagramProps.boxPadding;
}
function calculateMaxRight(swimlanes, swimlaneR) {
	const rs = [...swimlanes.map((s) => s.r), swimlaneR];
	return Math.max(...rs);
}
function sortedSwimlanesArray(swimlanes) {
	return Object.values(swimlanes).sort((a, b) => a.index - b.index);
}
function evolveFramePositioned(state, _event) {
	const event = _event;
	const swimlaneProps = calculateSwimlaneProps(event.frame, state.swimlanes);
	let swimlane;
	if (swimlaneProps.index in state.swimlanes) swimlane = state.swimlanes[swimlaneProps.index];
	else swimlane = {
		index: swimlaneProps.index,
		label: swimlaneProps.label,
		r: 0,
		y: swimlaneProps.index * diagramProps.swimlaneMinHeight + diagramProps.swimlaneGap,
		height: diagramProps.swimlaneMinHeight,
		maxHeight: diagramProps.swimlaneMinHeight
	};
	const lastBox = state.boxes.length > 0 ? state.boxes[state.boxes.length - 1] : void 0;
	const previousSwimlane = state.previousSwimlaneNumber !== void 0 ? state.swimlanes[state.previousSwimlaneNumber] : void 0;
	const dimension = {
		width: Math.max(diagramProps.boxMinWidth, Math.min(diagramProps.boxMaxWidth, event.dimension.width)) + 2 * diagramProps.boxPadding,
		height: Math.max(diagramProps.boxMinHeight, Math.min(diagramProps.boxMaxHeight, event.dimension.height)) + 2 * diagramProps.boxPadding
	};
	const x = calculateX(swimlane, previousSwimlane, lastBox);
	const r = x + dimension.width + diagramProps.boxPadding;
	const maxR = calculateMaxRight(Object.values(state.swimlanes), r);
	swimlane.r = x + dimension.width;
	swimlane.maxHeight = Math.max(swimlane.maxHeight, dimension.height);
	swimlane.height = Math.max(diagramProps.swimlaneMinHeight, swimlane.maxHeight) + 2 * diagramProps.swimlanePadding;
	const box = {
		x,
		y: diagramProps.swimlanePadding + swimlane.y,
		r,
		dimension,
		leftSibling: false,
		swimlane,
		visual: event.visual,
		text: event.textProps.content,
		frame: event.frame,
		index: event.index
	};
	const newState = {
		...state,
		boxes: [...state.boxes, box],
		swimlanes: {
			...state.swimlanes,
			[`${swimlane.index}`]: swimlane
		},
		previousSwimlaneNumber: swimlaneProps.index,
		previousFrame: event.frame,
		maxR
	};
	const swimlanes = sortedSwimlanesArray(newState.swimlanes);
	if (swimlanes.length > 0) swimlanes[0].y = 0;
	for (let i = 1; i < swimlanes.length; i++) {
		const sw = swimlanes[i];
		const prevSw = swimlanes[i - 1];
		sw.y = prevSw.y + prevSw.height + diagramProps.swimlaneGap;
	}
	return newState;
}
function isFirstFrame(index, frame) {
	if (index === 0 && frame.sourceFrames.length === 0) return true;
	return false;
}
function hasSourceFrame(frame) {
	return frame.sourceFrames !== void 0 && frame.sourceFrames !== null && frame.sourceFrames.length > 0;
}
function findBoxByFrame(boxes, frame) {
	if (frame === void 0 || frame === null) return;
	return boxes.find((box) => box.frame.name === frame.name);
}
function findBoxByLineIndex(boxes, targetSwimlane, lineIndex) {
	if (lineIndex < 0) return;
	for (let i = lineIndex; i >= 0; i--) {
		const box = boxes[i];
		if (box.swimlane.index !== targetSwimlane) return box;
	}
}
function decidePositionRelation(state, _command) {
	const command = _command;
	if (isFirstFrame(command.index, command.frame)) return [];
	const targetBox = findBoxByFrame(state.boxes, command.frame);
	if (targetBox === void 0) throw new Error(`Target box not found for frame ${command.frame.name}`);
	let sourceBox;
	if (command.sourceFrame) sourceBox = findBoxByFrame(state.boxes, command.sourceFrame);
	else {
		if (isEmResetFrame(command.frame)) return [];
		sourceBox = findBoxByLineIndex(state.boxes, targetBox.swimlane.index, command.index - 1);
	}
	if (sourceBox === void 0) return [];
	return [{
		$kind: RelationPositionedKind,
		frame: command.frame,
		index: command.index,
		sourceBox,
		targetBox
	}];
}
function evolveRelationPositioned(state, _event) {
	const event = _event;
	const relation = {
		visual: {
			fill: "none",
			stroke: "#000"
		},
		source: {
			x: event.sourceBox.x,
			y: event.sourceBox.y
		},
		target: {
			x: event.targetBox.x,
			y: event.targetBox.y
		},
		sourceBox: event.sourceBox,
		targetBox: event.targetBox
	};
	return {
		...state,
		relations: [...state.relations, relation]
	};
}
function decide(state, command) {
	const fn = deciders[command.$kind];
	if (fn === void 0 || fn === null) return [];
	const events = fn(state, command);
	log.debug(`decided events`, events);
	return events;
}
function evolve(state, events) {
	const newState = events.reduce((previousState, event) => {
		const fn = evolvers[event.$kind];
		if (fn === void 0 || fn === null) return previousState;
		return fn(previousState, event);
	}, state);
	log.debug(`evolve events`, {
		state,
		newState,
		events
	});
	return newState;
}
function dispatch(state, command) {
	return evolve(state, decide(state, command));
}
function renderD3Box(diagram2, diagramProps2) {
	return (box) => {
		const y = box.swimlane.y + diagramProps2.swimlanePadding;
		const g = diagram2.append("g").attr("class", "em-box");
		g.append("rect").attr("x", box.x).attr("y", y).attr("rx", "3").attr("width", box.dimension.width).attr("height", box.dimension.height).attr("stroke", box.visual.stroke).attr("fill", box.visual.fill);
		g.append("foreignObject").attr("x", box.x + diagramProps2.boxPadding).attr("y", y + 10).attr("width", box.dimension.width - 2 * diagramProps2.boxPadding).attr("height", box.dimension.height - 2 * diagramProps2.boxPadding).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%").append("span").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").html(box.text);
	};
}
function dirUpwards(sourceY, targetY) {
	return sourceY > targetY;
}
function renderD3Relation(diagram2, diagramProps2, arrowheadId, themeVariables) {
	return (relation) => {
		const sourceBoxY = relation.sourceBox.swimlane.y + diagramProps2.swimlanePadding;
		const targetBoxY = relation.targetBox.swimlane.y + diagramProps2.swimlanePadding;
		const upwards = dirUpwards(sourceBoxY, targetBoxY);
		const sourceX = relation.sourceBox.x + relation.sourceBox.dimension.width * 2 / 3;
		const targetX = relation.targetBox.x + relation.targetBox.dimension.width / 3;
		let sourceY;
		let targetY;
		log.debug(`rendering relation up=${upwards} for `, {
			sourceBox: relation.sourceBox,
			targetBox: relation.targetBox
		});
		if (upwards) {
			sourceY = sourceBoxY;
			targetY = targetBoxY + relation.targetBox.dimension.height;
		} else {
			sourceY = sourceBoxY + relation.sourceBox.dimension.height;
			targetY = targetBoxY;
		}
		const relationStroke = themeVariables.emRelationStroke ?? relation.visual.stroke;
		diagram2.append("path").attr("class", "em-relation").attr("fill", relation.visual.fill).attr("stroke", relationStroke).attr("stroke-width", "1").attr("marker-end", `url(#${arrowheadId})`).attr("d", `M${sourceX} ${sourceY} L${targetX} ${targetY}`);
	};
}
function renderD3Swimlane(diagram2, maxR, diagramProps2, themeVariables) {
	return (swimlane) => {
		const g = diagram2.append("g").attr("class", "em-swimlane");
		const oddBackground = themeVariables.emSwimlaneBackgroundOdd ?? "rgb(250,250,250)";
		const backgroundStroke = themeVariables.emSwimlaneBackgroundStroke ?? "rgb(240,240,240)";
		g.append("rect").attr("x", 0).attr("y", swimlane.y).attr("rx", "3").attr("width", maxR + diagramProps2.swimlanePadding).attr("height", swimlane.height).attr("fill", oddBackground).attr("stroke", backgroundStroke);
		g.append("text").attr("font-weight", diagramProps2.swimlaneTextFontWeight).attr("x", 30).attr("y", swimlane.y + 30).text(swimlane.label);
	};
}
var PositionFrameKind, FramePositionedKind, PositionRelationKind, RelationPositionedKind, setOptions, getOptions, clear2, DEFAULT_EVENTMODELING_CONFIG, getConfig3, store, diagramProps, initial, deciders, evolvers, db, parser, DEFAULT_EVENTMODELING_CONFIG2, diagram;
function init_diagram_MHCOC4E2() {
	return (init_diagram_MHCOC4E2 = __esmMin((() => {
		init_chunk_JWPE2WC7();
		init_chunk_6MUBBAK2();
		init_chunk_BG4553SI();
		init_chunk_X3CZISLH();
		init_chunk_Y2CYZVJY();
		init_mermaid_parser_core();
		init_src();
		PositionFrameKind = "position frame";
		FramePositionedKind = "frame positioned";
		PositionRelationKind = "position relation";
		RelationPositionedKind = "relation positioned";
		setOptions = /* @__PURE__ */ __name(function(_rawOptString) {
			log.debug("options str", _rawOptString);
		}, "setOptions");
		getOptions = /* @__PURE__ */ __name(function() {
			return {};
		}, "getOptions");
		clear2 = /* @__PURE__ */ __name(function() {
			reset();
			clear();
		}, "clear");
		__name(reset, "reset");
		DEFAULT_EVENTMODELING_CONFIG = defaultConfig_default.eventmodeling;
		getConfig3 = /* @__PURE__ */ __name(() => {
			return cleanAndMerge({
				...DEFAULT_EVENTMODELING_CONFIG,
				...getConfig().eventmodeling
			});
		}, "getConfig");
		store = {};
		__name(getState, "getState");
		__name(setAst, "setAst");
		diagramProps = {
			swimlaneMinHeight: 70,
			swimlanePadding: 15,
			swimlaneGap: 10,
			boxPadding: 10,
			boxOverlap: 90,
			boxDefaultY: 0,
			boxMinWidth: 80,
			boxMaxWidth: 450,
			boxMinHeight: 80,
			boxMaxHeight: 750,
			contentStartX: 250,
			textMaxWidth: 430,
			boxTextFontWeight: "bold",
			boxTextPadding: 10,
			swimlaneTextFontWeight: "bold",
			labelUiAutomation: "UI/Automation",
			labelUiAutomationPrefix: "UI/A: ",
			labelCommandReadModel: "Command/Read Model",
			labelCommandReadModelPrefix: "C/RM: ",
			labelEvents: "Events",
			labelEventsPrefix: "Stream: "
		};
		__name(getDiagramProps, "getDiagramProps");
		initial = {
			boxes: [],
			swimlanes: {},
			relations: [],
			maxR: 0,
			sortedSwimlanesArray: []
		};
		__name(extractNamespace, "extractNamespace");
		__name(extractName, "extractName");
		__name(findSwimlaneByNamespace, "findSwimlaneByNamespace");
		__name(findNextAvailableIndex, "findNextAvailableIndex");
		__name(calculateSwimlaneProps, "calculateSwimlaneProps");
		__name(calculateEntityVisualProps, "calculateEntityVisualProps");
		__name(calculateTextProps, "calculateTextProps");
		__name(decidePositionFrame, "decidePositionFrame");
		__name(calculateX, "calculateX");
		__name(calculateMaxRight, "calculateMaxRight");
		__name(sortedSwimlanesArray, "sortedSwimlanesArray");
		__name(evolveFramePositioned, "evolveFramePositioned");
		__name(isFirstFrame, "isFirstFrame");
		__name(hasSourceFrame, "hasSourceFrame");
		__name(findBoxByFrame, "findBoxByFrame");
		__name(findBoxByLineIndex, "findBoxByLineIndex");
		__name(decidePositionRelation, "decidePositionRelation");
		__name(evolveRelationPositioned, "evolveRelationPositioned");
		deciders = {
			[PositionFrameKind]: decidePositionFrame,
			[PositionRelationKind]: decidePositionRelation
		};
		evolvers = {
			[FramePositionedKind]: evolveFramePositioned,
			[RelationPositionedKind]: evolveRelationPositioned
		};
		__name(decide, "decide");
		__name(evolve, "evolve");
		__name(dispatch, "dispatch");
		db = {
			getConfig: getConfig3,
			preserveCommentsWhenParsing: true,
			setOptions,
			getOptions,
			clear: clear2,
			setAccTitle,
			getAccTitle,
			getAccDescription,
			setAccDescription,
			setDiagramTitle,
			getDiagramTitle,
			setAst,
			getDiagramProps,
			getState
		};
		parser = { parse: /* @__PURE__ */ __name(async (input) => {
			const ast = await parse("eventmodeling", input);
			log.debug(ast);
			db.setAst(ast);
			populateCommonDb(ast, db);
		}, "parse") };
		DEFAULT_EVENTMODELING_CONFIG2 = getConfig2()?.eventmodeling;
		__name(renderD3Box, "renderD3Box");
		__name(dirUpwards, "dirUpwards");
		__name(renderD3Relation, "renderD3Relation");
		__name(renderD3Swimlane, "renderD3Swimlane");
		diagram = {
			parser,
			db,
			renderer: { draw: /* @__PURE__ */ __name(function(txt, id, ver, diagObj) {
				log.debug("in eventmodeling renderer", txt + "\n", "id:", id, ver);
				if (!DEFAULT_EVENTMODELING_CONFIG2) throw new Error("EventModeling config not found");
				const db2 = diagObj.db;
				const { themeVariables, eventmodeling: config } = getConfig2();
				const diagram2 = select_default(`[id="${id}"]`);
				const diagramProps2 = db2.getDiagramProps();
				const state = db2.getState();
				const arrowheadId = `em-arrowhead-${id}`;
				const arrowheadColor = themeVariables.emArrowhead ?? "#000000";
				state.sortedSwimlanesArray.forEach(renderD3Swimlane(diagram2, state.maxR, diagramProps2, themeVariables));
				state.boxes.forEach(renderD3Box(diagram2, diagramProps2));
				state.relations.forEach(renderD3Relation(diagram2, diagramProps2, arrowheadId, themeVariables));
				diagram2.append("defs").append("marker").attr("id", arrowheadId).attr("markerWidth", "10").attr("markerHeight", "7").attr("refX", "10").attr("refY", "3.5").attr("orient", "auto").append("polygon").attr("points", "0 0, 10 3.5, 0 7").attr("fill", arrowheadColor);
				setupGraphViewbox2(void 0, diagram2, config?.padding ?? 30, config?.useMaxWidth);
			}, "draw") },
			styles: /* @__PURE__ */ __name((_options) => ``, "getStyles")
		};
	})))();
}
init_diagram_MHCOC4E2();
export { diagram };
