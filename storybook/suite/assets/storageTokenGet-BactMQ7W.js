import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _n as init_types, gn as handler } from "./iframe-Dd4aRJs7.js";
// ../../core/blong-browser/adapter/storage/storageTokenGet.ts
var storageTokenGet_default;
function init_storageTokenGet() {
	return (init_storageTokenGet = __esmMin((() => {
		init_types();
		storageTokenGet_default = handler(({ lib: { storeGet, TOKEN_KEY } }) => function storageTokenGet() {
			return storeGet(TOKEN_KEY);
		});
	})))();
}
init_storageTokenGet();
export { storageTokenGet_default as default };
