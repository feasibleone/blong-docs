import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, Q as orchestrator } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-browser/orchestrator/subject.ts
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
//#endregion
init_subject();
export { subject_default as default };
