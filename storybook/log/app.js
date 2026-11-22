var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react/cjs/react.production.js
var require_react_production = __commonJS({
  "../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react/cjs/react.production.js"(exports) {
    "use strict";
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
    var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
    var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
    var REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    };
    var assign = Object.assign;
    var emptyObject = {};
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    function ComponentDummy() {
    }
    ComponentDummy.prototype = Component.prototype;
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    var isArrayImpl = Array.isArray;
    function noop() {
    }
    var ReactSharedInternals = { H: null, A: null, T: null, S: null };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function ReactElement(type, key, props) {
      var refProp = props.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== refProp ? refProp : null,
        props
      };
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      return ReactElement(oldElement.type, newKey, oldElement.props);
    }
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    var userProvidedKeyEscapeRegex = /\/+/g;
    function getElementKey(element, index) {
      return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
            function(fulfilledValue) {
              "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            },
            function(error) {
              "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
            }
          )), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = false;
      if (null === children) invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(
                  invokeCallback(children._payload),
                  array,
                  escapedPrefix,
                  nameSoFar,
                  callback
                );
            }
        }
      if (invokeCallback)
        return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c2) {
          return c2;
        })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
          callback,
          escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
            userProvidedKeyEscapeRegex,
            "$&/"
          ) + "/") + invokeCallback
        )), array.push(callback)), 1;
      invokeCallback = 0;
      var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if (i = getIteratorFn(children), "function" === typeof i)
        for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function(moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 1, payload._result = moduleObject;
          },
          function(error) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 2, payload._result = error;
          }
        );
        -1 === payload._status && (payload._status = 0, payload._result = ctor);
      }
      if (1 === payload._status) return payload._result.default;
      throw payload._result;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    var Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function() {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports.Activity = REACT_ACTIVITY_TYPE;
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(size) {
        return ReactSharedInternals.H.useMemoCache(size);
      }
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.cacheSignal = function() {
      return null;
    };
    exports.cloneElement = function(element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " + element + "."
        );
      var props = assign({}, element.props), key = element.key;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        for (var childArray = Array(propName), i = 0; i < propName; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      return ReactElement(element.type, key, props);
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      var propName, props = {}, key = null;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) props.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          void 0 === props[propName] && (props[propName] = childrenLength[propName]);
      return ReactElement(type, key, props);
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(render) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render };
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      return {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: void 0 === compare ? null : compare
      };
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return ReactSharedInternals.H.useCacheRefresh();
    };
    exports.use = function(usable) {
      return ReactSharedInternals.H.use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return ReactSharedInternals.H.useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      return ReactSharedInternals.H.useContext(Context);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(value, initialValue) {
      return ReactSharedInternals.H.useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
      return ReactSharedInternals.H.useEffect(create, deps);
    };
    exports.useEffectEvent = function(callback) {
      return ReactSharedInternals.H.useEffectEvent(callback);
    };
    exports.useId = function() {
      return ReactSharedInternals.H.useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      return ReactSharedInternals.H.useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      return ReactSharedInternals.H.useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return ReactSharedInternals.H.useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return ReactSharedInternals.H.useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return ReactSharedInternals.H.useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return ReactSharedInternals.H.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports.useTransition = function() {
      return ReactSharedInternals.H.useTransition();
    };
    exports.version = "19.2.4";
  }
});

// ../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react/index.js
var require_react = __commonJS({
  "../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_production();
    } else {
      module.exports = null;
    }
  }
});

// ../../common/temp/node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/cjs/scheduler.production.js
var require_scheduler_production = __commonJS({
  "../../common/temp/node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/cjs/scheduler.production.js"(exports) {
    "use strict";
    function push(heap, node) {
      var index = heap.length;
      heap.push(node);
      a: for (; 0 < index; ) {
        var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
        if (0 < compare(parent, node))
          heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
        else break a;
      }
    }
    function peek(heap) {
      return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
      if (0 === heap.length) return null;
      var first = heap[0], last = heap.pop();
      if (last !== first) {
        heap[0] = last;
        a: for (var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength; ) {
          var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
          if (0 > compare(left, last))
            rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
          else if (rightIndex < length && 0 > compare(right, last))
            heap[index] = right, heap[rightIndex] = last, index = rightIndex;
          else break a;
        }
      }
      return first;
    }
    function compare(a, b2) {
      var diff = a.sortIndex - b2.sortIndex;
      return 0 !== diff ? diff : a.id - b2.id;
    }
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
      localPerformance = performance;
      exports.unstable_now = function() {
        return localPerformance.now();
      };
    } else {
      localDate = Date, initialTime = localDate.now();
      exports.unstable_now = function() {
        return localDate.now() - initialTime;
      };
    }
    var localPerformance;
    var localDate;
    var initialTime;
    var taskQueue = [];
    var timerQueue = [];
    var taskIdCounter = 1;
    var currentTask = null;
    var currentPriorityLevel = 3;
    var isPerformingWork = false;
    var isHostCallbackScheduled = false;
    var isHostTimeoutScheduled = false;
    var needsPaint = false;
    var localSetTimeout = "function" === typeof setTimeout ? setTimeout : null;
    var localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null;
    var localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
    function advanceTimers(currentTime) {
      for (var timer = peek(timerQueue); null !== timer; ) {
        if (null === timer.callback) pop(timerQueue);
        else if (timer.startTime <= currentTime)
          pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
        else break;
        timer = peek(timerQueue);
      }
    }
    function handleTimeout(currentTime) {
      isHostTimeoutScheduled = false;
      advanceTimers(currentTime);
      if (!isHostCallbackScheduled)
        if (null !== peek(taskQueue))
          isHostCallbackScheduled = true, isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline());
        else {
          var firstTimer = peek(timerQueue);
          null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    var isMessageLoopRunning = false;
    var taskTimeoutID = -1;
    var frameInterval = 5;
    var startTime = -1;
    function shouldYieldToHost() {
      return needsPaint ? true : exports.unstable_now() - startTime < frameInterval ? false : true;
    }
    function performWorkUntilDeadline() {
      needsPaint = false;
      if (isMessageLoopRunning) {
        var currentTime = exports.unstable_now();
        startTime = currentTime;
        var hasMoreWork = true;
        try {
          a: {
            isHostCallbackScheduled = false;
            isHostTimeoutScheduled && (isHostTimeoutScheduled = false, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
            isPerformingWork = true;
            var previousPriorityLevel = currentPriorityLevel;
            try {
              b: {
                advanceTimers(currentTime);
                for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost()); ) {
                  var callback = currentTask.callback;
                  if ("function" === typeof callback) {
                    currentTask.callback = null;
                    currentPriorityLevel = currentTask.priorityLevel;
                    var continuationCallback = callback(
                      currentTask.expirationTime <= currentTime
                    );
                    currentTime = exports.unstable_now();
                    if ("function" === typeof continuationCallback) {
                      currentTask.callback = continuationCallback;
                      advanceTimers(currentTime);
                      hasMoreWork = true;
                      break b;
                    }
                    currentTask === peek(taskQueue) && pop(taskQueue);
                    advanceTimers(currentTime);
                  } else pop(taskQueue);
                  currentTask = peek(taskQueue);
                }
                if (null !== currentTask) hasMoreWork = true;
                else {
                  var firstTimer = peek(timerQueue);
                  null !== firstTimer && requestHostTimeout(
                    handleTimeout,
                    firstTimer.startTime - currentTime
                  );
                  hasMoreWork = false;
                }
              }
              break a;
            } finally {
              currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = false;
            }
            hasMoreWork = void 0;
          }
        } finally {
          hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = false;
        }
      }
    }
    var schedulePerformWorkUntilDeadline;
    if ("function" === typeof localSetImmediate)
      schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
      };
    else if ("undefined" !== typeof MessageChannel) {
      channel = new MessageChannel(), port = channel.port2;
      channel.port1.onmessage = performWorkUntilDeadline;
      schedulePerformWorkUntilDeadline = function() {
        port.postMessage(null);
      };
    } else
      schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
      };
    var channel;
    var port;
    function requestHostTimeout(callback, ms) {
      taskTimeoutID = localSetTimeout(function() {
        callback(exports.unstable_now());
      }, ms);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
      task.callback = null;
    };
    exports.unstable_forceFrameRate = function(fps) {
      0 > fps || 125 < fps ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return currentPriorityLevel;
    };
    exports.unstable_next = function(eventHandler) {
      switch (currentPriorityLevel) {
        case 1:
        case 2:
        case 3:
          var priorityLevel = 3;
          break;
        default:
          priorityLevel = currentPriorityLevel;
      }
      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;
      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    };
    exports.unstable_requestPaint = function() {
      needsPaint = true;
    };
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
      switch (priorityLevel) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          priorityLevel = 3;
      }
      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;
      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
      var currentTime = exports.unstable_now();
      "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
      switch (priorityLevel) {
        case 1:
          var timeout = -1;
          break;
        case 2:
          timeout = 250;
          break;
        case 5:
          timeout = 1073741823;
          break;
        case 4:
          timeout = 1e4;
          break;
        default:
          timeout = 5e3;
      }
      timeout = options + timeout;
      priorityLevel = {
        id: taskIdCounter++,
        callback,
        priorityLevel,
        startTime: options,
        expirationTime: timeout,
        sortIndex: -1
      };
      options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = true, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = true, isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline())));
      return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
      var parentPriorityLevel = currentPriorityLevel;
      return function() {
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = parentPriorityLevel;
        try {
          return callback.apply(this, arguments);
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
    };
  }
});

// ../../common/temp/node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "../../common/temp/node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_scheduler_production();
    } else {
      module.exports = null;
    }
  }
});

// ../../common/temp/node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom.production.js
var require_react_dom_production = __commonJS({
  "../../common/temp/node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom.production.js"(exports) {
    "use strict";
    var React6 = require_react();
    function formatProdErrorMessage(code) {
      var url = "https://react.dev/errors/" + code;
      if (1 < arguments.length) {
        url += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++)
          url += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function noop() {
    }
    var Internals = {
      d: {
        f: noop,
        r: function() {
          throw Error(formatProdErrorMessage(522));
        },
        D: noop,
        C: noop,
        L: noop,
        m: noop,
        X: noop,
        S: noop,
        M: noop
      },
      p: 0,
      findDOMNode: null
    };
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    function createPortal$1(children, containerInfo, implementation) {
      var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: null == key ? null : "" + key,
        children,
        containerInfo,
        implementation
      };
    }
    var ReactSharedInternals = React6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function getCrossOriginStringAs(as, input) {
      if ("font" === as) return "";
      if ("string" === typeof input)
        return "use-credentials" === input ? input : "";
    }
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    exports.createPortal = function(children, container) {
      var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
        throw Error(formatProdErrorMessage(299));
      return createPortal$1(children, container, null, key);
    };
    exports.flushSync = function(fn) {
      var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
      try {
        if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
      } finally {
        ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
      }
    };
    exports.preconnect = function(href, options) {
      "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
    };
    exports.prefetchDNS = function(href) {
      "string" === typeof href && Internals.d.D(href);
    };
    exports.preinit = function(href, options) {
      if ("string" === typeof href && options && "string" === typeof options.as) {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
        "style" === as ? Internals.d.S(
          href,
          "string" === typeof options.precedence ? options.precedence : void 0,
          {
            crossOrigin,
            integrity,
            fetchPriority
          }
        ) : "script" === as && Internals.d.X(href, {
          crossOrigin,
          integrity,
          fetchPriority,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
      }
    };
    exports.preinitModule = function(href, options) {
      if ("string" === typeof href)
        if ("object" === typeof options && null !== options) {
          if (null == options.as || "script" === options.as) {
            var crossOrigin = getCrossOriginStringAs(
              options.as,
              options.crossOrigin
            );
            Internals.d.M(href, {
              crossOrigin,
              integrity: "string" === typeof options.integrity ? options.integrity : void 0,
              nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
          }
        } else null == options && Internals.d.M(href);
    };
    exports.preload = function(href, options) {
      if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
        Internals.d.L(href, as, {
          crossOrigin,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0,
          type: "string" === typeof options.type ? options.type : void 0,
          fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
          referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
          imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
          imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
          media: "string" === typeof options.media ? options.media : void 0
        });
      }
    };
    exports.preloadModule = function(href, options) {
      if ("string" === typeof href)
        if (options) {
          var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
          Internals.d.m(href, {
            as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0
          });
        } else Internals.d.m(href);
    };
    exports.requestFormReset = function(form) {
      Internals.d.r(form);
    };
    exports.unstable_batchedUpdates = function(fn, a) {
      return fn(a);
    };
    exports.useFormState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useFormState(action, initialState, permalink);
    };
    exports.useFormStatus = function() {
      return ReactSharedInternals.H.useHostTransitionStatus();
    };
    exports.version = "19.2.4";
  }
});

// ../../common/temp/node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "../../common/temp/node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module.exports = require_react_dom_production();
    } else {
      module.exports = null;
    }
  }
});

// ../../common/temp/node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom-client.production.js
var require_react_dom_client_production = __commonJS({
  "../../common/temp/node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom-client.production.js"(exports) {
    "use strict";
    var Scheduler = require_scheduler();
    var React6 = require_react();
    var ReactDOM = require_react_dom();
    function formatProdErrorMessage(code) {
      var url = "https://react.dev/errors/" + code;
      if (1 < arguments.length) {
        url += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++)
          url += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function isValidContainer(node) {
      return !(!node || 1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType);
    }
    function getNearestMountedFiber(fiber) {
      var node = fiber, nearestMounted = fiber;
      if (fiber.alternate) for (; node.return; ) node = node.return;
      else {
        fiber = node;
        do
          node = fiber, 0 !== (node.flags & 4098) && (nearestMounted = node.return), fiber = node.return;
        while (fiber);
      }
      return 3 === node.tag ? nearestMounted : null;
    }
    function getSuspenseInstanceFromFiber(fiber) {
      if (13 === fiber.tag) {
        var suspenseState = fiber.memoizedState;
        null === suspenseState && (fiber = fiber.alternate, null !== fiber && (suspenseState = fiber.memoizedState));
        if (null !== suspenseState) return suspenseState.dehydrated;
      }
      return null;
    }
    function getActivityInstanceFromFiber(fiber) {
      if (31 === fiber.tag) {
        var activityState = fiber.memoizedState;
        null === activityState && (fiber = fiber.alternate, null !== fiber && (activityState = fiber.memoizedState));
        if (null !== activityState) return activityState.dehydrated;
      }
      return null;
    }
    function assertIsMounted(fiber) {
      if (getNearestMountedFiber(fiber) !== fiber)
        throw Error(formatProdErrorMessage(188));
    }
    function findCurrentFiberUsingSlowPath(fiber) {
      var alternate = fiber.alternate;
      if (!alternate) {
        alternate = getNearestMountedFiber(fiber);
        if (null === alternate) throw Error(formatProdErrorMessage(188));
        return alternate !== fiber ? null : fiber;
      }
      for (var a = fiber, b2 = alternate; ; ) {
        var parentA = a.return;
        if (null === parentA) break;
        var parentB = parentA.alternate;
        if (null === parentB) {
          b2 = parentA.return;
          if (null !== b2) {
            a = b2;
            continue;
          }
          break;
        }
        if (parentA.child === parentB.child) {
          for (parentB = parentA.child; parentB; ) {
            if (parentB === a) return assertIsMounted(parentA), fiber;
            if (parentB === b2) return assertIsMounted(parentA), alternate;
            parentB = parentB.sibling;
          }
          throw Error(formatProdErrorMessage(188));
        }
        if (a.return !== b2.return) a = parentA, b2 = parentB;
        else {
          for (var didFindChild = false, child$0 = parentA.child; child$0; ) {
            if (child$0 === a) {
              didFindChild = true;
              a = parentA;
              b2 = parentB;
              break;
            }
            if (child$0 === b2) {
              didFindChild = true;
              b2 = parentA;
              a = parentB;
              break;
            }
            child$0 = child$0.sibling;
          }
          if (!didFindChild) {
            for (child$0 = parentB.child; child$0; ) {
              if (child$0 === a) {
                didFindChild = true;
                a = parentB;
                b2 = parentA;
                break;
              }
              if (child$0 === b2) {
                didFindChild = true;
                b2 = parentB;
                a = parentA;
                break;
              }
              child$0 = child$0.sibling;
            }
            if (!didFindChild) throw Error(formatProdErrorMessage(189));
          }
        }
        if (a.alternate !== b2) throw Error(formatProdErrorMessage(190));
      }
      if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
      return a.stateNode.current === a ? fiber : alternate;
    }
    function findCurrentHostFiberImpl(node) {
      var tag = node.tag;
      if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
      for (node = node.child; null !== node; ) {
        tag = findCurrentHostFiberImpl(node);
        if (null !== tag) return tag;
        node = node.sibling;
      }
      return null;
    }
    var assign = Object.assign;
    var REACT_LEGACY_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.element");
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
    var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
    var REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity");
    var REACT_MEMO_CACHE_SENTINEL = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference");
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch (type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return type.displayName || "Context";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x2) {
            }
        }
      return null;
    }
    var isArrayImpl = Array.isArray;
    var ReactSharedInternals = React6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    var sharedNotPendingObject = {
      pending: false,
      data: null,
      method: null,
      action: null
    };
    var valueStack = [];
    var index = -1;
    function createCursor(defaultValue) {
      return { current: defaultValue };
    }
    function pop(cursor) {
      0 > index || (cursor.current = valueStack[index], valueStack[index] = null, index--);
    }
    function push(cursor, value) {
      index++;
      valueStack[index] = cursor.current;
      cursor.current = value;
    }
    var contextStackCursor = createCursor(null);
    var contextFiberStackCursor = createCursor(null);
    var rootInstanceStackCursor = createCursor(null);
    var hostTransitionProviderCursor = createCursor(null);
    function pushHostContainer(fiber, nextRootInstance) {
      push(rootInstanceStackCursor, nextRootInstance);
      push(contextFiberStackCursor, fiber);
      push(contextStackCursor, null);
      switch (nextRootInstance.nodeType) {
        case 9:
        case 11:
          fiber = (fiber = nextRootInstance.documentElement) ? (fiber = fiber.namespaceURI) ? getOwnHostContext(fiber) : 0 : 0;
          break;
        default:
          if (fiber = nextRootInstance.tagName, nextRootInstance = nextRootInstance.namespaceURI)
            nextRootInstance = getOwnHostContext(nextRootInstance), fiber = getChildHostContextProd(nextRootInstance, fiber);
          else
            switch (fiber) {
              case "svg":
                fiber = 1;
                break;
              case "math":
                fiber = 2;
                break;
              default:
                fiber = 0;
            }
      }
      pop(contextStackCursor);
      push(contextStackCursor, fiber);
    }
    function popHostContainer() {
      pop(contextStackCursor);
      pop(contextFiberStackCursor);
      pop(rootInstanceStackCursor);
    }
    function pushHostContext(fiber) {
      null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
      var context = contextStackCursor.current;
      var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
      context !== JSCompiler_inline_result && (push(contextFiberStackCursor, fiber), push(contextStackCursor, JSCompiler_inline_result));
    }
    function popHostContext(fiber) {
      contextFiberStackCursor.current === fiber && (pop(contextStackCursor), pop(contextFiberStackCursor));
      hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor), HostTransitionContext._currentValue = sharedNotPendingObject);
    }
    var prefix;
    var suffix;
    function describeBuiltInComponentFrame(name) {
      if (void 0 === prefix)
        try {
          throw Error();
        } catch (x2) {
          var match = x2.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || "";
          suffix = -1 < x2.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x2.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return "\n" + prefix + name + suffix;
    }
    var reentry = false;
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if ("object" === typeof Reflect && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x2) {
                    var control = x2;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$1) {
                    control = x$1;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$2) {
                  control = x$2;
                }
                (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                });
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack)
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name"
        );
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
          for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot"); )
            RunInRootFrame++;
          for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes(
            "DetermineComponentFrameRoot"
          ); )
            namePropDescriptor++;
          if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length)
            for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]; )
              namePropDescriptor--;
          for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--)
            if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
              if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
                do
                  if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
                    var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
                    fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
                    return frame;
                  }
                while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
              }
              break;
            }
        }
      } finally {
        reentry = false, Error.prepareStackTrace = previousPrepareStackTrace;
      }
      return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
    }
    function describeFiber(fiber, childFiber) {
      switch (fiber.tag) {
        case 26:
        case 27:
        case 5:
          return describeBuiltInComponentFrame(fiber.type);
        case 16:
          return describeBuiltInComponentFrame("Lazy");
        case 13:
          return fiber.child !== childFiber && null !== childFiber ? describeBuiltInComponentFrame("Suspense Fallback") : describeBuiltInComponentFrame("Suspense");
        case 19:
          return describeBuiltInComponentFrame("SuspenseList");
        case 0:
        case 15:
          return describeNativeComponentFrame(fiber.type, false);
        case 11:
          return describeNativeComponentFrame(fiber.type.render, false);
        case 1:
          return describeNativeComponentFrame(fiber.type, true);
        case 31:
          return describeBuiltInComponentFrame("Activity");
        default:
          return "";
      }
    }
    function getStackByFiberInDevAndProd(workInProgress2) {
      try {
        var info = "", previous = null;
        do
          info += describeFiber(workInProgress2, previous), previous = workInProgress2, workInProgress2 = workInProgress2.return;
        while (workInProgress2);
        return info;
      } catch (x2) {
        return "\nError generating stack: " + x2.message + "\n" + x2.stack;
      }
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var scheduleCallback$3 = Scheduler.unstable_scheduleCallback;
    var cancelCallback$1 = Scheduler.unstable_cancelCallback;
    var shouldYield = Scheduler.unstable_shouldYield;
    var requestPaint = Scheduler.unstable_requestPaint;
    var now = Scheduler.unstable_now;
    var getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel;
    var ImmediatePriority = Scheduler.unstable_ImmediatePriority;
    var UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
    var NormalPriority$1 = Scheduler.unstable_NormalPriority;
    var LowPriority = Scheduler.unstable_LowPriority;
    var IdlePriority = Scheduler.unstable_IdlePriority;
    var log$1 = Scheduler.log;
    var unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue;
    var rendererID = null;
    var injectedHook = null;
    function setIsStrictModeForDevtools(newIsStrictMode) {
      "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
      if (injectedHook && "function" === typeof injectedHook.setStrictMode)
        try {
          injectedHook.setStrictMode(rendererID, newIsStrictMode);
        } catch (err) {
        }
    }
    var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
    var log = Math.log;
    var LN2 = Math.LN2;
    function clz32Fallback(x2) {
      x2 >>>= 0;
      return 0 === x2 ? 32 : 31 - (log(x2) / LN2 | 0) | 0;
    }
    var nextTransitionUpdateLane = 256;
    var nextTransitionDeferredLane = 262144;
    var nextRetryLane = 4194304;
    function getHighestPriorityLanes(lanes) {
      var pendingSyncLanes = lanes & 42;
      if (0 !== pendingSyncLanes) return pendingSyncLanes;
      switch (lanes & -lanes) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return lanes & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return lanes & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return lanes & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return lanes;
      }
    }
    function getNextLanes(root3, wipLanes, rootHasPendingCommit) {
      var pendingLanes = root3.pendingLanes;
      if (0 === pendingLanes) return 0;
      var nextLanes = 0, suspendedLanes = root3.suspendedLanes, pingedLanes = root3.pingedLanes;
      root3 = root3.warmLanes;
      var nonIdlePendingLanes = pendingLanes & 134217727;
      0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = nonIdlePendingLanes & ~root3, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = pendingLanes & ~root3, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
      return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, rootHasPendingCommit = wipLanes & -wipLanes, suspendedLanes >= rootHasPendingCommit || 32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)) ? wipLanes : nextLanes;
    }
    function checkIfRootIsPrerendering(root3, renderLanes2) {
      return 0 === (root3.pendingLanes & ~(root3.suspendedLanes & ~root3.pingedLanes) & renderLanes2);
    }
    function computeExpirationTime(lane, currentTime) {
      switch (lane) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return currentTime + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return currentTime + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function claimNextRetryLane() {
      var lane = nextRetryLane;
      nextRetryLane <<= 1;
      0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
      return lane;
    }
    function createLaneMap(initial) {
      for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
      return laneMap;
    }
    function markRootUpdated$1(root3, updateLane) {
      root3.pendingLanes |= updateLane;
      268435456 !== updateLane && (root3.suspendedLanes = 0, root3.pingedLanes = 0, root3.warmLanes = 0);
    }
    function markRootFinished(root3, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
      var previouslyPendingLanes = root3.pendingLanes;
      root3.pendingLanes = remainingLanes;
      root3.suspendedLanes = 0;
      root3.pingedLanes = 0;
      root3.warmLanes = 0;
      root3.expiredLanes &= remainingLanes;
      root3.entangledLanes &= remainingLanes;
      root3.errorRecoveryDisabledLanes &= remainingLanes;
      root3.shellSuspendCounter = 0;
      var entanglements = root3.entanglements, expirationTimes = root3.expirationTimes, hiddenUpdates = root3.hiddenUpdates;
      for (remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes; ) {
        var index$7 = 31 - clz32(remainingLanes), lane = 1 << index$7;
        entanglements[index$7] = 0;
        expirationTimes[index$7] = -1;
        var hiddenUpdatesForLane = hiddenUpdates[index$7];
        if (null !== hiddenUpdatesForLane)
          for (hiddenUpdates[index$7] = null, index$7 = 0; index$7 < hiddenUpdatesForLane.length; index$7++) {
            var update = hiddenUpdatesForLane[index$7];
            null !== update && (update.lane &= -536870913);
          }
        remainingLanes &= ~lane;
      }
      0 !== spawnedLane && markSpawnedDeferredLane(root3, spawnedLane, 0);
      0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root3.tag && (root3.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
    }
    function markSpawnedDeferredLane(root3, spawnedLane, entangledLanes) {
      root3.pendingLanes |= spawnedLane;
      root3.suspendedLanes &= ~spawnedLane;
      var spawnedLaneIndex = 31 - clz32(spawnedLane);
      root3.entangledLanes |= spawnedLane;
      root3.entanglements[spawnedLaneIndex] = root3.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 261930;
    }
    function markRootEntangled(root3, entangledLanes) {
      var rootEntangledLanes = root3.entangledLanes |= entangledLanes;
      for (root3 = root3.entanglements; rootEntangledLanes; ) {
        var index$8 = 31 - clz32(rootEntangledLanes), lane = 1 << index$8;
        lane & entangledLanes | root3[index$8] & entangledLanes && (root3[index$8] |= entangledLanes);
        rootEntangledLanes &= ~lane;
      }
    }
    function getBumpedLaneForHydration(root3, renderLanes2) {
      var renderLane = renderLanes2 & -renderLanes2;
      renderLane = 0 !== (renderLane & 42) ? 1 : getBumpedLaneForHydrationByLane(renderLane);
      return 0 !== (renderLane & (root3.suspendedLanes | renderLanes2)) ? 0 : renderLane;
    }
    function getBumpedLaneForHydrationByLane(lane) {
      switch (lane) {
        case 2:
          lane = 1;
          break;
        case 8:
          lane = 4;
          break;
        case 32:
          lane = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          lane = 128;
          break;
        case 268435456:
          lane = 134217728;
          break;
        default:
          lane = 0;
      }
      return lane;
    }
    function lanesToEventPriority(lanes) {
      lanes &= -lanes;
      return 2 < lanes ? 8 < lanes ? 0 !== (lanes & 134217727) ? 32 : 268435456 : 8 : 2;
    }
    function resolveUpdatePriority() {
      var updatePriority = ReactDOMSharedInternals.p;
      if (0 !== updatePriority) return updatePriority;
      updatePriority = window.event;
      return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
    }
    function runWithPriority(priority, fn) {
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        return ReactDOMSharedInternals.p = priority, fn();
      } finally {
        ReactDOMSharedInternals.p = previousPriority;
      }
    }
    var randomKey = Math.random().toString(36).slice(2);
    var internalInstanceKey = "__reactFiber$" + randomKey;
    var internalPropsKey = "__reactProps$" + randomKey;
    var internalContainerInstanceKey = "__reactContainer$" + randomKey;
    var internalEventHandlersKey = "__reactEvents$" + randomKey;
    var internalEventHandlerListenersKey = "__reactListeners$" + randomKey;
    var internalEventHandlesSetKey = "__reactHandles$" + randomKey;
    var internalRootNodeResourcesKey = "__reactResources$" + randomKey;
    var internalHoistableMarker = "__reactMarker$" + randomKey;
    function detachDeletedInstance(node) {
      delete node[internalInstanceKey];
      delete node[internalPropsKey];
      delete node[internalEventHandlersKey];
      delete node[internalEventHandlerListenersKey];
      delete node[internalEventHandlesSetKey];
    }
    function getClosestInstanceFromNode(targetNode) {
      var targetInst = targetNode[internalInstanceKey];
      if (targetInst) return targetInst;
      for (var parentNode = targetNode.parentNode; parentNode; ) {
        if (targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]) {
          parentNode = targetInst.alternate;
          if (null !== targetInst.child || null !== parentNode && null !== parentNode.child)
            for (targetNode = getParentHydrationBoundary(targetNode); null !== targetNode; ) {
              if (parentNode = targetNode[internalInstanceKey]) return parentNode;
              targetNode = getParentHydrationBoundary(targetNode);
            }
          return targetInst;
        }
        targetNode = parentNode;
        parentNode = targetNode.parentNode;
      }
      return null;
    }
    function getInstanceFromNode(node) {
      if (node = node[internalInstanceKey] || node[internalContainerInstanceKey]) {
        var tag = node.tag;
        if (5 === tag || 6 === tag || 13 === tag || 31 === tag || 26 === tag || 27 === tag || 3 === tag)
          return node;
      }
      return null;
    }
    function getNodeFromInstance(inst) {
      var tag = inst.tag;
      if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
      throw Error(formatProdErrorMessage(33));
    }
    function getResourcesFromRoot(root3) {
      var resources = root3[internalRootNodeResourcesKey];
      resources || (resources = root3[internalRootNodeResourcesKey] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() });
      return resources;
    }
    function markNodeAsHoistable(node) {
      node[internalHoistableMarker] = true;
    }
    var allNativeEvents = /* @__PURE__ */ new Set();
    var registrationNameDependencies = {};
    function registerTwoPhaseEvent(registrationName, dependencies) {
      registerDirectEvent(registrationName, dependencies);
      registerDirectEvent(registrationName + "Capture", dependencies);
    }
    function registerDirectEvent(registrationName, dependencies) {
      registrationNameDependencies[registrationName] = dependencies;
      for (registrationName = 0; registrationName < dependencies.length; registrationName++)
        allNativeEvents.add(dependencies[registrationName]);
    }
    var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    );
    var illegalAttributeNameCache = {};
    var validatedAttributeNameCache = {};
    function isAttributeNameSafe(attributeName) {
      if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
        return true;
      if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
        return validatedAttributeNameCache[attributeName] = true;
      illegalAttributeNameCache[attributeName] = true;
      return false;
    }
    function setValueForAttribute(node, name, value) {
      if (isAttributeNameSafe(name))
        if (null === value) node.removeAttribute(name);
        else {
          switch (typeof value) {
            case "undefined":
            case "function":
            case "symbol":
              node.removeAttribute(name);
              return;
            case "boolean":
              var prefix$10 = name.toLowerCase().slice(0, 5);
              if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
                node.removeAttribute(name);
                return;
              }
          }
          node.setAttribute(name, "" + value);
        }
    }
    function setValueForKnownAttribute(node, name, value) {
      if (null === value) node.removeAttribute(name);
      else {
        switch (typeof value) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            node.removeAttribute(name);
            return;
        }
        node.setAttribute(name, "" + value);
      }
    }
    function setValueForNamespacedAttribute(node, namespace, name, value) {
      if (null === value) node.removeAttribute(name);
      else {
        switch (typeof value) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            node.removeAttribute(name);
            return;
        }
        node.setAttributeNS(namespace, name, "" + value);
      }
    }
    function getToStringValue(value) {
      switch (typeof value) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return value;
        case "object":
          return value;
        default:
          return "";
      }
    }
    function isCheckable(elem) {
      var type = elem.type;
      return (elem = elem.nodeName) && "input" === elem.toLowerCase() && ("checkbox" === type || "radio" === type);
    }
    function trackValueOnNode(node, valueField, currentValue) {
      var descriptor = Object.getOwnPropertyDescriptor(
        node.constructor.prototype,
        valueField
      );
      if (!node.hasOwnProperty(valueField) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
        var get = descriptor.get, set = descriptor.set;
        Object.defineProperty(node, valueField, {
          configurable: true,
          get: function() {
            return get.call(this);
          },
          set: function(value) {
            currentValue = "" + value;
            set.call(this, value);
          }
        });
        Object.defineProperty(node, valueField, {
          enumerable: descriptor.enumerable
        });
        return {
          getValue: function() {
            return currentValue;
          },
          setValue: function(value) {
            currentValue = "" + value;
          },
          stopTracking: function() {
            node._valueTracker = null;
            delete node[valueField];
          }
        };
      }
    }
    function track(node) {
      if (!node._valueTracker) {
        var valueField = isCheckable(node) ? "checked" : "value";
        node._valueTracker = trackValueOnNode(
          node,
          valueField,
          "" + node[valueField]
        );
      }
    }
    function updateValueIfChanged(node) {
      if (!node) return false;
      var tracker = node._valueTracker;
      if (!tracker) return true;
      var lastValue = tracker.getValue();
      var value = "";
      node && (value = isCheckable(node) ? node.checked ? "true" : "false" : node.value);
      node = value;
      return node !== lastValue ? (tracker.setValue(node), true) : false;
    }
    function getActiveElement(doc) {
      doc = doc || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof doc) return null;
      try {
        return doc.activeElement || doc.body;
      } catch (e) {
        return doc.body;
      }
    }
    var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
    function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
      return value.replace(
        escapeSelectorAttributeValueInsideDoubleQuotesRegex,
        function(ch) {
          return "\\" + ch.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function updateInput(element, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name) {
      element.name = "";
      null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type ? element.type = type : element.removeAttribute("type");
      if (null != value)
        if ("number" === type) {
          if (0 === value && "" === element.value || element.value != value)
            element.value = "" + getToStringValue(value);
        } else
          element.value !== "" + getToStringValue(value) && (element.value = "" + getToStringValue(value));
      else
        "submit" !== type && "reset" !== type || element.removeAttribute("value");
      null != value ? setDefaultValue(element, type, getToStringValue(value)) : null != defaultValue ? setDefaultValue(element, type, getToStringValue(defaultValue)) : null != lastDefaultValue && element.removeAttribute("value");
      null == checked && null != defaultChecked && (element.defaultChecked = !!defaultChecked);
      null != checked && (element.checked = checked && "function" !== typeof checked && "symbol" !== typeof checked);
      null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name ? element.name = "" + getToStringValue(name) : element.removeAttribute("name");
    }
    function initInput(element, value, defaultValue, checked, defaultChecked, type, name, isHydrating2) {
      null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type && (element.type = type);
      if (null != value || null != defaultValue) {
        if (!("submit" !== type && "reset" !== type || void 0 !== value && null !== value)) {
          track(element);
          return;
        }
        defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
        value = null != value ? "" + getToStringValue(value) : defaultValue;
        isHydrating2 || value === element.value || (element.value = value);
        element.defaultValue = value;
      }
      checked = null != checked ? checked : defaultChecked;
      checked = "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
      element.checked = isHydrating2 ? element.checked : !!checked;
      element.defaultChecked = !!checked;
      null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name && (element.name = name);
      track(element);
    }
    function setDefaultValue(node, type, value) {
      "number" === type && getActiveElement(node.ownerDocument) === node || node.defaultValue === "" + value || (node.defaultValue = "" + value);
    }
    function updateOptions(node, multiple, propValue, setDefaultSelected) {
      node = node.options;
      if (multiple) {
        multiple = {};
        for (var i = 0; i < propValue.length; i++)
          multiple["$" + propValue[i]] = true;
        for (propValue = 0; propValue < node.length; propValue++)
          i = multiple.hasOwnProperty("$" + node[propValue].value), node[propValue].selected !== i && (node[propValue].selected = i), i && setDefaultSelected && (node[propValue].defaultSelected = true);
      } else {
        propValue = "" + getToStringValue(propValue);
        multiple = null;
        for (i = 0; i < node.length; i++) {
          if (node[i].value === propValue) {
            node[i].selected = true;
            setDefaultSelected && (node[i].defaultSelected = true);
            return;
          }
          null !== multiple || node[i].disabled || (multiple = node[i]);
        }
        null !== multiple && (multiple.selected = true);
      }
    }
    function updateTextarea(element, value, defaultValue) {
      if (null != value && (value = "" + getToStringValue(value), value !== element.value && (element.value = value), null == defaultValue)) {
        element.defaultValue !== value && (element.defaultValue = value);
        return;
      }
      element.defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
    }
    function initTextarea(element, value, defaultValue, children) {
      if (null == value) {
        if (null != children) {
          if (null != defaultValue) throw Error(formatProdErrorMessage(92));
          if (isArrayImpl(children)) {
            if (1 < children.length) throw Error(formatProdErrorMessage(93));
            children = children[0];
          }
          defaultValue = children;
        }
        null == defaultValue && (defaultValue = "");
        value = defaultValue;
      }
      defaultValue = getToStringValue(value);
      element.defaultValue = defaultValue;
      children = element.textContent;
      children === defaultValue && "" !== children && null !== children && (element.value = children);
      track(element);
    }
    function setTextContent(node, text) {
      if (text) {
        var firstChild = node.firstChild;
        if (firstChild && firstChild === node.lastChild && 3 === firstChild.nodeType) {
          firstChild.nodeValue = text;
          return;
        }
      }
      node.textContent = text;
    }
    var unitlessNumbers = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    );
    function setValueForStyle(style2, styleName, value) {
      var isCustomProperty = 0 === styleName.indexOf("--");
      null == value || "boolean" === typeof value || "" === value ? isCustomProperty ? style2.setProperty(styleName, "") : "float" === styleName ? style2.cssFloat = "" : style2[styleName] = "" : isCustomProperty ? style2.setProperty(styleName, value) : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName) ? "float" === styleName ? style2.cssFloat = value : style2[styleName] = ("" + value).trim() : style2[styleName] = value + "px";
    }
    function setValueForStyles(node, styles, prevStyles) {
      if (null != styles && "object" !== typeof styles)
        throw Error(formatProdErrorMessage(62));
      node = node.style;
      if (null != prevStyles) {
        for (var styleName in prevStyles)
          !prevStyles.hasOwnProperty(styleName) || null != styles && styles.hasOwnProperty(styleName) || (0 === styleName.indexOf("--") ? node.setProperty(styleName, "") : "float" === styleName ? node.cssFloat = "" : node[styleName] = "");
        for (var styleName$16 in styles)
          styleName = styles[styleName$16], styles.hasOwnProperty(styleName$16) && prevStyles[styleName$16] !== styleName && setValueForStyle(node, styleName$16, styleName);
      } else
        for (var styleName$17 in styles)
          styles.hasOwnProperty(styleName$17) && setValueForStyle(node, styleName$17, styles[styleName$17]);
    }
    function isCustomElement(tagName) {
      if (-1 === tagName.indexOf("-")) return false;
      switch (tagName) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var aliases = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]);
    var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function sanitizeURL(url) {
      return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    function noop$1() {
    }
    var currentReplayingEvent = null;
    function getEventTarget(nativeEvent) {
      nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
      nativeEvent.correspondingUseElement && (nativeEvent = nativeEvent.correspondingUseElement);
      return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
    }
    var restoreTarget = null;
    var restoreQueue = null;
    function restoreStateOfTarget(target) {
      var internalInstance = getInstanceFromNode(target);
      if (internalInstance && (target = internalInstance.stateNode)) {
        var props = target[internalPropsKey] || null;
        a: switch (target = internalInstance.stateNode, internalInstance.type) {
          case "input":
            updateInput(
              target,
              props.value,
              props.defaultValue,
              props.defaultValue,
              props.checked,
              props.defaultChecked,
              props.type,
              props.name
            );
            internalInstance = props.name;
            if ("radio" === props.type && null != internalInstance) {
              for (props = target; props.parentNode; ) props = props.parentNode;
              props = props.querySelectorAll(
                'input[name="' + escapeSelectorAttributeValueInsideDoubleQuotes(
                  "" + internalInstance
                ) + '"][type="radio"]'
              );
              for (internalInstance = 0; internalInstance < props.length; internalInstance++) {
                var otherNode = props[internalInstance];
                if (otherNode !== target && otherNode.form === target.form) {
                  var otherProps = otherNode[internalPropsKey] || null;
                  if (!otherProps) throw Error(formatProdErrorMessage(90));
                  updateInput(
                    otherNode,
                    otherProps.value,
                    otherProps.defaultValue,
                    otherProps.defaultValue,
                    otherProps.checked,
                    otherProps.defaultChecked,
                    otherProps.type,
                    otherProps.name
                  );
                }
              }
              for (internalInstance = 0; internalInstance < props.length; internalInstance++)
                otherNode = props[internalInstance], otherNode.form === target.form && updateValueIfChanged(otherNode);
            }
            break a;
          case "textarea":
            updateTextarea(target, props.value, props.defaultValue);
            break a;
          case "select":
            internalInstance = props.value, null != internalInstance && updateOptions(target, !!props.multiple, internalInstance, false);
        }
      }
    }
    var isInsideEventHandler = false;
    function batchedUpdates$1(fn, a, b2) {
      if (isInsideEventHandler) return fn(a, b2);
      isInsideEventHandler = true;
      try {
        var JSCompiler_inline_result = fn(a);
        return JSCompiler_inline_result;
      } finally {
        if (isInsideEventHandler = false, null !== restoreTarget || null !== restoreQueue) {
          if (flushSyncWork$1(), restoreTarget && (a = restoreTarget, fn = restoreQueue, restoreQueue = restoreTarget = null, restoreStateOfTarget(a), fn))
            for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
        }
      }
    }
    function getListener(inst, registrationName) {
      var stateNode = inst.stateNode;
      if (null === stateNode) return null;
      var props = stateNode[internalPropsKey] || null;
      if (null === props) return null;
      stateNode = props[registrationName];
      a: switch (registrationName) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (props = !props.disabled) || (inst = inst.type, props = !("button" === inst || "input" === inst || "select" === inst || "textarea" === inst));
          inst = !props;
          break a;
        default:
          inst = false;
      }
      if (inst) return null;
      if (stateNode && "function" !== typeof stateNode)
        throw Error(
          formatProdErrorMessage(231, registrationName, typeof stateNode)
        );
      return stateNode;
    }
    var canUseDOM = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
    var passiveBrowserEventsSupported = false;
    if (canUseDOM)
      try {
        options = {};
        Object.defineProperty(options, "passive", {
          get: function() {
            passiveBrowserEventsSupported = true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (e) {
        passiveBrowserEventsSupported = false;
      }
    var options;
    var root2 = null;
    var startText = null;
    var fallbackText = null;
    function getData() {
      if (fallbackText) return fallbackText;
      var start, startValue = startText, startLength = startValue.length, end, endValue = "value" in root2 ? root2.value : root2.textContent, endLength = endValue.length;
      for (start = 0; start < startLength && startValue[start] === endValue[start]; start++) ;
      var minEnd = startLength - start;
      for (end = 1; end <= minEnd && startValue[startLength - end] === endValue[endLength - end]; end++) ;
      return fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0);
    }
    function getEventCharCode(nativeEvent) {
      var keyCode = nativeEvent.keyCode;
      "charCode" in nativeEvent ? (nativeEvent = nativeEvent.charCode, 0 === nativeEvent && 13 === keyCode && (nativeEvent = 13)) : nativeEvent = keyCode;
      10 === nativeEvent && (nativeEvent = 13);
      return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
    }
    function functionThatReturnsTrue() {
      return true;
    }
    function functionThatReturnsFalse() {
      return false;
    }
    function createSyntheticEvent(Interface) {
      function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
        this._reactName = reactName;
        this._targetInst = targetInst;
        this.type = reactEventType;
        this.nativeEvent = nativeEvent;
        this.target = nativeEventTarget;
        this.currentTarget = null;
        for (var propName in Interface)
          Interface.hasOwnProperty(propName) && (reactName = Interface[propName], this[propName] = reactName ? reactName(nativeEvent) : nativeEvent[propName]);
        this.isDefaultPrevented = (null != nativeEvent.defaultPrevented ? nativeEvent.defaultPrevented : false === nativeEvent.returnValue) ? functionThatReturnsTrue : functionThatReturnsFalse;
        this.isPropagationStopped = functionThatReturnsFalse;
        return this;
      }
      assign(SyntheticBaseEvent.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var event = this.nativeEvent;
          event && (event.preventDefault ? event.preventDefault() : "unknown" !== typeof event.returnValue && (event.returnValue = false), this.isDefaultPrevented = functionThatReturnsTrue);
        },
        stopPropagation: function() {
          var event = this.nativeEvent;
          event && (event.stopPropagation ? event.stopPropagation() : "unknown" !== typeof event.cancelBubble && (event.cancelBubble = true), this.isPropagationStopped = functionThatReturnsTrue);
        },
        persist: function() {
        },
        isPersistent: functionThatReturnsTrue
      });
      return SyntheticBaseEvent;
    }
    var EventInterface = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(event) {
        return event.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    };
    var SyntheticEvent = createSyntheticEvent(EventInterface);
    var UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 });
    var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
    var lastMovementX;
    var lastMovementY;
    var lastMouseEvent;
    var MouseEventInterface = assign({}, UIEventInterface, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: getEventModifierState,
      button: 0,
      buttons: 0,
      relatedTarget: function(event) {
        return void 0 === event.relatedTarget ? event.fromElement === event.srcElement ? event.toElement : event.fromElement : event.relatedTarget;
      },
      movementX: function(event) {
        if ("movementX" in event) return event.movementX;
        event !== lastMouseEvent && (lastMouseEvent && "mousemove" === event.type ? (lastMovementX = event.screenX - lastMouseEvent.screenX, lastMovementY = event.screenY - lastMouseEvent.screenY) : lastMovementY = lastMovementX = 0, lastMouseEvent = event);
        return lastMovementX;
      },
      movementY: function(event) {
        return "movementY" in event ? event.movementY : lastMovementY;
      }
    });
    var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
    var DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 });
    var SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
    var FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 });
    var SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
    var AnimationEventInterface = assign({}, EventInterface, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    var SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
    var ClipboardEventInterface = assign({}, EventInterface, {
      clipboardData: function(event) {
        return "clipboardData" in event ? event.clipboardData : window.clipboardData;
      }
    });
    var SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
    var CompositionEventInterface = assign({}, EventInterface, { data: 0 });
    var SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
    var normalizeKey = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    };
    var translateToKey = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    var modifierKeyToProp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function modifierStateGetter(keyArg) {
      var nativeEvent = this.nativeEvent;
      return nativeEvent.getModifierState ? nativeEvent.getModifierState(keyArg) : (keyArg = modifierKeyToProp[keyArg]) ? !!nativeEvent[keyArg] : false;
    }
    function getEventModifierState() {
      return modifierStateGetter;
    }
    var KeyboardEventInterface = assign({}, UIEventInterface, {
      key: function(nativeEvent) {
        if (nativeEvent.key) {
          var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
          if ("Unidentified" !== key) return key;
        }
        return "keypress" === nativeEvent.type ? (nativeEvent = getEventCharCode(nativeEvent), 13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent)) : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type ? translateToKey[nativeEvent.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: getEventModifierState,
      charCode: function(event) {
        return "keypress" === event.type ? getEventCharCode(event) : 0;
      },
      keyCode: function(event) {
        return "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
      },
      which: function(event) {
        return "keypress" === event.type ? getEventCharCode(event) : "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
      }
    });
    var SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
    var PointerEventInterface = assign({}, MouseEventInterface, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    });
    var SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
    var TouchEventInterface = assign({}, UIEventInterface, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: getEventModifierState
    });
    var SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
    var TransitionEventInterface = assign({}, EventInterface, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    var SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
    var WheelEventInterface = assign({}, MouseEventInterface, {
      deltaX: function(event) {
        return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
      },
      deltaY: function(event) {
        return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    });
    var SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);
    var ToggleEventInterface = assign({}, EventInterface, {
      newState: 0,
      oldState: 0
    });
    var SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface);
    var END_KEYCODES = [9, 13, 27, 32];
    var canUseCompositionEvent = canUseDOM && "CompositionEvent" in window;
    var documentMode = null;
    canUseDOM && "documentMode" in document && (documentMode = document.documentMode);
    var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode;
    var useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && 8 < documentMode && 11 >= documentMode);
    var SPACEBAR_CHAR = String.fromCharCode(32);
    var hasSpaceKeypress = false;
    function isFallbackCompositionEnd(domEventName, nativeEvent) {
      switch (domEventName) {
        case "keyup":
          return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
        case "keydown":
          return 229 !== nativeEvent.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function getDataFromCustomEvent(nativeEvent) {
      nativeEvent = nativeEvent.detail;
      return "object" === typeof nativeEvent && "data" in nativeEvent ? nativeEvent.data : null;
    }
    var isComposing = false;
    function getNativeBeforeInputChars(domEventName, nativeEvent) {
      switch (domEventName) {
        case "compositionend":
          return getDataFromCustomEvent(nativeEvent);
        case "keypress":
          if (32 !== nativeEvent.which) return null;
          hasSpaceKeypress = true;
          return SPACEBAR_CHAR;
        case "textInput":
          return domEventName = nativeEvent.data, domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName;
        default:
          return null;
      }
    }
    function getFallbackBeforeInputChars(domEventName, nativeEvent) {
      if (isComposing)
        return "compositionend" === domEventName || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent) ? (domEventName = getData(), fallbackText = startText = root2 = null, isComposing = false, domEventName) : null;
      switch (domEventName) {
        case "paste":
          return null;
        case "keypress":
          if (!(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) || nativeEvent.ctrlKey && nativeEvent.altKey) {
            if (nativeEvent.char && 1 < nativeEvent.char.length)
              return nativeEvent.char;
            if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
          }
          return null;
        case "compositionend":
          return useFallbackCompositionData && "ko" !== nativeEvent.locale ? null : nativeEvent.data;
        default:
          return null;
      }
    }
    var supportedInputTypes = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function isTextInputElement(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return "input" === nodeName ? !!supportedInputTypes[elem.type] : "textarea" === nodeName ? true : false;
    }
    function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
      restoreTarget ? restoreQueue ? restoreQueue.push(target) : restoreQueue = [target] : restoreTarget = target;
      inst = accumulateTwoPhaseListeners(inst, "onChange");
      0 < inst.length && (nativeEvent = new SyntheticEvent(
        "onChange",
        "change",
        null,
        nativeEvent,
        target
      ), dispatchQueue.push({ event: nativeEvent, listeners: inst }));
    }
    var activeElement$1 = null;
    var activeElementInst$1 = null;
    function runEventInBatch(dispatchQueue) {
      processDispatchQueue(dispatchQueue, 0);
    }
    function getInstIfValueChanged(targetInst) {
      var targetNode = getNodeFromInstance(targetInst);
      if (updateValueIfChanged(targetNode)) return targetInst;
    }
    function getTargetInstForChangeEvent(domEventName, targetInst) {
      if ("change" === domEventName) return targetInst;
    }
    var isInputEventSupported = false;
    if (canUseDOM) {
      if (canUseDOM) {
        isSupported$jscomp$inline_427 = "oninput" in document;
        if (!isSupported$jscomp$inline_427) {
          element$jscomp$inline_428 = document.createElement("div");
          element$jscomp$inline_428.setAttribute("oninput", "return;");
          isSupported$jscomp$inline_427 = "function" === typeof element$jscomp$inline_428.oninput;
        }
        JSCompiler_inline_result$jscomp$286 = isSupported$jscomp$inline_427;
      } else JSCompiler_inline_result$jscomp$286 = false;
      isInputEventSupported = JSCompiler_inline_result$jscomp$286 && (!document.documentMode || 9 < document.documentMode);
    }
    var JSCompiler_inline_result$jscomp$286;
    var isSupported$jscomp$inline_427;
    var element$jscomp$inline_428;
    function stopWatchingForValueChange() {
      activeElement$1 && (activeElement$1.detachEvent("onpropertychange", handlePropertyChange), activeElementInst$1 = activeElement$1 = null);
    }
    function handlePropertyChange(nativeEvent) {
      if ("value" === nativeEvent.propertyName && getInstIfValueChanged(activeElementInst$1)) {
        var dispatchQueue = [];
        createAndAccumulateChangeEvent(
          dispatchQueue,
          activeElementInst$1,
          nativeEvent,
          getEventTarget(nativeEvent)
        );
        batchedUpdates$1(runEventInBatch, dispatchQueue);
      }
    }
    function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
      "focusin" === domEventName ? (stopWatchingForValueChange(), activeElement$1 = target, activeElementInst$1 = targetInst, activeElement$1.attachEvent("onpropertychange", handlePropertyChange)) : "focusout" === domEventName && stopWatchingForValueChange();
    }
    function getTargetInstForInputEventPolyfill(domEventName) {
      if ("selectionchange" === domEventName || "keyup" === domEventName || "keydown" === domEventName)
        return getInstIfValueChanged(activeElementInst$1);
    }
    function getTargetInstForClickEvent(domEventName, targetInst) {
      if ("click" === domEventName) return getInstIfValueChanged(targetInst);
    }
    function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
      if ("input" === domEventName || "change" === domEventName)
        return getInstIfValueChanged(targetInst);
    }
    function is(x2, y3) {
      return x2 === y3 && (0 !== x2 || 1 / x2 === 1 / y3) || x2 !== x2 && y3 !== y3;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is;
    function shallowEqual(objA, objB) {
      if (objectIs(objA, objB)) return true;
      if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB)
        return false;
      var keysA = Object.keys(objA), keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) return false;
      for (keysB = 0; keysB < keysA.length; keysB++) {
        var currentKey = keysA[keysB];
        if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey]))
          return false;
      }
      return true;
    }
    function getLeafNode(node) {
      for (; node && node.firstChild; ) node = node.firstChild;
      return node;
    }
    function getNodeForCharacterOffset(root3, offset) {
      var node = getLeafNode(root3);
      root3 = 0;
      for (var nodeEnd; node; ) {
        if (3 === node.nodeType) {
          nodeEnd = root3 + node.textContent.length;
          if (root3 <= offset && nodeEnd >= offset)
            return { node, offset: offset - root3 };
          root3 = nodeEnd;
        }
        a: {
          for (; node; ) {
            if (node.nextSibling) {
              node = node.nextSibling;
              break a;
            }
            node = node.parentNode;
          }
          node = void 0;
        }
        node = getLeafNode(node);
      }
    }
    function containsNode(outerNode, innerNode) {
      return outerNode && innerNode ? outerNode === innerNode ? true : outerNode && 3 === outerNode.nodeType ? false : innerNode && 3 === innerNode.nodeType ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : outerNode.compareDocumentPosition ? !!(outerNode.compareDocumentPosition(innerNode) & 16) : false : false;
    }
    function getActiveElementDeep(containerInfo) {
      containerInfo = null != containerInfo && null != containerInfo.ownerDocument && null != containerInfo.ownerDocument.defaultView ? containerInfo.ownerDocument.defaultView : window;
      for (var element = getActiveElement(containerInfo.document); element instanceof containerInfo.HTMLIFrameElement; ) {
        try {
          var JSCompiler_inline_result = "string" === typeof element.contentWindow.location.href;
        } catch (err) {
          JSCompiler_inline_result = false;
        }
        if (JSCompiler_inline_result) containerInfo = element.contentWindow;
        else break;
        element = getActiveElement(containerInfo.document);
      }
      return element;
    }
    function hasSelectionCapabilities(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return nodeName && ("input" === nodeName && ("text" === elem.type || "search" === elem.type || "tel" === elem.type || "url" === elem.type || "password" === elem.type) || "textarea" === nodeName || "true" === elem.contentEditable);
    }
    var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && 11 >= document.documentMode;
    var activeElement = null;
    var activeElementInst = null;
    var lastSelection = null;
    var mouseDown = false;
    function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
      var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
      mouseDown || null == activeElement || activeElement !== getActiveElement(doc) || (doc = activeElement, "selectionStart" in doc && hasSelectionCapabilities(doc) ? doc = { start: doc.selectionStart, end: doc.selectionEnd } : (doc = (doc.ownerDocument && doc.ownerDocument.defaultView || window).getSelection(), doc = {
        anchorNode: doc.anchorNode,
        anchorOffset: doc.anchorOffset,
        focusNode: doc.focusNode,
        focusOffset: doc.focusOffset
      }), lastSelection && shallowEqual(lastSelection, doc) || (lastSelection = doc, doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect"), 0 < doc.length && (nativeEvent = new SyntheticEvent(
        "onSelect",
        "select",
        null,
        nativeEvent,
        nativeEventTarget
      ), dispatchQueue.push({ event: nativeEvent, listeners: doc }), nativeEvent.target = activeElement)));
    }
    function makePrefixMap(styleProp, eventName) {
      var prefixes = {};
      prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
      prefixes["Webkit" + styleProp] = "webkit" + eventName;
      prefixes["Moz" + styleProp] = "moz" + eventName;
      return prefixes;
    }
    var vendorPrefixes = {
      animationend: makePrefixMap("Animation", "AnimationEnd"),
      animationiteration: makePrefixMap("Animation", "AnimationIteration"),
      animationstart: makePrefixMap("Animation", "AnimationStart"),
      transitionrun: makePrefixMap("Transition", "TransitionRun"),
      transitionstart: makePrefixMap("Transition", "TransitionStart"),
      transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
      transitionend: makePrefixMap("Transition", "TransitionEnd")
    };
    var prefixedEventNames = {};
    var style = {};
    canUseDOM && (style = document.createElement("div").style, "AnimationEvent" in window || (delete vendorPrefixes.animationend.animation, delete vendorPrefixes.animationiteration.animation, delete vendorPrefixes.animationstart.animation), "TransitionEvent" in window || delete vendorPrefixes.transitionend.transition);
    function getVendorPrefixedEventName(eventName) {
      if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
      if (!vendorPrefixes[eventName]) return eventName;
      var prefixMap = vendorPrefixes[eventName], styleProp;
      for (styleProp in prefixMap)
        if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
          return prefixedEventNames[eventName] = prefixMap[styleProp];
      return eventName;
    }
    var ANIMATION_END = getVendorPrefixedEventName("animationend");
    var ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration");
    var ANIMATION_START = getVendorPrefixedEventName("animationstart");
    var TRANSITION_RUN = getVendorPrefixedEventName("transitionrun");
    var TRANSITION_START = getVendorPrefixedEventName("transitionstart");
    var TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel");
    var TRANSITION_END = getVendorPrefixedEventName("transitionend");
    var topLevelEventsToReactNames = /* @__PURE__ */ new Map();
    var simpleEventPluginEvents = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    simpleEventPluginEvents.push("scrollEnd");
    function registerSimpleEvent(domEventName, reactName) {
      topLevelEventsToReactNames.set(domEventName, reactName);
      registerTwoPhaseEvent(reactName, [domEventName]);
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    var concurrentQueues = [];
    var concurrentQueuesIndex = 0;
    var concurrentlyUpdatedLanes = 0;
    function finishQueueingConcurrentUpdates() {
      for (var endIndex = concurrentQueuesIndex, i = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i < endIndex; ) {
        var fiber = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var queue = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var update = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var lane = concurrentQueues[i];
        concurrentQueues[i++] = null;
        if (null !== queue && null !== update) {
          var pending = queue.pending;
          null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
          queue.pending = update;
        }
        0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
      }
    }
    function enqueueUpdate$1(fiber, queue, update, lane) {
      concurrentQueues[concurrentQueuesIndex++] = fiber;
      concurrentQueues[concurrentQueuesIndex++] = queue;
      concurrentQueues[concurrentQueuesIndex++] = update;
      concurrentQueues[concurrentQueuesIndex++] = lane;
      concurrentlyUpdatedLanes |= lane;
      fiber.lanes |= lane;
      fiber = fiber.alternate;
      null !== fiber && (fiber.lanes |= lane);
    }
    function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
      enqueueUpdate$1(fiber, queue, update, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function enqueueConcurrentRenderForLane(fiber, lane) {
      enqueueUpdate$1(fiber, null, null, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
      sourceFiber.lanes |= lane;
      var alternate = sourceFiber.alternate;
      null !== alternate && (alternate.lanes |= lane);
      for (var isHidden = false, parent = sourceFiber.return; null !== parent; )
        parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = true)), sourceFiber = parent, parent = parent.return;
      return 3 === sourceFiber.tag ? (parent = sourceFiber.stateNode, isHidden && null !== update && (isHidden = 31 - clz32(lane), sourceFiber = parent.hiddenUpdates, alternate = sourceFiber[isHidden], null === alternate ? sourceFiber[isHidden] = [update] : alternate.push(update), update.lane = lane | 536870912), parent) : null;
    }
    function getRootForUpdatedFiber(sourceFiber) {
      if (50 < nestedUpdateCount)
        throw nestedUpdateCount = 0, rootWithNestedUpdates = null, Error(formatProdErrorMessage(185));
      for (var parent = sourceFiber.return; null !== parent; )
        sourceFiber = parent, parent = sourceFiber.return;
      return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
    }
    var emptyContextObject = {};
    function FiberNode(tag, pendingProps, key, mode) {
      this.tag = tag;
      this.key = key;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.refCleanup = this.ref = null;
      this.pendingProps = pendingProps;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = mode;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function createFiberImplClass(tag, pendingProps, key, mode) {
      return new FiberNode(tag, pendingProps, key, mode);
    }
    function shouldConstruct(Component) {
      Component = Component.prototype;
      return !(!Component || !Component.isReactComponent);
    }
    function createWorkInProgress(current, pendingProps) {
      var workInProgress2 = current.alternate;
      null === workInProgress2 ? (workInProgress2 = createFiberImplClass(
        current.tag,
        pendingProps,
        current.key,
        current.mode
      ), workInProgress2.elementType = current.elementType, workInProgress2.type = current.type, workInProgress2.stateNode = current.stateNode, workInProgress2.alternate = current, current.alternate = workInProgress2) : (workInProgress2.pendingProps = pendingProps, workInProgress2.type = current.type, workInProgress2.flags = 0, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null);
      workInProgress2.flags = current.flags & 65011712;
      workInProgress2.childLanes = current.childLanes;
      workInProgress2.lanes = current.lanes;
      workInProgress2.child = current.child;
      workInProgress2.memoizedProps = current.memoizedProps;
      workInProgress2.memoizedState = current.memoizedState;
      workInProgress2.updateQueue = current.updateQueue;
      pendingProps = current.dependencies;
      workInProgress2.dependencies = null === pendingProps ? null : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
      workInProgress2.sibling = current.sibling;
      workInProgress2.index = current.index;
      workInProgress2.ref = current.ref;
      workInProgress2.refCleanup = current.refCleanup;
      return workInProgress2;
    }
    function resetWorkInProgress(workInProgress2, renderLanes2) {
      workInProgress2.flags &= 65011714;
      var current = workInProgress2.alternate;
      null === current ? (workInProgress2.childLanes = 0, workInProgress2.lanes = renderLanes2, workInProgress2.child = null, workInProgress2.subtreeFlags = 0, workInProgress2.memoizedProps = null, workInProgress2.memoizedState = null, workInProgress2.updateQueue = null, workInProgress2.dependencies = null, workInProgress2.stateNode = null) : (workInProgress2.childLanes = current.childLanes, workInProgress2.lanes = current.lanes, workInProgress2.child = current.child, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null, workInProgress2.memoizedProps = current.memoizedProps, workInProgress2.memoizedState = current.memoizedState, workInProgress2.updateQueue = current.updateQueue, workInProgress2.type = current.type, renderLanes2 = current.dependencies, workInProgress2.dependencies = null === renderLanes2 ? null : {
        lanes: renderLanes2.lanes,
        firstContext: renderLanes2.firstContext
      });
      return workInProgress2;
    }
    function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
      var fiberTag = 0;
      owner = type;
      if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
      else if ("string" === typeof type)
        fiberTag = isHostHoistableType(
          type,
          pendingProps,
          contextStackCursor.current
        ) ? 26 : "html" === type || "head" === type || "body" === type ? 27 : 5;
      else
        a: switch (type) {
          case REACT_ACTIVITY_TYPE:
            return type = createFiberImplClass(31, pendingProps, key, mode), type.elementType = REACT_ACTIVITY_TYPE, type.lanes = lanes, type;
          case REACT_FRAGMENT_TYPE:
            return createFiberFromFragment(pendingProps.children, mode, lanes, key);
          case REACT_STRICT_MODE_TYPE:
            fiberTag = 8;
            mode |= 24;
            break;
          case REACT_PROFILER_TYPE:
            return type = createFiberImplClass(12, pendingProps, key, mode | 2), type.elementType = REACT_PROFILER_TYPE, type.lanes = lanes, type;
          case REACT_SUSPENSE_TYPE:
            return type = createFiberImplClass(13, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_TYPE, type.lanes = lanes, type;
          case REACT_SUSPENSE_LIST_TYPE:
            return type = createFiberImplClass(19, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_LIST_TYPE, type.lanes = lanes, type;
          default:
            if ("object" === typeof type && null !== type)
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  fiberTag = 10;
                  break a;
                case REACT_CONSUMER_TYPE:
                  fiberTag = 9;
                  break a;
                case REACT_FORWARD_REF_TYPE:
                  fiberTag = 11;
                  break a;
                case REACT_MEMO_TYPE:
                  fiberTag = 14;
                  break a;
                case REACT_LAZY_TYPE:
                  fiberTag = 16;
                  owner = null;
                  break a;
              }
            fiberTag = 29;
            pendingProps = Error(
              formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
            );
            owner = null;
        }
      key = createFiberImplClass(fiberTag, pendingProps, key, mode);
      key.elementType = type;
      key.type = owner;
      key.lanes = lanes;
      return key;
    }
    function createFiberFromFragment(elements, mode, lanes, key) {
      elements = createFiberImplClass(7, elements, key, mode);
      elements.lanes = lanes;
      return elements;
    }
    function createFiberFromText(content, mode, lanes) {
      content = createFiberImplClass(6, content, null, mode);
      content.lanes = lanes;
      return content;
    }
    function createFiberFromDehydratedFragment(dehydratedNode) {
      var fiber = createFiberImplClass(18, null, null, 0);
      fiber.stateNode = dehydratedNode;
      return fiber;
    }
    function createFiberFromPortal(portal, mode, lanes) {
      mode = createFiberImplClass(
        4,
        null !== portal.children ? portal.children : [],
        portal.key,
        mode
      );
      mode.lanes = lanes;
      mode.stateNode = {
        containerInfo: portal.containerInfo,
        pendingChildren: null,
        implementation: portal.implementation
      };
      return mode;
    }
    var CapturedStacks = /* @__PURE__ */ new WeakMap();
    function createCapturedValueAtFiber(value, source) {
      if ("object" === typeof value && null !== value) {
        var existing = CapturedStacks.get(value);
        if (void 0 !== existing) return existing;
        source = {
          value,
          source,
          stack: getStackByFiberInDevAndProd(source)
        };
        CapturedStacks.set(value, source);
        return source;
      }
      return {
        value,
        source,
        stack: getStackByFiberInDevAndProd(source)
      };
    }
    var forkStack = [];
    var forkStackIndex = 0;
    var treeForkProvider = null;
    var treeForkCount = 0;
    var idStack = [];
    var idStackIndex = 0;
    var treeContextProvider = null;
    var treeContextId = 1;
    var treeContextOverflow = "";
    function pushTreeFork(workInProgress2, totalChildren) {
      forkStack[forkStackIndex++] = treeForkCount;
      forkStack[forkStackIndex++] = treeForkProvider;
      treeForkProvider = workInProgress2;
      treeForkCount = totalChildren;
    }
    function pushTreeId(workInProgress2, totalChildren, index2) {
      idStack[idStackIndex++] = treeContextId;
      idStack[idStackIndex++] = treeContextOverflow;
      idStack[idStackIndex++] = treeContextProvider;
      treeContextProvider = workInProgress2;
      var baseIdWithLeadingBit = treeContextId;
      workInProgress2 = treeContextOverflow;
      var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
      baseIdWithLeadingBit &= ~(1 << baseLength);
      index2 += 1;
      var length = 32 - clz32(totalChildren) + baseLength;
      if (30 < length) {
        var numberOfOverflowBits = baseLength - baseLength % 5;
        length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
        baseIdWithLeadingBit >>= numberOfOverflowBits;
        baseLength -= numberOfOverflowBits;
        treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index2 << baseLength | baseIdWithLeadingBit;
        treeContextOverflow = length + workInProgress2;
      } else
        treeContextId = 1 << length | index2 << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress2;
    }
    function pushMaterializedTreeId(workInProgress2) {
      null !== workInProgress2.return && (pushTreeFork(workInProgress2, 1), pushTreeId(workInProgress2, 1, 0));
    }
    function popTreeContext(workInProgress2) {
      for (; workInProgress2 === treeForkProvider; )
        treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
      for (; workInProgress2 === treeContextProvider; )
        treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
    }
    function restoreSuspendedTreeContext(workInProgress2, suspendedContext) {
      idStack[idStackIndex++] = treeContextId;
      idStack[idStackIndex++] = treeContextOverflow;
      idStack[idStackIndex++] = treeContextProvider;
      treeContextId = suspendedContext.id;
      treeContextOverflow = suspendedContext.overflow;
      treeContextProvider = workInProgress2;
    }
    var hydrationParentFiber = null;
    var nextHydratableInstance = null;
    var isHydrating = false;
    var hydrationErrors = null;
    var rootOrSingletonContext = false;
    var HydrationMismatchException = Error(formatProdErrorMessage(519));
    function throwOnHydrationMismatch(fiber) {
      var error = Error(
        formatProdErrorMessage(
          418,
          1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML",
          ""
        )
      );
      queueHydrationError(createCapturedValueAtFiber(error, fiber));
      throw HydrationMismatchException;
    }
    function prepareToHydrateHostInstance(fiber) {
      var instance = fiber.stateNode, type = fiber.type, props = fiber.memoizedProps;
      instance[internalInstanceKey] = fiber;
      instance[internalPropsKey] = props;
      switch (type) {
        case "dialog":
          listenToNonDelegatedEvent("cancel", instance);
          listenToNonDelegatedEvent("close", instance);
          break;
        case "iframe":
        case "object":
        case "embed":
          listenToNonDelegatedEvent("load", instance);
          break;
        case "video":
        case "audio":
          for (type = 0; type < mediaEventTypes.length; type++)
            listenToNonDelegatedEvent(mediaEventTypes[type], instance);
          break;
        case "source":
          listenToNonDelegatedEvent("error", instance);
          break;
        case "img":
        case "image":
        case "link":
          listenToNonDelegatedEvent("error", instance);
          listenToNonDelegatedEvent("load", instance);
          break;
        case "details":
          listenToNonDelegatedEvent("toggle", instance);
          break;
        case "input":
          listenToNonDelegatedEvent("invalid", instance);
          initInput(
            instance,
            props.value,
            props.defaultValue,
            props.checked,
            props.defaultChecked,
            props.type,
            props.name,
            true
          );
          break;
        case "select":
          listenToNonDelegatedEvent("invalid", instance);
          break;
        case "textarea":
          listenToNonDelegatedEvent("invalid", instance), initTextarea(instance, props.value, props.defaultValue, props.children);
      }
      type = props.children;
      "string" !== typeof type && "number" !== typeof type && "bigint" !== typeof type || instance.textContent === "" + type || true === props.suppressHydrationWarning || checkForUnmatchedText(instance.textContent, type) ? (null != props.popover && (listenToNonDelegatedEvent("beforetoggle", instance), listenToNonDelegatedEvent("toggle", instance)), null != props.onScroll && listenToNonDelegatedEvent("scroll", instance), null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", instance), null != props.onClick && (instance.onclick = noop$1), instance = true) : instance = false;
      instance || throwOnHydrationMismatch(fiber, true);
    }
    function popToNextHostParent(fiber) {
      for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
        switch (hydrationParentFiber.tag) {
          case 5:
          case 31:
          case 13:
            rootOrSingletonContext = false;
            return;
          case 27:
          case 3:
            rootOrSingletonContext = true;
            return;
          default:
            hydrationParentFiber = hydrationParentFiber.return;
        }
    }
    function popHydrationState(fiber) {
      if (fiber !== hydrationParentFiber) return false;
      if (!isHydrating) return popToNextHostParent(fiber), isHydrating = true, false;
      var tag = fiber.tag, JSCompiler_temp;
      if (JSCompiler_temp = 3 !== tag && 27 !== tag) {
        if (JSCompiler_temp = 5 === tag)
          JSCompiler_temp = fiber.type, JSCompiler_temp = !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) || shouldSetTextContent(fiber.type, fiber.memoizedProps);
        JSCompiler_temp = !JSCompiler_temp;
      }
      JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
      popToNextHostParent(fiber);
      if (13 === tag) {
        fiber = fiber.memoizedState;
        fiber = null !== fiber ? fiber.dehydrated : null;
        if (!fiber) throw Error(formatProdErrorMessage(317));
        nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
      } else if (31 === tag) {
        fiber = fiber.memoizedState;
        fiber = null !== fiber ? fiber.dehydrated : null;
        if (!fiber) throw Error(formatProdErrorMessage(317));
        nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
      } else
        27 === tag ? (tag = nextHydratableInstance, isSingletonScope(fiber.type) ? (fiber = previousHydratableOnEnteringScopedSingleton, previousHydratableOnEnteringScopedSingleton = null, nextHydratableInstance = fiber) : nextHydratableInstance = tag) : nextHydratableInstance = hydrationParentFiber ? getNextHydratable(fiber.stateNode.nextSibling) : null;
      return true;
    }
    function resetHydrationState() {
      nextHydratableInstance = hydrationParentFiber = null;
      isHydrating = false;
    }
    function upgradeHydrationErrorsToRecoverable() {
      var queuedErrors = hydrationErrors;
      null !== queuedErrors && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = queuedErrors : workInProgressRootRecoverableErrors.push.apply(
        workInProgressRootRecoverableErrors,
        queuedErrors
      ), hydrationErrors = null);
      return queuedErrors;
    }
    function queueHydrationError(error) {
      null === hydrationErrors ? hydrationErrors = [error] : hydrationErrors.push(error);
    }
    var valueCursor = createCursor(null);
    var currentlyRenderingFiber$1 = null;
    var lastContextDependency = null;
    function pushProvider(providerFiber, context, nextValue) {
      push(valueCursor, context._currentValue);
      context._currentValue = nextValue;
    }
    function popProvider(context) {
      context._currentValue = valueCursor.current;
      pop(valueCursor);
    }
    function scheduleContextWorkOnParentPath(parent, renderLanes2, propagationRoot) {
      for (; null !== parent; ) {
        var alternate = parent.alternate;
        (parent.childLanes & renderLanes2) !== renderLanes2 ? (parent.childLanes |= renderLanes2, null !== alternate && (alternate.childLanes |= renderLanes2)) : null !== alternate && (alternate.childLanes & renderLanes2) !== renderLanes2 && (alternate.childLanes |= renderLanes2);
        if (parent === propagationRoot) break;
        parent = parent.return;
      }
    }
    function propagateContextChanges(workInProgress2, contexts, renderLanes2, forcePropagateEntireTree) {
      var fiber = workInProgress2.child;
      null !== fiber && (fiber.return = workInProgress2);
      for (; null !== fiber; ) {
        var list = fiber.dependencies;
        if (null !== list) {
          var nextFiber = fiber.child;
          list = list.firstContext;
          a: for (; null !== list; ) {
            var dependency = list;
            list = fiber;
            for (var i = 0; i < contexts.length; i++)
              if (dependency.context === contexts[i]) {
                list.lanes |= renderLanes2;
                dependency = list.alternate;
                null !== dependency && (dependency.lanes |= renderLanes2);
                scheduleContextWorkOnParentPath(
                  list.return,
                  renderLanes2,
                  workInProgress2
                );
                forcePropagateEntireTree || (nextFiber = null);
                break a;
              }
            list = dependency.next;
          }
        } else if (18 === fiber.tag) {
          nextFiber = fiber.return;
          if (null === nextFiber) throw Error(formatProdErrorMessage(341));
          nextFiber.lanes |= renderLanes2;
          list = nextFiber.alternate;
          null !== list && (list.lanes |= renderLanes2);
          scheduleContextWorkOnParentPath(nextFiber, renderLanes2, workInProgress2);
          nextFiber = null;
        } else nextFiber = fiber.child;
        if (null !== nextFiber) nextFiber.return = fiber;
        else
          for (nextFiber = fiber; null !== nextFiber; ) {
            if (nextFiber === workInProgress2) {
              nextFiber = null;
              break;
            }
            fiber = nextFiber.sibling;
            if (null !== fiber) {
              fiber.return = nextFiber.return;
              nextFiber = fiber;
              break;
            }
            nextFiber = nextFiber.return;
          }
        fiber = nextFiber;
      }
    }
    function propagateParentContextChanges(current, workInProgress2, renderLanes2, forcePropagateEntireTree) {
      current = null;
      for (var parent = workInProgress2, isInsidePropagationBailout = false; null !== parent; ) {
        if (!isInsidePropagationBailout) {
          if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = true;
          else if (0 !== (parent.flags & 262144)) break;
        }
        if (10 === parent.tag) {
          var currentParent = parent.alternate;
          if (null === currentParent) throw Error(formatProdErrorMessage(387));
          currentParent = currentParent.memoizedProps;
          if (null !== currentParent) {
            var context = parent.type;
            objectIs(parent.pendingProps.value, currentParent.value) || (null !== current ? current.push(context) : current = [context]);
          }
        } else if (parent === hostTransitionProviderCursor.current) {
          currentParent = parent.alternate;
          if (null === currentParent) throw Error(formatProdErrorMessage(387));
          currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current ? current.push(HostTransitionContext) : current = [HostTransitionContext]);
        }
        parent = parent.return;
      }
      null !== current && propagateContextChanges(
        workInProgress2,
        current,
        renderLanes2,
        forcePropagateEntireTree
      );
      workInProgress2.flags |= 262144;
    }
    function checkIfContextChanged(currentDependencies) {
      for (currentDependencies = currentDependencies.firstContext; null !== currentDependencies; ) {
        if (!objectIs(
          currentDependencies.context._currentValue,
          currentDependencies.memoizedValue
        ))
          return true;
        currentDependencies = currentDependencies.next;
      }
      return false;
    }
    function prepareToReadContext(workInProgress2) {
      currentlyRenderingFiber$1 = workInProgress2;
      lastContextDependency = null;
      workInProgress2 = workInProgress2.dependencies;
      null !== workInProgress2 && (workInProgress2.firstContext = null);
    }
    function readContext(context) {
      return readContextForConsumer(currentlyRenderingFiber$1, context);
    }
    function readContextDuringReconciliation(consumer, context) {
      null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
      return readContextForConsumer(consumer, context);
    }
    function readContextForConsumer(consumer, context) {
      var value = context._currentValue;
      context = { context, memoizedValue: value, next: null };
      if (null === lastContextDependency) {
        if (null === consumer) throw Error(formatProdErrorMessage(308));
        lastContextDependency = context;
        consumer.dependencies = { lanes: 0, firstContext: context };
        consumer.flags |= 524288;
      } else lastContextDependency = lastContextDependency.next = context;
      return value;
    }
    var AbortControllerLocal = "undefined" !== typeof AbortController ? AbortController : function() {
      var listeners = [], signal = this.signal = {
        aborted: false,
        addEventListener: function(type, listener) {
          listeners.push(listener);
        }
      };
      this.abort = function() {
        signal.aborted = true;
        listeners.forEach(function(listener) {
          return listener();
        });
      };
    };
    var scheduleCallback$2 = Scheduler.unstable_scheduleCallback;
    var NormalPriority = Scheduler.unstable_NormalPriority;
    var CacheContext = {
      $$typeof: REACT_CONTEXT_TYPE,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function createCache() {
      return {
        controller: new AbortControllerLocal(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function releaseCache(cache) {
      cache.refCount--;
      0 === cache.refCount && scheduleCallback$2(NormalPriority, function() {
        cache.controller.abort();
      });
    }
    var currentEntangledListeners = null;
    var currentEntangledPendingCount = 0;
    var currentEntangledLane = 0;
    var currentEntangledActionThenable = null;
    function entangleAsyncAction(transition, thenable) {
      if (null === currentEntangledListeners) {
        var entangledListeners = currentEntangledListeners = [];
        currentEntangledPendingCount = 0;
        currentEntangledLane = requestTransitionLane();
        currentEntangledActionThenable = {
          status: "pending",
          value: void 0,
          then: function(resolve) {
            entangledListeners.push(resolve);
          }
        };
      }
      currentEntangledPendingCount++;
      thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
      return thenable;
    }
    function pingEngtangledActionScope() {
      if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
        null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
        var listeners = currentEntangledListeners;
        currentEntangledListeners = null;
        currentEntangledLane = 0;
        currentEntangledActionThenable = null;
        for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
      }
    }
    function chainThenableValue(thenable, result) {
      var listeners = [], thenableWithOverride = {
        status: "pending",
        value: null,
        reason: null,
        then: function(resolve) {
          listeners.push(resolve);
        }
      };
      thenable.then(
        function() {
          thenableWithOverride.status = "fulfilled";
          thenableWithOverride.value = result;
          for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
        },
        function(error) {
          thenableWithOverride.status = "rejected";
          thenableWithOverride.reason = error;
          for (error = 0; error < listeners.length; error++)
            (0, listeners[error])(void 0);
        }
      );
      return thenableWithOverride;
    }
    var prevOnStartTransitionFinish = ReactSharedInternals.S;
    ReactSharedInternals.S = function(transition, returnValue) {
      globalMostRecentTransitionTime = now();
      "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && entangleAsyncAction(transition, returnValue);
      null !== prevOnStartTransitionFinish && prevOnStartTransitionFinish(transition, returnValue);
    };
    var resumedCache = createCursor(null);
    function peekCacheFromPool() {
      var cacheResumedFromPreviousRender = resumedCache.current;
      return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
    }
    function pushTransition(offscreenWorkInProgress, prevCachePool) {
      null === prevCachePool ? push(resumedCache, resumedCache.current) : push(resumedCache, prevCachePool.pool);
    }
    function getSuspendedCache() {
      var cacheFromPool = peekCacheFromPool();
      return null === cacheFromPool ? null : { parent: CacheContext._currentValue, pool: cacheFromPool };
    }
    var SuspenseException = Error(formatProdErrorMessage(460));
    var SuspenseyCommitException = Error(formatProdErrorMessage(474));
    var SuspenseActionException = Error(formatProdErrorMessage(542));
    var noopSuspenseyCommitThenable = { then: function() {
    } };
    function isThenableResolved(thenable) {
      thenable = thenable.status;
      return "fulfilled" === thenable || "rejected" === thenable;
    }
    function trackUsedThenable(thenableState2, thenable, index2) {
      index2 = thenableState2[index2];
      void 0 === index2 ? thenableState2.push(thenable) : index2 !== thenable && (thenable.then(noop$1, noop$1), thenable = index2);
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
        default:
          if ("string" === typeof thenable.status) thenable.then(noop$1, noop$1);
          else {
            thenableState2 = workInProgressRoot;
            if (null !== thenableState2 && 100 < thenableState2.shellSuspendCounter)
              throw Error(formatProdErrorMessage(482));
            thenableState2 = thenable;
            thenableState2.status = "pending";
            thenableState2.then(
              function(fulfilledValue) {
                if ("pending" === thenable.status) {
                  var fulfilledThenable = thenable;
                  fulfilledThenable.status = "fulfilled";
                  fulfilledThenable.value = fulfilledValue;
                }
              },
              function(error) {
                if ("pending" === thenable.status) {
                  var rejectedThenable = thenable;
                  rejectedThenable.status = "rejected";
                  rejectedThenable.reason = error;
                }
              }
            );
          }
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
          }
          suspendedThenable = thenable;
          throw SuspenseException;
      }
    }
    function resolveLazy(lazyType) {
      try {
        var init = lazyType._init;
        return init(lazyType._payload);
      } catch (x2) {
        if (null !== x2 && "object" === typeof x2 && "function" === typeof x2.then)
          throw suspendedThenable = x2, SuspenseException;
        throw x2;
      }
    }
    var suspendedThenable = null;
    function getSuspendedThenable() {
      if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
      var thenable = suspendedThenable;
      suspendedThenable = null;
      return thenable;
    }
    function checkIfUseWrappedInAsyncCatch(rejectedReason) {
      if (rejectedReason === SuspenseException || rejectedReason === SuspenseActionException)
        throw Error(formatProdErrorMessage(483));
    }
    var thenableState$1 = null;
    var thenableIndexCounter$1 = 0;
    function unwrapThenable(thenable) {
      var index2 = thenableIndexCounter$1;
      thenableIndexCounter$1 += 1;
      null === thenableState$1 && (thenableState$1 = []);
      return trackUsedThenable(thenableState$1, thenable, index2);
    }
    function coerceRef(workInProgress2, element) {
      element = element.props.ref;
      workInProgress2.ref = void 0 !== element ? element : null;
    }
    function throwOnInvalidObjectTypeImpl(returnFiber, newChild) {
      if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
        throw Error(formatProdErrorMessage(525));
      returnFiber = Object.prototype.toString.call(newChild);
      throw Error(
        formatProdErrorMessage(
          31,
          "[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber
        )
      );
    }
    function createChildReconciler(shouldTrackSideEffects) {
      function deleteChild(returnFiber, childToDelete) {
        if (shouldTrackSideEffects) {
          var deletions = returnFiber.deletions;
          null === deletions ? (returnFiber.deletions = [childToDelete], returnFiber.flags |= 16) : deletions.push(childToDelete);
        }
      }
      function deleteRemainingChildren(returnFiber, currentFirstChild) {
        if (!shouldTrackSideEffects) return null;
        for (; null !== currentFirstChild; )
          deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
        return null;
      }
      function mapRemainingChildren(currentFirstChild) {
        for (var existingChildren = /* @__PURE__ */ new Map(); null !== currentFirstChild; )
          null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
        return existingChildren;
      }
      function useFiber(fiber, pendingProps) {
        fiber = createWorkInProgress(fiber, pendingProps);
        fiber.index = 0;
        fiber.sibling = null;
        return fiber;
      }
      function placeChild(newFiber, lastPlacedIndex, newIndex) {
        newFiber.index = newIndex;
        if (!shouldTrackSideEffects)
          return newFiber.flags |= 1048576, lastPlacedIndex;
        newIndex = newFiber.alternate;
        if (null !== newIndex)
          return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 67108866, lastPlacedIndex) : newIndex;
        newFiber.flags |= 67108866;
        return lastPlacedIndex;
      }
      function placeSingleChild(newFiber) {
        shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 67108866);
        return newFiber;
      }
      function updateTextNode(returnFiber, current, textContent, lanes) {
        if (null === current || 6 !== current.tag)
          return current = createFiberFromText(textContent, returnFiber.mode, lanes), current.return = returnFiber, current;
        current = useFiber(current, textContent);
        current.return = returnFiber;
        return current;
      }
      function updateElement(returnFiber, current, element, lanes) {
        var elementType = element.type;
        if (elementType === REACT_FRAGMENT_TYPE)
          return updateFragment(
            returnFiber,
            current,
            element.props.children,
            lanes,
            element.key
          );
        if (null !== current && (current.elementType === elementType || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current.type))
          return current = useFiber(current, element.props), coerceRef(current, element), current.return = returnFiber, current;
        current = createFiberFromTypeAndProps(
          element.type,
          element.key,
          element.props,
          null,
          returnFiber.mode,
          lanes
        );
        coerceRef(current, element);
        current.return = returnFiber;
        return current;
      }
      function updatePortal(returnFiber, current, portal, lanes) {
        if (null === current || 4 !== current.tag || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation)
          return current = createFiberFromPortal(portal, returnFiber.mode, lanes), current.return = returnFiber, current;
        current = useFiber(current, portal.children || []);
        current.return = returnFiber;
        return current;
      }
      function updateFragment(returnFiber, current, fragment, lanes, key) {
        if (null === current || 7 !== current.tag)
          return current = createFiberFromFragment(
            fragment,
            returnFiber.mode,
            lanes,
            key
          ), current.return = returnFiber, current;
        current = useFiber(current, fragment);
        current.return = returnFiber;
        return current;
      }
      function createChild(returnFiber, newChild, lanes) {
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return newChild = createFiberFromText(
            "" + newChild,
            returnFiber.mode,
            lanes
          ), newChild.return = returnFiber, newChild;
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return lanes = createFiberFromTypeAndProps(
                newChild.type,
                newChild.key,
                newChild.props,
                null,
                returnFiber.mode,
                lanes
              ), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes;
            case REACT_PORTAL_TYPE:
              return newChild = createFiberFromPortal(
                newChild,
                returnFiber.mode,
                lanes
              ), newChild.return = returnFiber, newChild;
            case REACT_LAZY_TYPE:
              return newChild = resolveLazy(newChild), createChild(returnFiber, newChild, lanes);
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return newChild = createFiberFromFragment(
              newChild,
              returnFiber.mode,
              lanes,
              null
            ), newChild.return = returnFiber, newChild;
          if ("function" === typeof newChild.then)
            return createChild(returnFiber, unwrapThenable(newChild), lanes);
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return createChild(
              returnFiber,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectTypeImpl(returnFiber, newChild);
        }
        return null;
      }
      function updateSlot(returnFiber, oldFiber, newChild, lanes) {
        var key = null !== oldFiber ? oldFiber.key : null;
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return newChild.key === key ? updateElement(returnFiber, oldFiber, newChild, lanes) : null;
            case REACT_PORTAL_TYPE:
              return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
            case REACT_LAZY_TYPE:
              return newChild = resolveLazy(newChild), updateSlot(returnFiber, oldFiber, newChild, lanes);
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return null !== key ? null : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
          if ("function" === typeof newChild.then)
            return updateSlot(
              returnFiber,
              oldFiber,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return updateSlot(
              returnFiber,
              oldFiber,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectTypeImpl(returnFiber, newChild);
        }
        return null;
      }
      function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return existingChildren = existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null, updateElement(returnFiber, existingChildren, newChild, lanes);
            case REACT_PORTAL_TYPE:
              return existingChildren = existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
            case REACT_LAZY_TYPE:
              return newChild = resolveLazy(newChild), updateFromMap(
                existingChildren,
                returnFiber,
                newIdx,
                newChild,
                lanes
              );
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return existingChildren = existingChildren.get(newIdx) || null, updateFragment(returnFiber, existingChildren, newChild, lanes, null);
          if ("function" === typeof newChild.then)
            return updateFromMap(
              existingChildren,
              returnFiber,
              newIdx,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return updateFromMap(
              existingChildren,
              returnFiber,
              newIdx,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectTypeImpl(returnFiber, newChild);
        }
        return null;
      }
      function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
        for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++) {
          oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
          var newFiber = updateSlot(
            returnFiber,
            oldFiber,
            newChildren[newIdx],
            lanes
          );
          if (null === newFiber) {
            null === oldFiber && (oldFiber = nextOldFiber);
            break;
          }
          shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
          currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
          null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }
        if (newIdx === newChildren.length)
          return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
        if (null === oldFiber) {
          for (; newIdx < newChildren.length; newIdx++)
            oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            ), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        for (oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++)
          nextOldFiber = updateFromMap(
            oldFiber,
            returnFiber,
            newIdx,
            newChildren[newIdx],
            lanes
          ), null !== nextOldFiber && (shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(
            null === nextOldFiber.key ? newIdx : nextOldFiber.key
          ), currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          ), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
        shouldTrackSideEffects && oldFiber.forEach(function(child) {
          return deleteChild(returnFiber, child);
        });
        isHydrating && pushTreeFork(returnFiber, newIdx);
        return resultingFirstChild;
      }
      function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
        if (null == newChildren) throw Error(formatProdErrorMessage(151));
        for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()) {
          oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
          var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
          if (null === newFiber) {
            null === oldFiber && (oldFiber = nextOldFiber);
            break;
          }
          shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
          currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
          null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }
        if (step.done)
          return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
        if (null === oldFiber) {
          for (; !step.done; newIdx++, step = newChildren.next())
            step = createChild(returnFiber, step.value, lanes), null !== step && (currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        for (oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next())
          step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes), null !== step && (shouldTrackSideEffects && null !== step.alternate && oldFiber.delete(null === step.key ? newIdx : step.key), currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
        shouldTrackSideEffects && oldFiber.forEach(function(child) {
          return deleteChild(returnFiber, child);
        });
        isHydrating && pushTreeFork(returnFiber, newIdx);
        return resultingFirstChild;
      }
      function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
        "object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (newChild = newChild.props.children);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              a: {
                for (var key = newChild.key; null !== currentFirstChild; ) {
                  if (currentFirstChild.key === key) {
                    key = newChild.type;
                    if (key === REACT_FRAGMENT_TYPE) {
                      if (7 === currentFirstChild.tag) {
                        deleteRemainingChildren(
                          returnFiber,
                          currentFirstChild.sibling
                        );
                        lanes = useFiber(
                          currentFirstChild,
                          newChild.props.children
                        );
                        lanes.return = returnFiber;
                        returnFiber = lanes;
                        break a;
                      }
                    } else if (currentFirstChild.elementType === key || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && resolveLazy(key) === currentFirstChild.type) {
                      deleteRemainingChildren(
                        returnFiber,
                        currentFirstChild.sibling
                      );
                      lanes = useFiber(currentFirstChild, newChild.props);
                      coerceRef(lanes, newChild);
                      lanes.return = returnFiber;
                      returnFiber = lanes;
                      break a;
                    }
                    deleteRemainingChildren(returnFiber, currentFirstChild);
                    break;
                  } else deleteChild(returnFiber, currentFirstChild);
                  currentFirstChild = currentFirstChild.sibling;
                }
                newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(
                  newChild.props.children,
                  returnFiber.mode,
                  lanes,
                  newChild.key
                ), lanes.return = returnFiber, returnFiber = lanes) : (lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                ), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = lanes);
              }
              return placeSingleChild(returnFiber);
            case REACT_PORTAL_TYPE:
              a: {
                for (key = newChild.key; null !== currentFirstChild; ) {
                  if (currentFirstChild.key === key)
                    if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === newChild.containerInfo && currentFirstChild.stateNode.implementation === newChild.implementation) {
                      deleteRemainingChildren(
                        returnFiber,
                        currentFirstChild.sibling
                      );
                      lanes = useFiber(currentFirstChild, newChild.children || []);
                      lanes.return = returnFiber;
                      returnFiber = lanes;
                      break a;
                    } else {
                      deleteRemainingChildren(returnFiber, currentFirstChild);
                      break;
                    }
                  else deleteChild(returnFiber, currentFirstChild);
                  currentFirstChild = currentFirstChild.sibling;
                }
                lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
                lanes.return = returnFiber;
                returnFiber = lanes;
              }
              return placeSingleChild(returnFiber);
            case REACT_LAZY_TYPE:
              return newChild = resolveLazy(newChild), reconcileChildFibersImpl(
                returnFiber,
                currentFirstChild,
                newChild,
                lanes
              );
          }
          if (isArrayImpl(newChild))
            return reconcileChildrenArray(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            );
          if (getIteratorFn(newChild)) {
            key = getIteratorFn(newChild);
            if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
            newChild = key.call(newChild);
            return reconcileChildrenIterator(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            );
          }
          if ("function" === typeof newChild.then)
            return reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectTypeImpl(returnFiber, newChild);
        }
        return "string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild ? (newChild = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling), lanes = useFiber(currentFirstChild, newChild), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(newChild, returnFiber.mode, lanes), lanes.return = returnFiber, returnFiber = lanes), placeSingleChild(returnFiber)) : deleteRemainingChildren(returnFiber, currentFirstChild);
      }
      return function(returnFiber, currentFirstChild, newChild, lanes) {
        try {
          thenableIndexCounter$1 = 0;
          var firstChildFiber = reconcileChildFibersImpl(
            returnFiber,
            currentFirstChild,
            newChild,
            lanes
          );
          thenableState$1 = null;
          return firstChildFiber;
        } catch (x2) {
          if (x2 === SuspenseException || x2 === SuspenseActionException) throw x2;
          var fiber = createFiberImplClass(29, x2, null, returnFiber.mode);
          fiber.lanes = lanes;
          fiber.return = returnFiber;
          return fiber;
        } finally {
        }
      };
    }
    var reconcileChildFibers = createChildReconciler(true);
    var mountChildFibers = createChildReconciler(false);
    var hasForceUpdate = false;
    function initializeUpdateQueue(fiber) {
      fiber.updateQueue = {
        baseState: fiber.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function cloneUpdateQueue(current, workInProgress2) {
      current = current.updateQueue;
      workInProgress2.updateQueue === current && (workInProgress2.updateQueue = {
        baseState: current.baseState,
        firstBaseUpdate: current.firstBaseUpdate,
        lastBaseUpdate: current.lastBaseUpdate,
        shared: current.shared,
        callbacks: null
      });
    }
    function createUpdate(lane) {
      return { lane, tag: 0, payload: null, callback: null, next: null };
    }
    function enqueueUpdate(fiber, update, lane) {
      var updateQueue = fiber.updateQueue;
      if (null === updateQueue) return null;
      updateQueue = updateQueue.shared;
      if (0 !== (executionContext & 2)) {
        var pending = updateQueue.pending;
        null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
        updateQueue.pending = update;
        update = getRootForUpdatedFiber(fiber);
        markUpdateLaneFromFiberToRoot(fiber, null, lane);
        return update;
      }
      enqueueUpdate$1(fiber, updateQueue, update, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function entangleTransitions(root3, fiber, lane) {
      fiber = fiber.updateQueue;
      if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194048))) {
        var queueLanes = fiber.lanes;
        queueLanes &= root3.pendingLanes;
        lane |= queueLanes;
        fiber.lanes = lane;
        markRootEntangled(root3, lane);
      }
    }
    function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
      var queue = workInProgress2.updateQueue, current = workInProgress2.alternate;
      if (null !== current && (current = current.updateQueue, queue === current)) {
        var newFirst = null, newLast = null;
        queue = queue.firstBaseUpdate;
        if (null !== queue) {
          do {
            var clone = {
              lane: queue.lane,
              tag: queue.tag,
              payload: queue.payload,
              callback: null,
              next: null
            };
            null === newLast ? newFirst = newLast = clone : newLast = newLast.next = clone;
            queue = queue.next;
          } while (null !== queue);
          null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
        } else newFirst = newLast = capturedUpdate;
        queue = {
          baseState: current.baseState,
          firstBaseUpdate: newFirst,
          lastBaseUpdate: newLast,
          shared: current.shared,
          callbacks: current.callbacks
        };
        workInProgress2.updateQueue = queue;
        return;
      }
      workInProgress2 = queue.lastBaseUpdate;
      null === workInProgress2 ? queue.firstBaseUpdate = capturedUpdate : workInProgress2.next = capturedUpdate;
      queue.lastBaseUpdate = capturedUpdate;
    }
    var didReadFromEntangledAsyncAction = false;
    function suspendIfUpdateReadFromEntangledAsyncAction() {
      if (didReadFromEntangledAsyncAction) {
        var entangledActionThenable = currentEntangledActionThenable;
        if (null !== entangledActionThenable) throw entangledActionThenable;
      }
    }
    function processUpdateQueue(workInProgress$jscomp$0, props, instance$jscomp$0, renderLanes2) {
      didReadFromEntangledAsyncAction = false;
      var queue = workInProgress$jscomp$0.updateQueue;
      hasForceUpdate = false;
      var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
      if (null !== pendingQueue) {
        queue.shared.pending = null;
        var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
        lastPendingUpdate.next = null;
        null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
        lastBaseUpdate = lastPendingUpdate;
        var current = workInProgress$jscomp$0.alternate;
        null !== current && (current = current.updateQueue, pendingQueue = current.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current.lastBaseUpdate = lastPendingUpdate));
      }
      if (null !== firstBaseUpdate) {
        var newState = queue.baseState;
        lastBaseUpdate = 0;
        current = firstPendingUpdate = lastPendingUpdate = null;
        pendingQueue = firstBaseUpdate;
        do {
          var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
          if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes2 & updateLane) === updateLane) {
            0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = true);
            null !== current && (current = current.next = {
              lane: 0,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: null,
              next: null
            });
            a: {
              var workInProgress2 = workInProgress$jscomp$0, update = pendingQueue;
              updateLane = props;
              var instance = instance$jscomp$0;
              switch (update.tag) {
                case 1:
                  workInProgress2 = update.payload;
                  if ("function" === typeof workInProgress2) {
                    newState = workInProgress2.call(instance, newState, updateLane);
                    break a;
                  }
                  newState = workInProgress2;
                  break a;
                case 3:
                  workInProgress2.flags = workInProgress2.flags & -65537 | 128;
                case 0:
                  workInProgress2 = update.payload;
                  updateLane = "function" === typeof workInProgress2 ? workInProgress2.call(instance, newState, updateLane) : workInProgress2;
                  if (null === updateLane || void 0 === updateLane) break a;
                  newState = assign({}, newState, updateLane);
                  break a;
                case 2:
                  hasForceUpdate = true;
              }
            }
            updateLane = pendingQueue.callback;
            null !== updateLane && (workInProgress$jscomp$0.flags |= 64, isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [updateLane] : isHiddenUpdate.push(updateLane));
          } else
            isHiddenUpdate = {
              lane: updateLane,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: pendingQueue.callback,
              next: null
            }, null === current ? (firstPendingUpdate = current = isHiddenUpdate, lastPendingUpdate = newState) : current = current.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
          pendingQueue = pendingQueue.next;
          if (null === pendingQueue)
            if (pendingQueue = queue.shared.pending, null === pendingQueue)
              break;
            else
              isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
        } while (1);
        null === current && (lastPendingUpdate = newState);
        queue.baseState = lastPendingUpdate;
        queue.firstBaseUpdate = firstPendingUpdate;
        queue.lastBaseUpdate = current;
        null === firstBaseUpdate && (queue.shared.lanes = 0);
        workInProgressRootSkippedLanes |= lastBaseUpdate;
        workInProgress$jscomp$0.lanes = lastBaseUpdate;
        workInProgress$jscomp$0.memoizedState = newState;
      }
    }
    function callCallback(callback, context) {
      if ("function" !== typeof callback)
        throw Error(formatProdErrorMessage(191, callback));
      callback.call(context);
    }
    function commitCallbacks(updateQueue, context) {
      var callbacks = updateQueue.callbacks;
      if (null !== callbacks)
        for (updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++)
          callCallback(callbacks[updateQueue], context);
    }
    var currentTreeHiddenStackCursor = createCursor(null);
    var prevEntangledRenderLanesCursor = createCursor(0);
    function pushHiddenContext(fiber, context) {
      fiber = entangledRenderLanes;
      push(prevEntangledRenderLanesCursor, fiber);
      push(currentTreeHiddenStackCursor, context);
      entangledRenderLanes = fiber | context.baseLanes;
    }
    function reuseHiddenContextOnStack() {
      push(prevEntangledRenderLanesCursor, entangledRenderLanes);
      push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
    }
    function popHiddenContext() {
      entangledRenderLanes = prevEntangledRenderLanesCursor.current;
      pop(currentTreeHiddenStackCursor);
      pop(prevEntangledRenderLanesCursor);
    }
    var suspenseHandlerStackCursor = createCursor(null);
    var shellBoundary = null;
    function pushPrimaryTreeSuspenseHandler(handler) {
      var current = handler.alternate;
      push(suspenseStackCursor, suspenseStackCursor.current & 1);
      push(suspenseHandlerStackCursor, handler);
      null === shellBoundary && (null === current || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current.memoizedState && (shellBoundary = handler));
    }
    function pushDehydratedActivitySuspenseHandler(fiber) {
      push(suspenseStackCursor, suspenseStackCursor.current);
      push(suspenseHandlerStackCursor, fiber);
      null === shellBoundary && (shellBoundary = fiber);
    }
    function pushOffscreenSuspenseHandler(fiber) {
      22 === fiber.tag ? (push(suspenseStackCursor, suspenseStackCursor.current), push(suspenseHandlerStackCursor, fiber), null === shellBoundary && (shellBoundary = fiber)) : reuseSuspenseHandlerOnStack(fiber);
    }
    function reuseSuspenseHandlerOnStack() {
      push(suspenseStackCursor, suspenseStackCursor.current);
      push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
    }
    function popSuspenseHandler(fiber) {
      pop(suspenseHandlerStackCursor);
      shellBoundary === fiber && (shellBoundary = null);
      pop(suspenseStackCursor);
    }
    var suspenseStackCursor = createCursor(0);
    function findFirstSuspended(row) {
      for (var node = row; null !== node; ) {
        if (13 === node.tag) {
          var state = node.memoizedState;
          if (null !== state && (state = state.dehydrated, null === state || isSuspenseInstancePending(state) || isSuspenseInstanceFallback(state)))
            return node;
        } else if (19 === node.tag && ("forwards" === node.memoizedProps.revealOrder || "backwards" === node.memoizedProps.revealOrder || "unstable_legacy-backwards" === node.memoizedProps.revealOrder || "together" === node.memoizedProps.revealOrder)) {
          if (0 !== (node.flags & 128)) return node;
        } else if (null !== node.child) {
          node.child.return = node;
          node = node.child;
          continue;
        }
        if (node === row) break;
        for (; null === node.sibling; ) {
          if (null === node.return || node.return === row) return null;
          node = node.return;
        }
        node.sibling.return = node.return;
        node = node.sibling;
      }
      return null;
    }
    var renderLanes = 0;
    var currentlyRenderingFiber = null;
    var currentHook = null;
    var workInProgressHook = null;
    var didScheduleRenderPhaseUpdate = false;
    var didScheduleRenderPhaseUpdateDuringThisPass = false;
    var shouldDoubleInvokeUserFnsInHooksDEV = false;
    var localIdCounter = 0;
    var thenableIndexCounter = 0;
    var thenableState = null;
    var globalClientIdCounter = 0;
    function throwInvalidHookError() {
      throw Error(formatProdErrorMessage(321));
    }
    function areHookInputsEqual(nextDeps, prevDeps) {
      if (null === prevDeps) return false;
      for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
        if (!objectIs(nextDeps[i], prevDeps[i])) return false;
      return true;
    }
    function renderWithHooks(current, workInProgress2, Component, props, secondArg, nextRenderLanes) {
      renderLanes = nextRenderLanes;
      currentlyRenderingFiber = workInProgress2;
      workInProgress2.memoizedState = null;
      workInProgress2.updateQueue = null;
      workInProgress2.lanes = 0;
      ReactSharedInternals.H = null === current || null === current.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;
      shouldDoubleInvokeUserFnsInHooksDEV = false;
      nextRenderLanes = Component(props, secondArg);
      shouldDoubleInvokeUserFnsInHooksDEV = false;
      didScheduleRenderPhaseUpdateDuringThisPass && (nextRenderLanes = renderWithHooksAgain(
        workInProgress2,
        Component,
        props,
        secondArg
      ));
      finishRenderingHooks(current);
      return nextRenderLanes;
    }
    function finishRenderingHooks(current) {
      ReactSharedInternals.H = ContextOnlyDispatcher;
      var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
      renderLanes = 0;
      workInProgressHook = currentHook = currentlyRenderingFiber = null;
      didScheduleRenderPhaseUpdate = false;
      thenableIndexCounter = 0;
      thenableState = null;
      if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
      null === current || didReceiveUpdate || (current = current.dependencies, null !== current && checkIfContextChanged(current) && (didReceiveUpdate = true));
    }
    function renderWithHooksAgain(workInProgress2, Component, props, secondArg) {
      currentlyRenderingFiber = workInProgress2;
      var numberOfReRenders = 0;
      do {
        didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
        thenableIndexCounter = 0;
        didScheduleRenderPhaseUpdateDuringThisPass = false;
        if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
        numberOfReRenders += 1;
        workInProgressHook = currentHook = null;
        if (null != workInProgress2.updateQueue) {
          var children = workInProgress2.updateQueue;
          children.lastEffect = null;
          children.events = null;
          children.stores = null;
          null != children.memoCache && (children.memoCache.index = 0);
        }
        ReactSharedInternals.H = HooksDispatcherOnRerender;
        children = Component(props, secondArg);
      } while (didScheduleRenderPhaseUpdateDuringThisPass);
      return children;
    }
    function TransitionAwareHostComponent() {
      var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
      maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
      dispatcher = dispatcher.useState()[0];
      (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber.flags |= 1024);
      return maybeThenable;
    }
    function checkDidRenderIdHook() {
      var didRenderIdHook = 0 !== localIdCounter;
      localIdCounter = 0;
      return didRenderIdHook;
    }
    function bailoutHooks(current, workInProgress2, lanes) {
      workInProgress2.updateQueue = current.updateQueue;
      workInProgress2.flags &= -2053;
      current.lanes &= ~lanes;
    }
    function resetHooksOnUnwind(workInProgress2) {
      if (didScheduleRenderPhaseUpdate) {
        for (workInProgress2 = workInProgress2.memoizedState; null !== workInProgress2; ) {
          var queue = workInProgress2.queue;
          null !== queue && (queue.pending = null);
          workInProgress2 = workInProgress2.next;
        }
        didScheduleRenderPhaseUpdate = false;
      }
      renderLanes = 0;
      workInProgressHook = currentHook = currentlyRenderingFiber = null;
      didScheduleRenderPhaseUpdateDuringThisPass = false;
      thenableIndexCounter = localIdCounter = 0;
      thenableState = null;
    }
    function mountWorkInProgressHook() {
      var hook = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
      return workInProgressHook;
    }
    function updateWorkInProgressHook() {
      if (null === currentHook) {
        var nextCurrentHook = currentlyRenderingFiber.alternate;
        nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
      } else nextCurrentHook = currentHook.next;
      var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber.memoizedState : workInProgressHook.next;
      if (null !== nextWorkInProgressHook)
        workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
      else {
        if (null === nextCurrentHook) {
          if (null === currentlyRenderingFiber.alternate)
            throw Error(formatProdErrorMessage(467));
          throw Error(formatProdErrorMessage(310));
        }
        currentHook = nextCurrentHook;
        nextCurrentHook = {
          memoizedState: currentHook.memoizedState,
          baseState: currentHook.baseState,
          baseQueue: currentHook.baseQueue,
          queue: currentHook.queue,
          next: null
        };
        null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
      }
      return workInProgressHook;
    }
    function createFunctionComponentUpdateQueue() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function useThenable(thenable) {
      var index2 = thenableIndexCounter;
      thenableIndexCounter += 1;
      null === thenableState && (thenableState = []);
      thenable = trackUsedThenable(thenableState, thenable, index2);
      index2 = currentlyRenderingFiber;
      null === (null === workInProgressHook ? index2.memoizedState : workInProgressHook.next) && (index2 = index2.alternate, ReactSharedInternals.H = null === index2 || null === index2.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate);
      return thenable;
    }
    function use2(usable) {
      if (null !== usable && "object" === typeof usable) {
        if ("function" === typeof usable.then) return useThenable(usable);
        if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
      }
      throw Error(formatProdErrorMessage(438, String(usable)));
    }
    function useMemoCache(size) {
      var memoCache = null, updateQueue = currentlyRenderingFiber.updateQueue;
      null !== updateQueue && (memoCache = updateQueue.memoCache);
      if (null == memoCache) {
        var current = currentlyRenderingFiber.alternate;
        null !== current && (current = current.updateQueue, null !== current && (current = current.memoCache, null != current && (memoCache = {
          data: current.data.map(function(array) {
            return array.slice();
          }),
          index: 0
        })));
      }
      null == memoCache && (memoCache = { data: [], index: 0 });
      null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = updateQueue);
      updateQueue.memoCache = memoCache;
      updateQueue = memoCache.data[memoCache.index];
      if (void 0 === updateQueue)
        for (updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0; current < size; current++)
          updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
      memoCache.index++;
      return updateQueue;
    }
    function basicStateReducer(state, action) {
      return "function" === typeof action ? action(state) : action;
    }
    function updateReducer(reducer) {
      var hook = updateWorkInProgressHook();
      return updateReducerImpl(hook, currentHook, reducer);
    }
    function updateReducerImpl(hook, current, reducer) {
      var queue = hook.queue;
      if (null === queue) throw Error(formatProdErrorMessage(311));
      queue.lastRenderedReducer = reducer;
      var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
      if (null !== pendingQueue) {
        if (null !== baseQueue) {
          var baseFirst = baseQueue.next;
          baseQueue.next = pendingQueue.next;
          pendingQueue.next = baseFirst;
        }
        current.baseQueue = baseQueue = pendingQueue;
        queue.pending = null;
      }
      pendingQueue = hook.baseState;
      if (null === baseQueue) hook.memoizedState = pendingQueue;
      else {
        current = baseQueue.next;
        var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update = current, didReadFromEntangledAsyncAction$60 = false;
        do {
          var updateLane = update.lane & -536870913;
          if (updateLane !== update.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
            var revertLane = update.revertLane;
            if (0 === revertLane)
              null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = true);
            else if ((renderLanes & revertLane) === revertLane) {
              update = update.next;
              revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = true);
              continue;
            } else
              updateLane = {
                lane: 0,
                revertLane: update.revertLane,
                gesture: null,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
            updateLane = update.action;
            shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
            pendingQueue = update.hasEagerState ? update.eagerState : reducer(pendingQueue, updateLane);
          } else
            revertLane = {
              lane: updateLane,
              revertLane: update.revertLane,
              gesture: update.gesture,
              action: update.action,
              hasEagerState: update.hasEagerState,
              eagerState: update.eagerState,
              next: null
            }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
          update = update.next;
        } while (null !== update && update !== current);
        null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
        if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = true, didReadFromEntangledAsyncAction$60 && (reducer = currentEntangledActionThenable, null !== reducer)))
          throw reducer;
        hook.memoizedState = pendingQueue;
        hook.baseState = baseFirst;
        hook.baseQueue = newBaseQueueLast;
        queue.lastRenderedState = pendingQueue;
      }
      null === baseQueue && (queue.lanes = 0);
      return [hook.memoizedState, queue.dispatch];
    }
    function rerenderReducer(reducer) {
      var hook = updateWorkInProgressHook(), queue = hook.queue;
      if (null === queue) throw Error(formatProdErrorMessage(311));
      queue.lastRenderedReducer = reducer;
      var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
      if (null !== lastRenderPhaseUpdate) {
        queue.pending = null;
        var update = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
        do
          newState = reducer(newState, update.action), update = update.next;
        while (update !== lastRenderPhaseUpdate);
        objectIs(newState, hook.memoizedState) || (didReceiveUpdate = true);
        hook.memoizedState = newState;
        null === hook.baseQueue && (hook.baseState = newState);
        queue.lastRenderedState = newState;
      }
      return [newState, dispatch];
    }
    function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
      var fiber = currentlyRenderingFiber, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
      if (isHydrating$jscomp$0) {
        if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
        getServerSnapshot = getServerSnapshot();
      } else getServerSnapshot = getSnapshot();
      var snapshotChanged = !objectIs(
        (currentHook || hook).memoizedState,
        getServerSnapshot
      );
      snapshotChanged && (hook.memoizedState = getServerSnapshot, didReceiveUpdate = true);
      hook = hook.queue;
      updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
        subscribe
      ]);
      if (hook.getSnapshot !== getSnapshot || snapshotChanged || null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1) {
        fiber.flags |= 2048;
        pushSimpleEffect(
          9,
          { destroy: void 0 },
          updateStoreInstance.bind(
            null,
            fiber,
            hook,
            getServerSnapshot,
            getSnapshot
          ),
          null
        );
        if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
        isHydrating$jscomp$0 || 0 !== (renderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
      }
      return getServerSnapshot;
    }
    function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
      fiber.flags |= 16384;
      fiber = { getSnapshot, value: renderedSnapshot };
      getSnapshot = currentlyRenderingFiber.updateQueue;
      null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = getSnapshot, getSnapshot.stores = [fiber]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [fiber] : renderedSnapshot.push(fiber));
    }
    function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
      inst.value = nextSnapshot;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
    }
    function subscribeToStore(fiber, inst, subscribe) {
      return subscribe(function() {
        checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
      });
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error) {
        return true;
      }
    }
    function forceStoreRerender(fiber) {
      var root3 = enqueueConcurrentRenderForLane(fiber, 2);
      null !== root3 && scheduleUpdateOnFiber(root3, fiber, 2);
    }
    function mountStateImpl(initialState) {
      var hook = mountWorkInProgressHook();
      if ("function" === typeof initialState) {
        var initialStateInitializer = initialState;
        initialState = initialStateInitializer();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(true);
          try {
            initialStateInitializer();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
      }
      hook.memoizedState = hook.baseState = initialState;
      hook.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: basicStateReducer,
        lastRenderedState: initialState
      };
      return hook;
    }
    function updateOptimisticImpl(hook, current, passthrough, reducer) {
      hook.baseState = passthrough;
      return updateReducerImpl(
        hook,
        currentHook,
        "function" === typeof reducer ? reducer : basicStateReducer
      );
    }
    function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
      if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
      fiber = actionQueue.action;
      if (null !== fiber) {
        var actionNode = {
          payload,
          action: fiber,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(listener) {
            actionNode.listeners.push(listener);
          }
        };
        null !== ReactSharedInternals.T ? setPendingState(true) : actionNode.isTransition = false;
        setState(actionNode);
        setPendingState = actionQueue.pending;
        null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
      }
    }
    function runActionStateAction(actionQueue, node) {
      var action = node.action, payload = node.payload, prevState = actionQueue.state;
      if (node.isTransition) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          handleActionReturnValue(actionQueue, node, returnValue);
        } catch (error) {
          onActionError(actionQueue, node, error);
        } finally {
          null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      } else
        try {
          prevTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node, prevTransition);
        } catch (error$66) {
          onActionError(actionQueue, node, error$66);
        }
    }
    function handleActionReturnValue(actionQueue, node, returnValue) {
      null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? returnValue.then(
        function(nextState) {
          onActionSuccess(actionQueue, node, nextState);
        },
        function(error) {
          return onActionError(actionQueue, node, error);
        }
      ) : onActionSuccess(actionQueue, node, returnValue);
    }
    function onActionSuccess(actionQueue, actionNode, nextState) {
      actionNode.status = "fulfilled";
      actionNode.value = nextState;
      notifyActionListeners(actionNode);
      actionQueue.state = nextState;
      actionNode = actionQueue.pending;
      null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
    }
    function onActionError(actionQueue, actionNode, error) {
      var last = actionQueue.pending;
      actionQueue.pending = null;
      if (null !== last) {
        last = last.next;
        do
          actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
        while (actionNode !== last);
      }
      actionQueue.action = null;
    }
    function notifyActionListeners(actionNode) {
      actionNode = actionNode.listeners;
      for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
    }
    function actionStateReducer(oldState, newState) {
      return newState;
    }
    function mountActionState(action, initialStateProp) {
      if (isHydrating) {
        var ssrFormState = workInProgressRoot.formState;
        if (null !== ssrFormState) {
          a: {
            var JSCompiler_inline_result = currentlyRenderingFiber;
            if (isHydrating) {
              if (nextHydratableInstance) {
                b: {
                  var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
                  for (var inRootOrSingleton = rootOrSingletonContext; 8 !== JSCompiler_inline_result$jscomp$0.nodeType; ) {
                    if (!inRootOrSingleton) {
                      JSCompiler_inline_result$jscomp$0 = null;
                      break b;
                    }
                    JSCompiler_inline_result$jscomp$0 = getNextHydratable(
                      JSCompiler_inline_result$jscomp$0.nextSibling
                    );
                    if (null === JSCompiler_inline_result$jscomp$0) {
                      JSCompiler_inline_result$jscomp$0 = null;
                      break b;
                    }
                  }
                  inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
                  JSCompiler_inline_result$jscomp$0 = "F!" === inRootOrSingleton || "F" === inRootOrSingleton ? JSCompiler_inline_result$jscomp$0 : null;
                }
                if (JSCompiler_inline_result$jscomp$0) {
                  nextHydratableInstance = getNextHydratable(
                    JSCompiler_inline_result$jscomp$0.nextSibling
                  );
                  JSCompiler_inline_result = "F!" === JSCompiler_inline_result$jscomp$0.data;
                  break a;
                }
              }
              throwOnHydrationMismatch(JSCompiler_inline_result);
            }
            JSCompiler_inline_result = false;
          }
          JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
        }
      }
      ssrFormState = mountWorkInProgressHook();
      ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
      JSCompiler_inline_result = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: actionStateReducer,
        lastRenderedState: initialStateProp
      };
      ssrFormState.queue = JSCompiler_inline_result;
      ssrFormState = dispatchSetState.bind(
        null,
        currentlyRenderingFiber,
        JSCompiler_inline_result
      );
      JSCompiler_inline_result.dispatch = ssrFormState;
      JSCompiler_inline_result = mountStateImpl(false);
      inRootOrSingleton = dispatchOptimisticSetState.bind(
        null,
        currentlyRenderingFiber,
        false,
        JSCompiler_inline_result.queue
      );
      JSCompiler_inline_result = mountWorkInProgressHook();
      JSCompiler_inline_result$jscomp$0 = {
        state: initialStateProp,
        dispatch: null,
        action,
        pending: null
      };
      JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
      ssrFormState = dispatchActionState.bind(
        null,
        currentlyRenderingFiber,
        JSCompiler_inline_result$jscomp$0,
        inRootOrSingleton,
        ssrFormState
      );
      JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
      JSCompiler_inline_result.memoizedState = action;
      return [initialStateProp, ssrFormState, false];
    }
    function updateActionState(action) {
      var stateHook = updateWorkInProgressHook();
      return updateActionStateImpl(stateHook, currentHook, action);
    }
    function updateActionStateImpl(stateHook, currentStateHook, action) {
      currentStateHook = updateReducerImpl(
        stateHook,
        currentStateHook,
        actionStateReducer
      )[0];
      stateHook = updateReducer(basicStateReducer)[0];
      if ("object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then)
        try {
          var state = useThenable(currentStateHook);
        } catch (x2) {
          if (x2 === SuspenseException) throw SuspenseActionException;
          throw x2;
        }
      else state = currentStateHook;
      currentStateHook = updateWorkInProgressHook();
      var actionQueue = currentStateHook.queue, dispatch = actionQueue.dispatch;
      action !== currentStateHook.memoizedState && (currentlyRenderingFiber.flags |= 2048, pushSimpleEffect(
        9,
        { destroy: void 0 },
        actionStateActionEffect.bind(null, actionQueue, action),
        null
      ));
      return [state, dispatch, stateHook];
    }
    function actionStateActionEffect(actionQueue, action) {
      actionQueue.action = action;
    }
    function rerenderActionState(action) {
      var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
      if (null !== currentStateHook)
        return updateActionStateImpl(stateHook, currentStateHook, action);
      updateWorkInProgressHook();
      stateHook = stateHook.memoizedState;
      currentStateHook = updateWorkInProgressHook();
      var dispatch = currentStateHook.queue.dispatch;
      currentStateHook.memoizedState = action;
      return [stateHook, dispatch, false];
    }
    function pushSimpleEffect(tag, inst, create, deps) {
      tag = { tag, create, deps, inst, next: null };
      inst = currentlyRenderingFiber.updateQueue;
      null === inst && (inst = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = inst);
      create = inst.lastEffect;
      null === create ? inst.lastEffect = tag.next = tag : (deps = create.next, create.next = tag, tag.next = deps, inst.lastEffect = tag);
      return tag;
    }
    function updateRef() {
      return updateWorkInProgressHook().memoizedState;
    }
    function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
      var hook = mountWorkInProgressHook();
      currentlyRenderingFiber.flags |= fiberFlags;
      hook.memoizedState = pushSimpleEffect(
        1 | hookFlags,
        { destroy: void 0 },
        create,
        void 0 === deps ? null : deps
      );
    }
    function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var inst = hook.memoizedState.inst;
      null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps) : (currentlyRenderingFiber.flags |= fiberFlags, hook.memoizedState = pushSimpleEffect(
        1 | hookFlags,
        inst,
        create,
        deps
      ));
    }
    function mountEffect(create, deps) {
      mountEffectImpl(8390656, 8, create, deps);
    }
    function updateEffect(create, deps) {
      updateEffectImpl(2048, 8, create, deps);
    }
    function useEffectEventImpl(payload) {
      currentlyRenderingFiber.flags |= 4;
      var componentUpdateQueue = currentlyRenderingFiber.updateQueue;
      if (null === componentUpdateQueue)
        componentUpdateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = componentUpdateQueue, componentUpdateQueue.events = [payload];
      else {
        var events = componentUpdateQueue.events;
        null === events ? componentUpdateQueue.events = [payload] : events.push(payload);
      }
    }
    function updateEvent(callback) {
      var ref = updateWorkInProgressHook().memoizedState;
      useEffectEventImpl({ ref, nextImpl: callback });
      return function() {
        if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
        return ref.impl.apply(void 0, arguments);
      };
    }
    function updateInsertionEffect(create, deps) {
      return updateEffectImpl(4, 2, create, deps);
    }
    function updateLayoutEffect(create, deps) {
      return updateEffectImpl(4, 4, create, deps);
    }
    function imperativeHandleEffect(create, ref) {
      if ("function" === typeof ref) {
        create = create();
        var refCleanup = ref(create);
        return function() {
          "function" === typeof refCleanup ? refCleanup() : ref(null);
        };
      }
      if (null !== ref && void 0 !== ref)
        return create = create(), ref.current = create, function() {
          ref.current = null;
        };
    }
    function updateImperativeHandle(ref, create, deps) {
      deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
      updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
    }
    function mountDebugValue() {
    }
    function updateCallback(callback, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var prevState = hook.memoizedState;
      if (null !== deps && areHookInputsEqual(deps, prevState[1]))
        return prevState[0];
      hook.memoizedState = [callback, deps];
      return callback;
    }
    function updateMemo(nextCreate, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var prevState = hook.memoizedState;
      if (null !== deps && areHookInputsEqual(deps, prevState[1]))
        return prevState[0];
      prevState = nextCreate();
      if (shouldDoubleInvokeUserFnsInHooksDEV) {
        setIsStrictModeForDevtools(true);
        try {
          nextCreate();
        } finally {
          setIsStrictModeForDevtools(false);
        }
      }
      hook.memoizedState = [prevState, deps];
      return prevState;
    }
    function mountDeferredValueImpl(hook, value, initialValue) {
      if (void 0 === initialValue || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930))
        return hook.memoizedState = value;
      hook.memoizedState = initialValue;
      hook = requestDeferredLane();
      currentlyRenderingFiber.lanes |= hook;
      workInProgressRootSkippedLanes |= hook;
      return initialValue;
    }
    function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
      if (objectIs(value, prevValue)) return value;
      if (null !== currentTreeHiddenStackCursor.current)
        return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = true), hook;
      if (0 === (renderLanes & 42) || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930))
        return didReceiveUpdate = true, hook.memoizedState = value;
      hook = requestDeferredLane();
      currentlyRenderingFiber.lanes |= hook;
      workInProgressRootSkippedLanes |= hook;
      return prevValue;
    }
    function startTransition(fiber, queue, pendingState, finishedState, callback) {
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      dispatchOptimisticSetState(fiber, false, queue, pendingState);
      try {
        var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) {
          var thenableForFinishedState = chainThenableValue(
            returnValue,
            finishedState
          );
          dispatchSetStateInternal(
            fiber,
            queue,
            thenableForFinishedState,
            requestUpdateLane(fiber)
          );
        } else
          dispatchSetStateInternal(
            fiber,
            queue,
            finishedState,
            requestUpdateLane(fiber)
          );
      } catch (error) {
        dispatchSetStateInternal(
          fiber,
          queue,
          { then: function() {
          }, status: "rejected", reason: error },
          requestUpdateLane()
        );
      } finally {
        ReactDOMSharedInternals.p = previousPriority, null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
      }
    }
    function noop() {
    }
    function startHostTransition(formFiber, pendingState, action, formData) {
      if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
      var queue = ensureFormComponentIsStateful(formFiber).queue;
      startTransition(
        formFiber,
        queue,
        pendingState,
        sharedNotPendingObject,
        null === action ? noop : function() {
          requestFormReset$1(formFiber);
          return action(formData);
        }
      );
    }
    function ensureFormComponentIsStateful(formFiber) {
      var existingStateHook = formFiber.memoizedState;
      if (null !== existingStateHook) return existingStateHook;
      existingStateHook = {
        memoizedState: sharedNotPendingObject,
        baseState: sharedNotPendingObject,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: sharedNotPendingObject
        },
        next: null
      };
      var initialResetState = {};
      existingStateHook.next = {
        memoizedState: initialResetState,
        baseState: initialResetState,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: initialResetState
        },
        next: null
      };
      formFiber.memoizedState = existingStateHook;
      formFiber = formFiber.alternate;
      null !== formFiber && (formFiber.memoizedState = existingStateHook);
      return existingStateHook;
    }
    function requestFormReset$1(formFiber) {
      var stateHook = ensureFormComponentIsStateful(formFiber);
      null === stateHook.next && (stateHook = formFiber.alternate.memoizedState);
      dispatchSetStateInternal(
        formFiber,
        stateHook.next.queue,
        {},
        requestUpdateLane()
      );
    }
    function useHostTransitionStatus() {
      return readContext(HostTransitionContext);
    }
    function updateId() {
      return updateWorkInProgressHook().memoizedState;
    }
    function updateRefresh() {
      return updateWorkInProgressHook().memoizedState;
    }
    function refreshCache(fiber) {
      for (var provider = fiber.return; null !== provider; ) {
        switch (provider.tag) {
          case 24:
          case 3:
            var lane = requestUpdateLane();
            fiber = createUpdate(lane);
            var root$69 = enqueueUpdate(provider, fiber, lane);
            null !== root$69 && (scheduleUpdateOnFiber(root$69, provider, lane), entangleTransitions(root$69, provider, lane));
            provider = { cache: createCache() };
            fiber.payload = provider;
            return;
        }
        provider = provider.return;
      }
    }
    function dispatchReducerAction(fiber, queue, action) {
      var lane = requestUpdateLane();
      action = {
        lane,
        revertLane: 0,
        gesture: null,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, action) : (action = enqueueConcurrentHookUpdate(fiber, queue, action, lane), null !== action && (scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane)));
    }
    function dispatchSetState(fiber, queue, action) {
      var lane = requestUpdateLane();
      dispatchSetStateInternal(fiber, queue, action, lane);
    }
    function dispatchSetStateInternal(fiber, queue, action, lane) {
      var update = {
        lane,
        revertLane: 0,
        gesture: null,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
      else {
        var alternate = fiber.alternate;
        if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate))
          try {
            var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
            update.hasEagerState = true;
            update.eagerState = eagerState;
            if (objectIs(eagerState, currentState))
              return enqueueUpdate$1(fiber, queue, update, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), false;
          } catch (error) {
          } finally {
          }
        action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
        if (null !== action)
          return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), true;
      }
      return false;
    }
    function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
      action = {
        lane: 2,
        revertLane: requestTransitionLane(),
        gesture: null,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (isRenderPhaseUpdate(fiber)) {
        if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
      } else
        throwIfDuringRender = enqueueConcurrentHookUpdate(
          fiber,
          queue,
          action,
          2
        ), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
    }
    function isRenderPhaseUpdate(fiber) {
      var alternate = fiber.alternate;
      return fiber === currentlyRenderingFiber || null !== alternate && alternate === currentlyRenderingFiber;
    }
    function enqueueRenderPhaseUpdate(queue, update) {
      didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
      var pending = queue.pending;
      null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
      queue.pending = update;
    }
    function entangleTransitionUpdate(root3, queue, lane) {
      if (0 !== (lane & 4194048)) {
        var queueLanes = queue.lanes;
        queueLanes &= root3.pendingLanes;
        lane |= queueLanes;
        queue.lanes = lane;
        markRootEntangled(root3, lane);
      }
    }
    var ContextOnlyDispatcher = {
      readContext,
      use: use2,
      useCallback: throwInvalidHookError,
      useContext: throwInvalidHookError,
      useEffect: throwInvalidHookError,
      useImperativeHandle: throwInvalidHookError,
      useLayoutEffect: throwInvalidHookError,
      useInsertionEffect: throwInvalidHookError,
      useMemo: throwInvalidHookError,
      useReducer: throwInvalidHookError,
      useRef: throwInvalidHookError,
      useState: throwInvalidHookError,
      useDebugValue: throwInvalidHookError,
      useDeferredValue: throwInvalidHookError,
      useTransition: throwInvalidHookError,
      useSyncExternalStore: throwInvalidHookError,
      useId: throwInvalidHookError,
      useHostTransitionStatus: throwInvalidHookError,
      useFormState: throwInvalidHookError,
      useActionState: throwInvalidHookError,
      useOptimistic: throwInvalidHookError,
      useMemoCache: throwInvalidHookError,
      useCacheRefresh: throwInvalidHookError
    };
    ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
    var HooksDispatcherOnMount = {
      readContext,
      use: use2,
      useCallback: function(callback, deps) {
        mountWorkInProgressHook().memoizedState = [
          callback,
          void 0 === deps ? null : deps
        ];
        return callback;
      },
      useContext: readContext,
      useEffect: mountEffect,
      useImperativeHandle: function(ref, create, deps) {
        deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
        mountEffectImpl(
          4194308,
          4,
          imperativeHandleEffect.bind(null, create, ref),
          deps
        );
      },
      useLayoutEffect: function(create, deps) {
        return mountEffectImpl(4194308, 4, create, deps);
      },
      useInsertionEffect: function(create, deps) {
        mountEffectImpl(4, 2, create, deps);
      },
      useMemo: function(nextCreate, deps) {
        var hook = mountWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var nextValue = nextCreate();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(true);
          try {
            nextCreate();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        hook.memoizedState = [nextValue, deps];
        return nextValue;
      },
      useReducer: function(reducer, initialArg, init) {
        var hook = mountWorkInProgressHook();
        if (void 0 !== init) {
          var initialState = init(initialArg);
          if (shouldDoubleInvokeUserFnsInHooksDEV) {
            setIsStrictModeForDevtools(true);
            try {
              init(initialArg);
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
        } else initialState = initialArg;
        hook.memoizedState = hook.baseState = initialState;
        reducer = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: reducer,
          lastRenderedState: initialState
        };
        hook.queue = reducer;
        reducer = reducer.dispatch = dispatchReducerAction.bind(
          null,
          currentlyRenderingFiber,
          reducer
        );
        return [hook.memoizedState, reducer];
      },
      useRef: function(initialValue) {
        var hook = mountWorkInProgressHook();
        initialValue = { current: initialValue };
        return hook.memoizedState = initialValue;
      },
      useState: function(initialState) {
        initialState = mountStateImpl(initialState);
        var queue = initialState.queue, dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
        queue.dispatch = dispatch;
        return [initialState.memoizedState, dispatch];
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = mountWorkInProgressHook();
        return mountDeferredValueImpl(hook, value, initialValue);
      },
      useTransition: function() {
        var stateHook = mountStateImpl(false);
        stateHook = startTransition.bind(
          null,
          currentlyRenderingFiber,
          stateHook.queue,
          true,
          false
        );
        mountWorkInProgressHook().memoizedState = stateHook;
        return [false, stateHook];
      },
      useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
        var fiber = currentlyRenderingFiber, hook = mountWorkInProgressHook();
        if (isHydrating) {
          if (void 0 === getServerSnapshot)
            throw Error(formatProdErrorMessage(407));
          getServerSnapshot = getServerSnapshot();
        } else {
          getServerSnapshot = getSnapshot();
          if (null === workInProgressRoot)
            throw Error(formatProdErrorMessage(349));
          0 !== (workInProgressRootRenderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
        }
        hook.memoizedState = getServerSnapshot;
        var inst = { value: getServerSnapshot, getSnapshot };
        hook.queue = inst;
        mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
          subscribe
        ]);
        fiber.flags |= 2048;
        pushSimpleEffect(
          9,
          { destroy: void 0 },
          updateStoreInstance.bind(
            null,
            fiber,
            inst,
            getServerSnapshot,
            getSnapshot
          ),
          null
        );
        return getServerSnapshot;
      },
      useId: function() {
        var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
        if (isHydrating) {
          var JSCompiler_inline_result = treeContextOverflow;
          var idWithLeadingBit = treeContextId;
          JSCompiler_inline_result = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + JSCompiler_inline_result;
          identifierPrefix = "_" + identifierPrefix + "R_" + JSCompiler_inline_result;
          JSCompiler_inline_result = localIdCounter++;
          0 < JSCompiler_inline_result && (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
          identifierPrefix += "_";
        } else
          JSCompiler_inline_result = globalClientIdCounter++, identifierPrefix = "_" + identifierPrefix + "r_" + JSCompiler_inline_result.toString(32) + "_";
        return hook.memoizedState = identifierPrefix;
      },
      useHostTransitionStatus,
      useFormState: mountActionState,
      useActionState: mountActionState,
      useOptimistic: function(passthrough) {
        var hook = mountWorkInProgressHook();
        hook.memoizedState = hook.baseState = passthrough;
        var queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        hook.queue = queue;
        hook = dispatchOptimisticSetState.bind(
          null,
          currentlyRenderingFiber,
          true,
          queue
        );
        queue.dispatch = hook;
        return [passthrough, hook];
      },
      useMemoCache,
      useCacheRefresh: function() {
        return mountWorkInProgressHook().memoizedState = refreshCache.bind(
          null,
          currentlyRenderingFiber
        );
      },
      useEffectEvent: function(callback) {
        var hook = mountWorkInProgressHook(), ref = { impl: callback };
        hook.memoizedState = ref;
        return function() {
          if (0 !== (executionContext & 2))
            throw Error(formatProdErrorMessage(440));
          return ref.impl.apply(void 0, arguments);
        };
      }
    };
    var HooksDispatcherOnUpdate = {
      readContext,
      use: use2,
      useCallback: updateCallback,
      useContext: readContext,
      useEffect: updateEffect,
      useImperativeHandle: updateImperativeHandle,
      useInsertionEffect: updateInsertionEffect,
      useLayoutEffect: updateLayoutEffect,
      useMemo: updateMemo,
      useReducer: updateReducer,
      useRef: updateRef,
      useState: function() {
        return updateReducer(basicStateReducer);
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
      },
      useTransition: function() {
        var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
          "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
          start
        ];
      },
      useSyncExternalStore: updateSyncExternalStore,
      useId: updateId,
      useHostTransitionStatus,
      useFormState: updateActionState,
      useActionState: updateActionState,
      useOptimistic: function(passthrough, reducer) {
        var hook = updateWorkInProgressHook();
        return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
      },
      useMemoCache,
      useCacheRefresh: updateRefresh
    };
    HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
    var HooksDispatcherOnRerender = {
      readContext,
      use: use2,
      useCallback: updateCallback,
      useContext: readContext,
      useEffect: updateEffect,
      useImperativeHandle: updateImperativeHandle,
      useInsertionEffect: updateInsertionEffect,
      useLayoutEffect: updateLayoutEffect,
      useMemo: updateMemo,
      useReducer: rerenderReducer,
      useRef: updateRef,
      useState: function() {
        return rerenderReducer(basicStateReducer);
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
      },
      useTransition: function() {
        var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
          "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
          start
        ];
      },
      useSyncExternalStore: updateSyncExternalStore,
      useId: updateId,
      useHostTransitionStatus,
      useFormState: rerenderActionState,
      useActionState: rerenderActionState,
      useOptimistic: function(passthrough, reducer) {
        var hook = updateWorkInProgressHook();
        if (null !== currentHook)
          return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
        hook.baseState = passthrough;
        return [passthrough, hook.queue.dispatch];
      },
      useMemoCache,
      useCacheRefresh: updateRefresh
    };
    HooksDispatcherOnRerender.useEffectEvent = updateEvent;
    function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
      ctor = workInProgress2.memoizedState;
      getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
      getDerivedStateFromProps = null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps ? ctor : assign({}, ctor, getDerivedStateFromProps);
      workInProgress2.memoizedState = getDerivedStateFromProps;
      0 === workInProgress2.lanes && (workInProgress2.updateQueue.baseState = getDerivedStateFromProps);
    }
    var classComponentUpdater = {
      enqueueSetState: function(inst, payload, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.payload = payload;
        void 0 !== callback && null !== callback && (update.callback = callback);
        payload = enqueueUpdate(inst, update, lane);
        null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
      },
      enqueueReplaceState: function(inst, payload, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.tag = 1;
        update.payload = payload;
        void 0 !== callback && null !== callback && (update.callback = callback);
        payload = enqueueUpdate(inst, update, lane);
        null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
      },
      enqueueForceUpdate: function(inst, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.tag = 2;
        void 0 !== callback && null !== callback && (update.callback = callback);
        callback = enqueueUpdate(inst, update, lane);
        null !== callback && (scheduleUpdateOnFiber(callback, inst, lane), entangleTransitions(callback, inst, lane));
      }
    };
    function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
      workInProgress2 = workInProgress2.stateNode;
      return "function" === typeof workInProgress2.shouldComponentUpdate ? workInProgress2.shouldComponentUpdate(newProps, newState, nextContext) : ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : true;
    }
    function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
      workInProgress2 = instance.state;
      "function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
      "function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
      instance.state !== workInProgress2 && classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
    }
    function resolveClassComponentProps(Component, baseProps) {
      var newProps = baseProps;
      if ("ref" in baseProps) {
        newProps = {};
        for (var propName in baseProps)
          "ref" !== propName && (newProps[propName] = baseProps[propName]);
      }
      if (Component = Component.defaultProps) {
        newProps === baseProps && (newProps = assign({}, newProps));
        for (var propName$73 in Component)
          void 0 === newProps[propName$73] && (newProps[propName$73] = Component[propName$73]);
      }
      return newProps;
    }
    function defaultOnUncaughtError(error) {
      reportGlobalError(error);
    }
    function defaultOnCaughtError(error) {
      console.error(error);
    }
    function defaultOnRecoverableError(error) {
      reportGlobalError(error);
    }
    function logUncaughtError(root3, errorInfo) {
      try {
        var onUncaughtError = root3.onUncaughtError;
        onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
      } catch (e$74) {
        setTimeout(function() {
          throw e$74;
        });
      }
    }
    function logCaughtError(root3, boundary, errorInfo) {
      try {
        var onCaughtError = root3.onCaughtError;
        onCaughtError(errorInfo.value, {
          componentStack: errorInfo.stack,
          errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
        });
      } catch (e$75) {
        setTimeout(function() {
          throw e$75;
        });
      }
    }
    function createRootErrorUpdate(root3, errorInfo, lane) {
      lane = createUpdate(lane);
      lane.tag = 3;
      lane.payload = { element: null };
      lane.callback = function() {
        logUncaughtError(root3, errorInfo);
      };
      return lane;
    }
    function createClassErrorUpdate(lane) {
      lane = createUpdate(lane);
      lane.tag = 3;
      return lane;
    }
    function initializeClassErrorUpdate(update, root3, fiber, errorInfo) {
      var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
      if ("function" === typeof getDerivedStateFromError) {
        var error = errorInfo.value;
        update.payload = function() {
          return getDerivedStateFromError(error);
        };
        update.callback = function() {
          logCaughtError(root3, fiber, errorInfo);
        };
      }
      var inst = fiber.stateNode;
      null !== inst && "function" === typeof inst.componentDidCatch && (update.callback = function() {
        logCaughtError(root3, fiber, errorInfo);
        "function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([this]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
        var stack = errorInfo.stack;
        this.componentDidCatch(errorInfo.value, {
          componentStack: null !== stack ? stack : ""
        });
      });
    }
    function throwException(root3, returnFiber, sourceFiber, value, rootRenderLanes) {
      sourceFiber.flags |= 32768;
      if (null !== value && "object" === typeof value && "function" === typeof value.then) {
        returnFiber = sourceFiber.alternate;
        null !== returnFiber && propagateParentContextChanges(
          returnFiber,
          sourceFiber,
          rootRenderLanes,
          true
        );
        sourceFiber = suspenseHandlerStackCursor.current;
        if (null !== sourceFiber) {
          switch (sourceFiber.tag) {
            case 31:
            case 13:
              return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && 0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 3), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = /* @__PURE__ */ new Set([value]) : returnFiber.add(value), attachPingListener(root3, value, rootRenderLanes)), false;
            case 22:
              return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([value])
              }, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = /* @__PURE__ */ new Set([value]) : sourceFiber.add(value)), attachPingListener(root3, value, rootRenderLanes)), false;
          }
          throw Error(formatProdErrorMessage(435, sourceFiber.tag));
        }
        attachPingListener(root3, value, rootRenderLanes);
        renderDidSuspendDelayIfPossible();
        return false;
      }
      if (isHydrating)
        return returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && (root3 = Error(formatProdErrorMessage(422), { cause: value }), queueHydrationError(createCapturedValueAtFiber(root3, sourceFiber)))) : (value !== HydrationMismatchException && (returnFiber = Error(formatProdErrorMessage(423), {
          cause: value
        }), queueHydrationError(
          createCapturedValueAtFiber(returnFiber, sourceFiber)
        )), root3 = root3.current.alternate, root3.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root3.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(
          root3.stateNode,
          value,
          rootRenderLanes
        ), enqueueCapturedUpdate(root3, rootRenderLanes), 4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2)), false;
      var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
      wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
      null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [wrapperError] : workInProgressRootConcurrentErrors.push(wrapperError);
      4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
      if (null === returnFiber) return true;
      value = createCapturedValueAtFiber(value, sourceFiber);
      sourceFiber = returnFiber;
      do {
        switch (sourceFiber.tag) {
          case 3:
            return sourceFiber.flags |= 65536, root3 = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root3, root3 = createRootErrorUpdate(sourceFiber.stateNode, value, root3), enqueueCapturedUpdate(sourceFiber, root3), false;
          case 1:
            if (returnFiber = sourceFiber.type, wrapperError = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== wrapperError && "function" === typeof wrapperError.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError))))
              return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(
                rootRenderLanes,
                root3,
                sourceFiber,
                value
              ), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), false;
        }
        sourceFiber = sourceFiber.return;
      } while (null !== sourceFiber);
      return false;
    }
    var SelectiveHydrationException = Error(formatProdErrorMessage(461));
    var didReceiveUpdate = false;
    function reconcileChildren(current, workInProgress2, nextChildren, renderLanes2) {
      workInProgress2.child = null === current ? mountChildFibers(workInProgress2, null, nextChildren, renderLanes2) : reconcileChildFibers(
        workInProgress2,
        current.child,
        nextChildren,
        renderLanes2
      );
    }
    function updateForwardRef(current, workInProgress2, Component, nextProps, renderLanes2) {
      Component = Component.render;
      var ref = workInProgress2.ref;
      if ("ref" in nextProps) {
        var propsWithoutRef = {};
        for (var key in nextProps)
          "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
      } else propsWithoutRef = nextProps;
      prepareToReadContext(workInProgress2);
      nextProps = renderWithHooks(
        current,
        workInProgress2,
        Component,
        propsWithoutRef,
        ref,
        renderLanes2
      );
      key = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && key && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
      return workInProgress2.child;
    }
    function updateMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      if (null === current) {
        var type = Component.type;
        if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component.compare)
          return workInProgress2.tag = 15, workInProgress2.type = type, updateSimpleMemoComponent(
            current,
            workInProgress2,
            type,
            nextProps,
            renderLanes2
          );
        current = createFiberFromTypeAndProps(
          Component.type,
          null,
          nextProps,
          workInProgress2,
          workInProgress2.mode,
          renderLanes2
        );
        current.ref = workInProgress2.ref;
        current.return = workInProgress2;
        return workInProgress2.child = current;
      }
      type = current.child;
      if (!checkScheduledUpdateOrContext(current, renderLanes2)) {
        var prevProps = type.memoizedProps;
        Component = Component.compare;
        Component = null !== Component ? Component : shallowEqual;
        if (Component(prevProps, nextProps) && current.ref === workInProgress2.ref)
          return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      }
      workInProgress2.flags |= 1;
      current = createWorkInProgress(type, nextProps);
      current.ref = workInProgress2.ref;
      current.return = workInProgress2;
      return workInProgress2.child = current;
    }
    function updateSimpleMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      if (null !== current) {
        var prevProps = current.memoizedProps;
        if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress2.ref)
          if (didReceiveUpdate = false, workInProgress2.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current, renderLanes2))
            0 !== (current.flags & 131072) && (didReceiveUpdate = true);
          else
            return workInProgress2.lanes = current.lanes, bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      }
      return updateFunctionComponent(
        current,
        workInProgress2,
        Component,
        nextProps,
        renderLanes2
      );
    }
    function updateOffscreenComponent(current, workInProgress2, renderLanes2, nextProps) {
      var nextChildren = nextProps.children, prevState = null !== current ? current.memoizedState : null;
      null === current && null === workInProgress2.stateNode && (workInProgress2.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      });
      if ("hidden" === nextProps.mode) {
        if (0 !== (workInProgress2.flags & 128)) {
          prevState = null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2;
          if (null !== current) {
            nextProps = workInProgress2.child = current.child;
            for (nextChildren = 0; null !== nextProps; )
              nextChildren = nextChildren | nextProps.lanes | nextProps.childLanes, nextProps = nextProps.sibling;
            nextProps = nextChildren & ~prevState;
          } else nextProps = 0, workInProgress2.child = null;
          return deferHiddenOffscreenComponent(
            current,
            workInProgress2,
            prevState,
            renderLanes2,
            nextProps
          );
        }
        if (0 !== (renderLanes2 & 536870912))
          workInProgress2.memoizedState = { baseLanes: 0, cachePool: null }, null !== current && pushTransition(
            workInProgress2,
            null !== prevState ? prevState.cachePool : null
          ), null !== prevState ? pushHiddenContext(workInProgress2, prevState) : reuseHiddenContextOnStack(), pushOffscreenSuspenseHandler(workInProgress2);
        else
          return nextProps = workInProgress2.lanes = 536870912, deferHiddenOffscreenComponent(
            current,
            workInProgress2,
            null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2,
            renderLanes2,
            nextProps
          );
      } else
        null !== prevState ? (pushTransition(workInProgress2, prevState.cachePool), pushHiddenContext(workInProgress2, prevState), reuseSuspenseHandlerOnStack(workInProgress2), workInProgress2.memoizedState = null) : (null !== current && pushTransition(workInProgress2, null), reuseHiddenContextOnStack(), reuseSuspenseHandlerOnStack(workInProgress2));
      reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    function bailoutOffscreenComponent(current, workInProgress2) {
      null !== current && 22 === current.tag || null !== workInProgress2.stateNode || (workInProgress2.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      });
      return workInProgress2.sibling;
    }
    function deferHiddenOffscreenComponent(current, workInProgress2, nextBaseLanes, renderLanes2, remainingChildLanes) {
      var JSCompiler_inline_result = peekCacheFromPool();
      JSCompiler_inline_result = null === JSCompiler_inline_result ? null : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
      workInProgress2.memoizedState = {
        baseLanes: nextBaseLanes,
        cachePool: JSCompiler_inline_result
      };
      null !== current && pushTransition(workInProgress2, null);
      reuseHiddenContextOnStack();
      pushOffscreenSuspenseHandler(workInProgress2);
      null !== current && propagateParentContextChanges(current, workInProgress2, renderLanes2, true);
      workInProgress2.childLanes = remainingChildLanes;
      return null;
    }
    function mountActivityChildren(workInProgress2, nextProps) {
      nextProps = mountWorkInProgressOffscreenFiber(
        { mode: nextProps.mode, children: nextProps.children },
        workInProgress2.mode
      );
      nextProps.ref = workInProgress2.ref;
      workInProgress2.child = nextProps;
      nextProps.return = workInProgress2;
      return nextProps;
    }
    function retryActivityComponentWithoutHydrating(current, workInProgress2, renderLanes2) {
      reconcileChildFibers(workInProgress2, current.child, null, renderLanes2);
      current = mountActivityChildren(workInProgress2, workInProgress2.pendingProps);
      current.flags |= 2;
      popSuspenseHandler(workInProgress2);
      workInProgress2.memoizedState = null;
      return current;
    }
    function updateActivityComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, didSuspend = 0 !== (workInProgress2.flags & 128);
      workInProgress2.flags &= -129;
      if (null === current) {
        if (isHydrating) {
          if ("hidden" === nextProps.mode)
            return current = mountActivityChildren(workInProgress2, nextProps), workInProgress2.lanes = 536870912, bailoutOffscreenComponent(null, current);
          pushDehydratedActivitySuspenseHandler(workInProgress2);
          (current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(
            current,
            rootOrSingletonContext
          ), current = null !== current && "&" === current.data ? current : null, null !== current && (workInProgress2.memoizedState = {
            dehydrated: current,
            treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, renderLanes2 = createFiberFromDehydratedFragment(current), renderLanes2.return = workInProgress2, workInProgress2.child = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null)) : current = null;
          if (null === current) throw throwOnHydrationMismatch(workInProgress2);
          workInProgress2.lanes = 536870912;
          return null;
        }
        return mountActivityChildren(workInProgress2, nextProps);
      }
      var prevState = current.memoizedState;
      if (null !== prevState) {
        var dehydrated = prevState.dehydrated;
        pushDehydratedActivitySuspenseHandler(workInProgress2);
        if (didSuspend)
          if (workInProgress2.flags & 256)
            workInProgress2.flags &= -257, workInProgress2 = retryActivityComponentWithoutHydrating(
              current,
              workInProgress2,
              renderLanes2
            );
          else if (null !== workInProgress2.memoizedState)
            workInProgress2.child = current.child, workInProgress2.flags |= 128, workInProgress2 = null;
          else throw Error(formatProdErrorMessage(558));
        else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress2, renderLanes2, false), didSuspend = 0 !== (renderLanes2 & current.childLanes), didReceiveUpdate || didSuspend) {
          nextProps = workInProgressRoot;
          if (null !== nextProps && (dehydrated = getBumpedLaneForHydration(nextProps, renderLanes2), 0 !== dehydrated && dehydrated !== prevState.retryLane))
            throw prevState.retryLane = dehydrated, enqueueConcurrentRenderForLane(current, dehydrated), scheduleUpdateOnFiber(nextProps, current, dehydrated), SelectiveHydrationException;
          renderDidSuspendDelayIfPossible();
          workInProgress2 = retryActivityComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          );
        } else
          current = prevState.treeContext, nextHydratableInstance = getNextHydratable(dehydrated.nextSibling), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = false, null !== current && restoreSuspendedTreeContext(workInProgress2, current), workInProgress2 = mountActivityChildren(workInProgress2, nextProps), workInProgress2.flags |= 4096;
        return workInProgress2;
      }
      current = createWorkInProgress(current.child, {
        mode: nextProps.mode,
        children: nextProps.children
      });
      current.ref = workInProgress2.ref;
      workInProgress2.child = current;
      current.return = workInProgress2;
      return current;
    }
    function markRef(current, workInProgress2) {
      var ref = workInProgress2.ref;
      if (null === ref)
        null !== current && null !== current.ref && (workInProgress2.flags |= 4194816);
      else {
        if ("function" !== typeof ref && "object" !== typeof ref)
          throw Error(formatProdErrorMessage(284));
        if (null === current || current.ref !== ref)
          workInProgress2.flags |= 4194816;
      }
    }
    function updateFunctionComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      prepareToReadContext(workInProgress2);
      Component = renderWithHooks(
        current,
        workInProgress2,
        Component,
        nextProps,
        void 0,
        renderLanes2
      );
      nextProps = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && nextProps && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, Component, renderLanes2);
      return workInProgress2.child;
    }
    function replayFunctionComponent(current, workInProgress2, nextProps, Component, secondArg, renderLanes2) {
      prepareToReadContext(workInProgress2);
      workInProgress2.updateQueue = null;
      nextProps = renderWithHooksAgain(
        workInProgress2,
        Component,
        nextProps,
        secondArg
      );
      finishRenderingHooks(current);
      Component = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && Component && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
      return workInProgress2.child;
    }
    function updateClassComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      prepareToReadContext(workInProgress2);
      if (null === workInProgress2.stateNode) {
        var context = emptyContextObject, contextType = Component.contextType;
        "object" === typeof contextType && null !== contextType && (context = readContext(contextType));
        context = new Component(nextProps, context);
        workInProgress2.memoizedState = null !== context.state && void 0 !== context.state ? context.state : null;
        context.updater = classComponentUpdater;
        workInProgress2.stateNode = context;
        context._reactInternals = workInProgress2;
        context = workInProgress2.stateNode;
        context.props = nextProps;
        context.state = workInProgress2.memoizedState;
        context.refs = {};
        initializeUpdateQueue(workInProgress2);
        contextType = Component.contextType;
        context.context = "object" === typeof contextType && null !== contextType ? readContext(contextType) : emptyContextObject;
        context.state = workInProgress2.memoizedState;
        contextType = Component.getDerivedStateFromProps;
        "function" === typeof contextType && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          contextType,
          nextProps
        ), context.state = workInProgress2.memoizedState);
        "function" === typeof Component.getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || (contextType = context.state, "function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount(), contextType !== context.state && classComponentUpdater.enqueueReplaceState(context, context.state, null), processUpdateQueue(workInProgress2, nextProps, context, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction(), context.state = workInProgress2.memoizedState);
        "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308);
        nextProps = true;
      } else if (null === current) {
        context = workInProgress2.stateNode;
        var unresolvedOldProps = workInProgress2.memoizedProps, oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
        context.props = oldProps;
        var oldContext = context.context, contextType$jscomp$0 = Component.contextType;
        contextType = emptyContextObject;
        "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 && (contextType = readContext(contextType$jscomp$0));
        var getDerivedStateFromProps = Component.getDerivedStateFromProps;
        contextType$jscomp$0 = "function" === typeof getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate;
        unresolvedOldProps = workInProgress2.pendingProps !== unresolvedOldProps;
        contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (unresolvedOldProps || oldContext !== contextType) && callComponentWillReceiveProps(
          workInProgress2,
          context,
          nextProps,
          contextType
        );
        hasForceUpdate = false;
        var oldState = workInProgress2.memoizedState;
        context.state = oldState;
        processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
        suspendIfUpdateReadFromEntangledAsyncAction();
        oldContext = workInProgress2.memoizedState;
        unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof getDerivedStateFromProps && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          getDerivedStateFromProps,
          nextProps
        ), oldContext = workInProgress2.memoizedState), (oldProps = hasForceUpdate || checkShouldComponentUpdate(
          workInProgress2,
          Component,
          oldProps,
          nextProps,
          oldState,
          oldContext,
          contextType
        )) ? (contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || ("function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount()), "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308)) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = oldContext), context.props = nextProps, context.state = oldContext, context.context = contextType, nextProps = oldProps) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), nextProps = false);
      } else {
        context = workInProgress2.stateNode;
        cloneUpdateQueue(current, workInProgress2);
        contextType = workInProgress2.memoizedProps;
        contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
        context.props = contextType$jscomp$0;
        getDerivedStateFromProps = workInProgress2.pendingProps;
        oldState = context.context;
        oldContext = Component.contextType;
        oldProps = emptyContextObject;
        "object" === typeof oldContext && null !== oldContext && (oldProps = readContext(oldContext));
        unresolvedOldProps = Component.getDerivedStateFromProps;
        (oldContext = "function" === typeof unresolvedOldProps || "function" === typeof context.getSnapshotBeforeUpdate) || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (contextType !== getDerivedStateFromProps || oldState !== oldProps) && callComponentWillReceiveProps(
          workInProgress2,
          context,
          nextProps,
          oldProps
        );
        hasForceUpdate = false;
        oldState = workInProgress2.memoizedState;
        context.state = oldState;
        processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
        suspendIfUpdateReadFromEntangledAsyncAction();
        var newState = workInProgress2.memoizedState;
        contextType !== getDerivedStateFromProps || oldState !== newState || hasForceUpdate || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          unresolvedOldProps,
          nextProps
        ), newState = workInProgress2.memoizedState), (contextType$jscomp$0 = hasForceUpdate || checkShouldComponentUpdate(
          workInProgress2,
          Component,
          contextType$jscomp$0,
          nextProps,
          oldState,
          newState,
          oldProps
        ) || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies)) ? (oldContext || "function" !== typeof context.UNSAFE_componentWillUpdate && "function" !== typeof context.componentWillUpdate || ("function" === typeof context.componentWillUpdate && context.componentWillUpdate(nextProps, newState, oldProps), "function" === typeof context.UNSAFE_componentWillUpdate && context.UNSAFE_componentWillUpdate(
          nextProps,
          newState,
          oldProps
        )), "function" === typeof context.componentDidUpdate && (workInProgress2.flags |= 4), "function" === typeof context.getSnapshotBeforeUpdate && (workInProgress2.flags |= 1024)) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = newState), context.props = nextProps, context.state = newState, context.context = oldProps, nextProps = contextType$jscomp$0) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), nextProps = false);
      }
      context = nextProps;
      markRef(current, workInProgress2);
      nextProps = 0 !== (workInProgress2.flags & 128);
      context || nextProps ? (context = workInProgress2.stateNode, Component = nextProps && "function" !== typeof Component.getDerivedStateFromError ? null : context.render(), workInProgress2.flags |= 1, null !== current && nextProps ? (workInProgress2.child = reconcileChildFibers(
        workInProgress2,
        current.child,
        null,
        renderLanes2
      ), workInProgress2.child = reconcileChildFibers(
        workInProgress2,
        null,
        Component,
        renderLanes2
      )) : reconcileChildren(current, workInProgress2, Component, renderLanes2), workInProgress2.memoizedState = context.state, current = workInProgress2.child) : current = bailoutOnAlreadyFinishedWork(
        current,
        workInProgress2,
        renderLanes2
      );
      return current;
    }
    function mountHostRootWithoutHydrating(current, workInProgress2, nextChildren, renderLanes2) {
      resetHydrationState();
      workInProgress2.flags |= 256;
      reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    var SUSPENDED_MARKER = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function mountSuspenseOffscreenState(renderLanes2) {
      return { baseLanes: renderLanes2, cachePool: getSuspendedCache() };
    }
    function getRemainingWorkInPrimaryTree(current, primaryTreeDidDefer, renderLanes2) {
      current = null !== current ? current.childLanes & ~renderLanes2 : 0;
      primaryTreeDidDefer && (current |= workInProgressDeferredLane);
      return current;
    }
    function updateSuspenseComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, showFallback = false, didSuspend = 0 !== (workInProgress2.flags & 128), JSCompiler_temp;
      (JSCompiler_temp = didSuspend) || (JSCompiler_temp = null !== current && null === current.memoizedState ? false : 0 !== (suspenseStackCursor.current & 2));
      JSCompiler_temp && (showFallback = true, workInProgress2.flags &= -129);
      JSCompiler_temp = 0 !== (workInProgress2.flags & 32);
      workInProgress2.flags &= -33;
      if (null === current) {
        if (isHydrating) {
          showFallback ? pushPrimaryTreeSuspenseHandler(workInProgress2) : reuseSuspenseHandlerOnStack(workInProgress2);
          (current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(
            current,
            rootOrSingletonContext
          ), current = null !== current && "&" !== current.data ? current : null, null !== current && (workInProgress2.memoizedState = {
            dehydrated: current,
            treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, renderLanes2 = createFiberFromDehydratedFragment(current), renderLanes2.return = workInProgress2, workInProgress2.child = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null)) : current = null;
          if (null === current) throw throwOnHydrationMismatch(workInProgress2);
          isSuspenseInstanceFallback(current) ? workInProgress2.lanes = 32 : workInProgress2.lanes = 536870912;
          return null;
        }
        var nextPrimaryChildren = nextProps.children;
        nextProps = nextProps.fallback;
        if (showFallback)
          return reuseSuspenseHandlerOnStack(workInProgress2), showFallback = workInProgress2.mode, nextPrimaryChildren = mountWorkInProgressOffscreenFiber(
            { mode: "hidden", children: nextPrimaryChildren },
            showFallback
          ), nextProps = createFiberFromFragment(
            nextProps,
            showFallback,
            renderLanes2,
            null
          ), nextPrimaryChildren.return = workInProgress2, nextProps.return = workInProgress2, nextPrimaryChildren.sibling = nextProps, workInProgress2.child = nextPrimaryChildren, nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
            current,
            JSCompiler_temp,
            renderLanes2
          ), workInProgress2.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(null, nextProps);
        pushPrimaryTreeSuspenseHandler(workInProgress2);
        return mountSuspensePrimaryChildren(workInProgress2, nextPrimaryChildren);
      }
      var prevState = current.memoizedState;
      if (null !== prevState && (nextPrimaryChildren = prevState.dehydrated, null !== nextPrimaryChildren)) {
        if (didSuspend)
          workInProgress2.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags &= -257, workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          )) : null !== workInProgress2.memoizedState ? (reuseSuspenseHandlerOnStack(workInProgress2), workInProgress2.child = current.child, workInProgress2.flags |= 128, workInProgress2 = null) : (reuseSuspenseHandlerOnStack(workInProgress2), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress2.mode, nextProps = mountWorkInProgressOffscreenFiber(
            { mode: "visible", children: nextProps.children },
            showFallback
          ), nextPrimaryChildren = createFiberFromFragment(
            nextPrimaryChildren,
            showFallback,
            renderLanes2,
            null
          ), nextPrimaryChildren.flags |= 2, nextProps.return = workInProgress2, nextPrimaryChildren.return = workInProgress2, nextProps.sibling = nextPrimaryChildren, workInProgress2.child = nextProps, reconcileChildFibers(
            workInProgress2,
            current.child,
            null,
            renderLanes2
          ), nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
            current,
            JSCompiler_temp,
            renderLanes2
          ), workInProgress2.memoizedState = SUSPENDED_MARKER, workInProgress2 = bailoutOffscreenComponent(null, nextProps));
        else if (pushPrimaryTreeSuspenseHandler(workInProgress2), isSuspenseInstanceFallback(nextPrimaryChildren)) {
          JSCompiler_temp = nextPrimaryChildren.nextSibling && nextPrimaryChildren.nextSibling.dataset;
          if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
          JSCompiler_temp = digest;
          nextProps = Error(formatProdErrorMessage(419));
          nextProps.stack = "";
          nextProps.digest = JSCompiler_temp;
          queueHydrationError({ value: nextProps, source: null, stack: null });
          workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          );
        } else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress2, renderLanes2, false), JSCompiler_temp = 0 !== (renderLanes2 & current.childLanes), didReceiveUpdate || JSCompiler_temp) {
          JSCompiler_temp = workInProgressRoot;
          if (null !== JSCompiler_temp && (nextProps = getBumpedLaneForHydration(JSCompiler_temp, renderLanes2), 0 !== nextProps && nextProps !== prevState.retryLane))
            throw prevState.retryLane = nextProps, enqueueConcurrentRenderForLane(current, nextProps), scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps), SelectiveHydrationException;
          isSuspenseInstancePending(nextPrimaryChildren) || renderDidSuspendDelayIfPossible();
          workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          );
        } else
          isSuspenseInstancePending(nextPrimaryChildren) ? (workInProgress2.flags |= 192, workInProgress2.child = current.child, workInProgress2 = null) : (current = prevState.treeContext, nextHydratableInstance = getNextHydratable(
            nextPrimaryChildren.nextSibling
          ), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = false, null !== current && restoreSuspendedTreeContext(workInProgress2, current), workInProgress2 = mountSuspensePrimaryChildren(
            workInProgress2,
            nextProps.children
          ), workInProgress2.flags |= 4096);
        return workInProgress2;
      }
      if (showFallback)
        return reuseSuspenseHandlerOnStack(workInProgress2), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress2.mode, prevState = current.child, digest = prevState.sibling, nextProps = createWorkInProgress(prevState, {
          mode: "hidden",
          children: nextProps.children
        }), nextProps.subtreeFlags = prevState.subtreeFlags & 65011712, null !== digest ? nextPrimaryChildren = createWorkInProgress(
          digest,
          nextPrimaryChildren
        ) : (nextPrimaryChildren = createFiberFromFragment(
          nextPrimaryChildren,
          showFallback,
          renderLanes2,
          null
        ), nextPrimaryChildren.flags |= 2), nextPrimaryChildren.return = workInProgress2, nextProps.return = workInProgress2, nextProps.sibling = nextPrimaryChildren, workInProgress2.child = nextProps, bailoutOffscreenComponent(null, nextProps), nextProps = workInProgress2.child, nextPrimaryChildren = current.child.memoizedState, null === nextPrimaryChildren ? nextPrimaryChildren = mountSuspenseOffscreenState(renderLanes2) : (showFallback = nextPrimaryChildren.cachePool, null !== showFallback ? (prevState = CacheContext._currentValue, showFallback = showFallback.parent !== prevState ? { parent: prevState, pool: prevState } : showFallback) : showFallback = getSuspendedCache(), nextPrimaryChildren = {
          baseLanes: nextPrimaryChildren.baseLanes | renderLanes2,
          cachePool: showFallback
        }), nextProps.memoizedState = nextPrimaryChildren, nextProps.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes2
        ), workInProgress2.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(current.child, nextProps);
      pushPrimaryTreeSuspenseHandler(workInProgress2);
      renderLanes2 = current.child;
      current = renderLanes2.sibling;
      renderLanes2 = createWorkInProgress(renderLanes2, {
        mode: "visible",
        children: nextProps.children
      });
      renderLanes2.return = workInProgress2;
      renderLanes2.sibling = null;
      null !== current && (JSCompiler_temp = workInProgress2.deletions, null === JSCompiler_temp ? (workInProgress2.deletions = [current], workInProgress2.flags |= 16) : JSCompiler_temp.push(current));
      workInProgress2.child = renderLanes2;
      workInProgress2.memoizedState = null;
      return renderLanes2;
    }
    function mountSuspensePrimaryChildren(workInProgress2, primaryChildren) {
      primaryChildren = mountWorkInProgressOffscreenFiber(
        { mode: "visible", children: primaryChildren },
        workInProgress2.mode
      );
      primaryChildren.return = workInProgress2;
      return workInProgress2.child = primaryChildren;
    }
    function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
      offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
      offscreenProps.lanes = 0;
      return offscreenProps;
    }
    function retrySuspenseComponentWithoutHydrating(current, workInProgress2, renderLanes2) {
      reconcileChildFibers(workInProgress2, current.child, null, renderLanes2);
      current = mountSuspensePrimaryChildren(
        workInProgress2,
        workInProgress2.pendingProps.children
      );
      current.flags |= 2;
      workInProgress2.memoizedState = null;
      return current;
    }
    function scheduleSuspenseWorkOnFiber(fiber, renderLanes2, propagationRoot) {
      fiber.lanes |= renderLanes2;
      var alternate = fiber.alternate;
      null !== alternate && (alternate.lanes |= renderLanes2);
      scheduleContextWorkOnParentPath(fiber.return, renderLanes2, propagationRoot);
    }
    function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode, treeForkCount2) {
      var renderState = workInProgress2.memoizedState;
      null === renderState ? workInProgress2.memoizedState = {
        isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail,
        tailMode,
        treeForkCount: treeForkCount2
      } : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode, renderState.treeForkCount = treeForkCount2);
    }
    function updateSuspenseListComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
      nextProps = nextProps.children;
      var suspenseContext = suspenseStackCursor.current, shouldForceFallback = 0 !== (suspenseContext & 2);
      shouldForceFallback ? (suspenseContext = suspenseContext & 1 | 2, workInProgress2.flags |= 128) : suspenseContext &= 1;
      push(suspenseStackCursor, suspenseContext);
      reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
      nextProps = isHydrating ? treeForkCount : 0;
      if (!shouldForceFallback && null !== current && 0 !== (current.flags & 128))
        a: for (current = workInProgress2.child; null !== current; ) {
          if (13 === current.tag)
            null !== current.memoizedState && scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
          else if (19 === current.tag)
            scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
          else if (null !== current.child) {
            current.child.return = current;
            current = current.child;
            continue;
          }
          if (current === workInProgress2) break a;
          for (; null === current.sibling; ) {
            if (null === current.return || current.return === workInProgress2)
              break a;
            current = current.return;
          }
          current.sibling.return = current.return;
          current = current.sibling;
        }
      switch (revealOrder) {
        case "forwards":
          renderLanes2 = workInProgress2.child;
          for (revealOrder = null; null !== renderLanes2; )
            current = renderLanes2.alternate, null !== current && null === findFirstSuspended(current) && (revealOrder = renderLanes2), renderLanes2 = renderLanes2.sibling;
          renderLanes2 = revealOrder;
          null === renderLanes2 ? (revealOrder = workInProgress2.child, workInProgress2.child = null) : (revealOrder = renderLanes2.sibling, renderLanes2.sibling = null);
          initSuspenseListRenderState(
            workInProgress2,
            false,
            revealOrder,
            renderLanes2,
            tailMode,
            nextProps
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          renderLanes2 = null;
          revealOrder = workInProgress2.child;
          for (workInProgress2.child = null; null !== revealOrder; ) {
            current = revealOrder.alternate;
            if (null !== current && null === findFirstSuspended(current)) {
              workInProgress2.child = revealOrder;
              break;
            }
            current = revealOrder.sibling;
            revealOrder.sibling = renderLanes2;
            renderLanes2 = revealOrder;
            revealOrder = current;
          }
          initSuspenseListRenderState(
            workInProgress2,
            true,
            renderLanes2,
            null,
            tailMode,
            nextProps
          );
          break;
        case "together":
          initSuspenseListRenderState(
            workInProgress2,
            false,
            null,
            null,
            void 0,
            nextProps
          );
          break;
        default:
          workInProgress2.memoizedState = null;
      }
      return workInProgress2.child;
    }
    function bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2) {
      null !== current && (workInProgress2.dependencies = current.dependencies);
      workInProgressRootSkippedLanes |= workInProgress2.lanes;
      if (0 === (renderLanes2 & workInProgress2.childLanes))
        if (null !== current) {
          if (propagateParentContextChanges(
            current,
            workInProgress2,
            renderLanes2,
            false
          ), 0 === (renderLanes2 & workInProgress2.childLanes))
            return null;
        } else return null;
      if (null !== current && workInProgress2.child !== current.child)
        throw Error(formatProdErrorMessage(153));
      if (null !== workInProgress2.child) {
        current = workInProgress2.child;
        renderLanes2 = createWorkInProgress(current, current.pendingProps);
        workInProgress2.child = renderLanes2;
        for (renderLanes2.return = workInProgress2; null !== current.sibling; )
          current = current.sibling, renderLanes2 = renderLanes2.sibling = createWorkInProgress(current, current.pendingProps), renderLanes2.return = workInProgress2;
        renderLanes2.sibling = null;
      }
      return workInProgress2.child;
    }
    function checkScheduledUpdateOrContext(current, renderLanes2) {
      if (0 !== (current.lanes & renderLanes2)) return true;
      current = current.dependencies;
      return null !== current && checkIfContextChanged(current) ? true : false;
    }
    function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress2, renderLanes2) {
      switch (workInProgress2.tag) {
        case 3:
          pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
          pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
          resetHydrationState();
          break;
        case 27:
        case 5:
          pushHostContext(workInProgress2);
          break;
        case 4:
          pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
          break;
        case 10:
          pushProvider(
            workInProgress2,
            workInProgress2.type,
            workInProgress2.memoizedProps.value
          );
          break;
        case 31:
          if (null !== workInProgress2.memoizedState)
            return workInProgress2.flags |= 128, pushDehydratedActivitySuspenseHandler(workInProgress2), null;
          break;
        case 13:
          var state$102 = workInProgress2.memoizedState;
          if (null !== state$102) {
            if (null !== state$102.dehydrated)
              return pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags |= 128, null;
            if (0 !== (renderLanes2 & workInProgress2.child.childLanes))
              return updateSuspenseComponent(current, workInProgress2, renderLanes2);
            pushPrimaryTreeSuspenseHandler(workInProgress2);
            current = bailoutOnAlreadyFinishedWork(
              current,
              workInProgress2,
              renderLanes2
            );
            return null !== current ? current.sibling : null;
          }
          pushPrimaryTreeSuspenseHandler(workInProgress2);
          break;
        case 19:
          var didSuspendBefore = 0 !== (current.flags & 128);
          state$102 = 0 !== (renderLanes2 & workInProgress2.childLanes);
          state$102 || (propagateParentContextChanges(
            current,
            workInProgress2,
            renderLanes2,
            false
          ), state$102 = 0 !== (renderLanes2 & workInProgress2.childLanes));
          if (didSuspendBefore) {
            if (state$102)
              return updateSuspenseListComponent(
                current,
                workInProgress2,
                renderLanes2
              );
            workInProgress2.flags |= 128;
          }
          didSuspendBefore = workInProgress2.memoizedState;
          null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
          push(suspenseStackCursor, suspenseStackCursor.current);
          if (state$102) break;
          else return null;
        case 22:
          return workInProgress2.lanes = 0, updateOffscreenComponent(
            current,
            workInProgress2,
            renderLanes2,
            workInProgress2.pendingProps
          );
        case 24:
          pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
      }
      return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
    }
    function beginWork(current, workInProgress2, renderLanes2) {
      if (null !== current)
        if (current.memoizedProps !== workInProgress2.pendingProps)
          didReceiveUpdate = true;
        else {
          if (!checkScheduledUpdateOrContext(current, renderLanes2) && 0 === (workInProgress2.flags & 128))
            return didReceiveUpdate = false, attemptEarlyBailoutIfNoScheduledUpdate(
              current,
              workInProgress2,
              renderLanes2
            );
          didReceiveUpdate = 0 !== (current.flags & 131072) ? true : false;
        }
      else
        didReceiveUpdate = false, isHydrating && 0 !== (workInProgress2.flags & 1048576) && pushTreeId(workInProgress2, treeForkCount, workInProgress2.index);
      workInProgress2.lanes = 0;
      switch (workInProgress2.tag) {
        case 16:
          a: {
            var props = workInProgress2.pendingProps;
            current = resolveLazy(workInProgress2.elementType);
            workInProgress2.type = current;
            if ("function" === typeof current)
              shouldConstruct(current) ? (props = resolveClassComponentProps(current, props), workInProgress2.tag = 1, workInProgress2 = updateClassComponent(
                null,
                workInProgress2,
                current,
                props,
                renderLanes2
              )) : (workInProgress2.tag = 0, workInProgress2 = updateFunctionComponent(
                null,
                workInProgress2,
                current,
                props,
                renderLanes2
              ));
            else {
              if (void 0 !== current && null !== current) {
                var $$typeof = current.$$typeof;
                if ($$typeof === REACT_FORWARD_REF_TYPE) {
                  workInProgress2.tag = 11;
                  workInProgress2 = updateForwardRef(
                    null,
                    workInProgress2,
                    current,
                    props,
                    renderLanes2
                  );
                  break a;
                } else if ($$typeof === REACT_MEMO_TYPE) {
                  workInProgress2.tag = 14;
                  workInProgress2 = updateMemoComponent(
                    null,
                    workInProgress2,
                    current,
                    props,
                    renderLanes2
                  );
                  break a;
                }
              }
              workInProgress2 = getComponentNameFromType(current) || current;
              throw Error(formatProdErrorMessage(306, workInProgress2, ""));
            }
          }
          return workInProgress2;
        case 0:
          return updateFunctionComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 1:
          return props = workInProgress2.type, $$typeof = resolveClassComponentProps(
            props,
            workInProgress2.pendingProps
          ), updateClassComponent(
            current,
            workInProgress2,
            props,
            $$typeof,
            renderLanes2
          );
        case 3:
          a: {
            pushHostContainer(
              workInProgress2,
              workInProgress2.stateNode.containerInfo
            );
            if (null === current) throw Error(formatProdErrorMessage(387));
            props = workInProgress2.pendingProps;
            var prevState = workInProgress2.memoizedState;
            $$typeof = prevState.element;
            cloneUpdateQueue(current, workInProgress2);
            processUpdateQueue(workInProgress2, props, null, renderLanes2);
            var nextState = workInProgress2.memoizedState;
            props = nextState.cache;
            pushProvider(workInProgress2, CacheContext, props);
            props !== prevState.cache && propagateContextChanges(
              workInProgress2,
              [CacheContext],
              renderLanes2,
              true
            );
            suspendIfUpdateReadFromEntangledAsyncAction();
            props = nextState.element;
            if (prevState.isDehydrated)
              if (prevState = {
                element: props,
                isDehydrated: false,
                cache: nextState.cache
              }, workInProgress2.updateQueue.baseState = prevState, workInProgress2.memoizedState = prevState, workInProgress2.flags & 256) {
                workInProgress2 = mountHostRootWithoutHydrating(
                  current,
                  workInProgress2,
                  props,
                  renderLanes2
                );
                break a;
              } else if (props !== $$typeof) {
                $$typeof = createCapturedValueAtFiber(
                  Error(formatProdErrorMessage(424)),
                  workInProgress2
                );
                queueHydrationError($$typeof);
                workInProgress2 = mountHostRootWithoutHydrating(
                  current,
                  workInProgress2,
                  props,
                  renderLanes2
                );
                break a;
              } else {
                current = workInProgress2.stateNode.containerInfo;
                switch (current.nodeType) {
                  case 9:
                    current = current.body;
                    break;
                  default:
                    current = "HTML" === current.nodeName ? current.ownerDocument.body : current;
                }
                nextHydratableInstance = getNextHydratable(current.firstChild);
                hydrationParentFiber = workInProgress2;
                isHydrating = true;
                hydrationErrors = null;
                rootOrSingletonContext = true;
                renderLanes2 = mountChildFibers(
                  workInProgress2,
                  null,
                  props,
                  renderLanes2
                );
                for (workInProgress2.child = renderLanes2; renderLanes2; )
                  renderLanes2.flags = renderLanes2.flags & -3 | 4096, renderLanes2 = renderLanes2.sibling;
              }
            else {
              resetHydrationState();
              if (props === $$typeof) {
                workInProgress2 = bailoutOnAlreadyFinishedWork(
                  current,
                  workInProgress2,
                  renderLanes2
                );
                break a;
              }
              reconcileChildren(current, workInProgress2, props, renderLanes2);
            }
            workInProgress2 = workInProgress2.child;
          }
          return workInProgress2;
        case 26:
          return markRef(current, workInProgress2), null === current ? (renderLanes2 = getResource(
            workInProgress2.type,
            null,
            workInProgress2.pendingProps,
            null
          )) ? workInProgress2.memoizedState = renderLanes2 : isHydrating || (renderLanes2 = workInProgress2.type, current = workInProgress2.pendingProps, props = getOwnerDocumentFromRootContainer(
            rootInstanceStackCursor.current
          ).createElement(renderLanes2), props[internalInstanceKey] = workInProgress2, props[internalPropsKey] = current, setInitialProperties(props, renderLanes2, current), markNodeAsHoistable(props), workInProgress2.stateNode = props) : workInProgress2.memoizedState = getResource(
            workInProgress2.type,
            current.memoizedProps,
            workInProgress2.pendingProps,
            current.memoizedState
          ), null;
        case 27:
          return pushHostContext(workInProgress2), null === current && isHydrating && (props = workInProgress2.stateNode = resolveSingletonInstance(
            workInProgress2.type,
            workInProgress2.pendingProps,
            rootInstanceStackCursor.current
          ), hydrationParentFiber = workInProgress2, rootOrSingletonContext = true, $$typeof = nextHydratableInstance, isSingletonScope(workInProgress2.type) ? (previousHydratableOnEnteringScopedSingleton = $$typeof, nextHydratableInstance = getNextHydratable(props.firstChild)) : nextHydratableInstance = $$typeof), reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), markRef(current, workInProgress2), null === current && (workInProgress2.flags |= 4194304), workInProgress2.child;
        case 5:
          if (null === current && isHydrating) {
            if ($$typeof = props = nextHydratableInstance)
              props = canHydrateInstance(
                props,
                workInProgress2.type,
                workInProgress2.pendingProps,
                rootOrSingletonContext
              ), null !== props ? (workInProgress2.stateNode = props, hydrationParentFiber = workInProgress2, nextHydratableInstance = getNextHydratable(props.firstChild), rootOrSingletonContext = false, $$typeof = true) : $$typeof = false;
            $$typeof || throwOnHydrationMismatch(workInProgress2);
          }
          pushHostContext(workInProgress2);
          $$typeof = workInProgress2.type;
          prevState = workInProgress2.pendingProps;
          nextState = null !== current ? current.memoizedProps : null;
          props = prevState.children;
          shouldSetTextContent($$typeof, prevState) ? props = null : null !== nextState && shouldSetTextContent($$typeof, nextState) && (workInProgress2.flags |= 32);
          null !== workInProgress2.memoizedState && ($$typeof = renderWithHooks(
            current,
            workInProgress2,
            TransitionAwareHostComponent,
            null,
            null,
            renderLanes2
          ), HostTransitionContext._currentValue = $$typeof);
          markRef(current, workInProgress2);
          reconcileChildren(current, workInProgress2, props, renderLanes2);
          return workInProgress2.child;
        case 6:
          if (null === current && isHydrating) {
            if (current = renderLanes2 = nextHydratableInstance)
              renderLanes2 = canHydrateTextInstance(
                renderLanes2,
                workInProgress2.pendingProps,
                rootOrSingletonContext
              ), null !== renderLanes2 ? (workInProgress2.stateNode = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, current = true) : current = false;
            current || throwOnHydrationMismatch(workInProgress2);
          }
          return null;
        case 13:
          return updateSuspenseComponent(current, workInProgress2, renderLanes2);
        case 4:
          return pushHostContainer(
            workInProgress2,
            workInProgress2.stateNode.containerInfo
          ), props = workInProgress2.pendingProps, null === current ? workInProgress2.child = reconcileChildFibers(
            workInProgress2,
            null,
            props,
            renderLanes2
          ) : reconcileChildren(current, workInProgress2, props, renderLanes2), workInProgress2.child;
        case 11:
          return updateForwardRef(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 7:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps,
            renderLanes2
          ), workInProgress2.child;
        case 8:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 12:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 10:
          return props = workInProgress2.pendingProps, pushProvider(workInProgress2, workInProgress2.type, props.value), reconcileChildren(current, workInProgress2, props.children, renderLanes2), workInProgress2.child;
        case 9:
          return $$typeof = workInProgress2.type._context, props = workInProgress2.pendingProps.children, prepareToReadContext(workInProgress2), $$typeof = readContext($$typeof), props = props($$typeof), workInProgress2.flags |= 1, reconcileChildren(current, workInProgress2, props, renderLanes2), workInProgress2.child;
        case 14:
          return updateMemoComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 15:
          return updateSimpleMemoComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 19:
          return updateSuspenseListComponent(current, workInProgress2, renderLanes2);
        case 31:
          return updateActivityComponent(current, workInProgress2, renderLanes2);
        case 22:
          return updateOffscreenComponent(
            current,
            workInProgress2,
            renderLanes2,
            workInProgress2.pendingProps
          );
        case 24:
          return prepareToReadContext(workInProgress2), props = readContext(CacheContext), null === current ? ($$typeof = peekCacheFromPool(), null === $$typeof && ($$typeof = workInProgressRoot, prevState = createCache(), $$typeof.pooledCache = prevState, prevState.refCount++, null !== prevState && ($$typeof.pooledCacheLanes |= renderLanes2), $$typeof = prevState), workInProgress2.memoizedState = { parent: props, cache: $$typeof }, initializeUpdateQueue(workInProgress2), pushProvider(workInProgress2, CacheContext, $$typeof)) : (0 !== (current.lanes & renderLanes2) && (cloneUpdateQueue(current, workInProgress2), processUpdateQueue(workInProgress2, null, null, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction()), $$typeof = current.memoizedState, prevState = workInProgress2.memoizedState, $$typeof.parent !== props ? ($$typeof = { parent: props, cache: props }, workInProgress2.memoizedState = $$typeof, 0 === workInProgress2.lanes && (workInProgress2.memoizedState = workInProgress2.updateQueue.baseState = $$typeof), pushProvider(workInProgress2, CacheContext, props)) : (props = prevState.cache, pushProvider(workInProgress2, CacheContext, props), props !== $$typeof.cache && propagateContextChanges(
            workInProgress2,
            [CacheContext],
            renderLanes2,
            true
          ))), reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 29:
          throw workInProgress2.pendingProps;
      }
      throw Error(formatProdErrorMessage(156, workInProgress2.tag));
    }
    function markUpdate(workInProgress2) {
      workInProgress2.flags |= 4;
    }
    function preloadInstanceAndSuspendIfNeeded(workInProgress2, type, oldProps, newProps, renderLanes2) {
      if (type = 0 !== (workInProgress2.mode & 32)) type = false;
      if (type) {
        if (workInProgress2.flags |= 16777216, (renderLanes2 & 335544128) === renderLanes2)
          if (workInProgress2.stateNode.complete) workInProgress2.flags |= 8192;
          else if (shouldRemainOnPreviousScreen()) workInProgress2.flags |= 8192;
          else
            throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
      } else workInProgress2.flags &= -16777217;
    }
    function preloadResourceAndSuspendIfNeeded(workInProgress2, resource) {
      if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
        workInProgress2.flags &= -16777217;
      else if (workInProgress2.flags |= 16777216, !preloadResource(resource))
        if (shouldRemainOnPreviousScreen()) workInProgress2.flags |= 8192;
        else
          throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
    }
    function scheduleRetryEffect(workInProgress2, retryQueue) {
      null !== retryQueue && (workInProgress2.flags |= 4);
      workInProgress2.flags & 16384 && (retryQueue = 22 !== workInProgress2.tag ? claimNextRetryLane() : 536870912, workInProgress2.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
    }
    function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
      if (!isHydrating)
        switch (renderState.tailMode) {
          case "hidden":
            hasRenderedATailFallback = renderState.tail;
            for (var lastTailNode = null; null !== hasRenderedATailFallback; )
              null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
            null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
            break;
          case "collapsed":
            lastTailNode = renderState.tail;
            for (var lastTailNode$106 = null; null !== lastTailNode; )
              null !== lastTailNode.alternate && (lastTailNode$106 = lastTailNode), lastTailNode = lastTailNode.sibling;
            null === lastTailNode$106 ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : lastTailNode$106.sibling = null;
        }
    }
    function bubbleProperties(completedWork) {
      var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
      if (didBailout)
        for (var child$107 = completedWork.child; null !== child$107; )
          newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags & 65011712, subtreeFlags |= child$107.flags & 65011712, child$107.return = completedWork, child$107 = child$107.sibling;
      else
        for (child$107 = completedWork.child; null !== child$107; )
          newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags, subtreeFlags |= child$107.flags, child$107.return = completedWork, child$107 = child$107.sibling;
      completedWork.subtreeFlags |= subtreeFlags;
      completedWork.childLanes = newChildLanes;
      return didBailout;
    }
    function completeWork(current, workInProgress2, renderLanes2) {
      var newProps = workInProgress2.pendingProps;
      popTreeContext(workInProgress2);
      switch (workInProgress2.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return bubbleProperties(workInProgress2), null;
        case 1:
          return bubbleProperties(workInProgress2), null;
        case 3:
          renderLanes2 = workInProgress2.stateNode;
          newProps = null;
          null !== current && (newProps = current.memoizedState.cache);
          workInProgress2.memoizedState.cache !== newProps && (workInProgress2.flags |= 2048);
          popProvider(CacheContext);
          popHostContainer();
          renderLanes2.pendingContext && (renderLanes2.context = renderLanes2.pendingContext, renderLanes2.pendingContext = null);
          if (null === current || null === current.child)
            popHydrationState(workInProgress2) ? markUpdate(workInProgress2) : null === current || current.memoizedState.isDehydrated && 0 === (workInProgress2.flags & 256) || (workInProgress2.flags |= 1024, upgradeHydrationErrorsToRecoverable());
          bubbleProperties(workInProgress2);
          return null;
        case 26:
          var type = workInProgress2.type, nextResource = workInProgress2.memoizedState;
          null === current ? (markUpdate(workInProgress2), null !== nextResource ? (bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, nextResource)) : (bubbleProperties(workInProgress2), preloadInstanceAndSuspendIfNeeded(
            workInProgress2,
            type,
            null,
            newProps,
            renderLanes2
          ))) : nextResource ? nextResource !== current.memoizedState ? (markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, nextResource)) : (bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217) : (current = current.memoizedProps, current !== newProps && markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadInstanceAndSuspendIfNeeded(
            workInProgress2,
            type,
            current,
            newProps,
            renderLanes2
          ));
          return null;
        case 27:
          popHostContext(workInProgress2);
          renderLanes2 = rootInstanceStackCursor.current;
          type = workInProgress2.type;
          if (null !== current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if (!newProps) {
              if (null === workInProgress2.stateNode)
                throw Error(formatProdErrorMessage(166));
              bubbleProperties(workInProgress2);
              return null;
            }
            current = contextStackCursor.current;
            popHydrationState(workInProgress2) ? prepareToHydrateHostInstance(workInProgress2, current) : (current = resolveSingletonInstance(type, newProps, renderLanes2), workInProgress2.stateNode = current, markUpdate(workInProgress2));
          }
          bubbleProperties(workInProgress2);
          return null;
        case 5:
          popHostContext(workInProgress2);
          type = workInProgress2.type;
          if (null !== current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if (!newProps) {
              if (null === workInProgress2.stateNode)
                throw Error(formatProdErrorMessage(166));
              bubbleProperties(workInProgress2);
              return null;
            }
            nextResource = contextStackCursor.current;
            if (popHydrationState(workInProgress2))
              prepareToHydrateHostInstance(workInProgress2, nextResource);
            else {
              var ownerDocument = getOwnerDocumentFromRootContainer(
                rootInstanceStackCursor.current
              );
              switch (nextResource) {
                case 1:
                  nextResource = ownerDocument.createElementNS(
                    "http://www.w3.org/2000/svg",
                    type
                  );
                  break;
                case 2:
                  nextResource = ownerDocument.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    type
                  );
                  break;
                default:
                  switch (type) {
                    case "svg":
                      nextResource = ownerDocument.createElementNS(
                        "http://www.w3.org/2000/svg",
                        type
                      );
                      break;
                    case "math":
                      nextResource = ownerDocument.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        type
                      );
                      break;
                    case "script":
                      nextResource = ownerDocument.createElement("div");
                      nextResource.innerHTML = "<script><\/script>";
                      nextResource = nextResource.removeChild(
                        nextResource.firstChild
                      );
                      break;
                    case "select":
                      nextResource = "string" === typeof newProps.is ? ownerDocument.createElement("select", {
                        is: newProps.is
                      }) : ownerDocument.createElement("select");
                      newProps.multiple ? nextResource.multiple = true : newProps.size && (nextResource.size = newProps.size);
                      break;
                    default:
                      nextResource = "string" === typeof newProps.is ? ownerDocument.createElement(type, { is: newProps.is }) : ownerDocument.createElement(type);
                  }
              }
              nextResource[internalInstanceKey] = workInProgress2;
              nextResource[internalPropsKey] = newProps;
              a: for (ownerDocument = workInProgress2.child; null !== ownerDocument; ) {
                if (5 === ownerDocument.tag || 6 === ownerDocument.tag)
                  nextResource.appendChild(ownerDocument.stateNode);
                else if (4 !== ownerDocument.tag && 27 !== ownerDocument.tag && null !== ownerDocument.child) {
                  ownerDocument.child.return = ownerDocument;
                  ownerDocument = ownerDocument.child;
                  continue;
                }
                if (ownerDocument === workInProgress2) break a;
                for (; null === ownerDocument.sibling; ) {
                  if (null === ownerDocument.return || ownerDocument.return === workInProgress2)
                    break a;
                  ownerDocument = ownerDocument.return;
                }
                ownerDocument.sibling.return = ownerDocument.return;
                ownerDocument = ownerDocument.sibling;
              }
              workInProgress2.stateNode = nextResource;
              a: switch (setInitialProperties(nextResource, type, newProps), type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  newProps = !!newProps.autoFocus;
                  break a;
                case "img":
                  newProps = true;
                  break a;
                default:
                  newProps = false;
              }
              newProps && markUpdate(workInProgress2);
            }
          }
          bubbleProperties(workInProgress2);
          preloadInstanceAndSuspendIfNeeded(
            workInProgress2,
            workInProgress2.type,
            null === current ? null : current.memoizedProps,
            workInProgress2.pendingProps,
            renderLanes2
          );
          return null;
        case 6:
          if (current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if ("string" !== typeof newProps && null === workInProgress2.stateNode)
              throw Error(formatProdErrorMessage(166));
            current = rootInstanceStackCursor.current;
            if (popHydrationState(workInProgress2)) {
              current = workInProgress2.stateNode;
              renderLanes2 = workInProgress2.memoizedProps;
              newProps = null;
              type = hydrationParentFiber;
              if (null !== type)
                switch (type.tag) {
                  case 27:
                  case 5:
                    newProps = type.memoizedProps;
                }
              current[internalInstanceKey] = workInProgress2;
              current = current.nodeValue === renderLanes2 || null !== newProps && true === newProps.suppressHydrationWarning || checkForUnmatchedText(current.nodeValue, renderLanes2) ? true : false;
              current || throwOnHydrationMismatch(workInProgress2, true);
            } else
              current = getOwnerDocumentFromRootContainer(current).createTextNode(
                newProps
              ), current[internalInstanceKey] = workInProgress2, workInProgress2.stateNode = current;
          }
          bubbleProperties(workInProgress2);
          return null;
        case 31:
          renderLanes2 = workInProgress2.memoizedState;
          if (null === current || null !== current.memoizedState) {
            newProps = popHydrationState(workInProgress2);
            if (null !== renderLanes2) {
              if (null === current) {
                if (!newProps) throw Error(formatProdErrorMessage(318));
                current = workInProgress2.memoizedState;
                current = null !== current ? current.dehydrated : null;
                if (!current) throw Error(formatProdErrorMessage(557));
                current[internalInstanceKey] = workInProgress2;
              } else
                resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4;
              bubbleProperties(workInProgress2);
              current = false;
            } else
              renderLanes2 = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = renderLanes2), current = true;
            if (!current) {
              if (workInProgress2.flags & 256)
                return popSuspenseHandler(workInProgress2), workInProgress2;
              popSuspenseHandler(workInProgress2);
              return null;
            }
            if (0 !== (workInProgress2.flags & 128))
              throw Error(formatProdErrorMessage(558));
          }
          bubbleProperties(workInProgress2);
          return null;
        case 13:
          newProps = workInProgress2.memoizedState;
          if (null === current || null !== current.memoizedState && null !== current.memoizedState.dehydrated) {
            type = popHydrationState(workInProgress2);
            if (null !== newProps && null !== newProps.dehydrated) {
              if (null === current) {
                if (!type) throw Error(formatProdErrorMessage(318));
                type = workInProgress2.memoizedState;
                type = null !== type ? type.dehydrated : null;
                if (!type) throw Error(formatProdErrorMessage(317));
                type[internalInstanceKey] = workInProgress2;
              } else
                resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4;
              bubbleProperties(workInProgress2);
              type = false;
            } else
              type = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = type), type = true;
            if (!type) {
              if (workInProgress2.flags & 256)
                return popSuspenseHandler(workInProgress2), workInProgress2;
              popSuspenseHandler(workInProgress2);
              return null;
            }
          }
          popSuspenseHandler(workInProgress2);
          if (0 !== (workInProgress2.flags & 128))
            return workInProgress2.lanes = renderLanes2, workInProgress2;
          renderLanes2 = null !== newProps;
          current = null !== current && null !== current.memoizedState;
          renderLanes2 && (newProps = workInProgress2.child, type = null, null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (type = newProps.alternate.memoizedState.cachePool.pool), nextResource = null, null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (nextResource = newProps.memoizedState.cachePool.pool), nextResource !== type && (newProps.flags |= 2048));
          renderLanes2 !== current && renderLanes2 && (workInProgress2.child.flags |= 8192);
          scheduleRetryEffect(workInProgress2, workInProgress2.updateQueue);
          bubbleProperties(workInProgress2);
          return null;
        case 4:
          return popHostContainer(), null === current && listenToAllSupportedEvents(workInProgress2.stateNode.containerInfo), bubbleProperties(workInProgress2), null;
        case 10:
          return popProvider(workInProgress2.type), bubbleProperties(workInProgress2), null;
        case 19:
          pop(suspenseStackCursor);
          newProps = workInProgress2.memoizedState;
          if (null === newProps) return bubbleProperties(workInProgress2), null;
          type = 0 !== (workInProgress2.flags & 128);
          nextResource = newProps.rendering;
          if (null === nextResource)
            if (type) cutOffTailIfNeeded(newProps, false);
            else {
              if (0 !== workInProgressRootExitStatus || null !== current && 0 !== (current.flags & 128))
                for (current = workInProgress2.child; null !== current; ) {
                  nextResource = findFirstSuspended(current);
                  if (null !== nextResource) {
                    workInProgress2.flags |= 128;
                    cutOffTailIfNeeded(newProps, false);
                    current = nextResource.updateQueue;
                    workInProgress2.updateQueue = current;
                    scheduleRetryEffect(workInProgress2, current);
                    workInProgress2.subtreeFlags = 0;
                    current = renderLanes2;
                    for (renderLanes2 = workInProgress2.child; null !== renderLanes2; )
                      resetWorkInProgress(renderLanes2, current), renderLanes2 = renderLanes2.sibling;
                    push(
                      suspenseStackCursor,
                      suspenseStackCursor.current & 1 | 2
                    );
                    isHydrating && pushTreeFork(workInProgress2, newProps.treeForkCount);
                    return workInProgress2.child;
                  }
                  current = current.sibling;
                }
              null !== newProps.tail && now() > workInProgressRootRenderTargetTime && (workInProgress2.flags |= 128, type = true, cutOffTailIfNeeded(newProps, false), workInProgress2.lanes = 4194304);
            }
          else {
            if (!type)
              if (current = findFirstSuspended(nextResource), null !== current) {
                if (workInProgress2.flags |= 128, type = true, current = current.updateQueue, workInProgress2.updateQueue = current, scheduleRetryEffect(workInProgress2, current), cutOffTailIfNeeded(newProps, true), null === newProps.tail && "hidden" === newProps.tailMode && !nextResource.alternate && !isHydrating)
                  return bubbleProperties(workInProgress2), null;
              } else
                2 * now() - newProps.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes2 && (workInProgress2.flags |= 128, type = true, cutOffTailIfNeeded(newProps, false), workInProgress2.lanes = 4194304);
            newProps.isBackwards ? (nextResource.sibling = workInProgress2.child, workInProgress2.child = nextResource) : (current = newProps.last, null !== current ? current.sibling = nextResource : workInProgress2.child = nextResource, newProps.last = nextResource);
          }
          if (null !== newProps.tail)
            return current = newProps.tail, newProps.rendering = current, newProps.tail = current.sibling, newProps.renderingStartTime = now(), current.sibling = null, renderLanes2 = suspenseStackCursor.current, push(
              suspenseStackCursor,
              type ? renderLanes2 & 1 | 2 : renderLanes2 & 1
            ), isHydrating && pushTreeFork(workInProgress2, newProps.treeForkCount), current;
          bubbleProperties(workInProgress2);
          return null;
        case 22:
        case 23:
          return popSuspenseHandler(workInProgress2), popHiddenContext(), newProps = null !== workInProgress2.memoizedState, null !== current ? null !== current.memoizedState !== newProps && (workInProgress2.flags |= 8192) : newProps && (workInProgress2.flags |= 8192), newProps ? 0 !== (renderLanes2 & 536870912) && 0 === (workInProgress2.flags & 128) && (bubbleProperties(workInProgress2), workInProgress2.subtreeFlags & 6 && (workInProgress2.flags |= 8192)) : bubbleProperties(workInProgress2), renderLanes2 = workInProgress2.updateQueue, null !== renderLanes2 && scheduleRetryEffect(workInProgress2, renderLanes2.retryQueue), renderLanes2 = null, null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (renderLanes2 = current.memoizedState.cachePool.pool), newProps = null, null !== workInProgress2.memoizedState && null !== workInProgress2.memoizedState.cachePool && (newProps = workInProgress2.memoizedState.cachePool.pool), newProps !== renderLanes2 && (workInProgress2.flags |= 2048), null !== current && pop(resumedCache), null;
        case 24:
          return renderLanes2 = null, null !== current && (renderLanes2 = current.memoizedState.cache), workInProgress2.memoizedState.cache !== renderLanes2 && (workInProgress2.flags |= 2048), popProvider(CacheContext), bubbleProperties(workInProgress2), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(formatProdErrorMessage(156, workInProgress2.tag));
    }
    function unwindWork(current, workInProgress2) {
      popTreeContext(workInProgress2);
      switch (workInProgress2.tag) {
        case 1:
          return current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 3:
          return popProvider(CacheContext), popHostContainer(), current = workInProgress2.flags, 0 !== (current & 65536) && 0 === (current & 128) ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 26:
        case 27:
        case 5:
          return popHostContext(workInProgress2), null;
        case 31:
          if (null !== workInProgress2.memoizedState) {
            popSuspenseHandler(workInProgress2);
            if (null === workInProgress2.alternate)
              throw Error(formatProdErrorMessage(340));
            resetHydrationState();
          }
          current = workInProgress2.flags;
          return current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 13:
          popSuspenseHandler(workInProgress2);
          current = workInProgress2.memoizedState;
          if (null !== current && null !== current.dehydrated) {
            if (null === workInProgress2.alternate)
              throw Error(formatProdErrorMessage(340));
            resetHydrationState();
          }
          current = workInProgress2.flags;
          return current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 19:
          return pop(suspenseStackCursor), null;
        case 4:
          return popHostContainer(), null;
        case 10:
          return popProvider(workInProgress2.type), null;
        case 22:
        case 23:
          return popSuspenseHandler(workInProgress2), popHiddenContext(), null !== current && pop(resumedCache), current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 24:
          return popProvider(CacheContext), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function unwindInterruptedWork(current, interruptedWork) {
      popTreeContext(interruptedWork);
      switch (interruptedWork.tag) {
        case 3:
          popProvider(CacheContext);
          popHostContainer();
          break;
        case 26:
        case 27:
        case 5:
          popHostContext(interruptedWork);
          break;
        case 4:
          popHostContainer();
          break;
        case 31:
          null !== interruptedWork.memoizedState && popSuspenseHandler(interruptedWork);
          break;
        case 13:
          popSuspenseHandler(interruptedWork);
          break;
        case 19:
          pop(suspenseStackCursor);
          break;
        case 10:
          popProvider(interruptedWork.type);
          break;
        case 22:
        case 23:
          popSuspenseHandler(interruptedWork);
          popHiddenContext();
          null !== current && pop(resumedCache);
          break;
        case 24:
          popProvider(CacheContext);
      }
    }
    function commitHookEffectListMount(flags, finishedWork) {
      try {
        var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
        if (null !== lastEffect) {
          var firstEffect = lastEffect.next;
          updateQueue = firstEffect;
          do {
            if ((updateQueue.tag & flags) === flags) {
              lastEffect = void 0;
              var create = updateQueue.create, inst = updateQueue.inst;
              lastEffect = create();
              inst.destroy = lastEffect;
            }
            updateQueue = updateQueue.next;
          } while (updateQueue !== firstEffect);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor$jscomp$0) {
      try {
        var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
        if (null !== lastEffect) {
          var firstEffect = lastEffect.next;
          updateQueue = firstEffect;
          do {
            if ((updateQueue.tag & flags) === flags) {
              var inst = updateQueue.inst, destroy = inst.destroy;
              if (void 0 !== destroy) {
                inst.destroy = void 0;
                lastEffect = finishedWork;
                var nearestMountedAncestor = nearestMountedAncestor$jscomp$0, destroy_ = destroy;
                try {
                  destroy_();
                } catch (error) {
                  captureCommitPhaseError(
                    lastEffect,
                    nearestMountedAncestor,
                    error
                  );
                }
              }
            }
            updateQueue = updateQueue.next;
          } while (updateQueue !== firstEffect);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitClassCallbacks(finishedWork) {
      var updateQueue = finishedWork.updateQueue;
      if (null !== updateQueue) {
        var instance = finishedWork.stateNode;
        try {
          commitCallbacks(updateQueue, instance);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
    }
    function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
      instance.props = resolveClassComponentProps(
        current.type,
        current.memoizedProps
      );
      instance.state = current.memoizedState;
      try {
        instance.componentWillUnmount();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      }
    }
    function safelyAttachRef(current, nearestMountedAncestor) {
      try {
        var ref = current.ref;
        if (null !== ref) {
          switch (current.tag) {
            case 26:
            case 27:
            case 5:
              var instanceToUse = current.stateNode;
              break;
            case 30:
              instanceToUse = current.stateNode;
              break;
            default:
              instanceToUse = current.stateNode;
          }
          "function" === typeof ref ? current.refCleanup = ref(instanceToUse) : ref.current = instanceToUse;
        }
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      }
    }
    function safelyDetachRef(current, nearestMountedAncestor) {
      var ref = current.ref, refCleanup = current.refCleanup;
      if (null !== ref)
        if ("function" === typeof refCleanup)
          try {
            refCleanup();
          } catch (error) {
            captureCommitPhaseError(current, nearestMountedAncestor, error);
          } finally {
            current.refCleanup = null, current = current.alternate, null != current && (current.refCleanup = null);
          }
        else if ("function" === typeof ref)
          try {
            ref(null);
          } catch (error$140) {
            captureCommitPhaseError(current, nearestMountedAncestor, error$140);
          }
        else ref.current = null;
    }
    function commitHostMount(finishedWork) {
      var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
      try {
        a: switch (type) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            props.autoFocus && instance.focus();
            break a;
          case "img":
            props.src ? instance.src = props.src : props.srcSet && (instance.srcset = props.srcSet);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitHostUpdate(finishedWork, newProps, oldProps) {
      try {
        var domElement = finishedWork.stateNode;
        updateProperties(domElement, finishedWork.type, oldProps, newProps);
        domElement[internalPropsKey] = newProps;
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function isHostParent(fiber) {
      return 5 === fiber.tag || 3 === fiber.tag || 26 === fiber.tag || 27 === fiber.tag && isSingletonScope(fiber.type) || 4 === fiber.tag;
    }
    function getHostSibling(fiber) {
      a: for (; ; ) {
        for (; null === fiber.sibling; ) {
          if (null === fiber.return || isHostParent(fiber.return)) return null;
          fiber = fiber.return;
        }
        fiber.sibling.return = fiber.return;
        for (fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag; ) {
          if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
          if (fiber.flags & 2) continue a;
          if (null === fiber.child || 4 === fiber.tag) continue a;
          else fiber.child.return = fiber, fiber = fiber.child;
        }
        if (!(fiber.flags & 2)) return fiber.stateNode;
      }
    }
    function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
      var tag = node.tag;
      if (5 === tag || 6 === tag)
        node = node.stateNode, before ? (9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent).insertBefore(node, before) : (before = 9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent, before.appendChild(node), parent = parent._reactRootContainer, null !== parent && void 0 !== parent || null !== before.onclick || (before.onclick = noop$1));
      else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode, before = null), node = node.child, null !== node))
        for (insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling; null !== node; )
          insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling;
    }
    function insertOrAppendPlacementNode(node, before, parent) {
      var tag = node.tag;
      if (5 === tag || 6 === tag)
        node = node.stateNode, before ? parent.insertBefore(node, before) : parent.appendChild(node);
      else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode), node = node.child, null !== node))
        for (insertOrAppendPlacementNode(node, before, parent), node = node.sibling; null !== node; )
          insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
    }
    function commitHostSingletonAcquisition(finishedWork) {
      var singleton = finishedWork.stateNode, props = finishedWork.memoizedProps;
      try {
        for (var type = finishedWork.type, attributes = singleton.attributes; attributes.length; )
          singleton.removeAttributeNode(attributes[0]);
        setInitialProperties(singleton, type, props);
        singleton[internalInstanceKey] = finishedWork;
        singleton[internalPropsKey] = props;
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    var offscreenSubtreeIsHidden = false;
    var offscreenSubtreeWasHidden = false;
    var needsFormReset = false;
    var PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set;
    var nextEffect = null;
    function commitBeforeMutationEffects(root3, firstChild) {
      root3 = root3.containerInfo;
      eventsEnabled = _enabled;
      root3 = getActiveElementDeep(root3);
      if (hasSelectionCapabilities(root3)) {
        if ("selectionStart" in root3)
          var JSCompiler_temp = {
            start: root3.selectionStart,
            end: root3.selectionEnd
          };
        else
          a: {
            JSCompiler_temp = (JSCompiler_temp = root3.ownerDocument) && JSCompiler_temp.defaultView || window;
            var selection = JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
            if (selection && 0 !== selection.rangeCount) {
              JSCompiler_temp = selection.anchorNode;
              var anchorOffset = selection.anchorOffset, focusNode = selection.focusNode;
              selection = selection.focusOffset;
              try {
                JSCompiler_temp.nodeType, focusNode.nodeType;
              } catch (e$20) {
                JSCompiler_temp = null;
                break a;
              }
              var length = 0, start = -1, end = -1, indexWithinAnchor = 0, indexWithinFocus = 0, node = root3, parentNode = null;
              b: for (; ; ) {
                for (var next; ; ) {
                  node !== JSCompiler_temp || 0 !== anchorOffset && 3 !== node.nodeType || (start = length + anchorOffset);
                  node !== focusNode || 0 !== selection && 3 !== node.nodeType || (end = length + selection);
                  3 === node.nodeType && (length += node.nodeValue.length);
                  if (null === (next = node.firstChild)) break;
                  parentNode = node;
                  node = next;
                }
                for (; ; ) {
                  if (node === root3) break b;
                  parentNode === JSCompiler_temp && ++indexWithinAnchor === anchorOffset && (start = length);
                  parentNode === focusNode && ++indexWithinFocus === selection && (end = length);
                  if (null !== (next = node.nextSibling)) break;
                  node = parentNode;
                  parentNode = node.parentNode;
                }
                node = next;
              }
              JSCompiler_temp = -1 === start || -1 === end ? null : { start, end };
            } else JSCompiler_temp = null;
          }
        JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
      } else JSCompiler_temp = null;
      selectionInformation = { focusedElem: root3, selectionRange: JSCompiler_temp };
      _enabled = false;
      for (nextEffect = firstChild; null !== nextEffect; )
        if (firstChild = nextEffect, root3 = firstChild.child, 0 !== (firstChild.subtreeFlags & 1028) && null !== root3)
          root3.return = firstChild, nextEffect = root3;
        else
          for (; null !== nextEffect; ) {
            firstChild = nextEffect;
            focusNode = firstChild.alternate;
            root3 = firstChild.flags;
            switch (firstChild.tag) {
              case 0:
                if (0 !== (root3 & 4) && (root3 = firstChild.updateQueue, root3 = null !== root3 ? root3.events : null, null !== root3))
                  for (JSCompiler_temp = 0; JSCompiler_temp < root3.length; JSCompiler_temp++)
                    anchorOffset = root3[JSCompiler_temp], anchorOffset.ref.impl = anchorOffset.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (0 !== (root3 & 1024) && null !== focusNode) {
                  root3 = void 0;
                  JSCompiler_temp = firstChild;
                  anchorOffset = focusNode.memoizedProps;
                  focusNode = focusNode.memoizedState;
                  selection = JSCompiler_temp.stateNode;
                  try {
                    var resolvedPrevProps = resolveClassComponentProps(
                      JSCompiler_temp.type,
                      anchorOffset
                    );
                    root3 = selection.getSnapshotBeforeUpdate(
                      resolvedPrevProps,
                      focusNode
                    );
                    selection.__reactInternalSnapshotBeforeUpdate = root3;
                  } catch (error) {
                    captureCommitPhaseError(
                      JSCompiler_temp,
                      JSCompiler_temp.return,
                      error
                    );
                  }
                }
                break;
              case 3:
                if (0 !== (root3 & 1024)) {
                  if (root3 = firstChild.stateNode.containerInfo, JSCompiler_temp = root3.nodeType, 9 === JSCompiler_temp)
                    clearContainerSparingly(root3);
                  else if (1 === JSCompiler_temp)
                    switch (root3.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        clearContainerSparingly(root3);
                        break;
                      default:
                        root3.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (0 !== (root3 & 1024)) throw Error(formatProdErrorMessage(163));
            }
            root3 = firstChild.sibling;
            if (null !== root3) {
              root3.return = firstChild.return;
              nextEffect = root3;
              break;
            }
            nextEffect = firstChild.return;
          }
    }
    function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
      var flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          flags & 4 && commitHookEffectListMount(5, finishedWork);
          break;
        case 1:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          if (flags & 4)
            if (finishedRoot = finishedWork.stateNode, null === current)
              try {
                finishedRoot.componentDidMount();
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            else {
              var prevProps = resolveClassComponentProps(
                finishedWork.type,
                current.memoizedProps
              );
              current = current.memoizedState;
              try {
                finishedRoot.componentDidUpdate(
                  prevProps,
                  current,
                  finishedRoot.__reactInternalSnapshotBeforeUpdate
                );
              } catch (error$139) {
                captureCommitPhaseError(
                  finishedWork,
                  finishedWork.return,
                  error$139
                );
              }
            }
          flags & 64 && commitClassCallbacks(finishedWork);
          flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
          break;
        case 3:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          if (flags & 64 && (finishedRoot = finishedWork.updateQueue, null !== finishedRoot)) {
            current = null;
            if (null !== finishedWork.child)
              switch (finishedWork.child.tag) {
                case 27:
                case 5:
                  current = finishedWork.child.stateNode;
                  break;
                case 1:
                  current = finishedWork.child.stateNode;
              }
            try {
              commitCallbacks(finishedRoot, current);
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          break;
        case 27:
          null === current && flags & 4 && commitHostSingletonAcquisition(finishedWork);
        case 26:
        case 5:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          null === current && flags & 4 && commitHostMount(finishedWork);
          flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
          break;
        case 12:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          break;
        case 31:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
          break;
        case 13:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
          flags & 64 && (finishedRoot = finishedWork.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot && (finishedWork = retryDehydratedSuspenseBoundary.bind(
            null,
            finishedWork
          ), registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
          break;
        case 22:
          flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
          if (!flags) {
            current = null !== current && null !== current.memoizedState || offscreenSubtreeWasHidden;
            prevProps = offscreenSubtreeIsHidden;
            var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
            offscreenSubtreeIsHidden = flags;
            (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              0 !== (finishedWork.subtreeFlags & 8772)
            ) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            offscreenSubtreeIsHidden = prevProps;
            offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
          }
          break;
        case 30:
          break;
        default:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      }
    }
    function detachFiberAfterEffects(fiber) {
      var alternate = fiber.alternate;
      null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
      fiber.child = null;
      fiber.deletions = null;
      fiber.sibling = null;
      5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
      fiber.stateNode = null;
      fiber.return = null;
      fiber.dependencies = null;
      fiber.memoizedProps = null;
      fiber.memoizedState = null;
      fiber.pendingProps = null;
      fiber.stateNode = null;
      fiber.updateQueue = null;
    }
    var hostParent = null;
    var hostParentIsContainer = false;
    function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
      for (parent = parent.child; null !== parent; )
        commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent), parent = parent.sibling;
    }
    function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
      if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
        try {
          injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
        } catch (err) {
        }
      switch (deletedFiber.tag) {
        case 26:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          deletedFiber.memoizedState ? deletedFiber.memoizedState.count-- : deletedFiber.stateNode && (deletedFiber = deletedFiber.stateNode, deletedFiber.parentNode.removeChild(deletedFiber));
          break;
        case 27:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
          var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
          isSingletonScope(deletedFiber.type) && (hostParent = deletedFiber.stateNode, hostParentIsContainer = false);
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          releaseSingletonInstance(deletedFiber.stateNode);
          hostParent = prevHostParent;
          hostParentIsContainer = prevHostParentIsContainer;
          break;
        case 5:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
        case 6:
          prevHostParent = hostParent;
          prevHostParentIsContainer = hostParentIsContainer;
          hostParent = null;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          hostParent = prevHostParent;
          hostParentIsContainer = prevHostParentIsContainer;
          if (null !== hostParent)
            if (hostParentIsContainer)
              try {
                (9 === hostParent.nodeType ? hostParent.body : "HTML" === hostParent.nodeName ? hostParent.ownerDocument.body : hostParent).removeChild(deletedFiber.stateNode);
              } catch (error) {
                captureCommitPhaseError(
                  deletedFiber,
                  nearestMountedAncestor,
                  error
                );
              }
            else
              try {
                hostParent.removeChild(deletedFiber.stateNode);
              } catch (error) {
                captureCommitPhaseError(
                  deletedFiber,
                  nearestMountedAncestor,
                  error
                );
              }
          break;
        case 18:
          null !== hostParent && (hostParentIsContainer ? (finishedRoot = hostParent, clearHydrationBoundary(
            9 === finishedRoot.nodeType ? finishedRoot.body : "HTML" === finishedRoot.nodeName ? finishedRoot.ownerDocument.body : finishedRoot,
            deletedFiber.stateNode
          ), retryIfBlockedOn(finishedRoot)) : clearHydrationBoundary(hostParent, deletedFiber.stateNode));
          break;
        case 4:
          prevHostParent = hostParent;
          prevHostParentIsContainer = hostParentIsContainer;
          hostParent = deletedFiber.stateNode.containerInfo;
          hostParentIsContainer = true;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          hostParent = prevHostParent;
          hostParentIsContainer = prevHostParentIsContainer;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
          offscreenSubtreeWasHidden || commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 1:
          offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(
            deletedFiber,
            nearestMountedAncestor,
            prevHostParent
          ));
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 21:
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 22:
          offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          offscreenSubtreeWasHidden = prevHostParent;
          break;
        default:
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
      }
    }
    function commitActivityHydrationCallbacks(finishedRoot, finishedWork) {
      if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot))) {
        finishedRoot = finishedRoot.dehydrated;
        try {
          retryIfBlockedOn(finishedRoot);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
    }
    function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
      if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot))))
        try {
          retryIfBlockedOn(finishedRoot);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
    }
    function getRetryCache(finishedWork) {
      switch (finishedWork.tag) {
        case 31:
        case 13:
        case 19:
          var retryCache = finishedWork.stateNode;
          null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
          return retryCache;
        case 22:
          return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
        default:
          throw Error(formatProdErrorMessage(435, finishedWork.tag));
      }
    }
    function attachSuspenseRetryListeners(finishedWork, wakeables) {
      var retryCache = getRetryCache(finishedWork);
      wakeables.forEach(function(wakeable) {
        if (!retryCache.has(wakeable)) {
          retryCache.add(wakeable);
          var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
          wakeable.then(retry, retry);
        }
      });
    }
    function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
      var deletions = parentFiber.deletions;
      if (null !== deletions)
        for (var i = 0; i < deletions.length; i++) {
          var childToDelete = deletions[i], root3 = root$jscomp$0, returnFiber = parentFiber, parent = returnFiber;
          a: for (; null !== parent; ) {
            switch (parent.tag) {
              case 27:
                if (isSingletonScope(parent.type)) {
                  hostParent = parent.stateNode;
                  hostParentIsContainer = false;
                  break a;
                }
                break;
              case 5:
                hostParent = parent.stateNode;
                hostParentIsContainer = false;
                break a;
              case 3:
              case 4:
                hostParent = parent.stateNode.containerInfo;
                hostParentIsContainer = true;
                break a;
            }
            parent = parent.return;
          }
          if (null === hostParent) throw Error(formatProdErrorMessage(160));
          commitDeletionEffectsOnFiber(root3, returnFiber, childToDelete);
          hostParent = null;
          hostParentIsContainer = false;
          root3 = childToDelete.alternate;
          null !== root3 && (root3.return = null);
          childToDelete.return = null;
        }
      if (parentFiber.subtreeFlags & 13886)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
    }
    var currentHoistableRoot = null;
    function commitMutationEffectsOnFiber(finishedWork, root3) {
      var current = finishedWork.alternate, flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          recursivelyTraverseMutationEffects(root3, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 4 && (commitHookEffectListUnmount(3, finishedWork, finishedWork.return), commitHookEffectListMount(3, finishedWork), commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
          break;
        case 1:
          recursivelyTraverseMutationEffects(root3, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current ? flags : current.concat(flags))));
          break;
        case 26:
          var hoistableRoot = currentHoistableRoot;
          recursivelyTraverseMutationEffects(root3, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          if (flags & 4) {
            var currentResource = null !== current ? current.memoizedState : null;
            flags = finishedWork.memoizedState;
            if (null === current)
              if (null === flags)
                if (null === finishedWork.stateNode) {
                  a: {
                    flags = finishedWork.type;
                    current = finishedWork.memoizedProps;
                    hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
                    b: switch (flags) {
                      case "title":
                        currentResource = hoistableRoot.getElementsByTagName("title")[0];
                        if (!currentResource || currentResource[internalHoistableMarker] || currentResource[internalInstanceKey] || "http://www.w3.org/2000/svg" === currentResource.namespaceURI || currentResource.hasAttribute("itemprop"))
                          currentResource = hoistableRoot.createElement(flags), hoistableRoot.head.insertBefore(
                            currentResource,
                            hoistableRoot.querySelector("head > title")
                          );
                        setInitialProperties(currentResource, flags, current);
                        currentResource[internalInstanceKey] = finishedWork;
                        markNodeAsHoistable(currentResource);
                        flags = currentResource;
                        break a;
                      case "link":
                        var maybeNodes = getHydratableHoistableCache(
                          "link",
                          "href",
                          hoistableRoot
                        ).get(flags + (current.href || ""));
                        if (maybeNodes) {
                          for (var i = 0; i < maybeNodes.length; i++)
                            if (currentResource = maybeNodes[i], currentResource.getAttribute("href") === (null == current.href || "" === current.href ? null : current.href) && currentResource.getAttribute("rel") === (null == current.rel ? null : current.rel) && currentResource.getAttribute("title") === (null == current.title ? null : current.title) && currentResource.getAttribute("crossorigin") === (null == current.crossOrigin ? null : current.crossOrigin)) {
                              maybeNodes.splice(i, 1);
                              break b;
                            }
                        }
                        currentResource = hoistableRoot.createElement(flags);
                        setInitialProperties(currentResource, flags, current);
                        hoistableRoot.head.appendChild(currentResource);
                        break;
                      case "meta":
                        if (maybeNodes = getHydratableHoistableCache(
                          "meta",
                          "content",
                          hoistableRoot
                        ).get(flags + (current.content || ""))) {
                          for (i = 0; i < maybeNodes.length; i++)
                            if (currentResource = maybeNodes[i], currentResource.getAttribute("content") === (null == current.content ? null : "" + current.content) && currentResource.getAttribute("name") === (null == current.name ? null : current.name) && currentResource.getAttribute("property") === (null == current.property ? null : current.property) && currentResource.getAttribute("http-equiv") === (null == current.httpEquiv ? null : current.httpEquiv) && currentResource.getAttribute("charset") === (null == current.charSet ? null : current.charSet)) {
                              maybeNodes.splice(i, 1);
                              break b;
                            }
                        }
                        currentResource = hoistableRoot.createElement(flags);
                        setInitialProperties(currentResource, flags, current);
                        hoistableRoot.head.appendChild(currentResource);
                        break;
                      default:
                        throw Error(formatProdErrorMessage(468, flags));
                    }
                    currentResource[internalInstanceKey] = finishedWork;
                    markNodeAsHoistable(currentResource);
                    flags = currentResource;
                  }
                  finishedWork.stateNode = flags;
                } else
                  mountHoistable(
                    hoistableRoot,
                    finishedWork.type,
                    finishedWork.stateNode
                  );
              else
                finishedWork.stateNode = acquireResource(
                  hoistableRoot,
                  flags,
                  finishedWork.memoizedProps
                );
            else
              currentResource !== flags ? (null === currentResource ? null !== current.stateNode && (current = current.stateNode, current.parentNode.removeChild(current)) : currentResource.count--, null === flags ? mountHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.stateNode
              ) : acquireResource(
                hoistableRoot,
                flags,
                finishedWork.memoizedProps
              )) : null === flags && null !== finishedWork.stateNode && commitHostUpdate(
                finishedWork,
                finishedWork.memoizedProps,
                current.memoizedProps
              );
          }
          break;
        case 27:
          recursivelyTraverseMutationEffects(root3, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          null !== current && flags & 4 && commitHostUpdate(
            finishedWork,
            finishedWork.memoizedProps,
            current.memoizedProps
          );
          break;
        case 5:
          recursivelyTraverseMutationEffects(root3, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          if (finishedWork.flags & 32) {
            hoistableRoot = finishedWork.stateNode;
            try {
              setTextContent(hoistableRoot, "");
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          flags & 4 && null != finishedWork.stateNode && (hoistableRoot = finishedWork.memoizedProps, commitHostUpdate(
            finishedWork,
            hoistableRoot,
            null !== current ? current.memoizedProps : hoistableRoot
          ));
          flags & 1024 && (needsFormReset = true);
          break;
        case 6:
          recursivelyTraverseMutationEffects(root3, finishedWork);
          commitReconciliationEffects(finishedWork);
          if (flags & 4) {
            if (null === finishedWork.stateNode)
              throw Error(formatProdErrorMessage(162));
            flags = finishedWork.memoizedProps;
            current = finishedWork.stateNode;
            try {
              current.nodeValue = flags;
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          break;
        case 3:
          tagCaches = null;
          hoistableRoot = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(root3.containerInfo);
          recursivelyTraverseMutationEffects(root3, finishedWork);
          currentHoistableRoot = hoistableRoot;
          commitReconciliationEffects(finishedWork);
          if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
            try {
              retryIfBlockedOn(root3.containerInfo);
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          needsFormReset && (needsFormReset = false, recursivelyResetForms(finishedWork));
          break;
        case 4:
          flags = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(
            finishedWork.stateNode.containerInfo
          );
          recursivelyTraverseMutationEffects(root3, finishedWork);
          commitReconciliationEffects(finishedWork);
          currentHoistableRoot = flags;
          break;
        case 12:
          recursivelyTraverseMutationEffects(root3, finishedWork);
          commitReconciliationEffects(finishedWork);
          break;
        case 31:
          recursivelyTraverseMutationEffects(root3, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
          break;
        case 13:
          recursivelyTraverseMutationEffects(root3, finishedWork);
          commitReconciliationEffects(finishedWork);
          finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current && null !== current.memoizedState) && (globalMostRecentFallbackTime = now());
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
          break;
        case 22:
          hoistableRoot = null !== finishedWork.memoizedState;
          var wasHidden = null !== current && null !== current.memoizedState, prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
          offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
          offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
          recursivelyTraverseMutationEffects(root3, finishedWork);
          offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
          offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
          commitReconciliationEffects(finishedWork);
          if (flags & 8192)
            a: for (root3 = finishedWork.stateNode, root3._visibility = hoistableRoot ? root3._visibility & -2 : root3._visibility | 1, hoistableRoot && (null === current || wasHidden || offscreenSubtreeIsHidden || offscreenSubtreeWasHidden || recursivelyTraverseDisappearLayoutEffects(finishedWork)), current = null, root3 = finishedWork; ; ) {
              if (5 === root3.tag || 26 === root3.tag) {
                if (null === current) {
                  wasHidden = current = root3;
                  try {
                    if (currentResource = wasHidden.stateNode, hoistableRoot)
                      maybeNodes = currentResource.style, "function" === typeof maybeNodes.setProperty ? maybeNodes.setProperty("display", "none", "important") : maybeNodes.display = "none";
                    else {
                      i = wasHidden.stateNode;
                      var styleProp = wasHidden.memoizedProps.style, display = void 0 !== styleProp && null !== styleProp && styleProp.hasOwnProperty("display") ? styleProp.display : null;
                      i.style.display = null == display || "boolean" === typeof display ? "" : ("" + display).trim();
                    }
                  } catch (error) {
                    captureCommitPhaseError(wasHidden, wasHidden.return, error);
                  }
                }
              } else if (6 === root3.tag) {
                if (null === current) {
                  wasHidden = root3;
                  try {
                    wasHidden.stateNode.nodeValue = hoistableRoot ? "" : wasHidden.memoizedProps;
                  } catch (error) {
                    captureCommitPhaseError(wasHidden, wasHidden.return, error);
                  }
                }
              } else if (18 === root3.tag) {
                if (null === current) {
                  wasHidden = root3;
                  try {
                    var instance = wasHidden.stateNode;
                    hoistableRoot ? hideOrUnhideDehydratedBoundary(instance, true) : hideOrUnhideDehydratedBoundary(wasHidden.stateNode, false);
                  } catch (error) {
                    captureCommitPhaseError(wasHidden, wasHidden.return, error);
                  }
                }
              } else if ((22 !== root3.tag && 23 !== root3.tag || null === root3.memoizedState || root3 === finishedWork) && null !== root3.child) {
                root3.child.return = root3;
                root3 = root3.child;
                continue;
              }
              if (root3 === finishedWork) break a;
              for (; null === root3.sibling; ) {
                if (null === root3.return || root3.return === finishedWork) break a;
                current === root3 && (current = null);
                root3 = root3.return;
              }
              current === root3 && (current = null);
              root3.sibling.return = root3.return;
              root3 = root3.sibling;
            }
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (current = flags.retryQueue, null !== current && (flags.retryQueue = null, attachSuspenseRetryListeners(finishedWork, current))));
          break;
        case 19:
          recursivelyTraverseMutationEffects(root3, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          recursivelyTraverseMutationEffects(root3, finishedWork), commitReconciliationEffects(finishedWork);
      }
    }
    function commitReconciliationEffects(finishedWork) {
      var flags = finishedWork.flags;
      if (flags & 2) {
        try {
          for (var hostParentFiber, parentFiber = finishedWork.return; null !== parentFiber; ) {
            if (isHostParent(parentFiber)) {
              hostParentFiber = parentFiber;
              break;
            }
            parentFiber = parentFiber.return;
          }
          if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
          switch (hostParentFiber.tag) {
            case 27:
              var parent = hostParentFiber.stateNode, before = getHostSibling(finishedWork);
              insertOrAppendPlacementNode(finishedWork, before, parent);
              break;
            case 5:
              var parent$141 = hostParentFiber.stateNode;
              hostParentFiber.flags & 32 && (setTextContent(parent$141, ""), hostParentFiber.flags &= -33);
              var before$142 = getHostSibling(finishedWork);
              insertOrAppendPlacementNode(finishedWork, before$142, parent$141);
              break;
            case 3:
            case 4:
              var parent$143 = hostParentFiber.stateNode.containerInfo, before$144 = getHostSibling(finishedWork);
              insertOrAppendPlacementNodeIntoContainer(
                finishedWork,
                before$144,
                parent$143
              );
              break;
            default:
              throw Error(formatProdErrorMessage(161));
          }
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
        finishedWork.flags &= -3;
      }
      flags & 4096 && (finishedWork.flags &= -4097);
    }
    function recursivelyResetForms(parentFiber) {
      if (parentFiber.subtreeFlags & 1024)
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          var fiber = parentFiber;
          recursivelyResetForms(fiber);
          5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
          parentFiber = parentFiber.sibling;
        }
    }
    function recursivelyTraverseLayoutEffects(root3, parentFiber) {
      if (parentFiber.subtreeFlags & 8772)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitLayoutEffectOnFiber(root3, parentFiber.alternate, parentFiber), parentFiber = parentFiber.sibling;
    }
    function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var finishedWork = parentFiber;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 1:
            safelyDetachRef(finishedWork, finishedWork.return);
            var instance = finishedWork.stateNode;
            "function" === typeof instance.componentWillUnmount && safelyCallComponentWillUnmount(
              finishedWork,
              finishedWork.return,
              instance
            );
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 27:
            releaseSingletonInstance(finishedWork.stateNode);
          case 26:
          case 5:
            safelyDetachRef(finishedWork, finishedWork.return);
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 22:
            null === finishedWork.memoizedState && recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 30:
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          default:
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function recursivelyTraverseReappearLayoutEffects(finishedRoot$jscomp$0, parentFiber, includeWorkInProgressEffects) {
      includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var current = parentFiber.alternate, finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            commitHookEffectListMount(4, finishedWork);
            break;
          case 1:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            current = finishedWork;
            finishedRoot = current.stateNode;
            if ("function" === typeof finishedRoot.componentDidMount)
              try {
                finishedRoot.componentDidMount();
              } catch (error) {
                captureCommitPhaseError(current, current.return, error);
              }
            current = finishedWork;
            finishedRoot = current.updateQueue;
            if (null !== finishedRoot) {
              var instance = current.stateNode;
              try {
                var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
                if (null !== hiddenCallbacks)
                  for (finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0; finishedRoot < hiddenCallbacks.length; finishedRoot++)
                    callCallback(hiddenCallbacks[finishedRoot], instance);
              } catch (error) {
                captureCommitPhaseError(current, current.return, error);
              }
            }
            includeWorkInProgressEffects && flags & 64 && commitClassCallbacks(finishedWork);
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 27:
            commitHostSingletonAcquisition(finishedWork);
          case 26:
          case 5:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && null === current && flags & 4 && commitHostMount(finishedWork);
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 12:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            break;
          case 31:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
            break;
          case 13:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            break;
          case 22:
            null === finishedWork.memoizedState && recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 30:
            break;
          default:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function commitOffscreenPassiveMountEffects(current, finishedWork) {
      var previousCache = null;
      null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (previousCache = current.memoizedState.cachePool.pool);
      current = null;
      null !== finishedWork.memoizedState && null !== finishedWork.memoizedState.cachePool && (current = finishedWork.memoizedState.cachePool.pool);
      current !== previousCache && (null != current && current.refCount++, null != previousCache && releaseCache(previousCache));
    }
    function commitCachePassiveMountEffect(current, finishedWork) {
      current = null;
      null !== finishedWork.alternate && (current = finishedWork.alternate.memoizedState.cache);
      finishedWork = finishedWork.memoizedState.cache;
      finishedWork !== current && (finishedWork.refCount++, null != current && releaseCache(current));
    }
    function recursivelyTraversePassiveMountEffects(root3, parentFiber, committedLanes, committedTransitions) {
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitPassiveMountOnFiber(
            root3,
            parentFiber,
            committedLanes,
            committedTransitions
          ), parentFiber = parentFiber.sibling;
    }
    function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
      var flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && commitHookEffectListMount(9, finishedWork);
          break;
        case 1:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          break;
        case 3:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && (finishedRoot = null, null !== finishedWork.alternate && (finishedRoot = finishedWork.alternate.memoizedState.cache), finishedWork = finishedWork.memoizedState.cache, finishedWork !== finishedRoot && (finishedWork.refCount++, null != finishedRoot && releaseCache(finishedRoot)));
          break;
        case 12:
          if (flags & 2048) {
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            finishedRoot = finishedWork.stateNode;
            try {
              var _finishedWork$memoize2 = finishedWork.memoizedProps, id4 = _finishedWork$memoize2.id, onPostCommit = _finishedWork$memoize2.onPostCommit;
              "function" === typeof onPostCommit && onPostCommit(
                id4,
                null === finishedWork.alternate ? "mount" : "update",
                finishedRoot.passiveEffectDuration,
                -0
              );
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          } else
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
          break;
        case 31:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          break;
        case 13:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          break;
        case 23:
          break;
        case 22:
          _finishedWork$memoize2 = finishedWork.stateNode;
          id4 = finishedWork.alternate;
          null !== finishedWork.memoizedState ? _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          ) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          ) : (_finishedWork$memoize2._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions,
            0 !== (finishedWork.subtreeFlags & 10256) || false
          ));
          flags & 2048 && commitOffscreenPassiveMountEffects(id4, finishedWork);
          break;
        case 24:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
          break;
        default:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
      }
    }
    function recursivelyTraverseReconnectPassiveEffects(finishedRoot$jscomp$0, parentFiber, committedLanes$jscomp$0, committedTransitions$jscomp$0, includeWorkInProgressEffects) {
      includeWorkInProgressEffects = includeWorkInProgressEffects && (0 !== (parentFiber.subtreeFlags & 10256) || false);
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, committedLanes = committedLanes$jscomp$0, committedTransitions = committedTransitions$jscomp$0, flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
            commitHookEffectListMount(8, finishedWork);
            break;
          case 23:
            break;
          case 22:
            var instance = finishedWork.stateNode;
            null !== finishedWork.memoizedState ? instance._visibility & 2 ? recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ) : recursivelyTraverseAtomicPassiveEffects(
              finishedRoot,
              finishedWork
            ) : (instance._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ));
            includeWorkInProgressEffects && flags & 2048 && commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork
            );
            break;
          case 24:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
            break;
          default:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function recursivelyTraverseAtomicPassiveEffects(finishedRoot$jscomp$0, parentFiber) {
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
          switch (finishedWork.tag) {
            case 22:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
              flags & 2048 && commitOffscreenPassiveMountEffects(
                finishedWork.alternate,
                finishedWork
              );
              break;
            case 24:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
              flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
              break;
            default:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          }
          parentFiber = parentFiber.sibling;
        }
    }
    var suspenseyCommitFlag = 8192;
    function recursivelyAccumulateSuspenseyCommit(parentFiber, committedLanes, suspendedState) {
      if (parentFiber.subtreeFlags & suspenseyCommitFlag)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          accumulateSuspenseyCommitOnFiber(
            parentFiber,
            committedLanes,
            suspendedState
          ), parentFiber = parentFiber.sibling;
    }
    function accumulateSuspenseyCommitOnFiber(fiber, committedLanes, suspendedState) {
      switch (fiber.tag) {
        case 26:
          recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          );
          fiber.flags & suspenseyCommitFlag && null !== fiber.memoizedState && suspendResource(
            suspendedState,
            currentHoistableRoot,
            fiber.memoizedState,
            fiber.memoizedProps
          );
          break;
        case 5:
          recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          );
          break;
        case 3:
        case 4:
          var previousHoistableRoot = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
          recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          );
          currentHoistableRoot = previousHoistableRoot;
          break;
        case 22:
          null === fiber.memoizedState && (previousHoistableRoot = fiber.alternate, null !== previousHoistableRoot && null !== previousHoistableRoot.memoizedState ? (previousHoistableRoot = suspenseyCommitFlag, suspenseyCommitFlag = 16777216, recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          ), suspenseyCommitFlag = previousHoistableRoot) : recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          ));
          break;
        default:
          recursivelyAccumulateSuspenseyCommit(
            fiber,
            committedLanes,
            suspendedState
          );
      }
    }
    function detachAlternateSiblings(parentFiber) {
      var previousFiber = parentFiber.alternate;
      if (null !== previousFiber && (parentFiber = previousFiber.child, null !== parentFiber)) {
        previousFiber.child = null;
        do
          previousFiber = parentFiber.sibling, parentFiber.sibling = null, parentFiber = previousFiber;
        while (null !== parentFiber);
      }
    }
    function recursivelyTraversePassiveUnmountEffects(parentFiber) {
      var deletions = parentFiber.deletions;
      if (0 !== (parentFiber.flags & 16)) {
        if (null !== deletions)
          for (var i = 0; i < deletions.length; i++) {
            var childToDelete = deletions[i];
            nextEffect = childToDelete;
            commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
              childToDelete,
              parentFiber
            );
          }
        detachAlternateSiblings(parentFiber);
      }
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitPassiveUnmountOnFiber(parentFiber), parentFiber = parentFiber.sibling;
    }
    function commitPassiveUnmountOnFiber(finishedWork) {
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          finishedWork.flags & 2048 && commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
          break;
        case 3:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        case 12:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        case 22:
          var instance = finishedWork.stateNode;
          null !== finishedWork.memoizedState && instance._visibility & 2 && (null === finishedWork.return || 13 !== finishedWork.return.tag) ? (instance._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(finishedWork)) : recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        default:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
      }
    }
    function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
      var deletions = parentFiber.deletions;
      if (0 !== (parentFiber.flags & 16)) {
        if (null !== deletions)
          for (var i = 0; i < deletions.length; i++) {
            var childToDelete = deletions[i];
            nextEffect = childToDelete;
            commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
              childToDelete,
              parentFiber
            );
          }
        detachAlternateSiblings(parentFiber);
      }
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        deletions = parentFiber;
        switch (deletions.tag) {
          case 0:
          case 11:
          case 15:
            commitHookEffectListUnmount(8, deletions, deletions.return);
            recursivelyTraverseDisconnectPassiveEffects(deletions);
            break;
          case 22:
            i = deletions.stateNode;
            i._visibility & 2 && (i._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(deletions));
            break;
          default:
            recursivelyTraverseDisconnectPassiveEffects(deletions);
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
      for (; null !== nextEffect; ) {
        var fiber = nextEffect;
        switch (fiber.tag) {
          case 0:
          case 11:
          case 15:
            commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
            break;
          case 23:
          case 22:
            if (null !== fiber.memoizedState && null !== fiber.memoizedState.cachePool) {
              var cache = fiber.memoizedState.cachePool.pool;
              null != cache && cache.refCount++;
            }
            break;
          case 24:
            releaseCache(fiber.memoizedState.cache);
        }
        cache = fiber.child;
        if (null !== cache) cache.return = fiber, nextEffect = cache;
        else
          a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
            cache = nextEffect;
            var sibling = cache.sibling, returnFiber = cache.return;
            detachFiberAfterEffects(cache);
            if (cache === fiber) {
              nextEffect = null;
              break a;
            }
            if (null !== sibling) {
              sibling.return = returnFiber;
              nextEffect = sibling;
              break a;
            }
            nextEffect = returnFiber;
          }
      }
    }
    var DefaultAsyncDispatcher = {
      getCacheForType: function(resourceType) {
        var cache = readContext(CacheContext), cacheForType = cache.data.get(resourceType);
        void 0 === cacheForType && (cacheForType = resourceType(), cache.data.set(resourceType, cacheForType));
        return cacheForType;
      },
      cacheSignal: function() {
        return readContext(CacheContext).controller.signal;
      }
    };
    var PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map;
    var executionContext = 0;
    var workInProgressRoot = null;
    var workInProgress = null;
    var workInProgressRootRenderLanes = 0;
    var workInProgressSuspendedReason = 0;
    var workInProgressThrownValue = null;
    var workInProgressRootDidSkipSuspendedSiblings = false;
    var workInProgressRootIsPrerendering = false;
    var workInProgressRootDidAttachPingListener = false;
    var entangledRenderLanes = 0;
    var workInProgressRootExitStatus = 0;
    var workInProgressRootSkippedLanes = 0;
    var workInProgressRootInterleavedUpdatedLanes = 0;
    var workInProgressRootPingedLanes = 0;
    var workInProgressDeferredLane = 0;
    var workInProgressSuspendedRetryLanes = 0;
    var workInProgressRootConcurrentErrors = null;
    var workInProgressRootRecoverableErrors = null;
    var workInProgressRootDidIncludeRecursiveRenderUpdate = false;
    var globalMostRecentFallbackTime = 0;
    var globalMostRecentTransitionTime = 0;
    var workInProgressRootRenderTargetTime = Infinity;
    var workInProgressTransitions = null;
    var legacyErrorBoundariesThatAlreadyFailed = null;
    var pendingEffectsStatus = 0;
    var pendingEffectsRoot = null;
    var pendingFinishedWork = null;
    var pendingEffectsLanes = 0;
    var pendingEffectsRemainingLanes = 0;
    var pendingPassiveTransitions = null;
    var pendingRecoverableErrors = null;
    var nestedUpdateCount = 0;
    var rootWithNestedUpdates = null;
    function requestUpdateLane() {
      return 0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes ? workInProgressRootRenderLanes & -workInProgressRootRenderLanes : null !== ReactSharedInternals.T ? requestTransitionLane() : resolveUpdatePriority();
    }
    function requestDeferredLane() {
      if (0 === workInProgressDeferredLane)
        if (0 === (workInProgressRootRenderLanes & 536870912) || isHydrating) {
          var lane = nextTransitionDeferredLane;
          nextTransitionDeferredLane <<= 1;
          0 === (nextTransitionDeferredLane & 3932160) && (nextTransitionDeferredLane = 262144);
          workInProgressDeferredLane = lane;
        } else workInProgressDeferredLane = 536870912;
      lane = suspenseHandlerStackCursor.current;
      null !== lane && (lane.flags |= 32);
      return workInProgressDeferredLane;
    }
    function scheduleUpdateOnFiber(root3, fiber, lane) {
      if (root3 === workInProgressRoot && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root3.cancelPendingCommit)
        prepareFreshStack(root3, 0), markRootSuspended(
          root3,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          false
        );
      markRootUpdated$1(root3, lane);
      if (0 === (executionContext & 2) || root3 !== workInProgressRoot)
        root3 === workInProgressRoot && (0 === (executionContext & 2) && (workInProgressRootInterleavedUpdatedLanes |= lane), 4 === workInProgressRootExitStatus && markRootSuspended(
          root3,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          false
        )), ensureRootIsScheduled(root3);
    }
    function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
      if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
      var shouldTimeSlice = !forceSync && 0 === (lanes & 127) && 0 === (lanes & root$jscomp$0.expiredLanes) || checkIfRootIsPrerendering(root$jscomp$0, lanes), exitStatus = shouldTimeSlice ? renderRootConcurrent(root$jscomp$0, lanes) : renderRootSync(root$jscomp$0, lanes, true), renderWasConcurrent = shouldTimeSlice;
      do {
        if (0 === exitStatus) {
          workInProgressRootIsPrerendering && !shouldTimeSlice && markRootSuspended(root$jscomp$0, lanes, 0, false);
          break;
        } else {
          forceSync = root$jscomp$0.current.alternate;
          if (renderWasConcurrent && !isRenderConsistentWithExternalStores(forceSync)) {
            exitStatus = renderRootSync(root$jscomp$0, lanes, false);
            renderWasConcurrent = false;
            continue;
          }
          if (2 === exitStatus) {
            renderWasConcurrent = lanes;
            if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
              var JSCompiler_inline_result = 0;
            else
              JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913, JSCompiler_inline_result = 0 !== JSCompiler_inline_result ? JSCompiler_inline_result : JSCompiler_inline_result & 536870912 ? 536870912 : 0;
            if (0 !== JSCompiler_inline_result) {
              lanes = JSCompiler_inline_result;
              a: {
                var root3 = root$jscomp$0;
                exitStatus = workInProgressRootConcurrentErrors;
                var wasRootDehydrated = root3.current.memoizedState.isDehydrated;
                wasRootDehydrated && (prepareFreshStack(root3, JSCompiler_inline_result).flags |= 256);
                JSCompiler_inline_result = renderRootSync(
                  root3,
                  JSCompiler_inline_result,
                  false
                );
                if (2 !== JSCompiler_inline_result) {
                  if (workInProgressRootDidAttachPingListener && !wasRootDehydrated) {
                    root3.errorRecoveryDisabledLanes |= renderWasConcurrent;
                    workInProgressRootInterleavedUpdatedLanes |= renderWasConcurrent;
                    exitStatus = 4;
                    break a;
                  }
                  renderWasConcurrent = workInProgressRootRecoverableErrors;
                  workInProgressRootRecoverableErrors = exitStatus;
                  null !== renderWasConcurrent && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = renderWasConcurrent : workInProgressRootRecoverableErrors.push.apply(
                    workInProgressRootRecoverableErrors,
                    renderWasConcurrent
                  ));
                }
                exitStatus = JSCompiler_inline_result;
              }
              renderWasConcurrent = false;
              if (2 !== exitStatus) continue;
            }
          }
          if (1 === exitStatus) {
            prepareFreshStack(root$jscomp$0, 0);
            markRootSuspended(root$jscomp$0, lanes, 0, true);
            break;
          }
          a: {
            shouldTimeSlice = root$jscomp$0;
            renderWasConcurrent = exitStatus;
            switch (renderWasConcurrent) {
              case 0:
              case 1:
                throw Error(formatProdErrorMessage(345));
              case 4:
                if ((lanes & 4194048) !== lanes) break;
              case 6:
                markRootSuspended(
                  shouldTimeSlice,
                  lanes,
                  workInProgressDeferredLane,
                  !workInProgressRootDidSkipSuspendedSiblings
                );
                break a;
              case 2:
                workInProgressRootRecoverableErrors = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(formatProdErrorMessage(329));
            }
            if ((lanes & 62914560) === lanes && (exitStatus = globalMostRecentFallbackTime + 300 - now(), 10 < exitStatus)) {
              markRootSuspended(
                shouldTimeSlice,
                lanes,
                workInProgressDeferredLane,
                !workInProgressRootDidSkipSuspendedSiblings
              );
              if (0 !== getNextLanes(shouldTimeSlice, 0, true)) break a;
              pendingEffectsLanes = lanes;
              shouldTimeSlice.timeoutHandle = scheduleTimeout(
                commitRootWhenReady.bind(
                  null,
                  shouldTimeSlice,
                  forceSync,
                  workInProgressRootRecoverableErrors,
                  workInProgressTransitions,
                  workInProgressRootDidIncludeRecursiveRenderUpdate,
                  lanes,
                  workInProgressDeferredLane,
                  workInProgressRootInterleavedUpdatedLanes,
                  workInProgressSuspendedRetryLanes,
                  workInProgressRootDidSkipSuspendedSiblings,
                  renderWasConcurrent,
                  "Throttled",
                  -0,
                  0
                ),
                exitStatus
              );
              break a;
            }
            commitRootWhenReady(
              shouldTimeSlice,
              forceSync,
              workInProgressRootRecoverableErrors,
              workInProgressTransitions,
              workInProgressRootDidIncludeRecursiveRenderUpdate,
              lanes,
              workInProgressDeferredLane,
              workInProgressRootInterleavedUpdatedLanes,
              workInProgressSuspendedRetryLanes,
              workInProgressRootDidSkipSuspendedSiblings,
              renderWasConcurrent,
              null,
              -0,
              0
            );
          }
        }
        break;
      } while (1);
      ensureRootIsScheduled(root$jscomp$0);
    }
    function commitRootWhenReady(root3, finishedWork, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, lanes, spawnedLane, updatedLanes, suspendedRetryLanes, didSkipSuspendedSiblings, exitStatus, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
      root3.timeoutHandle = -1;
      suspendedCommitReason = finishedWork.subtreeFlags;
      if (suspendedCommitReason & 8192 || 16785408 === (suspendedCommitReason & 16785408)) {
        suspendedCommitReason = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: noop$1
        };
        accumulateSuspenseyCommitOnFiber(
          finishedWork,
          lanes,
          suspendedCommitReason
        );
        var timeoutOffset = (lanes & 62914560) === lanes ? globalMostRecentFallbackTime - now() : (lanes & 4194048) === lanes ? globalMostRecentTransitionTime - now() : 0;
        timeoutOffset = waitForCommitToBeReady(
          suspendedCommitReason,
          timeoutOffset
        );
        if (null !== timeoutOffset) {
          pendingEffectsLanes = lanes;
          root3.cancelPendingCommit = timeoutOffset(
            commitRoot.bind(
              null,
              root3,
              finishedWork,
              lanes,
              recoverableErrors,
              transitions,
              didIncludeRenderPhaseUpdate,
              spawnedLane,
              updatedLanes,
              suspendedRetryLanes,
              exitStatus,
              suspendedCommitReason,
              null,
              completedRenderStartTime,
              completedRenderEndTime
            )
          );
          markRootSuspended(root3, lanes, spawnedLane, !didSkipSuspendedSiblings);
          return;
        }
      }
      commitRoot(
        root3,
        finishedWork,
        lanes,
        recoverableErrors,
        transitions,
        didIncludeRenderPhaseUpdate,
        spawnedLane,
        updatedLanes,
        suspendedRetryLanes
      );
    }
    function isRenderConsistentWithExternalStores(finishedWork) {
      for (var node = finishedWork; ; ) {
        var tag = node.tag;
        if ((0 === tag || 11 === tag || 15 === tag) && node.flags & 16384 && (tag = node.updateQueue, null !== tag && (tag = tag.stores, null !== tag)))
          for (var i = 0; i < tag.length; i++) {
            var check = tag[i], getSnapshot = check.getSnapshot;
            check = check.value;
            try {
              if (!objectIs(getSnapshot(), check)) return false;
            } catch (error) {
              return false;
            }
          }
        tag = node.child;
        if (node.subtreeFlags & 16384 && null !== tag)
          tag.return = node, node = tag;
        else {
          if (node === finishedWork) break;
          for (; null === node.sibling; ) {
            if (null === node.return || node.return === finishedWork) return true;
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
      return true;
    }
    function markRootSuspended(root3, suspendedLanes, spawnedLane, didAttemptEntireTree) {
      suspendedLanes &= ~workInProgressRootPingedLanes;
      suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
      root3.suspendedLanes |= suspendedLanes;
      root3.pingedLanes &= ~suspendedLanes;
      didAttemptEntireTree && (root3.warmLanes |= suspendedLanes);
      didAttemptEntireTree = root3.expirationTimes;
      for (var lanes = suspendedLanes; 0 < lanes; ) {
        var index$6 = 31 - clz32(lanes), lane = 1 << index$6;
        didAttemptEntireTree[index$6] = -1;
        lanes &= ~lane;
      }
      0 !== spawnedLane && markSpawnedDeferredLane(root3, spawnedLane, suspendedLanes);
    }
    function flushSyncWork$1() {
      return 0 === (executionContext & 6) ? (flushSyncWorkAcrossRoots_impl(0, false), false) : true;
    }
    function resetWorkInProgressStack() {
      if (null !== workInProgress) {
        if (0 === workInProgressSuspendedReason)
          var interruptedWork = workInProgress.return;
        else
          interruptedWork = workInProgress, lastContextDependency = currentlyRenderingFiber$1 = null, resetHooksOnUnwind(interruptedWork), thenableState$1 = null, thenableIndexCounter$1 = 0, interruptedWork = workInProgress;
        for (; null !== interruptedWork; )
          unwindInterruptedWork(interruptedWork.alternate, interruptedWork), interruptedWork = interruptedWork.return;
        workInProgress = null;
      }
    }
    function prepareFreshStack(root3, lanes) {
      var timeoutHandle = root3.timeoutHandle;
      -1 !== timeoutHandle && (root3.timeoutHandle = -1, cancelTimeout(timeoutHandle));
      timeoutHandle = root3.cancelPendingCommit;
      null !== timeoutHandle && (root3.cancelPendingCommit = null, timeoutHandle());
      pendingEffectsLanes = 0;
      resetWorkInProgressStack();
      workInProgressRoot = root3;
      workInProgress = timeoutHandle = createWorkInProgress(root3.current, null);
      workInProgressRootRenderLanes = lanes;
      workInProgressSuspendedReason = 0;
      workInProgressThrownValue = null;
      workInProgressRootDidSkipSuspendedSiblings = false;
      workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root3, lanes);
      workInProgressRootDidAttachPingListener = false;
      workInProgressSuspendedRetryLanes = workInProgressDeferredLane = workInProgressRootPingedLanes = workInProgressRootInterleavedUpdatedLanes = workInProgressRootSkippedLanes = workInProgressRootExitStatus = 0;
      workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors = null;
      workInProgressRootDidIncludeRecursiveRenderUpdate = false;
      0 !== (lanes & 8) && (lanes |= lanes & 32);
      var allEntangledLanes = root3.entangledLanes;
      if (0 !== allEntangledLanes)
        for (root3 = root3.entanglements, allEntangledLanes &= lanes; 0 < allEntangledLanes; ) {
          var index$4 = 31 - clz32(allEntangledLanes), lane = 1 << index$4;
          lanes |= root3[index$4];
          allEntangledLanes &= ~lane;
        }
      entangledRenderLanes = lanes;
      finishQueueingConcurrentUpdates();
      return timeoutHandle;
    }
    function handleThrow(root3, thrownValue) {
      currentlyRenderingFiber = null;
      ReactSharedInternals.H = ContextOnlyDispatcher;
      thrownValue === SuspenseException || thrownValue === SuspenseActionException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 3) : thrownValue === SuspenseyCommitException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 4) : workInProgressSuspendedReason = thrownValue === SelectiveHydrationException ? 8 : null !== thrownValue && "object" === typeof thrownValue && "function" === typeof thrownValue.then ? 6 : 1;
      workInProgressThrownValue = thrownValue;
      null === workInProgress && (workInProgressRootExitStatus = 1, logUncaughtError(
        root3,
        createCapturedValueAtFiber(thrownValue, root3.current)
      ));
    }
    function shouldRemainOnPreviousScreen() {
      var handler = suspenseHandlerStackCursor.current;
      return null === handler ? true : (workInProgressRootRenderLanes & 4194048) === workInProgressRootRenderLanes ? null === shellBoundary ? true : false : (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes || 0 !== (workInProgressRootRenderLanes & 536870912) ? handler === shellBoundary : false;
    }
    function pushDispatcher() {
      var prevDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = ContextOnlyDispatcher;
      return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
    }
    function pushAsyncDispatcher() {
      var prevAsyncDispatcher = ReactSharedInternals.A;
      ReactSharedInternals.A = DefaultAsyncDispatcher;
      return prevAsyncDispatcher;
    }
    function renderDidSuspendDelayIfPossible() {
      workInProgressRootExitStatus = 4;
      workInProgressRootDidSkipSuspendedSiblings || (workInProgressRootRenderLanes & 4194048) !== workInProgressRootRenderLanes && null !== suspenseHandlerStackCursor.current || (workInProgressRootIsPrerendering = true);
      0 === (workInProgressRootSkippedLanes & 134217727) && 0 === (workInProgressRootInterleavedUpdatedLanes & 134217727) || null === workInProgressRoot || markRootSuspended(
        workInProgressRoot,
        workInProgressRootRenderLanes,
        workInProgressDeferredLane,
        false
      );
    }
    function renderRootSync(root3, lanes, shouldYieldForPrerendering) {
      var prevExecutionContext = executionContext;
      executionContext |= 2;
      var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
      if (workInProgressRoot !== root3 || workInProgressRootRenderLanes !== lanes)
        workInProgressTransitions = null, prepareFreshStack(root3, lanes);
      lanes = false;
      var exitStatus = workInProgressRootExitStatus;
      a: do
        try {
          if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
            var unitOfWork = workInProgress, thrownValue = workInProgressThrownValue;
            switch (workInProgressSuspendedReason) {
              case 8:
                resetWorkInProgressStack();
                exitStatus = 6;
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                null === suspenseHandlerStackCursor.current && (lanes = true);
                var reason = workInProgressSuspendedReason;
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root3, unitOfWork, thrownValue, reason);
                if (shouldYieldForPrerendering && workInProgressRootIsPrerendering) {
                  exitStatus = 0;
                  break a;
                }
                break;
              default:
                reason = workInProgressSuspendedReason, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root3, unitOfWork, thrownValue, reason);
            }
          }
          workLoopSync();
          exitStatus = workInProgressRootExitStatus;
          break;
        } catch (thrownValue$165) {
          handleThrow(root3, thrownValue$165);
        }
      while (1);
      lanes && root3.shellSuspendCounter++;
      lastContextDependency = currentlyRenderingFiber$1 = null;
      executionContext = prevExecutionContext;
      ReactSharedInternals.H = prevDispatcher;
      ReactSharedInternals.A = prevAsyncDispatcher;
      null === workInProgress && (workInProgressRoot = null, workInProgressRootRenderLanes = 0, finishQueueingConcurrentUpdates());
      return exitStatus;
    }
    function workLoopSync() {
      for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
    }
    function renderRootConcurrent(root3, lanes) {
      var prevExecutionContext = executionContext;
      executionContext |= 2;
      var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
      workInProgressRoot !== root3 || workInProgressRootRenderLanes !== lanes ? (workInProgressTransitions = null, workInProgressRootRenderTargetTime = now() + 500, prepareFreshStack(root3, lanes)) : workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
        root3,
        lanes
      );
      a: do
        try {
          if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
            lanes = workInProgress;
            var thrownValue = workInProgressThrownValue;
            b: switch (workInProgressSuspendedReason) {
              case 1:
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root3, lanes, thrownValue, 1);
                break;
              case 2:
              case 9:
                if (isThenableResolved(thrownValue)) {
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  replaySuspendedUnitOfWork(lanes);
                  break;
                }
                lanes = function() {
                  2 !== workInProgressSuspendedReason && 9 !== workInProgressSuspendedReason || workInProgressRoot !== root3 || (workInProgressSuspendedReason = 7);
                  ensureRootIsScheduled(root3);
                };
                thrownValue.then(lanes, lanes);
                break a;
              case 3:
                workInProgressSuspendedReason = 7;
                break a;
              case 4:
                workInProgressSuspendedReason = 5;
                break a;
              case 7:
                isThenableResolved(thrownValue) ? (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, replaySuspendedUnitOfWork(lanes)) : (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root3, lanes, thrownValue, 7));
                break;
              case 5:
                var resource = null;
                switch (workInProgress.tag) {
                  case 26:
                    resource = workInProgress.memoizedState;
                  case 5:
                  case 27:
                    var hostFiber = workInProgress;
                    if (resource ? preloadResource(resource) : hostFiber.stateNode.complete) {
                      workInProgressSuspendedReason = 0;
                      workInProgressThrownValue = null;
                      var sibling = hostFiber.sibling;
                      if (null !== sibling) workInProgress = sibling;
                      else {
                        var returnFiber = hostFiber.return;
                        null !== returnFiber ? (workInProgress = returnFiber, completeUnitOfWork(returnFiber)) : workInProgress = null;
                      }
                      break b;
                    }
                }
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root3, lanes, thrownValue, 5);
                break;
              case 6:
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root3, lanes, thrownValue, 6);
                break;
              case 8:
                resetWorkInProgressStack();
                workInProgressRootExitStatus = 6;
                break a;
              default:
                throw Error(formatProdErrorMessage(462));
            }
          }
          workLoopConcurrentByScheduler();
          break;
        } catch (thrownValue$167) {
          handleThrow(root3, thrownValue$167);
        }
      while (1);
      lastContextDependency = currentlyRenderingFiber$1 = null;
      ReactSharedInternals.H = prevDispatcher;
      ReactSharedInternals.A = prevAsyncDispatcher;
      executionContext = prevExecutionContext;
      if (null !== workInProgress) return 0;
      workInProgressRoot = null;
      workInProgressRootRenderLanes = 0;
      finishQueueingConcurrentUpdates();
      return workInProgressRootExitStatus;
    }
    function workLoopConcurrentByScheduler() {
      for (; null !== workInProgress && !shouldYield(); )
        performUnitOfWork(workInProgress);
    }
    function performUnitOfWork(unitOfWork) {
      var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
      unitOfWork.memoizedProps = unitOfWork.pendingProps;
      null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
    }
    function replaySuspendedUnitOfWork(unitOfWork) {
      var next = unitOfWork;
      var current = next.alternate;
      switch (next.tag) {
        case 15:
        case 0:
          next = replayFunctionComponent(
            current,
            next,
            next.pendingProps,
            next.type,
            void 0,
            workInProgressRootRenderLanes
          );
          break;
        case 11:
          next = replayFunctionComponent(
            current,
            next,
            next.pendingProps,
            next.type.render,
            next.ref,
            workInProgressRootRenderLanes
          );
          break;
        case 5:
          resetHooksOnUnwind(next);
        default:
          unwindInterruptedWork(current, next), next = workInProgress = resetWorkInProgress(next, entangledRenderLanes), next = beginWork(current, next, entangledRenderLanes);
      }
      unitOfWork.memoizedProps = unitOfWork.pendingProps;
      null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
    }
    function throwAndUnwindWorkLoop(root3, unitOfWork, thrownValue, suspendedReason) {
      lastContextDependency = currentlyRenderingFiber$1 = null;
      resetHooksOnUnwind(unitOfWork);
      thenableState$1 = null;
      thenableIndexCounter$1 = 0;
      var returnFiber = unitOfWork.return;
      try {
        if (throwException(
          root3,
          returnFiber,
          unitOfWork,
          thrownValue,
          workInProgressRootRenderLanes
        )) {
          workInProgressRootExitStatus = 1;
          logUncaughtError(
            root3,
            createCapturedValueAtFiber(thrownValue, root3.current)
          );
          workInProgress = null;
          return;
        }
      } catch (error) {
        if (null !== returnFiber) throw workInProgress = returnFiber, error;
        workInProgressRootExitStatus = 1;
        logUncaughtError(
          root3,
          createCapturedValueAtFiber(thrownValue, root3.current)
        );
        workInProgress = null;
        return;
      }
      if (unitOfWork.flags & 32768) {
        if (isHydrating || 1 === suspendedReason) root3 = true;
        else if (workInProgressRootIsPrerendering || 0 !== (workInProgressRootRenderLanes & 536870912))
          root3 = false;
        else if (workInProgressRootDidSkipSuspendedSiblings = root3 = true, 2 === suspendedReason || 9 === suspendedReason || 3 === suspendedReason || 6 === suspendedReason)
          suspendedReason = suspenseHandlerStackCursor.current, null !== suspendedReason && 13 === suspendedReason.tag && (suspendedReason.flags |= 16384);
        unwindUnitOfWork(unitOfWork, root3);
      } else completeUnitOfWork(unitOfWork);
    }
    function completeUnitOfWork(unitOfWork) {
      var completedWork = unitOfWork;
      do {
        if (0 !== (completedWork.flags & 32768)) {
          unwindUnitOfWork(
            completedWork,
            workInProgressRootDidSkipSuspendedSiblings
          );
          return;
        }
        unitOfWork = completedWork.return;
        var next = completeWork(
          completedWork.alternate,
          completedWork,
          entangledRenderLanes
        );
        if (null !== next) {
          workInProgress = next;
          return;
        }
        completedWork = completedWork.sibling;
        if (null !== completedWork) {
          workInProgress = completedWork;
          return;
        }
        workInProgress = completedWork = unitOfWork;
      } while (null !== completedWork);
      0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
    }
    function unwindUnitOfWork(unitOfWork, skipSiblings) {
      do {
        var next = unwindWork(unitOfWork.alternate, unitOfWork);
        if (null !== next) {
          next.flags &= 32767;
          workInProgress = next;
          return;
        }
        next = unitOfWork.return;
        null !== next && (next.flags |= 32768, next.subtreeFlags = 0, next.deletions = null);
        if (!skipSiblings && (unitOfWork = unitOfWork.sibling, null !== unitOfWork)) {
          workInProgress = unitOfWork;
          return;
        }
        workInProgress = unitOfWork = next;
      } while (null !== unitOfWork);
      workInProgressRootExitStatus = 6;
      workInProgress = null;
    }
    function commitRoot(root3, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes) {
      root3.cancelPendingCommit = null;
      do
        flushPendingEffects();
      while (0 !== pendingEffectsStatus);
      if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
      if (null !== finishedWork) {
        if (finishedWork === root3.current) throw Error(formatProdErrorMessage(177));
        didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
        didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
        markRootFinished(
          root3,
          lanes,
          didIncludeRenderPhaseUpdate,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes
        );
        root3 === workInProgressRoot && (workInProgress = workInProgressRoot = null, workInProgressRootRenderLanes = 0);
        pendingFinishedWork = finishedWork;
        pendingEffectsRoot = root3;
        pendingEffectsLanes = lanes;
        pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
        pendingPassiveTransitions = transitions;
        pendingRecoverableErrors = recoverableErrors;
        0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? (root3.callbackNode = null, root3.callbackPriority = 0, scheduleCallback$1(NormalPriority$1, function() {
          flushPassiveEffects();
          return null;
        })) : (root3.callbackNode = null, root3.callbackPriority = 0);
        recoverableErrors = 0 !== (finishedWork.flags & 13878);
        if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
          recoverableErrors = ReactSharedInternals.T;
          ReactSharedInternals.T = null;
          transitions = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          spawnedLane = executionContext;
          executionContext |= 4;
          try {
            commitBeforeMutationEffects(root3, finishedWork, lanes);
          } finally {
            executionContext = spawnedLane, ReactDOMSharedInternals.p = transitions, ReactSharedInternals.T = recoverableErrors;
          }
        }
        pendingEffectsStatus = 1;
        flushMutationEffects();
        flushLayoutEffects();
        flushSpawnedWork();
      }
    }
    function flushMutationEffects() {
      if (1 === pendingEffectsStatus) {
        pendingEffectsStatus = 0;
        var root3 = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
        if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
          rootMutationHasEffect = ReactSharedInternals.T;
          ReactSharedInternals.T = null;
          var previousPriority = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          var prevExecutionContext = executionContext;
          executionContext |= 4;
          try {
            commitMutationEffectsOnFiber(finishedWork, root3);
            var priorSelectionInformation = selectionInformation, curFocusedElem = getActiveElementDeep(root3.containerInfo), priorFocusedElem = priorSelectionInformation.focusedElem, priorSelectionRange = priorSelectionInformation.selectionRange;
            if (curFocusedElem !== priorFocusedElem && priorFocusedElem && priorFocusedElem.ownerDocument && containsNode(
              priorFocusedElem.ownerDocument.documentElement,
              priorFocusedElem
            )) {
              if (null !== priorSelectionRange && hasSelectionCapabilities(priorFocusedElem)) {
                var start = priorSelectionRange.start, end = priorSelectionRange.end;
                void 0 === end && (end = start);
                if ("selectionStart" in priorFocusedElem)
                  priorFocusedElem.selectionStart = start, priorFocusedElem.selectionEnd = Math.min(
                    end,
                    priorFocusedElem.value.length
                  );
                else {
                  var doc = priorFocusedElem.ownerDocument || document, win = doc && doc.defaultView || window;
                  if (win.getSelection) {
                    var selection = win.getSelection(), length = priorFocusedElem.textContent.length, start$jscomp$0 = Math.min(priorSelectionRange.start, length), end$jscomp$0 = void 0 === priorSelectionRange.end ? start$jscomp$0 : Math.min(priorSelectionRange.end, length);
                    !selection.extend && start$jscomp$0 > end$jscomp$0 && (curFocusedElem = end$jscomp$0, end$jscomp$0 = start$jscomp$0, start$jscomp$0 = curFocusedElem);
                    var startMarker = getNodeForCharacterOffset(
                      priorFocusedElem,
                      start$jscomp$0
                    ), endMarker = getNodeForCharacterOffset(
                      priorFocusedElem,
                      end$jscomp$0
                    );
                    if (startMarker && endMarker && (1 !== selection.rangeCount || selection.anchorNode !== startMarker.node || selection.anchorOffset !== startMarker.offset || selection.focusNode !== endMarker.node || selection.focusOffset !== endMarker.offset)) {
                      var range = doc.createRange();
                      range.setStart(startMarker.node, startMarker.offset);
                      selection.removeAllRanges();
                      start$jscomp$0 > end$jscomp$0 ? (selection.addRange(range), selection.extend(endMarker.node, endMarker.offset)) : (range.setEnd(endMarker.node, endMarker.offset), selection.addRange(range));
                    }
                  }
                }
              }
              doc = [];
              for (selection = priorFocusedElem; selection = selection.parentNode; )
                1 === selection.nodeType && doc.push({
                  element: selection,
                  left: selection.scrollLeft,
                  top: selection.scrollTop
                });
              "function" === typeof priorFocusedElem.focus && priorFocusedElem.focus();
              for (priorFocusedElem = 0; priorFocusedElem < doc.length; priorFocusedElem++) {
                var info = doc[priorFocusedElem];
                info.element.scrollLeft = info.left;
                info.element.scrollTop = info.top;
              }
            }
            _enabled = !!eventsEnabled;
            selectionInformation = eventsEnabled = null;
          } finally {
            executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootMutationHasEffect;
          }
        }
        root3.current = finishedWork;
        pendingEffectsStatus = 2;
      }
    }
    function flushLayoutEffects() {
      if (2 === pendingEffectsStatus) {
        pendingEffectsStatus = 0;
        var root3 = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
        if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
          rootHasLayoutEffect = ReactSharedInternals.T;
          ReactSharedInternals.T = null;
          var previousPriority = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          var prevExecutionContext = executionContext;
          executionContext |= 4;
          try {
            commitLayoutEffectOnFiber(root3, finishedWork.alternate, finishedWork);
          } finally {
            executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootHasLayoutEffect;
          }
        }
        pendingEffectsStatus = 3;
      }
    }
    function flushSpawnedWork() {
      if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
        pendingEffectsStatus = 0;
        requestPaint();
        var root3 = pendingEffectsRoot, finishedWork = pendingFinishedWork, lanes = pendingEffectsLanes, recoverableErrors = pendingRecoverableErrors;
        0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? pendingEffectsStatus = 5 : (pendingEffectsStatus = 0, pendingFinishedWork = pendingEffectsRoot = null, releaseRootPooledCache(root3, root3.pendingLanes));
        var remainingLanes = root3.pendingLanes;
        0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
        lanesToEventPriority(lanes);
        finishedWork = finishedWork.stateNode;
        if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
          try {
            injectedHook.onCommitFiberRoot(
              rendererID,
              finishedWork,
              void 0,
              128 === (finishedWork.current.flags & 128)
            );
          } catch (err) {
          }
        if (null !== recoverableErrors) {
          finishedWork = ReactSharedInternals.T;
          remainingLanes = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          ReactSharedInternals.T = null;
          try {
            for (var onRecoverableError = root3.onRecoverableError, i = 0; i < recoverableErrors.length; i++) {
              var recoverableError = recoverableErrors[i];
              onRecoverableError(recoverableError.value, {
                componentStack: recoverableError.stack
              });
            }
          } finally {
            ReactSharedInternals.T = finishedWork, ReactDOMSharedInternals.p = remainingLanes;
          }
        }
        0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
        ensureRootIsScheduled(root3);
        remainingLanes = root3.pendingLanes;
        0 !== (lanes & 261930) && 0 !== (remainingLanes & 42) ? root3 === rootWithNestedUpdates ? nestedUpdateCount++ : (nestedUpdateCount = 0, rootWithNestedUpdates = root3) : nestedUpdateCount = 0;
        flushSyncWorkAcrossRoots_impl(0, false);
      }
    }
    function releaseRootPooledCache(root3, remainingLanes) {
      0 === (root3.pooledCacheLanes &= remainingLanes) && (remainingLanes = root3.pooledCache, null != remainingLanes && (root3.pooledCache = null, releaseCache(remainingLanes)));
    }
    function flushPendingEffects() {
      flushMutationEffects();
      flushLayoutEffects();
      flushSpawnedWork();
      return flushPassiveEffects();
    }
    function flushPassiveEffects() {
      if (5 !== pendingEffectsStatus) return false;
      var root3 = pendingEffectsRoot, remainingLanes = pendingEffectsRemainingLanes;
      pendingEffectsRemainingLanes = 0;
      var renderPriority = lanesToEventPriority(pendingEffectsLanes), prevTransition = ReactSharedInternals.T, previousPriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
        ReactSharedInternals.T = null;
        renderPriority = pendingPassiveTransitions;
        pendingPassiveTransitions = null;
        var root$jscomp$0 = pendingEffectsRoot, lanes = pendingEffectsLanes;
        pendingEffectsStatus = 0;
        pendingFinishedWork = pendingEffectsRoot = null;
        pendingEffectsLanes = 0;
        if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
        var prevExecutionContext = executionContext;
        executionContext |= 4;
        commitPassiveUnmountOnFiber(root$jscomp$0.current);
        commitPassiveMountOnFiber(
          root$jscomp$0,
          root$jscomp$0.current,
          lanes,
          renderPriority
        );
        executionContext = prevExecutionContext;
        flushSyncWorkAcrossRoots_impl(0, false);
        if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot)
          try {
            injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
          } catch (err) {
          }
        return true;
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition, releaseRootPooledCache(root3, remainingLanes);
      }
    }
    function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
      sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
      sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
      rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
      null !== rootFiber && (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
    }
    function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
      if (3 === sourceFiber.tag)
        captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
      else
        for (; null !== nearestMountedAncestor; ) {
          if (3 === nearestMountedAncestor.tag) {
            captureCommitPhaseErrorOnRoot(
              nearestMountedAncestor,
              sourceFiber,
              error
            );
            break;
          } else if (1 === nearestMountedAncestor.tag) {
            var instance = nearestMountedAncestor.stateNode;
            if ("function" === typeof nearestMountedAncestor.type.getDerivedStateFromError || "function" === typeof instance.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(instance))) {
              sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
              error = createClassErrorUpdate(2);
              instance = enqueueUpdate(nearestMountedAncestor, error, 2);
              null !== instance && (initializeClassErrorUpdate(
                error,
                instance,
                nearestMountedAncestor,
                sourceFiber
              ), markRootUpdated$1(instance, 2), ensureRootIsScheduled(instance));
              break;
            }
          }
          nearestMountedAncestor = nearestMountedAncestor.return;
        }
    }
    function attachPingListener(root3, wakeable, lanes) {
      var pingCache = root3.pingCache;
      if (null === pingCache) {
        pingCache = root3.pingCache = new PossiblyWeakMap();
        var threadIDs = /* @__PURE__ */ new Set();
        pingCache.set(wakeable, threadIDs);
      } else
        threadIDs = pingCache.get(wakeable), void 0 === threadIDs && (threadIDs = /* @__PURE__ */ new Set(), pingCache.set(wakeable, threadIDs));
      threadIDs.has(lanes) || (workInProgressRootDidAttachPingListener = true, threadIDs.add(lanes), root3 = pingSuspendedRoot.bind(null, root3, wakeable, lanes), wakeable.then(root3, root3));
    }
    function pingSuspendedRoot(root3, wakeable, pingedLanes) {
      var pingCache = root3.pingCache;
      null !== pingCache && pingCache.delete(wakeable);
      root3.pingedLanes |= root3.suspendedLanes & pingedLanes;
      root3.warmLanes &= ~pingedLanes;
      workInProgressRoot === root3 && (workInProgressRootRenderLanes & pingedLanes) === pingedLanes && (4 === workInProgressRootExitStatus || 3 === workInProgressRootExitStatus && (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes && 300 > now() - globalMostRecentFallbackTime ? 0 === (executionContext & 2) && prepareFreshStack(root3, 0) : workInProgressRootPingedLanes |= pingedLanes, workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes && (workInProgressSuspendedRetryLanes = 0));
      ensureRootIsScheduled(root3);
    }
    function retryTimedOutBoundary(boundaryFiber, retryLane) {
      0 === retryLane && (retryLane = claimNextRetryLane());
      boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
      null !== boundaryFiber && (markRootUpdated$1(boundaryFiber, retryLane), ensureRootIsScheduled(boundaryFiber));
    }
    function retryDehydratedSuspenseBoundary(boundaryFiber) {
      var suspenseState = boundaryFiber.memoizedState, retryLane = 0;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      retryTimedOutBoundary(boundaryFiber, retryLane);
    }
    function resolveRetryWakeable(boundaryFiber, wakeable) {
      var retryLane = 0;
      switch (boundaryFiber.tag) {
        case 31:
        case 13:
          var retryCache = boundaryFiber.stateNode;
          var suspenseState = boundaryFiber.memoizedState;
          null !== suspenseState && (retryLane = suspenseState.retryLane);
          break;
        case 19:
          retryCache = boundaryFiber.stateNode;
          break;
        case 22:
          retryCache = boundaryFiber.stateNode._retryCache;
          break;
        default:
          throw Error(formatProdErrorMessage(314));
      }
      null !== retryCache && retryCache.delete(wakeable);
      retryTimedOutBoundary(boundaryFiber, retryLane);
    }
    function scheduleCallback$1(priorityLevel, callback) {
      return scheduleCallback$3(priorityLevel, callback);
    }
    var firstScheduledRoot = null;
    var lastScheduledRoot = null;
    var didScheduleMicrotask = false;
    var mightHavePendingSyncWork = false;
    var isFlushingWork = false;
    var currentEventTransitionLane = 0;
    function ensureRootIsScheduled(root3) {
      root3 !== lastScheduledRoot && null === root3.next && (null === lastScheduledRoot ? firstScheduledRoot = lastScheduledRoot = root3 : lastScheduledRoot = lastScheduledRoot.next = root3);
      mightHavePendingSyncWork = true;
      didScheduleMicrotask || (didScheduleMicrotask = true, scheduleImmediateRootScheduleTask());
    }
    function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
      if (!isFlushingWork && mightHavePendingSyncWork) {
        isFlushingWork = true;
        do {
          var didPerformSomeWork = false;
          for (var root$170 = firstScheduledRoot; null !== root$170; ) {
            if (!onlyLegacy)
              if (0 !== syncTransitionLanes) {
                var pendingLanes = root$170.pendingLanes;
                if (0 === pendingLanes) var JSCompiler_inline_result = 0;
                else {
                  var suspendedLanes = root$170.suspendedLanes, pingedLanes = root$170.pingedLanes;
                  JSCompiler_inline_result = (1 << 31 - clz32(42 | syncTransitionLanes) + 1) - 1;
                  JSCompiler_inline_result &= pendingLanes & ~(suspendedLanes & ~pingedLanes);
                  JSCompiler_inline_result = JSCompiler_inline_result & 201326741 ? JSCompiler_inline_result & 201326741 | 1 : JSCompiler_inline_result ? JSCompiler_inline_result | 2 : 0;
                }
                0 !== JSCompiler_inline_result && (didPerformSomeWork = true, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
              } else
                JSCompiler_inline_result = workInProgressRootRenderLanes, JSCompiler_inline_result = getNextLanes(
                  root$170,
                  root$170 === workInProgressRoot ? JSCompiler_inline_result : 0,
                  null !== root$170.cancelPendingCommit || -1 !== root$170.timeoutHandle
                ), 0 === (JSCompiler_inline_result & 3) || checkIfRootIsPrerendering(root$170, JSCompiler_inline_result) || (didPerformSomeWork = true, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
            root$170 = root$170.next;
          }
        } while (didPerformSomeWork);
        isFlushingWork = false;
      }
    }
    function processRootScheduleInImmediateTask() {
      processRootScheduleInMicrotask();
    }
    function processRootScheduleInMicrotask() {
      mightHavePendingSyncWork = didScheduleMicrotask = false;
      var syncTransitionLanes = 0;
      0 !== currentEventTransitionLane && shouldAttemptEagerTransition() && (syncTransitionLanes = currentEventTransitionLane);
      for (var currentTime = now(), prev = null, root3 = firstScheduledRoot; null !== root3; ) {
        var next = root3.next, nextLanes = scheduleTaskForRootDuringMicrotask(root3, currentTime);
        if (0 === nextLanes)
          root3.next = null, null === prev ? firstScheduledRoot = next : prev.next = next, null === next && (lastScheduledRoot = prev);
        else if (prev = root3, 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
          mightHavePendingSyncWork = true;
        root3 = next;
      }
      0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus || flushSyncWorkAcrossRoots_impl(syncTransitionLanes, false);
      0 !== currentEventTransitionLane && (currentEventTransitionLane = 0);
    }
    function scheduleTaskForRootDuringMicrotask(root3, currentTime) {
      for (var suspendedLanes = root3.suspendedLanes, pingedLanes = root3.pingedLanes, expirationTimes = root3.expirationTimes, lanes = root3.pendingLanes & -62914561; 0 < lanes; ) {
        var index$5 = 31 - clz32(lanes), lane = 1 << index$5, expirationTime = expirationTimes[index$5];
        if (-1 === expirationTime) {
          if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
            expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
        } else expirationTime <= currentTime && (root3.expiredLanes |= lane);
        lanes &= ~lane;
      }
      currentTime = workInProgressRoot;
      suspendedLanes = workInProgressRootRenderLanes;
      suspendedLanes = getNextLanes(
        root3,
        root3 === currentTime ? suspendedLanes : 0,
        null !== root3.cancelPendingCommit || -1 !== root3.timeoutHandle
      );
      pingedLanes = root3.callbackNode;
      if (0 === suspendedLanes || root3 === currentTime && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root3.cancelPendingCommit)
        return null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes), root3.callbackNode = null, root3.callbackPriority = 0;
      if (0 === (suspendedLanes & 3) || checkIfRootIsPrerendering(root3, suspendedLanes)) {
        currentTime = suspendedLanes & -suspendedLanes;
        if (currentTime === root3.callbackPriority) return currentTime;
        null !== pingedLanes && cancelCallback$1(pingedLanes);
        switch (lanesToEventPriority(suspendedLanes)) {
          case 2:
          case 8:
            suspendedLanes = UserBlockingPriority;
            break;
          case 32:
            suspendedLanes = NormalPriority$1;
            break;
          case 268435456:
            suspendedLanes = IdlePriority;
            break;
          default:
            suspendedLanes = NormalPriority$1;
        }
        pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root3);
        suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
        root3.callbackPriority = currentTime;
        root3.callbackNode = suspendedLanes;
        return currentTime;
      }
      null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
      root3.callbackPriority = 2;
      root3.callbackNode = null;
      return 2;
    }
    function performWorkOnRootViaSchedulerTask(root3, didTimeout) {
      if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
        return root3.callbackNode = null, root3.callbackPriority = 0, null;
      var originalCallbackNode = root3.callbackNode;
      if (flushPendingEffects() && root3.callbackNode !== originalCallbackNode)
        return null;
      var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
      workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
        root3,
        root3 === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
        null !== root3.cancelPendingCommit || -1 !== root3.timeoutHandle
      );
      if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
      performWorkOnRoot(root3, workInProgressRootRenderLanes$jscomp$0, didTimeout);
      scheduleTaskForRootDuringMicrotask(root3, now());
      return null != root3.callbackNode && root3.callbackNode === originalCallbackNode ? performWorkOnRootViaSchedulerTask.bind(null, root3) : null;
    }
    function performSyncWorkOnRoot(root3, lanes) {
      if (flushPendingEffects()) return null;
      performWorkOnRoot(root3, lanes, true);
    }
    function scheduleImmediateRootScheduleTask() {
      scheduleMicrotask(function() {
        0 !== (executionContext & 6) ? scheduleCallback$3(
          ImmediatePriority,
          processRootScheduleInImmediateTask
        ) : processRootScheduleInMicrotask();
      });
    }
    function requestTransitionLane() {
      if (0 === currentEventTransitionLane) {
        var actionScopeLane = currentEntangledLane;
        0 === actionScopeLane && (actionScopeLane = nextTransitionUpdateLane, nextTransitionUpdateLane <<= 1, 0 === (nextTransitionUpdateLane & 261888) && (nextTransitionUpdateLane = 256));
        currentEventTransitionLane = actionScopeLane;
      }
      return currentEventTransitionLane;
    }
    function coerceFormActionProp(actionProp) {
      return null == actionProp || "symbol" === typeof actionProp || "boolean" === typeof actionProp ? null : "function" === typeof actionProp ? actionProp : sanitizeURL("" + actionProp);
    }
    function createFormDataWithSubmitter(form, submitter) {
      var temp = submitter.ownerDocument.createElement("input");
      temp.name = submitter.name;
      temp.value = submitter.value;
      form.id && temp.setAttribute("form", form.id);
      submitter.parentNode.insertBefore(temp, submitter);
      form = new FormData(form);
      temp.parentNode.removeChild(temp);
      return form;
    }
    function extractEvents$1(dispatchQueue, domEventName, maybeTargetInst, nativeEvent, nativeEventTarget) {
      if ("submit" === domEventName && maybeTargetInst && maybeTargetInst.stateNode === nativeEventTarget) {
        var action = coerceFormActionProp(
          (nativeEventTarget[internalPropsKey] || null).action
        ), submitter = nativeEvent.submitter;
        submitter && (domEventName = (domEventName = submitter[internalPropsKey] || null) ? coerceFormActionProp(domEventName.formAction) : submitter.getAttribute("formAction"), null !== domEventName && (action = domEventName, submitter = null));
        var event = new SyntheticEvent(
          "action",
          "action",
          null,
          nativeEvent,
          nativeEventTarget
        );
        dispatchQueue.push({
          event,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (nativeEvent.defaultPrevented) {
                  if (0 !== currentEventTransitionLane) {
                    var formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget);
                    startHostTransition(
                      maybeTargetInst,
                      {
                        pending: true,
                        data: formData,
                        method: nativeEventTarget.method,
                        action
                      },
                      null,
                      formData
                    );
                  }
                } else
                  "function" === typeof action && (event.preventDefault(), formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget), startHostTransition(
                    maybeTargetInst,
                    {
                      pending: true,
                      data: formData,
                      method: nativeEventTarget.method,
                      action
                    },
                    action,
                    formData
                  ));
              },
              currentTarget: nativeEventTarget
            }
          ]
        });
      }
    }
    for (i$jscomp$inline_1577 = 0; i$jscomp$inline_1577 < simpleEventPluginEvents.length; i$jscomp$inline_1577++) {
      eventName$jscomp$inline_1578 = simpleEventPluginEvents[i$jscomp$inline_1577], domEventName$jscomp$inline_1579 = eventName$jscomp$inline_1578.toLowerCase(), capitalizedEvent$jscomp$inline_1580 = eventName$jscomp$inline_1578[0].toUpperCase() + eventName$jscomp$inline_1578.slice(1);
      registerSimpleEvent(
        domEventName$jscomp$inline_1579,
        "on" + capitalizedEvent$jscomp$inline_1580
      );
    }
    var eventName$jscomp$inline_1578;
    var domEventName$jscomp$inline_1579;
    var capitalizedEvent$jscomp$inline_1580;
    var i$jscomp$inline_1577;
    registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
    registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
    registerSimpleEvent(ANIMATION_START, "onAnimationStart");
    registerSimpleEvent("dblclick", "onDoubleClick");
    registerSimpleEvent("focusin", "onFocus");
    registerSimpleEvent("focusout", "onBlur");
    registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
    registerSimpleEvent(TRANSITION_START, "onTransitionStart");
    registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
    registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
    registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
    registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
    registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
    registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
    registerTwoPhaseEvent(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(" ")
    );
    registerTwoPhaseEvent(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    );
    registerTwoPhaseEvent("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]);
    registerTwoPhaseEvent(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    );
    registerTwoPhaseEvent(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    );
    registerTwoPhaseEvent(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var mediaEventTypes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    );
    var nonDelegatedEvents = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mediaEventTypes)
    );
    function processDispatchQueue(dispatchQueue, eventSystemFlags) {
      eventSystemFlags = 0 !== (eventSystemFlags & 4);
      for (var i = 0; i < dispatchQueue.length; i++) {
        var _dispatchQueue$i = dispatchQueue[i], event = _dispatchQueue$i.event;
        _dispatchQueue$i = _dispatchQueue$i.listeners;
        a: {
          var previousInstance = void 0;
          if (eventSystemFlags)
            for (var i$jscomp$0 = _dispatchQueue$i.length - 1; 0 <= i$jscomp$0; i$jscomp$0--) {
              var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget;
              _dispatchListeners$i = _dispatchListeners$i.listener;
              if (instance !== previousInstance && event.isPropagationStopped())
                break a;
              previousInstance = _dispatchListeners$i;
              event.currentTarget = currentTarget;
              try {
                previousInstance(event);
              } catch (error) {
                reportGlobalError(error);
              }
              event.currentTarget = null;
              previousInstance = instance;
            }
          else
            for (i$jscomp$0 = 0; i$jscomp$0 < _dispatchQueue$i.length; i$jscomp$0++) {
              _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
              instance = _dispatchListeners$i.instance;
              currentTarget = _dispatchListeners$i.currentTarget;
              _dispatchListeners$i = _dispatchListeners$i.listener;
              if (instance !== previousInstance && event.isPropagationStopped())
                break a;
              previousInstance = _dispatchListeners$i;
              event.currentTarget = currentTarget;
              try {
                previousInstance(event);
              } catch (error) {
                reportGlobalError(error);
              }
              event.currentTarget = null;
              previousInstance = instance;
            }
        }
      }
    }
    function listenToNonDelegatedEvent(domEventName, targetElement) {
      var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
      void 0 === JSCompiler_inline_result && (JSCompiler_inline_result = targetElement[internalEventHandlersKey] = /* @__PURE__ */ new Set());
      var listenerSetKey = domEventName + "__bubble";
      JSCompiler_inline_result.has(listenerSetKey) || (addTrappedEventListener(targetElement, domEventName, 2, false), JSCompiler_inline_result.add(listenerSetKey));
    }
    function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
      var eventSystemFlags = 0;
      isCapturePhaseListener && (eventSystemFlags |= 4);
      addTrappedEventListener(
        target,
        domEventName,
        eventSystemFlags,
        isCapturePhaseListener
      );
    }
    var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
    function listenToAllSupportedEvents(rootContainerElement) {
      if (!rootContainerElement[listeningMarker]) {
        rootContainerElement[listeningMarker] = true;
        allNativeEvents.forEach(function(domEventName) {
          "selectionchange" !== domEventName && (nonDelegatedEvents.has(domEventName) || listenToNativeEvent(domEventName, false, rootContainerElement), listenToNativeEvent(domEventName, true, rootContainerElement));
        });
        var ownerDocument = 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
        null === ownerDocument || ownerDocument[listeningMarker] || (ownerDocument[listeningMarker] = true, listenToNativeEvent("selectionchange", false, ownerDocument));
      }
    }
    function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener) {
      switch (getEventPriority(domEventName)) {
        case 2:
          var listenerWrapper = dispatchDiscreteEvent;
          break;
        case 8:
          listenerWrapper = dispatchContinuousEvent;
          break;
        default:
          listenerWrapper = dispatchEvent;
      }
      eventSystemFlags = listenerWrapper.bind(
        null,
        domEventName,
        eventSystemFlags,
        targetContainer
      );
      listenerWrapper = void 0;
      !passiveBrowserEventsSupported || "touchstart" !== domEventName && "touchmove" !== domEventName && "wheel" !== domEventName || (listenerWrapper = true);
      isCapturePhaseListener ? void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
        capture: true,
        passive: listenerWrapper
      }) : targetContainer.addEventListener(domEventName, eventSystemFlags, true) : void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
        passive: listenerWrapper
      }) : targetContainer.addEventListener(domEventName, eventSystemFlags, false);
    }
    function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst$jscomp$0, targetContainer) {
      var ancestorInst = targetInst$jscomp$0;
      if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2) && null !== targetInst$jscomp$0)
        a: for (; ; ) {
          if (null === targetInst$jscomp$0) return;
          var nodeTag = targetInst$jscomp$0.tag;
          if (3 === nodeTag || 4 === nodeTag) {
            var container = targetInst$jscomp$0.stateNode.containerInfo;
            if (container === targetContainer) break;
            if (4 === nodeTag)
              for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
                var grandTag = nodeTag.tag;
                if ((3 === grandTag || 4 === grandTag) && nodeTag.stateNode.containerInfo === targetContainer)
                  return;
                nodeTag = nodeTag.return;
              }
            for (; null !== container; ) {
              nodeTag = getClosestInstanceFromNode(container);
              if (null === nodeTag) return;
              grandTag = nodeTag.tag;
              if (5 === grandTag || 6 === grandTag || 26 === grandTag || 27 === grandTag) {
                targetInst$jscomp$0 = ancestorInst = nodeTag;
                continue a;
              }
              container = container.parentNode;
            }
          }
          targetInst$jscomp$0 = targetInst$jscomp$0.return;
        }
      batchedUpdates$1(function() {
        var targetInst = ancestorInst, nativeEventTarget = getEventTarget(nativeEvent), dispatchQueue = [];
        a: {
          var reactName = topLevelEventsToReactNames.get(domEventName);
          if (void 0 !== reactName) {
            var SyntheticEventCtor = SyntheticEvent, reactEventType = domEventName;
            switch (domEventName) {
              case "keypress":
                if (0 === getEventCharCode(nativeEvent)) break a;
              case "keydown":
              case "keyup":
                SyntheticEventCtor = SyntheticKeyboardEvent;
                break;
              case "focusin":
                reactEventType = "focus";
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "focusout":
                reactEventType = "blur";
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "beforeblur":
              case "afterblur":
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "click":
                if (2 === nativeEvent.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                SyntheticEventCtor = SyntheticMouseEvent;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                SyntheticEventCtor = SyntheticDragEvent;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                SyntheticEventCtor = SyntheticTouchEvent;
                break;
              case ANIMATION_END:
              case ANIMATION_ITERATION:
              case ANIMATION_START:
                SyntheticEventCtor = SyntheticAnimationEvent;
                break;
              case TRANSITION_END:
                SyntheticEventCtor = SyntheticTransitionEvent;
                break;
              case "scroll":
              case "scrollend":
                SyntheticEventCtor = SyntheticUIEvent;
                break;
              case "wheel":
                SyntheticEventCtor = SyntheticWheelEvent;
                break;
              case "copy":
              case "cut":
              case "paste":
                SyntheticEventCtor = SyntheticClipboardEvent;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                SyntheticEventCtor = SyntheticPointerEvent;
                break;
              case "toggle":
              case "beforetoggle":
                SyntheticEventCtor = SyntheticToggleEvent;
            }
            var inCapturePhase = 0 !== (eventSystemFlags & 4), accumulateTargetOnly = !inCapturePhase && ("scroll" === domEventName || "scrollend" === domEventName), reactEventName = inCapturePhase ? null !== reactName ? reactName + "Capture" : null : reactName;
            inCapturePhase = [];
            for (var instance = targetInst, lastHostComponent; null !== instance; ) {
              var _instance = instance;
              lastHostComponent = _instance.stateNode;
              _instance = _instance.tag;
              5 !== _instance && 26 !== _instance && 27 !== _instance || null === lastHostComponent || null === reactEventName || (_instance = getListener(instance, reactEventName), null != _instance && inCapturePhase.push(
                createDispatchListener(instance, _instance, lastHostComponent)
              ));
              if (accumulateTargetOnly) break;
              instance = instance.return;
            }
            0 < inCapturePhase.length && (reactName = new SyntheticEventCtor(
              reactName,
              reactEventType,
              null,
              nativeEvent,
              nativeEventTarget
            ), dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
          }
        }
        if (0 === (eventSystemFlags & 7)) {
          a: {
            reactName = "mouseover" === domEventName || "pointerover" === domEventName;
            SyntheticEventCtor = "mouseout" === domEventName || "pointerout" === domEventName;
            if (reactName && nativeEvent !== currentReplayingEvent && (reactEventType = nativeEvent.relatedTarget || nativeEvent.fromElement) && (getClosestInstanceFromNode(reactEventType) || reactEventType[internalContainerInstanceKey]))
              break a;
            if (SyntheticEventCtor || reactName) {
              reactName = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget : (reactName = nativeEventTarget.ownerDocument) ? reactName.defaultView || reactName.parentWindow : window;
              if (SyntheticEventCtor) {
                if (reactEventType = nativeEvent.relatedTarget || nativeEvent.toElement, SyntheticEventCtor = targetInst, reactEventType = reactEventType ? getClosestInstanceFromNode(reactEventType) : null, null !== reactEventType && (accumulateTargetOnly = getNearestMountedFiber(reactEventType), inCapturePhase = reactEventType.tag, reactEventType !== accumulateTargetOnly || 5 !== inCapturePhase && 27 !== inCapturePhase && 6 !== inCapturePhase))
                  reactEventType = null;
              } else SyntheticEventCtor = null, reactEventType = targetInst;
              if (SyntheticEventCtor !== reactEventType) {
                inCapturePhase = SyntheticMouseEvent;
                _instance = "onMouseLeave";
                reactEventName = "onMouseEnter";
                instance = "mouse";
                if ("pointerout" === domEventName || "pointerover" === domEventName)
                  inCapturePhase = SyntheticPointerEvent, _instance = "onPointerLeave", reactEventName = "onPointerEnter", instance = "pointer";
                accumulateTargetOnly = null == SyntheticEventCtor ? reactName : getNodeFromInstance(SyntheticEventCtor);
                lastHostComponent = null == reactEventType ? reactName : getNodeFromInstance(reactEventType);
                reactName = new inCapturePhase(
                  _instance,
                  instance + "leave",
                  SyntheticEventCtor,
                  nativeEvent,
                  nativeEventTarget
                );
                reactName.target = accumulateTargetOnly;
                reactName.relatedTarget = lastHostComponent;
                _instance = null;
                getClosestInstanceFromNode(nativeEventTarget) === targetInst && (inCapturePhase = new inCapturePhase(
                  reactEventName,
                  instance + "enter",
                  reactEventType,
                  nativeEvent,
                  nativeEventTarget
                ), inCapturePhase.target = lastHostComponent, inCapturePhase.relatedTarget = accumulateTargetOnly, _instance = inCapturePhase);
                accumulateTargetOnly = _instance;
                if (SyntheticEventCtor && reactEventType)
                  b: {
                    inCapturePhase = getParent;
                    reactEventName = SyntheticEventCtor;
                    instance = reactEventType;
                    lastHostComponent = 0;
                    for (_instance = reactEventName; _instance; _instance = inCapturePhase(_instance))
                      lastHostComponent++;
                    _instance = 0;
                    for (var tempB = instance; tempB; tempB = inCapturePhase(tempB))
                      _instance++;
                    for (; 0 < lastHostComponent - _instance; )
                      reactEventName = inCapturePhase(reactEventName), lastHostComponent--;
                    for (; 0 < _instance - lastHostComponent; )
                      instance = inCapturePhase(instance), _instance--;
                    for (; lastHostComponent--; ) {
                      if (reactEventName === instance || null !== instance && reactEventName === instance.alternate) {
                        inCapturePhase = reactEventName;
                        break b;
                      }
                      reactEventName = inCapturePhase(reactEventName);
                      instance = inCapturePhase(instance);
                    }
                    inCapturePhase = null;
                  }
                else inCapturePhase = null;
                null !== SyntheticEventCtor && accumulateEnterLeaveListenersForEvent(
                  dispatchQueue,
                  reactName,
                  SyntheticEventCtor,
                  inCapturePhase,
                  false
                );
                null !== reactEventType && null !== accumulateTargetOnly && accumulateEnterLeaveListenersForEvent(
                  dispatchQueue,
                  accumulateTargetOnly,
                  reactEventType,
                  inCapturePhase,
                  true
                );
              }
            }
          }
          a: {
            reactName = targetInst ? getNodeFromInstance(targetInst) : window;
            SyntheticEventCtor = reactName.nodeName && reactName.nodeName.toLowerCase();
            if ("select" === SyntheticEventCtor || "input" === SyntheticEventCtor && "file" === reactName.type)
              var getTargetInstFunc = getTargetInstForChangeEvent;
            else if (isTextInputElement(reactName))
              if (isInputEventSupported)
                getTargetInstFunc = getTargetInstForInputOrChangeEvent;
              else {
                getTargetInstFunc = getTargetInstForInputEventPolyfill;
                var handleEventFunc = handleEventsForInputEventPolyfill;
              }
            else
              SyntheticEventCtor = reactName.nodeName, !SyntheticEventCtor || "input" !== SyntheticEventCtor.toLowerCase() || "checkbox" !== reactName.type && "radio" !== reactName.type ? targetInst && isCustomElement(targetInst.elementType) && (getTargetInstFunc = getTargetInstForChangeEvent) : getTargetInstFunc = getTargetInstForClickEvent;
            if (getTargetInstFunc && (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))) {
              createAndAccumulateChangeEvent(
                dispatchQueue,
                getTargetInstFunc,
                nativeEvent,
                nativeEventTarget
              );
              break a;
            }
            handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
            "focusout" === domEventName && targetInst && "number" === reactName.type && null != targetInst.memoizedProps.value && setDefaultValue(reactName, "number", reactName.value);
          }
          handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
          switch (domEventName) {
            case "focusin":
              if (isTextInputElement(handleEventFunc) || "true" === handleEventFunc.contentEditable)
                activeElement = handleEventFunc, activeElementInst = targetInst, lastSelection = null;
              break;
            case "focusout":
              lastSelection = activeElementInst = activeElement = null;
              break;
            case "mousedown":
              mouseDown = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              mouseDown = false;
              constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
              break;
            case "selectionchange":
              if (skipSelectionChangeEvent) break;
            case "keydown":
            case "keyup":
              constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
          }
          var fallbackData;
          if (canUseCompositionEvent)
            b: {
              switch (domEventName) {
                case "compositionstart":
                  var eventType = "onCompositionStart";
                  break b;
                case "compositionend":
                  eventType = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  eventType = "onCompositionUpdate";
                  break b;
              }
              eventType = void 0;
            }
          else
            isComposing ? isFallbackCompositionEnd(domEventName, nativeEvent) && (eventType = "onCompositionEnd") : "keydown" === domEventName && 229 === nativeEvent.keyCode && (eventType = "onCompositionStart");
          eventType && (useFallbackCompositionData && "ko" !== nativeEvent.locale && (isComposing || "onCompositionStart" !== eventType ? "onCompositionEnd" === eventType && isComposing && (fallbackData = getData()) : (root2 = nativeEventTarget, startText = "value" in root2 ? root2.value : root2.textContent, isComposing = true)), handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType), 0 < handleEventFunc.length && (eventType = new SyntheticCompositionEvent(
            eventType,
            domEventName,
            null,
            nativeEvent,
            nativeEventTarget
          ), dispatchQueue.push({ event: eventType, listeners: handleEventFunc }), fallbackData ? eventType.data = fallbackData : (fallbackData = getDataFromCustomEvent(nativeEvent), null !== fallbackData && (eventType.data = fallbackData))));
          if (fallbackData = canUseTextInputEvent ? getNativeBeforeInputChars(domEventName, nativeEvent) : getFallbackBeforeInputChars(domEventName, nativeEvent))
            eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput"), 0 < eventType.length && (handleEventFunc = new SyntheticCompositionEvent(
              "onBeforeInput",
              "beforeinput",
              null,
              nativeEvent,
              nativeEventTarget
            ), dispatchQueue.push({
              event: handleEventFunc,
              listeners: eventType
            }), handleEventFunc.data = fallbackData);
          extractEvents$1(
            dispatchQueue,
            domEventName,
            targetInst,
            nativeEvent,
            nativeEventTarget
          );
        }
        processDispatchQueue(dispatchQueue, eventSystemFlags);
      });
    }
    function createDispatchListener(instance, listener, currentTarget) {
      return {
        instance,
        listener,
        currentTarget
      };
    }
    function accumulateTwoPhaseListeners(targetFiber, reactName) {
      for (var captureName = reactName + "Capture", listeners = []; null !== targetFiber; ) {
        var _instance2 = targetFiber, stateNode = _instance2.stateNode;
        _instance2 = _instance2.tag;
        5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2 || null === stateNode || (_instance2 = getListener(targetFiber, captureName), null != _instance2 && listeners.unshift(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ), _instance2 = getListener(targetFiber, reactName), null != _instance2 && listeners.push(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ));
        if (3 === targetFiber.tag) return listeners;
        targetFiber = targetFiber.return;
      }
      return [];
    }
    function getParent(inst) {
      if (null === inst) return null;
      do
        inst = inst.return;
      while (inst && 5 !== inst.tag && 27 !== inst.tag);
      return inst ? inst : null;
    }
    function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
      for (var registrationName = event._reactName, listeners = []; null !== target && target !== common; ) {
        var _instance3 = target, alternate = _instance3.alternate, stateNode = _instance3.stateNode;
        _instance3 = _instance3.tag;
        if (null !== alternate && alternate === common) break;
        5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3 || null === stateNode || (alternate = stateNode, inCapturePhase ? (stateNode = getListener(target, registrationName), null != stateNode && listeners.unshift(
          createDispatchListener(target, stateNode, alternate)
        )) : inCapturePhase || (stateNode = getListener(target, registrationName), null != stateNode && listeners.push(
          createDispatchListener(target, stateNode, alternate)
        )));
        target = target.return;
      }
      0 !== listeners.length && dispatchQueue.push({ event, listeners });
    }
    var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
    var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
    function normalizeMarkupForTextOrAttribute(markup) {
      return ("string" === typeof markup ? markup : "" + markup).replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
    }
    function checkForUnmatchedText(serverText, clientText) {
      clientText = normalizeMarkupForTextOrAttribute(clientText);
      return normalizeMarkupForTextOrAttribute(serverText) === clientText ? true : false;
    }
    function setProp(domElement, tag, key, value, props, prevValue) {
      switch (key) {
        case "children":
          "string" === typeof value ? "body" === tag || "textarea" === tag && "" === value || setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && "body" !== tag && setTextContent(domElement, "" + value);
          break;
        case "className":
          setValueForKnownAttribute(domElement, "class", value);
          break;
        case "tabIndex":
          setValueForKnownAttribute(domElement, "tabindex", value);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          setValueForKnownAttribute(domElement, key, value);
          break;
        case "style":
          setValueForStyles(domElement, value, prevValue);
          break;
        case "data":
          if ("object" !== tag) {
            setValueForKnownAttribute(domElement, "data", value);
            break;
          }
        case "src":
        case "href":
          if ("" === value && ("a" !== tag || "href" !== key)) {
            domElement.removeAttribute(key);
            break;
          }
          if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) {
            domElement.removeAttribute(key);
            break;
          }
          value = sanitizeURL("" + value);
          domElement.setAttribute(key, value);
          break;
        case "action":
        case "formAction":
          if ("function" === typeof value) {
            domElement.setAttribute(
              key,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            "function" === typeof prevValue && ("formAction" === key ? ("input" !== tag && setProp(domElement, tag, "name", props.name, props, null), setProp(
              domElement,
              tag,
              "formEncType",
              props.formEncType,
              props,
              null
            ), setProp(
              domElement,
              tag,
              "formMethod",
              props.formMethod,
              props,
              null
            ), setProp(
              domElement,
              tag,
              "formTarget",
              props.formTarget,
              props,
              null
            )) : (setProp(domElement, tag, "encType", props.encType, props, null), setProp(domElement, tag, "method", props.method, props, null), setProp(domElement, tag, "target", props.target, props, null)));
          if (null == value || "symbol" === typeof value || "boolean" === typeof value) {
            domElement.removeAttribute(key);
            break;
          }
          value = sanitizeURL("" + value);
          domElement.setAttribute(key, value);
          break;
        case "onClick":
          null != value && (domElement.onclick = noop$1);
          break;
        case "onScroll":
          null != value && listenToNonDelegatedEvent("scroll", domElement);
          break;
        case "onScrollEnd":
          null != value && listenToNonDelegatedEvent("scrollend", domElement);
          break;
        case "dangerouslySetInnerHTML":
          if (null != value) {
            if ("object" !== typeof value || !("__html" in value))
              throw Error(formatProdErrorMessage(61));
            key = value.__html;
            if (null != key) {
              if (null != props.children) throw Error(formatProdErrorMessage(60));
              domElement.innerHTML = key;
            }
          }
          break;
        case "multiple":
          domElement.multiple = value && "function" !== typeof value && "symbol" !== typeof value;
          break;
        case "muted":
          domElement.muted = value && "function" !== typeof value && "symbol" !== typeof value;
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (null == value || "function" === typeof value || "boolean" === typeof value || "symbol" === typeof value) {
            domElement.removeAttribute("xlink:href");
            break;
          }
          key = sanitizeURL("" + value);
          domElement.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            key
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "" + value) : domElement.removeAttribute(key);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "") : domElement.removeAttribute(key);
          break;
        case "capture":
        case "download":
          true === value ? domElement.setAttribute(key, "") : false !== value && null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          null != value && "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
          break;
        case "rowSpan":
        case "start":
          null == value || "function" === typeof value || "symbol" === typeof value || isNaN(value) ? domElement.removeAttribute(key) : domElement.setAttribute(key, value);
          break;
        case "popover":
          listenToNonDelegatedEvent("beforetoggle", domElement);
          listenToNonDelegatedEvent("toggle", domElement);
          setValueForAttribute(domElement, "popover", value);
          break;
        case "xlinkActuate":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:actuate",
            value
          );
          break;
        case "xlinkArcrole":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:arcrole",
            value
          );
          break;
        case "xlinkRole":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:role",
            value
          );
          break;
        case "xlinkShow":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:show",
            value
          );
          break;
        case "xlinkTitle":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:title",
            value
          );
          break;
        case "xlinkType":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:type",
            value
          );
          break;
        case "xmlBase":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:base",
            value
          );
          break;
        case "xmlLang":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:lang",
            value
          );
          break;
        case "xmlSpace":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            value
          );
          break;
        case "is":
          setValueForAttribute(domElement, "is", value);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!(2 < key.length) || "o" !== key[0] && "O" !== key[0] || "n" !== key[1] && "N" !== key[1])
            key = aliases.get(key) || key, setValueForAttribute(domElement, key, value);
      }
    }
    function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
      switch (key) {
        case "style":
          setValueForStyles(domElement, value, prevValue);
          break;
        case "dangerouslySetInnerHTML":
          if (null != value) {
            if ("object" !== typeof value || !("__html" in value))
              throw Error(formatProdErrorMessage(61));
            key = value.__html;
            if (null != key) {
              if (null != props.children) throw Error(formatProdErrorMessage(60));
              domElement.innerHTML = key;
            }
          }
          break;
        case "children":
          "string" === typeof value ? setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && setTextContent(domElement, "" + value);
          break;
        case "onScroll":
          null != value && listenToNonDelegatedEvent("scroll", domElement);
          break;
        case "onScrollEnd":
          null != value && listenToNonDelegatedEvent("scrollend", domElement);
          break;
        case "onClick":
          null != value && (domElement.onclick = noop$1);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!registrationNameDependencies.hasOwnProperty(key))
            a: {
              if ("o" === key[0] && "n" === key[1] && (props = key.endsWith("Capture"), tag = key.slice(2, props ? key.length - 7 : void 0), prevValue = domElement[internalPropsKey] || null, prevValue = null != prevValue ? prevValue[key] : null, "function" === typeof prevValue && domElement.removeEventListener(tag, prevValue, props), "function" === typeof value)) {
                "function" !== typeof prevValue && null !== prevValue && (key in domElement ? domElement[key] = null : domElement.hasAttribute(key) && domElement.removeAttribute(key));
                domElement.addEventListener(tag, value, props);
                break a;
              }
              key in domElement ? domElement[key] = value : true === value ? domElement.setAttribute(key, "") : setValueForAttribute(domElement, key, value);
            }
      }
    }
    function setInitialProperties(domElement, tag, props) {
      switch (tag) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          listenToNonDelegatedEvent("error", domElement);
          listenToNonDelegatedEvent("load", domElement);
          var hasSrc = false, hasSrcSet = false, propKey;
          for (propKey in props)
            if (props.hasOwnProperty(propKey)) {
              var propValue = props[propKey];
              if (null != propValue)
                switch (propKey) {
                  case "src":
                    hasSrc = true;
                    break;
                  case "srcSet":
                    hasSrcSet = true;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(formatProdErrorMessage(137, tag));
                  default:
                    setProp(domElement, tag, propKey, propValue, props, null);
                }
            }
          hasSrcSet && setProp(domElement, tag, "srcSet", props.srcSet, props, null);
          hasSrc && setProp(domElement, tag, "src", props.src, props, null);
          return;
        case "input":
          listenToNonDelegatedEvent("invalid", domElement);
          var defaultValue = propKey = propValue = hasSrcSet = null, checked = null, defaultChecked = null;
          for (hasSrc in props)
            if (props.hasOwnProperty(hasSrc)) {
              var propValue$184 = props[hasSrc];
              if (null != propValue$184)
                switch (hasSrc) {
                  case "name":
                    hasSrcSet = propValue$184;
                    break;
                  case "type":
                    propValue = propValue$184;
                    break;
                  case "checked":
                    checked = propValue$184;
                    break;
                  case "defaultChecked":
                    defaultChecked = propValue$184;
                    break;
                  case "value":
                    propKey = propValue$184;
                    break;
                  case "defaultValue":
                    defaultValue = propValue$184;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (null != propValue$184)
                      throw Error(formatProdErrorMessage(137, tag));
                    break;
                  default:
                    setProp(domElement, tag, hasSrc, propValue$184, props, null);
                }
            }
          initInput(
            domElement,
            propKey,
            defaultValue,
            checked,
            defaultChecked,
            propValue,
            hasSrcSet,
            false
          );
          return;
        case "select":
          listenToNonDelegatedEvent("invalid", domElement);
          hasSrc = propValue = propKey = null;
          for (hasSrcSet in props)
            if (props.hasOwnProperty(hasSrcSet) && (defaultValue = props[hasSrcSet], null != defaultValue))
              switch (hasSrcSet) {
                case "value":
                  propKey = defaultValue;
                  break;
                case "defaultValue":
                  propValue = defaultValue;
                  break;
                case "multiple":
                  hasSrc = defaultValue;
                default:
                  setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
              }
          tag = propKey;
          props = propValue;
          domElement.multiple = !!hasSrc;
          null != tag ? updateOptions(domElement, !!hasSrc, tag, false) : null != props && updateOptions(domElement, !!hasSrc, props, true);
          return;
        case "textarea":
          listenToNonDelegatedEvent("invalid", domElement);
          propKey = hasSrcSet = hasSrc = null;
          for (propValue in props)
            if (props.hasOwnProperty(propValue) && (defaultValue = props[propValue], null != defaultValue))
              switch (propValue) {
                case "value":
                  hasSrc = defaultValue;
                  break;
                case "defaultValue":
                  hasSrcSet = defaultValue;
                  break;
                case "children":
                  propKey = defaultValue;
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != defaultValue) throw Error(formatProdErrorMessage(91));
                  break;
                default:
                  setProp(domElement, tag, propValue, defaultValue, props, null);
              }
          initTextarea(domElement, hasSrc, hasSrcSet, propKey);
          return;
        case "option":
          for (checked in props)
            if (props.hasOwnProperty(checked) && (hasSrc = props[checked], null != hasSrc))
              switch (checked) {
                case "selected":
                  domElement.selected = hasSrc && "function" !== typeof hasSrc && "symbol" !== typeof hasSrc;
                  break;
                default:
                  setProp(domElement, tag, checked, hasSrc, props, null);
              }
          return;
        case "dialog":
          listenToNonDelegatedEvent("beforetoggle", domElement);
          listenToNonDelegatedEvent("toggle", domElement);
          listenToNonDelegatedEvent("cancel", domElement);
          listenToNonDelegatedEvent("close", domElement);
          break;
        case "iframe":
        case "object":
          listenToNonDelegatedEvent("load", domElement);
          break;
        case "video":
        case "audio":
          for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
            listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
          break;
        case "image":
          listenToNonDelegatedEvent("error", domElement);
          listenToNonDelegatedEvent("load", domElement);
          break;
        case "details":
          listenToNonDelegatedEvent("toggle", domElement);
          break;
        case "embed":
        case "source":
        case "link":
          listenToNonDelegatedEvent("error", domElement), listenToNonDelegatedEvent("load", domElement);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (defaultChecked in props)
            if (props.hasOwnProperty(defaultChecked) && (hasSrc = props[defaultChecked], null != hasSrc))
              switch (defaultChecked) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(formatProdErrorMessage(137, tag));
                default:
                  setProp(domElement, tag, defaultChecked, hasSrc, props, null);
              }
          return;
        default:
          if (isCustomElement(tag)) {
            for (propValue$184 in props)
              props.hasOwnProperty(propValue$184) && (hasSrc = props[propValue$184], void 0 !== hasSrc && setPropOnCustomElement(
                domElement,
                tag,
                propValue$184,
                hasSrc,
                props,
                void 0
              ));
            return;
          }
      }
      for (defaultValue in props)
        props.hasOwnProperty(defaultValue) && (hasSrc = props[defaultValue], null != hasSrc && setProp(domElement, tag, defaultValue, hasSrc, props, null));
    }
    function updateProperties(domElement, tag, lastProps, nextProps) {
      switch (tag) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var name = null, type = null, value = null, defaultValue = null, lastDefaultValue = null, checked = null, defaultChecked = null;
          for (propKey in lastProps) {
            var lastProp = lastProps[propKey];
            if (lastProps.hasOwnProperty(propKey) && null != lastProp)
              switch (propKey) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  lastDefaultValue = lastProp;
                default:
                  nextProps.hasOwnProperty(propKey) || setProp(domElement, tag, propKey, null, nextProps, lastProp);
              }
          }
          for (var propKey$201 in nextProps) {
            var propKey = nextProps[propKey$201];
            lastProp = lastProps[propKey$201];
            if (nextProps.hasOwnProperty(propKey$201) && (null != propKey || null != lastProp))
              switch (propKey$201) {
                case "type":
                  type = propKey;
                  break;
                case "name":
                  name = propKey;
                  break;
                case "checked":
                  checked = propKey;
                  break;
                case "defaultChecked":
                  defaultChecked = propKey;
                  break;
                case "value":
                  value = propKey;
                  break;
                case "defaultValue":
                  defaultValue = propKey;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (null != propKey)
                    throw Error(formatProdErrorMessage(137, tag));
                  break;
                default:
                  propKey !== lastProp && setProp(
                    domElement,
                    tag,
                    propKey$201,
                    propKey,
                    nextProps,
                    lastProp
                  );
              }
          }
          updateInput(
            domElement,
            value,
            defaultValue,
            lastDefaultValue,
            checked,
            defaultChecked,
            type,
            name
          );
          return;
        case "select":
          propKey = value = defaultValue = propKey$201 = null;
          for (type in lastProps)
            if (lastDefaultValue = lastProps[type], lastProps.hasOwnProperty(type) && null != lastDefaultValue)
              switch (type) {
                case "value":
                  break;
                case "multiple":
                  propKey = lastDefaultValue;
                default:
                  nextProps.hasOwnProperty(type) || setProp(
                    domElement,
                    tag,
                    type,
                    null,
                    nextProps,
                    lastDefaultValue
                  );
              }
          for (name in nextProps)
            if (type = nextProps[name], lastDefaultValue = lastProps[name], nextProps.hasOwnProperty(name) && (null != type || null != lastDefaultValue))
              switch (name) {
                case "value":
                  propKey$201 = type;
                  break;
                case "defaultValue":
                  defaultValue = type;
                  break;
                case "multiple":
                  value = type;
                default:
                  type !== lastDefaultValue && setProp(
                    domElement,
                    tag,
                    name,
                    type,
                    nextProps,
                    lastDefaultValue
                  );
              }
          tag = defaultValue;
          lastProps = value;
          nextProps = propKey;
          null != propKey$201 ? updateOptions(domElement, !!lastProps, propKey$201, false) : !!nextProps !== !!lastProps && (null != tag ? updateOptions(domElement, !!lastProps, tag, true) : updateOptions(domElement, !!lastProps, lastProps ? [] : "", false));
          return;
        case "textarea":
          propKey = propKey$201 = null;
          for (defaultValue in lastProps)
            if (name = lastProps[defaultValue], lastProps.hasOwnProperty(defaultValue) && null != name && !nextProps.hasOwnProperty(defaultValue))
              switch (defaultValue) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  setProp(domElement, tag, defaultValue, null, nextProps, name);
              }
          for (value in nextProps)
            if (name = nextProps[value], type = lastProps[value], nextProps.hasOwnProperty(value) && (null != name || null != type))
              switch (value) {
                case "value":
                  propKey$201 = name;
                  break;
                case "defaultValue":
                  propKey = name;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != name) throw Error(formatProdErrorMessage(91));
                  break;
                default:
                  name !== type && setProp(domElement, tag, value, name, nextProps, type);
              }
          updateTextarea(domElement, propKey$201, propKey);
          return;
        case "option":
          for (var propKey$217 in lastProps)
            if (propKey$201 = lastProps[propKey$217], lastProps.hasOwnProperty(propKey$217) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$217))
              switch (propKey$217) {
                case "selected":
                  domElement.selected = false;
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    propKey$217,
                    null,
                    nextProps,
                    propKey$201
                  );
              }
          for (lastDefaultValue in nextProps)
            if (propKey$201 = nextProps[lastDefaultValue], propKey = lastProps[lastDefaultValue], nextProps.hasOwnProperty(lastDefaultValue) && propKey$201 !== propKey && (null != propKey$201 || null != propKey))
              switch (lastDefaultValue) {
                case "selected":
                  domElement.selected = propKey$201 && "function" !== typeof propKey$201 && "symbol" !== typeof propKey$201;
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    lastDefaultValue,
                    propKey$201,
                    nextProps,
                    propKey
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var propKey$222 in lastProps)
            propKey$201 = lastProps[propKey$222], lastProps.hasOwnProperty(propKey$222) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$222) && setProp(domElement, tag, propKey$222, null, nextProps, propKey$201);
          for (checked in nextProps)
            if (propKey$201 = nextProps[checked], propKey = lastProps[checked], nextProps.hasOwnProperty(checked) && propKey$201 !== propKey && (null != propKey$201 || null != propKey))
              switch (checked) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (null != propKey$201)
                    throw Error(formatProdErrorMessage(137, tag));
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    checked,
                    propKey$201,
                    nextProps,
                    propKey
                  );
              }
          return;
        default:
          if (isCustomElement(tag)) {
            for (var propKey$227 in lastProps)
              propKey$201 = lastProps[propKey$227], lastProps.hasOwnProperty(propKey$227) && void 0 !== propKey$201 && !nextProps.hasOwnProperty(propKey$227) && setPropOnCustomElement(
                domElement,
                tag,
                propKey$227,
                void 0,
                nextProps,
                propKey$201
              );
            for (defaultChecked in nextProps)
              propKey$201 = nextProps[defaultChecked], propKey = lastProps[defaultChecked], !nextProps.hasOwnProperty(defaultChecked) || propKey$201 === propKey || void 0 === propKey$201 && void 0 === propKey || setPropOnCustomElement(
                domElement,
                tag,
                defaultChecked,
                propKey$201,
                nextProps,
                propKey
              );
            return;
          }
      }
      for (var propKey$232 in lastProps)
        propKey$201 = lastProps[propKey$232], lastProps.hasOwnProperty(propKey$232) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$232) && setProp(domElement, tag, propKey$232, null, nextProps, propKey$201);
      for (lastProp in nextProps)
        propKey$201 = nextProps[lastProp], propKey = lastProps[lastProp], !nextProps.hasOwnProperty(lastProp) || propKey$201 === propKey || null == propKey$201 && null == propKey || setProp(domElement, tag, lastProp, propKey$201, nextProps, propKey);
    }
    function isLikelyStaticResource(initiatorType) {
      switch (initiatorType) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function estimateBandwidth() {
      if ("function" === typeof performance.getEntriesByType) {
        for (var count = 0, bits = 0, resourceEntries = performance.getEntriesByType("resource"), i = 0; i < resourceEntries.length; i++) {
          var entry = resourceEntries[i], transferSize = entry.transferSize, initiatorType = entry.initiatorType, duration = entry.duration;
          if (transferSize && duration && isLikelyStaticResource(initiatorType)) {
            initiatorType = 0;
            duration = entry.responseEnd;
            for (i += 1; i < resourceEntries.length; i++) {
              var overlapEntry = resourceEntries[i], overlapStartTime = overlapEntry.startTime;
              if (overlapStartTime > duration) break;
              var overlapTransferSize = overlapEntry.transferSize, overlapInitiatorType = overlapEntry.initiatorType;
              overlapTransferSize && isLikelyStaticResource(overlapInitiatorType) && (overlapEntry = overlapEntry.responseEnd, initiatorType += overlapTransferSize * (overlapEntry < duration ? 1 : (duration - overlapStartTime) / (overlapEntry - overlapStartTime)));
            }
            --i;
            bits += 8 * (transferSize + initiatorType) / (entry.duration / 1e3);
            count++;
            if (10 < count) break;
          }
        }
        if (0 < count) return bits / count / 1e6;
      }
      return navigator.connection && (count = navigator.connection.downlink, "number" === typeof count) ? count : 5;
    }
    var eventsEnabled = null;
    var selectionInformation = null;
    function getOwnerDocumentFromRootContainer(rootContainerElement) {
      return 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
    }
    function getOwnHostContext(namespaceURI) {
      switch (namespaceURI) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function getChildHostContextProd(parentNamespace, type) {
      if (0 === parentNamespace)
        switch (type) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return 1 === parentNamespace && "foreignObject" === type ? 0 : parentNamespace;
    }
    function shouldSetTextContent(type, props) {
      return "textarea" === type || "noscript" === type || "string" === typeof props.children || "number" === typeof props.children || "bigint" === typeof props.children || "object" === typeof props.dangerouslySetInnerHTML && null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html;
    }
    var currentPopstateTransitionEvent = null;
    function shouldAttemptEagerTransition() {
      var event = window.event;
      if (event && "popstate" === event.type) {
        if (event === currentPopstateTransitionEvent) return false;
        currentPopstateTransitionEvent = event;
        return true;
      }
      currentPopstateTransitionEvent = null;
      return false;
    }
    var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0;
    var cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0;
    var localPromise = "function" === typeof Promise ? Promise : void 0;
    var scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof localPromise ? function(callback) {
      return localPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
    } : scheduleTimeout;
    function handleErrorInNextTick(error) {
      setTimeout(function() {
        throw error;
      });
    }
    function isSingletonScope(type) {
      return "head" === type;
    }
    function clearHydrationBoundary(parentInstance, hydrationInstance) {
      var node = hydrationInstance, depth = 0;
      do {
        var nextNode = node.nextSibling;
        parentInstance.removeChild(node);
        if (nextNode && 8 === nextNode.nodeType)
          if (node = nextNode.data, "/$" === node || "/&" === node) {
            if (0 === depth) {
              parentInstance.removeChild(nextNode);
              retryIfBlockedOn(hydrationInstance);
              return;
            }
            depth--;
          } else if ("$" === node || "$?" === node || "$~" === node || "$!" === node || "&" === node)
            depth++;
          else if ("html" === node)
            releaseSingletonInstance(parentInstance.ownerDocument.documentElement);
          else if ("head" === node) {
            node = parentInstance.ownerDocument.head;
            releaseSingletonInstance(node);
            for (var node$jscomp$0 = node.firstChild; node$jscomp$0; ) {
              var nextNode$jscomp$0 = node$jscomp$0.nextSibling, nodeName = node$jscomp$0.nodeName;
              node$jscomp$0[internalHoistableMarker] || "SCRIPT" === nodeName || "STYLE" === nodeName || "LINK" === nodeName && "stylesheet" === node$jscomp$0.rel.toLowerCase() || node.removeChild(node$jscomp$0);
              node$jscomp$0 = nextNode$jscomp$0;
            }
          } else
            "body" === node && releaseSingletonInstance(parentInstance.ownerDocument.body);
        node = nextNode;
      } while (node);
      retryIfBlockedOn(hydrationInstance);
    }
    function hideOrUnhideDehydratedBoundary(suspenseInstance, isHidden) {
      var node = suspenseInstance;
      suspenseInstance = 0;
      do {
        var nextNode = node.nextSibling;
        1 === node.nodeType ? isHidden ? (node._stashedDisplay = node.style.display, node.style.display = "none") : (node.style.display = node._stashedDisplay || "", "" === node.getAttribute("style") && node.removeAttribute("style")) : 3 === node.nodeType && (isHidden ? (node._stashedText = node.nodeValue, node.nodeValue = "") : node.nodeValue = node._stashedText || "");
        if (nextNode && 8 === nextNode.nodeType)
          if (node = nextNode.data, "/$" === node)
            if (0 === suspenseInstance) break;
            else suspenseInstance--;
          else
            "$" !== node && "$?" !== node && "$~" !== node && "$!" !== node || suspenseInstance++;
        node = nextNode;
      } while (node);
    }
    function clearContainerSparingly(container) {
      var nextNode = container.firstChild;
      nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
      for (; nextNode; ) {
        var node = nextNode;
        nextNode = nextNode.nextSibling;
        switch (node.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            clearContainerSparingly(node);
            detachDeletedInstance(node);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if ("stylesheet" === node.rel.toLowerCase()) continue;
        }
        container.removeChild(node);
      }
    }
    function canHydrateInstance(instance, type, props, inRootOrSingleton) {
      for (; 1 === instance.nodeType; ) {
        var anyProps = props;
        if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
          if (!inRootOrSingleton && ("INPUT" !== instance.nodeName || "hidden" !== instance.type))
            break;
        } else if (!inRootOrSingleton)
          if ("input" === type && "hidden" === instance.type) {
            var name = null == anyProps.name ? null : "" + anyProps.name;
            if ("hidden" === anyProps.type && instance.getAttribute("name") === name)
              return instance;
          } else return instance;
        else if (!instance[internalHoistableMarker])
          switch (type) {
            case "meta":
              if (!instance.hasAttribute("itemprop")) break;
              return instance;
            case "link":
              name = instance.getAttribute("rel");
              if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
                break;
              else if (name !== anyProps.rel || instance.getAttribute("href") !== (null == anyProps.href || "" === anyProps.href ? null : anyProps.href) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) || instance.getAttribute("title") !== (null == anyProps.title ? null : anyProps.title))
                break;
              return instance;
            case "style":
              if (instance.hasAttribute("data-precedence")) break;
              return instance;
            case "script":
              name = instance.getAttribute("src");
              if ((name !== (null == anyProps.src ? null : anyProps.src) || instance.getAttribute("type") !== (null == anyProps.type ? null : anyProps.type) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) && name && instance.hasAttribute("async") && !instance.hasAttribute("itemprop"))
                break;
              return instance;
            default:
              return instance;
          }
        instance = getNextHydratable(instance.nextSibling);
        if (null === instance) break;
      }
      return null;
    }
    function canHydrateTextInstance(instance, text, inRootOrSingleton) {
      if ("" === text) return null;
      for (; 3 !== instance.nodeType; ) {
        if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton)
          return null;
        instance = getNextHydratable(instance.nextSibling);
        if (null === instance) return null;
      }
      return instance;
    }
    function canHydrateHydrationBoundary(instance, inRootOrSingleton) {
      for (; 8 !== instance.nodeType; ) {
        if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton)
          return null;
        instance = getNextHydratable(instance.nextSibling);
        if (null === instance) return null;
      }
      return instance;
    }
    function isSuspenseInstancePending(instance) {
      return "$?" === instance.data || "$~" === instance.data;
    }
    function isSuspenseInstanceFallback(instance) {
      return "$!" === instance.data || "$?" === instance.data && "loading" !== instance.ownerDocument.readyState;
    }
    function registerSuspenseInstanceRetry(instance, callback) {
      var ownerDocument = instance.ownerDocument;
      if ("$~" === instance.data) instance._reactRetry = callback;
      else if ("$?" !== instance.data || "loading" !== ownerDocument.readyState)
        callback();
      else {
        var listener = function() {
          callback();
          ownerDocument.removeEventListener("DOMContentLoaded", listener);
        };
        ownerDocument.addEventListener("DOMContentLoaded", listener);
        instance._reactRetry = listener;
      }
    }
    function getNextHydratable(node) {
      for (; null != node; node = node.nextSibling) {
        var nodeType = node.nodeType;
        if (1 === nodeType || 3 === nodeType) break;
        if (8 === nodeType) {
          nodeType = node.data;
          if ("$" === nodeType || "$!" === nodeType || "$?" === nodeType || "$~" === nodeType || "&" === nodeType || "F!" === nodeType || "F" === nodeType)
            break;
          if ("/$" === nodeType || "/&" === nodeType) return null;
        }
      }
      return node;
    }
    var previousHydratableOnEnteringScopedSingleton = null;
    function getNextHydratableInstanceAfterHydrationBoundary(hydrationInstance) {
      hydrationInstance = hydrationInstance.nextSibling;
      for (var depth = 0; hydrationInstance; ) {
        if (8 === hydrationInstance.nodeType) {
          var data2 = hydrationInstance.data;
          if ("/$" === data2 || "/&" === data2) {
            if (0 === depth)
              return getNextHydratable(hydrationInstance.nextSibling);
            depth--;
          } else
            "$" !== data2 && "$!" !== data2 && "$?" !== data2 && "$~" !== data2 && "&" !== data2 || depth++;
        }
        hydrationInstance = hydrationInstance.nextSibling;
      }
      return null;
    }
    function getParentHydrationBoundary(targetInstance) {
      targetInstance = targetInstance.previousSibling;
      for (var depth = 0; targetInstance; ) {
        if (8 === targetInstance.nodeType) {
          var data2 = targetInstance.data;
          if ("$" === data2 || "$!" === data2 || "$?" === data2 || "$~" === data2 || "&" === data2) {
            if (0 === depth) return targetInstance;
            depth--;
          } else "/$" !== data2 && "/&" !== data2 || depth++;
        }
        targetInstance = targetInstance.previousSibling;
      }
      return null;
    }
    function resolveSingletonInstance(type, props, rootContainerInstance) {
      props = getOwnerDocumentFromRootContainer(rootContainerInstance);
      switch (type) {
        case "html":
          type = props.documentElement;
          if (!type) throw Error(formatProdErrorMessage(452));
          return type;
        case "head":
          type = props.head;
          if (!type) throw Error(formatProdErrorMessage(453));
          return type;
        case "body":
          type = props.body;
          if (!type) throw Error(formatProdErrorMessage(454));
          return type;
        default:
          throw Error(formatProdErrorMessage(451));
      }
    }
    function releaseSingletonInstance(instance) {
      for (var attributes = instance.attributes; attributes.length; )
        instance.removeAttributeNode(attributes[0]);
      detachDeletedInstance(instance);
    }
    var preloadPropsMap = /* @__PURE__ */ new Map();
    var preconnectsSet = /* @__PURE__ */ new Set();
    function getHoistableRoot(container) {
      return "function" === typeof container.getRootNode ? container.getRootNode() : 9 === container.nodeType ? container : container.ownerDocument;
    }
    var previousDispatcher = ReactDOMSharedInternals.d;
    ReactDOMSharedInternals.d = {
      f: flushSyncWork,
      r: requestFormReset,
      D: prefetchDNS,
      C: preconnect,
      L: preload,
      m: preloadModule,
      X: preinitScript,
      S: preinitStyle,
      M: preinitModuleScript
    };
    function flushSyncWork() {
      var previousWasRendering = previousDispatcher.f(), wasRendering = flushSyncWork$1();
      return previousWasRendering || wasRendering;
    }
    function requestFormReset(form) {
      var formInst = getInstanceFromNode(form);
      null !== formInst && 5 === formInst.tag && "form" === formInst.type ? requestFormReset$1(formInst) : previousDispatcher.r(form);
    }
    var globalDocument = "undefined" === typeof document ? null : document;
    function preconnectAs(rel, href, crossOrigin) {
      var ownerDocument = globalDocument;
      if (ownerDocument && "string" === typeof href && href) {
        var limitedEscapedHref = escapeSelectorAttributeValueInsideDoubleQuotes(href);
        limitedEscapedHref = 'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
        "string" === typeof crossOrigin && (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
        preconnectsSet.has(limitedEscapedHref) || (preconnectsSet.add(limitedEscapedHref), rel = { rel, crossOrigin, href }, null === ownerDocument.querySelector(limitedEscapedHref) && (href = ownerDocument.createElement("link"), setInitialProperties(href, "link", rel), markNodeAsHoistable(href), ownerDocument.head.appendChild(href)));
      }
    }
    function prefetchDNS(href) {
      previousDispatcher.D(href);
      preconnectAs("dns-prefetch", href, null);
    }
    function preconnect(href, crossOrigin) {
      previousDispatcher.C(href, crossOrigin);
      preconnectAs("preconnect", href, crossOrigin);
    }
    function preload(href, as, options2) {
      previousDispatcher.L(href, as, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href && as) {
        var preloadSelector = 'link[rel="preload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"]';
        "image" === as ? options2 && options2.imageSrcSet ? (preloadSelector += '[imagesrcset="' + escapeSelectorAttributeValueInsideDoubleQuotes(
          options2.imageSrcSet
        ) + '"]', "string" === typeof options2.imageSizes && (preloadSelector += '[imagesizes="' + escapeSelectorAttributeValueInsideDoubleQuotes(
          options2.imageSizes
        ) + '"]')) : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]' : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]';
        var key = preloadSelector;
        switch (as) {
          case "style":
            key = getStyleKey(href);
            break;
          case "script":
            key = getScriptKey(href);
        }
        preloadPropsMap.has(key) || (href = assign(
          {
            rel: "preload",
            href: "image" === as && options2 && options2.imageSrcSet ? void 0 : href,
            as
          },
          options2
        ), preloadPropsMap.set(key, href), null !== ownerDocument.querySelector(preloadSelector) || "style" === as && ownerDocument.querySelector(getStylesheetSelectorFromKey(key)) || "script" === as && ownerDocument.querySelector(getScriptSelectorFromKey(key)) || (as = ownerDocument.createElement("link"), setInitialProperties(as, "link", href), markNodeAsHoistable(as), ownerDocument.head.appendChild(as)));
      }
    }
    function preloadModule(href, options2) {
      previousDispatcher.m(href, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href) {
        var as = options2 && "string" === typeof options2.as ? options2.as : "script", preloadSelector = 'link[rel="modulepreload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"][href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]', key = preloadSelector;
        switch (as) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            key = getScriptKey(href);
        }
        if (!preloadPropsMap.has(key) && (href = assign({ rel: "modulepreload", href }, options2), preloadPropsMap.set(key, href), null === ownerDocument.querySelector(preloadSelector))) {
          switch (as) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
                return;
          }
          as = ownerDocument.createElement("link");
          setInitialProperties(as, "link", href);
          markNodeAsHoistable(as);
          ownerDocument.head.appendChild(as);
        }
      }
    }
    function preinitStyle(href, precedence, options2) {
      previousDispatcher.S(href, precedence, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href) {
        var styles = getResourcesFromRoot(ownerDocument).hoistableStyles, key = getStyleKey(href);
        precedence = precedence || "default";
        var resource = styles.get(key);
        if (!resource) {
          var state = { loading: 0, preload: null };
          if (resource = ownerDocument.querySelector(
            getStylesheetSelectorFromKey(key)
          ))
            state.loading = 5;
          else {
            href = assign(
              { rel: "stylesheet", href, "data-precedence": precedence },
              options2
            );
            (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(href, options2);
            var link = resource = ownerDocument.createElement("link");
            markNodeAsHoistable(link);
            setInitialProperties(link, "link", href);
            link._p = new Promise(function(resolve, reject) {
              link.onload = resolve;
              link.onerror = reject;
            });
            link.addEventListener("load", function() {
              state.loading |= 1;
            });
            link.addEventListener("error", function() {
              state.loading |= 2;
            });
            state.loading |= 4;
            insertStylesheet(resource, precedence, ownerDocument);
          }
          resource = {
            type: "stylesheet",
            instance: resource,
            count: 1,
            state
          };
          styles.set(key, resource);
        }
      }
    }
    function preinitScript(src, options2) {
      previousDispatcher.X(src, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && src) {
        var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
        resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
          type: "script",
          instance: resource,
          count: 1,
          state: null
        }, scripts.set(key, resource));
      }
    }
    function preinitModuleScript(src, options2) {
      previousDispatcher.M(src, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && src) {
        var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
        resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true, type: "module" }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
          type: "script",
          instance: resource,
          count: 1,
          state: null
        }, scripts.set(key, resource));
      }
    }
    function getResource(type, currentProps, pendingProps, currentResource) {
      var JSCompiler_inline_result = (JSCompiler_inline_result = rootInstanceStackCursor.current) ? getHoistableRoot(JSCompiler_inline_result) : null;
      if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
      switch (type) {
        case "meta":
        case "title":
          return null;
        case "style":
          return "string" === typeof pendingProps.precedence && "string" === typeof pendingProps.href ? (currentProps = getStyleKey(pendingProps.href), pendingProps = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableStyles, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if ("stylesheet" === pendingProps.rel && "string" === typeof pendingProps.href && "string" === typeof pendingProps.precedence) {
            type = getStyleKey(pendingProps.href);
            var styles$243 = getResourcesFromRoot(
              JSCompiler_inline_result
            ).hoistableStyles, resource$244 = styles$243.get(type);
            resource$244 || (JSCompiler_inline_result = JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result, resource$244 = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: 0, preload: null }
            }, styles$243.set(type, resource$244), (styles$243 = JSCompiler_inline_result.querySelector(
              getStylesheetSelectorFromKey(type)
            )) && !styles$243._p && (resource$244.instance = styles$243, resource$244.state.loading = 5), preloadPropsMap.has(type) || (pendingProps = {
              rel: "preload",
              as: "style",
              href: pendingProps.href,
              crossOrigin: pendingProps.crossOrigin,
              integrity: pendingProps.integrity,
              media: pendingProps.media,
              hrefLang: pendingProps.hrefLang,
              referrerPolicy: pendingProps.referrerPolicy
            }, preloadPropsMap.set(type, pendingProps), styles$243 || preloadStylesheet(
              JSCompiler_inline_result,
              type,
              pendingProps,
              resource$244.state
            )));
            if (currentProps && null === currentResource)
              throw Error(formatProdErrorMessage(528, ""));
            return resource$244;
          }
          if (currentProps && null !== currentResource)
            throw Error(formatProdErrorMessage(529, ""));
          return null;
        case "script":
          return currentProps = pendingProps.async, pendingProps = pendingProps.src, "string" === typeof pendingProps && currentProps && "function" !== typeof currentProps && "symbol" !== typeof currentProps ? (currentProps = getScriptKey(pendingProps), pendingProps = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableScripts, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(formatProdErrorMessage(444, type));
      }
    }
    function getStyleKey(href) {
      return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
    }
    function getStylesheetSelectorFromKey(key) {
      return 'link[rel="stylesheet"][' + key + "]";
    }
    function stylesheetPropsFromRawProps(rawProps) {
      return assign({}, rawProps, {
        "data-precedence": rawProps.precedence,
        precedence: null
      });
    }
    function preloadStylesheet(ownerDocument, key, preloadProps, state) {
      ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]") ? state.loading = 1 : (key = ownerDocument.createElement("link"), state.preload = key, key.addEventListener("load", function() {
        return state.loading |= 1;
      }), key.addEventListener("error", function() {
        return state.loading |= 2;
      }), setInitialProperties(key, "link", preloadProps), markNodeAsHoistable(key), ownerDocument.head.appendChild(key));
    }
    function getScriptKey(src) {
      return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
    }
    function getScriptSelectorFromKey(key) {
      return "script[async]" + key;
    }
    function acquireResource(hoistableRoot, resource, props) {
      resource.count++;
      if (null === resource.instance)
        switch (resource.type) {
          case "style":
            var instance = hoistableRoot.querySelector(
              'style[data-href~="' + escapeSelectorAttributeValueInsideDoubleQuotes(props.href) + '"]'
            );
            if (instance)
              return resource.instance = instance, markNodeAsHoistable(instance), instance;
            var styleProps = assign({}, props, {
              "data-href": props.href,
              "data-precedence": props.precedence,
              href: null,
              precedence: null
            });
            instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
              "style"
            );
            markNodeAsHoistable(instance);
            setInitialProperties(instance, "style", styleProps);
            insertStylesheet(instance, props.precedence, hoistableRoot);
            return resource.instance = instance;
          case "stylesheet":
            styleProps = getStyleKey(props.href);
            var instance$249 = hoistableRoot.querySelector(
              getStylesheetSelectorFromKey(styleProps)
            );
            if (instance$249)
              return resource.state.loading |= 4, resource.instance = instance$249, markNodeAsHoistable(instance$249), instance$249;
            instance = stylesheetPropsFromRawProps(props);
            (styleProps = preloadPropsMap.get(styleProps)) && adoptPreloadPropsForStylesheet(instance, styleProps);
            instance$249 = (hoistableRoot.ownerDocument || hoistableRoot).createElement("link");
            markNodeAsHoistable(instance$249);
            var linkInstance = instance$249;
            linkInstance._p = new Promise(function(resolve, reject) {
              linkInstance.onload = resolve;
              linkInstance.onerror = reject;
            });
            setInitialProperties(instance$249, "link", instance);
            resource.state.loading |= 4;
            insertStylesheet(instance$249, props.precedence, hoistableRoot);
            return resource.instance = instance$249;
          case "script":
            instance$249 = getScriptKey(props.src);
            if (styleProps = hoistableRoot.querySelector(
              getScriptSelectorFromKey(instance$249)
            ))
              return resource.instance = styleProps, markNodeAsHoistable(styleProps), styleProps;
            instance = props;
            if (styleProps = preloadPropsMap.get(instance$249))
              instance = assign({}, props), adoptPreloadPropsForScript(instance, styleProps);
            hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
            styleProps = hoistableRoot.createElement("script");
            markNodeAsHoistable(styleProps);
            setInitialProperties(styleProps, "link", instance);
            hoistableRoot.head.appendChild(styleProps);
            return resource.instance = styleProps;
          case "void":
            return null;
          default:
            throw Error(formatProdErrorMessage(443, resource.type));
        }
      else
        "stylesheet" === resource.type && 0 === (resource.state.loading & 4) && (instance = resource.instance, resource.state.loading |= 4, insertStylesheet(instance, props.precedence, hoistableRoot));
      return resource.instance;
    }
    function insertStylesheet(instance, precedence, root3) {
      for (var nodes = root3.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), last = nodes.length ? nodes[nodes.length - 1] : null, prior = last, i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.dataset.precedence === precedence) prior = node;
        else if (prior !== last) break;
      }
      prior ? prior.parentNode.insertBefore(instance, prior.nextSibling) : (precedence = 9 === root3.nodeType ? root3.head : root3, precedence.insertBefore(instance, precedence.firstChild));
    }
    function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
      null == stylesheetProps.crossOrigin && (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
      null == stylesheetProps.referrerPolicy && (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
      null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
    }
    function adoptPreloadPropsForScript(scriptProps, preloadProps) {
      null == scriptProps.crossOrigin && (scriptProps.crossOrigin = preloadProps.crossOrigin);
      null == scriptProps.referrerPolicy && (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
      null == scriptProps.integrity && (scriptProps.integrity = preloadProps.integrity);
    }
    var tagCaches = null;
    function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
      if (null === tagCaches) {
        var cache = /* @__PURE__ */ new Map();
        var caches = tagCaches = /* @__PURE__ */ new Map();
        caches.set(ownerDocument, cache);
      } else
        caches = tagCaches, cache = caches.get(ownerDocument), cache || (cache = /* @__PURE__ */ new Map(), caches.set(ownerDocument, cache));
      if (cache.has(type)) return cache;
      cache.set(type, null);
      ownerDocument = ownerDocument.getElementsByTagName(type);
      for (caches = 0; caches < ownerDocument.length; caches++) {
        var node = ownerDocument[caches];
        if (!(node[internalHoistableMarker] || node[internalInstanceKey] || "link" === type && "stylesheet" === node.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== node.namespaceURI) {
          var nodeKey = node.getAttribute(keyAttribute) || "";
          nodeKey = type + nodeKey;
          var existing = cache.get(nodeKey);
          existing ? existing.push(node) : cache.set(nodeKey, [node]);
        }
      }
      return cache;
    }
    function mountHoistable(hoistableRoot, type, instance) {
      hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
      hoistableRoot.head.insertBefore(
        instance,
        "title" === type ? hoistableRoot.querySelector("head > title") : null
      );
    }
    function isHostHoistableType(type, props, hostContext) {
      if (1 === hostContext || null != props.itemProp) return false;
      switch (type) {
        case "meta":
        case "title":
          return true;
        case "style":
          if ("string" !== typeof props.precedence || "string" !== typeof props.href || "" === props.href)
            break;
          return true;
        case "link":
          if ("string" !== typeof props.rel || "string" !== typeof props.href || "" === props.href || props.onLoad || props.onError)
            break;
          switch (props.rel) {
            case "stylesheet":
              return type = props.disabled, "string" === typeof props.precedence && null == type;
            default:
              return true;
          }
        case "script":
          if (props.async && "function" !== typeof props.async && "symbol" !== typeof props.async && !props.onLoad && !props.onError && props.src && "string" === typeof props.src)
            return true;
      }
      return false;
    }
    function preloadResource(resource) {
      return "stylesheet" === resource.type && 0 === (resource.state.loading & 3) ? false : true;
    }
    function suspendResource(state, hoistableRoot, resource, props) {
      if ("stylesheet" === resource.type && ("string" !== typeof props.media || false !== matchMedia(props.media).matches) && 0 === (resource.state.loading & 4)) {
        if (null === resource.instance) {
          var key = getStyleKey(props.href), instance = hoistableRoot.querySelector(
            getStylesheetSelectorFromKey(key)
          );
          if (instance) {
            hoistableRoot = instance._p;
            null !== hoistableRoot && "object" === typeof hoistableRoot && "function" === typeof hoistableRoot.then && (state.count++, state = onUnsuspend.bind(state), hoistableRoot.then(state, state));
            resource.state.loading |= 4;
            resource.instance = instance;
            markNodeAsHoistable(instance);
            return;
          }
          instance = hoistableRoot.ownerDocument || hoistableRoot;
          props = stylesheetPropsFromRawProps(props);
          (key = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(props, key);
          instance = instance.createElement("link");
          markNodeAsHoistable(instance);
          var linkInstance = instance;
          linkInstance._p = new Promise(function(resolve, reject) {
            linkInstance.onload = resolve;
            linkInstance.onerror = reject;
          });
          setInitialProperties(instance, "link", props);
          resource.instance = instance;
        }
        null === state.stylesheets && (state.stylesheets = /* @__PURE__ */ new Map());
        state.stylesheets.set(resource, hoistableRoot);
        (hoistableRoot = resource.state.preload) && 0 === (resource.state.loading & 3) && (state.count++, resource = onUnsuspend.bind(state), hoistableRoot.addEventListener("load", resource), hoistableRoot.addEventListener("error", resource));
      }
    }
    var estimatedBytesWithinLimit = 0;
    function waitForCommitToBeReady(state, timeoutOffset) {
      state.stylesheets && 0 === state.count && insertSuspendedStylesheets(state, state.stylesheets);
      return 0 < state.count || 0 < state.imgCount ? function(commit) {
        var stylesheetTimer = setTimeout(function() {
          state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets);
          if (state.unsuspend) {
            var unsuspend = state.unsuspend;
            state.unsuspend = null;
            unsuspend();
          }
        }, 6e4 + timeoutOffset);
        0 < state.imgBytes && 0 === estimatedBytesWithinLimit && (estimatedBytesWithinLimit = 62500 * estimateBandwidth());
        var imgTimer = setTimeout(
          function() {
            state.waitingForImages = false;
            if (0 === state.count && (state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets), state.unsuspend)) {
              var unsuspend = state.unsuspend;
              state.unsuspend = null;
              unsuspend();
            }
          },
          (state.imgBytes > estimatedBytesWithinLimit ? 50 : 800) + timeoutOffset
        );
        state.unsuspend = commit;
        return function() {
          state.unsuspend = null;
          clearTimeout(stylesheetTimer);
          clearTimeout(imgTimer);
        };
      } : null;
    }
    function onUnsuspend() {
      this.count--;
      if (0 === this.count && (0 === this.imgCount || !this.waitingForImages)) {
        if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
        else if (this.unsuspend) {
          var unsuspend = this.unsuspend;
          this.unsuspend = null;
          unsuspend();
        }
      }
    }
    var precedencesByRoot = null;
    function insertSuspendedStylesheets(state, resources) {
      state.stylesheets = null;
      null !== state.unsuspend && (state.count++, precedencesByRoot = /* @__PURE__ */ new Map(), resources.forEach(insertStylesheetIntoRoot, state), precedencesByRoot = null, onUnsuspend.call(state));
    }
    function insertStylesheetIntoRoot(root3, resource) {
      if (!(resource.state.loading & 4)) {
        var precedences = precedencesByRoot.get(root3);
        if (precedences) var last = precedences.get(null);
        else {
          precedences = /* @__PURE__ */ new Map();
          precedencesByRoot.set(root3, precedences);
          for (var nodes = root3.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if ("LINK" === node.nodeName || "not all" !== node.getAttribute("media"))
              precedences.set(node.dataset.precedence, node), last = node;
          }
          last && precedences.set(null, last);
        }
        nodes = resource.instance;
        node = nodes.getAttribute("data-precedence");
        i = precedences.get(node) || last;
        i === last && precedences.set(null, nodes);
        precedences.set(node, nodes);
        this.count++;
        last = onUnsuspend.bind(this);
        nodes.addEventListener("load", last);
        nodes.addEventListener("error", last);
        i ? i.parentNode.insertBefore(nodes, i.nextSibling) : (root3 = 9 === root3.nodeType ? root3.head : root3, root3.insertBefore(nodes, root3.firstChild));
        resource.state.loading |= 4;
      }
    }
    var HostTransitionContext = {
      $$typeof: REACT_CONTEXT_TYPE,
      Provider: null,
      Consumer: null,
      _currentValue: sharedNotPendingObject,
      _currentValue2: sharedNotPendingObject,
      _threadCount: 0
    };
    function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator, formState) {
      this.tag = 1;
      this.containerInfo = containerInfo;
      this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
      this.callbackPriority = 0;
      this.expirationTimes = createLaneMap(-1);
      this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = createLaneMap(0);
      this.hiddenUpdates = createLaneMap(null);
      this.identifierPrefix = identifierPrefix;
      this.onUncaughtError = onUncaughtError;
      this.onCaughtError = onCaughtError;
      this.onRecoverableError = onRecoverableError;
      this.pooledCache = null;
      this.pooledCacheLanes = 0;
      this.formState = formState;
      this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, identifierPrefix, formState, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator) {
      containerInfo = new FiberRootNode(
        containerInfo,
        tag,
        hydrate,
        identifierPrefix,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        onDefaultTransitionIndicator,
        formState
      );
      tag = 1;
      true === isStrictMode && (tag |= 24);
      isStrictMode = createFiberImplClass(3, null, null, tag);
      containerInfo.current = isStrictMode;
      isStrictMode.stateNode = containerInfo;
      tag = createCache();
      tag.refCount++;
      containerInfo.pooledCache = tag;
      tag.refCount++;
      isStrictMode.memoizedState = {
        element: initialChildren,
        isDehydrated: hydrate,
        cache: tag
      };
      initializeUpdateQueue(isStrictMode);
      return containerInfo;
    }
    function getContextForSubtree(parentComponent) {
      if (!parentComponent) return emptyContextObject;
      parentComponent = emptyContextObject;
      return parentComponent;
    }
    function updateContainerImpl(rootFiber, lane, element, container, parentComponent, callback) {
      parentComponent = getContextForSubtree(parentComponent);
      null === container.context ? container.context = parentComponent : container.pendingContext = parentComponent;
      container = createUpdate(lane);
      container.payload = { element };
      callback = void 0 === callback ? null : callback;
      null !== callback && (container.callback = callback);
      element = enqueueUpdate(rootFiber, container, lane);
      null !== element && (scheduleUpdateOnFiber(element, rootFiber, lane), entangleTransitions(element, rootFiber, lane));
    }
    function markRetryLaneImpl(fiber, retryLane) {
      fiber = fiber.memoizedState;
      if (null !== fiber && null !== fiber.dehydrated) {
        var a = fiber.retryLane;
        fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
      }
    }
    function markRetryLaneIfNotHydrated(fiber, retryLane) {
      markRetryLaneImpl(fiber, retryLane);
      (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
    }
    function attemptContinuousHydration(fiber) {
      if (13 === fiber.tag || 31 === fiber.tag) {
        var root3 = enqueueConcurrentRenderForLane(fiber, 67108864);
        null !== root3 && scheduleUpdateOnFiber(root3, fiber, 67108864);
        markRetryLaneIfNotHydrated(fiber, 67108864);
      }
    }
    function attemptHydrationAtCurrentPriority(fiber) {
      if (13 === fiber.tag || 31 === fiber.tag) {
        var lane = requestUpdateLane();
        lane = getBumpedLaneForHydrationByLane(lane);
        var root3 = enqueueConcurrentRenderForLane(fiber, lane);
        null !== root3 && scheduleUpdateOnFiber(root3, fiber, lane);
        markRetryLaneIfNotHydrated(fiber, lane);
      }
    }
    var _enabled = true;
    function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
      var prevTransition = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 2, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
      }
    }
    function dispatchContinuousEvent(domEventName, eventSystemFlags, container, nativeEvent) {
      var prevTransition = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 8, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
      }
    }
    function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      if (_enabled) {
        var blockedOn = findInstanceBlockingEvent(nativeEvent);
        if (null === blockedOn)
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            return_targetInst,
            targetContainer
          ), clearIfContinuousEvent(domEventName, nativeEvent);
        else if (queueIfContinuousEvent(
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        ))
          nativeEvent.stopPropagation();
        else if (clearIfContinuousEvent(domEventName, nativeEvent), eventSystemFlags & 4 && -1 < discreteReplayableEvents.indexOf(domEventName)) {
          for (; null !== blockedOn; ) {
            var fiber = getInstanceFromNode(blockedOn);
            if (null !== fiber)
              switch (fiber.tag) {
                case 3:
                  fiber = fiber.stateNode;
                  if (fiber.current.memoizedState.isDehydrated) {
                    var lanes = getHighestPriorityLanes(fiber.pendingLanes);
                    if (0 !== lanes) {
                      var root3 = fiber;
                      root3.pendingLanes |= 2;
                      for (root3.entangledLanes |= 2; lanes; ) {
                        var lane = 1 << 31 - clz32(lanes);
                        root3.entanglements[1] |= lane;
                        lanes &= ~lane;
                      }
                      ensureRootIsScheduled(fiber);
                      0 === (executionContext & 6) && (workInProgressRootRenderTargetTime = now() + 500, flushSyncWorkAcrossRoots_impl(0, false));
                    }
                  }
                  break;
                case 31:
                case 13:
                  root3 = enqueueConcurrentRenderForLane(fiber, 2), null !== root3 && scheduleUpdateOnFiber(root3, fiber, 2), flushSyncWork$1(), markRetryLaneIfNotHydrated(fiber, 2);
              }
            fiber = findInstanceBlockingEvent(nativeEvent);
            null === fiber && dispatchEventForPluginEventSystem(
              domEventName,
              eventSystemFlags,
              nativeEvent,
              return_targetInst,
              targetContainer
            );
            if (fiber === blockedOn) break;
            blockedOn = fiber;
          }
          null !== blockedOn && nativeEvent.stopPropagation();
        } else
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            null,
            targetContainer
          );
      }
    }
    function findInstanceBlockingEvent(nativeEvent) {
      nativeEvent = getEventTarget(nativeEvent);
      return findInstanceBlockingTarget(nativeEvent);
    }
    var return_targetInst = null;
    function findInstanceBlockingTarget(targetNode) {
      return_targetInst = null;
      targetNode = getClosestInstanceFromNode(targetNode);
      if (null !== targetNode) {
        var nearestMounted = getNearestMountedFiber(targetNode);
        if (null === nearestMounted) targetNode = null;
        else {
          var tag = nearestMounted.tag;
          if (13 === tag) {
            targetNode = getSuspenseInstanceFromFiber(nearestMounted);
            if (null !== targetNode) return targetNode;
            targetNode = null;
          } else if (31 === tag) {
            targetNode = getActivityInstanceFromFiber(nearestMounted);
            if (null !== targetNode) return targetNode;
            targetNode = null;
          } else if (3 === tag) {
            if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
              return 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
            targetNode = null;
          } else nearestMounted !== targetNode && (targetNode = null);
        }
      }
      return_targetInst = targetNode;
      return null;
    }
    function getEventPriority(domEventName) {
      switch (domEventName) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (getCurrentPriorityLevel()) {
            case ImmediatePriority:
              return 2;
            case UserBlockingPriority:
              return 8;
            case NormalPriority$1:
            case LowPriority:
              return 32;
            case IdlePriority:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hasScheduledReplayAttempt = false;
    var queuedFocus = null;
    var queuedDrag = null;
    var queuedMouse = null;
    var queuedPointers = /* @__PURE__ */ new Map();
    var queuedPointerCaptures = /* @__PURE__ */ new Map();
    var queuedExplicitHydrationTargets = [];
    var discreteReplayableEvents = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    );
    function clearIfContinuousEvent(domEventName, nativeEvent) {
      switch (domEventName) {
        case "focusin":
        case "focusout":
          queuedFocus = null;
          break;
        case "dragenter":
        case "dragleave":
          queuedDrag = null;
          break;
        case "mouseover":
        case "mouseout":
          queuedMouse = null;
          break;
        case "pointerover":
        case "pointerout":
          queuedPointers.delete(nativeEvent.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          queuedPointerCaptures.delete(nativeEvent.pointerId);
      }
    }
    function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      if (null === existingQueuedEvent || existingQueuedEvent.nativeEvent !== nativeEvent)
        return existingQueuedEvent = {
          blockedOn,
          domEventName,
          eventSystemFlags,
          nativeEvent,
          targetContainers: [targetContainer]
        }, null !== blockedOn && (blockedOn = getInstanceFromNode(blockedOn), null !== blockedOn && attemptContinuousHydration(blockedOn)), existingQueuedEvent;
      existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
      blockedOn = existingQueuedEvent.targetContainers;
      null !== targetContainer && -1 === blockedOn.indexOf(targetContainer) && blockedOn.push(targetContainer);
      return existingQueuedEvent;
    }
    function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      switch (domEventName) {
        case "focusin":
          return queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedFocus,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "dragenter":
          return queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedDrag,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "mouseover":
          return queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedMouse,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "pointerover":
          var pointerId = nativeEvent.pointerId;
          queuedPointers.set(
            pointerId,
            accumulateOrCreateContinuousQueuedReplayableEvent(
              queuedPointers.get(pointerId) || null,
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            )
          );
          return true;
        case "gotpointercapture":
          return pointerId = nativeEvent.pointerId, queuedPointerCaptures.set(
            pointerId,
            accumulateOrCreateContinuousQueuedReplayableEvent(
              queuedPointerCaptures.get(pointerId) || null,
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            )
          ), true;
      }
      return false;
    }
    function attemptExplicitHydrationTarget(queuedTarget) {
      var targetInst = getClosestInstanceFromNode(queuedTarget.target);
      if (null !== targetInst) {
        var nearestMounted = getNearestMountedFiber(targetInst);
        if (null !== nearestMounted) {
          if (targetInst = nearestMounted.tag, 13 === targetInst) {
            if (targetInst = getSuspenseInstanceFromFiber(nearestMounted), null !== targetInst) {
              queuedTarget.blockedOn = targetInst;
              runWithPriority(queuedTarget.priority, function() {
                attemptHydrationAtCurrentPriority(nearestMounted);
              });
              return;
            }
          } else if (31 === targetInst) {
            if (targetInst = getActivityInstanceFromFiber(nearestMounted), null !== targetInst) {
              queuedTarget.blockedOn = targetInst;
              runWithPriority(queuedTarget.priority, function() {
                attemptHydrationAtCurrentPriority(nearestMounted);
              });
              return;
            }
          } else if (3 === targetInst && nearestMounted.stateNode.current.memoizedState.isDehydrated) {
            queuedTarget.blockedOn = 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
            return;
          }
        }
      }
      queuedTarget.blockedOn = null;
    }
    function attemptReplayContinuousQueuedEvent(queuedEvent) {
      if (null !== queuedEvent.blockedOn) return false;
      for (var targetContainers = queuedEvent.targetContainers; 0 < targetContainers.length; ) {
        var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
        if (null === nextBlockedOn) {
          nextBlockedOn = queuedEvent.nativeEvent;
          var nativeEventClone = new nextBlockedOn.constructor(
            nextBlockedOn.type,
            nextBlockedOn
          );
          currentReplayingEvent = nativeEventClone;
          nextBlockedOn.target.dispatchEvent(nativeEventClone);
          currentReplayingEvent = null;
        } else
          return targetContainers = getInstanceFromNode(nextBlockedOn), null !== targetContainers && attemptContinuousHydration(targetContainers), queuedEvent.blockedOn = nextBlockedOn, false;
        targetContainers.shift();
      }
      return true;
    }
    function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
      attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
    }
    function replayUnblockedEvents() {
      hasScheduledReplayAttempt = false;
      null !== queuedFocus && attemptReplayContinuousQueuedEvent(queuedFocus) && (queuedFocus = null);
      null !== queuedDrag && attemptReplayContinuousQueuedEvent(queuedDrag) && (queuedDrag = null);
      null !== queuedMouse && attemptReplayContinuousQueuedEvent(queuedMouse) && (queuedMouse = null);
      queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
      queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
    }
    function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
      queuedEvent.blockedOn === unblocked && (queuedEvent.blockedOn = null, hasScheduledReplayAttempt || (hasScheduledReplayAttempt = true, Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        replayUnblockedEvents
      )));
    }
    var lastScheduledReplayQueue = null;
    function scheduleReplayQueueIfNeeded(formReplayingQueue) {
      lastScheduledReplayQueue !== formReplayingQueue && (lastScheduledReplayQueue = formReplayingQueue, Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        function() {
          lastScheduledReplayQueue === formReplayingQueue && (lastScheduledReplayQueue = null);
          for (var i = 0; i < formReplayingQueue.length; i += 3) {
            var form = formReplayingQueue[i], submitterOrAction = formReplayingQueue[i + 1], formData = formReplayingQueue[i + 2];
            if ("function" !== typeof submitterOrAction)
              if (null === findInstanceBlockingTarget(submitterOrAction || form))
                continue;
              else break;
            var formInst = getInstanceFromNode(form);
            null !== formInst && (formReplayingQueue.splice(i, 3), i -= 3, startHostTransition(
              formInst,
              {
                pending: true,
                data: formData,
                method: form.method,
                action: submitterOrAction
              },
              submitterOrAction,
              formData
            ));
          }
        }
      ));
    }
    function retryIfBlockedOn(unblocked) {
      function unblock(queuedEvent) {
        return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
      }
      null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
      null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
      null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
      queuedPointers.forEach(unblock);
      queuedPointerCaptures.forEach(unblock);
      for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
        var queuedTarget = queuedExplicitHydrationTargets[i];
        queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
      }
      for (; 0 < queuedExplicitHydrationTargets.length && (i = queuedExplicitHydrationTargets[0], null === i.blockedOn); )
        attemptExplicitHydrationTarget(i), null === i.blockedOn && queuedExplicitHydrationTargets.shift();
      i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
      if (null != i)
        for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
          var form = i[queuedTarget], submitterOrAction = i[queuedTarget + 1], formProps = form[internalPropsKey] || null;
          if ("function" === typeof submitterOrAction)
            formProps || scheduleReplayQueueIfNeeded(i);
          else if (formProps) {
            var action = null;
            if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
              if (form = submitterOrAction, formProps = submitterOrAction[internalPropsKey] || null)
                action = formProps.formAction;
              else {
                if (null !== findInstanceBlockingTarget(form)) continue;
              }
            else action = formProps.action;
            "function" === typeof action ? i[queuedTarget + 1] = action : (i.splice(queuedTarget, 3), queuedTarget -= 3);
            scheduleReplayQueueIfNeeded(i);
          }
        }
    }
    function defaultOnDefaultTransitionIndicator() {
      function handleNavigate(event) {
        event.canIntercept && "react-transition" === event.info && event.intercept({
          handler: function() {
            return new Promise(function(resolve) {
              return pendingResolve = resolve;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function handleNavigateComplete() {
        null !== pendingResolve && (pendingResolve(), pendingResolve = null);
        isCancelled || setTimeout(startFakeNavigation, 20);
      }
      function startFakeNavigation() {
        if (!isCancelled && !navigation.transition) {
          var currentEntry = navigation.currentEntry;
          currentEntry && null != currentEntry.url && navigation.navigate(currentEntry.url, {
            state: currentEntry.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if ("object" === typeof navigation) {
        var isCancelled = false, pendingResolve = null;
        navigation.addEventListener("navigate", handleNavigate);
        navigation.addEventListener("navigatesuccess", handleNavigateComplete);
        navigation.addEventListener("navigateerror", handleNavigateComplete);
        setTimeout(startFakeNavigation, 100);
        return function() {
          isCancelled = true;
          navigation.removeEventListener("navigate", handleNavigate);
          navigation.removeEventListener("navigatesuccess", handleNavigateComplete);
          navigation.removeEventListener("navigateerror", handleNavigateComplete);
          null !== pendingResolve && (pendingResolve(), pendingResolve = null);
        };
      }
    }
    function ReactDOMRoot(internalRoot) {
      this._internalRoot = internalRoot;
    }
    ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function(children) {
      var root3 = this._internalRoot;
      if (null === root3) throw Error(formatProdErrorMessage(409));
      var current = root3.current, lane = requestUpdateLane();
      updateContainerImpl(current, lane, children, root3, null, null);
    };
    ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount = function() {
      var root3 = this._internalRoot;
      if (null !== root3) {
        this._internalRoot = null;
        var container = root3.containerInfo;
        updateContainerImpl(root3.current, 2, null, root3, null, null);
        flushSyncWork$1();
        container[internalContainerInstanceKey] = null;
      }
    };
    function ReactDOMHydrationRoot(internalRoot) {
      this._internalRoot = internalRoot;
    }
    ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function(target) {
      if (target) {
        var updatePriority = resolveUpdatePriority();
        target = { blockedOn: null, target, priority: updatePriority };
        for (var i = 0; i < queuedExplicitHydrationTargets.length && 0 !== updatePriority && updatePriority < queuedExplicitHydrationTargets[i].priority; i++) ;
        queuedExplicitHydrationTargets.splice(i, 0, target);
        0 === i && attemptExplicitHydrationTarget(target);
      }
    };
    var isomorphicReactPackageVersion$jscomp$inline_1840 = React6.version;
    if ("19.2.4" !== isomorphicReactPackageVersion$jscomp$inline_1840)
      throw Error(
        formatProdErrorMessage(
          527,
          isomorphicReactPackageVersion$jscomp$inline_1840,
          "19.2.4"
        )
      );
    ReactDOMSharedInternals.findDOMNode = function(componentOrElement) {
      var fiber = componentOrElement._reactInternals;
      if (void 0 === fiber) {
        if ("function" === typeof componentOrElement.render)
          throw Error(formatProdErrorMessage(188));
        componentOrElement = Object.keys(componentOrElement).join(",");
        throw Error(formatProdErrorMessage(268, componentOrElement));
      }
      componentOrElement = findCurrentFiberUsingSlowPath(fiber);
      componentOrElement = null !== componentOrElement ? findCurrentHostFiberImpl(componentOrElement) : null;
      componentOrElement = null === componentOrElement ? null : componentOrElement.stateNode;
      return componentOrElement;
    };
    var internals$jscomp$inline_2347 = {
      bundleType: 0,
      version: "19.2.4",
      rendererPackageName: "react-dom",
      currentDispatcherRef: ReactSharedInternals,
      reconcilerVersion: "19.2.4"
    };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      hook$jscomp$inline_2348 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!hook$jscomp$inline_2348.isDisabled && hook$jscomp$inline_2348.supportsFiber)
        try {
          rendererID = hook$jscomp$inline_2348.inject(
            internals$jscomp$inline_2347
          ), injectedHook = hook$jscomp$inline_2348;
        } catch (err) {
        }
    }
    var hook$jscomp$inline_2348;
    exports.createRoot = function(container, options2) {
      if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
      var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError;
      null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError));
      options2 = createFiberRoot(
        container,
        1,
        false,
        null,
        null,
        isStrictMode,
        identifierPrefix,
        null,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        defaultOnDefaultTransitionIndicator
      );
      container[internalContainerInstanceKey] = options2.current;
      listenToAllSupportedEvents(container);
      return new ReactDOMRoot(options2);
    };
    exports.hydrateRoot = function(container, initialChildren, options2) {
      if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
      var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError, formState = null;
      null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError), void 0 !== options2.formState && (formState = options2.formState));
      initialChildren = createFiberRoot(
        container,
        1,
        true,
        initialChildren,
        null != options2 ? options2 : null,
        isStrictMode,
        identifierPrefix,
        formState,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        defaultOnDefaultTransitionIndicator
      );
      initialChildren.context = getContextForSubtree(null);
      options2 = initialChildren.current;
      isStrictMode = requestUpdateLane();
      isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
      identifierPrefix = createUpdate(isStrictMode);
      identifierPrefix.callback = null;
      enqueueUpdate(options2, identifierPrefix, isStrictMode);
      options2 = isStrictMode;
      initialChildren.current.lanes = options2;
      markRootUpdated$1(initialChildren, options2);
      ensureRootIsScheduled(initialChildren);
      container[internalContainerInstanceKey] = initialChildren.current;
      listenToAllSupportedEvents(container);
      return new ReactDOMHydrationRoot(initialChildren);
    };
    exports.version = "19.2.4";
  }
});

// ../../common/temp/node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/client.js
var require_client = __commonJS({
  "../../common/temp/node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/client.js"(exports, module) {
    "use strict";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module.exports = require_react_dom_client_production();
    } else {
      module.exports = null;
    }
  }
});

// ../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react/cjs/react-jsx-runtime.production.js
var require_react_jsx_runtime_production = __commonJS({
  "../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react/cjs/react-jsx-runtime.production.js"(exports) {
    "use strict";
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      config = maybeKey.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
      };
    }
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = jsxProd;
    exports.jsxs = jsxProd;
  }
});

// ../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_jsx_runtime_production();
    } else {
      module.exports = null;
    }
  }
});

// src/client/app.tsx
var import_react9 = __toESM(require_react(), 1);
var import_client = __toESM(require_client(), 1);

// src/client/LogViewer.tsx
var import_react8 = __toESM(require_react(), 1);

// ../../common/temp/node_modules/.pnpm/@svar-ui+react-grid@2.6.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@svar-ui/react-grid/dist/index.es.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);

// ../../common/temp/node_modules/.pnpm/@svar-ui+react-core@2.5.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@svar-ui/react-core/dist/index.es.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);

// ../../common/temp/node_modules/.pnpm/@svar-ui+lib-react@1.2.2/node_modules/@svar-ui/lib-react/dist/index.js
var import_react = __toESM(require_react(), 1);

// ../../common/temp/node_modules/.pnpm/@svar-ui+lib-dom@0.11.1/node_modules/@svar-ui/lib-dom/dist/index.js
function getEnv() {
  return {
    detect: () => true,
    addEvent: function(node, event, handler) {
      node.addEventListener(event, handler);
      return () => node.removeEventListener(event, handler);
    },
    addGlobalEvent: function(event, handler) {
      document.addEventListener(event, handler);
      return () => document.removeEventListener(event, handler);
    },
    getTopNode: function() {
      return window.document.body;
    }
  };
}
var env = getEnv();
var id2 = (/* @__PURE__ */ new Date()).valueOf();

// ../../common/temp/node_modules/.pnpm/@svar-ui+lib-react@1.2.2/node_modules/@svar-ui/lib-react/dist/index.js
function useWritableProp(propValue) {
  const [value, setValue] = (0, import_react.useState)(propValue);
  const prevPropRef = (0, import_react.useRef)(propValue);
  (0, import_react.useEffect)(() => {
    if (prevPropRef.current !== propValue) {
      if (Array.isArray(prevPropRef.current) && Array.isArray(propValue) && prevPropRef.current.length === 0 && propValue.length === 0)
        return;
      prevPropRef.current = propValue;
      setValue(propValue);
    }
  }, [propValue]);
  return [value, setValue];
}
function snippet(name, arg) {
  if (typeof name === "function") {
    if (typeof arg === "object") {
      return name(arg);
    } else {
      return name();
    }
  }
  return name;
}

// ../../common/temp/node_modules/.pnpm/@svar-ui+lib-dom@0.12.1/node_modules/@svar-ui/lib-dom/dist/index.js
function locate2(el, attr = "data-id") {
  let node = el;
  if (!node.tagName && el.target)
    node = el.target;
  while (node) {
    if (node.getAttribute) {
      const id32 = node.getAttribute(attr);
      if (id32) return node;
    }
    node = node.parentNode;
  }
  return null;
}
function locateID(el, attr = "data-id") {
  const node = locate2(el, attr);
  if (node) {
    return getID(node, attr);
  }
  return null;
}
function getID(el, attr = "data-id") {
  const value = el.getAttribute(attr);
  if (!value) return null;
  return id3(value);
}
function setID(id32) {
  return typeof id32 === "string" ? ":" + id32 : id32;
}
function id3(value) {
  if (value.startsWith(":")) return value.substring(1);
  const t = value * 1;
  if (!isNaN(t)) return t;
  return value;
}
function getEnv2() {
  return {
    detect: () => true,
    addEvent: function(node, event, handler) {
      node.addEventListener(event, handler);
      return () => node.removeEventListener(event, handler);
    },
    addGlobalEvent: function(event, handler) {
      document.addEventListener(event, handler);
      return () => document.removeEventListener(event, handler);
    },
    getTopNode: function() {
      return window.document.body;
    }
  };
}
var env2 = getEnv2();
function setEnv(update) {
  Object.assign(env2, update);
}
function delegateEvent(node, handlers, event) {
  function handleEvent(ev) {
    const node2 = locate2(ev);
    if (!node2) return;
    const id32 = getID(node2);
    if (typeof handlers === "function") return handlers(id32, ev);
    let action;
    let test = ev.target;
    while (test != node2) {
      action = test.dataset ? test.dataset.action : null;
      if (action) {
        if (handlers[action]) {
          handlers[action](id32, ev);
          return;
        }
      }
      test = test.parentNode;
    }
    if (handlers[event]) handlers[event](id32, ev);
  }
  env2.addEvent(node, event, handleEvent);
}
function delegateClick(node, handlers) {
  delegateEvent(node, handlers, "click");
  if (handlers.dblclick) delegateEvent(node, handlers.dblclick, "dblclick");
}
function remove(items, node) {
  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i] === node) {
      items.splice(i, 1);
      break;
    }
  }
}
var activationDate = /* @__PURE__ */ new Date();
var skipNext = false;
var outsideHandlers = [];
var outsideListners = [];
var handleOutsideClick = (event) => {
  if (skipNext) {
    skipNext = false;
    return;
  }
  for (let i = outsideListners.length - 1; i >= 0; i--) {
    const { node, date, props } = outsideListners[i];
    if (date > activationDate) continue;
    if (!node.contains(event.target) && node !== event.target) {
      if (props.callback) props.callback(event);
      if (props.modal || event.defaultPrevented) break;
    }
  }
};
var handleMouseDown = (event) => {
  activationDate = /* @__PURE__ */ new Date();
  skipNext = true;
  for (let i = outsideListners.length - 1; i >= 0; i--) {
    const { node } = outsideListners[i];
    if (!node.contains(event.target) && node !== event.target) {
      skipNext = false;
      break;
    }
  }
};
function clickOutside(node, props) {
  if (!outsideHandlers.length) {
    outsideHandlers = [
      env2.addGlobalEvent("click", handleOutsideClick, node),
      env2.addGlobalEvent("contextmenu", handleOutsideClick, node),
      env2.addGlobalEvent("mousedown", handleMouseDown, node)
    ];
  }
  if (typeof props !== "object") {
    props = { callback: props };
  }
  const pack = { node, date: /* @__PURE__ */ new Date(), props };
  outsideListners.push(pack);
  return {
    destroy() {
      remove(outsideListners, pack);
      if (!outsideListners.length) {
        outsideHandlers.forEach((e) => e());
        outsideHandlers = [];
      }
    }
  };
}
var isBottom = (mode) => mode.indexOf("bottom") !== -1;
var isLeft = (mode) => mode.indexOf("left") !== -1;
var isRight = (mode) => mode.indexOf("right") !== -1;
var isTop = (mode) => mode.indexOf("top") !== -1;
var isFit = (mode) => mode.indexOf("fit") !== -1;
var isOverlap = (mode) => mode.indexOf("overlap") !== -1;
var isCenter = (mode) => {
  return mode.split("-").every((v) => ["center", "fit"].indexOf(v) > -1);
};
var getAlign = (mode) => {
  const match = mode.match(/(start|center|end)/);
  return match ? match[0] : null;
};
function getMaxIndex(p, ap) {
  let zi = 0;
  const top = env2.getTopNode(p);
  while (p) {
    if (p === top) break;
    const pos2 = getComputedStyle(p)["position"];
    if (pos2 === "absolute" || pos2 === "relative" || pos2 === "fixed") {
      zi = parseInt(getComputedStyle(p)["zIndex"]) || 0;
    }
    p = p.parentNode;
    if (p === ap) break;
  }
  return zi;
}
var x;
var y;
var width;
var pos;
function calculatePosition(self, parent, at = "bottom", left = 0, top = 0) {
  if (!self) return null;
  x = left;
  y = top;
  width = "auto";
  let z4 = 0;
  let fixLeft = 0;
  const body = getAbsParent(self);
  const cont = isOverlap(at) ? env2.getTopNode(self) : body;
  if (!body) return null;
  const bodyRect = body.getBoundingClientRect();
  const selfRect = self.getBoundingClientRect();
  const contRect = cont.getBoundingClientRect();
  const contStyle = window.getComputedStyle(cont);
  const border = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  };
  for (const key in border) {
    const style = `border-${key}-width`;
    border[key] = parseFloat(contStyle.getPropertyValue(style));
  }
  if (parent) {
    const zi = getMaxIndex(parent, body);
    z4 = Math.max(zi + 1, 20);
  }
  if (parent) {
    pos = parent.getBoundingClientRect();
    if (isFit(at)) width = pos.width + "px";
    if (at !== "point") {
      if (isCenter(at)) {
        if (isFit(at)) {
          x = 0;
        } else {
          x = contRect.width / 2;
          fixLeft = 1;
        }
        y = (contRect.height - selfRect.height) / 2;
      } else {
        const fix = isOverlap(at) ? 0 : 1;
        x = isRight(at) ? pos.right + fix : pos.left - fix;
        y = isBottom(at) ? pos.bottom + 1 : pos.top;
        const align = getAlign(at);
        if (align) {
          if (isRight(at) || isLeft(at)) {
            if (align === "center") y -= (selfRect.height - pos.height) / 2;
            else if (align === "end") y -= selfRect.height - pos.height;
          } else if (isBottom(at) || isTop(at)) {
            if (align === "center") x -= (selfRect.width - pos.width) / 2;
            else if (align === "end") x -= selfRect.width - pos.width;
            if (!isOverlap(at)) x += 1;
          }
        }
      }
    }
  } else pos = { left, right: left, top, bottom: top };
  const isCorner = (isLeft(at) || isRight(at)) && (isBottom(at) || isTop(at));
  if (isLeft(at)) {
    fixLeft = 2;
  }
  const dxL = x - selfRect.width - contRect.left;
  if (parent && isLeft(at) && !isCorner && dxL < 0) {
    x = pos.right;
    fixLeft = 0;
  }
  const dxR = x + selfRect.width * (1 - fixLeft / 2) - contRect.right;
  if (dxR > 0) {
    if (!isRight(at)) {
      x = contRect.right - border.right - selfRect.width;
    } else {
      const dx = pos.left - contRect.x - selfRect.width;
      if (parent && !isCorner && dx >= 0) {
        x = pos.left - selfRect.width;
      } else {
        x -= dxR + border.right;
      }
    }
  }
  if (fixLeft) {
    x = Math.round(x - selfRect.width * fixLeft / 2);
  }
  const needSwap = dxL < 0 || dxR > 0 || !isCorner;
  if (isTop(at)) {
    y = pos.top - selfRect.height;
    if (parent && y < contRect.y && needSwap) {
      y = pos.bottom;
    }
  }
  const dy = y + selfRect.height - contRect.bottom;
  if (dy > 0) {
    if (parent && isBottom(at) && needSwap) {
      y -= selfRect.height + pos.height + 1;
    } else {
      y -= dy + border.bottom;
    }
  }
  x -= bodyRect.left + border.left;
  y -= bodyRect.top + border.top;
  x = (isOverlap(at) ? x : Math.max(x, 0)) + cont.scrollLeft;
  y = (isOverlap(at) ? y : Math.max(y, 0)) + cont.scrollTop;
  width = width || "auto";
  return { x, y, z: z4, width };
}
function getAbsParent(el) {
  const top = env2.getTopNode(el);
  if (el) el = el.parentElement;
  while (el) {
    const pos2 = getComputedStyle(el)["position"];
    if (el === top || pos2 === "relative" || pos2 === "absolute" || pos2 === "fixed")
      return el;
    el = el.parentNode;
  }
  return null;
}
var id22 = (/* @__PURE__ */ new Date()).valueOf();
function uid() {
  id22 += 1;
  return id22;
}
function toFixed(num) {
  if (num < 10) return "0" + num;
  return num.toString();
}
function toFixedMs(num) {
  const temp = toFixed(num);
  return temp.length == 2 ? "0" + temp : temp;
}
function getDuodecade(year) {
  const start = Math.floor(year / 11) * 11;
  return {
    start,
    end: start + 11
  };
}
function getWeekNumber(ndate, weekStart = 1) {
  let nday = ndate.getDay();
  if (nday === 0) {
    nday = 7;
  }
  nday = (nday - weekStart + 7) % 7;
  const first_thursday = new Date(ndate.valueOf());
  first_thursday.setDate(ndate.getDate() + (3 - nday));
  const year_number = first_thursday.getFullYear();
  const ordinal_date = Math.floor(
    (first_thursday.getTime() - new Date(year_number, 0, 1).getTime()) / 864e5
  );
  return 1 + Math.floor(ordinal_date / 7);
}
var emptyAmPm = ["", ""];
function date2str(mask, date, locale2) {
  switch (mask) {
    case "%d":
      return toFixed(date.getDate());
    case "%m":
      return toFixed(date.getMonth() + 1);
    case "%j":
      return date.getDate();
    case "%n":
      return date.getMonth() + 1;
    case "%y":
      return toFixed(date.getFullYear() % 100);
    case "%Y":
      return date.getFullYear();
    case "%D":
      return locale2.dayShort[date.getDay()];
    case "%l":
      return locale2.dayFull[date.getDay()];
    case "%M":
      return locale2.monthShort[date.getMonth()];
    case "%F":
      return locale2.monthFull[date.getMonth()];
    case "%h":
      return toFixed((date.getHours() + 11) % 12 + 1);
    case "%g":
      return (date.getHours() + 11) % 12 + 1;
    case "%G":
      return date.getHours();
    case "%H":
      return toFixed(date.getHours());
    case "%i":
      return toFixed(date.getMinutes());
    case "%a":
      return ((date.getHours() > 11 ? locale2.pm : locale2.am) || emptyAmPm)[0];
    case "%A":
      return ((date.getHours() > 11 ? locale2.pm : locale2.am) || emptyAmPm)[1];
    case "%s":
      return toFixed(date.getSeconds());
    case "%S":
      return toFixedMs(date.getMilliseconds());
    case "%W":
      return toFixed(getWeekNumber(date));
    case "%w":
      return toFixed(getWeekNumber(date, locale2.weekStart ?? 1));
    case "%c": {
      let str = date.getFullYear() + "";
      str += "-" + toFixed(date.getMonth() + 1);
      str += "-" + toFixed(date.getDate());
      str += "T";
      str += toFixed(date.getHours());
      str += ":" + toFixed(date.getMinutes());
      str += ":" + toFixed(date.getSeconds());
      return str;
    }
    case "%Q":
      return Math.floor(date.getMonth() / 3) + 1;
    default:
      return mask;
  }
}
var formatFlags = /%[a-zA-Z]/g;
function dateToString(format, locale2) {
  if (typeof format == "function") return format;
  return function(date) {
    if (!date) return "";
    if (!date.getMonth) date = new Date(date);
    return format.replace(
      formatFlags,
      (s) => date2str(s, date, locale2)
    );
  };
}
function isObject(a) {
  return a && typeof a === "object" && !Array.isArray(a);
}
function extend(a, b2) {
  for (const key in b2) {
    const from = b2[key];
    if (isObject(a[key]) && isObject(from)) {
      a[key] = extend(
        { ...a[key] },
        b2[key]
      );
    } else {
      a[key] = b2[key];
    }
  }
  return a;
}
function locale(words) {
  return {
    getGroup(group) {
      const block = words[group];
      return (key) => {
        return block ? block[key] || key : key;
      };
    },
    getRaw() {
      return words;
    },
    extend(values, optional) {
      if (!values) return this;
      let data2;
      if (optional) {
        data2 = extend({ ...values }, words);
      } else {
        data2 = extend({ ...words }, values);
      }
      return locale(data2);
    }
  };
}

// ../../common/temp/node_modules/.pnpm/@svar-ui+react-core@2.5.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@svar-ui/react-core/dist/index.es.js
var import_react_dom = __toESM(require_react_dom(), 1);

// ../../common/temp/node_modules/.pnpm/@svar-ui+core-locales@2.5.1/node_modules/@svar-ui/core-locales/locales/en.js
var lang = "en-US";
var calendar = {
  monthFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  dayFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  hours: "Hours",
  minutes: "Minutes",
  done: "Done",
  clear: "Clear",
  today: "Today",
  am: ["am", "AM"],
  pm: ["pm", "PM"],
  weekStart: 0,
  clockFormat: 24
};
var core = {
  ok: "OK",
  cancel: "Cancel",
  select: "Select",
  "No data": "No data",
  "Rows per page": "Rows per page",
  "Total pages": "Total pages"
};
var formats = {
  timeFormat: "%H:%i",
  dateFormat: "%m/%d/%Y",
  monthYearFormat: "%F %Y",
  yearFormat: "%Y"
};
var data = {
  core,
  calendar,
  formats,
  lang
};
var en_default = data;

// ../../common/temp/node_modules/.pnpm/@svar-ui+react-core@2.5.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@svar-ui/react-core/dist/index.es.js
var ie = (0, import_react2.createContext)("");
var Oe = (0, import_react2.createContext)({});
var q = (0, import_react2.createContext)(null);
var ue = (0, import_react2.createContext)(null);
var Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fieldId: ue,
  helpers: Oe,
  i18n: q,
  theme: ie
}, Symbol.toStringTag, { value: "Module" }));
function z(e) {
  const n = (0, import_react2.useContext)(ue), [t] = (0, import_react2.useState)(() => e || n || uid());
  return t;
}
function re({
  type: e = "",
  css: n = "",
  icon: t = "",
  disabled: s = false,
  title: r = "",
  text: u = "",
  children: i,
  onClick: c2
}) {
  const a = (0, import_react2.useMemo)(() => {
    let f = e ? e.split(" ").filter((d) => d !== "").map((d) => "wx-" + d).join(" ") : "";
    return n + (n ? " " : "") + f;
  }, [e, n]), o = (f) => {
    c2 && c2(f);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      title: r,
      className: `wx-2ZWgb4 wx-button ${a} ${t && !i ? "wx-icon" : ""}`,
      disabled: s,
      onClick: o,
      children: [
        t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "wx-2ZWgb4 " + t }),
        i || u || " "
      ]
    }
  );
}
function Ye({
  id: e,
  label: n = "",
  inputValue: t = "",
  value: s = false,
  onChange: r,
  disabled: u = false,
  style: i
}) {
  const c2 = z(e), [a, o] = useWritableProp(s);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: i, className: "wx-2IvefP wx-checkbox", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "input",
      {
        type: "checkbox",
        id: c2,
        disabled: u,
        className: "wx-2IvefP wx-check",
        checked: a,
        value: t,
        onChange: ({ target: d }) => {
          const p = d.checked;
          o(p), r && r({ value: p, inputValue: t });
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { htmlFor: c2, className: "wx-2IvefP wx-label", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "wx-2IvefP wx-before" }),
      n && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "wx-2IvefP wx-after", children: n })
    ] })
  ] });
}
function nt({ theme: e = "", target: n, children: t }) {
  const s = (0, import_react2.useRef)(null), r = (0, import_react2.useRef)(null), [u, i] = (0, import_react2.useState)(null);
  s.current || (s.current = document.createElement("div"));
  const c2 = (0, import_react2.useContext)(ie);
  return (0, import_react2.useEffect)(() => {
    i(
      n || rt(r.current) || env2.getTopNode(r.current)
    );
  }, [r.current]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { ref: r, style: { display: "none" } }),
    r.current && u ? (0, import_react_dom.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: `wx-3ZWsT0 wx-${e || c2}-theme`,
          children: t
        }
      ),
      u
    ) : null
  ] });
}
function rt(e) {
  const n = env2.getTopNode(e);
  for (; e && e !== n && !e.getAttribute("data-wx-portal-root"); )
    e = e.parentNode;
  return e;
}
function lt({
  left: e = 0,
  top: n = 0,
  at: t = "bottom",
  parent: s = null,
  width: r = "auto",
  css: u = "",
  onCancel: i,
  children: c2,
  trackScroll: a = false
}) {
  const [o, f] = (0, import_react2.useState)(0), [d, p] = (0, import_react2.useState)(0), [v, x2] = (0, import_react2.useState)("auto"), [w, h] = (0, import_react2.useState)(false), m = (0, import_react2.useRef)(null), g = (0, import_react2.useRef)(null);
  function T2(N2) {
    return s && (r + "").indexOf("%") > -1 ? r.replace(/(\d+)%/, (k2, M2) => (M2 = M2 * s.offsetWidth / 100 + "px", r.replace(k2, M2))) : r && r !== "auto" ? r : N2;
  }
  const b2 = (0, import_react2.useCallback)(() => {
    if (!m.current) return;
    const N2 = calculatePosition(m.current, s, t, e, n);
    N2 && (f(N2.x), p(N2.y), x2(T2(N2.width)));
  }, [m, s, t, e, n, r]);
  return (0, import_react2.useLayoutEffect)(() => {
    const N2 = (k2) => {
      i && k2.target !== g.current && m.current && !m.current.contains(k2.target) && i(k2);
    };
    return requestAnimationFrame(() => {
      b2(), h(true), a && m.current && (g.current = getAbsParent(m.current), g.current && g.current.addEventListener("scroll", N2, true));
    }), () => {
      a && g.current && g.current.removeEventListener("scroll", N2, true);
    };
  }, []), (0, import_react2.useLayoutEffect)(() => {
    b2();
  }, [s, t, e, n]), (0, import_react2.useEffect)(() => {
    const N2 = (k2) => {
      i && i(k2);
    };
    if (m.current)
      return clickOutside(m.current, N2).destroy;
  }, [i]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref: m,
      className: ["wx-37M6Fj", "wx-popup", u].filter(Boolean).join(" "),
      style: {
        position: "absolute",
        visibility: w ? "visible" : "hidden",
        top: d + "px",
        left: o + "px",
        width: v
      },
      children: c2
    }
  );
}
function ct({
  position: e = "bottom",
  align: n = "start",
  autoFit: t = true,
  onCancel: s = null,
  width: r = "100%",
  css: u = "",
  children: i
}) {
  const c2 = (0, import_react2.useRef)(null), [a, o] = (0, import_react2.useState)(e), [f, d] = (0, import_react2.useState)(n);
  return (0, import_react2.useEffect)(() => {
    if (t) {
      const p = c2.current;
      if (p) {
        const v = p.getBoundingClientRect(), x2 = document.body.getBoundingClientRect();
        v.right >= x2.right && d("end"), v.bottom >= x2.bottom && o("top");
      }
    }
  }, []), (0, import_react2.useEffect)(() => {
    if (c2.current) {
      const p = (v) => {
        s && s(v);
      };
      return clickOutside(c2.current, p).destroy;
    }
  }, [s]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref: c2,
      className: [
        "wx-dropdown",
        `wx-${a}-${f}`,
        u || "",
        "wx-aaaVytZW"
      ].filter(Boolean).join(" "),
      style: { width: r },
      children: i
    }
  );
}
function le({
  position: e = "bottom",
  align: n = "start",
  autoFit: t = true,
  inline: s = false,
  onCancel: r,
  width: u = "100%",
  children: i,
  ...c2
}) {
  const [a, o] = (0, import_react2.useState)(void 0), f = (0, import_react2.useRef)(null), d = (0, import_react2.useMemo)(() => `${e}-${n}`, [e, n]);
  return (0, import_react2.useLayoutEffect)(() => {
    f.current && o(f.current.parentNode);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    a && (s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ct,
      {
        onCancel: r,
        position: e,
        align: n,
        autoFit: t,
        width: u,
        ...c2,
        children: i
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(nt, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(lt, { parent: a, at: d, onCancel: r, width: u, ...c2, children: i }) })),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { ref: f, className: "wx-portal-node wx-32GZ52" })
  ] });
}
function X() {
  return locale(en_default);
}
function it() {
  let e = null, n = false, t = false, s, r, u, i;
  const c2 = (v, x2, w, h, m) => {
    s = v, r = x2, u = w, i = h, t = m;
  }, a = (v) => {
    e = v, n = e !== null, u(e);
  }, o = (v, x2) => {
    if (!t && v !== null && s) {
      const w = s.querySelectorAll(".wx-list > .wx-item")[v];
      w && (w.scrollIntoView({ block: "nearest" }), x2 && x2.preventDefault());
    }
  }, f = (v, x2) => {
    const w = v === null ? null : Math.max(0, Math.min(e + v, r.length - 1));
    w !== e && (a(w), s ? o(w, x2) : requestAnimationFrame(() => o(w, x2)));
  };
  return { move: (v) => {
    const x2 = locateID(v), w = r.findIndex((h) => h.id === x2);
    w !== e && a(w);
  }, keydown: (v, x2) => {
    switch (v.code) {
      case "Enter":
        n ? i() : a(0);
        break;
      case "Space":
        n || a(0);
        break;
      case "Escape":
        u(e = null);
        break;
      case "Tab":
        u(e = null);
        break;
      case "ArrowDown":
        f(n ? 1 : x2 || 0, v);
        break;
      case "ArrowUp":
        f(n ? -1 : x2 || 0, v);
        break;
    }
  }, init: c2, navigate: f };
}
var Re = 10;
var ut = (0, import_react2.memo)(function({ data: n, checkboxes: t, children: s, value: r }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Ye,
      {
        id: n.id,
        style: { marginRight: "8px", pointerEvents: "none" },
        value: r && r.includes(n.id)
      }
    ),
    s ? snippet(s, { option: n }) : n.label
  ] });
});
function $e({
  visibleItems: e,
  visibleRange: n,
  navIndex: t,
  checkboxes: s,
  children: r,
  value: u,
  measureRefCallback: i
}) {
  return e.map((c2, a) => {
    const o = n.start + a;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref: a === 0 ? i : void 0,
        className: `wx-233fr7 wx-item ${o === t ? "wx-focus" : ""}`,
        "data-id": c2.id,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ut,
          {
            data: c2,
            checkboxes: s,
            children: r,
            value: u
          }
        )
      },
      c2.id
    );
  });
}
function ge({
  items: e = [],
  children: n,
  onSelect: t,
  onReady: s,
  virtualized: r = false,
  checkboxes: u,
  multiselect: i,
  value: c2,
  ...a
}) {
  const o = (0, import_react2.useRef)(), f = (0, import_react2.useRef)(false), d = (0, import_react2.useRef)(it()), [p, v] = (0, import_react2.useState)(null), x2 = (0, import_react2.useRef)(p), [w, h] = (0, import_react2.useState)(0), [m, g] = (0, import_react2.useState)(24), T2 = (0, import_react2.useRef)(false), b2 = ((0, import_react2.useContext)(q) || X()).getGroup("core"), N2 = (0, import_react2.useRef)(e);
  (0, import_react2.useEffect)(() => {
    N2.current = e;
  }, [e]);
  const k2 = (0, import_react2.useRef)(c2);
  (0, import_react2.useEffect)(() => {
    k2.current = c2;
  }, [c2]);
  const M2 = (0, import_react2.useRef)(0);
  (0, import_react2.useEffect)(() => {
    M2.current = m;
  }, [m]);
  const $2 = (0, import_react2.useCallback)((y3) => {
    y3 && y3.stopPropagation();
    const E2 = N2.current, Z3 = k2.current, ce2 = x2.current;
    let ee2;
    const te2 = E2[ce2]?.id;
    i ? Z3 && Z3.includes(te2) ? ee2 = Z3.filter((we2) => we2 !== te2) : ee2 = [...Z3 || [], te2] : ee2 = te2, t && t({ id: ee2 });
  }, [i, t]), V = (0, import_react2.useRef)($2);
  (0, import_react2.useEffect)(() => {
    V.current = $2;
  }, [$2]);
  const F2 = (0, import_react2.useCallback)((y3) => {
    if (o.current) {
      let E2 = y3 * M2.current - o.current.clientHeight + M2.current;
      h(E2), o.current.scrollTop = E2;
    }
  }, [M2.current]), j2 = (0, import_react2.useCallback)(
    (y3) => {
      o.current = y3, r && (y3 && !f.current && x2.current !== null && requestAnimationFrame(() => {
        o.current && (F2(x2.current), f.current = true);
      }), y3 || (f.current = false));
    },
    [F2]
  ), H2 = (0, import_react2.useCallback)((y3) => {
    if (!y3 || T2.current) return;
    const E2 = y3.getBoundingClientRect().height;
    E2 && (g(E2), M2.current = E2, T2.current = true);
  }, []);
  (0, import_react2.useEffect)(() => {
    d.current.init(
      o.current,
      e,
      (y3) => {
        v(y3), x2.current = y3;
      },
      (y3) => V.current(y3),
      r
    );
  }, [e, o.current, r]), (0, import_react2.useEffect)(() => {
    const y3 = (Z3, ce2) => {
      d.current.navigate(Z3, ce2), F2(x2.current);
    }, E2 = (Z3, ce2) => {
      const ee2 = x2.current, te2 = N2.current;
      if (ee2 !== 0 && ee2 !== te2.length - 1 && (Z3.key === "ArrowDown" || Z3.key === "ArrowUp") && Z3.preventDefault(), d.current.keydown(Z3, ce2), o.current) {
        const we2 = o.current.scrollTop <= x2.current * M2.current, Ge = o.current.scrollTop + o.current.clientHeight >= x2.current * M2.current + M2.current;
        we2 ? Ge || F2(x2.current) : (o.current.scrollTop = x2.current * M2.current, h(o.current.scrollTop));
      }
    };
    s && s({
      navigate: r ? y3 : d.current.navigate,
      keydown: r ? E2 : d.current.keydown,
      move: d.current.move
    });
  }, []);
  const L2 = (0, import_react2.useRef)(0), P2 = (0, import_react2.useRef)(e);
  P2.current !== e && (P2.current = e, L2.current += 1);
  const C2 = (0, import_react2.useCallback)(() => {
    d.current.navigate(null);
  }, [d]), O2 = (0, import_react2.useCallback)((y3) => {
    r && h(y3.target.scrollTop);
  }, [r]), U2 = (0, import_react2.useMemo)(
    () => Math.ceil((o.current?.clientHeight || 0) / m),
    [m, w]
  ), Y2 = (0, import_react2.useMemo)(() => {
    if (!r) return { start: 0, end: e.length };
    if (!e.length) return { start: 0, end: 0 };
    const y3 = Math.floor(w / m), E2 = y3 + U2;
    return {
      start: Math.max(0, y3 - Re),
      end: Math.min(e.length, E2 + Re)
    };
  }, [r, e, w, m, U2]), I2 = (0, import_react2.useMemo)(() => {
    if (!r) return e;
    const { start: y3, end: E2 } = Y2;
    return e.slice(y3, E2).map((Z3) => ({
      ...Z3
    }));
  }, [r, e, Y2]), G2 = Y2.start * m, Q2 = e.length * m;
  return (0, import_react2.useEffect)(() => {
    p === null && (f.current = false);
  }, [p]), p === null ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(le, { onCancel: C2, ...a, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "wx-233fr7 wx-list",
      ref: j2,
      onClick: $2,
      onMouseMove: d.current.move,
      onScroll: O2,
      children: e.length ? r ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: "wx-233fr7 wx-list-wrapper",
          style: { height: `${Q2}px` },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: "wx-233fr7 wx-list-content",
              style: { transform: `translateY(${G2}px)` },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                $e,
                {
                  visibleRange: Y2,
                  visibleItems: I2,
                  navIndex: p,
                  measureRefCallback: H2,
                  checkboxes: u,
                  children: n,
                  value: c2
                }
              )
            }
          )
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        $e,
        {
          visibleRange: Y2,
          visibleItems: I2,
          navIndex: p,
          measureRefCallback: H2,
          checkboxes: u,
          children: n,
          value: c2
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-233fr7 wx-no-data", children: b2("No data") })
    }
  ) }, L2.current);
}
function Ne({
  value: e = "",
  id: n,
  readonly: t = false,
  focus: s = false,
  select: r = false,
  type: u = "text",
  placeholder: i = "",
  disabled: c2 = false,
  error: a = false,
  inputStyle: o = {},
  title: f = "",
  css: d = "",
  icon: p = "",
  clear: v = false,
  onChange: x2
}) {
  const w = z(n), [h, m] = useWritableProp(e), g = (0, import_react2.useRef)(null), T2 = (0, import_react2.useMemo)(
    () => p && d.indexOf("wx-icon-left") === -1 ? "wx-icon-right " + d : d,
    [p, d]
  ), b2 = (0, import_react2.useMemo)(
    () => p && d.indexOf("wx-icon-left") !== -1,
    [p, d]
  );
  (0, import_react2.useEffect)(() => {
    const V = setTimeout(() => {
      s && g.current && g.current.focus(), r && g.current && g.current.select();
    }, 1);
    return () => clearTimeout(V);
  }, [s, r]);
  const N2 = (0, import_react2.useCallback)(
    (V) => {
      const F2 = V.target.value;
      m(F2), x2 && x2({ value: F2, input: true });
    },
    [x2]
  ), k2 = (0, import_react2.useCallback)(
    (V) => x2 && x2({ value: V.target.value }),
    [x2]
  );
  function M2(V) {
    V.stopPropagation(), m(""), x2 && x2({ value: "" });
  }
  let $2 = u;
  return u !== "password" && u !== "number" && ($2 = "text"), (0, import_react2.useEffect)(() => {
    const V = k2, F2 = g.current;
    return F2.addEventListener("change", V), () => {
      F2 && F2.removeEventListener("change", V);
    };
  }, [k2]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: `wx-hQ64J4 wx-text ${T2} ${a ? "wx-error" : ""} ${c2 ? "wx-disabled" : ""} ${v ? "wx-clear" : ""}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            className: "wx-hQ64J4 wx-input",
            ref: g,
            id: w,
            readOnly: t,
            disabled: c2,
            placeholder: i,
            type: $2,
            style: o,
            title: f,
            value: h,
            onInput: N2
          }
        ),
        v && !c2 && h ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "wx-hQ64J4 wx-icon wxi-close", onClick: M2 }),
          b2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `wx-hQ64J4 wx-icon ${p}` })
        ] }) : p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `wx-hQ64J4 wx-icon ${p}` }) : null
      ]
    }
  );
}
function dt({ date: e, type: n, part: t, onShift: s }) {
  const { calendar: r, formats: u } = (0, import_react2.useContext)(q).getRaw(), i = e.getFullYear(), c2 = (0, import_react2.useMemo)(() => {
    switch (n) {
      case "month":
        return dateToString(u.monthYearFormat, r)(e);
      case "year":
        return dateToString(u.yearFormat, r)(e);
      case "duodecade": {
        const { start: o, end: f } = getDuodecade(i), d = dateToString(u.yearFormat, r);
        return `${d(new Date(o, 0, 1))} - ${d(new Date(f, 11, 31))}`;
      }
      default:
        return "";
    }
  }, [e, n, i, r, u]);
  function a() {
    s && s({ diff: 0, type: n });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "wx-8HQVQV wx-header", children: [
    t !== "right" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "i",
      {
        className: "wx-8HQVQV wx-pager wxi-angle-left",
        onClick: () => s && s({ diff: -1, type: n })
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "wx-8HQVQV wx-spacer" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "wx-8HQVQV wx-label", onClick: a, children: c2 }),
    t !== "left" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "i",
      {
        className: "wx-8HQVQV wx-pager wxi-angle-right",
        onClick: () => s && s({ diff: 1, type: n })
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "wx-8HQVQV wx-spacer" })
  ] });
}
function ke({ onClick: e, children: n }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "wx-3s8W4d wx-button", onClick: e, children: n });
}
function ft({
  value: e,
  current: n,
  part: t = "",
  markers: s = null,
  onCancel: r,
  onChange: u
}) {
  const i = ((0, import_react2.useContext)(q) || X()).getRaw().calendar, c2 = (i.weekStart || 7) % 7, a = i.dayShort.slice(c2).concat(i.dayShort.slice(0, c2)), o = (b2, N2, k2) => new Date(
    b2.getFullYear(),
    b2.getMonth() + (N2 || 0),
    b2.getDate() + (k2 || 0)
  );
  let f = t !== "normal";
  function d(b2) {
    const N2 = b2.getDay();
    return N2 === 0 || N2 === 6;
  }
  function p() {
    const b2 = o(n, 0, 1 - n.getDate());
    return b2.setDate(b2.getDate() - (b2.getDay() - (c2 - 7)) % 7), b2;
  }
  function v() {
    const b2 = o(n, 1, -n.getDate());
    return b2.setDate(b2.getDate() + (6 - b2.getDay() + c2) % 7), b2;
  }
  const x2 = (0, import_react2.useRef)(0);
  function w(b2, N2) {
    N2.timeStamp !== x2.current && (x2.current = N2.timeStamp, N2.stopPropagation(), u && u(new Date(b2)), r && r());
  }
  const h = (0, import_react2.useMemo)(() => t == "normal" ? [e ? o(e).valueOf() : 0] : e ? [
    e.start ? o(e.start).valueOf() : 0,
    e.end ? o(e.end).valueOf() : 0
  ] : [0, 0], [t, e]), m = (0, import_react2.useMemo)(() => {
    const b2 = p(), N2 = v(), k2 = n.getMonth();
    let M2 = [];
    for (let $2 = b2; $2 <= N2; $2.setDate($2.getDate() + 1)) {
      const V = {
        day: $2.getDate(),
        in: $2.getMonth() === k2,
        date: $2.valueOf()
      };
      let F2 = "";
      if (F2 += V.in ? "" : " wx-inactive", F2 += h.indexOf(V.date) > -1 ? " wx-selected" : "", f) {
        const j2 = V.date == h[0], H2 = V.date == h[1];
        j2 && !H2 ? F2 += " wx-left" : H2 && !j2 && (F2 += " wx-right"), V.date > h[0] && V.date < h[1] && (F2 += " wx-inrange");
      }
      if (F2 += d($2) ? " wx-weekend" : "", s) {
        const j2 = s($2);
        j2 && (F2 += " " + j2);
      }
      M2.push({ ...V, css: F2 });
    }
    return M2;
  }, [n, h, f, s]), g = (0, import_react2.useRef)(null);
  let T2 = (0, import_react2.useRef)({});
  return T2.current.click = w, (0, import_react2.useEffect)(() => {
    delegateClick(g.current, T2.current);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-398RBS wx-weekdays", children: a.map((b2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-398RBS wx-weekday", children: b2 }, b2)) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-398RBS wx-days", ref: g, children: m.map((b2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: `wx-398RBS wx-day ${b2.css} ${b2.in ? "" : "wx-out"}`,
        "data-id": b2.date,
        children: b2.day
      },
      b2.date
    )) })
  ] });
}
function wt({
  value: e,
  current: n,
  part: t,
  onCancel: s,
  onChange: r,
  onShift: u
}) {
  const i = (0, import_react2.useRef)(/* @__PURE__ */ new Date()), [c2, a] = useWritableProp(e || i.current), [o, f] = useWritableProp(n || i.current), d = (0, import_react2.useContext)(q).getRaw().calendar, p = d.monthShort || [], v = (0, import_react2.useMemo)(() => o.getMonth(), [o]), x2 = (0, import_react2.useCallback)(
    (m, g) => {
      if (m != null) {
        g.stopPropagation();
        const T2 = new Date(o);
        T2.setMonth(m), f(T2), u && u({ current: T2 });
      }
      t === "normal" && a(new Date(o)), s && s();
    },
    [o, t, u, s]
  ), w = (0, import_react2.useCallback)(() => {
    const m = new Date(je(c2, t) || o);
    m.setMonth(o.getMonth()), m.setFullYear(o.getFullYear()), r && r(m);
  }, [c2, o, t, r]), h = (0, import_react2.useCallback)(
    (m) => {
      const g = m.target.closest("[data-id]");
      if (g) {
        const T2 = parseInt(g.getAttribute("data-id"), 10);
        x2(T2, m);
      }
    },
    [x2]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-34U8T8 wx-months", onClick: h, children: p.map((m, g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "wx-34U8T8 wx-month" + (v === g ? " wx-current" : ""),
        "data-id": g,
        children: m
      },
      g
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-34U8T8 wx-buttons", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ke, { onClick: w, children: d.done }) })
  ] });
}
var xe = "wx-1XEF33";
var xt = ({ value: e, current: n, onCancel: t, onChange: s, onShift: r, part: u }) => {
  const i = (0, import_react2.useContext)(q).getRaw().calendar, [c2, a] = useWritableProp(n), [o, f] = useWritableProp(e), d = (0, import_react2.useMemo)(() => c2.getFullYear(), [c2]), p = (0, import_react2.useMemo)(() => {
    const { start: m, end: g } = getDuodecade(d), T2 = [];
    for (let b2 = m; b2 <= g; ++b2)
      T2.push(b2);
    return T2;
  }, [d]), v = {
    click: x2
  };
  function x2(m, g) {
    if (m) {
      g.stopPropagation();
      const T2 = new Date(c2);
      T2.setFullYear(m), a(T2), r && r({ current: T2 });
    }
    u === "normal" && f(new Date(c2)), t && t();
  }
  function w() {
    const m = new Date(je(o, u) || c2);
    m.setFullYear(c2.getFullYear()), s && s(m);
  }
  const h = (0, import_react2.useRef)(null);
  return (0, import_react2.useEffect)(() => {
    h.current && delegateClick(h.current, v);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: xe + " wx-years", ref: h, children: p.map((m, g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: xe + ` wx-year ${d == m ? "wx-current" : ""} ${g === 0 ? "wx-prev-decade" : ""} ${g === 11 ? "wx-next-decade" : ""}`,
        "data-id": m,
        children: m
      },
      g
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: xe + " wx-buttons", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ke, { onClick: w, children: i.done }) })
  ] });
};
var Me = {
  month: {
    component: ft,
    next: ht,
    prev: mt
  },
  year: {
    component: wt,
    next: vt,
    prev: pt
  },
  duodecade: {
    component: xt,
    next: Nt,
    prev: gt
  }
};
function mt(e) {
  return e = new Date(e), e.setMonth(e.getMonth() - 1), e;
}
function ht(e) {
  return e = new Date(e), e.setMonth(e.getMonth() + 1), e;
}
function pt(e) {
  return e = new Date(e), e.setFullYear(e.getFullYear() - 1), e;
}
function vt(e) {
  return e = new Date(e), e.setFullYear(e.getFullYear() + 1), e;
}
function gt(e) {
  return e = new Date(e), e.setFullYear(e.getFullYear() - 10), e;
}
function Nt(e) {
  return e = new Date(e), e.setFullYear(e.getFullYear() + 10), e;
}
function je(e, n) {
  let t;
  if (n === "normal") t = e;
  else {
    const { start: s, end: r } = e;
    n === "left" ? t = s : n == "right" ? t = r : t = s && r;
  }
  return t;
}
var kt = ["clear", "today"];
function yt(e) {
  if (e === "done") return -1;
  if (e === "clear") return null;
  if (e === "today") return /* @__PURE__ */ new Date();
}
function de({
  value: e,
  current: n,
  onCurrentChange: t,
  part: s = "normal",
  markers: r = null,
  buttons: u,
  onShift: i,
  onChange: c2
}) {
  const a = (0, import_react2.useContext)(q).getGroup("calendar"), [o, f] = (0, import_react2.useState)("month"), d = Array.isArray(u) ? u : u ? kt : [], p = (m, g) => {
    m.preventDefault(), c2 && c2({ value: g });
  }, v = () => {
    o === "duodecade" ? f("year") : o === "year" && f("month");
  }, x2 = (m) => {
    const { diff: g, current: T2 } = m;
    if (g === 0) {
      o === "month" ? f("year") : o === "year" && f("duodecade");
      return;
    }
    if (g) {
      const b2 = Me[o];
      t(g > 0 ? b2.next(n) : b2.prev(n));
    } else T2 && t(T2);
    i && i();
  }, w = (m) => {
    f("month"), c2 && c2({ select: true, value: m });
  }, h = (0, import_react2.useMemo)(() => Me[o].component, [o]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: `wx-2Gr4AS wx-calendar ${s !== "normal" && s !== "both" ? "wx-part" : ""}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "wx-2Gr4AS wx-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dt, { date: n, part: s, type: o, onShift: x2 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            h,
            {
              value: e,
              current: n,
              onCurrentChange: t,
              part: s,
              markers: r,
              onCancel: v,
              onChange: w,
              onShift: x2
            }
          ),
          o === "month" && d.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-2Gr4AS wx-buttons", children: d.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-2Gr4AS wx-button-item", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            ke,
            {
              onClick: (g) => p(g, yt(m)),
              children: a(m)
            }
          ) }, m)) })
        ] })
      ] })
    }
  );
}
function he(e) {
  let { words: n = null, optional: t = false, children: s } = e, r = (0, import_react2.useContext)(q);
  const u = (0, import_react2.useMemo)(() => {
    let i = r;
    return (!i || !i.extend) && (i = locale(en_default)), n !== null && (i = i.extend(n, t)), i;
  }, [n, t, r]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q.Provider, { value: u, children: s });
}
function Ie(e, n, t, s) {
  if (!e || s) {
    const r = n ? new Date(n) : /* @__PURE__ */ new Date();
    r.setDate(1), t(r);
  } else if (e.getDate() !== 1) {
    const r = new Date(e);
    r.setDate(1), t(r);
  }
}
var bt = ["clear", "today"];
function Dt({
  value: e,
  current: n,
  markers: t = null,
  buttons: s = bt,
  onChange: r
}) {
  const [u, i] = useWritableProp(e), [c2, a] = useWritableProp(n);
  (0, import_react2.useEffect)(() => {
    Ie(c2, u, a, false);
  }, [u, c2]);
  const o = (0, import_react2.useCallback)(
    (d) => {
      const p = d.value;
      p ? (i(new Date(p)), Ie(c2, new Date(p), a, true)) : i(null), r && r({ value: p ? new Date(p) : null });
    },
    [r, c2]
  ), f = (0, import_react2.useCallback)(
    (d) => {
      a(d);
    },
    [a]
  );
  return c2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(he, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    de,
    {
      value: u,
      current: c2,
      markers: t,
      buttons: s,
      onChange: o,
      onCurrentChange: f
    }
  ) }) : null;
}
function ye(e) {
  return e || (e = {}), e.width || (e.width = "unset"), e;
}
var Vt = ["clear", "today"];
function zt({
  value: e,
  id: n,
  disabled: t = false,
  error: s = false,
  placeholder: r = "",
  format: u = "",
  buttons: i = Vt,
  css: c2 = "",
  title: a = "",
  editable: o = false,
  clear: f = false,
  onChange: d,
  dropdown: p = {}
}) {
  const { calendar: v, formats: x2 } = ((0, import_react2.useContext)(q) || X()).getRaw(), w = u || x2?.dateFormat;
  let h = typeof w == "function" ? w : dateToString(w, v);
  const [m, g] = (0, import_react2.useState)(e), [T2, b2] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    g(e);
  }, [e]);
  function N2() {
    b2(false);
  }
  function k2(V) {
    const F2 = V === m || V && m && V.valueOf() === m.valueOf() || !V && !m;
    g(V), F2 || d && d({ value: V }), setTimeout(N2, 1);
  }
  const M2 = (0, import_react2.useMemo)(
    () => m ? h(m) : "",
    [m, h]
  );
  function $2({ value: V, input: F2 }) {
    if (!o && !f || F2) return;
    let j2 = typeof o == "function" ? o(V) : V ? new Date(V) : null;
    j2 = isNaN(j2) ? m || null : j2 || null, k2(j2);
  }
  return (0, import_react2.useEffect)(() => {
    const V = N2;
    return window.addEventListener("scroll", V), () => window.removeEventListener("scroll", V);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "wx-1lKOFG wx-datepicker", onClick: () => b2(true), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Ne,
      {
        css: c2,
        title: a,
        value: M2,
        id: n,
        readonly: !o,
        disabled: t,
        error: s,
        placeholder: r,
        onInput: N2,
        onChange: $2,
        icon: "wxi-calendar",
        inputStyle: {
          cursor: "pointer",
          width: "100%",
          paddingRight: "calc(var(--wx-input-icon-size) + var(--wx-input-icon-indent) * 2)"
        },
        clear: f
      }
    ),
    T2 && !t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      le,
      {
        onCancel: N2,
        ...ye(p),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Dt,
          {
            buttons: i,
            value: m,
            onChange: (V) => k2(V.value)
          }
        )
      }
    )
  ] });
}
function cn({
  value: e = "",
  options: n = [],
  textOptions: t = null,
  placeholder: s = "",
  disabled: r = false,
  error: u = false,
  title: i = "",
  textField: c2 = "label",
  clear: a = false,
  children: o,
  onChange: f,
  dropdown: d = {}
}) {
  const p = (0, import_react2.useRef)(null), v = (0, import_react2.useRef)(null);
  let [x2, w] = useWritableProp(e);
  function h(N2) {
    p.current = N2.navigate, v.current = N2.keydown;
  }
  const m = (0, import_react2.useMemo)(() => x2 || x2 === 0 ? (t || n).find((N2) => N2.id === x2) : null, [x2, t, n]), g = (0, import_react2.useCallback)(
    ({ id: N2 }) => {
      (N2 || N2 === 0) && (w(N2), p.current(null), f && f({ value: N2 }));
    },
    [w, f]
  ), T2 = (0, import_react2.useCallback)(
    (N2) => {
      N2.stopPropagation(), w(""), f && f({ value: "" });
    },
    [w, f]
  ), b2 = (0, import_react2.useCallback)(() => n.findIndex((N2) => N2.id === x2), [n, x2]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: `wx-2YgblL wx-richselect ${u ? "wx-2YgblL wx-error" : ""} ${r ? "wx-2YgblL wx-disabled" : ""} ${o ? "" : "wx-2YgblL wx-nowrap"}`,
      title: i,
      onClick: () => p.current(b2()),
      onKeyDown: (N2) => v.current(N2, b2()),
      tabIndex: 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-2YgblL wx-label", children: m ? o ? o(m) : m[c2] : s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "wx-2YgblL wx-placeholder", children: s }) : "\xA0" }),
        a && !r && x2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "wx-2YgblL wx-icon wxi-close", onClick: T2 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "wx-2YgblL wx-icon wxi-angle-down" }),
        !r && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ge, { items: n, onReady: h, onSelect: g, ...d, children: ({ option: N2 }) => o ? o(N2) : N2[c2] })
      ]
    }
  );
}
function Ct({ notice: e = {} }) {
  function n() {
    e.remove && e.remove();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: `wx-11sNg5 wx-notice wx-${e.type ? e.type : ""}`,
      role: "status",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-11sNg5 wx-text", children: e.text }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-11sNg5 wx-button", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "wx-11sNg5 wxi-close", onClick: n }) })
      ]
    }
  );
}
function St({ data: e = [] }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-3nwoO9 wx-notices", children: e.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ct, { notice: n }, n.id)) });
}
function Lt({
  title: e = "",
  buttons: n = ["cancel", "ok"],
  header: t,
  children: s,
  footer: r,
  onConfirm: u,
  onCancel: i
}) {
  const c2 = ((0, import_react2.useContext)(q) || X()).getGroup("core"), a = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    a.current?.focus();
  }, []);
  function o(d) {
    switch (d.code) {
      case "Enter": {
        const p = d.target.tagName;
        if (p === "TEXTAREA" || p === "BUTTON") return;
        u && u({ event: d });
        break;
      }
      case "Escape":
        i && i({ event: d });
        break;
    }
  }
  function f(d, p) {
    const v = { event: d, button: p };
    p === "cancel" ? i && i(v) : u && u(v);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "wx-1FxkZa wx-modal",
      ref: a,
      tabIndex: 0,
      onKeyDown: o,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "wx-1FxkZa wx-window", children: [
        t || (e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-1FxkZa wx-header", children: e }) : null),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: s }),
        r || n && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-1FxkZa wx-buttons", children: n.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-1FxkZa wx-button", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          re,
          {
            type: `block ${d === "ok" ? "primary" : "secondary"}`,
            onClick: (p) => f(p, d),
            children: c2(d)
          }
        ) }, d)) })
      ] })
    }
  );
}
function Ft({ children: e }, n) {
  const [t, s] = (0, import_react2.useState)(null), [r, u] = (0, import_react2.useState)([]);
  return (0, import_react2.useImperativeHandle)(
    n,
    () => ({
      showModal: (i) => {
        const c2 = { ...i };
        return s(c2), new Promise((a, o) => {
          c2.resolve = (f) => {
            s(null), a(f);
          }, c2.reject = (f) => {
            s(null), o(f);
          };
        });
      },
      showNotice: (i) => {
        i = { ...i }, i.id = i.id || uid(), i.remove = () => u((c2) => c2.filter((a) => a.id !== i.id)), i.expire != -1 && setTimeout(i.remove, i.expire || 5100), u((c2) => [...c2, i]);
      }
    }),
    []
  ), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    e,
    t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Lt,
      {
        title: t.title,
        buttons: t.buttons,
        onConfirm: t.resolve,
        onCancel: t.reject,
        children: t.message
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(St, { data: r })
  ] });
}
var Ht = (0, import_react2.forwardRef)(Ft);
var Le = new Date(0, 0, 0, 0, 0);
function Je() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
}
function vn(e) {
  const { fonts: n = true, children: t } = e;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ie.Provider, { value: "willow", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    t && t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-theme wx-willow-theme", children: t }),
    n && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "link",
        {
          rel: "preconnect",
          href: "https://cdn.svar.dev",
          crossOrigin: "true"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Je, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "link",
        {
          rel: "stylesheet",
          href: "https://cdn.svar.dev/fonts/wxi/wx-icons.css"
        }
      )
    ] })
  ] }) });
}
function gn(e) {
  const { fonts: n = true, children: t } = e;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ie.Provider, { value: "willow-dark", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    t && t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "wx-theme wx-willow-dark-theme", children: t }),
    n && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "link",
        {
          rel: "preconnect",
          href: "https://cdn.svar.dev",
          crossOrigin: "true"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Je, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "link",
        {
          rel: "stylesheet",
          href: "https://cdn.svar.dev/fonts/wxi/wx-icons.css"
        }
      )
    ] })
  ] }) });
}
setEnv(env2);

// ../../common/temp/node_modules/.pnpm/@svar-ui+grid-locales@2.6.1/node_modules/@svar-ui/grid-locales/locales/en.js
var en_default2 = {
  grid: {
    "Add before": "Add before",
    "Add after": "Add after",
    Copy: "Copy",
    Cut: "Cut",
    Paste: "Paste",
    Delete: "Delete",
    "New row": "New row",
    "Move up": "Move up",
    "Move down": "Move down",
    Undo: "Undo",
    Redo: "Redo"
  }
};

// ../../common/temp/node_modules/.pnpm/@svar-ui+lib-state@1.9.6/node_modules/@svar-ui/lib-state/dist/index.js
var iid = (/* @__PURE__ */ new Date()).valueOf();
var EventBusRouter = class {
  constructor(dispatch) {
    this._nextHandler = null;
    this._dispatch = dispatch;
    this.exec = this.exec.bind(this);
  }
  async exec(name, ev) {
    this._dispatch(name, ev);
    if (this._nextHandler) await this._nextHandler.exec(name, ev);
    return ev;
  }
  setNext(next) {
    return this._nextHandler = next;
  }
};

// ../../common/temp/node_modules/.pnpm/@svar-ui+grid-store@2.6.1/node_modules/@svar-ui/grid-store/dist/index.js
var j = (/* @__PURE__ */ new Date()).valueOf();
function F(r, e) {
  if (Object.keys(r).length !== Object.keys(e).length) return false;
  for (const o in e) {
    const t = r[o], n = e[o];
    if (!k(t, n)) return false;
  }
  return true;
}
function k(r, e) {
  if (typeof r == "number" || typeof r == "string" || typeof r == "boolean" || r === null) return r === e;
  if (typeof r != typeof e || (r === null || e === null) && r !== e || r instanceof Date && e instanceof Date && r.getTime() !== e.getTime()) return false;
  if (typeof r == "object") if (Array.isArray(r) && Array.isArray(e)) {
    if (r.length !== e.length) return false;
    for (let o = r.length - 1; o >= 0; o--) if (!k(r[o], e[o])) return false;
    return true;
  } else return F(r, e);
  return r === e;
}
function D2(r) {
  if (typeof r != "object" || r === null) return r;
  if (r instanceof Date) return new Date(r);
  if (r instanceof Array) return r.map(D2);
  const e = {};
  for (const o in r) e[o] = D2(r[o]);
  return e;
}
var T = 2;
var W2 = class {
  constructor(r) {
    r && (this._writable = r.writable, this._async = r.async), this._values = {}, this._state = {};
  }
  setState(r, e = 0) {
    const o = {};
    return this._wrapProperties(r, this._state, this._values, "", o, e), o;
  }
  getState() {
    return this._values;
  }
  getReactive() {
    return this._state;
  }
  _wrapProperties(r, e, o, t, n, i) {
    for (const a in r) {
      const s = e[a], c2 = o[a], l2 = r[a];
      if (s && (c2 === l2 && typeof l2 != "object" || l2 instanceof Date && c2 instanceof Date && c2.getTime() === l2.getTime())) continue;
      const d = t + (t ? "." : "") + a;
      s ? (s.__parse(l2, d, n, i) && (o[a] = l2), i & T ? n[d] = s.__trigger : s.__trigger()) : (l2 && l2.__reactive ? e[a] = this._wrapNested(l2, l2, d, n) : e[a] = this._wrapWritable(l2), o[a] = l2), n[d] = n[d] || null;
    }
  }
  _wrapNested(r, e, o, t) {
    const n = this._wrapWritable(r);
    return this._wrapProperties(r, n, e, o, t, 0), n.__parse = (i, a, s, c2) => (this._wrapProperties(i, n, e, a, s, c2), false), n;
  }
  _wrapWritable(r) {
    const e = [], o = function() {
      for (let t = 0; t < e.length; t++) e[t](r);
    };
    return { subscribe: (t) => (e.push(t), this._async ? setTimeout(t, 1, r) : t(r), () => {
      const n = e.indexOf(t);
      n >= 0 && e.splice(n, 1);
    }), __trigger: () => {
      e.length && (this._async ? setTimeout(o, 1) : o());
    }, __parse: function(t) {
      return r = t, true;
    } };
  }
};
var U = class {
  constructor(r, e, o, t) {
    typeof r == "function" ? this._setter = r : this._setter = r.setState.bind(r), this._routes = e, this._parsers = o, this._prev = {}, this._triggers = /* @__PURE__ */ new Map(), this._sources = /* @__PURE__ */ new Map(), this._routes.forEach((n) => {
      n.in.forEach((i) => {
        const a = this._triggers.get(i) || [];
        a.push(n), this._triggers.set(i, a);
      }), n.out.forEach((i) => {
        const a = this._sources.get(i) || {};
        n.in.forEach((s) => a[s] = true), this._sources.set(i, a);
      });
    }), this._routes.forEach((n) => {
      n.length = Math.max(...n.in.map((i) => H(i, this._sources, 1)));
    }), this._bus = t;
  }
  init(r) {
    const e = {};
    for (const o in r) if (this._prev[o] !== r[o]) {
      const t = this._parsers[o];
      e[o] = t ? t(r[o]) : r[o];
    }
    this._prev = this._prev ? { ...this._prev, ...r } : { ...r }, this.setState(e), this._bus && this._bus.exec("init-state", e);
  }
  setStateAsync(r) {
    const e = this._setter(r, T);
    return this._async ? Object.assign(this._async.signals, e) : this._async = { signals: e, timer: setTimeout(this._applyState.bind(this), 1) }, e;
  }
  _applyState() {
    const r = this._async;
    if (r) {
      this._async = null, this._triggerUpdates(r.signals, []);
      for (const e in r.signals) {
        const o = r.signals[e];
        o && o();
      }
    }
  }
  setState(r, e = []) {
    const o = this._setter(r);
    return this._triggerUpdates(o, e), o;
  }
  _triggerUpdates(r, e) {
    const o = Object.keys(r), t = !e.length;
    e = e || [];
    for (let n = 0; n < o.length; n++) {
      const i = o[n], a = this._triggers.get(i);
      a && a.forEach((s) => {
        e.indexOf(s) == -1 && e.push(s);
      });
    }
    t && this._execNext(e);
  }
  _execNext(r) {
    for (; r.length; ) {
      r.sort((o, t) => o.length < t.length ? 1 : -1);
      const e = r[r.length - 1];
      r.splice(r.length - 1), e.exec(r);
    }
  }
};
function H(r, e, o) {
  const t = e.get(r);
  if (!t) return o;
  const n = Object.keys(t).map((i) => H(i, e, o + 1));
  return Math.max(...n);
}
var K2 = class {
  constructor() {
    this._nextHandler = null, this._handlers = {}, this._tag = /* @__PURE__ */ new WeakMap(), this.exec = this.exec.bind(this);
  }
  on(r, e, o) {
    let t = this._handlers[r];
    t ? o && o.intercept ? t.unshift(e) : t.push(e) : t = this._handlers[r] = [e], o && o.tag && this._tag.set(e, o.tag);
  }
  intercept(r, e, o) {
    this.on(r, e, { ...o, intercept: true });
  }
  detach(r) {
    for (const e in this._handlers) {
      const o = this._handlers[e];
      for (let t = o.length - 1; t >= 0; t--) this._tag.get(o[t]) === r && o.splice(t, 1);
    }
  }
  async exec(r, e) {
    const o = this._handlers[r];
    if (o) for (let t = 0; t < o.length; t++) {
      const n = o[t](e);
      if (n === false || n && n.then && await n === false) return;
    }
    return this._nextHandler && await this._nextHandler.exec(r, e), e;
  }
  setNext(r) {
    return this._nextHandler = r;
  }
};
function B2(r) {
  return (e) => e[r];
}
function Y(r) {
  return (e, o) => e[r] = o;
}
function y2(r, e) {
  return (e.getter || B2(e.id))(r);
}
function I(r, e, o) {
  return (e.setter || Y(e.id))(r, o);
}
function q2(r, e) {
  const o = document.createElement("a");
  o.href = URL.createObjectURL(r), o.download = e, document.body.appendChild(o), o.click(), document.body.removeChild(o);
}
function S2(r, e) {
  let o = y2(r, e) ?? "";
  return e.template ? o = e.template(o, r, e) : e.optionsMap && (Array.isArray(o) ? o = o.map((t) => e.optionsMap.get(t)) : o = e.optionsMap.get(o)), typeof o > "u" ? "" : o + "";
}
function Z(r, e) {
  const o = /\n|"|;|,/;
  let t = "";
  const n = e.rows || `
`, i = e.cols || "	", a = r._columns, s = r.flatData;
  e.header !== false && a[0].header && (t = P("header", a, t, i, n));
  for (let c2 = 0; c2 < s.length; c2++) {
    const l2 = [];
    for (let d = 0; d < a.length; d++) {
      let h = S2(s[c2], a[d]);
      o.test(h) && (h = '"' + h.replace(/"/g, '""') + '"'), l2.push(h);
    }
    t += (t ? n : "") + l2.join(i);
  }
  return e.footer !== false && a[0].footer && (t = P("footer", a, t, i, n)), t;
}
function P(r, e, o, t, n) {
  const i = /\n|"|;|,/;
  for (let a = 0; a < e[0][r].length; a++) {
    const s = [];
    for (let c2 = 0; c2 < e.length; c2++) {
      let l2 = (e[c2][r][a].text || "") + "";
      i.test(l2) && (l2 = '"' + l2.replace(/"/g, '""') + '"'), s.push(l2);
    }
    o += (o ? n : "") + s.join(t);
  }
  return o;
}
var G = "portrait";
var J = 100;
var Q = "a4";
var ee = { a3: { width: 11.7, height: 16.5 }, a4: { width: 8.27, height: 11.7 }, letter: { width: 8.5, height: 11 } };
function te(r, e) {
  const o = [];
  let t = [], n = 0;
  const i = r.filter((s) => !s.hidden), a = ne(e);
  return i.forEach((s, c2) => {
    n + s.width <= a ? (n += s.width, t.push(s)) : (t.length && o.push(t), t = [s], n = s.width), c2 === i.length - 1 && t.length && o.push(t);
  }), o;
}
function oe(r, e, o) {
  const t = [];
  return r.forEach((n, i) => {
    const a = n[e];
    for (let s = 0; s < o.length; s++) {
      t[s] || (t[s] = []);
      const c2 = { ...a[s] };
      if (t[s][i] !== null) {
        if (!i && !c2.rowspan && !c2.colspan) {
          let l2 = 1, d = r[i + l2][e][s], h = c2.width;
          for (; !d.rowspan && !d.colspan; ) l2++, d = r[i + l2][e][s], h += d.width;
          c2.colspan = l2, c2.width = h, c2.height = o[s];
        }
        if (t[s].push(c2), !c2.collapsed && c2.colspan > 1) {
          let l2 = c2.colspan - 1;
          if (c2.colspan + i > r.length) {
            const d = c2.colspan - (c2.colspan + i - r.length);
            c2.colspan = d, c2.width = r.slice(i, i + l2 + 1).reduce((h, u) => h + u.width, 0), d > 1 && (l2 = d - 1);
          }
          for (let d = 0; d < l2; d++) t[s].push(null);
        }
        if (c2.rowspan > 1) {
          const l2 = c2.rowspan;
          for (let d = 1; d < l2; d++) t[s + d] || (t[s + d] = []), t[s + d].push(null);
        }
      }
    }
    if (n.collapsed) for (let s = 0; s < t.length; s++) {
      const c2 = t[s], l2 = c2[i];
      if (l2 && l2.collapsed) {
        if (c2[i] = null, !s) break;
      } else {
        const d = l2 || c2.findLast((h) => h?.colspan >= 1);
        d && (d.colspan = d.colspan - 1, d.width = d.width - n.width);
      }
    }
  }), t.map((n) => n.filter((i) => i && i.colspan !== 0));
}
function ne(r) {
  const { mode: e, ppi: o, paper: t } = r, { width: n, height: i } = ee[t];
  return ie2(e === "portrait" ? n : i, o);
}
function ie2(r, e) {
  return r * e;
}
function re2(r = {}) {
  const { mode: e, ppi: o, paper: t } = r;
  return { mode: e || G, ppi: o || J, paper: t || Q };
}
function se(r, e) {
  return r.flexgrow ? `min-width:${e}px;width:auto` : `width:${r.width}px; max-width:${r.width}px; height:${r.height}px`;
}
function ae(r, e, o) {
  let t = r[o.id];
  if (o.filter.type === "richselect" && t) {
    const n = o.filter.config?.options || e.find(({ id: i }) => i == o.id).options;
    n && (t = n.find(({ id: i }) => i == t).label);
  }
  return t ?? "";
}
var z2 = ["resize-column", "hide-column", "update-cell"];
var ce = ["delete-row", "update-row", "update-cell"];
var le2 = ["move-item"];
var de2 = ["resize-column", "move-item"];
var he2 = class {
  undo = [];
  redo = [];
  progress = {};
  in;
  getState;
  setState;
  _previousValues = {};
  constructor(e, o, t) {
    this.in = e, this.getState = o, this.setState = t, this.setHandlers(), this.resetStateHistory();
  }
  getHandlers() {
    return { "add-row": { handler: (e) => ({ action: "delete-row", data: { id: e.id }, source: { action: "add-row", data: e } }) }, "delete-row": { handler: (e) => {
      const { id: o } = e, { data: t } = this.getPrev(), n = t.findIndex((i) => i.id === o);
      return { action: "add-row", data: { id: o, row: t[n], before: n < t.length - 1 ? t[n + 1].id : void 0 }, source: { action: "delete-row", data: e } };
    } }, "update-cell": { handler: (e) => {
      const { id: o, column: t } = e, n = this.getRow(o), i = this.getColumn(t), a = y2(n, i);
      return k(a, e.value) ? null : { action: "update-cell", data: { id: o, column: t, value: a }, source: { action: "update-cell", data: e } };
    } }, "update-row": { handler: (e) => {
      const { id: o, row: t } = e, n = this.getRow(o);
      for (const i in t) Object.keys(n).includes(i) || (n[i] = void 0);
      return { action: "update-row", data: { id: o, row: n }, source: { action: "update-row", data: e } };
    } }, "copy-row": { handler: (e) => {
      const { id: o } = e, { data: t } = this.getState(), n = t.findIndex((a) => a.id === o), i = t[n];
      return { action: "delete-row", data: { id: o }, source: { action: "add-row", data: { id: o, row: i, before: n < t.length - 1 ? t[n + 1].id : void 0 } } };
    } }, "resize-column": { handler: (e) => {
      const { id: o, width: t } = e, n = this.getColumn(o), { _sizes: i } = this.getState();
      return { action: "resize-column", data: { id: o, width: n.width ?? i.columnWidth }, source: { action: "resize-column", data: { id: o, width: t } } };
    } }, "hide-column": { handler: (e) => {
      const { id: o } = e, t = this.getColumn(o);
      return { action: "hide-column", data: { id: o, mode: t.hidden }, source: { action: "hide-column", data: e } };
    } }, "collapse-column": { handler: (e) => {
      const { id: o, row: t, mode: n } = e;
      return { action: "collapse-column", data: { id: o, row: t, mode: typeof n == "boolean" ? !n : n }, source: { action: "collapse-column", data: e } };
    } }, "move-item": { handler: (e) => {
      const { id: o, target: t, mode: n } = e, { flatData: i } = this.getPrev(), a = i.findIndex((s) => s.id === o);
      return { action: "move-item", data: { id: o, target: i[a + (a ? -1 : 1)].id, mode: a ? "after" : "before" }, source: { action: "move-item", data: { id: o, target: t, mode: n } } };
    } }, "open-row": { handler: (e) => {
      const { id: o, nested: t } = e;
      return { action: "close-row", data: { id: o, nested: t }, source: { action: "open-row", data: e } };
    } }, "close-row": { handler: (e) => {
      const { id: o, nested: t } = e;
      return { action: "open-row", data: { id: o, nested: t }, source: { action: "close-row", data: e } };
    } } };
  }
  resetHistory() {
    this.undo = [], this.redo = [], this.progress = {}, this.resetStateHistory();
  }
  getPrev() {
    return this._previousValues;
  }
  setHandlers() {
    const e = this.getHandlers();
    for (const o in e) this.in.intercept(o, (t) => {
      if (!(t.eventSource === "undo" || t.eventSource === "redo" || t.skipUndo)) {
        if (de2.includes(o)) {
          (t.inProgress && !this.progress[o] || typeof t.inProgress != "boolean") && (le2.includes(o) && this.setPrev("flatData"), z2.includes(o) && this.setPrev("columns")), this.progress[o] = t.inProgress;
          return;
        }
        ce.includes(o) && this.setPrev("data"), z2.includes(o) && this.setPrev("columns");
      }
    }), this.in.on(o, (t) => {
      if (t.eventSource === "undo" || t.eventSource === "redo" || t.skipUndo || t.inProgress) return;
      const n = e[o].handler(t);
      n && this.addToHistory(n);
    });
  }
  setPrev(e) {
    this._previousValues[e] = D2(this.getState()[e]);
  }
  addToHistory(e) {
    this.undo.push(e), this.redo = [], this.setStateHistory();
  }
  handleUndo() {
    if (!this.undo.length) return;
    const e = this.undo.pop();
    this.redo.push({ ...e.source, source: e }), this.in.exec(e.action, { ...e.data, eventSource: "undo" }), this.setStateHistory();
  }
  handleRedo() {
    if (!this.redo.length) return;
    const e = this.redo.pop();
    this.undo.push({ ...e.source, source: e }), this.in.exec(e.action, { ...e.data, eventSource: "redo" }), this.setStateHistory();
  }
  resetStateHistory() {
    this.setState({ history: { undo: 0, redo: 0 } });
  }
  setStateHistory() {
    this.setState({ history: { undo: this.undo.length, redo: this.redo.length } });
  }
  getRow(e) {
    const { data: o } = this.getPrev();
    return this.getState().tree ? this.getTreeRow(o, e) : o.find((t) => t.id === e);
  }
  getTreeRow(e, o) {
    for (let t = 0; t < e.length; t++) {
      if (e[t].id === o) return e[t];
      if (e[t].data) {
        const n = this.getTreeRow(e[t].data, o);
        if (n) return n;
      }
    }
    return null;
  }
  getColumn(e) {
    const { columns: o } = this.getPrev();
    return o.find((t) => t.id === e);
  }
};
function fe2() {
  return true;
}
function A2(r, e) {
  return typeof r > "u" || r === null ? -1 : typeof e > "u" || e === null ? 1 : r === e ? 0 : r > e ? 1 : -1;
}
function ge2(r, e) {
  return -A2(r, e);
}
function pe(r, e) {
  if (typeof e.sort == "function") return function(t, n) {
    const i = e.sort(t, n);
    return r === "asc" ? i : -i;
  };
  const o = r === "asc" ? A2 : ge2;
  return function(t, n) {
    return o(y2(t, e), y2(n, e));
  };
}
function we(r, e) {
  if (!r || !r.length) return;
  const o = r.map((t) => {
    const n = e.find((i) => i.id == t.key);
    return pe(t.order, n);
  });
  return r.length === 1 ? o[0] : function(t, n) {
    for (let i = 0; i < o.length; i++) {
      const a = o[i](t, n);
      if (a !== 0) return a;
    }
    return 0;
  };
}
var C = 28;
var me2 = 20;
function xe2() {
  if (typeof document > "u") return "willow";
  const r = document.querySelector('[class^="wx"][class$="theme"]');
  return r ? r.className.substring(3, r.className.length - 6) : "willow";
}
function R2(r, e, o, t, n) {
  const i = document.createElement("div"), a = document.createElement("div"), s = document.body;
  n = n ? `${n}px` : "auto";
  let c2, l2;
  a.className = e, i.classList.add(`wx-${o}-theme`), i.style.cssText = `height:auto;position:absolute;top:0px;left:100px;overflow:hidden;width=${n};white-space:nowrap;`, i.appendChild(a), s.appendChild(i), typeof r != "object" && (r = [r]);
  for (let d = 0; d < r.length; d++) {
    a.innerText = r[d] + "";
    const h = i.getBoundingClientRect(), u = Math.ceil(h.width) + (t && t.length ? t[d] : 0), f = Math.ceil(h.height);
    c2 = Math.max(c2 || 0, u), l2 = Math.max(l2 || 0, f);
  }
  return i.remove(), { width: c2, height: l2 };
}
function L(r, e, o, t, n) {
  const i = [];
  for (let a = 0; a < r.length; a++) {
    const s = r[a][e], c2 = s.length;
    for (let l2 = 0; l2 < c2; l2++) {
      const { text: d, vertical: h, collapsed: u, rowspan: f, css: p } = s[l2];
      if (!d) {
        i[l2] = Math.max(i[l2] || 0, t);
        continue;
      }
      let g = 0;
      if (h && !u) {
        let w = `wx-measure-cell-${e}`;
        if (w += p ? ` ${p}` : "", g = R2(d, w, n).width, (f > 1 || !s[l2 + 1]) && o > l2 + 1) {
          const x2 = f || o - l2, m = i.slice(l2, l2 + x2).reduce((v, _2) => v + _2, 0);
          if (m < g) {
            const v = Math.ceil((g - m) / x2);
            for (let _2 = l2; _2 < l2 + x2; _2++) i[_2] = (i[_2] || t) + v;
          }
          continue;
        }
      }
      i[l2] = Math.max(i[l2] || t, g);
    }
  }
  return i;
}
function ye2(r, e, o) {
  const t = [], n = [];
  let i = "wx-measure-cell-body";
  i += r.css ? ` ${r.css}` : "";
  for (let a = 0; a < e.length; a++) {
    const s = e[a], c2 = S2(s, r);
    c2 && (t.push(c2), r.treetoggle ? n.push(e[a].$level * C + (e[a].$count ? C : 0) + (r.draggable ? C : 0)) : r.draggable && n.push(C));
  }
  return R2(t, i, o, n).width;
}
function _e2(r, e) {
  const o = "wx-measure-cell-header", t = r.sort ? me2 : 0;
  let n = r.header;
  if (typeof n == "string") return R2(n, o, e).width + t;
  let i;
  Array.isArray(n) || (n = [n]);
  for (let a = 0; a < n.length; a++) {
    const s = n[a], c2 = typeof s == "string" ? s : s.text, l2 = o + (typeof s == "string" ? "" : ` ${s.css}`);
    let d = R2(c2, l2, e).width;
    a === n.length - 1 && (d += t), i = Math.max(i || 0, d);
  }
  return i;
}
var Se = { text: (r, e) => r ? r.toString().toLowerCase().indexOf(e.toLowerCase()) !== -1 : !e, richselect: (r, e) => typeof e != "number" && !e ? true : r == e, datepicker: (r, e) => e ? r && be(r, e) : true };
function $(r) {
  return Se[r];
}
function N(r, e) {
  const o = [];
  for (const t in r) {
    const n = e.find((c2) => c2.id == t), { config: i, type: a } = n.header.find((c2) => c2.filter).filter, s = r[t];
    o.push((c2) => {
      const l2 = y2(c2, n);
      return i?.handler ? i.handler(l2, s) : $(a)(l2, s);
    });
  }
  return (t) => {
    for (let n = 0; n < o.length; n++) if (!o[n](t)) return false;
    return true;
  };
}
function be(r, e) {
  return r.getFullYear() === e.getFullYear() && r.getMonth() === e.getMonth() && r.getDate() === e.getDate();
}
var ve = class extends W2 {
  in;
  _router;
  _branches;
  _xlsxWorker;
  _historyManager;
  constructor(e) {
    super({ writable: e, async: false });
    const o = { rowHeight: 37, columnWidth: 160, headerHeight: 36, footerHeight: 36 };
    this._router = new U(super.setState.bind(this), [{ in: ["columns", "sizes", "_skin"], out: ["_columns", "_sizes"], exec: (n) => {
      const { columns: i, sizes: a, _skin: s } = this.getState(), c2 = this.copyColumns(i), l2 = c2.reduce((u, f) => Math.max(f.header.length, u), 0), d = c2.reduce((u, f) => Math.max(f.footer.length, u), 0);
      c2.forEach(this.setCollapsibleColumns);
      const h = this.normalizeSizes(c2, a, l2, d, s);
      for (let u = 0; u < c2.length; u++) this.normalizeColumns(c2, u, "header", l2, h), this.normalizeColumns(c2, u, "footer", d, h);
      this.setState({ _columns: c2, _sizes: h }, n);
    } }, { in: ["data", "tree", "_filterIds"], out: ["flatData", "_rowHeightFromData"], exec: (n) => {
      const { data: i, tree: a, dynamic: s, _filterIds: c2 } = this.getState(), l2 = c2 && new Set(c2), d = a ? this.flattenRows(i, [], c2) : l2 ? i.filter((u) => l2.has(u.id)) : i, h = !s && d.some((u) => u.rowHeight);
      this.setState({ flatData: d, _rowHeightFromData: h }, n);
    } }], { sizes: (n) => ({ ...o, ...n }) });
    const t = this.in = new K2();
    t.on("close-editor", ({ ignore: n }) => {
      const { editor: i } = this.getState();
      i && (n || t.exec("update-cell", i), this.setState({ editor: null }));
    }), t.on("open-editor", ({ id: n, column: i }) => {
      let a = this.getState().editor;
      a && t.exec("close-editor", {});
      const s = this.getRow(n), c2 = i ? this.getColumn(i) : this.getNextEditor(s);
      if (c2?.editor) {
        let l2 = c2.editor;
        if (typeof l2 == "function" && (l2 = l2(s, c2)), !l2) return;
        a = { column: c2.id, id: n, value: y2(s, c2) ?? "", renderedValue: S2(s, c2), type: l2.type || l2 }, typeof l2 == "object" && l2.config && (a.config = l2.config, l2.config.options && (a.options = l2.config.options)), c2.options && !a.options && (a.options = c2.options), this.setState({ editor: a });
      }
    }), t.on("editor", ({ value: n }) => {
      let i = this.getState().editor;
      if (i) {
        i = { ...i }, i.value = n;
        const a = this.getColumn(i.column), s = { ...this.getRow(i.id) };
        I(s, a, n), i.renderedValue = S2(s, a), this.setState({ editor: i });
      }
    }), t.on("add-row", (n) => {
      const i = this.getState();
      let { data: a } = i;
      const { select: s, _filterIds: c2 } = i, { row: l2, before: d, after: h, select: u } = n;
      if (n.id = l2.id = n.id || l2.id || E(), d || h) {
        const p = d || h, g = a.findIndex((w) => w.id === p);
        a = [...a], a.splice(g + (h ? 1 : 0), 0, n.row);
      } else a = [...a, n.row];
      const f = { data: a };
      c2 && (f._filterIds = [...c2, n.id]), this.setState(f), !(typeof u == "boolean" && !u) && (u || s) && t.exec("select-row", { id: l2.id, show: true });
    }), t.on("delete-row", (n) => {
      const { data: i, selectedRows: a, focusCell: s, editor: c2 } = this.getState(), { id: l2 } = n, d = { data: i.filter((h) => h.id !== l2) };
      this.isSelected(l2) && (d.selectedRows = a.filter((h) => h !== l2)), c2?.id === l2 && (d.editor = null), this.setState(d), s?.row === l2 && this.in.exec("focus-cell", { eventSource: "delete-row" });
    }), t.on("update-cell", (n) => {
      const i = this.getState();
      let { data: a } = i;
      a = [...a];
      const { tree: s } = i, { id: c2, column: l2, value: d } = n, h = this.getColumn(l2);
      if (s) {
        const u = { ...this._branches[c2] };
        I(u, h, d);
        const f = this.updateTreeRow(u);
        u.$parent === 0 && (a = f);
      } else {
        const u = a.findIndex((p) => p.id === c2), f = { ...a[u] };
        I(f, h, d), a[u] = f;
      }
      this.setState({ data: a });
    }), t.on("update-row", (n) => {
      let { data: i } = this.getState();
      const { id: a, row: s } = n, c2 = i.findIndex((l2) => l2.id === a);
      i = [...i], i[c2] = { ...i[c2], ...s }, this.setState({ data: i });
    }), t.on("select-row", ({ id: n, toggle: i, range: a, mode: s, show: c2, column: l2 }) => {
      const d = this.getState(), { focusCell: h } = d;
      let { selectedRows: u } = d;
      if (u.length || (a = i = false), a) {
        const { data: f } = this.getState();
        let p = f.findIndex((w) => w.id === u[u.length - 1]), g = f.findIndex((w) => w.id === n);
        p > g && ([p, g] = [g, p]), f.slice(p, g + 1).forEach((w) => {
          this.isSelected(w.id) || u.push(w.id);
        });
      } else if (i && this.isSelected(n)) {
        if (s === true) return;
        u = u.filter((f) => f !== n);
      } else if (i) {
        if (s === false) return;
        u.push(n);
      } else u = [n];
      this.setState({ selectedRows: [...u] }), h?.row !== n && this.in.exec("focus-cell", { eventSource: "select-row" }), c2 && this.in.exec("scroll", { row: n, column: l2 });
    }), this.in.on("focus-cell", (n) => {
      const { row: i, column: a, eventSource: s } = n, { _columns: c2, split: l2 } = this.getState();
      i && a ? (this.setState({ focusCell: { row: i, column: a } }), s !== "click" && ((!l2.left || c2.findIndex((d) => d.id === n.column) >= l2.left) && (!l2.right || c2.findIndex((d) => d.id === n.column) < c2.length - l2.right) ? this.in.exec("scroll", { row: i, column: a }) : this.in.exec("scroll", { row: i }))) : this.setState({ focusCell: null });
    }), t.on("resize-column", (n) => {
      const { id: i, auto: a, maxRows: s, inProgress: c2 } = n;
      if (c2 === false) return;
      let l2 = n.width || 0;
      const d = [...this.getState().columns], h = this.getColumn(i);
      if (a) {
        if (a === "data" || a === true) {
          const { flatData: u, _skin: f } = this.getState();
          let p = u.length;
          s && (p = Math.min(s, p));
          const g = u.slice(0, p);
          l2 = ye2(h, g, f);
        }
        if (a === "header" || a === true) {
          const { _skin: u } = this.getState();
          l2 = Math.max(_e2(h, u), l2);
        }
      }
      h.width = Math.max(17, l2), delete h.flexgrow, this.setState({ columns: d });
    }), t.on("hide-column", (n) => {
      const { id: i, mode: a } = n, s = [...this.getState().columns], c2 = this.getColumn(i), l2 = s.reduce((d, h) => d + (h.hidden ? 0 : 1), 0);
      !a || l2 > 1 ? (c2.hidden = !c2.hidden, this.setState({ columns: s })) : n.skipUndo = true;
    }), t.on("sort-rows", (n) => {
      const { key: i, add: a, sort: s } = n, c2 = this.getState(), { columns: l2, data: d, tree: h } = c2;
      if (s) {
        const m = [...d];
        m.sort(s), this.setState({ data: m });
        return;
      }
      const { order: u = "asc" } = n;
      let f = c2.sortMarks;
      const p = Object.keys(f), g = p.length;
      !a || !g || g === 1 && f[i] ? f = { [i]: { order: u } } : (g === 1 && (f[p[0]] = { ...f[p[0]], index: 0 }), f = { ...f, [i]: { order: u, index: typeof a == "number" ? a : f[i]?.index ?? g } });
      const w = Object.keys(f).sort((m, v) => f[m].index - f[v].index).map((m) => ({ key: m, order: f[m].order }));
      this.setState({ sortMarks: f });
      const x2 = we(w, l2);
      if (x2) {
        const m = [...d];
        h ? this.sortTree(m, x2) : m.sort(x2), this.setState({ data: m });
      }
    }), t.on("filter-rows", (n) => {
      const { value: i, key: a, filter: s } = n;
      if (!Object.keys(n).length) {
        this.setState({ filterValues: {}, _filterIds: null });
        return;
      }
      const c2 = this.getState(), { data: l2, tree: d, _columns: h } = c2;
      let u = c2.filterValues;
      const f = {};
      a && (u = { ...u, [a]: i }, f.filterValues = u);
      const p = s ?? N(u, h);
      let g = [];
      d ? g = this.filterTree(l2, p, g) : l2.forEach((w) => {
        p(w) && g.push(w.id);
      }), f._filterIds = g, this.setState(f);
    }), t.on("collapse-column", (n) => {
      const { id: i, row: a, mode: s } = n, c2 = [...this.getState().columns], l2 = this.getColumn(i).header, d = Array.isArray(l2) ? l2[a] : l2;
      typeof d == "object" && (d.collapsed = s ?? !d.collapsed, this.setState({ columns: c2 }));
    }), t.on("move-item", (n) => {
      const { id: i, inProgress: a } = n;
      let { target: s, mode: c2 = "after" } = n;
      const { data: l2, flatData: d, tree: h } = this.getState(), u = d.findIndex((g) => g.id === i);
      let f;
      if (c2 === "up" || c2 === "down") {
        if (c2 === "up") {
          if (u === 0) return;
          f = u - 1, c2 = "before";
        } else if (c2 === "down") {
          if (u === d.length - 1) return;
          f = u + 1, c2 = "after";
        }
        s = d[f] && d[f].id;
      } else f = d.findIndex((g) => g.id === s);
      if (u === -1 || f === -1 || a === false) return;
      let p;
      h || (p = this.moveItem(i, s, l2, c2)), this.setState({ data: h ? this.normalizeTreeRows(p) : p });
    }), t.on("copy-row", (n) => {
      const { id: i, target: a, mode: s = "after" } = n, c2 = this.getState(), { flatData: l2, _filterIds: d } = c2;
      let { data: h } = c2;
      const u = this.getRow(i);
      if (!u) return;
      const f = { ...u, id: E() };
      n.id = f.id;
      const p = l2.findIndex((w) => w.id === a);
      if (p === -1) return;
      h.splice(p + (s === "after" ? 1 : 0), 0, f), h = [...h];
      const g = { data: h };
      d && (g._filterIds = [...d, f.id]), this.setState(g);
    }), t.on("open-row", (n) => {
      const { id: i, nested: a } = n;
      this.toggleBranch(i, true, a);
    }), t.on("close-row", (n) => {
      const { id: i, nested: a } = n;
      this.toggleBranch(i, false, a);
    }), t.on("export-data", (n) => new Promise((i, a) => {
      const s = n.format || "csv", c2 = `${n.fileName || "data"}.${s}`;
      if (s === "csv") {
        const l2 = Z(this.getState(), n.csv || {});
        n.download !== false ? q2(new Blob(["\uFEFF" + l2], { type: "text/csv" }), c2) : n.result = l2, i(true);
      } else a();
    })), t.on("hotkey", ({ key: n, event: i, isInput: a }) => {
      switch (n) {
        case "arrowup": {
          const { flatData: s, focusCell: c2, select: l2 } = this.getState();
          if (i.preventDefault(), a) return;
          const d = c2 ? c2.column : this._getFirstVisibleColumn()?.id, h = c2 ? this.getPrevRow(c2.row)?.id : s[s.length - 1]?.id;
          d && h && (this.in.exec("focus-cell", { row: h, column: d, eventSource: "key" }), l2 && this.in.exec("select-row", { id: h }));
          break;
        }
        case "arrowdown": {
          const { flatData: s, focusCell: c2, select: l2 } = this.getState();
          if (i.preventDefault(), a) return;
          const d = c2 ? c2.column : this._getFirstVisibleColumn()?.id, h = c2 ? this.getNextRow(c2.row)?.id : s[0]?.id;
          d && h && (this.in.exec("focus-cell", { row: h, column: d, eventSource: "key" }), l2 && this.in.exec("select-row", { id: h }));
          break;
        }
        case "arrowright": {
          const { focusCell: s } = this.getState();
          if (a) return;
          if (i.preventDefault(), s) {
            const c2 = this.getNextColumn(s.column, true)?.id;
            c2 && this.in.exec("focus-cell", { row: s.row, column: c2, eventSource: "key" });
          }
          break;
        }
        case "arrowleft": {
          const { focusCell: s } = this.getState();
          if (a) return;
          if (i.preventDefault(), s) {
            const c2 = this.getPrevColumn(s.column, true)?.id;
            c2 && this.in.exec("focus-cell", { row: s.row, column: c2, eventSource: "key" });
          }
          break;
        }
        case "tab": {
          const { editor: s, focusCell: c2, select: l2 } = this.getState();
          if (s) {
            i.preventDefault();
            const d = s.column;
            let h = s.id, u = this.getNextEditor(this.getRow(h), this.getColumn(d));
            if (!u) {
              const f = this.getNextRow(h);
              f && (h = f.id, u = this.getNextEditor(f));
            }
            u && (this.in.exec("open-editor", { id: h, column: u.id }), this.in.exec("focus-cell", { row: h, column: u.id, eventSource: "key" }), l2 && !this.isSelected(h) && this.in.exec("select-row", { id: h }));
          } else c2 && this.in.exec("focus-cell", { eventSource: "key" });
          break;
        }
        case "shift+tab": {
          const { editor: s, focusCell: c2, select: l2 } = this.getState();
          if (s) {
            i.preventDefault();
            const d = s.column;
            let h = s.id, u = this.getPrevEditor(this.getRow(h), this.getColumn(d));
            if (!u) {
              const f = this.getPrevRow(h);
              f && (h = f.id, u = this.getPrevEditor(f));
            }
            u && (this.in.exec("open-editor", { id: h, column: u.id }), this.in.exec("focus-cell", { row: h, column: u.id, eventSource: "key" }), l2 && !this.isSelected(h) && this.in.exec("select-row", { id: h }));
          } else c2 && this.in.exec("focus-cell", { eventSource: "key" });
          break;
        }
        case "escape": {
          const { editor: s } = this.getState();
          s && (this.in.exec("close-editor", { ignore: s.type != "multiselect" }), this.in.exec("focus-cell", { row: s.id, column: s.column, eventSource: "key" }));
          break;
        }
        case "f2": {
          const { editor: s, focusCell: c2 } = this.getState();
          !s && c2 && this.in.exec("open-editor", { id: c2.row, column: c2.column });
          break;
        }
        case "enter": {
          const { focusCell: s, tree: c2 } = this.getState();
          if (!a && c2 && s && this.getColumn(s.column).treetoggle) {
            const l2 = this.getRow(s.row);
            if (!l2.data) return;
            this.in.exec(l2.open ? "close-row" : "open-row", { id: s.row, nested: true });
          }
          break;
        }
        case "home": {
          const { editor: s, focusCell: c2 } = this.getState();
          if (!s && c2) {
            i.preventDefault();
            const l2 = this._getFirstVisibleColumn()?.id;
            this.in.exec("focus-cell", { row: c2.row, column: l2, eventSource: "key" });
          }
          break;
        }
        case "ctrl+home": {
          const { editor: s, focusCell: c2, flatData: l2, select: d } = this.getState();
          if (!s && c2) {
            i.preventDefault();
            const h = l2[0]?.id, u = this._getFirstVisibleColumn()?.id;
            h && u && (this.in.exec("focus-cell", { row: h, column: u, eventSource: "key" }), d && !this.isSelected(h) && this.in.exec("select-row", { id: h }));
          }
          break;
        }
        case "end": {
          const { editor: s, focusCell: c2 } = this.getState();
          if (!s && c2) {
            i.preventDefault();
            const l2 = this._getLastVisibleColumn()?.id, d = c2.row;
            this.in.exec("focus-cell", { row: d, column: l2, eventSource: "key" });
          }
          break;
        }
        case "ctrl+end": {
          const { editor: s, focusCell: c2, flatData: l2, select: d } = this.getState();
          if (!s && c2) {
            i.preventDefault();
            const h = l2.at(-1).id, u = this._getLastVisibleColumn()?.id;
            h && u && (this.in.exec("focus-cell", { row: h, column: u, eventSource: "key" }), d && !this.isSelected(h) && this.in.exec("select-row", { id: h }));
          }
          break;
        }
        case "ctrl+z": {
          this.in.exec("undo", {});
          break;
        }
        case "ctrl+y": {
          this.in.exec("redo", {});
          break;
        }
      }
    }), t.on("scroll", (n) => {
      const { _columns: i, split: a, _sizes: s, flatData: c2, dynamic: l2, _rowHeightFromData: d } = this.getState();
      let h = -1, u = -1, f = 0, p = 0;
      if (n.column) {
        h = 0;
        const g = i.findIndex((w) => w.id === n.column);
        f = i[g].width;
        for (let w = a.left ?? 0; w < g; w++) {
          const x2 = i[w];
          x2.hidden || (h += x2.width);
        }
      }
      if (n.row && !l2) {
        const g = c2.findIndex((w) => w.id === n.row);
        g >= 0 && (d ? (u = c2.slice(0, g).reduce((w, x2) => w + (x2.rowHeight || s.rowHeight), 0), p = c2[g].rowHeight) : u = s.rowHeight * g);
      }
      this.setState({ scroll: { top: u, left: h, width: f, height: p || s.rowHeight } });
    }), t.on("print", (n) => {
      const i = re2(n);
      this.setState({ _print: i }), this.setStateAsync({ _print: null });
    }), t.on("undo", () => {
      this._historyManager?.handleUndo();
    }), t.on("redo", () => {
      this._historyManager?.handleRedo();
    }), this.initOnce();
  }
  getXlsxWorker(e) {
    if (!this._xlsxWorker) {
      const o = window.URL.createObjectURL(new Blob([`importScripts('${e}');`], { type: "text/javascript" }));
      this._xlsxWorker = new Promise((t) => {
        const n = new Worker(o);
        n.addEventListener("message", (i) => {
          i.data.type === "init" && t(n);
        });
      });
    }
    return this._xlsxWorker;
  }
  initOnce() {
    const e = { sortMarks: {}, _filterIds: null, data: [], filterValues: {}, scroll: null, editor: null, focusCell: null, _print: null, history: { undo: 0, redo: 0 }, search: null };
    this._router.init(e);
  }
  init(e) {
    e.hasOwnProperty("_skin") && !e._skin && (e._skin = xe2()), e.columns && e.columns.forEach((o) => {
      o.options && (o.optionsMap = new Map(o.options.map((t) => [t.id, t.label])));
    }), k(this.getState().data, e.data) || (e.tree ? e.data = this.normalizeTreeRows(e.data) : e.data = this.normalizeRows(e.data), this.setState({ _filterIds: null, filterValues: {}, sortMarks: {}, search: null }), this._historyManager && this._historyManager.resetHistory()), e.tree && (e.undo = false, e.reorder = false), e.split?.right && (e.split.right = 0), e.undo && !this._historyManager && (this._historyManager = new he2(this.in, this.getState.bind(this), this.setState.bind(this))), this._router.init({ ...e });
  }
  setState(e, o) {
    return this._router.setState(e, o);
  }
  setStateAsync(e) {
    this._router.setStateAsync(e);
  }
  getRow(e) {
    const { tree: o } = this.getState();
    return o ? this._branches[e] : this.getState().data.find((t) => t.id === e);
  }
  getRowIndex(e, o) {
    return o || (o = this.getState().flatData), o.findIndex((t) => t.id === e);
  }
  getNextRow(e) {
    const o = this.getState().flatData, t = this.getRowIndex(e, o);
    return o[t + 1];
  }
  getPrevRow(e) {
    const o = this.getState().flatData, t = this.getRowIndex(e, o);
    return o[t - 1];
  }
  getColumn(e) {
    return this.getState().columns.find((o) => o.id === e);
  }
  getNextColumn(e, o) {
    const t = this.getState()._columns, n = t.findIndex((i) => i.id === e);
    return o ? this._getFirstVisibleColumn(n + 1) : t[n + 1];
  }
  getPrevColumn(e, o) {
    const t = this.getState()._columns, n = t.findIndex((i) => i.id === e);
    return o ? this._getLastVisibleColumn(n - 1) : t[n - 1];
  }
  _getFirstVisibleColumn(e) {
    const o = this.getState()._columns;
    let t = e ?? 0;
    for (; t < o.length && (o[t]?.hidden || o[t]?.collapsed); ) t++;
    return o[t];
  }
  _getLastVisibleColumn(e) {
    const o = this.getState()._columns;
    let t = e ?? o.length - 1;
    for (; t < o.length && (o[t]?.hidden || o[t]?.collapsed); ) t--;
    return o[t];
  }
  isCellEditable(e, o) {
    const { editor: t, hidden: n } = o;
    return !t || n ? false : typeof t == "function" ? t(e, o) : true;
  }
  getNextEditor(e, o) {
    let t = this.getState().columns;
    if (o) {
      const n = t.findIndex((i) => i.id === o.id);
      t = t.slice(n + 1);
    }
    return t.find((n) => this.isCellEditable(e, n));
  }
  getPrevEditor(e, o) {
    let t = this.getState().columns;
    if (o) {
      const n = t.findLastIndex((i) => i.id === o.id);
      t = t.slice(0, n);
    }
    return t.findLast((n) => this.isCellEditable(e, n));
  }
  toggleBranch(e, o, t) {
    let n = this._branches[e], { data: i } = this.getState();
    if (i = [...i], e !== 0) {
      n = { ...n, open: o };
      const a = this.updateTreeRow(n);
      n.$parent === 0 && (i = a);
    }
    t && n.data?.length && n.data.forEach((a) => {
      const s = this.toggleKids(a, o, t);
      e === 0 && (i = s);
    }), this.setState({ data: i });
  }
  toggleKids(e, o, t) {
    e = { ...e, open: o };
    const n = this.updateTreeRow(e);
    return t && e.data?.length && e.data.forEach((i) => {
      this.toggleKids(i, o, t);
    }), n;
  }
  updateTreeRow(e) {
    const o = e.id;
    this._branches[o] = e;
    const t = this._branches[e.$parent], n = t.data.findIndex((i) => i.id === o);
    return t.data = [...t.data], t.data[n] = e, t.data;
  }
  isSelected(e) {
    return this.getState().selectedRows.indexOf(e) !== -1;
  }
  findAndRemove(e, o) {
    for (let t = 0; t < e.length; t++) {
      if (e[t].id === o) return e.splice(t, 1)[0];
      if (e[t].data) {
        const n = [...e[t].data], i = this.findAndRemove(n, o);
        if (i) return e[t] = { ...e[t], data: n }, i;
      }
    }
    return null;
  }
  insertItem(e, o, t, n) {
    for (let i = 0; i < e.length; i++) {
      if (e[i].id === o) {
        const a = e[i], s = n === "before" ? i : i + 1;
        if (a.data) {
          if (n === "before") {
            const c2 = i > 0 ? e[i - 1] : null;
            return c2?.data && c2.open ? e[i - 1] = { ...c2, data: [...c2.data, t] } : e.splice(s, 0, t), true;
          } else if (a.open) return e[i] = { ...a, data: [t, ...a.data] }, true;
        }
        return e.splice(s, 0, t), true;
      }
      if (e[i].data && (e[i] = { ...e[i], data: [...e[i].data] }, this.insertItem(e[i].data, o, t, n))) return true;
    }
    return false;
  }
  moveItem(e, o, t, n) {
    const i = [...t], a = this.findAndRemove(i, e);
    return this.insertItem(i, o, a, n), i;
  }
  copyColumns(e) {
    const o = [];
    for (let t = 0; t < e.length; t++) {
      const n = { ...e[t] };
      this.copyHeaderFooter(n, "header"), this.copyHeaderFooter(n, "footer"), o[t] = n;
    }
    return o;
  }
  copyHeaderFooter(e, o) {
    let t = e[o];
    t = Array.isArray(t) ? [...t] : [t], t.forEach((n, i) => {
      t[i] = typeof n == "string" ? { text: n } : { ...n };
    }), e[o] = t;
  }
  setCollapsibleColumns(e, o, t) {
    let n = e.header;
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      if (a.collapsible && a.collapsed) {
        if (a.collapsible !== "first") {
          e.collapsed = true, e.width = 36, a.vertical = true;
          const c2 = n.length - i;
          n = n.slice(0, i + 1), n[i].rowspan = c2;
        }
        const s = a.colspan;
        if (s) {
          const c2 = n[i + 1];
          let l2 = 1;
          c2 && c2.colspan && !c2.collapsed && (l2 = c2.colspan);
          for (let d = l2; d < s; d++) {
            const h = t[o + d];
            h && (h.hidden = true);
          }
        }
      }
    }
  }
  normalizeColumns(e, o, t, n, i) {
    const a = e[o];
    a.width || (a.width = a.flexgrow ? 17 : i.columnWidth), a._colindex = o + 1;
    const s = a[t], c2 = i[`${t}RowHeights`];
    for (let l2 = 0; l2 < n; l2++) {
      const d = s[l2];
      d.id = a.id, l2 === s.length - 1 && (d.rowspan = d.rowspan ? Math.min(d.rowspan, n - l2) : n - l2);
      for (let h = 1; h < d.rowspan; h++) {
        s.splice(l2 + h, 0, { _hidden: true });
        for (let u = 1; u < d.colspan; u++) e[o + u][t].splice(l2 + h, 0, {});
      }
      if (d.rowspan) {
        const h = (d.rowspan === n ? c2 : c2.slice(l2, d.rowspan + l2)).reduce((u, f) => u + f, 0);
        d.height = h, l2 + d.rowspan != n && d.height--;
      }
      if (d.colspan) {
        let h = a.width, u = a.flexgrow || 0;
        const f = d.colspan;
        for (let p = 1; p < f; p++) {
          const g = e[o + p];
          g && (g.hidden ? d.colspan -= 1 : g.flexgrow ? u += g.flexgrow : h += g.width || i.columnWidth), u ? d.flexgrow = u : d.width = h;
        }
      } else d.width = a.width, d.flexgrow = a.flexgrow;
      t === "header" && d.filter && typeof d.filter == "string" && (d.filter = { type: d.filter });
    }
    s.length > n && (s.length = n), a[t] = s;
  }
  normalizeRows(e) {
    for (let o = 0; o < e.length; o++) e[o].id || (e[o].id = E());
    return e;
  }
  normalizeTreeRows(e, o, t) {
    return !o && !t && (this._branches = { 0: { data: e } }), e.forEach((n) => {
      n.id || (n.id = E()), n.$level = o || 0, n.$parent = t || 0, this._branches[n.id] = n, n.data && (n.data.length ? (n.$count = n.data.length, this.normalizeTreeRows(n.data, n.$level + 1, n.id)) : (delete n.data, delete n.$count, delete n.open));
    }), e;
  }
  sortTree(e, o) {
    e.sort(o), e.forEach((t) => {
      t.data && this.sortTree(t.data, o);
    });
  }
  filterTree(e, o, t) {
    return e.forEach((n) => {
      o(n) && t.push(n.id), n.data && this.filterTree(n.data, o, t);
    }), t;
  }
  flattenRows(e, o, t) {
    const n = o;
    return e.forEach((i) => {
      (!t || t.includes(i.id)) && n.push(i), i.data?.length && i.open !== false && this.flattenRows(i.data, n, t);
    }), n;
  }
  createFilter(e) {
    const { _columns: o } = this.getState(), t = [];
    for (const n in e) {
      const i = o.find((l2) => l2.id == n), { config: a, type: s } = i.header.find((l2) => l2.filter).filter, c2 = e[n];
      t.push((l2) => {
        const d = y2(l2, i);
        return a?.handler ? a.handler(d, c2) : $(s)(d, c2);
      });
    }
    return (n) => {
      for (let i = 0; i < t.length; i++) if (!t[i](n)) return false;
      return true;
    };
  }
  searchRows(e, o) {
    e = e.trim().toLowerCase();
    const t = {};
    if (!e) return t;
    const { flatData: n, columns: i } = this.getState(), a = o ? i.filter((s) => o[s.id]) : i;
    return n.forEach((s) => {
      const c2 = {};
      a.forEach((l2) => {
        const d = S2(s, l2);
        String(d).toLowerCase().includes(e) && (c2[l2.id] = true);
      }), Object.keys(c2).length && (t[s.id] = c2);
    }), t;
  }
  normalizeSizes(e, o, t, n, i) {
    const a = L(e, "header", t, o.headerHeight, i), s = L(e, "footer", n, o.footerHeight, i), c2 = a.reduce((d, h) => d + h, 0), l2 = s.reduce((d, h) => d + h, 0);
    return { ...o, headerRowHeights: a, footerRowHeights: s, headerHeight: c2, footerHeight: l2 };
  }
};
var ke2 = (/* @__PURE__ */ new Date()).valueOf();
function E() {
  return "temp://" + ke2++;
}
function Ce(r, e = "data-id") {
  let o = r;
  for (!o.tagName && r.target && (o = r.target); o; ) {
    if (o.getAttribute && o.getAttribute(e)) return o;
    o = o.parentNode;
  }
  return null;
}
(/* @__PURE__ */ new Date()).valueOf();
var Re2 = class {
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  configure(r, e) {
    this.node = e;
    for (const o in r) if (r[o]) {
      const t = o.toLowerCase().replace(/[ ]/g, ""), n = r[o];
      this.store.set(t, n);
    }
  }
};
var b = [];
var Ee = { subscribe: (r) => {
  De();
  const e = new Re2();
  return b.push(e), r(e), () => {
    const o = b.findIndex((t) => t === e);
    o >= 0 && b.splice(o, 1);
  };
} };
var O = false;
function De() {
  O || (O = true, document.addEventListener("keydown", (r) => {
    if (b.length && (r.ctrlKey || r.altKey || r.metaKey || r.shiftKey || r.key.length > 1 || r.key === " ")) {
      const e = [];
      r.ctrlKey && e.push("ctrl"), r.altKey && e.push("alt"), r.metaKey && e.push("meta"), r.shiftKey && e.push("shift");
      let o = r.code.replace("Key", "").toLocaleLowerCase();
      r.key === " " && (o = "space"), e.push(o);
      const t = e.join("+");
      for (let n = b.length - 1; n >= 0; n--) {
        const i = b[n], a = i.store.get(t) || i.store.get(o);
        a && i.node.contains(r.target) && a(r, { key: t, evKey: o });
      }
    }
  }));
}
var Ie2 = { tab: true, "shift+tab": true, arrowup: true, arrowdown: true, arrowright: true, arrowleft: true, enter: true, escape: true, f2: true, home: true, end: true, "ctrl+home": true, "ctrl+end": true, "ctrl+z": true, "ctrl+y": true };
function Me2(r, { keys: e, exec: o }) {
  if (!e) return;
  function t(a) {
    const s = a.target;
    return s.tagName === "INPUT" || s.tagName === "TEXTAREA" || Ce(s, "data-header-id")?.classList.contains("wx-filter") || !!s.closest(".wx-cell.wx-editor");
  }
  const n = {};
  for (const a in e) {
    const s = e[a];
    typeof s < "u" && (typeof s == "function" ? n[a] = s : s && (n[a] = (c2) => {
      const l2 = t(c2);
      o({ key: a, event: c2, isInput: l2 });
    }));
  }
  const i = Ee.subscribe((a) => {
    a.configure(n, r);
  });
  return { destroy: () => {
    i();
  } };
}
function Te(r, e) {
  let o = null;
  e.scroll.subscribe((t) => {
    if (!t || t === o) return;
    o = t;
    const { left: n, top: i, height: a, width: s } = t, c2 = e.getHeight(), l2 = e.getWidth(), d = e.getScrollMargin();
    if (i >= 0) {
      const h = r.scrollTop;
      i < h ? r.scrollTop = i : i + a > h + c2 && (r.scrollTop = i - c2 + a);
    }
    if (n >= 0) {
      const h = r.scrollLeft;
      n < h ? r.scrollLeft = n : n + s > h + l2 - d && (r.scrollLeft = n - l2 + s + d);
    }
  });
}

// ../../common/temp/node_modules/.pnpm/@svar-ui+lib-react@1.3.0/node_modules/@svar-ui/lib-react/dist/index.js
var import_react3 = __toESM(require_react(), 1);
function useWritableProp2(propValue) {
  const [value, setValue] = (0, import_react3.useState)(propValue);
  const prevPropRef = (0, import_react3.useRef)(propValue);
  (0, import_react3.useEffect)(() => {
    if (prevPropRef.current !== propValue) {
      if (Array.isArray(prevPropRef.current) && Array.isArray(propValue) && prevPropRef.current.length === 0 && propValue.length === 0)
        return;
      prevPropRef.current = propValue;
      setValue(propValue);
    }
  }, [propValue]);
  return [value, setValue];
}
function useWritable(writable2, initialValue, name) {
  const [state, setState] = (0, import_react3.useState)(() => initialValue);
  if (!writable2) console.warn(`Writable ${name} is not defined`);
  (0, import_react3.useEffect)(() => {
    if (!writable2) return;
    const unsubscribe = writable2.subscribe((newValue) => {
      setState(() => newValue);
    });
    return unsubscribe;
  }, [writable2]);
  return state;
}
function useStore(store, name) {
  const s = store.getState();
  const r = store.getReactiveState();
  return useWritable(r[name], s[name], name);
}
function useWritableWithCounter(writable2, initialValue) {
  const state = (0, import_react3.useRef)(initialValue);
  state.current = initialValue;
  const [counter, setCounter] = (0, import_react3.useState)(1);
  (0, import_react3.useEffect)(() => {
    const unsubscribe = writable2.subscribe((newValue) => {
      state.current = newValue;
      setCounter((v) => v + 1);
    });
    return unsubscribe;
  }, [writable2]);
  return [state.current, counter];
}
function useStoreWithCounter(store, name) {
  const s = store.getState();
  const r = store.getReactiveState();
  return useWritableWithCounter(r[name], s[name]);
}
function styleObject(text) {
  const out = {};
  text.split(";").forEach((x2) => {
    const [k2, v] = x2.split(":");
    if (v) {
      let n = k2.trim();
      if (n.indexOf("-")) n = n.replace(/-([a-z])/g, (_2, c2) => c2.toUpperCase());
      out[n] = v.trim();
    }
  });
  return out;
}
function writable(value) {
  let _value = value;
  let listeners = [];
  const subscribe = (cb) => {
    listeners.push(cb);
    cb(_value);
  };
  const unsubscribe = (cb) => {
    listeners = listeners.filter((l2) => l2 !== cb);
  };
  const update = (cb) => {
    _value = cb(_value);
    listeners.forEach((l2) => l2(_value));
  };
  const set = (v) => {
    _value = v;
    listeners.forEach((l2) => l2(_value));
  };
  return {
    subscribe,
    unsubscribe,
    set,
    update
  };
}
function delegateEvent2(node, handlers, event) {
  function handleEvent(ev) {
    const node2 = locate2(ev);
    if (!node2) return;
    const id4 = getID(node2);
    if (typeof handlers === "function") return handlers(id4, ev);
    let action;
    let test = ev.target;
    while (test != node2) {
      action = test.dataset ? test.dataset.action : null;
      if (action) {
        if (handlers[action]) {
          handlers[action](id4, ev);
          return;
        }
      }
      test = test.parentNode;
    }
    if (handlers[event]) handlers[event](id4, ev);
  }
  return env2.addEvent(node, event, handleEvent);
}
function delegateClick2(node, handlers) {
  const result = [delegateEvent2(node, handlers, "click")];
  if (handlers.dblclick)
    result.push(delegateEvent2(node, handlers.dblclick, "dblclick"));
  return () => {
    result.forEach((r) => r());
  };
}

// ../../common/temp/node_modules/.pnpm/@svar-ui+react-grid@2.6.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@svar-ui/react-grid/dist/index.es.js
var ne2 = (0, import_react4.createContext)(null);
function Cn(t, e) {
  const n = new ResizeObserver((r) => {
    requestAnimationFrame(() => e(r[0].contentRect));
  });
  return n.observe(t.parentNode), {
    destroy() {
      n.disconnect();
    }
  };
}
var yt2 = 5;
var Sn = 700;
function Ke(t) {
  const e = t.getBoundingClientRect(), n = document.body, r = e.top + n.scrollTop - n.clientTop || 0, p = e.left + n.scrollLeft - n.clientLeft || 0;
  return {
    y: Math.round(r),
    x: Math.round(p),
    width: t.offsetWidth,
    height: t.offsetHeight
  };
}
function tt2(t, e) {
  const n = Ke(e);
  return { x: t.clientX - n.x, y: t.clientY - n.y };
}
function Rn(t, e) {
  const n = e.current;
  let r = null, p, x2, s = false, v = false;
  const f = document.createElement("DIV");
  f.className = "wx-drag-zone", f.setAttribute("tabindex", -1);
  function u() {
    clearTimeout(p), p = null;
  }
  function g(l2) {
    const H2 = locate2(l2);
    H2 && (r = {
      container: f,
      sourceNode: l2.target,
      from: getID(H2),
      pos: tt2(l2, t)
    }, x2 = r.pos, a(l2));
  }
  function a(l2) {
    if (!r) return;
    const H2 = r.pos = tt2(l2, t);
    if (!s) {
      if (!v && !l2?.target?.getAttribute("draggable-data") && Math.abs(x2.x - H2.x) < yt2 && Math.abs(x2.y - H2.y) < yt2)
        return;
      if (T2(l2) === false) return N2();
    }
    if (v) {
      const P2 = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft, G2 = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      r.targetNode = document.elementFromPoint(
        l2.pageX - P2,
        l2.pageY - G2
      );
    } else r.targetNode = l2.target;
    n.move && n.move(l2, r), f.style.left = -(r.offset ? r.offset.x : 0) + "px", f.style.top = r.pos.y + (r.offset ? r.offset.y : 0) + "px";
  }
  function b2(l2) {
    f.parentNode && f.parentNode.removeChild(f), f.innerHTML = "", s && n.end && n.end(l2, r), r = x2 = null, N2();
  }
  function D3(l2) {
    n.getReorder && !n.getReorder() || l2.button === 0 && (R3(l2), window.addEventListener("mousemove", C2), window.addEventListener("mouseup", d), g(l2));
  }
  function C2(l2) {
    a(l2);
  }
  function d(l2) {
    b2(l2);
  }
  function m(l2) {
    if (n.getReorder && !n.getReorder()) return;
    p = setTimeout(() => {
      v = true, g(l2.touches[0]);
    }, Sn), R3(l2);
    function H2() {
      p && u(), l2.target.removeEventListener("touchmove", h), l2.target.removeEventListener("touchend", H2), b2(l2);
    }
    l2.target.addEventListener("touchmove", h), l2.target.addEventListener("touchend", H2), t.addEventListener("contextmenu", y3);
  }
  function h(l2) {
    s ? (l2.preventDefault(), a(l2.touches[0])) : p && u();
  }
  function y3(l2) {
    if (s || p)
      return l2.preventDefault(), false;
  }
  function i(l2) {
    l2.preventDefault();
  }
  function R3(l2) {
    if (!n.getDraggableInfo) return;
    const { hasDraggable: H2 } = n.getDraggableInfo();
    (!H2 || l2.target.getAttribute("draggable-data")) && (document.body.style.userSelect = "none", document.body.style.webkitUserSelect = "none");
  }
  function T2(l2) {
    if (s = true, n.start) {
      if (n.start(l2, r) === false) return false;
      t.appendChild(f), document.body.style.cursor = "move";
    }
  }
  function N2(l2) {
    s = v = false, document.body.style.cursor = "", document.body.style.userSelect = "", document.body.style.webkitUserSelect = "", window.removeEventListener("mousemove", C2), window.removeEventListener("mouseup", d), l2 && (t.removeEventListener("mousedown", D3), t.removeEventListener("touchstart", m), t.removeEventListener("dragstart", i));
  }
  return t.addEventListener("mousedown", D3), t.addEventListener("touchstart", m), t.addEventListener("dragstart", i), {
    destroy() {
      N2(true);
    }
  };
}
var Nn = 4e-3;
function Dn() {
  return {
    dirX: 0,
    dirY: 0,
    scrollSpeedFactor: 1
  };
}
function Tn(t, e, n, r) {
  const { node: p, left: x2, top: s, bottom: v, sense: f, xScroll: u, yScroll: g } = r, a = tt2(t, p);
  n.scrollState || (n.scrollState = Dn());
  let b2 = 0, D3 = 0;
  a.x < x2 + f ? b2 = -1 : a.x > e.width - f && (b2 = 1), a.y < s + Math.round(f / 2) ? D3 = -1 : a.y > e.height - v - Math.round(f / 2) && (D3 = 1), (n.scrollState.dirX !== b2 || n.scrollState.dirY !== D3) && (Et(n), n.scrollState.dirX = b2, n.scrollState.dirY = D3), (u && n.scrollState.dirX !== 0 || g && n.scrollState.dirY !== 0) && kn(n, r, {
    x: n.scrollState.dirX,
    y: n.scrollState.dirY
  });
}
function kn(t, e, n) {
  t.autoScrollTimer || (t.autoScrollTimer = setTimeout(() => {
    t.activeAutoScroll = setInterval(
      En,
      15,
      t,
      e,
      n
    );
  }, 250));
}
function Et(t) {
  t.scrollSpeedFactor = 1, t.autoScrollTimer && (t.autoScrollTimer = clearTimeout(t.autoScrollTimer), t.activeAutoScroll = clearInterval(t.activeAutoScroll));
}
function En(t, e, n) {
  const { x: r, y: p } = n;
  t.scrollSpeedFactor += Nn, r !== 0 && Hn(t, e, r), p !== 0 && Ln(t, e, p);
}
function Ln(t, e, n) {
  const r = e.node.scrollTop;
  Lt2(
    r + Math.round(e.sense / 3) * t.scrollSpeedFactor * n,
    "scrollTop",
    e
  );
}
function Hn(t, e, n) {
  const r = e.node.scrollLeft;
  Lt2(
    r + Math.round(e.sense / 3) * t.scrollSpeedFactor * n,
    "scrollLeft",
    e
  );
}
function Lt2(t, e, n) {
  n.node[e] = t;
}
function Ye2(t, e, n, r, p, x2) {
  const s = {};
  return t && (s.width = `${t}px`, s.minWidth = `${t}px`), e && (s.flexGrow = e), x2 && (s.height = `${x2}px`), n && (s.position = "sticky", n.left && (s.left = `${r}px`), n.right && (s.right = `${p}px`)), s;
}
function Ht2(t, e, n) {
  let r = "";
  if (t.fixed)
    for (const p in t.fixed) {
      let x2 = t.fixed[p] === -1;
      !x2 && t.fixed.leftSize && e.colspan && (x2 = e.colspan + t._colindex - 1 === t.fixed.leftSize), r += x2 ? "wx-shadow " : "wx-fixed ";
    }
  return r += e.rowspan > 1 ? "wx-rowspan " : "", r += e.colspan > 1 ? "wx-colspan " : "", r += e.vertical ? "wx-vertical " : "", r += n ? n(t) + " " : "", r;
}
function $n(t) {
  const {
    row: e,
    column: n,
    cellStyle: r = null,
    columnStyle: p = null,
    children: x2
  } = t, [s, v] = useWritableProp2(t.focusable), f = (0, import_react4.useContext)(ne2), u = useStore(f, "focusCell"), g = useStore(f, "search"), a = useStore(f, "reorder"), b2 = (0, import_react4.useMemo)(
    () => g?.rows[e.id] && g.rows[e.id][n.id],
    [g, e.id, n.id]
  ), D3 = (0, import_react4.useMemo)(
    () => Ye2(
      n.width,
      n.flexgrow,
      n.fixed,
      n.left,
      n.right
    ),
    [n.width, n.flexgrow, n.fixed, n.left, n.right]
  );
  function C2(N2, l2) {
    let H2 = "wx-cell";
    return H2 += n.fixed ? " " + (n.fixed === -1 ? "wx-shadow" : "wx-fixed") : "", H2 += N2 ? " " + N2(n) : "", H2 += l2 ? " " + l2(e, n) : "", H2 += n.treetoggle ? " wx-tree-cell" : "", H2;
  }
  const d = (0, import_react4.useMemo)(
    () => C2(p, r),
    [p, r, n, e]
  ), m = (0, import_react4.useMemo)(() => typeof n.draggable == "function" ? n.draggable(e, n) !== false : n.draggable, [n, e]), h = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    h.current && s && u?.row === e.id && u?.column === n.id && h.current.focus();
  }, [u, s, e.id, n.id]);
  const y3 = (0, import_react4.useCallback)(() => {
    s && f.exec("focus-cell", {
      row: e.id,
      column: n.id,
      eventSource: "focus"
    });
  }, [f, s, e.id, n.id]);
  (0, import_react4.useEffect)(() => () => {
    s && u && (f.exec("focus-cell", { eventSource: "destroy" }), v(false));
  }, [f, v]);
  function i(N2) {
    const l2 = new RegExp(`(${g.value.trim()})`, "gi");
    return String(N2).split(l2).map((P2) => ({ text: P2, highlight: l2.test(P2) }));
  }
  const R3 = (0, import_react4.useMemo)(() => {
    const N2 = n.fixed && n.fixed.left === -1 || n.fixed.right === -1, l2 = n.fixed && n.fixed.right;
    return [
      d,
      N2 ? "wx-shadow" : "",
      l2 ? "wx-fixed-right" : ""
    ].filter(Boolean).join(" ");
  }, [d, n]), T2 = n.cell;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: "wx-TSCaXsGV " + R3,
      ref: h,
      onFocus: y3,
      style: D3,
      "data-row-id": setID(e.id),
      "data-col-id": setID(n.id),
      tabIndex: s ? "0" : "-1",
      role: "gridcell",
      "aria-colindex": n._colindex,
      "aria-readonly": n.editor ? void 0 : true,
      children: [
        a && n.draggable ? m ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "i",
          {
            "draggable-data": "true",
            className: "wx-TSCaXsGV wx-draggable wxi-drag"
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("i", { className: "wx-TSCaXsGV wx-draggable-stub" }) : null,
        n.treetoggle ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { marginLeft: `${e.$level * 28}px` } }),
          e.$count ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "i",
            {
              "data-action": "toggle-row",
              className: `wx-TSCaXsGV wx-table-tree-toggle wxi-menu-${e.open !== false ? "down" : "right"}`
            }
          ) : null
        ] }) : null,
        T2 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          T2,
          {
            api: f,
            row: e,
            column: n,
            onAction: ({ action: N2, data: l2 }) => f.exec(N2, l2)
          }
        ) : x2 ? x2() : b2 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: i(S2(e, n)).map(
          ({ highlight: N2, text: l2 }, H2) => N2 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("mark", { className: "wx-TSCaXsGV wx-search", children: l2 }, H2) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: l2 }, H2)
        ) }) : S2(e, n)
      ]
    }
  );
}
function vt2(t, e) {
  let n, r;
  function p(v) {
    n = v.clientX, t.style.opacity = 1, document.body.style.cursor = "ew-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", x2), window.addEventListener("mouseup", s), e && e.down && e.down(t);
  }
  function x2(v) {
    r = v.clientX - n, e && e.move && e.move(r);
  }
  function s() {
    t.style.opacity = "", document.body.style.cursor = "", document.body.style.userSelect = "", e && e.up && e.up(r), window.removeEventListener("mousemove", x2), window.removeEventListener("mouseup", s);
  }
  return t.addEventListener("mousedown", p), {
    destroy() {
      t.removeEventListener("mousedown", p);
    }
  };
}
function Mn({ filter: t, column: e, action: n, filterValue: r }) {
  function p({ value: x2 }) {
    n({ value: x2, key: e.id });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Ne,
    {
      ...t.config ?? {},
      value: r,
      onChange: p
    }
  );
}
function An({ filter: t, column: e, action: n, filterValue: r }) {
  const p = (0, import_react4.useContext)(ne2), x2 = useStore(p, "flatData"), s = (0, import_react4.useMemo)(
    () => t?.config?.options || e?.options || f(),
    [t, e, x2]
  ), v = (0, import_react4.useMemo)(() => t?.config?.template, [t]);
  function f() {
    const a = [];
    return x2.forEach((b2) => {
      const D3 = y2(b2, e);
      a.includes(D3) || a.push(D3);
    }), a.map((b2) => ({ id: b2, label: b2 }));
  }
  function u({ value: a }) {
    n({ value: a, key: e.id });
  }
  function g(a) {
    a.key !== "Tab" && a.preventDefault();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { width: "100%" }, onKeyDown: g, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    cn,
    {
      placeholder: "",
      clear: true,
      ...t?.config ?? {},
      options: s,
      value: r,
      onChange: u,
      children: (a) => v ? v(a) : a.label
    }
  ) });
}
function In({ filter: t, column: e, action: n, filterValue: r }) {
  function p({ value: x2 }) {
    n({ value: x2, key: e.id });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-aaaK5VYO", style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    zt,
    {
      placeholder: "",
      clear: true,
      ...t?.config ?? {},
      value: r,
      onChange: p
    }
  ) });
}
var zn = {
  text: Mn,
  richselect: An,
  datepicker: In
};
function Vn({ filter: t, column: e }) {
  const n = (0, import_react4.useContext)(ne2), r = useStore(n, "filterValues");
  function p(s) {
    n.exec("filter-rows", s);
  }
  const x2 = (0, import_react4.useMemo)(() => zn[t.type], [t.type]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    x2,
    {
      filter: t,
      column: e,
      action: p,
      filterValue: r[e.id]
    }
  );
}
function On(t) {
  const {
    cell: e,
    column: n,
    row: r,
    lastRow: p,
    sortRow: x2,
    columnStyle: s,
    bodyHeight: v,
    hasSplit: f
  } = t, u = (0, import_react4.useContext)(ne2), g = useStore(u, "sortMarks"), a = (0, import_react4.useMemo)(() => g ? g[n.id] : void 0, [g, n.id]), b2 = (0, import_react4.useRef)(), D3 = (0, import_react4.useCallback)(
    (E2) => {
      b2.current = e.flexgrow ? E2.parentNode.clientWidth : e.width;
    },
    [e.flexgrow, e.width]
  ), C2 = (0, import_react4.useCallback)(
    (E2, $2) => {
      u.exec("resize-column", {
        id: e.id,
        width: Math.max(1, (b2.current || 0) + E2),
        inProgress: $2
      });
    },
    [u, e.id]
  ), d = (0, import_react4.useCallback)((E2) => C2(E2, true), [C2]), m = (0, import_react4.useCallback)((E2) => C2(E2, false), [C2]), h = (0, import_react4.useCallback)(
    (E2) => {
      if (!n.sort || e.filter) return;
      let $2 = a?.order;
      $2 && ($2 = $2 === "asc" ? "desc" : "asc"), u.exec("sort-rows", { key: e.id, add: E2.ctrlKey || E2.metaKey, order: $2 });
    },
    [u, e.id, e.filter, n.sort, a?.order]
  ), y3 = (0, import_react4.useCallback)(
    (E2) => {
      E2 && E2.stopPropagation(), u.exec("collapse-column", { id: e.id, row: r });
    },
    [u, e.id, r]
  ), i = (0, import_react4.useCallback)(
    (E2) => {
      E2.key === "Enter" && y3();
    },
    [y3]
  ), R3 = (0, import_react4.useCallback)(
    (E2) => {
      E2.key === "Enter" && !e.filter && h(E2);
    },
    [h, e.filter]
  ), T2 = (0, import_react4.useMemo)(
    () => e.collapsed && n.collapsed,
    [e.collapsed, n.collapsed]
  ), N2 = (0, import_react4.useMemo)(
    () => T2 && !f && e.collapsible !== "header",
    [T2, f, e.collapsible]
  ), l2 = (0, import_react4.useMemo)(
    () => N2 ? { top: -v / 2, position: "absolute" } : {},
    [N2, v]
  ), H2 = (0, import_react4.useMemo)(
    () => Ye2(
      e.width,
      e.flexgrow,
      n.fixed,
      n.left,
      e.right ?? n.right,
      e.height + (T2 && N2 ? v : 0)
    ),
    [
      e.width,
      e.flexgrow,
      n.fixed,
      n.left,
      e.right,
      n.right,
      e.height,
      T2,
      N2,
      v
    ]
  ), P2 = (0, import_react4.useMemo)(
    () => Ht2(n, e, s),
    [n, e, s]
  ), G2 = (0, import_react4.useCallback)(() => Object.fromEntries(
    Object.entries(e).filter(([E2]) => E2 !== "cell")
  ), [e]), ae2 = `wx-cell ${P2} ${e.css || ""} wx-collapsed`, oe2 = [
    "wx-cell",
    P2,
    e.css || "",
    e.filter ? "wx-filter" : "",
    n.fixed && n.fixed.right ? "wx-fixed-right" : ""
  ].filter(Boolean).join(" "), V = (0, import_react4.useRef)(null);
  return (0, import_react4.useEffect)(() => {
    const E2 = V.current;
    if (!E2) return;
    const $2 = vt2(E2, { down: D3, move: d, up: m });
    return () => {
      typeof $2 == "function" && $2();
    };
  }, [D3, d, m, vt2]), T2 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: "wx-RsQD74qC " + ae2,
      style: H2,
      role: "button",
      "aria-label": `Expand column ${e.text || ""}`,
      "aria-expanded": !e.collapsed,
      tabIndex: 0,
      onKeyDown: i,
      onClick: y3,
      "data-header-id": setID(n.id),
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-RsQD74qC wx-text", style: l2, children: e.text || "" })
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: "wx-RsQD74qC " + oe2,
      style: H2,
      onClick: h,
      "data-header-id": setID(n.id),
      tabIndex: !e._hidden && n.sort && !e.filter ? 0 : void 0,
      role: "columnheader",
      "aria-colindex": e._colindex,
      "aria-colspan": e.colspan > 1 ? e.colspan : void 0,
      "aria-rowspan": e.rowspan > 1 ? e.rowspan : void 0,
      "aria-sort": !a?.order || e.filter ? "none" : a?.order === "asc" ? "ascending" : "descending",
      onKeyDown: R3,
      children: [
        e.collapsible ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: "wx-RsQD74qC wx-collapse",
            role: "button",
            "aria-label": e.collapsed ? "Expand column" : "Collapse column",
            "aria-expanded": !e.collapsed,
            tabIndex: 0,
            onKeyDown: i,
            onClick: y3,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "i",
              {
                className: `wx-RsQD74qC wxi-angle-${e.collapsed ? "down" : "right"}`
              }
            )
          }
        ) : null,
        e.cell ? (() => {
          const E2 = e.cell;
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            E2,
            {
              api: u,
              cell: G2(),
              column: n,
              row: r,
              onAction: ({ action: $2, data: fe3 }) => u.exec($2, fe3)
            }
          );
        })() : e.filter ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Vn, { filter: e.filter, column: n }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-RsQD74qC wx-text", children: e.text || "" }),
        n.resize && p && !e._hidden ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: "wx-RsQD74qC wx-grip",
            role: "presentation",
            "aria-label": "Resize column",
            ref: V,
            onClick: (E2) => E2.stopPropagation(),
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {})
          }
        ) : null,
        x2 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-RsQD74qC wx-sort", children: a ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          typeof a.index < "u" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-RsQD74qC wx-order", children: a.index + 1 }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "i",
            {
              className: `wx-RsQD74qC wxi-arrow-${a.order === "asc" ? "up" : "down"}`
            }
          )
        ] }) : null }) : null
      ]
    }
  );
}
function Kn({ cell: t, column: e, row: n, columnStyle: r }) {
  const p = (0, import_react4.useContext)(ne2), x2 = (0, import_react4.useMemo)(
    () => Ye2(
      t?.width,
      t?.flexgrow,
      e?.fixed,
      e?.left,
      t?.right ?? e?.right,
      t?.height
    ),
    [
      t?.width,
      t?.flexgrow,
      e?.fixed,
      e?.left,
      t?.right,
      e?.right,
      t?.height
    ]
  ), s = (0, import_react4.useMemo)(
    () => Ht2(e, t, r),
    [e, t, r]
  ), v = (0, import_react4.useCallback)(() => Object.fromEntries(
    Object.entries(t || {}).filter(([u]) => u !== "cell")
  ), [t]), f = `wx-6Sdi3Dfd wx-cell ${s || ""} ${t?.css || ""}` + (e?.fixed && e?.fixed.right ? " wx-fixed-right" : "");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: f, style: x2, children: !e?.collapsed && !t?.collapsed ? t?.cell ? import_react4.default.createElement(t.cell, {
    api: p,
    cell: v(),
    column: e,
    row: n,
    onAction: ({ action: u, data: g }) => p.exec(u, g)
  }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-6Sdi3Dfd wx-text", children: t?.text || "" }) : null });
}
function bt2({
  deltaLeft: t,
  contentWidth: e,
  columns: n,
  type: r = "header",
  columnStyle: p,
  bodyHeight: x2
}) {
  const s = (0, import_react4.useContext)(ne2), v = useStore(s, "_sizes"), f = useStore(s, "split"), u = (0, import_react4.useMemo)(() => v?.[`${r}RowHeights`], [v, r]), g = (0, import_react4.useMemo)(() => {
    let d = [];
    if (n && n.length) {
      const m = n[0][r].length;
      for (let h = 0; h < m; h++) {
        let y3 = 0;
        d.push([]), n.forEach((i, R3) => {
          const T2 = { ...i[r][h] };
          if (y3 || d[h].push(T2), T2.colspan > 1) {
            if (y3 = T2.colspan - 1, !fe2() && i.right) {
              let N2 = i.right;
              for (let l2 = 1; l2 < T2.colspan; l2++)
                N2 -= n[R3 + l2].width;
              T2.right = N2;
            }
          } else y3 && y3--;
        });
      }
    }
    return d;
  }, [n, r]), a = (0, import_react4.useMemo)(() => f?.left || f?.right, [f]);
  function b2(d) {
    return n.find((m) => m.id === d);
  }
  function D3(d, m) {
    let h = m;
    return d.rowspan && (h += d.rowspan - 1), h === g.length - 1;
  }
  function C2(d, m, h) {
    if (!h.sort) return false;
    for (let y3 = g.length - 1; y3 >= 0; y3--) {
      const i = h.header[y3];
      if (!i.filter && !i._hidden) return m === y3;
    }
    return D3(d, m);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: `wx-sAsPVaUK wx-${r}`,
      style: { paddingLeft: `${t}px`, width: `${e}px` },
      role: "rowgroup",
      children: g.map((d, m) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "div",
        {
          className: r === "header" ? "wx-sAsPVaUK wx-h-row" : "wx-sAsPVaUK wx-f-row",
          style: { height: `${u?.[m]}px`, display: "flex" },
          role: "row",
          children: d.map((h) => {
            const y3 = b2(h.id);
            return r === "header" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              On,
              {
                cell: h,
                columnStyle: p,
                column: y3,
                row: m,
                lastRow: D3(h, m),
                bodyHeight: x2,
                sortRow: C2(h, m, y3),
                hasSplit: a
              },
              h.id
            ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              Kn,
              {
                cell: h,
                columnStyle: p,
                column: b2(h.id),
                row: m
              },
              h.id
            );
          })
        },
        m
      ))
    }
  );
}
function Pn({ overlay: t }) {
  const e = (0, import_react4.useContext)(ne2);
  function n(p) {
    return typeof p == "function";
  }
  const r = t;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-1ty666CQ wx-overlay", children: n(t) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(r, { onAction: ({ action: p, data: x2 }) => e.exec(p, x2) }) : t });
}
function Wn(t) {
  const { editor: e, onSave: n, onApply: r } = t, [p, x2] = (0, import_react4.useState)(e?.value || ""), s = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    s.current && s.current.focus();
  }, []), (0, import_react4.useEffect)(() => {
    if (!s.current) return;
    const u = clickOutside(s.current, () => n(true));
    return () => u.destroy();
  }, [n]);
  function v() {
    s.current && (x2(s.current.value), r(s.current.value));
  }
  function f({ key: u }) {
    u === "Enter" && n();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "input",
    {
      className: "wx-e7Ao5ejY wx-text",
      onInput: v,
      onKeyDown: f,
      ref: s,
      type: "text",
      value: p
    }
  );
}
function Yn({ editor: t, onAction: e, onSave: n, onApply: r, onCancel: p }) {
  const [x2, s] = (0, import_react4.useState)(t?.value), [v, f] = (0, import_react4.useState)(t?.renderedValue), [u, g] = (0, import_react4.useState)(t?.options || []), a = (0, import_react4.useMemo)(() => t?.config?.template, [t]), b2 = (0, import_react4.useMemo)(() => t?.config?.cell, [t]), D3 = (0, import_react4.useMemo)(() => t?.config?.dropdown || {}, [t]), C2 = (0, import_react4.useMemo)(() => ({ trackScroll: true, ...D3 }), [D3]), d = (0, import_react4.useMemo)(() => (u || []).findIndex((l2) => l2.id === x2), [u, x2]), m = (0, import_react4.useRef)(null), h = (0, import_react4.useRef)(null), y3 = (0, import_react4.useCallback)(
    (l2) => {
      m.current = l2.navigate, h.current = l2.keydown, m.current(d);
    },
    [d, m]
  ), i = (0, import_react4.useCallback)(
    (l2) => {
      const H2 = l2?.target?.value ?? "";
      f(H2);
      const P2 = H2 ? (t?.options || []).filter(
        (G2) => (G2.label || "").toLowerCase().includes(H2.toLowerCase())
      ) : t?.options || [];
      g(P2), P2.length ? m.current(-1 / 0) : m.current(null);
    },
    [t]
  ), R3 = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    R3.current && R3.current.focus();
  }, []);
  const T2 = (0, import_react4.useRef)(n);
  (0, import_react4.useEffect)(() => {
    T2.current = n;
  }, [n]), (0, import_react4.useEffect)(() => {
    if (!R3.current) return;
    const l2 = clickOutside(R3.current, () => T2.current(true));
    return () => l2.destroy();
  }, []), (0, import_react4.useEffect)(() => {
    s(t?.value), f(t?.renderedValue), g(t?.options || []);
  }, [t]);
  const N2 = (0, import_react4.useCallback)(
    ({ id: l2 }) => {
      r(l2), n();
    },
    [r, n]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        className: "wx-0UYfSd1x wx-input",
        ref: R3,
        value: v ?? "",
        onChange: i,
        onKeyDown: (l2) => h.current ? h.current(l2, d) : void 0
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ge,
      {
        items: u,
        onReady: y3,
        onSelect: N2,
        ...C2,
        onCancel: p,
        children: ({ option: l2 }) => a ? a(l2) : b2 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(b2, { data: l2, onAction: e }) : l2.label
      }
    )
  ] });
}
function _n({ editor: t, onAction: e, onSave: n, onApply: r, onCancel: p }) {
  const [x2] = (0, import_react4.useState)(() => t.value || /* @__PURE__ */ new Date()), { template: s, cell: v, dropdown: f = {} } = t?.config || {}, u = (0, import_react4.useMemo)(() => ({
    trackScroll: true,
    width: "auto",
    ...f
  }), [f]);
  function g({ value: C2 }) {
    r(C2), n();
  }
  const a = (0, import_react4.useRef)(null), [b2, D3] = (0, import_react4.useState)(null);
  return (0, import_react4.useEffect)(() => {
    a.current && a.current.focus(), typeof window < "u" && window.getSelection && window.getSelection().removeAllRanges();
  }, []), (0, import_react4.useEffect)(() => {
    if (!b2) return;
    const C2 = clickOutside(b2, () => n(true));
    return () => C2.destroy();
  }, [b2, n]), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className: "wx-lNWNYUb6 wx-value",
        ref: a,
        tabIndex: 0,
        onClick: p,
        onKeyDown: (C2) => C2.preventDefault(),
        children: s ? s(x2) : v ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(v, { data: t.value, onAction: e }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "wx-lNWNYUb6 wx-text", children: t.renderedValue })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(le, { ...u, onCancel: p, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref: D3, className: "wx-lNWNYUb6", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Dt,
      {
        value: x2,
        onChange: g,
        buttons: t.config?.buttons
      }
    ) }) })
  ] });
}
function Fn(t) {
  const { editor: e } = t, n = t.onAction ?? t.onaction, r = t.onSave ?? t.onsave, p = t.onApply ?? t.onapply, x2 = t.onCancel ?? t.oncancel, s = e.config || {}, { dropdown: v = {} } = s, f = (0, import_react4.useMemo)(
    () => ({ trackScroll: true, ...v }),
    [v]
  ), [u] = (0, import_react4.useState)(
    e.options.find((i) => i.id === e.value)
  ), [g] = (0, import_react4.useState)(e.value), [a] = (0, import_react4.useState)(e.options), b2 = (0, import_react4.useMemo)(
    () => a.findIndex((i) => i.id === g),
    [a, g]
  );
  function D3({ id: i }) {
    p(i), r();
  }
  let C2;
  const [d, m] = (0, import_react4.useState)();
  function h(i) {
    C2 = i.navigate, m(() => i.keydown), C2(b2);
  }
  const y3 = (0, import_react4.useRef)(null);
  return (0, import_react4.useEffect)(() => {
    y3.current && y3.current.focus(), typeof window < "u" && window.getSelection && window.getSelection().removeAllRanges();
  }, []), (0, import_react4.useEffect)(() => {
    if (!y3.current) return;
    const i = clickOutside(y3.current, () => r(true));
    return () => i.destroy();
  }, [r]), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        ref: y3,
        className: "wx-ywGRk611 wx-value",
        tabIndex: 0,
        onClick: x2,
        onKeyDown: (i) => {
          d(i, b2), i.preventDefault();
        },
        children: s.template ? s.template(u) : s.cell ? (() => {
          const i = s.cell;
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(i, { data: u, onAction: n });
        })() : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "wx-ywGRk611 wx-text", children: e.renderedValue })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ge, { items: a, onReady: h, onSelect: D3, ...f, onCancel: x2, children: ({ option: i }) => s.template ? s.template(i) : s.cell ? (() => {
      const R3 = s.cell;
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(R3, { data: i, onAction: n });
    })() : i.label })
  ] });
}
function Xn(t) {
  const { editor: e, onAction: n, onApply: r, onCancel: p, onSave: x2 } = t, s = e?.config || {}, v = (0, import_react4.useMemo)(() => ({ trackScroll: true, ...s?.dropdown || {} }), [s]), f = e?.options ?? [], u = e?.value || [], g = e?.renderedValue, a = f.find((i) => u.includes(i.id)), b2 = a ? f.indexOf(a) : -1, D3 = (0, import_react4.useRef)(null);
  function C2({ id: i }) {
    r(i), D3.current && D3.current.focus();
  }
  let d;
  const [m, h] = (0, import_react4.useState)();
  function y3(i) {
    d = i.navigate, h(() => i.keydown), d(b2);
  }
  return (0, import_react4.useEffect)(() => {
    D3.current && D3.current.focus(), typeof window < "u" && window.getSelection && window.getSelection().removeAllRanges();
  }, []), (0, import_react4.useEffect)(() => {
    if (!D3.current) return;
    const i = clickOutside(D3.current, () => x2(true));
    return () => i.destroy();
  }, [x2]), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        ref: D3,
        className: "wx-value wx-aacZ4gNU",
        tabIndex: 0,
        onClick: p,
        onKeyDown: (i) => {
          m(i, b2), i.preventDefault();
        },
        children: s.template ? s.template(u?.map((i) => f.find((R3) => R3.id === i))) : s.cell ? (() => {
          const i = s.cell;
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            i,
            {
              data: u.map((R3) => f.find((T2) => T2.id === R3))
            }
          );
        })() : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "wx-text wx-aacZ4gNU", children: g })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ge,
      {
        items: f,
        onReady: y3,
        onSelect: C2,
        checkboxes: true,
        multiselect: true,
        ...v,
        onCancel: p,
        value: u,
        children: ({ option: i }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-option wx-aacZ4gNU", children: s.template ? s.template(i) : s.cell ? (() => {
          const R3 = s.cell;
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(R3, { data: i, onAction: n });
        })() : i.label })
      }
    )
  ] });
}
var $t = {
  text: Wn,
  combo: Yn,
  datepicker: _n,
  richselect: Fn,
  multiselect: Xn
};
function Un({ column: t, row: e }) {
  const n = (0, import_react4.useContext)(ne2), r = useStore(n, "editor"), p = (0, import_react4.useCallback)(
    (C2, d) => {
      n.exec("close-editor", { ignore: C2 }), d && setTimeout(() => {
        n.exec("focus-cell", {
          ...d,
          eventSource: "click"
        });
      });
    },
    [n]
  ), x2 = (0, import_react4.useCallback)(
    (C2) => {
      const d = C2 ? null : { row: r?.id, column: r?.column };
      p(false, d);
    },
    [r, p]
  ), s = (0, import_react4.useCallback)(() => {
    p(true, { row: r?.id, column: r?.column });
  }, [r, p]), v = (0, import_react4.useCallback)(
    (C2) => {
      n.exec("editor", { value: C2 });
    },
    [n]
  ), f = (0, import_react4.useCallback)(
    (C2) => {
      C2.key === "Enter" && r && (t.editor.type === "multiselect" ? v(r.value) : s());
    },
    [r, t.editor, s, v]
  ), u = (0, import_react4.useMemo)(
    () => Ye2(
      t.width,
      t.flexgrow,
      t.fixed,
      t.left,
      t.right
    ),
    [t.width, t.flexgrow, t.fixed, t.left, t.right]
  ), g = (0, import_react4.useMemo)(() => {
    let C2 = t.editor;
    if (typeof C2 == "function" && (C2 = C2(e, t)), !C2) return null;
    let d = typeof C2 == "string" ? C2 : C2.type;
    return $t[d];
  }, [t, e]), a = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    a.current && typeof u == "string" && a.current.setAttribute("style", u);
  }, [u]);
  const b2 = typeof e.$parent < "u" ? "gridcell" : "cell", D3 = typeof e.$parent < "u" ? !t.editor : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: "wx-8l724t2g wx-cell wx-editor",
      ref: a,
      style: typeof u == "object" && u !== null ? u : void 0,
      role: b2,
      "aria-readonly": D3,
      tabIndex: -1,
      onClick: (C2) => C2.stopPropagation(),
      onDoubleClick: (C2) => C2.stopPropagation(),
      onKeyDown: f,
      children: g ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        g,
        {
          editor: r,
          onSave: x2,
          onApply: v,
          onCancel: s,
          onAction: ({ action: C2, data: d }) => n.exec(C2, d)
        }
      ) : null
    }
  );
}
function Ct2(t) {
  const { columns: e, type: n, columnStyle: r } = t, p = (0, import_react4.useContext)(ne2), { filterValues: x2, _columns: s, _sizes: v } = p.getState();
  function f(u) {
    return r ? " " + r(u) : "";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: e.map((u, g) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tr", { children: u.map((a) => {
    const b2 = s.find((d) => d.id === a.id), D3 = `wx-print-cell-${n}${f(b2)}${a.filter ? " wx-print-cell-filter" : ""}${a.vertical ? " wx-vertical" : ""}`, C2 = a.cell;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "th",
      {
        style: styleObject(se(a, v.columnWidth)),
        className: "wx-Gy81xq2u " + D3,
        rowSpan: a.rowspan,
        colSpan: a.colspan,
        children: C2 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          C2,
          {
            api: p,
            cell: Object.fromEntries(
              Object.entries(a).filter(([d]) => d !== "cell")
            ),
            column: b2,
            row: g
          }
        ) : a.filter ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-Gy81xq2u wx-print-filter", children: ae(x2, s, a) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-Gy81xq2u wx-text", children: a.text ?? "" })
      },
      a.id
    );
  }) }, g)) });
}
function jn(t) {
  const { columns: e, rowStyle: n, columnStyle: r, cellStyle: p, header: x2, footer: s, reorder: v } = t, f = (0, import_react4.useContext)(ne2), { flatData: u, _sizes: g } = f.getState(), a = x2 && oe(e, "header", g.headerRowHeights), b2 = s && oe(e, "footer", g.footerRowHeights);
  function D3(d, m) {
    let h = "";
    return h += r ? " " + r(m) : "", h += p ? " " + p(d, m) : "", h;
  }
  function C2(d, m) {
    return typeof m.draggable == "function" ? m.draggable(d, m) !== false : m.draggable;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "table",
    {
      className: `wx-8NTMLH0z wx-print-grid ${e.some((d) => d.flexgrow) ? "wx-flex-columns" : ""}`,
      children: [
        x2 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Ct2,
          {
            columns: a,
            type: "header",
            columnStyle: r
          }
        ) }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tbody", { children: u.map((d, m) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "tr",
          {
            className: "wx-8NTMLH0z wx-row" + (n ? " " + n(d) : ""),
            style: { height: `${d.rowHeight || g.rowHeight}px` },
            children: e.map(
              (h) => h.collapsed ? null : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "td",
                {
                  className: `wx-8NTMLH0z wx-print-cell wx-cell ${D3(d, h)}`,
                  style: styleObject(
                    se(h, g.columnWidth)
                  ),
                  children: [
                    v && h.draggable ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "wx-8NTMLH0z wx-print-draggable", children: C2(d, h) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("i", { className: "wx-8NTMLH0z wxi-drag" }) : null }) : null,
                    h.treetoggle ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                        "span",
                        {
                          style: { marginLeft: d.$level * 28 + "px" }
                        }
                      ),
                      d.$count ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                        "i",
                        {
                          className: `wx-8NTMLH0z wx-print-grid-tree-toggle wxi-menu-${d.open !== false ? "down" : "right"}`
                        }
                      ) : null
                    ] }) : null,
                    h.cell ? (() => {
                      const y3 = h.cell;
                      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(y3, { api: f, row: d, column: h });
                    })() : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: S2(d, h) })
                  ]
                },
                h.id
              )
            )
          },
          m
        )) }),
        s ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tfoot", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Ct2,
          {
            columns: b2,
            type: "footer",
            columnStyle: r
          }
        ) }) : null
      ]
    }
  );
}
function Bn(t) {
  const { config: e, ...n } = t, r = (0, import_react4.useContext)(ne2), { _skin: p, _columns: x2 } = r.getState(), s = (0, import_react4.useMemo)(() => te(x2, e), []), v = (0, import_react4.useRef)(null);
  return (0, import_react4.useEffect)(() => {
    const f = document.body;
    f.classList.add("wx-print");
    const u = v.current;
    if (!u) return;
    const g = u.cloneNode(true);
    f.appendChild(g);
    const a = `@media print { @page { size: ${e.paper} ${e.mode}; }`, b2 = document.createElement("style");
    b2.setAttribute("type", "text/css"), b2.setAttribute("media", "print"), document.getElementsByTagName("head")[0].appendChild(b2), b2.appendChild(document.createTextNode(a)), window.print(), b2.remove(), f.classList.remove("wx-print"), g.remove();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: `wx-4zwCKA7C wx-${p}-theme wx-print-container`,
      ref: v,
      children: s.map((f, u) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-4zwCKA7C wx-print-grid-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(jn, { columns: f, ...n }) }, u))
    }
  );
}
function Gn(t) {
  const {
    header: e,
    footer: n,
    overlay: r,
    multiselect: p,
    onreorder: x2,
    rowStyle: s,
    columnStyle: v,
    cellStyle: f,
    autoRowHeight: u,
    resize: g,
    clientWidth: a,
    clientHeight: b2,
    responsiveLevel: D3,
    hotkeys: C2
  } = t, d = (0, import_react4.useContext)(ne2), m = useStore(d, "dynamic"), h = useStore(d, "_columns"), y3 = useStore(d, "flatData"), i = useStore(d, "split"), R3 = useStore(d, "_sizes"), [T2, N2] = useStoreWithCounter(d, "selectedRows"), l2 = useStore(d, "select"), H2 = useStore(d, "editor"), P2 = useStore(d, "tree"), G2 = useStore(d, "focusCell"), ae2 = useStore(d, "_print"), oe2 = useStore(d, "undo"), V = useStore(d, "reorder"), E2 = useStore(d, "_rowHeightFromData"), [$2, fe3] = (0, import_react4.useState)(0);
  (0, import_react4.useEffect)(() => {
    fe3(Wt());
  }, []);
  const [Se2, _e3] = (0, import_react4.useState)(0), [me3, Fe] = (0, import_react4.useState)(0), se2 = (0, import_react4.useMemo)(() => (h || []).some((o) => !o.hidden && o.flexgrow), [h]), j2 = (0, import_react4.useMemo)(() => R3?.rowHeight || 0, [R3]), X3 = (0, import_react4.useRef)(null), [Xe, Re3] = (0, import_react4.useState)(null), [de3, Me3] = (0, import_react4.useState)(null), te2 = (0, import_react4.useMemo)(() => {
    let o = [], w = 0;
    return i && i.left && (o = (h || []).slice(0, i.left).filter((k2) => !k2.hidden).map((k2) => ({ ...k2 })), o.forEach((k2) => {
      k2.fixed = { left: 1, leftSize: i.left }, k2.left = w, w += k2.width;
    }), o.length && (o[o.length - 1].fixed.left = -1)), { columns: o, width: w };
  }, [i, h]), ie3 = (0, import_react4.useMemo)(() => {
    let o = [], w = 0;
    if (i && i.right) {
      o = (h || []).slice(i.right * -1).filter((k2) => !k2.hidden).map((k2) => ({ ...k2 }));
      for (let k2 = o.length - 1; k2 >= 0; k2--) {
        const M2 = o[k2];
        M2.fixed = { right: 1 }, M2.right = w, w += M2.width;
      }
      o.length && (o[0].fixed = { right: -1 });
    }
    return { columns: o, width: w };
  }, [i, h]), I2 = (0, import_react4.useMemo)(() => {
    const o = (h || []).slice(i?.left || 0, (h || []).length - (i?.right ?? 0)).filter((w) => !w.hidden);
    return o.forEach((w) => {
      w.fixed = 0;
    }), o;
  }, [h, i]), U2 = (0, import_react4.useMemo)(() => (h || []).reduce((o, w) => (w.hidden || (o += w.width), o), 0), [h]), J2 = 1;
  function ue2(o, w, k2) {
    let M2 = w, _2 = o;
    if (I2.length) {
      let O2 = I2.length;
      for (let L2 = o; L2 >= 0; L2--)
        I2[L2][k2].forEach((Q2) => {
          Q2.colspan > 1 && L2 > o - Q2.colspan && L2 < O2 && (O2 = L2);
        });
      if (O2 !== I2.length && O2 < o) {
        for (let L2 = O2; L2 < o; L2++)
          M2 -= I2[L2].width;
        _2 = O2;
      }
    }
    return { index: _2, delta: M2 };
  }
  const ee2 = (0, import_react4.useMemo)(() => {
    let o, w, k2;
    const M2 = Se2, _2 = Se2 + (a || 0);
    let O2 = 0, L2 = 0, F2 = 0, Q2 = 0;
    I2.forEach((ge3, ke3) => {
      M2 > F2 && (O2 = ke3, Q2 = F2), F2 = F2 + ge3.width, _2 > F2 && (L2 = ke3 + J2);
    });
    const ce2 = { header: 0, footer: 0 };
    for (let ge3 = L2; ge3 >= O2; ge3--)
      ["header", "footer"].forEach((ke3) => {
        I2[ge3] && I2[ge3][ke3].forEach((Xt) => {
          const Je2 = Xt.colspan;
          if (Je2 && Je2 > 1) {
            const ht2 = Je2 - (L2 - ge3 + 1);
            ht2 > 0 && (ce2[ke3] = Math.max(ce2[ke3], ht2));
          }
        });
      });
    const B3 = ue2(O2, Q2, "header"), le3 = ue2(O2, Q2, "footer"), Ze = B3.delta, $e2 = B3.index, Ve = le3.delta, Oe2 = le3.index;
    return se2 && U2 > (a || 0) ? o = w = k2 = [...te2.columns, ...I2, ...ie3.columns] : (o = [
      ...te2.columns,
      ...I2.slice(O2, L2 + 1),
      ...ie3.columns
    ], w = [
      ...te2.columns,
      ...I2.slice($e2, L2 + ce2.header + 1),
      ...ie3.columns
    ], k2 = [
      ...te2.columns,
      ...I2.slice(Oe2, L2 + ce2.footer + 1),
      ...ie3.columns
    ]), {
      data: o || [],
      header: w || [],
      footer: k2 || [],
      d: Q2,
      df: Ve,
      dh: Ze
    };
  }, [
    I2,
    te2,
    ie3,
    Se2,
    a,
    se2,
    U2
  ]), ve2 = (0, import_react4.useMemo)(
    () => e && R3?.headerHeight || 0,
    [e, R3]
  ), be2 = (0, import_react4.useMemo)(
    () => n && R3?.footerHeight || 0,
    [n, R3]
  ), ye3 = (0, import_react4.useMemo)(() => a && b2 ? U2 >= a : false, [a, b2, U2]), Ne2 = (0, import_react4.useMemo)(() => (b2 || 0) - ve2 - be2 - (ye3 ? $2 : 0), [b2, ve2, be2, ye3, $2]), lt2 = (0, import_react4.useMemo)(() => Math.ceil((Ne2 || 0) / (j2 || 1)) + 1, [Ne2, j2]), Ue2 = (0, import_react4.useRef)([]), [st, Mt] = (0, import_react4.useState)(0), [it2, At] = (0, import_react4.useState)(void 0), re3 = (0, import_react4.useMemo)(() => {
    let o = 0, w = 0;
    const k2 = 2;
    if (u) {
      let O2 = me3;
      for (; O2 > 0; )
        O2 -= Ue2.current[o] || j2, o++;
      w = me3 - O2;
      for (let L2 = Math.max(0, o - k2 - 1); L2 < o; L2++)
        w -= Ue2.current[o - L2] || j2;
      o = Math.max(0, o - k2);
    } else {
      if (E2) {
        let O2 = 0, L2 = 0;
        for (let B3 = 0; B3 < (y3 || []).length; B3++) {
          const le3 = y3[B3].rowHeight || j2;
          if (L2 + le3 > me3) {
            O2 = B3;
            break;
          }
          L2 += le3;
        }
        o = Math.max(0, O2 - k2);
        for (let B3 = 0; B3 < o; B3++)
          w += y3[B3].rowHeight || j2;
        let F2 = 0, Q2 = 0;
        for (let B3 = O2 + 1; B3 < (y3 || []).length; B3++) {
          const le3 = y3[B3].rowHeight || j2;
          if (F2++, Q2 + le3 > Ne2)
            break;
          Q2 += le3;
        }
        const ce2 = Math.min(
          m ? m.rowCount : (y3 || []).length,
          O2 + F2 + k2
        );
        return { d: w, start: o, end: ce2 };
      }
      o = Math.floor(me3 / (j2 || 1)), o = Math.max(0, o - k2), w = o * (j2 || 0);
    }
    const M2 = m ? m.rowCount : (y3 || []).length, _2 = Math.min(M2, o + (lt2 || 0) + k2);
    return { d: w, start: o, end: _2 };
  }, [u, E2, me3, j2, m, y3, lt2, Ne2]), je2 = (0, import_react4.useMemo)(() => {
    const o = m ? m.rowCount : (y3 || []).length;
    if (u)
      return st + re3.d + (o - (it2 || 0)) * (j2 || 0);
    if (!E2)
      return o * (j2 || 0);
    let w = 0;
    for (let k2 = 0; k2 < o; k2++)
      w += y3[k2]?.rowHeight || j2;
    return w;
  }, [
    m,
    y3,
    j2,
    u,
    E2,
    st,
    re3.d,
    it2
  ]), he3 = (0, import_react4.useMemo)(() => a && b2 ? je2 + ve2 + be2 >= b2 - (U2 >= (a || 0) ? $2 : 0) : false, [
    a,
    b2,
    je2,
    ve2,
    be2,
    U2,
    $2
  ]), Ce2 = (0, import_react4.useMemo)(() => se2 && U2 <= (a || 0) ? (a || 0) - 0 - (he3 ? $2 : 0) : U2, [se2, U2, a, he3, $2, ye3]), Be = (0, import_react4.useMemo)(() => se2 && U2 <= (a || 0) ? a || 0 : Ce2 < (a || 0) ? U2 + (he3 ? $2 : 0) : -1, [se2, U2, a, Ce2, he3, $2]), Ge = (0, import_react4.useRef)({});
  (0, import_react4.useEffect)(() => {
    if (m && (Ge.current.start !== re3.start || Ge.current.end !== re3.end)) {
      const { start: o, end: w } = re3;
      Ge.current = { start: o, end: w }, d && d.exec && d.exec("request-data", { row: { start: o, end: w } });
    }
  }, [m, re3, d]);
  const pe2 = (0, import_react4.useMemo)(() => m ? y3 || [] : (y3 || []).slice(re3.start, re3.end), [m, y3, re3]), He = (0, import_react4.useMemo)(() => (T2 || []).filter(
    (o) => (pe2 || []).some((w) => w.id === o)
  ), [N2, pe2]), qe2 = (0, import_react4.useMemo)(() => re3.start, [re3.start]), It = (0, import_react4.useCallback)((o) => {
    Fe(o.target.scrollTop), _e3(o.target.scrollLeft);
  }, []), zt2 = (0, import_react4.useCallback)((o) => {
    o.shiftKey && o.preventDefault(), X3.current && X3.current.focus && X3.current.focus();
  }, []), ct2 = (0, import_react4.useCallback)(() => !!(h || []).find((o) => !!o.draggable), [h]), Qe2 = (0, import_react4.useRef)(null), De2 = (0, import_react4.useRef)(null), Vt2 = (0, import_react4.useRef)({
    dblclick: (o, w) => {
      const k2 = { id: o, column: locateID(w, "data-col-id") };
      d.exec("open-editor", k2);
    },
    click: (o, w) => {
      if (w.target.closest("input") || Qe2.current) return;
      const k2 = locateID(w, "data-col-id");
      if (G2?.id !== o && d.exec("focus-cell", {
        row: o,
        column: k2,
        eventSource: "click"
      }), l2 === false) return;
      const M2 = p && (w.ctrlKey || w.metaKey), _2 = p && w.shiftKey;
      (M2 || T2.length > 1 || !T2.includes(o)) && d.exec("select-row", { id: o, toggle: M2, range: _2 });
    },
    "toggle-row": (o) => {
      const w = d.getRow(o);
      d.exec(w.open !== false ? "close-row" : "open-row", { id: o });
    },
    "ignore-click": () => false
  }), Ae2 = (0, import_react4.useMemo)(() => ({
    top: ve2,
    bottom: be2,
    left: te2.width,
    xScroll: ye3,
    yScroll: he3,
    sense: u && de3 ? de3.offsetHeight : Math.max(R3?.rowHeight || 0, 40),
    node: X3.current && X3.current.firstElementChild
  }), [
    ve2,
    be2,
    te2.width,
    ye3,
    he3,
    u,
    de3,
    R3
  ]);
  function Ot(o, w) {
    const { container: k2, sourceNode: M2, from: _2 } = w;
    if (ct2() && !M2.getAttribute("draggable-data"))
      return false;
    Re3(_2), P2 && d.getRow(_2).open && d.exec("close-row", { id: _2, nested: true });
    const L2 = locate2(M2), F2 = L2.cloneNode(true);
    F2.classList.remove("wx-selected"), F2.querySelectorAll("[tabindex]").forEach((le3) => le3.setAttribute("tabindex", "-1")), k2.appendChild(F2), Me3(F2);
    const Q2 = Se2 - ee2.d, ce2 = he3 ? $2 : 0;
    k2.style.width = Math.min(
      (a || 0) - ce2,
      se2 && U2 <= (a || 0) ? Ce2 : Ce2 - ce2
    ) + Q2 + "px";
    const B3 = Ke(L2);
    w.offset = {
      x: Q2,
      y: -Math.round(B3.height / 2)
    }, De2.current || (De2.current = o.clientY);
  }
  function Kt(o, w) {
    const { from: k2 } = w, M2 = w.pos, _2 = Ke(X3.current);
    M2.x = _2.x;
    const O2 = Ae2.top;
    if (M2.y < O2) M2.y = O2;
    else {
      const L2 = _2.height - (ye3 && $2 > 0 ? $2 : Math.round(Ae2.sense / 2)) - Ae2.bottom;
      M2.y > L2 && (M2.y = L2);
    }
    if (X3.current.contains(w.targetNode)) {
      const L2 = locate2(w.targetNode), F2 = L2 && getID(L2);
      if (F2 && F2 !== k2) {
        w.to = F2;
        const Q2 = u ? de3?.offsetHeight : R3?.rowHeight;
        if (de3 && (me3 === 0 || M2.y > O2 + Q2 - 1)) {
          const ce2 = L2.getBoundingClientRect(), le3 = Ke(de3).y, Ze = ce2.y, $e2 = le3 > Ze ? -1 : 1, Ve = $e2 === 1 ? "after" : "before", Oe2 = Math.abs(d.getRowIndex(k2) - d.getRowIndex(F2)), ge3 = Oe2 !== 1 ? Ve === "before" ? "after" : "before" : Ve;
          if (Oe2 === 1 && ($e2 === -1 && o.clientY > De2.current || $e2 === 1 && o.clientY < De2.current))
            return;
          De2.current = o.clientY, d.exec("move-item", {
            id: k2,
            target: F2,
            mode: ge3,
            inProgress: true
          });
        }
      }
      x2 && x2({ event: o, context: w });
    }
    Tn(o, _2, w, Ae2);
  }
  function Pt(o, w) {
    const { from: k2, to: M2 } = w;
    d.exec("move-item", {
      id: k2,
      target: M2,
      inProgress: false
    }), Qe2.current = setTimeout(() => {
      Qe2.current = 0;
    }, 1), Re3(null), Me3(null), De2.current = null, Et(w);
  }
  function Wt() {
    const o = document.createElement("div");
    o.style.cssText = "position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;min-height:100px;overflow-y:scroll;", document.body.appendChild(o);
    const w = o.offsetWidth - o.clientWidth;
    return document.body.removeChild(o), w;
  }
  const Yt = (0, import_react4.useMemo)(() => Be > 0 ? { width: `${Be}px` } : void 0, [Be]), at = (0, import_react4.useRef)(null);
  function _t() {
    Promise.resolve().then(() => {
      let o = 0, w = qe2;
      const k2 = at.current;
      k2 && (Array.from(k2.children).forEach((M2, _2) => {
        Ue2.current[qe2 + _2] = M2.offsetHeight, o += M2.offsetHeight, w++;
      }), Mt(o), At(w));
    });
  }
  (0, import_react4.useEffect)(() => {
    pe2 && u && _t();
  }, [pe2, u, qe2]);
  let [Te2, Ie3] = (0, import_react4.useState)();
  (0, import_react4.useEffect)(() => {
    if (G2 && (!l2 || !He.length || He.includes(G2.row)))
      Ie3({ ...G2 });
    else if (pe2.length && ee2.data.length) {
      if (!Te2 || He.length && !He.includes(Te2.row) || pe2.findIndex((o) => o.id === Te2.row) === -1 || ee2.data.findIndex(
        (o) => o.id === Te2.column && !o.collapsed
      ) === -1) {
        const o = He[0] || pe2[0].id, w = ee2.data.findIndex((k2) => !k2.collapsed);
        Ie3(w !== -1 ? { row: o, column: ee2.data[w].id } : null);
      }
    } else Ie3(null);
  }, [G2]);
  const dt2 = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    const o = X3.current;
    if (!o) return;
    const w = Cn(o, g);
    return () => {
      typeof w == "function" && w();
    };
  }, [g]);
  const ut2 = (0, import_react4.useRef)({});
  Object.assign(ut2.current, {
    start: Ot,
    move: Kt,
    end: Pt,
    getReorder: () => V,
    getDraggableInfo: () => ({ hasDraggable: ct2() })
  }), (0, import_react4.useEffect)(() => {
    const o = X3.current;
    return o ? Rn(o, ut2).destroy : void 0;
  }, [V, X3.current]), (0, import_react4.useEffect)(() => {
    const o = X3.current;
    return o ? Me2(o, {
      keys: C2 !== false && {
        ...Ie2,
        "ctrl+z": oe2,
        "ctrl+y": oe2,
        ...C2
      },
      exec: (k2) => d.exec("hotkey", k2)
    }).destroy : void 0;
  }, [d, oe2, C2]);
  const ze2 = (0, import_react4.useRef)({
    scroll: d.getReactiveState().scroll
  });
  ze2.current.getWidth = () => (a || 0) - (he3 ? $2 : 0), ze2.current.getHeight = () => Ne2, ze2.current.getScrollMargin = () => te2.width + ie3.width, (0, import_react4.useEffect)(() => {
    Te(dt2.current, ze2.current);
  }, []);
  const ft2 = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    const o = ft2.current;
    if (!o) return;
    const w = [];
    return w.push(
      clickOutside(o, () => G2 && d.exec("focus-cell", { eventSource: "click" })).destroy
    ), w.push(delegateClick2(o, Vt2.current)), () => w.forEach((k2) => k2());
  }, []);
  const Ft2 = `wx-grid ${D3 ? `wx-responsive-${D3}` : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className: "wx-4VuBwK2D " + Ft2,
        style: {
          "--header-height": `${ve2}px`,
          "--footer-height": `${be2}px`,
          "--split-left-width": `${te2.width}px`,
          "--split-right-width": `${ie3.width}px`
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            ref: X3,
            className: "wx-4VuBwK2D wx-table-box",
            style: Yt,
            role: P2 ? "treegrid" : "grid",
            "aria-colcount": ee2.data.length,
            "aria-rowcount": pe2.length,
            "aria-multiselectable": P2 && p ? true : void 0,
            tabIndex: -1,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "div",
              {
                ref: dt2,
                className: "wx-4VuBwK2D wx-scroll",
                style: {
                  overflowX: ye3 ? "scroll" : "hidden",
                  overflowY: he3 ? "scroll" : "hidden"
                },
                onScroll: It,
                children: [
                  e ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "wx-4VuBwK2D wx-header-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    bt2,
                    {
                      contentWidth: Ce2,
                      deltaLeft: ee2.dh,
                      columns: ee2.header,
                      columnStyle: v,
                      bodyHeight: Ne2 - +n
                    }
                  ) }) : null,
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                    "div",
                    {
                      ref: ft2,
                      className: "wx-4VuBwK2D wx-body",
                      style: { width: `${Ce2}px`, height: `${je2}px` },
                      onMouseDown: (o) => zt2(o),
                      children: [
                        r ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Pn, { overlay: r }) : null,
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                          "div",
                          {
                            ref: at,
                            className: "wx-4VuBwK2D wx-data",
                            style: {
                              paddingTop: `${re3.d}px`,
                              paddingLeft: `${ee2.d}px`
                            },
                            children: pe2.map((o, w) => {
                              const k2 = T2.indexOf(o.id) !== -1, M2 = Xe === o.id, _2 = "wx-row" + (u ? " wx-autoheight" : "") + (s ? " " + s(o) : "") + (k2 ? " wx-selected" : "") + (M2 ? " wx-inactive" : ""), O2 = u ? { minHeight: `${o.rowHeight || j2}px` } : { height: `${o.rowHeight || j2}px` };
                              return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                                "div",
                                {
                                  className: "wx-4VuBwK2D " + _2,
                                  "data-id": setID(o.id),
                                  "data-context-id": setID(o.id),
                                  style: O2,
                                  role: "row",
                                  "aria-rowindex": w,
                                  "aria-expanded": o.open,
                                  "aria-level": P2 ? o.$level + 1 : void 0,
                                  "aria-selected": P2 ? k2 : void 0,
                                  tabIndex: -1,
                                  children: ee2.data.map((L2) => L2.collapsed ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                                    "div",
                                    {
                                      className: "wx-4VuBwK2D wx-cell wx-collapsed"
                                    },
                                    L2.id
                                  ) : H2?.id === o.id && H2.column === L2.id ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Un, { row: o, column: L2 }, L2.id) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                                    $n,
                                    {
                                      row: o,
                                      column: L2,
                                      columnStyle: v,
                                      cellStyle: f,
                                      reorder: V,
                                      focusable: Te2?.row === o.id && Te2?.column === L2.id
                                    },
                                    L2.id
                                  ))
                                },
                                o.id
                              );
                            })
                          }
                        )
                      ]
                    }
                  ),
                  n && (y3 || []).length ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    bt2,
                    {
                      type: "footer",
                      contentWidth: Ce2,
                      deltaLeft: ee2.df,
                      columns: ee2.footer,
                      columnStyle: v
                    }
                  ) : null
                ]
              }
            )
          }
        )
      }
    ),
    ae2 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Bn,
      {
        config: ae2,
        rowStyle: s,
        columnStyle: v,
        cellStyle: f,
        header: e,
        footer: n,
        reorder: V
      }
    ) : null
  ] });
}
var qn = (t) => t.split("-").map((e) => e ? e.charAt(0).toUpperCase() + e.slice(1) : "").join("");
var ao = (0, import_react4.forwardRef)(function({
  data: e = [],
  columns: n = [],
  rowStyle: r = null,
  columnStyle: p = null,
  cellStyle: x2 = null,
  selectedRows: s,
  select: v = true,
  multiselect: f = false,
  header: u = true,
  footer: g = false,
  dynamic: a = null,
  overlay: b2 = null,
  reorder: D3 = false,
  onReorder: C2 = null,
  autoRowHeight: d = false,
  sizes: m,
  split: h,
  tree: y3 = false,
  autoConfig: i = false,
  init: R3 = null,
  responsive: T2 = null,
  sortMarks: N2,
  undo: l2 = false,
  hotkeys: H2 = null,
  filterValues: P2,
  ...G2
}, ae2) {
  const oe2 = (0, import_react4.useRef)();
  oe2.current = G2;
  const V = (0, import_react4.useMemo)(() => new ve(writable), []), E2 = (0, import_react4.useMemo)(() => V.in, [V]), $2 = (0, import_react4.useRef)(null);
  $2.current === null && ($2.current = new EventBusRouter((I2, U2) => {
    const J2 = "on" + qn(I2);
    oe2.current && oe2.current[J2] && oe2.current[J2](U2);
  }), E2.setNext($2.current));
  const fe3 = (0, import_react4.useMemo)(
    () => ({
      getState: V.getState.bind(V),
      getReactiveState: V.getReactive.bind(V),
      getStores: () => ({ data: V }),
      exec: E2.exec,
      setNext: (I2) => ($2.current = $2.current.setNext(I2), $2.current),
      intercept: E2.intercept.bind(E2),
      on: E2.on.bind(E2),
      detach: E2.detach.bind(E2),
      getRow: V.getRow.bind(V),
      getRowIndex: V.getRowIndex.bind(V),
      getColumn: V.getColumn.bind(V)
    }),
    [V, E2]
  ), [Se2, _e3] = (0, import_react4.useState)(0), [me3, Fe] = (0, import_react4.useState)(0), [se2, j2] = (0, import_react4.useState)(null), [X3, Xe] = (0, import_react4.useState)(null), Re3 = (0, import_react4.useMemo)(() => {
    if (i && !n.length && e.length) {
      const I2 = e[0], U2 = [];
      for (let J2 in I2)
        if (J2 !== "id" && J2[0] !== "$") {
          let ue2 = {
            id: J2,
            header: J2[0].toUpperCase() + J2.slice(1)
          };
          typeof i == "object" && (ue2 = { ...ue2, ...i }), U2.push(ue2);
        }
      return U2;
    }
    return (X3 && X3.columns) ?? n;
  }, [i, n, e, X3]), de3 = (0, import_react4.useMemo)(
    () => (X3 && X3.sizes) ?? m,
    [X3, m]
  ), Me3 = (0, import_react4.useCallback)(
    (I2) => {
      if (_e3(I2.width), Fe(I2.height), T2) {
        const J2 = Object.keys(T2).map(Number).sort((ue2, ee2) => ue2 - ee2).find((ue2) => I2.width <= ue2) ?? null;
        J2 !== se2 && (Xe(T2[J2]), j2(J2));
      }
    },
    [T2, se2]
  ), te2 = (0, import_react4.useContext)(Ut.theme), ie3 = (0, import_react4.useRef)(0);
  return (0, import_react4.useEffect)(() => {
    if (!ie3.current)
      R3 && R3(fe3);
    else {
      const I2 = V.getState();
      V.init({
        data: e,
        columns: Re3,
        split: h || I2.split,
        sizes: de3 || I2.sizes,
        selectedRows: s || I2.selectedRows,
        dynamic: a,
        tree: y3,
        sortMarks: N2 || I2.sortMarks,
        filterValues: P2 || I2.filterValues,
        undo: l2,
        reorder: D3,
        _skin: te2,
        _select: v
      });
    }
    ie3.current++;
  }, [
    V,
    e,
    Re3,
    h,
    de3,
    s,
    a,
    y3,
    N2,
    P2,
    l2,
    D3,
    te2,
    v,
    R3,
    fe3
  ]), ie3.current === 0 && V.init({
    data: e,
    columns: Re3,
    split: h || { left: 0 },
    sizes: de3 || {},
    selectedRows: s || [],
    dynamic: a,
    tree: y3,
    sortMarks: N2 || {},
    filterValues: P2 || {},
    undo: l2,
    reorder: D3,
    _skin: te2,
    select: v
  }), (0, import_react4.useImperativeHandle)(
    ae2,
    () => ({
      ...fe3
    }),
    [fe3]
  ), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ne2.Provider, { value: fe3, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(he, { words: en_default2, optional: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Gn,
    {
      header: u,
      footer: g,
      overlay: b2,
      rowStyle: r,
      columnStyle: p,
      cellStyle: x2,
      onReorder: C2,
      multiselect: f,
      autoRowHeight: d,
      clientWidth: Se2,
      clientHeight: me3,
      responsiveLevel: se2,
      resize: Me3,
      hotkeys: H2
    }
  ) }) });
});
function wo({ fonts: t = true, children: e }) {
  return e ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(vn, { fonts: t, children: e }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(vn, { fonts: t });
}
function xo({ fonts: t = true, children: e }) {
  return e ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(gn, { fonts: t, children: e }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(gn, { fonts: t });
}
setEnv(env2);

// src/record.ts
function fieldsOf(record) {
  const fields = record.fields;
  return fields !== null && typeof fields === "object" ? fields : {};
}
function serviceOf(record) {
  const service = record.service;
  if (typeof service === "string" && service.length > 0) return service;
  return typeof record.name === "string" ? record.name : void 0;
}
function contextOf(record) {
  const context = fieldsOf(record)["context"];
  if (typeof context === "string" && context.length > 0) return context;
  return void 0;
}
function signalOf(record) {
  const signal = record.signal ?? fieldsOf(record)["signal"];
  return typeof signal === "string" && signal.length > 0 ? signal : void 0;
}
function paramsOf(record) {
  const params = fieldsOf(record)["params"];
  return params !== null && typeof params === "object" ? params : void 0;
}
function operationOf(record) {
  const operation = fieldsOf(record)["operation"] ?? record.$meta?.method;
  return typeof operation === "string" && operation.length > 0 ? operation : void 0;
}
function messageIdOf(record) {
  const messageId = fieldsOf(record)["messageId"] ?? record.$meta?.mtid;
  return typeof messageId === "string" && messageId.length > 0 ? messageId : void 0;
}
function traceOf(record) {
  const refs = record.refs;
  const fromRefs = refs !== null && typeof refs === "object" ? refs.trace : void 0;
  for (const candidate of [fromRefs, record.traceId]) {
    if (typeof candidate === "string" && candidate.length > 0) return candidate;
  }
  return void 0;
}
function parentOf(record) {
  const refs = record.refs;
  const parent = refs !== null && typeof refs === "object" ? refs.parent : void 0;
  return typeof parent === "string" && parent.length > 0 ? parent : void 0;
}
function decisionOf(record) {
  const decision = record.decision;
  if (decision === null || typeof decision !== "object") return void 0;
  const { discriminator, candidates, chosen, values } = decision;
  if (typeof discriminator !== "string" || discriminator.length === 0) return void 0;
  return {
    discriminator,
    candidates: Array.isArray(candidates) ? candidates.map(String) : [],
    ...typeof chosen === "string" && chosen.length > 0 ? { chosen } : {},
    ...values !== null && typeof values === "object" ? { values } : {}
  };
}
function flowOf(record) {
  const flow = record.flow;
  if (flow === null || typeof flow !== "object") return void 0;
  const bag = flow;
  if (typeof bag["id"] !== "string" || bag["id"].length === 0) return void 0;
  const text = (key) => {
    const value = bag[key];
    return typeof value === "string" && value.length > 0 ? value : void 0;
  };
  return {
    id: bag["id"],
    ...text("kind") === void 0 ? {} : { kind: text("kind") },
    ...text("leg") === void 0 ? {} : { leg: text("leg") },
    ...text("legFrom") === void 0 ? {} : { from: text("legFrom") },
    ...text("legTo") === void 0 ? {} : { to: text("legTo") },
    ...text("legSeq") === void 0 ? {} : { seq: text("legSeq") },
    ...text("step") === void 0 ? {} : { step: text("step") },
    ...typeof bag["index"] === "number" ? { index: bag["index"] } : {},
    ...text("status") === void 0 ? {} : { status: text("status") }
  };
}
function intentOf(record) {
  const intent = record.intent;
  if (intent === null || typeof intent !== "object") return void 0;
  const bag = intent;
  if (typeof bag["name"] !== "string" || bag["name"].length === 0) return void 0;
  return {
    name: bag["name"],
    ...typeof bag["actor"] === "string" && bag["actor"] ? { actor: bag["actor"] } : {},
    ...typeof bag["tenant"] === "string" && bag["tenant"] ? { tenant: bag["tenant"] } : {},
    ...typeof bag["priority"] === "number" ? { priority: bag["priority"] } : {}
  };
}
var headerBag = (value) => value !== null && typeof value === "object" ? value : void 0;
function exchangeOf(record) {
  const req = record.req;
  const res = record.res;
  if ((req === null || typeof req !== "object") && (res === null || typeof res !== "object"))
    return void 0;
  const q4 = req ?? {};
  const s = res ?? {};
  const request = [
    typeof q4["operation"] === "string" ? q4["operation"] : void 0,
    typeof q4["method"] === "string" ? q4["method"] : void 0,
    typeof q4["target"] === "string" ? q4["target"] : void 0,
    typeof q4["url"] === "string" ? q4["url"] : void 0
  ].filter((part) => part !== void 0 && part.length > 0);
  const status = typeof s["status"] === "number" ? s["status"] : typeof s["statusCode"] === "number" ? s["statusCode"] : void 0;
  const elapsedMs = typeof s["elapsedMs"] === "number" ? s["elapsedMs"] : typeof s["responseTime"] === "number" ? s["responseTime"] : void 0;
  return {
    ...request.length === 0 ? {} : { request: request.join(" ") },
    ...status === void 0 ? {} : { status },
    ...elapsedMs === void 0 ? {} : { elapsedMs },
    ...headerBag(q4["headers"]) === void 0 ? {} : { requestHeaders: headerBag(q4["headers"]) },
    ...headerBag(s["headers"]) === void 0 ? {} : { responseHeaders: headerBag(s["headers"]) },
    ...q4["body"] === void 0 ? {} : { requestBody: q4["body"] },
    ...s["body"] === void 0 ? {} : { responseBody: s["body"] }
  };
}
function captureOf(record) {
  const bag = fieldsOf(record);
  const capture = bag["capture"];
  const shape = bag["shape"];
  if (typeof capture !== "string" || typeof shape !== "string") return void 0;
  const payload = bag["payload"];
  return {
    signal: capture,
    shape,
    ...typeof bag["rung"] === "string" ? { rung: bag["rung"] } : {},
    ...typeof bag["bytes"] === "number" ? { bytes: bag["bytes"] } : {},
    fields: bag,
    ...typeof payload === "string" ? { payload } : {}
  };
}
function bytesOfHex(payload) {
  const compact = payload.replace(/\s+/g, "");
  if (compact.length === 0 || compact.length % 2 !== 0) return void 0;
  if (!/^[0-9a-fA-F]+$/.test(compact)) return void 0;
  const bytes = [];
  for (let index = 0; index < compact.length; index += 2)
    bytes.push(parseInt(compact.slice(index, index + 2), 16));
  return bytes;
}
function hexDump(payload, perRow = 16) {
  const bytes = bytesOfHex(payload);
  if (bytes === void 0) return [];
  const rows = [];
  for (let start = 0; start < bytes.length; start += perRow) {
    const slice = bytes.slice(start, start + perRow);
    rows.push({
      offset: `0x${start.toString(16).padStart(4, "0")}`,
      hex: slice.map((byte) => byte.toString(16).padStart(2, "0")),
      ascii: slice.map((byte) => byte >= 32 && byte <= 126 ? String.fromCharCode(byte) : ".").join("")
    });
  }
  return rows;
}

// src/types.ts
var LEVEL_NAME = {
  10: "trace",
  20: "debug",
  30: "info",
  40: "warn",
  50: "error",
  60: "fatal"
};

// src/client/CapturePanel.tsx
var import_react6 = __toESM(require_react(), 1);

// src/client/Highlight.tsx
var import_react5 = __toESM(require_react(), 1);
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function highlightSearch(text, search) {
  if (!search) return text;
  const parts = text.split(new RegExp(`(${escapeRegExp(search)})`, "gi"));
  return parts.map(
    (part, i) => part.toLowerCase() === search.toLowerCase() ? /* @__PURE__ */ import_react5.default.createElement(
      "mark",
      {
        key: i,
        style: {
          background: "#e3b341",
          color: "#000",
          padding: "0 1px",
          borderRadius: "2px"
        }
      },
      part
    ) : part
  );
}
function SyntaxHighlight({
  json,
  theme,
  searchText = ""
}) {
  const tokens = [];
  const syntax = theme.syntax ?? {};
  const pattern = /"(?:[^"\\]|\\.)*"|true|false|null|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|[{}[\]:,]/g;
  let lastIndex = 0;
  let match;
  while ((match = pattern.exec(json)) !== null) {
    if (match.index > lastIndex) {
      const whitespace = json.substring(lastIndex, match.index);
      tokens.push(searchText ? highlightSearch(whitespace, searchText) : whitespace);
    }
    const token = match[0];
    let color;
    if (token === "true" || token === "false") {
      color = syntax.boolean;
    } else if (token === "null") {
      color = syntax.null;
    } else if (token[0] === '"') {
      const afterToken = json.substring(pattern.lastIndex).trimStart();
      if (afterToken[0] === ":") {
        color = syntax.key;
      } else {
        color = syntax.string;
      }
    } else if (!isNaN(Number(token)) && token !== "") {
      color = syntax.number;
    } else if (/[{}[\]:,]/.test(token)) {
      color = syntax.punctuation;
    }
    const tokenContent = searchText ? highlightSearch(token, searchText) : token;
    tokens.push(
      color ? /* @__PURE__ */ import_react5.default.createElement(
        "span",
        {
          key: lastIndex,
          style: { color }
        },
        tokenContent
      ) : tokenContent
    );
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < json.length) {
    const remaining = json.substring(lastIndex);
    tokens.push(searchText ? highlightSearch(remaining, searchText) : remaining);
  }
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, tokens);
}

// src/client/CapturePanel.tsx
function CaptureHeader({
  capture,
  isDark
}) {
  const facts = [
    capture.rung === void 0 ? void 0 : `rung ${capture.rung}`,
    typeof capture.fields["direction"] === "string" ? String(capture.fields["direction"]) : void 0,
    capture.bytes === void 0 ? void 0 : `${capture.bytes} B`,
    typeof capture.fields["method"] === "string" ? String(capture.fields["method"]) : void 0,
    typeof capture.fields["label"] === "string" ? String(capture.fields["label"]) : void 0
  ].filter((fact) => fact !== void 0);
  return /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "6px",
        alignItems: "center",
        marginBottom: "6px"
      }
    },
    /* @__PURE__ */ import_react6.default.createElement(
      "span",
      {
        title: `${capture.signal} captured as ${capture.shape}`,
        style: {
          fontSize: "10px",
          padding: "1px 6px",
          borderRadius: "3px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          background: isDark ? "#1f6feb" : "#ddf4ff",
          color: isDark ? "#c9d1d9" : "#0969da"
        }
      },
      capture.shape
    ),
    facts.map((fact) => /* @__PURE__ */ import_react6.default.createElement(
      "span",
      {
        key: fact,
        style: {
          fontSize: "10px",
          padding: "1px 6px",
          borderRadius: "3px",
          background: isDark ? "#21262d" : "#eef2f6",
          color: isDark ? "#c9d1d9" : "#24292f",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
        }
      },
      fact
    ))
  );
}
function HeaderTable({
  headers,
  isDark
}) {
  return /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      style: { fontSize: "10px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }
    },
    Object.entries(headers).map(([key, value]) => /* @__PURE__ */ import_react6.default.createElement("div", { key }, /* @__PURE__ */ import_react6.default.createElement("span", { style: { color: isDark ? "#79c0ff" : "#0969da" } }, key, ":"), " ", /* @__PURE__ */ import_react6.default.createElement("span", { style: { color: isDark ? "#c9d1d9" : "#24292f" } }, String(value))))
  );
}
function FrameDump({ payload, isDark }) {
  const rows = hexDump(payload);
  if (rows.length === 0)
    return /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        style: {
          fontSize: "10px",
          fontStyle: "italic",
          color: isDark ? "#8b949e" : "#57606a"
        }
      },
      "the payload is not a hex dump"
    );
  const mono = {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    fontSize: "10px",
    lineHeight: "14px",
    whiteSpace: "pre"
  };
  const cells = (row) => row.map((cell, index) => index === 8 ? ` ${cell}` : cell).join(" ");
  const width2 = cells(Array.from({ length: 16 }, () => "00")).length;
  const header = cells(
    Array.from({ length: 16 }, (_2, index) => index.toString(16).padStart(2, "0"))
  );
  const grid = {
    display: "grid",
    gridTemplateColumns: `5ch ${width2}ch auto`,
    columnGap: "12px",
    alignItems: "baseline"
  };
  const asciiColumn = {
    borderLeft: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`,
    paddingLeft: "12px"
  };
  return /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      style: {
        // Sized to its content rather than to the column: a row of sixteen bytes and their
        // ASCII is wider than a message column, and a dump clipped at the cell edge hides the
        // second column it exists to show. The expanded cell scrolls instead.
        display: "inline-block",
        width: "max-content",
        maxWidth: "100%",
        overflowX: "auto",
        padding: "6px 8px",
        borderRadius: "4px",
        background: isDark ? "#0d1117" : "#ffffff",
        border: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`
      }
    },
    /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        style: {
          ...mono,
          ...grid,
          color: isDark ? "#8b949e" : "#57606a",
          borderBottom: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`,
          paddingBottom: "2px"
        }
      },
      /* @__PURE__ */ import_react6.default.createElement("span", null, "Offset"),
      /* @__PURE__ */ import_react6.default.createElement("span", null, header),
      /* @__PURE__ */ import_react6.default.createElement("span", { style: asciiColumn }, "ASCII")
    ),
    rows.map((row) => /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        key: row.offset,
        style: { ...mono, ...grid }
      },
      /* @__PURE__ */ import_react6.default.createElement("span", { style: { color: isDark ? "#6e7681" : "#8c959f" } }, row.offset),
      /* @__PURE__ */ import_react6.default.createElement("span", { style: { color: isDark ? "#ffa657" : "#953800" } }, cells(row.hex).padEnd(width2)),
      /* @__PURE__ */ import_react6.default.createElement("span", { style: { ...asciiColumn, color: isDark ? "#7ee787" : "#116329" } }, row.ascii)
    ))
  );
}
function PayloadText({ text, theme }) {
  const isDark = theme.mode !== "light";
  let document2;
  try {
    document2 = JSON.stringify(JSON.parse(text), null, 2);
  } catch {
  }
  return /* @__PURE__ */ import_react6.default.createElement(
    "pre",
    {
      style: {
        margin: 0,
        padding: "6px 8px",
        borderRadius: "4px",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: "11px",
        lineHeight: "15px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        background: isDark ? "#0d1117" : "#ffffff",
        border: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`,
        color: isDark ? "#c9d1d9" : "#24292f",
        maxHeight: "320px",
        overflow: "auto"
      }
    },
    document2 === void 0 ? text : /* @__PURE__ */ import_react6.default.createElement(
      SyntaxHighlight,
      {
        json: document2,
        theme
      }
    )
  );
}
function KeyList({ keys, isDark }) {
  return /* @__PURE__ */ import_react6.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "6px" } }, keys.map((key) => /* @__PURE__ */ import_react6.default.createElement(
    "span",
    {
      key,
      style: {
        fontSize: "10px",
        padding: "1px 6px",
        borderRadius: "3px",
        background: isDark ? "#21262d" : "#eef2f6",
        color: isDark ? "#79c0ff" : "#0969da",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
      }
    },
    key
  )));
}
function CapturePanel({
  record,
  theme
}) {
  const capture = captureOf(record);
  if (capture === void 0) return null;
  const isDark = theme.mode !== "light";
  const headers = capture.fields["headers"];
  const keys = capture.fields["keys"];
  const statusCode = typeof capture.fields["statusCode"] === "number" ? capture.fields["statusCode"] : void 0;
  const url = typeof capture.fields["url"] === "string" ? capture.fields["url"] : void 0;
  const phase = typeof capture.fields["phase"] === "string" ? capture.fields["phase"] : void 0;
  return /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      "data-capture": capture.shape,
      style: {
        marginTop: "4px",
        padding: "6px 8px",
        borderRadius: "4px",
        borderLeft: `3px solid ${isDark ? "#1f6feb" : "#0969da"}`,
        background: isDark ? "#161b22" : "#f6f8fa"
      }
    },
    /* @__PURE__ */ import_react6.default.createElement(
      CaptureHeader,
      {
        capture,
        isDark
      }
    ),
    url !== void 0 && /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        style: {
          fontSize: "11px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          marginBottom: "6px"
        }
      },
      statusCode !== void 0 && /* @__PURE__ */ import_react6.default.createElement(
        "span",
        {
          style: {
            color: statusCode < 400 ? "#22c55e" : "#ef4444",
            marginRight: "6px"
          }
        },
        statusCode
      ),
      phase === void 0 ? "" : `${phase} `,
      url
    ),
    keys !== void 0 && Array.isArray(keys) && /* @__PURE__ */ import_react6.default.createElement(
      KeyList,
      {
        keys: keys.map(String),
        isDark
      }
    ),
    headers !== void 0 && typeof headers === "object" && headers !== null && /* @__PURE__ */ import_react6.default.createElement(
      HeaderTable,
      {
        headers,
        isDark
      }
    ),
    capture.shape === "tcp.frame" && capture.payload !== void 0 && /* @__PURE__ */ import_react6.default.createElement(
      FrameDump,
      {
        payload: capture.payload,
        isDark
      }
    ),
    capture.shape !== "tcp.frame" && capture.payload !== void 0 && /* @__PURE__ */ import_react6.default.createElement(
      PayloadText,
      {
        text: capture.payload,
        theme
      }
    ),
    capture.payload === void 0 && capture.rung === "line" && /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        style: {
          fontSize: "10px",
          fontStyle: "italic",
          color: isDark ? "#8b949e" : "#57606a"
        }
      },
      "captured at the line rung \u2014 raise it in the configuration to keep the payload"
    )
  );
}

// src/client/RecordPanels.tsx
var import_react7 = __toESM(require_react(), 1);
function Chip({
  label,
  title,
  tone,
  isDark,
  onClick
}) {
  const tones = {
    intent: { dark: "#8957e5", light: "#e6dcff", inkDark: "#e6dcff", inkLight: "#5a32a3" },
    flow: { dark: "#1f6feb", light: "#ddf4ff", inkDark: "#c9d1d9", inkLight: "#0969da" },
    parent: { dark: "#30363d", light: "#eef2f6", inkDark: "#c9d1d9", inkLight: "#24292f" },
    decision: { dark: "#9e6a03", light: "#fff4d6", inkDark: "#ffd33d", inkLight: "#7d4e00" }
  };
  const tone_ = tones[tone];
  return /* @__PURE__ */ import_react7.default.createElement(
    "span",
    {
      title: title ?? label,
      onClick: onClick === void 0 ? void 0 : (e) => {
        e.stopPropagation();
        onClick();
      },
      style: {
        fontSize: "10px",
        lineHeight: "14px",
        padding: "1px 6px",
        borderRadius: "3px",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        whiteSpace: "nowrap",
        background: isDark ? tone_.dark : tone_.light,
        color: isDark ? tone_.inkDark : tone_.inkLight,
        cursor: onClick === void 0 ? "default" : "pointer"
      }
    },
    label
  );
}
function flowChips(flow) {
  const chips = [];
  const process2 = [flow.kind, flow.step].filter((part) => part !== void 0);
  if (process2.length > 0)
    chips.push({ label: process2.join(" \xB7 "), title: "the flow and the step this record is in" });
  if (flow.leg !== void 0) {
    const ends = flow.from === void 0 && flow.to === void 0 ? flow.leg : `${flow.from ?? "?"} \u2192 ${flow.to ?? "?"}`;
    const seq = flow.seq === void 0 ? "" : ` \xB7 ${flow.seq}`;
    chips.push({
      label: `${ends}${seq}`,
      title: "the call this record is one end of, and its position in the execution"
    });
  }
  if (flow.status !== void 0)
    chips.push({ label: flow.status, title: "how the run stood here" });
  return chips;
}
function intentChip(intent) {
  const who = [intent.actor, intent.tenant].filter((part) => !!part).join("@");
  const priority = intent.priority === void 0 ? "" : ` \xB7 p${intent.priority}`;
  return {
    label: `${intent.name}${who === "" ? "" : ` (${who})`}${priority}`,
    title: "who asked for this work"
  };
}
function RecordContextStrip({
  record,
  theme,
  onFilter
}) {
  const isDark = theme.mode !== "light";
  const intent = intentOf(record);
  const flow = flowOf(record);
  const decision = decisionOf(record);
  const parent = parentOf(record);
  const chips = [];
  if (intent !== void 0) {
    const { label, title } = intentChip(intent);
    chips.push(
      /* @__PURE__ */ import_react7.default.createElement(
        Chip,
        {
          key: "intent",
          label,
          title,
          tone: "intent",
          isDark,
          onClick: () => onFilter(intent.name)
        }
      )
    );
  }
  if (flow !== void 0) {
    for (const { label, title } of flowChips(flow))
      chips.push(
        /* @__PURE__ */ import_react7.default.createElement(
          Chip,
          {
            key: `flow-${label}`,
            label,
            title,
            tone: "flow",
            isDark,
            onClick: () => onFilter(flow.id)
          }
        )
      );
    chips.push(
      /* @__PURE__ */ import_react7.default.createElement(
        Chip,
        {
          key: "flow-run",
          label: `run ${flow.id.slice(0, 8)}\u2026`,
          title: `show every record of run ${flow.id}`,
          tone: "flow",
          isDark,
          onClick: () => onFilter(flow.id)
        }
      )
    );
  }
  if (decision !== void 0) {
    chips.push(
      /* @__PURE__ */ import_react7.default.createElement(
        Chip,
        {
          key: "decision",
          label: `\u2696 ${decision.discriminator}${decision.chosen === void 0 ? "" : ` \u2192 ${decision.chosen}`}`,
          title: "the branch this record explains",
          tone: "decision",
          isDark,
          onClick: () => onFilter(decision.discriminator)
        }
      )
    );
  }
  if (parent !== void 0) {
    chips.push(
      /* @__PURE__ */ import_react7.default.createElement(
        Chip,
        {
          key: "parent",
          label: `\u2934 ${parent.slice(0, 8)}\u2026`,
          title: `show the record that caused this one (${parent})`,
          tone: "parent",
          isDark,
          onClick: () => onFilter(parent)
        }
      )
    );
  }
  if (chips.length === 0) return null;
  return /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
        alignItems: "center",
        marginBottom: "4px"
      }
    },
    chips
  );
}
function DecisionPanel({
  decision,
  theme
}) {
  const isDark = theme.mode !== "light";
  const mono = {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    fontSize: "10px",
    lineHeight: "15px"
  };
  return /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      "data-decision": decision.discriminator,
      style: {
        marginTop: "4px",
        padding: "4px 8px",
        borderRadius: "4px",
        borderLeft: `3px solid ${isDark ? "#9e6a03" : "#bf8700"}`,
        background: isDark ? "#161b22" : "#fffbef",
        ...mono
      }
    },
    /* @__PURE__ */ import_react7.default.createElement("div", { style: { marginBottom: "2px" } }, /* @__PURE__ */ import_react7.default.createElement("span", { style: { color: isDark ? "#ffd33d" : "#7d4e00" } }, decision.discriminator)),
    decision.candidates.length === 0 ? /* @__PURE__ */ import_react7.default.createElement("div", { style: { fontStyle: "italic", color: isDark ? "#8b949e" : "#57606a" } }, "the branch reported no candidates") : /* @__PURE__ */ import_react7.default.createElement("div", null, decision.candidates.map((candidate) => {
      const chosen = candidate === decision.chosen;
      return /* @__PURE__ */ import_react7.default.createElement(
        "div",
        {
          key: candidate,
          style: {
            color: chosen ? isDark ? "#7ee787" : "#116329" : isDark ? "#8b949e" : "#57606a",
            fontWeight: chosen ? "bold" : "normal"
          }
        },
        chosen ? "\u2713 " : "\xB7 ",
        candidate
      );
    })),
    decision.values !== void 0 ? /* @__PURE__ */ import_react7.default.createElement("div", { style: { marginTop: "2px" } }, /* @__PURE__ */ import_react7.default.createElement(
      SyntaxHighlight,
      {
        json: JSON.stringify(decision.values, null, 2),
        theme
      }
    )) : /* @__PURE__ */ import_react7.default.createElement("div", { style: { fontStyle: "italic", color: isDark ? "#8b949e" : "#57606a" } }, "the values it was decided from stayed in the process that decided")
  );
}
function ExchangePanel({
  exchange,
  theme,
  searchText = ""
}) {
  const isDark = theme.mode !== "light";
  const status = exchange.status;
  const ok = (status ?? 200) < 400;
  const statusColour = ok ? "#22c55e" : "#ef4444";
  const headers = (bag, colour) => bag === void 0 ? null : /* @__PURE__ */ import_react7.default.createElement("div", { style: { fontSize: "10px", marginTop: "4px" } }, Object.entries(bag).map(([key, value]) => /* @__PURE__ */ import_react7.default.createElement("div", { key }, /* @__PURE__ */ import_react7.default.createElement("span", { style: { color: colour } }, key + ":"), " ", highlightSearch(String(value), searchText))));
  const body = (value, label, colour, tint) => value === void 0 ? null : /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      style: {
        marginTop: "6px",
        fontSize: "10px",
        lineHeight: "15px",
        background: isDark ? "#161b22" : tint,
        padding: "6px",
        borderRadius: "3px",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
      }
    },
    /* @__PURE__ */ import_react7.default.createElement("div", { style: { color: colour, marginBottom: "3px" } }, label),
    /* @__PURE__ */ import_react7.default.createElement("div", { style: { whiteSpace: "pre-wrap" } }, /* @__PURE__ */ import_react7.default.createElement(
      SyntaxHighlight,
      {
        json: typeof value === "string" ? value : JSON.stringify(value, null, 2),
        theme,
        searchText
      }
    ))
  );
  return /* @__PURE__ */ import_react7.default.createElement("div", { "data-exchange": "" }, exchange.request !== void 0 && /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      style: {
        marginTop: "4px",
        padding: "6px 8px",
        background: isDark ? "#1c2128" : "#f0f6ff",
        borderLeft: "3px solid #1f6feb",
        borderRadius: "4px"
      }
    },
    /* @__PURE__ */ import_react7.default.createElement("div", { style: { fontWeight: "bold", marginBottom: "4px", fontSize: "11px" } }, highlightSearch(exchange.request, searchText)),
    headers(exchange.requestHeaders, isDark ? "#79c0ff" : "#0969da"),
    body(
      exchange.requestBody,
      "Request Body:",
      isDark ? "#79c0ff" : "#0969da",
      "#e8f0ff"
    )
  ), /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      style: {
        marginTop: "4px",
        padding: "6px 8px",
        background: isDark ? "#1c2128" : "#f0fff4",
        borderLeft: `3px solid ${statusColour}`,
        borderRadius: "4px"
      }
    },
    /* @__PURE__ */ import_react7.default.createElement("div", { style: { fontWeight: "bold", fontSize: "11px" } }, /* @__PURE__ */ import_react7.default.createElement("span", { style: { color: statusColour } }, status ?? 200), exchange.elapsedMs === void 0 ? "" : ` (${exchange.elapsedMs}ms)`),
    headers(exchange.responseHeaders, statusColour),
    body(exchange.responseBody, "Response Body:", statusColour, "#e8fff0")
  ));
}

// src/client/LogViewer.tsx
var ViewerContext = (0, import_react8.createContext)({
  theme: {},
  searchText: "",
  clientConfig: null,
  onTraceFilter: () => {
  },
  onToggleExpanded: () => {
  },
  onFilterText: () => {
  }
});
var ExpandedRowsContext = (0, import_react8.createContext)(null);
var DETAIL_MAX = 520;
var CELL_CHROME = 16;
var DETAIL_MIN = 68;
var clamp = (value, low, high) => Math.min(Math.max(value, low), high);
var monospaceLines = (text, columns = 90) => Math.ceil(text.length / columns) + (text.match(/\n/g)?.length ?? 0);
function payloadLines(payload) {
  try {
    return JSON.stringify(JSON.parse(payload), null, 2).split("\n").length;
  } catch {
    return monospaceLines(payload);
  }
}
function detailHeightOf(row, part) {
  if (part === "json") {
    return clamp(
      JSON.stringify(row, null, 2).split("\n").length * 15 + 20,
      DETAIL_MIN,
      DETAIL_MAX
    );
  }
  const capture = captureOf(row);
  if (capture !== void 0) {
    const headers = capture.fields["headers"];
    const headerRows = headers !== null && typeof headers === "object" ? Object.keys(headers).length : 0;
    const requestLine = capture.fields["url"] === void 0 ? 0 : 20;
    if (capture.shape === "tcp.frame" && capture.payload !== void 0) {
      const bytes = bytesOfHex(capture.payload)?.length ?? 0;
      return clamp(Math.ceil(bytes / 16) * 14 + 82 + headerRows * 15, DETAIL_MIN, DETAIL_MAX);
    }
    if (capture.payload !== void 0) {
      return clamp(
        payloadLines(capture.payload) * 15 + 70 + requestLine + headerRows * 15,
        DETAIL_MIN,
        DETAIL_MAX
      );
    }
    return clamp(DETAIL_MIN + requestLine + headerRows * 15, DETAIL_MIN, DETAIL_MAX);
  }
  const params = paramsOf(row);
  const chips = intentOf(row) === void 0 && flowOf(row) === void 0 && parentOf(row) === void 0 && decisionOf(row) === void 0 ? 0 : 24;
  const exchange = exchangeOf(row);
  const side = (headers, body) => headers === void 0 && body === void 0 ? 0 : 40 + (headers === void 0 ? 0 : Object.keys(headers).length * 16) + (body === void 0 ? 0 : 24 + payloadLines(typeof body === "string" ? body : JSON.stringify(body, null, 2)) * 15);
  const exchangeH = exchange === void 0 ? 0 : side(exchange.requestHeaders, exchange.requestBody) + side(exchange.responseHeaders, exchange.responseBody) + (exchange.request === void 0 ? 0 : 20);
  const decision = decisionOf(row);
  const decisionH = decision === void 0 ? 0 : 30 + decision.candidates.length * 15 + (decision.values === void 0 ? 15 : monospaceLines(JSON.stringify(decision.values, null, 2)) * 15);
  const blocks = chips + exchangeH + decisionH + (row.err ? 110 + Math.min((row.err.stack?.match(/\n/g) ?? []).length * 16, 200) : 0) + (params === void 0 ? 0 : 30 + monospaceLines(JSON.stringify(params, null, 2)) * 15);
  return clamp(monospaceLines(row.msg ?? "", 60) * 18 + 14 + blocks, DETAIL_MIN, DETAIL_MAX);
}
function rowHeightOf(row, expanded) {
  const json = expanded.json.has(row.id);
  const message = expanded.message.has(row.id);
  if (!json && !message) return SINGLE_ROW_HEIGHT;
  const detail = Math.max(
    json ? detailHeightOf(row, "json") : 0,
    message ? detailHeightOf(row, "message") : 0
  );
  return Math.min(detail, DETAIL_MAX) + CELL_CHROME;
}
var SINGLE_ROW_HEIGHT = 26;
var EXPANDED_DETAIL_STYLE = {
  overflow: "auto",
  // Room for the scrollbar, so a scrollable panel does not render the end of a line underneath it.
  paddingRight: "2px"
};
function useMessageExpanded(rowId) {
  const { onToggleExpanded } = (0, import_react8.use)(ViewerContext);
  const expanded = import_react8.default.use(ExpandedRowsContext);
  return {
    isExpanded: expanded?.message.has(rowId) ?? false,
    toggle: (0, import_react8.useCallback)(() => onToggleExpanded(rowId, "message"), [onToggleExpanded, rowId])
  };
}
function useJsonExpanded(rowId) {
  const { onToggleExpanded } = (0, import_react8.use)(ViewerContext);
  const expanded = import_react8.default.use(ExpandedRowsContext);
  return {
    isExpanded: expanded?.json.has(rowId) ?? false,
    toggle: (0, import_react8.useCallback)(() => onToggleExpanded(rowId, "json"), [onToggleExpanded, rowId])
  };
}
function formatTimestamp(time) {
  if (!time) return "";
  const timeMs = time < 1e10 ? time * 1e3 : time;
  const d = new Date(timeMs);
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");
  const ms = String(d.getMilliseconds()).padStart(3, "0");
  return `${hours}:${minutes}:${seconds}.${ms}`;
}
function timeAgo(time) {
  if (!time) return "";
  const timeMs = time < 1e10 ? time * 1e3 : time;
  const diff = Date.now() - timeMs;
  if (diff < 1e3) return "just now";
  if (diff < 6e4) return `${Math.floor(diff / 1e3)}s ago`;
  if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
  if (diff < 864e5) return `${Math.floor(diff / 36e5)}h ago`;
  return `${Math.floor(diff / 864e5)}d ago`;
}
function CopyButton({ text, isDark = true }) {
  const [copied, setCopied] = (0, import_react8.useState)(false);
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2e3);
      },
      (err) => {
        console.error("Failed to copy:", err);
      }
    );
  };
  return /* @__PURE__ */ import_react8.default.createElement(
    "button",
    {
      onClick: handleClick,
      onMouseDown: (e) => {
        e.stopPropagation();
        e.preventDefault();
      },
      onMouseUp: (e) => {
        e.stopPropagation();
        e.preventDefault();
      },
      onDoubleClick: (e) => {
        e.stopPropagation();
        e.preventDefault();
      },
      style: {
        background: isDark ? "rgba(110, 118, 129, 0.4)" : "rgba(175, 184, 193, 0.2)",
        border: "none",
        cursor: "pointer",
        padding: "3px 6px",
        fontSize: "13px",
        color: isDark ? "#c9d1d9" : "#24292f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        flexShrink: 0,
        minWidth: "28px",
        height: "24px"
      },
      title: copied ? "Copied!" : "Copy to clipboard"
    },
    copied ? "\u2713" : "\u{1F4CB}"
  );
}
function LevelCell({ row }) {
  const { theme } = (0, import_react8.use)(ViewerContext);
  const [isHovered, setIsHovered] = (0, import_react8.useState)(false);
  const name = row.levelName ?? LEVEL_NAME[row.level ?? 30] ?? "unknown";
  const colors = theme.levels ?? {};
  const color = colors[name] ?? "#6b7280";
  const isDark = theme.mode === "dark";
  return /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        minHeight: "18px",
        position: "relative",
        paddingRight: isHovered ? "36px" : "0",
        flexWrap: "nowrap",
        overflow: "visible"
      },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: {
          padding: "0 6px",
          borderRadius: "3px",
          fontSize: "10px",
          lineHeight: "16px",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#fff",
          background: color,
          display: "inline-block",
          minWidth: "45px",
          textAlign: "center",
          flexShrink: 0
        }
      },
      name
    ),
    isHovered && /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          right: "4px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "auto"
        }
      },
      /* @__PURE__ */ import_react8.default.createElement(
        CopyButton,
        {
          text: name,
          isDark
        }
      )
    )
  );
}
function NameCell({ row }) {
  const { searchText, theme } = (0, import_react8.use)(ViewerContext);
  const [isHovered, setIsHovered] = (0, import_react8.useState)(false);
  const isDark = theme.mode === "dark";
  const service = serviceOf(row);
  const context = contextOf(row);
  return /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontSize: "12px",
        display: "flex",
        alignItems: "center",
        minHeight: "18px",
        position: "relative",
        paddingRight: isHovered && service ? "36px" : "0"
      },
      title: context === void 0 ? service ?? "" : `${service ?? ""} \xB7 ${context}`,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: {
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "flex",
          gap: "6px"
        }
      },
      /* @__PURE__ */ import_react8.default.createElement("span", null, highlightSearch(service ?? "", searchText)),
      context !== void 0 && /* @__PURE__ */ import_react8.default.createElement(
        "span",
        {
          style: {
            color: isDark ? "#8b949e" : "#57606a",
            fontSize: "11px",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }
        },
        highlightSearch(context, searchText)
      )
    ),
    isHovered && service && /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          right: "4px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "auto"
        }
      },
      /* @__PURE__ */ import_react8.default.createElement(
        CopyButton,
        {
          text: service,
          isDark
        }
      )
    )
  );
}
function TraceLinkCell({ row }) {
  const { clientConfig, onTraceFilter, theme } = (0, import_react8.use)(ViewerContext);
  const [isHovered, setIsHovered] = (0, import_react8.useState)(false);
  const trace = traceOf(row);
  if (trace === void 0) return null;
  const isDark = theme.mode === "dark";
  const handleFilterClick = (e) => {
    e.stopPropagation();
    onTraceFilter(trace);
  };
  const handleExternalLink = (e) => {
    e.stopPropagation();
    if (clientConfig?.traceUrlPattern) {
      const start = row.time ? row.time - 6e4 : Date.now() - 36e5;
      const end = row.time ? row.time + 6e4 : Date.now();
      const url = clientConfig.traceUrlPattern.replace("{traceId}", trace).replace("{startTime}", String(start)).replace("{endTime}", String(end));
      window.open(url, "_blank");
    }
  };
  return /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "4px",
        minHeight: "18px",
        position: "relative"
      },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    clientConfig?.traceUrlPattern && /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: {
          cursor: "pointer",
          color: "#58a6ff",
          fontSize: "14px",
          lineHeight: "1"
        },
        onClick: handleExternalLink,
        title: "Open trace in external viewer"
      },
      "\u2197"
    ),
    /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: {
          cursor: "pointer",
          color: "#58a6ff",
          textDecoration: "underline",
          fontSize: "12px"
        },
        onClick: handleFilterClick,
        title: "Click to filter by this trace ID"
      },
      trace.substring(0, 16) + "\u2026"
    ),
    isHovered && /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          right: "4px",
          top: "50%",
          transform: "translateY(-50%)"
        }
      },
      /* @__PURE__ */ import_react8.default.createElement(
        CopyButton,
        {
          text: trace,
          isDark
        }
      )
    )
  );
}
function SignalCell({ row }) {
  const { theme, searchText } = (0, import_react8.use)(ViewerContext);
  const isDark = isDarkMode(theme);
  const signal = signalOf(row);
  const capture = captureOf(row);
  return /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "4px",
        minHeight: "18px",
        overflow: "hidden",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: "11px"
      },
      title: capture === void 0 ? signal ?? "" : `${signal ?? ""} \xB7 ${capture.shape}`
    },
    capture !== void 0 && /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: {
          flexShrink: 0,
          padding: "0 4px",
          borderRadius: "3px",
          background: isDark ? "rgba(56, 139, 253, 0.25)" : "#ddf4ff",
          color: isDark ? "#79c0ff" : "#0969da"
        }
      },
      "\u2317"
    ),
    /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: signal === void 0 ? isDark ? "#6e7681" : "#8c959f" : void 0
        }
      },
      highlightSearch(signal ?? "\u2014", searchText)
    )
  );
}
function MessageCell({ row }) {
  const { searchText, theme, onFilterText } = (0, import_react8.use)(ViewerContext);
  const { isExpanded, toggle } = useMessageExpanded(row.id);
  const [isHovered, setIsHovered] = (0, import_react8.useState)(false);
  const isDark = isDarkMode(theme);
  const capture = captureOf(row);
  const decision = decisionOf(row);
  const exchange = exchangeOf(row);
  const handleClick = (0, import_react8.useCallback)(
    (e) => {
      if (e.target.closest("[data-copy-button]")) {
        return;
      }
      toggle();
    },
    [toggle]
  );
  const baseStyle = {
    overflow: "hidden",
    fontSize: "12px",
    lineHeight: "16px"
  };
  const singleLineStyle = {
    ...baseStyle,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    minHeight: "18px"
  };
  const multiLineStyle = {
    ...baseStyle,
    wordBreak: "break-word",
    padding: "4px 0",
    // An expanded row may be wider than its column — a hex dump is — and a dump clipped at the cell
    // edge is a dump a reader has to widen the column to finish reading.
    overflow: "auto"
  };
  const textStyle = { whiteSpace: "pre-wrap" };
  const getFullText = () => {
    let text = row.msg ?? "";
    if (row.err) {
      text += `

[${row.err.type ?? "Error"}: ${row.err.message ?? "No message"}]`;
      if (row.err.stack) {
        text += `
${row.err.stack}`;
      }
    }
    if (row.req) {
      text += `

=== HTTP Request ===
${row.req.method ?? "GET"} ${row.req.url ?? ""}`;
      if (row.req.headers) {
        text += "\n\nHeaders:";
        Object.entries(row.req.headers).forEach(([key, value]) => {
          text += `
${key}: ${value}`;
        });
      }
      if (row.req.body) {
        text += `

Request Body:
${JSON.stringify(row.req.body, null, 2)}`;
      }
    }
    if (row.res) {
      text += `

=== HTTP Response ===
Status: ${row.res.statusCode ?? 200}`;
      if (row.res.responseTime) {
        text += ` (${row.res.responseTime}ms)`;
      }
      if (row.res.headers) {
        text += "\n\nHeaders:";
        Object.entries(row.res.headers).forEach(([key, value]) => {
          text += `
${key}: ${value}`;
        });
      }
      if (row.res.body) {
        text += `

Response Body:
${JSON.stringify(row.res.body, null, 2)}`;
      }
    }
    return text;
  };
  const messageContent = highlightSearch(row.msg ?? "", searchText);
  if (!isExpanded) {
    return /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        style: {
          ...singleLineStyle,
          position: "relative",
          cursor: "pointer"
        },
        title: row.msg ?? "",
        onClick: handleClick,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false)
      },
      /* @__PURE__ */ import_react8.default.createElement(
        "span",
        {
          style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            paddingRight: isHovered ? "36px" : "0"
          }
        },
        messageContent,
        row.err && /* @__PURE__ */ import_react8.default.createElement("span", { style: { color: theme.levels?.error ?? "#ef4444", marginLeft: "8px" } }, highlightSearch(
          ` [${row.err.type ?? "Error"}: ${row.err.message ?? ""}]`,
          searchText
        ))
      ),
      isHovered && /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          "data-copy-button": true,
          style: {
            position: "absolute",
            right: "4px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "auto"
          },
          onMouseDown: (e) => e.stopPropagation(),
          onMouseUp: (e) => e.stopPropagation(),
          onClick: (e) => e.stopPropagation(),
          onDoubleClick: (e) => e.stopPropagation()
        },
        /* @__PURE__ */ import_react8.default.createElement(
          CopyButton,
          {
            text: getFullText(),
            isDark
          }
        )
      )
    );
  }
  return /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      style: { ...multiLineStyle, position: "relative", cursor: "pointer" },
      onClick: handleClick,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    " ",
    isHovered && /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        "data-copy-button": true,
        style: {
          position: "absolute",
          top: "8px",
          right: "8px",
          zIndex: 10,
          pointerEvents: "auto"
        },
        onMouseDown: (e) => e.stopPropagation(),
        onMouseUp: (e) => e.stopPropagation(),
        onClick: (e) => e.stopPropagation(),
        onDoubleClick: (e) => e.stopPropagation()
      },
      /* @__PURE__ */ import_react8.default.createElement(
        CopyButton,
        {
          text: getFullText(),
          isDark
        }
      )
    ),
    /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        style: { ...EXPANDED_DETAIL_STYLE, maxHeight: `${detailHeightOf(row, "message")}px` }
      },
      capture === void 0 && /* @__PURE__ */ import_react8.default.createElement("div", { style: { ...textStyle, marginBottom: "4px" } }, messageContent),
      row.err && /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          style: {
            marginBottom: "8px",
            padding: "8px",
            background: isDarkMode(theme) ? "#1c2128" : "#fff8e6",
            borderLeft: `3px solid ${theme.levels?.error ?? "#ef4444"}`,
            borderRadius: "4px"
          }
        },
        /* @__PURE__ */ import_react8.default.createElement(
          "div",
          {
            style: {
              color: theme.levels?.error ?? "#ef4444",
              fontWeight: "bold",
              marginBottom: "4px"
            }
          },
          highlightSearch(
            `${row.err.type ?? "Error"}: ${row.err.message ?? "No message"}`,
            searchText
          )
        ),
        row.err.stack && /* @__PURE__ */ import_react8.default.createElement(
          "div",
          {
            style: {
              fontSize: "11px",
              fontFamily: "monospace",
              whiteSpace: "pre"
            }
          },
          highlightSearch(row.err.stack, searchText)
        )
      ),
      /* @__PURE__ */ import_react8.default.createElement(
        RecordContextStrip,
        {
          record: row,
          theme,
          onFilter: onFilterText
        }
      ),
      exchange !== void 0 && /* @__PURE__ */ import_react8.default.createElement(
        ExchangePanel,
        {
          exchange,
          theme,
          searchText
        }
      ),
      decision !== void 0 && /* @__PURE__ */ import_react8.default.createElement(
        DecisionPanel,
        {
          decision,
          theme
        }
      ),
      /* @__PURE__ */ import_react8.default.createElement(
        CapturePanel,
        {
          record: row,
          theme
        }
      ),
      paramsOf(row) !== void 0 && /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          style: {
            marginTop: "4px",
            padding: "6px 8px",
            borderRadius: "4px",
            borderLeft: `3px solid ${isDarkMode(theme) ? "#6e7681" : "#8c959f"}`,
            background: isDarkMode(theme) ? "#161b22" : "#f6f8fa",
            fontSize: "10px",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
          }
        },
        /* @__PURE__ */ import_react8.default.createElement("div", { style: { marginBottom: "4px", fontWeight: "bold" } }, [operationOf(row), messageIdOf(row)].filter((fact) => fact !== void 0).join(" \xB7 ")),
        /* @__PURE__ */ import_react8.default.createElement("div", { style: textStyle }, /* @__PURE__ */ import_react8.default.createElement(
          SyntaxHighlight,
          {
            json: JSON.stringify(paramsOf(row), null, 2),
            theme,
            searchText
          }
        ))
      )
    )
  );
}
function isDarkMode(theme) {
  return theme.mode === "dark";
}
function JSONCell({ row }) {
  const { theme, searchText } = (0, import_react8.use)(ViewerContext);
  const { isExpanded, toggle } = useJsonExpanded(row.id);
  const [isHovered, setIsHovered] = (0, import_react8.useState)(false);
  const isDark = isDarkMode(theme);
  const handleClick = (0, import_react8.useCallback)(
    (e) => {
      if (e.target.closest("[data-copy-button]")) {
        return;
      }
      toggle();
    },
    [toggle]
  );
  const jsonString = JSON.stringify(row, null, 2);
  if (!isExpanded) {
    return /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          minHeight: "18px",
          position: "relative",
          cursor: "pointer"
        },
        title: jsonString,
        onClick: handleClick,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false)
      },
      /* @__PURE__ */ import_react8.default.createElement(
        "span",
        {
          style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            paddingRight: isHovered ? "36px" : "0"
          }
        },
        JSON.stringify(row)
      ),
      isHovered && /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          "data-copy-button": true,
          style: {
            position: "absolute",
            right: "4px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "auto"
          },
          onMouseDown: (e) => e.stopPropagation(),
          onMouseUp: (e) => e.stopPropagation(),
          onClick: (e) => e.stopPropagation(),
          onDoubleClick: (e) => e.stopPropagation()
        },
        /* @__PURE__ */ import_react8.default.createElement(
          CopyButton,
          {
            text: jsonString,
            isDark
          }
        )
      )
    );
  }
  return /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      style: {
        ...EXPANDED_DETAIL_STYLE,
        maxHeight: `${detailHeightOf(row, "json")}px`,
        fontSize: "11px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
        fontFamily: "monospace",
        padding: "6px 0",
        position: "relative",
        cursor: "pointer"
      },
      onClick: handleClick,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    isHovered && /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        "data-copy-button": true,
        style: {
          position: "absolute",
          top: "8px",
          right: "8px",
          zIndex: 10,
          pointerEvents: "auto"
        },
        onMouseDown: (e) => e.stopPropagation(),
        onMouseUp: (e) => e.stopPropagation(),
        onClick: (e) => e.stopPropagation(),
        onDoubleClick: (e) => e.stopPropagation()
      },
      /* @__PURE__ */ import_react8.default.createElement(
        CopyButton,
        {
          text: jsonString,
          isDark
        }
      )
    ),
    /* @__PURE__ */ import_react8.default.createElement(
      SyntaxHighlight,
      {
        json: jsonString,
        theme,
        searchText
      }
    )
  );
}
function LogViewer({
  config: configProp,
  source,
  theme: themeProp,
  initialSearchText = "",
  initialExpandedRows,
  initialExpandedJsonRows
}) {
  const [entries, setEntries] = (0, import_react8.useState)([]);
  const [clientConfig, setClientConfig] = (0, import_react8.useState)(null);
  const [connected, setConnected] = (0, import_react8.useState)(false);
  const [filters, setFilters] = (0, import_react8.useState)({});
  const [searchText, setSearchText] = (0, import_react8.useState)(initialSearchText);
  const [expandedRows, setExpandedRows] = (0, import_react8.useState)(() => ({
    message: initialExpandedRows ?? /* @__PURE__ */ new Set(),
    json: initialExpandedJsonRows ?? /* @__PURE__ */ new Set()
  }));
  const [autoScroll, setAutoScroll] = (0, import_react8.useState)(false);
  const [timeMode, setTimeMode] = (0, import_react8.useState)("absolute");
  const wsRef = (0, import_react8.useRef)(null);
  const gridApiRef = (0, import_react8.useRef)(null);
  const lastIdRef = (0, import_react8.useRef)("");
  const entriesRef = (0, import_react8.useRef)([]);
  const filtersRef = (0, import_react8.useRef)({});
  const uniqueServiceNames = (0, import_react8.useMemo)(() => {
    const names = /* @__PURE__ */ new Set();
    entries.forEach((e) => {
      const context = contextOf(e);
      const service = serviceOf(e);
      if (context !== void 0) names.add(context);
      else if (service !== void 0) names.add(service);
    });
    return Array.from(names).sort();
  }, [entries]);
  const uniqueSignals = (0, import_react8.useMemo)(() => {
    const signals = /* @__PURE__ */ new Set();
    for (const entry of entries) {
      const signal = signalOf(entry);
      if (signal !== void 0) signals.add(signal);
    }
    return Array.from(signals).sort();
  }, [entries]);
  const uniqueShapes = (0, import_react8.useMemo)(() => {
    const shapes = /* @__PURE__ */ new Set();
    for (const entry of entries) {
      const capture = captureOf(entry);
      if (capture !== void 0) shapes.add(capture.shape);
    }
    return Array.from(shapes).sort();
  }, [entries]);
  const theme = (0, import_react8.useMemo)(
    () => ({ ...clientConfig?.theme ?? {}, ...themeProp }),
    [clientConfig?.theme, themeProp]
  );
  const isDark = theme.mode === "dark";
  entriesRef.current = entries;
  filtersRef.current = filters;
  (0, import_react8.useEffect)(() => {
    if (source) {
      setClientConfig({
        wsUrl: "",
        apiUrl: "",
        recentCount: 200,
        properties: {},
        theme: {},
        ...source.config
      });
      return;
    }
    if (typeof configProp === "object" && configProp) {
      setClientConfig(configProp);
      return;
    }
    const configUrl = typeof configProp === "string" ? configProp : "/api/config";
    fetch(configUrl).then((r) => r.json()).then(setClientConfig).catch((err) => console.error("[blong-log] Failed to load config:", err));
  }, [configProp, source]);
  (0, import_react8.useEffect)(() => {
    if (!source) return;
    let cancelled = false;
    let timer;
    const abort = new AbortController();
    const loadOnce = async () => {
      try {
        const answer = await source.load({
          ...lastIdRef.current ? { after: lastIdRef.current } : { limit: 200 }
        });
        if (cancelled) return;
        setConnected(true);
        if (answer.entries.length > 0) {
          setEntries((prev) => {
            const seen = new Set(prev.map((entry) => entry.id));
            const added = answer.entries.filter((entry) => !seen.has(entry.id));
            if (added.length === 0) return prev;
            const next = [...prev, ...added];
            next.sort((a, b2) => a.id.localeCompare(b2.id));
            lastIdRef.current = next[next.length - 1].id;
            return next.length > 1e4 ? next.slice(-5e3) : next;
          });
        }
      } catch (err) {
        if (cancelled) return;
        setConnected(false);
        console.error("[blong-log] Failed to load entries:", err);
      }
    };
    const watch = async () => {
      const frames = await source.subscribe?.({ signal: abort.signal });
      if (!frames || cancelled) return;
      try {
        for await (const _wake of frames) {
          if (cancelled) break;
          await loadOnce();
        }
      } catch (err) {
        if (cancelled) return;
        setConnected(false);
        console.error("[blong-log] The subscription failed:", err);
      }
      if (!cancelled) timer = setTimeout(watch, source.intervalMs ?? 1e3);
    };
    const start = async () => {
      await loadOnce();
      if (cancelled) return;
      if (source.subscribe) void watch();
      else if (!cancelled) timer = setTimeout(watch, source.intervalMs ?? 1e3);
    };
    void start();
    return () => {
      cancelled = true;
      abort.abort();
      if (timer) clearTimeout(timer);
    };
  }, [source]);
  (0, import_react8.useEffect)(() => {
    if (!clientConfig || source) return;
    const wsUrl = clientConfig.wsUrl;
    let ws;
    let reconnectTimer;
    function connect() {
      ws = new WebSocket(wsUrl);
      ws.onopen = () => {
        setConnected(true);
        const msg = { type: "subscribe", filters: filtersRef.current };
        ws.send(JSON.stringify(msg));
      };
      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(String(event.data));
          if (msg.type === "entries") {
            setEntries((prev) => {
              const combined = [...prev, ...msg.entries];
              const seen = /* @__PURE__ */ new Set();
              const unique = combined.filter((e) => {
                if (seen.has(e.id)) return false;
                seen.add(e.id);
                return true;
              });
              unique.sort((a, b2) => a.id.localeCompare(b2.id));
              if (unique.length > 0) {
                lastIdRef.current = unique[unique.length - 1].id;
              }
              return unique;
            });
          } else if (msg.type === "entry") {
            setEntries((prev) => {
              const next = [...prev, msg.entry];
              lastIdRef.current = msg.entry.id;
              if (next.length > 1e4) return next.slice(-5e3);
              return next;
            });
          }
        } catch {
        }
      };
      ws.onclose = () => {
        setConnected(false);
        reconnectTimer = setTimeout(connect, 3e3);
      };
      ws.onerror = () => {
        ws.close();
      };
      wsRef.current = ws;
    }
    connect();
    return () => {
      clearTimeout(reconnectTimer);
      if (ws) ws.close();
      wsRef.current = null;
    };
  }, [clientConfig, source]);
  (0, import_react8.useEffect)(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      const msg = { type: "subscribe", filters };
      wsRef.current.send(JSON.stringify(msg));
    }
  }, [filters]);
  (0, import_react8.useEffect)(() => {
    if (autoScroll && lastIdRef.current && gridApiRef.current) {
      try {
        gridApiRef.current.exec("scroll", { row: lastIdRef.current });
      } catch {
      }
    }
  }, [entries, autoScroll]);
  const handleLevelChange = (0, import_react8.useCallback)((e) => {
    setFilters((f) => ({ ...f, level: e.target.value || void 0 }));
  }, []);
  const handleNameChange = (0, import_react8.useCallback)((e) => {
    setFilters((f) => ({ ...f, name: e.target.value || void 0 }));
  }, []);
  const handleSignalChange = (0, import_react8.useCallback)((e) => {
    setFilters((f) => ({ ...f, signal: e.target.value || void 0 }));
  }, []);
  const handleCaptureChange = (0, import_react8.useCallback)((e) => {
    setFilters((f) => ({ ...f, capture: e.target.value || void 0 }));
  }, []);
  const handleHasErrorChange = (0, import_react8.useCallback)((e) => {
    setFilters((f) => ({ ...f, hasError: e.target.checked || void 0 }));
  }, []);
  const handleCustomPropertyChange = (0, import_react8.useCallback)((propName, value) => {
    setFilters((f) => ({
      ...f,
      properties: value ? { ...f.properties ?? {}, [propName]: value } : (() => {
        const { [propName]: _2, ...rest } = f.properties ?? {};
        return Object.keys(rest).length > 0 ? rest : void 0;
      })()
    }));
  }, []);
  const handleTraceFilter = (0, import_react8.useCallback)((traceId) => {
    setFilters((f) => f.traceId === traceId ? { ...f, traceId: void 0 } : { ...f, traceId });
  }, []);
  const handleSearchChange = (0, import_react8.useCallback)((e) => {
    setSearchText(e.target.value);
  }, []);
  const handleSearchSubmit = (0, import_react8.useCallback)(
    (e) => {
      if (e.key === "Enter") {
        setFilters((f) => ({ ...f, search: searchText || void 0 }));
      }
    },
    [searchText]
  );
  const clearFilters = (0, import_react8.useCallback)(() => {
    setFilters({});
    setSearchText("");
  }, []);
  const displayEntries = (0, import_react8.useMemo)(() => {
    let result = entries;
    if (filters.traceId) {
      result = result.filter((e) => traceOf(e) === filters.traceId);
    }
    if (filters.level) {
      const minLevel = Object.entries({
        trace: 10,
        debug: 20,
        info: 30,
        warn: 40,
        error: 50,
        fatal: 60
      }).find(([name]) => name === filters.level)?.[1] ?? 30;
      result = result.filter((e) => (e.level ?? 30) >= minLevel);
    }
    if (filters.name) {
      result = result.filter((e) => (contextOf(e) ?? serviceOf(e)) === filters.name);
    }
    if (filters.signal) {
      result = result.filter((e) => signalOf(e) === filters.signal);
    }
    if (filters.capture) {
      result = result.filter((e) => captureOf(e)?.shape === filters.capture);
    }
    if (filters.hasError) {
      result = result.filter((e) => e.err || (e.level ?? 0) >= 50);
    }
    if (searchText) {
      const search = searchText.toLowerCase();
      result = result.filter((e) => JSON.stringify(e).toLowerCase().includes(search));
    }
    return result;
  }, [entries, searchText, filters]);
  const gridRows = (0, import_react8.useMemo)(
    () => displayEntries.map((entry) => ({
      ...entry,
      rowHeight: rowHeightOf(entry, expandedRows)
    })),
    [displayEntries, expandedRows]
  );
  const columns = (0, import_react8.useMemo)(
    () => [
      {
        id: "time",
        header: /* @__PURE__ */ import_react8.default.createElement(
          "span",
          {
            style: { cursor: "pointer", userSelect: "none" },
            onClick: () => setTimeMode((m) => m === "absolute" ? "relative" : "absolute"),
            title: "Click to toggle between absolute and relative time"
          },
          timeMode === "absolute" ? "Time" : "Ago"
        ),
        width: timeMode === "absolute" ? 105 : 65,
        cell: ({ row }) => {
          const [isHovered, setIsHovered] = (0, import_react8.useState)(false);
          const timeText = timeMode === "absolute" ? formatTimestamp(row.time) : timeAgo(row.time);
          const timeMs = row.time && row.time < 1e10 ? row.time * 1e3 : row.time;
          const fullTimeText = timeMs ? new Date(timeMs).toISOString() : "";
          return /* @__PURE__ */ import_react8.default.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                minHeight: "18px",
                fontSize: "12px",
                cursor: "pointer",
                position: "relative",
                paddingRight: isHovered && fullTimeText ? "36px" : "0",
                flexWrap: "nowrap",
                overflow: "visible"
              },
              onMouseDown: (e) => {
                e.stopPropagation();
                setTimeMode((m) => m === "absolute" ? "relative" : "absolute");
              },
              onMouseUp: (e) => e.stopPropagation(),
              onClick: (e) => e.stopPropagation(),
              onDoubleClick: (e) => e.stopPropagation(),
              title: "Click to toggle between absolute and relative time",
              onMouseEnter: () => setIsHovered(true),
              onMouseLeave: () => setIsHovered(false)
            },
            /* @__PURE__ */ import_react8.default.createElement("span", { style: { flexShrink: 0 } }, timeText),
            isHovered && fullTimeText && /* @__PURE__ */ import_react8.default.createElement(
              "div",
              {
                style: {
                  position: "absolute",
                  right: "4px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "auto"
                },
                onMouseDown: (e) => e.stopPropagation(),
                onMouseUp: (e) => e.stopPropagation(),
                onClick: (e) => e.stopPropagation(),
                onDoubleClick: (e) => e.stopPropagation()
              },
              /* @__PURE__ */ import_react8.default.createElement(
                CopyButton,
                {
                  text: fullTimeText,
                  isDark
                }
              )
            )
          );
        }
      },
      {
        id: "level",
        header: "Level",
        width: 70,
        cell: LevelCell
      },
      {
        id: "name",
        header: "Where",
        width: 150,
        cell: NameCell
      },
      {
        id: "signal",
        header: "Signal",
        // Narrow, and the first to give up room: most rows have no signal at all, and one that
        // does is identified by the start of its name.
        width: 150,
        resizable: true,
        cell: SignalCell
      },
      {
        id: "traceId",
        header: "Trace ID",
        width: 120,
        cell: TraceLinkCell
      },
      {
        id: "msg",
        header: "Message",
        // The two wide columns grow into whatever the window has left over, in proportion, so a
        // wider window is more message and more JSON rather than more empty space. A hex dump
        // needs about 620px to fit without scrolling; `flexgrow` gives it that on a 1920 screen
        // and the expanded cell scrolls where it cannot.
        width: 420,
        flexgrow: 2,
        resizable: true,
        cell: MessageCell
      },
      {
        id: "json",
        header: "JSON",
        width: 360,
        flexgrow: 1,
        resizable: true,
        cell: JSONCell
      }
    ],
    [timeMode, isDark]
  );
  const initGrid = (0, import_react8.useCallback)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (api) => {
      gridApiRef.current = api;
    },
    []
  );
  const rowStyle = (0, import_react8.useCallback)(
    (row) => {
      if (filters.traceId && traceOf(row) === filters.traceId)
        return "blong-log-trace-highlight";
      return "";
    },
    [filters.traceId]
  );
  const handleFilterTrace = (0, import_react8.useCallback)(
    (ev) => {
      handleTraceFilter(ev.traceId);
    },
    [handleTraceFilter]
  );
  const handleToggleExpanded = (0, import_react8.useCallback)((rowId, part) => {
    setExpandedRows((prev) => {
      const next = new Set(prev[part]);
      if (next.has(rowId)) {
        next.delete(rowId);
      } else {
        next.add(rowId);
      }
      return { ...prev, [part]: next };
    });
    setTimeout(() => {
      if (gridApiRef.current?.exec) gridApiRef.current.exec("resize");
    }, 0);
  }, []);
  const handleGridKeyDown = (0, import_react8.useCallback)(
    (e) => {
      if (e.key !== " ") return;
      const container = e.currentTarget;
      const target = e.target;
      const cell = target.closest(".wx-cell");
      const row = cell?.closest(".wx-row[data-id]") ?? container.querySelector(".wx-row[data-id].wx-selected");
      const bare = (value) => value?.startsWith(":") ? value.slice(1) : value;
      const rowId = bare(row?.dataset["id"]);
      if (rowId === void 0) return;
      e.preventDefault();
      handleToggleExpanded(
        rowId,
        bare(cell?.dataset["colId"]) === "json" ? "json" : "message"
      );
    },
    [handleToggleExpanded]
  );
  const contextValue = (0, import_react8.useMemo)(
    () => ({
      theme,
      searchText,
      clientConfig,
      onTraceFilter: handleTraceFilter,
      onToggleExpanded: handleToggleExpanded,
      onFilterText: setSearchText
    }),
    [theme, searchText, clientConfig, handleTraceFilter, handleToggleExpanded]
  );
  const toolbarStyle = {
    display: "flex",
    gap: "8px",
    padding: "8px 12px",
    borderBottom: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`,
    background: isDark ? "#161b22" : "#f6f8fa",
    alignItems: "center",
    flexWrap: "wrap",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
  };
  const inputStyle = {
    padding: "4px 8px",
    border: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`,
    borderRadius: "4px",
    background: isDark ? "#0d1117" : "#ffffff",
    color: isDark ? "#c9d1d9" : "#24292f",
    fontSize: "12px",
    outline: "none"
  };
  const selectStyle = {
    padding: "4px 8px",
    border: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`,
    borderRadius: "4px",
    background: isDark ? "#0d1117" : "#ffffff",
    color: isDark ? "#c9d1d9" : "#24292f",
    fontSize: "12px"
  };
  const statusBarStyle = {
    display: "flex",
    gap: "12px",
    padding: "4px 12px",
    borderTop: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`,
    background: isDark ? "#161b22" : "#f6f8fa",
    fontSize: "11px",
    color: isDark ? "#8b949e" : "#57606a",
    alignItems: "center"
  };
  const hasFilters = filters.level || filters.name || filters.signal || filters.capture || filters.traceId || filters.search || filters.hasError || filters.properties && Object.keys(filters.properties).length > 0;
  const ThemeWrapper = isDark ? xo : wo;
  return /* @__PURE__ */ import_react8.default.createElement(ViewerContext, { value: contextValue }, /* @__PURE__ */ import_react8.default.createElement(ExpandedRowsContext, { value: expandedRows }, /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: isDark ? "#0d1117" : "#ffffff",
        color: isDark ? "#c9d1d9" : "#24292f"
      }
    },
    /* @__PURE__ */ import_react8.default.createElement("style", null, ".blong-log-trace-highlight:not(.selected) .cell { background: " + (isDark ? "#1c2128" : "#ddf4ff") + " !important; }", ".wx-theme { height: 100%; display: flex; flex-direction: column; }", ".wx-grid { flex: 1; min-height: 0; }", ".wx-row, .wx-header { line-height: 16px; }", ".wx-row .wx-cell, .wx-header .wx-cell { padding-top: 4px; padding-bottom: 4px; }"),
    /* @__PURE__ */ import_react8.default.createElement("div", { style: toolbarStyle }, /* @__PURE__ */ import_react8.default.createElement(
      "select",
      {
        style: selectStyle,
        value: filters.level ?? "",
        onChange: handleLevelChange
      },
      /* @__PURE__ */ import_react8.default.createElement("option", { value: "" }, "All Levels"),
      ["trace", "debug", "info", "warn", "error", "fatal"].map((l2) => /* @__PURE__ */ import_react8.default.createElement(
        "option",
        {
          key: l2,
          value: l2
        },
        l2.toUpperCase()
      ))
    ), /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        style: { ...inputStyle, width: "160px" },
        placeholder: "Port or component...",
        value: filters.name ?? "",
        onChange: handleNameChange,
        list: "service-names-datalist"
      }
    ), /* @__PURE__ */ import_react8.default.createElement(
      "select",
      {
        style: selectStyle,
        value: filters.signal ?? "",
        onChange: handleSignalChange,
        title: "Filter by the declared signal identifier"
      },
      /* @__PURE__ */ import_react8.default.createElement("option", { value: "" }, "All signals"),
      uniqueSignals.map((signal) => /* @__PURE__ */ import_react8.default.createElement(
        "option",
        {
          key: signal,
          value: signal
        },
        signal
      ))
    ), /* @__PURE__ */ import_react8.default.createElement(
      "select",
      {
        style: selectStyle,
        value: filters.capture ?? "",
        onChange: handleCaptureChange,
        title: "Filter by the capture shape"
      },
      /* @__PURE__ */ import_react8.default.createElement("option", { value: "" }, "All shapes"),
      uniqueShapes.map((shape) => /* @__PURE__ */ import_react8.default.createElement(
        "option",
        {
          key: shape,
          value: shape
        },
        shape
      ))
    ), /* @__PURE__ */ import_react8.default.createElement("datalist", { id: "service-names-datalist" }, uniqueServiceNames.map((name) => /* @__PURE__ */ import_react8.default.createElement(
      "option",
      {
        key: name,
        value: name
      }
    ))), /* @__PURE__ */ import_react8.default.createElement(
      "label",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "4px 8px",
          fontSize: "12px",
          cursor: "pointer",
          userSelect: "none",
          color: isDark ? "#c9d1d9" : "#24292f"
        }
      },
      /* @__PURE__ */ import_react8.default.createElement(
        "input",
        {
          type: "checkbox",
          checked: !!filters.hasError,
          onChange: handleHasErrorChange
        }
      ),
      "Has Error"
    ), clientConfig?.properties.custom?.filter((p) => p.filterable).map(
      (prop) => prop.values ? (
        // Dropdown for predefined values
        /* @__PURE__ */ import_react8.default.createElement(
          "select",
          {
            key: prop.name,
            style: selectStyle,
            value: filters.properties?.[prop.name] ?? "",
            onChange: (e) => handleCustomPropertyChange(prop.name, e.target.value)
          },
          /* @__PURE__ */ import_react8.default.createElement("option", { value: "" }, `All ${prop.label}`),
          prop.values.map((val) => /* @__PURE__ */ import_react8.default.createElement(
            "option",
            {
              key: val,
              value: val
            },
            val
          ))
        )
      ) : (
        // Text input for free-form values
        /* @__PURE__ */ import_react8.default.createElement(
          "input",
          {
            key: prop.name,
            style: { ...inputStyle, width: "140px" },
            placeholder: `${prop.label}...`,
            value: filters.properties?.[prop.name] ?? "",
            onChange: (e) => handleCustomPropertyChange(prop.name, e.target.value)
          }
        )
      )
    ), filters.traceId && /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: {
          padding: "4px 8px",
          borderRadius: "3px",
          fontSize: "12px",
          background: "#1f6feb",
          color: "#fff",
          cursor: "pointer"
        },
        onClick: () => handleTraceFilter(filters.traceId),
        title: "Click to remove trace filter"
      },
      "Trace: " + filters.traceId.substring(0, 12) + "\u2026 \xD7"
    ), /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        style: { ...inputStyle, flex: 1, minWidth: "200px" },
        placeholder: "Search logs... (Enter to apply)",
        value: searchText,
        onChange: handleSearchChange,
        onKeyDown: handleSearchSubmit
      }
    ), hasFilters && /* @__PURE__ */ import_react8.default.createElement(
      "button",
      {
        style: {
          ...inputStyle,
          cursor: "pointer",
          border: "1px solid #da3633",
          color: "#da3633"
        },
        onClick: clearFilters
      },
      "Clear"
    )),
    /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        style: { flex: 1, overflow: "hidden" },
        onKeyDown: handleGridKeyDown
      },
      /* @__PURE__ */ import_react8.default.createElement(ThemeWrapper, { fonts: false }, /* @__PURE__ */ import_react8.default.createElement(
        ao,
        {
          ...{
            data: gridRows,
            columns,
            select: true,
            rowStyle,
            rowHeight: SINGLE_ROW_HEIGHT,
            // The virtual scroller has to add up the same per-row heights the
            // rows are drawn at, or it computes the scroll range from the
            // default and an expanded row beyond the viewport cannot be
            // reached.
            _rowHeightFromData: true,
            init: initGrid,
            onFilterTrace: handleFilterTrace
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }
        }
      ))
    ),
    /* @__PURE__ */ import_react8.default.createElement("div", { style: statusBarStyle }, /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: {
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          display: "inline-block",
          background: connected ? "#22c55e" : "#ef4444"
        }
      }
    ), /* @__PURE__ */ import_react8.default.createElement("span", null, connected ? "Connected" : "Disconnected"), /* @__PURE__ */ import_react8.default.createElement("span", null, displayEntries.length + " entries"), /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: { cursor: "pointer" },
        onClick: () => setAutoScroll((a) => !a),
        title: "Toggle auto-scroll"
      },
      autoScroll ? "\u2B07 Auto-scroll" : "\u23F8 Paused"
    ))
  )));
}

// src/client/app.tsx
var root = (0, import_client.createRoot)(document.getElementById("root"));
root.render(/* @__PURE__ */ import_react9.default.createElement(LogViewer, null));
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=app.js.map
