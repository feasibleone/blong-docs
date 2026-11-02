const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-CncCQE1W.js","./rolldown-runtime-wTHAN5bU.js","./iframe-Dd4aRJs7.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./receive-DokCOdsD.js","./send-CT8bvmp7.js","./ready-DJTt5w4d.js","./errors-CpRAD4wn.js","./load-CnZ0URNC.js","./ready-IcSMKaJ_.js","./request-DoZcMFqS.js","./testCodecMle-CrWCAZy8.js","./testLoginTokenCreate-C0Z6jOX9.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Sn as realm, _n as init_types } from "./iframe-Dd4aRJs7.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-CncCQE1W.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-DokCOdsD.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-CT8bvmp7.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-DJTt5w4d.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-CpRAD4wn.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-CnZ0URNC.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-IcSMKaJ_.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-DoZcMFqS.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-CrWCAZy8.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-C0Z6jOX9.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10]), import.meta.url)
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
