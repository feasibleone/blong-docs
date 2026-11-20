const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./gatewayTestRunPage-I8KJWSTQ.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-BeXqXP1l.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-D5MtwBLZ.js","./browser-BYUjCXlM.js","./iframe-B4ggmZbP.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { _t as init_types, gt as handler } from "./iframe-D5MtwBLZ.js";
// ../blong-gateway/browser/orchestrator/component/gatewayTestRun.ts
var gatewayTestRun_default;
function init_gatewayTestRun() {
	return (init_gatewayTestRun = __esmMin((() => {
		init_types();
		init_preload_helper();
		gatewayTestRun_default = handler(function gatewayTestRun() {
			return { "gateway.test.run": async () => ({
				title: "Test runs",
				icon: "pi pi-play",
				component: async () => {
					const { TestRunGatewayPage } = await __vitePreload(async () => {
						const { TestRunGatewayPage } = await import("./gatewayTestRunPage-I8KJWSTQ.js");
						return { TestRunGatewayPage };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url);
					return TestRunGatewayPage;
				}
			}) };
		});
	})))();
}
init_gatewayTestRun();
export { gatewayTestRun_default as default };
