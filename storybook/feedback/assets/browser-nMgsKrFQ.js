const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-BxxoEtSx.js","./rolldown-runtime-wTHAN5bU.js","./iframe-IrD74JhJ.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./receive-CQ72z6FX.js","./send-BHuYjH3z.js","./ready-C8MGXzPp.js","./errors-DADJqCwV.js","./load-DXitxZgN.js","./ready-DyHc8xN9.js","./request-lIT-Kg-w.js","./testCodecMle-DVJCrp_0.js","./testLoginTokenCreate-B5A_Qexw.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { _n as init_types, xn as realm } from "./iframe-IrD74JhJ.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-BxxoEtSx.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-CQ72z6FX.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-BHuYjH3z.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-C8MGXzPp.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-DADJqCwV.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-DXitxZgN.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-DyHc8xN9.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-lIT-Kg-w.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-DVJCrp_0.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-B5A_Qexw.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10]), import.meta.url)
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
