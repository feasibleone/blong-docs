const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./appStore-p_jHiGC2.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { _n as init_types, gn as handler } from "./iframe-Dd4aRJs7.js";
// ../../core/blong-browser/orchestrator/portal/portalParamsGet.ts
var portalParamsGet_default;
function init_portalParamsGet() {
	return (init_portalParamsGet = __esmMin((() => {
		init_types();
		init_preload_helper();
		portalParamsGet_default = handler(() => async function portalParamsGet() {
			const { useAppStore } = await __vitePreload(async () => {
				const { useAppStore } = await import("./appStore-p_jHiGC2.js").then((n) => (n.n(), n.t));
				return { useAppStore };
			}, __vite__mapDeps([0,1,2]), import.meta.url);
			const state = useAppStore.getState();
			return {
				activeTabId: state.activeTabId,
				tabs: state.tabs
			};
		});
	})))();
}
init_portalParamsGet();
export { portalParamsGet_default as default };
