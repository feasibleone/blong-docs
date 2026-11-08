import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { nt as init_types, tt as handler } from "./iframe-Kwn0esJL.js";
// ../../core/blong-browser/adapter/storage/storagePermissionsGet.ts
var storagePermissionsGet_default;
function init_storagePermissionsGet() {
	return (init_storagePermissionsGet = __esmMin((() => {
		init_types();
		storagePermissionsGet_default = handler(({ lib: { storeGet, PERMISSIONS_KEY } }) => function storagePermissionsGet() {
			const raw = storeGet(PERMISSIONS_KEY);
			return raw ? JSON.parse(raw) : [];
		});
	})))();
}
init_storagePermissionsGet();
export { storagePermissionsGet_default as default };
