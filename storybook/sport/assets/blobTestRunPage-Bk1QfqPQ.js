import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { t as require_react } from "./react-dBA6YJJt.js";
import { N as useBlong } from "./App-BJ8EhoWL.js";
import { t as require_jsx_runtime } from "./jsx-runtime-WLy6qMFy.js";
import { c as TestRunPage, n as init_src } from "./iframe-DG6UCJRm.js";
// ../blong-blob/src/pages/blobTestRunCatalog.ts
var blobTestRunCatalog;
function init_blobTestRunCatalog() {
	return (init_blobTestRunCatalog = __esmMin((() => {
		blobTestRunCatalog = [];
	})))();
}
// ../blong-blob/src/pages/blobTestRunPage.tsx
/**
* TestRunBlobPage — the browser test console for the `blob` realm.
*
* The catalog is the guard; the loader resolves a catalog method to its browser
* test group's step array, invoking the group definition with the page's handler
* proxy so the group's login/access calls reach the gateway. The page ships only
* with the `test-ui` intent, and it refuses a method that is not in the catalog.
*
* The server entry calls the `test.run.*` methods through the UI backend: the UI
* handler proxy has no sender for the test namespace, while the backend adapter
* forwards to the gateway.
*/
function TestRunBlobPage() {
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
		catalog: blobTestRunCatalog,
		load,
		transport,
		defaultDetailsOpen: true,
		capture: true
	});
}
var import_jsx_runtime, testGroups;
function init_blobTestRunPage() {
	return (init_blobTestRunPage = __esmMin((() => {
		init_src();
		require_react();
		init_blobTestRunCatalog();
		import_jsx_runtime = require_jsx_runtime();
		testGroups = {};
	})))();
}
init_blobTestRunPage();
export { TestRunBlobPage };
