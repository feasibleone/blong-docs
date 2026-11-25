const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Digest-CZknZ8Nu.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js","./jsx-runtime-WLy6qMFy.js","./shell-h_oHnhE9.js","./appStore-dUXbUZgf.js","./react-dom-APvmjNld.js","./iframe-Na9SG7k6.js","./preload-helper-Dd0jen5G.js","./browser-BFI3d8P5.js","./App-BUQapjGL.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css","./useRealmData-DJI_PYpe.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
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
				const { Digest } = await import("./Digest-CZknZ8Nu.js");
				return { Digest };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url)).Digest
		}) }));
	})))();
}
init_blong_digest_component();
export { blong_digest_component_default as default };
