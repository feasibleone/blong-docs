import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Wt as Internal, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-gogo/src/error.ts
var typeRegex, paramsRegex, interpolate, getWarnHandler, error_default;
function init_error() {
	return (init_error = __esmMin((() => {
		typeRegex = /^[$a-z]\w*(\.!?\w+)*$/;
		paramsRegex = /\{([^}]*)\}/g;
		interpolate = (string, params = {}) => {
			return string.replace(paramsRegex, (placeholder, label) => {
				return typeof params[label] === "undefined" ? `?${label}?` : params[label];
			});
		};
		getWarnHandler = ({ logFactory, logLevel }) => {
			if (logFactory) {
				const log = logFactory.createLog(logLevel, {
					name: "utError",
					context: "utError"
				});
				if (log.warn) return (msg, context) => {
					const e = /* @__PURE__ */ new Error();
					log.warn?.({
						$meta: {
							mtid: "deprecation",
							method: context.method
						},
						args: context.args,
						error: {
							type: "utError.deprecation",
							stack: e.stack?.split("\n").splice(3).join("\n")
						}
					}, msg);
				};
			}
			return () => {};
		};
		error_default = ({ logFactory, logLevel, errorPrint }) => {
			const warn = getWarnHandler({
				logFactory,
				logLevel
			});
			const errors = { source: "" };
			const errorLookup = {};
			const errorsProxy = new Proxy(errors, {
				get(target, prop) {
					if (typeof prop === "symbol") return target[prop];
					if (prop in target) return target[prop];
					let lookupKey = prop.toLowerCase();
					if (lookupKey.startsWith("error")) lookupKey = lookupKey.substring(5);
					const originalKey = errorLookup[lookupKey];
					if (originalKey && target[originalKey]) return target[originalKey];
					const availableErrors = Object.keys(target).sort().join(", ");
					throw new Error(`Error '${String(prop)}' not found. Available errors: ${availableErrors}`);
				},
				has(target, prop) {
					if (typeof prop === "symbol") return prop in target;
					if (prop in target) return true;
					let lookupKey = prop.toLowerCase();
					if (lookupKey.startsWith("error")) lookupKey = lookupKey.substring(5);
					return lookupKey in errorLookup;
				},
				ownKeys(target) {
					const keys = Object.keys(target);
					const additionalKeys = keys.map((key) => {
						const camelCased = key.split(".").map((part, idx) => idx === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)).join("");
						return "error" + camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
					});
					return [...keys, ...additionalKeys];
				},
				getOwnPropertyDescriptor(target, prop) {
					if (typeof prop === "symbol") return Object.getOwnPropertyDescriptor(target, prop);
					if (prop in target || this.has(target, prop)) return {
						enumerable: true,
						configurable: true
					};
				}
			});
			const api = {
				get(type) {
					return type ? errors[type] : errorsProxy;
				},
				fetch(type) {
					const result = {};
					Object.keys(errors).forEach((key) => {
						if (key.startsWith(type)) result[key] = errors[key];
					});
					return result;
				},
				define(id, superType, message) {
					const type = [superType ? typeof superType === "string" ? superType : superType.type : null, id].filter((x) => x).join(".");
					return api.register({ [type]: message })[type];
				},
				register(errorsMap) {
					const result = {};
					Object.entries(errorsMap).forEach(([type, message]) => {
						if (!typeRegex.test(type)) warn?.(`Invalid error type format: '${type}'!`, {
							args: {
								type,
								expectedFormat: typeRegex.toString()
							},
							method: "utError.register"
						});
						const props = typeof message === "string" ? {
							message,
							print: void 0
						} : Array.isArray(message) ? {
							message: message[0],
							print: message[1]
						} : message;
						if (!props.message) throw new Error(`Missing message for error '${type}'`);
						const error = errors[type];
						if (error) {
							if (error.message !== props.message) throw new Error(`Error '${type}' is already defined with different message!`);
							result[type] = error;
							return;
						}
						if (!props.print && errorPrint) props.print = typeof errorPrint === "string" ? errorPrint : props.message;
						const handler = (params = { params: void 0 }, $meta) => {
							const error = /* @__PURE__ */ new Error();
							if (params instanceof Error) error.cause = params;
							else Object.assign(error, params);
							Object.assign(error, props);
							Object.defineProperty(error, "name", {
								value: type,
								configurable: true,
								enumerable: false
							});
							error.type = type;
							if (props.print) error.print = props.print;
							error.message = interpolate(props.message, params.params);
							return $meta ? [error] : error;
						};
						handler.type = type;
						handler.message = props.message;
						if (props.print) handler.print = props.print;
						handler.params = handler.message.match(paramsRegex)?.map((param) => param.substring(1, param.length - 1));
						result[type] = errors[type] = handler;
						const lookupKey = type.toLowerCase().replace(/\./g, "");
						errorLookup[lookupKey] = type;
					});
					return result;
				}
			};
			return api;
		};
	})))();
}
//#endregion
//#region ../../core/blong-gogo/src/ErrorFactory.ts
var ErrorFactory;
function init_ErrorFactory() {
	return (init_ErrorFactory = __esmMin((() => {
		init_types();
		init_error();
		ErrorFactory = class extends Internal {
			#error;
			#config = {
				logLevel: "debug",
				errorPrint: ""
			};
			constructor(config, { log }) {
				super({ log });
				this.merge(this.#config, config);
				this.#error = error_default({
					logFactory: { createLog: (...params) => log?.logger(...params) || {} },
					logLevel: this.#config.logLevel,
					errorPrint: this.#config.errorPrint
				});
			}
			register(errors) {
				return this.#error.register(errors);
			}
			get(name) {
				return this.#error.get(name);
			}
			fetch(type) {
				return this.#error.fetch(type);
			}
			define(id, superType, message) {
				return this.#error.define(id, superType, message);
			}
		};
	})))();
}
//#endregion
init_ErrorFactory();
export { ErrorFactory as default };
