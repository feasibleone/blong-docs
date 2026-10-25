import { n as __esmMin, r as __exportAll, t as __commonJSMin } from "./rolldown-runtime-V4kyJ4NV.js";
//#region ../../common/temp/node_modules/.pnpm/lodash.mergewith@4.6.2/node_modules/lodash.mergewith/index.js
var require_lodash_mergewith = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800;
	var HOT_SPAN = 16;
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	var arrayTag = "[object Array]";
	var asyncTag = "[object AsyncFunction]";
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var errorTag = "[object Error]";
	var funcTag = "[object Function]";
	var genTag = "[object GeneratorFunction]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var nullTag = "[object Null]";
	var objectTag = "[object Object]";
	var proxyTag = "[object Proxy]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var undefinedTag = "[object Undefined]";
	var weakMapTag = "[object WeakMap]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	var float32Tag = "[object Float32Array]";
	var float64Tag = "[object Float64Array]";
	var int8Tag = "[object Int8Array]";
	var int16Tag = "[object Int16Array]";
	var int32Tag = "[object Int32Array]";
	var uint8Tag = "[object Uint8Array]";
	var uint8ClampedTag = "[object Uint8ClampedArray]";
	var uint16Tag = "[object Uint16Array]";
	var uint32Tag = "[object Uint32Array]";
	/**
	* Used to match `RegExp`
	* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	*/
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
	/** Detect free variable `self`. */
	var freeSelf = typeof self == "object" && self && self.Object === Object && self;
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function("return this")();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	/** Used to access faster Node.js helpers. */
	var nodeUtil = function() {
		try {
			var types = freeModule && freeModule.require && freeModule.require("util").types;
			if (types) return types;
			return freeProcess && freeProcess.binding && freeProcess.binding("util");
		} catch (e) {}
	}();
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
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
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root["__core-js_shared__"];
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
	/**
	* Used to resolve the
	* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	* of values.
	*/
	var nativeObjectToString = objectProto.toString;
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	/** Used to detect if a method is native. */
	var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : void 0;
	var Symbol = root.Symbol;
	var Uint8Array = root.Uint8Array;
	var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	var objectCreate = Object.create;
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	var splice = arrayProto.splice;
	var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
	var defineProperty = function() {
		try {
			var func = getNative(Object, "defineProperty");
			func({}, "", {});
			return func;
		} catch (e) {}
	}();
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
	var nativeMax = Math.max;
	var nativeNow = Date.now;
	var Map = getNative(root, "Map");
	var nativeCreate = getNative(Object, "create");
	/**
	* The base implementation of `_.create` without support for assigning
	* properties to the created object.
	*
	* @private
	* @param {Object} proto The object to inherit from.
	* @returns {Object} Returns the new object.
	*/
	var baseCreate = function() {
		function object() {}
		return function(proto) {
			if (!isObject(proto)) return {};
			if (objectCreate) return objectCreate(proto);
			object.prototype = proto;
			var result = new object();
			object.prototype = void 0;
			return result;
		};
	}();
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
			return result === HASH_UNDEFINED ? void 0 : result;
		}
		return hasOwnProperty.call(data, key) ? data[key] : void 0;
	}
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
		return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
	}
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
		data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
		return this;
	}
	Hash.prototype.clear = hashClear;
	Hash.prototype["delete"] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
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
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype["delete"] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
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
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype["delete"] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
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
			if (!Map || pairs.length < 199) {
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
	Stack.prototype.clear = stackClear;
	Stack.prototype["delete"] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
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
		for (var key in value) if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
		return result;
	}
	/**
	* This function is like `assignValue` except that it doesn't assign
	* `undefined` values.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function assignMergeValue(object, key, value) {
		if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	/**
	* Assigns `value` to `key` of `object` if the existing value is not equivalent
	* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* for equality comparisons.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function assignValue(object, key, value) {
		var objValue = object[key];
		if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
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
	/**
	* The base implementation of `assignValue` and `assignMergeValue` without
	* value checks.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function baseAssignValue(object, key, value) {
		if (key == "__proto__" && defineProperty) defineProperty(object, key, {
			"configurable": true,
			"enumerable": true,
			"value": value,
			"writable": true
		});
		else object[key] = value;
	}
	/**
	* The base implementation of `baseForOwn` which iterates over `object`
	* properties returned by `keysFunc` and invokes `iteratee` for each property.
	* Iteratee functions may exit iteration early by explicitly returning `false`.
	*
	* @private
	* @param {Object} object The object to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @param {Function} keysFunc The function to get the keys of `object`.
	* @returns {Object} Returns `object`.
	*/
	var baseFor = createBaseFor();
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
	/**
	* The base implementation of `_.isArguments`.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an `arguments` object,
	*/
	function baseIsArguments(value) {
		return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
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
	/**
	* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function baseKeysIn(object) {
		if (!isObject(object)) return nativeKeysIn(object);
		var isProto = isPrototype(object), result = [];
		for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
		return result;
	}
	/**
	* The base implementation of `_.merge` without support for multiple sources.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @param {number} srcIndex The index of `source`.
	* @param {Function} [customizer] The function to customize merged values.
	* @param {Object} [stack] Tracks traversed source values and their merged
	*  counterparts.
	*/
	function baseMerge(object, source, srcIndex, customizer, stack) {
		if (object === source) return;
		baseFor(source, function(srcValue, key) {
			stack || (stack = new Stack());
			if (isObject(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
			else {
				var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
				if (newValue === void 0) newValue = srcValue;
				assignMergeValue(object, key, newValue);
			}
		}, keysIn);
	}
	/**
	* A specialized version of `baseMerge` for arrays and objects which performs
	* deep merges and tracks traversed objects enabling objects with circular
	* references to be merged.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @param {string} key The key of the value to merge.
	* @param {number} srcIndex The index of `source`.
	* @param {Function} mergeFunc The function to merge values.
	* @param {Function} [customizer] The function to customize assigned values.
	* @param {Object} [stack] Tracks traversed source values and their merged
	*  counterparts.
	*/
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
		var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
		if (stacked) {
			assignMergeValue(object, key, stacked);
			return;
		}
		var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
		var isCommon = newValue === void 0;
		if (isCommon) {
			var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
			newValue = srcValue;
			if (isArr || isBuff || isTyped) {
				if (isArray(objValue)) newValue = objValue;
				else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
				else if (isBuff) {
					isCommon = false;
					newValue = cloneBuffer(srcValue, true);
				} else if (isTyped) {
					isCommon = false;
					newValue = cloneTypedArray(srcValue, true);
				} else newValue = [];
			} else if (isPlainObject(srcValue) || isArguments(srcValue)) {
				newValue = objValue;
				if (isArguments(objValue)) newValue = toPlainObject(objValue);
				else if (!isObject(objValue) || isFunction(objValue)) newValue = initCloneObject(srcValue);
			} else isCommon = false;
		}
		if (isCommon) {
			stack.set(srcValue, newValue);
			mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
			stack["delete"](srcValue);
		}
		assignMergeValue(object, key, newValue);
	}
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
	/**
	* The base implementation of `setToString` without support for hot loop shorting.
	*
	* @private
	* @param {Function} func The function to modify.
	* @param {Function} string The `toString` result.
	* @returns {Function} Returns `func`.
	*/
	var baseSetToString = !defineProperty ? identity : function(func, string) {
		return defineProperty(func, "toString", {
			"configurable": true,
			"enumerable": false,
			"value": constant(string),
			"writable": true
		});
	};
	/**
	* Creates a clone of  `buffer`.
	*
	* @private
	* @param {Buffer} buffer The buffer to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Buffer} Returns the cloned buffer.
	*/
	function cloneBuffer(buffer, isDeep) {
		if (isDeep) return buffer.slice();
		var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
		buffer.copy(result);
		return result;
	}
	/**
	* Creates a clone of `arrayBuffer`.
	*
	* @private
	* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	* @returns {ArrayBuffer} Returns the cloned array buffer.
	*/
	function cloneArrayBuffer(arrayBuffer) {
		var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		new Uint8Array(result).set(new Uint8Array(arrayBuffer));
		return result;
	}
	/**
	* Creates a clone of `typedArray`.
	*
	* @private
	* @param {Object} typedArray The typed array to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the cloned typed array.
	*/
	function cloneTypedArray(typedArray, isDeep) {
		var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
		return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	/**
	* Copies the values of `source` to `array`.
	*
	* @private
	* @param {Array} source The array to copy values from.
	* @param {Array} [array=[]] The array to copy values to.
	* @returns {Array} Returns `array`.
	*/
	function copyArray(source, array) {
		var index = -1, length = source.length;
		array || (array = Array(length));
		while (++index < length) array[index] = source[index];
		return array;
	}
	/**
	* Copies properties of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy properties from.
	* @param {Array} props The property identifiers to copy.
	* @param {Object} [object={}] The object to copy properties to.
	* @param {Function} [customizer] The function to customize copied values.
	* @returns {Object} Returns `object`.
	*/
	function copyObject(source, props, object, customizer) {
		var isNew = !object;
		object || (object = {});
		var index = -1, length = props.length;
		while (++index < length) {
			var key = props[index];
			var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
			if (newValue === void 0) newValue = source[key];
			if (isNew) baseAssignValue(object, key, newValue);
			else assignValue(object, key, newValue);
		}
		return object;
	}
	/**
	* Creates a function like `_.assign`.
	*
	* @private
	* @param {Function} assigner The function to assign values.
	* @returns {Function} Returns the new assigner function.
	*/
	function createAssigner(assigner) {
		return baseRest(function(object, sources) {
			var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
			customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
			if (guard && isIterateeCall(sources[0], sources[1], guard)) {
				customizer = length < 3 ? void 0 : customizer;
				length = 1;
			}
			object = Object(object);
			while (++index < length) {
				var source = sources[index];
				if (source) assigner(object, source, index, customizer);
			}
			return object;
		});
	}
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
	/**
	* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the raw `toStringTag`.
	*/
	function getRawTag(value) {
		var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
		try {
			value[symToStringTag] = void 0;
			var unmasked = true;
		} catch (e) {}
		var result = nativeObjectToString.call(value);
		if (unmasked) {
			if (isOwn) value[symToStringTag] = tag;
			else delete value[symToStringTag];
		}
		return result;
	}
	/**
	* Initializes an object clone.
	*
	* @private
	* @param {Object} object The object to clone.
	* @returns {Object} Returns the initialized clone.
	*/
	function initCloneObject(object) {
		return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
	}
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
		length = length == null ? MAX_SAFE_INTEGER : length;
		return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	/**
	* Checks if the given arguments are from an iteratee call.
	*
	* @private
	* @param {*} value The potential iteratee value argument.
	* @param {*} index The potential iteratee index or key argument.
	* @param {*} object The potential iteratee object argument.
	* @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	*  else `false`.
	*/
	function isIterateeCall(value, index, object) {
		if (!isObject(object)) return false;
		var type = typeof index;
		if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
		return false;
	}
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
	/**
	* Checks if `value` is likely a prototype object.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	*/
	function isPrototype(value) {
		var Ctor = value && value.constructor;
		return value === (typeof Ctor == "function" && Ctor.prototype || objectProto);
	}
	/**
	* This function is like
	* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	* except that it includes inherited enumerable properties.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function nativeKeysIn(object) {
		var result = [];
		if (object != null) for (var key in Object(object)) result.push(key);
		return result;
	}
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
	/**
	* Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	*
	* @private
	* @param {Object} object The object to query.
	* @param {string} key The key of the property to get.
	* @returns {*} Returns the property value.
	*/
	function safeGet(object, key) {
		if (key === "constructor" && typeof object[key] === "function") return;
		if (key == "__proto__") return;
		return object[key];
	}
	/**
	* Sets the `toString` method of `func` to return `string`.
	*
	* @private
	* @param {Function} func The function to modify.
	* @param {Function} string The `toString` result.
	* @returns {Function} Returns `func`.
	*/
	var setToString = shortOut(baseSetToString);
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
				return funcToString.call(func);
			} catch (e) {}
			try {
				return func + "";
			} catch (e) {}
		}
		return "";
	}
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
	/**
	* Checks if `value` is likely an `arguments` object.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an `arguments` object,
	*  else `false`.
	* @example
	*
	* _.isArguments(function() { return arguments; }());
	* // => true
	*
	* _.isArguments([1, 2, 3]);
	* // => false
	*/
	var isArguments = baseIsArguments(function() {
		return arguments;
	}()) ? baseIsArguments : function(value) {
		return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
	};
	/**
	* Checks if `value` is classified as an `Array` object.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an array, else `false`.
	* @example
	*
	* _.isArray([1, 2, 3]);
	* // => true
	*
	* _.isArray(document.body.children);
	* // => false
	*
	* _.isArray('abc');
	* // => false
	*
	* _.isArray(_.noop);
	* // => false
	*/
	var isArray = Array.isArray;
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
	/**
	* Checks if `value` is a buffer.
	*
	* @static
	* @memberOf _
	* @since 4.3.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	* @example
	*
	* _.isBuffer(new Buffer(2));
	* // => true
	*
	* _.isBuffer(new Uint8Array(2));
	* // => false
	*/
	var isBuffer = nativeIsBuffer || stubFalse;
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
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
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
	/**
	* Checks if `value` is a plain object, that is, an object created by the
	* `Object` constructor or one with a `[[Prototype]]` of `null`.
	*
	* @static
	* @memberOf _
	* @since 0.8.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	* }
	*
	* _.isPlainObject(new Foo);
	* // => false
	*
	* _.isPlainObject([1, 2, 3]);
	* // => false
	*
	* _.isPlainObject({ 'x': 0, 'y': 0 });
	* // => true
	*
	* _.isPlainObject(Object.create(null));
	* // => true
	*/
	function isPlainObject(value) {
		if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
		var proto = getPrototype(value);
		if (proto === null) return true;
		var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
		return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}
	/**
	* Checks if `value` is classified as a typed array.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	* @example
	*
	* _.isTypedArray(new Uint8Array);
	* // => true
	*
	* _.isTypedArray([]);
	* // => false
	*/
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	/**
	* Converts `value` to a plain object flattening inherited enumerable string
	* keyed properties of `value` to own properties of the plain object.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {Object} Returns the converted plain object.
	* @example
	*
	* function Foo() {
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.assign({ 'a': 1 }, new Foo);
	* // => { 'a': 1, 'b': 2 }
	*
	* _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	* // => { 'a': 1, 'b': 2, 'c': 3 }
	*/
	function toPlainObject(value) {
		return copyObject(value, keysIn(value));
	}
	/**
	* Creates an array of the own and inherited enumerable property names of `object`.
	*
	* **Note:** Non-object values are coerced to objects.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
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
	* _.keysIn(new Foo);
	* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	*/
	function keysIn(object) {
		return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	/**
	* This method is like `_.merge` except that it accepts `customizer` which
	* is invoked to produce the merged values of the destination and source
	* properties. If `customizer` returns `undefined`, merging is handled by the
	* method instead. The `customizer` is invoked with six arguments:
	* (objValue, srcValue, key, object, source, stack).
	*
	* **Note:** This method mutates `object`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Object
	* @param {Object} object The destination object.
	* @param {...Object} sources The source objects.
	* @param {Function} customizer The function to customize assigned values.
	* @returns {Object} Returns `object`.
	* @example
	*
	* function customizer(objValue, srcValue) {
	*   if (_.isArray(objValue)) {
	*     return objValue.concat(srcValue);
	*   }
	* }
	*
	* var object = { 'a': [1], 'b': [2] };
	* var other = { 'a': [3], 'b': [4] };
	*
	* _.mergeWith(object, other, customizer);
	* // => { 'a': [1, 3], 'b': [2, 4] }
	*/
	var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
		baseMerge(object, source, srcIndex, customizer);
	});
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
	module.exports = mergeWith;
}));
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ut-function.equals@1.1.3/node_modules/ut-function.equals/index.js
var require_ut_function_equals = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function equals(x, y) {
		if (typeof x !== typeof y) return false;
		if (typeof x === "object" && x !== null && y !== null) {
			const xProps = Object.getOwnPropertyNames(x);
			const yProps = Object.getOwnPropertyNames(y);
			if (xProps.length !== yProps.length) return false;
			for (let i = 0, n = xProps.length; i < n; i += 1) {
				const prop = xProps[i];
				if (!equals(x[prop], y[prop])) return false;
			}
			return true;
		}
		return x === y;
	};
}));
//#endregion
//#region ../../common/temp/node_modules/.pnpm/ut-function.merge@1.5.6/node_modules/ut-function.merge/index.js
var require_ut_function_merge = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var mergeWith = require_lodash_mergewith();
	var equals = require_ut_function_equals();
	var mergeHandlers = {
		combine(targetVal, sourceVal) {
			return targetVal.concat(sourceVal).filter((value, index, arr) => {
				return value && arr.findIndex((x) => equals(x, value)) === index;
			});
		},
		override(targetVal, sourceVal) {
			return sourceVal;
		},
		index() {}
	};
	var merge = (objects, { mergeStrategies = {}, convert = false } = {}) => {
		const stack = [];
		const keepStack = typeof mergeStrategies === "object" && Object.keys(mergeStrategies).length > 0;
		const getMergeHandler = (fallbackStrategy) => {
			if (!keepStack) return mergeHandlers[fallbackStrategy];
			const mergeStrategy = mergeStrategies[stack[stack.length - 1].path.join(".")];
			switch (typeof mergeStrategy) {
				case "function": return mergeStrategy;
				case "string": return mergeHandlers[mergeStrategy] || mergeHandlers[fallbackStrategy];
				default: return mergeHandlers[fallbackStrategy];
			}
		};
		return mergeWith(...objects, (targetVal, sourceVal, key, target, source) => {
			if (keepStack) while (true) {
				if (!stack.length) stack.push({
					source,
					path: []
				});
				const prev = stack[stack.length - 1];
				if (source === prev.source) {
					stack.push({
						source: sourceVal,
						path: prev.path.concat(key)
					});
					break;
				}
				stack.pop();
			}
			if (Array.isArray(targetVal) && sourceVal) {
				if (Array.isArray(sourceVal)) return getMergeHandler("override")(targetVal, sourceVal);
				if (sourceVal instanceof Set) return getMergeHandler("combine")(targetVal, Array.from(sourceVal));
			}
			if (convert && typeof sourceVal === "string") switch (sourceVal) {
				case "true": return true;
				case "false": return false;
				case "null": return null;
				default: {
					const float = parseFloat(sourceVal);
					if (!isNaN(float) && float + "" === sourceVal) return float;
				}
			}
		});
	};
	module.exports = (objects, options, ...rest) => {
		if (Array.isArray(objects) && !Array.isArray(options)) return merge(objects, options);
		return merge([
			objects,
			options,
			...rest
		]);
	};
}));
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/memory/metrics.mjs
var Metrics;
function init_metrics() {
	return (init_metrics = __esmMin((() => {
		Metrics = {
			assign: 0,
			create: 0,
			clone: 0,
			discard: 0,
			update: 0
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/memory/assign.mjs
/**
* Performs an Object assign using the Left and Right object types. We track this operation as it
* creates a new GC handle per assignment.
*/
function Assign(left, right) {
	Metrics.assign += 1;
	return {
		...left,
		...right
	};
}
function init_assign() {
	return (init_assign = __esmMin((() => {
		init_metrics();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/guard/string.mjs
function IsBetween(value, min, max) {
	return value >= min && value <= max;
}
function IsRegionalIndicator(value) {
	return IsBetween(value, 127462, 127487);
}
function IsVariationSelector(value) {
	return IsBetween(value, 65024, 65039);
}
function IsCombiningMark(value) {
	return IsBetween(value, 768, 879) || IsBetween(value, 6832, 6911) || IsBetween(value, 7616, 7679) || IsBetween(value, 65056, 65071);
}
function CodePointLength(value) {
	return value > 65535 ? 2 : 1;
}
function ConsumeModifiers(value, index) {
	while (index < value.length) {
		const point = value.codePointAt(index);
		if (IsCombiningMark(point) || IsVariationSelector(point)) index += CodePointLength(point);
		else break;
	}
	return index;
}
function NextGraphemeClusterIndex(value, clusterStart) {
	const startCP = value.codePointAt(clusterStart);
	let clusterEnd = clusterStart + CodePointLength(startCP);
	clusterEnd = ConsumeModifiers(value, clusterEnd);
	while (clusterEnd < value.length - 1 && value[clusterEnd] === "‍") {
		const nextCP = value.codePointAt(clusterEnd + 1);
		clusterEnd += 1 + CodePointLength(nextCP);
		clusterEnd = ConsumeModifiers(value, clusterEnd);
	}
	if (IsRegionalIndicator(startCP) && clusterEnd < value.length && IsRegionalIndicator(value.codePointAt(clusterEnd))) clusterEnd += CodePointLength(value.codePointAt(clusterEnd));
	return clusterEnd;
}
function IsGraphemeCodePoint(value) {
	return IsBetween(value, 55296, 56319) || IsBetween(value, 768, 879) || value === 8205;
}
/** Checks if a string has at least a minimum number of grapheme clusters */
function IsMinLength$1(value, minLength) {
	if (minLength === 0) return true;
	let count = 0;
	let index = 0;
	while (index < value.length) {
		index = NextGraphemeClusterIndex(value, index);
		count++;
		if (count >= minLength) return true;
	}
	return false;
}
/** Checks if a string has at most a maximum number of grapheme clusters */
function IsMaxLength$1(value, maxLength) {
	let count = 0;
	let index = 0;
	while (index < value.length) {
		index = NextGraphemeClusterIndex(value, index);
		count++;
		if (count > maxLength) return false;
	}
	return true;
}
/** Fast check for minimum grapheme length, falls back to full check if needed */
function IsMinLengthFast(value, minLength) {
	if (minLength === 0) return true;
	let index = 0;
	while (index < value.length) {
		if (IsGraphemeCodePoint(value.charCodeAt(index))) return IsMinLength$1(value, minLength);
		index++;
		if (index >= minLength) return true;
	}
	return false;
}
/** Fast check for maximum grapheme length, falls back to full check if needed */
function IsMaxLengthFast(value, maxLength) {
	let index = 0;
	while (index < value.length) {
		if (IsGraphemeCodePoint(value.charCodeAt(index))) return IsMaxLength$1(value, maxLength);
		index++;
		if (index > maxLength) return false;
	}
	return true;
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/guard/guard.mjs
/** Returns true if this value is an array */
function IsArray$1(value) {
	return Array.isArray(value);
}
/** Returns true if this value is an async iterator */
function IsAsyncIterator$1(value) {
	return IsObject$1(value) && Symbol.asyncIterator in value;
}
/** Returns true if this value is bigint */
function IsBigInt$1(value) {
	return IsEqual(typeof value, "bigint");
}
/** Returns true if this value is a boolean */
function IsBoolean$2(value) {
	return IsEqual(typeof value, "boolean");
}
/** Returns true if this value is a constructor */
function IsConstructor$1(value) {
	if (IsUndefined$1(value) || !IsFunction$1(value)) return false;
	const result = Function.prototype.toString.call(value);
	if (/^class\s/.test(result)) return true;
	if (/\[native code\]/.test(result)) return true;
	return false;
}
/** Returns true if this value is a function */
function IsFunction$1(value) {
	return IsEqual(typeof value, "function");
}
/** Returns true if this value is integer */
function IsInteger$1(value) {
	return Number.isInteger(value);
}
/** Returns true if this value is an iterator */
function IsIterator$1(value) {
	return IsObject$1(value) && Symbol.iterator in value;
}
/** Returns true if this value is null */
function IsNull$1(value) {
	return IsEqual(value, null);
}
/** Returns true if this value is number */
function IsNumber$2(value) {
	return Number.isFinite(value);
}
/** Returns true if this value is an object but not an array */
function IsObjectNotArray(value) {
	return IsObject$1(value) && !IsArray$1(value);
}
/** Returns true if this value is an object */
function IsObject$1(value) {
	return IsEqual(typeof value, "object") && !IsNull$1(value);
}
/** Returns true if this value is string */
function IsString$2(value) {
	return IsEqual(typeof value, "string");
}
/** Returns true if this value is symbol */
function IsSymbol$1(value) {
	return IsEqual(typeof value, "symbol");
}
/** Returns true if this value is undefined */
function IsUndefined$1(value) {
	return IsEqual(value, void 0);
}
function IsEqual(left, right) {
	return left === right;
}
function IsGreaterThan(left, right) {
	return left > right;
}
function IsLessThan(left, right) {
	return left < right;
}
function IsLessEqualThan(left, right) {
	return left <= right;
}
function IsGreaterEqualThan(left, right) {
	return left >= right;
}
function IsMultipleOf(dividend, divisor) {
	if (IsBigInt$1(dividend) || IsBigInt$1(divisor)) return BigInt(dividend) % BigInt(divisor) === 0n;
	const tolerance = 1e-10;
	if (!IsNumber$2(dividend)) return true;
	if (IsInteger$1(dividend) && 1 / divisor % 1 === 0) return true;
	const mod = dividend % divisor;
	return Math.min(Math.abs(mod), Math.abs(mod - divisor)) < tolerance;
}
/** Returns true if the value appears to be an instance of a class. */
function IsClassInstance(value) {
	if (!IsObject$1(value)) return false;
	const proto = globalThis.Object.getPrototypeOf(value);
	if (IsNull$1(proto)) return false;
	return IsEqual(typeof proto.constructor, "function") && !(IsEqual(proto.constructor, globalThis.Object) || IsEqual(proto.constructor.name, "Object"));
}
function IsValueLike(value) {
	return IsBigInt$1(value) || IsBoolean$2(value) || IsNull$1(value) || IsNumber$2(value) || IsString$2(value) || IsUndefined$1(value);
}
/** Returns true if the string has at most the given number of graphemes */
function IsMaxLength(value, length) {
	return IsMaxLengthFast(value, length);
}
/** Returns true if the string has at least the given number of graphemes */
function IsMinLength(value, length) {
	return IsMinLengthFast(value, length);
}
function Every(value, offset, callback) {
	for (let index = offset; index < value.length; index++) if (!callback(value[index], index)) return false;
	return true;
}
function EveryAll(value, offset, callback) {
	let result = true;
	for (let index = offset; index < value.length; index++) if (!callback(value[index], index)) result = false;
	return result;
}
/** Returns true if this value has this property key */
function HasPropertyKey(value, key) {
	return IsEqual(key, "__proto__") || IsEqual(key, "constructor") ? Object.prototype.hasOwnProperty.call(value, key) : key in value;
}
/** Returns object entries as `[RegExp, Value][]` */
function EntriesRegExp(value) {
	return Keys(value).map((key) => [new RegExp(`^${key}$`), value[key]]);
}
/** Returns object entries as `[string, Value][]` */
function Entries(value) {
	return Object.entries(value);
}
/** Returns the property keys for this object via `Object.getOwnPropertyKeys({ ... })` */
function Keys(value) {
	return Object.getOwnPropertyNames(value);
}
/** Returns the property keys for this object via `Object.getOwnPropertyKeys({ ... })` */
function Symbols(value) {
	return Object.getOwnPropertySymbols(value);
}
/** Returns the property values for the given object via `Object.values()` */
function Values(value) {
	return Object.values(value);
}
function DeepEqualObject(left, right) {
	if (!IsObject$1(right)) return false;
	const keys = Keys(left);
	return IsEqual(keys.length, Keys(right).length) && keys.every((key) => IsDeepEqual(left[key], right[key]));
}
function DeepEqualArray(left, right) {
	return IsArray$1(right) && IsEqual(left.length, right.length) && left.every((_, index) => IsDeepEqual(left[index], right[index]));
}
/** Tests values for deep equality */
function IsDeepEqual(left, right) {
	return IsArray$1(left) ? DeepEqualArray(left, right) : IsObject$1(left) ? DeepEqualObject(left, right) : IsEqual(left, right);
}
function init_guard() {
	return (init_guard = __esmMin((() => {})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/guard/globals.mjs
function IsBoolean$1(value) {
	return value instanceof Boolean;
}
function IsNumber$1(value) {
	return value instanceof Number;
}
function IsString$1(value) {
	return value instanceof String;
}
function IsTypeArray(value) {
	return globalThis.ArrayBuffer.isView(value);
}
/** Returns true if the value is a RegExp */
function IsRegExp(value) {
	return value instanceof globalThis.RegExp;
}
/** Returns true if the value is a Date */
function IsDate(value) {
	return value instanceof globalThis.Date;
}
/** Returns true if the value is a Set */
function IsSet(value) {
	return value instanceof globalThis.Set;
}
/** Returns true if the value is a Map */
function IsMap(value) {
	return value instanceof globalThis.Map;
}
function init_globals() {
	return (init_globals = __esmMin((() => {})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/memory/clone.mjs
function IsGuard(value) {
	return IsObject$1(value) && HasPropertyKey(value, "~guard");
}
function FromGuard(value) {
	return value;
}
function FromArray$4(value) {
	return value.map((value) => FromValue$1(value));
}
function FromObject$7(value) {
	const result = {};
	const descriptors = Object.getOwnPropertyDescriptors(value);
	for (const key of Object.keys(descriptors)) {
		const descriptor = descriptors[key];
		if (HasPropertyKey(descriptor, "value")) Object.defineProperty(result, key, {
			...descriptor,
			value: FromValue$1(descriptor.value)
		});
	}
	return result;
}
function FromRegExp$1(value) {
	return new RegExp(value.source, value.flags);
}
function FromUnknown(value) {
	return value;
}
function FromValue$1(value) {
	return value instanceof RegExp ? FromRegExp$1(value) : IsGuard(value) ? FromGuard(value) : IsArray$1(value) ? FromArray$4(value) : IsObject$1(value) ? FromObject$7(value) : FromUnknown(value);
}
/**
* Clones a value using the TypeBox type cloning strategy. This function preserves non-enumerable
* properties from the source value. This is to ensure cloned types retain discriminable
* hidden properties.
*/
function Clone(value) {
	Metrics.clone += 1;
	return FromValue$1(value);
}
function init_clone() {
	return (init_clone = __esmMin((() => {
		init_guard();
		init_metrics();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/settings/settings.mjs
/** Gets current system settings */
function Get() {
	return settings;
}
var settings;
function init_settings() {
	return (init_settings = __esmMin((() => {
		settings = {
			immutableTypes: false,
			maxErrors: 8,
			useAcceleration: true,
			exactOptionalPropertyTypes: false,
			enumerableKind: false,
			correctiveParse: false
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/memory/create.mjs
function MergeHidden(left, right, configuration = {}) {
	for (const key of Object.keys(right)) Object.defineProperty(left, key, {
		configurable: true,
		writable: true,
		enumerable: false,
		value: right[key]
	});
	return left;
}
function Merge(left, right) {
	return {
		...left,
		...right
	};
}
/**
* Creates an object with hidden, enumerable, and optional property sets. This function
* ensures types are instantiated according to configuration rules for enumerable and
* non-enumerable properties.
*/
function Create(hidden, enumerable, options = {}) {
	Metrics.create += 1;
	const settings = Get();
	const withOptions = Merge(enumerable, options);
	const withHidden = settings.enumerableKind ? Merge(withOptions, hidden) : MergeHidden(withOptions, hidden);
	return settings.immutableTypes ? Object.freeze(withHidden) : withHidden;
}
function init_create() {
	return (init_create = __esmMin((() => {
		init_settings();
		init_metrics();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/memory/discard.mjs
/** Discards multiple property keys from the given object value */
function Discard(value, propertyKeys) {
	Metrics.discard += 1;
	const result = {};
	const descriptors = Object.getOwnPropertyDescriptors(Clone(value));
	const keysToDiscard = new Set(propertyKeys);
	for (const key of Object.keys(descriptors)) {
		if (keysToDiscard.has(key)) continue;
		Object.defineProperty(result, key, descriptors[key]);
	}
	return result;
}
function init_discard() {
	return (init_discard = __esmMin((() => {
		init_metrics();
		init_clone();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/memory/update.mjs
/**
* Updates a value with new properties while preserving property enumerability. Use this function to modify
* existing types without altering their configuration.
*/
function Update(current, hidden, enumerable) {
	Metrics.update += 1;
	const settings = Get();
	const result = Clone(current);
	for (const key of Object.keys(hidden)) Object.defineProperty(result, key, {
		configurable: true,
		writable: true,
		enumerable: settings.enumerableKind,
		value: hidden[key]
	});
	for (const key of Object.keys(enumerable)) Object.defineProperty(result, key, {
		configurable: true,
		enumerable: true,
		writable: true,
		value: enumerable[key]
	});
	return result;
}
function init_update() {
	return (init_update = __esmMin((() => {
		init_settings();
		init_metrics();
		init_clone();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/schema.mjs
function IsKind(value, kind) {
	return IsObject$1(value) && HasPropertyKey(value, "~kind") && IsEqual(value["~kind"], kind);
}
function IsSchema(value) {
	return IsObject$1(value);
}
function init_schema() {
	return (init_schema = __esmMin((() => {
		init_guard();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/_optional.mjs
/** Creates an OptionalAddAction. */
function OptionalAddAction(type) {
	return Create({ ["~kind"]: "OptionalAddAction" }, { type }, {});
}
/** Returns true if this value is a OptionalAddAction. */
function IsOptionalAddAction(value) {
	return IsObject$1(value) && HasPropertyKey(value, "~kind") && HasPropertyKey(value, "type") && IsEqual(value["~kind"], "OptionalAddAction") && IsSchema(value.type);
}
/** Creates a OptionalRemoveAction. */
function OptionalRemoveAction(type) {
	return Create({ ["~kind"]: "OptionalRemoveAction" }, { type }, {});
}
/** Returns true if this value is a OptionalRemoveAction. */
function IsOptionalRemoveAction(value) {
	return IsObject$1(value) && HasPropertyKey(value, "~kind") && HasPropertyKey(value, "type") && IsEqual(value["~kind"], "OptionalRemoveAction") && IsSchema(value.type);
}
function init__optional() {
	return (init__optional = __esmMin((() => {
		init_create();
		init_guard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/_readonly.mjs
/** Creates a ReadonlyAddAction. */
function ReadonlyAddAction(type) {
	return Create({ ["~kind"]: "ReadonlyAddAction" }, { type }, {});
}
/** Returns true if this value is a ReadonlyAddAction. */
function IsReadonlyAddAction(value) {
	return IsObject$1(value) && HasPropertyKey(value, "~kind") && HasPropertyKey(value, "type") && IsEqual(value["~kind"], "ReadonlyAddAction") && IsSchema(value.type);
}
/** Creates a ReadonlyRemoveAction. */
function ReadonlyRemoveAction(type) {
	return Create({ ["~kind"]: "ReadonlyRemoveAction" }, { type }, {});
}
/** Returns true if this value is a ReadonlyRemoveAction. */
function IsReadonlyRemoveAction(value) {
	return IsObject$1(value) && HasPropertyKey(value, "~kind") && HasPropertyKey(value, "type") && IsEqual(value["~kind"], "ReadonlyRemoveAction") && IsSchema(value.type);
}
function init__readonly() {
	return (init__readonly = __esmMin((() => {
		init_create();
		init_guard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/deferred.mjs
/** Creates a Deferred action. */
function Deferred(action, parameters, options) {
	return Create({ "~kind": "Deferred" }, {
		action,
		parameters,
		options
	}, {});
}
/** Returns true if the given value is a TDeferred. */
function IsDeferred(value) {
	return IsKind(value, "Deferred");
}
function init_deferred() {
	return (init_deferred = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/_immutable.mjs
/** Adds Immutable to the given type. */
function ImmutableAdd(type) {
	return Update(type, { "~immutable": true }, {});
}
/** Applies an Immutable modifier to the given type. */
function Immutable(type) {
	return ImmutableAdd(type);
}
/** Returns true if the given value is a TImmutable */
function IsImmutable(value) {
	return IsSchema(value) && HasPropertyKey(value, "~immutable");
}
function init__immutable() {
	return (init__immutable = __esmMin((() => {
		init_update();
		init_guard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/_optional.mjs
/** Removes Optional from the given type. */
function OptionalRemove(type) {
	return Discard(type, ["~optional"]);
}
/** Adds Optional to the given type. */
function OptionalAdd(type) {
	return Update(type, { "~optional": true }, {});
}
/** Applies an Optional modifier to the given type. */
function Optional$2(type) {
	return OptionalAdd(type);
}
/** Returns true if the given value is TOptional */
function IsOptional(value) {
	return IsSchema(value) && HasPropertyKey(value, "~optional");
}
function init__optional$1() {
	return (init__optional$1 = __esmMin((() => {
		init_guard();
		init_discard(), init_update();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/_readonly.mjs
/** Removes a Readonly property modifier from the given type. */
function ReadonlyRemove(type) {
	return Discard(type, ["~readonly"]);
}
/** Adds a Readonly property modifier to the given type. */
function ReadonlyAdd(type) {
	return Update(type, { "~readonly": true }, {});
}
/** Applies an Readonly property modifier to the given type. */
function Readonly$1(type) {
	return ReadonlyAdd(type);
}
/** Returns true if the given value is a TReadonly */
function IsReadonly(value) {
	return IsSchema(value) && HasPropertyKey(value, "~readonly");
}
function init__readonly$1() {
	return (init__readonly$1 = __esmMin((() => {
		init_discard(), init_update();
		init_guard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/array.mjs
/** Creates an Array type. */
function Array$1(items, options) {
	return Create({ "~kind": "Array" }, {
		type: "array",
		items
	}, options);
}
/** Returns true if the given value is a TArray. */
function IsArray(value) {
	return IsKind(value, "Array");
}
/** Extracts options from a TArray. */
function ArrayOptions(type) {
	return Discard(type, [
		"~kind",
		"type",
		"items"
	]);
}
function init_array() {
	return (init_array = __esmMin((() => {
		init_create(), init_discard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/async-iterator.mjs
/** Creates a AsyncIterator type. */
function AsyncIterator(iteratorItems, options) {
	return Create({ "~kind": "AsyncIterator" }, {
		type: "asyncIterator",
		iteratorItems
	}, options);
}
/** Returns true if the given value is a TAsyncIterator */
function IsAsyncIterator(value) {
	return IsKind(value, "AsyncIterator");
}
/** Extracts options from a TAsyncIterator. */
function AsyncIteratorOptions(type) {
	return Discard(type, [
		"~kind",
		"type",
		"iteratorItems"
	]);
}
function init_async_iterator() {
	return (init_async_iterator = __esmMin((() => {
		init_create(), init_discard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/base.mjs
function BaseProperty(value) {
	return {
		enumerable: Get().enumerableKind,
		writable: false,
		configurable: false,
		value
	};
}
/** Returns true if the given value is a Base type. */
function IsBase(value) {
	return IsKind(value, "Base");
}
var Base$1;
function init_base() {
	return (init_base = __esmMin((() => {
		init_settings();
		init_schema();
		Base$1 = class {
			constructor() {
				globalThis.Object.defineProperty(this, "~kind", BaseProperty("Base"));
				globalThis.Object.defineProperty(this, "~guard", BaseProperty({
					check: (value) => this.Check(value),
					errors: (value) => this.Errors(value)
				}));
			}
			/** Checks a value or returns false if invalid */
			Check(value) {
				return true;
			}
			/** Returns errors for a value. Return an empty array if valid.  */
			Errors(value) {
				return [];
			}
			/** Converts a value into this type */
			Convert(value) {
				return value;
			}
			/** Cleans a value according to this type */
			Clean(value) {
				return value;
			}
			/** Returns a default value for this type */
			Default(value) {
				return value;
			}
			/** Creates a new instance of this type */
			Create() {
				throw new Error("Create not implemented");
			}
			/** Clones this type  */
			Clone() {
				throw Error("Clone not implemented");
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/constructor.mjs
/** Creates a Constructor type. */
function Constructor$1(parameters, instanceType, options = {}) {
	return Create({ "~kind": "Constructor" }, {
		type: "constructor",
		parameters,
		instanceType
	}, options);
}
/** Returns true if the given value is a TConstructor. */
function IsConstructor(value) {
	return IsKind(value, "Constructor");
}
/** Extracts options from a TConstructor. */
function ConstructorOptions(type) {
	return Discard(type, [
		"~kind",
		"type",
		"parameters",
		"instanceType"
	]);
}
function init_constructor() {
	return (init_constructor = __esmMin((() => {
		init_create(), init_discard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/function.mjs
/** Creates a Function type. */
function _Function_$1(parameters, returnType, options = {}) {
	return Create({ ["~kind"]: "Function" }, {
		type: "function",
		parameters,
		returnType
	}, options);
}
/** Returns true if the given value is TFunction. */
function IsFunction(value) {
	return IsKind(value, "Function");
}
/** Extracts options from a TFunction. */
function FunctionOptions(type) {
	return Discard(type, [
		"~kind",
		"type",
		"parameters",
		"returnType"
	]);
}
function init_function() {
	return (init_function = __esmMin((() => {
		init_create(), init_discard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/ref.mjs
/** Creates a Ref type. */
function Ref(ref, options) {
	return Create({ ["~kind"]: "Ref" }, { $ref: ref }, options);
}
/** Returns true if the given value is TRef. */
function IsRef(value) {
	return IsKind(value, "Ref");
}
function init_ref() {
	return (init_ref = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/generic.mjs
/** Creates a Generic type. */
function Generic(parameters, expression) {
	return Create({ "~kind": "Generic" }, {
		type: "generic",
		parameters,
		expression
	});
}
/** Returns true if the given value is a TGeneric. */
function IsGeneric(value) {
	return IsKind(value, "Generic");
}
function init_generic() {
	return (init_generic = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/any.mjs
/** Creates a Any type. */
function Any(options) {
	return Create({ ["~kind"]: "Any" }, {}, options);
}
/** Returns true if the given value is a TAny. */
function IsAny(value) {
	return IsKind(value, "Any");
}
function init_any() {
	return (init_any = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/never.mjs
/** Creates a Never type. */
function Never(options) {
	return Create({ "~kind": "Never" }, { not: {} }, options);
}
/** Returns true if the given value is TNever. */
function IsNever(value) {
	return IsKind(value, "Never");
}
var NeverPattern;
function init_never() {
	return (init_never = __esmMin((() => {
		init_create();
		init_schema();
		NeverPattern = "(?!)";
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/properties.mjs
/** Creates a RequiredArray derived from the given TProperties value. */
function RequiredArray(properties) {
	return Keys(properties).filter((key) => !IsOptional(properties[key]));
}
/** Extracts a tuple of keys from a TProperties value. */
function PropertyKeys(properties) {
	return Keys(properties);
}
/** Extracts a tuple of property values from a TProperties value. */
function PropertyValues(properties) {
	return Values(properties);
}
function init_properties() {
	return (init_properties = __esmMin((() => {
		init_guard();
		init__optional$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/object.mjs
/** Creates an Object type. */
function _Object_$1(properties, options = {}) {
	const requiredKeys = RequiredArray(properties);
	return Create({ "~kind": "Object" }, {
		type: "object",
		...requiredKeys.length > 0 ? { required: requiredKeys } : {},
		properties
	}, options);
}
/** Returns true if the given value is TObject. */
function IsObject(value) {
	return IsKind(value, "Object");
}
/** Extracts options from a TObject. */
function ObjectOptions(type) {
	return Discard(type, [
		"~kind",
		"type",
		"properties",
		"required"
	]);
}
function init_object() {
	return (init_object = __esmMin((() => {
		init_create(), init_discard();
		init_schema();
		init_properties();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/union.mjs
/** Creates a Union type. */
function Union(anyOf, options = {}) {
	return Create({ "~kind": "Union" }, { anyOf }, options);
}
/** Returns true if the given value is TUnion. */
function IsUnion(value) {
	return IsKind(value, "Union");
}
/** Extracts options from a TUnion. */
function UnionOptions(type) {
	return Discard(type, ["~kind", "anyOf"]);
}
function init_union() {
	return (init_union = __esmMin((() => {
		init_create(), init_discard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/unknown.mjs
/** Creates an Unknown type. */
function Unknown(options) {
	return Create({ ["~kind"]: "Unknown" }, {}, options);
}
/** Returns true if the given value is TUnknown. */
function IsUnknown(value) {
	return IsKind(value, "Unknown");
}
function init_unknown() {
	return (init_unknown = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/cyclic.mjs
/** Creates a Cyclic type. */
function Cyclic($defs, $ref, options) {
	const defs = Keys($defs).reduce((result, key) => {
		return {
			...result,
			[key]: Update($defs[key], {}, { $id: key })
		};
	}, {});
	return Create({ ["~kind"]: "Cyclic" }, {
		$defs: defs,
		$ref
	}, options);
}
/** Returns true if the given value is a TCyclic. */
function IsCyclic(value) {
	return IsKind(value, "Cyclic");
}
function init_cyclic() {
	return (init_cyclic = __esmMin((() => {
		init_guard();
		init_update(), init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/arguments/arguments.mjs
/**
* Match arguments for overloaded functions that use the `...args: unknown[]` pattern. Arguments
* are parsed using argument length only.
*/
function Match$1(args, match) {
	return match[args.length]?.(...args) ?? (() => {
		throw Error("Invalid Arguments");
	})();
}
function init_arguments() {
	return (init_arguments = __esmMin((() => {})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/infer.mjs
/** Creates an Infer instruction. */
function Infer(...args) {
	const [name, extends_] = Match$1(args, {
		2: (name, extends_) => [
			name,
			extends_,
			extends_
		],
		1: (name) => [
			name,
			Unknown(),
			Unknown()
		]
	});
	return Create({ ["~kind"]: "Infer" }, {
		type: "infer",
		name,
		extends: extends_
	}, {});
}
/** Returns true if the given value is TInfer. */
function IsInfer(value) {
	return IsKind(value, "Infer");
}
function init_infer() {
	return (init_infer = __esmMin((() => {
		init_create();
		init_schema();
		init_unknown();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/enum/typescript-enum-to-enum-values.mjs
function IsTypeScriptEnumLike(value) {
	return IsObjectNotArray(value);
}
function TypeScriptEnumToEnumValues(type) {
	return Keys(type).filter((key) => isNaN(key)).reduce((result, key) => [...result, type[key]], []);
}
function init_typescript_enum_to_enum_values() {
	return (init_typescript_enum_to_enum_values = __esmMin((() => {
		init_guard();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/enum.mjs
/** Creates an Enum type. */
function Enum(value, options) {
	return Create({ "~kind": "Enum" }, { enum: IsTypeScriptEnumLike(value) ? TypeScriptEnumToEnumValues(value) : value }, options);
}
/** Returns true if the given value is a TEnum. */
function IsEnum(value) {
	return IsKind(value, "Enum");
}
function init_enum() {
	return (init_enum = __esmMin((() => {
		init_create();
		init_schema();
		init_typescript_enum_to_enum_values();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/intersect.mjs
/** Creates a Intersect type. */
function Intersect(types, options = {}) {
	return Create({ "~kind": "Intersect" }, { allOf: types }, options);
}
/** Returns true if the given value is TIntersect. */
function IsIntersect(value) {
	return IsKind(value, "Intersect");
}
/** Extracts options from a TIntersect. */
function IntersectOptions(type) {
	return Discard(type, ["~kind", "allOf"]);
}
function init_intersect() {
	return (init_intersect = __esmMin((() => {
		init_create(), init_discard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/unreachable/unreachable.mjs
/** Used for unreachable logic */
function Unreachable$1() {
	throw new Error("Unreachable");
}
function init_unreachable() {
	return (init_unreachable = __esmMin((() => {})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/hashing/hash.mjs
function InstanceKeys(value) {
	const propertyKeys = /* @__PURE__ */ new Set();
	let current = value;
	while (current && current !== Object.prototype) {
		for (const key of Reflect.ownKeys(current)) if (key !== "constructor" && typeof key !== "symbol") propertyKeys.add(key);
		current = Object.getPrototypeOf(current);
	}
	return [...propertyKeys];
}
function IsIEEE754(value) {
	return typeof value === "number";
}
function FNV1A64_OP(byte) {
	Accumulator = Accumulator ^ Bytes[byte];
	Accumulator = Accumulator * Prime % Size;
}
function FromArray$3(value) {
	FNV1A64_OP(ByteMarker.Array);
	for (const item of value) FromValue(item);
}
function FromBigInt(value) {
	FNV1A64_OP(ByteMarker.BigInt);
	F64In.setBigInt64(0, value);
	for (const byte of F64Out) FNV1A64_OP(byte);
}
function FromBoolean(value) {
	FNV1A64_OP(ByteMarker.Boolean);
	FNV1A64_OP(value ? 1 : 0);
}
function FromConstructor(value) {
	FNV1A64_OP(ByteMarker.Constructor);
	FromValue(value.toString());
}
function FromDate(value) {
	FNV1A64_OP(ByteMarker.Date);
	FromValue(value.getTime());
}
function FromFunction(value) {
	FNV1A64_OP(ByteMarker.Function);
	FromValue(value.toString());
}
function FromNull(_value) {
	FNV1A64_OP(ByteMarker.Null);
}
function FromNumber(value) {
	FNV1A64_OP(ByteMarker.Number);
	F64In.setFloat64(0, value, true);
	for (const byte of F64Out) FNV1A64_OP(byte);
}
function FromObject$6(value) {
	FNV1A64_OP(ByteMarker.Object);
	for (const key of InstanceKeys(value).sort()) {
		FromValue(key);
		FromValue(value[key]);
	}
}
function FromRegExp(value) {
	FNV1A64_OP(ByteMarker.RegExp);
	FromString(value.toString());
}
function FromString(value) {
	FNV1A64_OP(ByteMarker.String);
	for (const byte of encoder.encode(value)) FNV1A64_OP(byte);
}
function FromSymbol(value) {
	FNV1A64_OP(ByteMarker.Symbol);
	FromValue(value.toString());
}
function FromTypeArray(value) {
	FNV1A64_OP(ByteMarker.TypeArray);
	const buffer = new Uint8Array(value.buffer);
	for (let i = 0; i < buffer.length; i++) FNV1A64_OP(buffer[i]);
}
function FromUndefined(_value) {
	return FNV1A64_OP(ByteMarker.Undefined);
}
function FromValue(value) {
	return IsTypeArray(value) ? FromTypeArray(value) : IsDate(value) ? FromDate(value) : IsRegExp(value) ? FromRegExp(value) : IsBoolean$1(value) ? FromBoolean(value.valueOf()) : IsString$1(value) ? FromString(value.valueOf()) : IsNumber$1(value) ? FromNumber(value.valueOf()) : IsIEEE754(value) ? FromNumber(value) : IsArray$1(value) ? FromArray$3(value) : IsBoolean$2(value) ? FromBoolean(value) : IsBigInt$1(value) ? FromBigInt(value) : IsConstructor$1(value) ? FromConstructor(value) : IsNull$1(value) ? FromNull(value) : IsObject$1(value) ? FromObject$6(value) : IsString$2(value) ? FromString(value) : IsSymbol$1(value) ? FromSymbol(value) : IsUndefined$1(value) ? FromUndefined(value) : IsFunction$1(value) ? FromFunction(value) : Unreachable$1();
}
/** Generates a FNV1A-64 non cryptographic hash of the given value */
function HashCode(value) {
	Accumulator = BigInt("14695981039346656037");
	FromValue(value);
	return Accumulator;
}
/** Generates a FNV1A-64 non cryptographic hash of the given value */
function Hash(value) {
	return HashCode(value).toString(16).padStart(16, "0");
}
var ByteMarker, Accumulator, Prime, Size, Bytes, F64, F64In, F64Out, encoder;
function init_hash() {
	return (init_hash = __esmMin((() => {
		init_guard();
		(function(ByteMarker) {
			ByteMarker[ByteMarker["Array"] = 0] = "Array";
			ByteMarker[ByteMarker["BigInt"] = 1] = "BigInt";
			ByteMarker[ByteMarker["Boolean"] = 2] = "Boolean";
			ByteMarker[ByteMarker["Date"] = 3] = "Date";
			ByteMarker[ByteMarker["Constructor"] = 4] = "Constructor";
			ByteMarker[ByteMarker["Function"] = 5] = "Function";
			ByteMarker[ByteMarker["Null"] = 6] = "Null";
			ByteMarker[ByteMarker["Number"] = 7] = "Number";
			ByteMarker[ByteMarker["Object"] = 8] = "Object";
			ByteMarker[ByteMarker["RegExp"] = 9] = "RegExp";
			ByteMarker[ByteMarker["String"] = 10] = "String";
			ByteMarker[ByteMarker["Symbol"] = 11] = "Symbol";
			ByteMarker[ByteMarker["TypeArray"] = 12] = "TypeArray";
			ByteMarker[ByteMarker["Undefined"] = 13] = "Undefined";
		})(ByteMarker || (ByteMarker = {}));
		Accumulator = BigInt("14695981039346656037");
		[Prime, Size] = [BigInt("1099511628211"), BigInt("18446744073709551616")];
		Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
		F64 = /* @__PURE__ */ new Float64Array(1);
		F64In = new DataView(F64.buffer);
		F64Out = new Uint8Array(F64.buffer);
		encoder = new TextEncoder();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/hashing/index.mjs
function init_hashing() {
	return (init_hashing = __esmMin((() => {
		init_hash();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/system.mjs
function init_system() {
	return (init_system = __esmMin((() => {
		init_hashing();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/system/index.mjs
function init_system$1() {
	return (init_system$1 = __esmMin((() => {
		init_system();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/_codec.mjs
/** Creates a bi-directional Codec. Codec functions are called on Value.Decode and Value.Encode. */
function Codec(type) {
	return new DecodeBuilder(type);
}
/** Createsa  uni-directional Codec with Decode only. The Decode function is called on Value.Decode */
function Decode(type, callback) {
	return Codec(type).Decode(callback).Encode(() => {
		throw Error("Encode not implemented");
	});
}
/** Creates a uni-directional Codec with Encode only. The Encode function is called on Value.Encode */
function Encode(type, callback) {
	return Codec(type).Decode(() => {
		throw Error("Decode not implemented");
	}).Encode(callback);
}
function IsCodec(value) {
	return IsSchema(value) && HasPropertyKey(value, "~codec") && IsObject$1(value["~codec"]) && HasPropertyKey(value["~codec"], "encode") && HasPropertyKey(value["~codec"], "decode");
}
var EncodeBuilder, DecodeBuilder;
function init__codec() {
	return (init__codec = __esmMin((() => {
		init_system$1();
		init_guard();
		init_schema();
		EncodeBuilder = class {
			constructor(type, decode) {
				this.type = type;
				this.decode = decode;
			}
			Encode(callback) {
				const type = this.type;
				const codec = {
					decode: IsCodec(type) ? (value) => this.decode(type["~codec"].decode(value)) : this.decode,
					encode: IsCodec(type) ? (value) => type["~codec"].encode(callback(value)) : callback
				};
				return Update(this.type, { "~codec": codec }, {});
			}
		};
		DecodeBuilder = class {
			constructor(type) {
				this.type = type;
			}
			Decode(callback) {
				return new EncodeBuilder(this.type, callback);
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/_refine.mjs
/** Applies a Refine check to the given type. */
function RefineAdd(type, refinement) {
	return Update(type, { "~refine": IsRefine(type) ? [...type["~refine"], refinement] : [refinement] }, {});
}
/** Applies a Refine check to the given type. */
function Refine(type, refine, message = "error") {
	return RefineAdd(type, {
		refine,
		message
	});
}
/** Returns true if the given value is a TRefine. */
function IsRefine(value) {
	return IsSchema(value) && HasPropertyKey(value, "~refine");
}
function init__refine() {
	return (init__refine = __esmMin((() => {
		init_update();
		init_guard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/bigint.mjs
/** Creates a BigInt type. */
function BigInt$2(options) {
	return Create({ "~kind": "BigInt" }, { type: "bigint" }, options);
}
/** Returns true if the given value is a TBigInt. */
function IsBigInt(value) {
	return IsKind(value, "BigInt");
}
var BigIntPattern;
function init_bigint() {
	return (init_bigint = __esmMin((() => {
		init_create();
		init_schema();
		BigIntPattern = "-?(?:0|[1-9][0-9]*)n";
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/boolean.mjs
/** Creates a Boolean type. */
function Boolean$1(options) {
	return Create({ "~kind": "Boolean" }, { type: "boolean" }, options);
}
/** Returns true if the given value is a TBoolean. */
function IsBoolean(value) {
	return IsKind(value, "Boolean");
}
function init_boolean() {
	return (init_boolean = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/identifier.mjs
/** Creates an Identifier. */
function Identifier(name) {
	return Create({ "~kind": "Identifier" }, { name });
}
/** Returns true if the given value is a TIdentifier. */
function IsIdentifier(value) {
	return IsKind(value, "Identifier");
}
function init_identifier() {
	return (init_identifier = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/integer.mjs
/** Creates a Integer type. */
function Integer$1(options) {
	return Create({ "~kind": "Integer" }, { type: "integer" }, options);
}
/** Returns true if the given value is TInteger. */
function IsInteger(value) {
	return IsKind(value, "Integer");
}
var IntegerPattern;
function init_integer() {
	return (init_integer = __esmMin((() => {
		init_create();
		init_schema();
		IntegerPattern = "-?(?:0|[1-9][0-9]*)";
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/iterator.mjs
/** Creates a Iterator type. */
function Iterator(iteratorItems, options) {
	return Create({ "~kind": "Iterator" }, {
		type: "iterator",
		iteratorItems
	}, options);
}
/** Returns true if the given value is TIterator. */
function IsIterator(value) {
	return IsKind(value, "Iterator");
}
/** Extracts options from a TIterator. */
function IteratorOptions(type) {
	return Discard(type, [
		"~kind",
		"type",
		"iteratorItems"
	]);
}
function init_iterator() {
	return (init_iterator = __esmMin((() => {
		init_create(), init_discard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/literal.mjs
function LiteralTypeName(value) {
	return IsBigInt$1(value) ? "bigint" : IsBoolean$2(value) ? "boolean" : IsNumber$2(value) ? "number" : IsString$2(value) ? "string" : (() => {
		throw new InvalidLiteralValue(value);
	})();
}
/** Creates a Literal type. */
function Literal$1(value, options) {
	return Create({ "~kind": "Literal" }, {
		type: LiteralTypeName(value),
		const: value
	}, options);
}
/** Returns true if the given value is a TLiteralValue. */
function IsLiteralValue(value) {
	return IsBigInt$1(value) || IsBoolean$2(value) || IsNumber$2(value) || IsString$2(value);
}
/** Returns true if the given value is TLiteral<bigint>. */
function IsLiteralBigInt(value) {
	return IsLiteral(value) && IsBigInt$1(value.const);
}
/** Returns true if the given value is TLiteral<boolean>. */
function IsLiteralBoolean(value) {
	return IsLiteral(value) && IsBoolean$2(value.const);
}
/** Returns true if the given value is TLiteral<number>. */
function IsLiteralNumber(value) {
	return IsLiteral(value) && IsNumber$2(value.const);
}
/** Returns true if the given value is TLiteral<string>. */
function IsLiteralString(value) {
	return IsLiteral(value) && IsString$2(value.const);
}
/** Returns true if the given value is TLiteral. */
function IsLiteral(value) {
	return IsKind(value, "Literal");
}
var InvalidLiteralValue;
function init_literal() {
	return (init_literal = __esmMin((() => {
		init_create();
		init_guard();
		init_schema();
		InvalidLiteralValue = class extends Error {
			constructor(value) {
				super(`Invalid Literal value`);
				Object.defineProperty(this, "cause", {
					value: { value },
					writable: false,
					configurable: false,
					enumerable: false
				});
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/null.mjs
/** Creates a Null type. */
function Null(options) {
	return Create({ "~kind": "Null" }, { type: "null" }, options);
}
/** Returns true if the given value is TNull. */
function IsNull(value) {
	return IsKind(value, "Null");
}
function init_null() {
	return (init_null = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/number.mjs
/** Creates a Number type. */
function Number$2(options) {
	return Create({ "~kind": "Number" }, { type: "number" }, options);
}
/** Returns true if the given value is a TNumber. */
function IsNumber(value) {
	return IsKind(value, "Number");
}
var NumberPattern;
function init_number() {
	return (init_number = __esmMin((() => {
		init_create();
		init_schema();
		NumberPattern = "-?(?:0|[1-9][0-9]*)(?:.[0-9]+)?";
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/symbol.mjs
/** Creates a Symbol type. */
function Symbol$1(options) {
	return Create({ "~kind": "Symbol" }, { type: "symbol" }, options);
}
/** Returns true if the given value is TSymbol. */
function IsSymbol(value) {
	return IsKind(value, "Symbol");
}
function init_symbol() {
	return (init_symbol = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/parameter.mjs
/** Creates a Parameter type. */
function Parameter$1(...args) {
	const [name, extends_, equals] = Match$1(args, {
		3: (name, extends_, equals) => [
			name,
			extends_,
			equals
		],
		2: (name, extends_) => [
			name,
			extends_,
			extends_
		],
		1: (name) => [
			name,
			Unknown(),
			Unknown()
		]
	});
	return Create({ "~kind": "Parameter" }, {
		name,
		extends: extends_,
		equals
	}, {});
}
/** Returns true if the given value is TParameter. */
function IsParameter(value) {
	return IsKind(value, "Parameter");
}
function init_parameter() {
	return (init_parameter = __esmMin((() => {
		init_create();
		init_schema();
		init_unknown();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/promise.mjs
/** Creates a Promise type. */
function Promise$1(item, options) {
	return Create({ ["~kind"]: "Promise" }, {
		type: "promise",
		item
	}, options);
}
/** Returns true if the given type is TPromise. */
function IsPromise(value) {
	return IsKind(value, "Promise");
}
/** Extracts options from a TPromise. */
function PromiseOptions(type) {
	return Discard(type, [
		"~kind",
		"type",
		"item"
	]);
}
function init_promise() {
	return (init_promise = __esmMin((() => {
		init_create(), init_discard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/string.mjs
/** Creates a String type. */
function String$2(options) {
	return Create({ "~kind": "String" }, { type: "string" }, options);
}
/** Returns true if the given value is TString. */
function IsString(value) {
	return IsKind(value, "String");
}
function init_string$1() {
	return (init_string$1 = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/patterns/pattern.mjs
/** Parses a Pattern into a sequence of TemplateLiteral types. A result of [] indicates failure to parse. */
function ParsePatternIntoTypes(pattern) {
	const parsed = Pattern(pattern);
	return IsEqual(parsed.length, 2) ? parsed[0] : [];
}
function init_pattern() {
	return (init_pattern = __esmMin((() => {
		init_guard();
		init_parser();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/template-literal/is-finite.mjs
function FromLiteral$3(value) {
	return true;
}
function FromTypesReduce(types) {
	const [left, ...right] = types;
	return IsSchema(left) ? FromType$12(left) ? FromTypesReduce(right) : false : true;
}
function FromTypes$3(types) {
	return IsEqual(types.length, 0) ? false : FromTypesReduce(types);
}
function FromType$12(type) {
	return IsUnion(type) ? FromTypes$3(type.anyOf) : IsLiteral(type) ? FromLiteral$3(type.const) : false;
}
/** Returns true if the given TemplateLiteral types yields a finite variant set */
function IsTemplateLiteralFinite(types) {
	return FromTypes$3(types);
}
function init_is_finite() {
	return (init_is_finite = __esmMin((() => {
		init_guard();
		init_schema();
		init_literal();
		init_union();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/template-literal/create.mjs
function TemplateLiteralCreate(pattern) {
	return Create({ ["~kind"]: "TemplateLiteral" }, {
		type: "string",
		pattern
	}, {});
}
function init_create$1() {
	return (init_create$1 = __esmMin((() => {
		init_create();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/template-literal/decode.mjs
function FromLiteralPush(variants, value, result = []) {
	const [left, ...right] = variants;
	return IsString$2(left) ? FromLiteralPush(right, value, [...result, `${left}${value}`]) : result;
}
function FromLiteral$2(variants, value) {
	return IsEqual(variants.length, 0) ? [`${value}`] : FromLiteralPush(variants, value);
}
function FromUnion$7(variants, types, result = []) {
	const [left, ...right] = types;
	return IsSchema(left) ? FromUnion$7(variants, right, [...result, ...FromType$11(variants, left)]) : result;
}
function FromType$11(variants, type) {
	return IsUnion(type) ? FromUnion$7(variants, type.anyOf) : IsLiteral(type) ? FromLiteral$2(variants, type.const) : Unreachable$1();
}
function DecodeFromSpan(variants, types) {
	const [left, ...right] = types;
	return IsSchema(left) ? DecodeFromSpan(FromType$11(variants, left), right) : variants;
}
function VariantsToLiterals(variants) {
	return variants.map((variant) => Literal$1(variant));
}
function DecodeTypesAsUnion(types) {
	return Union(VariantsToLiterals(DecodeFromSpan([], types)));
}
function DecodeTypes(types) {
	return IsEqual(types.length, 0) ? Unreachable$1() : IsEqual(types.length, 1) && IsLiteral(types[0]) ? types[0] : DecodeTypesAsUnion(types);
}
/**
* (Internal) Decodes a TemplateLiteral pattern into a Type. This function is unsafe. Decoding a non-finite
* TemplateLiteral pattern may produce another TemplateLiteral pattern. During enumeration, this
* TemplateLiteral -> TemplateLiteral behavior can cause a StackOverflow. A better in-flight template-literal
* decoding algorithm is needed. (for review)
*/
function TemplateLiteralDecodeUnsafe(pattern) {
	const types = ParsePatternIntoTypes(pattern);
	return IsEqual(types.length, 0) ? String$2() : IsTemplateLiteralFinite(types) ? DecodeTypes(types) : TemplateLiteralCreate(pattern);
}
/** Decodes a TemplateLiteral pattern but returns TString if the pattern in non-finite. */
function TemplateLiteralDecode(pattern) {
	const decoded = TemplateLiteralDecodeUnsafe(pattern);
	return IsTemplateLiteral(decoded) ? String$2() : decoded;
}
function init_decode() {
	return (init_decode = __esmMin((() => {
		init_guard();
		init_literal();
		init_schema();
		init_string$1();
		init_template_literal();
		init_union();
		init_pattern();
		init_is_finite();
		init_create$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/record-create.mjs
function CreateRecord(key, value) {
	const type = "object";
	const patternProperties = { [key]: value };
	return Create({ ["~kind"]: "Record" }, {
		type,
		patternProperties
	});
}
function init_record_create() {
	return (init_record_create = __esmMin((() => {
		init_create();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/record.mjs
/** Represents a deferred Record action. */
function RecordDeferred(key, value, options = {}) {
	return Deferred("Record", [key, value], options);
}
function RecordConstruct(key, value, options = {}) {
	return Instantiate({}, RecordDeferred(key, value, options));
}
/** Creates a Record type. */
function Record(key, value, options = {}) {
	return RecordConstruct(key, value, options);
}
/** Creates a Record type from regular expression pattern. */
function RecordFromPattern(key, value) {
	return CreateRecord(key, value);
}
/** Returns the raw string pattern used for the Record key  */
function RecordPattern(type) {
	return Keys(type.patternProperties)[0];
}
/** Returns the Record key as a TypeBox type  */
function RecordKey(type) {
	const pattern = RecordPattern(type);
	return IsEqual(pattern, StringKey) ? String$2() : IsEqual(pattern, IntegerKey) ? Integer$1() : IsEqual(pattern, NumberKey) ? Number$2() : TemplateLiteralDecodeUnsafe(pattern);
}
function RecordValue(type) {
	return type.patternProperties[RecordPattern(type)];
}
function IsRecord(value) {
	return IsKind(value, "Record");
}
var IntegerKey, NumberKey, StringKey;
function init_record() {
	return (init_record = __esmMin((() => {
		init_guard();
		init_schema();
		init_integer();
		init_number();
		init_string$1();
		init_deferred();
		init_instantiate$27();
		init_decode();
		init_record_create();
		IntegerKey = `^${IntegerPattern}$`;
		NumberKey = `^${NumberPattern}$`;
		StringKey = `^.*$`;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/rest.mjs
/** Creates a Rest instruction type. */
function Rest(type) {
	return Create({ "~kind": "Rest" }, {
		type: "rest",
		items: type
	}, {});
}
/** Returns true if the given value is TRest. */
function IsRest(value) {
	return IsKind(value, "Rest");
}
function init_rest() {
	return (init_rest = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/this.mjs
/** Creates a This type. */
function This(options) {
	return Create({ ["~kind"]: "This" }, { $ref: "#" }, options);
}
/** Returns true if the given value is TThis. */
function IsThis(value) {
	return IsKind(value, "This");
}
function init_this() {
	return (init_this = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/tuple.mjs
/** Creates a Tuple type. */
function Tuple$1(types, options = {}) {
	const [items, minItems, additionalItems] = [
		types,
		types.length,
		false
	];
	return Create({ ["~kind"]: "Tuple" }, {
		type: "array",
		additionalItems,
		items,
		minItems
	}, options);
}
/** Returns true if the given value is TTuple. */
function IsTuple(value) {
	return IsKind(value, "Tuple");
}
/** Extracts options from a TTuple. */
function TupleOptions(type) {
	return Discard(type, [
		"~kind",
		"type",
		"items",
		"minItems",
		"additionalItems"
	]);
}
function init_tuple() {
	return (init_tuple = __esmMin((() => {
		init_create(), init_discard();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/undefined.mjs
/** Creates a Undefined type. */
function Undefined(options) {
	return Create({ "~kind": "Undefined" }, { type: "undefined" }, options);
}
/** Returns true if the given value is TUndefined. */
function IsUndefined(value) {
	return IsKind(value, "Undefined");
}
function init_undefined() {
	return (init_undefined = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/unsafe.mjs
/** Creates a Unsafe type. */
function Unsafe(schema) {
	return Create({ ["~kind"]: "Unsafe" }, {}, schema);
}
/** Returns true if the given value is TUnsafe. */
function IsUnsafe(value) {
	return IsKind(value, "Unsafe");
}
function init_unsafe() {
	return (init_unsafe = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/void.mjs
/** Creates a Void type. */
function Void(options) {
	return Create({ "~kind": "Void" }, { type: "void" }, options);
}
/** Returns true if the given value is TVoid. */
function IsVoid(value) {
	return IsKind(value, "Void");
}
function init_void() {
	return (init_void = __esmMin((() => {
		init_create();
		init_schema();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/index.mjs
function init_types() {
	return (init_types = __esmMin((() => {
		init__codec();
		init__immutable();
		init__optional$1();
		init__readonly$1();
		init__refine();
		init_any();
		init_array();
		init_async_iterator();
		init_base();
		init_bigint();
		init_boolean();
		init_call();
		init_constructor();
		init_cyclic();
		init_enum();
		init_function();
		init_generic();
		init_identifier();
		init_infer();
		init_integer();
		init_intersect();
		init_iterator();
		init_literal();
		init_never();
		init_null();
		init_number();
		init_unknown();
		init_symbol();
		init_object();
		init_parameter();
		init_promise();
		init_record();
		init_ref();
		init_rest();
		init_schema();
		init_string$1();
		init_template_literal();
		init_this();
		init_tuple();
		init_undefined();
		init_union();
		init_void();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/mapping.mjs
function IntrinsicOrCall(ref, parameters) {
	return IsEqual(ref, "Array") ? Array$1(parameters[0]) : IsEqual(ref, "AsyncIterator") ? AsyncIterator(parameters[0]) : IsEqual(ref, "Iterator") ? Iterator(parameters[0]) : IsEqual(ref, "Promise") ? Promise$1(parameters[0]) : IsEqual(ref, "Awaited") ? AwaitedDeferred(parameters[0]) : IsEqual(ref, "Capitalize") ? CapitalizeDeferred(parameters[0]) : IsEqual(ref, "ConstructorParameters") ? ConstructorParametersDeferred(parameters[0]) : IsEqual(ref, "Evaluate") ? EvaluateDeferred(parameters[0]) : IsEqual(ref, "Exclude") ? ExcludeDeferred(parameters[0], parameters[1]) : IsEqual(ref, "Extract") ? ExtractDeferred(parameters[0], parameters[1]) : IsEqual(ref, "Index") ? IndexDeferred(parameters[0], parameters[1]) : IsEqual(ref, "InstanceType") ? InstanceTypeDeferred(parameters[0]) : IsEqual(ref, "Lowercase") ? LowercaseDeferred(parameters[0]) : IsEqual(ref, "NonNullable") ? NonNullableDeferred(parameters[0]) : IsEqual(ref, "Omit") ? OmitDeferred(parameters[0], parameters[1]) : IsEqual(ref, "Options") ? OptionsDeferred(parameters[0], parameters[1]) : IsEqual(ref, "Parameters") ? ParametersDeferred(parameters[0]) : IsEqual(ref, "Partial") ? PartialDeferred(parameters[0]) : IsEqual(ref, "Pick") ? PickDeferred(parameters[0], parameters[1]) : IsEqual(ref, "Readonly") ? ReadonlyTypeDeferred(parameters[0]) : IsEqual(ref, "KeyOf") ? KeyOfDeferred(parameters[0]) : IsEqual(ref, "Record") ? RecordDeferred(parameters[0], parameters[1]) : IsEqual(ref, "Required") ? RequiredDeferred(parameters[0]) : IsEqual(ref, "ReturnType") ? ReturnTypeDeferred(parameters[0]) : IsEqual(ref, "Uncapitalize") ? UncapitalizeDeferred(parameters[0]) : IsEqual(ref, "Uppercase") ? UppercaseDeferred(parameters[0]) : CallConstruct(Ref(ref), parameters);
}
function Unreachable() {
	throw Error("Unreachable");
}
function GenericParameterExtendsEqualsMapping(input) {
	return Parameter$1(input[0], input[2], input[4]);
}
function GenericParameterExtendsMapping(input) {
	return Parameter$1(input[0], input[2], input[2]);
}
function GenericParameterEqualsMapping(input) {
	return Parameter$1(input[0], Unknown(), input[2]);
}
function GenericParameterIdentifierMapping(input) {
	return Parameter$1(input, Unknown(), Unknown());
}
function GenericParameterMapping(input) {
	return input;
}
function GenericParameterListMapping(input) {
	return Delimited(input);
}
function GenericParametersMapping(input) {
	return input[1];
}
function GenericCallArgumentListMapping(input) {
	return Delimited(input);
}
function GenericCallArgumentsMapping(input) {
	return input[1];
}
function GenericCallMapping(input) {
	return IntrinsicOrCall(input[0], input[1]);
}
function OptionalSemiColonMapping(input) {
	return null;
}
function KeywordStringMapping(input) {
	return String$2();
}
function KeywordNumberMapping(input) {
	return Number$2();
}
function KeywordBooleanMapping(input) {
	return Boolean$1();
}
function KeywordUndefinedMapping(input) {
	return Undefined();
}
function KeywordNullMapping(input) {
	return Null();
}
function KeywordIntegerMapping(input) {
	return Integer$1();
}
function KeywordBigIntMapping(input) {
	return BigInt$2();
}
function KeywordUnknownMapping(input) {
	return Unknown();
}
function KeywordAnyMapping(input) {
	return Any();
}
function KeywordObjectMapping(input) {
	return _Object_$1({});
}
function KeywordNeverMapping(input) {
	return Never();
}
function KeywordSymbolMapping(input) {
	return Symbol$1();
}
function KeywordVoidMapping(input) {
	return Void();
}
function KeywordThisMapping(input) {
	return This();
}
function KeywordMapping(input) {
	return input;
}
function TemplateInterpolateMapping(input) {
	return input[1];
}
function TemplateSpanMapping(input) {
	return Literal$1(input);
}
function TemplateBodyMapping(input) {
	return IsEqual(input.length, 3) ? [
		input[0],
		input[1],
		...input[2]
	] : [input[0]];
}
function TemplateLiteralTypesMapping(input) {
	return input[1];
}
function TemplateLiteralMapping(input) {
	return TemplateLiteralDeferred(input);
}
function LiteralBigIntMapping(input) {
	return Literal$1(BigInt(input));
}
function LiteralBooleanMapping(input) {
	return Literal$1(IsEqual(input, "true"));
}
function LiteralNumberMapping(input) {
	return Literal$1(parseFloat(input));
}
function LiteralStringMapping(input) {
	return Literal$1(input);
}
function LiteralMapping(input) {
	return input;
}
function KeyOfMapping(input) {
	return input.length > 0;
}
function IndexArrayMapping(input) {
	return input.reduce((result, current) => {
		return IsEqual(current.length, 3) ? [...result, [current[1]]] : [...result, []];
	}, []);
}
function ExtendsMapping(input) {
	return IsEqual(input.length, 6) ? [
		input[1],
		input[3],
		input[5]
	] : [];
}
function BaseMapping(input) {
	return IsArray$1(input) && IsEqual(input.length, 3) ? input[1] : input;
}
function FactorMapping(input) {
	const [keyOf, type, indexArray, extend] = input;
	return keyOf ? FactorExtends(KeyOfDeferred(FactorIndexArray(type, indexArray)), extend) : FactorExtends(FactorIndexArray(type, indexArray), extend);
}
function ExprBinaryMapping(left, rest) {
	return IsEqual(rest.length, 3) ? (() => {
		const [operator, right, next] = rest;
		const Schema = ExprBinaryMapping(right, next);
		if (IsEqual(operator, "&")) return IsIntersect(Schema) ? Intersect([left, ...Schema.allOf]) : Intersect([left, Schema]);
		if (IsEqual(operator, "|")) return IsUnion(Schema) ? Union([left, ...Schema.anyOf]) : Union([left, Schema]);
		Unreachable();
	})() : left;
}
function ExprTermTailMapping(input) {
	return input;
}
function ExprTermMapping(input) {
	const [left, rest] = input;
	return ExprBinaryMapping(left, rest);
}
function ExprTailMapping(input) {
	return input;
}
function ExprMapping(input) {
	const [left, rest] = input;
	return ExprBinaryMapping(left, rest);
}
function ExprReadonlyMapping(input) {
	return ImmutableAdd(input[1]);
}
function ExprPipeMapping(input) {
	return input[1];
}
function GenericTypeMapping(input) {
	return Generic(input[0], input[2]);
}
function InferTypeMapping(input) {
	return IsEqual(input.length, 4) ? Infer(input[1], input[3]) : IsEqual(input.length, 2) ? Infer(input[1], Unknown()) : Unreachable();
}
function TypeMapping(input) {
	return input;
}
function PropertyKeyNumberMapping(input) {
	return `${input}`;
}
function PropertyKeyIdentMapping(input) {
	return input;
}
function PropertyKeyQuotedMapping(input) {
	return input;
}
function PropertyKeyIndexMapping(input) {
	return IsInteger(input[3]) ? IntegerKey : IsNumber(input[3]) ? NumberKey : IsSymbol(input[3]) ? StringKey : IsString(input[3]) ? StringKey : Unreachable();
}
function PropertyKeyMapping(input) {
	return input;
}
function ReadonlyMapping(input) {
	return input.length > 0;
}
function OptionalMapping(input) {
	return input.length > 0;
}
function PropertyMapping(input) {
	const [isReadonly, key, isOptional, _colon, type] = input;
	return { [key]: isReadonly && isOptional ? ReadonlyAdd(OptionalAdd(type)) : isReadonly && !isOptional ? ReadonlyAdd(type) : !isReadonly && isOptional ? OptionalAdd(type) : type };
}
function PropertyDelimiterMapping(input) {
	return input;
}
function PropertyListMapping(input) {
	return Delimited(input);
}
function PropertiesReduce(propertyList) {
	return propertyList.reduce((result, left) => {
		return HasPropertyKey(left, IntegerKey) || HasPropertyKey(left, NumberKey) || HasPropertyKey(left, StringKey) ? [result[0], Assign(result[1], left)] : [Assign(result[0], left), result[1]];
	}, [{}, {}]);
}
function PropertiesMapping(input) {
	return PropertiesReduce(input[1]);
}
function _Object_Mapping(input) {
	const [properties, patternProperties] = input;
	return _Object_$1(properties, IsEqual(Keys(patternProperties).length, 0) ? {} : { patternProperties });
}
function ElementNamedMapping(input) {
	return IsEqual(input.length, 5) ? ReadonlyAdd(OptionalAdd(input[4])) : IsEqual(input.length, 3) ? input[2] : IsEqual(input.length, 4) ? IsEqual(input[2], "readonly") ? ReadonlyAdd(input[3]) : OptionalAdd(input[3]) : Unreachable();
}
function ElementReadonlyOptionalMapping(input) {
	return ReadonlyAdd(OptionalAdd(input[1]));
}
function ElementReadonlyMapping(input) {
	return ReadonlyAdd(input[1]);
}
function ElementOptionalMapping(input) {
	return OptionalAdd(input[0]);
}
function ElementBaseMapping(input) {
	return input;
}
function ElementMapping(input) {
	return IsEqual(input.length, 2) ? Rest(input[1]) : IsEqual(input.length, 1) ? input[0] : Unreachable();
}
function ElementListMapping(input) {
	return Delimited(input);
}
function TupleMapping(input) {
	return Tuple$1(input[1]);
}
function ParameterReadonlyOptionalMapping(input) {
	return ReadonlyAdd(OptionalAdd(input[4]));
}
function ParameterReadonlyMapping(input) {
	return ReadonlyAdd(input[3]);
}
function ParameterOptionalMapping(input) {
	return OptionalAdd(input[3]);
}
function ParameterTypeMapping(input) {
	return input[2];
}
function ParameterBaseMapping(input) {
	return input;
}
function ParameterMapping(input) {
	return IsEqual(input.length, 2) ? Rest(input[1]) : IsEqual(input.length, 1) ? input[0] : Unreachable();
}
function ParameterListMapping(input) {
	return Delimited(input);
}
function _Function_Mapping(input) {
	return _Function_$1(input[1], input[4]);
}
function ConstructorMapping(input) {
	return Constructor$1(input[2], input[5]);
}
function ApplyReadonly$1(state, type) {
	return IsEqual(state, "remove") ? ReadonlyRemoveAction(type) : IsEqual(state, "add") ? ReadonlyAddAction(type) : type;
}
function MappedReadonlyMapping(input) {
	return IsEqual(input.length, 2) && IsEqual(input[0], "-") ? "remove" : IsEqual(input.length, 2) && IsEqual(input[0], "+") ? "add" : IsEqual(input.length, 1) ? "add" : "none";
}
function ApplyOptional$1(state, type) {
	return IsEqual(state, "remove") ? OptionalRemoveAction(type) : IsEqual(state, "add") ? OptionalAddAction(type) : type;
}
function MappedOptionalMapping(input) {
	return IsEqual(input.length, 2) && IsEqual(input[0], "-") ? "remove" : IsEqual(input.length, 2) && IsEqual(input[0], "+") ? "add" : IsEqual(input.length, 1) ? "add" : "none";
}
function MappedAsMapping(input) {
	return IsEqual(input.length, 2) ? [input[1]] : [];
}
function MappedMapping(input) {
	return IsArray$1(input[6]) && IsEqual(input[6].length, 1) ? MappedDeferred(Identifier(input[3]), input[5], input[6][0], ApplyReadonly$1(input[1], ApplyOptional$1(input[8], input[10]))) : MappedDeferred(Identifier(input[3]), input[5], Ref(input[3]), ApplyReadonly$1(input[1], ApplyOptional$1(input[8], input[10])));
}
function ReferenceMapping(input) {
	return Ref(input);
}
function OptionsMapping(input) {
	return OptionsDeferred(input[2], input[4]);
}
function JsonNumberMapping(input) {
	return parseFloat(input);
}
function JsonBooleanMapping(input) {
	return IsEqual(input, "true");
}
function JsonStringMapping(input) {
	return input;
}
function JsonNullMapping(input) {
	return null;
}
function JsonPropertyMapping(input) {
	return { [input[0]]: input[2] };
}
function JsonPropertyListMapping(input) {
	return Delimited(input);
}
function JsonObjectMappingReduce(propertyList) {
	return propertyList.reduce((result, left) => {
		return Assign(result, left);
	}, {});
}
function JsonObjectMapping(input) {
	return JsonObjectMappingReduce(input[1]);
}
function JsonElementListMapping(input) {
	return Delimited(input);
}
function JsonArrayMapping(input) {
	return input[1];
}
function JsonMapping(input) {
	return input;
}
function PatternBigIntMapping(input) {
	return BigInt$2();
}
function PatternStringMapping(input) {
	return String$2();
}
function PatternNumberMapping(input) {
	return Number$2();
}
function PatternIntegerMapping(input) {
	return Integer$1();
}
function PatternNeverMapping(input) {
	return Never();
}
function PatternTextMapping(input) {
	return Literal$1(input);
}
function PatternBaseMapping(input) {
	return input;
}
function PatternGroupMapping(input) {
	return Union(input[1]);
}
function PatternUnionMapping(input) {
	return input.length === 3 ? [...input[0], ...input[2]] : input.length === 1 ? [...input[0]] : [];
}
function PatternTermMapping(input) {
	return [input[0], ...input[1]];
}
function PatternBodyMapping(input) {
	return input;
}
function PatternMapping(input) {
	return input[1];
}
function InterfaceDeclarationHeritageListMapping(input) {
	return Delimited(input);
}
function InterfaceDeclarationHeritageMapping(input) {
	return IsEqual(input.length, 2) ? input[1] : [];
}
function InterfaceDeclarationGenericMapping(input) {
	const parameters = input[2];
	const heritage = input[3];
	const [properties, patternProperties] = input[4];
	const options = IsEqual(Keys(patternProperties).length, 0) ? {} : { patternProperties };
	return { [input[1]]: Generic(parameters, InterfaceDeferred(heritage, properties, options)) };
}
function InterfaceDeclarationMapping(input) {
	const heritage = input[2];
	const [properties, patternProperties] = input[3];
	const options = IsEqual(Keys(patternProperties).length, 0) ? {} : { patternProperties };
	return { [input[1]]: InterfaceDeferred(heritage, properties, options) };
}
function TypeAliasDeclarationGenericMapping(input) {
	return { [input[1]]: Generic(input[2], input[4]) };
}
function TypeAliasDeclarationMapping(input) {
	return { [input[1]]: input[3] };
}
function ExportKeywordMapping(input) {
	return null;
}
function ModuleDeclarationDelimiterMapping(input) {
	return input;
}
function ModuleDeclarationListMapping(input) {
	return PropertiesReduce(Delimited(input));
}
function ModuleDeclarationMapping(input) {
	return input[1];
}
function ModuleMapping(input) {
	const moduleDeclaration = input[0];
	const moduleDeclarationList = input[1];
	return ModuleDeferred(Assign(moduleDeclaration, moduleDeclarationList[0]));
}
function ScriptMapping(input) {
	return input;
}
var DelimitedDecode, Delimited, FactorIndexArray, FactorExtends;
function init_mapping() {
	return (init_mapping = __esmMin((() => {
		init_assign();
		init_guard();
		init_action();
		init_types();
		DelimitedDecode = (input, result = []) => {
			return input.reduce((result, left) => {
				return IsArray$1(left) && IsEqual(left.length, 2) ? [...result, left[0]] : [...result, left];
			}, []);
		};
		Delimited = (input) => {
			const [left, right] = input;
			return DelimitedDecode([...left, ...right]);
		};
		FactorIndexArray = (Type, indexArray) => {
			return indexArray.reduceRight((result, right) => {
				const _right = right;
				return IsEqual(_right.length, 1) ? IndexDeferred(result, _right[0]) : IsEqual(_right.length, 0) ? Array$1(result) : Unreachable();
			}, Type);
		};
		FactorExtends = (type, extend) => {
			return IsEqual(extend.length, 3) ? ConditionalDeferred(type, extend[0], extend[1], extend[2]) : type;
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/internal/match.mjs
/** Checks the value is a Tuple-2 [string, string] result */
function IsMatch(value) {
	return IsEqual(value.length, 2);
}
/** Matches on a result and dispatches either left or right arm */
function Match(input, ok, fail) {
	return IsMatch(input) ? ok(input[0], input[1]) : fail();
}
function init_match() {
	return (init_match = __esmMin((() => {
		init_guard();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/internal/take.mjs
function TakeVariant(variant, input) {
	return IsEqual(input.indexOf(variant), 0) ? [variant, input.slice(variant.length)] : [];
}
/** Takes one of the given variants or fail */
function Take(variants, input) {
	for (let i = 0; i < variants.length; i++) {
		const result = TakeVariant(variants[i], input);
		if (IsMatch(result)) return result;
	}
	return [];
}
function init_take() {
	return (init_take = __esmMin((() => {
		init_match();
		init_guard();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/internal/char.mjs
function Range(start, end) {
	return Array.from({ length: end - start + 1 }, (_, i) => String.fromCharCode(start + i));
}
var Alpha, NonZero, Digit;
function init_char() {
	return (init_char = __esmMin((() => {
		Alpha = [...Range(97, 122), ...Range(65, 90)];
		NonZero = Range(49, 57);
		Digit = ["0", ...NonZero];
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/internal/trim.mjs
function DiscardMultilineComment(input) {
	const index = input.indexOf(CloseComment);
	return IsEqual(index, -1) ? "" : input.slice(index + 2);
}
function DiscardLineComment(input) {
	const index = input.indexOf("\n");
	return IsEqual(index, -1) ? "" : input.slice(index);
}
function TrimStartUntilNewline(input) {
	return input.replace(/^[ \t\r\f\v]+/, "");
}
function TrimWhitespace(input) {
	const trimmed = TrimStartUntilNewline(input);
	return trimmed.startsWith(OpenComment) ? TrimWhitespace(DiscardMultilineComment(trimmed.slice(2))) : trimmed.startsWith(LineComment) ? TrimWhitespace(DiscardLineComment(trimmed.slice(2))) : trimmed;
}
function Trim(input) {
	const trimmed = input.trimStart();
	return trimmed.startsWith(OpenComment) ? Trim(DiscardMultilineComment(trimmed.slice(2))) : trimmed.startsWith(LineComment) ? Trim(DiscardLineComment(trimmed.slice(2))) : trimmed;
}
var LineComment, OpenComment, CloseComment;
function init_trim() {
	return (init_trim = __esmMin((() => {
		init_guard();
		init_char();
		LineComment = "//";
		OpenComment = "/*";
		CloseComment = "*/";
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/internal/optional.mjs
/** Matches the given Value or empty string if no match. This function never fails */
function Optional$1(value, input) {
	return Match(Take([value], input), (Optional, Rest) => [Optional, Rest], () => ["", input]);
}
function init_optional() {
	return (init_optional = __esmMin((() => {
		init_match();
		init_take();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/internal/many.mjs
function IsDiscard(discard, input) {
	return discard.includes(input);
}
/** Takes characters from the Input until no-match. The Discard set is used to omit characters from the match */
function Many(allowed, discard, input, result = "") {
	return Match(Take(allowed, input), (Char, Rest) => IsDiscard(discard, Char) ? Many(allowed, discard, Rest, result) : Many(allowed, discard, Rest, `${result}${Char}`), () => [result, input]);
}
function init_many() {
	return (init_many = __esmMin((() => {
		init_match();
		init_take();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/unsigned_integer.mjs
function TakeNonZero(input) {
	return Take(NonZero, input);
}
function TakeDigits(input) {
	return Many(AllowedDigits$1, ["_"], input);
}
function TakeUnsignedInteger(input) {
	return Match(Take(["0"], input), (Zero, ZeroRest) => [Zero, ZeroRest], () => Match(TakeNonZero(input), (NonZero, NonZeroRest) => Match(TakeDigits(NonZeroRest), (Digits, DigitsRest) => [`${NonZero}${Digits}`, DigitsRest], () => []), () => []));
}
/** Matches if next is a UnsignedInteger */
function UnsignedInteger(input) {
	return TakeUnsignedInteger(Trim(input));
}
var AllowedDigits$1;
function init_unsigned_integer() {
	return (init_unsigned_integer = __esmMin((() => {
		init_match();
		init_trim();
		init_take();
		init_many();
		init_char();
		AllowedDigits$1 = [...Digit, "_"];
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/integer.mjs
function TakeSign$1(input) {
	return Optional$1("-", input);
}
function TakeSignedInteger(input) {
	return Match(TakeSign$1(input), (Sign, SignRest) => Match(UnsignedInteger(SignRest), (UnsignedInteger, UnsignedIntegerRest) => [`${Sign}${UnsignedInteger}`, UnsignedIntegerRest], () => []), () => []);
}
/** Matches if next is a signed or unsigned Integer */
function Integer(input) {
	return TakeSignedInteger(Trim(input));
}
function init_integer$1() {
	return (init_integer$1 = __esmMin((() => {
		init_match();
		init_trim();
		init_optional();
		init_char();
		init_unsigned_integer();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/bigint.mjs
function TakeBigInt(input) {
	return Match(Integer(input), (Integer, IntegerRest) => Match(Take(["n"], IntegerRest), (_N, NRest) => [`${Integer}`, NRest], () => []), () => []);
}
/** Matches if next is a Integer literal with trailing 'n'. Trailing 'n' is omitted in result. */
function BigInt$1(input) {
	return TakeBigInt(input);
}
function init_bigint$1() {
	return (init_bigint$1 = __esmMin((() => {
		init_match();
		init_take();
		init_integer$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/const.mjs
function TakeConst(const_, input) {
	return Take([const_], input);
}
/** Matches if next is the given Const value */
function Const(const_, input) {
	return IsEqual(const_, "") ? ["", input] : const_.startsWith("\n") ? TakeConst(const_, TrimWhitespace(input)) : const_.startsWith(" ") ? TakeConst(const_, input) : TakeConst(const_, Trim(input));
}
function init_const() {
	return (init_const = __esmMin((() => {
		init_guard();
		init_trim();
		init_take();
		init_char();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/ident.mjs
function TakeInitial$1(input) {
	return Take(Initial, input);
}
function TakeRemaining(input, result = "") {
	return Match(Take(Remaining, input), (Remaining, RemainingRest) => TakeRemaining(RemainingRest, `${result}${Remaining}`), () => [result, input]);
}
function TakeIdent(input) {
	return Match(TakeInitial$1(input), (Initial, InitialRest) => Match(TakeRemaining(InitialRest), (Remaining, RemainingRest) => [`${Initial}${Remaining}`, RemainingRest], () => []), () => []);
}
/** Matches if next is an Ident */
function Ident(input) {
	return TakeIdent(Trim(input));
}
var Initial, Remaining;
function init_ident() {
	return (init_ident = __esmMin((() => {
		init_match();
		init_trim();
		init_take();
		init_char();
		Initial = [
			...Alpha,
			"_",
			"$"
		];
		Remaining = [...Initial, ...Digit];
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/unsigned_number.mjs
function IsLeadingDot(input) {
	return IsMatch(Take(["."], input));
}
function TakeFractional(input) {
	return Match(Many(AllowedDigits, ["_"], input), (Digits, DigitsRest) => IsEqual(Digits, "") ? [] : [Digits, DigitsRest], () => []);
}
function LeadingDot(input) {
	return Match(Take(["."], input), (Dot, DotRest) => Match(TakeFractional(DotRest), (Fractional, FractionalRest) => [`0${Dot}${Fractional}`, FractionalRest], () => []), () => []);
}
function LeadingInteger(input) {
	return Match(UnsignedInteger(input), (Integer, IntegerRest) => Match(Take(["."], IntegerRest), (Dot, DotRest) => Match(TakeFractional(DotRest), (Fractional, FractionalRest) => [`${Integer}${Dot}${Fractional}`, FractionalRest], () => [`${Integer}`, DotRest]), () => [`${Integer}`, IntegerRest]), () => []);
}
function TakeUnsignedNumber(input) {
	return IsLeadingDot(input) ? LeadingDot(input) : LeadingInteger(input);
}
/** Matches if next is a UnsignedNumber */
function UnsignedNumber(input) {
	return TakeUnsignedNumber(Trim(input));
}
var AllowedDigits;
function init_unsigned_number() {
	return (init_unsigned_number = __esmMin((() => {
		init_guard();
		init_match();
		init_trim();
		init_take();
		init_many();
		init_char();
		init_unsigned_integer();
		AllowedDigits = [...Digit, "_"];
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/number.mjs
function TakeSign(input) {
	return Optional$1("-", input);
}
function TakeSignedNumber(input) {
	return Match(TakeSign(input), (Sign, SignRest) => Match(UnsignedNumber(SignRest), (UnsignedInteger, UnsignedIntegerRest) => [`${Sign}${UnsignedInteger}`, UnsignedIntegerRest], () => []), () => []);
}
/** Matches if next is a signed or unsigned Number */
function Number$1(input) {
	return TakeSignedNumber(Trim(input));
}
function init_number$1() {
	return (init_number$1 = __esmMin((() => {
		init_match();
		init_trim();
		init_optional();
		init_char();
		init_unsigned_number();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/until.mjs
function TakeOne(input) {
	return IsEqual(input, "") ? [] : [input.slice(0, 1), input.slice(1)];
}
function IsInputMatchSentinal(end, input) {
	const [left, ...right] = end;
	return IsString$2(left) ? input.startsWith(left) ? true : IsInputMatchSentinal(right, input) : false;
}
/** Match Input until but not including End. No match if End not found. */
function Until(end, input, result = "") {
	return Match(TakeOne(input), (One, Rest) => IsInputMatchSentinal(end, input) ? [result, input] : Until(end, Rest, `${result}${One}`), () => []);
}
function init_until() {
	return (init_until = __esmMin((() => {
		init_match();
		init_guard();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/span.mjs
function MultiLine(start, end, input) {
	return Match(Take([start], input), (_, Rest) => Match(Until([end], Rest), (Until, UntilRest) => Match(Take([end], UntilRest), (_, Rest) => [`${Until}`, Rest], () => []), () => []), () => []);
}
function SingleLine(start, end, input) {
	return Match(Take([start], input), (_, Rest) => Match(Until(["\n", end], Rest), (Until, UntilRest) => Match(Take([end], UntilRest), (_, EndRest) => [`${Until}`, EndRest], () => []), () => []), () => []);
}
/** Matches from Start and End capturing everything in-between. Start and End are consumed. */
function Span(start, end, multiLine, input) {
	return multiLine ? MultiLine(start, end, Trim(input)) : SingleLine(start, end, Trim(input));
}
function init_span() {
	return (init_span = __esmMin((() => {
		init_match();
		init_trim();
		init_char();
		init_take();
		init_until();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/string.mjs
function TakeInitial(quotes, input) {
	return Take(quotes, input);
}
function TakeSpan(quote, input) {
	return Span(quote, quote, false, input);
}
function TakeString(quotes, input) {
	return Match(TakeInitial(quotes, input), (Initial, InitialRest) => TakeSpan(Initial, `${Initial}${InitialRest}`), () => []);
}
/** Matches a literal String with the given quotes */
function String$1(quotes, input) {
	return TakeString(quotes, Trim(input));
}
function init_string$2() {
	return (init_string$2 = __esmMin((() => {
		init_match();
		init_take();
		init_trim();
		init_span();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/until_1.mjs
/** Match Input until but not including End. No match if End not found or match is zero-length. */
function Until_1(end, input) {
	return Match(Until(end, input), (Until, UntilRest) => IsEqual(Until, "") ? [] : [Until, UntilRest], () => []);
}
function init_until_1() {
	return (init_until_1 = __esmMin((() => {
		init_guard();
		init_match();
		init_until();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/token/index.mjs
function init_token() {
	return (init_token = __esmMin((() => {
		init_bigint$1();
		init_const();
		init_ident();
		init_integer$1();
		init_number$1();
		init_span();
		init_string$2();
		init_unsigned_integer();
		init_unsigned_number();
		init_until_1();
		init_until();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/parser.mjs
var If, GenericParameterExtendsEquals, GenericParameterExtends, GenericParameterEquals, GenericParameterIdentifier, GenericParameter, GenericParameterList_0, GenericParameterList, GenericParameters, GenericCallArgumentList_0, GenericCallArgumentList, GenericCallArguments, GenericCall, OptionalSemiColon, KeywordString, KeywordNumber, KeywordBoolean, KeywordUndefined, KeywordNull, KeywordInteger, KeywordBigInt, KeywordUnknown, KeywordAny, KeywordObject, KeywordNever, KeywordSymbol, KeywordVoid, KeywordThis, Keyword, TemplateInterpolate, TemplateSpan, TemplateBody, TemplateLiteralTypes, TemplateLiteral$1, LiteralBigInt, LiteralBoolean, LiteralNumber, LiteralString, Literal, KeyOf$1, IndexArray_0, IndexArray, Extends$1, Base, Factor, ExprTermTail, ExprTerm, ExprTail, Expr, ExprReadonly, ExprPipe, GenericType, InferType, Type, PropertyKeyNumber, PropertyKeyIdent, PropertyKeyQuoted, PropertyKeyIndex, PropertyKey, Readonly, Optional, Property, PropertyDelimiter, PropertyList_0, PropertyList, Properties, _Object_, ElementNamed, ElementReadonlyOptional, ElementReadonly, ElementOptional, ElementBase, Element, ElementList_0, ElementList, Tuple, ParameterReadonlyOptional, ParameterReadonly, ParameterOptional, ParameterType, ParameterBase, Parameter, ParameterList_0, ParameterList, _Function_, Constructor, MappedReadonly, MappedOptional, MappedAs, Mapped$1, Reference, Options$1, JsonNumber, JsonBoolean, JsonString, JsonNull, JsonProperty, JsonPropertyList_0, JsonPropertyList, JsonObject, JsonElementList_0, JsonElementList, JsonArray, Json, PatternBigInt, PatternString, PatternNumber, PatternInteger, PatternNever, PatternText, PatternBase, PatternGroup, PatternUnion, PatternTerm, PatternBody, Pattern, InterfaceDeclarationHeritageList_0, InterfaceDeclarationHeritageList, InterfaceDeclarationHeritage, InterfaceDeclarationGeneric, InterfaceDeclaration, TypeAliasDeclarationGeneric, TypeAliasDeclaration, ExportKeyword, ModuleDeclarationDelimiter, ModuleDeclarationList_0, ModuleDeclarationList, ModuleDeclaration, Module$1, Script$1;
function init_parser() {
	return (init_parser = __esmMin((() => {
		init_mapping();
		init_token();
		If = (result, left, right = () => []) => result.length === 2 ? left(result) : right();
		GenericParameterExtendsEquals = (input) => If(If(Ident(input), ([_0, input]) => If(Const("extends", input), ([_1, input]) => If(Type(input), ([_2, input]) => If(Const("=", input), ([_3, input]) => If(Type(input), ([_4, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4
		], input]))))), ([_0, input]) => [GenericParameterExtendsEqualsMapping(_0), input]);
		GenericParameterExtends = (input) => If(If(Ident(input), ([_0, input]) => If(Const("extends", input), ([_1, input]) => If(Type(input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [GenericParameterExtendsMapping(_0), input]);
		GenericParameterEquals = (input) => If(If(Ident(input), ([_0, input]) => If(Const("=", input), ([_1, input]) => If(Type(input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [GenericParameterEqualsMapping(_0), input]);
		GenericParameterIdentifier = (input) => If(Ident(input), ([_0, input]) => [GenericParameterIdentifierMapping(_0), input]);
		GenericParameter = (input) => If(If(GenericParameterExtendsEquals(input), ([_0, input]) => [_0, input], () => If(GenericParameterExtends(input), ([_0, input]) => [_0, input], () => If(GenericParameterEquals(input), ([_0, input]) => [_0, input], () => If(GenericParameterIdentifier(input), ([_0, input]) => [_0, input], () => [])))), ([_0, input]) => [GenericParameterMapping(_0), input]);
		GenericParameterList_0 = (input, result = []) => If(If(GenericParameter(input), ([_0, input]) => If(Const(",", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => GenericParameterList_0(input, [...result, _0]), () => [result, input]);
		GenericParameterList = (input) => If(If(GenericParameterList_0(input), ([_0, input]) => If(If(If(GenericParameter(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [GenericParameterListMapping(_0), input]);
		GenericParameters = (input) => If(If(Const("<", input), ([_0, input]) => If(GenericParameterList(input), ([_1, input]) => If(Const(">", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [GenericParametersMapping(_0), input]);
		GenericCallArgumentList_0 = (input, result = []) => If(If(Type(input), ([_0, input]) => If(Const(",", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => GenericCallArgumentList_0(input, [...result, _0]), () => [result, input]);
		GenericCallArgumentList = (input) => If(If(GenericCallArgumentList_0(input), ([_0, input]) => If(If(If(Type(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [GenericCallArgumentListMapping(_0), input]);
		GenericCallArguments = (input) => If(If(Const("<", input), ([_0, input]) => If(GenericCallArgumentList(input), ([_1, input]) => If(Const(">", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [GenericCallArgumentsMapping(_0), input]);
		GenericCall = (input) => If(If(Ident(input), ([_0, input]) => If(GenericCallArguments(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [GenericCallMapping(_0), input]);
		OptionalSemiColon = (input) => If(If(If(Const(";", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [OptionalSemiColonMapping(_0), input]);
		KeywordString = (input) => If(Const("string", input), ([_0, input]) => [KeywordStringMapping(_0), input]);
		KeywordNumber = (input) => If(Const("number", input), ([_0, input]) => [KeywordNumberMapping(_0), input]);
		KeywordBoolean = (input) => If(Const("boolean", input), ([_0, input]) => [KeywordBooleanMapping(_0), input]);
		KeywordUndefined = (input) => If(Const("undefined", input), ([_0, input]) => [KeywordUndefinedMapping(_0), input]);
		KeywordNull = (input) => If(Const("null", input), ([_0, input]) => [KeywordNullMapping(_0), input]);
		KeywordInteger = (input) => If(Const("integer", input), ([_0, input]) => [KeywordIntegerMapping(_0), input]);
		KeywordBigInt = (input) => If(Const("bigint", input), ([_0, input]) => [KeywordBigIntMapping(_0), input]);
		KeywordUnknown = (input) => If(Const("unknown", input), ([_0, input]) => [KeywordUnknownMapping(_0), input]);
		KeywordAny = (input) => If(Const("any", input), ([_0, input]) => [KeywordAnyMapping(_0), input]);
		KeywordObject = (input) => If(Const("object", input), ([_0, input]) => [KeywordObjectMapping(_0), input]);
		KeywordNever = (input) => If(Const("never", input), ([_0, input]) => [KeywordNeverMapping(_0), input]);
		KeywordSymbol = (input) => If(Const("symbol", input), ([_0, input]) => [KeywordSymbolMapping(_0), input]);
		KeywordVoid = (input) => If(Const("void", input), ([_0, input]) => [KeywordVoidMapping(_0), input]);
		KeywordThis = (input) => If(Const("this", input), ([_0, input]) => [KeywordThisMapping(_0), input]);
		Keyword = (input) => If(If(KeywordString(input), ([_0, input]) => [_0, input], () => If(KeywordNumber(input), ([_0, input]) => [_0, input], () => If(KeywordBoolean(input), ([_0, input]) => [_0, input], () => If(KeywordUndefined(input), ([_0, input]) => [_0, input], () => If(KeywordNull(input), ([_0, input]) => [_0, input], () => If(KeywordInteger(input), ([_0, input]) => [_0, input], () => If(KeywordBigInt(input), ([_0, input]) => [_0, input], () => If(KeywordUnknown(input), ([_0, input]) => [_0, input], () => If(KeywordAny(input), ([_0, input]) => [_0, input], () => If(KeywordObject(input), ([_0, input]) => [_0, input], () => If(KeywordNever(input), ([_0, input]) => [_0, input], () => If(KeywordSymbol(input), ([_0, input]) => [_0, input], () => If(KeywordVoid(input), ([_0, input]) => [_0, input], () => If(KeywordThis(input), ([_0, input]) => [_0, input], () => [])))))))))))))), ([_0, input]) => [KeywordMapping(_0), input]);
		TemplateInterpolate = (input) => If(If(Const("${", input), ([_0, input]) => If(Type(input), ([_1, input]) => If(Const("}", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [TemplateInterpolateMapping(_0), input]);
		TemplateSpan = (input) => If(Until(["${", "`"], input), ([_0, input]) => [TemplateSpanMapping(_0), input]);
		TemplateBody = (input) => If(If(If(TemplateSpan(input), ([_0, input]) => If(TemplateInterpolate(input), ([_1, input]) => If(TemplateBody(input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [_0, input], () => If(If(TemplateSpan(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If(If(TemplateSpan(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => []))), ([_0, input]) => [TemplateBodyMapping(_0), input]);
		TemplateLiteralTypes = (input) => If(If(Const("`", input), ([_0, input]) => If(TemplateBody(input), ([_1, input]) => If(Const("`", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [TemplateLiteralTypesMapping(_0), input]);
		TemplateLiteral$1 = (input) => If(TemplateLiteralTypes(input), ([_0, input]) => [TemplateLiteralMapping(_0), input]);
		LiteralBigInt = (input) => If(BigInt$1(input), ([_0, input]) => [LiteralBigIntMapping(_0), input]);
		LiteralBoolean = (input) => If(If(Const("true", input), ([_0, input]) => [_0, input], () => If(Const("false", input), ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [LiteralBooleanMapping(_0), input]);
		LiteralNumber = (input) => If(Number$1(input), ([_0, input]) => [LiteralNumberMapping(_0), input]);
		LiteralString = (input) => If(String$1(["'", "\""], input), ([_0, input]) => [LiteralStringMapping(_0), input]);
		Literal = (input) => If(If(LiteralBigInt(input), ([_0, input]) => [_0, input], () => If(LiteralBoolean(input), ([_0, input]) => [_0, input], () => If(LiteralNumber(input), ([_0, input]) => [_0, input], () => If(LiteralString(input), ([_0, input]) => [_0, input], () => [])))), ([_0, input]) => [LiteralMapping(_0), input]);
		KeyOf$1 = (input) => If(If(If(Const("keyof", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [KeyOfMapping(_0), input]);
		IndexArray_0 = (input, result = []) => If(If(If(Const("[", input), ([_0, input]) => If(Type(input), ([_1, input]) => If(Const("]", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [_0, input], () => If(If(Const("[", input), ([_0, input]) => If(Const("]", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => [])), ([_0, input]) => IndexArray_0(input, [...result, _0]), () => [result, input]);
		IndexArray = (input) => If(IndexArray_0(input), ([_0, input]) => [IndexArrayMapping(_0), input]);
		Extends$1 = (input) => If(If(If(Const("extends", input), ([_0, input]) => If(Type(input), ([_1, input]) => If(Const("?", input), ([_2, input]) => If(Type(input), ([_3, input]) => If(Const(":", input), ([_4, input]) => If(Type(input), ([_5, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4,
			_5
		], input])))))), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [ExtendsMapping(_0), input]);
		Base = (input) => If(If(If(Const("(", input), ([_0, input]) => If(Type(input), ([_1, input]) => If(Const(")", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [_0, input], () => If(Keyword(input), ([_0, input]) => [_0, input], () => If(_Object_(input), ([_0, input]) => [_0, input], () => If(Tuple(input), ([_0, input]) => [_0, input], () => If(TemplateLiteral$1(input), ([_0, input]) => [_0, input], () => If(Literal(input), ([_0, input]) => [_0, input], () => If(Constructor(input), ([_0, input]) => [_0, input], () => If(_Function_(input), ([_0, input]) => [_0, input], () => If(Mapped$1(input), ([_0, input]) => [_0, input], () => If(Options$1(input), ([_0, input]) => [_0, input], () => If(GenericCall(input), ([_0, input]) => [_0, input], () => If(Reference(input), ([_0, input]) => [_0, input], () => [])))))))))))), ([_0, input]) => [BaseMapping(_0), input]);
		Factor = (input) => If(If(KeyOf$1(input), ([_0, input]) => If(Base(input), ([_1, input]) => If(IndexArray(input), ([_2, input]) => If(Extends$1(input), ([_3, input]) => [[
			_0,
			_1,
			_2,
			_3
		], input])))), ([_0, input]) => [FactorMapping(_0), input]);
		ExprTermTail = (input) => If(If(If(Const("&", input), ([_0, input]) => If(Factor(input), ([_1, input]) => If(ExprTermTail(input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [ExprTermTailMapping(_0), input]);
		ExprTerm = (input) => If(If(Factor(input), ([_0, input]) => If(ExprTermTail(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [ExprTermMapping(_0), input]);
		ExprTail = (input) => If(If(If(Const("|", input), ([_0, input]) => If(ExprTerm(input), ([_1, input]) => If(ExprTail(input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [ExprTailMapping(_0), input]);
		Expr = (input) => If(If(ExprTerm(input), ([_0, input]) => If(ExprTail(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [ExprMapping(_0), input]);
		ExprReadonly = (input) => If(If(Const("readonly", input), ([_0, input]) => If(Expr(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [ExprReadonlyMapping(_0), input]);
		ExprPipe = (input) => If(If(Const("|", input), ([_0, input]) => If(Expr(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [ExprPipeMapping(_0), input]);
		GenericType = (input) => If(If(GenericParameters(input), ([_0, input]) => If(Const("=", input), ([_1, input]) => If(Type(input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [GenericTypeMapping(_0), input]);
		InferType = (input) => If(If(If(Const("infer", input), ([_0, input]) => If(Ident(input), ([_1, input]) => If(Const("extends", input), ([_2, input]) => If(Expr(input), ([_3, input]) => [[
			_0,
			_1,
			_2,
			_3
		], input])))), ([_0, input]) => [_0, input], () => If(If(Const("infer", input), ([_0, input]) => If(Ident(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [InferTypeMapping(_0), input]);
		Type = (input) => If(If(InferType(input), ([_0, input]) => [_0, input], () => If(ExprPipe(input), ([_0, input]) => [_0, input], () => If(ExprReadonly(input), ([_0, input]) => [_0, input], () => If(Expr(input), ([_0, input]) => [_0, input], () => [])))), ([_0, input]) => [TypeMapping(_0), input]);
		PropertyKeyNumber = (input) => If(Number$1(input), ([_0, input]) => [PropertyKeyNumberMapping(_0), input]);
		PropertyKeyIdent = (input) => If(Ident(input), ([_0, input]) => [PropertyKeyIdentMapping(_0), input]);
		PropertyKeyQuoted = (input) => If(String$1(["'", "\""], input), ([_0, input]) => [PropertyKeyQuotedMapping(_0), input]);
		PropertyKeyIndex = (input) => If(If(Const("[", input), ([_0, input]) => If(Ident(input), ([_1, input]) => If(Const(":", input), ([_2, input]) => If(If(KeywordInteger(input), ([_0, input]) => [_0, input], () => If(KeywordNumber(input), ([_0, input]) => [_0, input], () => If(KeywordString(input), ([_0, input]) => [_0, input], () => If(KeywordSymbol(input), ([_0, input]) => [_0, input], () => [])))), ([_3, input]) => If(Const("]", input), ([_4, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4
		], input]))))), ([_0, input]) => [PropertyKeyIndexMapping(_0), input]);
		PropertyKey = (input) => If(If(PropertyKeyNumber(input), ([_0, input]) => [_0, input], () => If(PropertyKeyIdent(input), ([_0, input]) => [_0, input], () => If(PropertyKeyQuoted(input), ([_0, input]) => [_0, input], () => If(PropertyKeyIndex(input), ([_0, input]) => [_0, input], () => [])))), ([_0, input]) => [PropertyKeyMapping(_0), input]);
		Readonly = (input) => If(If(If(Const("readonly", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [ReadonlyMapping(_0), input]);
		Optional = (input) => If(If(If(Const("?", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [OptionalMapping(_0), input]);
		Property = (input) => If(If(Readonly(input), ([_0, input]) => If(PropertyKey(input), ([_1, input]) => If(Optional(input), ([_2, input]) => If(Const(":", input), ([_3, input]) => If(Type(input), ([_4, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4
		], input]))))), ([_0, input]) => [PropertyMapping(_0), input]);
		PropertyDelimiter = (input) => If(If(If(Const(",", input), ([_0, input]) => If(Const("\n", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => If(If(Const(";", input), ([_0, input]) => If(Const("\n", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => If(If(Const(",", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If(If(Const(";", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If(If(Const("\n", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => []))))), ([_0, input]) => [PropertyDelimiterMapping(_0), input]);
		PropertyList_0 = (input, result = []) => If(If(Property(input), ([_0, input]) => If(PropertyDelimiter(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => PropertyList_0(input, [...result, _0]), () => [result, input]);
		PropertyList = (input) => If(If(PropertyList_0(input), ([_0, input]) => If(If(If(Property(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [PropertyListMapping(_0), input]);
		Properties = (input) => If(If(Const("{", input), ([_0, input]) => If(PropertyList(input), ([_1, input]) => If(Const("}", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [PropertiesMapping(_0), input]);
		_Object_ = (input) => If(Properties(input), ([_0, input]) => [_Object_Mapping(_0), input]);
		ElementNamed = (input) => If(If(If(Ident(input), ([_0, input]) => If(Const("?", input), ([_1, input]) => If(Const(":", input), ([_2, input]) => If(Const("readonly", input), ([_3, input]) => If(Type(input), ([_4, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4
		], input]))))), ([_0, input]) => [_0, input], () => If(If(Ident(input), ([_0, input]) => If(Const(":", input), ([_1, input]) => If(Const("readonly", input), ([_2, input]) => If(Type(input), ([_3, input]) => [[
			_0,
			_1,
			_2,
			_3
		], input])))), ([_0, input]) => [_0, input], () => If(If(Ident(input), ([_0, input]) => If(Const("?", input), ([_1, input]) => If(Const(":", input), ([_2, input]) => If(Type(input), ([_3, input]) => [[
			_0,
			_1,
			_2,
			_3
		], input])))), ([_0, input]) => [_0, input], () => If(If(Ident(input), ([_0, input]) => If(Const(":", input), ([_1, input]) => If(Type(input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [_0, input], () => [])))), ([_0, input]) => [ElementNamedMapping(_0), input]);
		ElementReadonlyOptional = (input) => If(If(Const("readonly", input), ([_0, input]) => If(Type(input), ([_1, input]) => If(Const("?", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [ElementReadonlyOptionalMapping(_0), input]);
		ElementReadonly = (input) => If(If(Const("readonly", input), ([_0, input]) => If(Type(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [ElementReadonlyMapping(_0), input]);
		ElementOptional = (input) => If(If(Type(input), ([_0, input]) => If(Const("?", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [ElementOptionalMapping(_0), input]);
		ElementBase = (input) => If(If(ElementNamed(input), ([_0, input]) => [_0, input], () => If(ElementReadonlyOptional(input), ([_0, input]) => [_0, input], () => If(ElementReadonly(input), ([_0, input]) => [_0, input], () => If(ElementOptional(input), ([_0, input]) => [_0, input], () => If(Type(input), ([_0, input]) => [_0, input], () => []))))), ([_0, input]) => [ElementBaseMapping(_0), input]);
		Element = (input) => If(If(If(Const("...", input), ([_0, input]) => If(ElementBase(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => If(If(ElementBase(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [ElementMapping(_0), input]);
		ElementList_0 = (input, result = []) => If(If(Element(input), ([_0, input]) => If(Const(",", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => ElementList_0(input, [...result, _0]), () => [result, input]);
		ElementList = (input) => If(If(ElementList_0(input), ([_0, input]) => If(If(If(Element(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [ElementListMapping(_0), input]);
		Tuple = (input) => If(If(Const("[", input), ([_0, input]) => If(ElementList(input), ([_1, input]) => If(Const("]", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [TupleMapping(_0), input]);
		ParameterReadonlyOptional = (input) => If(If(Ident(input), ([_0, input]) => If(Const("?", input), ([_1, input]) => If(Const(":", input), ([_2, input]) => If(Const("readonly", input), ([_3, input]) => If(Type(input), ([_4, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4
		], input]))))), ([_0, input]) => [ParameterReadonlyOptionalMapping(_0), input]);
		ParameterReadonly = (input) => If(If(Ident(input), ([_0, input]) => If(Const(":", input), ([_1, input]) => If(Const("readonly", input), ([_2, input]) => If(Type(input), ([_3, input]) => [[
			_0,
			_1,
			_2,
			_3
		], input])))), ([_0, input]) => [ParameterReadonlyMapping(_0), input]);
		ParameterOptional = (input) => If(If(Ident(input), ([_0, input]) => If(Const("?", input), ([_1, input]) => If(Const(":", input), ([_2, input]) => If(Type(input), ([_3, input]) => [[
			_0,
			_1,
			_2,
			_3
		], input])))), ([_0, input]) => [ParameterOptionalMapping(_0), input]);
		ParameterType = (input) => If(If(Ident(input), ([_0, input]) => If(Const(":", input), ([_1, input]) => If(Type(input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [ParameterTypeMapping(_0), input]);
		ParameterBase = (input) => If(If(ParameterReadonlyOptional(input), ([_0, input]) => [_0, input], () => If(ParameterReadonly(input), ([_0, input]) => [_0, input], () => If(ParameterOptional(input), ([_0, input]) => [_0, input], () => If(ParameterType(input), ([_0, input]) => [_0, input], () => [])))), ([_0, input]) => [ParameterBaseMapping(_0), input]);
		Parameter = (input) => If(If(If(Const("...", input), ([_0, input]) => If(ParameterBase(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => If(If(ParameterBase(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [ParameterMapping(_0), input]);
		ParameterList_0 = (input, result = []) => If(If(Parameter(input), ([_0, input]) => If(Const(",", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => ParameterList_0(input, [...result, _0]), () => [result, input]);
		ParameterList = (input) => If(If(ParameterList_0(input), ([_0, input]) => If(If(If(Parameter(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [ParameterListMapping(_0), input]);
		_Function_ = (input) => If(If(Const("(", input), ([_0, input]) => If(ParameterList(input), ([_1, input]) => If(Const(")", input), ([_2, input]) => If(Const("=>", input), ([_3, input]) => If(Type(input), ([_4, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4
		], input]))))), ([_0, input]) => [_Function_Mapping(_0), input]);
		Constructor = (input) => If(If(Const("new", input), ([_0, input]) => If(Const("(", input), ([_1, input]) => If(ParameterList(input), ([_2, input]) => If(Const(")", input), ([_3, input]) => If(Const("=>", input), ([_4, input]) => If(Type(input), ([_5, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4,
			_5
		], input])))))), ([_0, input]) => [ConstructorMapping(_0), input]);
		MappedReadonly = (input) => If(If(If(Const("+", input), ([_0, input]) => If(Const("readonly", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => If(If(Const("-", input), ([_0, input]) => If(Const("readonly", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => If(If(Const("readonly", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])))), ([_0, input]) => [MappedReadonlyMapping(_0), input]);
		MappedOptional = (input) => If(If(If(Const("+", input), ([_0, input]) => If(Const("?", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => If(If(Const("-", input), ([_0, input]) => If(Const("?", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => If(If(Const("?", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])))), ([_0, input]) => [MappedOptionalMapping(_0), input]);
		MappedAs = (input) => If(If(If(Const("as", input), ([_0, input]) => If(Type(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [MappedAsMapping(_0), input]);
		Mapped$1 = (input) => If(If(Const("{", input), ([_0, input]) => If(MappedReadonly(input), ([_1, input]) => If(Const("[", input), ([_2, input]) => If(Ident(input), ([_3, input]) => If(Const("in", input), ([_4, input]) => If(Type(input), ([_5, input]) => If(MappedAs(input), ([_6, input]) => If(Const("]", input), ([_7, input]) => If(MappedOptional(input), ([_8, input]) => If(Const(":", input), ([_9, input]) => If(Type(input), ([_10, input]) => If(OptionalSemiColon(input), ([_11, input]) => If(Const("}", input), ([_12, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4,
			_5,
			_6,
			_7,
			_8,
			_9,
			_10,
			_11,
			_12
		], input]))))))))))))), ([_0, input]) => [MappedMapping(_0), input]);
		Reference = (input) => If(Ident(input), ([_0, input]) => [ReferenceMapping(_0), input]);
		Options$1 = (input) => If(If(Const("Options", input), ([_0, input]) => If(Const("<", input), ([_1, input]) => If(Type(input), ([_2, input]) => If(Const(",", input), ([_3, input]) => If(JsonObject(input), ([_4, input]) => If(Const(">", input), ([_5, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4,
			_5
		], input])))))), ([_0, input]) => [OptionsMapping(_0), input]);
		JsonNumber = (input) => If(Number$1(input), ([_0, input]) => [JsonNumberMapping(_0), input]);
		JsonBoolean = (input) => If(If(Const("true", input), ([_0, input]) => [_0, input], () => If(Const("false", input), ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [JsonBooleanMapping(_0), input]);
		JsonString = (input) => If(String$1(["\"", "'"], input), ([_0, input]) => [JsonStringMapping(_0), input]);
		JsonNull = (input) => If(Const("null", input), ([_0, input]) => [JsonNullMapping(_0), input]);
		JsonProperty = (input) => If(If(PropertyKey(input), ([_0, input]) => If(Const(":", input), ([_1, input]) => If(Json(input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [JsonPropertyMapping(_0), input]);
		JsonPropertyList_0 = (input, result = []) => If(If(JsonProperty(input), ([_0, input]) => If(PropertyDelimiter(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => JsonPropertyList_0(input, [...result, _0]), () => [result, input]);
		JsonPropertyList = (input) => If(If(JsonPropertyList_0(input), ([_0, input]) => If(If(If(JsonProperty(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [JsonPropertyListMapping(_0), input]);
		JsonObject = (input) => If(If(Const("{", input), ([_0, input]) => If(JsonPropertyList(input), ([_1, input]) => If(Const("}", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [JsonObjectMapping(_0), input]);
		JsonElementList_0 = (input, result = []) => If(If(Json(input), ([_0, input]) => If(Const(",", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => JsonElementList_0(input, [...result, _0]), () => [result, input]);
		JsonElementList = (input) => If(If(JsonElementList_0(input), ([_0, input]) => If(If(If(Json(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [JsonElementListMapping(_0), input]);
		JsonArray = (input) => If(If(Const("[", input), ([_0, input]) => If(JsonElementList(input), ([_1, input]) => If(Const("]", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [JsonArrayMapping(_0), input]);
		Json = (input) => If(If(JsonNumber(input), ([_0, input]) => [_0, input], () => If(JsonBoolean(input), ([_0, input]) => [_0, input], () => If(JsonString(input), ([_0, input]) => [_0, input], () => If(JsonNull(input), ([_0, input]) => [_0, input], () => If(JsonObject(input), ([_0, input]) => [_0, input], () => If(JsonArray(input), ([_0, input]) => [_0, input], () => [])))))), ([_0, input]) => [JsonMapping(_0), input]);
		PatternBigInt = (input) => If(Const("-?(?:0|[1-9][0-9]*)n", input), ([_0, input]) => [PatternBigIntMapping(_0), input]);
		PatternString = (input) => If(Const(".*", input), ([_0, input]) => [PatternStringMapping(_0), input]);
		PatternNumber = (input) => If(Const("-?(?:0|[1-9][0-9]*)(?:.[0-9]+)?", input), ([_0, input]) => [PatternNumberMapping(_0), input]);
		PatternInteger = (input) => If(Const("-?(?:0|[1-9][0-9]*)", input), ([_0, input]) => [PatternIntegerMapping(_0), input]);
		PatternNever = (input) => If(Const("(?!)", input), ([_0, input]) => [PatternNeverMapping(_0), input]);
		PatternText = (input) => If(Until_1([
			"-?(?:0|[1-9][0-9]*)n",
			".*",
			"-?(?:0|[1-9][0-9]*)(?:.[0-9]+)?",
			"-?(?:0|[1-9][0-9]*)",
			"(?!)",
			"(",
			")",
			"$",
			"|"
		], input), ([_0, input]) => [PatternTextMapping(_0), input]);
		PatternBase = (input) => If(If(PatternBigInt(input), ([_0, input]) => [_0, input], () => If(PatternString(input), ([_0, input]) => [_0, input], () => If(PatternNumber(input), ([_0, input]) => [_0, input], () => If(PatternInteger(input), ([_0, input]) => [_0, input], () => If(PatternNever(input), ([_0, input]) => [_0, input], () => If(PatternGroup(input), ([_0, input]) => [_0, input], () => If(PatternText(input), ([_0, input]) => [_0, input], () => []))))))), ([_0, input]) => [PatternBaseMapping(_0), input]);
		PatternGroup = (input) => If(If(Const("(", input), ([_0, input]) => If(PatternBody(input), ([_1, input]) => If(Const(")", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [PatternGroupMapping(_0), input]);
		PatternUnion = (input) => If(If(If(PatternTerm(input), ([_0, input]) => If(Const("|", input), ([_1, input]) => If(PatternUnion(input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [_0, input], () => If(If(PatternTerm(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => []))), ([_0, input]) => [PatternUnionMapping(_0), input]);
		PatternTerm = (input) => If(If(PatternBase(input), ([_0, input]) => If(PatternBody(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [PatternTermMapping(_0), input]);
		PatternBody = (input) => If(If(PatternUnion(input), ([_0, input]) => [_0, input], () => If(PatternTerm(input), ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [PatternBodyMapping(_0), input]);
		Pattern = (input) => If(If(Const("^", input), ([_0, input]) => If(PatternBody(input), ([_1, input]) => If(Const("$", input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [PatternMapping(_0), input]);
		InterfaceDeclarationHeritageList_0 = (input, result = []) => If(If(Type(input), ([_0, input]) => If(Const(",", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => InterfaceDeclarationHeritageList_0(input, [...result, _0]), () => [result, input]);
		InterfaceDeclarationHeritageList = (input) => If(If(InterfaceDeclarationHeritageList_0(input), ([_0, input]) => If(If(If(Type(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [InterfaceDeclarationHeritageListMapping(_0), input]);
		InterfaceDeclarationHeritage = (input) => If(If(If(Const("extends", input), ([_0, input]) => If(InterfaceDeclarationHeritageList(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [InterfaceDeclarationHeritageMapping(_0), input]);
		InterfaceDeclarationGeneric = (input) => If(If(Const("interface", input), ([_0, input]) => If(Ident(input), ([_1, input]) => If(GenericParameters(input), ([_2, input]) => If(InterfaceDeclarationHeritage(input), ([_3, input]) => If(Properties(input), ([_4, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4
		], input]))))), ([_0, input]) => [InterfaceDeclarationGenericMapping(_0), input]);
		InterfaceDeclaration = (input) => If(If(Const("interface", input), ([_0, input]) => If(Ident(input), ([_1, input]) => If(InterfaceDeclarationHeritage(input), ([_2, input]) => If(Properties(input), ([_3, input]) => [[
			_0,
			_1,
			_2,
			_3
		], input])))), ([_0, input]) => [InterfaceDeclarationMapping(_0), input]);
		TypeAliasDeclarationGeneric = (input) => If(If(Const("type", input), ([_0, input]) => If(Ident(input), ([_1, input]) => If(GenericParameters(input), ([_2, input]) => If(Const("=", input), ([_3, input]) => If(Type(input), ([_4, input]) => [[
			_0,
			_1,
			_2,
			_3,
			_4
		], input]))))), ([_0, input]) => [TypeAliasDeclarationGenericMapping(_0), input]);
		TypeAliasDeclaration = (input) => If(If(Const("type", input), ([_0, input]) => If(Ident(input), ([_1, input]) => If(Const("=", input), ([_2, input]) => If(Type(input), ([_3, input]) => [[
			_0,
			_1,
			_2,
			_3
		], input])))), ([_0, input]) => [TypeAliasDeclarationMapping(_0), input]);
		ExportKeyword = (input) => If(If(If(Const("export", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_0, input]) => [ExportKeywordMapping(_0), input]);
		ModuleDeclarationDelimiter = (input) => If(If(If(Const(";", input), ([_0, input]) => If(Const("\n", input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [_0, input], () => If(If(Const(";", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If(If(Const("\n", input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => []))), ([_0, input]) => [ModuleDeclarationDelimiterMapping(_0), input]);
		ModuleDeclarationList_0 = (input, result = []) => If(If(ModuleDeclaration(input), ([_0, input]) => If(ModuleDeclarationDelimiter(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => ModuleDeclarationList_0(input, [...result, _0]), () => [result, input]);
		ModuleDeclarationList = (input) => If(If(ModuleDeclarationList_0(input), ([_0, input]) => If(If(If(ModuleDeclaration(input), ([_0, input]) => [[_0], input]), ([_0, input]) => [_0, input], () => If([[], input], ([_0, input]) => [_0, input], () => [])), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [ModuleDeclarationListMapping(_0), input]);
		ModuleDeclaration = (input) => If(If(ExportKeyword(input), ([_0, input]) => If(If(InterfaceDeclarationGeneric(input), ([_0, input]) => [_0, input], () => If(InterfaceDeclaration(input), ([_0, input]) => [_0, input], () => If(TypeAliasDeclarationGeneric(input), ([_0, input]) => [_0, input], () => If(TypeAliasDeclaration(input), ([_0, input]) => [_0, input], () => [])))), ([_1, input]) => If(OptionalSemiColon(input), ([_2, input]) => [[
			_0,
			_1,
			_2
		], input]))), ([_0, input]) => [ModuleDeclarationMapping(_0), input]);
		Module$1 = (input) => If(If(ModuleDeclaration(input), ([_0, input]) => If(ModuleDeclarationList(input), ([_1, input]) => [[_0, _1], input])), ([_0, input]) => [ModuleMapping(_0), input]);
		Script$1 = (input) => If(If(Module$1(input), ([_0, input]) => [_0, input], () => If(GenericType(input), ([_0, input]) => [_0, input], () => If(Type(input), ([_0, input]) => [_0, input], () => []))), ([_0, input]) => [ScriptMapping(_0), input]);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/patterns/template.mjs
/** Parses a Template into a TemplateLiteral types */
function ParseTemplateIntoTypes(template) {
	const parsed = TemplateLiteralTypes(`\`${template}\``);
	return IsEqual(parsed.length, 2) ? parsed[0] : Unreachable$1();
}
function init_template() {
	return (init_template = __esmMin((() => {
		init_guard();
		init_parser();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/template-literal.mjs
/** Creates a deferred TemplateLiteral action. */
function TemplateLiteralDeferred(types, options = {}) {
	return Deferred("TemplateLiteral", [types], options);
}
function TemplateLiteralFromTypes(types) {
	return Instantiate({}, TemplateLiteralDeferred(types, {}));
}
function TemplateLiteralFromString(template) {
	return TemplateLiteralFromTypes(ParseTemplateIntoTypes(template));
}
/** Creates a TemplateLiteral type. */
function TemplateLiteral(input, options = {}) {
	return Update(IsString$2(input) ? TemplateLiteralFromString(input) : TemplateLiteralFromTypes(input), {}, options);
}
/** Returns true if the given value is TTemplateLiteral. */
function IsTemplateLiteral(value) {
	return IsKind(value, "TemplateLiteral");
}
function init_template_literal() {
	return (init_template_literal = __esmMin((() => {
		init_guard();
		init_schema();
		init_deferred();
		init_template();
		init_instantiate$27();
		init_system();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/result.mjs
var result_exports = /* @__PURE__ */ __exportAll({
	ExtendsFalse: () => ExtendsFalse,
	ExtendsTrue: () => ExtendsTrue,
	ExtendsUnion: () => ExtendsUnion$1,
	IsExtendsFalse: () => IsExtendsFalse,
	IsExtendsTrue: () => IsExtendsTrue,
	IsExtendsTrueLike: () => IsExtendsTrueLike,
	IsExtendsUnion: () => IsExtendsUnion
});
function ExtendsUnion$1(inferred) {
	return Create({ ["~kind"]: "ExtendsUnion" }, { inferred });
}
function IsExtendsUnion(value) {
	return IsObject$1(value) && HasPropertyKey(value, "~kind") && HasPropertyKey(value, "inferred") && IsEqual(value["~kind"], "ExtendsUnion") && IsObject$1(value.inferred);
}
function ExtendsTrue(inferred) {
	return Create({ ["~kind"]: "ExtendsTrue" }, { inferred });
}
function IsExtendsTrue(value) {
	return IsObject$1(value) && HasPropertyKey(value, "~kind") && HasPropertyKey(value, "inferred") && IsEqual(value["~kind"], "ExtendsTrue") && IsObject$1(value.inferred);
}
function ExtendsFalse() {
	return Create({ ["~kind"]: "ExtendsFalse" }, {});
}
function IsExtendsFalse(value) {
	return IsObject$1(value) && HasPropertyKey(value, "~kind") && IsEqual(value["~kind"], "ExtendsFalse");
}
function IsExtendsTrueLike(value) {
	return IsExtendsUnion(value) || IsExtendsTrue(value);
}
function init_result() {
	return (init_result = __esmMin((() => {
		init_guard();
		init_create();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/enum/enum-to-union.mjs
function FromEnumValue(value) {
	return IsString$2(value) || IsNumber$2(value) ? Literal$1(value) : IsNull$1(value) ? Null() : Never();
}
function EnumValuesToVariants(values) {
	return values.map((value) => FromEnumValue(value));
}
function EnumValuesToUnion(values) {
	return Union(EnumValuesToVariants(values));
}
function EnumToUnion(type) {
	return EnumValuesToUnion(type.enum);
}
function init_enum_to_union() {
	return (init_enum_to_union = __esmMin((() => {
		init_guard();
		init_union();
		init_literal();
		init_null();
		init_never();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/extends-right.mjs
function ExtendsRightInfer(inferred, name, left, right) {
	const check = ExtendsLeft(inferred, left, right);
	return IsExtendsTrueLike(check) ? ExtendsTrue(Assign(Assign(inferred, check.inferred), { [name]: left })) : ExtendsFalse();
}
function ExtendsRightAny(inferred, left) {
	return ExtendsTrue(inferred);
}
function ExtendsRightEnum(inferred, left, right) {
	return ExtendsLeft(inferred, left, EnumValuesToUnion(right));
}
function ExtendsRightIntersect(inferred, left, right) {
	const [head, ...tail] = right;
	return IsSchema(head) ? (() => {
		const check = ExtendsLeft(inferred, left, head);
		return IsExtendsTrueLike(check) ? ExtendsRightIntersect(check.inferred, left, tail) : ExtendsFalse();
	})() : ExtendsTrue(inferred);
}
function ExtendsRightTemplateLiteral(inferred, left, right) {
	return ExtendsLeft(inferred, left, TemplateLiteralDecode(right));
}
function ExtendsRightUnion(inferred, left, right) {
	const [head, ...tail] = right;
	return IsSchema(head) ? (() => {
		const check = ExtendsLeft(inferred, left, head);
		return IsExtendsTrueLike(check) ? ExtendsTrue(check.inferred) : ExtendsRightUnion(inferred, left, tail);
	})() : ExtendsFalse();
}
function ExtendsRight(inferred, left, right) {
	return IsAny(right) ? ExtendsRightAny(inferred, left) : IsEnum(right) ? ExtendsRightEnum(inferred, left, right.enum) : IsInfer(right) ? ExtendsRightInfer(inferred, right.name, left, right.extends) : IsIntersect(right) ? ExtendsRightIntersect(inferred, left, right.allOf) : IsTemplateLiteral(right) ? ExtendsRightTemplateLiteral(inferred, left, right.pattern) : IsUnion(right) ? ExtendsRightUnion(inferred, left, right.anyOf) : IsUnknown(right) ? ExtendsTrue(inferred) : ExtendsFalse();
}
function init_extends_right() {
	return (init_extends_right = __esmMin((() => {
		init_assign();
		init_schema();
		init_any();
		init_enum();
		init_infer();
		init_intersect();
		init_template_literal();
		init_union();
		init_unknown();
		init_extends_left();
		init_result();
		init_decode();
		init_enum_to_union();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/any.mjs
function ExtendsAny(inferred, left, right) {
	return IsInfer(right) ? ExtendsRight(inferred, left, right) : IsAny(right) ? ExtendsTrue(inferred) : IsUnknown(right) ? ExtendsTrue(inferred) : ExtendsUnion$1(inferred);
}
function init_any$1() {
	return (init_any$1 = __esmMin((() => {
		init_infer();
		init_any();
		init_unknown();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/array.mjs
function ExtendsImmutable(left, right) {
	const isImmutableLeft = IsImmutable(left);
	const isImmutableRight = IsImmutable(right);
	return isImmutableLeft && isImmutableRight ? true : !isImmutableLeft && isImmutableRight ? true : isImmutableLeft && !isImmutableRight ? false : true;
}
function ExtendsArray(inferred, arrayLeft, left, right) {
	return IsArray(right) ? ExtendsImmutable(arrayLeft, right) ? ExtendsLeft(inferred, left, right.items) : ExtendsFalse() : ExtendsRight(inferred, arrayLeft, right);
}
function init_array$1() {
	return (init_array$1 = __esmMin((() => {
		init_array();
		init__immutable();
		init_extends_right();
		init_extends_left();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/async-iterator.mjs
function ExtendsAsyncIterator(inferred, left, right) {
	return IsAsyncIterator(right) ? ExtendsLeft(inferred, left, right.iteratorItems) : ExtendsRight(inferred, AsyncIterator(left), right);
}
function init_async_iterator$1() {
	return (init_async_iterator$1 = __esmMin((() => {
		init_async_iterator();
		init_extends_right();
		init_extends_left();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/bigint.mjs
function ExtendsBigInt(inferred, left, right) {
	return IsBigInt(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, left, right);
}
function init_bigint$2() {
	return (init_bigint$2 = __esmMin((() => {
		init_bigint();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/boolean.mjs
function ExtendsBoolean(inferred, left, right) {
	return IsBoolean(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, left, right);
}
function init_boolean$1() {
	return (init_boolean$1 = __esmMin((() => {
		init_boolean();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/parameters.mjs
function ParameterCompare(inferred, left, leftRest, right, rightRest) {
	const checkLeft = IsInfer(right) ? left : right;
	const checkRight = IsInfer(right) ? right : left;
	const isLeftOptional = IsOptional(left);
	const isRightOptional = IsOptional(right);
	const check = ExtendsLeft(inferred, checkLeft, checkRight);
	return !isLeftOptional && isRightOptional ? ExtendsFalse() : IsExtendsTrueLike(check) ? ExtendsParameters(check.inferred, leftRest, rightRest) : ExtendsFalse();
}
function ParameterRight(inferred, left, leftRest, rightRest) {
	const [head, ...tail] = rightRest;
	return IsSchema(head) ? ParameterCompare(inferred, left, leftRest, head, tail) : IsOptional(left) ? ExtendsTrue(inferred) : ExtendsFalse();
}
function ParametersLeft(inferred, left, rightRest) {
	const [head, ...tail] = left;
	return IsSchema(head) ? ParameterRight(inferred, head, tail, rightRest) : ExtendsTrue(inferred);
}
function ExtendsParameters(inferred, left, right) {
	return ParametersLeft(inferred, left, right);
}
function init_parameters() {
	return (init_parameters = __esmMin((() => {
		init_infer();
		init_schema();
		init__optional$1();
		init_extends_left();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/return-type.mjs
function ExtendsReturnType(inferred, left, right) {
	return IsVoid(right) ? ExtendsTrue(inferred) : ExtendsLeft(inferred, left, right);
}
function init_return_type() {
	return (init_return_type = __esmMin((() => {
		init_void();
		init_extends_left();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/constructor.mjs
function ExtendsConstructor(inferred, parameters, returnType, right) {
	return IsConstructor(right) ? (() => {
		const check = ExtendsParameters(inferred, parameters, right.parameters);
		return IsExtendsTrueLike(check) ? ExtendsReturnType(check.inferred, returnType, right.instanceType) : ExtendsFalse();
	})() : ExtendsFalse();
}
function init_constructor$1() {
	return (init_constructor$1 = __esmMin((() => {
		init_constructor();
		init_result();
		init_parameters();
		init_return_type();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/enum.mjs
function ExtendsEnum(inferred, left, right) {
	return ExtendsLeft(inferred, EnumToUnion(left), right);
}
function init_enum$1() {
	return (init_enum$1 = __esmMin((() => {
		init_extends_left();
		init_enum_to_union();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/function.mjs
function ExtendsFunction(inferred, parameters, returnType, right) {
	return IsFunction(right) ? (() => {
		const check = ExtendsParameters(inferred, parameters, right.parameters);
		return IsExtendsTrueLike(check) ? ExtendsReturnType(check.inferred, returnType, right.returnType) : ExtendsFalse();
	})() : ExtendsFalse();
}
function init_function$1() {
	return (init_function$1 = __esmMin((() => {
		init_function();
		init_result();
		init_parameters();
		init_return_type();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/integer.mjs
function ExtendsInteger(inferred, left, right) {
	return IsInteger(right) ? ExtendsTrue(inferred) : IsNumber(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, left, right);
}
function init_integer$2() {
	return (init_integer$2 = __esmMin((() => {
		init_integer();
		init_number();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/intersect.mjs
function ExtendsIntersect(inferred, left, right) {
	return ExtendsLeft(inferred, EvaluateIntersect(left), right);
}
function init_intersect$1() {
	return (init_intersect$1 = __esmMin((() => {
		init_extends_left();
		init_evaluate$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/iterator.mjs
function ExtendsIterator(inferred, left, right) {
	return IsIterator(right) ? ExtendsLeft(inferred, left, right.iteratorItems) : ExtendsRight(inferred, Iterator(left), right);
}
function init_iterator$1() {
	return (init_iterator$1 = __esmMin((() => {
		init_iterator();
		init_extends_right();
		init_extends_left();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/literal.mjs
function ExtendsLiteralValue(inferred, left, right) {
	return left === right ? ExtendsTrue(inferred) : ExtendsFalse();
}
function ExtendsLiteralBigInt(inferred, left, right) {
	return IsLiteral(right) ? ExtendsLiteralValue(inferred, left, right.const) : IsBigInt(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, Literal$1(left), right);
}
function ExtendsLiteralBoolean(inferred, left, right) {
	return IsLiteral(right) ? ExtendsLiteralValue(inferred, left, right.const) : IsBoolean(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, Literal$1(left), right);
}
function ExtendsLiteralNumber(inferred, left, right) {
	return IsLiteral(right) ? ExtendsLiteralValue(inferred, left, right.const) : IsNumber(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, Literal$1(left), right);
}
function ExtendsLiteralString(inferred, left, right) {
	return IsLiteral(right) ? ExtendsLiteralValue(inferred, left, right.const) : IsString(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, Literal$1(left), right);
}
function ExtendsLiteral(inferred, left, right) {
	return IsBigInt$1(left.const) ? ExtendsLiteralBigInt(inferred, left.const, right) : IsBoolean$2(left.const) ? ExtendsLiteralBoolean(inferred, left.const, right) : IsNumber$2(left.const) ? ExtendsLiteralNumber(inferred, left.const, right) : IsString$2(left.const) ? ExtendsLiteralString(inferred, left.const, right) : Unreachable$1();
}
function init_literal$1() {
	return (init_literal$1 = __esmMin((() => {
		init_guard();
		init_literal();
		init_bigint();
		init_boolean();
		init_number();
		init_string$1();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/never.mjs
function ExtendsNever(inferred, left, right) {
	return IsInfer(right) ? ExtendsRight(inferred, left, right) : ExtendsTrue(inferred);
}
function init_never$1() {
	return (init_never$1 = __esmMin((() => {
		init_infer();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/null.mjs
function ExtendsNull(inferred, left, right) {
	return IsNull(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, left, right);
}
function init_null$1() {
	return (init_null$1 = __esmMin((() => {
		init_null();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/number.mjs
function ExtendsNumber(inferred, left, right) {
	return IsNumber(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, left, right);
}
function init_number$2() {
	return (init_number$2 = __esmMin((() => {
		init_number();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/object.mjs
function ExtendsPropertyOptional(inferred, left, right) {
	return IsOptional(left) ? IsOptional(right) ? ExtendsTrue(inferred) : ExtendsFalse() : ExtendsTrue(inferred);
}
function ExtendsProperty(inferred, left, right) {
	return IsInfer(right) && IsNever(right.extends) ? ExtendsFalse() : (() => {
		const check = ExtendsLeft(inferred, left, right);
		return IsExtendsTrueLike(check) ? ExtendsPropertyOptional(check.inferred, left, right) : ExtendsFalse();
	})();
}
function ExtractInferredProperties(keys, properties) {
	return keys.reduce((result, key) => {
		return key in properties ? IsExtendsTrueLike(properties[key]) ? {
			...result,
			...properties[key].inferred
		} : Unreachable$1() : Unreachable$1();
	}, {});
}
function ExtendsPropertiesComparer(inferred, left, right) {
	const properties = {};
	for (const rightKey of Keys(right)) properties[rightKey] = rightKey in left ? ExtendsProperty({}, left[rightKey], right[rightKey]) : IsOptional(right[rightKey]) ? IsInfer(right[rightKey]) ? ExtendsTrue(Assign(inferred, { [right[rightKey].name]: right[rightKey].extends })) : ExtendsTrue(inferred) : ExtendsFalse();
	const checked = Values(properties).every((result) => IsExtendsTrueLike(result));
	const extracted = checked ? ExtractInferredProperties(Keys(properties), properties) : {};
	return checked ? ExtendsTrue(extracted) : ExtendsFalse();
}
function ExtendsProperties(inferred, left, right) {
	const compared = ExtendsPropertiesComparer(inferred, left, right);
	return IsExtendsTrueLike(compared) ? ExtendsTrue(Assign(inferred, compared.inferred)) : ExtendsFalse();
}
function ExtendsObjectToObject(inferred, left, right) {
	return ExtendsProperties(inferred, left, right);
}
function ExtendsObject(inferred, left, right) {
	return IsObject(right) ? ExtendsObjectToObject(inferred, left, right.properties) : ExtendsRight(inferred, _Object_$1(left), right);
}
function init_object$1() {
	return (init_object$1 = __esmMin((() => {
		init_assign();
		init_guard();
		init__optional$1();
		init_infer();
		init_never();
		init_object();
		init_extends_left();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/promise.mjs
function ExtendsPromise(inferred, left, right) {
	return IsPromise(right) ? ExtendsLeft(inferred, left, right.item) : ExtendsRight(inferred, Promise$1(left), right);
}
function init_promise$1() {
	return (init_promise$1 = __esmMin((() => {
		init_promise();
		init_extends_right();
		init_extends_left();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/string.mjs
function ExtendsString(inferred, left, right) {
	return IsString(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, left, right);
}
function init_string$3() {
	return (init_string$3 = __esmMin((() => {
		init_string$1();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/symbol.mjs
function ExtendsSymbol(inferred, left, right) {
	return IsSymbol(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, left, right);
}
function init_symbol$1() {
	return (init_symbol$1 = __esmMin((() => {
		init_symbol();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/template-literal.mjs
function ExtendsTemplateLiteral(inferred, left, right) {
	return ExtendsLeft(inferred, TemplateLiteralDecode(left), right);
}
function init_template_literal$1() {
	return (init_template_literal$1 = __esmMin((() => {
		init_extends_left();
		init_decode();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/inference.mjs
function Inferrable(name, type) {
	return Create({ "~kind": "Inferrable" }, {
		name,
		type
	}, {});
}
function IsInferable(value) {
	return IsObject$1(value) && HasPropertyKey(value, "~kind") && HasPropertyKey(value, "name") && HasPropertyKey(value, "type") && IsEqual(value["~kind"], "Inferrable") && IsString$2(value.name) && IsObject$1(value.type);
}
function TryRestInferable(type) {
	return IsRest(type) ? IsInfer(type.items) ? IsArray(type.items.extends) ? Inferrable(type.items.name, type.items.extends.items) : IsUnknown(type.items.extends) ? Inferrable(type.items.name, type.items.extends) : void 0 : Unreachable$1() : void 0;
}
function TryInferable(type) {
	return IsInfer(type) ? Inferrable(type.name, type.extends) : void 0;
}
function TryInferResults(rest, right, result = []) {
	const [head, ...tail] = rest;
	return IsSchema(head) ? (() => {
		return IsExtendsTrueLike(ExtendsLeft({}, head, right)) ? TryInferResults(tail, right, [...result, head]) : void 0;
	})() : result;
}
function InferTupleResult(inferred, name, left, right) {
	const results = TryInferResults(left, right);
	return IsArray$1(results) ? ExtendsTrue(Assign(inferred, { [name]: Tuple$1(results) })) : ExtendsFalse();
}
function InferUnionResult(inferred, name, left, right) {
	const results = TryInferResults(left, right);
	return IsArray$1(results) ? ExtendsTrue(Assign(inferred, { [name]: Union(results) })) : ExtendsFalse();
}
function init_inference() {
	return (init_inference = __esmMin((() => {
		init_create(), init_assign();
		init_guard();
		init_schema();
		init_array();
		init_unknown();
		init_tuple();
		init_extends_left();
		init_union();
		init_infer();
		init_rest();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/tuple.mjs
function Reverse(types) {
	return [...types].reverse();
}
function ApplyReverse(types, reversed) {
	return reversed ? Reverse(types) : types;
}
function Reversed(types) {
	const first = types.length > 0 ? types[0] : void 0;
	return IsSchema(IsSchema(first) ? TryRestInferable(first) : void 0);
}
function ElementsCompare(inferred, reversed, left, leftRest, right, rightRest) {
	const check = ExtendsLeft(inferred, left, right);
	return IsExtendsTrueLike(check) ? Elements(check.inferred, reversed, leftRest, rightRest) : ExtendsFalse();
}
function ElementsLeft(inferred, reversed, leftRest, right, rightRest) {
	const inferable = TryRestInferable(right);
	return IsInferable(inferable) ? InferTupleResult(inferred, inferable.name, ApplyReverse(leftRest, reversed), inferable.type) : (() => {
		const [head, ...tail] = leftRest;
		return IsSchema(head) ? ElementsCompare(inferred, reversed, head, tail, right, rightRest) : ExtendsFalse();
	})();
}
function ElementsRight(inferred, reversed, leftRest, rightRest) {
	const [head, ...tail] = rightRest;
	return IsSchema(head) ? ElementsLeft(inferred, reversed, leftRest, head, tail) : IsEqual(leftRest.length, 0) ? ExtendsTrue(inferred) : ExtendsFalse();
}
function Elements(inferred, reversed, leftRest, rightRest) {
	return ElementsRight(inferred, reversed, leftRest, rightRest);
}
function ExtendsTupleToTuple(inferred, left, right) {
	const instantiatedRight = InstantiateElements(inferred, { callstack: [] }, right);
	const reversed = Reversed(instantiatedRight);
	return Elements(inferred, reversed, ApplyReverse(left, reversed), ApplyReverse(instantiatedRight, reversed));
}
function ExtendsTupleToArray(inferred, left, right) {
	const inferrable = TryInferable(right);
	return IsInferable(inferrable) ? InferUnionResult(inferred, inferrable.name, left, inferrable.type) : (() => {
		const [head, ...tail] = left;
		return IsSchema(head) ? (() => {
			const check = ExtendsLeft(inferred, head, right);
			return IsExtendsTrueLike(check) ? ExtendsTupleToArray(check.inferred, tail, right) : ExtendsFalse();
		})() : ExtendsTrue(inferred);
	})();
}
function ExtendsTuple(inferred, left, right) {
	const instantiatedLeft = InstantiateElements(inferred, { callstack: [] }, left);
	return IsTuple(right) ? ExtendsTupleToTuple(inferred, instantiatedLeft, right.items) : IsArray(right) ? ExtendsTupleToArray(inferred, instantiatedLeft, right.items) : ExtendsRight(inferred, Tuple$1(instantiatedLeft), right);
}
function init_tuple$1() {
	return (init_tuple$1 = __esmMin((() => {
		init_guard();
		init_schema();
		init_array();
		init_tuple();
		init_extends_left();
		init_extends_right();
		init_result();
		init_instantiate$27();
		init_inference();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/undefined.mjs
function ExtendsUndefined(inferred, left, right) {
	return IsVoid(right) ? ExtendsTrue(inferred) : IsUndefined(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, left, right);
}
function init_undefined$1() {
	return (init_undefined$1 = __esmMin((() => {
		init_undefined();
		init_void();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/union.mjs
function ExtendsUnionSome(inferred, type, unionTypes) {
	const [head, ...tail] = unionTypes;
	return IsSchema(head) ? (() => {
		const check = ExtendsLeft(inferred, type, head);
		return IsExtendsTrueLike(check) ? ExtendsTrue(check.inferred) : ExtendsUnionSome(inferred, type, tail);
	})() : ExtendsFalse();
}
function ExtendsUnionLeft(inferred, left, right) {
	const [head, ...tail] = left;
	return IsSchema(head) ? (() => {
		const check = ExtendsUnionSome(inferred, head, right);
		return IsExtendsTrueLike(check) ? ExtendsUnionLeft(check.inferred, tail, right) : ExtendsFalse();
	})() : ExtendsTrue(inferred);
}
function ExtendsUnion(inferred, left, right) {
	const inferrable = TryInferable(right);
	return IsInferable(inferrable) ? InferUnionResult(inferred, inferrable.name, left, inferrable.type) : IsUnion(right) ? ExtendsUnionLeft(inferred, left, right.anyOf) : ExtendsUnionLeft(inferred, left, [right]);
}
function init_union$1() {
	return (init_union$1 = __esmMin((() => {
		init_schema();
		init_union();
		init_extends_left();
		init_result();
		init_inference();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/unknown.mjs
function ExtendsUnknown(inferred, left, right) {
	return IsInfer(right) ? ExtendsRight(inferred, left, right) : IsAny(right) ? ExtendsTrue(inferred) : IsUnknown(right) ? ExtendsTrue(inferred) : ExtendsFalse();
}
function init_unknown$1() {
	return (init_unknown$1 = __esmMin((() => {
		init_any();
		init_unknown();
		init_infer();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/void.mjs
function ExtendsVoid(inferred, left, right) {
	return IsVoid(right) ? ExtendsTrue(inferred) : ExtendsRight(inferred, left, right);
}
function init_void$1() {
	return (init_void$1 = __esmMin((() => {
		init_void();
		init_extends_right();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/extends-left.mjs
function ExtendsLeft(inferred, left, right) {
	return IsAny(left) ? ExtendsAny(inferred, left, right) : IsArray(left) ? ExtendsArray(inferred, left, left.items, right) : IsAsyncIterator(left) ? ExtendsAsyncIterator(inferred, left.iteratorItems, right) : IsBigInt(left) ? ExtendsBigInt(inferred, left, right) : IsBoolean(left) ? ExtendsBoolean(inferred, left, right) : IsConstructor(left) ? ExtendsConstructor(inferred, left.parameters, left.instanceType, right) : IsEnum(left) ? ExtendsEnum(inferred, left, right) : IsFunction(left) ? ExtendsFunction(inferred, left.parameters, left.returnType, right) : IsInteger(left) ? ExtendsInteger(inferred, left, right) : IsIntersect(left) ? ExtendsIntersect(inferred, left.allOf, right) : IsIterator(left) ? ExtendsIterator(inferred, left.iteratorItems, right) : IsLiteral(left) ? ExtendsLiteral(inferred, left, right) : IsNever(left) ? ExtendsNever(inferred, left, right) : IsNull(left) ? ExtendsNull(inferred, left, right) : IsNumber(left) ? ExtendsNumber(inferred, left, right) : IsObject(left) ? ExtendsObject(inferred, left.properties, right) : IsPromise(left) ? ExtendsPromise(inferred, left.item, right) : IsString(left) ? ExtendsString(inferred, left, right) : IsSymbol(left) ? ExtendsSymbol(inferred, left, right) : IsTemplateLiteral(left) ? ExtendsTemplateLiteral(inferred, left.pattern, right) : IsTuple(left) ? ExtendsTuple(inferred, left.items, right) : IsUndefined(left) ? ExtendsUndefined(inferred, left, right) : IsUnion(left) ? ExtendsUnion(inferred, left.anyOf, right) : IsUnknown(left) ? ExtendsUnknown(inferred, left, right) : IsVoid(left) ? ExtendsVoid(inferred, left, right) : ExtendsFalse();
}
function init_extends_left() {
	return (init_extends_left = __esmMin((() => {
		init_any$1();
		init_array$1();
		init_async_iterator$1();
		init_bigint$2();
		init_boolean$1();
		init_constructor$1();
		init_enum$1();
		init_function$1();
		init_integer$2();
		init_intersect$1();
		init_iterator$1();
		init_literal$1();
		init_never$1();
		init_null$1();
		init_number$2();
		init_object$1();
		init_promise$1();
		init_string$3();
		init_symbol$1();
		init_template_literal$1();
		init_tuple$1();
		init_undefined$1();
		init_union$1();
		init_unknown$1();
		init_void$1();
		init_any();
		init_array();
		init_async_iterator();
		init_bigint();
		init_boolean();
		init_constructor();
		init_enum();
		init_function();
		init_integer();
		init_intersect();
		init_iterator();
		init_literal();
		init_never();
		init_null();
		init_number();
		init_object();
		init_promise();
		init_string$1();
		init_symbol();
		init_template_literal();
		init_tuple();
		init_undefined();
		init_unknown();
		init_union();
		init_void();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/interface.mjs
/** Creates a deferred Interface action. */
function InterfaceDeferred(heritage, properties, options = {}) {
	return Deferred("Interface", [heritage, properties], options);
}
/** Returns true if this value is a deferred Interface action. */
function IsInterfaceDeferred(value) {
	return IsSchema(value) && HasPropertyKey(value, "action") && IsEqual(value.action, "Interface");
}
/** Creates an Interface using the given heritage and properties. */
function Interface(heritage, properties, options = {}) {
	return Instantiate({}, InterfaceDeferred(heritage, properties, options));
}
function init_interface() {
	return (init_interface = __esmMin((() => {
		init_guard();
		init_schema();
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/cyclic/check.mjs
function FromRef$3(stack, context, ref) {
	return stack.includes(ref) ? true : FromType$10([...stack, ref], context, context[ref]);
}
function FromProperties$2(stack, context, properties) {
	return FromTypes$2(stack, context, PropertyValues(properties));
}
function FromTypes$2(stack, context, types) {
	const [left, ...right] = types;
	return IsSchema(left) ? FromType$10(stack, context, left) ? true : FromTypes$2(stack, context, right) : false;
}
function FromType$10(stack, context, type) {
	return IsRef(type) ? FromRef$3(stack, context, type.$ref) : IsArray(type) ? FromType$10(stack, context, type.items) : IsAsyncIterator(type) ? FromType$10(stack, context, type.iteratorItems) : IsConstructor(type) ? FromTypes$2(stack, context, [...type.parameters, type.instanceType]) : IsFunction(type) ? FromTypes$2(stack, context, [...type.parameters, type.returnType]) : IsInterfaceDeferred(type) ? FromProperties$2(stack, context, type.parameters[1]) : IsIntersect(type) ? FromTypes$2(stack, context, type.allOf) : IsIterator(type) ? FromType$10(stack, context, type.iteratorItems) : IsObject(type) ? FromProperties$2(stack, context, type.properties) : IsPromise(type) ? FromType$10(stack, context, type.item) : IsUnion(type) ? FromTypes$2(stack, context, type.anyOf) : IsTuple(type) ? FromTypes$2(stack, context, type.items) : IsRecord(type) ? FromType$10(stack, context, RecordValue(type)) : false;
}
/** Performs a cyclic check on the given type. Initial key stack can be empty, but faster if specified */
function CyclicCheck(stack, context, type) {
	return FromType$10(stack, context, type);
}
function init_check() {
	return (init_check = __esmMin((() => {
		init_schema();
		init_array();
		init_async_iterator();
		init_constructor();
		init_function();
		init_intersect();
		init_iterator();
		init_object();
		init_promise();
		init_properties();
		init_record();
		init_tuple();
		init_union();
		init_ref();
		init_interface();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/cyclic/candidates.mjs
function ResolveCandidateKeys(context, keys) {
	return keys.reduce((result, left) => {
		return left in context ? CyclicCheck([left], context, context[left]) ? [...result, left] : result : Unreachable$1();
	}, []);
}
/** Returns keys for context types that need to be transformed to TCyclic. */
function CyclicCandidates(context) {
	return ResolveCandidateKeys(context, PropertyKeys(context));
}
function init_candidates() {
	return (init_candidates = __esmMin((() => {
		init_properties();
		init_check();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/cyclic/dependencies.mjs
function FromRef$2(context, ref, result) {
	return result.includes(ref) ? result : ref in context ? FromType$9(context, context[ref], [...result, ref]) : Unreachable$1();
}
function FromProperties$1(context, properties, result) {
	return FromTypes$1(context, PropertyValues(properties), result);
}
function FromTypes$1(context, types, result) {
	return types.reduce((result, left) => {
		return FromType$9(context, left, result);
	}, result);
}
function FromType$9(context, type, result) {
	return IsRef(type) ? FromRef$2(context, type.$ref, result) : IsArray(type) ? FromType$9(context, type.items, result) : IsAsyncIterator(type) ? FromType$9(context, type.iteratorItems, result) : IsConstructor(type) ? FromTypes$1(context, [...type.parameters, type.instanceType], result) : IsFunction(type) ? FromTypes$1(context, [...type.parameters, type.returnType], result) : IsInterfaceDeferred(type) ? FromProperties$1(context, type.parameters[1], result) : IsIntersect(type) ? FromTypes$1(context, type.allOf, result) : IsIterator(type) ? FromType$9(context, type.iteratorItems, result) : IsObject(type) ? FromProperties$1(context, type.properties, result) : IsPromise(type) ? FromType$9(context, type.item, result) : IsUnion(type) ? FromTypes$1(context, type.anyOf, result) : IsTuple(type) ? FromTypes$1(context, type.items, result) : IsRecord(type) ? FromType$9(context, RecordValue(type), result) : result;
}
/** Returns dependent cyclic keys for the given type. This function is used to dead-type-eliminate (DTE) for initializing TCyclic types. */
function CyclicDependencies(context, key, type) {
	return FromType$9(context, type, [key]);
}
function init_dependencies() {
	return (init_dependencies = __esmMin((() => {
		init_array();
		init_async_iterator();
		init_constructor();
		init_function();
		init_intersect();
		init_iterator();
		init_object();
		init_promise();
		init_properties();
		init_record();
		init_tuple();
		init_union();
		init_ref();
		init_interface();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/cyclic/extends.mjs
function FromRef$1(_ref) {
	return Any();
}
function FromProperties(properties) {
	return Keys(properties).reduce((result, key) => {
		return {
			...result,
			[key]: FromType$8(properties[key])
		};
	}, {});
}
function FromTypes(types) {
	return types.reduce((result, left) => {
		return [...result, FromType$8(left)];
	}, []);
}
function FromType$8(type) {
	return IsRef(type) ? FromRef$1(type.$ref) : IsArray(type) ? Array$1(FromType$8(type.items), ArrayOptions(type)) : IsAsyncIterator(type) ? AsyncIterator(FromType$8(type.iteratorItems)) : IsConstructor(type) ? Constructor$1(FromTypes(type.parameters), FromType$8(type.instanceType)) : IsFunction(type) ? _Function_$1(FromTypes(type.parameters), FromType$8(type.returnType)) : IsIntersect(type) ? Intersect(FromTypes(type.allOf)) : IsIterator(type) ? Iterator(FromType$8(type.iteratorItems)) : IsObject(type) ? _Object_$1(FromProperties(type.properties)) : IsPromise(type) ? Promise$1(FromType$8(type.item)) : IsRecord(type) ? Record(RecordKey(type), FromType$8(RecordValue(type))) : IsUnion(type) ? Union(FromTypes(type.anyOf)) : IsTuple(type) ? Tuple$1(FromTypes(type.items)) : type;
}
function CyclicAnyFromParameters(defs, ref) {
	return ref in defs ? FromType$8(defs[ref]) : Unknown();
}
/** Transforms TCyclic TRef's into TAny's. This function is used prior to TExtends checks to enable cyclics to be structurally checked and terminated (with TAny) at first point of recursion, what would otherwise be a recursive TRef.*/
function CyclicExtends(type) {
	return CyclicAnyFromParameters(type.$defs, type.$ref);
}
function init_extends() {
	return (init_extends = __esmMin((() => {
		init_guard();
		init_any();
		init_array();
		init_async_iterator();
		init_constructor();
		init_function();
		init_intersect();
		init_iterator();
		init_object();
		init_promise();
		init_record();
		init_ref();
		init_tuple();
		init_union();
		init_unknown();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/tuple/to-object.mjs
function TupleElementsToProperties(types) {
	return types.reduceRight((result, right, index) => {
		return {
			[index]: right,
			...result
		};
	}, {});
}
function TupleToObject(type) {
	return _Object_$1(TupleElementsToProperties(type.items));
}
function init_to_object() {
	return (init_to_object = __esmMin((() => {
		init_object();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/evaluate/composite.mjs
function IsReadonlyProperty(left, right) {
	return IsReadonly(left) ? IsReadonly(right) ? true : false : false;
}
function IsOptionalProperty(left, right) {
	return IsOptional(left) ? IsOptional(right) ? true : false : false;
}
function CompositeProperty(left, right) {
	const isReadonly = IsReadonlyProperty(left, right);
	const isOptional = IsOptionalProperty(left, right);
	const property = ReadonlyRemove(OptionalRemove(EvaluateIntersect([left, right])));
	return isReadonly && isOptional ? ReadonlyAdd(OptionalAdd(property)) : isReadonly && !isOptional ? ReadonlyAdd(property) : !isReadonly && isOptional ? OptionalAdd(property) : property;
}
function CompositePropertyKey(left, right, key) {
	return key in left ? key in right ? CompositeProperty(left[key], right[key]) : left[key] : key in right ? right[key] : Never();
}
function CompositeProperties(left, right) {
	return [.../* @__PURE__ */ new Set([...Keys(right), ...Keys(left)])].reduce((result, key) => {
		return {
			...result,
			[key]: CompositePropertyKey(left, right, key)
		};
	}, {});
}
function GetProperties(type) {
	return IsObject(type) ? type.properties : IsTuple(type) ? TupleElementsToProperties(type.items) : Unreachable$1();
}
function Composite(left, right) {
	return _Object_$1(CompositeProperties(GetProperties(left), GetProperties(right)));
}
function init_composite() {
	return (init_composite = __esmMin((() => {
		init_guard();
		init__readonly$1();
		init__optional$1();
		init_object();
		init_never();
		init_tuple();
		init_to_object();
		init_evaluate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/evaluate/narrow.mjs
function Narrow(left, right) {
	const result = Compare(left, right);
	return IsEqual(result, "left-inside") ? left : IsEqual(result, "right-inside") ? right : IsEqual(result, "equal") ? right : Never();
}
function init_narrow() {
	return (init_narrow = __esmMin((() => {
		init_guard();
		init_never();
		init_compare();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/evaluate/distribute.mjs
function IsObjectLike(type) {
	return IsObject(type) || IsTuple(type);
}
function IsUnionOperand(left, right) {
	const isUnionLeft = IsUnion(left);
	const isUnionRight = IsUnion(right);
	return isUnionLeft || isUnionRight;
}
function DistributeOperation(left, right) {
	const evaluatedLeft = EvaluateType(left);
	const evaluatedRight = EvaluateType(right);
	const isUnionOperand = IsUnionOperand(evaluatedLeft, evaluatedRight);
	const isObjectLeft = IsObjectLike(evaluatedLeft);
	const IsObjectRight = IsObjectLike(evaluatedRight);
	return isUnionOperand ? EvaluateIntersect([evaluatedLeft, evaluatedRight]) : isObjectLeft && IsObjectRight ? Composite(evaluatedLeft, evaluatedRight) : isObjectLeft && !IsObjectRight ? evaluatedLeft : !isObjectLeft && IsObjectRight ? evaluatedRight : Narrow(evaluatedLeft, evaluatedRight);
}
function DistributeType(type, types, result = []) {
	const [left, ...right] = types;
	return !IsUndefined$1(left) ? DistributeType(type, right, [...result, DistributeOperation(type, left)]) : result.length === 0 ? [type] : result;
}
function DistributeUnion(types, distribution, result = []) {
	const [left, ...right] = types;
	return IsSchema(left) ? DistributeUnion(right, distribution, [...result, ...Distribute$1([left], distribution)]) : result;
}
function Distribute$1(types, result = []) {
	const [left, ...right] = types;
	return IsSchema(left) ? IsUnion(left) ? Distribute$1(right, DistributeUnion(left.anyOf, result)) : Distribute$1(right, DistributeType(left, result)) : result;
}
function init_distribute() {
	return (init_distribute = __esmMin((() => {
		init_guard();
		init_schema();
		init_union();
		init_object();
		init_tuple();
		init_composite();
		init_narrow();
		init_evaluate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/evaluate/evaluate.mjs
function EvaluateIntersect(types) {
	return Broaden(Distribute$1(types));
}
function EvaluateUnion(types) {
	return Broaden(types);
}
function EvaluateType(type) {
	return IsIntersect(type) ? EvaluateIntersect(type.allOf) : IsUnion(type) ? EvaluateUnion(type.anyOf) : type;
}
function EvaluateUnionFast(types) {
	return IsEqual(types.length, 1) ? types[0] : IsEqual(types.length, 0) ? Never() : Union(types);
}
function init_evaluate() {
	return (init_evaluate = __esmMin((() => {
		init_guard();
		init_intersect();
		init_distribute();
		init_broaden();
		init_union();
		init_never();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/cyclic/instantiate.mjs
function CyclicInterface(context, heritage, properties) {
	const instantiatedHeritage = InstantiateTypes(context, { callstack: [] }, heritage);
	const instantiatedProperties = InstantiateProperties({}, { callstack: [] }, properties);
	return EvaluateIntersect([...instantiatedHeritage, _Object_$1(instantiatedProperties)]);
}
function CyclicDefinitions(context, dependencies) {
	return Keys(context).filter((key) => dependencies.includes(key)).reduce((result, key) => {
		const type = context[key];
		const instantiatedType = IsInterfaceDeferred(type) ? CyclicInterface(context, type.parameters[0], type.parameters[1]) : type;
		return {
			...result,
			[key]: instantiatedType
		};
	}, {});
}
function InstantiateCyclic(context, ref, type) {
	return Cyclic(CyclicDefinitions(context, CyclicDependencies(context, ref, type)), ref);
}
function init_instantiate() {
	return (init_instantiate = __esmMin((() => {
		init_guard();
		init_cyclic();
		init_object();
		init_dependencies();
		init_action();
		init_instantiate$27();
		init_evaluate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/cyclic/target.mjs
function Resolve(defs, ref) {
	return ref in defs ? IsRef(defs[ref]) ? Resolve(defs, defs[ref].$ref) : defs[ref] : Never();
}
/** Returns the target Type from the Defs or Never if target is non-resolvable */
function CyclicTarget(defs, ref) {
	return Resolve(defs, ref);
}
function init_target() {
	return (init_target = __esmMin((() => {
		init_never();
		init_ref();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/cyclic/index.mjs
function init_cyclic$1() {
	return (init_cyclic$1 = __esmMin((() => {
		init_candidates();
		init_check();
		init_dependencies();
		init_extends();
		init_instantiate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/extends.mjs
function Normal(type) {
	return IsCyclic(type) ? CyclicExtends(type) : type;
}
/** Performs a structural extends check on left and right types and yields inferred types on right if specified. */
function Extends(inferred, left, right) {
	return ExtendsLeft(inferred, Normal(left), Normal(right));
}
function init_extends$1() {
	return (init_extends$1 = __esmMin((() => {
		init_cyclic();
		init_extends_left();
		init_cyclic$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/extends/index.mjs
function init_extends$2() {
	return (init_extends$2 = __esmMin((() => {
		init_extends$1();
		init_result();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/evaluate/compare.mjs
/** Compares left and right types and determines their set relationship. */
function Compare(left, right) {
	const extendsCheck = [IsUnknown(left) ? ExtendsFalse() : Extends({}, left, right), IsUnknown(left) ? ExtendsTrue({}) : Extends({}, right, left)];
	return IsExtendsTrueLike(extendsCheck[0]) && IsExtendsTrueLike(extendsCheck[1]) ? ResultEqual : IsExtendsTrueLike(extendsCheck[0]) && IsExtendsFalse(extendsCheck[1]) ? ResultLeftInside : IsExtendsFalse(extendsCheck[0]) && IsExtendsTrueLike(extendsCheck[1]) ? ResultRightInside : ResultDisjoint;
}
var ResultEqual, ResultDisjoint, ResultLeftInside, ResultRightInside;
function init_compare() {
	return (init_compare = __esmMin((() => {
		init_unknown();
		init_extends$2();
		ResultEqual = "equal";
		ResultDisjoint = "disjoint";
		ResultLeftInside = "left-inside";
		ResultRightInside = "right-inside";
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/evaluate/flatten.mjs
function FlattenType(type) {
	return IsUnion(type) ? Flatten(type.anyOf) : [type];
}
function Flatten(types) {
	return types.reduce((result, type) => {
		return [...result, ...FlattenType(type)];
	}, []);
}
function init_flatten() {
	return (init_flatten = __esmMin((() => {
		init_union();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/evaluate/broaden.mjs
function BroadFilter(type, types) {
	return types.filter((left) => {
		return Compare(type, left) === "right-inside" ? false : true;
	});
}
function IsBroadestType(type, types) {
	return IsEqual(types.some((left) => {
		const result = Compare(type, left);
		return IsEqual(result, "left-inside") || IsEqual(result, "equal");
	}), false);
}
function BroadenType(type, types) {
	const evaluated = EvaluateType(type);
	return IsAny(evaluated) ? [evaluated] : IsBroadestType(evaluated, types) ? [...BroadFilter(evaluated, types), evaluated] : types;
}
function BroadenTypes(types, result = []) {
	return types.reduce((result, left) => {
		return IsObject(left) ? [...result, left] : IsNever(left) ? result : BroadenType(left, result);
	}, []);
}
/** Broadens a set of types and returns either the most broad type, or union or disjoint types. */
function Broaden(types) {
	const flattened = Flatten(BroadenTypes(types));
	return flattened.length === 0 ? Never() : flattened.length === 1 ? flattened[0] : Union(flattened);
}
function init_broaden() {
	return (init_broaden = __esmMin((() => {
		init_guard();
		init_any();
		init_never();
		init_object();
		init_union();
		init_compare();
		init_flatten();
		init_evaluate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/evaluate/instantiate.mjs
function EvaluateImmediate(context, state, type, options) {
	return Update(EvaluateType(InstantiateType(context, state, type)), {}, options);
}
function EvaluateInstantiate(context, state, type, options) {
	return EvaluateImmediate(context, state, type, options);
}
function init_instantiate$1() {
	return (init_instantiate$1 = __esmMin((() => {
		init_update();
		init_instantiate$27();
		init_evaluate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/evaluate/index.mjs
function init_evaluate$1() {
	return (init_evaluate$1 = __esmMin((() => {
		init_broaden();
		init_compare();
		init_distribute();
		init_evaluate();
		init_flatten();
		init_instantiate$1();
		init_narrow();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/call/distribute-arguments.mjs
function Expand(type) {
	return IsUnion(type) ? [...type.anyOf] : [type];
}
function Append(current, type) {
	return current.reduce((result, left) => [...result, [...left, type]], []);
}
function Cross(current, variants) {
	return variants.reduce((result, left) => {
		return [...result, ...Append(current, left)];
	}, []);
}
function Distribute(types) {
	return types.reduce((result, type) => {
		return Cross(result, Expand(type));
	}, [[]]);
}
function DistributedArguments(arguments_, expression) {
	return IsDeferred(expression) && IsEqual(expression.action, "Conditional") ? Distribute(arguments_) : [arguments_];
}
function init_distribute_arguments() {
	return (init_distribute_arguments = __esmMin((() => {
		init_guard();
		init_union();
		init_deferred();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/call/resolve-target.mjs
function FromNotResolvable() {
	return ["(not-resolvable)", Never()];
}
function FromNotGeneric() {
	return ["(not-generic)", Never()];
}
function FromGeneric(name, parameters, expression) {
	return [name, Generic(parameters, expression)];
}
function FromRef(context, ref, arguments_) {
	return ref in context ? FromType$7(context, ref, context[ref], arguments_) : FromNotResolvable();
}
function FromType$7(context, name, target, arguments_) {
	return IsGeneric(target) ? FromGeneric(name, target.parameters, target.expression) : IsRef(target) ? FromRef(context, target.$ref, arguments_) : FromNotGeneric();
}
/** Resolves a named generic target from the context, or returns TNever if it cannot be resolved or is not generic. */
function ResolveTarget(context, target, arguments_) {
	return FromType$7(context, "(anonymous)", target, arguments_);
}
function init_resolve_target() {
	return (init_resolve_target = __esmMin((() => {
		init_generic();
		init_ref();
		init_never();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/call/resolve-arguments.mjs
function AssertArgumentExtends(name, type, extends_) {
	if (IsInfer(type) || IsCall(type) || IsExtendsTrueLike(Extends({}, type, extends_))) return;
	throw new Error("Generic argument does not satify constraint", { cause: {
		parameter: name,
		extends: extends_,
		received: type
	} });
}
function BindArgument(context, state, name, extends_, type) {
	const instantiatedArgument = InstantiateType(context, state, type);
	AssertArgumentExtends(name, instantiatedArgument, extends_);
	return Assign(context, { [name]: instantiatedArgument });
}
function BindArguments(context, state, parameterLeft, parameterRight, arguments_) {
	const instantiatedExtends = InstantiateType(context, state, parameterLeft.extends);
	const instantiatedEquals = InstantiateType(context, state, parameterLeft.equals);
	const [left, ...right] = arguments_;
	return IsSchema(left) ? BindParameters(BindArgument(context, state, parameterLeft["name"], instantiatedExtends, left), state, parameterRight, right) : BindParameters(BindArgument(context, state, parameterLeft["name"], instantiatedExtends, instantiatedEquals), state, parameterRight, []);
}
function BindParameters(context, state, parameters, arguments_) {
	const [left, ...right] = parameters;
	return IsSchema(left) ? BindArguments(context, state, left, right, arguments_) : context;
}
function ResolveArgumentsContext(context, state, parameters, arguments_) {
	return BindParameters(context, state, parameters, arguments_);
}
function init_resolve_arguments() {
	return (init_resolve_arguments = __esmMin((() => {
		init_assign();
		init_schema();
		init_instantiate$27();
		init_extends$2();
		init_infer();
		init_call();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/call/instantiate.mjs
function Peek(state) {
	return IsGreaterThan(state.callstack.length, 0) ? state.callstack[state.callstack.length - 1] : "";
}
function IsTailCall(state, name) {
	return IsEqual(Peek(state), name);
}
function CallDispatch(context, state, target, parameters, expression, arguments_) {
	return InstantiateType(context, state, InstantiateType(ResolveArgumentsContext(context, state, parameters, arguments_), { callstack: [...state.callstack, target.$ref] }, expression));
}
function CallDistributed(context, state, target, parameters, expression, distributedArguments) {
	return distributedArguments.reduce((result, arguments_) => [...result, CallDispatch(context, state, target, parameters, expression, arguments_)], []);
}
function CallImmediate(context, state, target, parameters, expression, arguments_) {
	const returnTypes = CallDistributed(context, state, target, parameters, expression, DistributedArguments(arguments_, expression));
	return returnTypes.length === 1 ? returnTypes[0] : EvaluateUnion(returnTypes);
}
function CallInstantiate(context, state, target, arguments_) {
	const instantiatedArguments = InstantiateTypes(context, state, arguments_);
	const resolved = ResolveTarget(context, target, arguments_);
	const name = resolved[0];
	const type = resolved[1];
	return IsGeneric(type) ? IsTailCall(state, name) ? CallConstruct(Ref(name), instantiatedArguments) : CallImmediate(context, state, Ref(name), type.parameters, type.expression, instantiatedArguments) : CallConstruct(target, instantiatedArguments);
}
function init_instantiate$2() {
	return (init_instantiate$2 = __esmMin((() => {
		init_guard();
		init_call();
		init_ref();
		init_generic();
		init_evaluate$1();
		init_instantiate$27();
		init_distribute_arguments();
		init_resolve_target();
		init_resolve_arguments();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/types/call.mjs
function CallConstruct(target, arguments_) {
	return Create({ ["~kind"]: "Call" }, {
		target,
		arguments: arguments_
	}, {});
}
/** Creates a Call type. */
function Call(target, arguments_) {
	return CallInstantiate({}, { callstack: [] }, target, arguments_);
}
/** Returns true if the given type is a TCall. */
function IsCall(value) {
	return IsKind(value, "Call");
}
function init_call() {
	return (init_call = __esmMin((() => {
		init_create();
		init_schema();
		init_instantiate$2();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/awaited/instantiate.mjs
function AwaitedAction(type) {
	return IsPromise(type) ? AwaitedAction(type.item) : type;
}
function AwaitedImmediate(context, state, type, options) {
	return Update(AwaitedAction(InstantiateType(context, state, type)), {}, options);
}
function AwaitedInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? AwaitedImmediate(context, state, type, options) : AwaitedDeferred(type, options);
}
function init_instantiate$3() {
	return (init_instantiate$3 = __esmMin((() => {
		init_update();
		init_promise();
		init_awaited();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/intrinsics/mapping.mjs
function ApplyMapping(mapping, value) {
	return mapping(value);
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/intrinsics/from-literal.mjs
function FromLiteral$1(mapping, value) {
	return IsString$2(value) ? Literal$1(ApplyMapping(mapping, value)) : Literal$1(value);
}
function init_from_literal() {
	return (init_from_literal = __esmMin((() => {
		init_guard();
		init_literal();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/intrinsics/from-template-literal.mjs
function FromTemplateLiteral$2(mapping, pattern) {
	return FromType$6(mapping, TemplateLiteralDecode(pattern));
}
function init_from_template_literal() {
	return (init_from_template_literal = __esmMin((() => {
		init_decode();
		init_from_type();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/intrinsics/from-union.mjs
function FromUnion$6(mapping, types) {
	return Union(types.map((type) => FromType$6(mapping, type)));
}
function init_from_union() {
	return (init_from_union = __esmMin((() => {
		init_union();
		init_from_type();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/intrinsics/from-type.mjs
function FromType$6(mapping, type) {
	return IsLiteral(type) ? FromLiteral$1(mapping, type.const) : IsTemplateLiteral(type) ? FromTemplateLiteral$2(mapping, type.pattern) : IsUnion(type) ? FromUnion$6(mapping, type.anyOf) : type;
}
function init_from_type() {
	return (init_from_type = __esmMin((() => {
		init_literal();
		init_template_literal();
		init_union();
		init_from_literal();
		init_from_template_literal();
		init_from_union();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/capitalize.mjs
/** Creates a deferred Capitalize action. */
function CapitalizeDeferred(type, options = {}) {
	return Deferred("Capitalize", [type], options);
}
/** Applies a Capitalize action to the given type. */
function Capitalize(type, options = {}) {
	return Instantiate({}, CapitalizeDeferred(type, options));
}
function init_capitalize() {
	return (init_capitalize = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/lowercase.mjs
/** Creates a deferred Lowercase action. */
function LowercaseDeferred(type, options = {}) {
	return Deferred("Lowercase", [type], options);
}
/** Applies a Lowercase action to the given type. */
function Lowercase(type, options = {}) {
	return Instantiate({}, LowercaseDeferred(type, options));
}
function init_lowercase() {
	return (init_lowercase = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/uncapitalize.mjs
/** Creates a deferred Uncapitalize action. */
function UncapitalizeDeferred(type, options = {}) {
	return Deferred("Uncapitalize", [type], options);
}
/** Applies a Uncapitalize action to the given type. */
function Uncapitalize(type, options = {}) {
	return Instantiate({}, UncapitalizeDeferred(type, options));
}
function init_uncapitalize() {
	return (init_uncapitalize = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/uppercase.mjs
/** Creates a deferred Uppercase action. */
function UppercaseDeferred(type, options = {}) {
	return Deferred("Uppercase", [type], options);
}
/** Applies a Uppercase action to the given type. */
function Uppercase(type, options = {}) {
	return Instantiate({}, UppercaseDeferred(type, options));
}
function init_uppercase() {
	return (init_uppercase = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/intrinsics/instantiate.mjs
function CapitalizeImmediate(context, state, type, options) {
	const instantiatedType = InstantiateType(context, state, type);
	return Update(FromType$6(CapitalizeMapping, instantiatedType), {}, options);
}
function CapitalizeInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? CapitalizeImmediate(context, state, type, options) : CapitalizeDeferred(type, options);
}
function LowercaseImmediate(context, state, type, options) {
	const instantiatedType = InstantiateType(context, state, type);
	return Update(FromType$6(LowercaseMapping, instantiatedType), {}, options);
}
function LowercaseInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? LowercaseImmediate(context, state, type, options) : LowercaseDeferred(type, options);
}
function UncapitalizeImmediate(context, state, type, options) {
	const instantiatedType = InstantiateType(context, state, type);
	return Update(FromType$6(UncapitalizeMapping, instantiatedType), {}, options);
}
function UncapitalizeInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? UncapitalizeImmediate(context, state, type, options) : UncapitalizeDeferred(type, options);
}
function UppercaseImmediate(context, state, type, options) {
	const instantiatedType = InstantiateType(context, state, type);
	return Update(FromType$6(UppercaseMapping, instantiatedType), {}, options);
}
function UppercaseInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? UppercaseImmediate(context, state, type, options) : UppercaseDeferred(type, options);
}
var CapitalizeMapping, LowercaseMapping, UncapitalizeMapping, UppercaseMapping;
function init_instantiate$4() {
	return (init_instantiate$4 = __esmMin((() => {
		init_update();
		init_from_type();
		init_instantiate$27();
		init_capitalize();
		init_lowercase();
		init_uncapitalize();
		init_uppercase();
		CapitalizeMapping = (input) => input[0].toUpperCase() + input.slice(1);
		LowercaseMapping = (input) => input.toLowerCase();
		UncapitalizeMapping = (input) => input[0].toLowerCase() + input.slice(1);
		UppercaseMapping = (input) => input.toUpperCase();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/conditional.mjs
/** Creates a deferred Conditional action. */
function ConditionalDeferred(left, right, true_, false_, options = {}) {
	return Deferred("Conditional", [
		left,
		right,
		true_,
		false_
	], options);
}
/** Applies a Conditional action to the given types. */
function Conditional(left, right, true_, false_, options = {}) {
	return Instantiate({}, ConditionalDeferred(left, right, true_, false_, options));
}
function init_conditional() {
	return (init_conditional = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/conditional/instantiate.mjs
function ConditionalImmediate(context, state, left, right, true_, false_, options) {
	const extendsResult = Extends(context, InstantiateType(context, state, left), InstantiateType(context, state, right));
	return Update(IsExtendsUnion(extendsResult) ? Union([InstantiateType(extendsResult.inferred, state, true_), InstantiateType(context, state, false_)]) : IsExtendsTrue(extendsResult) ? InstantiateType(extendsResult.inferred, state, true_) : InstantiateType(context, state, false_), {}, options);
}
function ConditionalInstantiate(context, state, left, right, true_, false_, options) {
	return CanInstantiate(context, [left, right]) ? ConditionalImmediate(context, state, left, right, true_, false_, options) : ConditionalDeferred(left, right, true_, false_, options);
}
function init_instantiate$5() {
	return (init_instantiate$5 = __esmMin((() => {
		init_update();
		init_union();
		init_extends$2();
		init_instantiate$27();
		init_conditional();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/conditional/index.mjs
function init_conditional$1() {
	return (init_conditional$1 = __esmMin((() => {
		init_instantiate$5();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/constructor-parameters.mjs
/** Creates a deferred ConstructorParameters action. */
function ConstructorParametersDeferred(type, options = {}) {
	return Deferred("ConstructorParameters", [type], options);
}
/** Applies a ConstructorParameters action to a type. */
function ConstructorParameters(type, options = {}) {
	return Instantiate({}, ConstructorParametersDeferred(type, options));
}
function init_constructor_parameters() {
	return (init_constructor_parameters = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/constructor-parameters/instantiate.mjs
function ConstructorParametersAction(type) {
	return IsConstructor(type) ? InstantiateType({}, { callstack: [] }, Tuple$1(type.parameters)) : Never();
}
function ConstructorParametersImmediate(context, state, type, options) {
	return Update(ConstructorParametersAction(InstantiateType(context, state, type)), {}, options);
}
function ConstructorParametersInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? ConstructorParametersImmediate(context, state, type, options) : ConstructorParametersDeferred(type, options);
}
function init_instantiate$6() {
	return (init_instantiate$6 = __esmMin((() => {
		init_update();
		init_constructor();
		init_never();
		init_tuple();
		init_constructor_parameters();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/exclude.mjs
/** Creates a deferred Exclude action. */
function ExcludeDeferred(left, right, options = {}) {
	return Deferred("Exclude", [left, right], options);
}
/** Applies a Exclude action using the given types */
function Exclude(left, right, options = {}) {
	return Instantiate({}, ExcludeDeferred(left, right, options));
}
function init_exclude() {
	return (init_exclude = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/exclude/instantiate.mjs
function ExcludeUnion(types, right) {
	return types.reduce((result, head) => {
		return [...result, ...ExcludeType(head, right)];
	}, []);
}
function ExcludeType(left, right) {
	return IsExtendsTrueLike(Extends({}, left, right)) ? [] : [left];
}
function ExcludeAction(left, right) {
	return EvaluateUnion(IsEnum(left) ? ExcludeUnion(EnumValuesToVariants(left.enum), right) : IsUnion(left) ? ExcludeUnion(Flatten(left.anyOf), right) : ExcludeType(left, right));
}
function ExcludeImmediate(context, state, left, right, options) {
	return Update(ExcludeAction(InstantiateType(context, state, left), InstantiateType(context, state, right)), {}, options);
}
function ExcludeInstantiate(context, state, left, right, options) {
	return CanInstantiate(context, [left, right]) ? ExcludeImmediate(context, state, left, right, options) : ExcludeDeferred(left, right, options);
}
function init_instantiate$7() {
	return (init_instantiate$7 = __esmMin((() => {
		init_update();
		init_enum();
		init_union();
		init_extends$2();
		init_enum_to_union();
		init_evaluate$1();
		init_instantiate$27();
		init_exclude();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/extract.mjs
/** Creates a deferred Extract action. */
function ExtractDeferred(left, right, options = {}) {
	return Deferred("Extract", [left, right], options);
}
/** Applies an Extract action using the given types. */
function Extract(left, right, options = {}) {
	return Instantiate({}, ExtractDeferred(left, right, options));
}
function init_extract() {
	return (init_extract = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/extract/instantiate.mjs
function ExtractUnion(types, right) {
	return types.reduce((result, head) => {
		return [...result, ...ExtractType(head, right)];
	}, []);
}
function ExtractType(left, right) {
	return IsExtendsTrueLike(Extends({}, left, right)) ? [left] : [];
}
function ExtractAction(left, right) {
	return EvaluateUnion(IsEnum(left) ? ExtractUnion(EnumValuesToVariants(left.enum), right) : IsUnion(left) ? ExtractUnion(Flatten(left.anyOf), right) : ExtractType(left, right));
}
function ExtractImmediate(context, state, left, right, options) {
	return Update(ExtractAction(InstantiateType(context, state, left), InstantiateType(context, state, right)), {}, options);
}
function ExtractInstantiate(context, state, left, right, options) {
	return CanInstantiate(context, [left, right]) ? ExtractImmediate(context, state, left, right, options) : ExtractDeferred(left, right, options);
}
function init_instantiate$8() {
	return (init_instantiate$8 = __esmMin((() => {
		init_update();
		init_enum();
		init_union();
		init_extends$2();
		init_enum_to_union();
		init_evaluate$1();
		init_instantiate$27();
		init_extract();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/helpers/keys.mjs
function ConvertToIntegerKey(value) {
	const normal = `${value}`;
	return integerKeyPattern.test(normal) ? parseInt(normal) : value;
}
var integerKeyPattern;
function init_keys() {
	return (init_keys = __esmMin((() => {
		integerKeyPattern = /* @__PURE__ */ new RegExp("^(?:0|[1-9][0-9]*)$");
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexed/from-array.mjs
function NormalizeLiteral(value) {
	return Literal$1(ConvertToIntegerKey(value));
}
function NormalizeIndexerTypes(types) {
	return types.map((type) => NormalizeIndexer(type));
}
function NormalizeIndexer(type) {
	return IsIntersect(type) ? Intersect(NormalizeIndexerTypes(type.allOf)) : IsUnion(type) ? Union(NormalizeIndexerTypes(type.anyOf)) : IsLiteral(type) ? NormalizeLiteral(type.const) : type;
}
function FromArray$2(type, indexer) {
	return IsExtendsTrueLike(Extends({}, NormalizeIndexer(indexer), Number$2())) ? type : Never();
}
function init_from_array() {
	return (init_from_array = __esmMin((() => {
		init_intersect();
		init_union();
		init_literal();
		init_number();
		init_never();
		init_extends$2();
		init_keys();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexable/from-cyclic.mjs
function FromCyclic$4(defs, ref) {
	return FromType$5(CyclicTarget(defs, ref));
}
function init_from_cyclic() {
	return (init_from_cyclic = __esmMin((() => {
		init_from_type$1();
		init_target();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexable/from-union.mjs
function FromUnion$5(types) {
	return types.reduce((result, left) => {
		return [...result, ...FromType$5(left)];
	}, []);
}
function init_from_union$1() {
	return (init_from_union$1 = __esmMin((() => {
		init_from_type$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexable/from-enum.mjs
function FromEnum(values) {
	return FromUnion$5(EnumValuesToVariants(values));
}
function init_from_enum() {
	return (init_from_enum = __esmMin((() => {
		init_enum_to_union();
		init_from_union$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexable/from-intersect.mjs
function FromIntersect$4(types) {
	return FromType$5(EvaluateIntersect(types));
}
function init_from_intersect() {
	return (init_from_intersect = __esmMin((() => {
		init_evaluate();
		init_from_type$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexable/from-literal.mjs
function FromLiteral(value) {
	return [`${value}`];
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexable/from-template-literal.mjs
function FromTemplateLiteral$1(pattern) {
	return FromType$5(TemplateLiteralDecode(pattern));
}
function init_from_template_literal$1() {
	return (init_from_template_literal$1 = __esmMin((() => {
		init_decode();
		init_from_type$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexable/from-type.mjs
function FromType$5(type) {
	return IsCyclic(type) ? FromCyclic$4(type.$defs, type.$ref) : IsEnum(type) ? FromEnum(type.enum) : IsIntersect(type) ? FromIntersect$4(type.allOf) : IsLiteral(type) ? FromLiteral(type.const) : IsTemplateLiteral(type) ? FromTemplateLiteral$1(type.pattern) : IsUnion(type) ? FromUnion$5(type.anyOf) : [];
}
function init_from_type$1() {
	return (init_from_type$1 = __esmMin((() => {
		init_cyclic();
		init_enum();
		init_intersect();
		init_literal();
		init_template_literal();
		init_union();
		init_from_cyclic();
		init_from_enum();
		init_from_intersect();
		init_from_template_literal$1();
		init_from_union$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexable/to-indexable-keys.mjs
/**
* Transforms a type meant as an Indexer into string[] array which is used by Indexable types
* like Index, Pick and Omit to select from property keys. This function should only be used
* for Object key selection, and not for Array / Tuple key selection as Array-Like structures
* require TNumber indexing support.
*/
function ToIndexableKeys(type) {
	return FromType$5(type);
}
function init_to_indexable_keys() {
	return (init_to_indexable_keys = __esmMin((() => {
		init_from_type$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexed/from-object.mjs
function SelectProperty(properties, indexer) {
	return indexer in properties ? [properties[indexer]] : [];
}
function SelectProperties(properties, indexer) {
	return indexer.reduce((result, left) => {
		return [...result, ...SelectProperty(properties, left)];
	}, []);
}
function FromObject$5(properties, indexer) {
	return EvaluateUnion(SelectProperties(properties, ToIndexableKeys(indexer)));
}
function init_from_object() {
	return (init_from_object = __esmMin((() => {
		init_evaluate();
		init_to_indexable_keys();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexed/array-indexer.mjs
function ConvertLiteral(value) {
	return Literal$1(ConvertToIntegerKey(value));
}
function ArrayIndexerTypes(types) {
	return types.map((type) => FormatArrayIndexer(type));
}
/** Formats embedded integer-like strings on an Indexer to be number values inline with TS indexing | coercion behaviors. */
function FormatArrayIndexer(type) {
	return IsIntersect(type) ? Intersect(ArrayIndexerTypes(type.allOf)) : IsUnion(type) ? Union(ArrayIndexerTypes(type.anyOf)) : IsLiteral(type) ? ConvertLiteral(type.const) : type;
}
function init_array_indexer() {
	return (init_array_indexer = __esmMin((() => {
		init_union();
		init_intersect();
		init_literal();
		init_keys();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexed/from-tuple.mjs
function IndexElementsWithIndexer(types, indexer) {
	return types.reduceRight((result, right, index) => {
		return IsExtendsTrueLike(Extends({}, Literal$1(index), indexer)) ? [right, ...result] : result;
	}, []);
}
function FromTupleWithIndexer(types, indexer) {
	return EvaluateUnionFast(IndexElementsWithIndexer(types, FormatArrayIndexer(indexer)));
}
function FromTupleWithoutIndexer(types) {
	return EvaluateUnionFast(types);
}
function FromTuple$3(types, indexer) {
	return IsNumber(indexer) || IsInteger(indexer) ? FromTupleWithoutIndexer(types) : FromTupleWithIndexer(types, indexer);
}
function init_from_tuple() {
	return (init_from_tuple = __esmMin((() => {
		init_literal();
		init_number();
		init_integer();
		init_evaluate();
		init_extends$2();
		init_array_indexer();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/helpers/keys-to-indexer.mjs
function KeysToLiterals(keys) {
	return keys.reduce((result, left) => {
		return IsLiteralValue(left) ? [...result, Literal$1(left)] : result;
	}, []);
}
function KeysToIndexer(keys) {
	return Union(KeysToLiterals(keys));
}
function init_keys_to_indexer() {
	return (init_keys_to_indexer = __esmMin((() => {
		init_literal();
		init_union();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/indexed.mjs
/** Creates a deferred Index action. */
function IndexDeferred(type, indexer, options = {}) {
	return Deferred("Index", [type, indexer], options);
}
/** Applies a Index action using the given types. */
function Index(type, indexer_or_keys, options = {}) {
	return Instantiate({}, IndexDeferred(type, IsArray$1(indexer_or_keys) ? KeysToIndexer(indexer_or_keys) : indexer_or_keys, options));
}
function init_indexed() {
	return (init_indexed = __esmMin((() => {
		init_guard();
		init_deferred();
		init_keys_to_indexer();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/object/from-cyclic.mjs
function FromCyclic$3(defs, ref) {
	return FromType$4(CyclicTarget(defs, ref));
}
function init_from_cyclic$1() {
	return (init_from_cyclic$1 = __esmMin((() => {
		init_from_type$2();
		init_target();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/object/from-intersect.mjs
function CollapseIntersectProperties(left, right) {
	const leftKeys = Keys(left).filter((key) => !HasPropertyKey(right, key));
	const rightKeys = Keys(right).filter((key) => !HasPropertyKey(left, key));
	const sharedKeys = Keys(left).filter((key) => HasPropertyKey(right, key));
	const leftProperties = leftKeys.reduce((result, key) => ({
		...result,
		[key]: left[key]
	}), {});
	const rightProperties = rightKeys.reduce((result, key) => ({
		...result,
		[key]: right[key]
	}), {});
	const sharedProperties = sharedKeys.reduce((result, key) => ({
		...result,
		[key]: EvaluateIntersect([left[key], right[key]])
	}), {});
	return Assign(Assign(leftProperties, rightProperties), sharedProperties);
}
function FromIntersect$3(types) {
	return types.reduce((result, left) => {
		return CollapseIntersectProperties(result, FromType$4(left));
	}, {});
}
function init_from_intersect$1() {
	return (init_from_intersect$1 = __esmMin((() => {
		init_assign();
		init_guard();
		init_from_type$2();
		init_evaluate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/object/from-object.mjs
function FromObject$4(properties) {
	return properties;
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/object/from-tuple.mjs
function FromTuple$2(types) {
	return FromType$4(TupleToObject(Tuple$1(types)));
}
function init_from_tuple$1() {
	return (init_from_tuple$1 = __esmMin((() => {
		init_tuple();
		init_to_object();
		init_from_type$2();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/object/from-union.mjs
function CollapseUnionProperties(left, right) {
	return Keys(left).filter((key) => key in right).reduce((result, key) => {
		return {
			...result,
			[key]: EvaluateUnion([left[key], right[key]])
		};
	}, {});
}
function ReduceVariants(types, result) {
	const [left, ...right] = types;
	return IsSchema(left) ? ReduceVariants(right, CollapseUnionProperties(result, FromType$4(left))) : result;
}
function FromUnion$4(types) {
	const [left, ...right] = types;
	return IsSchema(left) ? ReduceVariants(right, FromType$4(left)) : Unreachable$1();
}
function init_from_union$2() {
	return (init_from_union$2 = __esmMin((() => {
		init_guard();
		init_schema();
		init_evaluate();
		init_from_type$2();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/object/from-type.mjs
function FromType$4(type) {
	return IsCyclic(type) ? FromCyclic$3(type.$defs, type.$ref) : IsIntersect(type) ? FromIntersect$3(type.allOf) : IsUnion(type) ? FromUnion$4(type.anyOf) : IsTuple(type) ? FromTuple$2(type.items) : IsObject(type) ? FromObject$4(type.properties) : {};
}
function init_from_type$2() {
	return (init_from_type$2 = __esmMin((() => {
		init_cyclic();
		init_intersect();
		init_object();
		init_tuple();
		init_union();
		init_from_cyclic$1();
		init_from_intersect$1();
		init_from_tuple$1();
		init_from_union$2();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/object/collapse.mjs
/**
* Collapses a type into a TObject schema. This is a lossy fast path used to
* normalize arbitrary TSchema types into a TObject structure. This function is
* primarily used in indexing operations where a normalized object structure
* is required. If the type cannot be collapsed, an empty object schema is returned.
*/
function CollapseToObject(type) {
	return _Object_$1(FromType$4(type));
}
function init_collapse() {
	return (init_collapse = __esmMin((() => {
		init_object();
		init_from_type$2();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/object/index.mjs
function init_object$2() {
	return (init_object$2 = __esmMin((() => {
		init_collapse();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexed/instantiate.mjs
function NormalizeType$1(type) {
	return IsCyclic(type) || IsIntersect(type) || IsUnion(type) ? CollapseToObject(type) : type;
}
function IndexAction(type, indexer) {
	const normal = NormalizeType$1(type);
	return IsArray(normal) ? FromArray$2(normal.items, indexer) : IsObject(normal) ? FromObject$5(normal.properties, indexer) : IsTuple(normal) ? FromTuple$3(normal.items, indexer) : Never();
}
function IndexImmediate(context, state, type, indexer, options) {
	return Update(IndexAction(InstantiateType(context, state, type), InstantiateType(context, state, indexer)), {}, options);
}
function IndexInstantiate(context, state, type, indexer, options) {
	return CanInstantiate(context, [type, indexer]) ? IndexImmediate(context, state, type, indexer, options) : IndexDeferred(type, indexer, options);
}
function init_instantiate$9() {
	return (init_instantiate$9 = __esmMin((() => {
		init_update();
		init_array();
		init_cyclic();
		init_intersect();
		init_never();
		init_object();
		init_tuple();
		init_union();
		init_from_array();
		init_from_object();
		init_from_tuple();
		init_instantiate$27();
		init_indexed();
		init_object$2();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/instance-type.mjs
/** Creates a deferred InstanceType action. */
function InstanceTypeDeferred(type, options = {}) {
	return Deferred("InstanceType", [type], options);
}
/** Applies a InstanceType action to the given type. */
function InstanceType(type, options = {}) {
	return Instantiate({}, InstanceTypeDeferred(type, options));
}
function init_instance_type() {
	return (init_instance_type = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/instance-type/instantiate.mjs
function InstanceTypeAction(type) {
	return IsConstructor(type) ? type.instanceType : Never();
}
function InstanceTypeImmediate(context, state, type, options) {
	return Update(InstanceTypeAction(InstantiateType(context, state, type)), {}, options);
}
function InstanceTypeInstantiate(context, state, type, options = {}) {
	return CanInstantiate(context, [type]) ? InstanceTypeImmediate(context, state, type, options) : InstanceTypeDeferred(type, options);
}
function init_instantiate$10() {
	return (init_instantiate$10 = __esmMin((() => {
		init_update();
		init_constructor();
		init_never();
		init_instance_type();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/interface/instantiate.mjs
function InterfaceImmediate(context, state, heritage, properties, options) {
	const instantiatedHeritage = InstantiateTypes(context, { callstack: [] }, heritage);
	const instantiatedProperties = InstantiateProperties(context, { callstack: [] }, properties);
	return Update(EvaluateIntersect([...instantiatedHeritage, _Object_$1(instantiatedProperties)]), {}, options);
}
function InterfaceInstantiate(context, state, heritage, properties, options) {
	return CanInstantiate(context, heritage) ? InterfaceImmediate(context, state, heritage, properties, options) : InterfaceDeferred(heritage, properties, options);
}
function init_instantiate$11() {
	return (init_instantiate$11 = __esmMin((() => {
		init_update();
		init_object();
		init_evaluate();
		init_action();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/keyof.mjs
/** Creates a deferred KeyOf action. */
function KeyOfDeferred(type, options = {}) {
	return Deferred("KeyOf", [type], options);
}
/** Applies a KeyOf action to the given type. */
function KeyOf(type, options = {}) {
	return Instantiate({}, KeyOfDeferred(type, options));
}
function init_keyof() {
	return (init_keyof = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/keyof/from-any.mjs
function FromAny() {
	return Union([
		Number$2(),
		String$2(),
		Symbol$1()
	]);
}
function init_from_any() {
	return (init_from_any = __esmMin((() => {
		init_number();
		init_string$1();
		init_symbol();
		init_union();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/keyof/from-array.mjs
function FromArray$1(_type) {
	return Number$2();
}
function init_from_array$1() {
	return (init_from_array$1 = __esmMin((() => {
		init_number();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/keyof/from-object.mjs
function FromPropertyKeys(keys) {
	return keys.reduce((result, left) => {
		return IsLiteralValue(left) ? [...result, Literal$1(ConvertToIntegerKey(left))] : Unreachable$1();
	}, []);
}
function FromObject$3(properties) {
	return EvaluateUnionFast(FromPropertyKeys(Keys(properties)));
}
function init_from_object$2() {
	return (init_from_object$2 = __esmMin((() => {
		init_guard();
		init_literal();
		init_keys();
		init_evaluate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/keyof/from-record.mjs
function FromRecord(type) {
	return RecordKey(type);
}
function init_from_record() {
	return (init_from_record = __esmMin((() => {
		init_record();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/keyof/from-tuple.mjs
function FromTuple$1(types) {
	return EvaluateUnionFast(types.map((_, index) => Literal$1(index)));
}
function init_from_tuple$2() {
	return (init_from_tuple$2 = __esmMin((() => {
		init_literal();
		init_evaluate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/keyof/instantiate.mjs
function NormalizeType(type) {
	return IsCyclic(type) || IsIntersect(type) || IsUnion(type) ? CollapseToObject(type) : type;
}
function KeyOfAction(type) {
	const normal = NormalizeType(type);
	return IsAny(normal) ? FromAny() : IsArray(normal) ? FromArray$1(normal.items) : IsObject(normal) ? FromObject$3(normal.properties) : IsRecord(normal) ? FromRecord(normal) : IsTuple(normal) ? FromTuple$1(normal.items) : Never();
}
function KeyOfImmediate(context, state, type, options) {
	return Update(KeyOfAction(InstantiateType(context, state, type)), {}, options);
}
function KeyOfInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? KeyOfImmediate(context, state, type, options) : KeyOfDeferred(type, options);
}
function init_instantiate$12() {
	return (init_instantiate$12 = __esmMin((() => {
		init_update();
		init_any();
		init_array();
		init_cyclic();
		init_intersect();
		init_never();
		init_object();
		init_record();
		init_tuple();
		init_union();
		init_keyof();
		init_instantiate$27();
		init_object$2();
		init_from_any();
		init_from_array$1();
		init_from_object$2();
		init_from_record();
		init_from_tuple$2();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/mapped/mapped-keys.mjs
function FromTemplateLiteral(pattern) {
	return FromType$3(TemplateLiteralDecode(pattern));
}
function FromUnion$3(types) {
	return types.reduce((result, left) => {
		return [...result, ...FromType$3(left)];
	}, []);
}
function FromType$3(type) {
	return IsEnum(type) ? FromUnion$3(EnumValuesToVariants(type.enum)) : IsLiteralString(type) || IsLiteralNumber(type) ? [type] : IsTemplateLiteral(type) ? FromTemplateLiteral(type.pattern) : IsUnion(type) ? FromUnion$3(type.anyOf) : [];
}
function MappedKeys(type) {
	return FromType$3(type);
}
function init_mapped_keys() {
	return (init_mapped_keys = __esmMin((() => {
		init_literal();
		init_enum();
		init_template_literal();
		init_union();
		init_enum_to_union();
		init_decode();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/mapped.mjs
/** Creates a deferred Mapped action. */
function MappedDeferred(identifier, key, as, property, options = {}) {
	return Deferred("Mapped", [
		identifier,
		key,
		as,
		property
	], options);
}
/** Applies a Mapped action using the given types. */
function Mapped(identifier, key, as, property, options = {}) {
	return Instantiate({}, MappedDeferred(identifier, key, as, property, options));
}
function init_mapped() {
	return (init_mapped = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/mapped/instantiate.mjs
function InstantiateKeyAs(context, state, identifier, key, as) {
	const instantiatedKeyAs = InstantiateType(Assign(context, { [identifier["name"]]: key }), state, as);
	return IsTemplateLiteral(instantiatedKeyAs) ? TemplateLiteralDecode(instantiatedKeyAs.pattern) : instantiatedKeyAs;
}
function InstantiateProperty(context, state, identifier, key, property) {
	return InstantiateType(Assign(context, { [identifier["name"]]: key }), state, property);
}
function MappedProperty(context, state, identifier, key, as, property) {
	const instantiatedProperty = InstantiateProperty(context, state, identifier, key, property);
	const instantiatedKeyAs = InstantiateKeyAs(context, state, identifier, key, as);
	return IsLiteralString(instantiatedKeyAs) || IsLiteralNumber(instantiatedKeyAs) ? { [instantiatedKeyAs.const]: instantiatedProperty } : {};
}
function MappedProperties(context, state, identifier, keys, as, type) {
	return keys.reduce((result, left) => {
		return {
			...result,
			...MappedProperty(context, state, identifier, left, as, type)
		};
	}, {});
}
function MappedAction(context, state, identifier, key, as, type) {
	return _Object_$1(MappedProperties(context, state, identifier, MappedKeys(key), as, type));
}
function MappedImmediate(context, state, identifier, key, as, property, options) {
	return Update(MappedAction(context, state, identifier, InstantiateType(context, state, key), as, property), {}, options);
}
function MappedInstantiate(context, state, identifier, key, as, property, options) {
	return CanInstantiate(context, [key]) ? MappedImmediate(context, state, identifier, key, as, property, options) : MappedDeferred(identifier, key, as, property, options);
}
function init_instantiate$13() {
	return (init_instantiate$13 = __esmMin((() => {
		init_assign(), init_update();
		init_literal();
		init_object();
		init_mapped_keys();
		init_template_literal();
		init_mapped();
		init_decode();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/module/instantiate.mjs
function InstantiateCyclics(context, cyclicKeys) {
	return Keys(context).filter((key) => cyclicKeys.includes(key)).reduce((result, key) => {
		return {
			...result,
			[key]: InstantiateCyclic(context, key, context[key])
		};
	}, {});
}
function InstantiateNonCyclics(context, cyclicKeys) {
	return Keys(context).filter((key) => !cyclicKeys.includes(key)).reduce((result, key) => {
		return {
			...result,
			[key]: InstantiateType(context, { callstack: [] }, context[key])
		};
	}, {});
}
function InstantiateModule(context, options) {
	const cyclicCandidates = CyclicCandidates(context);
	const instantiatedCyclics = InstantiateCyclics(context, cyclicCandidates);
	const instantiatedNonCyclics = InstantiateNonCyclics(context, cyclicCandidates);
	return Update({
		...instantiatedCyclics,
		...instantiatedNonCyclics
	}, {}, options);
}
function ModuleInstantiate(context, _state, properties, options) {
	return InstantiateModule(Assign(context, properties), options);
}
function init_instantiate$14() {
	return (init_instantiate$14 = __esmMin((() => {
		init_guard();
		init_update(), init_assign();
		init_candidates();
		init_instantiate();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/non-nullable.mjs
/** Creates a deferred NonNullable action. */
function NonNullableDeferred(type, options = {}) {
	return Deferred("NonNullable", [type], options);
}
/** Applies a NonNullable action to the given type. */
function NonNullable(type, options = {}) {
	return Instantiate({}, NonNullableDeferred(type, options));
}
function init_non_nullable() {
	return (init_non_nullable = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/non-nullable/instantiate.mjs
function NonNullableAction(type) {
	return ExcludeInstantiate({}, { callstack: [] }, type, Union([Null(), Undefined()]), {});
}
function NonNullableImmediate(context, state, type, options) {
	return Update(NonNullableAction(InstantiateType(context, state, type)), {}, options);
}
function NonNullableInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? NonNullableImmediate(context, state, type, options) : NonNullableDeferred(type, options);
}
function init_instantiate$15() {
	return (init_instantiate$15 = __esmMin((() => {
		init_update();
		init_null();
		init_undefined();
		init_union();
		init_instantiate$7();
		init_non_nullable();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexable/to-indexable.mjs
/** Transforms a type into a TProperties used for indexing operations */
function ToIndexable(type) {
	const collapsed = CollapseToObject(type);
	return IsObject(collapsed) ? collapsed.properties : Unreachable$1();
}
function init_to_indexable() {
	return (init_to_indexable = __esmMin((() => {
		init_object();
		init_object$2();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/omit.mjs
/** Creates a deferred Omit action. */
function OmitDeferred(type, indexer, options = {}) {
	return Deferred("Omit", [type, indexer], options);
}
/** Applies a Omit action using the given types. */
function Omit(type, indexer_or_keys, options = {}) {
	return Instantiate({}, OmitDeferred(type, IsArray$1(indexer_or_keys) ? KeysToIndexer(indexer_or_keys) : indexer_or_keys, options));
}
function init_omit() {
	return (init_omit = __esmMin((() => {
		init_guard();
		init_deferred();
		init_keys_to_indexer();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/omit/instantiate.mjs
function FromKeys$1(properties, keys) {
	return Keys(properties).reduce((result, key) => {
		return keys.includes(key) ? result : {
			...result,
			[key]: properties[key]
		};
	}, {});
}
function OmitAction(type, indexer) {
	return _Object_$1(FromKeys$1(ToIndexable(type), ToIndexableKeys(indexer)));
}
function OmitImmediate(context, state, type, indexer, options) {
	return Update(OmitAction(InstantiateType(context, state, type), InstantiateType(context, state, indexer)), {}, options);
}
function OmitInstantiate(context, state, type, indexer, options) {
	return CanInstantiate(context, [type, indexer]) ? OmitImmediate(context, state, type, indexer, options) : OmitDeferred(type, indexer, options);
}
function init_instantiate$16() {
	return (init_instantiate$16 = __esmMin((() => {
		init_update();
		init_guard();
		init_object();
		init_to_indexable_keys();
		init_to_indexable();
		init_omit();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/options.mjs
/** Creates a deferred Options action. */
function OptionsDeferred(type, options) {
	return Deferred("Options", [type, options], {});
}
/** Applies an Options action to the given type. */
function Options(type, options) {
	return Instantiate({}, OptionsDeferred(type, options));
}
function init_options() {
	return (init_options = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/options/instantiate.mjs
function OptionsImmediate(context, state, type, options) {
	return Update(InstantiateType(context, state, type), {}, options);
}
function OptionsInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? OptionsImmediate(context, state, type, options) : OptionsDeferred(type, options);
}
function init_instantiate$17() {
	return (init_instantiate$17 = __esmMin((() => {
		init_update();
		init_instantiate$27();
		init_options();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/parameters.mjs
/** Creates a deferred Parameters action. */
function ParametersDeferred(type, options = {}) {
	return Deferred("Parameters", [type], options);
}
/** Applies a Parameters action to the given type. */
function Parameters(type, options = {}) {
	return Instantiate({}, ParametersDeferred(type, options));
}
function init_parameters$1() {
	return (init_parameters$1 = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/parameters/instantiate.mjs
function ParametersAction(type) {
	return IsFunction(type) ? InstantiateType({}, { callstack: [] }, Tuple$1(type.parameters)) : Never();
}
function ParametersImmediate(context, state, type, options) {
	return Update(ParametersAction(InstantiateType(context, state, type)), {}, options);
}
function ParametersInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? ParametersImmediate(context, state, type, options) : ParametersDeferred(type, options);
}
function init_instantiate$18() {
	return (init_instantiate$18 = __esmMin((() => {
		init_update();
		init_function();
		init_never();
		init_tuple();
		init_parameters$1();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/partial.mjs
/** Creates a deferred Partial action. */
function PartialDeferred(type, options = {}) {
	return Deferred("Partial", [type], options);
}
/** Applies a Partial action to the given type. */
function Partial(type, options = {}) {
	return Instantiate({}, PartialDeferred(type, options));
}
function init_partial() {
	return (init_partial = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/partial/from-cyclic.mjs
function FromCyclic$2(defs, ref) {
	const partial = FromType$2(CyclicTarget(defs, ref));
	return Cyclic(Assign(defs, { [ref]: partial }), ref);
}
function init_from_cyclic$2() {
	return (init_from_cyclic$2 = __esmMin((() => {
		init_assign();
		init_cyclic();
		init_from_type$3();
		init_target();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/partial/from-intersect.mjs
function FromIntersect$2(types) {
	return EvaluateIntersect(types.map((type) => FromType$2(type)));
}
function init_from_intersect$2() {
	return (init_from_intersect$2 = __esmMin((() => {
		init_from_type$3();
		init_evaluate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/partial/from-union.mjs
function FromUnion$2(types) {
	return Union(types.map((type) => FromType$2(type)));
}
function init_from_union$3() {
	return (init_from_union$3 = __esmMin((() => {
		init_union();
		init_from_type$3();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/partial/from-object.mjs
function FromObject$2(properties) {
	return _Object_$1(Keys(properties).reduce((result, left) => {
		return {
			...result,
			[left]: Optional$2(properties[left])
		};
	}, {}));
}
function init_from_object$3() {
	return (init_from_object$3 = __esmMin((() => {
		init_guard();
		init_object();
		init__optional$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/partial/from-type.mjs
function FromType$2(type) {
	return IsCyclic(type) ? FromCyclic$2(type.$defs, type.$ref) : IsIntersect(type) ? FromIntersect$2(type.allOf) : IsUnion(type) ? FromUnion$2(type.anyOf) : IsObject(type) ? FromObject$2(type.properties) : _Object_$1({});
}
function init_from_type$3() {
	return (init_from_type$3 = __esmMin((() => {
		init_cyclic();
		init_intersect();
		init_object();
		init_union();
		init_from_cyclic$2();
		init_from_intersect$2();
		init_from_union$3();
		init_from_object$3();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/partial/instantiate.mjs
function PartialImmediate(context, state, type, options) {
	return Update(FromType$2(InstantiateType(context, state, type)), {}, options);
}
function PartialInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? PartialImmediate(context, state, type, options) : PartialDeferred(type, options);
}
function init_instantiate$19() {
	return (init_instantiate$19 = __esmMin((() => {
		init_update();
		init_partial();
		init_from_type$3();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/pick.mjs
/** Creates a deferred Pick action. */
function PickDeferred(type, indexer, options = {}) {
	return Deferred("Pick", [type, indexer], options);
}
/** Applies a Pick action using the given types. */
function Pick(type, indexer_or_keys, options = {}) {
	return Instantiate({}, PickDeferred(type, IsArray$1(indexer_or_keys) ? KeysToIndexer(indexer_or_keys) : indexer_or_keys, options));
}
function init_pick() {
	return (init_pick = __esmMin((() => {
		init_guard();
		init_deferred();
		init_keys_to_indexer();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/pick/instantiate.mjs
function FromKeys(properties, keys) {
	return Keys(properties).reduce((result, key) => {
		return keys.includes(key) ? Assign(result, { [key]: properties[key] }) : result;
	}, {});
}
function PickAction(type, indexer) {
	return _Object_$1(FromKeys(ToIndexable(type), ToIndexableKeys(indexer)));
}
function PickImmediate(context, state, type, indexer, options) {
	return Update(PickAction(InstantiateType(context, state, type), InstantiateType(context, state, indexer)), {}, options);
}
function PickInstantiate(context, state, type, indexer, options) {
	return CanInstantiate(context, [type, indexer]) ? PickImmediate(context, state, type, indexer, options) : PickDeferred(type, indexer, options);
}
function init_instantiate$20() {
	return (init_instantiate$20 = __esmMin((() => {
		init_assign(), init_update();
		init_guard();
		init_object();
		init_to_indexable_keys();
		init_to_indexable();
		init_pick();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/readonly-type.mjs
/** Creates a deferred ReadonlyType action. */
function ReadonlyTypeDeferred(type, options = {}) {
	return Deferred("ReadonlyType", [type], options);
}
/** This type is an alias for the TypeScript `Readonly<T>` utility type. */
function ReadonlyType(type, options = {}) {
	return Instantiate({}, ReadonlyTypeDeferred(type, options));
}
function init_readonly_type() {
	return (init_readonly_type = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/readonly-type/from-array.mjs
function FromArray(type) {
	return Immutable(Array$1(type));
}
function init_from_array$2() {
	return (init_from_array$2 = __esmMin((() => {
		init_array();
		init__immutable();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/readonly-type/from-cyclic.mjs
function FromCyclic$1(defs, ref) {
	const partial = FromType$1(CyclicTarget(defs, ref));
	return Cyclic(Assign(defs, { [ref]: partial }), ref);
}
function init_from_cyclic$3() {
	return (init_from_cyclic$3 = __esmMin((() => {
		init_assign();
		init_cyclic();
		init_from_type$4();
		init_target();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/readonly-type/from-intersect.mjs
function FromIntersect$1(types) {
	return EvaluateIntersect(types.map((type) => FromType$1(type)));
}
function init_from_intersect$3() {
	return (init_from_intersect$3 = __esmMin((() => {
		init_from_type$4();
		init_evaluate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/readonly-type/from-object.mjs
function FromObject$1(properties) {
	return _Object_$1(Keys(properties).reduce((result, left) => {
		return {
			...result,
			[left]: Readonly$1(properties[left])
		};
	}, {}));
}
function init_from_object$4() {
	return (init_from_object$4 = __esmMin((() => {
		init_guard();
		init_object();
		init__readonly$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/readonly-type/from-tuple.mjs
function FromTuple(types) {
	return Immutable(Tuple$1(types));
}
function init_from_tuple$3() {
	return (init_from_tuple$3 = __esmMin((() => {
		init_tuple();
		init__immutable();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/readonly-type/from-union.mjs
function FromUnion$1(types) {
	return Union(types.map((type) => FromType$1(type)));
}
function init_from_union$4() {
	return (init_from_union$4 = __esmMin((() => {
		init_union();
		init_from_type$4();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/readonly-type/from-type.mjs
function FromType$1(type) {
	return IsArray(type) ? FromArray(type.items) : IsCyclic(type) ? FromCyclic$1(type.$defs, type.$ref) : IsIntersect(type) ? FromIntersect$1(type.allOf) : IsObject(type) ? FromObject$1(type.properties) : IsTuple(type) ? FromTuple(type.items) : IsUnion(type) ? FromUnion$1(type.anyOf) : type;
}
function init_from_type$4() {
	return (init_from_type$4 = __esmMin((() => {
		init_array();
		init_cyclic();
		init_intersect();
		init_object();
		init_tuple();
		init_union();
		init_from_array$2();
		init_from_cyclic$3();
		init_from_intersect$3();
		init_from_object$4();
		init_from_tuple$3();
		init_from_union$4();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/readonly-type/instantiate.mjs
function ReadonlyTypeImmediate(context, state, type, options) {
	return Update(FromType$1(InstantiateType(context, state, type)), {}, options);
}
function ReadonlyTypeInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? ReadonlyTypeImmediate(context, state, type, options) : ReadonlyTypeDeferred(type, options);
}
function init_instantiate$21() {
	return (init_instantiate$21 = __esmMin((() => {
		init_update();
		init_readonly_type();
		init_from_type$4();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/from-key-any.mjs
function FromAnyKey(value) {
	return CreateRecord(StringKey, value);
}
function init_from_key_any() {
	return (init_from_key_any = __esmMin((() => {
		init_record();
		init_record_create();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/from-key-boolean.mjs
function FromBooleanKey(value) {
	return _Object_$1({
		true: value,
		false: value
	});
}
function init_from_key_boolean() {
	return (init_from_key_boolean = __esmMin((() => {
		init_object();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/from-key-enum.mjs
function FromEnumKey(values, value) {
	return FromKey(EnumValuesToUnion(values), value);
}
function init_from_key_enum() {
	return (init_from_key_enum = __esmMin((() => {
		init_enum_to_union();
		init_from_key();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/from-key-integer.mjs
function FromIntegerKey(key, value) {
	return CreateRecord(IntegerKey, value);
}
function init_from_key_integer() {
	return (init_from_key_integer = __esmMin((() => {
		init_record();
		init_record_create();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/from-key-intersect.mjs
function FromIntersectKey(types, value) {
	return FromKey(EvaluateIntersect(types), value);
}
function init_from_key_intersect() {
	return (init_from_key_intersect = __esmMin((() => {
		init_evaluate();
		init_from_key();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/from-key-literal.mjs
function FromLiteralKey(key, value) {
	return IsString$2(key) || IsNumber$2(key) ? _Object_$1({ [key]: value }) : IsEqual(key, false) ? _Object_$1({ false: value }) : IsEqual(key, true) ? _Object_$1({ true: value }) : _Object_$1({});
}
function init_from_key_literal() {
	return (init_from_key_literal = __esmMin((() => {
		init_guard();
		init_object();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/from-key-number.mjs
function FromNumberKey(key, value) {
	return CreateRecord(NumberKey, value);
}
function init_from_key_number() {
	return (init_from_key_number = __esmMin((() => {
		init_record();
		init_record_create();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/from-key-string.mjs
function FromStringKey(key, value) {
	return HasPropertyKey(key, "pattern") && (IsString$2(key.pattern) || key.pattern instanceof RegExp) ? CreateRecord(key.pattern.toString(), value) : CreateRecord(StringKey, value);
}
function init_from_key_string() {
	return (init_from_key_string = __esmMin((() => {
		init_guard();
		init_record();
		init_record_create();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/from-key-template-literal.mjs
function FromTemplateKey(pattern, value) {
	return IsTemplateLiteralFinite(ParsePatternIntoTypes(pattern)) ? FromKey(TemplateLiteralDecode(pattern), value) : CreateRecord(pattern, value);
}
function init_from_key_template_literal() {
	return (init_from_key_template_literal = __esmMin((() => {
		init_from_key();
		init_pattern();
		init_is_finite();
		init_decode();
		init_record_create();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/from-key-union.mjs
function StringOrNumberCheck(types) {
	return types.some((type) => IsString(type) || IsNumber(type) || IsInteger(type));
}
function TryBuildRecord(types, value) {
	return IsEqual(StringOrNumberCheck(types), true) ? CreateRecord(StringKey, value) : void 0;
}
function CreateProperties(types, value) {
	return types.reduce((result, left) => {
		return IsLiteral(left) && (IsString$2(left.const) || IsNumber$2(left.const)) ? {
			...result,
			[left.const]: value
		} : result;
	}, {});
}
function CreateObject(types, value) {
	return _Object_$1(CreateProperties(types, value));
}
function FromUnionKey(types, value) {
	const flattened = Flatten(types);
	const record = TryBuildRecord(flattened, value);
	return IsSchema(record) ? record : CreateObject(flattened, value);
}
function init_from_key_union() {
	return (init_from_key_union = __esmMin((() => {
		init_guard();
		init_schema();
		init_literal();
		init_number();
		init_integer();
		init_object();
		init_string$1();
		init_record();
		init_flatten();
		init_record_create();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/from-key.mjs
function FromKey(key, value) {
	return IsAny(key) ? FromAnyKey(value) : IsBoolean(key) ? FromBooleanKey(value) : IsEnum(key) ? FromEnumKey(key.enum, value) : IsInteger(key) ? FromIntegerKey(key, value) : IsIntersect(key) ? FromIntersectKey(key.allOf, value) : IsLiteral(key) ? FromLiteralKey(key.const, value) : IsNumber(key) ? FromNumberKey(key, value) : IsUnion(key) ? FromUnionKey(key.anyOf, value) : IsString(key) ? FromStringKey(key, value) : IsTemplateLiteral(key) ? FromTemplateKey(key.pattern, value) : _Object_$1({});
}
function init_from_key() {
	return (init_from_key = __esmMin((() => {
		init_any();
		init_boolean();
		init_enum();
		init_intersect();
		init_integer();
		init_literal();
		init_number();
		init_object();
		init_string$1();
		init_template_literal();
		init_union();
		init_from_key_any();
		init_from_key_boolean();
		init_from_key_enum();
		init_from_key_integer();
		init_from_key_intersect();
		init_from_key_literal();
		init_from_key_number();
		init_from_key_string();
		init_from_key_template_literal();
		init_from_key_union();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/instantiate.mjs
function RecordImmediate(context, state, key, value, options) {
	return Update(FromKey(InstantiateType(context, state, key), InstantiateType(context, state, value)), {}, options);
}
function RecordInstantiate(context, state, key, value, options) {
	return CanInstantiate(context, [key]) ? RecordImmediate(context, state, key, value, options) : RecordDeferred(key, value, options);
}
function init_instantiate$22() {
	return (init_instantiate$22 = __esmMin((() => {
		init_update();
		init_record();
		init_from_key();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/ref/instantiate.mjs
function RefInstantiate(context, state, type, ref) {
	return ref in context ? CyclicCheck([ref], context, context[ref]) ? type : InstantiateType(context, state, context[ref]) : type;
}
function init_instantiate$23() {
	return (init_instantiate$23 = __esmMin((() => {
		init_instantiate$27();
		init_check();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/required/from-cyclic.mjs
function FromCyclic(defs, ref) {
	const partial = FromType(CyclicTarget(defs, ref));
	return Cyclic(Assign(defs, { [ref]: partial }), ref);
}
function init_from_cyclic$4() {
	return (init_from_cyclic$4 = __esmMin((() => {
		init_assign();
		init_cyclic();
		init_from_type$5();
		init_target();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/required/from-intersect.mjs
function FromIntersect(types) {
	return EvaluateIntersect(types.map((type) => FromType(type)));
}
function init_from_intersect$4() {
	return (init_from_intersect$4 = __esmMin((() => {
		init_from_type$5();
		init_evaluate();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/required/from-union.mjs
function FromUnion(types) {
	return Union(types.map((type) => FromType(type)));
}
function init_from_union$5() {
	return (init_from_union$5 = __esmMin((() => {
		init_union();
		init_from_type$5();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/required/from-object.mjs
function FromObject(properties) {
	return _Object_$1(Keys(properties).reduce((result, left) => {
		return {
			...result,
			[left]: OptionalRemove(properties[left])
		};
	}, {}));
}
function init_from_object$5() {
	return (init_from_object$5 = __esmMin((() => {
		init_guard();
		init_object();
		init__optional$1();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/required/from-type.mjs
function FromType(type) {
	return IsCyclic(type) ? FromCyclic(type.$defs, type.$ref) : IsIntersect(type) ? FromIntersect(type.allOf) : IsUnion(type) ? FromUnion(type.anyOf) : IsObject(type) ? FromObject(type.properties) : _Object_$1({});
}
function init_from_type$5() {
	return (init_from_type$5 = __esmMin((() => {
		init_cyclic();
		init_intersect();
		init_object();
		init_union();
		init_from_cyclic$4();
		init_from_intersect$4();
		init_from_union$5();
		init_from_object$5();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/required.mjs
/** Creates a deferred Required action. */
function RequiredDeferred(type, options = {}) {
	return Deferred("Required", [type], options);
}
/** Applies a Required action to the given type. */
function Required(type, options = {}) {
	return Instantiate({}, RequiredDeferred(type, options));
}
function init_required() {
	return (init_required = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/required/instantiate.mjs
function RequiredImmediate(context, state, type, options) {
	return Update(FromType(InstantiateType(context, state, type)), {}, options);
}
function RequiredInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? RequiredImmediate(context, state, type, options) : RequiredDeferred(type, options);
}
function init_instantiate$24() {
	return (init_instantiate$24 = __esmMin((() => {
		init_update();
		init_from_type$5();
		init_required();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/return-type.mjs
/** Creates a deferred ReturnType action. */
function ReturnTypeDeferred(type, options = {}) {
	return Deferred("ReturnType", [type], options);
}
/** Applies a ReturnType action to the given type. */
function ReturnType(type, options = {}) {
	return Instantiate({}, ReturnTypeDeferred(type, options));
}
function init_return_type$1() {
	return (init_return_type$1 = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/return-type/instantiate.mjs
function ReturnTypeAction(type) {
	return IsFunction(type) ? type.returnType : Never();
}
function ReturnTypeImmediate(context, state, type, options) {
	return Update(ReturnTypeAction(InstantiateType(context, state, type)), {}, options);
}
function ReturnTypeInstantiate(context, state, type, options) {
	return CanInstantiate(context, [type]) ? ReturnTypeImmediate(context, state, type, options) : ReturnTypeDeferred(type, options);
}
function init_instantiate$25() {
	return (init_instantiate$25 = __esmMin((() => {
		init_update();
		init_function();
		init_never();
		init_return_type$1();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/template-literal/encode.mjs
function JoinString(input) {
	return input.join("|");
}
function UnwrapTemplateLiteralPattern(pattern) {
	return pattern.slice(1, pattern.length - 1);
}
function EncodeLiteral(value, right, pattern) {
	return EncodeTypes(right, `${pattern}${value}`);
}
function EncodeBigInt(right, pattern) {
	return EncodeTypes(right, `${pattern}${BigIntPattern}`);
}
function EncodeInteger(right, pattern) {
	return EncodeTypes(right, `${pattern}${IntegerPattern}`);
}
function EncodeNumber(right, pattern) {
	return EncodeTypes(right, `${pattern}${NumberPattern}`);
}
function EncodeBoolean(right, pattern) {
	return EncodeType(Union([Literal$1("false"), Literal$1("true")]), right, pattern);
}
function EncodeString(right, pattern) {
	return EncodeTypes(right, `${pattern}.*`);
}
function EncodeTemplateLiteral(templatePattern, right, pattern) {
	return EncodeTypes(right, `${pattern}${UnwrapTemplateLiteralPattern(templatePattern)}`);
}
function EncodeEnum(types, right, pattern, result = []) {
	return EncodeUnion(EnumValuesToVariants(types), right, pattern);
}
function EncodeUnion(types, right, pattern, result = []) {
	const [head, ...tail] = types;
	return IsSchema(head) ? EncodeUnion(tail, right, pattern, [...result, EncodeType(head, [], "")]) : EncodeTypes(right, `${pattern}(${JoinString(result)})`);
}
function EncodeType(type, right, pattern) {
	return IsEnum(type) ? EncodeEnum(type.enum, right, pattern) : IsInteger(type) ? EncodeInteger(right, pattern) : IsLiteral(type) ? EncodeLiteral(type.const, right, pattern) : IsBigInt(type) ? EncodeBigInt(right, pattern) : IsBoolean(type) ? EncodeBoolean(right, pattern) : IsNumber(type) ? EncodeNumber(right, pattern) : IsString(type) ? EncodeString(right, pattern) : IsTemplateLiteral(type) ? EncodeTemplateLiteral(type.pattern, right, pattern) : IsUnion(type) ? EncodeUnion(type.anyOf, right, pattern) : NeverPattern;
}
function EncodeTypes(types, pattern) {
	const [left, ...right] = types;
	return IsSchema(left) ? EncodeType(left, right, pattern) : pattern;
}
function EncodePattern(types) {
	return `^${EncodeTypes(types, "")}$`;
}
/** Encodes a TemplateLiteral type sequence into a TemplateLiteral */
function TemplateLiteralEncode(types) {
	return TemplateLiteralCreate(EncodePattern(types));
}
function init_encode() {
	return (init_encode = __esmMin((() => {
		init_schema();
		init_enum();
		init_literal();
		init_union();
		init_template_literal();
		init_bigint();
		init_string$1();
		init_number();
		init_integer();
		init_boolean();
		init_never();
		init_create$1();
		init_enum_to_union();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/template-literal/instantiate.mjs
function TemplateLiteralImmediate(context, state, types, options) {
	return Update(TemplateLiteralEncode(InstantiateTypes(context, state, types)), {}, options);
}
function TemplateLiteralInstantiate(context, state, types, options) {
	return CanInstantiate(context, types) ? TemplateLiteralImmediate(context, state, types, options) : TemplateLiteralDeferred(types, options);
}
function init_instantiate$26() {
	return (init_instantiate$26 = __esmMin((() => {
		init_update();
		init_template_literal();
		init_encode();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/rest/spread.mjs
function SpreadElement(type) {
	return IsRest(type) ? IsTuple(type.items) ? RestSpread(type.items.items) : IsInfer(type.items) ? [type] : IsRef(type.items) ? [type] : [Never()] : [type];
}
function RestSpread(types) {
	return types.reduce((result, left) => {
		return [...result, ...SpreadElement(left)];
	}, []);
}
function init_spread() {
	return (init_spread = __esmMin((() => {
		init_infer();
		init_never();
		init_rest();
		init_ref();
		init_tuple();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/instantiate.mjs
function CanInstantiateRef(context, ref) {
	return ref in context;
}
function CanInstantiateType(context, type) {
	return IsIntersect(type) ? CanInstantiate(context, type.allOf) : IsUnion(type) ? CanInstantiate(context, type.anyOf) : IsRef(type) ? CanInstantiateRef(context, type.$ref) : true;
}
function CanInstantiate(context, types) {
	const [left, ...right] = types;
	return IsSchema(left) ? CanInstantiateType(context, left) ? CanInstantiate(context, right) : false : true;
}
function ModifierActions(type, readonly, optional) {
	return IsReadonlyRemoveAction(type) ? ModifierActions(type.type, "remove", optional) : IsOptionalRemoveAction(type) ? ModifierActions(type.type, readonly, "remove") : IsReadonlyAddAction(type) ? ModifierActions(type.type, "add", optional) : IsOptionalAddAction(type) ? ModifierActions(type.type, readonly, "add") : [
		type,
		readonly,
		optional
	];
}
function ApplyReadonly(action, type) {
	return IsEqual(action, "remove") ? ReadonlyRemove(type) : IsEqual(action, "add") ? ReadonlyAdd(type) : type;
}
function ApplyOptional(action, type) {
	return IsEqual(action, "remove") ? OptionalRemove(type) : IsEqual(action, "add") ? OptionalAdd(type) : type;
}
function InstantiateProperties(context, state, properties) {
	return Keys(properties).reduce((result, key) => {
		return {
			...result,
			[key]: InstantiateType(context, state, properties[key])
		};
	}, {});
}
function InstantiateElements(context, state, types) {
	return RestSpread(InstantiateTypes(context, state, types));
}
function InstantiateTypes(context, state, types) {
	return types.map((type) => InstantiateType(context, state, type));
}
function InstantiateDeferred(context, state, action, parameters, options) {
	return IsEqual(action, "Awaited") ? AwaitedInstantiate(context, state, parameters[0], options) : IsEqual(action, "Capitalize") ? CapitalizeInstantiate(context, state, parameters[0], options) : IsEqual(action, "Conditional") ? ConditionalInstantiate(context, state, parameters[0], parameters[1], parameters[2], parameters[3], options) : IsEqual(action, "ConstructorParameters") ? ConstructorParametersInstantiate(context, state, parameters[0], options) : IsEqual(action, "Evaluate") ? EvaluateInstantiate(context, state, parameters[0], options) : IsEqual(action, "Exclude") ? ExcludeInstantiate(context, state, parameters[0], parameters[1], options) : IsEqual(action, "Extract") ? ExtractInstantiate(context, state, parameters[0], parameters[1], options) : IsEqual(action, "Index") ? IndexInstantiate(context, state, parameters[0], parameters[1], options) : IsEqual(action, "InstanceType") ? InstanceTypeInstantiate(context, state, parameters[0], options) : IsEqual(action, "Interface") ? InterfaceInstantiate(context, state, parameters[0], parameters[1], options) : IsEqual(action, "KeyOf") ? KeyOfInstantiate(context, state, parameters[0], options) : IsEqual(action, "Lowercase") ? LowercaseInstantiate(context, state, parameters[0], options) : IsEqual(action, "Mapped") ? MappedInstantiate(context, state, parameters[0], parameters[1], parameters[2], parameters[3], options) : IsEqual(action, "Module") ? ModuleInstantiate(context, state, parameters[0], options) : IsEqual(action, "NonNullable") ? NonNullableInstantiate(context, state, parameters[0], options) : IsEqual(action, "Pick") ? PickInstantiate(context, state, parameters[0], parameters[1], options) : IsEqual(action, "Options") ? OptionsInstantiate(context, state, parameters[0], parameters[1]) : IsEqual(action, "Parameters") ? ParametersInstantiate(context, state, parameters[0], options) : IsEqual(action, "Partial") ? PartialInstantiate(context, state, parameters[0], options) : IsEqual(action, "Omit") ? OmitInstantiate(context, state, parameters[0], parameters[1], options) : IsEqual(action, "ReadonlyType") ? ReadonlyTypeInstantiate(context, state, parameters[0], options) : IsEqual(action, "Record") ? RecordInstantiate(context, state, parameters[0], parameters[1], options) : IsEqual(action, "Required") ? RequiredInstantiate(context, state, parameters[0], options) : IsEqual(action, "ReturnType") ? ReturnTypeInstantiate(context, state, parameters[0], options) : IsEqual(action, "TemplateLiteral") ? TemplateLiteralInstantiate(context, state, parameters[0], options) : IsEqual(action, "Uncapitalize") ? UncapitalizeInstantiate(context, state, parameters[0], options) : IsEqual(action, "Uppercase") ? UppercaseInstantiate(context, state, parameters[0], options) : Deferred(action, parameters, options);
}
function InstantiateType(context, state, input) {
	const immutable = IsImmutable(input);
	const modifiers = ModifierActions(input, IsReadonly(input) ? "add" : "none", IsOptional(input) ? "add" : "none");
	const type = IsBase(modifiers[0]) ? modifiers[0].Clone() : modifiers[0];
	const instantiated = IsRef(type) ? RefInstantiate(context, state, type, type.$ref) : IsArray(type) ? Array$1(InstantiateType(context, state, type.items), ArrayOptions(type)) : IsAsyncIterator(type) ? AsyncIterator(InstantiateType(context, state, type.iteratorItems), AsyncIteratorOptions(type)) : IsCall(type) ? CallInstantiate(context, state, type.target, type.arguments) : IsConstructor(type) ? Constructor$1(InstantiateTypes(context, state, type.parameters), InstantiateType(context, state, type.instanceType), ConstructorOptions(type)) : IsDeferred(type) ? InstantiateDeferred(context, state, type.action, type.parameters, type.options) : IsFunction(type) ? _Function_$1(InstantiateTypes(context, state, type.parameters), InstantiateType(context, state, type.returnType), FunctionOptions(type)) : IsIntersect(type) ? Intersect(InstantiateTypes(context, state, type.allOf), IntersectOptions(type)) : IsIterator(type) ? Iterator(InstantiateType(context, state, type.iteratorItems), IteratorOptions(type)) : IsObject(type) ? _Object_$1(InstantiateProperties(context, state, type.properties), ObjectOptions(type)) : IsPromise(type) ? Promise$1(InstantiateType(context, state, type.item), PromiseOptions(type)) : IsRecord(type) ? RecordFromPattern(RecordPattern(type), InstantiateType(context, state, RecordValue(type))) : IsRest(type) ? Rest(InstantiateType(context, state, type.items)) : IsTuple(type) ? Tuple$1(InstantiateElements(context, state, type.items), TupleOptions(type)) : IsUnion(type) ? Union(InstantiateTypes(context, state, type.anyOf), UnionOptions(type)) : type;
	const withImmutable = immutable ? Immutable(instantiated) : instantiated;
	return ApplyReadonly(modifiers[1], ApplyOptional(modifiers[2], withImmutable));
}
/** Instantiates computed schematics using the given context and type. */
function Instantiate(context, type) {
	return InstantiateType(context, { callstack: [] }, type);
}
function init_instantiate$27() {
	return (init_instantiate$27 = __esmMin((() => {
		init_guard();
		init__immutable();
		init__optional$1();
		init__readonly$1();
		init_schema();
		init_array();
		init_async_iterator();
		init_base();
		init_constructor();
		init_deferred();
		init_function();
		init_call();
		init_intersect();
		init_iterator();
		init_object();
		init_promise();
		init_record();
		init_tuple();
		init_union();
		init_ref();
		init_rest();
		init__readonly();
		init__optional();
		init_instantiate$3();
		init_instantiate$2();
		init_instantiate$4();
		init_conditional$1();
		init_instantiate$6();
		init_instantiate$1();
		init_instantiate$7();
		init_instantiate$8();
		init_instantiate$9();
		init_instantiate$10();
		init_instantiate$11();
		init_instantiate$12();
		init_instantiate$13();
		init_instantiate$14();
		init_instantiate$15();
		init_instantiate$16();
		init_instantiate$17();
		init_instantiate$18();
		init_instantiate$19();
		init_instantiate$20();
		init_instantiate$21();
		init_instantiate$22();
		init_instantiate$23();
		init_instantiate$24();
		init_instantiate$25();
		init_instantiate$26();
		init_spread();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/awaited.mjs
/** Creates a deferred Awaited action. */
function AwaitedDeferred(type, options = {}) {
	return Deferred("Awaited", [type], options);
}
/** Applies an Awaited action to a type. */
function Awaited(type, options = {}) {
	return Instantiate({}, AwaitedDeferred(type, options));
}
function init_awaited() {
	return (init_awaited = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/evaluate.mjs
/** Creates a deferred Evaluate action. */
function EvaluateDeferred(type, options = {}) {
	return Deferred("Evaluate", [type], options);
}
/** Applies an Evaluate action to a type. */
function Evaluate(type, options = {}) {
	return Instantiate({}, EvaluateDeferred(type, options));
}
function init_evaluate$2() {
	return (init_evaluate$2 = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/module.mjs
/** Creates a deferred Module action. */
function ModuleDeferred(context, options = {}) {
	return Deferred("Module", [context], options);
}
/** Applies a Module transformation action to the embedded property types. */
function Module(context, options = {}) {
	return Instantiate({}, ModuleDeferred(context, options));
}
function init_module() {
	return (init_module = __esmMin((() => {
		init_deferred();
		init_instantiate$27();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/action/index.mjs
function init_action() {
	return (init_action = __esmMin((() => {
		init__optional();
		init__readonly();
		init_awaited();
		init_capitalize();
		init_conditional();
		init_constructor_parameters();
		init_evaluate$2();
		init_exclude();
		init_extract();
		init_indexed();
		init_instance_type();
		init_interface();
		init_keyof();
		init_lowercase();
		init_mapped();
		init_module();
		init_non_nullable();
		init_omit();
		init_options();
		init_parameters$1();
		init_partial();
		init_pick();
		init_readonly_type();
		init_required();
		init_return_type$1();
		init_uncapitalize();
		init_uppercase();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/awaited/index.mjs
function init_awaited$1() {
	return (init_awaited$1 = __esmMin((() => {
		init_instantiate$3();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/constructor-parameters/index.mjs
function init_constructor_parameters$1() {
	return (init_constructor_parameters$1 = __esmMin((() => {
		init_instantiate$6();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/exclude/index.mjs
function init_exclude$1() {
	return (init_exclude$1 = __esmMin((() => {
		init_instantiate$7();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/extract/index.mjs
function init_extract$1() {
	return (init_extract$1 = __esmMin((() => {
		init_instantiate$8();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/indexed/index.mjs
function init_indexed$1() {
	return (init_indexed$1 = __esmMin((() => {
		init_instantiate$9();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/instance-type/index.mjs
function init_instance_type$1() {
	return (init_instance_type$1 = __esmMin((() => {
		init_instantiate$10();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/interface/index.mjs
function init_interface$1() {
	return (init_interface$1 = __esmMin((() => {
		init_instantiate$11();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/intrinsics/index.mjs
function init_intrinsics() {
	return (init_intrinsics = __esmMin((() => {
		init_instantiate$4();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/keyof/index.mjs
function init_keyof$1() {
	return (init_keyof$1 = __esmMin((() => {
		init_instantiate$12();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/mapped/index.mjs
function init_mapped$1() {
	return (init_mapped$1 = __esmMin((() => {
		init_instantiate$13();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/module/index.mjs
function init_module$1() {
	return (init_module$1 = __esmMin((() => {
		init_instantiate$14();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/non-nullable/index.mjs
function init_non_nullable$1() {
	return (init_non_nullable$1 = __esmMin((() => {
		init_instantiate$15();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/omit/index.mjs
function init_omit$1() {
	return (init_omit$1 = __esmMin((() => {
		init_instantiate$16();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/options/index.mjs
function init_options$1() {
	return (init_options$1 = __esmMin((() => {
		init_instantiate$17();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/parameters/index.mjs
function init_parameters$2() {
	return (init_parameters$2 = __esmMin((() => {
		init_instantiate$18();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/patterns/index.mjs
function init_patterns() {
	return (init_patterns = __esmMin((() => {
		init_pattern();
		init_template();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/partial/index.mjs
function init_partial$1() {
	return (init_partial$1 = __esmMin((() => {
		init_instantiate$19();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/pick/index.mjs
function init_pick$1() {
	return (init_pick$1 = __esmMin((() => {
		init_instantiate$20();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/readonly-type/index.mjs
function init_readonly_type$1() {
	return (init_readonly_type$1 = __esmMin((() => {
		init_instantiate$21();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/record/index.mjs
function init_record$1() {
	return (init_record$1 = __esmMin((() => {
		init_instantiate$22();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/ref/index.mjs
function init_ref$1() {
	return (init_ref$1 = __esmMin((() => {
		init_instantiate$23();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/required/index.mjs
function init_required$1() {
	return (init_required$1 = __esmMin((() => {
		init_instantiate$24();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/return-type/index.mjs
function init_return_type$2() {
	return (init_return_type$2 = __esmMin((() => {
		init_instantiate$25();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/template-literal/is-pattern.mjs
function init_is_pattern() {
	return (init_is_pattern = __esmMin((() => {
		init_pattern();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/template-literal/index.mjs
function init_template_literal$2() {
	return (init_template_literal$2 = __esmMin((() => {
		init_decode();
		init_encode();
		init_is_pattern();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/engine/index.mjs
function init_engine() {
	return (init_engine = __esmMin((() => {
		init_instantiate$27();
		init_awaited$1();
		init_conditional$1();
		init_constructor_parameters$1();
		init_cyclic$1();
		init_evaluate$1();
		init_exclude$1();
		init_extract$1();
		init_indexed$1();
		init_instance_type$1();
		init_interface$1();
		init_intrinsics();
		init_keyof$1();
		init_mapped$1();
		init_module$1();
		init_non_nullable$1();
		init_object$2();
		init_omit$1();
		init_options$1();
		init_parameters$2();
		init_patterns();
		init_partial$1();
		init_pick$1();
		init_readonly_type$1();
		init_record$1();
		init_ref$1();
		init_required$1();
		init_return_type$2();
		init_template_literal$2();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/script.mjs
/** Parses a type from a TypeScript type expression */
function Script(...args) {
	const [context, input, options] = Match$1(args, {
		2: (script, options) => IsString$2(script) ? [
			{},
			script,
			options
		] : [
			script,
			options,
			{}
		],
		3: (context, script, options) => [
			context,
			script,
			options
		],
		1: (script) => [
			{},
			script,
			{}
		]
	});
	const result = Script$1(input);
	return Update(IsArray$1(result) && IsEqual(result.length, 2) ? InstantiateType(context, { callstack: [] }, result[0]) : Never(), {}, options);
}
function init_script() {
	return (init_script = __esmMin((() => {
		init_update();
		init_guard();
		init_instantiate$27();
		init_types();
		init_parser();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/type/script/index.mjs
function init_script$1() {
	return (init_script$1 = __esmMin((() => {
		init_script();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/typebox.mjs
var typebox_exports = /* @__PURE__ */ __exportAll({
	Any: () => Any,
	Array: () => Array$1,
	AsyncIterator: () => AsyncIterator,
	Awaited: () => Awaited,
	Base: () => Base$1,
	BigInt: () => BigInt$2,
	Boolean: () => Boolean$1,
	Call: () => Call,
	Capitalize: () => Capitalize,
	Codec: () => Codec,
	Conditional: () => Conditional,
	Constructor: () => Constructor$1,
	ConstructorParameters: () => ConstructorParameters,
	Cyclic: () => Cyclic,
	Decode: () => Decode,
	DecodeBuilder: () => DecodeBuilder,
	Encode: () => Encode,
	EncodeBuilder: () => EncodeBuilder,
	Enum: () => Enum,
	Evaluate: () => Evaluate,
	Exclude: () => Exclude,
	Extends: () => Extends,
	ExtendsResult: () => result_exports,
	Extract: () => Extract,
	Function: () => _Function_$1,
	Generic: () => Generic,
	Identifier: () => Identifier,
	Immutable: () => Immutable,
	Index: () => Index,
	Infer: () => Infer,
	InstanceType: () => InstanceType,
	Instantiate: () => Instantiate,
	Integer: () => Integer$1,
	Interface: () => Interface,
	Intersect: () => Intersect,
	IsAny: () => IsAny,
	IsArray: () => IsArray,
	IsAsyncIterator: () => IsAsyncIterator,
	IsBase: () => IsBase,
	IsBigInt: () => IsBigInt,
	IsBoolean: () => IsBoolean,
	IsCall: () => IsCall,
	IsCodec: () => IsCodec,
	IsConstructor: () => IsConstructor,
	IsCyclic: () => IsCyclic,
	IsEnum: () => IsEnum,
	IsFunction: () => IsFunction,
	IsGeneric: () => IsGeneric,
	IsIdentifier: () => IsIdentifier,
	IsImmutable: () => IsImmutable,
	IsInfer: () => IsInfer,
	IsInteger: () => IsInteger,
	IsIntersect: () => IsIntersect,
	IsIterator: () => IsIterator,
	IsKind: () => IsKind,
	IsLiteral: () => IsLiteral,
	IsNever: () => IsNever,
	IsNull: () => IsNull,
	IsNumber: () => IsNumber,
	IsObject: () => IsObject,
	IsOptional: () => IsOptional,
	IsParameter: () => IsParameter,
	IsPromise: () => IsPromise,
	IsReadonly: () => IsReadonly,
	IsRecord: () => IsRecord,
	IsRef: () => IsRef,
	IsRefine: () => IsRefine,
	IsRest: () => IsRest,
	IsSchema: () => IsSchema,
	IsString: () => IsString,
	IsSymbol: () => IsSymbol,
	IsTemplateLiteral: () => IsTemplateLiteral,
	IsThis: () => IsThis,
	IsTuple: () => IsTuple,
	IsUndefined: () => IsUndefined,
	IsUnion: () => IsUnion,
	IsUnknown: () => IsUnknown,
	IsUnsafe: () => IsUnsafe,
	IsVoid: () => IsVoid,
	Iterator: () => Iterator,
	KeyOf: () => KeyOf,
	Literal: () => Literal$1,
	Lowercase: () => Lowercase,
	Mapped: () => Mapped,
	Module: () => Module,
	Never: () => Never,
	NonNullable: () => NonNullable,
	Null: () => Null,
	Number: () => Number$2,
	Object: () => _Object_$1,
	Omit: () => Omit,
	Optional: () => Optional$2,
	Options: () => Options,
	Parameter: () => Parameter$1,
	Parameters: () => Parameters,
	Partial: () => Partial,
	Pick: () => Pick,
	Promise: () => Promise$1,
	Readonly: () => Readonly$1,
	ReadonlyType: () => ReadonlyType,
	Record: () => Record,
	RecordKey: () => RecordKey,
	RecordKeyAsPattern: () => RecordPattern,
	RecordValue: () => RecordValue,
	Ref: () => Ref,
	Refine: () => Refine,
	Required: () => Required,
	Rest: () => Rest,
	ReturnType: () => ReturnType,
	Script: () => Script,
	String: () => String$2,
	Symbol: () => Symbol$1,
	TemplateLiteral: () => TemplateLiteral,
	This: () => This,
	Tuple: () => Tuple$1,
	Uncapitalize: () => Uncapitalize,
	Undefined: () => Undefined,
	Union: () => Union,
	Unknown: () => Unknown,
	Unsafe: () => Unsafe,
	Uppercase: () => Uppercase,
	Void: () => Void
});
function init_typebox() {
	return (init_typebox = __esmMin((() => {
		init_instantiate$27();
		init_extends$2();
		init_script$1();
		init_awaited();
		init_capitalize();
		init_conditional();
		init_constructor_parameters();
		init_evaluate$2();
		init_exclude();
		init_extract();
		init_action();
		init_instance_type();
		init_interface();
		init_keyof();
		init_lowercase();
		init_mapped();
		init_module();
		init_non_nullable();
		init_omit();
		init_options();
		init_parameters$1();
		init_partial();
		init_pick();
		init_readonly_type();
		init_required();
		init_return_type$1();
		init_uncapitalize();
		init_uppercase();
		init__codec();
		init__immutable();
		init__optional$1();
		init__readonly$1();
		init__refine();
		init_any();
		init_array();
		init_async_iterator();
		init_base();
		init_bigint();
		init_boolean();
		init_call();
		init_constructor();
		init_cyclic();
		init_enum();
		init_function();
		init_generic();
		init_identifier();
		init_infer();
		init_integer();
		init_intersect();
		init_iterator();
		init_literal();
		init_never();
		init_null();
		init_number();
		init_object();
		init_parameter();
		init_promise();
		init_record();
		init_ref();
		init_rest();
		init_schema();
		init_string$1();
		init_symbol();
		init_template_literal();
		init_this();
		init_tuple();
		init_undefined();
		init_union();
		init_unknown();
		init_unsafe();
		init_void();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/typebox@1.1.8/node_modules/typebox/build/index.mjs
function init_build() {
	return (init_build = __esmMin((() => {
		init_action();
		init_engine();
		init_extends$2();
		init_script$1();
		init_types();
		init_typebox();
	})))();
}
//#endregion
export { Literal$1 as $, init_array as $t, RecordPattern as A, IsLessEqualThan as An, init_cyclic as At, IsSymbol as B, IsSymbol$1 as Bn, init_never as Bt, IsVoid as C, IsDeepEqual as Cn, IsIntersect as Ct, IsTuple as D, IsGreaterThan as Dn, Match$1 as Dt, init_undefined as E, IsGreaterEqualThan as En, init_enum as Et, IsString as F, IsNull$1 as Fn, init_union as Ft, IsNull as G, init_guard as Gn, init_function as Gt, IsNumber as H, IsValueLike as Hn, Ref as Ht, String$2 as I, IsNumber$2 as In, IsObject as It, IsLiteral as J, IsBase as Jt, Null as K, require_ut_function_merge as Kn, IsConstructor as Kt, init_string$1 as L, IsObject$1 as Ln, _Object_$1 as Lt, init_record as M, IsMaxLength as Mn, init_unknown as Mt, TemplateLiteralDecode as N, IsMinLength as Nn, IsUnion as Nt, init_tuple as O, IsInteger$1 as On, init_arguments as Ot, init_decode as P, IsMultipleOf as Pn, Union as Pt, IsLiteralString as Q, IsArray as Qt, IsPromise as R, IsObjectNotArray as Rn, init_object as Rt, init_types as S, IsConstructor$1 as Sn, init_unreachable as St, IsUndefined as T, IsFunction$1 as Tn, IsEnum as Tt, Number$2 as U, Keys as Un, init_ref as Ut, init_symbol as V, IsUndefined$1 as Vn, IsRef as Vt, init_number as W, Symbols as Wn, IsFunction as Wt, IsLiteralBoolean as X, IsAsyncIterator as Xt, IsLiteralBigInt as Y, init_base as Yt, IsLiteralNumber as Z, init_async_iterator as Zt, init_extends$2 as _, IsArray$1 as _n, init_system as _t, init_engine as a, Get as an, init_integer as at, IsTemplateLiteral as b, IsBoolean$2 as bn, init_hash as bt, Evaluate as c, IsMap as cn, init_boolean as ct, init_instantiate$27 as d, init_globals as dn, init_bigint as dt, IsOptional as en, init_literal as et, Options as f, Entries as fn, IsRefine as ft, init_flatten as g, HasPropertyKey as gn, init__codec as gt, Flatten as h, EveryAll as hn, IsCodec as ht, init_script$1 as i, init_schema as in, IsInteger as it, RecordValue as j, IsLessThan as jn, Unknown as jt, IsRecord as k, IsIterator$1 as kn, IsCyclic as kt, init_evaluate$2 as l, IsSet as ln, BigInt$2 as lt, init_evaluate$1 as m, Every as mn, Codec as mt, init_typebox as n, init__optional$1 as nn, init_iterator as nt, init_template_literal$2 as o, init_settings as on, Boolean$1 as ot, init_options as p, EntriesRegExp as pn, init__refine as pt, init_null as q, init_constructor as qt, typebox_exports as r, IsSchema as rn, Integer$1 as rt, init_action as s, IsDate as sn, IsBoolean as st, init_build as t, Optional$2 as tn, IsIterator as tt, Instantiate as u, IsTypeArray as un, IsBigInt as ut, EnumToUnion as v, IsAsyncIterator$1 as vn, init_hashing as vt, init_void as w, IsEqual as wn, init_intersect as wt, init_template_literal as x, IsClassInstance as xn, Unreachable$1 as xt, init_enum_to_union as y, IsBigInt$1 as yn, Hash as yt, init_promise as z, IsString$2 as zn, IsNever as zt };
