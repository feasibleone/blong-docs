const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-BAkD31uk.js","./rolldown-runtime-DpEnGzO4.js","./iframe-Na9SG7k6.js","./preload-helper-Dd0jen5G.js","./react-dBA6YJJt.js","./browser-BFI3d8P5.js","./App-BUQapjGL.js","./jsx-runtime-WLy6qMFy.js","./appStore-dUXbUZgf.js","./shell-h_oHnhE9.js","./react-dom-APvmjNld.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css","./receive-B2QNtXZA.js","./send-HptdUbvn.js","./ready-CLEUovtJ.js","./errors-DU52iyAk.js","./load-BAFV4lW1.js","./ready-Cgxg54xj.js","./request-BtKNFH1R.js","./testCodecMle-BcqqIplq.js","./testLoginTokenCreate-DbWcYbnl.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-Dd0jen5G.js";
import { kt as realm, wt as init_types } from "./iframe-Na9SG7k6.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-BAkD31uk.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-B2QNtXZA.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-HptdUbvn.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-CLEUovtJ.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-DU52iyAk.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-BAFV4lW1.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-Cgxg54xj.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-BtKNFH1R.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-BcqqIplq.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-DbWcYbnl.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
