import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, Z as model } from "./iframe-DxBhgsxq.js";
//#region ../blong-party/meta/model/partyUnitModel.ts
var partyUnitModel_default;
function init_partyUnitModel() {
	return (init_partyUnitModel = __esmMin((() => {
		init_types();
		partyUnitModel_default = model(() => async function partyUnitModel() {
			return {
				subject: "party",
				object: "unit",
				objectTitle: "Unit",
				public: true,
				nameField: "unit.unitName",
				schema: { properties: { unit: {
					properties: {
						unitName: { title: "Unit Name" },
						unitType: {
							title: "Unit Type",
							widget: { options: [
								{
									value: "division",
									label: "Division"
								},
								{
									value: "department",
									label: "Department"
								},
								{
									value: "branch",
									label: "Branch"
								},
								{
									value: "team",
									label: "Team"
								}
							] }
						},
						notes: { title: "Notes" }
					},
					widget: { columns: ["unitName", "unitType"] }
				} } },
				cards: {
					browse: {
						label: "Units",
						widgets: ["unit"]
					},
					details: {
						label: "Unit Details",
						widgets: [
							"unit.unitName",
							"unit.unitType",
							"unit.notes"
						]
					}
				},
				layouts: {
					edit: [["details"]],
					editThumbIndex: {
						orientation: "left",
						items: [{
							id: "details",
							label: "Details",
							icon: "pi pi-info-circle",
							widgets: ["details"]
						}]
					}
				},
				browser: {
					icon: "pi pi-sitemap",
					toolbar: [
						{
							label: "Create",
							icon: "pi pi-plus",
							action: "component/party.unit.new",
							permission: "party.unit.add"
						},
						{
							label: "Edit",
							icon: "pi pi-pencil",
							enabled: "current",
							method: "component/party.unit.open",
							params: "${current}"
						},
						{
							label: "Report",
							icon: "pi pi-chart-bar",
							action: "component/party.unit.report"
						},
						{
							label: "Delete",
							icon: "pi pi-trash",
							enabled: "selected",
							confirm: "Delete selected unit record?",
							method: "party.unit.remove",
							params: { unitId: "${unitId}" }
						}
					]
				}
			};
		});
	})))();
}
//#endregion
init_partyUnitModel();
export { partyUnitModel_default as default };
