import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { at as model, nt as init_types } from "./iframe-Kwn0esJL.js";
// ../../realm/blong-access/meta/model/accessRoleModel.ts
var ACL_MATRIX_CELL, accessRoleModel_default;
function init_accessRoleModel() {
	return (init_accessRoleModel = __esmMin((() => {
		init_types();
		ACL_MATRIX_CELL = {
			type: "cycle",
			states: [
				{
					value: "allow",
					icon: "pi pi-check text-green-500",
					label: "Allow"
				},
				{
					value: "deny",
					icon: "pi pi-times text-red-500",
					label: "Deny"
				},
				{
					value: null,
					label: "Not set"
				}
			]
		};
		accessRoleModel_default = model(() => async function accessRoleModel() {
			return {
				subject: "access",
				object: "role",
				objectTitle: "Role",
				public: true,
				nameField: "role.roleName",
				schema: { properties: {
					role: {
						properties: {
							roleName: {
								title: "Name",
								filter: true,
								sort: true
							},
							roleBit: {
								title: "Bit",
								filter: true
							},
							description: {
								title: "Description",
								widget: { type: "textArea" }
							}
						},
						widget: { columns: [
							"roleName",
							"roleBit",
							"description"
						] }
					},
					capability: {
						items: { properties: {
							capabilityId: {},
							capabilityName: {
								title: "Capability",
								readOnly: true,
								filter: true
							},
							granted: {
								title: "Granted",
								type: "boolean"
							}
						} },
						widget: {
							type: "table",
							pivot: {
								dropdown: "access.capability",
								join: {
									value: "capabilityId",
									label: "capabilityName"
								}
							},
							columns: ["capabilityName", "granted"]
						}
					},
					effective: {
						title: "Effective Access",
						items: { properties: {
							principalName: {
								title: "Granted via",
								readOnly: true
							},
							source: {
								title: "Source",
								readOnly: true
							},
							actionName: {
								title: "Action",
								readOnly: true
							},
							targetKind: {
								title: "Kind",
								readOnly: true
							},
							targetName: {
								title: "Target",
								readOnly: true
							},
							effect: {
								title: "Effect",
								readOnly: true
							}
						} },
						widget: {
							type: "table",
							columns: [
								"principalName",
								"source",
								"actionName",
								"targetKind",
								"targetName",
								"effect"
							],
							actions: {
								allowAdd: false,
								allowEdit: false,
								allowDelete: false
							}
						}
					},
					matrix: {
						title: "Record Access (ACL)",
						items: { properties: {
							targetId: {
								title: "Scope",
								widget: {
									type: "dropdown",
									dropdown: "access.aclTarget"
								}
							},
							targetName: {
								title: "Scope",
								readOnly: true,
								filter: true
							},
							entityName: {
								title: "Entity",
								readOnly: true,
								filter: true
							},
							find: {
								title: "Find",
								widget: ACL_MATRIX_CELL
							},
							get: {
								title: "Get",
								widget: ACL_MATRIX_CELL
							},
							add: {
								title: "Add",
								widget: ACL_MATRIX_CELL
							},
							edit: {
								title: "Edit",
								widget: ACL_MATRIX_CELL
							},
							remove: {
								title: "Remove",
								widget: ACL_MATRIX_CELL
							}
						} },
						widget: {
							type: "table",
							pivot: {
								dropdown: "access.aclTarget",
								join: {
									value: "targetId",
									label: "targetName"
								},
								defaults: { entityName: "partyPerson" }
							},
							columns: [
								"targetName",
								"entityName",
								"find",
								"get",
								"add",
								"edit",
								"remove"
							]
						}
					}
				} },
				details: [{ object: "capability" }],
				cards: {
					browse: {
						label: "Roles",
						widgets: ["role"]
					},
					edit: {
						label: "Role Details",
						widgets: [
							"role.roleName",
							"role.roleBit",
							"role.description"
						]
					},
					"details-effective": {
						label: "Access",
						widgets: ["effective"]
					},
					"details-matrix": {
						label: "Record Access",
						widgets: ["matrix"]
					}
				},
				layouts: { edit: { items: [
					{
						id: "edit",
						label: "Role",
						widgets: ["edit"]
					},
					{
						id: "capability",
						label: "Capability",
						widgets: ["details-capability"]
					},
					{
						id: "access",
						label: "Access",
						widgets: ["details-effective"]
					},
					{
						id: "matrix",
						label: "Record Access",
						widgets: ["details-matrix"]
					}
				] } },
				browser: {
					title: "Roles",
					icon: "pi pi-key"
				}
			};
		});
	})))();
}
init_accessRoleModel();
export { accessRoleModel_default as default };
