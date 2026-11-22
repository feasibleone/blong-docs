const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-BX51lz1b.js","./rolldown-runtime-wTHAN5bU.js","./iframe-DzCJG9bn.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-RsDW9gku.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-W-GhGhIc.css","./receive-DMpq_CIa.js","./send-D1q6CxGt.js","./ready-B2q1QcyL.js","./errors-DyHZ-lvJ.js","./load-CJBt5kOY.js","./ready-CFPe4fe8.js","./request-DdP0S72j.js","./testCodecMle-C5Mc15T7.js","./testLoginTokenCreate-CztVVm_q.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Et as init_types, jt as realm } from "./iframe-DzCJG9bn.js";
// ../../core/blong-gogo/src/codec/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm((blong) => ({
			url: import.meta.url,
			validation: blong.type.Object({}),
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-BX51lz1b.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-DMpq_CIa.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-D1q6CxGt.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-B2q1QcyL.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-DyHZ-lvJ.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-CJBt5kOY.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-CFPe4fe8.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-DdP0S72j.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-C5Mc15T7.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-CztVVm_q.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
init_browser();
export { browser_default as default };
