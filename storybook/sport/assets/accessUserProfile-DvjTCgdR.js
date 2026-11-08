const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accessUserProfilePage-C7UlHJmy.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./App-DX5E6ahH.js","./preload-helper-DJ4GxKnf.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-BFtoPRqr.js","./iframe-CqBUs-JR.css","./accessUserProfilePage-DOU01kBb.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, rt as handler } from "./iframe-BFtoPRqr.js";
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
						const { AccessUserProfilePage } = await import("./accessUserProfilePage-C7UlHJmy.js");
						return { AccessUserProfilePage };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url);
					return AccessUserProfilePage;
				}
			}) };
		});
	})))();
}
init_accessUserProfile();
export { accessUserProfile_default as default };
