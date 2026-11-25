import { n as __esmMin, o as __toESM } from "./rolldown-runtime-DpEnGzO4.js";
import { t as require_react } from "./react-dBA6YJJt.js";
import { N as useBlong } from "./App-BJ8EhoWL.js";
import { t as require_jsx_runtime } from "./jsx-runtime-WLy6qMFy.js";
import { C as SelfRegistration, n as init_src } from "./iframe-DG6UCJRm.js";
// ../blong-party/browser/orchestrator/component/selfRegistrationPage.tsx
/**
* Wires the blong-browser `SelfRegistration` full-screen form to the party
* suite's backend: `authRegister` (register + auto-login) and the Google OAuth
* redirect.
*/
function SelfRegistrationPage() {
	const { handler } = useBlong();
	const onRegister = import_react.useCallback(async (credentials) => {
		await handler.authRegister(credentials, {});
	}, [handler]);
	const onGoogle = import_react.useCallback(() => {
		handler.authGoogleRedirect({}, {});
	}, [handler]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelfRegistration, {
		title: "Blong Party",
		orgTitle: "Feasible One",
		onRegister,
		onGoogle
	});
}
var import_react, import_jsx_runtime;
function init_selfRegistrationPage() {
	return (init_selfRegistrationPage = __esmMin((() => {
		init_src();
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
init_selfRegistrationPage();
export { SelfRegistrationPage };
