import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Ot as orchestrator, wt as init_types } from "./iframe-Na9SG7k6.js";
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
