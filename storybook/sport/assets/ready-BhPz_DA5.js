const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-dBA6YJJt.js","./rolldown-runtime-DpEnGzO4.js","./client-CwdsHTXv.js","./client-DajfQY-X.js","./react-dom-APvmjNld.js","./App-BJ8EhoWL.js","./preload-helper-Dd0jen5G.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./App-C7_YSXJH.css"])))=>i.map(i=>d[i]);
import { n as __esmMin, o as __toESM } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Et as init_types, Tt as handler } from "./iframe-DG6UCJRm.js";
// ../../core/blong-browser/orchestrator/portal/ready.ts
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
					__vitePreload(() => import("./react-dBA6YJJt.js").then((n) => /* @__PURE__ */ __toESM(n.t(), 1)), __vite__mapDeps([0,1]), import.meta.url),
					__vitePreload(() => import("./client-CwdsHTXv.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1)), __vite__mapDeps([2,3,1,0,4]), import.meta.url),
					__vitePreload(() => import("./App-BJ8EhoWL.js").then((n) => (n.n(), n.t)), __vite__mapDeps([5,1,6,0,7,8,9,4,10]), import.meta.url)
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
init_ready();
export { ready_default as default };
