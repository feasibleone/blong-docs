import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as page, t as init_storyHelper } from "./storyHelper-_Rs1rrEY.js";
//#region src/stories/Competition.stories.tsx
var meta, CompetitionBrowse, CompetitionNew, CompetitionOpen, EditionBrowse, EditionNew, EditionOpen, ParticipationBrowse, ParticipationNew, ParticipationOpen, ResultBrowse, ResultNew, ResultOpen, __namedExportsOrder;
function init_Competition_stories() {
	return (init_Competition_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Sport/Competition",
			parameters: { layout: "fullscreen" }
		};
		CompetitionBrowse = page("sport.competition.browse");
		CompetitionNew = page("sport.competition.new");
		CompetitionOpen = page("sport.competition.open", { competitionId: "cp1" });
		EditionBrowse = page("sport.edition.browse");
		EditionNew = page("sport.edition.new");
		EditionOpen = page("sport.edition.open", { editionId: "e1" });
		ParticipationBrowse = page("sport.participation.browse");
		ParticipationNew = page("sport.participation.new");
		ParticipationOpen = page("sport.participation.open", { participationId: "pa1" });
		ResultBrowse = page("sport.result.browse");
		ResultNew = page("sport.result.new");
		ResultOpen = page("sport.result.open", { resultId: "r1" });
		CompetitionBrowse.parameters = {
			...CompetitionBrowse.parameters,
			docs: {
				...CompetitionBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.competition.browse')",
					...CompetitionBrowse.parameters?.docs?.source
				}
			}
		};
		CompetitionNew.parameters = {
			...CompetitionNew.parameters,
			docs: {
				...CompetitionNew.parameters?.docs,
				source: {
					originalSource: "page('sport.competition.new')",
					...CompetitionNew.parameters?.docs?.source
				}
			}
		};
		CompetitionOpen.parameters = {
			...CompetitionOpen.parameters,
			docs: {
				...CompetitionOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.competition.open', {\n  competitionId: 'cp1'\n})",
					...CompetitionOpen.parameters?.docs?.source
				},
				description: {
					story: "The competition page lists its editions in a read-only card.",
					...CompetitionOpen.parameters?.docs?.description
				}
			}
		};
		EditionBrowse.parameters = {
			...EditionBrowse.parameters,
			docs: {
				...EditionBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.edition.browse')",
					...EditionBrowse.parameters?.docs?.source
				}
			}
		};
		EditionNew.parameters = {
			...EditionNew.parameters,
			docs: {
				...EditionNew.parameters?.docs,
				source: {
					originalSource: "page('sport.edition.new')",
					...EditionNew.parameters?.docs?.source
				}
			}
		};
		EditionOpen.parameters = {
			...EditionOpen.parameters,
			docs: {
				...EditionOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.edition.open', {\n  editionId: 'e1'\n})",
					...EditionOpen.parameters?.docs?.source
				}
			}
		};
		ParticipationBrowse.parameters = {
			...ParticipationBrowse.parameters,
			docs: {
				...ParticipationBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.participation.browse')",
					...ParticipationBrowse.parameters?.docs?.source
				}
			}
		};
		ParticipationNew.parameters = {
			...ParticipationNew.parameters,
			docs: {
				...ParticipationNew.parameters?.docs,
				source: {
					originalSource: "page('sport.participation.new')",
					...ParticipationNew.parameters?.docs?.source
				}
			}
		};
		ParticipationOpen.parameters = {
			...ParticipationOpen.parameters,
			docs: {
				...ParticipationOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.participation.open', {\n  participationId: 'pa1'\n})",
					...ParticipationOpen.parameters?.docs?.source
				}
			}
		};
		ResultBrowse.parameters = {
			...ResultBrowse.parameters,
			docs: {
				...ResultBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.result.browse')",
					...ResultBrowse.parameters?.docs?.source
				}
			}
		};
		ResultNew.parameters = {
			...ResultNew.parameters,
			docs: {
				...ResultNew.parameters?.docs,
				source: {
					originalSource: "page('sport.result.new')",
					...ResultNew.parameters?.docs?.source
				}
			}
		};
		ResultOpen.parameters = {
			...ResultOpen.parameters,
			docs: {
				...ResultOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.result.open', {\n  resultId: 'r1'\n})",
					...ResultOpen.parameters?.docs?.source
				}
			}
		};
		__namedExportsOrder = [
			"CompetitionBrowse",
			"CompetitionNew",
			"CompetitionOpen",
			"EditionBrowse",
			"EditionNew",
			"EditionOpen",
			"ParticipationBrowse",
			"ParticipationNew",
			"ParticipationOpen",
			"ResultBrowse",
			"ResultNew",
			"ResultOpen"
		];
	})))();
}
//#endregion
init_Competition_stories();
export { CompetitionBrowse, CompetitionNew, CompetitionOpen, EditionBrowse, EditionNew, EditionOpen, ParticipationBrowse, ParticipationNew, ParticipationOpen, ResultBrowse, ResultNew, ResultOpen, __namedExportsOrder, meta as default };
