import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, Z as model } from "./iframe-DxBhgsxq.js";
//#region ../blong-gateway/meta/model/gatewayApplicationModel.ts
var gatewayApplicationModel_default;
function init_gatewayApplicationModel() {
	return (init_gatewayApplicationModel = __esmMin((() => {
		init_types();
		gatewayApplicationModel_default = model(() => async function gatewayApplicationModel() {
			return {
				subject: "gateway",
				object: "application",
				objectTitle: "Application",
				public: true,
				schema: { properties: { application: {
					properties: {
						ownerUserId: { title: "Owner" },
						applicationType: {
							title: "Type",
							widget: { options: [{
								value: "oauth2_client",
								label: "OAuth2 Client"
							}] }
						},
						description: { title: "Description" },
						isActive: { title: "Active" }
					},
					widget: { columns: [
						"applicationType",
						"description",
						"isActive"
					] }
				} } },
				cards: {
					browse: {
						label: "Applications",
						widgets: ["application"]
					},
					edit: {
						label: "Application Details",
						widgets: [
							"application.applicationType",
							"application.description",
							"application.isActive"
						]
					},
					detail: {
						label: "",
						readOnly: true,
						watch: "$.selected.application",
						widgets: [
							"$.edit.application.applicationType",
							"$.edit.application.description",
							"$.edit.application.isActive"
						]
					}
				}
			};
		});
	})))();
}
//#endregion
init_gatewayApplicationModel();
export { gatewayApplicationModel_default as default };
