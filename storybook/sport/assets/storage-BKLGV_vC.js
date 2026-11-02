import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _n as init_types, hn as adapter } from "./iframe-BHvXl2EW.js";
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
