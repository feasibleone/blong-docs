import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as parse, t as init_mermaid_parser_core } from "./mermaid-parser.core-BVS1aS4A.js";
import { H as arc_default, It as __name, L as pie_default, Lt as init_chunk_AGHRB4JF, Rt as log, t as init_src, xt as ordinal } from "./src-BZTApG9x.js";
import { A as init_chunk_ICPOFSXX, C as getDiagramTitle, G as setDiagramTitle, H as setAccTitle, V as setAccDescription, _ as getAccDescription, a as clear, b as getConfig2, c as configureSvgSize, d as defaultConfig_default, v as getAccTitle } from "./chunk-ICPOFSXX-w5HTQ3sU.js";
import { p as parseFontSize, r as cleanAndMerge, u as init_chunk_5PVQY5BW } from "./chunk-5PVQY5BW-CROQJXMv.js";
import { n as populateCommonDb, t as init_chunk_4BX2VUAB } from "./chunk-4BX2VUAB-C3TmcE08.js";
import { l as init_chunk_426QAEUC, u as selectSvgElement } from "./mermaid.core-e7zCkHZ9.js";
// ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/pieDiagram-DEJITSTG.mjs
var DEFAULT_PIE_CONFIG, DEFAULT_PIE_DB, sections, showData, config, db, populateDb, parser, pieStyles_default, createPieArcs, diagram;
function init_pieDiagram_DEJITSTG() {
	return (init_pieDiagram_DEJITSTG = __esmMin((() => {
		init_chunk_426QAEUC();
		init_chunk_4BX2VUAB();
		init_chunk_5PVQY5BW();
		init_chunk_ICPOFSXX();
		init_chunk_AGHRB4JF();
		init_mermaid_parser_core();
		init_src();
		DEFAULT_PIE_CONFIG = defaultConfig_default.pie;
		DEFAULT_PIE_DB = {
			sections: /* @__PURE__ */ new Map(),
			showData: false,
			config: DEFAULT_PIE_CONFIG
		};
		sections = DEFAULT_PIE_DB.sections;
		showData = DEFAULT_PIE_DB.showData;
		config = structuredClone(DEFAULT_PIE_CONFIG);
		db = {
			getConfig: /* @__PURE__ */ __name(() => structuredClone(config), "getConfig"),
			clear: /* @__PURE__ */ __name(() => {
				sections = /* @__PURE__ */ new Map();
				showData = DEFAULT_PIE_DB.showData;
				clear();
			}, "clear"),
			setDiagramTitle,
			getDiagramTitle,
			setAccTitle,
			getAccTitle,
			setAccDescription,
			getAccDescription,
			addSection: /* @__PURE__ */ __name(({ label, value }) => {
				if (value < 0) throw new Error(`"${label}" has invalid value: ${value}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
				if (!sections.has(label)) {
					sections.set(label, value);
					log.debug(`added new section: ${label}, with value: ${value}`);
				}
			}, "addSection"),
			getSections: /* @__PURE__ */ __name(() => sections, "getSections"),
			setShowData: /* @__PURE__ */ __name((toggle) => {
				showData = toggle;
			}, "setShowData"),
			getShowData: /* @__PURE__ */ __name(() => showData, "getShowData")
		};
		populateDb = /* @__PURE__ */ __name((ast, db2) => {
			populateCommonDb(ast, db2);
			db2.setShowData(ast.showData);
			ast.sections.map(db2.addSection);
		}, "populateDb");
		parser = { parse: /* @__PURE__ */ __name(async (input) => {
			const ast = await parse("pie", input);
			log.debug(ast);
			populateDb(ast, db);
		}, "parse") };
		pieStyles_default = /* @__PURE__ */ __name((options) => `
  .pieCircle{
    stroke: ${options.pieStrokeColor};
    stroke-width : ${options.pieStrokeWidth};
    opacity : ${options.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${options.pieOuterStrokeColor};
    stroke-width: ${options.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${options.pieTitleTextSize};
    fill: ${options.pieTitleTextColor};
    font-family: ${options.fontFamily};
  }
  .slice {
    font-family: ${options.fontFamily};
    fill: ${options.pieSectionTextColor};
    font-size:${options.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${options.pieLegendTextColor};
    font-family: ${options.fontFamily};
    font-size: ${options.pieLegendTextSize};
  }
`, "getStyles");
		createPieArcs = /* @__PURE__ */ __name((sections2) => {
			const sum = [...sections2.values()].reduce((acc, val) => acc + val, 0);
			const pieData = [...sections2.entries()].map(([label, value]) => ({
				label,
				value
			})).filter((d) => d.value / sum * 100 >= 1);
			return pie_default().value((d) => d.value).sort(null)(pieData);
		}, "createPieArcs");
		diagram = {
			parser,
			db,
			renderer: { draw: /* @__PURE__ */ __name((text, id, _version, diagObj) => {
				log.debug("rendering pie chart\n" + text);
				const db2 = diagObj.db;
				const globalConfig = getConfig2();
				const pieConfig = cleanAndMerge(db2.getConfig(), globalConfig.pie);
				const MARGIN = 40;
				const LEGEND_RECT_SIZE = 18;
				const height = 450;
				const pieWidth = height;
				const svg = selectSvgElement(id);
				const group = svg.append("g");
				group.attr("transform", "translate(225,225)");
				const { themeVariables } = globalConfig;
				let [outerStrokeWidth] = parseFontSize(themeVariables.pieOuterStrokeWidth);
				outerStrokeWidth ??= 2;
				const textPosition = pieConfig.textPosition;
				const radius = Math.min(pieWidth, height) / 2 - MARGIN;
				const arcGenerator = arc_default().innerRadius(0).outerRadius(radius);
				const labelArcGenerator = arc_default().innerRadius(radius * textPosition).outerRadius(radius * textPosition);
				group.append("circle").attr("cx", 0).attr("cy", 0).attr("r", radius + outerStrokeWidth / 2).attr("class", "pieOuterCircle");
				const sections2 = db2.getSections();
				const arcs = createPieArcs(sections2);
				const myGeneratedColors = [
					themeVariables.pie1,
					themeVariables.pie2,
					themeVariables.pie3,
					themeVariables.pie4,
					themeVariables.pie5,
					themeVariables.pie6,
					themeVariables.pie7,
					themeVariables.pie8,
					themeVariables.pie9,
					themeVariables.pie10,
					themeVariables.pie11,
					themeVariables.pie12
				];
				let sum = 0;
				sections2.forEach((section) => {
					sum += section;
				});
				const filteredArcs = arcs.filter((datum) => (datum.data.value / sum * 100).toFixed(0) !== "0");
				const color = ordinal(myGeneratedColors).domain([...sections2.keys()]);
				group.selectAll("mySlices").data(filteredArcs).enter().append("path").attr("d", arcGenerator).attr("fill", (datum) => {
					return color(datum.data.label);
				}).attr("class", "pieCircle");
				group.selectAll("mySlices").data(filteredArcs).enter().append("text").text((datum) => {
					return (datum.data.value / sum * 100).toFixed(0) + "%";
				}).attr("transform", (datum) => {
					return "translate(" + labelArcGenerator.centroid(datum) + ")";
				}).style("text-anchor", "middle").attr("class", "slice");
				const titleText = group.append("text").text(db2.getDiagramTitle()).attr("x", 0).attr("y", -200).attr("class", "pieTitleText");
				const allSectionData = [...sections2.entries()].map(([label, value]) => ({
					label,
					value
				}));
				const legend = group.selectAll(".legend").data(allSectionData).enter().append("g").attr("class", "legend").attr("transform", (_datum, index) => {
					const height2 = 22;
					const offset = height2 * allSectionData.length / 2;
					return "translate(216," + (index * height2 - offset) + ")";
				});
				legend.append("rect").attr("width", LEGEND_RECT_SIZE).attr("height", LEGEND_RECT_SIZE).style("fill", (d) => color(d.label)).style("stroke", (d) => color(d.label));
				legend.append("text").attr("x", 22).attr("y", 14).text((d) => {
					if (db2.getShowData()) return `${d.label} [${d.value}]`;
					return d.label;
				});
				const chartAndLegendWidth = 512 + Math.max(...legend.selectAll("text").nodes().map((node) => node?.getBoundingClientRect().width ?? 0));
				const titleWidth = titleText.node()?.getBoundingClientRect().width ?? 0;
				const titleLeft = pieWidth / 2 - titleWidth / 2;
				const titleRight = pieWidth / 2 + titleWidth / 2;
				const viewBoxX = Math.min(0, titleLeft);
				const totalWidth = Math.max(chartAndLegendWidth, titleRight) - viewBoxX;
				svg.attr("viewBox", `${viewBoxX} 0 ${totalWidth} ${height}`);
				configureSvgSize(svg, height, totalWidth, pieConfig.useMaxWidth);
			}, "draw") },
			styles: pieStyles_default
		};
	})))();
}
init_pieDiagram_DEJITSTG();
export { diagram };
