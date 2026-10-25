import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { A as exportJWK, D as init_blong_mle, E as blong_mle_default, J as init_types, O as generateKeyPair, j as init_export, k as init_generate_key_pair, q as handler } from "./iframe-DXhqEaHK.js";
//#region ../../core/blong-gogo/src/jose.ts
function init_jose() {
	return (init_jose = __esmMin((() => {
		init_blong_mle();
	})))();
}
//#endregion
//#region ../../core/blong-gogo/src/codec/adapter/mle/ready.ts
var isBrowser, key, ready_default;
function init_ready() {
	return (init_ready = __esmMin((() => {
		init_types();
		init_export(), init_generate_key_pair();
		init_jose();
		isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
		key = async (alg, options) => ({
			alg,
			...await exportJWK((await generateKeyPair(alg, options)).privateKey)
		});
		ready_default = handler(({ config: { token, tokenExpire } }) => {
			let jose, serverKey, pending, refreshToken, refreshTokenExpire;
			const encrypt = (msg, protectedHeader) => {
				return jose ? globalThis.window && msg && msg.formData instanceof globalThis.window.FormData ? msg : jose.signEncrypt(msg, serverKey.encrypt, protectedHeader) : msg;
			};
			const decrypt = async (object, property) => {
				const rec = object;
				if (rec?.[property] && typeof rec[property] !== "string") {
					if (typeof window === "object" && "result" in rec && rec.result instanceof window.Blob) rec[property] = rec.result;
					else if (jose) {
						const decrypted = await jose.decryptVerify(rec[property], serverKey.sign);
						if (rec) rec[property] = decrypted;
					}
				}
			};
			const encryptPublic = async (params) => {
				if (!jose) return params;
				const { $http, ...rest } = params;
				const encrypted = await encrypt(rest, {
					mlsk: jose.keys.sign,
					mlek: jose.keys.encrypt
				});
				if ($http && encrypted) encrypted.$http = $http;
				return encrypted;
			};
			function readToken(where) {
				tokenExpire = Date.now() + where.expires_in * 1e3 - 5e3;
				token = where.access_token;
				if (where.refresh_token) {
					refreshToken = where.refresh_token;
					refreshTokenExpire = Date.now() + where.refresh_token_expires_in * 1e3 + 5e3;
				}
			}
			function clearTokens() {
				token = null;
				tokenExpire = 0;
				refreshToken = null;
				refreshTokenExpire = 0;
			}
			/**
			* Redeem a refresh token at `login.token.refresh` (auth: 'login' — MLE
			* handshake keys, plain JSON-RPC response).  On success the new access +
			* refresh tokens are stored in memory.  On refusal (revoked / inactive /
			* expired session) the tokens are cleared so the next request surfaces a
			* clean 401 to the caller, which the UI turns into a login prompt.
			*/
			async function refresh(opts = {}) {
				const now = Date.now();
				if (token && (opts.force || tokenExpire < now)) {
					if (refreshToken && refreshTokenExpire > now) try {
						pending = pending || (async () => {
							const params = await encryptPublic({ refreshToken });
							return await this.exec({
								path: "/rpc/login/token/refresh",
								method: "POST",
								responseType: "json",
								json: {
									jsonrpc: "2.0",
									id: 1,
									method: "login.token.refresh",
									params
								}
							}, {});
						})();
						const result = await pending;
						if (pending !== null) pending = null;
						const { body, statusCode } = result;
						await decrypt(body, "result");
						if (body?.error || statusCode != null && statusCode >= 400) {
							clearTokens();
							const error = new Error(body?.error?.message || "Token refresh failed");
							error.type = body?.error?.type || "rpc.refreshFailed";
							error.statusCode = body?.error?.statusCode ?? statusCode ?? 401;
							error.auth = true;
							throw error;
						}
						readToken(body.result);
					} catch (error) {
						pending = null;
						if (!error.auth) clearTokens();
						throw error;
					}
					else clearTokens();
				}
			}
			return {
				async ready() {
					/**
					* The pair is kept across a reload, which is what the write below has always assumed.
					*
					* A caller's session is opened with the pair it presented when it logged in — the realm
					* that answers the session hands those two public keys back — and every later call is
					* verified against the signing half of it. A reload that minted a new pair therefore
					* signed with a key the session had never seen, and the gateway answered
					* `Decryption failed` with `ERR_JWS_SIGNATURE_VERIFICATION_FAILED` underneath, on the
					* first call of every page that logs in by reloading (F-497). The value is written below
					* and was never read back, which is the shape of a half-finished feature rather than a
					* decision: keeping it is now deliberate — a private JWK in `localStorage` is readable by
					* any script on this origin, and the alternative is a session re-opened after every
					* reload, which needs the caller's keys to travel with the call instead (D-530).
					*/
					let mleKey = null;
					if (isBrowser) try {
						mleKey = JSON.parse(window.localStorage.getItem("mle-jose") || "null");
					} catch {
						mleKey = null;
					}
					if (!mleKey) {
						const { body: { sign, encrypt } = {} } = await this.exec({
							method: "GET",
							responseType: "json",
							path: "/rpc/login/.well-known/mle"
						}, {});
						if (sign && encrypt) {
							const signKey = await key("ES384", {
								crv: "P-384",
								extractable: true
							});
							const encryptKey = await key("ECDH-ES+A256KW", {
								crv: "P-384",
								extractable: true
							});
							mleKey = {
								serverKey: {
									sign,
									encrypt
								},
								clientKey: {
									sign: signKey,
									encrypt: encryptKey
								}
							};
							if (isBrowser) window.localStorage.setItem("mle-jose", JSON.stringify(mleKey));
						}
					}
					if (mleKey) {
						if (isBrowser && (!window.crypto || !window.crypto.subtle)) {
							const errorMessage = window.location.protocol === "https:" ? "Your browser doesn't support SubtleCrypto interface of the Web Crypto API" : "SubtleCrypto interface of the Web Crypto API is available only in secure contexts (HTTPS) ";
							window.alert(errorMessage);
							throw new Error(errorMessage);
						}
						jose = await blong_mle_default(mleKey.clientKey);
						serverKey = mleKey.serverKey;
					}
				},
				async send(params, $meta) {
					let { $http, ...rest } = params;
					params = await encrypt(params instanceof Array ? params : rest);
					await refresh.call(this);
					if (token) {
						$http = $http || {};
						if (!$http.headers) $http.headers = {};
						$http.headers.authorization = "Bearer " + token;
					}
					if ($http && params) params.$http = $http;
					return super.send(params, $meta);
				},
				async receive(result, $meta) {
					await decrypt(result.body, "error");
					await decrypt(result.body, "result");
					this.log?.debug?.({
						...result.body?.error || result.body?.result,
						$meta
					}, result.body?.error ? "Received error response" : "Received successful response");
					return super.receive(result, $meta);
				},
				async errorReceive(result, $meta) {
					if (result.statusCode === 401) token = null;
					await decrypt(result.body, "error");
					return super.receive(result, $meta);
				},
				async loginTokenCreateRequestSend(params, $meta) {
					return super.send(await encryptPublic(params), $meta);
				},
				async loginTokenCreateResponseReceive(result, $meta) {
					await decrypt(result.body, "result");
					if (result.body?.error) {
						await decrypt(result.body, "error");
						return super.receive(result, $meta);
					}
					readToken(result.body.result);
					return super.receive(result, $meta);
				},
				async loginTokenRefreshRequestSend(params, $meta) {
					return super.send(await encryptPublic(params), $meta);
				},
				async loginTokenRefreshResponseReceive(result, $meta) {
					await decrypt(result.body, "result");
					if (result.body?.error) {
						await decrypt(result.body, "error");
						return super.receive(result, $meta);
					}
					readToken(result.body.result);
					return super.receive(result, $meta);
				},
				async accessRegistrationAddRequestSend(params, $meta) {
					return super.send(await encryptPublic(params), $meta);
				},
				async loginTokenExchangeRequestSend(params, $meta) {
					return super.send(await encryptPublic(params), $meta);
				},
				async loginTokenRestoreRequestSend(params, $meta) {
					return super.send(await encryptPublic(params), $meta);
				},
				async loginTokenRestoreResponseReceive(result, $meta) {
					await decrypt(result.body, "result");
					if (result.body?.error) {
						await decrypt(result.body, "error");
						return super.receive(result, $meta);
					}
					readToken(result.body.result);
					return super.receive(result, $meta);
				}
			};
		});
	})))();
}
//#endregion
init_ready();
export { ready_default as default };
