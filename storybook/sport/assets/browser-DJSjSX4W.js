const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./errors-DyQAzLMi.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-DxBhgsxq.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./browser-vpOcWc6g.js","./__vite-browser-external-bwQQhMfC.js","./attachable-B3-ly0Fu.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./primereact-_rYrCq5a.js","./Deck-B7MkA9kL.js","./BlongContext-B_6NAJve.js","./inputtext.esm-DVdHXlQv.js","./react-dom--p2_7awc.js","./Deck-DVlB4hMN.css","./datatable.esm-CRrgT_ub.js","./iframe-Dy8lWZD5.css","./receive-pdc-7heB.js","./send-0lo5JWC7.js","./ready-CO2X8N35.js","./errors-GgLBGQ9n.js","./load-DMA_s-Yd.js","./ready-BSRGjkd1.js","./request-CyfgIPYA.js","./testCodecMle-BxHLNcQk.js","./testLoginTokenCreate-CKQIInNT.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { $ as realm, J as init_types } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-gogo/src/codec/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm((blong) => ({
			url: import.meta.url,
			validation: blong.type.Object({}),
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./adapter/jsonrpc/errors.ts": () => __vitePreload(() => import("./errors-DyQAzLMi.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/jsonrpc/receive.ts": () => __vitePreload(() => import("./receive-pdc-7heB.js"), __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/jsonrpc/send.ts": () => __vitePreload(() => import("./send-0lo5JWC7.js"), __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/mle/ready.ts": () => __vitePreload(() => import("./ready-CO2X8N35.js"), __vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/openapi/errors.ts": () => __vitePreload(() => import("./errors-GgLBGQ9n.js"), __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/openapi/load.ts": () => __vitePreload(() => import("./load-DMA_s-Yd.js"), __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/openapi/ready.ts": () => __vitePreload(() => import("./ready-BSRGjkd1.js"), __vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./adapter/openapi/request.ts": () => __vitePreload(() => import("./request-CyfgIPYA.js"), __vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./test/test/testCodecMle.ts": () => __vitePreload(() => import("./testCodecMle-BxHLNcQk.js"), __vite__mapDeps([27,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url),
				"./test/test/testLoginTokenCreate.ts": () => __vitePreload(() => import("./testLoginTokenCreate-CKQIInNT.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url)
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
//#endregion
init_browser();
export { browser_default as default };
