const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Digest-CI79L_1Z.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./inputtext.esm-BsWCZcbt.js","./appStore-8DTFQjf-.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./useRealmData-D3zGTSoh.js","./BlongContext-Gs5GTHA4.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Kt as handler, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-realm/component/blong.digest.component.ts
var blong_digest_component_default;
function init_blong_digest_component() {
	return (init_blong_digest_component = __esmMin((() => {
		init_types();
		init_preload_helper();
		blong_digest_component_default = handler(() => ({ "blong.digest.browse": async () => ({
			title: "Digest",
			permission: "blong.digest.get",
			component: async () => (await __vitePreload(async () => {
				const { Digest } = await import("./Digest-CI79L_1Z.js");
				return { Digest };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]), import.meta.url)).Digest
		}) }));
	})))();
}
//#endregion
init_blong_digest_component();
export { blong_digest_component_default as default };
