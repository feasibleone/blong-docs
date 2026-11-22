const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./logViewerPage-R8jaIe3A.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./App-j-lPdz5p.js","./preload-helper-DJ4GxKnf.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-D5_otGjj.js","./browser-BYUjCXlM.js","./iframe-Bk4Mxfji.css","./logViewerPage-DpUP8ug6.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Ct as handler, wt as init_types } from "./iframe-D5_otGjj.js";
// ../../realm/blong-viewer/browser/orchestrator/component/viewerLog.ts
var viewerLog_default;
function init_viewerLog() {
	return (init_viewerLog = __esmMin((() => {
		init_types();
		init_preload_helper();
		viewerLog_default = handler(() => ({ async "viewer.log"() {
			return {
				title: "Logs",
				permission: "viewer.entry.find",
				icon: "pi pi-list",
				component: async () => {
					const { LogViewerPage } = await __vitePreload(async () => {
						const { LogViewerPage } = await import("./logViewerPage-R8jaIe3A.js");
						return { LogViewerPage };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url);
					return LogViewerPage;
				}
			};
		} }));
	})))();
}
init_viewerLog();
export { viewerLog_default as default };
