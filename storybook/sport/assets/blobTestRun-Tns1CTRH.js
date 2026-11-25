const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./blobTestRunPage-Bk1QfqPQ.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js","./App-BJ8EhoWL.js","./preload-helper-Dd0jen5G.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-DG6UCJRm.js","./browser-BFI3d8P5.js","./iframe-W-GhGhIc.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Et as init_types, Tt as handler } from "./iframe-DG6UCJRm.js";
// ../blong-blob/browser/orchestrator/component/blobTestRun.ts
var blobTestRun_default;
function init_blobTestRun() {
	return (init_blobTestRun = __esmMin((() => {
		init_types();
		init_preload_helper();
		blobTestRun_default = handler(function blobTestRun() {
			return { "blob.test.run": async () => ({
				title: "Test runs",
				icon: "pi pi-play",
				component: async () => {
					const { TestRunBlobPage } = await __vitePreload(async () => {
						const { TestRunBlobPage } = await import("./blobTestRunPage-Bk1QfqPQ.js");
						return { TestRunBlobPage };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url);
					return TestRunBlobPage;
				}
			}) };
		});
	})))();
}
init_blobTestRun();
export { blobTestRun_default as default };
