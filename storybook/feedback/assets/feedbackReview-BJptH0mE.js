const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./feedbackReviewPage-lqPCApKX.js","./rolldown-runtime-wTHAN5bU.js","./react-DUbJxPEF.js","./App-D0I1Wyqw.js","./preload-helper-DJ4GxKnf.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-CFJfMZ3i.js","./iframe-CGV3BbKH.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { at as init_types, it as handler } from "./iframe-CFJfMZ3i.js";
// browser/orchestrator/component/feedbackReview.ts
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
						const { FeedbackReviewPage } = await import("./feedbackReviewPage-lqPCApKX.js").then((n) => (n.r(), n.n));
						return { FeedbackReviewPage };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url);
					return FeedbackReviewPage;
				}
			};
		} }));
	})))();
}
init_feedbackReview();
export { feedbackReview_default as default };
