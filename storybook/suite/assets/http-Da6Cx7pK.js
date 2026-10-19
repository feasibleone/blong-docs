import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { n as ky, t as init_distribution } from "./distribution-D8_oBr4p.js";
import { Gt as adapter, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-gogo/src/adapter/browser/http.ts
var errorMap, _errors, undici, nodeFs, http_default;
function init_http() {
	return (init_http = __esmMin((() => {
		init_types();
		init_distribution();
		init_preload_helper();
		errorMap = { "http.generic": "HTTP Error" };
		undici = "undici";
		nodeFs = "node:fs";
		http_default = adapter(({ utError, manifest }) => {
			_errors ||= utError.register(errorMap);
			let kyInstance = ky;
			return {
				activation: { default: { type: "http" } },
				async init(...configs) {
					await super.init(...configs);
					if (!this.config.url && this.config.host && this.config.port != null) {
						const portCandidate = this.config.port;
						if (typeof portCandidate === "number" || typeof portCandidate === "string") {
							const protocol = this.config.protocol || "http";
							this.config.url = `${protocol}://${this.config.host}:${portCandidate}`;
						}
					}
					if (this.config.tls) {
						const [{ Agent }, { readFileSync }] = await Promise.all([__vitePreload(() => import(
							/* @vite-ignore */
							undici
), [], import.meta.url), __vitePreload(() => import(
							/* @vite-ignore */
							nodeFs
), [], import.meta.url)]);
						const { tls } = this.config;
						const agent = new Agent({ connect: {
							minVersion: "TLSv1.3",
							...tls.key && { key: readFileSync(tls.key) },
							...tls.cert && { cert: readFileSync(tls.cert) },
							...tls.ca && { ca: Array.isArray(tls.ca) ? tls.ca.map((f) => readFileSync(f)) : readFileSync(tls.ca) },
							...tls.crl && { crl: readFileSync(tls.crl) }
						} });
						kyInstance = ky.create({ fetch: (url, options) => fetch(url, {
							...options,
							dispatcher: agent
						}) });
					}
				},
				start() {
					super.connect();
					return super.start();
				},
				async exec({ path, query: searchParams, url, responseType, method, headers, body, form, json }, $meta) {
					try {
						if (!url) {
							let baseUrl;
							if (this.config.host) {
								const manifestPort = manifest ? await manifest.gatewayPort : void 0;
								const configPort = this.config.port != null ? await this.config.port : void 0;
								const resolvedPort = manifestPort ?? configPort;
								if (resolvedPort != null) {
									baseUrl = `${this.config.protocol || "http"}://${this.config.host}:${resolvedPort}`;
									this.config.url = baseUrl;
								}
							}
							url = new URL(path, baseUrl || this.config.url || "");
						}
						this.log?.debug?.({ req: {
							method: (method || "POST").toUpperCase(),
							url,
							headers,
							body,
							json
						} });
						const kyOptions = {
							method: method || "POST",
							headers,
							throwHttpErrors: false,
							redirect: "manual",
							...json != null ? { json } : {},
							...form != null ? { body: new URLSearchParams(form) } : {},
							...body != null && json == null && form == null ? { body } : {},
							...searchParams != null ? { searchParams } : {}
						};
						const res = await kyInstance(url.toString(), kyOptions);
						const resolvedBody = responseType === "buffer" ? await res.arrayBuffer() : responseType === "text" ? await res.text() : await res.json().catch(() => null);
						const result = {
							statusCode: res.status,
							statusMessage: res.statusText,
							headers: Object.fromEntries(res.headers.entries()),
							body: resolvedBody
						};
						this.log?.debug?.({
							req: {
								url,
								method: (method || "POST").toUpperCase()
							},
							res: result
						});
						return result;
					} catch (error) {
						throw this.error(_errors["http.generic"](error), $meta);
					}
				}
			};
		});
	})))();
}
//#endregion
init_http();
export { http_default as default };
