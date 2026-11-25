import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-JWPE2WC7.mjs
function populateCommonDb(ast, db) {
	if (ast.accDescr) db.setAccDescription?.(ast.accDescr);
	if (ast.accTitle) db.setAccTitle?.(ast.accTitle);
	if (ast.title) db.setDiagramTitle?.(ast.title);
}
function init_chunk_JWPE2WC7() {
	return (init_chunk_JWPE2WC7 = __esmMin((() => {
		init_chunk_Y2CYZVJY();
		__name(populateCommonDb, "populateCommonDb");
	})))();
}
export { populateCommonDb as n, init_chunk_JWPE2WC7 as t };
