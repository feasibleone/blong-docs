import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
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
