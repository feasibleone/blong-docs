import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Yt as library, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-browser/adapter/storage/storage.ts
var TOKEN_KEY, PERMISSIONS_KEY, memStore, storage_default;
function init_storage() {
	return (init_storage = __esmMin((() => {
		init_types();
		TOKEN_KEY = "blong.auth.token";
		PERMISSIONS_KEY = "blong.auth.permissions";
		memStore = /* @__PURE__ */ new Map();
		storage_default = library(() => ({
			TOKEN_KEY,
			PERMISSIONS_KEY,
			storeGet(key) {
				if (typeof localStorage !== "undefined") return localStorage.getItem(key);
				return memStore.get(key) ?? null;
			},
			storeSet(key, value) {
				if (typeof localStorage !== "undefined") localStorage.setItem(key, value);
				else memStore.set(key, value);
			},
			storeDelete(key) {
				if (typeof localStorage !== "undefined") localStorage.removeItem(key);
				else memStore.delete(key);
			}
		}));
	})))();
}
//#endregion
init_storage();
export { storage_default as default };
