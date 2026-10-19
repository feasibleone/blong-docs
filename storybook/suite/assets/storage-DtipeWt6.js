import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Gt as adapter, qt as init_types } from "./iframe-jjCxrJpo.js";
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
