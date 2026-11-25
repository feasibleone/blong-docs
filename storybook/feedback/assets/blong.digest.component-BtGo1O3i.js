const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Digest-y1pO8Fd_.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js","./jsx-runtime-WLy6qMFy.js","./shell-h_oHnhE9.js","./appStore-dUXbUZgf.js","./react-dom-APvmjNld.js","./iframe-DRWtcwdA.js","./preload-helper-Dd0jen5G.js","./App-BXXuylT2.js","./App-C7_YSXJH.css","./iframe-CGV3BbKH.css","./useRealmData-DxGt1jbX.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { at as init_types, it as handler } from "./iframe-DRWtcwdA.js";
// ../../core/blong-realm/component/blong.digest.component.ts
var blong_digest_component_default;
function init_blong_digest_component() {
	return (init_blong_digest_component = __esmMin((() => {
		init_types();
		init_preload_helper();
		blong_digest_component_default = handler(() => ({ "blong.digest.browse": async () => ({
			title: "Digest",
			permission: "blong.digest.get",
			component: async () => (await __vitePreload(async () => {
				const { Digest } = await import("./Digest-y1pO8Fd_.js");
				return { Digest };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)).Digest
		}) }));
	})))();
}
init_blong_digest_component();
export { blong_digest_component_default as default };
