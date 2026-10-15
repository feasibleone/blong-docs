import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { a as Button, it as useText, n as init_inputtext_esm, o as init_button_esm, rt as init_useText, t as InputText } from "./inputtext.esm-BsWCZcbt.js";
import { A as init_column_esm, k as Column, n as init_datatable_esm, t as DataTable } from "./datatable.esm-DBe2lB30.js";
import { r as useRealmRead, t as init_useRealmData } from "./useRealmData-D3zGTSoh.js";
//#region ../../core/blong-realm/pages/Digest.tsx
function Digest() {
	const digest = useRealmRead("blong.digest.get", { limit: 100 });
	const entries = Array.isArray(digest.data) ? digest.data : digest.data?.entries ?? [];
	const [filter, setFilter] = (0, import_react.useState)("");
	const rows = entries.map((entry) => ({
		...entry,
		service: entry.data?.service ?? entry.service ?? "",
		message: entry.data?.signature ?? entry.template ?? ""
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-column gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-content-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputText, {
					"data-testid": "browse-search",
					value: filter,
					onChange: (event) => setFilter(event.target.value),
					placeholder: useText("Filter")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					icon: "pi pi-refresh",
					text: true,
					label: useText("Refresh"),
					onClick: digest.reload
				})]
			}),
			digest.error !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
				className: "text-red-500",
				children: digest.error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, {
				value: rows,
				loading: digest.loading,
				globalFilter: filter,
				globalFilterFields: [
					"kind",
					"service",
					"message"
				],
				emptyMessage: useText("Nothing changed yet"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						header: useText("When"),
						body: (row) => row.at === void 0 ? "" : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-testid": "digest-when",
							style: {
								display: "inline-block",
								width: "14rem"
							},
							children: new Date(row.at).toISOString()
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						field: "kind",
						header: useText("Change")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						field: "service",
						header: useText("Service")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						field: "message",
						header: useText("Message")
					})
				]
			})
		]
	});
}
var import_react, import_jsx_runtime;
function init_Digest() {
	return (init_Digest = __esmMin((() => {
		init_useText();
		init_button_esm();
		init_column_esm();
		init_datatable_esm();
		init_inputtext_esm();
		import_react = require_react();
		init_useRealmData();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
init_Digest();
export { Digest };
