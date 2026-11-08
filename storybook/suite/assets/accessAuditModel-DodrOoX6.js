import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { at as model, nt as init_types } from "./iframe-Kwn0esJL.js";
// ../../realm/blong-access/meta/model/accessAuditModel.ts
var accessAuditModel_default;
function init_accessAuditModel() {
	return (init_accessAuditModel = __esmMin((() => {
		init_types();
		accessAuditModel_default = model(() => async function accessAuditModel() {
			return {
				subject: "access",
				object: "audit",
				objectTitle: "Audit",
				public: true,
				nameField: "audit.auditId",
				schema: { properties: { audit: {
					properties: {
						auditId: {
							title: "Audit",
							filter: true
						},
						userId: { title: "User" },
						actorId: { title: "Actor" },
						sessionId: { title: "Session" },
						actionName: {
							title: "Action",
							filter: true
						},
						credentialType: {
							title: "Type",
							filter: true
						},
						ipAddress: { title: "IP" },
						isSuccess: {
							title: "Success",
							type: "boolean"
						},
						failureReason: { title: "Failure Reason" },
						statusCode: { title: "HTTP" },
						occurredAt: {
							title: "Occurred",
							widget: { type: "dateTime" }
						}
					},
					widget: { columns: [
						"occurredAt",
						"actionName",
						"actorId",
						"sessionId",
						"statusCode",
						"userId",
						"credentialType",
						"ipAddress",
						"isSuccess"
					] }
				} } },
				cards: { browse: {
					label: "Audit Log",
					widgets: ["audit"]
				} },
				browser: {
					title: "Audit Log",
					icon: "pi pi-list",
					toolbar: []
				}
			};
		});
	})))();
}
init_accessAuditModel();
export { accessAuditModel_default as default };
