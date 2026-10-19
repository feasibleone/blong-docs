const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./appStore-8DTFQjf-.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Kt as handler, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-browser/orchestrator/portal/portalTabClose.ts
var portalTabClose_default;
function init_portalTabClose() {
	return (init_portalTabClose = __esmMin((() => {
		init_types();
		init_preload_helper();
		portalTabClose_default = handler(() => async function portalTabClose({ tabId }) {
			const { useAppStore } = await __vitePreload(async () => {
				const { useAppStore } = await import("./appStore-8DTFQjf-.js").then((n) => (n.n(), n.t));
				return { useAppStore };
			}, __vite__mapDeps([0,1,2]), import.meta.url);
			useAppStore.getState().closeTab(tabId);
			return tabId;
		});
	})))();
}
//#endregion
init_portalTabClose();
export { portalTabClose_default as default };
