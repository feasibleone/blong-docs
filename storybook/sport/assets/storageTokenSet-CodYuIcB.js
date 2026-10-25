import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, q as handler } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-browser/adapter/storage/storageTokenSet.ts
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
//#endregion
init_storageTokenSet();
export { storageTokenSet_default as default };
