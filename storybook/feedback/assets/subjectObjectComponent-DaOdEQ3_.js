const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-BslwTayt.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-aUJ8LCxO.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-DD0X1HUh.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { t as require_react } from "./react-DUbJxPEF.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BGSnrdEt.js";
import { n as mergePortalConfigs } from "./portalConfig-D_F_e55G.js";
import { i as withDefaults, n as init_blong_mock } from "./blong-mock-CzIXOG2b.js";
// ../../core/blong-browser/src/model/menu.ts
/** Stable, language-independent identifier for a group title. */
function menuGroupId(title) {
	return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
/** Where a model's browse page belongs in the menubar. */
function menuPlacement(model) {
	const menu = model.menu ?? {};
	if (menu.hidden) return void 0;
	if (model.classifier) return {
		root: menu.root ?? "Classifiers",
		group: menu.group ?? model.subjectTitle
	};
	if (menu.group && !menu.root) return { root: menu.group };
	return {
		root: menu.root ?? model.subjectTitle,
		...menu.group && { group: menu.group }
	};
}
/** The menubar leaf for a model's browse page. */
function menuLeaf(model) {
	const menu = model.menu ?? {};
	return {
		title: menu.title ?? model.objectTitle,
		method: `${model.subject}.${model.object}.browse`,
		...menu.icon && { icon: menu.icon },
		...menu.order !== void 0 && { order: menu.order }
	};
}
/**
* Add one page to the menu tree in place.
*
* `menus` is the aggregator's accumulated map — root title → its entries — so a
* second realm contributing to `Classifiers` finds the root already there and
* merges into its own submenu, and a suite that adds a group of its own does not
* lose the generated ones.
*/
function addMenuEntry(menus, model) {
	const placement = menuPlacement(model);
	if (!placement) return;
	const root = menus[placement.root] ||= [];
	const leaf = menuLeaf(model);
	if (!placement.group) {
		root.push(leaf);
		return;
	}
	let group = root.find((entry) => typeof entry === "object" && "items" in entry && entry.title === placement.group);
	if (!group) {
		group = {
			id: menuGroupId(`${placement.root}-${placement.group}`),
			title: placement.group,
			items: []
		};
		root.push(group);
	}
	group.items.push(leaf);
}
/**
* The order an entry asks for, or `undefined` when the model named none.
*
* A group sorts by this first and then by label, so a realm that orders two of
* its pages gets those two at the top and the rest alphabetically, and a realm
* that orders none gets an alphabetically sorted menu without doing anything.
*/
function ordered(entry) {
	return typeof entry === "object" && "method" in entry && entry.order !== void 0;
}
function orderValue(entry) {
	return typeof entry === "object" && "method" in entry ? entry.order ?? 0 : 0;
}
/** Sort one group's entries in place: explicit order first, then alphabetical. */
function sortEntries(items) {
	items.sort((left, right) => {
		const leftOrdered = ordered(left);
		const rightOrdered = ordered(right);
		if (leftOrdered && rightOrdered) return orderValue(left) - orderValue(right);
		if (leftOrdered) return -1;
		if (rightOrdered) return 1;
		return left.title.localeCompare(right.title, void 0, { sensitivity: "base" });
	});
	for (const entry of items) if (typeof entry === "object" && "items" in entry) sortEntries(entry.items);
}
/** Drop the sort key the menu model does not carry (`IAction` has no `order`). */
function emitted(entry) {
	if (typeof entry !== "object" || !("method" in entry)) return entry;
	const { order: _order, ...leaf } = entry;
	return leaf;
}
/**
* The generated menu, with the shared classifier root last: a realm's own pages
* are what its people open all day, and reference data is looked up by exception.
*/
function menuGroups(menus) {
	const groups = Object.entries(menus).map(([title, items]) => {
		sortEntries(items);
		return {
			id: menuGroupId(title),
			title,
			items: items.map(emitted)
		};
	});
	return [...groups.filter((group) => group.title !== CLASSIFIER_ROOT), ...groups.filter((group) => group.title === CLASSIFIER_ROOT)];
}
var CLASSIFIER_ROOT;
function init_menu() {
	return (init_menu = __esmMin((() => {
		CLASSIFIER_ROOT = "Classifiers";
	})))();
}
// ../../core/blong-browser/src/model/component/subjectObjectBrowse.ts
async function subjectObjectBrowse(model, blong) {
	const { subject, object, browser, cards, layouts, keyField, methods, deletion } = model;
	/**
	* The model's own delete button carries the model's deletion mode — the four
	* behaviours are configured once on the model rather than repeated on a toolbar.
	*
	* The scan action defaults to the object's own `scan`, which the validation
	* generator declares for every public model: a realm that configures a deletion
	* mode writes no handler for it. `@@D-784`
	*/
	const withDeletion = (button) => button.method === methods.remove ? {
		...button,
		deletion: {
			...deletion,
			mode: deletion?.mode ?? "prompt",
			entity: `${subject}.${object}`,
			keyField,
			edit: methods.edit,
			get: methods.get,
			scan: deletion?.scan ?? `${subject}.${object}.scan`
		}
	} : button;
	return async () => ({
		title: browser.title,
		permission: browser.permission.browse,
		icon: browser.icon,
		component: async () => {
			const [schemaOverride, { Editor }] = await Promise.all([blong.handler.subjectObjectSchema({
				subject,
				object
			}, {}), __vitePreload(() => import("./iframe-BslwTayt.js").then((n) => (n.s(), n.o)), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url)]);
			const schema = blong.lib.merge({}, model.schema, schemaOverride);
			function BrowsePage(props) {
				return Editor({
					schema,
					toolbar: [{
						label: "",
						icon: "pi pi-refresh",
						action: "__refresh__",
						title: "Refresh"
					}, ...(browser.toolbar ?? []).map(withDeletion)],
					cards,
					layouts,
					layout: "browse",
					editable: false,
					editMode: false,
					refreshNamespace: `${subject}.${object}`,
					title: browser.title,
					className: "blong-subject-object-browse",
					feedbackContext: {
						subject,
						object,
						page: "browse"
					},
					...props
				});
			}
			return BrowsePage;
		}
	});
}
function init_subjectObjectBrowse() {
	return (init_subjectObjectBrowse = __esmMin((() => {
		init_preload_helper();
	})))();
}
// ../../core/blong-browser/src/model/component/subjectObjectNew.ts
async function subjectObjectNew(model, blong) {
	const { objectTitle, browser, methods, subject, object } = model;
	return async () => ({
		title: `Create ${objectTitle}`,
		permission: browser.permission.add,
		icon: "pi pi-plus",
		component: async () => {
			const [schemaOverride, { Editor }] = await Promise.all([blong.handler.subjectObjectSchema({
				subject,
				object
			}, {}), __vitePreload(() => import("./iframe-BslwTayt.js").then((n) => (n.s(), n.o)), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url)]);
			const schema = blong.lib.merge({}, model.schema, schemaOverride);
			const defaultValue = {};
			const title = {
				new: `Create ${objectTitle}`,
				edit: `Edit ${objectTitle}`
			};
			function NewPage(props) {
				return Editor({
					schema,
					cards: model.cards,
					layout: "edit",
					layouts: model.layouts,
					loadAction: methods.get,
					createAction: methods.add,
					saveAction: methods.edit,
					value: defaultValue,
					mode: "new",
					editable: false,
					title,
					feedbackContext: {
						subject,
						object,
						page: "new"
					},
					...props
				});
			}
			return NewPage;
		}
	});
}
function init_subjectObjectNew() {
	return (init_subjectObjectNew = __esmMin((() => {
		init_preload_helper();
	})))();
}
// ../../core/blong-browser/src/model/component/subjectObjectOpen.ts
async function subjectObjectOpen(model, blong) {
	const { objectTitle, keyField, browser, methods, subject, object } = model;
	return async () => ({
		title: `Edit ${objectTitle}`,
		permission: browser.permission.edit,
		icon: "pi pi-pencil",
		component: async (params) => {
			const [schemaOverride, { Editor }] = await Promise.all([blong.handler.subjectObjectSchema({
				subject,
				object
			}, {}), __vitePreload(() => import("./iframe-BslwTayt.js").then((n) => (n.s(), n.o)), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url)]);
			const schema = blong.lib.merge({}, model.schema, schemaOverride);
			const loadParams = params ? { [keyField]: params[keyField] } : void 0;
			function OpenPage(props) {
				return Editor({
					schema,
					cards: model.cards,
					layout: model.openLayout,
					layouts: model.layouts,
					loadAction: methods.get,
					loadParams,
					saveAction: methods.edit,
					mode: "edit",
					editable: true,
					title: `Edit ${objectTitle}`,
					feedbackContext: {
						subject,
						object,
						page: "open"
					},
					...props
				});
			}
			return OpenPage;
		}
	});
}
function init_subjectObjectOpen() {
	return (init_subjectObjectOpen = __esmMin((() => {
		init_preload_helper();
	})))();
}
// ../../core/blong-browser/src/model/component/subjectObjectReport.tsx
/** Capitalise the first character of a string */
function capital(s) {
	return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
* Build the report schema from the model.
*
* - `params` card fields: flat filter fields extracted from `object` properties where
*   `filter: true` (or the explicit list in `reportDef.params`).
* - `result` table field: array widget using `listAction` + columns from the model or reportDef.
*
* The params are stored as flat top-level fields so they are passed directly as filter params
* to the `listAction` (e.g. `{coralName: 'Pink', paging: {...}}`).  This is compatible with
* the standard `find` API which accepts flat filter keys alongside `paging` / `orderBy`.
*/
function buildReportSchema(model, mergedSchema, reportDef) {
	const { object, keyField } = model;
	const objectProps = mergedSchema.properties?.[object]?.properties ?? {};
	const paramFields = reportDef.params ?? Object.entries(objectProps).filter(([, v]) => v.filter).map(([k]) => k);
	const browseColumns = reportDef.columns ?? mergedSchema.properties?.[object]?.widget?.columns ?? [model.nameField.split(".").pop()];
	const resultItemProperties = Object.fromEntries(browseColumns.map((col) => [col, objectProps[col] ?? {}]).concat([[keyField, objectProps[keyField] ?? {}]]));
	return { properties: {
		...Object.fromEntries(paramFields.map((f) => [f, objectProps[f] ?? {}])),
		result: {
			type: "array",
			title: "",
			widget: {
				type: "table",
				listAction: reportDef.action ?? model.methods.find,
				columns: browseColumns,
				keyField,
				resultSet: reportDef.resultSet ?? "items",
				actions: {
					allowEdit: false,
					allowDelete: false
				}
			},
			items: { properties: resultItemProperties }
		}
	} };
}
/**
* Report page factory.
*
* Builds an Editor-based report page with two cards:
* - **params**: filter fields that the user fills in before running the report.
* - **result**: a server-fetched table that populates when the user clicks "Run Report".
*
* @param model    Resolved model spec.
* @param blong    Handler proxy from the orchestrator context.
* @param reportId Optional report identifier. Defaults to `${subject}${Capital(object)}List`
*                 which generates a standard list report using `methods.find`.
*/
async function subjectObjectReport(model, blong, reportId) {
	const { subject, object } = model;
	const defaultId = `${subject}${capital(object)}List`;
	const id = reportId ?? defaultId;
	const reportDef = model.reports[id] ?? {};
	const title = reportDef.title ?? model.report.title;
	const permission = reportDef.permission ?? model.report.permission;
	return async () => ({
		title,
		permission,
		icon: "pi pi-chart-bar",
		component: async () => {
			const [schemaOverride, { Editor }] = await Promise.all([blong.handler.subjectObjectSchema({
				subject,
				object
			}, {}), __vitePreload(() => import("./iframe-BslwTayt.js").then((n) => (n.s(), n.o)), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url)]);
			const reportSchema = buildReportSchema(model, blong.lib.merge({}, model.schema, schemaOverride), reportDef);
			const reportCards = {
				params: {
					label: "",
					widgets: Object.keys(reportSchema.properties ?? {}).filter((k) => k !== "result"),
					className: "col-12",
					fieldClass: " md:col-4 xl:col-3"
				},
				result: {
					label: "Results",
					widgets: ["result"],
					className: "col-12"
				}
			};
			const reportLayouts = { report: ["params", "result"] };
			function ReportPage(props) {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Editor, {
					schema: reportSchema,
					cards: reportCards,
					layouts: reportLayouts,
					layout: "report",
					queryAction: reportDef.action ?? model.methods.find,
					editable: false,
					feedbackContext: {
						subject,
						object,
						page: `report.${reportId ?? id}`
					},
					...props
				});
			}
			return ReportPage;
		}
	});
}
var import_jsx_runtime;
function init_subjectObjectReport() {
	return (init_subjectObjectReport = __esmMin((() => {
		require_react();
		import_jsx_runtime = require_jsx_runtime();
		init_preload_helper();
	})))();
}
// ../../core/blong-browser/src/model/component/subjectObjectComponent.ts
async function component(models, blong) {
	const components = {};
	this.config.context ||= { menus: {} };
	this.config.context.menus ||= {};
	for (const rawModel of models) {
		const model = withDefaults(rawModel);
		const { subject, object } = model;
		components[`${subject}.${object}.browse`] = await subjectObjectBrowse(model, blong);
		components[`${subject}.${object}.new`] = await subjectObjectNew(model, blong);
		components[`${subject}.${object}.open`] = await subjectObjectOpen(model, blong);
		if (model.report?.permission) {
			components[`${subject}.${object}.report`] = await subjectObjectReport(model, blong);
			for (const reportId of Object.keys(model.reports)) components[`${subject}.${object}.report.${reportId}`] = await subjectObjectReport(model, blong, reportId);
		}
		addMenuEntry(this.config.context.menus, model);
	}
	components.portalConfigGet = async () => {
		const portal = this.config.portal ?? {};
		const generatedMenu = menuGroups(this.config.context?.menus ?? {});
		const { menu } = portal.menuMode === "replace" ? { menu: portal.menu } : mergePortalConfigs([{ menu: generatedMenu }, portal]);
		return {
			...portal,
			name: portal.name ?? "blong-portal",
			title: portal.title ?? "Blong",
			...menu ? { menu } : {}
		};
	};
	return components;
}
function init_subjectObjectComponent() {
	return (init_subjectObjectComponent = __esmMin((() => {
		init_blong_mock();
		init_menu();
		init_subjectObjectBrowse();
		init_subjectObjectNew();
		init_subjectObjectOpen();
		init_subjectObjectReport();
	})))();
}
init_subjectObjectComponent();
export { component as default };
