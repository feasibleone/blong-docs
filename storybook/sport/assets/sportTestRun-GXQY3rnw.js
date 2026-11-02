const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./sportTestRunPage-3j7-Gsnp.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./BlongContext-Cb6PlRk2.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./Deck-BZl42JI3.js","./dropdownRegistry-4YvbG02q.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./iframe-BHvXl2EW.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./Deck-DVlB4hMN.css","./executor-DsudTi-N.js","./sportTestRunPage-Dqw01_BP.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { _n as init_types, gn as handler } from "./iframe-BHvXl2EW.js";
// browser/orchestrator/component/sportTestRun.ts
var sportTestRun_default;
function init_sportTestRun() {
	return (init_sportTestRun = __esmMin((() => {
		init_types();
		init_preload_helper();
		sportTestRun_default = handler(function sportTestRun() {
			return { "sport.test.run": async () => ({
				title: "Test runs",
				icon: "pi pi-play",
				component: async () => {
					const { TestRunSportPage } = await __vitePreload(async () => {
						const { TestRunSportPage } = await import("./sportTestRunPage-3j7-Gsnp.js");
						return { TestRunSportPage };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), import.meta.url);
					return TestRunSportPage;
				}
			}) };
		});
	})))();
}
init_sportTestRun();
export { sportTestRun_default as default };
