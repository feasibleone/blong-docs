import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { $ as init__root, B as init__Map, D as init_isArguments, E as isBuffer, H as init__getNative, M as isArray, O as isArguments, T as init_isBuffer, U as init__toSource, V as getNative, W as toSource, X as init__baseGetTag, Y as baseGetTag, c as isArrayLike, d as init__isPrototype, et as root, f as isPrototype, g as isTypedArray, h as init_isTypedArray, j as init_isArray, l as init__overArg, s as init_isArrayLike, u as overArg, z as Map } from "./_baseFor-B9y9xzaI.js";
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
var nativeKeys;
function init__nativeKeys() {
	return (init__nativeKeys = __esmMin((() => {
		init__overArg();
		nativeKeys = overArg(Object.keys, Object);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeys.js
/**
* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeys(object) {
	if (!isPrototype(object)) return nativeKeys(object);
	var result = [];
	for (var key in Object(object)) if (hasOwnProperty$1.call(object, key) && key != "constructor") result.push(key);
	return result;
}
var hasOwnProperty$1;
function init__baseKeys() {
	return (init__baseKeys = __esmMin((() => {
		init__isPrototype();
		init__nativeKeys();
		hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
var DataView;
function init__DataView() {
	return (init__DataView = __esmMin((() => {
		init__getNative();
		init__root();
		DataView = getNative(root, "DataView");
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Promise.js
var Promise$1;
function init__Promise() {
	return (init__Promise = __esmMin((() => {
		init__getNative();
		init__root();
		Promise$1 = getNative(root, "Promise");
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Set.js
var Set;
function init__Set() {
	return (init__Set = __esmMin((() => {
		init__getNative();
		init__root();
		Set = getNative(root, "Set");
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_WeakMap.js
var WeakMap;
function init__WeakMap() {
	return (init__WeakMap = __esmMin((() => {
		init__getNative();
		init__root();
		WeakMap = getNative(root, "WeakMap");
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getTag.js
var mapTag$1, objectTag, promiseTag, setTag$1, weakMapTag, dataViewTag, dataViewCtorString, mapCtorString, promiseCtorString, setCtorString, weakMapCtorString, getTag, _getTag_default;
function init__getTag() {
	return (init__getTag = __esmMin((() => {
		init__DataView();
		init__Map();
		init__Promise();
		init__Set();
		init__WeakMap();
		init__baseGetTag();
		init__toSource();
		mapTag$1 = "[object Map]";
		objectTag = "[object Object]";
		promiseTag = "[object Promise]";
		setTag$1 = "[object Set]";
		weakMapTag = "[object WeakMap]";
		dataViewTag = "[object DataView]";
		dataViewCtorString = toSource(DataView);
		mapCtorString = toSource(Map);
		promiseCtorString = toSource(Promise$1);
		setCtorString = toSource(Set);
		weakMapCtorString = toSource(WeakMap);
		getTag = baseGetTag;
		if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag$1 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set && getTag(new Set()) != setTag$1 || WeakMap && getTag(new WeakMap()) != weakMapTag) getTag = function(value) {
			var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
			if (ctorString) switch (ctorString) {
				case dataViewCtorString: return dataViewTag;
				case mapCtorString: return mapTag$1;
				case promiseCtorString: return promiseTag;
				case setCtorString: return setTag$1;
				case weakMapCtorString: return weakMapTag;
			}
			return result;
		};
		_getTag_default = getTag;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isEmpty.js
/**
* Checks if `value` is an empty object, collection, map, or set.
*
* Objects are considered empty if they have no own enumerable string keyed
* properties.
*
* Array-like values such as `arguments` objects, arrays, buffers, strings, or
* jQuery-like collections are considered empty if they have a `length` of `0`.
* Similarly, maps and sets are considered empty if they have a `size` of `0`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is empty, else `false`.
* @example
*
* _.isEmpty(null);
* // => true
*
* _.isEmpty(true);
* // => true
*
* _.isEmpty(1);
* // => true
*
* _.isEmpty([1, 2, 3]);
* // => false
*
* _.isEmpty({ 'a': 1 });
* // => false
*/
function isEmpty(value) {
	if (value == null) return true;
	if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
	var tag = _getTag_default(value);
	if (tag == mapTag || tag == setTag) return !value.size;
	if (isPrototype(value)) return !baseKeys(value).length;
	for (var key in value) if (hasOwnProperty.call(value, key)) return false;
	return true;
}
var mapTag, setTag, hasOwnProperty;
function init_isEmpty() {
	return (init_isEmpty = __esmMin((() => {
		init__baseKeys();
		init__getTag();
		init_isArguments();
		init_isArray();
		init_isArrayLike();
		init_isBuffer();
		init__isPrototype();
		init_isTypedArray();
		mapTag = "[object Map]";
		setTag = "[object Set]";
		hasOwnProperty = Object.prototype.hasOwnProperty;
	})))();
}
//#endregion
export { Set as a, init__baseKeys as c, init__getTag as i, isEmpty as n, init__Set as o, _getTag_default as r, baseKeys as s, init_isEmpty as t };
