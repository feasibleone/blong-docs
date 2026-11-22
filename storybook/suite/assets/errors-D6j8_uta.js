import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { Et as library, wt as init_types } from "./iframe-D5_otGjj.js";
// ../../core/blong-gogo/src/codec/adapter/openapi/errors.ts
var errors_default;
function init_errors() {
	return (init_errors = __esmMin((() => {
		init_types();
		errors_default = library(({ lib: { error } }) => {
			error({ openapiNamespaceNotDefined: "Namespace {namespace} is not defined" });
		});
	})))();
}
init_errors();
export { errors_default as default };
