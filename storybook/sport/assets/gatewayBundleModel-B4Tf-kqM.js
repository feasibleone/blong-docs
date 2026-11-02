import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _n as init_types, bn as model } from "./iframe-BHvXl2EW.js";
// ../blong-gateway/meta/model/gatewayBundleModel.ts
var gatewayBundleModel_default;
function init_gatewayBundleModel() {
	return (init_gatewayBundleModel = __esmMin((() => {
		init_types();
		gatewayBundleModel_default = model(() => async function gatewayBundleModel() {
			return {
				subject: "gateway",
				object: "bundle",
				objectTitle: "Bundle",
				public: true,
				schema: { properties: { bundle: {
					properties: {
						baseMonthlyCredits: { title: "Monthly Credits" },
						rateLimit: { title: "Rate Limit" },
						rateWindowSec: { title: "Rate Window (s)" },
						description: { title: "Description" },
						isActive: { title: "Active" }
					},
					widget: { columns: [
						"baseMonthlyCredits",
						"rateLimit",
						"rateWindowSec",
						"isActive"
					] }
				} } },
				cards: {
					browse: {
						label: "Bundles",
						widgets: ["bundle"]
					},
					edit: {
						label: "Bundle Details",
						widgets: [
							"bundle.baseMonthlyCredits",
							"bundle.rateLimit",
							"bundle.rateWindowSec",
							"bundle.description",
							"bundle.isActive"
						]
					},
					detail: {
						label: "",
						readOnly: true,
						watch: "$.selected.bundle",
						widgets: [
							"$.edit.bundle.baseMonthlyCredits",
							"$.edit.bundle.rateLimit",
							"$.edit.bundle.rateWindowSec"
						]
					}
				}
			};
		});
	})))();
}
init_gatewayBundleModel();
export { gatewayBundleModel_default as default };
