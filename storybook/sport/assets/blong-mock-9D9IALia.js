import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as init_build } from "./build-BIfDqKqb.js";
import { B as mergeWithSymbols, z as init_blong_lib } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-mock/defaults.ts
/** Capitalize the first letter, skipping a leading `$` placeholder (`$object` → `$Object`). */
function capital(s) {
	return s.replace(/^(\$*)([a-z])/, (_m, pre, c) => pre + c.toUpperCase());
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
	const openLayout = spec.openLayout ?? "edit";
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
		subjectTitle: capital(subject),
		object,
		objectTitle,
		keyField,
		nameField,
		openLayout,
		public: false,
		details: spec.details ?? [],
		schema: { properties: {
			[object]: {
				properties: {
					[keyField]: {},
					[nameField.split(".").pop()]: {
						title: `${objectTitle} Name`,
						filter: true,
						sort: true,
						action: `component/${subject}.${object}.open`
					}
				},
				title: "",
				widget: {
					type: "table",
					listAction: `${subject}.${object}.find`,
					keyField,
					selectionMode: "single",
					columns: [nameField.split(".").pop()],
					parent: "$.selected.navigator"
				}
			},
			...detailSchemaProps,
			navigator: {
				title: "",
				type: "array",
				widget: { type: "navigator" }
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
				browse: `${subject}.${object}.browse`,
				add: `${subject}.${object}.add`,
				edit: `${subject}.${object}.edit`,
				delete: `${subject}.${object}.remove`
			},
			resultSet: object,
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
				panels: [
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
				]
			}
		},
		reports: {},
		methods: {
			find: `${subject}.${object}.find`,
			get: `${subject}.${object}.get`,
			add: `${subject}.${object}.add`,
			edit: `${subject}.${object}.edit`,
			remove: `${subject}.${object}.remove`,
			report: `${subject}.${object}.report`
		}
	}, spec);
}
function init_defaults() {
	return (init_defaults = __esmMin((() => {
		init_blong_lib();
	})))();
}
//#endregion
//#region ../../core/blong-mock/index.ts
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
			this.log?.debug?.({
				[keyField]: id,
				...rest,
				$meta: { method: `${subject}.${object}.get` }
			}, `Mock get ${id}`);
			return structuredClone({ [object]: (await fixture(`${subject}.${object}`)).find((item) => item[keyField] === id) || null });
		}
		Object.assign(mocks, {
			subjectObjectSchema() {
				this.log?.debug?.({
					$meta: { method: "subjectObjectSchema" },
					subject,
					object
				}, "Mock schema");
				return {};
			},
			async [`${subject}.${object}.find`]({ paging: { pageNumber, pageSize } = {
				pageNumber: 1,
				pageSize: 10
			}, paging, orderBy, search, ...params }) {
				this.log?.debug?.({
					$meta: { method: `${subject}.${object}.find` },
					paging,
					orderBy,
					search,
					...params
				}, "Mock find");
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
				this.log?.debug?.({
					[keyField]: id,
					...rest,
					$meta: { method: `${subject}.${object}.remove` }
				}, `Mock remove ${id}`);
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
				this.log?.debug?.({
					paging,
					orderBy,
					search,
					...filterParams,
					$meta: { method: `${subject}.${object}.report` }
				}, "Mock report");
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
				this.log?.debug?.({
					[object]: {
						[keyField]: id,
						...data
					},
					...rest,
					$meta: { method: `${subject}.${object}.edit` }
				}, `Mock edit ${id}`);
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
				this.log?.debug?.({
					[object]: data,
					...rest,
					$meta: { method: `${subject}.${object}.add` }
				}, "Mock add");
				const items = await fixture(`${subject}.${object}`);
				data[keyField] = Math.max(0, ...items.map((item) => Number(item[keyField]) || 0)) + 1;
				items.push(data);
				return get.apply(this, [{ [keyField]: data[keyField] }]);
			}
		});
		mocks[`${subject}.dropdown.list`] ||= async () => {
			const result = {};
			this.log?.debug?.({ $meta: { method: `${subject}.dropdown.list` } }, `Generating dropdown list mock`);
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
			this.log?.debug?.({
				...result,
				$meta: { method: `${subject}.dropdown.list` }
			}, "Mock dropdown");
			return result;
		};
	}
	this.log?.debug?.({
		$meta: { method: "subject.object.mock" },
		mocks: Object.keys(mocks).join(", ")
	}, "Generated mocks");
	return mocks;
}
function init_blong_mock() {
	return (init_blong_mock = __esmMin((() => {
		init_build();
		init_defaults();
	})))();
}
//#endregion
export { withDefaults as i, init_blong_mock as n, init_defaults as r, blong_mock_exports as t };
