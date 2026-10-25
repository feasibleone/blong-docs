import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { a as Button, it as useText, n as init_inputtext_esm, o as init_button_esm, rt as init_useText, t as InputText } from "./inputtext.esm-DVdHXlQv.js";
import { n as useRealmCall, t as init_useRealmData } from "./useRealmData-DUeXll-k.js";
//#region ../../core/blong-realm/pages/Search.tsx
/**
* Ask the service what it knows about something.
*
* The query goes to the service rather than being filtered here: the service
* holds the templates, their fingerprints and their embedding, and a search run
* in the browser would have to fetch everything first and still be unable to
* rank. The answer is shown as it came — the shape of a search result is the
* service's business, and a viewer that reshaped it would be a second, quieter
* definition of it.
*/
function Search() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)({});
	const [busy, setBusy] = (0, import_react.useState)(false);
	const call = useRealmCall();
	const submit = async () => {
		setBusy(true);
		setResult(await call("blong.search.find", { query }));
		setBusy(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-column gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputText, {
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: useText("What are you looking for?"),
					className: "flex-1",
					onKeyDown: (event) => {
						if (event.key === "Enter") submit();
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					label: useText("Search"),
					loading: busy,
					onClick: () => void submit()
				})]
			}),
			result.error !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
				className: "text-red-500",
				children: result.error
			}),
			result.data !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "text-sm overflow-auto",
				children: JSON.stringify(result.data, null, 2)
			})
		]
	});
}
var import_react, import_jsx_runtime;
function init_Search() {
	return (init_Search = __esmMin((() => {
		init_button_esm();
		init_inputtext_esm();
		import_react = require_react();
		init_useText();
		init_useRealmData();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
init_Search();
export { Search };
