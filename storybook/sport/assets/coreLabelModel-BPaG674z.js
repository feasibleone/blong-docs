import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _n as init_types, bn as model } from "./iframe-BHvXl2EW.js";
// ../blong-core/meta/model/coreLabelModel.ts
var coreLabelModel_default;
function init_coreLabelModel() {
	return (init_coreLabelModel = __esmMin((() => {
		init_types();
		coreLabelModel_default = model(() => async function coreLabelModel() {
			return {
				subject: "core",
				object: "label",
				objectTitle: "Label",
				subjectTitle: "Translations",
				public: true,
				nameField: "label.labelKey",
				schema: { properties: { label: {
					title: "Labels",
					browser: {
						title: "Labels",
						icon: "pi pi-language",
						permission: {
							browse: "core.label.browse",
							add: "core.label.add",
							edit: "core.label.edit",
							delete: "core.label.delete"
						}
					},
					properties: {
						labelKey: {
							title: "Key",
							required: true,
							filter: true
						},
						languageCode: {
							title: "Language",
							required: true,
							filter: true,
							widget: { options: [{
								value: "en",
								label: "English"
							}, {
								value: "bg",
								label: "Bulgarian"
							}] }
						},
						labelText: {
							title: "Text",
							widget: { type: "textArea" }
						},
						editedAt: { title: "Edited" }
					},
					widget: { columns: [
						"labelKey",
						"languageCode",
						"labelText",
						"editedAt"
					] }
				} } }
			};
		});
	})))();
}
init_coreLabelModel();
export { coreLabelModel_default as default };
