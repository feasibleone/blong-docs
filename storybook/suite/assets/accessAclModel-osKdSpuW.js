import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { at as model, nt as init_types } from "./iframe-Kwn0esJL.js";
// ../../realm/blong-access/meta/model/accessAclModel.ts
var accessAclModel_default;
function init_accessAclModel() {
	return (init_accessAclModel = __esmMin((() => {
		init_types();
		accessAclModel_default = model(() => async function accessAclModel() {
			return {
				subject: "access",
				object: "acl",
				objectTitle: "ACL Rule",
				public: true,
				nameField: "acl.targetName",
				schema: { properties: { acl: {
					properties: {
						principalId: {
							title: "Principal",
							widget: {
								type: "dropdown",
								dropdown: "access.aclPrincipal"
							}
						},
						actionId: {
							title: "Action",
							widget: {
								type: "dropdown",
								dropdown: "access.action"
							}
						},
						targetKind: {
							title: "Target Kind",
							default: "scope",
							filter: true,
							widget: {
								type: "select",
								options: [
									{
										value: "scope",
										label: "Scope"
									},
									{
										value: "record",
										label: "Record"
									},
									{
										value: "all",
										label: "All records"
									}
								]
							}
						},
						targetId: {
							title: "Target",
							widget: {
								type: "dropdown",
								dropdown: "access.aclTarget"
							}
						},
						effect: {
							title: "Effect",
							default: "allow",
							filter: true,
							widget: {
								type: "select",
								options: [{
									value: "allow",
									label: "Allow"
								}, {
									value: "deny",
									label: "Deny"
								}]
							}
						},
						isActive: {
							title: "Active",
							type: "boolean",
							filter: true,
							default: true
						},
						principalName: {
							title: "Principal",
							readOnly: true
						},
						actionName: {
							title: "Action",
							readOnly: true
						},
						targetName: {
							title: "Target",
							readOnly: true
						}
					},
					widget: {
						columns: [
							"principalName",
							"actionName",
							"effect",
							"targetKind",
							"targetName",
							"isActive"
						],
						hidden: [
							"principalId",
							"actionId",
							"targetId"
						]
					}
				} } },
				cards: {
					browse: {
						label: "ACL Rules",
						widgets: ["acl"]
					},
					edit: {
						label: "ACL Rule",
						widgets: [
							"acl.principalId",
							"acl.actionId",
							"acl.targetKind",
							"acl.targetId",
							"acl.effect",
							"acl.isActive"
						]
					}
				},
				browser: {
					title: "ACL Rules",
					icon: "pi pi-shield"
				}
			};
		});
	})))();
}
init_accessAclModel();
export { accessAclModel_default as default };
