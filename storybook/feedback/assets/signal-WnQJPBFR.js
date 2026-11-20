import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { c as contribute, t as init_lukaot } from "./lukaot-CPYOO3Pb.js";
// ../../core/blong-browser/lukaot/signal.ts
var vocabulary;
function init_signal() {
	return (init_signal = __esmMin((() => {
		init_lukaot();
		vocabulary = contribute({ log: {
			/** The login endpoint answered without a token, so nothing can be signed in. */
			browserLoginTokenMissing: {
				level: "warn",
				message: "login response carried no access_token: {response}",
				mtid: "event",
				method: "auth.login"
			},
			/** The login call itself failed — a rejected credential, or a binding that is not there. */
			browserLoginCallFailed: {
				level: "warn",
				message: "login call failed: {errorType}: {errorMessage}",
				mtid: "event",
				method: "auth.login"
			},
			/** A model states a page it cannot build, and the page is registered anyway. */
			browserModelIncomplete: {
				level: "warn",
				message: "model warning: {warning}"
			}
		} });
	})))();
}
init_signal();
export { vocabulary as default };
