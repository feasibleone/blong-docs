import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { at as model, nt as init_types } from "./iframe-Kwn0esJL.js";
// ../../realm/blong-access/meta/model/accessCapabilityModel.ts
var accessCapabilityModel_default;
function init_accessCapabilityModel() {
	return (init_accessCapabilityModel = __esmMin((() => {
		init_types();
		accessCapabilityModel_default = model(() => async function accessCapabilityModel() {
			return {
				subject: "access",
				object: "capability",
				objectTitle: "Capability",
				public: true,
				nameField: "capability.capabilityName",
				schema: { properties: {
					capability: {
						properties: {
							capabilityName: {
								title: "Name",
								filter: true,
								sort: true
							},
							description: {
								title: "Description",
								widget: { type: "textArea" }
							}
						},
						widget: { columns: ["capabilityName", "description"] }
					},
					action: {
						title: "",
						items: { properties: {
							entityName: {
								title: "Entity",
								readOnly: true
							},
							find: {
								title: "Find",
								type: "boolean"
							},
							get: {
								title: "Get",
								type: "boolean"
							},
							add: {
								title: "Add",
								type: "boolean"
							},
							edit: {
								title: "Edit",
								type: "boolean"
							},
							remove: {
								title: "Remove",
								type: "boolean"
							}
						} },
						widget: {
							type: "table",
							keyField: "entityName",
							pivot: {
								dropdown: "access.crudEntity",
								join: {
									value: "entityName",
									label: "entityName"
								}
							},
							columns: [
								"entityName",
								"find",
								"get",
								"add",
								"edit",
								"remove"
							]
						}
					},
					otherAction: {
						items: { properties: {
							actionId: {},
							actionName: {
								title: "Other Action",
								readOnly: true
							},
							granted: {
								title: "Granted",
								type: "boolean"
							}
						} },
						widget: {
							type: "table",
							columns: ["actionName", "granted"],
							actions: {
								allowAdd: false,
								allowEdit: true,
								allowDelete: false
							}
						}
					}
				} },
				details: [{ object: "action" }],
				cards: {
					browse: {
						label: "Capabilities",
						widgets: ["capability"]
					},
					edit: {
						label: "Capability Details",
						widgets: ["capability.capabilityName", "capability.description"]
					},
					"details-action": { label: "" },
					otherAction: {
						label: "Other Actions",
						widgets: ["otherAction"]
					}
				},
				layouts: { edit: { items: [{
					id: "edit",
					label: "Capability",
					widgets: ["edit"]
				}, {
					id: "action",
					label: "Action",
					widgets: ["details-action", "otherAction"]
				}] } },
				browser: {
					title: "Capabilities",
					icon: "pi pi-lock"
				}
			};
		});
	})))();
}
init_accessCapabilityModel();
export { accessCapabilityModel_default as default };
