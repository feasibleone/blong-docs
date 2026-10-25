import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as page, t as init_storyHelper } from "./storyHelper-_Rs1rrEY.js";
//#region src/stories/Reference.stories.tsx
var meta, SportBrowse, SportNew, SportOpen, DisciplineBrowse, DisciplineNew, DisciplineOpen, CategoryBrowse, CategoryNew, CycleBrowse, CycleNew, AreaBrowse, AreaNew, __namedExportsOrder;
function init_Reference_stories() {
	return (init_Reference_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Sport/Reference",
			parameters: { layout: "fullscreen" }
		};
		SportBrowse = page("sport.sport.browse");
		SportNew = page("sport.sport.new");
		SportOpen = page("sport.sport.open", { sportId: "s1" });
		DisciplineBrowse = page("sport.discipline.browse");
		DisciplineNew = page("sport.discipline.new");
		DisciplineOpen = page("sport.discipline.open", { disciplineId: "d1" });
		CategoryBrowse = page("sport.category.browse");
		CategoryNew = page("sport.category.new");
		CycleBrowse = page("sport.cycle.browse");
		CycleNew = page("sport.cycle.new");
		AreaBrowse = page("sport.area.browse");
		AreaNew = page("sport.area.new");
		SportBrowse.parameters = {
			...SportBrowse.parameters,
			docs: {
				...SportBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.sport.browse')",
					...SportBrowse.parameters?.docs?.source
				}
			}
		};
		SportNew.parameters = {
			...SportNew.parameters,
			docs: {
				...SportNew.parameters?.docs,
				source: {
					originalSource: "page('sport.sport.new')",
					...SportNew.parameters?.docs?.source
				}
			}
		};
		SportOpen.parameters = {
			...SportOpen.parameters,
			docs: {
				...SportOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.sport.open', {\n  sportId: 's1'\n})",
					...SportOpen.parameters?.docs?.source
				}
			}
		};
		DisciplineBrowse.parameters = {
			...DisciplineBrowse.parameters,
			docs: {
				...DisciplineBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.discipline.browse')",
					...DisciplineBrowse.parameters?.docs?.source
				}
			}
		};
		DisciplineNew.parameters = {
			...DisciplineNew.parameters,
			docs: {
				...DisciplineNew.parameters?.docs,
				source: {
					originalSource: "page('sport.discipline.new')",
					...DisciplineNew.parameters?.docs?.source
				}
			}
		};
		DisciplineOpen.parameters = {
			...DisciplineOpen.parameters,
			docs: {
				...DisciplineOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.discipline.open', {\n  disciplineId: 'd1'\n})",
					...DisciplineOpen.parameters?.docs?.source
				}
			}
		};
		CategoryBrowse.parameters = {
			...CategoryBrowse.parameters,
			docs: {
				...CategoryBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.category.browse')",
					...CategoryBrowse.parameters?.docs?.source
				}
			}
		};
		CategoryNew.parameters = {
			...CategoryNew.parameters,
			docs: {
				...CategoryNew.parameters?.docs,
				source: {
					originalSource: "page('sport.category.new')",
					...CategoryNew.parameters?.docs?.source
				}
			}
		};
		CycleBrowse.parameters = {
			...CycleBrowse.parameters,
			docs: {
				...CycleBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.cycle.browse')",
					...CycleBrowse.parameters?.docs?.source
				}
			}
		};
		CycleNew.parameters = {
			...CycleNew.parameters,
			docs: {
				...CycleNew.parameters?.docs,
				source: {
					originalSource: "page('sport.cycle.new')",
					...CycleNew.parameters?.docs?.source
				}
			}
		};
		AreaBrowse.parameters = {
			...AreaBrowse.parameters,
			docs: {
				...AreaBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.area.browse')",
					...AreaBrowse.parameters?.docs?.source
				}
			}
		};
		AreaNew.parameters = {
			...AreaNew.parameters,
			docs: {
				...AreaNew.parameters?.docs,
				source: {
					originalSource: "page('sport.area.new')",
					...AreaNew.parameters?.docs?.source
				}
			}
		};
		__namedExportsOrder = [
			"SportBrowse",
			"SportNew",
			"SportOpen",
			"DisciplineBrowse",
			"DisciplineNew",
			"DisciplineOpen",
			"CategoryBrowse",
			"CategoryNew",
			"CycleBrowse",
			"CycleNew",
			"AreaBrowse",
			"AreaNew"
		];
	})))();
}
//#endregion
init_Reference_stories();
export { AreaBrowse, AreaNew, CategoryBrowse, CategoryNew, CycleBrowse, CycleNew, DisciplineBrowse, DisciplineNew, DisciplineOpen, SportBrowse, SportNew, SportOpen, __namedExportsOrder, meta as default };
