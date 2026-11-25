import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { St as adapter, wt as init_types } from "./iframe-Na9SG7k6.js";
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
