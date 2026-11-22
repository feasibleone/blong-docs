const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./feedbackReviewPage-DB1DikUL.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./App-RsDW9gku.js","./preload-helper-DJ4GxKnf.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-DzCJG9bn.js","./browser-BYUjCXlM.js","./iframe-W-GhGhIc.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Et as init_types, Tt as handler } from "./iframe-DzCJG9bn.js";
// ../blong-feedback/browser/orchestrator/component/feedbackReview.ts
var feedbackReview_default;
function init_feedbackReview() {
	return (init_feedbackReview = __esmMin((() => {
		init_types();
		init_preload_helper();
		feedbackReview_default = handler(() => ({ async "feedback.review"() {
			return {
				title: "Feedback review",
				permission: "feedback.session.find",
				icon: "pi pi-comment",
				component: async () => {
					const { FeedbackReviewPage } = await __vitePreload(async () => {
						const { FeedbackReviewPage } = await import("./feedbackReviewPage-DB1DikUL.js");
						return { FeedbackReviewPage };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url);
					return FeedbackReviewPage;
				}
			};
		} }));
	})))();
}
init_feedbackReview();
export { feedbackReview_default as default };
