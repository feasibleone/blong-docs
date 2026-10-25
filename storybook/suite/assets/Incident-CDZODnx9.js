import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { B as PrimeReactContext, D as useMergeProps, W as init_api_esm, X as IconUtils, _ as ComponentBase, et as classNames, it as useText, n as init_inputtext_esm, rt as init_useText, t as InputText, tt as init_utils_esm, v as init_componentbase_esm, x as init_hooks_esm, y as useHandleStyle } from "./inputtext.esm-DVdHXlQv.js";
import { A as init_column_esm, k as Column, n as init_datatable_esm, t as DataTable } from "./datatable.esm-CRrgT_ub.js";
import { r as useRealmRead, t as init_useRealmData } from "./useRealmData-DUeXll-k.js";
//#region ../../common/temp/node_modules/.pnpm/primereact@10.9.7_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/primereact/tag/tag.esm.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
var import_react$1, TagBase, Tag;
function init_tag_esm() {
	return (init_tag_esm = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react());
		init_api_esm();
		init_componentbase_esm();
		init_hooks_esm();
		init_utils_esm();
		TagBase = ComponentBase.extend({
			defaultProps: {
				__TYPE: "Tag",
				value: null,
				severity: null,
				rounded: false,
				icon: null,
				style: null,
				className: null,
				children: void 0
			},
			css: {
				classes: {
					value: "p-tag-value",
					icon: "p-tag-icon",
					root: function root(_ref) {
						var props = _ref.props;
						return classNames("p-tag p-component", _defineProperty(_defineProperty({}, "p-tag-".concat(props.severity), props.severity !== null), "p-tag-rounded", props.rounded));
					}
				},
				styles: "\n@layer primereact {\n    .p-tag {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    .p-tag-icon,\n    .p-tag-value,\n    .p-tag-icon.pi {\n        line-height: 1.5;\n    }\n    \n    .p-tag.p-tag-rounded {\n        border-radius: 10rem;\n    }\n}\n"
			}
		});
		Tag = /*#__PURE__*/ import_react$1.forwardRef(function(inProps, ref) {
			var mergeProps = useMergeProps();
			var context = import_react$1.useContext(PrimeReactContext);
			var props = TagBase.getProps(inProps, context);
			var _TagBase$setMetaData = TagBase.setMetaData({ props }), ptm = _TagBase$setMetaData.ptm, cx = _TagBase$setMetaData.cx, isUnstyled = _TagBase$setMetaData.isUnstyled;
			useHandleStyle(TagBase.css.styles, isUnstyled, { name: "tag" });
			var elementRef = import_react$1.useRef(null);
			var iconProps = mergeProps({ className: cx("icon") }, ptm("icon"));
			var icon = IconUtils.getJSXIcon(props.icon, _objectSpread({}, iconProps), { props });
			import_react$1.useImperativeHandle(ref, function() {
				return {
					props,
					getElement: function getElement() {
						return elementRef.current;
					}
				};
			});
			var rootProps = mergeProps({
				ref: elementRef,
				className: classNames(props.className, cx("root")),
				style: props.style
			}, TagBase.getOtherProps(props), ptm("root"));
			var valueProps = mergeProps({ className: cx("value") }, ptm("value"));
			return /*#__PURE__*/ import_react$1.createElement("span", rootProps, icon, /*#__PURE__*/ import_react$1.createElement("span", valueProps, props.value), /*#__PURE__*/ import_react$1.createElement("span", null, props.children));
		});
		Tag.displayName = "Tag";
	})))();
}
//#endregion
//#region ../../core/blong-realm/pages/Incident.tsx
/** Severity is a word, so it is shown as one — and coloured, since that is how it is read. */
function severityTag(row) {
	return row.severity === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { value: row.severity });
}
function Incident() {
	const incidents = useRealmRead("blong.incident.find");
	const [filter, setFilter] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-column gap-3",
		children: [
			incidents.error !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
				className: "text-red-500",
				children: incidents.error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputText, {
				"data-testid": "browse-search",
				value: filter,
				onChange: (event) => setFilter(event.target.value),
				placeholder: useText("Filter")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataTable, {
				value: Array.isArray(incidents.data) ? incidents.data : [],
				loading: incidents.loading,
				globalFilter: filter,
				globalFilterFields: [
					"severity",
					"rootCause",
					"trace"
				],
				emptyMessage: useText("Nothing has gone wrong"),
				dataKey: "incidentId",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						field: "severity",
						header: useText("Severity"),
						body: severityTag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						field: "rootCause",
						header: useText("Where it started")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						header: useText("Services"),
						body: (row) => (row.services ?? []).join(", ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						header: useText("Kinds"),
						body: (row) => (row.kinds ?? []).join(", ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						field: "trace",
						header: useText("Trace")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						header: useText("First seen"),
						body: (row) => row.firstAt === void 0 ? "" : new Date(row.firstAt).toISOString()
					})
				]
			})
		]
	});
}
var import_react, import_jsx_runtime;
function init_Incident() {
	return (init_Incident = __esmMin((() => {
		init_column_esm();
		init_datatable_esm();
		init_inputtext_esm();
		init_tag_esm();
		import_react = require_react();
		init_useText();
		init_useRealmData();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
init_Incident();
export { Incident };
