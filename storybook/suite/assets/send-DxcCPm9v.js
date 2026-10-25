import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, q as handler } from "./iframe-DXhqEaHK.js";
//#region ../../core/blong-gogo/src/codec/adapter/jsonrpc/send.ts
var send_default;
function init_send() {
	return (init_send = __esmMin((() => {
		init_types();
		send_default = handler(({ config, lib: { timing } }) => {
			let id = 1;
			return { send(msg, $meta, context) {
				const params = msg && !(msg instanceof Array) && Object.assign({}, msg) || msg;
				const $http = params?.$http;
				delete params?.$http;
				const result = {
					method: $http?.method,
					headers: $http?.headers,
					path: $http?.path ?? `/rpc/${$meta.method.replace(/\//gi, "%2F").replace(/\./g, "/")}`,
					responseType: "json",
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
//#endregion
init_send();
export { send_default as default };
