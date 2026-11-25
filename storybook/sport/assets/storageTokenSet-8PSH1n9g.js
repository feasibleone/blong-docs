import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Et as init_types, Tt as handler } from "./iframe-DG6UCJRm.js";
// ../../core/blong-browser/adapter/storage/storageTokenSet.ts
var storageTokenSet_default;
function init_storageTokenSet() {
	return (init_storageTokenSet = __esmMin((() => {
		init_types();
		storageTokenSet_default = handler(({ lib: { storeSet, TOKEN_KEY } }) => function storageTokenSet({ token }) {
			if (token) storeSet(TOKEN_KEY, token);
			return token ?? null;
		});
	})))();
}
init_storageTokenSet();
export { storageTokenSet_default as default };
