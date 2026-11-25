const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./testMeterHttpFlow-B9VRagtM.js","./rolldown-runtime-DpEnGzO4.js","./iframe-DG6UCJRm.js","./preload-helper-Dd0jen5G.js","./react-dBA6YJJt.js","./browser-BFI3d8P5.js","./App-BJ8EhoWL.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { t as require_react } from "./react-dBA6YJJt.js";
import { N as useBlong } from "./App-BJ8EhoWL.js";
import { t as require_jsx_runtime } from "./jsx-runtime-WLy6qMFy.js";
import { c as TestRunPage, n as init_src } from "./iframe-DG6UCJRm.js";
// ../blong-gateway/src/pages/gatewayTestRunCatalog.ts
var gatewayTestRunCatalog;
function init_gatewayTestRunCatalog() {
	return (init_gatewayTestRunCatalog = __esmMin((() => {
		gatewayTestRunCatalog = [{
			method: "test.meter.httpFlow",
			name: "gateway flow"
		}, {
			method: "test.meter.flow",
			name: "gateway flow server",
			host: "server"
		}];
	})))();
}
// ../blong-gateway/src/pages/gatewayTestRunPage.tsx
/**
* TestRunGatewayPage — the browser test console for the `gateway` realm.
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
function TestRunGatewayPage() {
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
		catalog: gatewayTestRunCatalog,
		load,
		transport,
		defaultDetailsOpen: true,
		capture: true
	});
}
var import_jsx_runtime, testGroups;
function init_gatewayTestRunPage() {
	return (init_gatewayTestRunPage = __esmMin((() => {
		init_src();
		require_react();
		init_gatewayTestRunCatalog();
		import_jsx_runtime = require_jsx_runtime();
		init_preload_helper();
		testGroups = { "test.meter.httpFlow": () => __vitePreload(() => import("./testMeterHttpFlow-B9VRagtM.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url) };
	})))();
}
init_gatewayTestRunPage();
export { TestRunGatewayPage };
