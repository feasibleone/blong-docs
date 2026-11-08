const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./subjectObjectComponent-DaOdEQ3_.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./portalConfig-D_F_e55G.js","./blong-mock-CzIXOG2b.js","./iframe-BslwTayt.js","./App-aUJ8LCxO.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-DD0X1HUh.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { J as init_types, Z as orchestrator } from "./iframe-BslwTayt.js";
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
						const { default: component } = await import("./subjectObjectComponent-DaOdEQ3_.js");
						return { default: component };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url);
					const models = await Promise.all(Object.values(handlers).map((model) => model()));
					return await component.apply(this, [models, layerApi]);
				}
			}
		}));
	})))();
}
init_portal();
export { portal_default as default };
