import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, q as handler } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-gogo/src/codec/adapter/jsonrpc/receive.ts
var receive_default;
function init_receive() {
	return (init_receive = __esmMin((() => {
		init_types();
		receive_default = handler(({ errors }) => ({ async receive(response, $meta) {
			const { body } = super.receive ? await super.receive(response) : response;
			if (body?.error !== void 0) {
				const error = body.jsonrpc ? Object.assign(/* @__PURE__ */ new Error(), body.error) : typeof body.error === "string" ? new Error(body.error) : Object.assign(/* @__PURE__ */ new Error(), body.error);
				if (error.type) Object.defineProperty(error, "name", {
					value: error.type,
					configurable: true,
					enumerable: false
				});
				error.req = response.request && {
					httpVersion: response.httpVersion,
					url: response.request.requestUrl,
					method: response.request.options.method
				};
				error.res = {
					httpVersion: response.httpVersion,
					statusCode: response.statusCode
				};
				throw error;
			} else if (response.statusCode < 200 || response.statusCode >= 300) throw errors.jsonrpcHttp({
				statusCode: response.statusCode,
				statusMessage: response.statusMessage,
				httpVersion: response.httpVersion,
				validation: response.body?.validation,
				debug: response.body?.debug,
				body: response.body,
				params: { code: response.statusCode },
				...response.request && {
					url: response.request.requestUrl,
					method: response.request.options.method
				}
			});
			else if (typeof body === "object" && "result" in body && !("error" in body)) {
				if ($meta && body.progress?.length) ($meta.progress ??= []).push(...body.progress);
				return body.result;
			} else throw errors.jsonrpcEmpty();
		} }));
	})))();
}
//#endregion
init_receive();
export { receive_default as default };
