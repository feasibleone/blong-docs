import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { Et as init_types, wt as adapter } from "./iframe-DzCJG9bn.js";
// ../../core/blong-browser/adapter/storage.ts
var storage_default;
function init_storage() {
	return (init_storage = __esmMin((() => {
		init_types();
		storage_default = adapter(() => ({
			extends: "adapter.generic",
			activation: { default: {
				namespace: "storage",
				imports: "ui.storage"
			} }
		}));
	})))();
}
init_storage();
export { storage_default as default };
