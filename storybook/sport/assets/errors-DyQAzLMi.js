import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, X as library } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-gogo/src/codec/adapter/jsonrpc/errors.ts
var errors_default;
function init_errors() {
	return (init_errors = __esmMin((() => {
		init_types();
		errors_default = library(({ lib: { error } }) => ({ errors: error({
			jsonrpcEmpty: "JSON RPC response without response and error",
			jsonrpcHttp: "JSON RPC returned HTTP error {code}"
		}) }));
	})))();
}
//#endregion
init_errors();
export { errors_default as default };
