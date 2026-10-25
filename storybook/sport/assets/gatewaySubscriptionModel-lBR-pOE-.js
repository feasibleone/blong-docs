import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, Z as model } from "./iframe-DxBhgsxq.js";
//#region ../blong-gateway/meta/model/gatewaySubscriptionModel.ts
var gatewaySubscriptionModel_default;
function init_gatewaySubscriptionModel() {
	return (init_gatewaySubscriptionModel = __esmMin((() => {
		init_types();
		gatewaySubscriptionModel_default = model(() => async function gatewaySubscriptionModel() {
			return {
				subject: "gateway",
				object: "subscription",
				objectTitle: "Subscription",
				public: true,
				schema: { properties: { subscription: {
					properties: {
						applicationId: {
							title: "Application",
							widget: { dropdown: "gateway.application" }
						},
						bundleId: {
							title: "Bundle",
							widget: { dropdown: "gateway.bundle" }
						},
						status: { widget: { options: [
							{
								value: "active",
								label: "Active"
							},
							{
								value: "suspended",
								label: "Suspended"
							},
							{
								value: "cancelled",
								label: "Cancelled"
							}
						] } },
						startsAt: { title: "Starts" },
						endsAt: { title: "Ends" },
						createdAt: { title: "Created" }
					},
					widget: { columns: [
						"status",
						"startsAt",
						"endsAt"
					] }
				} } },
				cards: {
					browse: {
						label: "Subscriptions",
						widgets: ["subscription"]
					},
					edit: {
						label: "Subscription Details",
						widgets: [
							"subscription.applicationId",
							"subscription.bundleId",
							"subscription.status",
							"subscription.startsAt",
							"subscription.endsAt"
						]
					},
					detail: {
						label: "",
						readOnly: true,
						watch: "$.selected.subscription",
						widgets: [
							"$.edit.subscription.status",
							"$.edit.subscription.startsAt",
							"$.edit.subscription.endsAt"
						]
					}
				}
			};
		});
	})))();
}
//#endregion
init_gatewaySubscriptionModel();
export { gatewaySubscriptionModel_default as default };
