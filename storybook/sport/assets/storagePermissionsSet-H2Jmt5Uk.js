import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { Et as init_types, Tt as handler } from "./iframe-DzCJG9bn.js";
// ../../core/blong-browser/adapter/storage/storagePermissionsSet.ts
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
init_storagePermissionsSet();
export { storagePermissionsSet_default as default };
