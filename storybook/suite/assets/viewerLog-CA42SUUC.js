const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./logViewerPage-Eoy2Q0Yb.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js","./App-BUQapjGL.js","./preload-helper-Dd0jen5G.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-Na9SG7k6.js","./browser-BFI3d8P5.js","./iframe-Bk4Mxfji.css","./logViewerPage-DpUP8ug6.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
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
						const { LogViewerPage } = await import("./logViewerPage-Eoy2Q0Yb.js");
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
