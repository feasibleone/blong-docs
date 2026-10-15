import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Kt as handler, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-browser/src/portalConfig.ts
/** Identity of a menu entry for deduplication: a group by title, a leaf by method. */
function entryKey(entry) {
	if (typeof entry === "string") return `leaf:${entry}`;
	if ("items" in entry) return `group:${entry.title}`;
	const leaf = entry;
	return `leaf:${leaf.method ?? leaf.title ?? ""}`;
}
/** Append `incoming` to `target`, merging same-titled groups and skipping what is already there. */
function mergeEntries(target, incoming) {
	for (const entry of incoming) {
		const key = entryKey(entry);
		const existing = target.find((candidate) => entryKey(candidate) === key);
		if (existing === void 0) target.push(entry);
		else if (typeof existing === "object" && "items" in existing && typeof entry === "object" && "items" in entry) mergeEntries(existing.items, entry.items);
	}
}
/** The first provider that sets a value, ignoring empty strings and empty arrays. */
function firstSet(providers, key) {
	for (const provider of providers) {
		const value = provider[key];
		if (value === void 0 || value === null) continue;
		if (typeof value === "string" && value === "") continue;
		if (Array.isArray(value) && value.length === 0) continue;
		return value;
	}
}
/**
* Compose the portal configuration any number of realms provide into the one the
* shell renders. Missing or empty answers are skipped, so a realm that ships no
* pages contributes nothing rather than blanking the portal.
*/
function mergePortalConfigs(configs) {
	const providers = configs.filter((config) => config !== void 0 && config !== null);
	const config = {
		name: firstSet(providers, "name") ?? "blong-portal",
		title: firstSet(providers, "title") ?? "Blong"
	};
	const theme = firstSet(providers, "theme");
	if (theme !== void 0) config.theme = theme;
	const home = firstSet(providers, "home");
	if (home !== void 0) config.home = home;
	const profile = firstSet(providers, "profile");
	if (profile !== void 0) config.profile = profile;
	const languages = firstSet(providers, "languages");
	if (languages !== void 0) config.languages = languages;
	const translations = firstSet(providers, "translations");
	if (translations !== void 0) config.translations = translations;
	const menu = [];
	const rightMenu = [];
	for (const provider of providers) {
		if (provider.menu) mergeEntries(menu, provider.menu);
		if (provider.rightMenu) mergeEntries(rightMenu, provider.rightMenu);
	}
	if (menu.length) config.menu = menu;
	if (rightMenu.length) config.rightMenu = rightMenu;
	return config;
}
//#endregion
//#region ../../core/blong-browser/orchestrator/portal/portalConfigMerge.ts
var portalConfigMerge_default;
function init_portalConfigMerge() {
	return (init_portalConfigMerge = __esmMin((() => {
		init_types();
		portalConfigMerge_default = handler(() => async function portalConfigMerge(params, $meta) {
			const providers = this.findHandlers?.("portalConfigGet") ?? [];
			return mergePortalConfigs(await Promise.all(providers.map((provider) => provider.call(this, params ?? {}, $meta))));
		});
	})))();
}
//#endregion
init_portalConfigMerge();
export { portalConfigMerge_default as default };
