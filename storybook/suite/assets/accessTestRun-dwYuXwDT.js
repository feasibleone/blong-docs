const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accessTestRunPage-BhIl84-R.js","./rolldown-runtime-DpEnGzO4.js","./preload-helper-Dd0jen5G.js","./react-dBA6YJJt.js","./App-BUQapjGL.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-Na9SG7k6.js","./browser-BFI3d8P5.js","./iframe-Bk4Mxfji.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
// ../../realm/blong-access/browser/orchestrator/component/accessTestRun.ts
var accessTestRun_default;
function init_accessTestRun() {
	return (init_accessTestRun = __esmMin((() => {
		init_types();
		init_preload_helper();
		accessTestRun_default = handler(function accessTestRun() {
			return { "access.test.run": async () => ({
				title: "Test runs",
				icon: "pi pi-play",
				component: async () => {
					const { AccessTestRunPage } = await __vitePreload(async () => {
						const { AccessTestRunPage } = await import("./accessTestRunPage-BhIl84-R.js");
						return { AccessTestRunPage };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url);
					return AccessTestRunPage;
				}
			}) };
		});
	})))();
}
init_accessTestRun();
export { accessTestRun_default as default };
