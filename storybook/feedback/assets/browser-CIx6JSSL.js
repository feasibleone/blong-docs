const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-CILhXwnP.js","./rolldown-runtime-DpEnGzO4.js","./iframe-DRWtcwdA.js","./preload-helper-Dd0jen5G.js","./react-dBA6YJJt.js","./App-BXXuylT2.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-CGV3BbKH.css","./receive-BN2pyYmL.js","./send-DsKfJ2O0.js","./ready-lFPtN9jQ.js","./errors-LThqxqtf.js","./load-DGdJ8xdJ.js","./ready-BbFRd4M-.js","./request--YIchdR_.js","./testCodecMle-DSuhA52u.js","./testLoginTokenCreate-DW8QiB5q.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { at as init_types, lt as realm } from "./iframe-DRWtcwdA.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-CILhXwnP.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-BN2pyYmL.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-DsKfJ2O0.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-lFPtN9jQ.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-LThqxqtf.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-DGdJ8xdJ.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-BbFRd4M-.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request--YIchdR_.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-DSuhA52u.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-DW8QiB5q.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url)
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
