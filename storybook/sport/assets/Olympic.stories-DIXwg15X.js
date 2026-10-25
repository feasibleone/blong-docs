import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as page, t as init_storyHelper } from "./storyHelper-_Rs1rrEY.js";
//#region src/stories/Olympic.stories.tsx
var meta, CampaignBrowse, CampaignNew, CampaignOpen, QualificationBrowse, QualificationNew, QualificationOpen, __namedExportsOrder;
function init_Olympic_stories() {
	return (init_Olympic_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Sport/Olympic",
			parameters: { layout: "fullscreen" }
		};
		CampaignBrowse = page("sport.campaign.browse");
		CampaignNew = page("sport.campaign.new");
		CampaignOpen = page("sport.campaign.open", { campaignId: "ca1" });
		QualificationBrowse = page("sport.qualification.browse");
		QualificationNew = page("sport.qualification.new");
		QualificationOpen = page("sport.qualification.open", { qualificationId: "q1" });
		CampaignBrowse.parameters = {
			...CampaignBrowse.parameters,
			docs: {
				...CampaignBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.campaign.browse')",
					...CampaignBrowse.parameters?.docs?.source
				}
			}
		};
		CampaignNew.parameters = {
			...CampaignNew.parameters,
			docs: {
				...CampaignNew.parameters?.docs,
				source: {
					originalSource: "page('sport.campaign.new')",
					...CampaignNew.parameters?.docs?.source
				}
			}
		};
		CampaignOpen.parameters = {
			...CampaignOpen.parameters,
			docs: {
				...CampaignOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.campaign.open', {\n  campaignId: 'ca1'\n})",
					...CampaignOpen.parameters?.docs?.source
				}
			}
		};
		QualificationBrowse.parameters = {
			...QualificationBrowse.parameters,
			docs: {
				...QualificationBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.qualification.browse')",
					...QualificationBrowse.parameters?.docs?.source
				}
			}
		};
		QualificationNew.parameters = {
			...QualificationNew.parameters,
			docs: {
				...QualificationNew.parameters?.docs,
				source: {
					originalSource: "page('sport.qualification.new')",
					...QualificationNew.parameters?.docs?.source
				}
			}
		};
		QualificationOpen.parameters = {
			...QualificationOpen.parameters,
			docs: {
				...QualificationOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.qualification.open', {\n  qualificationId: 'q1'\n})",
					...QualificationOpen.parameters?.docs?.source
				}
			}
		};
		__namedExportsOrder = [
			"CampaignBrowse",
			"CampaignNew",
			"CampaignOpen",
			"QualificationBrowse",
			"QualificationNew",
			"QualificationOpen"
		];
	})))();
}
//#endregion
init_Olympic_stories();
export { CampaignBrowse, CampaignNew, CampaignOpen, QualificationBrowse, QualificationNew, QualificationOpen, __namedExportsOrder, meta as default };
