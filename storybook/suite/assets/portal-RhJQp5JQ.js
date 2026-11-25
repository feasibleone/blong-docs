const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./subjectObjectComponent-aB1fp_2l.js","./rolldown-runtime-DpEnGzO4.js","./preload-helper-Dd0jen5G.js","./react-dBA6YJJt.js","./jsx-runtime-WLy6qMFy.js","./portalConfig-BKE9jbZ0.js","./blong-mock-C6tHHb_v.js","./iframe-Na9SG7k6.js","./browser-BFI3d8P5.js","./App-BUQapjGL.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Ot as orchestrator, wt as init_types } from "./iframe-Na9SG7k6.js";
// ../../core/blong-browser/orchestrator/portal.ts
var portal_default;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_types();
		init_preload_helper();
		portal_default = orchestrator(() => ({
			extends: "orchestrator.dispatch",
			activation: { default: {
				namespace: [
					"portal",
					"component",
					"action"
				],
				imports: [
					/\.model$/,
					/\.component$/,
					/\.portal$/,
					/\.action?$/
				]
			} },
			async createHandlers({ handlers, layerApi, kind }) {
				if (kind === "model" && globalThis.window) {
					const { default: component } = await __vitePreload(async () => {
						const { default: component } = await import("./subjectObjectComponent-aB1fp_2l.js");
						return { default: component };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), import.meta.url);
					const models = await Promise.all(Object.values(handlers).map((model) => model()));
					return await component.apply(this, [models, layerApi]);
				}
			}
		}));
	})))();
}
init_portal();
export { portal_default as default };
