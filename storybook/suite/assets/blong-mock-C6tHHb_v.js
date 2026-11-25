import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-DpEnGzO4.js";
import { At as init_build, f as init_lukaot$1, gt as mergeWithSymbols, ht as init_blong_lib, y as contribute } from "./iframe-Na9SG7k6.js";
// ../../core/blong-mock/defaults.ts
/** Capitalize the first letter, skipping a leading `$` placeholder (`$object` → `$Object`). */
function capital(s) {
	return s.replace(/^(\$*)([a-z])/, (_m, pre, c) => pre + c.toUpperCase());
}
/** The column a dotted field path addresses (`sport.sportName` → `sportName`). */
function columnOf(field) {
	return field.split(".").pop();
}
/**
* Fill in a parent declaration.
*
* A self-tree (`parent: 'unit'` on the unit model) is the case where the
* navigator lists the model's own rows: the key is the record's own, the label is
* its own name, and the field that names the parent is the declared one — the
* default `parent<Object>Id`, since `<object>Id` is the record itself.
*/
function resolveParent(spec, nameField) {
	const declared = spec.parent;
	if (!declared) return void 0;
	const parent = typeof declared === "string" ? { object: declared } : declared;
	const subject = parent.subject ?? spec.subject;
	const object = parent.object ?? spec.object;
	const selfTree = subject === spec.subject && object === spec.object;
	const keyField = parent.keyField ?? `${object}Id`;
	const field = parent.field ?? (selfTree ? `parent${capital(object)}Id` : `${object}Id`);
	const labelField = parent.labelField ?? (selfTree ? columnOf(nameField) : `${object}Name`);
	const parentField = parent.parentField ?? (selfTree ? field : void 0);
	return {
		subject,
		object,
		field,
		keyField,
		labelField,
		...parentField ? { parentField } : {},
		listAction: parent.listAction ?? `${subject}.${object}.find`,
		...parent.listParams ? { listParams: parent.listParams } : {},
		master: parent.master ?? { [field]: keyField }
	};
}
/**
* The order a page is read in: its own declaration, else the name column its
* model declared, else no order at all.
*
* The fallback is the *declared* name field, never the `${object}Name` default: a
* column named after the object is a guess, and an order the table cannot resolve
* fails the whole read (`Unknown column 'applicationName' in 'order clause'`) —
* a page that cannot be read is worse than one read in an arbitrary order. A model
* that names neither is reported by `modelWarnings()` instead.
*/
function resolveSort(sort, nameColumn) {
	if (sort === false) return false;
	if (sort === void 0) return nameColumn ? {
		field: nameColumn,
		dir: "ASC"
	} : false;
	if (typeof sort === "string") return {
		field: sort,
		dir: "ASC"
	};
	const field = sort.field ?? nameColumn;
	return field ? {
		field,
		dir: sort.dir ?? "ASC"
	} : false;
}
/**
* Apply standard defaults to a partial ModelSpec.
*
* @param spec - Partial model spec provided by the realm
* @returns Fully resolved model spec with all defaults filled in
*/
function withDefaults(spec) {
	const { subject, object } = spec;
	const objectTitle = spec.objectTitle ?? capital(object);
	const keyField = spec.keyField ?? `${object}Id`;
	const nameField = spec.nameField ?? `${object}.${object}Name`;
	const nameColumn = columnOf(nameField);
	const openLayout = spec.openLayout ?? "edit";
	const parent = resolveParent(spec, nameField);
	const sort = resolveSort(spec.browser?.sort, spec.nameField === void 0 ? void 0 : nameColumn);
	const navigatorListAction = (spec.schema?.properties?.navigator?.widget)?.listAction;
	const browserNavigator = spec.browser?.navigator ?? (!!parent || !!navigatorListAction);
	const sortableProperties = sort && sort.field !== nameColumn ? { [sort.field]: { sort: true } } : {};
	const details = spec.details ?? [];
	const detailSchemaProps = {};
	const detailCards = {};
	for (const detail of details) {
		const detailObjectTitle = capital(detail.object);
		detailSchemaProps[detail.object] = {
			type: "array",
			title: detailObjectTitle,
			widget: {
				type: "table",
				keyField: detail.keyField ?? `${detail.object}Id`,
				actions: {
					allowAdd: true,
					allowEdit: true,
					allowDelete: true
				}
			},
			items: {
				type: "object",
				properties: {}
			}
		};
		const cardId = `details-${detail.object}`;
		detailCards[cardId] = {
			label: detailObjectTitle,
			widgets: [detail.object]
		};
	}
	const editLayout = details.length > 0 ? { items: [{
		id: "edit",
		label: objectTitle,
		widgets: ["edit"]
	}, ...details.map((detail) => ({
		id: `details-${detail.object}`,
		label: capital(detail.object),
		widgets: [`details-${detail.object}`]
	}))] } : ["edit", "hidden"];
	return mergeWithSymbols({
		subject,
		subjectTitle: spec.subjectTitle ?? capital(subject),
		object,
		objectTitle,
		classifier: spec.classifier ?? false,
		menu: spec.menu ?? {},
		keyField,
		nameField,
		openLayout,
		parent,
		public: false,
		details: spec.details ?? [],
		schema: { properties: {
			[object]: {
				properties: {
					[keyField]: {},
					[nameColumn]: {
						title: `${objectTitle} Name`,
						filter: true,
						sort: true,
						action: `component/${subject}.${object}.open`
					},
					...sortableProperties
				},
				title: "",
				widget: {
					type: "table",
					listAction: `${subject}.${object}.find`,
					keyField,
					selectionMode: "single",
					columns: [nameColumn],
					parent: "$.selected.navigator",
					...parent ? { master: parent.master } : {},
					...sort ? { listParams: { orderBy: [{
						field: sort.field,
						dir: sort.dir
					}] } } : {},
					scrollHeight: "flex"
				}
			},
			...detailSchemaProps,
			navigator: {
				title: "",
				type: "array",
				widget: {
					type: "navigator",
					...parent ? {
						listAction: parent.listAction,
						keyField: parent.keyField,
						labelField: parent.labelField,
						...parent.parentField ? { parentField: parent.parentField } : {},
						...parent.listParams ? { listParams: parent.listParams } : {}
					} : {}
				}
			}
		} },
		cards: {
			edit: {
				label: objectTitle,
				widgets: [nameField]
			},
			hidden: {
				hidden: true,
				label: "Hidden fields",
				widgets: [`${object}.${keyField}`]
			},
			navigator: {
				label: "",
				widgets: ["navigator"]
			},
			browse: {
				label: "",
				widgets: [object]
			},
			detail: {
				label: "",
				readOnly: true,
				watch: `$.selected.${object}`,
				widgets: [`$.edit.${object}.${nameField.split(".").pop()}`]
			},
			...detailCards
		},
		browser: {
			title: `Browse ${objectTitle}`,
			icon: "pi pi-list",
			permission: {
				browse: `${subject}.${object}.find`,
				add: `${subject}.${object}.add`,
				edit: `${subject}.${object}.edit`,
				delete: `${subject}.${object}.remove`
			},
			resultSet: object,
			navigator: browserNavigator,
			sort,
			toolbar: [
				{
					label: "Create",
					icon: "pi pi-plus",
					action: `component/${subject}.${object}.new`,
					permission: `${subject}.${object}.add`
				},
				{
					label: "Edit",
					icon: "pi pi-pencil",
					enabled: "current",
					method: `component/${subject}.${object}.open`,
					params: "${current}"
				},
				{
					label: "Delete",
					icon: "pi pi-trash",
					enabled: "selected",
					confirm: "Delete selected record?",
					method: `${subject}.${object}.remove`,
					refresh: true,
					params: { [keyField]: "${" + keyField + "}" }
				}
			],
			filter: {}
		},
		editor: { resultSet: object },
		report: {
			title: `${objectTitle} Report`,
			permission: `${subject}.${object}.report`
		},
		layouts: {
			edit: editLayout,
			browse: {
				type: "split",
				panels: browserNavigator ? [
					{
						size: 20,
						minSize: 10,
						cards: ["navigator"]
					},
					{
						size: 50,
						minSize: 30,
						cards: ["browse"]
					},
					{
						size: 30,
						minSize: 15,
						cards: ["detail"]
					}
				] : [{
					size: 70,
					minSize: 30,
					cards: ["browse"]
				}, {
					size: 30,
					minSize: 15,
					cards: ["detail"]
				}]
			}
		},
		reports: {},
		deletion: { mode: "prompt" },
		methods: {
			find: `${subject}.${object}.find`,
			get: `${subject}.${object}.get`,
			add: `${subject}.${object}.add`,
			edit: `${subject}.${object}.edit`,
			remove: `${subject}.${object}.remove`,
			report: `${subject}.${object}.report`
		}
	}, {
		...spec,
		parent: void 0,
		browser: spec.browser ? {
			...spec.browser,
			sort: void 0
		} : void 0
	});
}
/**
* Everything a resolved model promises but does not state.
*
* Two of these are silent otherwise, and both cost the reader: a browse table is
* always paged, so a page with no order may show a row twice and lose another
* between two pages, and a navigator with nothing to list is a fifth of the page
* spent on an empty panel. The aggregator logs what comes back here once, when
* the pages are built.
*/
function modelWarnings(model) {
	const warnings = [];
	if (model.browser.sort === false) warnings.push(`[${model.subject}.${model.object}] browse page is paged but no sort could be determined — declare \`nameField\` or \`browser.sort\`; without an order a row may appear twice and another on no page`);
	const navigatorListAction = (model.schema.properties?.navigator?.widget)?.listAction;
	if (model.browser.navigator && !navigatorListAction) warnings.push(`[${model.subject}.${model.object}] navigator is on but nothing lists — declare \`parent\` or set \`browser.navigator: false\``);
	return warnings;
}
function init_defaults() {
	return (init_defaults = __esmMin((() => {
		init_blong_lib();
	})))();
}
function init_lukaot() {
	return (init_lukaot = __esmMin((() => {
		init_lukaot$1();
		contribute({ log: {
			/** A mock answered one call, with the request it was handed. */
			mockCallAnswered: {
				level: "debug",
				message: "mock answered {predicate}"
			},
			/** A subject's mock surface was generated from the fixture data. */
			mockSurfaceGenerated: {
				level: "debug",
				message: "generated the mock surface of {subject}"
			}
		} });
	})))();
}
// ../../core/blong-mock/index.ts
var blong_mock_exports = /* @__PURE__ */ __exportAll({ mock: () => mock });
async function mock(models, blong) {
	this.config.context ||= {};
	this.config.context.fixtureData ||= {};
	this.config.context.subjectObject ||= {};
	const fixtureData = this.config.context.fixtureData;
	const subjectObject = this.config.context.subjectObject;
	const mocks = {};
	const fixture = async (name) => {
		const subject = name.split(".")[0];
		if (!fixtureData[subject]) {
			fixtureData[subject] ||= {};
			Object.assign(fixtureData[subject], await blong.handler[`${subject}Fixture`]({}, {}));
		}
		return fixtureData[subject][name] ?? [];
	};
	for (const rawModel of models) {
		const model = withDefaults(rawModel);
		const { subject, object, keyField } = model;
		subjectObject[subject] ||= {};
		subjectObject[subject][object] = model;
		async function get({ [keyField]: id, ...rest }) {
			this.signal?.mockCallAnswered?.({
				predicate: `${subject}.${object}.get`,
				[keyField]: id,
				...rest
			});
			return structuredClone({ [object]: (await fixture(`${subject}.${object}`)).find((item) => item[keyField] === id) || null });
		}
		Object.assign(mocks, {
			subjectObjectSchema() {
				this.signal?.mockCallAnswered?.({
					predicate: "subject.object.schema",
					subject,
					object
				});
				return {};
			},
			async [`${subject}.${object}.find`]({ paging: { pageNumber, pageSize } = {
				pageNumber: 1,
				pageSize: 10
			}, paging, orderBy, search, ...params }) {
				this.signal?.mockCallAnswered?.({
					predicate: `${subject}.${object}.find`,
					paging,
					orderBy,
					search,
					...params
				});
				return structuredClone(await fixture(`${subject}.${object}`)).filter((item) => {
					for (const [key, value] of Object.entries(params)) if (typeof value === "string" && typeof item[key] === "string") {
						if (!String(item[key]).toLowerCase().includes(value.toLowerCase())) return false;
					} else if (item[key] !== value) return false;
					if (search) {
						if (!Object.values(item).some((val) => String(val).toLowerCase().includes(search.toLowerCase()))) return false;
					}
					return true;
				}).sort((a, b) => {
					if (!orderBy) return 0;
					for (const order of orderBy) {
						const field = typeof order === "string" ? order : order.field;
						const dir = typeof order === "string" ? "ASC" : order.dir;
						if (typeof a[field] === "number" && typeof b[field] === "number") {
							if (a[field] < b[field]) return dir === "ASC" ? -1 : 1;
							if (a[field] > b[field]) return dir === "ASC" ? 1 : -1;
						} else {
							const aStr = String(a[field]).toLowerCase();
							const bStr = String(b[field]).toLowerCase();
							if (aStr < bStr) return dir === "ASC" ? -1 : 1;
							if (aStr > bStr) return dir === "ASC" ? 1 : -1;
						}
					}
					return 0;
				}).slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
			},
			[`${subject}.${object}.get`]: get,
			async [`${subject}.${object}.remove`]({ [keyField]: id, ...rest }) {
				this.signal?.mockCallAnswered?.({
					predicate: `${subject}.${object}.remove`,
					[keyField]: id,
					...rest
				});
				const items = await fixture(`${subject}.${object}`);
				const index = items.findIndex((item) => item[keyField] === id);
				if (index !== -1) {
					items.splice(index, 1);
					return { success: true };
				} else return {
					success: false,
					message: "Item not found"
				};
			},
			async [`${subject}.${object}.report`]({ paging: { pageNumber, pageSize } = {
				pageNumber: 1,
				pageSize: 25
			}, paging, orderBy, search, ...filterParams }) {
				this.signal?.mockCallAnswered?.({
					predicate: `${subject}.${object}.report`,
					paging,
					orderBy,
					search,
					...filterParams
				});
				const allRows = await fixture(`${subject}.${object}`);
				let result = structuredClone(allRows);
				for (const [key, value] of Object.entries(filterParams)) if (value !== void 0 && value !== null && value !== "") result = result.filter((item) => String(item[key] ?? "").toLowerCase().includes(String(value).toLowerCase()));
				if (search) {
					const s = String(search).toLowerCase();
					result = result.filter((item) => Object.values(item).some((v) => String(v ?? "").toLowerCase().includes(s)));
				}
				if (orderBy?.length) result = result.sort((a, b) => {
					for (const order of orderBy) {
						const field = typeof order === "string" ? order : order.field;
						const dir = typeof order === "string" ? "ASC" : order.dir ?? "ASC";
						const av = a[field];
						const bv = b[field];
						if (av === bv) continue;
						if (typeof av === "number" && typeof bv === "number") return dir === "ASC" ? av - bv : bv - av;
						const cmp = String(av ?? "").localeCompare(String(bv ?? ""));
						return dir === "ASC" ? cmp : -cmp;
					}
					return 0;
				});
				const recordsTotal = result.length;
				return {
					items: result.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
					pagination: { recordsTotal }
				};
			},
			async [`${subject}.${object}.edit`]({ [object]: { [keyField]: id, ...data }, ...rest }) {
				this.signal?.mockCallAnswered?.({
					predicate: `${subject}.${object}.edit`,
					[object]: {
						[keyField]: id,
						...data
					},
					...rest
				});
				const items = await fixture(`${subject}.${object}`);
				const index = items.findIndex((item) => item[keyField] === id);
				if (index !== -1) {
					items[index] = {
						...items[index],
						...data
					};
					return get.apply(this, [{ [keyField]: id }]);
				} else return {
					success: false,
					message: "Item not found"
				};
			},
			async [`${subject}.${object}.add`]({ [object]: data, ...rest }) {
				this.signal?.mockCallAnswered?.({
					predicate: `${subject}.${object}.add`,
					[object]: data,
					...rest
				});
				const items = await fixture(`${subject}.${object}`);
				data[keyField] = Math.max(0, ...items.map((item) => Number(item[keyField]) || 0)) + 1;
				items.push(data);
				return get.apply(this, [{ [keyField]: data[keyField] }]);
			}
		});
		mocks[`${subject}.dropdown.list`] ||= async () => {
			const result = {};
			this.signal?.mockSurfaceGenerated?.({ subject });
			for (const object of Object.keys(subjectObject[subject] ?? {})) {
				const model = subjectObject[subject][object];
				const { nameField, keyField } = withDefaults(model);
				const fixtureData = await fixture(`${subject}.${object}`);
				const name = `${subject}.${object}`;
				result[name] = fixtureData.map(({ [keyField]: value, [nameField.split(".").pop()]: label }) => ({
					value,
					label
				}));
			}
			this.signal?.mockCallAnswered?.({
				predicate: `${subject}.dropdown.list`,
				...result
			});
			return result;
		};
	}
	this.signal?.mockSurfaceGenerated?.({
		subject: Object.keys(subjectObject).join(", ") || "none",
		mocks: Object.keys(mocks).length
	});
	return mocks;
}
function init_blong_mock() {
	return (init_blong_mock = __esmMin((() => {
		init_build();
		init_defaults();
		init_lukaot();
	})))();
}
export { withDefaults as a, modelWarnings as i, init_blong_mock as n, init_defaults as r, blong_mock_exports as t };
