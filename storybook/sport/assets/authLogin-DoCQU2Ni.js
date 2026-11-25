const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./appStore-dUXbUZgf.js","./rolldown-runtime-DpEnGzO4.js","./react-dBA6YJJt.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { Et as init_types, Tt as handler } from "./iframe-DG6UCJRm.js";
// ../../core/blong-browser/orchestrator/auth/authLogin.ts
var authLogin_default;
function init_authLogin() {
	return (init_authLogin = __esmMin((() => {
		init_types();
		init_preload_helper();
		authLogin_default = handler(({ handler: { loginTokenCreate, storageTokenSet, storagePermissionsSet } }) => async function authLogin(params, $meta) {
			try {
				const result = await loginTokenCreate({
					username: params.username,
					password: params.password
				}, $meta);
				if (!result?.access_token) this.signal?.browserLoginTokenMissing?.({ response: JSON.stringify(result)?.slice(0, 300) });
				if (!result?.access_token) return {
					step: "credentials",
					error: "No token returned"
				};
				await storageTokenSet({ token: result.access_token }, $meta);
				if (result.permissions) await storagePermissionsSet({ permissions: result.permissions }, $meta);
				const { useAppStore } = await __vitePreload(async () => {
					const { useAppStore } = await import("./appStore-dUXbUZgf.js").then((n) => (n.n(), n.t));
					return { useAppStore };
				}, __vite__mapDeps([0,1,2]), import.meta.url);
				const store = useAppStore.getState();
				store.setToken(result.access_token);
				if (result.permissions) store.setPermissions(typeof result.permissions === "boolean" ? result.permissions : Object.fromEntries(result.permissions.map((p) => [p, true])));
				if (result.profile) {
					store.setProfile(result.profile);
					const language = result.profile.language;
					if (language) await store.languageActivate(language);
				}
				return {
					step: "success",
					token: result.access_token
				};
			} catch (err) {
				const typed = err;
				this.signal?.browserLoginCallFailed?.({
					errorType: typed?.type ?? "error",
					errorMessage: typed?.message ?? String(err)
				});
				if (typed?.type === "error.login.otp.required") return { step: "otp" };
				if (typed?.type === "error.login.password.change") return { step: "newPassword" };
				return {
					step: "credentials",
					error: typed?.message ?? "Login failed"
				};
			}
		});
	})))();
}
init_authLogin();
export { authLogin_default as default };
