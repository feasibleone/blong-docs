import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Kt as handler, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-browser/adapter/storage/storagePermissionsSet.ts
var storagePermissionsSet_default;
function init_storagePermissionsSet() {
	return (init_storagePermissionsSet = __esmMin((() => {
		init_types();
		storagePermissionsSet_default = handler(({ lib: { storeSet, PERMISSIONS_KEY } }) => function storagePermissionsSet({ permissions }) {
			if (permissions) storeSet(PERMISSIONS_KEY, JSON.stringify(permissions));
			return permissions ?? [];
		});
	})))();
}
//#endregion
init_storagePermissionsSet();
export { storagePermissionsSet_default as default };
