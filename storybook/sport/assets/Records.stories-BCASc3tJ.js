import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as page, t as init_storyHelper } from "./storyHelper-_Rs1rrEY.js";
//#region src/stories/Records.stories.tsx
var meta, DocumentBrowse, DocumentNew, DocumentOpen, AttachmentBrowse, AttachmentNew, AttachmentOpen, AwardBrowse, AwardNew, AwardOpen, ConferralBrowse, ConferralNew, ConferralOpen, __namedExportsOrder;
function init_Records_stories() {
	return (init_Records_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Sport/Records",
			parameters: { layout: "fullscreen" }
		};
		DocumentBrowse = page("sport.document.browse");
		DocumentNew = page("sport.document.new");
		DocumentOpen = page("sport.document.open", { documentId: "doc1" });
		AttachmentBrowse = page("sport.attachment.browse");
		AttachmentNew = page("sport.attachment.new");
		AttachmentOpen = page("sport.attachment.open", { attachmentId: "at1" });
		AwardBrowse = page("sport.award.browse");
		AwardNew = page("sport.award.new");
		AwardOpen = page("sport.award.open", { awardId: "aw1" });
		ConferralBrowse = page("sport.conferral.browse");
		ConferralNew = page("sport.conferral.new");
		ConferralOpen = page("sport.conferral.open", { conferralId: "cf1" });
		DocumentBrowse.parameters = {
			...DocumentBrowse.parameters,
			docs: {
				...DocumentBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.document.browse')",
					...DocumentBrowse.parameters?.docs?.source
				}
			}
		};
		DocumentNew.parameters = {
			...DocumentNew.parameters,
			docs: {
				...DocumentNew.parameters?.docs,
				source: {
					originalSource: "page('sport.document.new')",
					...DocumentNew.parameters?.docs?.source
				}
			}
		};
		DocumentOpen.parameters = {
			...DocumentOpen.parameters,
			docs: {
				...DocumentOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.document.open', {\n  documentId: 'doc1'\n})",
					...DocumentOpen.parameters?.docs?.source
				}
			}
		};
		AttachmentBrowse.parameters = {
			...AttachmentBrowse.parameters,
			docs: {
				...AttachmentBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.attachment.browse')",
					...AttachmentBrowse.parameters?.docs?.source
				}
			}
		};
		AttachmentNew.parameters = {
			...AttachmentNew.parameters,
			docs: {
				...AttachmentNew.parameters?.docs,
				source: {
					originalSource: "page('sport.attachment.new')",
					...AttachmentNew.parameters?.docs?.source
				}
			}
		};
		AttachmentOpen.parameters = {
			...AttachmentOpen.parameters,
			docs: {
				...AttachmentOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.attachment.open', {\n  attachmentId: 'at1'\n})",
					...AttachmentOpen.parameters?.docs?.source
				}
			}
		};
		AwardBrowse.parameters = {
			...AwardBrowse.parameters,
			docs: {
				...AwardBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.award.browse')",
					...AwardBrowse.parameters?.docs?.source
				}
			}
		};
		AwardNew.parameters = {
			...AwardNew.parameters,
			docs: {
				...AwardNew.parameters?.docs,
				source: {
					originalSource: "page('sport.award.new')",
					...AwardNew.parameters?.docs?.source
				}
			}
		};
		AwardOpen.parameters = {
			...AwardOpen.parameters,
			docs: {
				...AwardOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.award.open', {\n  awardId: 'aw1'\n})",
					...AwardOpen.parameters?.docs?.source
				}
			}
		};
		ConferralBrowse.parameters = {
			...ConferralBrowse.parameters,
			docs: {
				...ConferralBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.conferral.browse')",
					...ConferralBrowse.parameters?.docs?.source
				},
				description: {
					story: "The recipient kind is derived by the handler, so the form shows it read-only.",
					...ConferralBrowse.parameters?.docs?.description
				}
			}
		};
		ConferralNew.parameters = {
			...ConferralNew.parameters,
			docs: {
				...ConferralNew.parameters?.docs,
				source: {
					originalSource: "page('sport.conferral.new')",
					...ConferralNew.parameters?.docs?.source
				}
			}
		};
		ConferralOpen.parameters = {
			...ConferralOpen.parameters,
			docs: {
				...ConferralOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.conferral.open', {\n  conferralId: 'cf1'\n})",
					...ConferralOpen.parameters?.docs?.source
				}
			}
		};
		__namedExportsOrder = [
			"DocumentBrowse",
			"DocumentNew",
			"DocumentOpen",
			"AttachmentBrowse",
			"AttachmentNew",
			"AttachmentOpen",
			"AwardBrowse",
			"AwardNew",
			"AwardOpen",
			"ConferralBrowse",
			"ConferralNew",
			"ConferralOpen"
		];
	})))();
}
//#endregion
init_Records_stories();
export { AttachmentBrowse, AttachmentNew, AttachmentOpen, AwardBrowse, AwardNew, AwardOpen, ConferralBrowse, ConferralNew, ConferralOpen, DocumentBrowse, DocumentNew, DocumentOpen, __namedExportsOrder, meta as default };
