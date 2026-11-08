import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { it as init_types, nt as adapter } from "./iframe-BFtoPRqr.js";
// ../../core/blong-gogo/src/adapter/browser/generic.ts
var generic_default;
function init_generic() {
	return (init_generic = __esmMin((() => {
		init_types();
		generic_default = adapter(() => {
			return {
				activation: { default: { type: "generic" } },
				start() {
					super.connect();
					return super.start();
				}
			};
		});
	})))();
}
init_generic();
export { generic_default as default };
