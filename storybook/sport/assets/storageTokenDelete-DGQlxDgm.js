import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Et as init_types, Tt as handler } from "./iframe-DG6UCJRm.js";
// ../../core/blong-browser/adapter/storage/storageTokenDelete.ts
var storageTokenDelete_default;
function init_storageTokenDelete() {
	return (init_storageTokenDelete = __esmMin((() => {
		init_types();
		storageTokenDelete_default = handler(({ lib: { storeDelete, TOKEN_KEY } }) => function storageTokenDelete() {
			storeDelete(TOKEN_KEY);
			return null;
		});
	})))();
}
init_storageTokenDelete();
export { storageTokenDelete_default as default };
