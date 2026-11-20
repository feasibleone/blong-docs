const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-C7dvJ-ds.js","./rolldown-runtime-wTHAN5bU.js","./iframe-Dfus02Vk.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./browser-BYUjCXlM.js","./App-DdoAR19-.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-hWw_HkPx.css","./iframe-BsAIw8gp.css","./receive-D75OhbM5.js","./send-mVJQCccG.js","./ready-C5dTBPv3.js","./errors-CRCq-vy6.js","./load-E__KZ_-U.js","./ready-1ZXkIukb.js","./request-C6beTP_z.js","./testCodecMle-BFggvsIp.js","./testLoginTokenCreate-BzMfPp5D.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { bt as realm, ht as init_types } from "./iframe-Dfus02Vk.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-C7dvJ-ds.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-D75OhbM5.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-mVJQCccG.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-C5dTBPv3.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-CRCq-vy6.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-E__KZ_-U.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-1ZXkIukb.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-C6beTP_z.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-BFggvsIp.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-BzMfPp5D.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url)
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
