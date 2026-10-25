import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { r as portal, t as init_storyHelper } from "./storyHelper-_Rs1rrEY.js";
//#region src/stories/Portal.stories.tsx
var meta, Home, __namedExportsOrder;
function init_Portal_stories() {
	return (init_Portal_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Sport/Portal",
			parameters: { layout: "fullscreen" }
		};
		Home = portal();
		Home.parameters = {
			...Home.parameters,
			docs: {
				...Home.parameters?.docs,
				source: {
					originalSource: "portal()",
					...Home.parameters?.docs?.source
				},
				description: {
					story: "The portal shell after login, with the sport menu closed.",
					...Home.parameters?.docs?.description
				}
			}
		};
		__namedExportsOrder = ["Home"];
	})))();
}
//#endregion
init_Portal_stories();
export { Home, __namedExportsOrder, meta as default };
