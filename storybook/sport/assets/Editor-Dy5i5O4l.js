import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { a as useQueryClient, i as init_QueryClientProvider, n as init_BlongContext, r as useBlong } from "./BlongContext-B_6NAJve.js";
import { S as useAction, _ as useWatch, a as FormContext, c as useBlongForm, d as useDesignMode, f as DesignModeProvider, g as useFormState, h as useForm, l as useBlongFormState, m as init_index_esm, n as init_Deck, o as FormStateContext, p as init_DesignModeContext, s as init_FormContext, t as Deck, u as init_useDesignMode, v as ActionButton, x as init_useAction, y as init_ActionButton } from "./Deck-B7MkA9kL.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { n as init_appStore, r as useAppStore } from "./appStore-Cfk3hkpQ.js";
import { K as confirmPopup, L as Toolbar, V as init_primereact, w as OverlayPanel } from "./primereact-_rYrCq5a.js";
//#region ../../core/blong-browser/src/hooks/useLayout.ts
/** Type guard: is the layout config in tab/steps form? */
function isTabLayout(config) {
	return !Array.isArray(config) && "items" in config;
}
/** Type guard: is the layout config a split layout? */
function isSplitLayout(config) {
	return !Array.isArray(config) && config.type === "split";
}
/**
* Check whether a dot-notation field path resolves to a leaf property in the schema.
* E.g. 'input.input' checks schema.properties.input.properties.input.
* Single-segment paths (e.g. 'table') are checked directly in schemaProps.
* Paths with '#id' suffix (ICardWidgetEntry column-override keys) strip the suffix first.
*/
function schemaHasField(schemaProps, fieldPath) {
	const hashIdx = fieldPath.indexOf("#");
	const basePath = hashIdx >= 0 ? fieldPath.slice(0, hashIdx) : fieldPath;
	const dot = basePath.indexOf(".");
	if (dot === -1) return basePath in schemaProps;
	const head = basePath.slice(0, dot);
	const tail = basePath.slice(dot + 1);
	const nested = schemaProps[head]?.properties;
	return nested != null && schemaHasField(nested, tail);
}
/**
* Compute layout structure from schema + cards config + layout key.
*/
function useLayout(schema, cardsConfig, layoutKey, layouts, editors) {
	return (0, import_react$4.useMemo)(() => {
		const schemaProps = schema?.properties ?? {};
		const cards = {};
		const cardDefs = { ...cardsConfig ?? {} };
		if (Object.keys(cardDefs).length === 0) {
			const allFieldNames = Object.keys(schemaProps);
			cardDefs["default"] = {
				label: schema?.title ?? "Details",
				fields: allFieldNames
			};
		}
		for (const [name, cardCfg] of Object.entries(cardDefs)) {
			let fields;
			const columnOverrides = {};
			const widgetList = cardCfg.widgets ?? cardCfg.fields;
			if (Array.isArray(widgetList)) {
				fields = [];
				for (const entry of widgetList) if (typeof entry === "string") fields.push(entry);
				else {
					const key = `${entry.name}#${entry.id}`;
					fields.push(key);
					columnOverrides[key] = entry.widgets;
				}
			} else if (widgetList && typeof widgetList === "object") fields = Object.keys(widgetList);
			else fields = Object.keys(schemaProps);
			const validFields = !!cardCfg.watch || !schema ? fields : fields.filter((f) => schemaHasField(schemaProps, f) || !!editors?.[f]);
			cards[name] = {
				name,
				label: "label" in cardCfg ? cardCfg.label : name,
				fields: validFields,
				config: cardCfg,
				...Object.keys(columnOverrides).length > 0 ? { columnOverrides } : {}
			};
		}
		const expandField = (f) => editors?.[f]?.properties ?? [f];
		const layoutDef = layouts?.[layoutKey];
		if (layoutDef && isTabLayout(layoutDef)) {
			const tabs = layoutDef.items.map((item) => ({
				id: item.id,
				label: item.label,
				icon: item.icon,
				cardNames: item.component ? [] : flattenLayout(item.widgets),
				component: item.component
			}));
			const allTabCards = tabs.flatMap((t) => t.cardNames.flat());
			return {
				rows: [],
				cards,
				allFields: [...new Set(allTabCards.flatMap((c) => (cards[c]?.fields ?? []).flatMap(expandField)))],
				tabs,
				layoutType: layoutDef.type === "steps" ? "steps" : "tabs",
				orientation: layoutDef.orientation
			};
		}
		if (layoutDef && isSplitLayout(layoutDef)) {
			const panels = layoutDef.panels;
			const allPanelCards = panels.flatMap((p) => p.cards);
			return {
				rows: [],
				cards,
				allFields: [...new Set(allPanelCards.flatMap((c) => (cards[c]?.fields ?? []).flatMap(expandField)))],
				layoutType: "split",
				orientation: layoutDef.orientation ?? "horizontal",
				panels
			};
		}
		let rows;
		if (layoutDef) rows = flattenLayout(layoutDef);
		else rows = Object.keys(cards).map((c) => [c]);
		const allFields = [...new Set(Object.values(cards).flatMap((c) => c.fields.flatMap(expandField)))];
		return {
			rows,
			cards,
			allFields,
			layoutType: "flat"
		};
	}, [
		schema,
		cardsConfig,
		layoutKey,
		layouts,
		editors
	]);
}
/** Flatten layout definition to array of column groups.
*
* Each top-level element in the layout array = **one grid column**.
* - A string element    → one card alone in that column.
* - An array element    → multiple cards stacked vertically in that column.
*
* Examples:
*   'habitat'               → [['habitat']]           (one column, one card)
*   ['edit', 'denied']      → [['edit', 'denied']]    (one column, two stacked cards)
*   [['edit'], ['denied']]  → [['edit', 'denied']]    (also one column — inner arrays merge)
*/
function flattenLayout(layout) {
	const result = [];
	for (const row of layout) if (typeof row === "string") result.push([row]);
	else if (Array.isArray(row)) {
		const columnCards = [];
		for (const item of row) if (typeof item === "string") columnCards.push(item);
		else if (Array.isArray(item)) columnCards.push(...item);
		if (columnCards.length) result.push(columnCards);
	}
	return result;
}
var import_react$4;
function init_useLayout() {
	return (init_useLayout = __esmMin((() => {
		import_react$4 = require_react();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/design/PropertyEditor.tsx
function PropertyEditor() {
	const { active, selected, config, updateConfig } = useDesignMode();
	const formCtx = useBlongForm();
	if (!active) return null;
	if (!selected) return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
		className: "blong-property-editor blong-property-editor--empty",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("i", { className: "pi pi-info-circle blong-property-editor__icon" }), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
			className: "blong-property-editor__hint",
			children: "Click a card or field to inspect it"
		})]
	});
	if (selected.type === "card") {
		const cardName = selected.id.replace(/^card-/, "");
		const origCard = formCtx?.cards[cardName];
		const cardOverride = config.cards[cardName] ?? {};
		const cardConfig = {
			...origCard?.config ?? {},
			...cardOverride
		};
		const update = (patch) => updateConfig({ cards: {
			...config.cards,
			[cardName]: {
				...cardOverride,
				...patch
			}
		} });
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
			className: "blong-property-editor",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
					className: "blong-property-editor__title",
					children: "Card"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-card-label",
						children: "Label"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-card-label",
						type: "text",
						className: "blong-property-editor__input",
						value: cardConfig.label ?? origCard?.label ?? "",
						onChange: (e) => update({ label: e.target.value })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-card-class",
						children: "CSS class"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-card-class",
						type: "text",
						className: "blong-property-editor__input",
						value: cardConfig.className ?? "",
						onChange: (e) => update({ className: e.target.value || void 0 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__check",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-card-collapsible",
						type: "checkbox",
						checked: cardConfig.collapsible ?? false,
						onChange: (e) => update({ collapsible: e.target.checked || void 0 })
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-card-collapsible",
						children: "Collapsible"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__check",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-card-hidden",
						type: "checkbox",
						checked: cardConfig.hidden ?? false,
						onChange: (e) => update({ hidden: e.target.checked || void 0 })
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-card-hidden",
						children: "Hidden"
					})]
				})
			]
		});
	}
	if (selected.type === "field") {
		const colonIdx = selected.id.indexOf(":", 6);
		const fieldName = selected.id.substring(6, colonIdx);
		const cardName = selected.id.substring(colonIdx + 1);
		const baseSchema = formCtx?.schema?.properties?.[fieldName];
		const schemaOverride = config.schema?.[fieldName] ?? {};
		const card = formCtx?.cards[cardName];
		const updateField = (patch) => updateConfig({ schema: {
			...config.schema ?? {},
			[fieldName]: {
				...schemaOverride,
				...patch
			}
		} });
		const currentTitle = schemaOverride.title ?? baseSchema?.title ?? fieldName;
		const currentType = schemaOverride.type ?? baseSchema?.type ?? "";
		const currentWidgetType = schemaOverride.widget?.type ?? baseSchema?.widget?.type ?? "input";
		const currentRequired = schemaOverride.fieldRequired ?? baseSchema?.fieldRequired ?? false;
		const currentReadOnly = schemaOverride.readOnly ?? baseSchema?.readOnly ?? false;
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
			className: "blong-property-editor p-component m-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__title",
					children: ["Field · ", fieldName]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
						className: "blong-property-editor__key",
						children: "Card"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
						className: "blong-property-editor__val",
						children: card?.label ?? cardName
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-field-title",
						children: "Label"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-field-title",
						type: "text",
						className: "blong-property-editor__input",
						value: currentTitle,
						onChange: (e) => updateField({ title: e.target.value || void 0 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-field-type",
						children: "Type"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("select", {
						id: "pe-field-type",
						className: "blong-property-editor__input",
						value: currentType,
						onChange: (e) => updateField({ type: e.target.value || void 0 }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("option", {
							value: "",
							children: "—"
						}), FIELD_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("option", {
							value: t,
							children: t
						}, t))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-field-widget",
						children: "Widget"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("select", {
						id: "pe-field-widget",
						className: "blong-property-editor__input",
						value: currentWidgetType,
						onChange: (e) => updateField({ widget: {
							...schemaOverride.widget ?? {},
							type: e.target.value
						} }),
						children: WIDGET_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("option", {
							value: t,
							children: t
						}, t))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__check",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-field-required",
						type: "checkbox",
						checked: currentRequired,
						onChange: (e) => updateField({ required: e.target.checked || void 0 })
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-field-required",
						children: "Required"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__check",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-field-readonly",
						type: "checkbox",
						checked: currentReadOnly,
						onChange: (e) => updateField({ readOnly: e.target.checked || void 0 })
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-field-readonly",
						children: "Read-only"
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
		className: "blong-property-editor",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
			className: "blong-property-editor__title",
			children: selected.type
		}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
			className: "blong-property-editor__hint",
			children: selected.id
		})]
	});
}
function DesignAddCardButton({ onCardAdded }) {
	const { updateConfig, config } = useDesignMode();
	const handleAdd = () => {
		const name = `card_${Date.now()}`;
		updateConfig({ cards: {
			...config.cards,
			[name]: {
				label: "New Card",
				widgets: []
			}
		} });
		onCardAdded(name);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("button", {
		type: "button",
		className: "p-button p-component p-button-icon-only ml-1",
		"aria-label": "Add card",
		title: "Add card",
		onClick: handleAdd,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", { className: "p-button-icon p-c pi pi-id-card" }), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
			className: "p-button-label p-c",
			children: "\xA0"
		})]
	});
}
function DesignAddFieldButton({ schema: schemaProp }) {
	const { updateConfig, config, selected } = useDesignMode();
	const formCtx = useBlongForm();
	const [open, setOpen] = (0, import_react$3.useState)(false);
	const allFields = Object.keys(formCtx?.schema?.properties ?? schemaProp ?? {});
	const usedFields = /* @__PURE__ */ new Set([...Object.values(formCtx?.cards ?? {}).flatMap((c) => c.fields), ...Object.values(config.cards).flatMap((c) => {
		return c.widgets ?? (Array.isArray(c.fields) ? c.fields : []);
	})]);
	const availableFields = allFields.filter((f) => !usedFields.has(f));
	const handleAddField = (fieldName) => {
		const cardName = selected?.type === "card" ? selected.id.replace(/^card-/, "") : Object.keys(formCtx?.cards ?? {})[0] ?? Object.keys(config.cards)[0];
		if (!cardName) return;
		const baseCard = formCtx?.cards[cardName];
		const designCard = config.cards[cardName];
		const existing = designCard?.widgets ?? baseCard?.fields ?? [];
		updateConfig({ cards: {
			...config.cards,
			[cardName]: {
				...designCard ?? {},
				widgets: [...existing, fieldName],
				fields: void 0
			}
		} });
		setOpen(false);
	};
	if (!open && availableFields.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("span", {
		style: {
			position: "relative",
			display: "inline-block"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("button", {
			type: "button",
			className: "p-button p-component p-button-icon-only ml-1",
			"aria-label": "Add field",
			title: "Add field",
			disabled: availableFields.length === 0,
			onClick: () => setOpen((o) => !o),
			children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", { className: "p-button-icon p-c pi pi-plus-circle" }), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
				className: "p-button-label p-c",
				children: "\xA0"
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
			className: "blong-design-field-picker",
			children: availableFields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
				className: "blong-design-field-picker__item",
				onClick: () => handleAddField(f),
				children: formCtx?.schema?.properties?.[f]?.title ?? f
			}, f))
		})]
	});
}
var import_react$3, import_jsx_runtime$4, WIDGET_TYPES, FIELD_TYPES;
function init_PropertyEditor() {
	return (init_PropertyEditor = __esmMin((() => {
		import_react$3 = require_react();
		init_FormContext();
		init_useDesignMode();
		import_jsx_runtime$4 = require_jsx_runtime();
		WIDGET_TYPES = [
			"input",
			"text",
			"textArea",
			"password",
			"number",
			"integer",
			"boolean",
			"checkbox",
			"switch",
			"date",
			"time",
			"dateTime",
			"dropdown",
			"multiSelect",
			"select",
			"selectTable",
			"chips",
			"file",
			"image",
			"table",
			"json",
			"code",
			"label",
			"link",
			"divider"
		];
		FIELD_TYPES = [
			"string",
			"number",
			"boolean",
			"object",
			"array"
		];
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Json/Json.tsx
function buildDiff(current, previous) {
	if (typeof current !== "object" || current === null) return [{
		key: "value",
		current,
		previous,
		status: previous === void 0 ? "added" : current === previous ? "unchanged" : "changed"
	}];
	const currentObj = current;
	const previousObj = previous ?? {};
	const allKeys = /* @__PURE__ */ new Set([...Object.keys(currentObj), ...Object.keys(previousObj)]);
	const lines = [];
	for (const key of allKeys) {
		const curr = currentObj[key];
		const prev = previousObj[key];
		let status = "unchanged";
		if (!(key in previousObj)) status = "added";
		else if (!(key in currentObj)) status = "removed";
		else if (JSON.stringify(curr) !== JSON.stringify(prev)) status = "changed";
		lines.push({
			key,
			current: curr,
			previous: prev,
			status
		});
	}
	return lines;
}
function Json({ value, previous, showUnchangedValues = true, keyValue }) {
	if (keyValue) {
		const diff = buildDiff(value, previous);
		return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("dl", {
			className: "blong-json blong-json--kv",
			children: diff.filter((l) => showUnchangedValues || l.status !== "unchanged").map((line) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
				className: `blong-json__line blong-json__line--${line.status}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("dt", {
					className: "blong-json__key",
					children: line.key
				}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("dd", {
					className: "blong-json__value",
					children: [line.status === "changed" && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
						className: "blong-json__prev",
						children: JSON.stringify(line.previous)
					}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
						className: "blong-json__curr",
						children: JSON.stringify(line.current ?? line.previous)
					})]
				})]
			}, line.key))
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("pre", {
		className: "blong-json",
		children: JSON.stringify(value, null, 2)
	});
}
var import_jsx_runtime$3;
function init_Json() {
	return (init_Json = __esmMin((() => {
		import_jsx_runtime$3 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/design/FormInspector.tsx
function Section({ title, value, defaultOpen = false, children }) {
	const [open, setOpen] = (0, import_react$2.useState)(defaultOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
		className: "blong-inspector__section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("button", {
			type: "button",
			className: "blong-inspector__toggle",
			onClick: () => setOpen((o) => !o),
			children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", { className: `pi pi-chevron-${open ? "down" : "right"} blong-inspector__chevron` }), title]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
			className: "blong-inspector__body",
			children: children ?? /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Json, { value })
		})]
	});
}
/**
* Renders one row per field showing dirty / touched / error status.
* Uses useFormState (subscribes to dirty/touched/errors) and useWatch (subscribes
* to values) separately so each only triggers when its own slice changes.
*/
function FieldsSection({ dirtyFields, touchedFields, errors }) {
	const allFields = /* @__PURE__ */ new Set([
		...Object.keys(dirtyFields),
		...Object.keys(touchedFields),
		...Object.keys(errors)
	]);
	if (allFields.size === 0) return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("p", {
		className: "blong-inspector__empty",
		children: "No dirty / touched / error fields yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("dl", {
		className: "blong-inspector__fields",
		children: [...allFields].map((field) => {
			const dirty = !!dirtyFields[field];
			const touched = !!touchedFields[field];
			const error = errors[field];
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
				className: "blong-inspector__field-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("dt", {
					className: `blong-inspector__field-name${dirty ? " blong-inspector__field-name--dirty" : ""}`,
					children: field
				}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("dd", {
					className: "blong-inspector__field-flags",
					children: [
						dirty && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
							className: "blong-inspector__badge blong-inspector__badge--dirty",
							children: "D"
						}),
						touched && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
							className: "blong-inspector__badge blong-inspector__badge--touched",
							children: "T"
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
							className: "blong-inspector__badge blong-inspector__badge--error",
							title: error.message,
							children: String(error.type ?? "E")
						}),
						error?.message && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
							className: "blong-inspector__error-msg",
							children: error.message
						})
					]
				})]
			}, field);
		})
	});
}
function FormInspectorInner({ control }) {
	const stateCtx = useBlongFormState();
	const values = useWatch({ control });
	const { dirtyFields, touchedFields, errors, isDirty, isLoading, submitCount, isValid } = useFormState({ control });
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
		className: "blong-property-editor blong-inspector p-component m-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
				className: "blong-property-editor__title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("i", { className: "pi pi-info-circle blong-inspector__icon" }), "Form Inspector"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Section, {
				title: "Fields",
				defaultOpen: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(FieldsSection, {
					dirtyFields,
					touchedFields,
					errors
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Section, {
				title: "Values",
				value: values,
				defaultOpen: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Section, {
				title: "Table Selections",
				value: stateCtx?.tableSelections ?? {},
				defaultOpen: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Section, {
				title: "State",
				value: {
					editorMode: stateCtx?.editorMode,
					editorLayout: stateCtx?.editorLayout,
					readOnly: stateCtx?.readOnly,
					loading: stateCtx?.loading,
					isDirty,
					isValid,
					submitCount,
					isLoading
				},
				defaultOpen: true
			})
		]
	});
}
/**
* FormInspector — render inside a <Form> to display live form state in debug mode.
* Returns null when rendered outside a Form context (guards against both FormContext
* and FormStateContext being unavailable).
*/
function FormInspector() {
	const formCtx = useBlongForm();
	if (!formCtx) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(FormInspectorInner, { control: formCtx.control });
}
var import_react$2, import_jsx_runtime$2;
function init_FormInspector() {
	return (init_FormInspector = __esmMin((() => {
		import_react$2 = require_react();
		init_index_esm();
		init_FormContext();
		init_Json();
		import_jsx_runtime$2 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Form/Form.tsx
function Form({ schema, cards: cardsConfig, layout = "default", layouts, value, onChange, onSubmit, readOnly = false, loading = false, serverErrors, id, checkPermission, dropdowns, onTableSelect, onLayoutChange, onDirtyChange, resetKey, rightPanel, methods, onFieldChange, editors, editorMode, editorLayout, reportMode, reportParams }) {
	const fallbackId = (0, import_react$1.useId)();
	const formId = id ?? fallbackId;
	const designCtx = useDesignMode();
	const effectiveCards = (0, import_react$1.useMemo)(() => {
		if (!designCtx.active || !cardsConfig) return cardsConfig;
		const result = {};
		for (const [name, card] of Object.entries(cardsConfig)) {
			const override = designCtx.config.cards[name];
			result[name] = override ? {
				...card,
				...override
			} : card;
		}
		for (const [name, override] of Object.entries(designCtx.config.cards)) if (!(name in result)) result[name] = override;
		return result;
	}, [
		cardsConfig,
		designCtx.active,
		designCtx.config.cards
	]);
	const effectiveSchema = (0, import_react$1.useMemo)(() => {
		if (!designCtx.active || !schema) return schema;
		const overrides = designCtx.config.schema;
		if (!overrides || Object.keys(overrides).length === 0) return schema;
		const newProps = { ...schema.properties };
		for (const [fieldName, override] of Object.entries(overrides)) if (newProps[fieldName]) {
			newProps[fieldName] = {
				...newProps[fieldName],
				...override
			};
			const o = override;
			if (o.widget && newProps[fieldName].widget) newProps[fieldName] = {
				...newProps[fieldName],
				widget: {
					...newProps[fieldName].widget,
					...o.widget
				}
			};
		}
		return {
			...schema,
			properties: newProps
		};
	}, [
		schema,
		designCtx.active,
		designCtx.config.schema
	]);
	const layoutResult = useLayout(effectiveSchema, effectiveCards, layout, layouts, editors);
	const { cards } = layoutResult;
	/**
	* Tracks rows selected in table widgets with selectionMode: 'single'.
	* Key = field name; value = {row, index} (without __key) or null.
	*/
	const [tableSelections, setTableSelections] = (0, import_react$1.useState)({});
	const handleTableSelect = (0, import_react$1.useCallback)((fieldName, selection) => {
		setTableSelections((prev) => ({
			...prev,
			[fieldName]: selection
		}));
		onTableSelect?.(fieldName, selection);
	}, [onTableSelect]);
	const { control, handleSubmit, reset, setError, getValues, setValue, formState } = useForm({ mode: "onBlur" });
	(0, import_react$1.useEffect)(() => {
		onDirtyChange?.(formState.isDirty);
	}, [formState.isDirty, onDirtyChange]);
	(0, import_react$1.useEffect)(() => {
		if (value !== void 0) reset(value);
	}, [value, reset]);
	(0, import_react$1.useEffect)(() => {
		if (resetKey === void 0 || resetKey === 0) return;
		reset(value ?? {});
	}, [resetKey]);
	(0, import_react$1.useEffect)(() => {
		if (!serverErrors) return;
		for (const [field, message] of Object.entries(serverErrors)) setError(field, {
			type: "server",
			message
		});
	}, [serverErrors, setError]);
	const handleFormSubmit = async (data) => {
		await onSubmit?.(data);
	};
	const handleFormInvalid = (fieldErrors) => {
		const count = Object.keys(fieldErrors).length;
		if (count === 0) return;
		useAppStore.getState().showToast({
			severity: "error",
			summary: "Validation error",
			detail: count === 1 ? "Please correct the highlighted field." : `Please correct ${count} highlighted fields.`
		});
	};
	const { config: { portal } } = useBlong();
	const debug = portal?.debug ?? false;
	const stableContextValue = (0, import_react$1.useMemo)(() => ({
		schema: effectiveSchema,
		cards,
		control,
		dropdowns,
		onChange,
		handleTableSelect,
		setValue,
		getValues,
		checkPermission,
		layoutResult,
		layout,
		formId,
		onLayoutChange,
		methods,
		onFieldChange,
		editors
	}), [
		effectiveSchema,
		cards,
		dropdowns,
		onChange,
		handleTableSelect,
		checkPermission,
		layoutResult,
		layout,
		formId,
		onLayoutChange,
		methods,
		onFieldChange,
		editors,
		control,
		getValues,
		setValue
	]);
	const stateContextValue = (0, import_react$1.useMemo)(() => ({
		tableSelections,
		readOnly,
		loading,
		editorMode,
		editorLayout,
		reportMode,
		reportParams
	}), [
		tableSelections,
		readOnly,
		loading,
		editorMode,
		editorLayout,
		reportMode,
		reportParams
	]);
	const effectiveRightPanel = debug ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(import_jsx_runtime$1.Fragment, { children: [rightPanel, /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(FormInspector, {})] }) : rightPanel;
	const formBody = effectiveRightPanel ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		className: "blong-form-layout",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("form", {
			id: formId,
			onSubmit: handleSubmit(handleFormSubmit, handleFormInvalid),
			className: "blong-form",
			noValidate: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Deck, { id: "root" })
		}), effectiveRightPanel]
	}) : /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("form", {
		id: formId,
		onSubmit: handleSubmit(handleFormSubmit, handleFormInvalid),
		className: "blong-form",
		noValidate: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Deck, { id: "root" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(FormContext, {
		value: stableContextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(FormStateContext, {
			value: stateContextValue,
			children: formBody
		})
	});
}
var import_react$1, import_jsx_runtime$1;
function init_Form$1() {
	return (init_Form$1 = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_index_esm();
		init_BlongContext();
		init_FormInspector(), init_useDesignMode();
		init_useLayout();
		init_appStore();
		init_Deck();
		init_FormContext();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Editor/Editor.tsx
function deriveInitialMode(mode, editMode) {
	if (mode !== void 0) return mode;
	return editMode ? "edit" : "view";
}
/**
* Derive effective layout key from mode and layout name with sensible fallbacks.
*
* Resolution order:
* 1. `{mode}{Capital(layout)}` — e.g. `editDefault`, `newDefault`, `viewDefault`
* 2. For non-edit modes: `edit{Capital(layout)}` — e.g. `editDefault`
* 3. `layout` as-is — e.g. `default`
*/
function resolveLayoutKey(mode, layout, layouts) {
	if (!layouts) return layout;
	const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
	const modeKey = mode + cap(layout);
	if (modeKey in layouts) return modeKey;
	if (mode !== "edit") {
		const editKey = "edit" + cap(layout);
		if (editKey in layouts) return editKey;
	}
	return layout;
}
/**
* Derive a display title from the current mode and resolved layout key.
*
* Splits the layout key at capital-letter boundaries and capitalises each word.
* When the layout starts with the current mode the mode word is used directly;
* otherwise only the capitalized mode is returned.
*
* Examples:
*   ('edit', 'editSplit')       → 'Edit Split'
*   ('edit', 'editThumbIndex')  → 'Edit Thumb Index'
*   ('new',  'edit')            → 'New'   (mode != layout prefix → no suffix)
*   ('view', 'viewDefault')     → 'View'  ('default' suffix filtered out)
*/
function resolveTabTitle(mode, resolvedLayout) {
	const words = resolvedLayout.replace(/([A-Z])/g, " $1").trim().split(/\s+/);
	const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
	const suffix = words[0]?.toLowerCase() === mode ? words.slice(1).filter((w) => w.toLowerCase() !== "default") : [];
	const modeTitle = cap(mode);
	return suffix.length ? `${modeTitle} ${suffix.map(cap).join(" ")}` : modeTitle;
}
function getPath(obj, path) {
	if (!obj || typeof obj !== "object") return void 0;
	const parts = path.split(".");
	let cur = obj;
	for (const part of parts) {
		if (cur === null || cur === void 0) return void 0;
		cur = cur[part];
	}
	return cur;
}
function resolveTemplate(params, context) {
	if (params === void 0 || params === null) return void 0;
	if (typeof params === "string") {
		const singleExpr = params.trim().match(/^\$\{([^{}]+)\}$/);
		if (singleExpr) {
			const val = getPath(context, singleExpr[1].trim());
			if (val !== null && typeof val === "object") return val;
			return { value: val };
		}
		return { value: params.replace(/\$\{([^{}]+)\}/g, (_, expr) => {
			const v = getPath(context, expr.trim());
			return v === void 0 || v === null ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
		}) };
	}
	return Object.fromEntries(Object.entries(params).map(([k, v]) => {
		if (typeof v === "string") {
			const r = resolveTemplate(v, context);
			return [k, r?.value !== void 0 ? r.value : r];
		}
		return [k, v];
	}));
}
function evalEnabled(enabled, currentRow, selectedRows, isDirty) {
	if (enabled === "current") return currentRow !== null;
	if (enabled === "selected") return selectedRows.length > 0;
	if (enabled === "dirty") return isDirty;
	if (enabled === "clean") return !isDirty;
	return enabled !== false;
}
function Editor({ schema, cards, layout = "default", layouts, value: staticValue, loadAction, loadParams, saveAction, createAction, onSave, dropdowns, toolbar = [], toolbarRight = [], mode: initialModeProp, editMode: initialEditMode = false, editable = true, designable = false, initialDesignMode = false, checkPermission, methods, onFieldChange, editors, className = "blong-editor", title: titleProp, tabId, refreshNamespace, queryAction }) {
	const formId = (0, import_react.useId)();
	const [currentMode, setCurrentMode] = (0, import_react.useState)(() => deriveInitialMode(initialModeProp, initialEditMode));
	const editMode = currentMode !== "view";
	const [localValue, setLocalValue] = (0, import_react.useState)(void 0);
	const [serverErrors, setServerErrors] = (0, import_react.useState)(void 0);
	const [isDirty, setIsDirty] = (0, import_react.useState)(false);
	/** Incremented by doReset to imperatively reset the Form's RHF state to the current value */
	const [formResetKey, setFormResetKey] = (0, import_react.useState)(0);
	/** Whether the last save succeeded and the form hasn't been touched since */
	const [savedSuccess, setSavedSuccess] = (0, import_react.useState)(false);
	/** Number of in-flight toolbar button calls — form is read-only while > 0 */
	const [toolbarBusy, setToolbarBusy] = (0, import_react.useState)(0);
	const handleToolbarBusy = (0, import_react.useCallback)((busy) => {
		setToolbarBusy((n) => n + (busy ? 1 : -1));
	}, []);
	/** error.print from the last failed save — shown in OverlayPanel anchored to save button */
	const [validationHint, setValidationHint] = (0, import_react.useState)(void 0);
	const saveButtonRef = (0, import_react.useRef)(null);
	const cancelButtonRef = (0, import_react.useRef)(null);
	const hintOverlayRef = (0, import_react.useRef)(null);
	const [designMode, setDesignMode] = (0, import_react.useState)(designable && initialDesignMode);
	const [localLayouts, setLocalLayouts] = (0, import_react.useState)(() => layouts);
	/**
	* Report params submitted by the "Run Report" button.
	* Undefined until the first report run; set to the submitted form values on each run.
	* Passed to Form → FormStateContext → TableWidget to trigger a re-fetch with new filter params.
	*/
	const [reportParams, setReportParams] = (0, import_react.useState)(void 0);
	const isReportMode = !!queryAction;
	/**
	* Per-field table selection tracking for toolbar button enabled/params resolution.
	* Only table widgets (not navigator) contribute to toolbar context.
	*/
	const [tableSelections, setTableSelections] = (0, import_react.useState)({});
	const [lastTableFieldName, setLastTableFieldName] = (0, import_react.useState)(null);
	/**
	* Returns true if the field drives the Editor toolbar context.
	* Navigator widgets publish selections for cascade filtering only —
	* all other array-field widgets (table, etc.) update toolbar context.
	*/
	const isTableWidget = (0, import_react.useCallback)((fieldName) => {
		return schema?.properties?.[fieldName]?.widget?.type !== "navigator";
	}, [schema?.properties]);
	const handleTableSelect = (0, import_react.useCallback)((fieldName, selection) => {
		if (!isTableWidget(fieldName)) return;
		setTableSelections((prev) => ({
			...prev,
			[fieldName]: selection
		}));
		setLastTableFieldName((prev) => {
			if (selection) return fieldName;
			if (prev === fieldName) return null;
			return prev;
		});
	}, [isTableWidget]);
	/** Template context derived from the most recent non-null table widget selection */
	const lastRow = lastTableFieldName ? tableSelections[lastTableFieldName]?.row ?? null : null;
	const selectionContext = {
		id: lastRow?.id,
		current: lastRow,
		selected: lastRow ? [lastRow] : [],
		...lastRow ?? {}
	};
	const resolvedLayout = resolveLayoutKey(currentMode, layout, localLayouts ?? layouts);
	const titlePropRef = (0, import_react.useRef)(titleProp);
	titlePropRef.current = titleProp;
	const setTabTitleStore = useAppStore((s) => s.setTabTitle);
	(0, import_react.useEffect)(() => {
		if (!tabId || !setTabTitleStore) return;
		const tp = titlePropRef.current;
		const computedTitle = tp === null || tp === void 0 ? resolveTabTitle(currentMode, resolvedLayout) : typeof tp === "string" ? tp : tp[currentMode] ?? resolveTabTitle(currentMode, resolvedLayout);
		setTabTitleStore(tabId, computedTitle);
	}, [
		tabId,
		currentMode,
		resolvedLayout,
		setTabTitleStore
	]);
	const handleCardAdded = (0, import_react.useCallback)((name) => {
		setLocalLayouts((prev) => {
			const key = resolveLayoutKey(currentMode, layout, prev ?? layouts);
			const cur = prev?.[key];
			const flat = Array.isArray(cur) ? [...cur] : [];
			return {
				...prev ?? {},
				[key]: [...flat, name]
			};
		});
	}, [
		currentMode,
		layout,
		layouts
	]);
	const handleFormChange = (0, import_react.useCallback)(() => {
		setSavedSuccess(false);
		setValidationHint(void 0);
	}, []);
	const handleLayoutChange = (0, import_react.useCallback)((key, newLayout) => {
		setLocalLayouts((prev) => ({
			...prev ?? {},
			[key]: newLayout
		}));
	}, []);
	const loader = useAction(staticValue ? "" : loadAction ?? "", "query", loadParams);
	const entityValue = localValue ?? staticValue ?? loader.data ?? void 0;
	const queryClient = useQueryClient();
	const creator = useAction(createAction ?? saveAction ?? "", "mutation");
	const saver = useAction(saveAction ?? "", "mutation");
	const activeSaver = currentMode === "new" ? creator : saver;
	const activeSaving = creator.loading || saver.loading;
	(0, import_react.useEffect)(() => {
		if (validationHint && saveButtonRef.current) hintOverlayRef.current?.show(null, saveButtonRef.current);
		else hintOverlayRef.current?.hide();
	}, [validationHint]);
	const handleSubmit = async (formValue) => {
		if (isReportMode) {
			setReportParams(formValue);
			return;
		}
		setServerErrors(void 0);
		const isCreate = currentMode === "new";
		try {
			const savedValue = await activeSaver.call(formValue) ?? formValue;
			setLocalValue(savedValue);
			setIsDirty(false);
			setSavedSuccess(true);
			if (isCreate) {
				setCurrentMode("edit");
				setFormResetKey((k) => k + 1);
			}
			setValidationHint(void 0);
			onSave?.(savedValue);
			const ns = (isCreate ? createAction ?? saveAction : saveAction)?.split(".").slice(0, -1).join(".");
			if (ns) {
				queryClient.invalidateQueries({ queryKey: [ns + ".find"] });
				queryClient.invalidateQueries({ queryKey: [ns + ".get"] });
			}
		} catch (err) {
			const blongErr = err;
			if (Array.isArray(blongErr?.validation)) {
				const fieldErrors = {};
				for (const { field, message } of blongErr.validation) fieldErrors[field] = message;
				setServerErrors(fieldErrors);
				if (blongErr.print) setValidationHint(blongErr.print);
			}
		}
	};
	const leftButtons = [...isReportMode ? [{
		label: "Run Report",
		icon: "pi pi-play",
		submit: true,
		title: "Run Report"
	}] : [...editable && currentMode === "view" ? [{
		label: "Edit",
		icon: "pi pi-pencil",
		action: "__edit__"
	}] : [], ...editMode ? [{
		label: "Save",
		icon: savedSuccess ? "pi pi-check" : "pi pi-save",
		submit: true,
		action: "__save__"
	}, {
		label: "Reset",
		icon: "pi pi-replay",
		action: "__cancel__"
	}] : []], ...toolbar];
	const rightButtons = [...toolbarRight, ...designable ? [{
		label: "Design",
		icon: "pi pi-cog",
		action: "__design__"
	}] : []];
	/** True while any toolbar action or save is in-flight — disables all remaining buttons */
	const globalBusy = toolbarBusy > 0 || activeSaving;
	const handleToolbarAction = (actionName) => {
		if (actionName === "__edit__") setCurrentMode("edit");
		if (actionName === "__design__") setDesignMode((d) => !d);
		if (actionName === "__refresh__" && refreshNamespace) queryClient.invalidateQueries({ predicate: (q) => typeof q.queryKey[0] === "string" && q.queryKey[0].startsWith(refreshNamespace + ".") });
		if (actionName === "__cancel__") {
			const doReset = () => {
				setLocalValue(void 0);
				setIsDirty(false);
				setSavedSuccess(false);
				setValidationHint(void 0);
				setCurrentMode(deriveInitialMode(initialModeProp, initialEditMode));
				setFormResetKey((k) => k + 1);
			};
			if (isDirty) confirmPopup({
				target: cancelButtonRef.current,
				message: "Changed data will not be saved. Are you sure you want to proceed?",
				icon: "pi pi-exclamation-triangle",
				accept: doReset
			});
			else doReset();
		}
	};
	/** Render a custom ActionButton with selection-aware enabled/params resolution */
	const renderActionBtn = (btn, i) => {
		const resolvedParams = resolveTemplate(btn.params, selectionContext);
		const resolvedDisabled = globalBusy || !evalEnabled(btn.enabled, selectionContext.current, selectionContext.selected, isDirty);
		const resolvedBtn = resolvedParams != null ? {
			...btn,
			params: resolvedParams
		} : btn;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
			...resolvedBtn,
			disabled: resolvedDisabled,
			formId,
			className: "mr-2",
			onBusyChange: handleToolbarBusy
		}, i);
	};
	const leftContent = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "blong-toolbar-left",
		children: leftButtons.map((btn, i) => {
			const actionName = typeof btn.action === "string" ? btn.action : btn.action?.method ?? "";
			const isDisabled = (actionName === "__save__" || actionName === "__cancel__") && (!isDirty || activeSaving || toolbarBusy > 0);
			if (actionName === "__edit__" || actionName === "__cancel__" || actionName === "__refresh__") {
				const testIdSuffix = actionName.replace(/__/g, "");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					ref: actionName === "__cancel__" ? cancelButtonRef : void 0,
					type: "button",
					className: `p-button p-component p-button-icon-only mr-2${isDisabled ? " p-disabled" : ""}`,
					"aria-label": btn.label || btn.title,
					title: btn.title,
					disabled: isDisabled,
					"data-testid": `editor-${testIdSuffix}`,
					onClick: () => handleToolbarAction(actionName),
					children: [btn.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `p-button-icon p-c pi ${btn.icon}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "p-button-label p-c",
						children: "\xA0"
					})]
				}, i);
			}
			if (actionName === "__save__") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				ref: saveButtonRef,
				type: "submit",
				form: formId,
				className: `p-button p-component p-button-icon-only mr-2${isDisabled ? " p-disabled" : ""}`,
				"aria-label": btn.label,
				disabled: isDisabled,
				"data-testid": "editor-save",
				children: [btn.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `p-button-icon p-c pi ${activeSaving || toolbarBusy > 0 ? "pi-spin pi-spinner" : btn.icon}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "p-button-label p-c",
					children: "\xA0"
				})]
			}, i);
			return renderActionBtn(btn, i);
		})
	});
	const rightContent = rightButtons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "blong-toolbar-right",
		children: rightButtons.map((btn, i) => {
			const actionName = typeof btn.action === "string" ? btn.action : btn.action?.method ?? "";
			if (actionName === "__design__") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "blong-design-toolbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `p-button p-component p-button-icon-only${designMode ? " p-button-success" : ""}`,
					"aria-label": btn.label,
					"aria-pressed": designMode,
					onClick: () => handleToolbarAction(actionName),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `p-button-icon p-c pi ${designMode ? "pi-check" : "pi-cog"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "p-button-label p-c",
						children: "\xA0"
					})]
				}), designMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAddCardButton, { onCardAdded: handleCardAdded }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAddFieldButton, {
					schema,
					cards
				})] })]
			}, i);
			return renderActionBtn(btn, i);
		})
	}) : void 0;
	const editorContent = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		"data-testid": "blong-browser-test",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverlayPanel, {
				ref: hintOverlayRef,
				className: "blong-validation-hint",
				style: { maxWidth: 320 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "p-error",
					children: validationHint
				})
			}),
			(leftButtons.length > 0 || rightButtons.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolbar, {
				left: leftContent,
				right: rightContent,
				className: "border-none border-bottom-1 border-50 p-2",
				style: backgroundNone
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
				id: formId,
				schema,
				cards,
				layout: resolvedLayout,
				layouts: localLayouts,
				value: entityValue,
				onChange: handleFormChange,
				onSubmit: isReportMode || saveAction || createAction ? handleSubmit : void 0,
				onDirtyChange: setIsDirty,
				resetKey: formResetKey,
				onTableSelect: handleTableSelect,
				readOnly: isReportMode ? false : !editMode || activeSaving || toolbarBusy > 0 || loader.loading,
				loading: loader.loading,
				serverErrors,
				checkPermission,
				methods,
				editors,
				onFieldChange,
				dropdowns,
				onLayoutChange: designMode ? handleLayoutChange : void 0,
				rightPanel: designable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyEditor, {}) : void 0,
				editorMode: currentMode,
				editorLayout: resolvedLayout,
				reportMode: isReportMode,
				reportParams
			})
		]
	});
	if (!designable) return editorContent;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignModeProvider, {
		active: designMode,
		initialConfig: {
			cards: cards ?? {},
			layouts: localLayouts ?? {}
		},
		children: editorContent
	});
}
var import_react, import_jsx_runtime, backgroundNone;
function init_Editor() {
	return (init_Editor = __esmMin((() => {
		init_primereact();
		init_QueryClientProvider();
		import_react = require_react();
		init_DesignModeContext();
		init_PropertyEditor();
		init_useAction();
		init_appStore();
		init_ActionButton();
		init_Form$1();
		import_jsx_runtime = require_jsx_runtime();
		backgroundNone = { background: "none" };
	})))();
}
//#endregion
init_Editor();
export { Editor, resolveTabTitle };
