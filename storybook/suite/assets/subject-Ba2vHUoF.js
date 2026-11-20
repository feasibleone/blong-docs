import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { ht as init_types, yt as orchestrator } from "./iframe-Dfus02Vk.js";
// ../../core/blong-browser/orchestrator/subject.ts
var subject_default;
function init_subject() {
	return (init_subject = __esmMin((() => {
		init_types();
		subject_default = orchestrator(() => ({
			extends: "orchestrator.dispatch",
			activation: { default: {
				namespace: "subject",
				imports: [/\.subject$/],
				destination: "backend"
			} }
		}));
	})))();
}
init_subject();
export { subject_default as default };
