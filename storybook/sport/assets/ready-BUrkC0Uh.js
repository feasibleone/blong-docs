const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-DUbJxPEF.js","./rolldown-runtime-wTHAN5bU.js","./client-2MxG6mXo.js","./client-CadlWNf0.js","./react-dom-BZ-DbxSX.js","./App-D8aiJJJR.js","./BlongContext-Cb6PlRk2.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./Portal-BGuopinE.js","./inputtext.esm-Da2nlmPp.js","./iframe-BHvXl2EW.js","./preload-helper-DJ4GxKnf.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./Portal-mt1zC7hf.css","./dropdownRegistry-4YvbG02q.js","./useFeedbackConfig-DIdAJX6Z.js","./SocialLoginButton-6RhozmEL.js","./SocialLoginButton-D5DfaH7a.css","./Theme--7BWFF8x.js","./Theme-DmFyobZp.css","./App-CURYmYKl.css"])))=>i.map(i=>d[i]);
import { n as __esmMin, s as __toESM } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { _n as init_types, gn as handler } from "./iframe-BHvXl2EW.js";
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
					__vitePreload(() => import("./react-DUbJxPEF.js").then((n) => /* @__PURE__ */ __toESM(n.t(), 1)), __vite__mapDeps([0,1]), import.meta.url),
					__vitePreload(() => import("./client-2MxG6mXo.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1)), __vite__mapDeps([2,3,1,0,4]), import.meta.url),
					__vitePreload(() => import("./App-D8aiJJJR.js"), __vite__mapDeps([5,1,0,6,7,8,9,10,4,11,12,13,14,15,16,17,18,19,20,21,22]), import.meta.url)
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
