import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { Ft as init_chunk_X3CZISLH, It as log } from "./src-I6ywMk2o.js";
import { d as handleUndefinedAttr, f as init_chunk_6MUBBAK2 } from "./chunk-6MUBBAK2-DKYQU0dq.js";
import { c as shapes, r as init_chunk_AXFCVDMN } from "./chunk-AXFCVDMN-DPDnzKGI.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-LEVMRMFU.mjs
async function insertNode(elem, node, renderOptions) {
	let newEl;
	let el;
	if (node.shape === "rect") {
		if (node.rx && node.ry) node.shape = "roundedRect";
		else node.shape = "squareRect";
	}
	const shapeHandler = node.shape ? shapes[node.shape] : void 0;
	if (!shapeHandler) throw new Error(`No such shape: ${node.shape}. Please check your syntax.`);
	if (node.link) {
		let target;
		if (renderOptions.config.securityLevel === "sandbox") target = "_top";
		else if (node.linkTarget) target = node.linkTarget || "_blank";
		newEl = elem.insert("svg:a").attr("xlink:href", node.link).attr("target", target ?? null);
		el = await shapeHandler(newEl, node, renderOptions);
	} else {
		el = await shapeHandler(elem, node, renderOptions);
		newEl = el;
	}
	newEl.attr("data-look", handleUndefinedAttr(node.look));
	if (node.tooltip) el.attr("title", node.tooltip);
	nodeElems.set(node.id, newEl);
	if (node.haveCallback) newEl.attr("class", newEl.attr("class") + " clickable");
	return newEl;
}
var getSubGraphTitleMargins, nodeElems, setNodeElem, clear, positionNode;
function init_chunk_LEVMRMFU() {
	return (init_chunk_LEVMRMFU = __esmMin((() => {
		init_chunk_AXFCVDMN();
		init_chunk_6MUBBAK2();
		init_chunk_X3CZISLH();
		init_chunk_Y2CYZVJY();
		getSubGraphTitleMargins = /* @__PURE__ */ __name(({ flowchart }) => {
			const subGraphTitleTopMargin = flowchart?.subGraphTitleMargin?.top ?? 0;
			const subGraphTitleBottomMargin = flowchart?.subGraphTitleMargin?.bottom ?? 0;
			return {
				subGraphTitleTopMargin,
				subGraphTitleBottomMargin,
				subGraphTitleTotalMargin: subGraphTitleTopMargin + subGraphTitleBottomMargin
			};
		}, "getSubGraphTitleMargins");
		nodeElems = /* @__PURE__ */ new Map();
		__name(insertNode, "insertNode");
		setNodeElem = /* @__PURE__ */ __name((elem, node) => {
			nodeElems.set(node.id, elem);
		}, "setNodeElem");
		clear = /* @__PURE__ */ __name(() => {
			nodeElems.clear();
		}, "clear");
		positionNode = /* @__PURE__ */ __name((node) => {
			const el = nodeElems.get(node.id);
			log.trace("Transforming node", node.diff, node, "translate(" + (node.x - node.width / 2 - 5) + ", " + node.width / 2 + ")");
			const padding = 8;
			const diff = node.diff || 0;
			if (node.clusterNode) el.attr("transform", "translate(" + (node.x + diff - node.width / 2) + ", " + (node.y - node.height / 2 - padding) + ")");
			else el.attr("transform", "translate(" + node.x + ", " + node.y + ")");
			return diff;
		}, "positionNode");
	})))();
}
export { positionNode as a, insertNode as i, getSubGraphTitleMargins as n, setNodeElem as o, init_chunk_LEVMRMFU as r, clear as t };
