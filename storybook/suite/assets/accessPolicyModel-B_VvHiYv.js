import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { at as model, nt as init_types } from "./iframe-Kwn0esJL.js";
// ../../realm/blong-access/meta/model/accessPolicyModel.ts
var accessPolicyModel_default;
function init_accessPolicyModel() {
	return (init_accessPolicyModel = __esmMin((() => {
		init_types();
		accessPolicyModel_default = model(() => async function accessPolicyModel() {
			return {
				subject: "access",
				object: "policy",
				objectTitle: "Policy",
				public: true,
				nameField: "policy.policyName",
				schema: { properties: { policy: {
					properties: {
						policyName: {
							title: "Name",
							filter: true,
							sort: true
						},
						credentialType: {
							title: "Type",
							filter: true
						},
						minLength: { title: "Min Length" },
						maxAgeDays: { title: "Max Age (days)" },
						maxAttempts: { title: "Max Attempts" },
						isActive: {
							title: "Active",
							type: "boolean"
						}
					},
					widget: { columns: [
						"policyName",
						"credentialType",
						"minLength",
						"maxAgeDays",
						"isActive"
					] }
				} } },
				cards: { browse: {
					label: "Policies",
					widgets: ["policy"]
				} },
				browser: {
					title: "Credential Policies",
					icon: "pi pi-shield",
					toolbar: []
				}
			};
		});
	})))();
}
init_accessPolicyModel();
export { accessPolicyModel_default as default };
