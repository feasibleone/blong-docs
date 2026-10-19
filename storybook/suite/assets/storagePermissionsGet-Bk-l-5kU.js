import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Kt as handler, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-browser/adapter/storage/storagePermissionsGet.ts
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
//#endregion
init_storagePermissionsGet();
export { storagePermissionsGet_default as default };
