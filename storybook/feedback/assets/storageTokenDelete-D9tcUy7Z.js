import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { J as init_types, q as handler } from "./iframe-BslwTayt.js";
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
