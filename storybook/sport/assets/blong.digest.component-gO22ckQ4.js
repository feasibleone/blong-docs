const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Digest-D0tO2Ewk.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./inputtext.esm-Da2nlmPp.js","./appStore-p_jHiGC2.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./useRealmData-BcUo2EyB.js","./BlongContext-Cb6PlRk2.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { _n as init_types, gn as handler } from "./iframe-BHvXl2EW.js";
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
				const { Digest } = await import("./Digest-D0tO2Ewk.js");
				return { Digest };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]), import.meta.url)).Digest
		}) }));
	})))();
}
init_blong_digest_component();
export { blong_digest_component_default as default };
