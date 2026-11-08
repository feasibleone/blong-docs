import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { t as require_react } from "./react-DUbJxPEF.js";
import { k as useBlong } from "./App-DX5E6ahH.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BGSnrdEt.js";
import { Fn as useText, dt as init_dropdown_esm, ot as InputText, st as init_inputtext_esm, ut as Dropdown } from "./shell-BedTcraa.js";
import { b as Column, n as init_src, o as DiagramViewer, v as DataTable, x as init_column_esm, y as init_datatable_esm } from "./iframe-BFtoPRqr.js";
import { n as useRealmCall, r as useRealmRead, t as init_useRealmData } from "./useRealmData-BXzTgkF7.js";
// ../../core/blong-realm/pages/Flow.tsx
/** The realm's configured notation, defaulted where a deployment has not chosen one. */
function rendererName(config) {
	return (config?.blong)?.diagram?.renderer ?? "mermaid";
}
function Flow() {
	const { config } = useBlong();
	const flows = useRealmRead("blong.flow.find");
	const [diagram, setDiagram] = (0, import_react.useState)();
	const [filter, setFilter] = (0, import_react.useState)("");
	const [kind, setKind] = (0, import_react.useState)();
	const call = useRealmCall();
	const kinds = (flows.data?.unions ?? []).map((union) => union.kind).filter((name) => name !== void 0);
	const showDiagram = async (reference) => {
		const { data, error } = await call("blong.flow.get", { reference });
		setDiagram(error === void 0 ? data?.diagram : `the service did not draw ${reference}: ${error}`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-column gap-3",
		style: {
			height: "100%",
			minHeight: 0
		},
		children: [
			flows.error !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
				className: "text-red-500",
				children: flows.error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				style: { flexShrink: 0 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputText, {
					"data-testid": "browse-search",
					value: filter,
					onChange: (event) => setFilter(event.target.value),
					placeholder: useText("Filter"),
					className: "flex-1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
					"data-testid": "flow-kind",
					value: kind,
					options: kinds,
					onChange: (event) => {
						const chosen = event.value;
						setKind(chosen);
						showDiagram(chosen);
					},
					placeholder: useText("Every run of a kind")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-testid": "flow-executions",
				style: {
					flex: "0 1 auto",
					maxHeight: "50%",
					minHeight: 0,
					overflow: "auto"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, {
					value: flows.data?.executions ?? [],
					loading: flows.loading,
					globalFilter: filter,
					globalFilterFields: ["kind", "id"],
					selectionMode: "single",
					onSelectionChange: (event) => {
						const row = event.value;
						if (row.id !== void 0) showDiagram(row.id);
					},
					dataKey: "id",
					emptyMessage: useText("Nothing observed yet"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
							field: "kind",
							header: useText("Kind")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
							field: "id",
							header: useText("Execution"),
							body: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-testid": "flow-execution",
								style: {
									display: "inline-block",
									width: "18rem"
								},
								children: row.id ?? ""
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
							header: useText("Calls"),
							body: (row) => row.legs?.length ?? 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
							header: useText("Services"),
							body: (row) => (row.services ?? []).join(", ")
						})
					]
				})
			}),
			diagram !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-testid": "flow-diagram",
				style: {
					flex: "1 1 auto",
					minHeight: "8rem",
					overflow: "auto"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagramViewer, {
					diagram,
					renderer: rendererName(config)
				})
			})
		]
	});
}
var import_react, import_jsx_runtime;
function init_Flow() {
	return (init_Flow = __esmMin((() => {
		init_src();
		init_column_esm();
		init_datatable_esm();
		init_dropdown_esm();
		init_inputtext_esm();
		import_react = require_react();
		init_useRealmData();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
init_Flow();
export { Flow };
