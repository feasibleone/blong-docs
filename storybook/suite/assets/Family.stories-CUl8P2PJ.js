import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as page, t as init_storyHelper } from "./storyHelper-CkeVvDJb.js";
//#region ../../demo/blong-marine/src/stories/Family.stories.tsx
var meta, Browse, Open, OpenFull, New, NewFull, Report, __namedExportsOrder;
function init_Family_stories() {
	return (init_Family_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Marine/Family",
			parameters: { layout: "fullscreen" }
		};
		Browse = page("marine.family.browse");
		Open = page("marine.family.open", 1);
		OpenFull = page("marine.family.open", 1, { layout: "editFull" });
		New = page("marine.family.new");
		NewFull = page("marine.family.new", { layout: "editFull" });
		Report = page("marine.family.report");
		Browse.parameters = {
			...Browse.parameters,
			docs: {
				...Browse.parameters?.docs,
				source: {
					originalSource: "page('marine.family.browse')",
					...Browse.parameters?.docs?.source
				}
			}
		};
		Open.parameters = {
			...Open.parameters,
			docs: {
				...Open.parameters?.docs,
				source: {
					originalSource: "page('marine.family.open', 1)",
					...Open.parameters?.docs?.source
				},
				description: {
					story: "Open family #1 (Acroporidae)",
					...Open.parameters?.docs?.description
				}
			}
		};
		OpenFull.parameters = {
			...OpenFull.parameters,
			docs: {
				...OpenFull.parameters?.docs,
				source: {
					originalSource: "page('marine.family.open', 1, {\n  layout: 'editFull'\n})",
					...OpenFull.parameters?.docs?.source
				},
				description: {
					story: "Open family #1 — full layout with parentFamilyId field",
					...OpenFull.parameters?.docs?.description
				}
			}
		};
		New.parameters = {
			...New.parameters,
			docs: {
				...New.parameters?.docs,
				source: {
					originalSource: "page('marine.family.new')",
					...New.parameters?.docs?.source
				}
			}
		};
		NewFull.parameters = {
			...NewFull.parameters,
			docs: {
				...NewFull.parameters?.docs,
				source: {
					originalSource: "page('marine.family.new', {\n  layout: 'editFull'\n})",
					...NewFull.parameters?.docs?.source
				}
			}
		};
		Report.parameters = {
			...Report.parameters,
			docs: {
				...Report.parameters?.docs,
				source: {
					originalSource: "page('marine.family.report')",
					...Report.parameters?.docs?.source
				}
			}
		};
		__namedExportsOrder = [
			"Browse",
			"Open",
			"OpenFull",
			"New",
			"NewFull",
			"Report"
		];
	})))();
}
//#endregion
init_Family_stories();
export { Browse, New, NewFull, Open, OpenFull, Report, __namedExportsOrder, meta as default };
