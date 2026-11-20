const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-DREfsiNj.js","./rolldown-runtime-wTHAN5bU.js","./iframe-D5MtwBLZ.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-BeXqXP1l.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-B4ggmZbP.css","./receive-DwCeVxNo.js","./send-ULsfn0TZ.js","./ready-CTdlMADf.js","./errors-DmLbjIqA.js","./load-BSoHW7fo.js","./ready-CNQy0nd6.js","./request-DOlP97ey.js","./testCodecMle-ob6oc4m1.js","./testLoginTokenCreate-D5rf8Xmn.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { St as realm, _t as init_types } from "./iframe-D5MtwBLZ.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-DREfsiNj.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-DwCeVxNo.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-ULsfn0TZ.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-CTdlMADf.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-DmLbjIqA.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-BSoHW7fo.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-CNQy0nd6.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-DOlP97ey.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-ob6oc4m1.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-D5rf8Xmn.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
