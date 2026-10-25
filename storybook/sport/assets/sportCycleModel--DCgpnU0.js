import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, Z as model } from "./iframe-DxBhgsxq.js";
//#region meta/model/sportCycleModel.ts
var sportCycleModel_default;
function init_sportCycleModel() {
	return (init_sportCycleModel = __esmMin((() => {
		init_types();
		sportCycleModel_default = model(() => async function sportCycleModel() {
			return {
				subject: "sport",
				object: "cycle",
				objectTitle: "Olympic Cycle",
				public: true,
				nameField: "cycle.cycleName",
				schema: { properties: { cycle: {
					properties: {
						cycleName: {
							title: "Name",
							required: true,
							filter: true
						},
						cycleStartYear: {
							title: "Start Year",
							required: true,
							widget: { type: "integer" }
						},
						cycleEndYear: {
							title: "End Year",
							required: true,
							widget: { type: "integer" }
						},
						gamesName: { title: "Games" },
						cycleStatus: {
							title: "Status",
							required: true,
							widget: { options: [{
								value: "active",
								label: "Active"
							}, {
								value: "closed",
								label: "Closed"
							}] }
						},
						sourceName: { title: "Source" }
					},
					widget: { columns: [
						"cycleName",
						"cycleStartYear",
						"cycleEndYear",
						"cycleStatus"
					] }
				} } },
				cards: {
					browse: {
						label: "Olympic Cycles",
						widgets: ["cycle"]
					},
					identity: {
						label: "Olympic Cycle",
						widgets: [
							"cycle.cycleName",
							"cycle.cycleStartYear",
							"cycle.cycleEndYear",
							"cycle.gamesName",
							"cycle.cycleStatus",
							"cycle.sourceName"
						]
					}
				},
				layouts: { edit: [["identity"]] },
				browser: {
					title: "Olympic Cycles",
					icon: "pi pi-calendar",
					toolbar: [
						{
							label: "Create",
							icon: "pi pi-plus",
							action: "component/sport.cycle.new",
							permission: "sport.cycle.add"
						},
						{
							label: "Edit",
							icon: "pi pi-pencil",
							enabled: "current",
							method: "component/sport.cycle.open",
							params: "${current}"
						},
						{
							label: "Delete",
							icon: "pi pi-trash",
							enabled: "selected",
							confirm: "Delete the selected cycle?",
							method: "sport.cycle.remove",
							params: { cycleId: "${cycleId}" },
							refresh: true
						}
					]
				}
			};
		});
	})))();
}
//#endregion
init_sportCycleModel();
export { sportCycleModel_default as default };
