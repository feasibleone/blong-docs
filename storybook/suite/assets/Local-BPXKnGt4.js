import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _n as init_types, mn as Internal } from "./iframe-Dd4aRJs7.js";
// ../../core/blong-gogo/src/Local.ts
var Local;
function init_Local() {
	return (init_Local = __esmMin((() => {
		init_types();
		Local = class extends Internal {
			#mapLocal = {};
			_localRegister(namespace, name, method) {
				const local = this.#mapLocal[namespace + "." + name];
				if (local) local.method = method;
				else this.#mapLocal[namespace + "." + name] = { method };
			}
			register(methods, namespace) {
				if (methods instanceof Array) methods.forEach((fn) => {
					if (fn instanceof Function && fn.name) this._localRegister(namespace, fn.name, fn);
				});
				else Object.keys(methods).forEach((key) => {
					if (methods[key] instanceof Function) this._localRegister(namespace, key, methods[key].bind(methods));
				});
			}
			_localUnregister(namespace, name) {
				delete this.#mapLocal[namespace + "." + name];
			}
			unregister(methods, namespace) {
				methods.forEach((fn) => this._localUnregister(namespace, fn));
			}
			get(name) {
				return this.#mapLocal[name];
			}
		};
	})))();
}
init_Local();
export { Local as default };
