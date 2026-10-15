const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Editor-DXliMWMi.js","./rolldown-runtime-V4kyJ4NV.js","./react-DUVFSkmT.js","./BlongContext-Gs5GTHA4.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./react-dom--p2_7awc.js","./iframe-BfCOoPG7.js","./preload-helper-C3TOwP4X.js","./inputtext.esm-BsWCZcbt.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css","./Editor-NYbxgPCc.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { i as withDefaults, n as init_blong_mock } from "./blong-mock-CuQ9nUwZ.js";
//#region ../../core/blong-browser/src/model/component/subjectObjectBrowse.ts
async function subjectObjectBrowse(model, blong) {
	const { subject, object, browser, cards, layouts } = model;
	return async () => ({
		title: browser.title,
		permission: browser.permission.browse,
		icon: browser.icon,
		component: async () => {
			const [schemaOverride, { Editor }] = await Promise.all([blong.handler.subjectObjectSchema({
				subject,
				object
			}, {}), __vitePreload(() => import("./Editor-DXliMWMi.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)]);
			const schema = blong.lib.merge({}, model.schema, schemaOverride);
			function BrowsePage(props) {
				return Editor({
					schema,
					toolbar: [{
						label: "",
						icon: "pi pi-refresh",
						action: "__refresh__",
						title: "Refresh"
					}, ...browser.toolbar ?? []],
					cards,
					layouts,
					layout: "browse",
					editable: false,
					editMode: false,
					refreshNamespace: `${subject}.${object}`,
					title: browser.title,
					className: "blong-subject-object-browse",
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
//#endregion
//#region ../../core/blong-browser/src/model/component/subjectObjectNew.ts
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
			}, {}), __vitePreload(() => import("./Editor-DXliMWMi.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)]);
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
//#endregion
//#region ../../core/blong-browser/src/model/component/subjectObjectOpen.ts
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
			}, {}), __vitePreload(() => import("./Editor-DXliMWMi.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)]);
			const schema = blong.lib.merge({}, model.schema, schemaOverride);
			const loadParams = params ? { [keyField]: params[keyField] } : void 0;
			function OpenPage(props) {
				return Editor({
					schema,
					cards: model.cards,
					layout: "edit",
					layouts: model.layouts,
					loadAction: methods.get,
					loadParams,
					saveAction: methods.edit,
					mode: "edit",
					editable: true,
					title: `Edit ${objectTitle}`,
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
//#endregion
//#region ../../core/blong-browser/src/model/component/subjectObjectReport.tsx
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
			}, {}), __vitePreload(() => import("./Editor-DXliMWMi.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)]);
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
//#endregion
//#region ../../core/blong-browser/src/model/component/subjectObjectComponent.ts
async function component(models, blong) {
	const components = {};
	this.config.context ||= { menus: {} };
	this.config.context.menus ||= {};
	for (const rawModel of models) {
		const model = withDefaults(rawModel);
		const { subject, object, subjectTitle } = model;
		components[`${subject}.${object}.browse`] = await subjectObjectBrowse(model, blong);
		components[`${subject}.${object}.new`] = await subjectObjectNew(model, blong);
		components[`${subject}.${object}.open`] = await subjectObjectOpen(model, blong);
		if (model.report?.permission) {
			components[`${subject}.${object}.report`] = await subjectObjectReport(model, blong);
			for (const reportId of Object.keys(model.reports)) components[`${subject}.${object}.report.${reportId}`] = await subjectObjectReport(model, blong, reportId);
		}
		this.config.context.menus[`${subjectTitle}`] ||= [];
		this.config.context.menus[`${subjectTitle}`].push(`${subject}.${object}.browse`);
	}
	components.portalConfigGet = async () => {
		return blong.lib.merge({}, {
			menu: Object.entries(this.config.context?.menus || {}).map(([subject, items]) => ({
				title: subject,
				items
			})),
			title: "Blong",
			name: "blong-portal"
		}, this.config.portal);
	};
	return components;
}
function init_subjectObjectComponent() {
	return (init_subjectObjectComponent = __esmMin((() => {
		init_blong_mock();
		init_subjectObjectBrowse();
		init_subjectObjectNew();
		init_subjectObjectOpen();
		init_subjectObjectReport();
	})))();
}
//#endregion
init_subjectObjectComponent();
export { component as default };
