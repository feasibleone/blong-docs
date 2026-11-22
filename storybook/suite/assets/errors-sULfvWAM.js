import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { Et as library, wt as init_types } from "./iframe-D5_otGjj.js";
// ../../core/blong-gogo/src/codec/adapter/jsonrpc/errors.ts
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
init_errors();
export { errors_default as default };
