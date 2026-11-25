import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Et as library, wt as init_types } from "./iframe-Na9SG7k6.js";
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
