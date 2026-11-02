import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_appStore, r as useAppStore } from "./appStore-p_jHiGC2.js";
import { n as page, t as init_storyHelper } from "./storyHelper-CEP2B8IC.js";
// src/stories/Feedback.stories.tsx
/** Wait for a selector to appear — a model page loads its schema first. */
async function waitFor(canvas, selector) {
	for (let attempt = 0; attempt < 400; attempt++) {
		const element = canvas.querySelector(selector);
		if (element) return element;
		await new Promise((resolve) => setTimeout(resolve, 50));
	}
	return null;
}
/**
* Switch the mode on and leave `count` comments on elements matching `selectors`.
*
* The click goes through a real `MouseEvent` rather than a store write, so the
* guard and the layer's own click handling are exercised: the identifier comes off
* the element, exactly as it does for a person.
*/
async function commentOn(canvas, entries) {
	feedbackStore.setState({ feedback: {
		active: true,
		items: {}
	} });
	for (const { selector, comment } of entries) {
		const element = await waitFor(canvas, selector);
		if (!element) continue;
		element.dispatchEvent(new MouseEvent("click", {
			bubbles: true,
			cancelable: true
		}));
		const targetId = element.getAttribute("data-feedback-id");
		if (!targetId) continue;
		await new Promise((resolve) => setTimeout(resolve, 20));
		feedbackStore.getState().feedbackUpdate(targetId, { commentText: comment });
	}
	await new Promise((resolve) => setTimeout(resolve, 120));
}
var meta, feedbackStore, AthleteBrowseFeedback, AthleteOpenFeedback, __namedExportsOrder;
function init_Feedback_stories() {
	return (init_Feedback_stories = __esmMin((() => {
		init_appStore();
		init_storyHelper();
		meta = {
			title: "Sport/Feedback",
			parameters: { layout: "fullscreen" }
		};
		feedbackStore = useAppStore;
		AthleteBrowseFeedback = {
			...page("sport.athlete.browse"),
			play: async ({ canvasElement }) => {
				await commentOn(canvasElement, [{
					selector: "[data-feedback-kind=\"column\"]",
					comment: "The header wraps and cuts the text at 1280px."
				}, {
					selector: "[data-feedback-kind=\"card\"]",
					comment: "This card is cut off at the bottom."
				}]);
			}
		};
		AthleteOpenFeedback = {
			...page("sport.athlete.open", 1),
			play: async ({ canvasElement }) => {
				await commentOn(canvasElement, [{
					selector: "[data-feedback-kind=\"field\"]",
					comment: "The label says Name but it holds the species."
				}]);
			}
		};
		AthleteBrowseFeedback.parameters = {
			...AthleteBrowseFeedback.parameters,
			docs: {
				...AthleteBrowseFeedback.parameters?.docs,
				source: {
					originalSource: "{\n  ...page('sport.athlete.browse'),\n  play: async ({\n    canvasElement\n  }: PlayContext) => {\n    await commentOn(canvasElement, [{\n      selector: '[data-feedback-kind=\"column\"]',\n      comment: 'The header wraps and cuts the text at 1280px.'\n    }, {\n      selector: '[data-feedback-kind=\"card\"]',\n      comment: 'This card is cut off at the bottom.'\n    }]);\n  }\n}",
					...AthleteBrowseFeedback.parameters?.docs?.source
				},
				description: {
					story: "Browse page with the mode on: a column, a card and a field commented.",
					...AthleteBrowseFeedback.parameters?.docs?.description
				}
			}
		};
		AthleteOpenFeedback.parameters = {
			...AthleteOpenFeedback.parameters,
			docs: {
				...AthleteOpenFeedback.parameters?.docs,
				source: {
					originalSource: "{\n  ...page('sport.athlete.open', 1),\n  play: async ({\n    canvasElement\n  }: PlayContext) => {\n    await commentOn(canvasElement, [{\n      selector: '[data-feedback-kind=\"field\"]',\n      comment: 'The label says Name but it holds the species.'\n    }]);\n  }\n}",
					...AthleteOpenFeedback.parameters?.docs?.source
				},
				description: {
					story: "Open page with the mode on: two fields commented.",
					...AthleteOpenFeedback.parameters?.docs?.description
				}
			}
		};
		__namedExportsOrder = ["AthleteBrowseFeedback", "AthleteOpenFeedback"];
	})))();
}
init_Feedback_stories();
export { AthleteBrowseFeedback, AthleteOpenFeedback, __namedExportsOrder, meta as default };
