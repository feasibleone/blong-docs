import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { wt as init_types, xt as Internal } from "./iframe-Na9SG7k6.js";
// ../../core/blong-gogo/src/Port.ts
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
init_Port();
export { Port as default };
