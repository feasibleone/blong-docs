import { n as __esmMin, s as __toESM, t as __commonJSMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, L as snakeToCamel, N as init_lib, X as library } from "./iframe-DxBhgsxq.js";
//#region ../../common/temp/node_modules/.pnpm/is-obj@2.0.0/node_modules/is-obj/index.js
var require_is_obj = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = (value) => {
		const type = typeof value;
		return value !== null && (type === "object" || type === "function");
	};
}));
//#endregion
//#region ../../common/temp/node_modules/.pnpm/dot-prop@6.0.0/node_modules/dot-prop/index.js
var require_dot_prop = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObj = require_is_obj();
	var disallowedKeys = /* @__PURE__ */ new Set([
		"__proto__",
		"prototype",
		"constructor"
	]);
	var isValidPath = (pathSegments) => !pathSegments.some((segment) => disallowedKeys.has(segment));
	function getPathSegments(path) {
		const pathArray = path.split(".");
		const parts = [];
		for (let i = 0; i < pathArray.length; i++) {
			let p = pathArray[i];
			while (p[p.length - 1] === "\\" && pathArray[i + 1] !== void 0) {
				p = p.slice(0, -1) + ".";
				p += pathArray[++i];
			}
			parts.push(p);
		}
		if (!isValidPath(parts)) return [];
		return parts;
	}
	module.exports = {
		get(object, path, value) {
			if (!isObj(object) || typeof path !== "string") return value === void 0 ? object : value;
			const pathArray = getPathSegments(path);
			if (pathArray.length === 0) return;
			for (let i = 0; i < pathArray.length; i++) {
				object = object[pathArray[i]];
				if (object === void 0 || object === null) {
					if (i !== pathArray.length - 1) return value;
					break;
				}
			}
			return object;
		},
		set(object, path, value) {
			if (!isObj(object) || typeof path !== "string") return object;
			const root = object;
			const pathArray = getPathSegments(path);
			for (let i = 0; i < pathArray.length; i++) {
				const p = pathArray[i];
				if (!isObj(object[p])) object[p] = {};
				if (i === pathArray.length - 1) object[p] = value;
				object = object[p];
			}
			return root;
		},
		delete(object, path) {
			if (!isObj(object) || typeof path !== "string") return false;
			const pathArray = getPathSegments(path);
			for (let i = 0; i < pathArray.length; i++) {
				const p = pathArray[i];
				if (i === pathArray.length - 1) {
					delete object[p];
					return true;
				}
				object = object[p];
				if (!isObj(object)) return false;
			}
		},
		has(object, path) {
			if (!isObj(object) || typeof path !== "string") return false;
			const pathArray = getPathSegments(path);
			if (pathArray.length === 0) return false;
			for (let i = 0; i < pathArray.length; i++) if (isObj(object)) {
				if (!(pathArray[i] in object)) return false;
				object = object[pathArray[i]];
			} else return false;
			return true;
		}
	};
}));
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ut-function.interpolate@1.1.3/node_modules/ut-function.interpolate/index.js
var require_ut_function_interpolate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var defultMatcher = /{([^}]+)}/g;
	var dotProp = require_dot_prop();
	module.exports = function interpolate(what, params, inline = true, matcher = defultMatcher) {
		switch (typeof what) {
			case "string": {
				if (inline) return what.replace(matcher, (placeHolder, label) => {
					const value = dotProp.get(params, label);
					switch (typeof value) {
						case "undefined": return placeHolder;
						case "object": return JSON.stringify(value);
						default: return value;
					}
				});
				const match = matcher.exec(what);
				if (!match || match[0] !== what) return what;
				matcher.lastIndex = 0;
				const value = dotProp.get(params, match[1]);
				return value == null ? match[0] : value;
			}
			case "object": if (Array.isArray(what)) return what.map((item) => interpolate(item, params, inline, matcher));
			else return Object.entries(what).reduce((all, [key, value]) => {
				all[key] = interpolate(value, params, inline, matcher);
				return all;
			}, {});
			default: return what;
		}
	};
}));
//#endregion
//#region ../../core/blong-gogo/src/codec/adapter/openapi/request.ts
var import_ut_function_interpolate, request_default;
function init_request() {
	return (init_request = __esmMin((() => {
		init_types();
		import_ut_function_interpolate = /* @__PURE__ */ __toESM(require_ut_function_interpolate(), 1);
		init_lib();
		request_default = library(() => function request({ url, method, schemas, path, responseType }) {
			return (msg = {}) => {
				const { params = msg, body, baseUrl, headers, payload } = msg;
				const result = {
					url: baseUrl ? baseUrl + path : url,
					method,
					body,
					responseType: msg.responseType || responseType,
					headers,
					form: void 0,
					query: void 0,
					json: void 0
				};
				schemas.forEach((schema) => {
					const identifier = snakeToCamel(schema.name);
					const param = typeof params[identifier] === "undefined" ? schema.default : params[identifier];
					switch (schema.in) {
						case "header":
							if (schema.name.toLocaleLowerCase() === "content-length") return;
							result.headers ||= {};
							result.headers[schema.name] = param;
							break;
						case "query":
							result.query ||= {};
							result.query[schema.name] = param;
							break;
						case "formData":
							result.form ||= {};
							result.form[schema.name] = param;
							break;
						case "path":
							result.url = (0, import_ut_function_interpolate.default)(result.url, { [schema.name]: param });
							break;
						case "body": if (schema.schema?.properties || schema.schema?.additionalProperties) result.json = schema.schema.additionalProperties ? payload : Object.fromEntries(Object.entries(schema.schema.properties).map(([name, value]) => name in params && [name, typeof params[name] === "undefined" ? value.default : params[name]]).filter(Boolean));
					}
				});
				return result;
			};
		});
	})))();
}
//#endregion
init_request();
export { request_default as default };
