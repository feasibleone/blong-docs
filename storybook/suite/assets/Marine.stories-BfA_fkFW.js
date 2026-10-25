import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { r as portal, t as init_storyHelper } from "./storyHelper-CkeVvDJb.js";
//#region ../../demo/blong-marine/src/stories/Marine.stories.tsx
var meta, Marine, __namedExportsOrder;
function init_Marine_stories() {
	return (init_Marine_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Marine/Portal",
			parameters: { layout: "fullscreen" }
		};
		Marine = portal();
		Marine.parameters = {
			...Marine.parameters,
			docs: {
				...Marine.parameters?.docs,
				source: {
					originalSource: "portal()",
					...Marine.parameters?.docs?.source
				},
				description: {
					story: "The whole portal shell — navigation, tabs and every page of the realm at once.",
					...Marine.parameters?.docs?.description
				}
			}
		};
		__namedExportsOrder = ["Marine"];
	})))();
}
//#endregion
init_Marine_stories();
export { Marine, __namedExportsOrder, meta as default };
