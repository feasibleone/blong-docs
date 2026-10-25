import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, Z as model } from "./iframe-DxBhgsxq.js";
//#region meta/model/sportConferralModel.ts
var sportConferralModel_default;
function init_sportConferralModel() {
	return (init_sportConferralModel = __esmMin((() => {
		init_types();
		sportConferralModel_default = model(() => async function sportConferralModel() {
			return {
				subject: "sport",
				object: "conferral",
				objectTitle: "Award Conferral",
				public: true,
				nameField: "conferral.basisNote",
				schema: { properties: { conferral: {
					properties: {
						awardId: {
							title: "Award",
							required: true,
							widget: { dropdown: "sport.award" }
						},
						recipientResourceId: {
							title: "Recipient",
							required: true,
							filter: true,
							widget: { dropdown: "sport.recipient" }
						},
						recipientKind: {
							title: "Recipient Kind",
							readOnly: true,
							widget: { options: [
								{
									value: "athlete",
									label: "Athlete"
								},
								{
									value: "coach",
									label: "Coach"
								},
								{
									value: "specialist",
									label: "Specialist"
								},
								{
									value: "club",
									label: "Club"
								},
								{
									value: "federation",
									label: "Federation"
								},
								{
									value: "other",
									label: "Other"
								}
							] }
						},
						conferralDate: {
							title: "Conferred On",
							widget: { type: "date" }
						},
						conferringPartyId: {
							title: "Conferring Body",
							widget: { dropdown: "sport.organization" }
						},
						documentId: {
							title: "Document",
							widget: { dropdown: "sport.document" }
						},
						conferralStatus: {
							title: "Status",
							required: true,
							widget: { options: [
								{
									value: "nominated",
									label: "Nominated"
								},
								{
									value: "confirmed",
									label: "Confirmed"
								},
								{
									value: "cancelled",
									label: "Cancelled"
								}
							] }
						},
						basisNote: {
							title: "Basis",
							widget: { type: "textArea" }
						},
						conferralNote: {
							title: "Notes",
							widget: { type: "textArea" }
						}
					},
					widget: { columns: [
						"awardId",
						"recipientResourceId",
						"recipientKind",
						"conferralDate",
						"conferralStatus"
					] }
				} } },
				cards: {
					browse: {
						label: "Conferrals",
						widgets: ["conferral"]
					},
					conferral: {
						label: "Conferral",
						widgets: [
							"conferral.awardId",
							"conferral.conferralDate",
							"conferral.conferralStatus",
							"conferral.basisNote"
						]
					},
					recipient: {
						label: "Recipient",
						widgets: [
							"conferral.recipientResourceId",
							"conferral.recipientKind",
							"conferral.conferringPartyId",
							"conferral.documentId",
							"conferral.conferralNote"
						]
					}
				},
				layouts: {
					edit: [["conferral"], "recipient"],
					editThumbIndex: {
						orientation: "left",
						items: [{
							id: "conferral",
							label: "Conferral",
							icon: "pi pi-star-fill",
							widgets: ["conferral"]
						}, {
							id: "recipient",
							label: "Recipient",
							icon: "pi pi-user",
							widgets: ["recipient"]
						}]
					}
				},
				browser: {
					title: "Award Conferrals",
					icon: "pi pi-star-fill",
					toolbar: [
						{
							label: "Create",
							icon: "pi pi-plus",
							action: "component/sport.conferral.new",
							permission: "sport.conferral.add"
						},
						{
							label: "Edit",
							icon: "pi pi-pencil",
							enabled: "current",
							method: "component/sport.conferral.open",
							params: "${current}"
						},
						{
							label: "Delete",
							icon: "pi pi-trash",
							enabled: "selected",
							confirm: "Delete the selected conferral?",
							method: "sport.conferral.remove",
							params: { conferralId: "${conferralId}" },
							refresh: true
						}
					]
				}
			};
		});
	})))();
}
//#endregion
init_sportConferralModel();
export { sportConferralModel_default as default };
