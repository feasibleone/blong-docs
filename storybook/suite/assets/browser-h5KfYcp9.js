const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-jWAgNlcw.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-jjCxrJpo.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css","./receive-DccQGMAe.js","./send-DUmKiaRX.js","./ready-DiF7hQG9.js","./errors-fAlHZ0cy.js","./load-DvOahKkZ.js","./ready-DTpQAxsK.js","./request-mWyhYDVH.js","./testCodecMle-2FjQYZ76.js","./testLoginTokenCreate-DXPDTxRx.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Qt as realm, qt as init_types } from "./iframe-jjCxrJpo.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-jWAgNlcw.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-DccQGMAe.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-DUmKiaRX.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-DiF7hQG9.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-fAlHZ0cy.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-DvOahKkZ.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-DTpQAxsK.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-mWyhYDVH.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-2FjQYZ76.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-DXPDTxRx.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10]), import.meta.url)
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
