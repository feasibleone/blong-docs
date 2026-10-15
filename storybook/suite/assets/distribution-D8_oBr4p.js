import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/HTTPError.js
var HTTPError;
function init_HTTPError() {
	return (init_HTTPError = __esmMin((() => {
		HTTPError = class extends Error {
			response;
			request;
			options;
			constructor(response, request, options) {
				const status = `${response.status || response.status === 0 ? response.status : ""} ${response.statusText ?? ""}`.trim();
				const reason = status ? `status code ${status}` : "an unknown error";
				super(`Request failed with ${reason}: ${request.method} ${request.url}`);
				this.name = "HTTPError";
				this.response = response;
				this.request = request;
				this.options = options;
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/NonError.js
var NonError;
function init_NonError() {
	return (init_NonError = __esmMin((() => {
		NonError = class extends Error {
			name = "NonError";
			value;
			constructor(value) {
				let message = "Non-error value was thrown";
				try {
					if (typeof value === "string") message = value;
					else if (value && typeof value === "object" && "message" in value && typeof value.message === "string") message = value.message;
				} catch {}
				super(message);
				this.value = value;
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/ForceRetryError.js
var ForceRetryError;
function init_ForceRetryError() {
	return (init_ForceRetryError = __esmMin((() => {
		init_NonError();
		ForceRetryError = class extends Error {
			name = "ForceRetryError";
			customDelay;
			code;
			customRequest;
			constructor(options) {
				const cause = options?.cause ? options.cause instanceof Error ? options.cause : new NonError(options.cause) : void 0;
				super(options?.code ? `Forced retry: ${options.code}` : "Forced retry", cause ? { cause } : void 0);
				this.customDelay = options?.delay;
				this.code = options?.code;
				this.customRequest = options?.request;
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/constants.js
var supportsRequestStreams, supportsAbortController, supportsAbortSignal, supportsResponseStreams, supportsFormData, requestMethods, responseTypes, maxSafeTimeout, usualFormBoundarySize, stop, RetryMarker, retry, kyOptionKeys, vendorSpecificOptions, requestOptionsRegistry;
function init_constants() {
	return (init_constants = __esmMin((() => {
		supportsRequestStreams = (() => {
			let duplexAccessed = false;
			let hasContentType = false;
			const supportsReadableStream = typeof globalThis.ReadableStream === "function";
			const supportsRequest = typeof globalThis.Request === "function";
			if (supportsReadableStream && supportsRequest) try {
				hasContentType = new globalThis.Request("https://empty.invalid", {
					body: new globalThis.ReadableStream(),
					method: "POST",
					get duplex() {
						duplexAccessed = true;
						return "half";
					}
				}).headers.has("Content-Type");
			} catch (error) {
				if (error instanceof Error && error.message === "unsupported BodyInit type") return false;
				throw error;
			}
			return duplexAccessed && !hasContentType;
		})();
		supportsAbortController = typeof globalThis.AbortController === "function";
		supportsAbortSignal = typeof globalThis.AbortSignal === "function" && typeof globalThis.AbortSignal.any === "function";
		supportsResponseStreams = typeof globalThis.ReadableStream === "function";
		supportsFormData = typeof globalThis.FormData === "function";
		requestMethods = [
			"get",
			"post",
			"put",
			"patch",
			"head",
			"delete"
		];
		responseTypes = {
			json: "application/json",
			text: "text/*",
			formData: "multipart/form-data",
			arrayBuffer: "*/*",
			blob: "*/*",
			bytes: "*/*"
		};
		maxSafeTimeout = 2147483647;
		usualFormBoundarySize = new TextEncoder().encode("------WebKitFormBoundaryaxpyiPgbbPti10Rw").length;
		stop = Symbol("stop");
		RetryMarker = class {
			options;
			constructor(options) {
				this.options = options;
			}
		};
		retry = (options) => new RetryMarker(options);
		kyOptionKeys = {
			json: true,
			parseJson: true,
			stringifyJson: true,
			searchParams: true,
			prefixUrl: true,
			retry: true,
			timeout: true,
			hooks: true,
			throwHttpErrors: true,
			onDownloadProgress: true,
			onUploadProgress: true,
			fetch: true,
			context: true
		};
		vendorSpecificOptions = { next: true };
		requestOptionsRegistry = {
			method: true,
			headers: true,
			body: true,
			mode: true,
			credentials: true,
			cache: true,
			redirect: true,
			referrer: true,
			referrerPolicy: true,
			integrity: true,
			keepalive: true,
			signal: true,
			window: true,
			duplex: true
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/body.js
var getBodySize, withProgress, streamResponse, streamRequest;
function init_body() {
	return (init_body = __esmMin((() => {
		init_constants();
		getBodySize = (body) => {
			if (!body) return 0;
			if (body instanceof FormData) {
				let size = 0;
				for (const [key, value] of body) {
					size += usualFormBoundarySize;
					size += new TextEncoder().encode(`Content-Disposition: form-data; name="${key}"`).length;
					size += typeof value === "string" ? new TextEncoder().encode(value).length : value.size;
				}
				return size;
			}
			if (body instanceof Blob) return body.size;
			if (body instanceof ArrayBuffer) return body.byteLength;
			if (typeof body === "string") return new TextEncoder().encode(body).length;
			if (body instanceof URLSearchParams) return new TextEncoder().encode(body.toString()).length;
			if ("byteLength" in body) return body.byteLength;
			if (typeof body === "object" && body !== null) try {
				const jsonString = JSON.stringify(body);
				return new TextEncoder().encode(jsonString).length;
			} catch {
				return 0;
			}
			return 0;
		};
		withProgress = (stream, totalBytes, onProgress) => {
			let previousChunk;
			let transferredBytes = 0;
			return stream.pipeThrough(new TransformStream({
				transform(currentChunk, controller) {
					controller.enqueue(currentChunk);
					if (previousChunk) {
						transferredBytes += previousChunk.byteLength;
						let percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
						if (percent >= 1) percent = 1 - Number.EPSILON;
						onProgress?.({
							percent,
							totalBytes: Math.max(totalBytes, transferredBytes),
							transferredBytes
						}, previousChunk);
					}
					previousChunk = currentChunk;
				},
				flush() {
					if (previousChunk) {
						transferredBytes += previousChunk.byteLength;
						onProgress?.({
							percent: 1,
							totalBytes: Math.max(totalBytes, transferredBytes),
							transferredBytes
						}, previousChunk);
					}
				}
			}));
		};
		streamResponse = (response, onDownloadProgress) => {
			if (!response.body) return response;
			if (response.status === 204) return new Response(null, {
				status: response.status,
				statusText: response.statusText,
				headers: response.headers
			});
			const totalBytes = Math.max(0, Number(response.headers.get("content-length")) || 0);
			return new Response(withProgress(response.body, totalBytes, onDownloadProgress), {
				status: response.status,
				statusText: response.statusText,
				headers: response.headers
			});
		};
		streamRequest = (request, onUploadProgress, originalBody) => {
			if (!request.body) return request;
			const totalBytes = getBodySize(originalBody ?? request.body);
			return new Request(request, {
				duplex: "half",
				body: withProgress(request.body, totalBytes, onUploadProgress)
			});
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/is.js
var isObject;
function init_is() {
	return (init_is = __esmMin((() => {
		isObject = (value) => value !== null && typeof value === "object";
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/merge.js
function newHookValue(original, incoming, property) {
	return Object.hasOwn(incoming, property) && incoming[property] === void 0 ? [] : deepMerge(original[property] ?? [], incoming[property] ?? []);
}
var validateAndMerge, mergeHeaders, mergeHooks, appendSearchParameters, deepMerge;
function init_merge() {
	return (init_merge = __esmMin((() => {
		init_constants();
		init_is();
		validateAndMerge = (...sources) => {
			for (const source of sources) if ((!isObject(source) || Array.isArray(source)) && source !== void 0) throw new TypeError("The `options` argument must be an object");
			return deepMerge({}, ...sources);
		};
		mergeHeaders = (source1 = {}, source2 = {}) => {
			const result = new globalThis.Headers(source1);
			const isHeadersInstance = source2 instanceof globalThis.Headers;
			const source = new globalThis.Headers(source2);
			for (const [key, value] of source.entries()) if (isHeadersInstance && value === "undefined" || value === void 0) result.delete(key);
			else result.set(key, value);
			return result;
		};
		mergeHooks = (original = {}, incoming = {}) => ({
			beforeRequest: newHookValue(original, incoming, "beforeRequest"),
			beforeRetry: newHookValue(original, incoming, "beforeRetry"),
			afterResponse: newHookValue(original, incoming, "afterResponse"),
			beforeError: newHookValue(original, incoming, "beforeError")
		});
		appendSearchParameters = (target, source) => {
			const result = new URLSearchParams();
			for (const input of [target, source]) {
				if (input === void 0) continue;
				if (input instanceof URLSearchParams) for (const [key, value] of input.entries()) result.append(key, value);
				else if (Array.isArray(input)) for (const pair of input) {
					if (!Array.isArray(pair) || pair.length !== 2) throw new TypeError("Array search parameters must be provided in [[key, value], ...] format");
					result.append(String(pair[0]), String(pair[1]));
				}
				else if (isObject(input)) {
					for (const [key, value] of Object.entries(input)) if (value !== void 0) result.append(key, String(value));
				} else {
					const parameters = new URLSearchParams(input);
					for (const [key, value] of parameters.entries()) result.append(key, value);
				}
			}
			return result;
		};
		deepMerge = (...sources) => {
			let returnValue = {};
			let headers = {};
			let hooks = {};
			let searchParameters;
			const signals = [];
			for (const source of sources) if (Array.isArray(source)) {
				if (!Array.isArray(returnValue)) returnValue = [];
				returnValue = [...returnValue, ...source];
			} else if (isObject(source)) {
				for (let [key, value] of Object.entries(source)) {
					if (key === "signal" && value instanceof globalThis.AbortSignal) {
						signals.push(value);
						continue;
					}
					if (key === "context") {
						if (value !== void 0 && value !== null && (!isObject(value) || Array.isArray(value))) throw new TypeError("The `context` option must be an object");
						returnValue = {
							...returnValue,
							context: value === void 0 || value === null ? {} : {
								...returnValue.context,
								...value
							}
						};
						continue;
					}
					if (key === "searchParams") {
						if (value === void 0 || value === null) searchParameters = void 0;
						else searchParameters = searchParameters === void 0 ? value : appendSearchParameters(searchParameters, value);
						continue;
					}
					if (isObject(value) && key in returnValue) value = deepMerge(returnValue[key], value);
					returnValue = {
						...returnValue,
						[key]: value
					};
				}
				if (isObject(source.hooks)) {
					hooks = mergeHooks(hooks, source.hooks);
					returnValue.hooks = hooks;
				}
				if (isObject(source.headers)) {
					headers = mergeHeaders(headers, source.headers);
					returnValue.headers = headers;
				}
			}
			if (searchParameters !== void 0) returnValue.searchParams = searchParameters;
			if (signals.length > 0) {
				if (signals.length === 1) returnValue.signal = signals[0];
				else if (supportsAbortSignal) returnValue.signal = AbortSignal.any(signals);
				else returnValue.signal = signals.at(-1);
			}
			return returnValue;
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/normalize.js
var normalizeRequestMethod, defaultRetryOptions, normalizeRetryOptions;
function init_normalize() {
	return (init_normalize = __esmMin((() => {
		init_constants();
		normalizeRequestMethod = (input) => requestMethods.includes(input) ? input.toUpperCase() : input;
		defaultRetryOptions = {
			limit: 2,
			methods: [
				"get",
				"put",
				"head",
				"delete",
				"options",
				"trace"
			],
			statusCodes: [
				408,
				413,
				429,
				500,
				502,
				503,
				504
			],
			afterStatusCodes: [
				413,
				429,
				503
			],
			maxRetryAfter: Number.POSITIVE_INFINITY,
			backoffLimit: Number.POSITIVE_INFINITY,
			delay: (attemptCount) => .3 * 2 ** (attemptCount - 1) * 1e3,
			jitter: void 0,
			retryOnTimeout: false
		};
		normalizeRetryOptions = (retry = {}) => {
			if (typeof retry === "number") return {
				...defaultRetryOptions,
				limit: retry
			};
			if (retry.methods && !Array.isArray(retry.methods)) throw new Error("retry.methods must be an array");
			retry.methods &&= retry.methods.map((method) => method.toLowerCase());
			if (retry.statusCodes && !Array.isArray(retry.statusCodes)) throw new Error("retry.statusCodes must be an array");
			const normalizedRetry = Object.fromEntries(Object.entries(retry).filter(([, value]) => value !== void 0));
			return {
				...defaultRetryOptions,
				...normalizedRetry
			};
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/TimeoutError.js
var TimeoutError;
function init_TimeoutError() {
	return (init_TimeoutError = __esmMin((() => {
		TimeoutError = class extends Error {
			request;
			constructor(request) {
				super(`Request timed out: ${request.method} ${request.url}`);
				this.name = "TimeoutError";
				this.request = request;
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/timeout.js
async function timeout(request, init, abortController, options) {
	return new Promise((resolve, reject) => {
		const timeoutId = setTimeout(() => {
			if (abortController) abortController.abort();
			reject(new TimeoutError(request));
		}, options.timeout);
		options.fetch(request, init).then(resolve).catch(reject).then(() => {
			clearTimeout(timeoutId);
		});
	});
}
function init_timeout() {
	return (init_timeout = __esmMin((() => {
		init_TimeoutError();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/delay.js
async function delay(ms, { signal }) {
	return new Promise((resolve, reject) => {
		if (signal) {
			signal.throwIfAborted();
			signal.addEventListener("abort", abortHandler, { once: true });
		}
		function abortHandler() {
			clearTimeout(timeoutId);
			reject(signal.reason);
		}
		const timeoutId = setTimeout(() => {
			signal?.removeEventListener("abort", abortHandler);
			resolve();
		}, ms);
	});
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/options.js
var findUnknownOptions, hasSearchParameters;
function init_options() {
	return (init_options = __esmMin((() => {
		init_constants();
		findUnknownOptions = (request, options) => {
			const unknownOptions = {};
			for (const key in options) {
				if (!Object.hasOwn(options, key)) continue;
				if (!(key in requestOptionsRegistry) && !(key in kyOptionKeys) && (!(key in request) || key in vendorSpecificOptions)) unknownOptions[key] = options[key];
			}
			return unknownOptions;
		};
		hasSearchParameters = (search) => {
			if (search === void 0) return false;
			if (Array.isArray(search)) return search.length > 0;
			if (search instanceof URLSearchParams) return search.size > 0;
			if (typeof search === "object") return Object.keys(search).length > 0;
			if (typeof search === "string") return search.trim().length > 0;
			return Boolean(search);
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/type-guards.js
/**
Type guard to check if an error is an HTTPError.

@param error - The error to check
@returns `true` if the error is an HTTPError, `false` otherwise

@example
```
import ky, {isHTTPError} from 'ky';
try {
const response = await ky.get('/api/data');
} catch (error) {
if (isHTTPError(error)) {
console.log('HTTP error status:', error.response.status);
}
}
```
*/
function isHTTPError(error) {
	return error instanceof HTTPError || error?.name === HTTPError.name;
}
/**
Type guard to check if an error is a TimeoutError.

@param error - The error to check
@returns `true` if the error is a TimeoutError, `false` otherwise

@example
```
import ky, {isTimeoutError} from 'ky';
try {
const response = await ky.get('/api/data', { timeout: 1000 });
} catch (error) {
if (isTimeoutError(error)) {
console.log('Request timed out:', error.request.url);
}
}
```
*/
function isTimeoutError(error) {
	return error instanceof TimeoutError || error?.name === TimeoutError.name;
}
function init_type_guards() {
	return (init_type_guards = __esmMin((() => {
		init_HTTPError();
		init_TimeoutError();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/Ky.js
var Ky;
function init_Ky() {
	return (init_Ky = __esmMin((() => {
		init_HTTPError();
		init_NonError();
		init_ForceRetryError();
		init_body();
		init_merge();
		init_normalize();
		init_timeout();
		init_options();
		init_type_guards();
		init_constants();
		Ky = class Ky {
			static create(input, options) {
				const ky = new Ky(input, options);
				const function_ = async () => {
					if (typeof ky.#options.timeout === "number" && ky.#options.timeout > 2147483647) throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
					await Promise.resolve();
					let response = await ky.#fetch();
					for (const hook of ky.#options.hooks.afterResponse) {
						const clonedResponse = ky.#decorateResponse(response.clone());
						let modifiedResponse;
						try {
							modifiedResponse = await hook(ky.request, ky.#getNormalizedOptions(), clonedResponse, { retryCount: ky.#retryCount });
						} catch (error) {
							ky.#cancelResponseBody(clonedResponse);
							ky.#cancelResponseBody(response);
							throw error;
						}
						if (modifiedResponse instanceof RetryMarker) {
							ky.#cancelResponseBody(clonedResponse);
							ky.#cancelResponseBody(response);
							throw new ForceRetryError(modifiedResponse.options);
						}
						const nextResponse = modifiedResponse instanceof globalThis.Response ? modifiedResponse : response;
						if (clonedResponse !== nextResponse) ky.#cancelResponseBody(clonedResponse);
						if (response !== nextResponse) ky.#cancelResponseBody(response);
						response = nextResponse;
					}
					ky.#decorateResponse(response);
					if (!response.ok && (typeof ky.#options.throwHttpErrors === "function" ? ky.#options.throwHttpErrors(response.status) : ky.#options.throwHttpErrors)) {
						let error = new HTTPError(response, ky.request, ky.#getNormalizedOptions());
						for (const hook of ky.#options.hooks.beforeError) error = await hook(error, { retryCount: ky.#retryCount });
						throw error;
					}
					if (ky.#options.onDownloadProgress) {
						if (typeof ky.#options.onDownloadProgress !== "function") throw new TypeError("The `onDownloadProgress` option must be a function");
						if (!supportsResponseStreams) throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
						const progressResponse = response.clone();
						ky.#cancelResponseBody(response);
						return streamResponse(progressResponse, ky.#options.onDownloadProgress);
					}
					return response;
				};
				const result = ky.#retry(function_).finally(() => {
					const originalRequest = ky.#originalRequest;
					ky.#cancelBody(originalRequest?.body ?? void 0);
					ky.#cancelBody(ky.request.body ?? void 0);
				});
				for (const [type, mimeType] of Object.entries(responseTypes)) {
					if (type === "bytes" && typeof globalThis.Response?.prototype?.bytes !== "function") continue;
					result[type] = async () => {
						ky.request.headers.set("accept", ky.request.headers.get("accept") || mimeType);
						const response = await result;
						if (type === "json") {
							if (response.status === 204) return "";
							const text = await response.text();
							if (text === "") return "";
							if (options.parseJson) return options.parseJson(text);
							return JSON.parse(text);
						}
						return response[type]();
					};
				}
				return result;
			}
			static #normalizeSearchParams(searchParams) {
				if (searchParams && typeof searchParams === "object" && !Array.isArray(searchParams) && !(searchParams instanceof URLSearchParams)) return Object.fromEntries(Object.entries(searchParams).filter(([, value]) => value !== void 0));
				return searchParams;
			}
			request;
			#abortController;
			#retryCount = 0;
			#input;
			#options;
			#originalRequest;
			#userProvidedAbortSignal;
			#cachedNormalizedOptions;
			constructor(input, options = {}) {
				this.#input = input;
				this.#options = {
					...options,
					headers: mergeHeaders(this.#input.headers, options.headers),
					hooks: mergeHooks({
						beforeRequest: [],
						beforeRetry: [],
						beforeError: [],
						afterResponse: []
					}, options.hooks),
					method: normalizeRequestMethod(options.method ?? this.#input.method ?? "GET"),
					prefixUrl: String(options.prefixUrl || ""),
					retry: normalizeRetryOptions(options.retry),
					throwHttpErrors: options.throwHttpErrors ?? true,
					timeout: options.timeout ?? 1e4,
					fetch: options.fetch ?? globalThis.fetch.bind(globalThis),
					context: options.context ?? {}
				};
				if (typeof this.#input !== "string" && !(this.#input instanceof URL || this.#input instanceof globalThis.Request)) throw new TypeError("`input` must be a string, URL, or Request");
				if (this.#options.prefixUrl && typeof this.#input === "string") {
					if (this.#input.startsWith("/")) throw new Error("`input` must not begin with a slash when using `prefixUrl`");
					if (!this.#options.prefixUrl.endsWith("/")) this.#options.prefixUrl += "/";
					this.#input = this.#options.prefixUrl + this.#input;
				}
				if (supportsAbortController && supportsAbortSignal) {
					this.#userProvidedAbortSignal = this.#options.signal ?? this.#input.signal;
					this.#abortController = new globalThis.AbortController();
					this.#options.signal = this.#userProvidedAbortSignal ? AbortSignal.any([this.#userProvidedAbortSignal, this.#abortController.signal]) : this.#abortController.signal;
				}
				if (supportsRequestStreams) this.#options.duplex = "half";
				if (this.#options.json !== void 0) {
					this.#options.body = this.#options.stringifyJson?.(this.#options.json) ?? JSON.stringify(this.#options.json);
					this.#options.headers.set("content-type", this.#options.headers.get("content-type") ?? "application/json");
				}
				const userProvidedContentType = options.headers && new globalThis.Headers(options.headers).has("content-type");
				if (this.#input instanceof globalThis.Request && (supportsFormData && this.#options.body instanceof globalThis.FormData || this.#options.body instanceof URLSearchParams) && !userProvidedContentType) this.#options.headers.delete("content-type");
				this.request = new globalThis.Request(this.#input, this.#options);
				if (hasSearchParameters(this.#options.searchParams)) {
					const searchParams = "?" + (typeof this.#options.searchParams === "string" ? this.#options.searchParams.replace(/^\?/, "") : new URLSearchParams(Ky.#normalizeSearchParams(this.#options.searchParams)).toString());
					const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
					this.request = new globalThis.Request(url, this.#options);
				}
				if (this.#options.onUploadProgress) {
					if (typeof this.#options.onUploadProgress !== "function") throw new TypeError("The `onUploadProgress` option must be a function");
					if (!supportsRequestStreams) throw new Error("Request streams are not supported in your environment. The `duplex` option for `Request` is not available.");
					this.request = this.#wrapRequestWithUploadProgress(this.request, this.#options.body ?? void 0);
				}
			}
			#calculateDelay() {
				const retryDelay = this.#options.retry.delay(this.#retryCount);
				let jitteredDelay = retryDelay;
				if (this.#options.retry.jitter === true) jitteredDelay = Math.random() * retryDelay;
				else if (typeof this.#options.retry.jitter === "function") {
					jitteredDelay = this.#options.retry.jitter(retryDelay);
					if (!Number.isFinite(jitteredDelay) || jitteredDelay < 0) jitteredDelay = retryDelay;
				}
				const backoffLimit = this.#options.retry.backoffLimit ?? Number.POSITIVE_INFINITY;
				return Math.min(backoffLimit, jitteredDelay);
			}
			async #calculateRetryDelay(error) {
				this.#retryCount++;
				if (this.#retryCount > this.#options.retry.limit) throw error;
				const errorObject = error instanceof Error ? error : new NonError(error);
				if (errorObject instanceof ForceRetryError) return errorObject.customDelay ?? this.#calculateDelay();
				if (!this.#options.retry.methods.includes(this.request.method.toLowerCase())) throw error;
				if (this.#options.retry.shouldRetry !== void 0) {
					const result = await this.#options.retry.shouldRetry({
						error: errorObject,
						retryCount: this.#retryCount
					});
					if (result === false) throw error;
					if (result === true) return this.#calculateDelay();
				}
				if (isTimeoutError(error) && !this.#options.retry.retryOnTimeout) throw error;
				if (isHTTPError(error)) {
					if (!this.#options.retry.statusCodes.includes(error.response.status)) throw error;
					const retryAfter = error.response.headers.get("Retry-After") ?? error.response.headers.get("RateLimit-Reset") ?? error.response.headers.get("X-RateLimit-Retry-After") ?? error.response.headers.get("X-RateLimit-Reset") ?? error.response.headers.get("X-Rate-Limit-Reset");
					if (retryAfter && this.#options.retry.afterStatusCodes.includes(error.response.status)) {
						let after = Number(retryAfter) * 1e3;
						if (Number.isNaN(after)) after = Date.parse(retryAfter) - Date.now();
						else if (after >= Date.parse("2024-01-01")) after -= Date.now();
						const max = this.#options.retry.maxRetryAfter ?? after;
						return after < max ? after : max;
					}
					if (error.response.status === 413) throw error;
				}
				return this.#calculateDelay();
			}
			#decorateResponse(response) {
				if (this.#options.parseJson) response.json = async () => this.#options.parseJson(await response.text());
				return response;
			}
			#cancelBody(body) {
				if (!body) return;
				body.cancel().catch(() => void 0);
			}
			#cancelResponseBody(response) {
				this.#cancelBody(response.body ?? void 0);
			}
			async #retry(function_) {
				try {
					return await function_();
				} catch (error) {
					const ms = Math.min(await this.#calculateRetryDelay(error), maxSafeTimeout);
					if (this.#retryCount < 1) throw error;
					await delay(ms, this.#userProvidedAbortSignal ? { signal: this.#userProvidedAbortSignal } : {});
					if (error instanceof ForceRetryError && error.customRequest) {
						const managedRequest = this.#options.signal ? new globalThis.Request(error.customRequest, { signal: this.#options.signal }) : new globalThis.Request(error.customRequest);
						this.#assignRequest(managedRequest);
					}
					for (const hook of this.#options.hooks.beforeRetry) {
						const hookResult = await hook({
							request: this.request,
							options: this.#getNormalizedOptions(),
							error,
							retryCount: this.#retryCount
						});
						if (hookResult instanceof globalThis.Request) {
							this.#assignRequest(hookResult);
							break;
						}
						if (hookResult instanceof globalThis.Response) return hookResult;
						if (hookResult === stop) return;
					}
					return this.#retry(function_);
				}
			}
			async #fetch() {
				if (this.#abortController?.signal.aborted) {
					this.#abortController = new globalThis.AbortController();
					this.#options.signal = this.#userProvidedAbortSignal ? AbortSignal.any([this.#userProvidedAbortSignal, this.#abortController.signal]) : this.#abortController.signal;
					this.request = new globalThis.Request(this.request, { signal: this.#options.signal });
				}
				for (const hook of this.#options.hooks.beforeRequest) {
					const result = await hook(this.request, this.#getNormalizedOptions(), { retryCount: this.#retryCount });
					if (result instanceof Response) return result;
					if (result instanceof globalThis.Request) {
						this.#assignRequest(result);
						break;
					}
				}
				const nonRequestOptions = findUnknownOptions(this.request, this.#options);
				this.#originalRequest = this.request;
				this.request = this.#originalRequest.clone();
				if (this.#options.timeout === false) return this.#options.fetch(this.#originalRequest, nonRequestOptions);
				return timeout(this.#originalRequest, nonRequestOptions, this.#abortController, this.#options);
			}
			#getNormalizedOptions() {
				if (!this.#cachedNormalizedOptions) {
					const { hooks, ...normalizedOptions } = this.#options;
					this.#cachedNormalizedOptions = Object.freeze(normalizedOptions);
				}
				return this.#cachedNormalizedOptions;
			}
			#assignRequest(request) {
				this.#cachedNormalizedOptions = void 0;
				this.request = this.#wrapRequestWithUploadProgress(request);
			}
			#wrapRequestWithUploadProgress(request, originalBody) {
				if (!this.#options.onUploadProgress || !request.body) return request;
				return streamRequest(request, this.#options.onUploadProgress, originalBody ?? this.#options.body ?? void 0);
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/index.js
var createInstance, ky;
function init_distribution() {
	return (init_distribution = __esmMin((() => {
		init_Ky();
		init_constants();
		init_merge();
		createInstance = (defaults) => {
			/*! MIT License © Sindre Sorhus */
			const ky = (input, options) => Ky.create(input, validateAndMerge(defaults, options));
			for (const method of requestMethods) ky[method] = (input, options) => Ky.create(input, validateAndMerge(defaults, options, { method }));
			ky.create = (newDefaults) => createInstance(validateAndMerge(newDefaults));
			ky.extend = (newDefaults) => {
				if (typeof newDefaults === "function") newDefaults = newDefaults(defaults ?? {});
				return createInstance(validateAndMerge(defaults, newDefaults));
			};
			ky.stop = stop;
			ky.retry = retry;
			return ky;
		};
		ky = createInstance();
	})))();
}
//#endregion
export { ky as n, init_distribution as t };
