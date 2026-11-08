const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./selfRegistrationPage-Bef5Ia-X.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./App-DX5E6ahH.js","./preload-helper-DJ4GxKnf.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-BFtoPRqr.js","./iframe-CqBUs-JR.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, rt as handler } from "./iframe-BFtoPRqr.js";
// ../blong-party/browser/orchestrator/component/selfRegistration.ts
var selfRegistration_default;
function init_selfRegistration() {
	return (init_selfRegistration = __esmMin((() => {
		init_types();
		init_preload_helper();
		selfRegistration_default = handler(function userRegistration() {
			return { "user.selfRegistration": async () => ({
				title: "Register",
				component: async () => (await __vitePreload(async () => {
					const { SelfRegistrationPage } = await import("./selfRegistrationPage-Bef5Ia-X.js");
					return { SelfRegistrationPage };
				}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url)).SelfRegistrationPage
			}) };
		});
	})))();
}
init_selfRegistration();
export { selfRegistration_default as default };
