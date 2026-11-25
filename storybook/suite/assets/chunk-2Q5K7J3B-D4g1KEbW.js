import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-2Q5K7J3B.mjs
var ImperativeState;
function init_chunk_2Q5K7J3B() {
	return (init_chunk_2Q5K7J3B = __esmMin((() => {
		init_chunk_Y2CYZVJY();
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
export { init_chunk_2Q5K7J3B as n, ImperativeState as t };
