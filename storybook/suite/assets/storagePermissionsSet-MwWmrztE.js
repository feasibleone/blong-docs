import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
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
