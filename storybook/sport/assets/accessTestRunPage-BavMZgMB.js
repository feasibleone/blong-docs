const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./testSessionFlow-DeG3T8md.js","./rolldown-runtime-wTHAN5bU.js","./iframe-BFtoPRqr.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-DX5E6ahH.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-CqBUs-JR.css","./testAuthorizationFlow-D4OQifk6.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { t as require_react } from "./react-DUbJxPEF.js";
import { k as useBlong } from "./App-DX5E6ahH.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BGSnrdEt.js";
import { c as TestRunPage, n as init_src } from "./iframe-BFtoPRqr.js";
// ../blong-access/src/pages/accessTestRunCatalog.ts
var accessTestRunCatalog;
function init_accessTestRunCatalog() {
	return (init_accessTestRunCatalog = __esmMin((() => {
		accessTestRunCatalog = [
			{
				method: "test.session.flow",
				name: "session flow browser"
			},
			{
				method: "test.authorization.flow",
				name: "authorization flow browser"
			},
			{
				method: "test.login.flow",
				name: "login flow server",
				host: "server"
			}
		];
	})))();
}
// ../blong-access/src/pages/accessTestRunPage.tsx
/**
* AccessTestRunPage — the browser test console for the access suite.
*
* The catalog is the guard; the loader resolves a catalog method to its browser test group's step
* array, invoking the group definition with the page's handler proxy so the group's login/access
* calls reach the gateway. The page ships only with the `test-ui` intent, and it refuses a method
* that is not in the catalog.
*/
function AccessTestRunPage() {
	const { handler } = useBlong();
	const backend = handler;
	const transport = {
		start: (method, $meta) => backend["backend/test.run.start"]({
			method,
			name: `${method} server`
		}, $meta),
		events: (runId, cursor) => backend["backend/test.run.eventFind"]({
			runId,
			cursor
		}, {}),
		snapshot: (runId) => backend["backend/test.run.snapshotGet"]({ runId }, {}),
		cancel: async (runId) => {
			await backend["backend/test.run.cancel"]({ runId }, {});
		}
	};
	const load = async (method) => {
		const module = await testGroups[method]?.();
		if (!module) throw new Error(`no browser test group for ${method}`);
		const definition = module.default;
		const group = (name) => (steps) => Object.defineProperty(steps, "name", {
			value: name,
			enumerable: false
		});
		const invoke = definition({
			lib: { group },
			handler
		})[method.split(".").filter(Boolean).map((part, index) => index === 0 ? part : part[0].toUpperCase() + part.slice(1)).join("")];
		if (typeof invoke !== "function") throw new Error(`no test group method for ${method}`);
		const steps = invoke({ hasSession: true });
		if (!Array.isArray(steps)) throw new Error(`"${method}" did not return a step array`);
		return steps;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestRunPage, {
		title: "Test runs",
		catalog: accessTestRunCatalog,
		load,
		transport,
		defaultDetailsOpen: true,
		capture: true
	});
}
var import_jsx_runtime, testGroups;
function init_accessTestRunPage() {
	return (init_accessTestRunPage = __esmMin((() => {
		init_src();
		require_react();
		init_accessTestRunCatalog();
		import_jsx_runtime = require_jsx_runtime();
		init_preload_helper();
		testGroups = {
			"test.session.flow": () => __vitePreload(() => import("./testSessionFlow-DeG3T8md.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
			"test.authorization.flow": () => __vitePreload(() => import("./testAuthorizationFlow-D4OQifk6.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url)
		};
	})))();
}
init_accessTestRunPage();
export { AccessTestRunPage };
