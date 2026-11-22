const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-sULfvWAM.js","./rolldown-runtime-wTHAN5bU.js","./iframe-D5_otGjj.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-j-lPdz5p.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-C7_YSXJH.css","./iframe-Bk4Mxfji.css","./receive-CCGPJEus.js","./send-DQTizhwB.js","./ready-bW6tngSx.js","./errors-D6j8_uta.js","./load-CxXjaGm-.js","./ready-DRNsk3Cq.js","./request-BrBE7D3w.js","./testCodecMle-COylODKY.js","./testLoginTokenCreate-CBOq8MKb.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { kt as realm, wt as init_types } from "./iframe-D5_otGjj.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-sULfvWAM.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-CCGPJEus.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-DQTizhwB.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-bW6tngSx.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-D6j8_uta.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-CxXjaGm-.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-DRNsk3Cq.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-BrBE7D3w.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-COylODKY.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-CBOq8MKb.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
