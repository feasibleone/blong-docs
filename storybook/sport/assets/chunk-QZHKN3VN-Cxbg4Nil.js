import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { It as __name, Lt as init_chunk_AGHRB4JF } from "./src-BZTApG9x.js";
// ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-QZHKN3VN.mjs
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
export { init_chunk_QZHKN3VN as n, ImperativeState as t };
