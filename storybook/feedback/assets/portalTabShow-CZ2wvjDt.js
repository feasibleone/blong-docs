const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./appStore-p_jHiGC2.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { _n as init_types, gn as handler } from "./iframe-IrD74JhJ.js";
// ../../core/blong-browser/orchestrator/portal/portalTabShow.ts
var portalTabShow_default;
function init_portalTabShow() {
	return (init_portalTabShow = __esmMin((() => {
		init_types();
		init_preload_helper();
		portalTabShow_default = handler(({ handler }) => async function portalTabShow({ action, params: actionParams = {} }, $meta) {
			const componentHandler = handler[action];
			const title = (componentHandler ? await componentHandler(actionParams, {
				...$meta,
				method: action
			}) : null)?.title ?? action;
			const { useAppStore } = await __vitePreload(async () => {
				const { useAppStore } = await import("./appStore-p_jHiGC2.js").then((n) => (n.n(), n.t));
				return { useAppStore };
			}, __vite__mapDeps([0,1,2]), import.meta.url);
			useAppStore.getState().openTab({
				id: `${action}:${JSON.stringify(actionParams)}`,
				actionName: action,
				params: actionParams,
				title
			});
			return {
				action,
				title
			};
		});
	})))();
}
init_portalTabShow();
export { portalTabShow_default as default };
