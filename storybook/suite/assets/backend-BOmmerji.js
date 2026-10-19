const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./blong-mock-BixNenUe.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-jjCxrJpo.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Gt as adapter, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-browser/adapter/backend.ts
var backend_default;
function init_backend() {
	return (init_backend = __esmMin((() => {
		init_types();
		init_preload_helper();
		backend_default = adapter(() => ({
			extends: "adapter.http",
			activation: {
				default: {
					namespace: "backend",
					imports: ["codec.jsonrpc", "codec.mle"],
					url: globalThis.window?.location?.origin ?? "http://localhost:8080"
				},
				browser: { logLevel: "debug" },
				storybook: {
					mock: true,
					imports: [/\.model$/, /\.fixture$/]
				},
				/**
				* Storybook, reading a real gateway over plain JSON-RPC.
				*
				* No mock, so the model handlers travel to the gateway; `codec.mle` is
				* deliberately absent — the Storybook dev-server plugin terminates the
				* MLE for these calls (it holds the token and decrypts the response),
				* which is what lets the page speak plain JSON.  Activated by the
				* `backend: 'jsonrpc'` toolbar choice through the `storybookJsonrpc`
				* intent.
				*/
				storybookJsonrpc: {
					mock: false,
					imports: [
						/\.model$/,
						/\.fixture$/,
						"codec.jsonrpc"
					]
				},
				/**
				* Storybook, reading a real gateway with the app's own encryption.
				*
				* Same as `storybookJsonrpc` but the page keeps `codec.mle`, so its
				* requests are encrypted end to end; the dev-server plugin only supplies
				* the token.  Activated by the `backend: 'mle'` toolbar choice.
				*/
				storybookMle: {
					mock: false,
					imports: [
						/\.model$/,
						/\.fixture$/,
						"codec.jsonrpc",
						"codec.mle"
					]
				}
			},
			async createHandlers({ handlers, layerApi, kind }) {
				if (this.config?.mock && kind === "model") {
					const { mock } = await __vitePreload(async () => {
						const { mock } = await import("./blong-mock-BixNenUe.js").then((n) => (n.n(), n.t));
						return { mock };
					}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url);
					const models = await Promise.all(Object.values(handlers).map((model) => model()));
					return await mock.apply(this, [models, layerApi]);
				}
			}
		}));
	})))();
}
//#endregion
init_backend();
export { backend_default as default };
