import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Kt as handler, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-browser/orchestrator/auth/authGoogleRedirect.ts
/**
* Fetch the client-safe Google OAuth config from the backend (`access.google.get`).
*
* The gateway exposes it as a plain, unauthenticated JSON-RPC endpoint
* (`auth: false`, no MLE), so the browser can fetch it with a plain `fetch()`
* before any session token exists.  Returns `undefined` when the backend is
* unreachable or misconfigured, letting callers fall back to the local
* `config.google`.
*/
async function fetchGoogleConfig() {
	try {
		const res = await fetch("/rpc/access/google/get", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				jsonrpc: "2.0",
				id: 1,
				method: "access.google.get",
				params: {}
			})
		});
		if (!res.ok) return void 0;
		const body = await res.json();
		return body?.result?.clientId ? body.result : void 0;
	} catch {
		return;
	}
}
/**
* Default redirect URI — the SPA's OAuthCallback route relative to the current
* origin/base path (e.g. `http://host/s/oauth/callback`).  Used only when no
* redirect URI is configured.
*/
function defaultRedirectUri() {
	if (typeof window === "undefined") return void 0;
	const { origin, pathname } = window.location;
	return `${origin}${pathname.endsWith("/") ? pathname : `${pathname}/`}oauth/callback`;
}
var authGoogleRedirect_default;
function init_authGoogleRedirect() {
	return (init_authGoogleRedirect = __esmMin((() => {
		init_types();
		authGoogleRedirect_default = handler(({ config }) => async function authGoogleRedirect(_params, _$meta) {
			const local = config?.google ?? {};
			const remote = await fetchGoogleConfig();
			const google = {
				baseUrl: remote?.baseUrl ?? local.baseUrl,
				authorizationEndpoint: remote?.authorizationEndpoint ?? local.authorizationEndpoint,
				clientId: remote?.clientId ?? local.clientId,
				redirectUri: defaultRedirectUri() ?? local.redirectUri ?? remote?.redirectUri,
				scope: local.scope ?? remote?.scope
			};
			if (!google.baseUrl || !google.clientId || !google.redirectUri) throw new Error("Google login is not configured");
			const base = google.baseUrl.endsWith("/") ? google.baseUrl.slice(0, -1) : google.baseUrl;
			const url = new URL(google.authorizationEndpoint ?? `${base}/authorize`);
			url.searchParams.set("client_id", google.clientId);
			url.searchParams.set("redirect_uri", google.redirectUri);
			url.searchParams.set("response_type", "code");
			url.searchParams.set("scope", google.scope ?? "openid email profile");
			url.searchParams.set("state", Math.random().toString(36).slice(2));
			if (typeof window !== "undefined") window.location.href = url.toString();
			return { url: url.toString() };
		});
	})))();
}
//#endregion
init_authGoogleRedirect();
export { authGoogleRedirect_default as default };
