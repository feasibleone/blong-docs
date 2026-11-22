import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { at as init_types, rt as adapter } from "./iframe-CFJfMZ3i.js";
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
