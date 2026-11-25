const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./selfRegistrationPage-Cl5RUZVl.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js","./App-BJ8EhoWL.js","./preload-helper-Dd0jen5G.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-DG6UCJRm.js","./browser-BFI3d8P5.js","./iframe-W-GhGhIc.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Et as init_types, Tt as handler } from "./iframe-DG6UCJRm.js";
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
					const { SelfRegistrationPage } = await import("./selfRegistrationPage-Cl5RUZVl.js");
					return { SelfRegistrationPage };
				}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)).SelfRegistrationPage
			}) };
		});
	})))();
}
init_selfRegistration();
export { selfRegistration_default as default };
