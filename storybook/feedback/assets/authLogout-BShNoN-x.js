const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./appStore-dUXbUZgf.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { at as init_types, it as handler } from "./iframe-DRWtcwdA.js";
// ../../core/blong-browser/orchestrator/auth/authLogout.ts
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
				const { useAppStore } = await import("./appStore-dUXbUZgf.js").then((n) => (n.n(), n.t));
				return { useAppStore };
			}, __vite__mapDeps([0,1,2]), import.meta.url);
			useAppStore.getState().logout();
		});
	})))();
}
init_authLogout();
export { authLogout_default as default };
