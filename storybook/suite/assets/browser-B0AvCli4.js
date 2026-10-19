const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./generic-BQSWhFQ2.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-jjCxrJpo.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css","./http-Da6Cx7pK.js","./distribution-D8_oBr4p.js"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Qt as realm, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-gogo/src/adapter/browser.ts
var browser_default;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_types();
		init_preload_helper();
		browser_default = realm((blong) => ({
			url: import.meta.url,
			validation: blong.type.Object({
				http: blong.type.Boolean(),
				browser: blong.type.Boolean()
			}),
			children: globalThis.window ? /* #__PURE__ */ Object.assign({
				"./browser/generic.ts": () => __vitePreload(() => import("./generic-BQSWhFQ2.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]), import.meta.url),
				"./browser/http.ts": () => __vitePreload(() => import("./http-Da6Cx7pK.js"), __vite__mapDeps([11,1,3,12,2,4,5,6,7,8,9,10]), import.meta.url)
			}) : ["./browser"],
			config: { default: {
				http: false,
				generic: false,
				browser: true
			} }
		}));
	})))();
}
//#endregion
init_browser();
export { browser_default as default };
