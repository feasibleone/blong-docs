import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { it as init_types, st as model } from "./iframe-BFtoPRqr.js";
// ../blong-access/meta/model/accessFlowModel.ts
var accessFlowModel_default;
function init_accessFlowModel() {
	return (init_accessFlowModel = __esmMin((() => {
		init_types();
		accessFlowModel_default = model(() => async function accessFlowModel() {
			return {
				subject: "access",
				object: "flow",
				objectTitle: "Flow",
				public: true,
				nameField: "flow.flowName",
				schema: { properties: { flow: {
					properties: {
						flowName: {
							title: "Name",
							filter: true,
							sort: true
						},
						flowSteps: {
							title: "Steps",
							widget: { type: "textArea" }
						},
						isActive: {
							title: "Active",
							type: "boolean"
						}
					},
					widget: { columns: [
						"flowName",
						"flowSteps",
						"isActive"
					] }
				} } },
				cards: { browse: {
					label: "Flows",
					widgets: ["flow"]
				} },
				browser: {
					title: "Authentication Flows",
					icon: "pi pi-sitemap",
					toolbar: []
				}
			};
		});
	})))();
}
init_accessFlowModel();
export { accessFlowModel_default as default };
