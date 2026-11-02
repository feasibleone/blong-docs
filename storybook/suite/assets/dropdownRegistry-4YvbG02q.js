import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_appStore, r as useAppStore } from "./appStore-p_jHiGC2.js";
// ../../core/blong-browser/src/hooks/usePermission.ts
/**
* Returns true if the current user has the given permission.
* Also accepts a boolean override for testing.
*/
function usePermission(permission) {
	const permissions = useAppStore((s) => s.auth.permissions);
	if (typeof permissions === "boolean") return permissions;
	if (permission == null) return true;
	if (typeof permission === "boolean") return permission;
	return permissions[permission] === true;
}
function init_usePermission() {
	return (init_usePermission = __esmMin((() => {
		init_appStore();
	})))();
}
// ../../core/blong-browser/src/model/dropdownRegistry.ts
var DropdownRegistry, dropdownRegistry;
function init_dropdownRegistry() {
	return (init_dropdownRegistry = __esmMin((() => {
		DropdownRegistry = class {
			cache = /* @__PURE__ */ new Map();
			pending = /* @__PURE__ */ new Map();
			/**
			* Get a dropdown by name, loading it via the provided loader if not cached.
			*
			* @param name - Dropdown key, e.g. 'marine.species'
			* @param loader - Function that fetches the dropdown data from the backend
			*/
			async get(name, loader) {
				if (this.cache.has(name)) return this.cache.get(name);
				if (!this.pending.has(name)) {
					const promise = loader(name).then((data) => {
						this.cache.set(name, data);
						this.pending.delete(name);
						return data;
					}).catch((err) => {
						this.pending.delete(name);
						throw err;
					});
					this.pending.set(name, promise);
				}
				return this.pending.get(name);
			}
			/**
			* Pre-populate the cache without async loading (used by mocks and preload).
			*/
			set(name, data) {
				this.cache.set(name, data);
			}
			/**
			* Batch-preload multiple dropdowns.  Names already cached are skipped.
			*
			* @param names - Dropdown names to load
			* @param loader - Batch loader that returns a map of name → options
			*/
			preload(names, loader) {
				const missing = names.filter((n) => !this.cache.has(n) && !this.pending.has(n));
				if (!missing.length) return Promise.resolve();
				const promise = loader(missing).then((results) => {
					for (const [name, data] of Object.entries(results)) {
						this.cache.set(name, data);
						this.pending.delete(name);
					}
				});
				for (const name of missing) this.pending.set(name, promise.then(() => this.cache.get(name) ?? []));
				return promise.then(() => void 0);
			}
			/** Return true if the named dropdown is already loaded */
			has(name) {
				return this.cache.has(name);
			}
			/** Clear the cache (useful in tests) */
			clear() {
				this.cache.clear();
				this.pending.clear();
			}
		};
		dropdownRegistry = new DropdownRegistry();
	})))();
}
export { usePermission as i, init_dropdownRegistry as n, init_usePermission as r, dropdownRegistry as t };
