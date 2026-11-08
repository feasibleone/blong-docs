import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { it as init_types, rt as handler } from "./iframe-BFtoPRqr.js";
// ../blong-access/browser/test/test/testAuthorizationFlow.ts
function decodeBase64(value, url = false) {
	const base64 = url ? value.replaceAll("-", "+").replaceAll("_", "/") : value;
	const padded = base64 + "=".repeat((4 - base64.length % 4) % 4);
	const binary = atob(padded);
	return {
		type: "Buffer",
		data: Array.from(binary, (character) => character.charCodeAt(0))
	};
}
function emptyPermissionMap(length) {
	return {
		type: "Buffer",
		data: new Array(length).fill(0)
	};
}
/**
* Decode a JWT's payload to extract the `per` claim (base64-encoded permissionMap).
*/
function decodePermissionMap(token) {
	const payload = token.split(".")[1];
	return decodeBase64(JSON.parse(String.fromCharCode(...decodeBase64(payload, true).data)).per);
}
/**
* Extract the HTTP status code from an error thrown by the handler proxy
* (JSON-RPC codec or MLE errorReceive path).
*/
function getHttpStatus(err) {
	const e = err;
	return e.res?.statusCode ?? e.statusCode ?? e.params?.code;
}
var testAuthorizationFlow_default;
function init_testAuthorizationFlow() {
	return (init_testAuthorizationFlow = __esmMin((() => {
		init_types();
		testAuthorizationFlow_default = handler(({ lib: { group }, handler: { loginTokenCreate, accessAuthorizationList, accessTestPrivate } }) => ({ testAuthorizationFlow: ({ name = "authorization flow browser", hasSession = false } = {}) => group(name)([
			async function httpNoAuth(assert, { $meta }) {
				if (hasSession) {
					const result = await accessTestPrivate({}, $meta);
					assert.equal(result.success, true, "accessTestPrivate succeeds with the host session");
					return;
				}
				try {
					await accessTestPrivate({}, {
						...$meta,
						expect: "gateway.jwtMissingHeader"
					});
					assert.fail("accessTestPrivate should have thrown without auth");
				} catch (err) {
					const status = getHttpStatus(err);
					assert.equal(status, 401, "accessTestPrivate without auth token returns HTTP 401");
				}
			},
			async function httpAuthDeny(assert, { $meta }) {
				await loginTokenCreate({
					username: "testViewer",
					password: "testPassword"
				}, $meta);
				try {
					await accessTestPrivate({}, {
						...$meta,
						expect: "gateway.notAllowed"
					});
					assert.fail("accessTestPrivate should have thrown for unauthorized user");
				} catch (err) {
					const status = getHttpStatus(err);
					assert.equal(status, 403, "accessTestPrivate without required permission returns HTTP 403");
				}
			},
			async function httpAuthPass(assert, { $meta }) {
				await loginTokenCreate({
					username: "testUser",
					password: "testPassword"
				}, $meta);
				const result = await accessTestPrivate({}, $meta);
				assert.equal(result.success, true, "accessTestPrivate succeeds with sufficient permissions");
			},
			async function browserLogin(assert, { $meta }) {
				const result = await loginTokenCreate({
					username: "testUser",
					password: "testPassword"
				}, $meta);
				assert.equal(result.token_type, "Bearer", "Token type is Bearer");
				assert.ok(typeof result.access_token === "string" && result.access_token.length > 0, "Access token is a non-empty string");
				assert.ok(result.expires_in > 0, "Expires in is a positive number");
				assert.ok(result.permissions.includes("accessTestPrivate"), "Permissions include accessTestPrivate action");
				return result;
			},
			async function browserAuthList(assert, { $meta, browserLogin: loginResult }) {
				const actions = await accessAuthorizationList({ permissionMap: decodePermissionMap((await loginResult).access_token) }, $meta);
				assert.ok(Array.isArray(actions), "Result is an array");
				assert.ok(actions.includes("accessTestPrivate".toLowerCase()), "Actions include \"accessTestPrivate\" (methodId format)");
				assert.ok(actions.length >= 1, "At least one action is returned");
			},
			async function browserEmptyMap(assert, { $meta }) {
				const actions = await accessAuthorizationList({ permissionMap: emptyPermissionMap(1) }, $meta);
				assert.ok(Array.isArray(actions), "Result is an array for empty map");
				assert.equal(actions.length, 0, "Empty permissionMap returns no actions");
			},
			async function browserNoMatchBits(assert, { $meta }) {
				const buf = emptyPermissionMap(128);
				buf.data[120] = 1;
				const actions = await accessAuthorizationList({ permissionMap: buf }, $meta);
				assert.ok(Array.isArray(actions), "Result is an array");
				assert.equal(actions.length, 0, "Non-matching bits return no actions");
			}
		]) }));
	})))();
}
init_testAuthorizationFlow();
export { testAuthorizationFlow_default as default };
