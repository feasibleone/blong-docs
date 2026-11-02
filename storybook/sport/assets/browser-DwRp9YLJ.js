const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-DR0QsXQL.js","./rolldown-runtime-wTHAN5bU.js","./iframe-BHvXl2EW.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./inputtext.esm-Da2nlmPp.js","./react-dom-BZ-DbxSX.js","./datatable.esm-C7f8YSwr.js","./iframe-Dy8lWZD5.css","./receive-D0g2gj-p.js","./send-CGtndU4O.js","./ready-ChTLmec6.js","./errors-CoVCK28D.js","./load-w3EQk-8V.js","./ready-DZ5rRhUg.js","./request-BPICMssJ.js","./testCodecMle-CdaYz5Ic.js","./testLoginTokenCreate-D-RpReJf.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { Sn as realm, _n as init_types } from "./iframe-BHvXl2EW.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-DR0QsXQL.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-D0g2gj-p.js"), __vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-CGtndU4O.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-ChTLmec6.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-CoVCK28D.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-w3EQk-8V.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-DZ5rRhUg.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-BPICMssJ.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-CdaYz5Ic.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-D-RpReJf.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10]), import.meta.url)
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
