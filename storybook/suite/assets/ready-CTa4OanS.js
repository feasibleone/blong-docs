const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-DUVFSkmT.js","./rolldown-runtime-V4kyJ4NV.js","./client-CmqtwRIK.js","./client-RGl1_N_7.js","./react-dom--p2_7awc.js","./App-CXS_vHFU.js","./BlongContext-Gs5GTHA4.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./Portal-BBR7dqjc.js","./iframe-jjCxrJpo.js","./preload-helper-C3TOwP4X.js","./inputtext.esm-BsWCZcbt.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css","./Portal-DzX5eBcp.css","./Theme-DlFJmlox.js","./Theme-DmFyobZp.css","./App-hCcNhA3U.css"])))=>i.map(i=>d[i]);
import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Kt as handler, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-browser/orchestrator/portal/ready.ts
var ready_default;
function init_ready() {
	return (init_ready = __esmMin((() => {
		init_types();
		init_preload_helper();
		ready_default = handler((blong) => {
			const { config: { shouldRender } } = blong;
			return async function ready(params, _$meta) {
				if (!globalThis.window) return;
				const [{ default: React }, { default: ReactDOM }, { App }] = await Promise.all([
					__vitePreload(() => import("./react-DUVFSkmT.js").then((n) => /* @__PURE__ */ __toESM(n.t(), 1)), __vite__mapDeps([0,1]), import.meta.url),
					__vitePreload(() => import("./client-CmqtwRIK.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1)), __vite__mapDeps([2,3,1,0,4]), import.meta.url),
					__vitePreload(() => import("./App-CXS_vHFU.js"), __vite__mapDeps([5,1,0,6,7,8,9,10,11,12,4,13,14,15,16,17,18]), import.meta.url)
				]);
				this.config.context ||= {};
				this.config.context.container = (params) => React.createElement(App, {
					handlerProxy: blong,
					log: this.log,
					...params
				});
				if (shouldRender !== void 0 && !shouldRender) return;
				const rootEl = document.getElementById("root") ?? (() => {
					const el = document.createElement("div");
					el.id = "root";
					document.body.appendChild(el);
					return el;
				})();
				ReactDOM.createRoot(rootEl).render(this.config.context.container(params));
			};
		});
	})))();
}
//#endregion
init_ready();
export { ready_default as default };
