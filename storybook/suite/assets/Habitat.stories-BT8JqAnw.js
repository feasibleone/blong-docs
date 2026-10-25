import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as page, t as init_storyHelper } from "./storyHelper-CkeVvDJb.js";
//#region ../../demo/blong-marine/src/stories/Habitat.stories.tsx
var meta, Browse, Open, OpenSplit, OpenThumbIndex, New, NewSplit, NewThumbIndex, Report, __namedExportsOrder;
function init_Habitat_stories() {
	return (init_Habitat_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Marine/Habitat",
			parameters: { layout: "fullscreen" }
		};
		Browse = page("marine.habitat.browse");
		Open = page("marine.habitat.open", 1);
		OpenSplit = page("marine.habitat.open", 1, { layout: "editSplit" });
		OpenThumbIndex = page("marine.habitat.open", 1, { layout: "editThumbIndex" });
		New = page("marine.habitat.new");
		NewSplit = page("marine.habitat.new", { layout: "editSplit" });
		NewThumbIndex = page("marine.habitat.new", { layout: "editThumbIndex" });
		Report = page("marine.habitat.report");
		Browse.parameters = {
			...Browse.parameters,
			docs: {
				...Browse.parameters?.docs,
				source: {
					originalSource: "page('marine.habitat.browse')",
					...Browse.parameters?.docs?.source
				}
			}
		};
		Open.parameters = {
			...Open.parameters,
			docs: {
				...Open.parameters?.docs,
				source: {
					originalSource: "page('marine.habitat.open', 1)",
					...Open.parameters?.docs?.source
				},
				description: {
					story: "Open habitat #1 (Great Barrier Reef)",
					...Open.parameters?.docs?.description
				}
			}
		};
		OpenSplit.parameters = {
			...OpenSplit.parameters,
			docs: {
				...OpenSplit.parameters?.docs,
				source: {
					originalSource: "page('marine.habitat.open', 1, {\n  layout: 'editSplit'\n})",
					...OpenSplit.parameters?.docs?.source
				},
				description: {
					story: "Split layout — details on left, coordinates on right",
					...OpenSplit.parameters?.docs?.description
				}
			}
		};
		OpenThumbIndex.parameters = {
			...OpenThumbIndex.parameters,
			docs: {
				...OpenThumbIndex.parameters?.docs,
				source: {
					originalSource: "page('marine.habitat.open', 1, {\n  layout: 'editThumbIndex'\n})",
					...OpenThumbIndex.parameters?.docs?.source
				},
				description: {
					story: "Thumb-index tab layout",
					...OpenThumbIndex.parameters?.docs?.description
				}
			}
		};
		New.parameters = {
			...New.parameters,
			docs: {
				...New.parameters?.docs,
				source: {
					originalSource: "page('marine.habitat.new')",
					...New.parameters?.docs?.source
				}
			}
		};
		NewSplit.parameters = {
			...NewSplit.parameters,
			docs: {
				...NewSplit.parameters?.docs,
				source: {
					originalSource: "page('marine.habitat.new', {\n  layout: 'editSplit'\n})",
					...NewSplit.parameters?.docs?.source
				}
			}
		};
		NewThumbIndex.parameters = {
			...NewThumbIndex.parameters,
			docs: {
				...NewThumbIndex.parameters?.docs,
				source: {
					originalSource: "page('marine.habitat.new', {\n  layout: 'editThumbIndex'\n})",
					...NewThumbIndex.parameters?.docs?.source
				}
			}
		};
		Report.parameters = {
			...Report.parameters,
			docs: {
				...Report.parameters?.docs,
				source: {
					originalSource: "page('marine.habitat.report')",
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
			"NewSplit",
			"NewThumbIndex",
			"Report"
		];
	})))();
}
//#endregion
init_Habitat_stories();
export { Browse, New, NewSplit, NewThumbIndex, Open, OpenSplit, OpenThumbIndex, Report, __namedExportsOrder, meta as default };
