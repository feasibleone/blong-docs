import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as page, t as init_storyHelper } from "./storyHelper-_Rs1rrEY.js";
//#region src/stories/People.stories.tsx
var meta, AthleteBrowse, AthleteNew, AthleteOpen, AthleteOpenGrid, CoachBrowse, CoachNew, CoachOpen, SpecialistBrowse, SpecialistNew, SpecialistOpen, __namedExportsOrder;
function init_People_stories() {
	return (init_People_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Sport/People",
			parameters: { layout: "fullscreen" }
		};
		AthleteBrowse = page("sport.athlete.browse");
		AthleteNew = page("sport.athlete.new");
		AthleteOpen = page("sport.athlete.open", { athleteId: "p1" });
		AthleteOpenGrid = page("sport.athlete.open", { athleteId: "p1" }, { layout: "editSplit" });
		CoachBrowse = page("sport.coach.browse");
		CoachNew = page("sport.coach.new");
		CoachOpen = page("sport.coach.open", { coachId: "p5" });
		SpecialistBrowse = page("sport.specialist.browse");
		SpecialistNew = page("sport.specialist.new");
		SpecialistOpen = page("sport.specialist.open", { specialistId: "p7" });
		AthleteBrowse.parameters = {
			...AthleteBrowse.parameters,
			docs: {
				...AthleteBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.athlete.browse')",
					...AthleteBrowse.parameters?.docs?.source
				}
			}
		};
		AthleteNew.parameters = {
			...AthleteNew.parameters,
			docs: {
				...AthleteNew.parameters?.docs,
				source: {
					originalSource: "page('sport.athlete.new')",
					...AthleteNew.parameters?.docs?.source
				}
			}
		};
		AthleteOpen.parameters = {
			...AthleteOpen.parameters,
			docs: {
				...AthleteOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.athlete.open', {\n  athleteId: 'p1'\n})",
					...AthleteOpen.parameters?.docs?.source
				},
				description: {
					story: "The six tabs of the athlete editor.\n\nThe child lists (results, Olympic status, awards, documents) render empty here:\nthe real `get` attaches them as siblings of the record, and the mock answers\n`get` from the fixture row alone.",
					...AthleteOpen.parameters?.docs?.description
				}
			}
		};
		AthleteOpenGrid.parameters = {
			...AthleteOpenGrid.parameters,
			docs: {
				...AthleteOpenGrid.parameters?.docs,
				source: {
					originalSource: "page('sport.athlete.open', {\n  athleteId: 'p1'\n}, {\n  layout: 'editSplit'\n})",
					...AthleteOpenGrid.parameters?.docs?.source
				}
			}
		};
		CoachBrowse.parameters = {
			...CoachBrowse.parameters,
			docs: {
				...CoachBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.coach.browse')",
					...CoachBrowse.parameters?.docs?.source
				}
			}
		};
		CoachNew.parameters = {
			...CoachNew.parameters,
			docs: {
				...CoachNew.parameters?.docs,
				source: {
					originalSource: "page('sport.coach.new')",
					...CoachNew.parameters?.docs?.source
				}
			}
		};
		CoachOpen.parameters = {
			...CoachOpen.parameters,
			docs: {
				...CoachOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.coach.open', {\n  coachId: 'p5'\n})",
					...CoachOpen.parameters?.docs?.source
				}
			}
		};
		SpecialistBrowse.parameters = {
			...SpecialistBrowse.parameters,
			docs: {
				...SpecialistBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.specialist.browse')",
					...SpecialistBrowse.parameters?.docs?.source
				}
			}
		};
		SpecialistNew.parameters = {
			...SpecialistNew.parameters,
			docs: {
				...SpecialistNew.parameters?.docs,
				source: {
					originalSource: "page('sport.specialist.new')",
					...SpecialistNew.parameters?.docs?.source
				}
			}
		};
		SpecialistOpen.parameters = {
			...SpecialistOpen.parameters,
			docs: {
				...SpecialistOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.specialist.open', {\n  specialistId: 'p7'\n})",
					...SpecialistOpen.parameters?.docs?.source
				}
			}
		};
		__namedExportsOrder = [
			"AthleteBrowse",
			"AthleteNew",
			"AthleteOpen",
			"AthleteOpenGrid",
			"CoachBrowse",
			"CoachNew",
			"CoachOpen",
			"SpecialistBrowse",
			"SpecialistNew",
			"SpecialistOpen"
		];
	})))();
}
//#endregion
init_People_stories();
export { AthleteBrowse, AthleteNew, AthleteOpen, AthleteOpenGrid, CoachBrowse, CoachNew, CoachOpen, SpecialistBrowse, SpecialistNew, SpecialistOpen, __namedExportsOrder, meta as default };
