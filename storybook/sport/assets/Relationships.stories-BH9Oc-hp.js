import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as page, t as init_storyHelper } from "./storyHelper-_Rs1rrEY.js";
//#region src/stories/Relationships.stories.tsx
var meta, CoachingBrowse, CoachingNew, CoachingOpen, SupportBrowse, SupportNew, SupportOpen, AffiliationBrowse, AffiliationNew, AffiliationOpen, __namedExportsOrder;
function init_Relationships_stories() {
	return (init_Relationships_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Sport/Relationships",
			parameters: { layout: "fullscreen" }
		};
		CoachingBrowse = page("sport.coaching.browse");
		CoachingNew = page("sport.coaching.new");
		CoachingOpen = page("sport.coaching.open", { coachingId: "co1" });
		SupportBrowse = page("sport.support.browse");
		SupportNew = page("sport.support.new");
		SupportOpen = page("sport.support.open", { supportId: "su1" });
		AffiliationBrowse = page("sport.affiliation.browse");
		AffiliationNew = page("sport.affiliation.new");
		AffiliationOpen = page("sport.affiliation.open", { affiliationId: "af1" });
		CoachingBrowse.parameters = {
			...CoachingBrowse.parameters,
			docs: {
				...CoachingBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.coaching.browse')",
					...CoachingBrowse.parameters?.docs?.source
				}
			}
		};
		CoachingNew.parameters = {
			...CoachingNew.parameters,
			docs: {
				...CoachingNew.parameters?.docs,
				source: {
					originalSource: "page('sport.coaching.new')",
					...CoachingNew.parameters?.docs?.source
				}
			}
		};
		CoachingOpen.parameters = {
			...CoachingOpen.parameters,
			docs: {
				...CoachingOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.coaching.open', {\n  coachingId: 'co1'\n})",
					...CoachingOpen.parameters?.docs?.source
				}
			}
		};
		SupportBrowse.parameters = {
			...SupportBrowse.parameters,
			docs: {
				...SupportBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.support.browse')",
					...SupportBrowse.parameters?.docs?.source
				}
			}
		};
		SupportNew.parameters = {
			...SupportNew.parameters,
			docs: {
				...SupportNew.parameters?.docs,
				source: {
					originalSource: "page('sport.support.new')",
					...SupportNew.parameters?.docs?.source
				}
			}
		};
		SupportOpen.parameters = {
			...SupportOpen.parameters,
			docs: {
				...SupportOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.support.open', {\n  supportId: 'su1'\n})",
					...SupportOpen.parameters?.docs?.source
				}
			}
		};
		AffiliationBrowse.parameters = {
			...AffiliationBrowse.parameters,
			docs: {
				...AffiliationBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.affiliation.browse')",
					...AffiliationBrowse.parameters?.docs?.source
				}
			}
		};
		AffiliationNew.parameters = {
			...AffiliationNew.parameters,
			docs: {
				...AffiliationNew.parameters?.docs,
				source: {
					originalSource: "page('sport.affiliation.new')",
					...AffiliationNew.parameters?.docs?.source
				}
			}
		};
		AffiliationOpen.parameters = {
			...AffiliationOpen.parameters,
			docs: {
				...AffiliationOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.affiliation.open', {\n  affiliationId: 'af1'\n})",
					...AffiliationOpen.parameters?.docs?.source
				}
			}
		};
		__namedExportsOrder = [
			"CoachingBrowse",
			"CoachingNew",
			"CoachingOpen",
			"SupportBrowse",
			"SupportNew",
			"SupportOpen",
			"AffiliationBrowse",
			"AffiliationNew",
			"AffiliationOpen"
		];
	})))();
}
//#endregion
init_Relationships_stories();
export { AffiliationBrowse, AffiliationNew, AffiliationOpen, CoachingBrowse, CoachingNew, CoachingOpen, SupportBrowse, SupportNew, SupportOpen, __namedExportsOrder, meta as default };
