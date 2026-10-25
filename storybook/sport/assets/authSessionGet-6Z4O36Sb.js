const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./appStore-Cfk3hkpQ.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { J as init_types, q as handler } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-browser/orchestrator/auth/authSessionGet.ts
var authSessionGet_default;
function init_authSessionGet() {
	return (init_authSessionGet = __esmMin((() => {
		init_types();
		init_preload_helper();
		authSessionGet_default = handler(({ handler: { loginTokenRestore } }) => async function authSessionGet(_params, $meta) {
			try {
				const result = await loginTokenRestore({}, $meta);
				if (!result?.access_token) return { authenticated: false };
				const { useAppStore } = await __vitePreload(async () => {
					const { useAppStore } = await import("./appStore-Cfk3hkpQ.js").then((n) => (n.n(), n.t));
					return { useAppStore };
				}, __vite__mapDeps([0,1,2]), import.meta.url);
				const store = useAppStore.getState();
				store.setToken(result.access_token);
				if (result.permissions) store.setPermissions(typeof result.permissions === "boolean" ? result.permissions : Object.fromEntries(result.permissions.map((p) => [p, true])));
				if (result.profile) store.setProfile(result.profile);
				const language = result.profile.language;
				if (language) store.setLanguage(language);
				return {
					authenticated: true,
					token: result.access_token,
					permissions: typeof result.permissions === "boolean" ? void 0 : result.permissions
				};
			} catch {
				return { authenticated: false };
			}
		});
	})))();
}
//#endregion
init_authSessionGet();
export { authSessionGet_default as default };
