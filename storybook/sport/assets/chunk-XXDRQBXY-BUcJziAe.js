import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { jt as select_default, t as init_src } from "./src-I6ywMk2o.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-XXDRQBXY.mjs
var getDiagramElement;
function init_chunk_XXDRQBXY() {
	return (init_chunk_XXDRQBXY = __esmMin((() => {
		init_chunk_Y2CYZVJY();
		init_src();
		getDiagramElement = /* @__PURE__ */ __name((id, securityLevel) => {
			let sandboxElement;
			if (securityLevel === "sandbox") sandboxElement = select_default("#i" + id);
			return (securityLevel === "sandbox" ? select_default(sandboxElement.nodes()[0].contentDocument.body) : select_default("body")).select(`[id="${id}"]`);
		}, "getDiagramElement");
	})))();
}
export { init_chunk_XXDRQBXY as n, getDiagramElement as t };
