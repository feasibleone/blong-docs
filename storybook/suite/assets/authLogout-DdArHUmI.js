const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./appStore-Cfk3hkpQ.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { J as init_types, q as handler } from "./iframe-DXhqEaHK.js";
//#region ../../core/blong-browser/orchestrator/auth/authLogout.ts
var authLogout_default;
function init_authLogout() {
	return (init_authLogout = __esmMin((() => {
		init_types();
		init_preload_helper();
		authLogout_default = handler(({ handler: { storageTokenDelete, loginTokenRevoke } }) => async function authLogout(_params, $meta) {
			try {
				await loginTokenRevoke({}, $meta);
			} catch {}
			await storageTokenDelete({}, $meta);
			const { useAppStore } = await __vitePreload(async () => {
				const { useAppStore } = await import("./appStore-Cfk3hkpQ.js").then((n) => (n.n(), n.t));
				return { useAppStore };
			}, __vite__mapDeps([0,1,2]), import.meta.url);
			useAppStore.getState().logout();
		});
	})))();
}
//#endregion
init_authLogout();
export { authLogout_default as default };
