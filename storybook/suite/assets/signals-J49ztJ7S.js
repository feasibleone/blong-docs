import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-wTHAN5bU.js";
import { _ as writeThroughFace, b as contributedVocabularies, f as init_lukaot, g as signalView, p as createRegistry, v as compose } from "./iframe-Dfus02Vk.js";
// ../../core/blong-gogo/src/signals.ts
var signals_exports = /* @__PURE__ */ __exportAll({ attachSignals: () => attachSignals });
/**
* Attach the proxy for one layer's declarations to its port.
*
* An empty list attaches nothing: a port whose layer declared no vocabulary has no `signal`, and
* `this.signal?.x?.()` in its code is then a no-op rather than an error — which is the same degradation
* a realm without the layer gets, and the reason every call site is written with `?.`.
*
* `policy` is the realm's `lukaot.policy` config — the same names, one level up: an operator raises one
* noisy identifier to `debug`, samples a hot path, or switches one signal off, and the code is not
* touched. A key that matches nothing is warned about rather than ignored, because a policy written for
* a signal that was renamed is otherwise a silent no-op the operator keeps believing in.
*/
function attachSignals(port, vocabularies, policy) {
	const composed = [...contributedVocabularies(), ...vocabularies];
	if (composed.length === 0) return void 0;
	const registry = createRegistry(compose(...composed));
	if (policy && Object.keys(policy).length > 0) {
		const unknown = registry.patch(policy);
		if (unknown.length > 0) {
			const warn = port.log?.warn;
			if (typeof warn === "function") warn.call(port.log, { unknown }, `lukaot: policy names no declared signal: ${unknown.join(", ")}`);
		}
	}
	const proxy = signalView(registry, port.write ?? writeThroughFace(port.log));
	port.signal = proxy.vocabulary;
	return proxy;
}
function init_signals() {
	return (init_signals = __esmMin((() => {
		init_lukaot();
	})))();
}
export { signals_exports as n, init_signals as t };
