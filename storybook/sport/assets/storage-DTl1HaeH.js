import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, K as adapter } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-browser/adapter/storage.ts
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
//#endregion
init_storage();
export { storage_default as default };
