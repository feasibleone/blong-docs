import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Zt as orchestrator, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-browser/orchestrator/auth.ts
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
//#endregion
init_auth();
export { auth_default as default };
