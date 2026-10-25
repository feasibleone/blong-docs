import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, K as adapter } from "./iframe-DXhqEaHK.js";
//#region ../../core/blong-gogo/src/adapter/browser/generic.ts
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
//#endregion
init_generic();
export { generic_default as default };
