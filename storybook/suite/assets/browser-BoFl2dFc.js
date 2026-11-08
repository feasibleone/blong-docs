const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-1deCbANd.js","./rolldown-runtime-wTHAN5bU.js","./iframe-Kwn0esJL.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./App-BWvWt_tT.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./App-BdnVsVE1.css","./iframe-Dz1ZBwrY.css","./receive-CNk4id2E.js","./send-DqFShC8F.js","./ready-CiOQkN6s.js","./errors-DUtpxH_5.js","./load-CYMlR_-x.js","./ready-CCUnj1_-.js","./request-BN1acGo-.js","./testCodecMle-0qLXEcFA.js","./testLoginTokenCreate-cy9CBdK2.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { nt as init_types, st as realm } from "./iframe-Kwn0esJL.js";
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
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-1deCbANd.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-CNk4id2E.js"), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-DqFShC8F.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-CiOQkN6s.js"), __vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-DUtpxH_5.js"), __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-CYMlR_-x.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-CCUnj1_-.js"), __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-BN1acGo-.js"), __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-0qLXEcFA.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-cy9CBdK2.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11]), import.meta.url)
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
