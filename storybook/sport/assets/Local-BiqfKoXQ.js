import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { G as Internal, J as init_types } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-gogo/src/Local.ts
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
//#endregion
init_Local();
export { Local as default };
