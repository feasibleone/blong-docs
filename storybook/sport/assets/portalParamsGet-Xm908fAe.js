const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./appStore-Cfk3hkpQ.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { J as init_types, q as handler } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-browser/orchestrator/portal/portalParamsGet.ts
var portalParamsGet_default;
function init_portalParamsGet() {
	return (init_portalParamsGet = __esmMin((() => {
		init_types();
		init_preload_helper();
		portalParamsGet_default = handler(() => async function portalParamsGet() {
			const { useAppStore } = await __vitePreload(async () => {
				const { useAppStore } = await import("./appStore-Cfk3hkpQ.js").then((n) => (n.n(), n.t));
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
//#endregion
init_portalParamsGet();
export { portalParamsGet_default as default };
