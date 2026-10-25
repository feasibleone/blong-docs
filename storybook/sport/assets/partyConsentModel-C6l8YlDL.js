import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, Z as model } from "./iframe-DxBhgsxq.js";
//#region ../blong-party/meta/model/partyConsentModel.ts
var partyConsentModel_default;
function init_partyConsentModel() {
	return (init_partyConsentModel = __esmMin((() => {
		init_types();
		partyConsentModel_default = model(() => async function partyConsentModel() {
			return {
				subject: "party",
				object: "consent",
				objectTitle: "Consent",
				public: true,
				nameField: "consent.consentName",
				schema: { properties: {
					consent: {
						properties: {
							consentName: { title: "Name" },
							consentType: {
								title: "Type",
								widget: { options: [
									{
										value: "marketing",
										label: "Marketing"
									},
									{
										value: "research",
										label: "Research"
									},
									{
										value: "profiling",
										label: "Profiling"
									}
								] }
							},
							isGranted: {
								title: "Granted",
								type: "boolean"
							},
							notes: { title: "Notes" }
						},
						widget: { columns: [
							"consentName",
							"consentType",
							"isGranted"
						] }
					},
					person: {
						title: "",
						items: { properties: {
							firstName: { title: "First Name" },
							lastName: { title: "Last Name" }
						} },
						widget: {
							type: "table",
							columns: ["firstName", "lastName"]
						}
					}
				} },
				cards: {
					browse: {
						label: "Consents",
						widgets: ["consent"]
					},
					details: {
						label: "Consent Details",
						widgets: [
							"consent.consentName",
							"consent.consentType",
							"consent.isGranted",
							"consent.notes"
						]
					},
					personCard: {
						label: "Person",
						widgets: ["person"]
					}
				},
				layouts: {
					edit: [["details"]],
					editThumbIndex: {
						orientation: "left",
						items: [{
							id: "details",
							label: "Consent Details",
							icon: "pi pi-check-square",
							widgets: ["details"]
						}, {
							id: "person",
							label: "Person",
							icon: "pi pi-user",
							widgets: ["personCard"]
						}]
					}
				},
				browser: {
					icon: "pi pi-check-square",
					toolbar: [
						{
							label: "Create",
							icon: "pi pi-plus",
							action: "component/party.consent.new",
							permission: "party.consent.add"
						},
						{
							label: "Edit",
							icon: "pi pi-pencil",
							enabled: "current",
							method: "component/party.consent.open",
							params: "${current}"
						},
						{
							label: "Report",
							icon: "pi pi-chart-bar",
							action: "component/party.consent.report"
						},
						{
							label: "Delete",
							icon: "pi pi-trash",
							enabled: "selected",
							confirm: "Delete selected consent record?",
							method: "party.consent.remove",
							params: { consentId: "${consentId}" }
						}
					]
				}
			};
		});
	})))();
}
//#endregion
init_partyConsentModel();
export { partyConsentModel_default as default };
