import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { T as init_chunk_AGHRB4JF, w as __name } from "./src-D4MYY-mY.js";
import { A as init_chunk_ICPOFSXX } from "./chunk-ICPOFSXX-7_BdXDsq.js";
import { u as init_chunk_5PVQY5BW } from "./chunk-5PVQY5BW-pM_bLo1g.js";
import { i as init_chunk_U2HBQHQK } from "./chunk-U2HBQHQK-BzcRMGlh.js";
import { r as init_chunk_BSJP7CBP } from "./chunk-BSJP7CBP-BorMUaVQ.js";
import { r as init_chunk_ZZ45TVLE } from "./chunk-ZZ45TVLE-BTdk-MvS.js";
import { n as init_chunk_55IACEB6 } from "./chunk-55IACEB6-BzX5EZit.js";
import { t as init_chunk_EDXVE4YY } from "./chunk-EDXVE4YY-DmZVfhKf.js";
import { n as init_chunk_X2U36JSP } from "./chunk-X2U36JSP-Clg7uKXj.js";
import { i as init_chunk_5FUZZQ4R } from "./chunk-5FUZZQ4R-mcp3kHAi.js";
import { n as init_chunk_ENJZ2VHE } from "./chunk-ENJZ2VHE-4BODpzK7.js";
import { a as styles_default, i as stateRenderer_v3_unified_default, n as init_chunk_OYMX7WX6, r as stateDiagram_default, t as StateDB } from "./chunk-OYMX7WX6-DPjOjwhO.js";
import { s as init_chunk_336JU56O } from "./mermaid.core-B5v0-G0M.js";
//#region ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/stateDiagram-v2-QKLJ7IA2.mjs
var diagram;
function init_stateDiagram_v2_QKLJ7IA2() {
	return (init_stateDiagram_v2_QKLJ7IA2 = __esmMin((() => {
		init_chunk_OYMX7WX6();
		init_chunk_55IACEB6();
		init_chunk_EDXVE4YY();
		init_chunk_336JU56O();
		init_chunk_ENJZ2VHE();
		init_chunk_BSJP7CBP();
		init_chunk_5FUZZQ4R();
		init_chunk_ZZ45TVLE();
		init_chunk_X2U36JSP();
		init_chunk_U2HBQHQK();
		init_chunk_5PVQY5BW();
		init_chunk_ICPOFSXX();
		init_chunk_AGHRB4JF();
		diagram = {
			parser: stateDiagram_default,
			get db() {
				return new StateDB(2);
			},
			renderer: stateRenderer_v3_unified_default,
			styles: styles_default,
			init: /* @__PURE__ */ __name((cnf) => {
				if (!cnf.state) cnf.state = {};
				cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
			}, "init")
		};
	})))();
}
//#endregion
init_stateDiagram_v2_QKLJ7IA2();
export { diagram };
