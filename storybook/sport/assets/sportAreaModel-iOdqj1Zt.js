import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _n as init_types, bn as model } from "./iframe-BHvXl2EW.js";
// meta/model/sportAreaModel.ts
var sportAreaModel_default;
function init_sportAreaModel() {
	return (init_sportAreaModel = __esmMin((() => {
		init_types();
		sportAreaModel_default = model(() => async function sportAreaModel() {
			return {
				subject: "sport",
				object: "area",
				objectTitle: "Expert Area",
				public: true,
				nameField: "area.areaName",
				schema: { properties: { area: {
					properties: {
						areaName: {
							title: "Name",
							required: true,
							filter: true
						},
						areaStatus: {
							title: "Status",
							required: true,
							widget: { options: [{
								value: "active",
								label: "Active"
							}, {
								value: "inactive",
								label: "Inactive"
							}] }
						}
					},
					widget: { columns: ["areaName", "areaStatus"] }
				} } },
				cards: {
					browse: {
						label: "Expert Areas",
						widgets: ["area"]
					},
					identity: {
						label: "Expert Area",
						widgets: ["area.areaName", "area.areaStatus"]
					}
				},
				layouts: { edit: [["identity"]] },
				browser: {
					navigator: false,
					title: "Expert Areas",
					icon: "pi pi-heart",
					toolbar: [
						{
							label: "Create",
							icon: "pi pi-plus",
							action: "component/sport.area.new",
							permission: "sport.area.add"
						},
						{
							label: "Edit",
							icon: "pi pi-pencil",
							enabled: "current",
							method: "component/sport.area.open",
							params: "${current}"
						},
						{
							label: "Delete",
							icon: "pi pi-trash",
							enabled: "selected",
							confirm: "Delete the selected expert area?",
							method: "sport.area.remove",
							params: { areaId: "${areaId}" },
							refresh: true
						}
					]
				}
			};
		});
	})))();
}
init_sportAreaModel();
export { sportAreaModel_default as default };
