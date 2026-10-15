const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-BzOxnvRP.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-BfCOoPG7.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css","./receive-omlselEz.js","./send-ytSFV00Q.js","./ready-DqCE-0VL.js","./errors-7lS50QIU.js","./load-QKtOm79Y.js","./ready-BDCeGhnQ.js","./request-BDEEL6_V.js","./testCodecMle-DGrHK5Vr.js","./testLoginTokenCreate-D4JpXz2w.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Qt as realm, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-gogo/src/codec/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm((blong) => ({
			url: import.meta.url,
			validation: blong.type.Object({}),
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-BzOxnvRP.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-omlselEz.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-ytSFV00Q.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-DqCE-0VL.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-7lS50QIU.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-QKtOm79Y.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-BDCeGhnQ.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-BDEEL6_V.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-DGrHK5Vr.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-D4JpXz2w.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10]), import.meta.url)
			}) : ["./adapter", "./test"],
			config: {
				default: { adapter: true },
				dev: {},
				microservice: {},
				integration: { test: true }
			}
		}));
	})))();
}
//#endregion
init_browser();
export { browser_default as default };
