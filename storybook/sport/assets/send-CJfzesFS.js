import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Et as init_types, Tt as handler, X as init_blong_mle, et as STREAM_BINARY_TYPE, tt as STREAM_TEXT_TYPE } from "./iframe-DG6UCJRm.js";
// ../../core/blong-gogo/src/codec/adapter/jsonrpc/send.ts
var send_default;
function init_send() {
	return (init_send = __esmMin((() => {
		init_blong_mle();
		init_types();
		send_default = handler(({ config, lib: { timing } }) => {
			let id = 1;
			return { send(msg, $meta, context) {
				const params = msg && !(msg instanceof Array) && Object.assign({}, msg) || msg;
				const $http = params?.$http;
				delete params?.$http;
				const stream = $meta.stream;
				const result = {
					method: $http?.method,
					headers: stream ? {
						...$http?.headers,
						accept: stream === "binary" ? STREAM_BINARY_TYPE : STREAM_TEXT_TYPE
					} : $http?.headers,
					path: $http?.path ?? `/rpc/${$meta.method.replace(/\//gi, "%2F").replace(/\./g, "/")}`,
					responseType: stream ? "stream" : "json",
					json: {
						jsonrpc: "2.0",
						...$meta.mtid === "request" && { id: id++ },
						method: $meta.method,
						params,
						expect: $meta.expect,
						...$meta.timeout && $meta.timeout[0] && { timeout: timing.spare($meta.timeout, config.latency) }
					}
				};
				return super.send ? super.send(result, $meta, context) : result;
			} };
		});
	})))();
}
init_send();
export { send_default as default };
