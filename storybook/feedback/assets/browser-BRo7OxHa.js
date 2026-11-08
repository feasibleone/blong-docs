const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-Be-Ll2f4.js","./rolldown-runtime-wTHAN5bU.js","./iframe-BslwTayt.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-aUJ8LCxO.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-DD0X1HUh.css","./receive-C562OD6H.js","./send-Tg43lmLz.js","./ready-CPQ8QNW5.js","./errors-Cl5cwDok.js","./load-Gcn4cUfv.js","./ready-sWNO5H-p.js","./request-D4-rJuQE.js","./testCodecMle-CL6HSZzg.js","./testLoginTokenCreate-adq9NowM.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { J as init_types, Q as realm } from "./iframe-BslwTayt.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-Be-Ll2f4.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-C562OD6H.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-Tg43lmLz.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-CPQ8QNW5.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-Cl5cwDok.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-Gcn4cUfv.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-sWNO5H-p.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-D4-rJuQE.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-CL6HSZzg.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-adq9NowM.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url)
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
