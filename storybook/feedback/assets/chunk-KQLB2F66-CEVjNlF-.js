const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./sizeCapture-INFHLROL-D7PUOD9N.js","./rolldown-runtime-DpEnGzO4.js","./chunk-Y2CYZVJY-BI3ITEPM.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { Ft as init_chunk_X3CZISLH, It as log } from "./src-I6ywMk2o.js";
import { A as init_chunk_BG4553SI, b as getConfig2, y as getConfig } from "./chunk-BG4553SI-D_NoodJ5.js";
import { a as init_chunk_DQASFODM, d as markers_default, h as terminalLabels, i as hasEdgeLabel, m as resolveEdgeLabelPosition, n as edgeLabels, o as insertEdge, s as insertEdgeLabel, t as clear } from "./chunk-DQASFODM-C6WVMGGu.js";
import { f as init_chunk_6MUBBAK2, v as utils_default } from "./chunk-6MUBBAK2-DKYQU0dq.js";
import { r as init_chunk_AXFCVDMN, s as labelHelper } from "./chunk-AXFCVDMN-DPDnzKGI.js";
import { a as positionNode, i as insertNode, n as getSubGraphTitleMargins, r as init_chunk_LEVMRMFU, t as clear$1 } from "./chunk-LEVMRMFU-BiPDWkN6.js";
import { n as Graph, t as init_graphlib } from "./graphlib-CENmG-Hj.js";
import { i as insertCluster, r as init_chunk_M57EVK23, t as clear$2 } from "./chunk-M57EVK23-u9kdKZfF.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-KQLB2F66.mjs
function createLayoutElementGroups(element, { edgePathsClass = "edges edgePaths" } = {}) {
	const rootGroups = element.insert("g").attr("class", "root");
	return {
		clusters: rootGroups.insert("g").attr("class", "clusters"),
		edgePaths: rootGroups.insert("g").attr("class", edgePathsClass),
		edgeLabels: rootGroups.insert("g").attr("class", "edgeLabels"),
		nodes: rootGroups.insert("g").attr("class", "nodes"),
		rootGroups
	};
}
async function measureGroupLabel(nodesGroup, node, measureWidth) {
	if (node.label) {
		const { shapeSvg, bbox } = await labelHelper(nodesGroup, measureWidth === void 0 ? node : {
			...node,
			width: measureWidth
		});
		node.labelBBox = {
			width: bbox.width,
			height: bbox.height
		};
		shapeSvg.remove();
	} else node.labelBBox = {
		width: 0,
		height: 0
	};
}
async function insertMeasuredNode(nodesGroup, node, renderOptions) {
	const childNodeEl = await insertNode(nodesGroup, node, renderOptions);
	const boundingBox = childNodeEl.node()?.getBBox() ?? {
		width: 0,
		height: 0
	};
	node.width = boundingBox.width;
	node.height = boundingBox.height;
	return childNodeEl;
}
function resolveNodeDir(node, nodeById, diagramDir) {
	let current = node;
	const seen = /* @__PURE__ */ new Set();
	while (current) {
		if (current.dir) return current.dir;
		if (!current.parentId || seen.has(current.parentId)) break;
		seen.add(current.parentId);
		current = nodeById.get(current.parentId);
	}
	return diagramDir;
}
async function createGraphWithElements(element, data4Layout, options = {}) {
	const graph = new Graph({
		multigraph: true,
		compound: true
	});
	const edgesToProcess = [...data4Layout.edges];
	const config = getConfig2();
	const groups = createLayoutElementGroups(element);
	const { edgeLabels: edgeLabels2, nodes: nodesGroup } = groups;
	const nodeElements = /* @__PURE__ */ new Map();
	const nodeById = new Map(data4Layout.nodes.map((node) => [node.id, node]));
	const diagramDir = data4Layout.direction;
	const hasDom = element.node() != null;
	await Promise.all(data4Layout.nodes.map(async (node) => {
		if (node.isGroup) {
			if (hasDom) {
				const unwrap = options.unwrapGroupLabels && node.labelType !== "markdown";
				await measureGroupLabel(nodesGroup, node, unwrap ? Number.POSITIVE_INFINITY : void 0);
			}
			graph.setNode(node.id, { ...node });
		} else {
			if (hasDom) {
				const childNodeEl = await insertMeasuredNode(nodesGroup, node, {
					config,
					dir: resolveNodeDir(node, nodeById, diagramDir)
				});
				nodeElements.set(node.id, childNodeEl);
			}
			graph.setNode(node.id, { ...node });
		}
	}));
	for (const edge of edgesToProcess) {
		if (hasDom && hasEdgeLabel(edge)) await insertEdgeLabel(edgeLabels2, edge);
		graph.setEdge(edge.start, edge.end, { ...edge }, edge.id);
		if (!data4Layout.edges.some((existingEdge) => existingEdge.id === edge.id)) data4Layout.edges.push(edge);
	}
	if (globalThis.mermaidCaptureSizes) {
		const { captureNodeSizes } = await __vitePreload(async () => {
			const { captureNodeSizes } = await import("./sizeCapture-INFHLROL-D7PUOD9N.js");
			return { captureNodeSizes };
		}, __vite__mapDeps([0,1,2]), import.meta.url);
		captureNodeSizes(element, data4Layout);
	}
	return {
		graph,
		groups,
		nodeElements
	};
}
function createCommonLayoutRenderer({ prepareLayout, measureLayout, runLayoutCore, paintLayout, afterPaint, paintOptions }) {
	const measureLayoutFn = measureLayout ?? defaultMeasureLayout;
	return /* @__PURE__ */ __name(async function render(data4Layout, svg, helpers, options) {
		const element = svg.select("g");
		(helpers?.insertMarkers ?? markers_default)(element, data4Layout.markers, data4Layout.type, data4Layout.diagramId);
		clearLayoutRenderState();
		const renderContext = {
			element,
			helpers,
			options
		};
		renderContext.preparedLayout = await prepareLayout?.(data4Layout, renderContext);
		const measure = await measureLayoutFn(data4Layout, renderContext);
		const coreResult = await runLayoutCore(data4Layout, renderContext);
		const paintContext = {
			...renderContext,
			measure
		};
		if (paintLayout) await paintLayout(data4Layout, paintContext, coreResult);
		else await paintLayoutData(data4Layout, paintContext, paintOptions);
		await afterPaint?.(data4Layout, paintContext, coreResult);
	}, "render");
}
function clearLayoutRenderState() {
	clear$1();
	clear();
	clear$2();
	clear4();
}
async function defaultMeasureLayout(data4Layout, { element }, options) {
	return await createGraphWithElements(element, data4Layout, options);
}
async function paintLayoutData(data4Layout, context, options = {}) {
	const { measure } = context;
	const { groups } = measure;
	for (const node of options.getNodes?.(data4Layout, context) ?? data4Layout.nodes) {
		if (options.skipNode?.(node, context)) continue;
		await paintLayoutNode(groups, node, context, options);
	}
	const nodeById = buildNodeLookup(data4Layout.nodes);
	for (const edge of data4Layout.edges) {
		if (shouldSkipPaintEdge(edge, options)) continue;
		await paintLayoutEdge(groups, edge, nodeById, data4Layout, options, context);
	}
}
async function paintLayoutNode(groups, node, context, options) {
	if (node.clusterNode) positionNode(node);
	else if (shouldPaintAsCluster(node, context, options)) await insertCluster(groups.clusters, node);
	else positionNode(node);
}
function shouldPaintAsCluster(node, context, options) {
	return node.isGroup === true && (options.isCluster?.(node, context) ?? true);
}
function buildNodeLookup(nodes) {
	const nodeById = /* @__PURE__ */ new Map();
	for (const node of nodes) if (node?.id) nodeById.set(node.id, node);
	return nodeById;
}
function shouldSkipPaintEdge(edge, options) {
	return edge.isLayoutOnly || Boolean(options.skipEdge?.(edge));
}
async function paintLayoutEdge(groups, edge, nodeById, data4Layout, options, context) {
	const paths = insertEdge(groups.edgePaths, { ...edge }, options.clusterDb ?? /* @__PURE__ */ new Map(), data4Layout.type, getRenderedNode(edge.start, edge, nodeById, context, options), getRenderedNode(edge.end, edge, nodeById, context, options), data4Layout.diagramId, shouldSkipIntersect(edge, options), data4Layout.layoutAlgorithm);
	if (hasEdgeLabel(edge)) {
		if (!edgeLabels.has(edge.id)) await insertEdgeLabel(groups.edgeLabels, edge);
		positionRenderedEdgeLabel(edge, paths);
	}
}
function getRenderedNode(id, edge, nodeById, context, options) {
	return options.getEdgeNode?.(id, edge, context) ?? (id ? nodeById.get(id) ?? {} : {});
}
function shouldSkipIntersect(edge, options) {
	return typeof options.skipIntersect === "function" ? options.skipIntersect(edge) : options.skipIntersect ?? false;
}
function positionRenderedEdgeLabel(edge, paths) {
	const path = paths?.updatedPath ?? paths?.originalPath;
	const siteConfig = getConfig();
	const { subGraphTitleTotalMargin } = getSubGraphTitleMargins({ flowchart: siteConfig.flowchart ?? {} });
	if (edge.label) {
		const el = edgeLabels.get(edge.id);
		const { x, y } = resolveEdgeLabelPosition(edge, paths);
		el.attr("transform", `translate(${x}, ${y + subGraphTitleTotalMargin / 2})`);
	}
	for (const [key, text] of [
		["startLeft", edge.startLabelLeft],
		["startRight", edge.startLabelRight],
		["endLeft", edge.endLabelLeft],
		["endRight", edge.endLabelRight]
	]) if (text) {
		const { x, y } = terminalLabelTranslate(edge, key, path);
		terminalLabels.get(edge.id)[key].attr("transform", `translate(${x}, ${y})`);
	}
}
function terminalLabelTranslate(edge, key, path) {
	const center = edge.terminalLabelCenters?.[key];
	if (center) return { ...center };
	if (!path) return {
		x: edge.x,
		y: edge.y
	};
	const arrowType = key.startsWith("start") ? edge.arrowTypeStart : edge.arrowTypeEnd;
	return utils_default.calcTerminalLabelPosition(arrowType ? 10 : 0, TERMINAL_LABEL_SIDES[key], path);
}
var clusterDb, descendants, parents, clear4, isDescendant, edgeInCluster, copy, extractDescendants, findCommonEdges, findNonClusterChild, getAnchorId, adjustClustersAndEdges, extractor, sorter, sortNodesByHierarchy, isNodeInExtractableCluster, findSafeAnchorNode, TERMINAL_LABEL_SIDES;
function init_chunk_KQLB2F66() {
	return (init_chunk_KQLB2F66 = __esmMin((() => {
		init_chunk_M57EVK23();
		init_chunk_DQASFODM();
		init_chunk_LEVMRMFU();
		init_chunk_AXFCVDMN();
		init_chunk_6MUBBAK2();
		init_chunk_BG4553SI();
		init_chunk_X3CZISLH();
		init_chunk_Y2CYZVJY();
		init_graphlib();
		init_preload_helper();
		__name(createLayoutElementGroups, "createLayoutElementGroups");
		__name(measureGroupLabel, "measureGroupLabel");
		__name(insertMeasuredNode, "insertMeasuredNode");
		__name(resolveNodeDir, "resolveNodeDir");
		__name(createGraphWithElements, "createGraphWithElements");
		clusterDb = /* @__PURE__ */ new Map();
		descendants = /* @__PURE__ */ new Map();
		parents = /* @__PURE__ */ new Map();
		clear4 = /* @__PURE__ */ __name(() => {
			descendants.clear();
			parents.clear();
			clusterDb.clear();
		}, "clear");
		isDescendant = /* @__PURE__ */ __name((id, ancestorId) => {
			const ancestorDescendants = descendants.get(ancestorId) || [];
			log.trace("In isDescendant", ancestorId, " ", id, " = ", ancestorDescendants.includes(id));
			return ancestorDescendants.includes(id);
		}, "isDescendant");
		edgeInCluster = /* @__PURE__ */ __name((edge, clusterId) => {
			const clusterDescendants = descendants.get(clusterId) || [];
			log.info("Descendants of ", clusterId, " is ", clusterDescendants);
			log.info("Edge is ", edge);
			if (edge.v === clusterId || edge.w === clusterId) return false;
			if (!clusterDescendants) {
				log.debug("Tilt, ", clusterId, ",not in descendants");
				return false;
			}
			return clusterDescendants.includes(edge.v) || isDescendant(edge.v, clusterId) || isDescendant(edge.w, clusterId) || clusterDescendants.includes(edge.w);
		}, "edgeInCluster");
		copy = /* @__PURE__ */ __name((clusterId, graph, newGraph, rootId) => {
			log.debug("Copying children of ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
			const nodes = graph.children(clusterId) || [];
			if (clusterId !== rootId) nodes.push(clusterId);
			log.debug("Copying (nodes) clusterId", clusterId, "nodes", nodes);
			nodes.forEach((node) => {
				if (graph.children(node).length > 0) copy(node, graph, newGraph, rootId);
				else {
					const data = graph.node(node);
					log.info("cp ", node, " to ", rootId, " with parent ", clusterId);
					newGraph.setNode(node, data);
					if (rootId !== graph.parent(node)) {
						log.debug("Setting parent", node, graph.parent(node));
						newGraph.setParent(node, graph.parent(node));
					}
					if (clusterId !== rootId && node !== clusterId) {
						log.debug("Setting parent", node, clusterId);
						newGraph.setParent(node, clusterId);
					} else {
						log.info("In copy ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
						log.debug("Not Setting parent for node=", node, "cluster!==rootId", clusterId !== rootId, "node!==clusterId", node !== clusterId);
					}
					const edges = graph.edges(node);
					log.debug("Copying Edges", edges);
					edges.forEach((edge) => {
						log.info("Edge", edge);
						const data2 = graph.edge(edge.v, edge.w, edge.name);
						log.info("Edge data", data2, rootId);
						try {
							if (edgeInCluster(edge, rootId)) {
								log.info("Copying as ", edge.v, edge.w, data2, edge.name);
								newGraph.setEdge(edge.v, edge.w, data2, edge.name);
								log.info("newGraph edges ", newGraph.edges(), newGraph.edge(newGraph.edges()[0]));
							} else log.info("Skipping copy of edge ", edge.v, "-->", edge.w, " rootId: ", rootId, " clusterId:", clusterId);
						} catch (e) {
							log.error(e);
						}
					});
				}
				log.debug("Removing node", node);
				graph.removeNode(node);
			});
		}, "copy");
		extractDescendants = /* @__PURE__ */ __name((id, graph) => {
			const children = graph.children(id);
			let res = [...children];
			for (const child of children) {
				parents.set(child, id);
				res = [...res, ...extractDescendants(child, graph)];
			}
			return res;
		}, "extractDescendants");
		findCommonEdges = /* @__PURE__ */ __name((graph, id1, id2) => {
			const edges1 = graph.edges().filter((edge) => edge.v === id1 || edge.w === id1);
			const edges2 = graph.edges().filter((edge) => edge.v === id2 || edge.w === id2);
			const edges1Prim = edges1.map((edge) => {
				return {
					v: edge.v === id1 ? id2 : edge.v,
					w: edge.w === id1 ? id1 : edge.w
				};
			});
			const edges2Prim = edges2.map((edge) => {
				return {
					v: edge.v,
					w: edge.w
				};
			});
			return edges1Prim.filter((edgeIn1) => {
				return edges2Prim.some((edge) => edgeIn1.v === edge.v && edgeIn1.w === edge.w);
			});
		}, "findCommonEdges");
		findNonClusterChild = /* @__PURE__ */ __name((id, graph, clusterId) => {
			const children = graph.children(id);
			log.trace("Searching children of id ", id, children);
			if (children.length < 1) return id;
			let reserve;
			for (const child of children) {
				const _id = findNonClusterChild(child, graph, clusterId);
				const commonEdges = findCommonEdges(graph, clusterId, _id);
				if (_id) {
					if (commonEdges.length > 0) reserve = _id;
					else return _id;
				}
			}
			return reserve;
		}, "findNonClusterChild");
		getAnchorId = /* @__PURE__ */ __name((id) => {
			if (!clusterDb.has(id)) return id;
			if (!clusterDb.get(id).externalConnections) return id;
			if (clusterDb.has(id)) return clusterDb.get(id).id;
			return id;
		}, "getAnchorId");
		adjustClustersAndEdges = /* @__PURE__ */ __name((graph, depth) => {
			if (!graph || depth > 10) {
				log.debug("Opting out, no graph ");
				return;
			} else log.debug("Opting in, graph ");
			graph.nodes().forEach(function(id) {
				if (graph.children(id).length > 0) {
					log.debug("Cluster identified", id, " Replacement id in edges: ", findNonClusterChild(id, graph, id));
					descendants.set(id, extractDescendants(id, graph));
					clusterDb.set(id, {
						id: findNonClusterChild(id, graph, id),
						clusterData: graph.node(id)
					});
				}
			});
			graph.nodes().forEach(function(id) {
				const children = graph.children(id);
				const edges = graph.edges();
				if (children.length > 0) {
					log.debug("Cluster identified", id, descendants);
					edges.forEach((edge) => {
						if (isDescendant(edge.v, id) ^ isDescendant(edge.w, id)) {
							log.debug("Edge: ", edge, " leaves cluster ", id);
							log.debug("Descendants of XXX ", id, ": ", descendants.get(id));
							clusterDb.get(id).externalConnections = true;
						}
					});
				} else log.debug("Not a cluster ", id, descendants);
			});
			for (let id of clusterDb.keys()) {
				const nonClusterChild = clusterDb.get(id).id;
				const parent = graph.parent(nonClusterChild);
				if (parent !== id && clusterDb.has(parent) && !clusterDb.get(parent).externalConnections) clusterDb.get(id).id = parent;
				const hasDirectOutgoingEdge = graph.edges().some((edge) => edge.v === id);
				if (nonClusterChild && clusterDb.get(id)?.externalConnections && hasDirectOutgoingEdge && isNodeInExtractableCluster(graph, nonClusterChild, id)) {
					const safeAnchor = findSafeAnchorNode(graph, id, graph.parent(nonClusterChild));
					if (safeAnchor) clusterDb.get(id).id = safeAnchor;
				}
			}
			graph.edges().forEach(function(e) {
				const edge = graph.edge(e);
				log.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
				log.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph.edge(e)));
				let v = e.v;
				let w = e.w;
				log.debug("Fix XXX", clusterDb, "ids:", e.v, e.w, "Translating: ", clusterDb.get(e.v), " --- ", clusterDb.get(e.w));
				if (clusterDb.get(e.v) || clusterDb.get(e.w)) {
					log.debug("Fixing and trying - removing XXX", e.v, e.w, e.name);
					v = getAnchorId(e.v);
					w = getAnchorId(e.w);
					graph.removeEdge(e.v, e.w, e.name);
					if (v !== e.v) {
						const parent = graph.parent(v);
						clusterDb.get(parent).externalConnections = true;
						edge.fromCluster = e.v;
					}
					if (w !== e.w) {
						const parent = graph.parent(w);
						clusterDb.get(parent).externalConnections = true;
						edge.toCluster = e.w;
					}
					log.debug("Fix Replacing with XXX", v, w, e.name);
					graph.setEdge(v, w, edge, e.name);
				}
			});
			extractor(graph, 0);
			log.trace(clusterDb);
		}, "adjustClustersAndEdges");
		extractor = /* @__PURE__ */ __name((graph, depth) => {
			if (depth > 10) {
				log.error("Bailing out");
				return;
			}
			let nodes = graph.nodes();
			let hasChildren = false;
			for (const node of nodes) {
				const children = graph.children(node);
				hasChildren = hasChildren || children.length > 0;
			}
			if (!hasChildren) {
				log.debug("Done, no node has children", graph.nodes());
				return;
			}
			log.debug("Nodes = ", nodes, depth);
			for (const node of nodes) {
				log.debug("Extracting node", node, clusterDb, clusterDb.has(node) && !clusterDb.get(node).externalConnections, !graph.parent(node), graph.node(node), graph.children("D"), " Depth ", depth);
				if (!clusterDb.has(node)) log.debug("Not a cluster", node, depth);
				else if (!clusterDb.get(node).externalConnections && graph.children(node) && graph.children(node).length > 0) {
					log.debug("Cluster without external connections, without a parent and with children", node, depth);
					let dir = graph.graph().rankdir === "TB" ? "LR" : "TB";
					if (clusterDb.get(node)?.clusterData?.dir) {
						dir = clusterDb.get(node).clusterData.dir;
						log.debug("Fixing dir", clusterDb.get(node).clusterData.dir, dir);
					}
					const clusterGraph = new Graph({
						multigraph: true,
						compound: true
					}).setGraph({
						rankdir: dir,
						nodesep: 50,
						ranksep: 50,
						marginx: 8,
						marginy: 8
					}).setDefaultEdgeLabel(function() {
						return {};
					});
					copy(node, graph, clusterGraph, node);
					graph.setNode(node, {
						clusterNode: true,
						id: node,
						clusterData: clusterDb.get(node).clusterData,
						label: clusterDb.get(node).label,
						graph: clusterGraph
					});
				} else {
					log.debug("Cluster ** ", node, " **not meeting the criteria !externalConnections:", !clusterDb.get(node).externalConnections, " no parent: ", !graph.parent(node), " children ", graph.children(node) && graph.children(node).length > 0, graph.children("D"), depth);
					log.debug(clusterDb);
				}
			}
			nodes = graph.nodes();
			log.debug("New list of nodes", nodes);
			for (const node of nodes) {
				const data = graph.node(node);
				log.debug(" Now next level", node, data);
				if (data?.clusterNode) extractor(data.graph, depth + 1);
			}
		}, "extractor");
		sorter = /* @__PURE__ */ __name((graph, nodes) => {
			if (nodes.length === 0) return [];
			let result = Object.assign([], nodes);
			nodes.forEach((node) => {
				const sorted = sorter(graph, graph.children(node));
				result = [...result, ...sorted];
			});
			return result;
		}, "sorter");
		sortNodesByHierarchy = /* @__PURE__ */ __name((graph) => sorter(graph, graph.children()), "sortNodesByHierarchy");
		isNodeInExtractableCluster = /* @__PURE__ */ __name((graph, node, rootId) => {
			let parent = graph.parent(node);
			while (parent && parent !== rootId) {
				const cluster = clusterDb.get(parent);
				if (cluster && !cluster.externalConnections) return true;
				parent = graph.parent(parent);
			}
			return false;
		}, "isNodeInExtractableCluster");
		findSafeAnchorNode = /* @__PURE__ */ __name((graph, clusterId, excludedCluster) => {
			const children = graph.children(clusterId) ?? [];
			for (const child of children) {
				if (child === excludedCluster || isDescendant(child, excludedCluster)) continue;
				const candidate = findNonClusterChild(child, graph, clusterId);
				if (!candidate) continue;
				if (!isNodeInExtractableCluster(graph, candidate, clusterId)) return candidate;
			}
			return null;
		}, "findSafeAnchorNode");
		__name(createCommonLayoutRenderer, "createCommonLayoutRenderer");
		__name(clearLayoutRenderState, "clearLayoutRenderState");
		__name(defaultMeasureLayout, "defaultMeasureLayout");
		__name(paintLayoutData, "paintLayoutData");
		__name(paintLayoutNode, "paintLayoutNode");
		__name(shouldPaintAsCluster, "shouldPaintAsCluster");
		__name(buildNodeLookup, "buildNodeLookup");
		__name(shouldSkipPaintEdge, "shouldSkipPaintEdge");
		__name(paintLayoutEdge, "paintLayoutEdge");
		__name(getRenderedNode, "getRenderedNode");
		__name(shouldSkipIntersect, "shouldSkipIntersect");
		__name(positionRenderedEdgeLabel, "positionRenderedEdgeLabel");
		TERMINAL_LABEL_SIDES = {
			startLeft: "start_left",
			startRight: "start_right",
			endLeft: "end_left",
			endRight: "end_right"
		};
		__name(terminalLabelTranslate, "terminalLabelTranslate");
	})))();
}
export { defaultMeasureLayout as a, insertMeasuredNode as c, createLayoutElementGroups as i, sortNodesByHierarchy as l, clusterDb as n, findNonClusterChild as o, createCommonLayoutRenderer as r, init_chunk_KQLB2F66 as s, adjustClustersAndEdges as t };
