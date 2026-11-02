import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { It as __name, Lt as init_chunk_AGHRB4JF } from "./src-BZTApG9x.js";
// ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-4BX2VUAB.mjs
function populateCommonDb(ast, db) {
	if (ast.accDescr) db.setAccDescription?.(ast.accDescr);
	if (ast.accTitle) db.setAccTitle?.(ast.accTitle);
	if (ast.title) db.setDiagramTitle?.(ast.title);
}
function init_chunk_4BX2VUAB() {
	return (init_chunk_4BX2VUAB = __esmMin((() => {
		init_chunk_AGHRB4JF();
		__name(populateCommonDb, "populateCommonDb");
	})))();
}
export { populateCommonDb as n, init_chunk_4BX2VUAB as t };
