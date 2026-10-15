const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./appStore-8DTFQjf-.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Kt as handler, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-browser/orchestrator/auth/authGoogleLogin.ts
var authGoogleLogin_default;
function init_authGoogleLogin() {
	return (init_authGoogleLogin = __esmMin((() => {
		init_types();
		init_preload_helper();
		authGoogleLogin_default = handler(({ handler: { loginTokenExchange, storageTokenSet, storagePermissionsSet } }) => async function authGoogleLogin(params, $meta) {
			try {
				const result = await loginTokenExchange({
					provider: "google",
					code: params.code,
					state: params.state,
					redirectUri: params.redirectUri
				}, $meta);
				if (!result?.access_token) return {
					step: "credentials",
					error: "No token returned"
				};
				await storageTokenSet({ token: result.access_token }, $meta);
				if (result.permissions) await storagePermissionsSet({ permissions: result.permissions }, $meta);
				const { useAppStore } = await __vitePreload(async () => {
					const { useAppStore } = await import("./appStore-8DTFQjf-.js").then((n) => (n.n(), n.t));
					return { useAppStore };
				}, __vite__mapDeps([0,1,2]), import.meta.url);
				const store = useAppStore.getState();
				store.setToken(result.access_token);
				if (result.permissions) store.setPermissions(typeof result.permissions === "boolean" ? result.permissions : Object.fromEntries(result.permissions.map((p) => [p, true])));
				return {
					step: "success",
					token: result.access_token
				};
			} catch (err) {
				return {
					step: "credentials",
					error: err?.message ?? "Google login failed"
				};
			}
		});
	})))();
}
//#endregion
init_authGoogleLogin();
export { authGoogleLogin_default as default };
