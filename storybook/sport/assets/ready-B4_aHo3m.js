const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-DUVFSkmT.js","./rolldown-runtime-V4kyJ4NV.js","./client-CmqtwRIK.js","./client-RGl1_N_7.js","./react-dom--p2_7awc.js","./App-qSdh36Uq.js","./BlongContext-B_6NAJve.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./Portal-iR3TbqhV.js","./primereact-_rYrCq5a.js","./Deck-B7MkA9kL.js","./browser-vpOcWc6g.js","./inputtext.esm-DVdHXlQv.js","./Deck-DVlB4hMN.css","./datatable.esm-CRrgT_ub.js","./iframe-DxBhgsxq.js","./preload-helper-C3TOwP4X.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./__vite-browser-external-bwQQhMfC.js","./attachable-B3-ly0Fu.js","./iframe-Dy8lWZD5.css","./Portal-DzX5eBcp.css","./SocialLoginButton-D-HL9k-O.js","./SocialLoginButton-D5DfaH7a.css","./Theme-BV1x5T86.js","./Theme-DmFyobZp.css","./App-CtOy9UfO.css"])))=>i.map(i=>d[i]);
import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { J as init_types, q as handler } from "./iframe-DxBhgsxq.js";
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
					__vitePreload(() => import("./App-qSdh36Uq.js"), __vite__mapDeps([5,1,0,6,7,8,9,10,11,12,13,4,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]), import.meta.url)
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
