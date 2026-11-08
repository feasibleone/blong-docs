import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { it as init_types, st as model } from "./iframe-BFtoPRqr.js";
// ../blong-access/meta/model/accessActionModel.ts
var accessActionModel_default;
function init_accessActionModel() {
	return (init_accessActionModel = __esmMin((() => {
		init_types();
		accessActionModel_default = model(() => async function accessActionModel() {
			return {
				subject: "access",
				object: "action",
				objectTitle: "Action",
				public: true,
				nameField: "action.actionName",
				schema: { properties: { action: {
					properties: {
						actionName: {
							title: "Name",
							filter: true,
							sort: true
						},
						description: { title: "Description" }
					},
					widget: { columns: ["actionName", "description"] }
				} } },
				cards: { browse: {
					label: "Actions",
					widgets: ["action"]
				} },
				browser: {
					title: "Actions",
					icon: "pi pi-bolt",
					toolbar: []
				}
			};
		});
	})))();
}
init_accessActionModel();
export { accessActionModel_default as default };
