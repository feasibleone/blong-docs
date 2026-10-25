import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, q as handler } from "./iframe-DxBhgsxq.js";
//#region ../blong-party/meta/db/db.ts
var db_default;
function init_db() {
	return (init_db = __esmMin((() => {
		init_types();
		db_default = handler(() => ({ config: { schema: {
			dbTest: true,
			tables: {
				"party.person": {
					order: 300,
					resource: { nameColumn: "personName" },
					edges: [{
						predicate: "belongsTo",
						table: "party_unit",
						object: "unit",
						objectKey: "unitId",
						nameField: "unitName"
					}],
					acl: {
						mode: "scoped",
						scopes: ["belongsTo"],
						addScope: { predicate: "belongsTo" }
					}
				},
				"party.organization": {
					order: 301,
					resource: { nameColumn: "legalName" },
					acl: {
						mode: "scoped",
						selfScope: true
					}
				},
				"party.unit": {
					order: 302,
					resource: { nameColumn: "unitName" },
					edges: [{
						predicate: "belongsTo",
						table: "party_organization",
						object: "organization",
						objectKey: "organizationId",
						nameField: "organizationName"
					}, {
						predicate: "isPartOf",
						table: "party_unit",
						object: "parentUnit",
						objectKey: "unitId",
						nameField: "unitName",
						reverse: true
					}],
					acl: {
						mode: "scoped",
						scopes: ["belongsTo"],
						addScope: { predicate: "belongsTo" }
					}
				},
				"party.contact": 303,
				"party.address": 304,
				"party.identifier": 305,
				"party.consent": {
					order: 306,
					resource: { nameColumn: "consentName" },
					edges: [{
						predicate: "belongsTo",
						table: "party_person",
						object: "person",
						objectKey: "personId",
						nameField: "lastName"
					}],
					acl: { mode: "explicit" }
				}
			}
		} } }));
	})))();
}
//#endregion
init_db();
export { db_default as default };
