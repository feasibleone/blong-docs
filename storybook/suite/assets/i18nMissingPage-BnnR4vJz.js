import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { t as require_react } from "./react-DUbJxPEF.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BGSnrdEt.js";
import { a as init_collect, c as translationReport, s as renderedCounts } from "./appStore-p_jHiGC2.js";
import { $ as init_primereact, g as Button, nt as Text, rt as init_Text } from "./iframe-Dd4aRJs7.js";
// ../../core/blong-browser/src/pages/i18nMissingPage.tsx
/**
* The untranslated-strings page.
*
* Lists what this session rendered and the dictionary could not answer — the same
* report the Playwright seed writer consumes, shown instead of written. Client
* only: it reads the collector and offers the lines as text, because writing a
* seed file is the runner's job and two writers of one file would race (`D-634`).
*
* The workflow it supports is the one a browser is good at: open the screens that
* matter, then read the list. A Playwright run covers the ones nobody opens.
*/
function I18nMissingPage() {
	const [report, setReport] = (0, import_react.useState)(() => translationReport());
	const [counts, setCounts] = (0, import_react.useState)(() => renderedCounts());
	const [copied, setCopied] = (0, import_react.useState)(false);
	const refresh = (0, import_react.useCallback)(() => {
		setReport(translationReport());
		setCounts(renderedCounts());
	}, []);
	const seedLines = report.missing.map((key) => `${key}=`).join("\n");
	const copy = (0, import_react.useCallback)(async () => {
		try {
			await navigator.clipboard.writeText(seedLines);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}, [seedLines]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "blong-i18n-missing",
		style: { padding: 16 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				gap: 8,
				alignItems: "center",
				marginBottom: 12
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					style: { margin: 0 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Untranslated strings" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					style: { opacity: .7 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Language" }),
						": ",
						report.language
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					style: { opacity: .7 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Missing" }),
						": ",
						report.missing.length,
						" / ",
						report.rendered.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					label: "Refresh",
					icon: "pi pi-refresh",
					size: "small",
					onClick: refresh
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					label: "Copy seed lines",
					icon: "pi pi-copy",
					size: "small",
					outlined: true,
					disabled: report.missing.length === 0,
					onClick: copy
				}),
				copied && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Copied" }) })
			]
		}), report.missing.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Nothing is missing. Open the screens you want to check, then refresh." }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "p-datatable-table",
			style: {
				width: "100%",
				borderCollapse: "collapse"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
				style: {
					textAlign: "left",
					padding: 6
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Key" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
				style: {
					textAlign: "right",
					padding: 6,
					width: 100
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Renders" })
			})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: report.missing.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				style: {
					padding: 6,
					fontFamily: "monospace"
				},
				children: key
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				style: {
					padding: 6,
					textAlign: "right"
				},
				children: counts[key] ?? 0
			})] }, key)) })]
		})]
	});
}
var import_react, import_jsx_runtime;
function init_i18nMissingPage() {
	return (init_i18nMissingPage = __esmMin((() => {
		import_react = require_react();
		init_primereact();
		init_Text();
		init_collect();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
init_i18nMissingPage();
export { I18nMissingPage };
