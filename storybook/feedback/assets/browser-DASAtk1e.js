const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-BaCIOyr9.js","./rolldown-runtime-wTHAN5bU.js","./iframe-CFJfMZ3i.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-D0I1Wyqw.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-CGV3BbKH.css","./receive-DR22mYRN.js","./send-fNgPqHxo.js","./ready-BbqxwbbJ.js","./errors-bJx38rVT.js","./load-Dc_CDcZc.js","./ready-CYq-fpU8.js","./request-Kh5h_VQ0.js","./testCodecMle-CQYl5pPB.js","./testLoginTokenCreate-Crg8ylQ4.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { at as init_types, lt as realm } from "./iframe-CFJfMZ3i.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-BaCIOyr9.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-DR22mYRN.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-fNgPqHxo.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-BbqxwbbJ.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-bJx38rVT.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-Dc_CDcZc.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-CYq-fpU8.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-Kh5h_VQ0.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-CQYl5pPB.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-Crg8ylQ4.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url)
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
