import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
import { C as cardinal_default, D as basisOpen_default, Ft as init_chunk_X3CZISLH, It as log, N as bumpX, P as bumpY, T as bundle_default, V as linear_default, _ as catmullRom_default, a as step_default, f as linearClosed_default, h as catmullRomClosed_default, i as stepBefore, j as basis_default, jt as select_default, k as basisClosed_default, l as monotoneX, p as catmullRomOpen_default, r as stepAfter, s as natural_default, t as init_src, u as monotoneY, x as cardinalClosed_default, y as cardinalOpen_default } from "./src-I6ywMk2o.js";
import { A as init_chunk_BG4553SI, h as directiveRegex, p as detectType, r as assignWithDepth_default, s as common_default, z as sanitizeDirective } from "./chunk-BG4553SI-D_NoodJ5.js";
import { t as require_dist } from "./dist-CmAelsrp.js";
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isLength.mjs
function isLength(value) {
	return Number.isSafeInteger(value) && value >= 0;
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs
function isArrayLike(value) {
	return value != null && typeof value !== "function" && isLength(value.length);
}
function init_isArrayLike() {
	return (init_isArrayLike = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/_internal/isUnsafeProperty.mjs
function isUnsafeProperty(key) {
	return key === "__proto__";
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
function isPrimitive(value) {
	return value == null || typeof value !== "object" && typeof value !== "function";
}
function init_isPrimitive() {
	return (init_isPrimitive = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function getSymbols(object) {
	return Object.getOwnPropertySymbols(object).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object, symbol));
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
function getTag(value) {
	if (value == null) return value === void 0 ? "[object Undefined]" : "[object Null]";
	return Object.prototype.toString.call(value);
}
function init_getTag() {
	return (init_getTag = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/_internal/tags.mjs
var regexpTag, stringTag, numberTag, booleanTag, argumentsTag, symbolTag, dateTag, mapTag, setTag, arrayTag, arrayBufferTag, objectTag, dataViewTag, uint8ArrayTag, uint8ClampedArrayTag, uint16ArrayTag, uint32ArrayTag, int8ArrayTag, int16ArrayTag, int32ArrayTag, float32ArrayTag, float64ArrayTag;
function init_tags() {
	return (init_tags = __esmMin((() => {
		regexpTag = "[object RegExp]";
		stringTag = "[object String]";
		numberTag = "[object Number]";
		booleanTag = "[object Boolean]";
		argumentsTag = "[object Arguments]";
		symbolTag = "[object Symbol]";
		dateTag = "[object Date]";
		mapTag = "[object Map]";
		setTag = "[object Set]";
		arrayTag = "[object Array]";
		arrayBufferTag = "[object ArrayBuffer]";
		objectTag = "[object Object]";
		dataViewTag = "[object DataView]";
		uint8ArrayTag = "[object Uint8Array]";
		uint8ClampedArrayTag = "[object Uint8ClampedArray]";
		uint16ArrayTag = "[object Uint16Array]";
		uint32ArrayTag = "[object Uint32Array]";
		int8ArrayTag = "[object Int8Array]";
		int16ArrayTag = "[object Int16Array]";
		int32ArrayTag = "[object Int32Array]";
		float32ArrayTag = "[object Float32Array]";
		float64ArrayTag = "[object Float64Array]";
	})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
function isTypedArray$1(x) {
	return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/object/cloneDeepWith.mjs
function cloneDeepWith$1(obj, cloneValue) {
	return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), cloneValue);
}
function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack = /* @__PURE__ */ new Map(), cloneValue = void 0) {
	const cloned = cloneValue?.(valueToClone, keyToClone, objectToClone, stack);
	if (cloned !== void 0) return cloned;
	if (isPrimitive(valueToClone)) return valueToClone;
	if (stack.has(valueToClone)) return stack.get(valueToClone);
	if (Array.isArray(valueToClone)) {
		const result = new Array(valueToClone.length);
		stack.set(valueToClone, result);
		for (let i = 0; i < valueToClone.length; i++) result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
		if (Object.hasOwn(valueToClone, "index")) result.index = valueToClone.index;
		if (Object.hasOwn(valueToClone, "input")) result.input = valueToClone.input;
		return result;
	}
	if (valueToClone instanceof Date) return new Date(valueToClone.getTime());
	if (valueToClone instanceof RegExp) {
		const result = new RegExp(valueToClone.source, valueToClone.flags);
		result.lastIndex = valueToClone.lastIndex;
		return result;
	}
	if (valueToClone instanceof Map) {
		const result = /* @__PURE__ */ new Map();
		stack.set(valueToClone, result);
		for (const [key, value] of valueToClone) result.set(key, cloneDeepWithImpl(value, key, objectToClone, stack, cloneValue));
		return result;
	}
	if (valueToClone instanceof Set) {
		const result = /* @__PURE__ */ new Set();
		stack.set(valueToClone, result);
		for (const value of valueToClone) result.add(cloneDeepWithImpl(value, void 0, objectToClone, stack, cloneValue));
		return result;
	}
	if (typeof Buffer !== "undefined" && Buffer.isBuffer(valueToClone)) return valueToClone.subarray();
	if (isTypedArray$1(valueToClone)) {
		const result = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
		stack.set(valueToClone, result);
		for (let i = 0; i < valueToClone.length; i++) result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) return valueToClone.slice(0);
	if (valueToClone instanceof DataView) {
		const result = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof File !== "undefined" && valueToClone instanceof File) {
		const result = new File([valueToClone], valueToClone.name, { type: valueToClone.type });
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof Blob !== "undefined" && valueToClone instanceof Blob) {
		const result = new Blob([valueToClone], { type: valueToClone.type });
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Error) {
		const result = structuredClone(valueToClone);
		stack.set(valueToClone, result);
		result.message = valueToClone.message;
		result.name = valueToClone.name;
		result.stack = valueToClone.stack;
		result.cause = valueToClone.cause;
		result.constructor = valueToClone.constructor;
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Boolean) {
		const result = new Boolean(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Number) {
		const result = new Number(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof String) {
		const result = new String(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof valueToClone === "object" && isCloneableObject(valueToClone)) {
		const result = Object.create(Object.getPrototypeOf(valueToClone));
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	return valueToClone;
}
function copyProperties(target, source, objectToClone = target, stack, cloneValue) {
	const keys = [...Object.keys(source), ...getSymbols(source)];
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const descriptor = Object.getOwnPropertyDescriptor(target, key);
		if (descriptor == null || descriptor.writable) target[key] = cloneDeepWithImpl(source[key], key, objectToClone, stack, cloneValue);
	}
}
function isCloneableObject(object) {
	switch (getTag(object)) {
		case argumentsTag:
		case arrayTag:
		case arrayBufferTag:
		case dataViewTag:
		case booleanTag:
		case dateTag:
		case float32ArrayTag:
		case float64ArrayTag:
		case int8ArrayTag:
		case int16ArrayTag:
		case int32ArrayTag:
		case mapTag:
		case numberTag:
		case objectTag:
		case regexpTag:
		case setTag:
		case stringTag:
		case symbolTag:
		case uint8ArrayTag:
		case uint8ClampedArrayTag:
		case uint16ArrayTag:
		case uint32ArrayTag: return true;
		default: return false;
	}
}
function init_cloneDeepWith() {
	return (init_cloneDeepWith = __esmMin((() => {
		init_tags();
	})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/object/cloneDeepWith.mjs
function cloneDeepWith(obj, customizer) {
	return cloneDeepWith$1(obj, (value, key, object, stack) => {
		const cloned = customizer?.(value, key, object, stack);
		if (cloned !== void 0) return cloned;
		if (typeof obj !== "object") return;
		if (getTag(obj) === "[object Object]" && typeof obj.constructor !== "function") {
			const result = {};
			stack.set(obj, result);
			copyProperties(result, obj, object, stack);
			return result;
		}
		switch (Object.prototype.toString.call(obj)) {
			case numberTag:
			case stringTag:
			case booleanTag: {
				const result = new obj.constructor(obj?.valueOf());
				copyProperties(result, obj);
				return result;
			}
			case argumentsTag: {
				const result = {};
				copyProperties(result, obj);
				result.length = obj.length;
				result[Symbol.iterator] = obj[Symbol.iterator];
				return result;
			}
			default: return;
		}
	});
}
function init_cloneDeepWith$1() {
	return (init_cloneDeepWith$1 = __esmMin((() => {
		init_cloneDeepWith();
		init_tags();
	})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/object/cloneDeep.mjs
function cloneDeep(obj) {
	return cloneDeepWith(obj);
}
function init_cloneDeep() {
	return (init_cloneDeep = __esmMin((() => {
		init_cloneDeepWith$1();
	})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isArguments.mjs
function isArguments(value) {
	return value !== null && typeof value === "object" && getTag(value) === "[object Arguments]";
}
function init_isArguments() {
	return (init_isArguments = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isObjectLike.mjs
function isObjectLike(value) {
	return typeof value === "object" && value !== null;
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isArrayLikeObject.mjs
function isArrayLikeObject(value) {
	return isObjectLike(value) && isArrayLike(value);
}
function init_isArrayLikeObject() {
	return (init_isArrayLikeObject = __esmMin((() => {
		init_isArrayLike();
	})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/function/memoize.mjs
function memoize(func, resolver) {
	if (typeof func !== "function" || resolver != null && typeof resolver !== "function") throw new TypeError("Expected a function");
	const memoized = function(...args) {
		const key = resolver ? resolver.apply(this, args) : args[0];
		const cache = memoized.cache;
		if (cache.has(key)) return cache.get(key);
		const result = func.apply(this, args);
		memoized.cache = cache.set(key, result) || cache;
		return result;
	};
	memoized.cache = new (memoize.Cache || Map)();
	return memoized;
}
function init_memoize() {
	return (init_memoize = __esmMin((() => {
		memoize.Cache = Map;
	})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/function/noop.mjs
function noop() {}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isTypedArray.mjs
function isTypedArray(x) {
	return isTypedArray$1(x);
}
function init_isTypedArray$1() {
	return (init_isTypedArray$1 = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isPlainObject.mjs
function isPlainObject(object) {
	if (typeof object !== "object") return false;
	if (object == null) return false;
	if (Object.getPrototypeOf(object) === null) return true;
	if (Object.prototype.toString.call(object) !== "[object Object]") {
		const tag = object[Symbol.toStringTag];
		if (tag == null) return false;
		if (!Object.getOwnPropertyDescriptor(object, Symbol.toStringTag)?.writable) return false;
		return object.toString() === `[object ${tag}]`;
	}
	let proto = object;
	while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
	return Object.getPrototypeOf(object) === proto;
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/object/clone.mjs
function clone(obj) {
	if (isPrimitive(obj)) return obj;
	if (Array.isArray(obj) || isTypedArray$1(obj) || obj instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && obj instanceof SharedArrayBuffer) return obj.slice(0);
	const prototype = Object.getPrototypeOf(obj);
	if (prototype == null) return Object.assign(Object.create(prototype), obj);
	const Constructor = prototype.constructor;
	if (obj instanceof Date || obj instanceof Map || obj instanceof Set) return new Constructor(obj);
	if (obj instanceof RegExp) {
		const newRegExp = new Constructor(obj);
		newRegExp.lastIndex = obj.lastIndex;
		return newRegExp;
	}
	if (obj instanceof DataView) return new Constructor(obj.buffer.slice(0));
	if (obj instanceof Error) {
		let newError;
		if (obj instanceof AggregateError) newError = new Constructor(obj.errors, obj.message, { cause: obj.cause });
		else newError = new Constructor(obj.message, { cause: obj.cause });
		newError.stack = obj.stack;
		Object.assign(newError, obj);
		return newError;
	}
	if (typeof File !== "undefined" && obj instanceof File) return new Constructor([obj], obj.name, {
		type: obj.type,
		lastModified: obj.lastModified
	});
	if (typeof obj === "object") {
		const newObject = Object.create(prototype);
		return Object.assign(newObject, obj);
	}
	return obj;
}
function init_clone() {
	return (init_clone = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/object/mergeWith.mjs
function mergeWith(object, ...otherArgs) {
	const sources = otherArgs.slice(0, -1);
	const merge = otherArgs[otherArgs.length - 1];
	let result = object;
	for (let i = 0; i < sources.length; i++) {
		const source = sources[i];
		result = mergeWithDeep(result, source, merge, /* @__PURE__ */ new Map());
	}
	return result;
}
function mergeWithDeep(target, source, merge, stack) {
	if (isPrimitive(target)) target = Object(target);
	if (source == null || typeof source !== "object") return target;
	if (stack.has(source)) return clone(stack.get(source));
	stack.set(source, target);
	if (Array.isArray(source)) {
		source = source.slice();
		for (let i = 0; i < source.length; i++) source[i] = source[i] ?? void 0;
	}
	const sourceKeys = [...Object.keys(source), ...getSymbols(source)];
	for (let i = 0; i < sourceKeys.length; i++) {
		const key = sourceKeys[i];
		if (isUnsafeProperty(key)) continue;
		let sourceValue = source[key];
		let targetValue = target[key];
		if (isArguments(sourceValue)) sourceValue = { ...sourceValue };
		if (isArguments(targetValue)) targetValue = { ...targetValue };
		if (typeof Buffer !== "undefined" && Buffer.isBuffer(sourceValue)) sourceValue = cloneDeep(sourceValue);
		if (Array.isArray(sourceValue)) {
			if (Array.isArray(targetValue)) {
				const cloned = [];
				const targetKeys = Reflect.ownKeys(targetValue);
				for (let i = 0; i < targetKeys.length; i++) {
					const targetKey = targetKeys[i];
					cloned[targetKey] = targetValue[targetKey];
				}
				targetValue = cloned;
			} else if (isArrayLikeObject(targetValue)) {
				const cloned = [];
				for (let i = 0; i < targetValue.length; i++) cloned[i] = targetValue[i];
				targetValue = cloned;
			} else targetValue = [];
		}
		const merged = merge(targetValue, sourceValue, key, target, source, stack);
		if (merged !== void 0) target[key] = merged;
		else if (Array.isArray(sourceValue)) target[key] = mergeWithDeep(targetValue, sourceValue, merge, stack);
		else if (isObjectLike(targetValue) && isObjectLike(sourceValue) && (isPlainObject(targetValue) || isPlainObject(sourceValue) || isTypedArray(targetValue) || isTypedArray(sourceValue))) target[key] = mergeWithDeep(targetValue, sourceValue, merge, stack);
		else if (targetValue == null && isPlainObject(sourceValue)) target[key] = mergeWithDeep({}, sourceValue, merge, stack);
		else if (targetValue == null && isTypedArray(sourceValue)) target[key] = cloneDeep(sourceValue);
		else if (targetValue === void 0 || sourceValue !== void 0) target[key] = sourceValue;
	}
	return target;
}
function init_mergeWith() {
	return (init_mergeWith = __esmMin((() => {
		init_cloneDeep();
		init_clone();
		init_isArguments();
		init_isArrayLikeObject();
		init_isTypedArray$1();
	})))();
}
// ../../common/temp/node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/object/merge.mjs
function merge(object, ...sources) {
	return mergeWith(object, ...sources, noop);
}
function init_merge() {
	return (init_merge = __esmMin((() => {
		init_mergeWith();
	})))();
}
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6MUBBAK2.mjs
function interpolateToCurve(interpolate, defaultCurve) {
	if (!interpolate) return defaultCurve;
	return d3CurveTypes[`curve${interpolate.charAt(0).toUpperCase() + interpolate.slice(1)}`] ?? defaultCurve;
}
function formatUrl(linkStr, config) {
	const url = linkStr.trim();
	if (!url) return;
	if (config.securityLevel !== "loose") return (0, import_dist.sanitizeUrl)(url);
	return url;
}
function distance(p1, p2) {
	if (!p1 || !p2) return 0;
	return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function traverseEdge(points) {
	let prevPoint;
	let totalDistance = 0;
	points.forEach((point) => {
		totalDistance += distance(point, prevPoint);
		prevPoint = point;
	});
	return calculatePoint(points, totalDistance / 2);
}
function calcLabelPosition(points) {
	if (points.length === 1) return points[0];
	return traverseEdge(points);
}
function calcTerminalLabelPosition(terminalMarkerSize, position, _points) {
	const points = structuredClone(_points);
	log.info("our points", points);
	if (position !== "start_left" && position !== "start_right") points.reverse();
	const center = calculatePoint(points, 25 + terminalMarkerSize);
	const d = 10 + terminalMarkerSize * .5;
	const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
	const cardinalityPosition = {
		x: 0,
		y: 0
	};
	if (position === "start_left") {
		cardinalityPosition.x = Math.sin(angle + Math.PI) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle + Math.PI) * d + (points[0].y + center.y) / 2;
	} else if (position === "end_right") {
		cardinalityPosition.x = Math.sin(angle - Math.PI) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle - Math.PI) * d + (points[0].y + center.y) / 2;
	} else if (position === "end_left") {
		cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
	} else {
		cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
	}
	return cardinalityPosition;
}
function getStylesFromArray(arr) {
	let style = "";
	let labelStyle = "";
	for (const element of arr) if (element !== void 0) {
		if (element.startsWith("color:") || element.startsWith("text-align:")) labelStyle = labelStyle + element + ";";
		else style = style + element + ";";
	}
	return {
		style,
		labelStyle
	};
}
function makeRandomHex(length) {
	let result = "";
	const characters = "0123456789abcdef";
	const charactersLength = 16;
	for (let i = 0; i < length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
	return result;
}
function calculateTextHeight(text, config) {
	return calculateTextDimensions(text, config).height;
}
function calculateTextWidth(text, config) {
	return calculateTextDimensions(text, config).width;
}
function isDetailedError(error) {
	return "str" in error;
}
function getErrorMessage(error) {
	if (error instanceof Error) return error.message;
	return String(error);
}
function cleanAndMerge(defaultData, data) {
	return merge({}, defaultData, data);
}
function handleUndefinedAttr(attrValue) {
	return attrValue ?? null;
}
function isLabelCoordinateInPath(point, dAttr) {
	const roundedX = Math.round(point.x);
	const roundedY = Math.round(point.y);
	const sanitizedD = dAttr.replace(/(\d+\.\d+)/g, (match) => Math.round(parseFloat(match)).toString());
	return sanitizedD.includes(roundedX.toString()) || sanitizedD.includes(roundedY.toString());
}
var import_dist, d3CurveTypes, directiveWithoutOpen, detectInit, detectDirective, removeDirectives, isSubstringInArray, runFunc, roundNumber, calculatePoint, calcCardinalityPosition, cnt, generateId, random, getTextObj, drawSimpleText, wrapLabel, breakString, calculateTextDimensions, InitIDGenerator, decoder, entityDecode, insertTitle, parseFontSize, utils_default, encodeEntities, decodeEntities, getEdgeId;
function init_chunk_6MUBBAK2() {
	return (init_chunk_6MUBBAK2 = __esmMin((() => {
		init_chunk_BG4553SI();
		init_chunk_X3CZISLH();
		init_chunk_Y2CYZVJY();
		import_dist = require_dist();
		init_src();
		init_memoize(), init_merge();
		d3CurveTypes = {
			curveBasis: basis_default,
			curveBasisClosed: basisClosed_default,
			curveBasisOpen: basisOpen_default,
			curveBumpX: bumpX,
			curveBumpY: bumpY,
			curveBundle: bundle_default,
			curveCardinalClosed: cardinalClosed_default,
			curveCardinalOpen: cardinalOpen_default,
			curveCardinal: cardinal_default,
			curveCatmullRomClosed: catmullRomClosed_default,
			curveCatmullRomOpen: catmullRomOpen_default,
			curveCatmullRom: catmullRom_default,
			curveLinear: linear_default,
			curveLinearClosed: linearClosed_default,
			curveMonotoneX: monotoneX,
			curveMonotoneY: monotoneY,
			curveNatural: natural_default,
			curveStep: step_default,
			curveStepAfter: stepAfter,
			curveStepBefore: stepBefore
		};
		directiveWithoutOpen = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
		detectInit = /* @__PURE__ */ __name(function(text, config) {
			const inits = detectDirective(text, /(?:init\b)|(?:initialize\b)/);
			let results = {};
			if (Array.isArray(inits)) {
				const args = inits.map((init) => init.args);
				sanitizeDirective(args);
				results = assignWithDepth_default(results, [...args]);
			} else results = inits.args;
			if (!results) return;
			let type = detectType(text, config);
			const prop = "config";
			if (results[prop] !== void 0) {
				if (type === "flowchart-v2") type = "flowchart";
				results[type] = results[prop];
				delete results[prop];
			}
			return results;
		}, "detectInit");
		detectDirective = /* @__PURE__ */ __name(function(text, type = null) {
			try {
				const commentWithoutDirectives = new RegExp(`[%]{2}(?![{]${directiveWithoutOpen.source})(?=[}][%]{2}).*
`, "ig");
				text = text.trim().replace(commentWithoutDirectives, "").replace(/'/gm, "\"");
				log.debug(`Detecting diagram directive${type !== null ? " type:" + type : ""} based on the text:${text}`);
				let match;
				const result = [];
				while ((match = directiveRegex.exec(text)) !== null) {
					if (match.index === directiveRegex.lastIndex) directiveRegex.lastIndex++;
					if (match && !type || type && match[1]?.match(type) || type && match[2]?.match(type)) {
						const type2 = match[1] ? match[1] : match[2];
						const args = match[3] ? match[3].trim() : match[4] ? JSON.parse(match[4].trim()) : null;
						result.push({
							type: type2,
							args
						});
					}
				}
				if (result.length === 0) return {
					type: text,
					args: null
				};
				return result.length === 1 ? result[0] : result;
			} catch (error) {
				log.error(`ERROR: ${error.message} - Unable to parse directive type: '${type}' based on the text: '${text}'`);
				return {
					type: void 0,
					args: null
				};
			}
		}, "detectDirective");
		removeDirectives = /* @__PURE__ */ __name(function(text) {
			return text.replace(directiveRegex, "");
		}, "removeDirectives");
		isSubstringInArray = /* @__PURE__ */ __name(function(str, arr) {
			for (const [i, element] of arr.entries()) if (element.match(str)) return i;
			return -1;
		}, "isSubstringInArray");
		__name(interpolateToCurve, "interpolateToCurve");
		__name(formatUrl, "formatUrl");
		runFunc = /* @__PURE__ */ __name((functionName, ...params) => {
			const arrPaths = functionName.split(".");
			const len = arrPaths.length - 1;
			const fnName = arrPaths[len];
			let obj = window;
			for (let i = 0; i < len; i++) {
				obj = obj[arrPaths[i]];
				if (!obj) {
					log.error(`Function name: ${functionName} not found in window`);
					return;
				}
			}
			obj[fnName](...params);
		}, "runFunc");
		__name(distance, "distance");
		__name(traverseEdge, "traverseEdge");
		__name(calcLabelPosition, "calcLabelPosition");
		roundNumber = /* @__PURE__ */ __name((num, precision = 2) => {
			const factor = Math.pow(10, precision);
			return Math.round(num * factor) / factor;
		}, "roundNumber");
		calculatePoint = /* @__PURE__ */ __name((points, distanceToTraverse) => {
			let prevPoint = void 0;
			let remainingDistance = distanceToTraverse;
			for (const point of points) {
				if (prevPoint) {
					const vectorDistance = distance(point, prevPoint);
					if (vectorDistance === 0) return prevPoint;
					if (vectorDistance < remainingDistance) remainingDistance -= vectorDistance;
					else {
						const distanceRatio = remainingDistance / vectorDistance;
						if (distanceRatio <= 0) return prevPoint;
						if (distanceRatio >= 1) return {
							x: point.x,
							y: point.y
						};
						if (distanceRatio > 0 && distanceRatio < 1) return {
							x: roundNumber((1 - distanceRatio) * prevPoint.x + distanceRatio * point.x, 5),
							y: roundNumber((1 - distanceRatio) * prevPoint.y + distanceRatio * point.y, 5)
						};
					}
				}
				prevPoint = point;
			}
			throw new Error("Could not find a suitable point for the given distance");
		}, "calculatePoint");
		calcCardinalityPosition = /* @__PURE__ */ __name((isRelationTypePresent, points, initialPosition) => {
			log.info(`our points ${JSON.stringify(points)}`);
			if (points[0] !== initialPosition) points = points.reverse();
			const center = calculatePoint(points, 25);
			const d = isRelationTypePresent ? 10 : 5;
			const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
			const cardinalityPosition = {
				x: 0,
				y: 0
			};
			cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
			cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
			return cardinalityPosition;
		}, "calcCardinalityPosition");
		__name(calcTerminalLabelPosition, "calcTerminalLabelPosition");
		__name(getStylesFromArray, "getStylesFromArray");
		cnt = 0;
		generateId = /* @__PURE__ */ __name(() => {
			cnt++;
			return "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt;
		}, "generateId");
		__name(makeRandomHex, "makeRandomHex");
		random = /* @__PURE__ */ __name((options) => {
			return makeRandomHex(options.length);
		}, "random");
		getTextObj = /* @__PURE__ */ __name(function() {
			return {
				x: 0,
				y: 0,
				fill: void 0,
				anchor: "start",
				style: "#666",
				width: 100,
				height: 100,
				textMargin: 0,
				rx: 0,
				ry: 0,
				valign: void 0,
				text: ""
			};
		}, "getTextObj");
		drawSimpleText = /* @__PURE__ */ __name(function(elem, textData) {
			const nText = textData.text.replace(common_default.lineBreakRegex, " ");
			const [, _fontSizePx] = parseFontSize(textData.fontSize);
			const textElem = elem.append("text");
			textElem.attr("x", textData.x);
			textElem.attr("y", textData.y);
			textElem.style("text-anchor", textData.anchor);
			textElem.style("font-family", textData.fontFamily);
			textElem.style("font-size", _fontSizePx);
			textElem.style("font-weight", textData.fontWeight);
			textElem.attr("fill", textData.fill);
			if (textData.class !== void 0) textElem.attr("class", textData.class);
			const span = textElem.append("tspan");
			span.attr("x", textData.x + textData.textMargin * 2);
			span.attr("fill", textData.fill);
			span.text(nText);
			return textElem;
		}, "drawSimpleText");
		wrapLabel = memoize((label, maxWidth, config) => {
			if (!label) return label;
			config = Object.assign({
				fontSize: 12,
				fontWeight: 400,
				fontFamily: "Arial",
				joinWith: "<br/>"
			}, config);
			if (common_default.hasBreaks(label)) return label;
			const words = label.split(" ").filter(Boolean);
			const completedLines = [];
			let nextLine = "";
			words.forEach((word, index) => {
				const wordLength = calculateTextWidth(`${word} `, config);
				const nextLineLength = calculateTextWidth(nextLine, config);
				if (wordLength > maxWidth) {
					const { hyphenatedStrings, remainingWord } = breakString(word, maxWidth, "-", config);
					completedLines.push(nextLine, ...hyphenatedStrings);
					nextLine = remainingWord;
				} else if (nextLineLength + wordLength >= maxWidth) {
					completedLines.push(nextLine);
					nextLine = word;
				} else nextLine = [nextLine, word].filter(Boolean).join(" ");
				if (index + 1 === words.length) completedLines.push(nextLine);
			});
			return completedLines.filter((line) => line !== "").join(config.joinWith);
		}, (label, maxWidth, config) => `${label}${maxWidth}${config.fontSize}${config.fontWeight}${config.fontFamily}${config.joinWith}`);
		breakString = memoize((word, maxWidth, hyphenCharacter = "-", config) => {
			config = Object.assign({
				fontSize: 12,
				fontWeight: 400,
				fontFamily: "Arial",
				margin: 0
			}, config);
			const characters = [...word];
			const lines = [];
			let currentLine = "";
			characters.forEach((character, index) => {
				const nextLine = `${currentLine}${character}`;
				if (calculateTextWidth(nextLine, config) >= maxWidth) {
					const currentCharacter = index + 1;
					const isLastLine = characters.length === currentCharacter;
					const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
					lines.push(isLastLine ? nextLine : hyphenatedNextLine);
					currentLine = "";
				} else currentLine = nextLine;
			});
			return {
				hyphenatedStrings: lines,
				remainingWord: currentLine
			};
		}, (word, maxWidth, hyphenCharacter = "-", config) => `${word}${maxWidth}${hyphenCharacter}${config.fontSize}${config.fontWeight}${config.fontFamily}`);
		__name(calculateTextHeight, "calculateTextHeight");
		__name(calculateTextWidth, "calculateTextWidth");
		calculateTextDimensions = memoize((text, config) => {
			const { fontSize = 12, fontFamily = "Arial", fontWeight = 400 } = config;
			if (!text) return {
				width: 0,
				height: 0
			};
			const [, _fontSizePx] = parseFontSize(fontSize);
			const fontFamilies = ["sans-serif", fontFamily];
			const lines = text.split(common_default.lineBreakRegex);
			const dims = [];
			const body = select_default("body");
			if (!body.remove) return {
				width: 0,
				height: 0,
				lineHeight: 0
			};
			const g = body.append("svg");
			for (const fontFamily2 of fontFamilies) {
				let cHeight = 0;
				const dim = {
					width: 0,
					height: 0,
					lineHeight: 0
				};
				for (const line of lines) {
					const textObj = getTextObj();
					textObj.text = line || "​";
					const textElem = drawSimpleText(g, textObj).style("font-size", _fontSizePx).style("font-weight", fontWeight).style("font-family", fontFamily2);
					const bBox = (textElem._groups || textElem)[0][0].getBBox();
					if (bBox.width === 0 && bBox.height === 0) throw new Error("svg element not in render tree");
					dim.width = Math.round(Math.max(dim.width, bBox.width));
					cHeight = Math.round(bBox.height);
					dim.height += cHeight;
					dim.lineHeight = Math.round(Math.max(dim.lineHeight, cHeight));
				}
				dims.push(dim);
			}
			g.remove();
			return dims[isNaN(dims[1].height) || isNaN(dims[1].width) || isNaN(dims[1].lineHeight) || dims[0].height > dims[1].height && dims[0].width > dims[1].width && dims[0].lineHeight > dims[1].lineHeight ? 0 : 1];
		}, (text, config) => `${text}${config.fontSize}${config.fontWeight}${config.fontFamily}`);
		InitIDGenerator = class {
			constructor(deterministic = false, seed) {
				this.count = 0;
				this.count = seed ? seed.length : 0;
				this.next = deterministic ? () => this.count++ : () => Date.now();
			}
			static {
				__name(this, "InitIDGenerator");
			}
		};
		entityDecode = /* @__PURE__ */ __name(function(html) {
			decoder = decoder || document.createElement("div");
			html = escape(html).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";");
			decoder.innerHTML = html;
			return unescape(decoder.textContent);
		}, "entityDecode");
		__name(isDetailedError, "isDetailedError");
		__name(getErrorMessage, "getErrorMessage");
		insertTitle = /* @__PURE__ */ __name((parent, cssClass, titleTopMargin, title) => {
			if (!title) return;
			const bounds = parent.node()?.getBBox();
			if (!bounds) return;
			parent.append("text").text(title).attr("text-anchor", "middle").attr("x", bounds.x + bounds.width / 2).attr("y", -titleTopMargin).attr("class", cssClass);
		}, "insertTitle");
		parseFontSize = /* @__PURE__ */ __name((fontSize) => {
			if (typeof fontSize === "number") return [fontSize, fontSize + "px"];
			const fontSizeNumber = parseInt(fontSize ?? "", 10);
			if (Number.isNaN(fontSizeNumber)) return [void 0, void 0];
			else if (fontSize === String(fontSizeNumber)) return [fontSizeNumber, fontSize + "px"];
			else return [fontSizeNumber, fontSize];
		}, "parseFontSize");
		__name(cleanAndMerge, "cleanAndMerge");
		utils_default = {
			assignWithDepth: assignWithDepth_default,
			wrapLabel,
			calculateTextHeight,
			calculateTextWidth,
			calculateTextDimensions,
			cleanAndMerge,
			detectInit,
			detectDirective,
			isSubstringInArray,
			interpolateToCurve,
			calcLabelPosition,
			calcCardinalityPosition,
			calcTerminalLabelPosition,
			formatUrl,
			getStylesFromArray,
			generateId,
			random,
			runFunc,
			entityDecode,
			insertTitle,
			isLabelCoordinateInPath,
			parseFontSize,
			InitIDGenerator
		};
		encodeEntities = /* @__PURE__ */ __name(function(text) {
			let txt = text;
			txt = txt.replace(/style.*:\S*#.*;/g, function(s) {
				return s.substring(0, s.length - 1);
			});
			txt = txt.replace(/classDef.*:\S*#.*;/g, function(s) {
				return s.substring(0, s.length - 1);
			});
			txt = txt.replace(/#\w+;/g, function(s) {
				const innerTxt = s.substring(1, s.length - 1);
				if (/^\+?\d+$/.test(innerTxt)) return "ﬂ°°" + innerTxt + "¶ß";
				else return "ﬂ°" + innerTxt + "¶ß";
			});
			return txt;
		}, "encodeEntities");
		decodeEntities = /* @__PURE__ */ __name(function(text) {
			return text.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
		}, "decodeEntities");
		getEdgeId = /* @__PURE__ */ __name((from, to, { counter = 0, prefix, suffix }, id) => {
			if (id) return id;
			return `${prefix ? `${prefix}_` : ""}${from}_${to}_${counter}${suffix ? `_${suffix}` : ""}`;
		}, "getEdgeId");
		__name(handleUndefinedAttr, "handleUndefinedAttr");
		__name(isLabelCoordinateInPath, "isLabelCoordinateInPath");
	})))();
}
export { float32ArrayTag as A, setTag as B, isArguments as C, booleanTag as D, arrayTag as E, int8ArrayTag as F, uint8ArrayTag as G, symbolTag as H, mapTag as I, init_getTag as J, uint8ClampedArrayTag as K, numberTag as L, init_tags as M, int16ArrayTag as N, dataViewTag as O, int32ArrayTag as P, isArrayLike as Q, objectTag as R, init_isArguments as S, arrayBufferTag as T, uint16ArrayTag as U, stringTag as V, uint32ArrayTag as W, isPrimitive as X, init_isPrimitive as Y, init_isArrayLike as Z, removeDirectives as _, decodeEntities as a, init_isTypedArray$1 as b, getEdgeId as c, handleUndefinedAttr as d, init_chunk_6MUBBAK2 as f, random as g, parseFontSize as h, cleanAndMerge as i, float64ArrayTag as j, dateTag as k, getErrorMessage as l, isDetailedError as m, calculateTextHeight as n, encodeEntities as o, interpolateToCurve as p, getTag as q, calculateTextWidth as r, generateId as s, calculateTextDimensions as t, getStylesFromArray as u, utils_default as v, argumentsTag as w, isTypedArray as x, wrapLabel as y, regexpTag as z };
