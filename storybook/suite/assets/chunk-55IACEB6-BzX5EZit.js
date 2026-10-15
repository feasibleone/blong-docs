import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { S as select_default, T as init_chunk_AGHRB4JF, t as init_src, w as __name } from "./src-D4MYY-mY.js";
//#region ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-55IACEB6.mjs
var getDiagramElement;
function init_chunk_55IACEB6() {
	return (init_chunk_55IACEB6 = __esmMin((() => {
		init_chunk_AGHRB4JF();
		init_src();
		getDiagramElement = /* @__PURE__ */ __name((id, securityLevel) => {
			let sandboxElement;
			if (securityLevel === "sandbox") sandboxElement = select_default("#i" + id);
			return (securityLevel === "sandbox" ? select_default(sandboxElement.nodes()[0].contentDocument.body) : select_default("body")).select(`[id="${id}"]`);
		}, "getDiagramElement");
	})))();
}
//#endregion
export { init_chunk_55IACEB6 as n, getDiagramElement as t };
