import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/sizeCapture-INFHLROL.mjs
function getCaptureGlobal() {
	if (typeof globalThis === "undefined") return;
	return globalThis;
}
function shouldCaptureSizes() {
	return Boolean(getCaptureGlobal()?.mermaidCaptureSizes);
}
function capturedFromLocation() {
	if (typeof location === "undefined") return "browser-dev";
	return `${location.pathname}${location.search}`;
}
function emitCapturedSizes(captured, element) {
	const g = getCaptureGlobal();
	if (!g) return;
	const domNode = element.node();
	const svgId = ((domNode && "ownerSVGElement" in domNode ? domNode.ownerSVGElement : null) ?? domNode)?.id ?? "(unknown)";
	g.mermaidCapturedSizes ??= [];
	const entry = {
		svgId,
		sizes: captured
	};
	g.mermaidCapturedSizes.push(entry);
	g.mermaidLastCapturedSizes = entry;
}
function captureNodeSizes(element, data4Layout) {
	const nodes = [];
	for (const node of data4Layout.nodes) {
		if (node.isGroup) continue;
		nodes.push({
			id: node.id,
			width: node.width ?? 0,
			height: node.height ?? 0
		});
	}
	if (nodes.length === 0) return;
	emitCapturedSizes({
		metadata: {
			captureVersion: DDLT_SIZE_CAPTURE_VERSION,
			capturedAt: (/* @__PURE__ */ new Date()).toISOString(),
			capturedFrom: capturedFromLocation()
		},
		nodes
	}, element);
}
var DDLT_SIZE_CAPTURE_VERSION;
function init_sizeCapture_INFHLROL() {
	return (init_sizeCapture_INFHLROL = __esmMin((() => {
		init_chunk_Y2CYZVJY();
		DDLT_SIZE_CAPTURE_VERSION = 1;
		__name(getCaptureGlobal, "getCaptureGlobal");
		__name(shouldCaptureSizes, "shouldCaptureSizes");
		__name(capturedFromLocation, "capturedFromLocation");
		__name(emitCapturedSizes, "emitCapturedSizes");
		__name(captureNodeSizes, "captureNodeSizes");
	})))();
}
init_sizeCapture_INFHLROL();
export { captureNodeSizes };
