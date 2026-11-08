const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./sportTestRunPage-DyxsSzl_.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-DX5E6ahH.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-BFtoPRqr.js","./iframe-CqBUs-JR.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, rt as handler } from "./iframe-BFtoPRqr.js";
// browser/orchestrator/component/sportTestRun.ts
var sportTestRun_default;
function init_sportTestRun() {
	return (init_sportTestRun = __esmMin((() => {
		init_types();
		init_preload_helper();
		sportTestRun_default = handler(function sportTestRun() {
			return { "sport.test.run": async () => ({
				title: "Test runs",
				permission: "test.run.start",
				icon: "pi pi-play",
				component: async () => {
					const { TestRunSportPage } = await __vitePreload(async () => {
						const { TestRunSportPage } = await import("./sportTestRunPage-DyxsSzl_.js");
						return { TestRunSportPage };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url);
					return TestRunSportPage;
				}
			}) };
		});
	})))();
}
init_sportTestRun();
export { sportTestRun_default as default };
