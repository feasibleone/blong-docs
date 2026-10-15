import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { it as useText, n as init_inputtext_esm, rt as init_useText, t as InputText } from "./inputtext.esm-BsWCZcbt.js";
import { A as init_column_esm, k as Column, n as init_datatable_esm, t as DataTable } from "./datatable.esm-DBe2lB30.js";
import { r as useRealmRead, t as init_useRealmData } from "./useRealmData-D3zGTSoh.js";
//#region ../../core/blong-realm/pages/Template.tsx
function Template() {
	const templates = useRealmRead("blong.template.find");
	const [filter, setFilter] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-column gap-3",
		children: [
			templates.error !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
				className: "text-red-500",
				children: templates.error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputText, {
				"data-testid": "browse-search",
				value: filter,
				onChange: (event) => setFilter(event.target.value),
				placeholder: useText("Filter")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, {
				value: Array.isArray(templates.data) ? templates.data : [],
				loading: templates.loading,
				globalFilter: filter,
				globalFilterFields: [
					"signature",
					"service",
					"levelName"
				],
				emptyMessage: useText("Nothing learned yet"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						field: "levelName",
						header: useText("Level")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						field: "signature",
						header: useText("Message")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						field: "count",
						header: useText("Seen")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						field: "fingerprint",
						header: useText("Fingerprint")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						field: "service",
						header: useText("Service")
					})
				]
			})
		]
	});
}
var import_react, import_jsx_runtime;
function init_Template() {
	return (init_Template = __esmMin((() => {
		init_column_esm();
		init_datatable_esm();
		init_inputtext_esm();
		import_react = require_react();
		init_useText();
		init_useRealmData();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
init_Template();
export { Template };
