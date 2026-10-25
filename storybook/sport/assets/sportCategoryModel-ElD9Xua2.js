import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, Z as model } from "./iframe-DxBhgsxq.js";
//#region meta/model/sportCategoryModel.ts
var sportCategoryModel_default;
function init_sportCategoryModel() {
	return (init_sportCategoryModel = __esmMin((() => {
		init_types();
		sportCategoryModel_default = model(() => async function sportCategoryModel() {
			return {
				subject: "sport",
				object: "category",
				objectTitle: "Category",
				public: true,
				nameField: "category.categoryName",
				schema: { properties: { category: {
					properties: {
						categoryName: {
							title: "Name",
							required: true,
							filter: true
						},
						categoryKind: {
							title: "Kind",
							required: true,
							widget: { options: [
								{
									value: "age",
									label: "Age"
								},
								{
									value: "weight",
									label: "Weight"
								},
								{
									value: "level",
									label: "Level"
								}
							] }
						},
						categoryStatus: {
							title: "Status",
							required: true,
							widget: { options: [{
								value: "active",
								label: "Active"
							}, {
								value: "inactive",
								label: "Inactive"
							}] }
						},
						sportId: {
							title: "Sport",
							required: true,
							widget: { dropdown: "sport.sport" }
						},
						disciplineId: {
							title: "Discipline",
							widget: { dropdown: "sport.discipline" }
						},
						sourceName: { title: "Source" }
					},
					widget: { columns: [
						"categoryName",
						"sportId",
						"categoryKind",
						"categoryStatus"
					] }
				} } },
				cards: {
					browse: {
						label: "Categories",
						widgets: ["category"]
					},
					identity: {
						label: "Category",
						widgets: [
							"category.categoryName",
							"category.sportId",
							"category.disciplineId",
							"category.categoryKind",
							"category.categoryStatus",
							"category.sourceName"
						]
					}
				},
				layouts: { edit: [["identity"]] },
				browser: {
					title: "Categories",
					icon: "pi pi-tags",
					toolbar: [
						{
							label: "Create",
							icon: "pi pi-plus",
							action: "component/sport.category.new",
							permission: "sport.category.add"
						},
						{
							label: "Edit",
							icon: "pi pi-pencil",
							enabled: "current",
							method: "component/sport.category.open",
							params: "${current}"
						},
						{
							label: "Delete",
							icon: "pi pi-trash",
							enabled: "selected",
							confirm: "Delete the selected category?",
							method: "sport.category.remove",
							params: { categoryId: "${categoryId}" },
							refresh: true
						}
					]
				}
			};
		});
	})))();
}
//#endregion
init_sportCategoryModel();
export { sportCategoryModel_default as default };
