import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { c as baseClone, l as init__baseClone } from "./graphlib-DRdi0EG1.js";
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/clone.js
/**
* Creates a shallow clone of `value`.
*
* **Note:** This method is loosely based on the
* [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
* and supports cloning arrays, array buffers, booleans, date objects, maps,
* numbers, `Object` objects, regexes, sets, strings, symbols, and typed
* arrays. The own enumerable properties of `arguments` objects are cloned
* as plain objects. An empty object is returned for uncloneable values such
* as error objects, functions, DOM nodes, and WeakMaps.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to clone.
* @returns {*} Returns the cloned value.
* @see _.cloneDeep
* @example
*
* var objects = [{ 'a': 1 }, { 'b': 2 }];
*
* var shallow = _.clone(objects);
* console.log(shallow[0] === objects[0]);
* // => true
*/
function clone(value) {
	return baseClone(value, CLONE_SYMBOLS_FLAG);
}
var CLONE_SYMBOLS_FLAG;
function init_clone() {
	return (init_clone = __esmMin((() => {
		init__baseClone();
		CLONE_SYMBOLS_FLAG = 4;
	})))();
}
//#endregion
export { init_clone as n, clone as t };
