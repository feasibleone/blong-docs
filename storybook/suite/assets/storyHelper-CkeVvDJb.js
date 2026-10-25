import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { n as init_BlongContext, r as useBlong } from "./BlongContext-B_6NAJve.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { n as init_appStore, r as useAppStore } from "./appStore-Cfk3hkpQ.js";
import { n as init_Portal, t as Portal } from "./Portal-BTpTFbaO.js";
//#region ../../core/blong-browser/src/model/Model.tsx
function Model({ componentName, params }) {
	const { handler } = useBlong();
	(0, import_react$1.useEffect)(() => {
		useAppStore.setState({ portal: {
			tabs: [],
			activeTabId: null,
			portalConfig: null
		} });
		const store = useAppStore.getState();
		store.setPermissions(true);
		(async () => {
			try {
				const tab = {
					id: "test-tab",
					actionName: "test-action",
					params,
					title: componentName,
					component: await (await handler[`component/${componentName}`]({}, {}))?.component(params)
				};
				store.openTab(tab);
			} catch {}
		})();
		return () => {
			useAppStore.setState({ portal: {
				tabs: [],
				activeTabId: null,
				portalConfig: null
			} });
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Portal, {});
}
var import_react$1, import_jsx_runtime$1;
function init_Model() {
	return (init_Model = __esmMin((() => {
		import_react$1 = require_react();
		init_Portal();
		init_BlongContext();
		init_appStore();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/storyHelper.tsx
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
		init_Model(), init_Portal(), init_appStore();
		require_react();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
export { page as n, portal as r, init_storyHelper as t };
