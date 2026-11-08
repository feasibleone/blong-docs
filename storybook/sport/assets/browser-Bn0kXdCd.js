const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-Z-EiWTnV.js","./rolldown-runtime-wTHAN5bU.js","./iframe-BFtoPRqr.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-DX5E6ahH.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-CqBUs-JR.css","./receive-hdQZQn4l.js","./send-BovVc4LI.js","./ready-44WOFuAs.js","./errors-v4Hv4-6I.js","./load-B6RRgjN1.js","./ready-1uIDU4oy.js","./request-BxwIgzCE.js","./testCodecMle-CEJTCjGx.js","./testLoginTokenCreate-C8dt2MHB.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { it as init_types, lt as realm } from "./iframe-BFtoPRqr.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-Z-EiWTnV.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-hdQZQn4l.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-BovVc4LI.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-44WOFuAs.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-v4Hv4-6I.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-B6RRgjN1.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-1uIDU4oy.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-BxwIgzCE.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-CEJTCjGx.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-C8dt2MHB.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url)
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
