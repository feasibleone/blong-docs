import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Xt as model, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../demo/blong-marine/meta/model/marineFamilyModel.ts
var marineFamilyModel_default;
function init_marineFamilyModel() {
	return (init_marineFamilyModel = __esmMin((() => {
		init_types();
		marineFamilyModel_default = model(() => async function marineFamilyModel() {
			return {
				subject: "marine",
				object: "family",
				objectTitle: "Family",
				public: true,
				nameField: "family.familyName",
				schema: { properties: { family: {
					properties: {},
					widget: { columns: [
						"familyName",
						"order",
						"class"
					] }
				} } },
				cards: {
					browse: {
						label: "Family",
						widgets: ["family"]
					},
					edit: {
						label: "Family Details",
						widgets: [
							"family.familyName",
							"family.order",
							"family.class",
							"family.familyDescription"
						]
					},
					editFull: {
						label: "Full Details",
						widgets: [
							"family.familyName",
							"family.parentFamilyId",
							"family.order",
							"family.class",
							"family.familyDescription"
						]
					}
				},
				layouts: {
					edit: ["edit"],
					editFull: ["editFull"]
				},
				browser: {
					icon: "pi pi-sitemap",
					toolbar: [
						{
							label: "Create",
							icon: "pi pi-plus",
							action: "component/marine.family.new",
							permission: "marine.family.add"
						},
						{
							label: "Edit",
							icon: "pi pi-pencil",
							enabled: "current",
							method: "component/marine.family.open",
							params: "${current}"
						},
						{
							label: "Report",
							icon: "pi pi-chart-bar",
							action: "component/marine.family.report"
						},
						{
							label: "Delete",
							icon: "pi pi-trash",
							enabled: "selected",
							confirm: "Delete selected family record?",
							method: "marine.family.remove",
							params: { familyId: "${familyId}" }
						}
					]
				}
			};
		});
	})))();
}
//#endregion
init_marineFamilyModel();
export { marineFamilyModel_default as default };
