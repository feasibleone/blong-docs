const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./appStore-p_jHiGC2.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, rt as handler } from "./iframe-BFtoPRqr.js";
// ../../core/blong-browser/orchestrator/portal/portalTabClose.ts
var portalTabClose_default;
function init_portalTabClose() {
	return (init_portalTabClose = __esmMin((() => {
		init_types();
		init_preload_helper();
		portalTabClose_default = handler(() => async function portalTabClose({ tabId }) {
			const { useAppStore } = await __vitePreload(async () => {
				const { useAppStore } = await import("./appStore-p_jHiGC2.js").then((n) => (n.n(), n.t));
				return { useAppStore };
			}, __vite__mapDeps([0,1,2]), import.meta.url);
			useAppStore.getState().closeTab(tabId);
			return tabId;
		});
	})))();
}
init_portalTabClose();
export { portalTabClose_default as default };
