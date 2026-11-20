const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./blobTestRunPage-Ca9HeRSO.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./App-BeXqXP1l.js","./preload-helper-DJ4GxKnf.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-D5MtwBLZ.js","./browser-BYUjCXlM.js","./iframe-B4ggmZbP.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { _t as init_types, gt as handler } from "./iframe-D5MtwBLZ.js";
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
						const { TestRunBlobPage } = await import("./blobTestRunPage-Ca9HeRSO.js");
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
