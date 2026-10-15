import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Wt as Internal, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-gogo/src/Port.ts
var UtPort, Port;
function init_Port() {
	return (init_Port = __esmMin((() => {
		init_types();
		UtPort = () => class Port extends Internal {
			findHandler(_) {
				return null;
			}
		};
		Port = class extends Internal {
			constructor() {
				super();
				const result = UtPort();
				const findHandler = result.prototype.findHandler;
				result.prototype.findHandler = function(name) {
					return findHandler.call(this, name.replaceAll(".", "").toLowerCase());
				};
				return result;
			}
		};
	})))();
}
//#endregion
init_Port();
export { Port as default };
