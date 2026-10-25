import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { l as init_map, u as map } from "./flatten-B4bMJ9xZ.js";
import { E as log, T as init_chunk_AGHRB4JF, w as __name } from "./src-sxmhTtP3.js";
import { A as init_chunk_ICPOFSXX, b as getConfig2 } from "./chunk-ICPOFSXX-BJUpm1HO.js";
import { u as init_chunk_5PVQY5BW } from "./chunk-5PVQY5BW-BNrAsxxX.js";
import { i as init_chunk_U2HBQHQK } from "./chunk-U2HBQHQK-XL9Il3zU.js";
import { r as init_chunk_BSJP7CBP } from "./chunk-BSJP7CBP-95HEPAJh.js";
import { n as getSubGraphTitleMargins, r as init_chunk_ZZ45TVLE } from "./chunk-ZZ45TVLE-UdhaSN4G.js";
import { a as isUndefined, i as init_isUndefined, n as Graph, r as init_graph, t as init_graphlib } from "./graphlib-BtK_sGpO.js";
import { n as init_clone, t as clone } from "./clone-CXHzBNGy.js";
import { r as layout, t as init_dagre } from "./dagre-B3Oguxc8.js";
import { n as init_chunk_X2U36JSP } from "./chunk-X2U36JSP-BI7WAZPD.js";
import { a as insertCluster, d as updateNodeBounds, i as init_chunk_5FUZZQ4R, l as positionNode, n as clear2, o as insertNode, t as clear, u as setNodeElem } from "./chunk-5FUZZQ4R-CEQB-hrF.js";
import { a as markers_default, i as insertEdgeLabel, n as init_chunk_ENJZ2VHE, o as positionEdgeLabel, r as insertEdge, t as clear$1 } from "./chunk-ENJZ2VHE-Bh5_WwlO.js";
//#region ../../common/temp/node_modules/.pnpm/dagre-d3-es@7.0.14/node_modules/dagre-d3-es/src/graphlib/json.js
/**
* @template [GraphLabel=any] - Label of the graph.
* @template [NodeLabel=any] - Label of a node.
* @template [EdgeLabel=any] - Label of an edge.
*
* @typedef {object} GraphJSON
* @property {Required<GraphOptions>} options - The options used to create the graph.
* @property {Array<{ v: NodeID; value?: NodeLabel; parent?: NodeID }>} nodes - The nodes in the graph.
* @property {Array<EdgeObj & { value?: EdgeLabel }>} edges - The edges in the graph.
* @property {GraphLabel} [value] - The graph's value, if any.
*/
/**
* Creates a JSON representation of the graph that can be serialized to a
* string with
* [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
* The graph can later be restored using {@link read}.
*
* @example
*
* ```js
* var g = new graphlib.Graph();
* g.setNode("a", { label: "node a" });
* g.setNode("b", { label: "node b" });
* g.setEdge("a", "b", { label: "edge a->b" });
* graphlib.json.write(g);
* // Returns the object:
* //
* // {
* //   "options": {
* //     "directed": true,
* //     "multigraph": false,
* //     "compound": false
* //   },
* //   "nodes": [
* //     { "v": "a", "value": { "label": "node a" } },
* //     { "v": "b", "value": { "label": "node b" } }
* //   ],
* //   "edges": [
* //     { "v": "a", "w": "b", "value": { "label": "edge a->b" } }
* //   ]
* // }
* ```
*
* @template [GraphLabel=any] - Label of the graph.
* @template [NodeLabel=any] - Label of a node.
* @template [EdgeLabel=any] - Label of an edge.
* @param {Graph<GraphLabel, NodeLabel, EdgeLabel>} g - The graph to serialize.
* @returns {GraphJSON<GraphLabel, NodeLabel, EdgeLabel>} The JSON representation of the graph.
*/
function write(g) {
	/** @type {GraphJSON<GraphLabel, NodeLabel, EdgeLabel>} */
	var json = {
		options: {
			directed: g.isDirected(),
			multigraph: g.isMultigraph(),
			compound: g.isCompound()
		},
		nodes: writeNodes(g),
		edges: writeEdges(g)
	};
	if (!isUndefined(g.graph())) json.value = clone(g.graph());
	return json;
}
/**
* @template NodeLabel - Label of a node.
*
* @param {Graph<unknown, NodeLabel, unknown>} g - The graph to serialize.
* @returns {Array<{ v: NodeID; value?: NodeLabel; parent?: NodeID }>} The nodes in the graph.
*/
function writeNodes(g) {
	return map(g.nodes(), function(v) {
		var nodeValue = g.node(v);
		var parent = g.parent(v);
		/** @type {{ v: NodeID; value?: NodeLabel; parent?: NodeID }} */
		var node = { v };
		if (!isUndefined(nodeValue)) node.value = nodeValue;
		if (!isUndefined(parent)) node.parent = parent;
		return node;
	});
}
/**
* @template EdgeLabel - Label of a node.
*
* @param {Graph<unknown, unknown, EdgeLabel>} g - The graph to serialize.
* @returns {Array<EdgeObj & { value?: EdgeLabel }>} The edges in the graph.
*/
function writeEdges(g) {
	return map(g.edges(), function(e) {
		var edgeValue = g.edge(e);
		/** @type {EdgeObj & { value?: EdgeLabel }} */
		var edge = {
			v: e.v,
			w: e.w
		};
		if (!isUndefined(e.name)) edge.name = e.name;
		if (!isUndefined(edgeValue)) edge.value = edgeValue;
		return edge;
	});
}
function init_json() {
	return (init_json = __esmMin((() => {
		init_isUndefined(), init_clone(), init_map();
		init_graph();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/dagre-KV5264BT.mjs
var clusterDb, descendants, parents, clear4, isDescendant, edgeInCluster, copy, extractDescendants, findCommonEdges, findNonClusterChild, getAnchorId, adjustClustersAndEdges, extractor, sorter, sortNodesByHierarchy, recursiveRender, render;
function init_dagre_KV5264BT() {
	return (init_dagre_KV5264BT = __esmMin((() => {
		init_chunk_ENJZ2VHE();
		init_chunk_BSJP7CBP();
		init_chunk_5FUZZQ4R();
		init_chunk_ZZ45TVLE();
		init_chunk_X2U36JSP();
		init_chunk_U2HBQHQK();
		init_chunk_5PVQY5BW();
		init_chunk_ICPOFSXX();
		init_chunk_AGHRB4JF();
		init_dagre();
		init_json();
		init_graphlib();
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
			log.warn("Copying children of ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
			const nodes = graph.children(clusterId) || [];
			if (clusterId !== rootId) nodes.push(clusterId);
			log.warn("Copying (nodes) clusterId", clusterId, "nodes", nodes);
			nodes.forEach((node) => {
				if (graph.children(node).length > 0) copy(node, graph, newGraph, rootId);
				else {
					const data = graph.node(node);
					log.info("cp ", node, " to ", rootId, " with parent ", clusterId);
					newGraph.setNode(node, data);
					if (rootId !== graph.parent(node)) {
						log.warn("Setting parent", node, graph.parent(node));
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
					log.warn("Cluster identified", id, " Replacement id in edges: ", findNonClusterChild(id, graph, id));
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
							log.warn("Edge: ", edge, " leaves cluster ", id);
							log.warn("Descendants of XXX ", id, ": ", descendants.get(id));
							clusterDb.get(id).externalConnections = true;
						}
					});
				} else log.debug("Not a cluster ", id, descendants);
			});
			for (let id of clusterDb.keys()) {
				const nonClusterChild = clusterDb.get(id).id;
				const parent = graph.parent(nonClusterChild);
				if (parent !== id && clusterDb.has(parent) && !clusterDb.get(parent).externalConnections) clusterDb.get(id).id = parent;
			}
			graph.edges().forEach(function(e) {
				const edge = graph.edge(e);
				log.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
				log.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph.edge(e)));
				let v = e.v;
				let w = e.w;
				log.warn("Fix XXX", clusterDb, "ids:", e.v, e.w, "Translating: ", clusterDb.get(e.v), " --- ", clusterDb.get(e.w));
				if (clusterDb.get(e.v) || clusterDb.get(e.w)) {
					log.warn("Fixing and trying - removing XXX", e.v, e.w, e.name);
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
					log.warn("Fix Replacing with XXX", v, w, e.name);
					graph.setEdge(v, w, edge, e.name);
				}
			});
			log.warn("Adjusted Graph", write(graph));
			extractor(graph, 0);
			log.trace(clusterDb);
		}, "adjustClustersAndEdges");
		extractor = /* @__PURE__ */ __name((graph, depth) => {
			log.warn("extractor - ", depth, write(graph), graph.children("D"));
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
					log.warn("Cluster without external connections, without a parent and with children", node, depth);
					let dir = graph.graph().rankdir === "TB" ? "LR" : "TB";
					if (clusterDb.get(node)?.clusterData?.dir) {
						dir = clusterDb.get(node).clusterData.dir;
						log.warn("Fixing dir", clusterDb.get(node).clusterData.dir, dir);
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
					log.warn("Old graph before copy", write(graph));
					copy(node, graph, clusterGraph, node);
					graph.setNode(node, {
						clusterNode: true,
						id: node,
						clusterData: clusterDb.get(node).clusterData,
						label: clusterDb.get(node).label,
						graph: clusterGraph
					});
					log.warn("New graph after copy node: (", node, ")", write(clusterGraph));
					log.debug("Old graph after copy", write(graph));
				} else {
					log.warn("Cluster ** ", node, " **not meeting the criteria !externalConnections:", !clusterDb.get(node).externalConnections, " no parent: ", !graph.parent(node), " children ", graph.children(node) && graph.children(node).length > 0, graph.children("D"), depth);
					log.debug(clusterDb);
				}
			}
			nodes = graph.nodes();
			log.warn("New list of nodes", nodes);
			for (const node of nodes) {
				const data = graph.node(node);
				log.warn(" Now next level", node, data);
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
		recursiveRender = /* @__PURE__ */ __name(async (_elem, graph, diagramType, id, parentCluster, siteConfig) => {
			log.warn("Graph in recursive render:XAX", write(graph), parentCluster);
			const dir = graph.graph().rankdir;
			log.trace("Dir in recursive render - dir:", dir);
			const elem = _elem.insert("g").attr("class", "root");
			if (!graph.nodes()) log.info("No nodes found for", graph);
			else log.info("Recursive render XXX", graph.nodes());
			if (graph.edges().length > 0) log.info("Recursive edges", graph.edge(graph.edges()[0]));
			const clusters = elem.insert("g").attr("class", "clusters");
			const edgePaths = elem.insert("g").attr("class", "edgePaths");
			const edgeLabels = elem.insert("g").attr("class", "edgeLabels");
			const nodes = elem.insert("g").attr("class", "nodes");
			await Promise.all(graph.nodes().map(async function(v) {
				const node = graph.node(v);
				if (parentCluster !== void 0) {
					const data = JSON.parse(JSON.stringify(parentCluster.clusterData));
					log.trace("Setting data for parent cluster XXX\n Node.id = ", v, "\n data=", data.height, "\nParent cluster", parentCluster.height);
					graph.setNode(parentCluster.id, data);
					if (!graph.parent(v)) {
						log.trace("Setting parent", v, parentCluster.id);
						graph.setParent(v, parentCluster.id, data);
					}
				}
				log.info("(Insert) Node XXX" + v + ": " + JSON.stringify(graph.node(v)));
				if (node?.clusterNode) {
					log.info("Cluster identified XBX", v, node.width, graph.node(v));
					const { ranksep, nodesep } = graph.graph();
					node.graph.setGraph({
						...node.graph.graph(),
						ranksep: ranksep + 25,
						nodesep
					});
					const o = await recursiveRender(nodes, node.graph, diagramType, id, graph.node(v), siteConfig);
					const newEl = o.elem;
					updateNodeBounds(node, newEl);
					node.diff = o.diff || 0;
					log.info("New compound node after recursive render XAX", v, "width", node.width, "height", node.height);
					setNodeElem(newEl, node);
				} else if (graph.children(v).length > 0) {
					log.trace("Cluster - the non recursive path XBX", v, node.id, node, node.width, "Graph:", graph);
					log.trace(findNonClusterChild(node.id, graph));
					clusterDb.set(node.id, {
						id: findNonClusterChild(node.id, graph),
						node
					});
				} else {
					log.trace("Node - the non recursive path XAX", v, nodes, graph.node(v), dir);
					await insertNode(nodes, graph.node(v), {
						config: siteConfig,
						dir
					});
				}
			}));
			await (/* @__PURE__ */ __name(async () => {
				const edgePromises = graph.edges().map(async function(e) {
					const edge = graph.edge(e.v, e.w, e.name);
					log.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
					log.info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(graph.edge(e)));
					log.info("Fix", clusterDb, "ids:", e.v, e.w, "Translating: ", clusterDb.get(e.v), clusterDb.get(e.w));
					await insertEdgeLabel(edgeLabels, edge);
				});
				await Promise.all(edgePromises);
			}, "processEdges"))();
			log.info("Graph before layout:", JSON.stringify(write(graph)));
			log.info("############################################# XXX");
			log.info("###                Layout                 ### XXX");
			log.info("############################################# XXX");
			layout(graph);
			log.info("Graph after layout:", JSON.stringify(write(graph)));
			let diff = 0;
			let { subGraphTitleTotalMargin } = getSubGraphTitleMargins(siteConfig);
			await Promise.all(sortNodesByHierarchy(graph).map(async function(v) {
				const node = graph.node(v);
				log.info("Position XBX => " + v + ": (" + node.x, "," + node.y, ") width: ", node.width, " height: ", node.height);
				if (node?.clusterNode) {
					node.y += subGraphTitleTotalMargin;
					log.info("A tainted cluster node XBX1", v, node.id, node.width, node.height, node.x, node.y, graph.parent(v));
					clusterDb.get(node.id).node = node;
					positionNode(node);
				} else if (graph.children(v).length > 0) {
					log.info("A pure cluster node XBX1", v, node.id, node.x, node.y, node.width, node.height, graph.parent(v));
					node.height += subGraphTitleTotalMargin;
					graph.node(node.parentId);
					const halfPadding = node?.padding / 2 || 0;
					const labelHeight = node?.labelBBox?.height || 0;
					const offsetY = labelHeight - halfPadding || 0;
					log.debug("OffsetY", offsetY, "labelHeight", labelHeight, "halfPadding", halfPadding);
					await insertCluster(clusters, node);
					clusterDb.get(node.id).node = node;
				} else {
					const parent = graph.node(node.parentId);
					node.y += subGraphTitleTotalMargin / 2;
					log.info("A regular node XBX1 - using the padding", node.id, "parent", node.parentId, node.width, node.height, node.x, node.y, "offsetY", node.offsetY, "parent", parent, parent?.offsetY, node);
					positionNode(node);
				}
			}));
			graph.edges().forEach(function(e) {
				const edge = graph.edge(e);
				log.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(edge), edge);
				edge.points.forEach((point) => point.y += subGraphTitleTotalMargin / 2);
				const startNode = graph.node(e.v);
				var endNode = graph.node(e.w);
				const paths = insertEdge(edgePaths, edge, clusterDb, diagramType, startNode, endNode, id);
				positionEdgeLabel(edge, paths);
			});
			graph.nodes().forEach(function(v) {
				const n = graph.node(v);
				log.info(v, n.type, n.diff);
				if (n.isGroup) diff = n.diff;
			});
			log.warn("Returning from recursive render XAX", elem, diff);
			return {
				elem,
				diff
			};
		}, "recursiveRender");
		render = /* @__PURE__ */ __name(async (data4Layout, svg) => {
			const graph = new Graph({
				multigraph: true,
				compound: true
			}).setGraph({
				rankdir: data4Layout.direction,
				nodesep: data4Layout.config?.nodeSpacing || data4Layout.config?.flowchart?.nodeSpacing || data4Layout.nodeSpacing,
				ranksep: data4Layout.config?.rankSpacing || data4Layout.config?.flowchart?.rankSpacing || data4Layout.rankSpacing,
				marginx: 8,
				marginy: 8
			}).setDefaultEdgeLabel(function() {
				return {};
			});
			const element = svg.select("g");
			markers_default(element, data4Layout.markers, data4Layout.type, data4Layout.diagramId);
			clear2();
			clear$1();
			clear();
			clear4();
			data4Layout.nodes.forEach((node) => {
				graph.setNode(node.id, { ...node });
				if (node.parentId) graph.setParent(node.id, node.parentId);
			});
			log.debug("Edges:", data4Layout.edges);
			data4Layout.edges.forEach((edge) => {
				if (edge.start === edge.end) {
					const nodeId = edge.start;
					const specialId1 = nodeId + "---" + nodeId + "---1";
					const specialId2 = nodeId + "---" + nodeId + "---2";
					const node = graph.node(nodeId);
					graph.setNode(specialId1, {
						domId: specialId1,
						id: specialId1,
						parentId: node.parentId,
						labelStyle: "",
						label: "",
						padding: 0,
						shape: "labelRect",
						style: "",
						width: 10,
						height: 10
					});
					graph.setParent(specialId1, node.parentId);
					graph.setNode(specialId2, {
						domId: specialId2,
						id: specialId2,
						parentId: node.parentId,
						labelStyle: "",
						padding: 0,
						shape: "labelRect",
						label: "",
						style: "",
						width: 10,
						height: 10
					});
					graph.setParent(specialId2, node.parentId);
					const edge1 = structuredClone(edge);
					const edgeMid = structuredClone(edge);
					const edge2 = structuredClone(edge);
					edge1.label = "";
					edge1.arrowTypeEnd = "none";
					edge1.id = nodeId + "-cyclic-special-1";
					edgeMid.arrowTypeStart = "none";
					edgeMid.arrowTypeEnd = "none";
					edgeMid.id = nodeId + "-cyclic-special-mid";
					edge2.label = "";
					if (node.isGroup) {
						edge1.fromCluster = nodeId;
						edge2.toCluster = nodeId;
					}
					edge2.id = nodeId + "-cyclic-special-2";
					edge2.arrowTypeStart = "none";
					graph.setEdge(nodeId, specialId1, edge1, nodeId + "-cyclic-special-0");
					graph.setEdge(specialId1, specialId2, edgeMid, nodeId + "-cyclic-special-1");
					graph.setEdge(specialId2, nodeId, edge2, nodeId + "-cyc<lic-special-2");
				} else graph.setEdge(edge.start, edge.end, { ...edge }, edge.id);
			});
			log.warn("Graph at first:", JSON.stringify(write(graph)));
			adjustClustersAndEdges(graph);
			log.warn("Graph after XAX:", JSON.stringify(write(graph)));
			const siteConfig = getConfig2();
			await recursiveRender(element, graph, data4Layout.type, data4Layout.diagramId, void 0, siteConfig);
		}, "render");
	})))();
}
//#endregion
init_dagre_KV5264BT();
export { render };
