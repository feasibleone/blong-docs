const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mermaid.core-DI9ia5Rs.js","./rolldown-runtime-V4kyJ4NV.js","./preload-helper-C3TOwP4X.js","./isEmpty-zcrDZYJI.js","./_baseFor-B9y9xzaI.js","./src-sxmhTtP3.js","./linear-DvfV9_k2.js","./defaultLocale-BOfwCSUT.js","./init-LJTXqKmY.js","./ordinal-GKARqQmH.js","./arc-D86mv2Ju.js","./path-DIPRVYpw.js","./dist-Dnv0KVkE.js","./chunk-5PVQY5BW-BNrAsxxX.js","./chunk-ICPOFSXX-BJUpm1HO.js","./line-HDHYW3M7.js","./array-DFDgVivh.js","./diagram-G4DWMVQ6-BF0Wny34.js","./chunk-426QAEUC-D7S82RV7.js","./chunk-4BX2VUAB-rczDBZBs.js","./mermaid-parser.core-DEiTatBO.js","./chunk-K5T4RW27-DXbIW-NN.js","./reduce-B8JZM-sh.js","./flatten-B4bMJ9xZ.js","./chunk-7N4EOEYR-DrrSjQwg.js","./chunk-67CJDMHE-C4ZA7dRj.js","./chunk-KGLVRYIC-BztDpLpL.js","./chunk-FOC6F5B3-CVJFzjxm.js","./chunk-AA7GKIK3-BIrrn9aO.js","./chunk-2KRD3SAO-ZxjxboIw.js","./chunk-ORNJ4GCN-mN0z7vOK.js","./chunk-LIHQZDEY-aTPpR3ub.js","./chunk-CIAEETIT-df_SIM5l.js","./chunk-EDXVE4YY-DTwX_Iqs.js","./chunk-X2U36JSP-BI7WAZPD.js","./ganttDiagram-T4ZO3ILL-CXkkoelU.js","./pieDiagram-DEJITSTG-HA_JZ27Q.js","./sankeyDiagram-XADWPNL6-AuOPD8BK.js","./xychartDiagram-5P7HB3ND-BMzxbsLc.js","./chunk-U2HBQHQK-XL9Il3zU.js","./chunk-BSJP7CBP-95HEPAJh.js","./chunk-ZZ45TVLE-UdhaSN4G.js","./chunk-5FUZZQ4R-CEQB-hrF.js","./rough.esm-BGhd6KFS.js","./chunk-ENJZ2VHE-Bh5_WwlO.js","./chunk-336JU56O-B422AEzf.js","./chunk-XPW4576I-lLJv0bj6.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { n as init_BlongContext, r as useBlong } from "./BlongContext-B_6NAJve.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { it as useText, n as init_inputtext_esm, rt as init_useText, t as InputText } from "./inputtext.esm-DVdHXlQv.js";
import { A as init_column_esm, g as init_dropdown_esm, h as Dropdown, k as Column, n as init_datatable_esm, t as DataTable } from "./datatable.esm-CRrgT_ub.js";
import { i as useThemePalette, n as init_Theme } from "./Theme-l0qEzVuS.js";
import { n as useRealmCall, r as useRealmRead, t as init_useRealmData } from "./useRealmData-DUeXll-k.js";
//#endregion
//#region ../../core/blong-browser/src/viewers/diagram/MermaidRenderer.tsx
function MermaidRenderer({ diagram, className }) {
	const isDark = (useThemePalette() ?? "dark") === "dark";
	const [state, setState] = (0, import_react$1.useState)(() => ({ diagram }));
	(0, import_react$1.useEffect)(() => {
		if (diagram.length === 0) return;
		let cancelled = false;
		(async () => {
			const id = `blong-diagram-${sequence += 1}`;
			try {
				const mermaid = (await __vitePreload(async () => {
					const { default: __vite_default__ } = await import("./mermaid.core-DI9ia5Rs.js");
					return { default: __vite_default__ };
				}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]), import.meta.url)).default;
				const theme = isDark ? "dark" : "neutral";
				if (appliedTheme !== theme) {
					mermaid.initialize({
						startOnLoad: false,
						securityLevel: "strict",
						suppressErrorRendering: true,
						theme
					});
					appliedTheme = theme;
				}
				const { svg } = await mermaid.render(id, diagram);
				if (cancelled) return;
				setState(svg.length > 0 ? {
					diagram,
					svg
				} : {
					diagram,
					failed: true
				});
			} catch (error) {
				console.error("[blong] diagram render failed", {
					diagram,
					error
				});
				if (!cancelled) setState({
					diagram,
					failed: true
				});
			} finally {
				document.getElementById(`d${id}`)?.remove();
				document.getElementById(`i${id}`)?.remove();
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [diagram, isDark]);
	const current = state.diagram === diagram ? state : { diagram };
	if (current.failed || diagram.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("pre", {
		className,
		"data-diagram-fallback": "true",
		children: diagram
	});
	if (current.svg === void 0) return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
		className,
		"data-diagram-pending": "true"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
		className,
		"data-diagram-rendered": "true",
		"data-diagram-text": diagram,
		dangerouslySetInnerHTML: { __html: current.svg }
	});
}
var import_react$1, import_jsx_runtime$2, appliedTheme, sequence;
function init_MermaidRenderer$1() {
	return (init_MermaidRenderer$1 = __esmMin((() => {
		import_react$1 = require_react();
		init_Theme();
		import_jsx_runtime$2 = require_jsx_runtime();
		init_preload_helper();
		sequence = 0;
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/viewers/diagram/rendererRegistry.ts
/** Register a renderer under the name a realm will use in its config. */
function registerDiagramRenderer(name, renderer) {
	renderers.set(name, renderer);
}
/** The renderer registered under a name, if this build knows one. */
function getDiagramRenderer(name) {
	return name === void 0 ? void 0 : renderers.get(name);
}
var renderers;
function init_rendererRegistry() {
	return (init_rendererRegistry = __esmMin((() => {
		renderers = /* @__PURE__ */ new Map();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/viewers/diagram/DiagramViewer.tsx
/**
* Draw a diagram through the registered renderer for its notation.
*
* An unknown notation is shown as it came rather than as nothing: the text *is*
* the diagram, and a renderer for it may exist in another build.
*/
function DiagramViewer({ diagram, renderer = DEFAULT_DIAGRAM_RENDERER, className }) {
	const Renderer = getDiagramRenderer(renderer);
	if (Renderer === void 0) return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("pre", {
		className,
		"data-diagram-renderer": renderer,
		children: diagram
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
		className,
		"data-diagram-renderer": renderer,
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Renderer, { diagram })
	});
}
var import_jsx_runtime$1, DEFAULT_DIAGRAM_RENDERER;
function init_DiagramViewer() {
	return (init_DiagramViewer = __esmMin((() => {
		init_MermaidRenderer$1();
		init_rendererRegistry();
		import_jsx_runtime$1 = require_jsx_runtime();
		DEFAULT_DIAGRAM_RENDERER = "mermaid";
		registerDiagramRenderer(DEFAULT_DIAGRAM_RENDERER, MermaidRenderer);
	})))();
}
//#endregion
//#region ../../core/blong-realm/pages/Flow.tsx
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
		init_DiagramViewer(), init_BlongContext(), init_useText();
		init_column_esm();
		init_datatable_esm();
		init_dropdown_esm();
		init_inputtext_esm();
		import_react = require_react();
		init_useRealmData();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
init_Flow();
export { Flow };
