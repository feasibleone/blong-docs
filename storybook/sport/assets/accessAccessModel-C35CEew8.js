import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { it as init_types, st as model } from "./iframe-BFtoPRqr.js";
// ../blong-access/meta/model/accessAccessModel.ts
var accessAccessModel_default;
function init_accessAccessModel() {
	return (init_accessAccessModel = __esmMin((() => {
		init_types();
		accessAccessModel_default = model(() => async function accessAccessModel() {
			return {
				subject: "access",
				object: "access",
				objectTitle: "Access",
				public: true,
				nameField: "access.accessName",
				schema: { properties: { access: {
					properties: {
						accessName: {
							title: "Name",
							filter: true,
							sort: true
						},
						accessType: {
							title: "Type",
							filter: true
						},
						isActive: {
							title: "Active",
							type: "boolean"
						},
						accessRule: {
							title: "Rule",
							widget: { type: "textArea" }
						}
					},
					widget: { columns: [
						"accessName",
						"accessType",
						"isActive"
					] }
				} } },
				cards: { browse: {
					label: "Access Rules",
					widgets: ["access"]
				} },
				browser: {
					title: "Access Rules",
					icon: "pi pi-lock-open",
					toolbar: []
				}
			};
		});
	})))();
}
init_accessAccessModel();
export { accessAccessModel_default as default };
