import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_freeGlobal.js
var freeGlobal;
function init__freeGlobal() {
	return (init__freeGlobal = __esmMin((() => {
		freeGlobal = typeof global == "object" && global && global.Object === Object && global;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_root.js
var freeSelf, root;
function init__root() {
	return (init__root = __esmMin((() => {
		init__freeGlobal();
		freeSelf = typeof self == "object" && self && self.Object === Object && self;
		root = freeGlobal || freeSelf || Function("return this")();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Symbol.js
var Symbol;
function init__Symbol() {
	return (init__Symbol = __esmMin((() => {
		init__root();
		Symbol = root.Symbol;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getRawTag.js
/**
* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the raw `toStringTag`.
*/
function getRawTag(value) {
	var isOwn = hasOwnProperty$9.call(value, symToStringTag$1), tag = value[symToStringTag$1];
	try {
		value[symToStringTag$1] = void 0;
		var unmasked = true;
	} catch (e) {}
	var result = nativeObjectToString$1.call(value);
	if (unmasked) {
		if (isOwn) value[symToStringTag$1] = tag;
		else delete value[symToStringTag$1];
	}
	return result;
}
var objectProto$3, hasOwnProperty$9, nativeObjectToString$1, symToStringTag$1;
function init__getRawTag() {
	return (init__getRawTag = __esmMin((() => {
		init__Symbol();
		objectProto$3 = Object.prototype;
		hasOwnProperty$9 = objectProto$3.hasOwnProperty;
		nativeObjectToString$1 = objectProto$3.toString;
		symToStringTag$1 = Symbol ? Symbol.toStringTag : void 0;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
/**
* Converts `value` to a string using `Object.prototype.toString`.
*
* @private
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
*/
function objectToString(value) {
	return nativeObjectToString.call(value);
}
var nativeObjectToString;
function init__objectToString() {
	return (init__objectToString = __esmMin((() => {
		nativeObjectToString = Object.prototype.toString;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
/**
* The base implementation of `getTag` without fallbacks for buggy environments.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
function baseGetTag(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var nullTag, undefinedTag, symToStringTag;
function init__baseGetTag() {
	return (init__baseGetTag = __esmMin((() => {
		init__Symbol();
		init__getRawTag();
		init__objectToString();
		nullTag = "[object Null]";
		undefinedTag = "[object Undefined]";
		symToStringTag = Symbol ? Symbol.toStringTag : void 0;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
/**
* Checks if `value` is object-like. A value is object-like if it's not `null`
* and has a `typeof` result of "object".
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
* @example
*
* _.isObjectLike({});
* // => true
*
* _.isObjectLike([1, 2, 3]);
* // => true
*
* _.isObjectLike(_.noop);
* // => false
*
* _.isObjectLike(null);
* // => false
*/
function isObjectLike(value) {
	return value != null && typeof value == "object";
}
function init_isObjectLike() {
	return (init_isObjectLike = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSymbol.js
/**
* Checks if `value` is classified as a `Symbol` primitive or object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
* @example
*
* _.isSymbol(Symbol.iterator);
* // => true
*
* _.isSymbol('abc');
* // => false
*/
function isSymbol(value) {
	return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$1;
}
var symbolTag$1;
function init_isSymbol() {
	return (init_isSymbol = __esmMin((() => {
		init__baseGetTag();
		init_isObjectLike();
		symbolTag$1 = "[object Symbol]";
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayMap.js
/**
* A specialized version of `_.map` for arrays without support for iteratee
* shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the new mapped array.
*/
function arrayMap(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length, result = Array(length);
	while (++index < length) result[index] = iteratee(array[index], index, array);
	return result;
}
function init__arrayMap() {
	return (init__arrayMap = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArray.js
var isArray;
function init_isArray() {
	return (init_isArray = __esmMin((() => {
		isArray = Array.isArray;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseToString.js
/**
* The base implementation of `_.toString` which doesn't convert nullish
* values to empty strings.
*
* @private
* @param {*} value The value to process.
* @returns {string} Returns the string.
*/
function baseToString(value) {
	if (typeof value == "string") return value;
	if (isArray(value)) return arrayMap(value, baseToString) + "";
	if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var INFINITY$1, symbolProto$1, symbolToString;
function init__baseToString() {
	return (init__baseToString = __esmMin((() => {
		init__Symbol();
		init__arrayMap();
		init_isArray();
		init_isSymbol();
		INFINITY$1 = 1 / 0;
		symbolProto$1 = Symbol ? Symbol.prototype : void 0;
		symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
/**
* Checks if `value` is the
* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an object, else `false`.
* @example
*
* _.isObject({});
* // => true
*
* _.isObject([1, 2, 3]);
* // => true
*
* _.isObject(_.noop);
* // => true
*
* _.isObject(null);
* // => false
*/
function isObject(value) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}
function init_isObject() {
	return (init_isObject = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/identity.js
/**
* This method returns the first argument it receives.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Util
* @param {*} value Any value.
* @returns {*} Returns `value`.
* @example
*
* var object = { 'a': 1 };
*
* console.log(_.identity(object) === object);
* // => true
*/
function identity(value) {
	return value;
}
function init_identity() {
	return (init_identity = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isFunction.js
/**
* Checks if `value` is classified as a `Function` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a function, else `false`.
* @example
*
* _.isFunction(_);
* // => true
*
* _.isFunction(/abc/);
* // => false
*/
function isFunction(value) {
	if (!isObject(value)) return false;
	var tag = baseGetTag(value);
	return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var asyncTag, funcTag$1, genTag, proxyTag;
function init_isFunction() {
	return (init_isFunction = __esmMin((() => {
		init__baseGetTag();
		init_isObject();
		asyncTag = "[object AsyncFunction]";
		funcTag$1 = "[object Function]";
		genTag = "[object GeneratorFunction]";
		proxyTag = "[object Proxy]";
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_coreJsData.js
var coreJsData;
function init__coreJsData() {
	return (init__coreJsData = __esmMin((() => {
		init__root();
		coreJsData = root["__core-js_shared__"];
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isMasked.js
/**
* Checks if `func` has its source masked.
*
* @private
* @param {Function} func The function to check.
* @returns {boolean} Returns `true` if `func` is masked, else `false`.
*/
function isMasked(func) {
	return !!maskSrcKey && maskSrcKey in func;
}
var maskSrcKey;
function init__isMasked() {
	return (init__isMasked = __esmMin((() => {
		init__coreJsData();
		maskSrcKey = function() {
			var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
			return uid ? "Symbol(src)_1." + uid : "";
		}();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toSource.js
/**
* Converts `func` to its source code.
*
* @private
* @param {Function} func The function to convert.
* @returns {string} Returns the source code.
*/
function toSource(func) {
	if (func != null) {
		try {
			return funcToString$1.call(func);
		} catch (e) {}
		try {
			return func + "";
		} catch (e) {}
	}
	return "";
}
var funcToString$1;
function init__toSource() {
	return (init__toSource = __esmMin((() => {
		funcToString$1 = Function.prototype.toString;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNative.js
/**
* The base implementation of `_.isNative` without bad shim checks.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a native function,
*  else `false`.
*/
function baseIsNative(value) {
	if (!isObject(value) || isMasked(value)) return false;
	return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
}
var reRegExpChar, reIsHostCtor, funcProto, objectProto$2, funcToString, hasOwnProperty$8, reIsNative;
function init__baseIsNative() {
	return (init__baseIsNative = __esmMin((() => {
		init_isFunction();
		init__isMasked();
		init_isObject();
		init__toSource();
		reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
		reIsHostCtor = /^\[object .+?Constructor\]$/;
		funcProto = Function.prototype;
		objectProto$2 = Object.prototype;
		funcToString = funcProto.toString;
		hasOwnProperty$8 = objectProto$2.hasOwnProperty;
		reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getValue.js
/**
* Gets the value at `key` of `object`.
*
* @private
* @param {Object} [object] The object to query.
* @param {string} key The key of the property to get.
* @returns {*} Returns the property value.
*/
function getValue(object, key) {
	return object == null ? void 0 : object[key];
}
function init__getValue() {
	return (init__getValue = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getNative.js
/**
* Gets the native function at `key` of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the method to get.
* @returns {*} Returns the function if it's native, else `undefined`.
*/
function getNative(object, key) {
	var value = getValue(object, key);
	return baseIsNative(value) ? value : void 0;
}
function init__getNative() {
	return (init__getNative = __esmMin((() => {
		init__baseIsNative();
		init__getValue();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_WeakMap.js
var WeakMap;
function init__WeakMap() {
	return (init__WeakMap = __esmMin((() => {
		init__getNative();
		init__root();
		WeakMap = getNative(root, "WeakMap");
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_apply.js
/**
* A faster alternative to `Function#apply`, this function invokes `func`
* with the `this` binding of `thisArg` and the arguments of `args`.
*
* @private
* @param {Function} func The function to invoke.
* @param {*} thisArg The `this` binding of `func`.
* @param {Array} args The arguments to invoke `func` with.
* @returns {*} Returns the result of `func`.
*/
function apply(func, thisArg, args) {
	switch (args.length) {
		case 0: return func.call(thisArg);
		case 1: return func.call(thisArg, args[0]);
		case 2: return func.call(thisArg, args[0], args[1]);
		case 3: return func.call(thisArg, args[0], args[1], args[2]);
	}
	return func.apply(thisArg, args);
}
function init__apply() {
	return (init__apply = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/noop.js
/**
* This method returns `undefined`.
*
* @static
* @memberOf _
* @since 2.3.0
* @category Util
* @example
*
* _.times(2, _.noop);
* // => [undefined, undefined]
*/
function noop() {}
function init_noop() {
	return (init_noop = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_shortOut.js
/**
* Creates a function that'll short out and invoke `identity` instead
* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
* milliseconds.
*
* @private
* @param {Function} func The function to restrict.
* @returns {Function} Returns the new shortable function.
*/
function shortOut(func) {
	var count = 0, lastCalled = 0;
	return function() {
		var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
		lastCalled = stamp;
		if (remaining > 0) {
			if (++count >= HOT_COUNT) return arguments[0];
		} else count = 0;
		return func.apply(void 0, arguments);
	};
}
var HOT_COUNT, HOT_SPAN, nativeNow;
function init__shortOut() {
	return (init__shortOut = __esmMin((() => {
		HOT_COUNT = 800;
		HOT_SPAN = 16;
		nativeNow = Date.now;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/constant.js
/**
* Creates a function that returns `value`.
*
* @static
* @memberOf _
* @since 2.4.0
* @category Util
* @param {*} value The value to return from the new function.
* @returns {Function} Returns the new constant function.
* @example
*
* var objects = _.times(2, _.constant({ 'a': 1 }));
*
* console.log(objects);
* // => [{ 'a': 1 }, { 'a': 1 }]
*
* console.log(objects[0] === objects[1]);
* // => true
*/
function constant(value) {
	return function() {
		return value;
	};
}
function init_constant() {
	return (init_constant = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
var defineProperty;
function init__defineProperty() {
	return (init__defineProperty = __esmMin((() => {
		init__getNative();
		defineProperty = function() {
			try {
				var func = getNative(Object, "defineProperty");
				func({}, "", {});
				return func;
			} catch (e) {}
		}();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseSetToString.js
var baseSetToString;
function init__baseSetToString() {
	return (init__baseSetToString = __esmMin((() => {
		init_constant();
		init__defineProperty();
		init_identity();
		baseSetToString = !defineProperty ? identity : function(func, string) {
			return defineProperty(func, "toString", {
				"configurable": true,
				"enumerable": false,
				"value": constant(string),
				"writable": true
			});
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToString.js
var setToString;
function init__setToString() {
	return (init__setToString = __esmMin((() => {
		init__baseSetToString();
		init__shortOut();
		setToString = shortOut(baseSetToString);
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayEach.js
/**
* A specialized version of `_.forEach` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns `array`.
*/
function arrayEach(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (iteratee(array[index], index, array) === false) break;
	return array;
}
function init__arrayEach() {
	return (init__arrayEach = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFindIndex.js
/**
* The base implementation of `_.findIndex` and `_.findLastIndex` without
* support for iteratee shorthands.
*
* @private
* @param {Array} array The array to inspect.
* @param {Function} predicate The function invoked per iteration.
* @param {number} fromIndex The index to search from.
* @param {boolean} [fromRight] Specify iterating from right to left.
* @returns {number} Returns the index of the matched value, else `-1`.
*/
function baseFindIndex(array, predicate, fromIndex, fromRight) {
	var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
	while (fromRight ? index-- : ++index < length) if (predicate(array[index], index, array)) return index;
	return -1;
}
function init__baseFindIndex() {
	return (init__baseFindIndex = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNaN.js
/**
* The base implementation of `_.isNaN` without support for number objects.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
*/
function baseIsNaN(value) {
	return value !== value;
}
function init__baseIsNaN() {
	return (init__baseIsNaN = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_strictIndexOf.js
/**
* A specialized version of `_.indexOf` which performs strict equality
* comparisons of values, i.e. `===`.
*
* @private
* @param {Array} array The array to inspect.
* @param {*} value The value to search for.
* @param {number} fromIndex The index to search from.
* @returns {number} Returns the index of the matched value, else `-1`.
*/
function strictIndexOf(array, value, fromIndex) {
	var index = fromIndex - 1, length = array.length;
	while (++index < length) if (array[index] === value) return index;
	return -1;
}
function init__strictIndexOf() {
	return (init__strictIndexOf = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIndexOf.js
/**
* The base implementation of `_.indexOf` without `fromIndex` bounds checks.
*
* @private
* @param {Array} array The array to inspect.
* @param {*} value The value to search for.
* @param {number} fromIndex The index to search from.
* @returns {number} Returns the index of the matched value, else `-1`.
*/
function baseIndexOf(array, value, fromIndex) {
	return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
function init__baseIndexOf() {
	return (init__baseIndexOf = __esmMin((() => {
		init__baseFindIndex();
		init__baseIsNaN();
		init__strictIndexOf();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayIncludes.js
/**
* A specialized version of `_.includes` for arrays without support for
* specifying an index to search from.
*
* @private
* @param {Array} [array] The array to inspect.
* @param {*} target The value to search for.
* @returns {boolean} Returns `true` if `target` is found, else `false`.
*/
function arrayIncludes(array, value) {
	return !!(array == null ? 0 : array.length) && baseIndexOf(array, value, 0) > -1;
}
function init__arrayIncludes() {
	return (init__arrayIncludes = __esmMin((() => {
		init__baseIndexOf();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isIndex.js
/**
* Checks if `value` is a valid array-like index.
*
* @private
* @param {*} value The value to check.
* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
*/
function isIndex(value, length) {
	var type = typeof value;
	length = length == null ? MAX_SAFE_INTEGER$1 : length;
	return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var MAX_SAFE_INTEGER$1, reIsUint;
function init__isIndex() {
	return (init__isIndex = __esmMin((() => {
		MAX_SAFE_INTEGER$1 = 9007199254740991;
		reIsUint = /^(?:0|[1-9]\d*)$/;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/eq.js
/**
* Performs a
* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* comparison between two values to determine if they are equivalent.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
* @example
*
* var object = { 'a': 1 };
* var other = { 'a': 1 };
*
* _.eq(object, object);
* // => true
*
* _.eq(object, other);
* // => false
*
* _.eq('a', 'a');
* // => true
*
* _.eq('a', Object('a'));
* // => false
*
* _.eq(NaN, NaN);
* // => true
*/
function eq(value, other) {
	return value === other || value !== value && other !== other;
}
function init_eq() {
	return (init_eq = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overRest.js
/**
* A specialized version of `baseRest` which transforms the rest array.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @param {number} [start=func.length-1] The start position of the rest parameter.
* @param {Function} transform The rest array transform.
* @returns {Function} Returns the new function.
*/
function overRest(func, start, transform) {
	start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
	return function() {
		var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
		while (++index < length) array[index] = args[start + index];
		index = -1;
		var otherArgs = Array(start + 1);
		while (++index < start) otherArgs[index] = args[index];
		otherArgs[start] = transform(array);
		return apply(func, this, otherArgs);
	};
}
var nativeMax;
function init__overRest() {
	return (init__overRest = __esmMin((() => {
		init__apply();
		nativeMax = Math.max;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseRest.js
/**
* The base implementation of `_.rest` which doesn't validate or coerce arguments.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @param {number} [start=func.length-1] The start position of the rest parameter.
* @returns {Function} Returns the new function.
*/
function baseRest(func, start) {
	return setToString(overRest(func, start, identity), func + "");
}
function init__baseRest() {
	return (init__baseRest = __esmMin((() => {
		init_identity();
		init__overRest();
		init__setToString();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isLength.js
/**
* Checks if `value` is a valid array-like length.
*
* **Note:** This method is loosely based on
* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
* @example
*
* _.isLength(3);
* // => true
*
* _.isLength(Number.MIN_VALUE);
* // => false
*
* _.isLength(Infinity);
* // => false
*
* _.isLength('3');
* // => false
*/
function isLength(value) {
	return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var MAX_SAFE_INTEGER;
function init_isLength() {
	return (init_isLength = __esmMin((() => {
		MAX_SAFE_INTEGER = 9007199254740991;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLike.js
/**
* Checks if `value` is array-like. A value is considered array-like if it's
* not a function and has a `value.length` that's an integer greater than or
* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
* @example
*
* _.isArrayLike([1, 2, 3]);
* // => true
*
* _.isArrayLike(document.body.children);
* // => true
*
* _.isArrayLike('abc');
* // => true
*
* _.isArrayLike(_.noop);
* // => false
*/
function isArrayLike(value) {
	return value != null && isLength(value.length) && !isFunction(value);
}
function init_isArrayLike() {
	return (init_isArrayLike = __esmMin((() => {
		init_isFunction();
		init_isLength();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isPrototype.js
/**
* Checks if `value` is likely a prototype object.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
*/
function isPrototype(value) {
	var Ctor = value && value.constructor;
	return value === (typeof Ctor == "function" && Ctor.prototype || objectProto$1);
}
var objectProto$1;
function init__isPrototype() {
	return (init__isPrototype = __esmMin((() => {
		objectProto$1 = Object.prototype;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTimes.js
/**
* The base implementation of `_.times` without support for iteratee shorthands
* or max array length checks.
*
* @private
* @param {number} n The number of times to invoke `iteratee`.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the array of results.
*/
function baseTimes(n, iteratee) {
	var index = -1, result = Array(n);
	while (++index < n) result[index] = iteratee(index);
	return result;
}
function init__baseTimes() {
	return (init__baseTimes = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsArguments.js
/**
* The base implementation of `_.isArguments`.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*/
function baseIsArguments(value) {
	return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var argsTag$2;
function init__baseIsArguments() {
	return (init__baseIsArguments = __esmMin((() => {
		init__baseGetTag();
		init_isObjectLike();
		argsTag$2 = "[object Arguments]";
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArguments.js
var objectProto, hasOwnProperty$7, propertyIsEnumerable$1, isArguments;
function init_isArguments() {
	return (init_isArguments = __esmMin((() => {
		init__baseIsArguments();
		init_isObjectLike();
		objectProto = Object.prototype;
		hasOwnProperty$7 = objectProto.hasOwnProperty;
		propertyIsEnumerable$1 = objectProto.propertyIsEnumerable;
		isArguments = baseIsArguments(function() {
			return arguments;
		}()) ? baseIsArguments : function(value) {
			return isObjectLike(value) && hasOwnProperty$7.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubFalse.js
/**
* This method returns `false`.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {boolean} Returns `false`.
* @example
*
* _.times(2, _.stubFalse);
* // => [false, false]
*/
function stubFalse() {
	return false;
}
function init_stubFalse() {
	return (init_stubFalse = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isBuffer.js
var freeExports$1, freeModule$1, Buffer, isBuffer;
function init_isBuffer() {
	return (init_isBuffer = __esmMin((() => {
		init__root();
		init_stubFalse();
		freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
		freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
		Buffer = freeModule$1 && freeModule$1.exports === freeExports$1 ? root.Buffer : void 0;
		isBuffer = (Buffer ? Buffer.isBuffer : void 0) || stubFalse;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsTypedArray.js
/**
* The base implementation of `_.isTypedArray` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
*/
function baseIsTypedArray(value) {
	return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
var argsTag$1, arrayTag$1, boolTag$1, dateTag$1, errorTag$1, funcTag, mapTag$3, numberTag$1, objectTag$2, regexpTag$1, setTag$3, stringTag$1, weakMapTag$1, arrayBufferTag$1, dataViewTag$2, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, typedArrayTags;
function init__baseIsTypedArray() {
	return (init__baseIsTypedArray = __esmMin((() => {
		init__baseGetTag();
		init_isLength();
		init_isObjectLike();
		argsTag$1 = "[object Arguments]";
		arrayTag$1 = "[object Array]";
		boolTag$1 = "[object Boolean]";
		dateTag$1 = "[object Date]";
		errorTag$1 = "[object Error]";
		funcTag = "[object Function]";
		mapTag$3 = "[object Map]";
		numberTag$1 = "[object Number]";
		objectTag$2 = "[object Object]";
		regexpTag$1 = "[object RegExp]";
		setTag$3 = "[object Set]";
		stringTag$1 = "[object String]";
		weakMapTag$1 = "[object WeakMap]";
		arrayBufferTag$1 = "[object ArrayBuffer]";
		dataViewTag$2 = "[object DataView]";
		float32Tag = "[object Float32Array]";
		float64Tag = "[object Float64Array]";
		int8Tag = "[object Int8Array]";
		int16Tag = "[object Int16Array]";
		int32Tag = "[object Int32Array]";
		uint8Tag = "[object Uint8Array]";
		uint8ClampedTag = "[object Uint8ClampedArray]";
		uint16Tag = "[object Uint16Array]";
		uint32Tag = "[object Uint32Array]";
		typedArrayTags = {};
		typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
		typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$3] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$3] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnary.js
/**
* The base implementation of `_.unary` without support for storing metadata.
*
* @private
* @param {Function} func The function to cap arguments for.
* @returns {Function} Returns the new capped function.
*/
function baseUnary(func) {
	return function(value) {
		return func(value);
	};
}
function init__baseUnary() {
	return (init__baseUnary = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nodeUtil.js
var freeExports, freeModule, freeProcess, nodeUtil;
function init__nodeUtil() {
	return (init__nodeUtil = __esmMin((() => {
		init__freeGlobal();
		freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
		freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
		freeProcess = freeModule && freeModule.exports === freeExports && freeGlobal.process;
		nodeUtil = function() {
			try {
				var types = freeModule && freeModule.require && freeModule.require("util").types;
				if (types) return types;
				return freeProcess && freeProcess.binding && freeProcess.binding("util");
			} catch (e) {}
		}();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray, isTypedArray;
function init_isTypedArray() {
	return (init_isTypedArray = __esmMin((() => {
		init__baseIsTypedArray();
		init__baseUnary();
		init__nodeUtil();
		nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
		isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayLikeKeys.js
/**
* Creates an array of the enumerable property names of the array-like `value`.
*
* @private
* @param {*} value The value to query.
* @param {boolean} inherited Specify returning inherited property names.
* @returns {Array} Returns the array of property names.
*/
function arrayLikeKeys(value, inherited) {
	var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
	for (var key in value) if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
	return result;
}
var hasOwnProperty$6;
function init__arrayLikeKeys() {
	return (init__arrayLikeKeys = __esmMin((() => {
		init__baseTimes();
		init_isArguments();
		init_isArray();
		init_isBuffer();
		init__isIndex();
		init_isTypedArray();
		hasOwnProperty$6 = Object.prototype.hasOwnProperty;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overArg.js
/**
* Creates a unary function that invokes `func` with its argument transformed.
*
* @private
* @param {Function} func The function to wrap.
* @param {Function} transform The argument transform.
* @returns {Function} Returns the new function.
*/
function overArg(func, transform) {
	return function(arg) {
		return func(transform(arg));
	};
}
function init__overArg() {
	return (init__overArg = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
var nativeKeys;
function init__nativeKeys() {
	return (init__nativeKeys = __esmMin((() => {
		init__overArg();
		nativeKeys = overArg(Object.keys, Object);
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeys.js
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
	for (var key in Object(object)) if (hasOwnProperty$5.call(object, key) && key != "constructor") result.push(key);
	return result;
}
var hasOwnProperty$5;
function init__baseKeys() {
	return (init__baseKeys = __esmMin((() => {
		init__isPrototype();
		init__nativeKeys();
		hasOwnProperty$5 = Object.prototype.hasOwnProperty;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keys.js
/**
* Creates an array of the own enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects. See the
* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* for more details.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keys(new Foo);
* // => ['a', 'b'] (iteration order is not guaranteed)
*
* _.keys('hi');
* // => ['0', '1']
*/
function keys(object) {
	return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function init_keys() {
	return (init_keys = __esmMin((() => {
		init__arrayLikeKeys();
		init__baseKeys();
		init_isArrayLike();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKey.js
/**
* Checks if `value` is a property name and not a property path.
*
* @private
* @param {*} value The value to check.
* @param {Object} [object] The object to query keys on.
* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
*/
function isKey(value, object) {
	if (isArray(value)) return false;
	var type = typeof value;
	if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
	return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var reIsDeepProp, reIsPlainProp;
function init__isKey() {
	return (init__isKey = __esmMin((() => {
		init_isArray();
		init_isSymbol();
		reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
		reIsPlainProp = /^\w*$/;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeCreate.js
var nativeCreate;
function init__nativeCreate() {
	return (init__nativeCreate = __esmMin((() => {
		init__getNative();
		nativeCreate = getNative(Object, "create");
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashClear.js
/**
* Removes all key-value entries from the hash.
*
* @private
* @name clear
* @memberOf Hash
*/
function hashClear() {
	this.__data__ = nativeCreate ? nativeCreate(null) : {};
	this.size = 0;
}
function init__hashClear() {
	return (init__hashClear = __esmMin((() => {
		init__nativeCreate();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashDelete.js
/**
* Removes `key` and its value from the hash.
*
* @private
* @name delete
* @memberOf Hash
* @param {Object} hash The hash to modify.
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function hashDelete(key) {
	var result = this.has(key) && delete this.__data__[key];
	this.size -= result ? 1 : 0;
	return result;
}
function init__hashDelete() {
	return (init__hashDelete = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashGet.js
/**
* Gets the hash value for `key`.
*
* @private
* @name get
* @memberOf Hash
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function hashGet(key) {
	var data = this.__data__;
	if (nativeCreate) {
		var result = data[key];
		return result === HASH_UNDEFINED$2 ? void 0 : result;
	}
	return hasOwnProperty$4.call(data, key) ? data[key] : void 0;
}
var HASH_UNDEFINED$2, hasOwnProperty$4;
function init__hashGet() {
	return (init__hashGet = __esmMin((() => {
		init__nativeCreate();
		HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
		hasOwnProperty$4 = Object.prototype.hasOwnProperty;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashHas.js
/**
* Checks if a hash value for `key` exists.
*
* @private
* @name has
* @memberOf Hash
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function hashHas(key) {
	var data = this.__data__;
	return nativeCreate ? data[key] !== void 0 : hasOwnProperty$3.call(data, key);
}
var hasOwnProperty$3;
function init__hashHas() {
	return (init__hashHas = __esmMin((() => {
		init__nativeCreate();
		hasOwnProperty$3 = Object.prototype.hasOwnProperty;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashSet.js
/**
* Sets the hash `key` to `value`.
*
* @private
* @name set
* @memberOf Hash
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the hash instance.
*/
function hashSet(key, value) {
	var data = this.__data__;
	this.size += this.has(key) ? 0 : 1;
	data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
	return this;
}
var HASH_UNDEFINED$1;
function init__hashSet() {
	return (init__hashSet = __esmMin((() => {
		init__nativeCreate();
		HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Hash.js
/**
* Creates a hash object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Hash(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
function init__Hash() {
	return (init__Hash = __esmMin((() => {
		init__hashClear();
		init__hashDelete();
		init__hashGet();
		init__hashHas();
		init__hashSet();
		Hash.prototype.clear = hashClear;
		Hash.prototype["delete"] = hashDelete;
		Hash.prototype.get = hashGet;
		Hash.prototype.has = hashHas;
		Hash.prototype.set = hashSet;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheClear.js
/**
* Removes all key-value entries from the list cache.
*
* @private
* @name clear
* @memberOf ListCache
*/
function listCacheClear() {
	this.__data__ = [];
	this.size = 0;
}
function init__listCacheClear() {
	return (init__listCacheClear = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assocIndexOf.js
/**
* Gets the index at which the `key` is found in `array` of key-value pairs.
*
* @private
* @param {Array} array The array to inspect.
* @param {*} key The key to search for.
* @returns {number} Returns the index of the matched value, else `-1`.
*/
function assocIndexOf(array, key) {
	var length = array.length;
	while (length--) if (eq(array[length][0], key)) return length;
	return -1;
}
function init__assocIndexOf() {
	return (init__assocIndexOf = __esmMin((() => {
		init_eq();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheDelete.js
/**
* Removes `key` and its value from the list cache.
*
* @private
* @name delete
* @memberOf ListCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function listCacheDelete(key) {
	var data = this.__data__, index = assocIndexOf(data, key);
	if (index < 0) return false;
	if (index == data.length - 1) data.pop();
	else splice.call(data, index, 1);
	--this.size;
	return true;
}
var splice;
function init__listCacheDelete() {
	return (init__listCacheDelete = __esmMin((() => {
		init__assocIndexOf();
		splice = Array.prototype.splice;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheGet.js
/**
* Gets the list cache value for `key`.
*
* @private
* @name get
* @memberOf ListCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function listCacheGet(key) {
	var data = this.__data__, index = assocIndexOf(data, key);
	return index < 0 ? void 0 : data[index][1];
}
function init__listCacheGet() {
	return (init__listCacheGet = __esmMin((() => {
		init__assocIndexOf();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheHas.js
/**
* Checks if a list cache value for `key` exists.
*
* @private
* @name has
* @memberOf ListCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function listCacheHas(key) {
	return assocIndexOf(this.__data__, key) > -1;
}
function init__listCacheHas() {
	return (init__listCacheHas = __esmMin((() => {
		init__assocIndexOf();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheSet.js
/**
* Sets the list cache `key` to `value`.
*
* @private
* @name set
* @memberOf ListCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the list cache instance.
*/
function listCacheSet(key, value) {
	var data = this.__data__, index = assocIndexOf(data, key);
	if (index < 0) {
		++this.size;
		data.push([key, value]);
	} else data[index][1] = value;
	return this;
}
function init__listCacheSet() {
	return (init__listCacheSet = __esmMin((() => {
		init__assocIndexOf();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_ListCache.js
/**
* Creates an list cache object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function ListCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
function init__ListCache() {
	return (init__ListCache = __esmMin((() => {
		init__listCacheClear();
		init__listCacheDelete();
		init__listCacheGet();
		init__listCacheHas();
		init__listCacheSet();
		ListCache.prototype.clear = listCacheClear;
		ListCache.prototype["delete"] = listCacheDelete;
		ListCache.prototype.get = listCacheGet;
		ListCache.prototype.has = listCacheHas;
		ListCache.prototype.set = listCacheSet;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Map.js
var Map;
function init__Map() {
	return (init__Map = __esmMin((() => {
		init__getNative();
		init__root();
		Map = getNative(root, "Map");
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheClear.js
/**
* Removes all key-value entries from the map.
*
* @private
* @name clear
* @memberOf MapCache
*/
function mapCacheClear() {
	this.size = 0;
	this.__data__ = {
		"hash": new Hash(),
		"map": new (Map || ListCache)(),
		"string": new Hash()
	};
}
function init__mapCacheClear() {
	return (init__mapCacheClear = __esmMin((() => {
		init__Hash();
		init__ListCache();
		init__Map();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKeyable.js
/**
* Checks if `value` is suitable for use as unique object key.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
*/
function isKeyable(value) {
	var type = typeof value;
	return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function init__isKeyable() {
	return (init__isKeyable = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMapData.js
/**
* Gets the data for `map`.
*
* @private
* @param {Object} map The map to query.
* @param {string} key The reference key.
* @returns {*} Returns the map data.
*/
function getMapData(map, key) {
	var data = map.__data__;
	return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function init__getMapData() {
	return (init__getMapData = __esmMin((() => {
		init__isKeyable();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheDelete.js
/**
* Removes `key` and its value from the map.
*
* @private
* @name delete
* @memberOf MapCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function mapCacheDelete(key) {
	var result = getMapData(this, key)["delete"](key);
	this.size -= result ? 1 : 0;
	return result;
}
function init__mapCacheDelete() {
	return (init__mapCacheDelete = __esmMin((() => {
		init__getMapData();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheGet.js
/**
* Gets the map value for `key`.
*
* @private
* @name get
* @memberOf MapCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function mapCacheGet(key) {
	return getMapData(this, key).get(key);
}
function init__mapCacheGet() {
	return (init__mapCacheGet = __esmMin((() => {
		init__getMapData();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheHas.js
/**
* Checks if a map value for `key` exists.
*
* @private
* @name has
* @memberOf MapCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function mapCacheHas(key) {
	return getMapData(this, key).has(key);
}
function init__mapCacheHas() {
	return (init__mapCacheHas = __esmMin((() => {
		init__getMapData();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheSet.js
/**
* Sets the map `key` to `value`.
*
* @private
* @name set
* @memberOf MapCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the map cache instance.
*/
function mapCacheSet(key, value) {
	var data = getMapData(this, key), size = data.size;
	data.set(key, value);
	this.size += data.size == size ? 0 : 1;
	return this;
}
function init__mapCacheSet() {
	return (init__mapCacheSet = __esmMin((() => {
		init__getMapData();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_MapCache.js
/**
* Creates a map cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function MapCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
function init__MapCache() {
	return (init__MapCache = __esmMin((() => {
		init__mapCacheClear();
		init__mapCacheDelete();
		init__mapCacheGet();
		init__mapCacheHas();
		init__mapCacheSet();
		MapCache.prototype.clear = mapCacheClear;
		MapCache.prototype["delete"] = mapCacheDelete;
		MapCache.prototype.get = mapCacheGet;
		MapCache.prototype.has = mapCacheHas;
		MapCache.prototype.set = mapCacheSet;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/memoize.js
/**
* Creates a function that memoizes the result of `func`. If `resolver` is
* provided, it determines the cache key for storing the result based on the
* arguments provided to the memoized function. By default, the first argument
* provided to the memoized function is used as the map cache key. The `func`
* is invoked with the `this` binding of the memoized function.
*
* **Note:** The cache is exposed as the `cache` property on the memoized
* function. Its creation may be customized by replacing the `_.memoize.Cache`
* constructor with one whose instances implement the
* [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
* method interface of `clear`, `delete`, `get`, `has`, and `set`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Function
* @param {Function} func The function to have its output memoized.
* @param {Function} [resolver] The function to resolve the cache key.
* @returns {Function} Returns the new memoized function.
* @example
*
* var object = { 'a': 1, 'b': 2 };
* var other = { 'c': 3, 'd': 4 };
*
* var values = _.memoize(_.values);
* values(object);
* // => [1, 2]
*
* values(other);
* // => [3, 4]
*
* object.a = 2;
* values(object);
* // => [1, 2]
*
* // Modify the result cache.
* values.cache.set(object, ['a', 'b']);
* values(object);
* // => ['a', 'b']
*
* // Replace `_.memoize.Cache`.
* _.memoize.Cache = WeakMap;
*/
function memoize(func, resolver) {
	if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
	var memoized = function() {
		var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
		if (cache.has(key)) return cache.get(key);
		var result = func.apply(this, args);
		memoized.cache = cache.set(key, result) || cache;
		return result;
	};
	memoized.cache = new (memoize.Cache || MapCache)();
	return memoized;
}
var FUNC_ERROR_TEXT;
function init_memoize() {
	return (init_memoize = __esmMin((() => {
		init__MapCache();
		FUNC_ERROR_TEXT = "Expected a function";
		memoize.Cache = MapCache;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_memoizeCapped.js
/**
* A specialized version of `_.memoize` which clears the memoized function's
* cache when it exceeds `MAX_MEMOIZE_SIZE`.
*
* @private
* @param {Function} func The function to have its output memoized.
* @returns {Function} Returns the new memoized function.
*/
function memoizeCapped(func) {
	var result = memoize(func, function(key) {
		if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
		return key;
	});
	var cache = result.cache;
	return result;
}
var MAX_MEMOIZE_SIZE;
function init__memoizeCapped() {
	return (init__memoizeCapped = __esmMin((() => {
		init_memoize();
		MAX_MEMOIZE_SIZE = 500;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToPath.js
var rePropName, reEscapeChar, stringToPath;
function init__stringToPath() {
	return (init__stringToPath = __esmMin((() => {
		init__memoizeCapped();
		rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
		reEscapeChar = /\\(\\)?/g;
		stringToPath = memoizeCapped(function(string) {
			var result = [];
			if (string.charCodeAt(0) === 46) result.push("");
			string.replace(rePropName, function(match, number, quote, subString) {
				result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
			});
			return result;
		});
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toString.js
/**
* Converts `value` to a string. An empty string is returned for `null`
* and `undefined` values. The sign of `-0` is preserved.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
* @example
*
* _.toString(null);
* // => ''
*
* _.toString(-0);
* // => '-0'
*
* _.toString([1, 2, 3]);
* // => '1,2,3'
*/
function toString(value) {
	return value == null ? "" : baseToString(value);
}
function init_toString() {
	return (init_toString = __esmMin((() => {
		init__baseToString();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castPath.js
/**
* Casts `value` to a path array if it's not one.
*
* @private
* @param {*} value The value to inspect.
* @param {Object} [object] The object to query keys on.
* @returns {Array} Returns the cast property path array.
*/
function castPath(value, object) {
	if (isArray(value)) return value;
	return isKey(value, object) ? [value] : stringToPath(toString(value));
}
function init__castPath() {
	return (init__castPath = __esmMin((() => {
		init_isArray();
		init__isKey();
		init__stringToPath();
		init_toString();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toKey.js
/**
* Converts `value` to a string key if it's not a string or symbol.
*
* @private
* @param {*} value The value to inspect.
* @returns {string|symbol} Returns the key.
*/
function toKey(value) {
	if (typeof value == "string" || isSymbol(value)) return value;
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var INFINITY;
function init__toKey() {
	return (init__toKey = __esmMin((() => {
		init_isSymbol();
		INFINITY = 1 / 0;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGet.js
/**
* The base implementation of `_.get` without support for default values.
*
* @private
* @param {Object} object The object to query.
* @param {Array|string} path The path of the property to get.
* @returns {*} Returns the resolved value.
*/
function baseGet(object, path) {
	path = castPath(path, object);
	var index = 0, length = path.length;
	while (object != null && index < length) object = object[toKey(path[index++])];
	return index && index == length ? object : void 0;
}
function init__baseGet() {
	return (init__baseGet = __esmMin((() => {
		init__castPath();
		init__toKey();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/get.js
/**
* Gets the value at `path` of `object`. If the resolved value is
* `undefined`, the `defaultValue` is returned in its place.
*
* @static
* @memberOf _
* @since 3.7.0
* @category Object
* @param {Object} object The object to query.
* @param {Array|string} path The path of the property to get.
* @param {*} [defaultValue] The value returned for `undefined` resolved values.
* @returns {*} Returns the resolved value.
* @example
*
* var object = { 'a': [{ 'b': { 'c': 3 } }] };
*
* _.get(object, 'a[0].b.c');
* // => 3
*
* _.get(object, ['a', '0', 'b', 'c']);
* // => 3
*
* _.get(object, 'a.b.c', 'default');
* // => 'default'
*/
function get(object, path, defaultValue) {
	var result = object == null ? void 0 : baseGet(object, path);
	return result === void 0 ? defaultValue : result;
}
function init_get() {
	return (init_get = __esmMin((() => {
		init__baseGet();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayPush.js
/**
* Appends the elements of `values` to `array`.
*
* @private
* @param {Array} array The array to modify.
* @param {Array} values The values to append.
* @returns {Array} Returns `array`.
*/
function arrayPush(array, values) {
	var index = -1, length = values.length, offset = array.length;
	while (++index < length) array[offset + index] = values[index];
	return array;
}
function init__arrayPush() {
	return (init__arrayPush = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isFlattenable.js
/**
* Checks if `value` is a flattenable `arguments` object or array.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
*/
function isFlattenable(value) {
	return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var spreadableSymbol;
function init__isFlattenable() {
	return (init__isFlattenable = __esmMin((() => {
		init__Symbol();
		init_isArguments();
		init_isArray();
		spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFlatten.js
/**
* The base implementation of `_.flatten` with support for restricting flattening.
*
* @private
* @param {Array} array The array to flatten.
* @param {number} depth The maximum recursion depth.
* @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
* @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
* @param {Array} [result=[]] The initial result value.
* @returns {Array} Returns the new flattened array.
*/
function baseFlatten(array, depth, predicate, isStrict, result) {
	var index = -1, length = array.length;
	predicate || (predicate = isFlattenable);
	result || (result = []);
	while (++index < length) {
		var value = array[index];
		if (depth > 0 && predicate(value)) {
			if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result);
			else arrayPush(result, value);
		} else if (!isStrict) result[result.length] = value;
	}
	return result;
}
function init__baseFlatten() {
	return (init__baseFlatten = __esmMin((() => {
		init__arrayPush();
		init__isFlattenable();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayReduce.js
/**
* A specialized version of `_.reduce` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @param {*} [accumulator] The initial value.
* @param {boolean} [initAccum] Specify using the first element of `array` as
*  the initial value.
* @returns {*} Returns the accumulated value.
*/
function arrayReduce(array, iteratee, accumulator, initAccum) {
	var index = -1, length = array == null ? 0 : array.length;
	if (initAccum && length) accumulator = array[++index];
	while (++index < length) accumulator = iteratee(accumulator, array[index], index, array);
	return accumulator;
}
function init__arrayReduce() {
	return (init__arrayReduce = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackClear.js
/**
* Removes all key-value entries from the stack.
*
* @private
* @name clear
* @memberOf Stack
*/
function stackClear() {
	this.__data__ = new ListCache();
	this.size = 0;
}
function init__stackClear() {
	return (init__stackClear = __esmMin((() => {
		init__ListCache();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackDelete.js
/**
* Removes `key` and its value from the stack.
*
* @private
* @name delete
* @memberOf Stack
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function stackDelete(key) {
	var data = this.__data__, result = data["delete"](key);
	this.size = data.size;
	return result;
}
function init__stackDelete() {
	return (init__stackDelete = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackGet.js
/**
* Gets the stack value for `key`.
*
* @private
* @name get
* @memberOf Stack
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function stackGet(key) {
	return this.__data__.get(key);
}
function init__stackGet() {
	return (init__stackGet = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackHas.js
/**
* Checks if a stack value for `key` exists.
*
* @private
* @name has
* @memberOf Stack
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function stackHas(key) {
	return this.__data__.has(key);
}
function init__stackHas() {
	return (init__stackHas = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackSet.js
/**
* Sets the stack `key` to `value`.
*
* @private
* @name set
* @memberOf Stack
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the stack cache instance.
*/
function stackSet(key, value) {
	var data = this.__data__;
	if (data instanceof ListCache) {
		var pairs = data.__data__;
		if (!Map || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
			pairs.push([key, value]);
			this.size = ++data.size;
			return this;
		}
		data = this.__data__ = new MapCache(pairs);
	}
	data.set(key, value);
	this.size = data.size;
	return this;
}
var LARGE_ARRAY_SIZE$1;
function init__stackSet() {
	return (init__stackSet = __esmMin((() => {
		init__ListCache();
		init__Map();
		init__MapCache();
		LARGE_ARRAY_SIZE$1 = 200;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Stack.js
/**
* Creates a stack cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Stack(entries) {
	var data = this.__data__ = new ListCache(entries);
	this.size = data.size;
}
function init__Stack() {
	return (init__Stack = __esmMin((() => {
		init__ListCache();
		init__stackClear();
		init__stackDelete();
		init__stackGet();
		init__stackHas();
		init__stackSet();
		Stack.prototype.clear = stackClear;
		Stack.prototype["delete"] = stackDelete;
		Stack.prototype.get = stackGet;
		Stack.prototype.has = stackHas;
		Stack.prototype.set = stackSet;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayFilter.js
/**
* A specialized version of `_.filter` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {Array} Returns the new filtered array.
*/
function arrayFilter(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
	while (++index < length) {
		var value = array[index];
		if (predicate(value, index, array)) result[resIndex++] = value;
	}
	return result;
}
function init__arrayFilter() {
	return (init__arrayFilter = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubArray.js
/**
* This method returns a new empty array.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {Array} Returns the new empty array.
* @example
*
* var arrays = _.times(2, _.stubArray);
*
* console.log(arrays);
* // => [[], []]
*
* console.log(arrays[0] === arrays[1]);
* // => false
*/
function stubArray() {
	return [];
}
function init_stubArray() {
	return (init_stubArray = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbols.js
var propertyIsEnumerable, nativeGetSymbols, getSymbols;
function init__getSymbols() {
	return (init__getSymbols = __esmMin((() => {
		init__arrayFilter();
		init_stubArray();
		propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
		nativeGetSymbols = Object.getOwnPropertySymbols;
		getSymbols = !nativeGetSymbols ? stubArray : function(object) {
			if (object == null) return [];
			object = Object(object);
			return arrayFilter(nativeGetSymbols(object), function(symbol) {
				return propertyIsEnumerable.call(object, symbol);
			});
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetAllKeys.js
/**
* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
* `keysFunc` and `symbolsFunc` to get the enumerable property names and
* symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Function} keysFunc The function to get the keys of `object`.
* @param {Function} symbolsFunc The function to get the symbols of `object`.
* @returns {Array} Returns the array of property names and symbols.
*/
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	var result = keysFunc(object);
	return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function init__baseGetAllKeys() {
	return (init__baseGetAllKeys = __esmMin((() => {
		init__arrayPush();
		init_isArray();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeys.js
/**
* Creates an array of own enumerable property names and symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names and symbols.
*/
function getAllKeys(object) {
	return baseGetAllKeys(object, keys, getSymbols);
}
function init__getAllKeys() {
	return (init__getAllKeys = __esmMin((() => {
		init__baseGetAllKeys();
		init__getSymbols();
		init_keys();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
var DataView;
function init__DataView() {
	return (init__DataView = __esmMin((() => {
		init__getNative();
		init__root();
		DataView = getNative(root, "DataView");
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Promise.js
var Promise$1;
function init__Promise() {
	return (init__Promise = __esmMin((() => {
		init__getNative();
		init__root();
		Promise$1 = getNative(root, "Promise");
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Set.js
var Set;
function init__Set() {
	return (init__Set = __esmMin((() => {
		init__getNative();
		init__root();
		Set = getNative(root, "Set");
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getTag.js
var mapTag$2, objectTag$1, promiseTag, setTag$2, weakMapTag, dataViewTag$1, dataViewCtorString, mapCtorString, promiseCtorString, setCtorString, weakMapCtorString, getTag, _getTag_default;
function init__getTag() {
	return (init__getTag = __esmMin((() => {
		init__DataView();
		init__Map();
		init__Promise();
		init__Set();
		init__WeakMap();
		init__baseGetTag();
		init__toSource();
		mapTag$2 = "[object Map]";
		objectTag$1 = "[object Object]";
		promiseTag = "[object Promise]";
		setTag$2 = "[object Set]";
		weakMapTag = "[object WeakMap]";
		dataViewTag$1 = "[object DataView]";
		dataViewCtorString = toSource(DataView);
		mapCtorString = toSource(Map);
		promiseCtorString = toSource(Promise$1);
		setCtorString = toSource(Set);
		weakMapCtorString = toSource(WeakMap);
		getTag = baseGetTag;
		if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag$1 || Map && getTag(new Map()) != mapTag$2 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set && getTag(new Set()) != setTag$2 || WeakMap && getTag(new WeakMap()) != weakMapTag) getTag = function(value) {
			var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
			if (ctorString) switch (ctorString) {
				case dataViewCtorString: return dataViewTag$1;
				case mapCtorString: return mapTag$2;
				case promiseCtorString: return promiseTag;
				case setCtorString: return setTag$2;
				case weakMapCtorString: return weakMapTag;
			}
			return result;
		};
		_getTag_default = getTag;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Uint8Array.js
var Uint8Array;
function init__Uint8Array() {
	return (init__Uint8Array = __esmMin((() => {
		init__root();
		Uint8Array = root.Uint8Array;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheAdd.js
/**
* Adds `value` to the array cache.
*
* @private
* @name add
* @memberOf SetCache
* @alias push
* @param {*} value The value to cache.
* @returns {Object} Returns the cache instance.
*/
function setCacheAdd(value) {
	this.__data__.set(value, HASH_UNDEFINED);
	return this;
}
var HASH_UNDEFINED;
function init__setCacheAdd() {
	return (init__setCacheAdd = __esmMin((() => {
		HASH_UNDEFINED = "__lodash_hash_undefined__";
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheHas.js
/**
* Checks if `value` is in the array cache.
*
* @private
* @name has
* @memberOf SetCache
* @param {*} value The value to search for.
* @returns {boolean} Returns `true` if `value` is found, else `false`.
*/
function setCacheHas(value) {
	return this.__data__.has(value);
}
function init__setCacheHas() {
	return (init__setCacheHas = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_SetCache.js
/**
*
* Creates an array cache object to store unique values.
*
* @private
* @constructor
* @param {Array} [values] The values to cache.
*/
function SetCache(values) {
	var index = -1, length = values == null ? 0 : values.length;
	this.__data__ = new MapCache();
	while (++index < length) this.add(values[index]);
}
function init__SetCache() {
	return (init__SetCache = __esmMin((() => {
		init__MapCache();
		init__setCacheAdd();
		init__setCacheHas();
		SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
		SetCache.prototype.has = setCacheHas;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arraySome.js
/**
* A specialized version of `_.some` for arrays without support for iteratee
* shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {boolean} Returns `true` if any element passes the predicate check,
*  else `false`.
*/
function arraySome(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (predicate(array[index], index, array)) return true;
	return false;
}
function init__arraySome() {
	return (init__arraySome = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cacheHas.js
/**
* Checks if a `cache` value for `key` exists.
*
* @private
* @param {Object} cache The cache to query.
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function cacheHas(cache, key) {
	return cache.has(key);
}
function init__cacheHas() {
	return (init__cacheHas = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalArrays.js
/**
* A specialized version of `baseIsEqualDeep` for arrays with support for
* partial deep comparisons.
*
* @private
* @param {Array} array The array to compare.
* @param {Array} other The other array to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `array` and `other` objects.
* @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
*/
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
	if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
	var arrStacked = stack.get(array);
	var othStacked = stack.get(other);
	if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
	var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
	stack.set(array, other);
	stack.set(other, array);
	while (++index < arrLength) {
		var arrValue = array[index], othValue = other[index];
		if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
		if (compared !== void 0) {
			if (compared) continue;
			result = false;
			break;
		}
		if (seen) {
			if (!arraySome(other, function(othValue, othIndex) {
				if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
			})) {
				result = false;
				break;
			}
		} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
			result = false;
			break;
		}
	}
	stack["delete"](array);
	stack["delete"](other);
	return result;
}
var COMPARE_PARTIAL_FLAG$5, COMPARE_UNORDERED_FLAG$3;
function init__equalArrays() {
	return (init__equalArrays = __esmMin((() => {
		init__SetCache();
		init__arraySome();
		init__cacheHas();
		COMPARE_PARTIAL_FLAG$5 = 1;
		COMPARE_UNORDERED_FLAG$3 = 2;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapToArray.js
/**
* Converts `map` to its key-value pairs.
*
* @private
* @param {Object} map The map to convert.
* @returns {Array} Returns the key-value pairs.
*/
function mapToArray(map) {
	var index = -1, result = Array(map.size);
	map.forEach(function(value, key) {
		result[++index] = [key, value];
	});
	return result;
}
function init__mapToArray() {
	return (init__mapToArray = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToArray.js
/**
* Converts `set` to an array of its values.
*
* @private
* @param {Object} set The set to convert.
* @returns {Array} Returns the values.
*/
function setToArray(set) {
	var index = -1, result = Array(set.size);
	set.forEach(function(value) {
		result[++index] = value;
	});
	return result;
}
function init__setToArray() {
	return (init__setToArray = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalByTag.js
/**
* A specialized version of `baseIsEqualDeep` for comparing objects of
* the same `toStringTag`.
*
* **Note:** This function only supports comparing values with tags of
* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {string} tag The `toStringTag` of the objects to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	switch (tag) {
		case dataViewTag:
			if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
			object = object.buffer;
			other = other.buffer;
		case arrayBufferTag:
			if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
			return true;
		case boolTag:
		case dateTag:
		case numberTag: return eq(+object, +other);
		case errorTag: return object.name == other.name && object.message == other.message;
		case regexpTag:
		case stringTag: return object == other + "";
		case mapTag$1: var convert = mapToArray;
		case setTag$1:
			var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
			convert || (convert = setToArray);
			if (object.size != other.size && !isPartial) return false;
			var stacked = stack.get(object);
			if (stacked) return stacked == other;
			bitmask |= COMPARE_UNORDERED_FLAG$2;
			stack.set(object, other);
			var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
			stack["delete"](object);
			return result;
		case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
	}
	return false;
}
var COMPARE_PARTIAL_FLAG$4, COMPARE_UNORDERED_FLAG$2, boolTag, dateTag, errorTag, mapTag$1, numberTag, regexpTag, setTag$1, stringTag, symbolTag, arrayBufferTag, dataViewTag, symbolProto, symbolValueOf;
function init__equalByTag() {
	return (init__equalByTag = __esmMin((() => {
		init__Symbol();
		init__Uint8Array();
		init_eq();
		init__equalArrays();
		init__mapToArray();
		init__setToArray();
		COMPARE_PARTIAL_FLAG$4 = 1;
		COMPARE_UNORDERED_FLAG$2 = 2;
		boolTag = "[object Boolean]";
		dateTag = "[object Date]";
		errorTag = "[object Error]";
		mapTag$1 = "[object Map]";
		numberTag = "[object Number]";
		regexpTag = "[object RegExp]";
		setTag$1 = "[object Set]";
		stringTag = "[object String]";
		symbolTag = "[object Symbol]";
		arrayBufferTag = "[object ArrayBuffer]";
		dataViewTag = "[object DataView]";
		symbolProto = Symbol ? Symbol.prototype : void 0;
		symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalObjects.js
/**
* A specialized version of `baseIsEqualDeep` for objects with support for
* partial deep comparisons.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length;
	if (objLength != getAllKeys(other).length && !isPartial) return false;
	var index = objLength;
	while (index--) {
		var key = objProps[index];
		if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) return false;
	}
	var objStacked = stack.get(object);
	var othStacked = stack.get(other);
	if (objStacked && othStacked) return objStacked == other && othStacked == object;
	var result = true;
	stack.set(object, other);
	stack.set(other, object);
	var skipCtor = isPartial;
	while (++index < objLength) {
		key = objProps[index];
		var objValue = object[key], othValue = other[key];
		if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
		if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
			result = false;
			break;
		}
		skipCtor || (skipCtor = key == "constructor");
	}
	if (result && !skipCtor) {
		var objCtor = object.constructor, othCtor = other.constructor;
		if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
	}
	stack["delete"](object);
	stack["delete"](other);
	return result;
}
var COMPARE_PARTIAL_FLAG$3, hasOwnProperty$2;
function init__equalObjects() {
	return (init__equalObjects = __esmMin((() => {
		init__getAllKeys();
		COMPARE_PARTIAL_FLAG$3 = 1;
		hasOwnProperty$2 = Object.prototype.hasOwnProperty;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqualDeep.js
/**
* A specialized version of `baseIsEqual` for arrays and objects which performs
* deep comparisons and tracks traversed objects enabling objects with circular
* references to be compared.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} [stack] Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : _getTag_default(object), othTag = othIsArr ? arrayTag : _getTag_default(other);
	objTag = objTag == argsTag ? objectTag : objTag;
	othTag = othTag == argsTag ? objectTag : othTag;
	var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
	if (isSameTag && isBuffer(object)) {
		if (!isBuffer(other)) return false;
		objIsArr = true;
		objIsObj = false;
	}
	if (isSameTag && !objIsObj) {
		stack || (stack = new Stack());
		return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	}
	if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
		var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
		if (objIsWrapped || othIsWrapped) {
			var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
			stack || (stack = new Stack());
			return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
		}
	}
	if (!isSameTag) return false;
	stack || (stack = new Stack());
	return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var COMPARE_PARTIAL_FLAG$2, argsTag, arrayTag, objectTag, hasOwnProperty$1;
function init__baseIsEqualDeep() {
	return (init__baseIsEqualDeep = __esmMin((() => {
		init__Stack();
		init__equalArrays();
		init__equalByTag();
		init__equalObjects();
		init__getTag();
		init_isArray();
		init_isBuffer();
		init_isTypedArray();
		COMPARE_PARTIAL_FLAG$2 = 1;
		argsTag = "[object Arguments]";
		arrayTag = "[object Array]";
		objectTag = "[object Object]";
		hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqual.js
/**
* The base implementation of `_.isEqual` which supports partial comparisons
* and tracks traversed objects.
*
* @private
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @param {boolean} bitmask The bitmask flags.
*  1 - Unordered comparison
*  2 - Partial comparison
* @param {Function} [customizer] The function to customize comparisons.
* @param {Object} [stack] Tracks traversed `value` and `other` objects.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
*/
function baseIsEqual(value, other, bitmask, customizer, stack) {
	if (value === other) return true;
	if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
	return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function init__baseIsEqual() {
	return (init__baseIsEqual = __esmMin((() => {
		init__baseIsEqualDeep();
		init_isObjectLike();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMatch.js
/**
* The base implementation of `_.isMatch` without support for iteratee shorthands.
*
* @private
* @param {Object} object The object to inspect.
* @param {Object} source The object of property values to match.
* @param {Array} matchData The property names, values, and compare flags to match.
* @param {Function} [customizer] The function to customize comparisons.
* @returns {boolean} Returns `true` if `object` is a match, else `false`.
*/
function baseIsMatch(object, source, matchData, customizer) {
	var index = matchData.length, length = index, noCustomizer = !customizer;
	if (object == null) return !length;
	object = Object(object);
	while (index--) {
		var data = matchData[index];
		if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
	}
	while (++index < length) {
		data = matchData[index];
		var key = data[0], objValue = object[key], srcValue = data[1];
		if (noCustomizer && data[2]) {
			if (objValue === void 0 && !(key in object)) return false;
		} else {
			var stack = new Stack();
			if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
			if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) return false;
		}
	}
	return true;
}
var COMPARE_PARTIAL_FLAG$1, COMPARE_UNORDERED_FLAG$1;
function init__baseIsMatch() {
	return (init__baseIsMatch = __esmMin((() => {
		init__Stack();
		init__baseIsEqual();
		COMPARE_PARTIAL_FLAG$1 = 1;
		COMPARE_UNORDERED_FLAG$1 = 2;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isStrictComparable.js
/**
* Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` if suitable for strict
*  equality comparisons, else `false`.
*/
function isStrictComparable(value) {
	return value === value && !isObject(value);
}
function init__isStrictComparable() {
	return (init__isStrictComparable = __esmMin((() => {
		init_isObject();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMatchData.js
/**
* Gets the property names, values, and compare flags of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the match data of `object`.
*/
function getMatchData(object) {
	var result = keys(object), length = result.length;
	while (length--) {
		var key = result[length], value = object[key];
		result[length] = [
			key,
			value,
			isStrictComparable(value)
		];
	}
	return result;
}
function init__getMatchData() {
	return (init__getMatchData = __esmMin((() => {
		init__isStrictComparable();
		init_keys();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_matchesStrictComparable.js
/**
* A specialized version of `matchesProperty` for source values suitable
* for strict equality comparisons, i.e. `===`.
*
* @private
* @param {string} key The key of the property to get.
* @param {*} srcValue The value to match.
* @returns {Function} Returns the new spec function.
*/
function matchesStrictComparable(key, srcValue) {
	return function(object) {
		if (object == null) return false;
		return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
	};
}
function init__matchesStrictComparable() {
	return (init__matchesStrictComparable = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMatches.js
/**
* The base implementation of `_.matches` which doesn't clone `source`.
*
* @private
* @param {Object} source The object of property values to match.
* @returns {Function} Returns the new spec function.
*/
function baseMatches(source) {
	var matchData = getMatchData(source);
	if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	return function(object) {
		return object === source || baseIsMatch(object, source, matchData);
	};
}
function init__baseMatches() {
	return (init__baseMatches = __esmMin((() => {
		init__baseIsMatch();
		init__getMatchData();
		init__matchesStrictComparable();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseHasIn.js
/**
* The base implementation of `_.hasIn` without support for deep paths.
*
* @private
* @param {Object} [object] The object to query.
* @param {Array|string} key The key to check.
* @returns {boolean} Returns `true` if `key` exists, else `false`.
*/
function baseHasIn(object, key) {
	return object != null && key in Object(object);
}
function init__baseHasIn() {
	return (init__baseHasIn = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hasPath.js
/**
* Checks if `path` exists on `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Array|string} path The path to check.
* @param {Function} hasFunc The function to check properties.
* @returns {boolean} Returns `true` if `path` exists, else `false`.
*/
function hasPath(object, path, hasFunc) {
	path = castPath(path, object);
	var index = -1, length = path.length, result = false;
	while (++index < length) {
		var key = toKey(path[index]);
		if (!(result = object != null && hasFunc(object, key))) break;
		object = object[key];
	}
	if (result || ++index != length) return result;
	length = object == null ? 0 : object.length;
	return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
function init__hasPath() {
	return (init__hasPath = __esmMin((() => {
		init__castPath();
		init_isArguments();
		init_isArray();
		init__isIndex();
		init_isLength();
		init__toKey();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/hasIn.js
/**
* Checks if `path` is a direct or inherited property of `object`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Object
* @param {Object} object The object to query.
* @param {Array|string} path The path to check.
* @returns {boolean} Returns `true` if `path` exists, else `false`.
* @example
*
* var object = _.create({ 'a': _.create({ 'b': 2 }) });
*
* _.hasIn(object, 'a');
* // => true
*
* _.hasIn(object, 'a.b');
* // => true
*
* _.hasIn(object, ['a', 'b']);
* // => true
*
* _.hasIn(object, 'b');
* // => false
*/
function hasIn(object, path) {
	return object != null && hasPath(object, path, baseHasIn);
}
function init_hasIn() {
	return (init_hasIn = __esmMin((() => {
		init__baseHasIn();
		init__hasPath();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMatchesProperty.js
/**
* The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
*
* @private
* @param {string} path The path of the property to get.
* @param {*} srcValue The value to match.
* @returns {Function} Returns the new spec function.
*/
function baseMatchesProperty(path, srcValue) {
	if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
	return function(object) {
		var objValue = get(object, path);
		return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	};
}
var COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG;
function init__baseMatchesProperty() {
	return (init__baseMatchesProperty = __esmMin((() => {
		init__baseIsEqual();
		init_get();
		init_hasIn();
		init__isKey();
		init__isStrictComparable();
		init__matchesStrictComparable();
		init__toKey();
		COMPARE_PARTIAL_FLAG = 1;
		COMPARE_UNORDERED_FLAG = 2;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseProperty.js
/**
* The base implementation of `_.property` without support for deep paths.
*
* @private
* @param {string} key The key of the property to get.
* @returns {Function} Returns the new accessor function.
*/
function baseProperty(key) {
	return function(object) {
		return object == null ? void 0 : object[key];
	};
}
function init__baseProperty() {
	return (init__baseProperty = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_basePropertyDeep.js
/**
* A specialized version of `baseProperty` which supports deep paths.
*
* @private
* @param {Array|string} path The path of the property to get.
* @returns {Function} Returns the new accessor function.
*/
function basePropertyDeep(path) {
	return function(object) {
		return baseGet(object, path);
	};
}
function init__basePropertyDeep() {
	return (init__basePropertyDeep = __esmMin((() => {
		init__baseGet();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/property.js
/**
* Creates a function that returns the value at `path` of a given object.
*
* @static
* @memberOf _
* @since 2.4.0
* @category Util
* @param {Array|string} path The path of the property to get.
* @returns {Function} Returns the new accessor function.
* @example
*
* var objects = [
*   { 'a': { 'b': 2 } },
*   { 'a': { 'b': 1 } }
* ];
*
* _.map(objects, _.property('a.b'));
* // => [2, 1]
*
* _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
* // => [1, 2]
*/
function property(path) {
	return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function init_property() {
	return (init_property = __esmMin((() => {
		init__baseProperty();
		init__basePropertyDeep();
		init__isKey();
		init__toKey();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIteratee.js
/**
* The base implementation of `_.iteratee`.
*
* @private
* @param {*} [value=_.identity] The value to convert to an iteratee.
* @returns {Function} Returns the iteratee.
*/
function baseIteratee(value) {
	if (typeof value == "function") return value;
	if (value == null) return identity;
	if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	return property(value);
}
function init__baseIteratee() {
	return (init__baseIteratee = __esmMin((() => {
		init__baseMatches();
		init__baseMatchesProperty();
		init_identity();
		init_isArray();
		init_property();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createBaseFor.js
/**
* Creates a base function for methods like `_.forIn` and `_.forOwn`.
*
* @private
* @param {boolean} [fromRight] Specify iterating from right to left.
* @returns {Function} Returns the new base function.
*/
function createBaseFor(fromRight) {
	return function(object, iteratee, keysFunc) {
		var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
		while (length--) {
			var key = props[fromRight ? length : ++index];
			if (iteratee(iterable[key], key, iterable) === false) break;
		}
		return object;
	};
}
function init__createBaseFor() {
	return (init__createBaseFor = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFor.js
var baseFor;
function init__baseFor() {
	return (init__baseFor = __esmMin((() => {
		init__createBaseFor();
		baseFor = createBaseFor();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseForOwn.js
/**
* The base implementation of `_.forOwn` without support for iteratee shorthands.
*
* @private
* @param {Object} object The object to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Object} Returns `object`.
*/
function baseForOwn(object, iteratee) {
	return object && baseFor(object, iteratee, keys);
}
function init__baseForOwn() {
	return (init__baseForOwn = __esmMin((() => {
		init__baseFor();
		init_keys();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createBaseEach.js
/**
* Creates a `baseEach` or `baseEachRight` function.
*
* @private
* @param {Function} eachFunc The function to iterate over a collection.
* @param {boolean} [fromRight] Specify iterating from right to left.
* @returns {Function} Returns the new base function.
*/
function createBaseEach(eachFunc, fromRight) {
	return function(collection, iteratee) {
		if (collection == null) return collection;
		if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
		var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
		while (fromRight ? index-- : ++index < length) if (iteratee(iterable[index], index, iterable) === false) break;
		return collection;
	};
}
function init__createBaseEach() {
	return (init__createBaseEach = __esmMin((() => {
		init_isArrayLike();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseEach.js
var baseEach;
function init__baseEach() {
	return (init__baseEach = __esmMin((() => {
		init__baseForOwn();
		init__createBaseEach();
		baseEach = createBaseEach(baseForOwn);
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLikeObject.js
/**
* This method is like `_.isArrayLike` except that it also checks if `value`
* is an object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an array-like object,
*  else `false`.
* @example
*
* _.isArrayLikeObject([1, 2, 3]);
* // => true
*
* _.isArrayLikeObject(document.body.children);
* // => true
*
* _.isArrayLikeObject('abc');
* // => false
*
* _.isArrayLikeObject(_.noop);
* // => false
*/
function isArrayLikeObject(value) {
	return isObjectLike(value) && isArrayLike(value);
}
function init_isArrayLikeObject() {
	return (init_isArrayLikeObject = __esmMin((() => {
		init_isArrayLike();
		init_isObjectLike();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayIncludesWith.js
/**
* This function is like `arrayIncludes` except that it accepts a comparator.
*
* @private
* @param {Array} [array] The array to inspect.
* @param {*} target The value to search for.
* @param {Function} comparator The comparator invoked per element.
* @returns {boolean} Returns `true` if `target` is found, else `false`.
*/
function arrayIncludesWith(array, value, comparator) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (comparator(value, array[index])) return true;
	return false;
}
function init__arrayIncludesWith() {
	return (init__arrayIncludesWith = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_castFunction.js
/**
* Casts `value` to `identity` if it's not a function.
*
* @private
* @param {*} value The value to inspect.
* @returns {Function} Returns cast function.
*/
function castFunction(value) {
	return typeof value == "function" ? value : identity;
}
function init__castFunction() {
	return (init__castFunction = __esmMin((() => {
		init_identity();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/forEach.js
/**
* Iterates over elements of `collection` and invokes `iteratee` for each element.
* The iteratee is invoked with three arguments: (value, index|key, collection).
* Iteratee functions may exit iteration early by explicitly returning `false`.
*
* **Note:** As with other "Collections" methods, objects with a "length"
* property are iterated like arrays. To avoid this behavior use `_.forIn`
* or `_.forOwn` for object iteration.
*
* @static
* @memberOf _
* @since 0.1.0
* @alias each
* @category Collection
* @param {Array|Object} collection The collection to iterate over.
* @param {Function} [iteratee=_.identity] The function invoked per iteration.
* @returns {Array|Object} Returns `collection`.
* @see _.forEachRight
* @example
*
* _.forEach([1, 2], function(value) {
*   console.log(value);
* });
* // => Logs `1` then `2`.
*
* _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
*   console.log(key);
* });
* // => Logs 'a' then 'b' (iteration order is not guaranteed).
*/
function forEach(collection, iteratee) {
	return (isArray(collection) ? arrayEach : baseEach)(collection, castFunction(iteratee));
}
function init_forEach() {
	return (init_forEach = __esmMin((() => {
		init__arrayEach();
		init__baseEach();
		init__castFunction();
		init_isArray();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFilter.js
/**
* The base implementation of `_.filter` without support for iteratee shorthands.
*
* @private
* @param {Array|Object} collection The collection to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {Array} Returns the new filtered array.
*/
function baseFilter(collection, predicate) {
	var result = [];
	baseEach(collection, function(value, index, collection) {
		if (predicate(value, index, collection)) result.push(value);
	});
	return result;
}
function init__baseFilter() {
	return (init__baseFilter = __esmMin((() => {
		init__baseEach();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/filter.js
/**
* Iterates over elements of `collection`, returning an array of all elements
* `predicate` returns truthy for. The predicate is invoked with three
* arguments: (value, index|key, collection).
*
* **Note:** Unlike `_.remove`, this method returns a new array.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Collection
* @param {Array|Object} collection The collection to iterate over.
* @param {Function} [predicate=_.identity] The function invoked per iteration.
* @returns {Array} Returns the new filtered array.
* @see _.reject
* @example
*
* var users = [
*   { 'user': 'barney', 'age': 36, 'active': true },
*   { 'user': 'fred',   'age': 40, 'active': false }
* ];
*
* _.filter(users, function(o) { return !o.active; });
* // => objects for ['fred']
*
* // The `_.matches` iteratee shorthand.
* _.filter(users, { 'age': 36, 'active': true });
* // => objects for ['barney']
*
* // The `_.matchesProperty` iteratee shorthand.
* _.filter(users, ['active', false]);
* // => objects for ['fred']
*
* // The `_.property` iteratee shorthand.
* _.filter(users, 'active');
* // => objects for ['barney']
*
* // Combining several predicates using `_.overEvery` or `_.overSome`.
* _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
* // => objects for ['fred', 'barney']
*/
function filter(collection, predicate) {
	return (isArray(collection) ? arrayFilter : baseFilter)(collection, baseIteratee(predicate, 3));
}
function init_filter() {
	return (init_filter = __esmMin((() => {
		init__arrayFilter();
		init__baseFilter();
		init__baseIteratee();
		init_isArray();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseValues.js
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
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/values.js
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
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isEmpty.js
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
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isUndefined.js
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
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseReduce.js
/**
* The base implementation of `_.reduce` and `_.reduceRight`, without support
* for iteratee shorthands, which iterates over `collection` using `eachFunc`.
*
* @private
* @param {Array|Object} collection The collection to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @param {*} accumulator The initial value.
* @param {boolean} initAccum Specify using the first or last element of
*  `collection` as the initial value.
* @param {Function} eachFunc The function to iterate over `collection`.
* @returns {*} Returns the accumulated value.
*/
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	eachFunc(collection, function(value, index, collection) {
		accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
	});
	return accumulator;
}
function init__baseReduce() {
	return (init__baseReduce = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/reduce.js
/**
* Reduces `collection` to a value which is the accumulated result of running
* each element in `collection` thru `iteratee`, where each successive
* invocation is supplied the return value of the previous. If `accumulator`
* is not given, the first element of `collection` is used as the initial
* value. The iteratee is invoked with four arguments:
* (accumulator, value, index|key, collection).
*
* Many lodash methods are guarded to work as iteratees for methods like
* `_.reduce`, `_.reduceRight`, and `_.transform`.
*
* The guarded methods are:
* `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
* and `sortBy`
*
* @static
* @memberOf _
* @since 0.1.0
* @category Collection
* @param {Array|Object} collection The collection to iterate over.
* @param {Function} [iteratee=_.identity] The function invoked per iteration.
* @param {*} [accumulator] The initial value.
* @returns {*} Returns the accumulated value.
* @see _.reduceRight
* @example
*
* _.reduce([1, 2], function(sum, n) {
*   return sum + n;
* }, 0);
* // => 3
*
* _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
*   (result[value] || (result[value] = [])).push(key);
*   return result;
* }, {});
* // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
*/
function reduce(collection, iteratee, accumulator) {
	var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
	return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}
function init_reduce() {
	return (init_reduce = __esmMin((() => {
		init__arrayReduce();
		init__baseEach();
		init__baseIteratee();
		init__baseReduce();
		init_isArray();
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createSet.js
var createSet;
function init__createSet() {
	return (init__createSet = __esmMin((() => {
		init__Set();
		init_noop();
		init__setToArray();
		createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == 1 / 0) ? noop : function(values) {
			return new Set(values);
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUniq.js
/**
* The base implementation of `_.uniqBy` without support for iteratee shorthands.
*
* @private
* @param {Array} array The array to inspect.
* @param {Function} [iteratee] The iteratee invoked per element.
* @param {Function} [comparator] The comparator invoked per element.
* @returns {Array} Returns the new duplicate free array.
*/
function baseUniq(array, iteratee, comparator) {
	var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
	if (comparator) {
		isCommon = false;
		includes = arrayIncludesWith;
	} else if (length >= LARGE_ARRAY_SIZE) {
		var set = iteratee ? null : createSet(array);
		if (set) return setToArray(set);
		isCommon = false;
		includes = cacheHas;
		seen = new SetCache();
	} else seen = iteratee ? [] : result;
	outer: while (++index < length) {
		var value = array[index], computed = iteratee ? iteratee(value) : value;
		value = comparator || value !== 0 ? value : 0;
		if (isCommon && computed === computed) {
			var seenIndex = seen.length;
			while (seenIndex--) if (seen[seenIndex] === computed) continue outer;
			if (iteratee) seen.push(computed);
			result.push(value);
		} else if (!includes(seen, computed, comparator)) {
			if (seen !== result) seen.push(computed);
			result.push(value);
		}
	}
	return result;
}
var LARGE_ARRAY_SIZE;
function init__baseUniq() {
	return (init__baseUniq = __esmMin((() => {
		init__SetCache();
		init__arrayIncludes();
		init__arrayIncludesWith();
		init__cacheHas();
		init__createSet();
		init__setToArray();
		LARGE_ARRAY_SIZE = 200;
	})))();
}
// ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/union.js
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
// ../../common/temp/node_modules/.pnpm/dagre-d3-es@7.0.14/node_modules/dagre-d3-es/src/graphlib/graph.js
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
// ../../common/temp/node_modules/.pnpm/dagre-d3-es@7.0.14/node_modules/dagre-d3-es/src/graphlib/index.js
function init_graphlib() {
	return (init_graphlib = __esmMin((() => {
		init_graph();
	})))();
}
export { toKey as $, init__arrayMap as $t, hasPath as A, eq as At, getSymbols as B, defineProperty as Bt, init__baseFor as C, isPrototype as Ct, init__baseProperty as D, init__baseRest as Dt, baseProperty as E, baseRest as Et, init__getTag as F, init__baseFindIndex as Ft, init__Stack as G, isFunction as Gt, init_stubArray as H, constant as Ht, getAllKeys as I, arrayEach as It, arrayPush as J, init_isObject as Jt, baseFlatten as K, identity as Kt, init__getAllKeys as L, init__arrayEach as Lt, Uint8Array as M, init__isIndex as Mt, init__Uint8Array as N, isIndex as Nt, hasIn as O, init__overRest as Ot, _getTag_default as P, baseFindIndex as Pt, init__toKey as Q, arrayMap as Qt, baseGetAllKeys as R, init__setToString as Rt, baseFor as S, init__isPrototype as St, init__baseIteratee as T, isArrayLike as Tt, stubArray as U, init_constant as Ut, init__getSymbols as V, init__defineProperty as Vt, Stack as W, init_isFunction as Wt, baseGet as X, init_isArray as Xt, init__arrayPush as Y, isObject as Yt, init__baseGet as Z, isArray as Zt, isArrayLikeObject as _, init__baseUnary as _t, reduce as a, init__baseGetTag as an, keys as at, baseForOwn as b, init_isArguments as bt, init_values as c, init__root as cn, init__overArg as ct, init_filter as d, init__arrayLikeKeys as dt, init_isSymbol as en, castPath as et, forEach as f, init_isTypedArray as ft, init_isArrayLikeObject as g, baseUnary as gt, init__castFunction as h, nodeUtil as ht, init_reduce as i, baseGetTag as in, init_keys as it, init__hasPath as j, init_eq as jt, init_hasIn as k, overRest as kt, values as l, root as ln, overArg as lt, castFunction as m, init__nodeUtil as mt, Graph as n, init_isObjectLike as nn, init_toString as nt, init_isUndefined as o, Symbol as on, baseKeys as ot, init_forEach as p, isTypedArray as pt, init__baseFlatten as q, init_identity as qt, init_graph as r, isObjectLike as rn, toString as rt, isUndefined as s, init__Symbol as sn, init__baseKeys as st, init_graphlib as t, isSymbol as tn, init__castPath as tt, filter as u, arrayLikeKeys as ut, baseEach as v, init_isBuffer as vt, baseIteratee as w, init_isArrayLike as wt, init__baseForOwn as x, isArguments as xt, init__baseEach as y, isBuffer as yt, init__baseGetAllKeys as z, setToString as zt };
