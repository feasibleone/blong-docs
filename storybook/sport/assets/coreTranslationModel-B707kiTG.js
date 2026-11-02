import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _n as init_types, bn as model } from "./iframe-BHvXl2EW.js";
// ../blong-core/meta/model/coreTranslationModel.ts
var coreTranslationModel_default;
function init_coreTranslationModel() {
	return (init_coreTranslationModel = __esmMin((() => {
		init_types();
		coreTranslationModel_default = model(() => async function coreTranslationModel() {
			return {
				subject: "core",
				object: "translation",
				objectTitle: "Translation",
				subjectTitle: "Translations",
				public: true,
				nameField: "translation.translatedName",
				schema: { properties: { translation: {
					title: "Resource names",
					browser: {
						title: "Resource names",
						icon: "pi pi-tag",
						permission: {
							browse: "core.translation.browse",
							add: "core.translation.add",
							edit: "core.translation.edit",
							delete: "core.translation.delete"
						}
					},
					properties: {
						resourceId: {
							title: "Resource",
							required: true,
							filter: true,
							widget: { dropdown: "core.translationResource" }
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
						translatedName: {
							title: "Name",
							required: true
						},
						editedAt: { title: "Edited" }
					},
					widget: { columns: [
						"resourceId",
						"languageCode",
						"translatedName",
						"editedAt"
					] }
				} } }
			};
		});
	})))();
}
init_coreTranslationModel();
export { coreTranslationModel_default as default };
