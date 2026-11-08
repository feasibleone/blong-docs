import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { t as require_react } from "./react-DUbJxPEF.js";
import { s as Portal } from "./App-DX5E6ahH.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BGSnrdEt.js";
import { r as useAppStore } from "./appStore-p_jHiGC2.js";
import { i as Model, n as init_src } from "./iframe-BFtoPRqr.js";
// ../../core/blong-browser/src/storyHelper.tsx
/**
* Create a Storybook story that renders a model page.
*
* @param componentName - The model component name, e.g. `'marine.coral.browse'`
* @param idOrParams    - Record ID (for `.open`) or initial params object
* @param extraParams   - Additional params merged on top (highest precedence)
*/
function page(componentName, idOrParams, extraParams) {
	const object = componentName.split(".")[1];
	let params;
	if (typeof idOrParams === "number") params = {
		[`${object}Id`]: idOrParams,
		...extraParams
	};
	else if (idOrParams != null || extraParams != null) params = {
		...idOrParams,
		...extraParams
	};
	return { render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Model, {
		componentName,
		params
	}) };
}
/**
* Create a Storybook story that renders the full portal shell.
*
* Useful for full end-to-end portal stories that exercise navigation,
* tabs, and multiple realm pages together.
*/
function portal() {
	return { render: () => {
		useAppStore.getState().setToken("storybook");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {});
	} };
}
var import_jsx_runtime;
function init_storyHelper() {
	return (init_storyHelper = __esmMin((() => {
		init_src();
		require_react();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
export { page as n, portal as r, init_storyHelper as t };
