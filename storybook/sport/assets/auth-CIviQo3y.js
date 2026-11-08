import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { ct as orchestrator, it as init_types } from "./iframe-BFtoPRqr.js";
// ../../core/blong-browser/orchestrator/auth.ts
var auth_default;
function init_auth() {
	return (init_auth = __esmMin((() => {
		init_types();
		auth_default = orchestrator(() => ({
			extends: "orchestrator.dispatch",
			activation: { default: {
				namespace: "auth",
				imports: "ui.auth"
			} }
		}));
	})))();
}
init_auth();
export { auth_default as default };
