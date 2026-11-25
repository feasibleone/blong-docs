const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accessUserProfilePage-BukvMLaj.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js","./App-BJ8EhoWL.js","./preload-helper-Dd0jen5G.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-DG6UCJRm.js","./browser-BFI3d8P5.js","./iframe-W-GhGhIc.css","./accessUserProfilePage-DTR35sM8.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Et as init_types, Tt as handler } from "./iframe-DG6UCJRm.js";
// ../blong-access/browser/orchestrator/component/accessUserProfile.ts
var accessUserProfile_default;
function init_accessUserProfile() {
	return (init_accessUserProfile = __esmMin((() => {
		init_types();
		init_preload_helper();
		accessUserProfile_default = handler(function accessUserProfile() {
			return { "access.user.profile": async () => ({
				title: "Profile",
				component: async () => {
					const { AccessUserProfilePage } = await __vitePreload(async () => {
						const { AccessUserProfilePage } = await import("./accessUserProfilePage-BukvMLaj.js");
						return { AccessUserProfilePage };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url);
					return AccessUserProfilePage;
				}
			}) };
		});
	})))();
}
init_accessUserProfile();
export { accessUserProfile_default as default };
