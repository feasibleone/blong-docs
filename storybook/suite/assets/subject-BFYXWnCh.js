import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { nt as init_types, ot as orchestrator } from "./iframe-Kwn0esJL.js";
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
