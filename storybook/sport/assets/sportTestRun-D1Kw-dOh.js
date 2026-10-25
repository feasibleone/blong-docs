const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./sportTestRunPage-B327J6Bt.js","./rolldown-runtime-V4kyJ4NV.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./BlongContext-B_6NAJve.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./Deck-B7MkA9kL.js","./browser-vpOcWc6g.js","./inputtext.esm-DVdHXlQv.js","./react-dom--p2_7awc.js","./primereact-_rYrCq5a.js","./datatable.esm-CRrgT_ub.js","./Deck-DVlB4hMN.css","./executor-DV0RacEh.js","./iframe-DxBhgsxq.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./__vite-browser-external-bwQQhMfC.js","./attachable-B3-ly0Fu.js","./iframe-Dy8lWZD5.css","./sportTestRunPage-Dqw01_BP.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { J as init_types, q as handler } from "./iframe-DxBhgsxq.js";
//#region browser/orchestrator/component/sportTestRun.ts
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
						const { TestRunSportPage } = await import("./sportTestRunPage-B327J6Bt.js");
						return { TestRunSportPage };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]), import.meta.url);
					return TestRunSportPage;
				}
			}) };
		});
	})))();
}
//#endregion
init_sportTestRun();
export { sportTestRun_default as default };
