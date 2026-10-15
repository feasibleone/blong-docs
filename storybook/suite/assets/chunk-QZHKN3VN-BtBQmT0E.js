import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { T as init_chunk_AGHRB4JF, w as __name } from "./src-D4MYY-mY.js";
//#region ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-QZHKN3VN.mjs
var ImperativeState;
function init_chunk_QZHKN3VN() {
	return (init_chunk_QZHKN3VN = __esmMin((() => {
		init_chunk_AGHRB4JF();
		ImperativeState = class {
			/**
			* @param init - Function that creates the default state.
			*/
			constructor(init) {
				this.init = init;
				this.records = this.init();
			}
			static {
				__name(this, "ImperativeState");
			}
			reset() {
				this.records = this.init();
			}
		};
	})))();
}
//#endregion
export { init_chunk_QZHKN3VN as n, ImperativeState as t };
