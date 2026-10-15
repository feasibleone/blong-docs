import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Yt as library, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-gogo/src/codec/adapter/openapi/errors.ts
var errors_default;
function init_errors() {
	return (init_errors = __esmMin((() => {
		init_types();
		errors_default = library(({ lib: { error } }) => {
			error({ openapiNamespaceNotDefined: "Namespace {namespace} is not defined" });
		});
	})))();
}
//#endregion
init_errors();
export { errors_default as default };
