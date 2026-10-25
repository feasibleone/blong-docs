import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { B as init__getAllKeys, G as init_stubArray, H as keys, J as init__baseGetAllKeys, K as stubArray, Q as init__arrayMap, U as getSymbols, V as init_keys, W as init__getSymbols, X as init__arrayPush, Y as arrayPush, Z as arrayMap, c as init__arrayEach, g as init_filter, h as filter, i as init_forEach, l as baseUniq, m as init__baseFlatten, n as reduce, p as baseFlatten, q as baseGetAllKeys, r as forEach, s as arrayEach, t as init_reduce, u as init__baseUniq, z as getAllKeys } from "./reduce-B8JZM-sh.js";
import { A as isObjectLike, E as isBuffer, F as Stack, G as init_isFunction, I as init__Stack, J as isObject, K as isFunction, M as isArray, Q as init__Symbol, T as init_isBuffer, Z as Symbol, _ as init__nodeUtil, b as init__baseUnary, j as init_isArray, k as init_isObjectLike, q as init_isObject, v as nodeUtil, y as baseUnary } from "./_baseFor-B9y9xzaI.js";
import { i as init__getTag, n as isEmpty, r as _getTag_default, t as init_isEmpty } from "./isEmpty-zcrDZYJI.js";
import { A as init_keysIn, B as getPrototype, C as init__baseRest, D as init_constant, E as constant, F as init__assignValue, G as init__cloneTypedArray, H as copyArray, I as init_isArrayLikeObject, J as cloneBuffer, K as cloneArrayBuffer, L as isArrayLikeObject, M as copyObject, N as init__copyObject, P as assignValue, R as initCloneObject, S as baseRest, U as init__copyArray, V as init__getPrototype, W as cloneTypedArray, Y as init__cloneBuffer, j as keysIn, q as init__cloneArrayBuffer, z as init__initCloneObject } from "./chunk-5PVQY5BW-BNrAsxxX.js";
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssign.js
/**
* The base implementation of `_.assign` without support for multiple sources
* or `customizer` functions.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @returns {Object} Returns `object`.
*/
function baseAssign(object, source) {
	return object && copyObject(source, keys(source), object);
}
function init__baseAssign() {
	return (init__baseAssign = __esmMin((() => {
		init__copyObject();
		init_keys();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignIn.js
/**
* The base implementation of `_.assignIn` without support for multiple sources
* or `customizer` functions.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @returns {Object} Returns `object`.
*/
function baseAssignIn(object, source) {
	return object && copyObject(source, keysIn(source), object);
}
function init__baseAssignIn() {
	return (init__baseAssignIn = __esmMin((() => {
		init__copyObject();
		init_keysIn();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbols.js
/**
* Copies own symbols of `source` to `object`.
*
* @private
* @param {Object} source The object to copy symbols from.
* @param {Object} [object={}] The object to copy symbols to.
* @returns {Object} Returns `object`.
*/
function copySymbols(source, object) {
	return copyObject(source, getSymbols(source), object);
}
function init__copySymbols() {
	return (init__copySymbols = __esmMin((() => {
		init__copyObject();
		init__getSymbols();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbolsIn.js
var getSymbolsIn;
function init__getSymbolsIn() {
	return (init__getSymbolsIn = __esmMin((() => {
		init__arrayPush();
		init__getPrototype();
		init__getSymbols();
		init_stubArray();
		getSymbolsIn = !Object.getOwnPropertySymbols ? stubArray : function(object) {
			var result = [];
			while (object) {
				arrayPush(result, getSymbols(object));
				object = getPrototype(object);
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbolsIn.js
/**
* Copies own and inherited symbols of `source` to `object`.
*
* @private
* @param {Object} source The object to copy symbols from.
* @param {Object} [object={}] The object to copy symbols to.
* @returns {Object} Returns `object`.
*/
function copySymbolsIn(source, object) {
	return copyObject(source, getSymbolsIn(source), object);
}
function init__copySymbolsIn() {
	return (init__copySymbolsIn = __esmMin((() => {
		init__copyObject();
		init__getSymbolsIn();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeysIn.js
/**
* Creates an array of own and inherited enumerable property names and
* symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names and symbols.
*/
function getAllKeysIn(object) {
	return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
function init__getAllKeysIn() {
	return (init__getAllKeysIn = __esmMin((() => {
		init__baseGetAllKeys();
		init__getSymbolsIn();
		init_keysIn();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneArray.js
/**
* Initializes an array clone.
*
* @private
* @param {Array} array The array to clone.
* @returns {Array} Returns the initialized clone.
*/
function initCloneArray(array) {
	var length = array.length, result = new array.constructor(length);
	if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
		result.index = array.index;
		result.input = array.input;
	}
	return result;
}
var hasOwnProperty;
function init__initCloneArray() {
	return (init__initCloneArray = __esmMin((() => {
		hasOwnProperty = Object.prototype.hasOwnProperty;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneDataView.js
/**
* Creates a clone of `dataView`.
*
* @private
* @param {Object} dataView The data view to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the cloned data view.
*/
function cloneDataView(dataView, isDeep) {
	var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
function init__cloneDataView() {
	return (init__cloneDataView = __esmMin((() => {
		init__cloneArrayBuffer();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneRegExp.js
/**
* Creates a clone of `regexp`.
*
* @private
* @param {Object} regexp The regexp to clone.
* @returns {Object} Returns the cloned regexp.
*/
function cloneRegExp(regexp) {
	var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	result.lastIndex = regexp.lastIndex;
	return result;
}
var reFlags;
function init__cloneRegExp() {
	return (init__cloneRegExp = __esmMin((() => {
		reFlags = /\w*$/;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneSymbol.js
/**
* Creates a clone of the `symbol` object.
*
* @private
* @param {Object} symbol The symbol object to clone.
* @returns {Object} Returns the cloned symbol object.
*/
function cloneSymbol(symbol) {
	return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var symbolProto, symbolValueOf;
function init__cloneSymbol() {
	return (init__cloneSymbol = __esmMin((() => {
		init__Symbol();
		symbolProto = Symbol ? Symbol.prototype : void 0;
		symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneByTag.js
/**
* Initializes an object clone based on its `toStringTag`.
*
* **Note:** This function only supports cloning values with tags of
* `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
*
* @private
* @param {Object} object The object to clone.
* @param {string} tag The `toStringTag` of the object to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the initialized clone.
*/
function initCloneByTag(object, tag, isDeep) {
	var Ctor = object.constructor;
	switch (tag) {
		case arrayBufferTag$1: return cloneArrayBuffer(object);
		case boolTag$1:
		case dateTag$1: return new Ctor(+object);
		case dataViewTag$1: return cloneDataView(object, isDeep);
		case float32Tag$1:
		case float64Tag$1:
		case int8Tag$1:
		case int16Tag$1:
		case int32Tag$1:
		case uint8Tag$1:
		case uint8ClampedTag$1:
		case uint16Tag$1:
		case uint32Tag$1: return cloneTypedArray(object, isDeep);
		case mapTag$2: return new Ctor();
		case numberTag$1:
		case stringTag$1: return new Ctor(object);
		case regexpTag$1: return cloneRegExp(object);
		case setTag$2: return new Ctor();
		case symbolTag$1: return cloneSymbol(object);
	}
}
var boolTag$1, dateTag$1, mapTag$2, numberTag$1, regexpTag$1, setTag$2, stringTag$1, symbolTag$1, arrayBufferTag$1, dataViewTag$1, float32Tag$1, float64Tag$1, int8Tag$1, int16Tag$1, int32Tag$1, uint8Tag$1, uint8ClampedTag$1, uint16Tag$1, uint32Tag$1;
function init__initCloneByTag() {
	return (init__initCloneByTag = __esmMin((() => {
		init__cloneArrayBuffer();
		init__cloneDataView();
		init__cloneRegExp();
		init__cloneSymbol();
		init__cloneTypedArray();
		boolTag$1 = "[object Boolean]";
		dateTag$1 = "[object Date]";
		mapTag$2 = "[object Map]";
		numberTag$1 = "[object Number]";
		regexpTag$1 = "[object RegExp]";
		setTag$2 = "[object Set]";
		stringTag$1 = "[object String]";
		symbolTag$1 = "[object Symbol]";
		arrayBufferTag$1 = "[object ArrayBuffer]";
		dataViewTag$1 = "[object DataView]";
		float32Tag$1 = "[object Float32Array]";
		float64Tag$1 = "[object Float64Array]";
		int8Tag$1 = "[object Int8Array]";
		int16Tag$1 = "[object Int16Array]";
		int32Tag$1 = "[object Int32Array]";
		uint8Tag$1 = "[object Uint8Array]";
		uint8ClampedTag$1 = "[object Uint8ClampedArray]";
		uint16Tag$1 = "[object Uint16Array]";
		uint32Tag$1 = "[object Uint32Array]";
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMap.js
/**
* The base implementation of `_.isMap` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a map, else `false`.
*/
function baseIsMap(value) {
	return isObjectLike(value) && _getTag_default(value) == mapTag$1;
}
var mapTag$1;
function init__baseIsMap() {
	return (init__baseIsMap = __esmMin((() => {
		init__getTag();
		init_isObjectLike();
		mapTag$1 = "[object Map]";
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isMap.js
var nodeIsMap, isMap;
function init_isMap() {
	return (init_isMap = __esmMin((() => {
		init__baseIsMap();
		init__baseUnary();
		init__nodeUtil();
		nodeIsMap = nodeUtil && nodeUtil.isMap;
		isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsSet.js
/**
* The base implementation of `_.isSet` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a set, else `false`.
*/
function baseIsSet(value) {
	return isObjectLike(value) && _getTag_default(value) == setTag$1;
}
var setTag$1;
function init__baseIsSet() {
	return (init__baseIsSet = __esmMin((() => {
		init__getTag();
		init_isObjectLike();
		setTag$1 = "[object Set]";
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSet.js
var nodeIsSet, isSet;
function init_isSet() {
	return (init_isSet = __esmMin((() => {
		init__baseIsSet();
		init__baseUnary();
		init__nodeUtil();
		nodeIsSet = nodeUtil && nodeUtil.isSet;
		isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseClone.js
/**
* The base implementation of `_.clone` and `_.cloneDeep` which tracks
* traversed objects.
*
* @private
* @param {*} value The value to clone.
* @param {boolean} bitmask The bitmask flags.
*  1 - Deep clone
*  2 - Flatten inherited properties
*  4 - Clone symbols
* @param {Function} [customizer] The function to customize cloning.
* @param {string} [key] The key of `value`.
* @param {Object} [object] The parent object of `value`.
* @param {Object} [stack] Tracks traversed objects and their clone counterparts.
* @returns {*} Returns the cloned value.
*/
function baseClone(value, bitmask, customizer, key, object, stack) {
	var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
	if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
	if (result !== void 0) return result;
	if (!isObject(value)) return value;
	var isArr = isArray(value);
	if (isArr) {
		result = initCloneArray(value);
		if (!isDeep) return copyArray(value, result);
	} else {
		var tag = _getTag_default(value), isFunc = tag == funcTag || tag == genTag;
		if (isBuffer(value)) return cloneBuffer(value, isDeep);
		if (tag == objectTag || tag == argsTag || isFunc && !object) {
			result = isFlat || isFunc ? {} : initCloneObject(value);
			if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
		} else {
			if (!cloneableTags[tag]) return object ? value : {};
			result = initCloneByTag(value, tag, isDeep);
		}
	}
	stack || (stack = new Stack());
	var stacked = stack.get(value);
	if (stacked) return stacked;
	stack.set(value, result);
	if (isSet(value)) value.forEach(function(subValue) {
		result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	});
	else if (isMap(value)) value.forEach(function(subValue, key) {
		result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	});
	var props = isArr ? void 0 : (isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys)(value);
	arrayEach(props || value, function(subValue, key) {
		if (props) {
			key = subValue;
			subValue = value[key];
		}
		assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	});
	return result;
}
var CLONE_DEEP_FLAG, CLONE_FLAT_FLAG, CLONE_SYMBOLS_FLAG, argsTag, arrayTag, boolTag, dateTag, errorTag, funcTag, genTag, mapTag, numberTag, objectTag, regexpTag, setTag, stringTag, symbolTag, weakMapTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, cloneableTags;
function init__baseClone() {
	return (init__baseClone = __esmMin((() => {
		init__Stack();
		init__arrayEach();
		init__assignValue();
		init__baseAssign();
		init__baseAssignIn();
		init__cloneBuffer();
		init__copyArray();
		init__copySymbols();
		init__copySymbolsIn();
		init__getAllKeys();
		init__getAllKeysIn();
		init__getTag();
		init__initCloneArray();
		init__initCloneByTag();
		init__initCloneObject();
		init_isArray();
		init_isBuffer();
		init_isMap();
		init_isObject();
		init_isSet();
		init_keys();
		init_keysIn();
		CLONE_DEEP_FLAG = 1;
		CLONE_FLAT_FLAG = 2;
		CLONE_SYMBOLS_FLAG = 4;
		argsTag = "[object Arguments]";
		arrayTag = "[object Array]";
		boolTag = "[object Boolean]";
		dateTag = "[object Date]";
		errorTag = "[object Error]";
		funcTag = "[object Function]";
		genTag = "[object GeneratorFunction]";
		mapTag = "[object Map]";
		numberTag = "[object Number]";
		objectTag = "[object Object]";
		regexpTag = "[object RegExp]";
		setTag = "[object Set]";
		stringTag = "[object String]";
		symbolTag = "[object Symbol]";
		weakMapTag = "[object WeakMap]";
		arrayBufferTag = "[object ArrayBuffer]";
		dataViewTag = "[object DataView]";
		float32Tag = "[object Float32Array]";
		float64Tag = "[object Float64Array]";
		int8Tag = "[object Int8Array]";
		int16Tag = "[object Int16Array]";
		int32Tag = "[object Int32Array]";
		uint8Tag = "[object Uint8Array]";
		uint8ClampedTag = "[object Uint8ClampedArray]";
		uint16Tag = "[object Uint16Array]";
		uint32Tag = "[object Uint32Array]";
		cloneableTags = {};
		cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
		cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseValues.js
/**
* The base implementation of `_.values` and `_.valuesIn` which creates an
* array of `object` property values corresponding to the property names
* of `props`.
*
* @private
* @param {Object} object The object to query.
* @param {Array} props The property names to get values for.
* @returns {Object} Returns the array of property values.
*/
function baseValues(object, props) {
	return arrayMap(props, function(key) {
		return object[key];
	});
}
function init__baseValues() {
	return (init__baseValues = __esmMin((() => {
		init__arrayMap();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/values.js
/**
* Creates an array of the own enumerable string keyed property values of `object`.
*
* **Note:** Non-object values are coerced to objects.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property values.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.values(new Foo);
* // => [1, 2] (iteration order is not guaranteed)
*
* _.values('hi');
* // => ['h', 'i']
*/
function values(object) {
	return object == null ? [] : baseValues(object, keys(object));
}
function init_values() {
	return (init_values = __esmMin((() => {
		init__baseValues();
		init_keys();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isUndefined.js
/**
* Checks if `value` is `undefined`.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
* @example
*
* _.isUndefined(void 0);
* // => true
*
* _.isUndefined(null);
* // => false
*/
function isUndefined(value) {
	return value === void 0;
}
function init_isUndefined() {
	return (init_isUndefined = __esmMin((() => {})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/union.js
var union;
function init_union() {
	return (init_union = __esmMin((() => {
		init__baseFlatten();
		init__baseRest();
		init__baseUniq();
		init_isArrayLikeObject();
		union = baseRest(function(arrays) {
			return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
		});
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/dagre-d3-es@7.0.14/node_modules/dagre-d3-es/src/graphlib/graph.js
/**
* @param {Record<NodeID, number>} map - Object mapping node IDs to counts.
* @param {NodeID | number} k - Node ID.
*/
function incrementOrInitEntry(map, k) {
	if (map[k]) map[k]++;
	else map[k] = 1;
}
/**
* @param {Record<NodeID, number>} map - Object mapping node IDs to counts.
* @param {NodeID | number} k - Node ID.
*/
function decrementOrRemoveEntry(map, k) {
	if (!--map[k]) delete map[k];
}
/**
* @param {boolean} isDirected - If `false`, sorts v and w to ensure a consistent ID.
* @param {EdgeObj['v'] | number} v_ - Source node ID.
* @param {EdgeObj['w'] | number} w_ - Target node ID.
* @param {EdgeObj['name']} [name] - Edge name (for multiple edges between the same nodes).
* @returns {EdgeID} Unique ID for the edge.
*/
function edgeArgsToId(isDirected, v_, w_, name) {
	var v = "" + v_;
	var w = "" + w_;
	if (!isDirected && v > w) {
		var tmp = v;
		v = w;
		w = tmp;
	}
	return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (isUndefined(name) ? DEFAULT_EDGE_NAME : name);
}
/**
* @param {boolean} isDirected - If `false`, sorts v and w to ensure a consistent ID.
* @param {EdgeObj['v'] | number} v_ - Source node ID.
* @param {EdgeObj['w'] | number} w_ - Target node ID.
* @param {EdgeObj['name']} [name] - Edge name (for multiple edges between the same nodes).
* @returns {EdgeObj}
*/
function edgeArgsToObj(isDirected, v_, w_, name) {
	var v = "" + v_;
	var w = "" + w_;
	if (!isDirected && v > w) {
		var tmp = v;
		v = w;
		w = tmp;
	}
	var edgeObj = {
		v,
		w
	};
	if (name) edgeObj.name = name;
	return edgeObj;
}
/**
* @param {boolean} isDirected - If `false`, sorts v and w to ensure a consistent ID.
* @param {EdgeObj} edgeObj - Edge object.
* @returns {EdgeID} Unique ID for the edge.
*/
function edgeObjToId(isDirected, edgeObj) {
	return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
}
var DEFAULT_EDGE_NAME, GRAPH_NODE, EDGE_KEY_DELIM, Graph;
function init_graph() {
	return (init_graph = __esmMin((() => {
		init_constant(), init_isFunction(), init_keys(), init_filter(), init_isEmpty(), init_forEach(), init_isUndefined(), init_union(), init_values(), init_reduce();
		DEFAULT_EDGE_NAME = "\0";
		GRAPH_NODE = "\0";
		EDGE_KEY_DELIM = "";
		Graph = class {
			/**
			* @param {GraphOptions} [opts] - Graph options.
			*/
			constructor(opts = {}) {
				/**
				* @type {boolean}
				* @private
				*/
				this._isDirected = Object.prototype.hasOwnProperty.call(opts, "directed") ? opts.directed : true;
				/**
				* @type {boolean}
				* @private
				*/
				this._isMultigraph = Object.prototype.hasOwnProperty.call(opts, "multigraph") ? opts.multigraph : false;
				/**
				* @type {boolean}
				* @private
				*/
				this._isCompound = Object.prototype.hasOwnProperty.call(opts, "compound") ? opts.compound : false;
				/**
				* @type {GraphLabel | undefined}
				* Label for the graph itself
				*/
				this._label = void 0;
				/**
				* Default label to be set when creating a new node.
				*
				* @private
				* @type {(v: NodeID | number) => NodeLabel}
				*/
				this._defaultNodeLabelFn = constant(void 0);
				/**
				* Default label to be set when creating a new edge
				*
				* @private
				* @type {(v: NodeID, w: NodeID, name: string | undefined) => EdgeLabel}
				*/
				this._defaultEdgeLabelFn = constant(void 0);
				/**
				* @type {Record<NodeID, NodeLabel>}
				* @private
				*
				* v -> label
				*/
				this._nodes = {};
				if (this._isCompound) {
					/**
					* @type {Record<NodeID, NodeID>}
					* @private
					* v -> parent
					*/
					this._parent = {};
					/**
					* @type {Record<NodeID, Record<NodeID, true>>}
					* @private
					* v -> children
					*/
					this._children = {};
					this._children[GRAPH_NODE] = {};
				}
				/**
				* @type {Record<NodeID, Record<EdgeID, EdgeObj>>}
				* @private
				* v -> edgeObj
				*/
				this._in = {};
				/**
				* @type {Record<NodeID, Record<NodeID, number>>}
				* @private
				* u -> v -> Number
				*/
				this._preds = {};
				/**
				* @type {Record<NodeID, Record<EdgeID, EdgeObj>>}
				* @private
				* v -> edgeObj
				*/
				this._out = {};
				/**
				* @type {Record<NodeID, Record<NodeID, number>>}
				* @private
				* v -> w -> Number
				*/
				this._sucs = {};
				/**
				* @type {Record<EdgeID, EdgeObj>}
				* @private
				* e -> edgeObj
				*/
				this._edgeObjs = {};
				/**
				* @type {Record<EdgeID, EdgeLabel>}
				* @private
				* e -> label
				*/
				this._edgeLabels = {};
			}
			/**
			*
			* @returns {boolean} `true` if the graph is [directed](https://en.wikipedia.org/wiki/Directed_graph).
			* A directed graph treats the order of nodes in an edge as significant whereas an
			* [undirected](https://en.wikipedia.org/wiki/Graph_(mathematics)#Undirected_graph)
			* graph does not.
			* This example demonstrates the difference:
			*
			* @example
			*
			* ```js
			* var directed = new Graph({ directed: true });
			* directed.setEdge("a", "b", "my-label");
			* directed.edge("a", "b"); // returns "my-label"
			* directed.edge("b", "a"); // returns undefined
			*
			* var undirected = new Graph({ directed: false });
			* undirected.setEdge("a", "b", "my-label");
			* undirected.edge("a", "b"); // returns "my-label"
			* undirected.edge("b", "a"); // returns "my-label"
			* ```
			*/
			isDirected() {
				return this._isDirected;
			}
			/**
			* @returns {boolean} `true` if the graph is a multigraph.
			*/
			isMultigraph() {
				return this._isMultigraph;
			}
			/**
			* @returns {boolean} `true` if the graph is compound.
			*/
			isCompound() {
				return this._isCompound;
			}
			/**
			* Sets the label for the graph to `label`.
			*
			* @param {GraphLabel} label - Label for the graph.
			* @returns {this}
			*/
			setGraph(label) {
				this._label = label;
				return this;
			}
			/**
			* @returns {GraphLabel | undefined} the currently assigned label for the graph.
			* If no label has been assigned, returns `undefined`.
			*
			* @example
			*
			* ```js
			* var g = new Graph();
			* g.graph(); // returns undefined
			* g.setGraph("graph-label");
			*  g.graph(); // returns "graph-label"
			* ```
			*/
			graph() {
				return this._label;
			}
			/**
			* Sets a new default value that is assigned to nodes that are created without
			* a label.
			*
			* @param {typeof this._defaultNodeLabelFn | NodeLabel} newDefault - If a function,
			* it is called with the id of the node being created.
			* Otherwise, it is assigned as the label directly.
			* @returns {this}
			*/
			setDefaultNodeLabel(newDefault) {
				if (!isFunction(newDefault)) newDefault = constant(newDefault);
				this._defaultNodeLabelFn = newDefault;
				return this;
			}
			/**
			* @returns {number} the number of nodes in the graph.
			*/
			nodeCount() {
				return this._nodeCount;
			}
			/**
			* @returns {NodeID[]} the ids of the nodes in the graph.
			*
			* @remarks
			* Use {@link node()} to get the label for each node.
			* Takes `O(|V|)` time.
			*/
			nodes() {
				return keys(this._nodes);
			}
			/**
			* @returns {NodeID[]} those nodes in the graph that have no in-edges.
			* @remarks Takes `O(|V|)` time.
			*/
			sources() {
				var self = this;
				return filter(this.nodes(), function(v) {
					return isEmpty(self._in[v]);
				});
			}
			/**
			* @returns {NodeID[]} those nodes in the graph that have no out-edges.
			* @remarks Takes `O(|V|)` time.
			*/
			sinks() {
				var self = this;
				return filter(this.nodes(), function(v) {
					return isEmpty(self._out[v]);
				});
			}
			/**
			* Invokes setNode method for each node in `vs` list.
			*
			* @param {Collection<NodeID | number>} vs - List of node IDs to create/set.
			* @param {NodeLabel} [value] - If set, update all nodes with this value.
			* @returns {this}
			* @remarks Complexity: O(|names|).
			*/
			setNodes(vs, value) {
				var args = arguments;
				var self = this;
				forEach(vs, function(v) {
					if (args.length > 1) self.setNode(v, value);
					else self.setNode(v);
				});
				return this;
			}
			/**
			* Creates or updates the value for the node `v` in the graph.
			*
			* @param {NodeID | number} v - ID of the node to create/set.
			* @param {NodeLabel} [value] - If supplied, it is set as the value for the node.
			* If not supplied and the node was created by this call then
			* {@link setDefaultNodeLabel} will be used to set the node's value.
			* @returns {this} the graph, allowing this to be chained with other functions.
			* @remarks Takes `O(1)` time.
			*/
			setNode(v, value) {
				if (Object.prototype.hasOwnProperty.call(this._nodes, v)) {
					if (arguments.length > 1) this._nodes[v] = value;
					return this;
				}
				this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
				if (this._isCompound) {
					this._parent[v] = GRAPH_NODE;
					this._children[v] = {};
					this._children[GRAPH_NODE][v] = true;
				}
				this._in[v] = {};
				this._preds[v] = {};
				this._out[v] = {};
				this._sucs[v] = {};
				++this._nodeCount;
				return this;
			}
			/**
			* Gets the label of node with specified name.
			*
			* @param {NodeID | number} v - Node ID.
			* @returns {NodeLabel | undefined} the label assigned to the node with the id `v`
			* if it is in the graph.
			* Otherwise returns `undefined`.
			* @remarks Takes `O(1)` time.
			*/
			node(v) {
				return this._nodes[v];
			}
			/**
			* Detects whether graph has a node with specified name or not.
			*
			* @param {NodeID | number} v - Node ID.
			* @returns {boolean} Returns `true` the graph has a node with the id.
			* @remarks Takes `O(1)` time.
			*/
			hasNode(v) {
				return Object.prototype.hasOwnProperty.call(this._nodes, v);
			}
			/**
			* Remove the node with the id `v` in the graph or do nothing if the node is
			* not in the graph.
			*
			* If the node was removed this function also removes any incident edges.
			*
			* @param {NodeID | number} v - Node ID to remove.
			* @returns {this} the graph, allowing this to be chained with other functions.
			* @remarks Takes `O(|E|)` time.
			*/
			removeNode(v) {
				if (Object.prototype.hasOwnProperty.call(this._nodes, v)) {
					var removeEdge = (e) => this.removeEdge(this._edgeObjs[e]);
					delete this._nodes[v];
					if (this._isCompound) {
						this._removeFromParentsChildList(v);
						delete this._parent[v];
						forEach(this.children(v), (child) => {
							this.setParent(child);
						});
						delete this._children[v];
					}
					forEach(keys(this._in[v]), removeEdge);
					delete this._in[v];
					delete this._preds[v];
					forEach(keys(this._out[v]), removeEdge);
					delete this._out[v];
					delete this._sucs[v];
					--this._nodeCount;
				}
				return this;
			}
			/**
			* Sets the parent for `v` to `parent` if it is defined or removes the parent
			* for `v` if `parent` is undefined.
			*
			* @param {NodeID | number} v - Node ID to set the parent for.
			* @param {NodeID | number} [parent] - Parent node ID. If not defined, removes the parent.
			* @returns {this} the graph, allowing this to be chained with other functions.
			* @throws if the graph is not compound.
			* @throws if setting the parent would create a cycle.
			* @remarks Takes `O(1)` time.
			*/
			setParent(v, parent) {
				if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
				if (isUndefined(parent)) parent = GRAPH_NODE;
				else {
					parent += "";
					for (var ancestor = parent; !isUndefined(ancestor); ancestor = this.parent(ancestor)) if (ancestor === v) throw new Error("Setting " + parent + " as parent of " + v + " would create a cycle");
					this.setNode(parent);
				}
				this.setNode(v);
				this._removeFromParentsChildList(v);
				this._parent[v] = parent;
				this._children[parent][v] = true;
				return this;
			}
			/**
			* @private
			* @param {NodeID | number} v - Node ID.
			*/
			_removeFromParentsChildList(v) {
				delete this._children[this._parent[v]][v];
			}
			/**
			* Get parent node for node `v`.
			*
			* @param {NodeID | number} v - Node ID.
			* @returns {NodeID | undefined} the node that is a parent of node `v`
			* or `undefined` if node `v` does not have a parent or is not a member of
			* the graph.
			* Always returns `undefined` for graphs that are not compound.
			* @remarks Takes `O(1)` time.
			*/
			parent(v) {
				if (this._isCompound) {
					var parent = this._parent[v];
					if (parent !== GRAPH_NODE) return parent;
				}
			}
			/**
			* Gets list of direct children of node v.
			*
			* @param {NodeID | number} [v] - Node ID. If not specified, gets nodes
			* with no parent (top-level nodes).
			* @returns {NodeID[] | undefined} all nodes that are children of node `v` or
			* `undefined` if node `v` is not in the graph.
			* Always returns `[]` for graphs that are not compound.
			* @remarks Takes `O(|V|)` time.
			*/
			children(v) {
				if (isUndefined(v)) v = GRAPH_NODE;
				if (this._isCompound) {
					var children = this._children[v];
					if (children) return keys(children);
				} else if (v === GRAPH_NODE) return this.nodes();
				else if (this.hasNode(v)) return [];
			}
			/**
			* @param {NodeID | number} v - Node ID.
			* @returns {NodeID[] | undefined} all nodes that are predecessors of the
			* specified node or `undefined` if node `v` is not in the graph.
			* @remarks
			* Behavior is undefined for undirected graphs - use {@link neighbors} instead.
			* Takes `O(|V|)` time.
			*/
			predecessors(v) {
				var predsV = this._preds[v];
				if (predsV) return keys(predsV);
			}
			/**
			* @param {NodeID | number} v - Node ID.
			* @returns {NodeID[] | undefined} all nodes that are successors of the
			* specified node or `undefined` if node `v` is not in the graph.
			* @remarks
			* Behavior is undefined for undirected graphs - use {@link neighbors} instead.
			* Takes `O(|V|)` time.
			*/
			successors(v) {
				var sucsV = this._sucs[v];
				if (sucsV) return keys(sucsV);
			}
			/**
			* @param {NodeID | number} v - Node ID.
			* @returns {NodeID[] | undefined} all nodes that are predecessors or
			* successors of the specified node
			* or `undefined` if node `v` is not in the graph.
			* @remarks Takes `O(|V|)` time.
			*/
			neighbors(v) {
				var preds = this.predecessors(v);
				if (preds) return union(preds, this.successors(v));
			}
			/**
			* @param {NodeID | number} v - Node ID.
			* @returns {boolean} True if the node is a leaf (has no successors), false otherwise.
			*/
			isLeaf(v) {
				var neighbors;
				if (this.isDirected()) neighbors = this.successors(v);
				else neighbors = this.neighbors(v);
				return neighbors.length === 0;
			}
			/**
			* Creates new graph with nodes filtered via `filter`.
			* Edges incident to rejected node
			* are also removed.
			* 
			* In case of compound graph, if parent is rejected by `filter`,
			* than all its children are rejected too.
			
			* @param {(v: NodeID) => boolean} filter - Function that returns `true` for nodes to keep.
			* @returns {Graph<GraphLabel, NodeLabel, EdgeLabel>} A new graph containing only the nodes for which `filter` returns `true`.
			* @remarks Average-case complexity: O(|E|+|V|).
			*/
			filterNodes(filter) {
				/**
				* @type {Graph<GraphLabel, NodeLabel, EdgeLabel>}
				*/
				var copy = new this.constructor({
					directed: this._isDirected,
					multigraph: this._isMultigraph,
					compound: this._isCompound
				});
				copy.setGraph(this.graph());
				var self = this;
				forEach(this._nodes, function(value, v) {
					if (filter(v)) copy.setNode(v, value);
				});
				forEach(this._edgeObjs, function(e) {
					if (copy.hasNode(e.v) && copy.hasNode(e.w)) copy.setEdge(e, self.edge(e));
				});
				var parents = {};
				function findParent(v) {
					var parent = self.parent(v);
					if (parent === void 0 || copy.hasNode(parent)) {
						parents[v] = parent;
						return parent;
					} else if (parent in parents) return parents[parent];
					else return findParent(parent);
				}
				if (this._isCompound) forEach(copy.nodes(), function(v) {
					copy.setParent(v, findParent(v));
				});
				return copy;
			}
			/**
			* Sets a new default value that is assigned to edges that are created without
			* a label.
			*
			* @param {typeof this._defaultEdgeLabelFn | EdgeLabel} newDefault - If a function,
			* it is called with the parameters `(v, w, name)`.
			* Otherwise, it is assigned as the label directly.
			* @returns {this}
			*/
			setDefaultEdgeLabel(newDefault) {
				if (!isFunction(newDefault)) newDefault = constant(newDefault);
				this._defaultEdgeLabelFn = newDefault;
				return this;
			}
			/**
			* @returns {number} the number of edges in the graph.
			* @remarks Complexity: O(1).
			*/
			edgeCount() {
				return this._edgeCount;
			}
			/**
			* Gets edges of the graph.
			*
			* @returns {EdgeObj[]} the {@link EdgeObj} for each edge in the graph.
			*
			* @remarks
			* In case of compound graph subgraphs are not considered.
			* Use {@link edge()} to get the label for each edge.
			* Takes `O(|E|)` time.
			*/
			edges() {
				return values(this._edgeObjs);
			}
			/**
			* Establish an edges path over the nodes in nodes list.
			*
			* If some edge is already exists, it will update its label, otherwise it will
			* create an edge between pair of nodes with label provided or default label
			* if no label provided.
			*
			* @param {Collection<NodeID>} vs - List of node IDs to create edges between.
			* @param {EdgeLabel} [value] - If set, update all edges with this value.
			* @returns {this}
			* @remarks Complexity: O(|nodes|).
			*/
			setPath(vs, value) {
				var self = this;
				var args = arguments;
				reduce(vs, function(v, w) {
					if (args.length > 1) self.setEdge(v, w, value);
					else self.setEdge(v, w);
					return w;
				});
				return this;
			}
			/**
			* Creates or updates the label for the edge (`v`, `w`) with the optionally
			* supplied `name`.
			*
			* @overload
			* @param {EdgeObj} arg0 - Edge object.
			* @param {EdgeLabel} [value] - If supplied, it is set as the label for the edge.
			* If not supplied and the edge was created by this call then
			* {@link setDefaultEdgeLabel} will be used to assign the edge's label.
			* @returns {this} the graph, allowing this to be chained with other functions.
			* @remarks Takes `O(1)` time.
			*/
			/**
			* Creates or updates the label for the edge (`v`, `w`) with the optionally
			* supplied `name`.
			*
			* @overload
			* @param {NodeID | number} v - Source node ID. Number values will be coerced to strings.
			* @param {NodeID | number} w - Target node ID. Number values will be coerced to strings.
			* @param {EdgeLabel} [value] - If supplied, it is set as the label for the edge.
			* If not supplied and the edge was created by this call then
			* {@link setDefaultEdgeLabel} will be used to assign the edge's label.
			* @param {string | number} [name] - Edge name. Only useful with multigraphs.
			* @returns {this} the graph, allowing this to be chained with other functions.
			* @remarks Takes `O(1)` time.
			*/
			setEdge() {
				var v, w, name, value;
				var valueSpecified = false;
				var arg0 = arguments[0];
				if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
					v = arg0.v;
					w = arg0.w;
					name = arg0.name;
					if (arguments.length === 2) {
						value = arguments[1];
						valueSpecified = true;
					}
				} else {
					v = arg0;
					w = arguments[1];
					name = arguments[3];
					if (arguments.length > 2) {
						value = arguments[2];
						valueSpecified = true;
					}
				}
				v = "" + v;
				w = "" + w;
				if (!isUndefined(name)) name = "" + name;
				var e = edgeArgsToId(this._isDirected, v, w, name);
				if (Object.prototype.hasOwnProperty.call(this._edgeLabels, e)) {
					if (valueSpecified) this._edgeLabels[e] = value;
					return this;
				}
				if (!isUndefined(name) && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
				this.setNode(v);
				this.setNode(w);
				this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);
				var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
				v = edgeObj.v;
				w = edgeObj.w;
				Object.freeze(edgeObj);
				this._edgeObjs[e] = edgeObj;
				incrementOrInitEntry(this._preds[w], v);
				incrementOrInitEntry(this._sucs[v], w);
				this._in[w][e] = edgeObj;
				this._out[v][e] = edgeObj;
				this._edgeCount++;
				return this;
			}
			/**
			* Gets the label for the specified edge.
			*
			* @overload
			* @param {EdgeObj} v - Edge object.
			* @returns {EdgeLabel | undefined} the label for the edge (`v`, `w`) if the
			* graph has an edge between `v` and `w` with the optional `name`.
			* Returned `undefined` if there is no such edge in the graph.
			* @remarks
			* `v` and `w` can be interchanged for undirected graphs.
			* Takes `O(1)` time.
			*/
			/**
			* Gets the label for the specified edge.
			*
			* @overload
			* @param {NodeID | number} v - Source node ID.
			* @param {NodeID | number} w - Target node ID.
			* @param {string | number} [name] - Edge name. Only useful with multigraphs.
			* @returns {EdgeLabel | undefined} the label for the edge (`v`, `w`) if the
			* graph has an edge between `v` and `w` with the optional `name`.
			* Returned `undefined` if there is no such edge in the graph.
			* @remarks
			* `v` and `w` can be interchanged for undirected graphs.
			* Takes `O(1)` time.
			*/
			edge(v, w, name) {
				var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
				return this._edgeLabels[e];
			}
			/**
			* Detects whether the graph contains specified edge or not.
			*
			* @overload
			* @param {EdgeObj} v - Edge object.
			* @returns {boolean} `true` if the graph has an edge between `v` and `w`
			* with the optional `name`.
			* @remarks
			* `v` and `w` can be interchanged for undirected graphs.
			* No subgraphs are considered.
			* Takes `O(1)` time.
			*/
			/**
			* Detects whether the graph contains specified edge or not.
			*
			* @overload
			* @param {NodeID | number} v - Source node ID.
			* @param {NodeID | number} w - Target node ID.
			* @param {string | number} [name] - Edge name. Only useful with multigraphs.
			* @returns {boolean} `true` if the graph has an edge between `v` and `w`
			* with the optional `name`.
			* @remarks
			* `v` and `w` can be interchanged for undirected graphs.
			* No subgraphs are considered.
			* Takes `O(1)` time.
			*/
			hasEdge(v, w, name) {
				var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
				return Object.prototype.hasOwnProperty.call(this._edgeLabels, e);
			}
			/**
			* Removes the edge (`v`, `w`) if the graph has an edge between `v` and `w`
			* with the optional `name`. If not this function does nothing.
			*
			* @overload
			* @param {EdgeObj} v - Edge object.
			* @returns {this}
			* @remarks
			* `v` and `w` can be interchanged for undirected graphs.
			* No subgraphs are considered.
			* Takes `O(1)` time.
			*/
			/**
			* Removes the edge (`v`, `w`) if the graph has an edge between `v` and `w`
			* with the optional `name`. If not this function does nothing.
			*
			* @overload
			* @param {NodeID | number} v - Source node ID.
			* @param {NodeID | number} w - Target node ID.
			* @param {string | number} [name] - Edge name. Only useful with multigraphs.
			* @returns {this}
			* @remarks
			* `v` and `w` can be interchanged for undirected graphs.
			* Takes `O(1)` time.
			*/
			removeEdge(v, w, name) {
				var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
				var edge = this._edgeObjs[e];
				if (edge) {
					v = edge.v;
					w = edge.w;
					delete this._edgeLabels[e];
					delete this._edgeObjs[e];
					decrementOrRemoveEntry(this._preds[w], v);
					decrementOrRemoveEntry(this._sucs[v], w);
					delete this._in[w][e];
					delete this._out[v][e];
					this._edgeCount--;
				}
				return this;
			}
			/**
			* @param {NodeID | number} v - Target node ID.
			* @param {NodeID | number} [u] - Optionally filters edges down to just those
			* coming from node `u`.
			* @returns {EdgeObj[] | undefined} all edges that point to the node `v`.
			* Returns `undefined` if node `v` is not in the graph.
			* @remarks
			* Behavior is undefined for undirected graphs - use {@link nodeEdges} instead.
			* Takes `O(|E|)` time.
			*/
			inEdges(v, u) {
				var inV = this._in[v];
				if (inV) {
					var edges = values(inV);
					if (!u) return edges;
					return filter(edges, function(edge) {
						return edge.v === u;
					});
				}
			}
			/**
			* @param {NodeID | number} v - Target node ID.
			* @param {NodeID | number} [w] - Optionally filters edges down to just those
			* that point to `w`.
			* @returns {EdgeObj[] | undefined} all edges that point to the node `v`.
			* Returns `undefined` if node `v` is not in the graph.
			* @remarks
			* Behavior is undefined for undirected graphs - use {@link nodeEdges} instead.
			* Takes `O(|E|)` time.
			*/
			outEdges(v, w) {
				var outV = this._out[v];
				if (outV) {
					var edges = values(outV);
					if (!w) return edges;
					return filter(edges, function(edge) {
						return edge.w === w;
					});
				}
			}
			/**
			* @param {NodeID | number} v - Target Node ID.
			* @param {NodeID | number} [w] - If set, filters those edges down to just
			* those between nodes `v` and `w` regardless of direction
			* @returns {EdgeObj[] | undefined} all edges to or from node `v` regardless
			* of direction. Returns `undefined` if node `v` is not in the graph.
			* @remarks Takes `O(|E|)` time.
			*/
			nodeEdges(v, w) {
				var inEdges = this.inEdges(v, w);
				if (inEdges) return inEdges.concat(this.outEdges(v, w));
			}
		};
		Graph.prototype._nodeCount = 0;
		Graph.prototype._edgeCount = 0;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/dagre-d3-es@7.0.14/node_modules/dagre-d3-es/src/graphlib/index.js
function init_graphlib() {
	return (init_graphlib = __esmMin((() => {
		init_graph();
	})))();
}
//#endregion
export { isUndefined as a, baseClone as c, init_isUndefined as i, init__baseClone as l, Graph as n, init_values as o, init_graph as r, values as s, init_graphlib as t };
