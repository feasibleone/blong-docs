const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accessTestRunPage-CPUpF7KB.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-j-lPdz5p.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-D5_otGjj.js","./browser-BYUjCXlM.js","./iframe-Bk4Mxfji.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Ct as handler, wt as init_types } from "./iframe-D5_otGjj.js";
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
						const { AccessTestRunPage } = await import("./accessTestRunPage-CPUpF7KB.js");
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
