const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./appStore-Cfk3hkpQ.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { J as init_types, q as handler } from "./iframe-DXhqEaHK.js";
//#region ../../core/blong-browser/orchestrator/auth/authLogin.ts
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
				if (!result?.access_token) this.log?.warn?.({
					$meta: {
						mtid: "event",
						method: "auth.login"
					},
					message: `login response carried no access_token: ${JSON.stringify(result)?.slice(0, 300)}`
				});
				if (!result?.access_token) return {
					step: "credentials",
					error: "No token returned"
				};
				await storageTokenSet({ token: result.access_token }, $meta);
				if (result.permissions) await storagePermissionsSet({ permissions: result.permissions }, $meta);
				const { useAppStore } = await __vitePreload(async () => {
					const { useAppStore } = await import("./appStore-Cfk3hkpQ.js").then((n) => (n.n(), n.t));
					return { useAppStore };
				}, __vite__mapDeps([0,1,2]), import.meta.url);
				const store = useAppStore.getState();
				store.setToken(result.access_token);
				if (result.permissions) store.setPermissions(typeof result.permissions === "boolean" ? result.permissions : Object.fromEntries(result.permissions.map((p) => [p, true])));
				if (result.profile) {
					store.setProfile(result.profile);
					const language = result.profile.language;
					if (language) store.setLanguage(language);
				}
				return {
					step: "success",
					token: result.access_token
				};
			} catch (err) {
				const typed = err;
				this.log?.warn?.({
					$meta: {
						mtid: "event",
						method: "auth.login"
					},
					message: `login call failed: ${typed?.type ?? "error"}: ${typed?.message ?? String(err)}`
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
//#endregion
init_authLogin();
export { authLogin_default as default };
