import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as page, t as init_storyHelper } from "./storyHelper-CkeVvDJb.js";
//#region ../../demo/blong-marine/src/stories/Species.stories.tsx
var meta, Browse, Open, OpenSplit, OpenThumbIndex, New, NewFamily1, NewSplit, NewThumbIndex, Report, __namedExportsOrder;
function init_Species_stories() {
	return (init_Species_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Marine/Species",
			parameters: { layout: "fullscreen" }
		};
		Browse = page("marine.species.browse");
		Open = page("marine.species.open", 1);
		OpenSplit = page("marine.species.open", 1, { layout: "editSplit" });
		OpenThumbIndex = page("marine.species.open", 1, { layout: "editThumbIndex" });
		New = page("marine.species.new");
		NewFamily1 = page("marine.species.new", { "species.familyId": 1 });
		NewSplit = page("marine.species.new", { layout: "editSplit" });
		NewThumbIndex = page("marine.species.new", { layout: "editThumbIndex" });
		Report = page("marine.species.report");
		Browse.parameters = {
			...Browse.parameters,
			docs: {
				...Browse.parameters?.docs,
				source: {
					originalSource: "page('marine.species.browse')",
					...Browse.parameters?.docs?.source
				},
				description: {
					story: "3-panel browse with tree navigator (family hierarchy)",
					...Browse.parameters?.docs?.description
				}
			}
		};
		Open.parameters = {
			...Open.parameters,
			docs: {
				...Open.parameters?.docs,
				source: {
					originalSource: "page('marine.species.open', 1)",
					...Open.parameters?.docs?.source
				},
				description: {
					story: "Open species #1 (Clownfish)",
					...Open.parameters?.docs?.description
				}
			}
		};
		OpenSplit.parameters = {
			...OpenSplit.parameters,
			docs: {
				...OpenSplit.parameters?.docs,
				source: {
					originalSource: "page('marine.species.open', 1, {\n  layout: 'editSplit'\n})",
					...OpenSplit.parameters?.docs?.source
				},
				description: {
					story: "Split layout — taxonomy left, biology right",
					...OpenSplit.parameters?.docs?.description
				}
			}
		};
		OpenThumbIndex.parameters = {
			...OpenThumbIndex.parameters,
			docs: {
				...OpenThumbIndex.parameters?.docs,
				source: {
					originalSource: "page('marine.species.open', 1, {\n  layout: 'editThumbIndex'\n})",
					...OpenThumbIndex.parameters?.docs?.source
				},
				description: {
					story: "Thumb-index layout",
					...OpenThumbIndex.parameters?.docs?.description
				}
			}
		};
		New.parameters = {
			...New.parameters,
			docs: {
				...New.parameters?.docs,
				source: {
					originalSource: "page('marine.species.new')",
					...New.parameters?.docs?.source
				}
			}
		};
		NewFamily1.parameters = {
			...NewFamily1.parameters,
			docs: {
				...NewFamily1.parameters?.docs,
				source: {
					originalSource: "page('marine.species.new', {\n  'species.familyId': 1\n})",
					...NewFamily1.parameters?.docs?.source
				},
				description: {
					story: "New species pre-selected in family #1 (Acroporidae)",
					...NewFamily1.parameters?.docs?.description
				}
			}
		};
		NewSplit.parameters = {
			...NewSplit.parameters,
			docs: {
				...NewSplit.parameters?.docs,
				source: {
					originalSource: "page('marine.species.new', {\n  layout: 'editSplit'\n})",
					...NewSplit.parameters?.docs?.source
				}
			}
		};
		NewThumbIndex.parameters = {
			...NewThumbIndex.parameters,
			docs: {
				...NewThumbIndex.parameters?.docs,
				source: {
					originalSource: "page('marine.species.new', {\n  layout: 'editThumbIndex'\n})",
					...NewThumbIndex.parameters?.docs?.source
				}
			}
		};
		Report.parameters = {
			...Report.parameters,
			docs: {
				...Report.parameters?.docs,
				source: {
					originalSource: "page('marine.species.report')",
					...Report.parameters?.docs?.source
				}
			}
		};
		__namedExportsOrder = [
			"Browse",
			"Open",
			"OpenSplit",
			"OpenThumbIndex",
			"New",
			"NewFamily1",
			"NewSplit",
			"NewThumbIndex",
			"Report"
		];
	})))();
}
//#endregion
init_Species_stories();
export { Browse, New, NewFamily1, NewSplit, NewThumbIndex, Open, OpenSplit, OpenThumbIndex, Report, __namedExportsOrder, meta as default };
