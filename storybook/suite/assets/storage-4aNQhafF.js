import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { ht as init_types, pt as adapter } from "./iframe-Dfus02Vk.js";
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
