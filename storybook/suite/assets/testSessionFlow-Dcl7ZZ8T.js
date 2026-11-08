import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { nt as init_types, tt as handler } from "./iframe-Kwn0esJL.js";
// ../../realm/blong-access/browser/test/test/testSessionFlow.ts
/**
* Extract the HTTP status code from an error thrown by the handler proxy
* (JSON-RPC codec or MLE errorReceive path).
*/
function getHttpStatus(err) {
	const e = err;
	return e.res?.statusCode ?? e.statusCode ?? e.params?.code;
}
var testSessionFlow_default;
function init_testSessionFlow() {
	return (init_testSessionFlow = __esmMin((() => {
		init_types();
		testSessionFlow_default = handler(({ lib: { group }, handler: { loginTokenCreate, loginTokenRefresh, loginTokenRestore, accessTestPrivate } }) => ({ testSessionFlow: ({ name = "session flow browser", hasSession = false } = {}) => group(name)([
			async function login(assert, { $meta }) {
				const result = await loginTokenCreate({
					username: "testUser",
					password: "testPassword"
				}, $meta);
				assert.ok(result.access_token, "login returns an access token");
				assert.ok(result.refresh_token, "login returns a refresh token");
				assert.ok(result.session_id, "login returns a session id");
				return result;
			},
			async function refresh(assert, { $meta, login }) {
				const t = await login;
				const refreshed = await loginTokenRefresh({ refreshToken: t.refresh_token }, $meta);
				assert.ok(refreshed.access_token, "refresh returns a new access token");
				assert.ok(refreshed.refresh_token, "refresh returns a new refresh token");
				assert.equal(refreshed.session_id, t.session_id, "session preserved on refresh");
				return refreshed;
			},
			async function protectedCall(assert, { $meta }) {
				const result = await accessTestPrivate({}, $meta);
				assert.equal(result.success, true, "protected call succeeds after refresh");
			},
			async function restoreNoCookie(assert, { $meta }) {
				if (hasSession) {
					const restored = await loginTokenRestore({}, $meta);
					assert.ok(restored.access_token, "restore with the host session returns a token");
					return;
				}
				try {
					await loginTokenRestore({}, {
						...$meta,
						expect: "login.invalidCookie"
					});
					assert.fail("login.token.restore should fail without a cookie");
				} catch (err) {
					const status = getHttpStatus(err);
					assert.equal(status, 200, "restore without a cookie returns HTTP 200");
				}
			}
		]) }));
	})))();
}
init_testSessionFlow();
export { testSessionFlow_default as default };
