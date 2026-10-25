import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { S as select_default, T as init_chunk_AGHRB4JF, t as init_src, w as __name } from "./src-sxmhTtP3.js";
import { A as init_chunk_ICPOFSXX, b as getConfig2 } from "./chunk-ICPOFSXX-BJUpm1HO.js";
//#region ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-426QAEUC.mjs
var selectSvgElement;
function init_chunk_426QAEUC() {
	return (init_chunk_426QAEUC = __esmMin((() => {
		init_chunk_ICPOFSXX();
		init_chunk_AGHRB4JF();
		init_src();
		selectSvgElement = /* @__PURE__ */ __name((id) => {
			const { securityLevel } = getConfig2();
			let root = select_default("body");
			if (securityLevel === "sandbox") {
				const doc = select_default(`#i${id}`).node()?.contentDocument ?? document;
				root = select_default(doc.body);
			}
			return root.select(`#${id}`);
		}, "selectSvgElement");
	})))();
}
//#endregion
export { selectSvgElement as n, init_chunk_426QAEUC as t };
