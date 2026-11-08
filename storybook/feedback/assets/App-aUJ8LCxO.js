const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-BslwTayt.js","./rolldown-runtime-wTHAN5bU.js","./preload-helper-DJ4GxKnf.js","./react-DUbJxPEF.js","./jsx-runtime-BGSnrdEt.js","./appStore-p_jHiGC2.js","./shell-BedTcraa.js","./react-dom-BZ-DbxSX.js","./iframe-DD0X1HUh.css","./theme-YvH0oVe6.js","./theme-tjZO56aV.js","./theme-BWIgixGP.js","./theme-C1Pj7X5N.js","./theme-CuCYYfMb.js","./theme-NRweFBpp.js","./theme-BiunraH2.js","./theme-CMXOEcam.js","./theme-CU8Ttb10.js","./theme-C1H14RKo.js","./theme-otAx51bl.js","./theme-DTwUQue8.js","./theme-jzyfq3XW.js","./theme-AP_7ewld.js","./theme-BenX2pBL.js","./theme-DtdTeGLV.js","./theme-DotN15k5.js","./theme-ffAXP-Xg.js","./theme-B96Ca-Fg.js","./theme-CP6yVBPd.js","./theme-eu1ZPeyr.js","./theme-FwXiAD-M.js","./theme-CDL_FlB2.js","./theme-4QXaFIbW.js","./theme-DGVNBSqj.js","./theme-CPOVw0Cp.js","./theme-CSazmsPf.js","./theme-DAqpwBZA.js","./theme-0O54d0Ce.js","./theme-BOyigkK7.js","./theme-8-dCI9Rz.js","./theme-Cj4tyJ5z.js","./theme-C33k5WDE.js","./theme-Ou2SEDO_.js","./theme-yT-CdcFP.js","./theme-DN9IgmbI.js","./theme-BaE9qrVP.js","./theme-CvooTyMB.js","./theme--J1OfTUr.js","./theme-CxOpTIAT.js","./theme-D3UgEXmV.js","./theme-sAQ7hl6j.js","./theme-B0uCbrxV.js","./theme-x_3z5BSK.js","./theme-B92sC59o.js","./theme-CBYkjqtN.js","./theme-DBstTGmL.js","./theme-DTjsiPb1.js","./theme-CB3vUm4o.js","./theme-DhD5vE8s.js","./theme-BqiV68Fl.js","./theme-bHm-qrS6.js","./theme-BnCcFUAr.js","./theme-BwRGnSeN.js","./theme-BcqUIucb.js","./theme-3nDUSV9H.js"])))=>i.map(i=>d[i]);
import { n as __esmMin, r as __exportAll, s as __toESM } from "./rolldown-runtime-wTHAN5bU.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-DJ4GxKnf.js";
import { t as require_react } from "./react-DUbJxPEF.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BGSnrdEt.js";
import { a as init_collect, i as collectStart, n as init_appStore, r as useAppStore } from "./appStore-p_jHiGC2.js";
import { A as FEEDBACK_CAPTURE_ATTR, B as shortTargetId, F as feedbackAttributes, Fn as useText, I as init_ids, In as useTranslate, L as isFeedbackUi, M as FEEDBACK_UI_ATTR, P as closestFeedbackTarget, R as portalFeedbackId, T as useFeedbackActive, V as targetOf, _ as init_shell, _n as addLocale, a as Dialog, b as FeedbackActiveContext, bn as locale, c as Menu, d as OverlayPanel, f as Password, g as Toast, gn as PrimeReactProvider, h as TabView, i as ConfirmPopup, j as FEEDBACK_ID_ATTR, jn as init_useText, l as Menubar, m as TabPanel, n as Button, o as Dropdown, p as ProgressSpinner, r as ConfirmDialog, s as InputText, t as Avatar, u as Message, v as Text, w as init_useFeedbackTarget, y as init_Text, z as rectOf } from "./shell-BedTcraa.js";
// ../../common/temp/node_modules/.pnpm/primeflex@3.3.1/node_modules/primeflex/primeflex.css
function init_primeflex() {
	return (init_primeflex = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/primeicons@7.0.0/node_modules/primeicons/primeicons.css
function init_primeicons() {
	return (init_primeicons = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/primereact@10.9.7_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/primereact/resources/primereact.min.css
function init_primereact_min() {
	return (init_primereact_min = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/subscribable.js
var Subscribable;
function init_subscribable() {
	return (init_subscribable = __esmMin((() => {
		Subscribable = class {
			constructor() {
				this.listeners = /* @__PURE__ */ new Set();
				this.subscribe = this.subscribe.bind(this);
			}
			subscribe(listener) {
				this.listeners.add(listener);
				this.onSubscribe();
				return () => {
					this.listeners.delete(listener);
					this.onUnsubscribe();
				};
			}
			hasListeners() {
				return this.listeners.size > 0;
			}
			onSubscribe() {}
			onUnsubscribe() {}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/focusManager.js
var FocusManager, focusManager;
function init_focusManager() {
	return (init_focusManager = __esmMin((() => {
		init_subscribable();
		FocusManager = class extends Subscribable {
			#focused;
			#cleanup;
			#setup;
			constructor() {
				super();
				this.#setup = (onFocus) => {
					if (typeof window !== "undefined" && window.addEventListener) {
						const listener = () => onFocus();
						window.addEventListener("visibilitychange", listener, false);
						return () => {
							window.removeEventListener("visibilitychange", listener);
						};
					}
				};
			}
			onSubscribe() {
				if (!this.#cleanup) this.setEventListener(this.#setup);
			}
			onUnsubscribe() {
				if (!this.hasListeners()) {
					this.#cleanup?.();
					this.#cleanup = void 0;
				}
			}
			setEventListener(setup) {
				this.#setup = setup;
				this.#cleanup?.();
				this.#cleanup = setup((focused) => {
					if (typeof focused === "boolean") this.setFocused(focused);
					else this.onFocus();
				});
			}
			setFocused(focused) {
				if (this.#focused !== focused) {
					this.#focused = focused;
					this.onFocus();
				}
			}
			onFocus() {
				const isFocused = this.isFocused();
				this.listeners.forEach((listener) => {
					listener(isFocused);
				});
			}
			isFocused() {
				if (typeof this.#focused === "boolean") return this.#focused;
				return globalThis.document?.visibilityState !== "hidden";
			}
		};
		focusManager = new FocusManager();
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/timeoutManager.js
function systemSetTimeoutZero(callback) {
	setTimeout(callback, 0);
}
var defaultTimeoutProvider, TimeoutManager, timeoutManager;
function init_timeoutManager() {
	return (init_timeoutManager = __esmMin((() => {
		defaultTimeoutProvider = {
			setTimeout: (callback, delay) => setTimeout(callback, delay),
			clearTimeout: (timeoutId) => clearTimeout(timeoutId),
			setInterval: (callback, delay) => setInterval(callback, delay),
			clearInterval: (intervalId) => clearInterval(intervalId)
		};
		TimeoutManager = class {
			#provider = defaultTimeoutProvider;
			#providerCalled = false;
			setTimeoutProvider(provider) {
				this.#provider = provider;
			}
			setTimeout(callback, delay) {
				return this.#provider.setTimeout(callback, delay);
			}
			clearTimeout(timeoutId) {
				this.#provider.clearTimeout(timeoutId);
			}
			setInterval(callback, delay) {
				return this.#provider.setInterval(callback, delay);
			}
			clearInterval(intervalId) {
				this.#provider.clearInterval(intervalId);
			}
		};
		timeoutManager = new TimeoutManager();
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/utils.js
function noop() {}
function functionalUpdate(updater, input) {
	return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
	return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
	return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
	return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
	return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
	const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
	if (queryKey) {
		if (exact) {
			if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) return false;
		} else if (!partialMatchKey(query.queryKey, queryKey)) return false;
	}
	if (type !== "all") {
		const isActive = query.isActive();
		if (type === "active" && !isActive) return false;
		if (type === "inactive" && isActive) return false;
	}
	if (typeof stale === "boolean" && query.isStale() !== stale) return false;
	if (fetchStatus && fetchStatus !== query.state.fetchStatus) return false;
	if (predicate && !predicate(query)) return false;
	return true;
}
function matchMutation(filters, mutation) {
	const { exact, status, predicate, mutationKey } = filters;
	if (mutationKey) {
		if (!mutation.options.mutationKey) return false;
		if (exact) {
			if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) return false;
		} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
	}
	if (status && mutation.state.status !== status) return false;
	if (predicate && !predicate(mutation)) return false;
	return true;
}
function hashQueryKeyByOptions(queryKey, options) {
	return (options?.queryKeyHashFn || hashKey)(queryKey);
}
function hashKey(queryKey) {
	return JSON.stringify(queryKey, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
		result[key] = val[key];
		return result;
	}, {}) : val);
}
function partialMatchKey(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (a && b && typeof a === "object" && typeof b === "object") return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
	return false;
}
function replaceEqualDeep(a, b, depth = 0) {
	if (a === b) return a;
	if (depth > 500) return b;
	const array = isPlainArray(a) && isPlainArray(b);
	if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
	const aSize = (array ? a : Object.keys(a)).length;
	const bItems = array ? b : Object.keys(b);
	const bSize = bItems.length;
	const copy = array ? new Array(bSize) : {};
	let equalItems = 0;
	for (let i = 0; i < bSize; i++) {
		const key = array ? i : bItems[i];
		const aItem = a[key];
		const bItem = b[key];
		if (aItem === bItem) {
			copy[key] = aItem;
			if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
			continue;
		}
		if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
			copy[key] = bItem;
			continue;
		}
		const v = replaceEqualDeep(aItem, bItem, depth + 1);
		copy[key] = v;
		if (v === aItem) equalItems++;
	}
	return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
	if (!b || Object.keys(a).length !== Object.keys(b).length) return false;
	for (const key in a) if (a[key] !== b[key]) return false;
	return true;
}
function isPlainArray(value) {
	return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
	if (!hasObjectPrototype(o)) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	const prot = ctor.prototype;
	if (!hasObjectPrototype(prot)) return false;
	if (!prot.hasOwnProperty("isPrototypeOf")) return false;
	if (Object.getPrototypeOf(o) !== Object.prototype) return false;
	return true;
}
function hasObjectPrototype(o) {
	return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
	return new Promise((resolve) => {
		timeoutManager.setTimeout(resolve, timeout);
	});
}
function replaceData(prevData, data, options) {
	if (typeof options.structuralSharing === "function") return options.structuralSharing(prevData, data);
	else if (options.structuralSharing !== false) return replaceEqualDeep(prevData, data);
	return data;
}
function addToEnd(items, item, max = 0) {
	const newItems = [...items, item];
	return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
	const newItems = [item, ...items];
	return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
function ensureQueryFn(options, fetchOptions) {
	if (!options.queryFn && fetchOptions?.initialPromise) return () => fetchOptions.initialPromise;
	if (!options.queryFn || options.queryFn === skipToken) return () => Promise.reject(/* @__PURE__ */ new Error(`Missing queryFn: '${options.queryHash}'`));
	return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
	if (typeof throwOnError === "function") return throwOnError(...params);
	return !!throwOnError;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
	let consumed = false;
	let signal;
	Object.defineProperty(object, "signal", {
		enumerable: true,
		get: () => {
			signal ??= getSignal();
			if (consumed) return signal;
			consumed = true;
			if (signal.aborted) onCancelled();
			else signal.addEventListener("abort", onCancelled, { once: true });
			return signal;
		}
	});
	return object;
}
var isServer, hasOwn, skipToken;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_timeoutManager();
		isServer = typeof window === "undefined" || "Deno" in globalThis;
		hasOwn = Object.prototype.hasOwnProperty;
		skipToken = /* @__PURE__ */ Symbol();
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/environmentManager.js
var environmentManager;
function init_environmentManager() {
	return (init_environmentManager = __esmMin((() => {
		init_utils();
		environmentManager = /* @__PURE__ */ (() => {
			let isServerFn = () => isServer;
			return {
				/**
				* Returns whether the current runtime should be treated as a server environment.
				*/
				isServer() {
					return isServerFn();
				},
				/**
				* Overrides the server check globally.
				*/
				setIsServer(isServerValue) {
					isServerFn = isServerValue;
				}
			};
		})();
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/thenable.js
function pendingThenable() {
	let resolve;
	let reject;
	const thenable = new Promise((_resolve, _reject) => {
		resolve = _resolve;
		reject = _reject;
	});
	thenable.status = "pending";
	thenable.catch(() => {});
	function finalize(data) {
		Object.assign(thenable, data);
		delete thenable.resolve;
		delete thenable.reject;
	}
	thenable.resolve = (value) => {
		finalize({
			status: "fulfilled",
			value
		});
		resolve(value);
	};
	thenable.reject = (reason) => {
		finalize({
			status: "rejected",
			reason
		});
		reject(reason);
	};
	return thenable;
}
function init_thenable() {
	return (init_thenable = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/notifyManager.js
function createNotifyManager() {
	let queue = [];
	let transactions = 0;
	let notifyFn = (callback) => {
		callback();
	};
	let batchNotifyFn = (callback) => {
		callback();
	};
	let scheduleFn = defaultScheduler;
	const schedule = (callback) => {
		if (transactions) queue.push(callback);
		else scheduleFn(() => {
			notifyFn(callback);
		});
	};
	const flush = () => {
		const originalQueue = queue;
		queue = [];
		if (originalQueue.length) scheduleFn(() => {
			batchNotifyFn(() => {
				originalQueue.forEach((callback) => {
					notifyFn(callback);
				});
			});
		});
	};
	return {
		batch: (callback) => {
			let result;
			transactions++;
			try {
				result = callback();
			} finally {
				transactions--;
				if (!transactions) flush();
			}
			return result;
		},
		/**
		* All calls to the wrapped function will be batched.
		*/
		batchCalls: (callback) => {
			return (...args) => {
				schedule(() => {
					callback(...args);
				});
			};
		},
		schedule,
		/**
		* Use this method to set a custom notify function.
		* This can be used to for example wrap notifications with `React.act` while running tests.
		*/
		setNotifyFunction: (fn) => {
			notifyFn = fn;
		},
		/**
		* Use this method to set a custom function to batch notifications together into a single tick.
		* By default React Query will use the batch function provided by ReactDOM or React Native.
		*/
		setBatchNotifyFunction: (fn) => {
			batchNotifyFn = fn;
		},
		setScheduler: (fn) => {
			scheduleFn = fn;
		}
	};
}
var defaultScheduler, notifyManager;
function init_notifyManager() {
	return (init_notifyManager = __esmMin((() => {
		init_timeoutManager();
		defaultScheduler = systemSetTimeoutZero;
		notifyManager = createNotifyManager();
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/onlineManager.js
var OnlineManager, onlineManager;
function init_onlineManager() {
	return (init_onlineManager = __esmMin((() => {
		init_subscribable();
		OnlineManager = class extends Subscribable {
			#online = true;
			#cleanup;
			#setup;
			constructor() {
				super();
				this.#setup = (onOnline) => {
					if (typeof window !== "undefined" && window.addEventListener) {
						const onlineListener = () => onOnline(true);
						const offlineListener = () => onOnline(false);
						window.addEventListener("online", onlineListener, false);
						window.addEventListener("offline", offlineListener, false);
						return () => {
							window.removeEventListener("online", onlineListener);
							window.removeEventListener("offline", offlineListener);
						};
					}
				};
			}
			onSubscribe() {
				if (!this.#cleanup) this.setEventListener(this.#setup);
			}
			onUnsubscribe() {
				if (!this.hasListeners()) {
					this.#cleanup?.();
					this.#cleanup = void 0;
				}
			}
			setEventListener(setup) {
				this.#setup = setup;
				this.#cleanup?.();
				this.#cleanup = setup(this.setOnline.bind(this));
			}
			setOnline(online) {
				if (this.#online !== online) {
					this.#online = online;
					this.listeners.forEach((listener) => {
						listener(online);
					});
				}
			}
			isOnline() {
				return this.#online;
			}
		};
		onlineManager = new OnlineManager();
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/retryer.js
function defaultRetryDelay(failureCount) {
	return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
	return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}
function createRetryer(config) {
	let isRetryCancelled = false;
	let failureCount = 0;
	let continueFn;
	const thenable = pendingThenable();
	const isResolved = () => thenable.status !== "pending";
	const cancel = (cancelOptions) => {
		if (!isResolved()) {
			const error = new CancelledError(cancelOptions);
			reject(error);
			config.onCancel?.(error);
		}
	};
	const cancelRetry = () => {
		isRetryCancelled = true;
	};
	const continueRetry = () => {
		isRetryCancelled = false;
	};
	const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
	const canStart = () => canFetch(config.networkMode) && config.canRun();
	const resolve = (value) => {
		if (!isResolved()) {
			continueFn?.();
			thenable.resolve(value);
		}
	};
	const reject = (value) => {
		if (!isResolved()) {
			continueFn?.();
			thenable.reject(value);
		}
	};
	const pause = () => {
		return new Promise((continueResolve) => {
			continueFn = (value) => {
				if (isResolved() || canContinue()) continueResolve(value);
			};
			config.onPause?.();
		}).then(() => {
			continueFn = void 0;
			if (!isResolved()) config.onContinue?.();
		});
	};
	const run = () => {
		if (isResolved()) return;
		let promiseOrValue;
		const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
		try {
			promiseOrValue = initialPromise ?? config.fn();
		} catch (error) {
			promiseOrValue = Promise.reject(error);
		}
		Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
			if (isResolved()) return;
			const retry = config.retry ?? (environmentManager.isServer() ? 0 : 3);
			const retryDelay = config.retryDelay ?? defaultRetryDelay;
			const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
			const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
			if (isRetryCancelled || !shouldRetry) {
				reject(error);
				return;
			}
			failureCount++;
			config.onFail?.(failureCount, error);
			sleep(delay).then(() => {
				return canContinue() ? void 0 : pause();
			}).then(() => {
				if (isRetryCancelled) reject(error);
				else run();
			});
		});
	};
	return {
		promise: thenable,
		status: () => thenable.status,
		cancel,
		continue: () => {
			continueFn?.();
			return thenable;
		},
		cancelRetry,
		continueRetry,
		canStart,
		start: () => {
			if (canStart()) run();
			else pause().then(run);
			return thenable;
		}
	};
}
var CancelledError;
function init_retryer() {
	return (init_retryer = __esmMin((() => {
		init_focusManager();
		init_onlineManager();
		init_environmentManager();
		init_utils();
		CancelledError = class extends Error {
			constructor(options) {
				super("CancelledError");
				this.revert = options?.revert;
				this.silent = options?.silent;
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/removable.js
var Removable;
function init_removable() {
	return (init_removable = __esmMin((() => {
		init_timeoutManager();
		init_environmentManager();
		init_utils();
		Removable = class {
			#gcTimeout;
			destroy() {
				this.clearGcTimeout();
			}
			scheduleGc() {
				this.clearGcTimeout();
				if (isValidTimeout(this.gcTime)) this.#gcTimeout = timeoutManager.setTimeout(() => {
					this.optionalRemove();
				}, this.gcTime);
			}
			updateGcTime(newGcTime) {
				this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (environmentManager.isServer() ? Infinity : 3e5));
			}
			clearGcTimeout() {
				if (this.#gcTimeout) {
					timeoutManager.clearTimeout(this.#gcTimeout);
					this.#gcTimeout = void 0;
				}
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/query.js
function fetchState(data, options) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
		...data === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function successState(data, dataUpdatedAt) {
	return {
		data,
		dataUpdatedAt: dataUpdatedAt ?? Date.now(),
		error: null,
		isInvalidated: false,
		status: "success"
	};
}
function getDefaultState$1(options) {
	const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
	const hasData = data !== void 0;
	const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
	return {
		data,
		dataUpdateCount: 0,
		dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: false,
		status: hasData ? "success" : "pending",
		fetchStatus: "idle"
	};
}
var Query;
function init_query() {
	return (init_query = __esmMin((() => {
		init_utils();
		init_notifyManager();
		init_retryer();
		init_removable();
		Query = class extends Removable {
			#initialState;
			#revertState;
			#cache;
			#client;
			#retryer;
			#defaultOptions;
			#abortSignalConsumed;
			constructor(config) {
				super();
				this.#abortSignalConsumed = false;
				this.#defaultOptions = config.defaultOptions;
				this.setOptions(config.options);
				this.observers = [];
				this.#client = config.client;
				this.#cache = this.#client.getQueryCache();
				this.queryKey = config.queryKey;
				this.queryHash = config.queryHash;
				this.#initialState = getDefaultState$1(this.options);
				this.state = config.state ?? this.#initialState;
				this.scheduleGc();
			}
			get meta() {
				return this.options.meta;
			}
			get promise() {
				return this.#retryer?.promise;
			}
			setOptions(options) {
				this.options = {
					...this.#defaultOptions,
					...options
				};
				this.updateGcTime(this.options.gcTime);
				if (this.state && this.state.data === void 0) {
					const defaultState = getDefaultState$1(this.options);
					if (defaultState.data !== void 0) {
						this.setState(successState(defaultState.data, defaultState.dataUpdatedAt));
						this.#initialState = defaultState;
					}
				}
			}
			optionalRemove() {
				if (!this.observers.length && this.state.fetchStatus === "idle") this.#cache.remove(this);
			}
			setData(newData, options) {
				const data = replaceData(this.state.data, newData, this.options);
				this.#dispatch({
					data,
					type: "success",
					dataUpdatedAt: options?.updatedAt,
					manual: options?.manual
				});
				return data;
			}
			setState(state, setStateOptions) {
				this.#dispatch({
					type: "setState",
					state,
					setStateOptions
				});
			}
			cancel(options) {
				const promise = this.#retryer?.promise;
				this.#retryer?.cancel(options);
				return promise ? promise.then(noop).catch(noop) : Promise.resolve();
			}
			destroy() {
				super.destroy();
				this.cancel({ silent: true });
			}
			get resetState() {
				return this.#initialState;
			}
			reset() {
				this.destroy();
				this.setState(this.resetState);
			}
			isActive() {
				return this.observers.some((observer) => resolveEnabled(observer.options.enabled, this) !== false);
			}
			isDisabled() {
				if (this.getObserversCount() > 0) return !this.isActive();
				return this.options.queryFn === skipToken || !this.isFetched();
			}
			isFetched() {
				return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
			}
			isStatic() {
				if (this.getObserversCount() > 0) return this.observers.some((observer) => resolveStaleTime(observer.options.staleTime, this) === "static");
				return false;
			}
			isStale() {
				if (this.getObserversCount() > 0) return this.observers.some((observer) => observer.getCurrentResult().isStale);
				return this.state.data === void 0 || this.state.isInvalidated;
			}
			isStaleByTime(staleTime = 0) {
				if (this.state.data === void 0) return true;
				if (staleTime === "static") return false;
				if (this.state.isInvalidated) return true;
				return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
			}
			onFocus() {
				this.observers.find((x) => x.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: false });
				this.#retryer?.continue();
			}
			onOnline() {
				this.observers.find((x) => x.shouldFetchOnReconnect())?.refetch({ cancelRefetch: false });
				this.#retryer?.continue();
			}
			addObserver(observer) {
				if (!this.observers.includes(observer)) {
					this.observers.push(observer);
					this.clearGcTimeout();
					this.#cache.notify({
						type: "observerAdded",
						query: this,
						observer
					});
				}
			}
			removeObserver(observer) {
				if (this.observers.includes(observer)) {
					this.observers = this.observers.filter((x) => x !== observer);
					if (!this.observers.length) {
						if (this.#retryer) {
							if (this.#abortSignalConsumed || this.#isInitialPausedFetch()) this.#retryer.cancel({ revert: true });
							else this.#retryer.cancelRetry();
						}
						this.scheduleGc();
					}
					this.#cache.notify({
						type: "observerRemoved",
						query: this,
						observer
					});
				}
			}
			getObserversCount() {
				return this.observers.length;
			}
			#isInitialPausedFetch() {
				return this.state.fetchStatus === "paused" && this.state.status === "pending";
			}
			invalidate() {
				if (!this.state.isInvalidated) this.#dispatch({ type: "invalidate" });
			}
			async fetch(options, fetchOptions) {
				if (this.state.fetchStatus !== "idle" && this.#retryer?.status() !== "rejected") {
					if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) this.cancel({ silent: true });
					else if (this.#retryer) {
						this.#retryer.continueRetry();
						return this.#retryer.promise;
					}
				}
				if (options) this.setOptions(options);
				if (!this.options.queryFn) {
					const observer = this.observers.find((x) => x.options.queryFn);
					if (observer) this.setOptions(observer.options);
				}
				const abortController = new AbortController();
				const addSignalProperty = (object) => {
					Object.defineProperty(object, "signal", {
						enumerable: true,
						get: () => {
							this.#abortSignalConsumed = true;
							return abortController.signal;
						}
					});
				};
				const fetchFn = () => {
					const queryFn = ensureQueryFn(this.options, fetchOptions);
					const createQueryFnContext = () => {
						const queryFnContext2 = {
							client: this.#client,
							queryKey: this.queryKey,
							meta: this.meta
						};
						addSignalProperty(queryFnContext2);
						return queryFnContext2;
					};
					const queryFnContext = createQueryFnContext();
					this.#abortSignalConsumed = false;
					if (this.options.persister) return this.options.persister(queryFn, queryFnContext, this);
					return queryFn(queryFnContext);
				};
				const createFetchContext = () => {
					const context2 = {
						fetchOptions,
						options: this.options,
						queryKey: this.queryKey,
						client: this.#client,
						state: this.state,
						fetchFn
					};
					addSignalProperty(context2);
					return context2;
				};
				const context = createFetchContext();
				this.options.behavior?.onFetch(context, this);
				this.#revertState = this.state;
				if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) this.#dispatch({
					type: "fetch",
					meta: context.fetchOptions?.meta
				});
				this.#retryer = createRetryer({
					initialPromise: fetchOptions?.initialPromise,
					fn: context.fetchFn,
					onCancel: (error) => {
						if (error instanceof CancelledError && error.revert) this.setState({
							...this.#revertState,
							fetchStatus: "idle"
						});
						abortController.abort();
					},
					onFail: (failureCount, error) => {
						this.#dispatch({
							type: "failed",
							failureCount,
							error
						});
					},
					onPause: () => {
						this.#dispatch({ type: "pause" });
					},
					onContinue: () => {
						this.#dispatch({ type: "continue" });
					},
					retry: context.options.retry,
					retryDelay: context.options.retryDelay,
					networkMode: context.options.networkMode,
					canRun: () => true
				});
				try {
					const data = await this.#retryer.start();
					if (data === void 0) throw new Error(`${this.queryHash} data is undefined`);
					this.setData(data);
					this.#cache.config.onSuccess?.(data, this);
					this.#cache.config.onSettled?.(data, this.state.error, this);
					return data;
				} catch (error) {
					if (error instanceof CancelledError) {
						if (error.silent) return this.#retryer.promise;
						else if (error.revert) {
							if (this.state.data === void 0) throw error;
							return this.state.data;
						}
					}
					this.#dispatch({
						type: "error",
						error
					});
					this.#cache.config.onError?.(error, this);
					this.#cache.config.onSettled?.(this.state.data, error, this);
					throw error;
				} finally {
					this.scheduleGc();
				}
			}
			#dispatch(action) {
				const reducer = (state) => {
					switch (action.type) {
						case "failed": return {
							...state,
							fetchFailureCount: action.failureCount,
							fetchFailureReason: action.error
						};
						case "pause": return {
							...state,
							fetchStatus: "paused"
						};
						case "continue": return {
							...state,
							fetchStatus: "fetching"
						};
						case "fetch": return {
							...state,
							...fetchState(state.data, this.options),
							fetchMeta: action.meta ?? null
						};
						case "success":
							const newState = {
								...state,
								...successState(action.data, action.dataUpdatedAt),
								dataUpdateCount: state.dataUpdateCount + 1,
								...!action.manual && {
									fetchStatus: "idle",
									fetchFailureCount: 0,
									fetchFailureReason: null
								}
							};
							this.#revertState = action.manual ? newState : void 0;
							return newState;
						case "error":
							const error = action.error;
							return {
								...state,
								error,
								errorUpdateCount: state.errorUpdateCount + 1,
								errorUpdatedAt: Date.now(),
								fetchFailureCount: state.fetchFailureCount + 1,
								fetchFailureReason: error,
								fetchStatus: "idle",
								status: "error",
								isInvalidated: true
							};
						case "invalidate": return {
							...state,
							isInvalidated: true
						};
						case "setState": return {
							...state,
							...action.state
						};
					}
				};
				this.state = reducer(this.state);
				notifyManager.batch(() => {
					this.observers.forEach((observer) => {
						observer.onQueryUpdate();
					});
					this.#cache.notify({
						query: this,
						type: "updated",
						action
					});
				});
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function infiniteQueryBehavior(pages) {
	return { onFetch: (context, query) => {
		const options = context.options;
		const direction = context.fetchOptions?.meta?.fetchMore?.direction;
		const oldPages = context.state.data?.pages || [];
		const oldPageParams = context.state.data?.pageParams || [];
		let result = {
			pages: [],
			pageParams: []
		};
		let currentPage = 0;
		const fetchFn = async () => {
			let cancelled = false;
			const addSignalProperty = (object) => {
				addConsumeAwareSignal(object, () => context.signal, () => cancelled = true);
			};
			const queryFn = ensureQueryFn(context.options, context.fetchOptions);
			const fetchPage = async (data, param, previous) => {
				if (cancelled) return Promise.reject();
				if (param == null && data.pages.length) return Promise.resolve(data);
				const createQueryFnContext = () => {
					const queryFnContext2 = {
						client: context.client,
						queryKey: context.queryKey,
						pageParam: param,
						direction: previous ? "backward" : "forward",
						meta: context.options.meta
					};
					addSignalProperty(queryFnContext2);
					return queryFnContext2;
				};
				const queryFnContext = createQueryFnContext();
				const page = await queryFn(queryFnContext);
				const { maxPages } = context.options;
				const addTo = previous ? addToStart : addToEnd;
				return {
					pages: addTo(data.pages, page, maxPages),
					pageParams: addTo(data.pageParams, param, maxPages)
				};
			};
			if (direction && oldPages.length) {
				const previous = direction === "backward";
				const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
				const oldData = {
					pages: oldPages,
					pageParams: oldPageParams
				};
				result = await fetchPage(oldData, pageParamFn(options, oldData), previous);
			} else {
				const remainingPages = pages ?? oldPages.length;
				do {
					const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
					if (currentPage > 0 && param == null) break;
					result = await fetchPage(result, param);
					currentPage++;
				} while (currentPage < remainingPages);
			}
			return result;
		};
		if (context.options.persister) context.fetchFn = () => {
			return context.options.persister?.(fetchFn, {
				client: context.client,
				queryKey: context.queryKey,
				meta: context.options.meta,
				signal: context.signal
			}, query);
		};
		else context.fetchFn = fetchFn;
	} };
}
function getNextPageParam(options, { pages, pageParams }) {
	const lastIndex = pages.length - 1;
	return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
	return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
function init_infiniteQueryBehavior() {
	return (init_infiniteQueryBehavior = __esmMin((() => {
		init_utils();
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/mutation.js
function getDefaultState() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: false,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	};
}
var Mutation;
function init_mutation() {
	return (init_mutation = __esmMin((() => {
		init_notifyManager();
		init_removable();
		init_retryer();
		Mutation = class extends Removable {
			#client;
			#observers;
			#mutationCache;
			#retryer;
			constructor(config) {
				super();
				this.#client = config.client;
				this.mutationId = config.mutationId;
				this.#mutationCache = config.mutationCache;
				this.#observers = [];
				this.state = config.state || getDefaultState();
				this.setOptions(config.options);
				this.scheduleGc();
			}
			setOptions(options) {
				this.options = options;
				this.updateGcTime(this.options.gcTime);
			}
			get meta() {
				return this.options.meta;
			}
			addObserver(observer) {
				if (!this.#observers.includes(observer)) {
					this.#observers.push(observer);
					this.clearGcTimeout();
					this.#mutationCache.notify({
						type: "observerAdded",
						mutation: this,
						observer
					});
				}
			}
			removeObserver(observer) {
				this.#observers = this.#observers.filter((x) => x !== observer);
				this.scheduleGc();
				this.#mutationCache.notify({
					type: "observerRemoved",
					mutation: this,
					observer
				});
			}
			optionalRemove() {
				if (!this.#observers.length) {
					if (this.state.status === "pending") this.scheduleGc();
					else this.#mutationCache.remove(this);
				}
			}
			continue() {
				return this.#retryer?.continue() ?? this.execute(this.state.variables);
			}
			async execute(variables) {
				const onContinue = () => {
					this.#dispatch({ type: "continue" });
				};
				const mutationFnContext = {
					client: this.#client,
					meta: this.options.meta,
					mutationKey: this.options.mutationKey
				};
				this.#retryer = createRetryer({
					fn: () => {
						if (!this.options.mutationFn) return Promise.reject(/* @__PURE__ */ new Error("No mutationFn found"));
						return this.options.mutationFn(variables, mutationFnContext);
					},
					onFail: (failureCount, error) => {
						this.#dispatch({
							type: "failed",
							failureCount,
							error
						});
					},
					onPause: () => {
						this.#dispatch({ type: "pause" });
					},
					onContinue,
					retry: this.options.retry ?? 0,
					retryDelay: this.options.retryDelay,
					networkMode: this.options.networkMode,
					canRun: () => this.#mutationCache.canRun(this)
				});
				const restored = this.state.status === "pending";
				const isPaused = !this.#retryer.canStart();
				try {
					if (restored) onContinue();
					else {
						this.#dispatch({
							type: "pending",
							variables,
							isPaused
						});
						if (this.#mutationCache.config.onMutate) await this.#mutationCache.config.onMutate(variables, this, mutationFnContext);
						const context = await this.options.onMutate?.(variables, mutationFnContext);
						if (context !== this.state.context) this.#dispatch({
							type: "pending",
							context,
							variables,
							isPaused
						});
					}
					const data = await this.#retryer.start();
					await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
					await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
					await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
					await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
					this.#dispatch({
						type: "success",
						data
					});
					return data;
				} catch (error) {
					try {
						await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
					} catch (e) {
						Promise.reject(e);
					}
					this.#dispatch({
						type: "error",
						error
					});
					throw error;
				} finally {
					this.#mutationCache.runNext(this);
				}
			}
			#dispatch(action) {
				const reducer = (state) => {
					switch (action.type) {
						case "failed": return {
							...state,
							failureCount: action.failureCount,
							failureReason: action.error
						};
						case "pause": return {
							...state,
							isPaused: true
						};
						case "continue": return {
							...state,
							isPaused: false
						};
						case "pending": return {
							...state,
							context: action.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: action.isPaused,
							status: "pending",
							variables: action.variables,
							submittedAt: Date.now()
						};
						case "success": return {
							...state,
							data: action.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: "success",
							isPaused: false
						};
						case "error": return {
							...state,
							data: void 0,
							error: action.error,
							failureCount: state.failureCount + 1,
							failureReason: action.error,
							isPaused: false,
							status: "error"
						};
					}
				};
				this.state = reducer(this.state);
				notifyManager.batch(() => {
					this.#observers.forEach((observer) => {
						observer.onMutationUpdate(action);
					});
					this.#mutationCache.notify({
						mutation: this,
						type: "updated",
						action
					});
				});
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/mutationCache.js
function scopeFor(mutation) {
	return mutation.options.scope?.id;
}
var MutationCache;
function init_mutationCache() {
	return (init_mutationCache = __esmMin((() => {
		init_notifyManager();
		init_mutation();
		init_utils();
		init_subscribable();
		MutationCache = class extends Subscribable {
			constructor(config = {}) {
				super();
				this.config = config;
				this.#mutations = /* @__PURE__ */ new Set();
				this.#scopes = /* @__PURE__ */ new Map();
				this.#mutationId = 0;
			}
			#mutations;
			#scopes;
			#mutationId;
			build(client, options, state) {
				const mutation = new Mutation({
					client,
					mutationCache: this,
					mutationId: ++this.#mutationId,
					options: client.defaultMutationOptions(options),
					state
				});
				this.add(mutation);
				return mutation;
			}
			add(mutation) {
				this.#mutations.add(mutation);
				const scope = scopeFor(mutation);
				if (typeof scope === "string") {
					const scopedMutations = this.#scopes.get(scope);
					if (scopedMutations) scopedMutations.push(mutation);
					else this.#scopes.set(scope, [mutation]);
				}
				this.notify({
					type: "added",
					mutation
				});
			}
			remove(mutation) {
				if (this.#mutations.delete(mutation)) {
					const scope = scopeFor(mutation);
					if (typeof scope === "string") {
						const scopedMutations = this.#scopes.get(scope);
						if (scopedMutations) {
							if (scopedMutations.length > 1) {
								const index = scopedMutations.indexOf(mutation);
								if (index !== -1) scopedMutations.splice(index, 1);
							} else if (scopedMutations[0] === mutation) this.#scopes.delete(scope);
						}
					}
				}
				this.notify({
					type: "removed",
					mutation
				});
			}
			canRun(mutation) {
				const scope = scopeFor(mutation);
				if (typeof scope === "string") {
					const firstPendingMutation = this.#scopes.get(scope)?.find((m) => m.state.status === "pending");
					return !firstPendingMutation || firstPendingMutation === mutation;
				} else return true;
			}
			runNext(mutation) {
				const scope = scopeFor(mutation);
				if (typeof scope === "string") return (this.#scopes.get(scope)?.find((m) => m !== mutation && m.state.isPaused))?.continue() ?? Promise.resolve();
				else return Promise.resolve();
			}
			clear() {
				notifyManager.batch(() => {
					this.#mutations.forEach((mutation) => {
						this.notify({
							type: "removed",
							mutation
						});
					});
					this.#mutations.clear();
					this.#scopes.clear();
				});
			}
			getAll() {
				return Array.from(this.#mutations);
			}
			find(filters) {
				const defaultedFilters = {
					exact: true,
					...filters
				};
				return this.getAll().find((mutation) => matchMutation(defaultedFilters, mutation));
			}
			findAll(filters = {}) {
				return this.getAll().filter((mutation) => matchMutation(filters, mutation));
			}
			notify(event) {
				notifyManager.batch(() => {
					this.listeners.forEach((listener) => {
						listener(event);
					});
				});
			}
			resumePausedMutations() {
				const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
				return notifyManager.batch(() => Promise.all(pausedMutations.map((mutation) => mutation.continue().catch(noop))));
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/queryCache.js
var QueryCache;
function init_queryCache() {
	return (init_queryCache = __esmMin((() => {
		init_utils();
		init_query();
		init_notifyManager();
		init_subscribable();
		QueryCache = class extends Subscribable {
			constructor(config = {}) {
				super();
				this.config = config;
				this.#queries = /* @__PURE__ */ new Map();
			}
			#queries;
			build(client, options, state) {
				const queryKey = options.queryKey;
				const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
				let query = this.get(queryHash);
				if (!query) {
					query = new Query({
						client,
						queryKey,
						queryHash,
						options: client.defaultQueryOptions(options),
						state,
						defaultOptions: client.getQueryDefaults(queryKey)
					});
					this.add(query);
				}
				return query;
			}
			add(query) {
				if (!this.#queries.has(query.queryHash)) {
					this.#queries.set(query.queryHash, query);
					this.notify({
						type: "added",
						query
					});
				}
			}
			remove(query) {
				const queryInMap = this.#queries.get(query.queryHash);
				if (queryInMap) {
					query.destroy();
					if (queryInMap === query) this.#queries.delete(query.queryHash);
					this.notify({
						type: "removed",
						query
					});
				}
			}
			clear() {
				notifyManager.batch(() => {
					this.getAll().forEach((query) => {
						this.remove(query);
					});
				});
			}
			get(queryHash) {
				return this.#queries.get(queryHash);
			}
			getAll() {
				return [...this.#queries.values()];
			}
			find(filters) {
				const defaultedFilters = {
					exact: true,
					...filters
				};
				return this.getAll().find((query) => matchQuery(defaultedFilters, query));
			}
			findAll(filters = {}) {
				const queries = this.getAll();
				return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
			}
			notify(event) {
				notifyManager.batch(() => {
					this.listeners.forEach((listener) => {
						listener(event);
					});
				});
			}
			onFocus() {
				notifyManager.batch(() => {
					this.getAll().forEach((query) => {
						query.onFocus();
					});
				});
			}
			onOnline() {
				notifyManager.batch(() => {
					this.getAll().forEach((query) => {
						query.onOnline();
					});
				});
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/queryClient.js
var QueryClient;
function init_queryClient() {
	return (init_queryClient = __esmMin((() => {
		init_utils();
		init_queryCache();
		init_mutationCache();
		init_focusManager();
		init_onlineManager();
		init_notifyManager();
		init_infiniteQueryBehavior();
		QueryClient = class {
			#queryCache;
			#mutationCache;
			#defaultOptions;
			#queryDefaults;
			#mutationDefaults;
			#mountCount;
			#unsubscribeFocus;
			#unsubscribeOnline;
			constructor(config = {}) {
				this.#queryCache = config.queryCache || new QueryCache();
				this.#mutationCache = config.mutationCache || new MutationCache();
				this.#defaultOptions = config.defaultOptions || {};
				this.#queryDefaults = /* @__PURE__ */ new Map();
				this.#mutationDefaults = /* @__PURE__ */ new Map();
				this.#mountCount = 0;
			}
			mount() {
				this.#mountCount++;
				if (this.#mountCount !== 1) return;
				this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
					if (focused) {
						await this.resumePausedMutations();
						this.#queryCache.onFocus();
					}
				});
				this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
					if (online) {
						await this.resumePausedMutations();
						this.#queryCache.onOnline();
					}
				});
			}
			unmount() {
				this.#mountCount--;
				if (this.#mountCount !== 0) return;
				this.#unsubscribeFocus?.();
				this.#unsubscribeFocus = void 0;
				this.#unsubscribeOnline?.();
				this.#unsubscribeOnline = void 0;
			}
			isFetching(filters) {
				return this.#queryCache.findAll({
					...filters,
					fetchStatus: "fetching"
				}).length;
			}
			isMutating(filters) {
				return this.#mutationCache.findAll({
					...filters,
					status: "pending"
				}).length;
			}
			/**
			* Imperative (non-reactive) way to retrieve data for a QueryKey.
			* Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
			*
			* Hint: Do not use this function inside a component, because it won't receive updates.
			* Use `useQuery` to create a `QueryObserver` that subscribes to changes.
			*/
			getQueryData(queryKey) {
				const options = this.defaultQueryOptions({ queryKey });
				return this.#queryCache.get(options.queryHash)?.state.data;
			}
			ensureQueryData(options) {
				const defaultedOptions = this.defaultQueryOptions(options);
				const query = this.#queryCache.build(this, defaultedOptions);
				const cachedData = query.state.data;
				if (cachedData === void 0) return this.fetchQuery(options);
				if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) this.prefetchQuery(defaultedOptions);
				return Promise.resolve(cachedData);
			}
			getQueriesData(filters) {
				return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
					return [queryKey, state.data];
				});
			}
			setQueryData(queryKey, updater, options) {
				const defaultedOptions = this.defaultQueryOptions({ queryKey });
				const prevData = this.#queryCache.get(defaultedOptions.queryHash)?.state.data;
				const data = functionalUpdate(updater, prevData);
				if (data === void 0) return;
				return this.#queryCache.build(this, defaultedOptions).setData(data, {
					...options,
					manual: true
				});
			}
			setQueriesData(filters, updater, options) {
				return notifyManager.batch(() => this.#queryCache.findAll(filters).map(({ queryKey }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
			}
			getQueryState(queryKey) {
				const options = this.defaultQueryOptions({ queryKey });
				return this.#queryCache.get(options.queryHash)?.state;
			}
			removeQueries(filters) {
				const queryCache = this.#queryCache;
				notifyManager.batch(() => {
					queryCache.findAll(filters).forEach((query) => {
						queryCache.remove(query);
					});
				});
			}
			resetQueries(filters, options) {
				const queryCache = this.#queryCache;
				return notifyManager.batch(() => {
					queryCache.findAll(filters).forEach((query) => {
						query.reset();
					});
					return this.refetchQueries({
						type: "active",
						...filters
					}, options);
				});
			}
			cancelQueries(filters, cancelOptions = {}) {
				const defaultedCancelOptions = {
					revert: true,
					...cancelOptions
				};
				const promises = notifyManager.batch(() => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions)));
				return Promise.all(promises).then(noop).catch(noop);
			}
			invalidateQueries(filters, options = {}) {
				return notifyManager.batch(() => {
					this.#queryCache.findAll(filters).forEach((query) => {
						query.invalidate();
					});
					if (filters?.refetchType === "none") return Promise.resolve();
					return this.refetchQueries({
						...filters,
						type: filters?.refetchType ?? filters?.type ?? "active"
					}, options);
				});
			}
			refetchQueries(filters, options = {}) {
				const fetchOptions = {
					...options,
					cancelRefetch: options.cancelRefetch ?? true
				};
				const promises = notifyManager.batch(() => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
					let promise = query.fetch(void 0, fetchOptions);
					if (!fetchOptions.throwOnError) promise = promise.catch(noop);
					return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
				}));
				return Promise.all(promises).then(noop);
			}
			fetchQuery(options) {
				const defaultedOptions = this.defaultQueryOptions(options);
				if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
				const query = this.#queryCache.build(this, defaultedOptions);
				return query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
			}
			prefetchQuery(options) {
				return this.fetchQuery(options).then(noop).catch(noop);
			}
			fetchInfiniteQuery(options) {
				options.behavior = infiniteQueryBehavior(options.pages);
				return this.fetchQuery(options);
			}
			prefetchInfiniteQuery(options) {
				return this.fetchInfiniteQuery(options).then(noop).catch(noop);
			}
			ensureInfiniteQueryData(options) {
				options.behavior = infiniteQueryBehavior(options.pages);
				return this.ensureQueryData(options);
			}
			resumePausedMutations() {
				if (onlineManager.isOnline()) return this.#mutationCache.resumePausedMutations();
				return Promise.resolve();
			}
			getQueryCache() {
				return this.#queryCache;
			}
			getMutationCache() {
				return this.#mutationCache;
			}
			getDefaultOptions() {
				return this.#defaultOptions;
			}
			setDefaultOptions(options) {
				this.#defaultOptions = options;
			}
			setQueryDefaults(queryKey, options) {
				this.#queryDefaults.set(hashKey(queryKey), {
					queryKey,
					defaultOptions: options
				});
			}
			getQueryDefaults(queryKey) {
				const defaults = [...this.#queryDefaults.values()];
				const result = {};
				defaults.forEach((queryDefault) => {
					if (partialMatchKey(queryKey, queryDefault.queryKey)) Object.assign(result, queryDefault.defaultOptions);
				});
				return result;
			}
			setMutationDefaults(mutationKey, options) {
				this.#mutationDefaults.set(hashKey(mutationKey), {
					mutationKey,
					defaultOptions: options
				});
			}
			getMutationDefaults(mutationKey) {
				const defaults = [...this.#mutationDefaults.values()];
				const result = {};
				defaults.forEach((queryDefault) => {
					if (partialMatchKey(mutationKey, queryDefault.mutationKey)) Object.assign(result, queryDefault.defaultOptions);
				});
				return result;
			}
			defaultQueryOptions(options) {
				if (options._defaulted) return options;
				const defaultedOptions = {
					...this.#defaultOptions.queries,
					...this.getQueryDefaults(options.queryKey),
					...options,
					_defaulted: true
				};
				if (!defaultedOptions.queryHash) defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
				if (defaultedOptions.refetchOnReconnect === void 0) defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
				if (defaultedOptions.throwOnError === void 0) defaultedOptions.throwOnError = !!defaultedOptions.suspense;
				if (!defaultedOptions.networkMode && defaultedOptions.persister) defaultedOptions.networkMode = "offlineFirst";
				if (defaultedOptions.queryFn === skipToken) defaultedOptions.enabled = false;
				return defaultedOptions;
			}
			defaultMutationOptions(options) {
				if (options?._defaulted) return options;
				return {
					...this.#defaultOptions.mutations,
					...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
					...options,
					_defaulted: true
				};
			}
			clear() {
				this.#queryCache.clear();
				this.#mutationCache.clear();
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/@tanstack+react-query@5.95.2_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var import_react$18, import_jsx_runtime$21, QueryClientContext, useQueryClient, QueryClientProvider;
function init_QueryClientProvider() {
	return (init_QueryClientProvider = __esmMin((() => {
		import_react$18 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_jsx_runtime$21 = require_jsx_runtime();
		QueryClientContext = import_react$18.createContext(void 0);
		useQueryClient = (queryClient) => {
			const client = import_react$18.useContext(QueryClientContext);
			if (queryClient) return queryClient;
			if (!client) throw new Error("No QueryClient set, use QueryClientProvider to set one");
			return client;
		};
		QueryClientProvider = ({ client, children }) => {
			import_react$18.useEffect(() => {
				client.mount();
				return () => {
					client.unmount();
				};
			}, [client]);
			return /* @__PURE__ */ (0, import_jsx_runtime$21.jsx)(QueryClientContext.Provider, {
				value: client,
				children
			});
		};
	})))();
}
// ../../core/blong-browser/src/expected.ts
/**
* Returns true when `errorType` matches the `expect` declaration.
*
* - `'foo.bar'` — only `foo.bar`
* - `['foo.bar', 'foo.baz']` — either
* - `'foo.*'` — any type starting with `foo.`
*/
function isExpectedError(errorType, expect) {
	if (!errorType || !expect) return false;
	return [].concat(expect).some((pattern) => pattern.endsWith(".*") ? errorType.startsWith(pattern.slice(0, -1)) : errorType === pattern);
}
// ../../core/blong-browser/src/lib/eventBus.ts
var BlongEventBus, blongEvents;
function init_eventBus() {
	return (init_eventBus = __esmMin((() => {
		BlongEventBus = class extends EventTarget {
			/**
			* Subscribe to an event. Returns an `off` function that removes the listener.
			*
			* @example
			* const off = blongEvents.on('action:success', ({method, result}) => { ... });
			* // later:
			* off();
			*/
			on(type, listener) {
				const handler = (e) => listener(e.detail);
				this.addEventListener(type, handler);
				return () => this.removeEventListener(type, handler);
			}
			/**
			* Emit an event with a typed payload. Called internally by blong-browser — user
			* code rarely needs to call this directly.
			*/
			emit(type, detail) {
				this.dispatchEvent(new CustomEvent(type, { detail }));
			}
		};
		blongEvents = new BlongEventBus();
	})))();
}
// ../../core/blong-browser/src/schema/registry.ts
/** Convert OpenAPI component name to dotted key (e.g. 'ModelTree' → 'model.tree') */
function schemaNameToKey(name) {
	return name.replace(/([A-Z])/g, (_, c, i) => i === 0 ? c.toLowerCase() : `.${c.toLowerCase()}`).replace(/\.$/, "");
}
/** Normalize a schema name to lowercase dotted form */
function normalizeName(name) {
	return name.toLowerCase().replace(/\//g, ".").replace(/\s+/g, ".");
}
/** Enrich a raw JSON Schema into a normalized IEnrichedSchema */
function enrichSchema(name, raw) {
	const properties = {};
	const rawProps = raw.properties ?? {};
	const required = new Set(raw.required ?? []);
	for (const [fieldName, fieldSchema] of Object.entries(rawProps)) properties[fieldName] = enrichField(fieldName, fieldSchema, required);
	return {
		name,
		title: raw.title ?? name,
		description: raw.description,
		properties,
		required: raw.required
	};
}
/**
* Emit a console warning for any x-* extension key in the given schema that
* is not recognized by blong-browser. Unknown keys are silently ignored at
* runtime; this warning makes typos and unsupported extensions visible during
* development rather than causing silent UI misbehaviour.
*/
function warnUnknownExtensions(fieldName, raw) {
	for (const key of Object.keys(raw)) if (key.startsWith("x-") && !KNOWN_X_EXTENSIONS.has(key)) console.warn(`[blong-browser] Unknown schema extension "${key}" on field "${fieldName}". Known extensions: ${[...KNOWN_X_EXTENSIONS].join(", ")}.`);
}
/** Normalize a single field schema */
function enrichField(name, raw, required) {
	warnUnknownExtensions(name, raw);
	const widget = resolveWidget(name, raw);
	return {
		name,
		title: raw.title ?? formatTitle(name),
		description: raw.description,
		type: raw.type,
		minLength: raw.minLength,
		maxLength: raw.maxLength,
		minimum: raw.minimum,
		maximum: raw.maximum,
		pattern: raw.pattern,
		enum: raw.enum,
		readOnly: raw.readOnly,
		fieldRequired: required.has(name),
		"x-filter": raw["x-filter"],
		"x-sort": raw["x-sort"],
		"x-cards": raw["x-cards"],
		"x-widget": raw["x-widget"],
		widget
	};
}
/** Infer widget config from field type and extensions */
function resolveWidget(name, raw) {
	const xWidget = raw["x-widget"] ?? {};
	if (xWidget.type) return xWidget;
	const type = raw.type;
	if (type === "boolean") return { type: "boolean" };
	if (type === "integer") return { type: "integer" };
	if (type === "number") return { type: "number" };
	if (type === "bigint") return { type: "bigint" };
	if (raw.anyOf) {
		const anyType = raw.anyOf.find((s) => s.type !== "null")?.type;
		if (anyType === "bigint") return { type: "bigint" };
		if (anyType === "integer") return { type: "integer" };
		if (anyType === "number") return { type: "number" };
		if (anyType === "boolean") return { type: "boolean" };
	}
	if (raw.enum) return {
		type: "select",
		options: raw.enum.map((v) => ({
			value: v,
			label: String(v)
		}))
	};
	if (name.toLowerCase().includes("date") && !name.toLowerCase().includes("time")) return { type: "date" };
	if (name.toLowerCase().includes("datetime")) return { type: "dateTime" };
	if (name.toLowerCase().includes("time")) return { type: "time" };
	if (name.toLowerCase().includes("password")) return { type: "password" };
	if (name.toLowerCase().includes("description") || name.toLowerCase().includes("notes")) return { type: "textArea" };
	return { type: "input" };
}
/** Convert camelCase or snake_case field name to Title Case label */
function formatTitle(name) {
	return name.replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/^./, (s) => s.toUpperCase()).trim();
}
var DEFAULT_SCHEMA_URL, SchemaRegistry, KNOWN_X_EXTENSIONS, schemaRegistry;
function init_registry() {
	return (init_registry = __esmMin((() => {
		DEFAULT_SCHEMA_URL = "/openapi.json";
		SchemaRegistry = class {
			cache = /* @__PURE__ */ new Map();
			document = null;
			loadPromise = null;
			async load(url = DEFAULT_SCHEMA_URL) {
				if (this.loadPromise) return this.loadPromise;
				this.loadPromise = fetch(url).then((r) => r.json()).then((doc) => {
					this.document = doc;
					const schemas = doc.components?.schemas ?? {};
					for (const [name, schema] of Object.entries(schemas)) {
						const key = schemaNameToKey(name);
						this.cache.set(key, enrichSchema(key, schema));
					}
				}).catch((err) => {
					console.warn("[blong-browser] Failed to load schema document:", err);
					this.loadPromise = null;
				});
				return this.loadPromise;
			}
			get(name) {
				return this.cache.get(normalizeName(name));
			}
			async resolve(name) {
				const key = normalizeName(name);
				if (this.cache.has(key)) return this.cache.get(key);
				await this.load();
				return this.cache.get(key) ?? {
					name: key,
					title: key,
					properties: {}
				};
			}
			set(name, schema) {
				this.cache.set(normalizeName(name), {
					...schema,
					name: normalizeName(name)
				});
			}
			has(name) {
				return this.cache.has(normalizeName(name));
			}
		};
		KNOWN_X_EXTENSIONS = /* @__PURE__ */ new Set([
			"x-filter",
			"x-filterable",
			"x-sort",
			"x-cards",
			"x-widget"
		]);
		schemaRegistry = new SchemaRegistry();
	})))();
}
// ../../core/blong-browser/src/context/BlongContext.tsx
/** Hook to access the blong context value — throws if used outside provider */
function useBlong() {
	const ctx = (0, import_react$17.use)(BlongContext);
	if (!ctx) throw new Error("[blong-browser] useBlong must be used inside <BlongProvider>");
	return ctx;
}
/** Creates a single QueryClient per provider instance */
function createQueryClient() {
	return new QueryClient({ defaultOptions: { queries: {
		staleTime: 3e5,
		retry: 1,
		refetchOnWindowFocus: false
	} } });
}
/** Whether an error indicates the session is no longer usable (needs re-login). */
function isAuthError$1(error) {
	const e = error;
	return e?.res?.statusCode === 401 || e?.statusCode === 401 || AUTH_ERROR_TYPES$1.has(e?.type ?? "");
}
/**
* Wrap the handler proxy so all method calls emit action events and surface
* non-validation errors via the global error dialog automatically.
* Field-validation errors are intentionally left for the form to handle.
* The error is always re-thrown so callers can still react if needed.
*/
function wrapHandlerProxy(handler) {
	return new Proxy(handler, { get(target, prop) {
		if (typeof prop === "symbol") return target[prop];
		const fn = target[prop];
		if (typeof fn !== "function") return fn;
		const method = String(prop);
		return async (...args) => {
			const [params] = args;
			blongEvents.emit("action:before", {
				method,
				params
			});
			try {
				const result = await fn(...args);
				blongEvents.emit("action:success", {
					method,
					params,
					result
				});
				return result;
			} catch (err) {
				blongEvents.emit("action:error", {
					method,
					params,
					error: err
				});
				const blongErr = err;
				if (isExpectedError(blongErr.type, args[1]?.expect)) {
					console.debug(`[blong] ${method} failed as declared`, { type: blongErr.type });
					throw err;
				}
				console.error(`[blong] ${method} failed`, {
					params: Object.keys(params ?? {}),
					error: err
				});
				if (!blongErr.validation?.length) {
					if (isAuthError$1(err)) useAppStore.getState().setLoginPrompt(true);
					else useAppStore.getState().showError({
						type: blongErr.type ?? "error",
						message: blongErr.message ?? "An unexpected error occurred.",
						print: blongErr.print
					});
				}
				throw err;
			}
		};
	} });
}
/** Provider component — wrap your application root with this */
function BlongProvider({ handlerProxy, schemaRegistry: schemaRegistry$1 = schemaRegistry, log, children }) {
	const queryClient = (0, import_react$17.useMemo)(() => createQueryClient(), []);
	const { handler, config, lib, errors } = handlerProxy;
	const wrappedHandler = (0, import_react$17.useMemo)(() => wrapHandlerProxy(handler), [handler]);
	if (typeof window !== "undefined" && config.portal?.testHook) {
		const win = window;
		win.__blongHandler = wrappedHandler;
		win.__blongStore = useAppStore;
	}
	const value = (0, import_react$17.useMemo)(() => ({
		handler: wrappedHandler,
		config,
		lib,
		errors,
		schemaRegistry: schemaRegistry$1,
		queryClient,
		log
	}), [
		wrappedHandler,
		config,
		lib,
		errors,
		schemaRegistry$1,
		queryClient,
		log
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime$20.jsx)(BlongContext, {
		value,
		children: /* @__PURE__ */ (0, import_jsx_runtime$20.jsx)(QueryClientProvider, {
			client: queryClient,
			children
		})
	});
}
/**
* Create a minimal IHandlerProxy from a dispatch function.
* Useful in tests and Storybook where the full runtime is not available.
*/
function makeHandlerProxy(dispatch, config = {}) {
	return {
		config,
		handler: new Proxy({}, { get(_, prop) {
			if (typeof prop === "symbol") return void 0;
			const method = String(prop);
			return (params, $meta) => dispatch(method, params, $meta);
		} }),
		lib: {},
		errors: {},
		utBus: { info: () => ({
			encrypt: {},
			sign: {}
		}) },
		gateway: { config: () => ({ public: {
			sign: {},
			encrypt: {}
		} }) },
		apiSchema: {}
	};
}
var import_react$17, import_jsx_runtime$20, BlongContext, AUTH_ERROR_TYPES$1;
function init_BlongContext() {
	return (init_BlongContext = __esmMin((() => {
		init_queryClient(), init_QueryClientProvider();
		import_react$17 = require_react();
		init_eventBus();
		init_registry();
		init_appStore();
		import_jsx_runtime$20 = require_jsx_runtime();
		BlongContext = (0, import_react$17.createContext)(null);
		AUTH_ERROR_TYPES$1 = /* @__PURE__ */ new Set([
			"identity.unauthenticated",
			"identity.invalidCredentials",
			"identity.sessionExpired",
			"rpc.jwtInvalid",
			"rpc.refreshFailed",
			"gateway.jwtMissingHeader",
			"login.refreshTokenExpired",
			"login.sessionNotFound",
			"login.sessionRevoked",
			"login.sessionInactive",
			"login.sessionExpired",
			"login.invalidCookie"
		]);
	})))();
}
// ../../core/blong-browser/src/hooks/useLoader.ts
function useLoader() {
	const { active, message } = useAppStore((s) => s.loader);
	return {
		loading: active,
		message,
		setLoading: useAppStore((s) => s.setLoading)
	};
}
function init_useLoader() {
	return (init_useLoader = __esmMin((() => {
		init_appStore();
	})))();
}
// ../../core/blong-browser/src/hooks/usePermission.ts
/**
* Returns true if the current user has the given permission.
* Also accepts a boolean override for testing.
*/
function usePermission(permission) {
	const permissions = useAppStore((s) => s.auth.permissions);
	if (typeof permissions === "boolean") return permissions;
	if (permission == null) return true;
	if (typeof permission === "boolean") return permission;
	return permissions[permission] === true;
}
function init_usePermission() {
	return (init_usePermission = __esmMin((() => {
		init_appStore();
	})))();
}
// ../../core/blong-browser/src/hooks/usePortal.ts
function usePortal() {
	const { tabs, activeTabId, portalConfig } = useAppStore((s) => s.portal);
	const openTab = useAppStore((s) => s.openTab);
	const closeTab = useAppStore((s) => s.closeTab);
	const setActiveTab = useAppStore((s) => s.setActiveTab);
	const setTabDirtyStore = useAppStore((s) => s.setTabDirty);
	return {
		tabs,
		activeTabId,
		activeTab: tabs.find((t) => t.id === activeTabId),
		portalConfig,
		openTab,
		closeTab,
		setActiveTab,
		setTabDirty: (0, import_react$16.useCallback)((id, dirty) => setTabDirtyStore(id, dirty), [setTabDirtyStore])
	};
}
var import_react$16;
function init_usePortal() {
	return (init_usePortal = __esmMin((() => {
		import_react$16 = require_react();
		init_appStore();
	})))();
}
// ../../core/blong-browser/src/components/AccountMenu/AccountMenu.tsx
function deriveInitials(name) {
	if (!name) return void 0;
	const parts = name.trim().split(/\s+/).filter(Boolean);
	if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
	if (parts[0]?.length >= 2) return parts[0].slice(0, 2).toUpperCase();
	return parts[0]?.[0]?.toUpperCase();
}
function AccountMenu({ profilePage, profileGet }) {
	const { handler } = useBlong();
	const profile = useAppStore((s) => s.auth.profile);
	const isAuthenticated = useAppStore((s) => s.auth.isAuthenticated);
	const portalConfig = useAppStore((s) => s.portal.portalConfig);
	const setProfile = useAppStore((s) => s.setProfile);
	const openTab = useAppStore((s) => s.openTab);
	const menuRef = (0, import_react$15.useRef)(null);
	const page = profilePage ?? portalConfig?.profile?.page;
	const get = profileGet ?? portalConfig?.profile?.get;
	const profileLabel = useText("Profile");
	const signOutLabel = useText("Sign out");
	(0, import_react$15.useEffect)(() => {
		if (!get || !isAuthenticated) return;
		let cancelled = false;
		(async () => {
			try {
				const data = await handler[get]({}, {});
				if (cancelled || !data) return;
				const name = [data.person?.firstName ?? data.firstName, data.person?.lastName ?? data.lastName].filter(Boolean).join(" ") || data.userName || data.emailAddress || "";
				setProfile({
					actorId: data.actorId ?? data.userId ?? "",
					name: name || void 0,
					initials: data.initials ?? void 0,
					language: data.language ?? data.preferredLanguage ?? void 0
				});
			} catch {}
		})();
		return () => {
			cancelled = true;
		};
	}, [
		get,
		handler,
		setProfile,
		isAuthenticated
	]);
	const initials = (0, import_react$15.useMemo)(() => profile?.initials ?? deriveInitials(profile?.name), [profile]);
	const onLogout = import_react$15.useCallback(async () => {
		await handler.authLogout({}, {});
	}, [handler]);
	const openProfile = import_react$15.useCallback(async () => {
		if (!page) return;
		try {
			const resolved = await handler[`component/${page}`]({}, {});
			const component = await resolved.component();
			openTab({
				id: `page-${page}`,
				actionName: page,
				title: resolved.title ?? profileLabel ?? "",
				component
			});
		} catch {}
	}, [
		page,
		handler,
		openTab,
		profileLabel
	]);
	const model = (0, import_react$15.useMemo)(() => {
		const items = [];
		if (page) {
			items.push({
				label: profileLabel,
				icon: "pi pi-user",
				command: () => void openProfile()
			});
			items.push({ separator: true });
		}
		items.push({
			label: signOutLabel,
			icon: "pi pi-sign-out",
			command: () => void onLogout()
		});
		return items;
	}, [
		page,
		profileLabel,
		signOutLabel,
		openProfile,
		onLogout
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime$19.jsxs)("div", {
		className: "blong-account-menu",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$19.jsx)(Avatar, {
			label: initials,
			icon: initials ? void 0 : "pi pi-user",
			shape: "circle",
			className: "blong-account-menu__avatar",
			onClick: (e) => menuRef.current?.toggle(e),
			title: profile?.name
		}), /* @__PURE__ */ (0, import_jsx_runtime$19.jsx)(Menu, {
			model,
			popup: true,
			ref: menuRef,
			className: "blong-account-menu__menu"
		})]
	});
}
var import_react$15, import_jsx_runtime$19;
function init_AccountMenu$1() {
	return (init_AccountMenu$1 = __esmMin((() => {
		import_react$15 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_BlongContext();
		init_useText();
		init_shell();
		init_appStore();
		import_jsx_runtime$19 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/model/dropdownRegistry.ts
/**
* Drop every cached option list, so the next form reads them again.
*
* A list is cached for the life of the page, and a write changes what belongs in one: a
* document created in this session must appear in the attachment form's picker, and it did
* not until the page was reloaded. The cost is one read per form opened after a write — the
* same read a reload would have made (`@@D-748`).
*/
function invalidateDropdowns() {
	dropdownRegistry.clear();
}
/**
* The cache generation, as a render-visible value.
*
* A widget that lists options puts the value in its load effect's dependencies: when
* a write empties the cache, the effect runs again and the list the picker offers is
* the one the server now answers (`@@D-784`).
*/
function useDropdownVersion() {
	return (0, import_react$14.useSyncExternalStore)(dropdownRegistry.subscribe, dropdownRegistry.getVersion, dropdownRegistry.getVersion);
}
var import_react$14, DropdownRegistry, dropdownRegistry;
function init_dropdownRegistry() {
	return (init_dropdownRegistry = __esmMin((() => {
		import_react$14 = require_react();
		DropdownRegistry = class {
			cache = /* @__PURE__ */ new Map();
			pending = /* @__PURE__ */ new Map();
			/**
			* Bumped whenever the cache is emptied, so a widget that already renders an
			* option list reads it again. A widget mounts once and keeps its list in state;
			* without this, adding a classifier in one tab left the picker in another tab
			* offering the old list until it was reopened.
			*/
			version = 0;
			listeners = /* @__PURE__ */ new Set();
			/**
			* Get a dropdown by name, loading it via the provided loader if not cached.
			*
			* @param name - Dropdown key, e.g. 'marine.species'
			* @param loader - Function that fetches the dropdown data from the backend
			*/
			async get(name, loader) {
				if (this.cache.has(name)) return this.cache.get(name);
				if (!this.pending.has(name)) {
					const promise = loader(name).then((data) => {
						this.cache.set(name, data);
						this.pending.delete(name);
						return data;
					}).catch((err) => {
						this.pending.delete(name);
						throw err;
					});
					this.pending.set(name, promise);
				}
				return this.pending.get(name);
			}
			/**
			* Pre-populate the cache without async loading (used by mocks and preload).
			*/
			set(name, data) {
				this.cache.set(name, data);
			}
			/**
			* Batch-preload multiple dropdowns.  Names already cached are skipped.
			*
			* @param names - Dropdown names to load
			* @param loader - Batch loader that returns a map of name → options
			*/
			preload(names, loader) {
				const missing = names.filter((n) => !this.cache.has(n) && !this.pending.has(n));
				if (!missing.length) return Promise.resolve();
				const promise = loader(missing).then((results) => {
					for (const [name, data] of Object.entries(results)) {
						this.cache.set(name, data);
						this.pending.delete(name);
					}
				});
				for (const name of missing) this.pending.set(name, promise.then(() => this.cache.get(name) ?? []));
				return promise.then(() => void 0);
			}
			/** Return true if the named dropdown is already loaded */
			has(name) {
				return this.cache.has(name);
			}
			/** The current generation of the cache — read by `useDropdownVersion`. */
			getVersion = () => this.version;
			/** Subscribe to a cache generation change; returns the unsubscribe function. */
			subscribe = (listener) => {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			};
			/** Empty the cache and tell the mounted widgets that the answer moved. */
			bump() {
				this.version += 1;
				for (const listener of [...this.listeners]) listener();
			}
			/** Clear the cache (useful in tests) */
			clear() {
				this.cache.clear();
				this.pending.clear();
				this.bump();
			}
		};
		dropdownRegistry = new DropdownRegistry();
	})))();
}
// ../../core/blong-browser/src/i18n/menu.ts
/**
* Add the untranslated-strings page to a portal that collects.
*
* The entry exists only while `translation.collect` is on, so a normal portal
* — and every screenshot baseline taken from one — never grows a menu group it
* cannot explain (`D-634`). Idempotent: composing the config twice must not list
* the page twice.
*/
function withTranslationReport(config) {
	if (!config.translation?.collect) return config;
	const menu = config.menu ?? [];
	if (menu.some((entry) => typeof entry !== "string" && "items" in entry && entry.items.some((item) => typeof item === "string" || item.method === "ui.i18n.missing"))) return config;
	return {
		...config,
		menu: [...menu, {
			id: "i18n",
			title: "Translations",
			items: [{ method: TRANSLATION_REPORT_METHOD }]
		}]
	};
}
var TRANSLATION_REPORT_METHOD;
function init_menu() {
	return (init_menu = __esmMin((() => {
		TRANSLATION_REPORT_METHOD = "ui.i18n.missing";
	})))();
}
// ../../core/blong-browser/src/primereact/locales.ts
var bgLocale;
function init_locales() {
	return (init_locales = __esmMin((() => {
		bgLocale = {
			accept: "Да",
			addRule: "Добавяне на условие",
			am: "AM",
			apply: "Приложи",
			cancel: "Отказ",
			choose: "Избор",
			chooseDate: "Изберете Дата",
			chooseMonth: "Изберете месец",
			chooseYear: "Изберете година",
			clear: "Изчистване",
			completed: "Завършено",
			contains: "Съдържа",
			custom: "Персонализиран",
			dateAfter: "Датата е след",
			dateBefore: "Датата е преди",
			dateFormat: "dd/mm/yy",
			dateIs: "Датата е",
			dateIsNot: "Дататата не е",
			dayNames: [
				"Неделя",
				"Понеделник",
				"Вторник",
				"Сряда",
				"Четвъртък",
				"Петък",
				"Събота"
			],
			dayNamesMin: [
				"Нд",
				"Пн",
				"Вт",
				"Ср",
				"Чт",
				"Пт",
				"Сб"
			],
			dayNamesShort: [
				"Нед",
				"Пон",
				"Вто",
				"Сря",
				"Чет",
				"Пет",
				"Съб"
			],
			emptyFilterMessage: "Няма налична информация",
			emptyMessage: "Не са открити резултати",
			emptySearchMessage: "Няма намерени резултати",
			emptySelectionMessage: "Няма избран елемент",
			endsWith: "Завършва на",
			equals: "Равно е на",
			fileChosenMessage: "{0} файла",
			fileSizeTypes: [
				"B",
				"KB",
				"MB",
				"GB",
				"TB",
				"PB",
				"EB",
				"ZB",
				"YB"
			],
			filter: "Филтър",
			firstDayOfWeek: 1,
			gt: "По-голямо от",
			gte: "По-голямо или равно на",
			lt: "По-малко от",
			lte: "По-малко или равно на",
			matchAll: "Съвпадение на всички",
			matchAny: "Съвпадение на някое",
			medium: "Средна",
			monthNames: [
				"Януари",
				"Февруари",
				"Март",
				"Април",
				"Май",
				"Юни",
				"Юли",
				"Август",
				"Септември",
				"Октомври",
				"Ноември",
				"Декември"
			],
			monthNamesShort: [
				"Яну",
				"Фев",
				"Мар",
				"Апр",
				"Май",
				"Юни",
				"Юли",
				"Авг",
				"Сеп",
				"Окт",
				"Ное",
				"Дек"
			],
			nextDecade: "Следващото десетилетие",
			nextHour: "Следващият час",
			nextMinute: "Следващата минута",
			nextMonth: "Следващият месец",
			nextSecond: "Следваща секунда",
			nextYear: "Следващата година",
			noFileChosenMessage: "Няма избран файл",
			noFilter: "Без филтър",
			notContains: "Не съдържа",
			notEquals: "Не е равно на",
			now: "Сега",
			passwordPrompt: "Въведете парола",
			pending: "В очакване",
			pm: "PM",
			prevDecade: "Предишното десетилетие",
			prevHour: "Предишен час",
			prevMinute: "Предишна минута",
			prevMonth: "Предишния месец",
			prevSecond: "Предишен втори",
			prevYear: "Предходната година",
			reject: "Не",
			removeRule: "Премахване на условие",
			searchMessage: "Налични са {0} резултата",
			selectionMessage: "{0} избрани елемента",
			showMonthAfterYear: false,
			startsWith: "Започва с",
			strong: "Добра",
			today: "Днес",
			upload: "Качване",
			weak: "Слаба",
			weekHeader: "Сд",
			aria: {
				cancelEdit: "Отказ Редактиране",
				close: "Близо",
				collapseLabel: "Свиване",
				collapseRow: "Редът е свит",
				editRow: "Редактиране на ред",
				expandLabel: "Разширяване",
				expandRow: "Редът е разширен",
				falseLabel: "Невярно",
				filterConstraint: "Ограничение на филтъра",
				filterOperator: "Филтър оператор",
				firstPageLabel: "Първа страница",
				gridView: "Мрежов изглед",
				hideFilterMenu: "Скриване на менюто за филтриране",
				jumpToPageDropdownLabel: "Отидете до падащото меню на страницата",
				jumpToPageInputLabel: "Преминете към Въвеждане на страница",
				lastPageLabel: "Последна страница",
				listLabel: "Списък с опции",
				listView: "Списъчен изглед",
				maximizeLabel: "Максимизиране",
				minimizeLabel: "Минимизиране",
				moveAllToSource: "Преместете всички в източника",
				moveAllToTarget: "Преместете всички в целта",
				moveBottom: "Преместване на дъното",
				moveDown: "Преместване надолу",
				moveTop: "Преместване отгоре",
				moveToSource: "Преместване към източника",
				moveToTarget: "Преместете се в Target",
				moveUp: "Преместване нагоре",
				navigation: "Навигация",
				next: "Следващия",
				nextPageLabel: "Следваща страница",
				nullLabel: "Не е избрано",
				otpLabel: "Моля, въведете еднократна парола {0}",
				pageLabel: "Страница {страница}",
				passwordHide: "Скриване на паролата",
				passwordShow: "Покажи парола",
				previous: "Предишен",
				prevPageLabel: "Предишна страница",
				removeLabel: "Премахване",
				rotateLeft: "Завърти наляво",
				rotateRight: "Завъртане надясно",
				rowsPerPageLabel: "Редове на страница",
				saveEdit: "Запазване на редактирането",
				scrollTop: "Превъртете отгоре",
				selectAll: "Всички избрани елементи",
				selectColor: "Изберете цвят",
				selectLabel: "Изберете",
				selectRow: "Избран ред",
				showFilterMenu: "Показване на менюто за филтриране",
				slide: "пързалка",
				slideNumber: "{slideNumber}",
				star: "1 звезда",
				stars: "{star} звезди",
				trueLabel: "Вярно",
				unselectAll: "Всички елементи са премахнати",
				unselectLabel: "Премахване на избора",
				unselectRow: "Редът не е избран",
				zoomImage: "Увеличете изображението",
				zoomIn: "Увеличавам",
				zoomOut: "Отдалечавам"
			}
		};
	})))();
}
// ../../core/blong-browser/src/components/Error/Error.tsx
function isAuthError(type) {
	return !!type && AUTH_ERROR_TYPES.has(type);
}
function ErrorDialog() {
	const error = useAppStore((s) => s.error);
	const clearError = useAppStore((s) => s.clearError);
	const { config: { portal } } = useBlong();
	const loginRoute = portal?.loginRoute;
	if (!error) return null;
	const unauthorized = isAuthError(error.type);
	const handleLogin = () => {
		clearError();
		if (loginRoute) window.location.href = loginRoute;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$18.jsxs)(Dialog, {
		visible: true,
		header: /* @__PURE__ */ (0, import_jsx_runtime$18.jsxs)("span", {
			className: "blong-error-dialog__title",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$18.jsx)("i", { className: "pi pi-exclamation-circle blong-error-dialog__icon" }), " Error"]
		}),
		onHide: unauthorized ? () => {} : clearError,
		closable: !unauthorized,
		className: "blong-error-dialog",
		style: { width: "480px" },
		modal: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$18.jsxs)("div", {
			className: "blong-error-dialog__body",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$18.jsx)("p", {
				className: "blong-error-dialog__message",
				children: error.print ?? error.message
			}), error.validation && error.validation.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)("ul", {
				className: "blong-error-dialog__validation",
				children: error.validation.map((v) => /* @__PURE__ */ (0, import_jsx_runtime$18.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime$18.jsxs)("strong", { children: [v.field, ":"] }),
					" ",
					v.message
				] }, v.field))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)("div", {
			className: "blong-error-dialog__footer",
			children: unauthorized ? /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)(Button, {
				label: "Login",
				icon: "pi pi-sign-in",
				onClick: handleLogin
			}) : /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)(Button, {
				label: "Close",
				icon: "pi pi-times",
				onClick: clearError
			})
		})]
	});
}
var import_jsx_runtime$18, AUTH_ERROR_TYPES;
function init_Error() {
	return (init_Error = __esmMin((() => {
		init_shell();
		init_BlongContext();
		init_appStore();
		import_jsx_runtime$18 = require_jsx_runtime();
		AUTH_ERROR_TYPES = /* @__PURE__ */ new Set([
			"identity.unauthenticated",
			"identity.invalidCredentials",
			"identity.sessionExpired",
			"rpc.jwtInvalid",
			"rpc.refreshFailed",
			"gateway.jwtMissingHeader",
			"login.refreshTokenExpired",
			"login.sessionNotFound",
			"login.sessionRevoked",
			"login.sessionInactive",
			"login.sessionExpired",
			"login.invalidCookie"
		]);
	})))();
}
// ../../core/blong-browser/src/feedback/capture.ts
function nextFrame() {
	return new Promise((resolve) => {
		if (typeof requestAnimationFrame === "undefined") resolve();
		else requestAnimationFrame(() => resolve());
	});
}
/** Hide the mode's chrome, take the picture, then put the chrome back. */
async function withHiddenOverlay(capture) {
	const root = typeof document === "undefined" ? null : document.documentElement;
	root?.setAttribute(FEEDBACK_CAPTURE_ATTR, "on");
	try {
		await nextFrame();
		await nextFrame();
		return await capture();
	} finally {
		root?.removeAttribute(FEEDBACK_CAPTURE_ATTR);
	}
}
async function grabFrame(stream, maxBytes, region) {
	const video = document.createElement("video");
	video.muted = true;
	video.srcObject = stream;
	try {
		await video.play();
		const sourceWidth = video.videoWidth || MAX_WIDTH;
		const sourceHeight = video.videoHeight || Math.round(MAX_WIDTH * .5625);
		const viewport = typeof window === "undefined" ? void 0 : window;
		const scaleX = viewport ? sourceWidth / viewport.innerWidth : 1;
		const scaleY = viewport ? sourceHeight / viewport.innerHeight : 1;
		const crop = region ? {
			x: Math.max(0, Math.round(region.x * scaleX)),
			y: Math.max(0, Math.round(region.y * scaleY)),
			width: Math.min(sourceWidth, Math.round(region.width * scaleX)),
			height: Math.min(sourceHeight, Math.round(region.height * scaleY))
		} : {
			x: 0,
			y: 0,
			width: sourceWidth,
			height: sourceHeight
		};
		const scale = Math.min(1, MAX_WIDTH / Math.max(1, crop.width), 1 / Math.max(1, scaleX));
		const width = Math.max(1, Math.round(crop.width * scale));
		const height = Math.max(1, Math.round(crop.height * scale));
		const canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		const context = canvas.getContext("2d");
		if (!context) return void 0;
		context.drawImage(video, crop.x, crop.y, crop.width, crop.height, 0, 0, width, height);
		let shotData = canvas.toDataURL("image/jpeg", QUALITIES[0]);
		for (const quality of QUALITIES.slice(1)) {
			if (shotData.length <= maxBytes) break;
			shotData = canvas.toDataURL("image/jpeg", quality);
		}
		return {
			shotData,
			mimeType: "image/jpeg",
			shotWidth: width,
			shotHeight: height,
			byteSize: shotData.length
		};
	} finally {
		video.pause();
		video.srcObject = null;
	}
}
/**
* Capture the screen, or say why not.
*
* `maxBytes` bounds the data URL, not the image: the payload travels through the
* gateway's JSON body, whose limit is 1 MB by default. `region` is the part of the
* viewport the submission keeps, in CSS pixels; without it the whole surface is
* kept, and the caller's anchors are fractions of that same region (`@@T-490`).
*/
async function captureScreen(maxBytes = 7e5, region) {
	const media = typeof navigator === "undefined" ? void 0 : navigator.mediaDevices;
	const getDisplayMedia = media?.getDisplayMedia?.bind(media);
	if (!getDisplayMedia) return { status: "unavailable" };
	let stream;
	try {
		const shot = await withHiddenOverlay(async () => {
			stream = await getDisplayMedia({
				video: { displaySurface: "browser" },
				audio: false,
				preferCurrentTab: true,
				selfBrowserSurface: "include"
			});
			return grabFrame(stream, maxBytes, region);
		});
		return shot ? {
			status: "captured",
			shot
		} : { status: "unavailable" };
	} catch (error) {
		return { status: error?.name === "NotAllowedError" ? "denied" : "unavailable" };
	} finally {
		stream?.getTracks().forEach((track) => track.stop());
	}
}
var MAX_WIDTH, QUALITIES;
function init_capture() {
	return (init_capture = __esmMin((() => {
		init_ids();
		MAX_WIDTH = 1600;
		QUALITIES = [
			.72,
			.6,
			.45,
			.3,
			.2
		];
	})))();
}
// ../../core/blong-browser/src/feedback/FeedbackMicButton.tsx
function FeedbackMicButton({ listening, error, onToggle }) {
	const t = useTranslate();
	const label = error === "denied" ? LABEL.denied : error === "failed" ? LABEL.failed : listening ? LABEL.stop : LABEL.start;
	const title = t(label) ?? label;
	return /* @__PURE__ */ (0, import_jsx_runtime$17.jsx)("button", {
		type: "button",
		className: `blong-feedback-callout__mic${listening ? " blong-feedback-callout__mic--listening" : ""}`,
		onPointerDown: (event) => event.stopPropagation(),
		onClick: onToggle,
		"aria-pressed": listening,
		"aria-label": title,
		title,
		"data-feedback-speech": listening ? "listening" : "idle",
		children: /* @__PURE__ */ (0, import_jsx_runtime$17.jsx)("i", { className: "pi pi-microphone" })
	});
}
var import_jsx_runtime$17, LABEL;
function init_FeedbackMicButton() {
	return (init_FeedbackMicButton = __esmMin((() => {
		init_useText();
		import_jsx_runtime$17 = require_jsx_runtime();
		LABEL = {
			start: "Dictate this comment",
			stop: "Stop dictating",
			denied: "The microphone is blocked for this page",
			failed: "The microphone could not be opened"
		};
	})))();
}
// ../../core/blong-browser/src/feedback/speech.ts
/** The switches as they stand, for `useSyncExternalStore`. */
function speechPreferences() {
	return preferences;
}
/** Hear about a switch changing; the returned function unsubscribes. */
function subscribeSpeechPreferences(listener) {
	preferenceListeners.add(listener);
	return () => {
		preferenceListeners.delete(listener);
	};
}
/** Change the switches; anything not named keeps its value (`D-763`). */
function setSpeechPreferences(patch) {
	const next = {
		...preferences,
		...patch
	};
	if (next.onDevice === preferences.onDevice && next.punctuation === preferences.punctuation && next.english === preferences.english) return;
	preferences = next;
	for (const listener of preferenceListeners) listener();
}
/** The recogniser the browser exposes, under either of its two names. */
function speechRecognitionConstructor() {
	const scope = globalThis;
	return scope.SpeechRecognition ?? scope.webkitSpeechRecognition;
}
/**
* Can this recogniser run on the device rather than through a service (`D-763`)?
*
* `available` is the newer of the two answers and the more reliable one; the
* property check covers a browser that shipped on-device recognition before it
* shipped the question. Both are read off the constructor rather than a
* constructed recogniser: a caller is a button deciding whether to render, and
* building one to ask would cost a recogniser per callout.
*/
function localRecognitionAvailable(Constructor = speechRecognitionConstructor()) {
	if (!Constructor) return false;
	if (typeof Constructor.available === "function") return true;
	const prototype = Constructor.prototype;
	return Boolean(prototype && "processLocally" in prototype);
}
/** What the browser says about on-device recognition for a language, if it says anything. */
async function localAvailability(Constructor, language) {
	if (typeof Constructor.available !== "function") return void 0;
	try {
		return await Constructor.available({
			langs: [language],
			processLocally: true
		});
	} catch {
		return;
	}
}
/**
* One recogniser, restarted when the browser ends it.
*
* `continuous` does not mean "until stopped": Chrome ends recognition after a few
* seconds of silence and fires `onend`, so a restart is what keeps a box listening
* while its person thinks. Every error but `no-speech` latches the engine shut:
* `no-speech` is a quiet microphone and is normal, while a refusal or an
* unreachable recognition service would be raised again by every restart, in a
* loop that spins for as long as the box is open.
*
* The pause is tiered (`D-772`): a session that has produced a transcription has
* eight seconds of silence between phrases, one that has heard a voice but no
* words has ten, and one that has heard nothing at all has fifteen. Recognition is
* not instant, and the first use of a page is the slowest; a flat four seconds
* closed the microphone in the middle of a sentence the recogniser was still
* working on.
*
* On-device recognition is asked for when the person left the switch on and this
* browser has a model for the language. A language the device cannot do — or would
* have to download a model for — falls back to the service rather than failing:
* setting the flag alone makes the recogniser refuse to start at all.
*/
function createWebSpeechEngine(language, Constructor = speechRecognitionConstructor(), options = {}) {
	if (!Constructor) return void 0;
	const silenceMs = options.silenceMs ?? 8e3;
	const startGraceMs = options.startGraceMs ?? 15e3;
	const firstResultMs = options.firstResultMs ?? 1e4;
	let recognition;
	let closed = false;
	let idleTimer;
	const disarm = () => {
		if (idleTimer !== void 0) clearTimeout(idleTimer);
		idleTimer = void 0;
	};
	return {
		async start(onPhrase, onEnd, onActivity) {
			closed = false;
			const instance = new Constructor();
			recognition = instance;
			/** Anything transcribed, which is what tells a working model from a deaf one. */
			let heard = false;
			/** The recogniser said it was hearing a voice (`D-772`). */
			let spoke = false;
			/** The service has already been tried in place of the device (`D-769`). */
			let fellBack = false;
			/** What is in the microphone, as last reported (`D-774`). */
			let level = "silence";
			let levelTimer;
			/** How many waits this session has counted down (`D-775`). */
			let idle = 0;
			/** The wait the session allows itself from here (`D-772`). */
			const wait = () => heard ? silenceMs : spoke ? firstResultMs : startGraceMs;
			const report = () => onActivity?.({
				level,
				waitMs: wait(),
				idle
			});
			const setLevel = (next) => {
				if (next === level) return;
				level = next;
				report();
			};
			/**
			* Say what is in the room, and forget it again unless it is said again.
			*
			* The hold is what stops the dot blinking: a recogniser fires its speech
			* events in bursts, and an indicator that followed them one for one
			* flickered through the gaps that are not silence (`D-774`). Two seconds
			* is long enough to cover a phrase being worked on and short enough that
			* a real pause dims the dot when the pause is real.
			*/
			const hold = (next, ms = 2e3) => {
				setLevel(next);
				if (levelTimer !== void 0) clearTimeout(levelTimer);
				levelTimer = setTimeout(() => {
					levelTimer = void 0;
					if (!closed) setLevel("silence");
				}, ms);
			};
			const fail = (reason) => {
				if (closed) return;
				closed = true;
				disarm();
				if (levelTimer !== void 0) clearTimeout(levelTimer);
				level = "silence";
				report();
				onEnd?.(reason);
			};
			const expire = () => {
				if (closed) return;
				disarm();
				if (!heard && spoke && instance.processLocally && !fellBack) {
					fellBack = true;
					instance.processLocally = false;
					setSpeechPreferences({ onDevice: false });
					try {
						instance.stop();
					} catch {}
					try {
						instance.start();
						arm();
						return;
					} catch {}
				}
				closed = true;
				recognition = void 0;
				disarm();
				if (levelTimer !== void 0) clearTimeout(levelTimer);
				level = "silence";
				report();
				try {
					instance.stop();
				} catch {}
				onEnd?.("silence");
			};
			const arm = () => {
				disarm();
				idle += 1;
				idleTimer = setTimeout(expire, wait());
				report();
			};
			if (preferences.onDevice && localRecognitionAvailable(Constructor)) {
				instance.processLocally = true;
				const verdict = await localAvailability(Constructor, language);
				if (verdict === "unavailable" || verdict === "downloadable") instance.processLocally = false;
			}
			if (closed) return;
			instance.lang = language;
			instance.continuous = true;
			instance.interimResults = true;
			instance.onresult = (event) => {
				if (closed) return;
				let interim = "";
				let final = "";
				for (let index = event.resultIndex; index < event.results.length; index++) {
					const result = event.results[index];
					const transcript = result?.[0]?.transcript ?? "";
					if (result?.isFinal) final += transcript;
					else interim += transcript;
				}
				if (interim || final) heard = true;
				hold("speech");
				arm();
				onPhrase({
					interim: interim.trim(),
					final: final.trim()
				});
			};
			instance.onspeechstart = () => {
				if (closed) return;
				spoke = true;
				hold("speech");
				arm();
			};
			instance.onspeechend = () => {
				if (closed) return;
				hold("sound", 400);
				arm();
			};
			instance.onsoundstart = () => {
				if (closed) return;
				if (level === "silence") hold("sound");
			};
			instance.onsoundend = () => {
				if (closed) return;
				if (level === "sound") hold("silence", 400);
			};
			instance.onerror = (event) => {
				if (event.error === "no-speech") return;
				if (event.error === "language-not-supported" && instance.processLocally) {
					instance.processLocally = false;
					return;
				}
				fail(event.error);
			};
			instance.onend = () => {
				if (closed || recognition !== instance) return;
				try {
					instance.start();
					arm();
				} catch {
					fail("aborted");
				}
			};
			try {
				instance.start();
			} catch {
				if (!instance.processLocally) {
					fail("aborted");
					return;
				}
				instance.processLocally = false;
				try {
					instance.start();
				} catch {
					fail("aborted");
					return;
				}
			}
			arm();
		},
		stop() {
			closed = true;
			disarm();
			recognition?.stop();
			recognition = void 0;
		}
	};
}
/**
* What this frame holds: a voice, some other sound, or a room.
*
* The model itself never reports that nothing was said — it hears a pause and
* waits — so both the silence clock and the indicator have to be decided on the
* audio. Two thresholds rather than one, because a fan and a voice are different
* answers to a person looking at the dot (`D-774`).
*/
function frameLevel(samples) {
	let energy = 0;
	for (let index = 0; index < samples.length; index++) energy += samples[index] * samples[index];
	const rms = Math.sqrt(energy / Math.max(samples.length, 1));
	if (rms > SHERPA_SPEECH_LEVEL) return "speech";
	return rms > SHERPA_SOUND_LEVEL ? "sound" : "silence";
}
/**
* The shipped loader: a real dynamic import, so the optional package is not
* required to install.
*
* Exported because it is the one thing a capability probe has to exercise
* directly: calling it imports the module, which downloads no model, while
* starting a session would fetch 73 MB.
*/
function loadSherpaModule(moduleName = "sherpa-onnx") {
	const cached = loadedModules.get(moduleName);
	if (cached) return cached;
	const loaded = import(
		/* @vite-ignore */
		moduleName
).then((module) => "createOnlineRecognizer" in module ? module : module.default);
	loadedModules.set(moduleName, loaded);
	loaded.catch(() => loadedModules.delete(moduleName));
	return loaded;
}
/**
* The recogniser for one model, kept between sessions.
*
* Creating it is what downloads and compiles the model, so a second callout in
* the same review must not pay for it again. Keyed by the model URLs: two suites
* in one page (a portal of portals) can name different models.
*/
function sherpaRecognizer(config, environment) {
	const key = JSON.stringify(config);
	const cached = recognizers.get(key);
	if (cached) return cached;
	const created = (environment.loadModule ?? loadSherpaModule)(config.module ?? "sherpa-onnx").then((module) => module.createOnlineRecognizer({
		featConfig: {
			sampleRate: SHERPA_SAMPLE_RATE,
			featureDim: 80
		},
		modelConfig: {
			transducer: {
				encoder: config.encoder,
				decoder: config.decoder,
				joiner: config.joiner
			},
			tokens: config.tokens,
			numThreads: config.numThreads ?? 1,
			provider: "cpu",
			debug: 0
		},
		decodingMethod: "greedy_search",
		maxActivePaths: 4
	}));
	recognizers.set(key, created);
	created.catch(() => recognizers.delete(key));
	return created;
}
/**
* Resample to the model's rate with linear interpolation.
*
* The device rarely runs at 16 kHz, and a model fed 48 kHz audio transcribes
* noise: the browser gives no way to demand a rate, so the conversion is ours.
*/
function resample(samples, from, to) {
	if (from === to) return samples;
	const ratio = from / to;
	const length = Math.floor(samples.length / ratio);
	const resampled = new Float32Array(length);
	for (let index = 0; index < length; index++) {
		const position = index * ratio;
		const before = Math.floor(position);
		const after = Math.min(before + 1, samples.length - 1);
		const fraction = position - before;
		resampled[index] = samples[before] * (1 - fraction) + samples[after] * fraction;
	}
	return resampled;
}
/**
* Dictation through a model that runs in the page.
*
* The microphone is opened at start and closed at stop; the recogniser itself
* outlives the session (`sherpaRecognizer`). Endpoint detection is what turns a
* pause into a finished phrase, which is the only place a final result comes from
* in a streaming model. A pause of `SPEECH_SILENCE_MS` closes the session as an
* ordinary end (`D-765`), so a box does not sit listening to an empty room.
*/
async function createSherpaEngine(config, environment = {}) {
	const getUserMedia = environment.getUserMedia ?? ((constraints) => navigator.mediaDevices.getUserMedia(constraints));
	const createAudioContext = environment.createAudioContext ?? ((sampleRate) => new AudioContext({ sampleRate }));
	const silenceMs = environment.silenceMs ?? 8e3;
	const startGraceMs = environment.startGraceMs ?? 15e3;
	const firstResultMs = environment.firstResultMs ?? 1e4;
	let media;
	let context;
	let sink;
	let stream;
	let recognizer;
	let spoken = "";
	let idleTimer;
	let levelTimer;
	let end;
	let activity;
	/** Whether a transcription has ever come out of this session (`D-772`). */
	let heard = false;
	/** Whether a voice has been in the audio (`D-772`). */
	let spoke = false;
	/** What is in the microphone, as last reported (`D-774`). */
	let level = "silence";
	/** How many waits this session has counted down (`D-775`). */
	let idle = 0;
	const disarm = () => {
		if (idleTimer !== void 0) clearTimeout(idleTimer);
		idleTimer = void 0;
	};
	const wait = () => heard ? silenceMs : spoke ? firstResultMs : startGraceMs;
	const report = () => activity?.({
		level,
		waitMs: wait(),
		idle
	});
	const setLevel = (next) => {
		if (next === level) return;
		level = next;
		report();
	};
	/** Say what is in the microphone, and forget it when the audio stops saying it (`D-774`). */
	const hold = (next, ms = 700) => {
		setLevel(next);
		if (levelTimer !== void 0) clearTimeout(levelTimer);
		levelTimer = setTimeout(() => {
			levelTimer = void 0;
			setLevel("silence");
		}, ms);
	};
	const release = () => {
		disarm();
		if (levelTimer !== void 0) clearTimeout(levelTimer);
		levelTimer = void 0;
		level = "silence";
		report();
		for (const track of media?.getTracks() ?? []) track.stop();
		media = void 0;
		sink?.disconnect();
		sink = void 0;
		context?.close();
		context = void 0;
		stream = void 0;
		end = void 0;
		activity = void 0;
	};
	const arm = () => {
		disarm();
		const session = end;
		idle += 1;
		idleTimer = setTimeout(() => {
			idleTimer = void 0;
			release();
			session?.("silence");
		}, wait());
		report();
	};
	return {
		async start(onPhrase, onEnd, onActivity) {
			recognizer = await sherpaRecognizer(config, environment);
			stream = recognizer.createStream();
			spoken = "";
			heard = false;
			spoke = false;
			level = "silence";
			idle = 0;
			activity = onActivity;
			const accept = (samples) => {
				if (!recognizer || !stream) return;
				const frame = frameLevel(samples);
				if (frame === "speech") {
					spoke = true;
					hold("speech");
					arm();
				} else if (frame === "sound") hold("sound");
				const pcm = resample(samples, context?.sampleRate ?? SHERPA_SAMPLE_RATE, SHERPA_SAMPLE_RATE);
				stream.acceptWaveform(SHERPA_SAMPLE_RATE, pcm);
				while (recognizer.isReady(stream)) recognizer.decode(stream);
				const text = recognizer.getResult(stream).text.trim();
				if (text && !heard) {
					heard = true;
					arm();
				}
				if (recognizer.isEndpoint(stream)) {
					recognizer.reset(stream);
					if (text) onPhrase({
						interim: "",
						final: text
					});
					return;
				}
				if (text && text !== spoken) {
					spoken = text;
					onPhrase({
						interim: text,
						final: ""
					});
				}
			};
			try {
				media = await getUserMedia({ audio: {
					channelCount: 1,
					echoCancellation: true,
					noiseSuppression: true
				} });
				context = createAudioContext(SHERPA_SAMPLE_RATE);
				const source = context.createMediaStreamSource(media);
				if (context.audioWorklet) {
					const url = URL.createObjectURL(new Blob([CAPTURE_WORKLET], { type: "text/javascript" }));
					try {
						await context.audioWorklet.addModule(url);
					} finally {
						URL.revokeObjectURL(url);
					}
					const node = environment.createWorkletNode?.(context) ?? new AudioWorkletNode(context, CAPTURE_WORKLET_NAME);
					node.port.onmessage = (event) => accept(event.data);
					sink = node;
				} else {
					const node = context.createScriptProcessor(4096, 1, 1);
					node.onaudioprocess = (event) => accept(event.inputBuffer.getChannelData(0).slice(0));
					sink = node;
				}
				source.connect(sink);
				const mute = context.createGain();
				mute.gain.value = 0;
				sink.connect(mute);
				mute.connect(context.destination);
				end = onEnd;
				arm();
			} catch (error) {
				release();
				throw error;
			}
		},
		stop() {
			release();
		}
	};
}
/** The language tag an engine is handed. */
function speechLanguage(language) {
	if (language) return language;
	return globalThis.navigator?.language ?? ENGLISH_LANGUAGE;
}
/**
* The language a session dictates in (`D-761`).
*
* The portal's own language wins, because a person reads the application in it
* and a comment about a Bulgarian screen is going to be spoken in Bulgarian;
* `speech.language` is only the fallback for a page that has no language of its
* own. The English switch overrides both, which is the one way to dictate in
* English over a portal that is not.
*/
function resolveSpeechLanguage(sessionLanguage, configured) {
	if (preferences.english) return ENGLISH_LANGUAGE;
	return speechLanguage(sessionLanguage || configured);
}
/** Can speech be recognised on this device rather than by a service (`D-763`)? */
function localSpeechAvailable(environment = standing) {
	return localRecognitionAvailable(environment.recognition ?? speechRecognitionConstructor());
}
/** Can this browser dictate at all, with the configured engine? */
function speechSupported(engine = "webSpeech", environment = standing) {
	if (typeof window === "undefined") return false;
	if (engine === "webSpeech") return Boolean(environment.recognition ?? speechRecognitionConstructor());
	const scope = globalThis;
	return Boolean((environment.getUserMedia ?? scope.navigator?.mediaDevices) && (environment.createAudioContext ?? scope.AudioContext));
}
/**
* The engine the configuration names, or `undefined` when this browser cannot run
* it.
*
* A misconfigured sherpa block throws rather than answering `undefined`: the
* suite asked for a model and did not say where its files are, which is a fault
* in the deployment and must not read as "this browser cannot dictate".
*/
async function createSpeechEngine(config, environment = standing) {
	if (config?.engine === "sherpa") {
		if (!config.sherpa?.encoder) throw new Error("feedback speech: the sherpa engine needs encoder, decoder, joiner and tokens URLs");
		return createSherpaEngine(config.sherpa, environment);
	}
	return createWebSpeechEngine(resolveSpeechLanguage(void 0, config?.language), environment.recognition ?? speechRecognitionConstructor(), {
		silenceMs: environment.silenceMs,
		startGraceMs: environment.startGraceMs,
		firstResultMs: environment.firstResultMs
	});
}
/**
* What the browser says about the microphone, without asking for it.
*
* `unknown` covers the browsers that do not answer the query at all (Safari
* before 16) and a name they reject, and it is read as "not granted": an
* automatic start must never be the thing that raises a prompt (`@@D-758`).
*/
async function microphonePermission() {
	const permissions = globalThis.navigator?.permissions;
	if (!permissions?.query) return "unknown";
	try {
		return (await permissions.query({ name: "microphone" })).state;
	} catch {
		return "unknown";
	}
}
/**
* Append one finished phrase to the comment.
*
* Dictation and typing share one text: the person may have written a sentence and
* then spoken the rest, so the phrase is joined with a single space unless the
* text already ends in whitespace.
*/
function appendSpeech(text, phrase) {
	const addition = phrase.trim();
	if (!addition) return text;
	if (!text) return addition;
	return /\s$/.test(text) ? `${text}${addition}` : `${text} ${addition}`;
}
/**
* Write the punctuation a speaker leaves out (`D-762`).
*
* No engine here writes it: the Web Speech API returns bare words and a Zipformer
* model produces no punctuation at all, so a comment arrives as one long clause.
* The correction is deliberately small — a capital at the start and a full stop at
* the end, a capital after each finished sentence, one space between the words —
* because anything more would be guessing at what the person meant. A phrase that
* already ends in `.`, `?`, `!` or `…` is left as it is; a decimal or a version
* number is not a sentence break, since a break needs a space after it.
*/
function punctuateSpeech(text) {
	const collapsed = text.replace(/\s+/g, " ").trim();
	if (!collapsed) return "";
	const sentenceCased = collapsed.replace(/(^|[.!?]\s+)(\p{Ll})/gu, (_match, lead, letter) => `${lead}${letter.toUpperCase()}`);
	return /[.!?…]$/.test(sentenceCased) ? sentenceCased : `${sentenceCased}.`;
}
/**
* What is left of a phrase once the words already handled are taken off it
* (`D-764`).
*
* A phrase is heard twice: once while it is being recognised, and again when it
* finishes. A person may take the words under way into the comment, or dismiss
* them, before that second report arrives — so the words already handled are
* remembered and cut off the front of anything further, or the phrase would be
* written twice. The comparison is by word and ignores case, because an engine
* re-cases its interim result as the sentence becomes clear.
*/
function remainingSpeech(text, handled) {
	const done = handled.trim().split(/\s+/).filter(Boolean);
	if (done.length === 0) return text.trim();
	const incoming = text.trim().split(/\s+/).filter(Boolean);
	for (let index = 0; index < done.length; index++) if (done[index].toLocaleLowerCase() !== incoming[index]?.toLocaleLowerCase()) return incoming.join(" ");
	return incoming.slice(done.length).join(" ");
}
var SPEECH_PREFERENCES_DEFAULT, ENGLISH_LANGUAGE, preferences, preferenceListeners, SHERPA_SAMPLE_RATE, CAPTURE_WORKLET, CAPTURE_WORKLET_NAME, SHERPA_SPEECH_LEVEL, SHERPA_SOUND_LEVEL, loadedModules, recognizers, standing;
function init_speech() {
	return (init_speech = __esmMin((() => {
		SPEECH_PREFERENCES_DEFAULT = {
			onDevice: true,
			punctuation: true,
			english: false
		};
		ENGLISH_LANGUAGE = "en-US";
		preferences = { ...SPEECH_PREFERENCES_DEFAULT };
		preferenceListeners = /* @__PURE__ */ new Set();
		SHERPA_SAMPLE_RATE = 16e3;
		CAPTURE_WORKLET = `
class BlongSpeechCapture extends AudioWorkletProcessor {
    process(inputs) {
        const channel = inputs[0] && inputs[0][0];
        if (channel && channel.length) this.port.postMessage(channel.slice(0));
        return true;
    }
}
registerProcessor('blong-speech-capture', BlongSpeechCapture);
`;
		CAPTURE_WORKLET_NAME = "blong-speech-capture";
		SHERPA_SPEECH_LEVEL = .02;
		SHERPA_SOUND_LEVEL = .006;
		loadedModules = /* @__PURE__ */ new Map();
		recognizers = /* @__PURE__ */ new Map();
		standing = {};
	})))();
}
// ../../core/blong-browser/src/feedback/useDrag.ts
function useDrag(onDelta) {
	const lastRef = (0, import_react$13.useRef)(null);
	return { start: (0, import_react$13.useCallback)((event) => {
		event.preventDefault();
		event.stopPropagation();
		lastRef.current = {
			x: event.clientX,
			y: event.clientY
		};
		const node = event.currentTarget;
		try {
			node.setPointerCapture?.(event.pointerId);
		} catch {}
		const onPointerMove = (moveEvent) => {
			const previous = lastRef.current;
			if (!previous) return;
			const dx = moveEvent.clientX - previous.x;
			const dy = moveEvent.clientY - previous.y;
			lastRef.current = {
				x: moveEvent.clientX,
				y: moveEvent.clientY
			};
			if (dx || dy) onDelta(dx, dy);
		};
		const end = () => {
			lastRef.current = null;
			node.removeEventListener("pointermove", onPointerMove);
			node.removeEventListener("pointerup", end);
			node.removeEventListener("pointercancel", end);
		};
		node.addEventListener("pointermove", onPointerMove);
		node.addEventListener("pointerup", end);
		node.addEventListener("pointercancel", end);
	}, [onDelta]) };
}
var import_react$13;
function init_useDrag() {
	return (init_useDrag = __esmMin((() => {
		import_react$13 = require_react();
	})))();
}
// ../../core/blong-browser/src/feedback/useFeedbackSpeech.ts
function publish(next) {
	snapshot = next;
	for (const listener of listeners) listener();
}
/** The current state, for `useSyncExternalStore`. */
function speechSnapshot() {
	return snapshot;
}
/** Subscribe to changes; the returned function unsubscribes. */
function speechSubscribe(listener) {
	listeners.add(listener);
	return () => {
		listeners.delete(listener);
	};
}
/**
* Write the phrase under way into the comment, so closing a session does not throw
* away the words that were already recognised (`D-771`).
*
* A pause is the most common way a phrase ends, and a person who has just spoken a
* sentence expects it in the box, not back in the microphone. What was heard is
* taken as it stands — no punctuation, because it is a phrase the engine had not
* finished — and only the part not already taken or dropped is written.
*/
function flushInterim() {
	const text = snapshot.interimText.trim();
	const current = session;
	const deliver = current?.options.onText;
	if (!text || !current || !deliver) return;
	handled = "";
	deliver(current.targetId, text);
}
/** Close the microphone and forget which box was listening. */
function speechStop() {
	flushInterim();
	generation += 1;
	engine?.stop();
	engine = void 0;
	handled = "";
	session = void 0;
	if (snapshot !== IDLE) publish(IDLE);
}
/**
* Take the phrase still being recognised into the comment (`D-764`).
*
* Returns the words taken, so the caller appends exactly what was accepted rather
* than reading the snapshot again; `undefined` when there was nothing to take. The
* words are remembered and cut off whatever the engine reports next, so the phrase
* is never written twice.
*/
function speechTakeInterim() {
	const text = snapshot.interimText.trim();
	if (!text) return void 0;
	handled = appendSpeech(handled, text);
	publish({
		...snapshot,
		interimText: ""
	});
	return text;
}
/**
* Forget the phrase still being recognised without writing it (`D-764`).
*
* The words are dropped rather than undone: an engine that reports them again
* while they are still being refined finds them already accounted for, and the
* part it finishes with is what reaches the comment.
*/
function speechDropInterim() {
	const text = snapshot.interimText.trim();
	if (!text) return;
	handled = appendSpeech(handled, text);
	publish({
		...snapshot,
		interimText: ""
	});
}
/**
* Start dictating into one box.
*
* `auto` is the path a click on a target or a focus in a callout takes, and it
* refuses to run unless the microphone is already granted: a prompt raised by
* clicking a card would ambush the person, and a prompt they dismiss poisons the
* origin for the rest of the session (`@@D-758`).
*/
async function speechListen(targetId, config, options = {}) {
	if (snapshot.listeningTargetId === targetId) return true;
	if (!config) return false;
	if (options.auto) {
		if (config.autoListen === false) return false;
		if (await microphonePermission() !== "granted") return false;
	}
	speechStop();
	const mine = generation;
	let opened;
	try {
		opened = await createSpeechEngine({
			...config,
			language: resolveSpeechLanguage(options.language, config.language)
		});
	} catch {
		if (mine === generation) publish({
			...IDLE,
			error: "failed"
		});
		return false;
	}
	if (!opened) {
		publish({
			...IDLE,
			error: "unsupported"
		});
		return false;
	}
	if (mine !== generation) return false;
	engine = opened;
	handled = "";
	let ended = false;
	publish({
		listeningTargetId: targetId,
		interimText: "",
		level: "silence",
		waitMs: 0,
		idle: 0
	});
	/** The session is over without the person asking: say why, and stop showing it as on. */
	const gaveUp = (reason) => {
		if (mine !== generation) return;
		ended = true;
		engine = void 0;
		if (reason === "silence") flushInterim();
		handled = "";
		session = void 0;
		if (reason === "silence") {
			publish(IDLE);
			return;
		}
		const refused = reason === "not-allowed" || reason === "service-not-allowed" || reason === "NotAllowedError";
		publish({
			...IDLE,
			error: refused ? "denied" : "failed"
		});
	};
	try {
		await opened.start((phrase) => {
			if (mine !== generation || ended) return;
			if (phrase.final) {
				const continues = handled !== "";
				const rest = remainingSpeech(phrase.final, handled);
				handled = "";
				publish({
					...snapshot,
					listeningTargetId: targetId,
					interimText: ""
				});
				if (rest) {
					const punctuate = !continues && speechPreferences().punctuation;
					options.onText?.(targetId, punctuate ? punctuateSpeech(rest) : rest);
				}
				return;
			}
			publish({
				...snapshot,
				listeningTargetId: targetId,
				interimText: remainingSpeech(phrase.interim, handled)
			});
		}, gaveUp, (activity) => {
			if (mine !== generation || ended) return;
			publish({
				...snapshot,
				...activity
			});
		});
		if (mine !== generation) return false;
		session = {
			targetId,
			config,
			options
		};
		return true;
	} catch (error) {
		gaveUp(error?.name);
		return false;
	}
}
/** Switch one box's dictation on or off. */
async function speechToggle(targetId, config, options = {}) {
	if (snapshot.listeningTargetId === targetId) {
		speechStop();
		return false;
	}
	return speechListen(targetId, config, options);
}
/**
* Start the listening box again with the switches as they now stand (`D-767`).
*
* A recogniser reads its language and its on-device flag when it starts, so a pill
* pressed mid-session would otherwise change nothing until the box was closed and
* opened by hand — and the silence clock would go on running through the seconds
* spent pressing it, closing the microphone the person was about to speak into.
* Restarting re-reads both and gives the box a fresh pause budget.
*/
async function speechRestart() {
	const current = session;
	if (!current) return false;
	speechStop();
	return speechListen(current.targetId, current.config, {
		...current.options,
		auto: false
	});
}
/**
* Subscribe a component to the session, and give it the commands.
*
* `onText` is the one thing the caller supplies: a finished phrase has to reach
* the draft, and this module knows nothing about the draft. The language is read
* from the store rather than passed in, because every caller would pass the same
* one — and a portal that switches language mid-session must dictate in the new
* one (`D-761`).
*/
function useFeedbackSpeech(onText) {
	const state = (0, import_react$12.useSyncExternalStore)(speechSubscribe, speechSnapshot, speechSnapshot);
	const language = useAppStore((store) => store.language);
	const onTextRef = (0, import_react$12.useRef)(onText);
	onTextRef.current = onText;
	const deliver = (0, import_react$12.useCallback)((targetId, transcript) => onTextRef.current(targetId, transcript), []);
	const start = (0, import_react$12.useCallback)((targetId, config, options) => speechListen(targetId, config, {
		...options,
		language,
		onText: deliver
	}), [deliver, language]);
	const toggle = (0, import_react$12.useCallback)((targetId, config) => speechToggle(targetId, config, {
		language,
		onText: deliver
	}), [deliver, language]);
	return (0, import_react$12.useMemo)(() => ({
		...state,
		start,
		toggle,
		stop: speechStop,
		acceptInterim: speechTakeInterim,
		clearInterim: speechDropInterim
	}), [
		state,
		start,
		toggle
	]);
}
/**
* The dictation switches, and the command that changes them (`D-763`).
*
* Bound to the same module-level store as the session, so the pill a person
* presses changes what the next phrase does — and every callout shows the new
* state — without any of it surviving a reload. A switch pressed while a box is
* listening restarts that box, because a recogniser reads its language and its
* on-device flag only when it starts (`D-767`).
*/
function useSpeechPreferences() {
	const preferences = (0, import_react$12.useSyncExternalStore)(subscribeSpeechPreferences, speechPreferences, speechPreferences);
	const setPreference = (0, import_react$12.useCallback)((patch) => {
		const before = speechPreferences();
		setSpeechPreferences(patch);
		if (speechPreferences() === before) return;
		speechRestart();
	}, []);
	return (0, import_react$12.useMemo)(() => ({
		preferences,
		setPreference
	}), [preferences, setPreference]);
}
var import_react$12, IDLE, engine, generation, handled, session, snapshot, listeners;
function init_useFeedbackSpeech() {
	return (init_useFeedbackSpeech = __esmMin((() => {
		import_react$12 = require_react();
		init_appStore();
		init_speech();
		IDLE = {
			listeningTargetId: null,
			interimText: "",
			level: "silence",
			waitMs: 0,
			idle: 0
		};
		generation = 0;
		handled = "";
		snapshot = IDLE;
		listeners = /* @__PURE__ */ new Set();
	})))();
}
// ../../core/blong-browser/src/feedback/FeedbackCallout.tsx
function FeedbackCallout({ targetId, box, comment, onChange, onRemove, onMove, onResize, speechAvailable = false, listening = false, interimText, level = "silence", waitMs = 0, idle = 0, speechError, onListen, onToggleListen, onAcceptInterim, onClearInterim, speechEngine }) {
	const t = useTranslate();
	const { preferences, setPreference } = useSpeechPreferences();
	const move = useDrag(onMove);
	const resize = useDrag(onResize);
	const sherpa = speechEngine === "sherpa";
	const showLocal = !sherpa && localSpeechAvailable();
	const showEnglish = !sherpa;
	const interim = interimText?.trim() ?? "";
	const keepTitle = t("Keep this phrase") ?? "Keep this phrase";
	const dropTitle = t("Drop this phrase") ?? "Drop this phrase";
	return /* @__PURE__ */ (0, import_jsx_runtime$16.jsxs)("div", {
		className: `blong-feedback-callout${listening ? " blong-feedback-callout--listening" : ""}`,
		style: {
			left: box.x,
			top: box.y,
			width: box.width,
			height: box.height
		},
		[FEEDBACK_UI_ATTR]: "callout",
		"data-feedback-target": targetId,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$16.jsxs)("div", {
				className: "blong-feedback-callout__bevel",
				onPointerDown: move.start,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("span", {
						className: "blong-feedback-callout__handle",
						title: targetId,
						children: shortTargetId(targetId)
					}),
					speechAvailable && /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)(FeedbackMicButton, {
						listening,
						error: speechError,
						onToggle: () => onToggleListen?.()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("button", {
						type: "button",
						className: "blong-feedback-callout__remove",
						onPointerDown: (event) => event.stopPropagation(),
						onClick: onRemove,
						title: t("Remove this comment") ?? "Remove this comment",
						"aria-label": t("Remove this comment") ?? "Remove this comment",
						children: /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("i", { className: "pi pi-times" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("textarea", {
				className: "blong-feedback-callout__text",
				value: comment,
				placeholder: t("What is wrong here?") ?? "What is wrong here?",
				onChange: (event) => onChange(event.target.value),
				onFocus: () => onListen?.()
			}),
			listening && /* @__PURE__ */ (0, import_jsx_runtime$16.jsxs)("div", {
				className: "blong-feedback-callout__interim",
				"data-feedback-interim": true,
				"data-feedback-hearing": level !== "silence" ? "true" : "false",
				"data-feedback-level": level,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("span", {
						className: `blong-feedback-callout__dot blong-feedback-callout__dot--${level}`,
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("span", {
						className: "blong-feedback-callout__interimText",
						"aria-live": "polite",
						children: interim || t("Listening…") || "Listening…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$16.jsxs)("span", {
						className: "blong-feedback-callout__interimActions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("button", {
							type: "button",
							className: "blong-feedback-callout__interimAction",
							onPointerDown: (event) => event.stopPropagation(),
							onClick: onAcceptInterim,
							disabled: !interim,
							title: keepTitle,
							"aria-label": keepTitle,
							"data-feedback-interim-take": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("i", { className: "pi pi-check" })
						}), /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("button", {
							type: "button",
							className: "blong-feedback-callout__interimAction",
							onPointerDown: (event) => event.stopPropagation(),
							onClick: onClearInterim,
							disabled: !interim,
							title: dropTitle,
							"aria-label": dropTitle,
							"data-feedback-interim-drop": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("i", { className: "pi pi-times" })
						})]
					}),
					waitMs > 0 && /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("span", {
						className: "blong-feedback-callout__drain",
						style: { animationDuration: `${waitMs}ms` },
						"aria-hidden": true
					}, idle)
				]
			}),
			speechAvailable && /* @__PURE__ */ (0, import_jsx_runtime$16.jsxs)("div", {
				className: "blong-feedback-callout__pills",
				role: "group",
				"aria-label": t("How to recognise this comment") ?? "How to recognise this comment",
				children: [
					showLocal && /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("button", {
						type: "button",
						className: "blong-feedback-callout__pill",
						onPointerDown: (event) => event.stopPropagation(),
						onClick: () => setPreference({ onDevice: !preferences.onDevice }),
						"aria-pressed": preferences.onDevice,
						title: t(PILL_TITLE.onDevice) ?? PILL_TITLE.onDevice,
						"data-feedback-speech-pill": "onDevice",
						children: t(PILL_LABEL.onDevice) ?? PILL_LABEL.onDevice
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("button", {
						type: "button",
						className: "blong-feedback-callout__pill",
						onPointerDown: (event) => event.stopPropagation(),
						onClick: () => setPreference({ punctuation: !preferences.punctuation }),
						"aria-pressed": preferences.punctuation,
						title: t(PILL_TITLE.punctuation) ?? PILL_TITLE.punctuation,
						"data-feedback-speech-pill": "punctuation",
						children: t(PILL_LABEL.punctuation) ?? PILL_LABEL.punctuation
					}),
					showEnglish && /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("button", {
						type: "button",
						className: "blong-feedback-callout__pill",
						onPointerDown: (event) => event.stopPropagation(),
						onClick: () => setPreference({ english: !preferences.english }),
						"aria-pressed": preferences.english,
						title: t(PILL_TITLE.english) ?? PILL_TITLE.english,
						"data-feedback-speech-pill": "english",
						children: t(PILL_LABEL.english) ?? PILL_LABEL.english
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("span", {
				className: "blong-feedback-callout__resize",
				onPointerDown: resize.start,
				"aria-hidden": true
			})
		]
	});
}
var import_jsx_runtime$16, PILL_LABEL, PILL_TITLE;
function init_FeedbackCallout() {
	return (init_FeedbackCallout = __esmMin((() => {
		init_useText();
		init_FeedbackMicButton();
		init_ids();
		init_speech();
		init_useDrag();
		init_useFeedbackSpeech();
		import_jsx_runtime$16 = require_jsx_runtime();
		PILL_LABEL = {
			onDevice: "Local",
			punctuation: "Punctuation",
			english: "English"
		};
		PILL_TITLE = {
			onDevice: "Recognise on this device",
			punctuation: "Write the punctuation I do not say",
			english: "Dictate in English"
		};
	})))();
}
// ../../core/blong-browser/src/feedback/FeedbackCrop.tsx
function FeedbackCrop({ region, onMove, onResize }) {
	const t = useTranslate();
	const move = useDrag(onMove);
	const resize = useDrag(onResize);
	return /* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)("div", {
		className: "blong-feedback-crop",
		[FEEDBACK_UI_ATTR]: "crop",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("div", {
			className: "blong-feedback-crop__box",
			style: {
				left: region.x,
				top: region.y,
				width: region.width,
				height: region.height
			},
			onPointerDown: move.start,
			children: /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("span", {
				className: "blong-feedback-crop__handle",
				onPointerDown: resize.start
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("span", {
			className: "blong-feedback-crop__hint",
			children: t("Drag to choose the part the reviewer needs") ?? "Drag to choose the part the reviewer needs"
		})]
	});
}
var import_jsx_runtime$15;
function init_FeedbackCrop() {
	return (init_FeedbackCrop = __esmMin((() => {
		init_useText();
		init_ids();
		init_useDrag();
		import_jsx_runtime$15 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/feedback/FeedbackOutline.tsx
function FeedbackOutline({ rect, targetId, tone }) {
	const badge = shortTargetId(targetId);
	return /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)("div", {
		className: `blong-feedback-ring blong-feedback-ring--${tone}`,
		style: {
			left: rect.x,
			top: rect.y,
			width: rect.width,
			height: rect.height
		},
		"aria-hidden": true,
		children: badge && /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)("span", {
			className: "blong-feedback-ring__badge",
			title: targetId,
			children: badge
		})
	});
}
var import_jsx_runtime$14;
function init_FeedbackOutline() {
	return (init_FeedbackOutline = __esmMin((() => {
		init_ids();
		import_jsx_runtime$14 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/feedback/FeedbackSubmitBar.tsx
function FeedbackSubmitBar({ count, busy, cropping, cropped, onCrop, onSubmit, onDiscard }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$13.jsxs)("div", {
		className: "blong-feedback-bar",
		[FEEDBACK_UI_ATTR]: "bar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$13.jsx)("span", {
				className: "blong-feedback-bar__count",
				children: count === 1 ? /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(Text, { children: "1 comment" }) : /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(Text, {
					params: { count },
					children: "{count} comments"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$13.jsx)("button", {
				type: "button",
				className: "blong-feedback-bar__button",
				onClick: onCrop,
				disabled: busy,
				"aria-pressed": cropping,
				children: cropping ? /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(Text, { children: "Done" }) : cropped ? /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(Text, { children: "Edit picture" }) : /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(Text, { children: "Crop" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$13.jsx)("button", {
				type: "button",
				className: "blong-feedback-bar__button",
				onClick: onDiscard,
				disabled: busy,
				children: /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(Text, { children: "Discard" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$13.jsx)("button", {
				type: "button",
				className: "blong-feedback-bar__button blong-feedback-bar__button--primary",
				onClick: onSubmit,
				disabled: busy || count === 0 || cropping,
				children: busy ? /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)("i", { className: "pi pi-spin pi-spinner" }) : /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(Text, { children: "Submit" })
			})
		]
	});
}
var import_jsx_runtime$13;
function init_FeedbackSubmitBar() {
	return (init_FeedbackSubmitBar = __esmMin((() => {
		init_Text();
		init_ids();
		import_jsx_runtime$13 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/feedback/guard.ts
/**
* Install the guard; the returned function removes it.
*
* Must be called only while the mode is active — installing it permanently would
* stop the whole application from responding to clicks.
*/
function installFeedbackGuard({ onTargetClick }) {
	if (typeof document === "undefined") return () => void 0;
	const stop = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (typeof event.stopImmediatePropagation === "function") event.stopImmediatePropagation();
	};
	const onPointer = (event) => {
		if (isFeedbackUi(event.target)) return;
		if (closestFeedbackTarget(event.target)) stop(event);
	};
	const onClick = (event) => {
		if (isFeedbackUi(event.target)) return;
		const element = closestFeedbackTarget(event.target);
		if (!element) return;
		stop(event);
		onTargetClick(element, event);
	};
	const onKeyDown = (event) => {
		if (isFeedbackUi(event.target)) return;
		stop(event);
	};
	document.addEventListener("pointerdown", onPointer, true);
	document.addEventListener("mousedown", onPointer, true);
	document.addEventListener("touchstart", onPointer, true);
	document.addEventListener("click", onClick, true);
	document.addEventListener("keydown", onKeyDown, true);
	return () => {
		for (const name of POINTER_EVENTS) document.removeEventListener(name, onPointer, true);
		document.removeEventListener("click", onClick, true);
		document.removeEventListener("keydown", onKeyDown, true);
	};
}
var POINTER_EVENTS;
function init_guard() {
	return (init_guard = __esmMin((() => {
		init_ids();
		POINTER_EVENTS = [
			"pointerdown",
			"mousedown",
			"touchstart"
		];
	})))();
}
// ../../core/blong-browser/src/feedback/placement.ts
/** The area two rectangles share; 0 when they do not touch. */
function overlapArea(a, b) {
	const width = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
	const height = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
	return width > 0 && height > 0 ? width * height : 0;
}
function clamp(value, min, max) {
	if (max < min) return min;
	return Math.min(Math.max(value, min), max);
}
/** The four candidates, before clamping, in preference order. */
function candidates(anchor, size, gap) {
	return [
		{
			side: "right",
			x: anchor.x + anchor.width + gap,
			y: anchor.y
		},
		{
			side: "below",
			x: anchor.x,
			y: anchor.y + anchor.height + gap
		},
		{
			side: "left",
			x: anchor.x - size.width - gap,
			y: anchor.y
		},
		{
			side: "above",
			x: anchor.x,
			y: anchor.y - size.height - gap
		}
	];
}
/**
* Place one callout.
*
* Each candidate is clamped into the viewport and scored: how much of it lands on
* a callout already there, how much on the anchor, and how far it had to be moved
* to fit at all. An unmoved candidate scores zero, so a side that mounts cleanly
* always beats a side that had to be pushed.
*/
function placeCallout({ anchor, size, viewport, taken = [], gap = 8 }) {
	let best;
	for (const [index, candidate] of candidates(anchor, size, gap).entries()) {
		const rect = {
			x: clamp(candidate.x, 0, viewport.width - size.width),
			y: clamp(candidate.y, 0, viewport.height - size.height),
			width: size.width,
			height: size.height
		};
		const moved = Math.abs(rect.x - candidate.x) + Math.abs(rect.y - candidate.y);
		const score = taken.reduce((total, other) => total + overlapArea(rect, other), 0) + overlapArea(rect, anchor) * 2 + moved + index / 100;
		if (!best || score < best.score) best = {
			score,
			rect,
			side: candidate.side
		};
	}
	return {
		rect: best.rect,
		side: best.side
	};
}
function centre(rect) {
	return {
		x: rect.x + rect.width / 2,
		y: rect.y + rect.height / 2
	};
}
/** Where the ray from `rect`'s centre towards `target` leaves `rect`. */
function borderPoint(rect, target, ring) {
	const from = centre(rect);
	const dx = target.x - from.x;
	const dy = target.y - from.y;
	if (!dx && !dy) return from;
	const alongX = dx ? (rect.width + ring) / 2 / Math.abs(dx) : Number.POSITIVE_INFINITY;
	const alongY = dy ? (rect.height + ring) / 2 / Math.abs(dy) : Number.POSITIVE_INFINITY;
	const scale = Math.min(alongX, alongY);
	return {
		x: from.x + dx * scale,
		y: from.y + dy * scale
	};
}
/**
* The line a callout draws back to the element it is about.
*
* Both ends sit on a border rather than a centre, so the line never runs under the
* callout's own text and the arrowhead lands exactly on the ring the element
* carries. The two centres decide the direction, which keeps the result stable
* while a box is dragged.
*/
function connectorOf(callout, anchor) {
	return {
		from: borderPoint(callout, centre(anchor), 0),
		to: borderPoint(anchor, centre(callout), 4)
	};
}
/** A box moved by a pointer delta and kept inside the viewport. */
function moveBox(box, dx, dy, viewport) {
	return {
		...box,
		x: clamp(box.x + dx, 0, viewport.width - box.width),
		y: clamp(box.y + dy, 0, viewport.height - box.height)
	};
}
/** A box resized from its bottom-right corner, never below `MIN_CALLOUT`. */
function resizeBox(box, dx, dy, viewport) {
	return {
		...box,
		width: clamp(box.width + dx, MIN_CALLOUT.width, viewport.width - box.x),
		height: clamp(box.height + dy, MIN_CALLOUT.height, viewport.height - box.y)
	};
}
/** A rectangle as a fraction of a region, so a stored box survives a resize. */
function toFraction(rect, region) {
	const round = (value) => Math.round(value * 1e4) / 1e4;
	const left = clamp(rect.x, region.x, region.x + region.width);
	const top = clamp(rect.y, region.y, region.y + region.height);
	return {
		x: round((left - region.x) / region.width),
		y: round((top - region.y) / region.height),
		width: round(clamp(rect.width, 0, region.x + region.width - left) / region.width),
		height: round(clamp(rect.height, 0, region.y + region.height - top) / region.height)
	};
}
/**
* The arrowhead at the end of a connector, as an SVG `points` string.
*
* The tip sits exactly on the element's border, so the head touches the ring
* rather than hovering near it, and the triangle is built from the line's own
* direction so a dragged callout keeps its head pointing the right way.
*/
function arrowHeadPoints(from, to, size = 10) {
	const dx = to.x - from.x;
	const dy = to.y - from.y;
	const length = Math.hypot(dx, dy) || 1;
	const ux = dx / length;
	const uy = dy / length;
	const base = {
		x: to.x - ux * size,
		y: to.y - uy * size
	};
	const half = size * .45;
	return [
		`${to.x},${to.y}`,
		`${base.x - uy * half},${base.y + ux * half}`,
		`${base.x + uy * half},${base.y - ux * half}`
	].join(" ");
}
var MIN_CALLOUT;
function init_placement() {
	return (init_placement = __esmMin((() => {
		MIN_CALLOUT = {
			width: 200,
			height: 120
		};
	})))();
}
// ../../core/blong-browser/src/feedback/useFeedbackConfig.ts
function useFeedbackConfig() {
	const { config } = useBlong();
	const composed = useAppStore((state) => state.portal.portalConfig?.feedback);
	return config.portal?.feedback ?? composed;
}
function init_useFeedbackConfig() {
	return (init_useFeedbackConfig = __esmMin((() => {
		init_BlongContext();
		init_appStore();
	})))();
}
// ../../core/blong-browser/src/feedback/FeedbackLayer.tsx
function escapeId(id) {
	const css = globalThis.CSS;
	return css?.escape ? css.escape(id) : id.replace(/["\\]/g, "\\$&");
}
function sameRect(a, b) {
	if (!a || !b) return a === b;
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function viewportOf() {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	};
}
/** The whole viewport, which is the region a submission keeps unless told otherwise. */
function fullRegion() {
	const { width, height } = viewportOf();
	return {
		x: 0,
		y: 0,
		width,
		height
	};
}
/** The first three segments of an identifier: subject, object and page. */
function pageOf(targetId) {
	const [subject, object, kind] = targetId.split("/")[0].split(".");
	return {
		subject,
		object,
		kind
	};
}
/**
* The region a fresh crop starts from: everything the submission talks about.
*
* Anchors alone are not enough — a callout can sit far from the element it is
* about, and a crop that leaves it outside the picture would store a box the
* reviewer cannot see. A floor of 40 % of the viewport keeps the first crop
* usable instead of a sliver around one small element.
*/
function initialCrop(rects, boxes) {
	const { width, height } = viewportOf();
	const boxed = [...Object.values(rects), ...Object.values(boxes)];
	if (!boxed.length) return {
		x: width * .1,
		y: height * .1,
		width: width * .8,
		height: height * .8
	};
	const pad = 32;
	const left = Math.min(...boxed.map((box) => box.x)) - pad;
	const top = Math.min(...boxed.map((box) => box.y)) - pad;
	const right = Math.max(...boxed.map((box) => box.x + box.width)) + pad;
	const bottom = Math.max(...boxed.map((box) => box.y + box.height)) + pad;
	const centreX = (left + right) / 2;
	const centreY = (top + bottom) / 2;
	const cropWidth = Math.max(right - left, width * .4);
	const cropHeight = Math.max(bottom - top, height * .4);
	return {
		x: Math.min(Math.max(0, centreX - cropWidth / 2), Math.max(0, width - cropWidth)),
		y: Math.min(Math.max(0, centreY - cropHeight / 2), Math.max(0, height - cropHeight)),
		width: Math.min(cropWidth, width),
		height: Math.min(cropHeight, height)
	};
}
function FeedbackLayer() {
	const active = useAppStore((state) => state.feedback.active);
	const items = useAppStore((state) => state.feedback.items);
	const feedbackConfig = useFeedbackConfig();
	const add = useAppStore((state) => state.feedbackAdd);
	const update = useAppStore((state) => state.feedbackUpdate);
	const remove = useAppStore((state) => state.feedbackRemove);
	const reset = useAppStore((state) => state.feedbackReset);
	const activate = useAppStore((state) => state.feedbackActivate);
	const { handler } = useBlong();
	const t = useTranslate();
	const speech = useFeedbackSpeech((targetId, transcript) => {
		const state = useAppStore.getState();
		const existing = state.feedback.items[targetId];
		if (!existing) return;
		state.feedbackUpdate(targetId, { commentText: appendSpeech(existing.commentText ?? "", transcript) });
	});
	const { start: startSpeech, toggle: toggleSpeech, stop: stopSpeech } = speech;
	const listeningTargetId = speech.listeningTargetId;
	const speechConfig = feedbackConfig?.speech;
	const speechAvailable = Boolean(speechConfig) && speechSupported(speechConfig?.engine);
	const speechConfigRef = (0, import_react$11.useRef)(speechConfig);
	speechConfigRef.current = speechConfig;
	const [hovered, setHovered] = (0, import_react$11.useState)(null);
	const [rects, setRects] = (0, import_react$11.useState)({});
	const [boxes, setBoxes] = (0, import_react$11.useState)({});
	const [cropping, setCropping] = (0, import_react$11.useState)(false);
	const [crop, setCrop] = (0, import_react$11.useState)(null);
	const [busy, setBusy] = (0, import_react$11.useState)(false);
	const itemsRef = (0, import_react$11.useRef)(items);
	itemsRef.current = items;
	const measure = (0, import_react$11.useCallback)(() => {
		const next = {};
		for (const id of Object.keys(itemsRef.current)) {
			const element = document.querySelector(`[${FEEDBACK_ID_ATTR}="${escapeId(id)}"]`);
			if (element) next[id] = rectOf(element);
		}
		setRects((previous) => {
			const keys = Object.keys(next);
			if (keys.length === Object.keys(previous).length && keys.every((key) => sameRect(previous[key], next[key]))) return previous;
			return next;
		});
	}, []);
	(0, import_react$11.useEffect)(() => {
		if (!active) return;
		measure();
		const onMove = () => measure();
		window.addEventListener("scroll", onMove, true);
		window.addEventListener("resize", onMove);
		const observer = typeof ResizeObserver === "undefined" ? void 0 : new ResizeObserver(onMove);
		observer?.observe(document.body);
		return () => {
			window.removeEventListener("scroll", onMove, true);
			window.removeEventListener("resize", onMove);
			observer?.disconnect();
		};
	}, [
		active,
		items,
		measure
	]);
	(0, import_react$11.useEffect)(() => {
		if (!active) return;
		setBoxes((previous) => {
			const next = {};
			const taken = [];
			let changed = false;
			for (const id of Object.keys(items)) {
				const kept = previous[id];
				if (kept) {
					next[id] = kept;
					taken.push(kept);
					continue;
				}
				const anchor = rects[id];
				if (!anchor) continue;
				next[id] = placeCallout({
					anchor,
					size: CALLOUT_SIZE,
					viewport: viewportOf(),
					taken,
					gap: CALLOUT_GAP
				}).rect;
				taken.push(next[id]);
				changed = true;
			}
			if (Object.keys(previous).length !== Object.keys(next).length) changed = true;
			return changed ? next : previous;
		});
	}, [
		active,
		items,
		rects
	]);
	(0, import_react$11.useEffect)(() => {
		if (!active || cropping) return;
		const onPointerMove = (event) => {
			if (isFeedbackUi(event.target)) {
				setHovered(null);
				return;
			}
			const element = closestFeedbackTarget(event.target);
			const target = element ? targetOf(element) : null;
			if (!element || !target) {
				setHovered(null);
				return;
			}
			const rect = rectOf(element);
			setHovered((previous) => previous && previous.id === target.targetId && sameRect(previous.rect, rect) ? previous : {
				id: target.targetId,
				rect
			});
		};
		document.addEventListener("pointermove", onPointerMove, true);
		return () => document.removeEventListener("pointermove", onPointerMove, true);
	}, [active, cropping]);
	(0, import_react$11.useEffect)(() => {
		if (!active || cropping) return;
		return installFeedbackGuard({ onTargetClick: (element) => {
			const target = targetOf(element);
			if (!target) return;
			const state = useAppStore.getState();
			const existing = state.feedback.items[target.targetId];
			add({
				...target,
				commentText: existing?.commentText ?? "",
				itemIndex: existing?.itemIndex ?? Object.keys(state.feedback.items).length
			});
			startSpeech(target.targetId, speechConfigRef.current, { auto: true });
		} });
	}, [
		active,
		cropping,
		add,
		startSpeech
	]);
	(0, import_react$11.useEffect)(() => {
		if (!active || listeningTargetId && !items[listeningTargetId]) stopSpeech();
	}, [
		active,
		items,
		listeningTargetId,
		stopSpeech
	]);
	const onSubmit = (0, import_react$11.useCallback)(async () => {
		const state = useAppStore.getState();
		const comments = Object.values(state.feedback.items).filter((item) => (item.commentText ?? "").trim());
		if (!comments.length) return;
		stopSpeech();
		const method = feedbackConfig?.submit ?? "feedback.session.add";
		const first = pageOf(comments[0].targetId);
		const region = crop ?? fullRegion();
		const payload = comments.map((item) => ({
			...item,
			...rects[item.targetId] && { anchor: toFraction(rects[item.targetId], region) },
			...boxes[item.targetId] && { callout: toFraction(boxes[item.targetId], region) }
		}));
		setBusy(true);
		try {
			const outcome = await captureScreen(feedbackConfig?.maxShotBytes, crop ?? void 0);
			await handler[method]?.({ session: {
				pageUrl: `${window.location.pathname}${window.location.search}`,
				pageTitle: document.title,
				pageSubject: first.subject,
				pageObject: first.object,
				pageKind: first.kind,
				languageCode: state.language,
				viewportJSON: `${window.innerWidth}x${window.innerHeight}@${window.devicePixelRatio || 1}`,
				shotStatus: outcome.status,
				items: payload,
				...outcome.shot && { shot: outcome.shot }
			} }, {});
			reset();
			setBoxes({});
			setCrop(null);
			setCropping(false);
			activate(false);
			state.showToast({
				severity: "success",
				summary: t("Feedback submitted") ?? "Feedback submitted"
			});
		} catch {} finally {
			setBusy(false);
		}
	}, [
		activate,
		boxes,
		crop,
		feedbackConfig,
		handler,
		rects,
		reset,
		t,
		stopSpeech
	]);
	const onCrop = (0, import_react$11.useCallback)(() => {
		setCropping((previous) => {
			if (previous) return false;
			setCrop((current) => current ?? initialCrop(rects, boxes));
			return true;
		});
	}, [boxes, rects]);
	const onDiscard = (0, import_react$11.useCallback)(() => {
		stopSpeech();
		reset();
		setBoxes({});
		setCrop(null);
		setCropping(false);
	}, [reset, stopSpeech]);
	if (!active) return null;
	const connectors = Object.keys(items).filter((id) => rects[id] && boxes[id]).map((id) => ({
		id,
		...connectorOf(boxes[id], rects[id])
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime$12.jsxs)("div", {
		className: "blong-feedback-layer",
		children: [
			!cropping && hovered && /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(FeedbackOutline, {
				rect: hovered.rect,
				targetId: hovered.id,
				tone: "hover"
			}),
			!cropping && Object.keys(items).map((id) => rects[id] ? /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(FeedbackOutline, {
				rect: rects[id],
				targetId: id,
				tone: "item"
			}, `ring-${id}`) : null),
			!cropping && connectors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)("svg", {
				className: "blong-feedback-connectors",
				"aria-hidden": true,
				children: connectors.map(({ id, from, to }) => /* @__PURE__ */ (0, import_jsx_runtime$12.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime$12.jsx)("line", {
					className: "blong-feedback-connector",
					x1: from.x,
					y1: from.y,
					x2: to.x,
					y2: to.y
				}), /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)("polygon", {
					className: "blong-feedback-connector__head",
					points: arrowHeadPoints(from, to)
				})] }, `line-${id}`))
			}),
			!cropping && Object.entries(items).map(([id, item]) => {
				const box = boxes[id];
				if (!box) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(FeedbackCallout, {
					targetId: id,
					box,
					comment: item.commentText ?? "",
					onChange: (value) => update(id, { commentText: value }),
					onRemove: () => remove(id),
					speechAvailable,
					listening: listeningTargetId === id,
					interimText: listeningTargetId === id ? speech.interimText : void 0,
					level: listeningTargetId === id ? speech.level : "silence",
					waitMs: listeningTargetId === id ? speech.waitMs : 0,
					idle: listeningTargetId === id ? speech.idle : 0,
					speechError: speech.error,
					speechEngine: speechConfigRef.current?.engine,
					onListen: () => void startSpeech(id, speechConfigRef.current, { auto: true }),
					onToggleListen: () => void toggleSpeech(id, speechConfigRef.current),
					onAcceptInterim: () => {
						const taken = speech.acceptInterim();
						if (!taken) return;
						const current = useAppStore.getState().feedback.items[id]?.commentText ?? "";
						update(id, { commentText: appendSpeech(current, taken) });
					},
					onClearInterim: () => speech.clearInterim(),
					onMove: (dx, dy) => setBoxes((previous) => ({
						...previous,
						[id]: moveBox(previous[id] ?? box, dx, dy, viewportOf())
					})),
					onResize: (dx, dy) => setBoxes((previous) => ({
						...previous,
						[id]: resizeBox(previous[id] ?? box, dx, dy, viewportOf())
					}))
				}, `callout-${id}`);
			}),
			cropping && crop && /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(FeedbackCrop, {
				region: crop,
				onMove: (dx, dy) => setCrop((previous) => previous ? moveBox(previous, dx, dy, viewportOf()) : previous),
				onResize: (dx, dy) => setCrop((previous) => previous ? resizeBox(previous, dx, dy, viewportOf()) : previous)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(FeedbackSubmitBar, {
				count: Object.keys(items).length,
				busy,
				cropping,
				cropped: Boolean(crop),
				onCrop,
				onSubmit: () => void onSubmit(),
				onDiscard
			})
		]
	});
}
var import_react$11, import_jsx_runtime$12, CALLOUT_SIZE, CALLOUT_GAP;
function init_FeedbackLayer() {
	return (init_FeedbackLayer = __esmMin((() => {
		import_react$11 = require_react();
		init_BlongContext();
		init_useText();
		init_appStore();
		init_capture();
		init_FeedbackCallout();
		init_FeedbackCrop();
		init_FeedbackOutline();
		init_FeedbackSubmitBar();
		init_guard();
		init_ids();
		init_placement();
		init_speech();
		init_useFeedbackConfig();
		init_useFeedbackSpeech();
		import_jsx_runtime$12 = require_jsx_runtime();
		CALLOUT_SIZE = {
			width: 244,
			height: 156
		};
		CALLOUT_GAP = 22;
	})))();
}
// ../../core/blong-browser/src/feedback/FeedbackToggle.tsx
/** Parse `F2` / `ctrl+shift+F` / `Alt+f` into the parts a keydown carries. */
function parseShortcut(shortcut) {
	const parts = shortcut.split("+").map((part) => part.trim().toLowerCase());
	const key = parts.pop() ?? "f";
	return {
		alt: parts.includes("alt"),
		ctrl: parts.includes("ctrl") || parts.includes("control"),
		shift: parts.includes("shift"),
		key
	};
}
/** Does this event match the shortcut? */
function matchesShortcut(event, shortcut) {
	const parsed = parseShortcut(shortcut);
	return event.altKey === parsed.alt && event.ctrlKey === parsed.ctrl && event.shiftKey === parsed.shift && event.key.toLowerCase() === parsed.key;
}
function FeedbackToggle() {
	const config = useFeedbackConfig();
	const active = useAppStore((state) => state.feedback.active);
	const items = useAppStore((state) => state.feedback.items);
	const reset = useAppStore((state) => state.feedbackReset);
	const allowed = usePermission(config?.permission ?? "feedback.session.add");
	const t = useTranslate();
	const count = Object.keys(items).length;
	const toggle = (0, import_react$10.useCallback)(() => {
		const state = useAppStore.getState();
		if (state.feedback.active) {
			if (Object.keys(state.feedback.items).length && !window.confirm(t("Discard the comments and leave feedback mode?") ?? "Discard the comments and leave feedback mode?")) return;
			reset();
		}
		state.feedbackActivate(!state.feedback.active);
	}, [reset, t]);
	(0, import_react$10.useEffect)(() => {
		if (!config?.enabled) return;
		const shortcut = config.shortcut ?? "F2";
		const onKeyDown = (event) => {
			if (!matchesShortcut(event, shortcut)) return;
			event.preventDefault();
			event.stopPropagation();
			const state = useAppStore.getState();
			state.feedbackActivate(!state.feedback.active);
		};
		document.addEventListener("keydown", onKeyDown, true);
		return () => document.removeEventListener("keydown", onKeyDown, true);
	}, [config?.enabled, config?.shortcut]);
	if (!config?.enabled || !allowed) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)("button", {
		type: "button",
		className: `blong-feedback-toggle${active ? " blong-feedback-toggle--active" : ""}`,
		title: t("Feedback mode") ?? "Feedback mode",
		"aria-pressed": active,
		onPointerDown: (event) => event.stopPropagation(),
		onClick: (event) => {
			event.stopPropagation();
			toggle();
		},
		[FEEDBACK_UI_ATTR]: "toggle",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("i", { className: "pi pi-comment" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("span", {
			className: "blong-feedback-toggle__count",
			children: count
		})]
	});
}
var import_react$10, import_jsx_runtime$11;
function init_FeedbackToggle() {
	return (init_FeedbackToggle = __esmMin((() => {
		import_react$10 = require_react();
		init_usePermission();
		init_useText();
		init_appStore();
		init_ids();
		init_useFeedbackConfig();
		import_jsx_runtime$11 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/prefetch.ts
/**
* Fetch the library's page code in the background.
*
* The package root is the list: everything the library can render is exported there,
* and a hand-written list of modules would fall behind the day a page kind is added.
* This is one of the few places a root import is right — a dev server does not
* tree-shake, which is the whole point here.
*/
function prefetchPageSystem() {
	if (started || !globalThis.document) return;
	started = true;
	const load = () => {
		__vitePreload(() => import("./iframe-BslwTayt.js").then((n) => (n.n(), n.r)).then(() => {
			document.documentElement.dataset["blongPrefetch"] = "done";
		}, () => {
			document.documentElement.dataset["blongPrefetch"] = "failed";
		}), __vite__mapDeps([0,1,2,3,4,5,6,7,8]), import.meta.url);
	};
	const idle = globalThis.requestIdleCallback;
	if (idle) idle(load, { timeout: 3e3 });
	else setTimeout(load, 200);
}
var started;
function init_prefetch() {
	return (init_prefetch = __esmMin((() => {
		init_preload_helper();
		started = false;
	})))();
}
// ../../core/blong-browser/src/feedback/useFeedbackFreeze.ts
/**
* Run `onElapsed` after `delay` ms, holding the clock while feedback mode is
* active.
*
* @param delay    the full lifetime, in milliseconds
* @param onElapsed called once per expiry
* @param enabled  schedule anything at all; `false` disables the timer entirely
* @param resetKey a value that identifies the thing being timed — a new hint
*                 restarts the full lifetime when this changes
*/
function useFeedbackFreeze(delay, onElapsed, enabled = true, resetKey) {
	const active = useFeedbackActive();
	const callbackRef = (0, import_react$9.useRef)(onElapsed);
	callbackRef.current = onElapsed;
	const remainingRef = (0, import_react$9.useRef)(delay);
	const startedRef = (0, import_react$9.useRef)(null);
	const timerRef = (0, import_react$9.useRef)(null);
	const keyRef = (0, import_react$9.useRef)(resetKey);
	(0, import_react$9.useEffect)(() => {
		if (!enabled) return;
		if (keyRef.current !== resetKey) {
			keyRef.current = resetKey;
			remainingRef.current = delay;
			startedRef.current = null;
		}
		if (active) {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
				timerRef.current = null;
			}
			if (startedRef.current != null) {
				remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - startedRef.current));
				startedRef.current = null;
			}
			return;
		}
		startedRef.current = Date.now();
		timerRef.current = setTimeout(() => {
			timerRef.current = null;
			startedRef.current = null;
			callbackRef.current();
		}, remainingRef.current);
		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
				timerRef.current = null;
			}
			if (startedRef.current != null) {
				remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - startedRef.current));
				startedRef.current = null;
			}
		};
	}, [
		active,
		enabled,
		delay,
		resetKey
	]);
}
var import_react$9;
function init_useFeedbackFreeze() {
	return (init_useFeedbackFreeze = __esmMin((() => {
		import_react$9 = require_react();
		init_useFeedbackTarget();
	})))();
}
// ../../core/blong-browser/src/components/Hint/Hint.tsx
function Hint() {
	const toastRef = (0, import_react$8.useRef)(null);
	const toasts = useAppStore((s) => s.toasts);
	const feedbackActive = useFeedbackActive();
	const lastToastRef = (0, import_react$8.useRef)(null);
	(0, import_react$8.useEffect)(() => {
		if (toastRef.current && toasts.length > 0) {
			const latest = toasts[toasts.length - 1];
			lastToastRef.current = latest;
			toastRef.current.show({
				severity: latest.severity,
				summary: latest.summary,
				detail: latest.detail,
				life: feedbackActive ? 864e5 : latest.life
			});
		}
	}, [toasts, feedbackActive]);
	return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Toast, {
		ref: toastRef,
		position: "top-right"
	});
}
/**
* ActionHint — singleton OverlayPanel for button-level feedback.
* Mount once in App. ActionButton calls showHint() to display a
* success/error message anchored to the button. Auto-dismisses after 2 s.
*/
function ActionHint() {
	const hint = useAppStore((s) => s.hint);
	const clearHint = useAppStore((s) => s.clearHint);
	const overlayRef = (0, import_react$8.useRef)(null);
	(0, import_react$8.useEffect)(() => {
		if (hint?.target) overlayRef.current?.show(null, hint.target);
		else overlayRef.current?.hide();
	}, [hint]);
	useFeedbackFreeze(2e3, () => {
		overlayRef.current?.hide();
		clearHint();
	}, Boolean(hint?.target), hint);
	return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(OverlayPanel, {
		ref: overlayRef,
		style: { maxWidth: 240 },
		children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
			className: hint?.error ? "text-red-500" : "text-green-500",
			children: hint?.message
		})
	});
}
var import_react$8, import_jsx_runtime$10;
function init_Hint() {
	return (init_Hint = __esmMin((() => {
		init_shell();
		import_react$8 = require_react();
		init_useFeedbackFreeze();
		init_useFeedbackTarget();
		init_appStore();
		import_jsx_runtime$10 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/LanguageSwitcher/LanguageSwitcher.tsx
/**
* LanguageSwitcher — the configurable UI-language selector in the portal
* menubar, rendered to the left of the profile menu.
*
* It offers ad-hoc (client-side) switching: selecting a language calls
* `appStore.setLanguage`, which swaps the active translation dictionary and
* activates the matching PrimeReact locale.  The choice is NOT persisted to
* the user profile — that is the profile page's `preferredLanguage` edit.
*
* The available languages are config-driven (`config.portal.languages`), with
* a fallback to the keys of `config.portal.translations`.  When fewer than
* two languages are configured the switcher renders nothing.
*/
function LanguageSwitcher({ languages: languagesProp }) {
	const t = useTranslate();
	const language = useAppStore((s) => s.language);
	const setLanguage = useAppStore((s) => s.setLanguage);
	const portalConfig = useAppStore((s) => s.portal.portalConfig);
	const languages = (0, import_react$7.useMemo)(() => {
		const configured = languagesProp ?? portalConfig?.languages;
		if (configured && configured.length) return configured;
		const dicts = portalConfig?.translations;
		if (dicts) return Object.keys(dicts).map((value) => ({
			value,
			label: value
		}));
		return [];
	}, [
		languagesProp,
		portalConfig?.languages,
		portalConfig?.translations
	]);
	if (languages.length < 2) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(Dropdown, {
		value: language,
		options: languages,
		optionLabel: "label",
		optionValue: "value",
		onChange: (e) => setLanguage(e.value),
		className: "blong-language-switcher",
		panelClassName: "blong-language-switcher__panel",
		"aria-label": t("Language")
	});
}
var import_react$7, import_jsx_runtime$9;
function init_LanguageSwitcher$1() {
	return (init_LanguageSwitcher$1 = __esmMin((() => {
		import_react$7 = require_react();
		init_shell();
		init_appStore();
		init_useText();
		import_jsx_runtime$9 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/SocialLoginButton/SocialLoginButton.tsx
function GoogleMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsxs)("svg", {
		className: "blong-social-login__mark",
		viewBox: "0 0 48 48",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("path", {
				fill: "#EA4335",
				d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("path", {
				fill: "#4285F4",
				d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("path", {
				fill: "#FBBC05",
				d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("path", {
				fill: "#34A853",
				d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
			})
		]
	});
}
function SocialLoginButton({ onClick, label = "Continue with Google", loading, disabled, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(Button, {
		type: "button",
		outlined: true,
		label,
		loading,
		disabled,
		className: `blong-social-login__button ${className ?? ""}`,
		onClick,
		"data-testid": "google-login-button",
		children: !loading && /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(GoogleMark, {})
	});
}
var import_jsx_runtime$8;
function init_SocialLoginButton$1() {
	return (init_SocialLoginButton$1 = __esmMin((() => {
		init_shell();
		import_jsx_runtime$8 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/Login/Login.tsx
function Login({ onLogin, onOtp, onNewPassword, title, logoIcon = "pi pi-circle", logoUrl, titleComponent: TitleComponent, orgComponent: OrgComponent, orgTitle, orgIcon, orgLogoUrl, registerPage, registerLabel = "Register", error: externalError, loading: externalLoading, initialStep = "credentials", googleLogin, defaultUsername, passwordHint }) {
	const t = useTranslate();
	const { handler } = useBlong();
	const [step, setStep] = (0, import_react$6.useState)(initialStep);
	const [username, setUsername] = (0, import_react$6.useState)(defaultUsername ?? "");
	const [hintOpen, setHintOpen] = (0, import_react$6.useState)(false);
	const [password, setPassword] = (0, import_react$6.useState)("");
	const [otp, setOtp] = (0, import_react$6.useState)("");
	const [newPassword, setNewPassword] = (0, import_react$6.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react$6.useState)("");
	const [error, setError] = (0, import_react$6.useState)("");
	const [loading, setLoading] = (0, import_react$6.useState)(false);
	const [RegisterComp, setRegisterComp] = (0, import_react$6.useState)(null);
	const isLoading = externalLoading ?? loading;
	const displayError = externalError ?? error;
	const handleCredentials = async (e) => {
		e.preventDefault();
		setError("");
		if (!username.trim()) {
			setError("Username is required");
			return;
		}
		if (!password.trim()) {
			setError("Password is required");
			return;
		}
		setLoading(true);
		try {
			await onLogin({
				username,
				password
			});
		} catch (err) {
			setError(String(err.message ?? err));
		} finally {
			setLoading(false);
		}
	};
	const handleOtp = async (e) => {
		e.preventDefault();
		if (!otp.trim()) {
			setError("OTP is required");
			return;
		}
		setLoading(true);
		try {
			await onOtp?.(otp);
		} catch (err) {
			setError(String(err.message ?? err));
		} finally {
			setLoading(false);
		}
	};
	const handleNewPassword = async (e) => {
		e.preventDefault();
		if (newPassword !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		setLoading(true);
		try {
			await onNewPassword?.({
				newPassword,
				confirmPassword
			});
		} catch (err) {
			setError(String(err.message ?? err));
		} finally {
			setLoading(false);
		}
	};
	const handleRegister = async () => {
		if (!registerPage) return;
		try {
			const resolved = await handler[`component/${registerPage}`]({}, {});
			const unwrap = async (comp) => {
				if (typeof comp === "function") return comp;
				if (comp && typeof comp === "object") {
					const nested = comp.component;
					if (typeof nested === "function") return await nested() ?? null;
				}
				return null;
			};
			const component = await unwrap(resolved);
			if (component) setRegisterComp(() => component);
		} catch {}
	};
	if (RegisterComp) return /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
		className: "blong-login p-component",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
			className: "blong-login__register-area",
			children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Button, {
				label: "Back to Login",
				icon: "pi pi-arrow-left",
				className: "p-button-text",
				onClick: () => setRegisterComp(null)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
			className: "blong-login__register-view",
			children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(RegisterComp, {})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
		className: "blong-login p-component",
		children: [
			registerPage && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
				className: "blong-login__register-area",
				children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Button, {
					label: registerLabel,
					className: "p-button-outlined",
					onClick: () => void handleRegister()
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
				className: "blong-login__top",
				children: [TitleComponent && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
					className: "blong-login__title-slot",
					children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(TitleComponent, {})
				}), (title || logoUrl || logoIcon) && /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
					className: "blong-login__brand",
					children: [logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("img", {
						src: logoUrl,
						alt: title ?? "logo",
						className: "blong-login__brand-img"
					}) : /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("i", { className: `blong-login__brand-icon ${logoIcon}` }), title && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, {
						className: "blong-login__brand-name",
						children: title
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
				className: "blong-login__card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("p", {
						className: "blong-login__card-heading",
						children: t("Login with password")
					}),
					displayError && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Message, {
						severity: "error",
						text: displayError,
						className: "blong-login__error"
					}),
					step === "credentials" && /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("form", {
						className: "blong-login__form",
						onSubmit: (e) => void handleCredentials(e),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("label", {
									htmlFor: "login-username",
									className: "blong-field__label",
									children: "Username"
								}), /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(InputText, {
									id: "login-username",
									name: "username",
									value: username,
									onChange: (e) => setUsername(e.target.value),
									className: "blong-login__input w-full",
									autoFocus: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
								className: "blong-field",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("label", {
										htmlFor: "login-password",
										className: "blong-field__label",
										children: ["Password", passwordHint && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Button, {
											type: "button",
											icon: "pi pi-question-circle",
											text: true,
											rounded: true,
											size: "small",
											"aria-label": t("What belongs in this field"),
											"aria-expanded": hintOpen,
											onClick: () => setHintOpen((open) => !open)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Password, {
										inputId: "login-password",
										name: "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										className: "blong-login__input w-full",
										inputClassName: "w-full",
										toggleMask: true,
										disabled: isLoading
									}),
									passwordHint && hintOpen && /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
										className: "blong-login__hint",
										children: [passwordHint.text && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("p", { children: passwordHint.text }), passwordHint.command && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("code", {
											className: "blong-login__hint-command",
											children: passwordHint.command
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Button, {
								type: "submit",
								label: "Login",
								loading: isLoading,
								className: "blong-login__submit",
								"data-testid": "login-submit"
							})
						]
					}),
					step === "otp" && /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("form", {
						className: "blong-login__form",
						onSubmit: (e) => void handleOtp(e),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("p", {
								className: "blong-login__hint",
								children: "Enter the one-time password sent to your device."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("label", {
									htmlFor: "login-otp",
									className: "blong-field__label",
									children: "One-Time Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(InputText, {
									id: "login-otp",
									value: otp,
									onChange: (e) => setOtp(e.target.value),
									autoFocus: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Button, {
								type: "submit",
								label: "Verify",
								loading: isLoading,
								className: "blong-login__submit"
							})
						]
					}),
					step === "newPassword" && /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("form", {
						className: "blong-login__form",
						onSubmit: (e) => void handleNewPassword(e),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("p", {
								className: "blong-login__hint",
								children: "Your password has expired. Please set a new password."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("label", {
									htmlFor: "login-new-pass",
									className: "blong-field__label",
									children: "New Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Password, {
									inputId: "login-new-pass",
									value: newPassword,
									onChange: (e) => setNewPassword(e.target.value),
									toggleMask: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("label", {
									htmlFor: "login-confirm-pass",
									className: "blong-field__label",
									children: "Confirm Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Password, {
									inputId: "login-confirm-pass",
									value: confirmPassword,
									onChange: (e) => setConfirmPassword(e.target.value),
									toggleMask: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Button, {
								type: "submit",
								label: "Set Password",
								loading: isLoading,
								className: "blong-login__submit"
							})
						]
					}),
					googleLogin?.onGoogle && /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)(import_jsx_runtime$7.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
						className: "blong-login__divider",
						children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("span", { children: "or" })
					}), /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(SocialLoginButton, {
						onClick: () => void googleLogin.onGoogle?.(),
						label: googleLogin.label
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
				className: "blong-login__bottom",
				children: OrgComponent ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(OrgComponent, {}) : orgTitle || orgLogoUrl || orgIcon ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
					className: "blong-login__org-brand",
					children: [orgLogoUrl ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("img", {
						src: orgLogoUrl,
						alt: orgTitle ?? "logo",
						className: "blong-login__org-img"
					}) : orgIcon ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("i", { className: `blong-login__org-icon ${orgIcon}` }) : null, orgTitle && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, {
						className: "blong-login__org-name",
						children: orgTitle
					})]
				}) : null
			})
		]
	});
}
var import_react$6, import_jsx_runtime$7;
function init_Login$1() {
	return (init_Login$1 = __esmMin((() => {
		init_shell();
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_BlongContext();
		init_SocialLoginButton$1();
		init_Text();
		init_useText();
		import_jsx_runtime$7 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/LoginPopup/LoginPopup.tsx
function LoginPopup() {
	const t = useTranslate();
	const prompt = useAppStore((s) => s.loginPrompt);
	const setLoginPrompt = useAppStore((s) => s.setLoginPrompt);
	const { handler } = useBlong();
	const [username, setUsername] = (0, import_react$5.useState)("");
	const [password, setPassword] = (0, import_react$5.useState)("");
	const [error, setError] = (0, import_react$5.useState)(void 0);
	const [loading, setLoading] = (0, import_react$5.useState)(false);
	if (!prompt) return null;
	const close = () => {
		setLoginPrompt(false);
		setError(void 0);
		setPassword("");
	};
	const onSubmit = async () => {
		setLoading(true);
		setError(void 0);
		try {
			const result = await handler.authLogin({
				username,
				password
			}, {});
			if (result.step === "success") close();
			else setError(result.error ?? "Login failed");
		} catch (err) {
			setError(err.message ?? "Login failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(Dialog, {
		visible: true,
		header: "Session expired — please log in",
		onHide: close,
		closable: true,
		modal: true,
		className: "blong-login-popup",
		style: { width: "380px" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
			className: "blong-login-popup__body",
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Message, {
					severity: "error",
					text: error,
					className: "blong-login-popup__error"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
					className: "blong-login-popup__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("label", {
						htmlFor: "blong-login-popup-username",
						children: t("Username")
					}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(InputText, {
						id: "blong-login-popup-username",
						name: "username",
						value: username,
						onChange: (e) => setUsername(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && onSubmit(),
						autoFocus: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
					className: "blong-login-popup__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("label", {
						htmlFor: "blong-login-popup-password",
						children: t("Password")
					}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Password, {
						id: "blong-login-popup-password",
						name: "password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && onSubmit(),
						feedback: false,
						toggleMask: true
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
			className: "blong-login-popup__footer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Button, {
				label: "Cancel",
				icon: "pi pi-times",
				onClick: close,
				outlined: true
			}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Button, {
				label: "Login",
				icon: "pi pi-sign-in",
				onClick: onSubmit,
				loading
			})]
		})]
	});
}
var import_react$5, import_jsx_runtime$6;
function init_LoginPopup$1() {
	return (init_LoginPopup$1 = __esmMin((() => {
		init_shell();
		import_react$5 = require_react();
		init_BlongContext();
		init_appStore();
		init_useText();
		import_jsx_runtime$6 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/OAuthCallback/OAuthCallback.tsx
function OAuthCallback({ onExchange, onSuccess, title, logoIcon = "pi pi-google" }) {
	const t = useTranslate();
	const [error, setError] = (0, import_react$4.useState)("");
	const [loading, setLoading] = (0, import_react$4.useState)(true);
	(0, import_react$4.useEffect)(() => {
		let cancelled = false;
		const run = async () => {
			const search = new URLSearchParams(window.location.search);
			const code = search.get("code") ?? "";
			const state = search.get("state") ?? void 0;
			const redirectUri = `${window.location.origin}${window.location.pathname}`;
			if (!code) {
				if (!cancelled) {
					setError("No authorization code was returned");
					setLoading(false);
				}
				return;
			}
			try {
				await onExchange({
					code,
					state,
					redirectUri
				});
				if (!cancelled) {
					const base = window.location.pathname.endsWith("/oauth/callback") ? window.location.pathname.slice(0, -15) || "/" : window.location.pathname;
					window.history.replaceState({}, "", base);
					onSuccess?.();
				}
			} catch (err) {
				if (!cancelled) {
					setError(String(err.message ?? err));
					setLoading(false);
				}
			}
		};
		run();
		return () => {
			cancelled = true;
		};
	}, [onExchange, onSuccess]);
	const backToLogin = () => {
		window.location.href = "/";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: "blong-oauth-callback p-component",
		children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
			className: "blong-oauth-callback__card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("i", { className: `blong-oauth-callback__icon ${logoIcon}` }),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("p", {
					className: "blong-oauth-callback__heading",
					children: "Signing you in with Google…"
				}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(ProgressSpinner, {
					className: "blong-oauth-callback__spinner",
					style: {
						width: "3rem",
						height: "3rem"
					}
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("p", {
						className: "blong-oauth-callback__heading",
						children: t("Sign in failed")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("p", {
						className: "blong-oauth-callback__error",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Button, {
						label: "Back to Login",
						icon: "pi pi-arrow-left",
						className: "p-button-outlined blong-oauth-callback__back",
						onClick: backToLogin,
						"data-testid": "oauth-back-login"
					})
				] }),
				title && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("p", {
					className: "blong-oauth-callback__brand",
					children: title
				})
			]
		})
	});
}
var import_react$4, import_jsx_runtime$5;
function init_OAuthCallback$1() {
	return (init_OAuthCallback$1 = __esmMin((() => {
		init_shell();
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useText();
		import_jsx_runtime$5 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/lib/testid.ts
var testid_default;
function init_testid() {
	return (init_testid = __esmMin((() => {
		testid_default = (id) => id && { "data-testid": id.replace(/[/.]/g, (match) => match === "." ? "-" : "_") };
	})))();
}
// ../../core/blong-browser/src/components/Loader/Loader.tsx
function Loader() {
	const { loading, message } = useLoader();
	if (!loading) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
		className: "blong-loader-overlay",
		role: "status",
		"aria-live": "polite",
		children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
			className: "blong-loader-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(ProgressSpinner, {
				style: {
					width: "50px",
					height: "50px"
				},
				strokeWidth: "4",
				animationDuration: ".8s"
			}), message && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
				className: "blong-loader-message",
				children: message
			})]
		})
	});
}
var import_jsx_runtime$4;
function init_Loader$1() {
	return (init_Loader$1 = __esmMin((() => {
		init_shell();
		init_useLoader();
		import_jsx_runtime$4 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/Portal/Portal.tsx
async function buildMenuModel(items, command, handler, t, feedback, allowed) {
	if (!items) return void 0;
	return (await Promise.all(items.map(async (item) => {
		const action = typeof item === "string" ? { method: item } : item;
		if ("items" in action) {
			if (!allowed(action.permission)) return void 0;
			const firstChild = action.items?.find((i) => typeof i === "string" || typeof i === "object" && i !== null && "method" in i);
			const firstMethod = typeof firstChild === "string" ? firstChild : firstChild?.method ?? "";
			const groupId = action.id ?? firstMethod.split(".")[0] ?? "";
			const children = await buildMenuModel(action.items, command, handler, t, feedback, allowed);
			if (!children?.length) return void 0;
			return {
				label: t(action.title),
				icon: action.icon,
				items: children,
				...groupId && { template: (item, options) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("a", {
					className: options.className,
					"data-testid": `portal-menu-${groupId}`,
					onClick: options.onClick,
					...feedback?.("menu", groupId, action.title),
					children: [item.icon && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", { className: options.iconClassName }), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
						className: options.labelClassName,
						children: item.label
					})]
				}) }
			};
		} else if ("method" in action) {
			const { title, permission, icon, component } = await handler[`component/${action.method}`](typeof action.params === "function" ? action.params({}) : action.params ?? {}, {});
			const menuId = (action.method ?? "").replace(/\./g, "-");
			if (!allowed(permission)) return void 0;
			return {
				label: t(title),
				icon,
				data: {
					action: action.method,
					params: action.params,
					title,
					permission,
					component
				},
				command,
				template: (item, options) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("a", {
					className: options.className,
					"data-testid": `portal-menu-${menuId}`,
					onClick: options.onClick,
					...feedback?.("menuItem", action.method ?? menuId, title),
					children: [item.icon && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", { className: options.iconClassName }), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
						className: options.labelClassName,
						children: item.label
					})]
				})
			};
		} else return {
			label: action.title,
			icon: action.icon
		};
	}))).filter((item) => item !== void 0);
}
function Portal({ logo, menubarEnd, className = "" }) {
	const { tabs, activeTabId, setActiveTab, closeTab, portalConfig } = usePortal();
	const { handler } = useBlong();
	const t = useTranslate();
	const openTab = useAppStore((s) => s.openTab);
	const permissions = useAppStore((s) => s.auth.permissions);
	const queryClient = useQueryClient();
	/**
	* The actions the session holds, in the form the gateway compares them.
	*
	* A capability lists the method the caller invokes, and realms spell it two
	* ways: `sport.athlete.find` and `accessUserFind` are the same action to
	* `access.authorization.list` (it strips dots and case), so the menu compares
	* the same way — or a page granted through the camelCase spelling would be
	* filtered out while the server lets its calls through.
	*/
	const granted = import_react$3.useMemo(() => {
		if (typeof permissions === "boolean") return void 0;
		return new Set(Object.entries(permissions).filter(([, value]) => value === true).map(([name]) => normalizeMethodId(name)));
	}, [permissions]);
	/** The action a page needs, as the session holds it (`true` for every page in a test). */
	const allowed = (0, import_react$3.useCallback)((permission) => {
		if (!permission) return true;
		if (!granted) return permissions === true;
		return granted.has(normalizeMethodId(permission));
	}, [granted, permissions]);
	const command = (0, import_react$3.useCallback)(({ item: { data: { component, title, action, params } } }) => {
		(async () => {
			try {
				const opened = await component();
				invalidateDropdowns();
				const namespace = action.split(".").slice(0, -1).join(".");
				queryClient.invalidateQueries({ predicate: (query) => namespace === "" || typeof query.queryKey[0] === "string" && query.queryKey[0].startsWith(`${namespace}.`) });
				openTab({
					id: `${action}?${JSON.stringify(params)}`,
					actionName: action,
					params,
					title,
					component: opened
				});
			} catch {}
		})();
	}, [openTab, queryClient]);
	const activeIndex = tabs.findIndex((t) => t.id === activeTabId);
	const [menu, setMenu] = import_react$3.useState(void 0);
	const feedbackActive = useFeedbackActive();
	const feedbackTarget = (0, import_react$3.useCallback)((part, id, label) => feedbackActive ? feedbackAttributes(portalFeedbackId(part, id), part, label) : void 0, [feedbackActive]);
	import_react$3.useEffect(() => {
		buildMenuModel(portalConfig?.menu, command, handler, t, feedbackTarget, allowed).then(setMenu);
	}, [
		portalConfig?.menu,
		command,
		handler,
		t,
		feedbackTarget,
		allowed
	]);
	const brand = brandOf(portalConfig);
	const start = logo ?? (portalConfig?.title || brand ? /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("span", {
		className: "blong-portal-brand",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(BrandMark, { brand }), portalConfig?.title && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Text, {
			className: "blong-portal-brand-name",
			children: portalConfig.title
		})]
	}) : void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
		className: `blong-portal ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Loader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Hint, {}),
			/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Menubar, {
				start,
				end: menubarEnd,
				className: "blong-portal-menubar",
				...menu && { model: menu }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
				className: "blong-portal-body",
				children: tabs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(PortalWelcome, {
					brand,
					title: portalConfig?.title
				}) : /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(TabView, {
					activeIndex: activeIndex >= 0 ? activeIndex : 0,
					onTabChange: (e) => setActiveTab(tabs[e.index]?.id ?? null),
					scrollable: true,
					className: "blong-portal-tabs",
					renderActiveOnly: false,
					children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(TabPanel, {
						__TYPE: "TabPanel",
						header: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("span", {
							className: "blong-tab-header",
							...testid_default(`portal.tab${tab.id}`),
							...feedbackActive ? feedbackAttributes(portalFeedbackId("tab", tab.id), "tab", tab.title) : {},
							children: [
								tab.dirty && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
									className: "blong-tab-dirty",
									children: "● "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Text, { children: tab.title }),
								/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Button, {
									icon: "pi pi-times",
									className: "p-button-text p-button-sm blong-tab-close p-0 vertical-align-baseline",
									onClick: (e) => {
										e.stopPropagation();
										closeTab(tab.id);
									},
									...testid_default(`portal.tab.close${tab.id}`)
								})
							]
						}),
						children: tab.component ? /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(TabErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(import_react$3.Suspense, {
							fallback: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
								style: { padding: 32 },
								children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(ProgressSpinner, {})
							}),
							children: import_react$3.createElement(tab.component, {
								...tab.params,
								tabId: tab.id
							})
						}) }) : /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
							className: "blong-portal-loading",
							children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(ProgressSpinner, {})
						})
					}, tab.id))
				})
			})
		]
	});
}
/**
* The brand mark at toolbar size.
*
* A logo image is capped by CSS (`--blong-portal-brand-height`) rather than by
* an attribute: the menubar's height is its content's, so a mark that names a
* pixel height grows the bar on a 200px file and shrinks it on a 16px one. The
* fallback is a glyph, which costs nothing when a suite names neither.
*/
function BrandMark({ brand }) {
	const url = brand?.markUrl ?? brand?.logoUrl;
	if (url) return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("img", {
		className: "blong-portal-brand-logo",
		src: url,
		alt: "",
		"aria-hidden": "true",
		style: brand?.markHeight ? { height: brand.markHeight } : void 0
	});
	if (brand?.logoIcon) return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("i", { className: `blong-portal-brand-icon ${brand.logoIcon}` });
	return null;
}
/**
* What the portal shows while no page is open.
*
* The whitespace below the toolbar is the only room a portal has for the thing
* it belongs to, so the brand is drawn there at full size: the logo, the portal
* name and the organisation, centred. It renders only when the suite configured
* a brand — a portal without one keeps the empty body it always had, which is
* what leaves every existing screenshot unchanged.
*/
function PortalWelcome({ brand, title }) {
	if (!brand && !title) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
		className: "blong-portal-welcome",
		children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
			className: "blong-portal-welcome__brand",
			children: [
				brand?.logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("img", {
					className: "blong-portal-welcome__logo",
					src: brand.logoUrl,
					alt: "",
					"aria-hidden": "true",
					style: brand.logoHeight ? {
						height: brand.logoHeight,
						maxHeight: "none"
					} : void 0
				}) : brand?.logoIcon ? /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("i", { className: `blong-portal-welcome__icon ${brand.logoIcon}` }) : null,
				title && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Text, {
					as: "h1",
					className: "blong-portal-welcome__title",
					children: title
				}),
				(brand?.orgLogoUrl || brand?.orgIcon || brand?.orgTitle) && /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
					className: "blong-portal-welcome__org",
					children: [brand.orgLogoUrl ? /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("img", {
						className: "blong-portal-welcome__org-logo",
						src: brand.orgLogoUrl,
						alt: "",
						"aria-hidden": "true"
					}) : brand.orgIcon ? /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("i", { className: `blong-portal-welcome__org-icon ${brand.orgIcon}` }) : null, brand.orgTitle && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Text, {
						className: "blong-portal-welcome__org-name",
						children: brand.orgTitle
					})]
				})
			]
		})
	});
}
var import_react$3, import_jsx_runtime$3, TabErrorBoundary, normalizeMethodId, brandOf;
function init_Portal$1() {
	return (init_Portal$1 = __esmMin((() => {
		init_shell();
		init_QueryClientProvider();
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_BlongContext();
		init_ids();
		init_useFeedbackTarget();
		init_usePortal();
		init_useText();
		init_testid();
		init_dropdownRegistry();
		init_appStore();
		init_Hint();
		init_Loader$1();
		init_Text();
		import_jsx_runtime$3 = require_jsx_runtime();
		TabErrorBoundary = class extends import_react$3.Component {
			state = { error: null };
			static getDerivedStateFromError(error) {
				return { error };
			}
			render() {
				if (this.state.error) return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
					className: "blong-tab-error",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("i", { className: "pi pi-exclamation-triangle blong-tab-error__icon" }), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("p", {
						className: "blong-tab-error__message",
						children: this.state.error.message
					})]
				});
				return this.props.children;
			}
		};
		normalizeMethodId = (name) => name.toLowerCase().replaceAll(".", "");
		brandOf = (portalConfig) => portalConfig?.brand;
	})))();
}
// ../../core/blong-browser/src/components/Theme/glassReflection.ts
/** Build the per-panel geometry needed to place edges. */
function collectPanels(scope) {
	const rect = scope.getBoundingClientRect();
	const left = rect.left;
	const top = rect.top;
	const result = [];
	for (const element of Array.from(scope.querySelectorAll(GLASS_PANEL_SELECTOR))) {
		const b = element.getBoundingClientRect();
		const w = b.width;
		const h = b.height;
		const span = w * AXIS_X + h * AXIS_Y;
		if (!Number.isFinite(span) || span <= 0) continue;
		const x = b.left - left;
		const y = b.top - top;
		result.push({
			element,
			x,
			y,
			w,
			h,
			span,
			s: x * AXIS_X + y * AXIS_Y,
			isHeader: element.classList.contains("p-toolbar") && w >= rect.width * HEADER_TOOLBAR_MIN_WIDTH,
			isInspector: element.matches(INSPECTOR_SELECTOR)
		});
	}
	return result;
}
/** Group flow panels (cards + inner toolbars) into columns by centre x. */
function clusterColumns(panels) {
	const sorted = [...panels].sort((a, b) => a.x + a.w / 2 - (b.x + b.w / 2));
	const clusters = [];
	let lastCentre = Number.NEGATIVE_INFINITY;
	for (const p of sorted) {
		const centre = p.x + p.w / 2;
		if (clusters.length === 0 || centre - lastCentre > COLUMN_GAP) clusters.push([p]);
		else clusters[clusters.length - 1].push(p);
		lastCentre = centre;
	}
	return clusters;
}
/** Anchor of a lane = its top-most card (a full-width header skews the span). */
function laneAnchor(lane) {
	const candidates = lane.filter((p) => !p.isHeader);
	const pool = candidates.length > 0 ? candidates : lane;
	let anchor = pool[0];
	for (const p of pool) if (p.y < anchor.y) anchor = p;
	return anchor;
}
/** Set every member of a lane on one straight edge; far-side members fall back. */
function placeLane(lane) {
	const anchor = laneAnchor(lane);
	const edgeC = anchor.s + ANCHOR_FRACTION * anchor.span;
	let minS = lane[0].s;
	let maxS = lane[0].s;
	for (const p of lane) {
		if (p.s < minS) minS = p.s;
		if (p.s > maxS) maxS = p.s;
	}
	const spanS = maxS - minS || 1;
	for (const p of lane) {
		let fraction = (edgeC - p.s) / p.span;
		if (fraction < MIN_FRACTION) {
			const ratio = (p.s - minS) / spanS;
			fraction = FALLOFF_TOP - ratio * .30000000000000004;
		} else if (fraction > MAX_FRACTION) fraction = MAX_FRACTION;
		p.element.style.setProperty("--glare-shift", `${(fraction * 100).toFixed(2)}%`);
	}
}
/**
* Recompute `--glare-shift` per lane so each lane's silver→black edges lie on
* ONE straight line, pin the shared `--glare-angle`, and give the Form
* Inspector its independent centered gradient. Runs on every size change, so
* the lanes follow the responsive single / two column layout automatically.
*/
function updateGlassReflections(scope) {
	if (!scope || typeof scope.getBoundingClientRect !== "function") return;
	scope.style.setProperty("--glare-angle", `103deg`);
	const all = collectPanels(scope);
	if (all.length === 0) return;
	const header = all.find((p) => p.isHeader);
	const columns = clusterColumns(all.filter((p) => !p.isInspector && !p.isHeader));
	if (columns.length === 0) {
		if (header) placeLane([header]);
	} else {
		const leftLane = columns[0];
		if (header) leftLane.push(header);
		placeLane(leftLane);
		for (const column of columns.slice(1)) placeLane(column);
	}
	for (const p of all) {
		if (!p.isInspector) continue;
		p.element.style.setProperty("--glare-shift", `${(INSPECTOR_FRACTION * 100).toFixed(2)}%`);
	}
}
var GLASS_PANEL_SELECTOR, HEADER_TOOLBAR_MIN_WIDTH, INSPECTOR_SELECTOR, ANCHOR_FRACTION, MIN_FRACTION, MAX_FRACTION, FALLOFF_TOP, INSPECTOR_FRACTION, COLUMN_GAP, RAD, AXIS_X, AXIS_Y;
function init_glassReflection() {
	return (init_glassReflection = __esmMin((() => {
		GLASS_PANEL_SELECTOR = ".p-card, .p-toolbar, .blong-property-editor.blong-inspector";
		HEADER_TOOLBAR_MIN_WIDTH = .6;
		INSPECTOR_SELECTOR = ".blong-property-editor.blong-inspector";
		ANCHOR_FRACTION = .5;
		MIN_FRACTION = .06;
		MAX_FRACTION = .94;
		FALLOFF_TOP = .4;
		INSPECTOR_FRACTION = .5;
		COLUMN_GAP = 120;
		RAD = 103 * Math.PI / 180;
		AXIS_X = Math.sin(RAD);
		AXIS_Y = -Math.cos(RAD);
	})))();
}
// ../../core/blong-browser/src/components/Theme/themeRegistry.ts
/** Look up a theme option by its stable id. */
function themeOptionById(id) {
	return OPTION_BY_ID.get(id);
}
/** Find the option that owns a given PrimeReact theme folder. */
function themeOptionByFolder(folder) {
	return THEME_OPTIONS.find((option) => option.light === folder || option.dark === folder);
}
/** The palette a PrimeReact theme folder represents, or `undefined` if unknown. */
function paletteOfFolder(folder) {
	const option = themeOptionByFolder(folder);
	if (!option) return void 0;
	return option.light === folder ? "light" : "dark";
}
/** Resolve the PrimeReact folder to load for an option at a given palette. */
function resolveThemeFolder(option, palette) {
	return (palette === "dark" ? option.dark : option.light) ?? option.light ?? option.dark ?? "";
}
/**
* Resolve a `IThemeConfig.name` string — which may be a theme-option id
* (`lara-blue`, `glass`) or a PrimeReact folder name (`lara-dark-blue`) — to an
* option plus its palette.
*/
function themeOptionByName(name) {
	const byId = themeOptionById(name);
	if (byId) {
		if (byId.variant) return {
			option: byId,
			palette: "dark"
		};
		return {
			option: byId,
			palette: byId.dark ? "dark" : "light"
		};
	}
	const byFolder = themeOptionByFolder(name);
	if (byFolder) return {
		option: byFolder,
		palette: paletteOfFolder(name) ?? "light"
	};
}
/** Load the CSS text for a PrimeReact theme folder (empty string if unknown). */
async function loadThemeCss(folder) {
	const loader = THEME_LOADERS[folder];
	if (!loader) return "";
	return (await loader()).default;
}
var THEME_GROUPS, THEME_OPTIONS, FALLBACK_THEME_OPTION, OPTION_BY_ID, THEME_LOADERS;
function init_themeRegistry() {
	return (init_themeRegistry = __esmMin((() => {
		init_preload_helper();
		THEME_GROUPS = [
			{
				label: "Blong",
				items: [{
					id: "glass",
					label: "Glass",
					variant: "glass"
				}, {
					id: "wood",
					label: "Wood",
					variant: "wood"
				}]
			},
			{
				label: "Lara",
				items: [
					{
						id: "lara-amber",
						label: "Lara Amber",
						light: "lara-light-amber",
						dark: "lara-dark-amber"
					},
					{
						id: "lara-blue",
						label: "Lara Blue",
						light: "lara-light-blue",
						dark: "lara-dark-blue"
					},
					{
						id: "lara-cyan",
						label: "Lara Cyan",
						light: "lara-light-cyan",
						dark: "lara-dark-cyan"
					},
					{
						id: "lara-green",
						label: "Lara Green",
						light: "lara-light-green",
						dark: "lara-dark-green"
					},
					{
						id: "lara-indigo",
						label: "Lara Indigo",
						light: "lara-light-indigo",
						dark: "lara-dark-indigo"
					},
					{
						id: "lara-pink",
						label: "Lara Pink",
						light: "lara-light-pink",
						dark: "lara-dark-pink"
					},
					{
						id: "lara-purple",
						label: "Lara Purple",
						light: "lara-light-purple",
						dark: "lara-dark-purple"
					},
					{
						id: "lara-teal",
						label: "Lara Teal",
						light: "lara-light-teal",
						dark: "lara-dark-teal"
					}
				]
			},
			{
				label: "Bootstrap 4",
				items: [{
					id: "bootstrap4-blue",
					label: "Bootstrap 4 Blue",
					light: "bootstrap4-light-blue",
					dark: "bootstrap4-dark-blue"
				}, {
					id: "bootstrap4-purple",
					label: "Bootstrap 4 Purple",
					light: "bootstrap4-light-purple",
					dark: "bootstrap4-dark-purple"
				}]
			},
			{
				label: "Material",
				items: [{
					id: "md-indigo",
					label: "Material Indigo",
					light: "md-light-indigo",
					dark: "md-dark-indigo"
				}, {
					id: "md-deeppurple",
					label: "Material Deep Purple",
					light: "md-light-deeppurple",
					dark: "md-dark-deeppurple"
				}]
			},
			{
				label: "Material Compact",
				items: [{
					id: "mdc-indigo",
					label: "Material Compact Indigo",
					light: "mdc-light-indigo",
					dark: "mdc-dark-indigo"
				}, {
					id: "mdc-deeppurple",
					label: "Material Compact Deep Purple",
					light: "mdc-light-deeppurple",
					dark: "mdc-dark-deeppurple"
				}]
			},
			{
				label: "Soho",
				items: [{
					id: "soho",
					label: "Soho",
					light: "soho-light",
					dark: "soho-dark"
				}]
			},
			{
				label: "Viva",
				items: [{
					id: "viva",
					label: "Viva",
					light: "viva-light",
					dark: "viva-dark"
				}]
			},
			{
				label: "Arya",
				items: [
					{
						id: "arya-blue",
						label: "Arya Blue",
						dark: "arya-blue"
					},
					{
						id: "arya-green",
						label: "Arya Green",
						dark: "arya-green"
					},
					{
						id: "arya-orange",
						label: "Arya Orange",
						dark: "arya-orange"
					},
					{
						id: "arya-purple",
						label: "Arya Purple",
						dark: "arya-purple"
					}
				]
			},
			{
				label: "Luna",
				items: [
					{
						id: "luna-amber",
						label: "Luna Amber",
						dark: "luna-amber"
					},
					{
						id: "luna-blue",
						label: "Luna Blue",
						dark: "luna-blue"
					},
					{
						id: "luna-green",
						label: "Luna Green",
						dark: "luna-green"
					},
					{
						id: "luna-pink",
						label: "Luna Pink",
						dark: "luna-pink"
					}
				]
			},
			{
				label: "Saga",
				items: [
					{
						id: "saga-blue",
						label: "Saga Blue",
						light: "saga-blue"
					},
					{
						id: "saga-green",
						label: "Saga Green",
						light: "saga-green"
					},
					{
						id: "saga-orange",
						label: "Saga Orange",
						light: "saga-orange"
					},
					{
						id: "saga-purple",
						label: "Saga Purple",
						light: "saga-purple"
					}
				]
			},
			{
				label: "Vela",
				items: [
					{
						id: "vela-blue",
						label: "Vela Blue",
						dark: "vela-blue"
					},
					{
						id: "vela-green",
						label: "Vela Green",
						dark: "vela-green"
					},
					{
						id: "vela-orange",
						label: "Vela Orange",
						dark: "vela-orange"
					},
					{
						id: "vela-purple",
						label: "Vela Purple",
						dark: "vela-purple"
					}
				]
			},
			{
				label: "Other",
				items: [
					{
						id: "fluent-light",
						label: "Fluent Light",
						light: "fluent-light"
					},
					{
						id: "mira",
						label: "Mira",
						light: "mira"
					},
					{
						id: "nano",
						label: "Nano",
						light: "nano"
					},
					{
						id: "nova",
						label: "Nova",
						light: "nova"
					},
					{
						id: "nova-accent",
						label: "Nova Accent",
						light: "nova-accent"
					},
					{
						id: "nova-alt",
						label: "Nova Alt",
						light: "nova-alt"
					},
					{
						id: "rhea",
						label: "Rhea",
						light: "rhea"
					},
					{
						id: "tailwind-light",
						label: "Tailwind Light",
						light: "tailwind-light"
					}
				]
			}
		];
		THEME_OPTIONS = THEME_GROUPS.flatMap((group) => group.items);
		FALLBACK_THEME_OPTION = THEME_OPTIONS.find((option) => option.id === "vela-blue") ?? THEME_OPTIONS[0];
		OPTION_BY_ID = new Map(THEME_OPTIONS.map((option) => [option.id, option]));
		THEME_LOADERS = {
			"arya-blue": () => __vitePreload(() => import("./theme-YvH0oVe6.js"), __vite__mapDeps([9,1]), import.meta.url),
			"arya-green": () => __vitePreload(() => import("./theme-tjZO56aV.js"), __vite__mapDeps([10,1]), import.meta.url),
			"arya-orange": () => __vitePreload(() => import("./theme-BWIgixGP.js"), __vite__mapDeps([11,1]), import.meta.url),
			"arya-purple": () => __vitePreload(() => import("./theme-C1Pj7X5N.js"), __vite__mapDeps([12,1]), import.meta.url),
			"bootstrap4-dark-blue": () => __vitePreload(() => import("./theme-CuCYYfMb.js"), __vite__mapDeps([13,1]), import.meta.url),
			"bootstrap4-dark-purple": () => __vitePreload(() => import("./theme-NRweFBpp.js"), __vite__mapDeps([14,1]), import.meta.url),
			"bootstrap4-light-blue": () => __vitePreload(() => import("./theme-BiunraH2.js"), __vite__mapDeps([15,1]), import.meta.url),
			"bootstrap4-light-purple": () => __vitePreload(() => import("./theme-CMXOEcam.js"), __vite__mapDeps([16,1]), import.meta.url),
			"fluent-light": () => __vitePreload(() => import("./theme-CU8Ttb10.js"), __vite__mapDeps([17,1]), import.meta.url),
			"lara-dark-amber": () => __vitePreload(() => import("./theme-C1H14RKo.js"), __vite__mapDeps([18,1]), import.meta.url),
			"lara-dark-blue": () => __vitePreload(() => import("./theme-otAx51bl.js"), __vite__mapDeps([19,1]), import.meta.url),
			"lara-dark-cyan": () => __vitePreload(() => import("./theme-DTwUQue8.js"), __vite__mapDeps([20,1]), import.meta.url),
			"lara-dark-green": () => __vitePreload(() => import("./theme-jzyfq3XW.js"), __vite__mapDeps([21,1]), import.meta.url),
			"lara-dark-indigo": () => __vitePreload(() => import("./theme-AP_7ewld.js"), __vite__mapDeps([22,1]), import.meta.url),
			"lara-dark-pink": () => __vitePreload(() => import("./theme-BenX2pBL.js"), __vite__mapDeps([23,1]), import.meta.url),
			"lara-dark-purple": () => __vitePreload(() => import("./theme-DtdTeGLV.js"), __vite__mapDeps([24,1]), import.meta.url),
			"lara-dark-teal": () => __vitePreload(() => import("./theme-DotN15k5.js"), __vite__mapDeps([25,1]), import.meta.url),
			"lara-light-amber": () => __vitePreload(() => import("./theme-ffAXP-Xg.js"), __vite__mapDeps([26,1]), import.meta.url),
			"lara-light-blue": () => __vitePreload(() => import("./theme-B96Ca-Fg.js"), __vite__mapDeps([27,1]), import.meta.url),
			"lara-light-cyan": () => __vitePreload(() => import("./theme-CP6yVBPd.js"), __vite__mapDeps([28,1]), import.meta.url),
			"lara-light-green": () => __vitePreload(() => import("./theme-eu1ZPeyr.js"), __vite__mapDeps([29,1]), import.meta.url),
			"lara-light-indigo": () => __vitePreload(() => import("./theme-FwXiAD-M.js"), __vite__mapDeps([30,1]), import.meta.url),
			"lara-light-pink": () => __vitePreload(() => import("./theme-CDL_FlB2.js"), __vite__mapDeps([31,1]), import.meta.url),
			"lara-light-purple": () => __vitePreload(() => import("./theme-4QXaFIbW.js"), __vite__mapDeps([32,1]), import.meta.url),
			"lara-light-teal": () => __vitePreload(() => import("./theme-DGVNBSqj.js"), __vite__mapDeps([33,1]), import.meta.url),
			"luna-amber": () => __vitePreload(() => import("./theme-CPOVw0Cp.js"), __vite__mapDeps([34,1]), import.meta.url),
			"luna-blue": () => __vitePreload(() => import("./theme-CSazmsPf.js"), __vite__mapDeps([35,1]), import.meta.url),
			"luna-green": () => __vitePreload(() => import("./theme-DAqpwBZA.js"), __vite__mapDeps([36,1]), import.meta.url),
			"luna-pink": () => __vitePreload(() => import("./theme-0O54d0Ce.js"), __vite__mapDeps([37,1]), import.meta.url),
			"md-dark-deeppurple": () => __vitePreload(() => import("./theme-BOyigkK7.js"), __vite__mapDeps([38,1]), import.meta.url),
			"md-dark-indigo": () => __vitePreload(() => import("./theme-8-dCI9Rz.js"), __vite__mapDeps([39,1]), import.meta.url),
			"md-light-deeppurple": () => __vitePreload(() => import("./theme-Cj4tyJ5z.js"), __vite__mapDeps([40,1]), import.meta.url),
			"md-light-indigo": () => __vitePreload(() => import("./theme-C33k5WDE.js"), __vite__mapDeps([41,1]), import.meta.url),
			"mdc-dark-deeppurple": () => __vitePreload(() => import("./theme-Ou2SEDO_.js"), __vite__mapDeps([42,1]), import.meta.url),
			"mdc-dark-indigo": () => __vitePreload(() => import("./theme-yT-CdcFP.js"), __vite__mapDeps([43,1]), import.meta.url),
			"mdc-light-deeppurple": () => __vitePreload(() => import("./theme-DN9IgmbI.js"), __vite__mapDeps([44,1]), import.meta.url),
			"mdc-light-indigo": () => __vitePreload(() => import("./theme-BaE9qrVP.js"), __vite__mapDeps([45,1]), import.meta.url),
			"mira": () => __vitePreload(() => import("./theme-CvooTyMB.js"), __vite__mapDeps([46,1]), import.meta.url),
			"nano": () => __vitePreload(() => import("./theme--J1OfTUr.js"), __vite__mapDeps([47,1]), import.meta.url),
			"nova": () => __vitePreload(() => import("./theme-CxOpTIAT.js"), __vite__mapDeps([48,1]), import.meta.url),
			"nova-accent": () => __vitePreload(() => import("./theme-D3UgEXmV.js"), __vite__mapDeps([49,1]), import.meta.url),
			"nova-alt": () => __vitePreload(() => import("./theme-sAQ7hl6j.js"), __vite__mapDeps([50,1]), import.meta.url),
			"rhea": () => __vitePreload(() => import("./theme-B0uCbrxV.js"), __vite__mapDeps([51,1]), import.meta.url),
			"saga-blue": () => __vitePreload(() => import("./theme-x_3z5BSK.js"), __vite__mapDeps([52,1]), import.meta.url),
			"saga-green": () => __vitePreload(() => import("./theme-B92sC59o.js"), __vite__mapDeps([53,1]), import.meta.url),
			"saga-orange": () => __vitePreload(() => import("./theme-CBYkjqtN.js"), __vite__mapDeps([54,1]), import.meta.url),
			"saga-purple": () => __vitePreload(() => import("./theme-DBstTGmL.js"), __vite__mapDeps([55,1]), import.meta.url),
			"soho-dark": () => __vitePreload(() => import("./theme-DTjsiPb1.js"), __vite__mapDeps([56,1]), import.meta.url),
			"soho-light": () => __vitePreload(() => import("./theme-CB3vUm4o.js"), __vite__mapDeps([57,1]), import.meta.url),
			"tailwind-light": () => __vitePreload(() => import("./theme-DhD5vE8s.js"), __vite__mapDeps([58,1]), import.meta.url),
			"vela-blue": () => __vitePreload(() => import("./theme-BqiV68Fl.js"), __vite__mapDeps([59,1]), import.meta.url),
			"vela-green": () => __vitePreload(() => import("./theme-bHm-qrS6.js"), __vite__mapDeps([60,1]), import.meta.url),
			"vela-orange": () => __vitePreload(() => import("./theme-BnCcFUAr.js"), __vite__mapDeps([61,1]), import.meta.url),
			"vela-purple": () => __vitePreload(() => import("./theme-BwRGnSeN.js"), __vite__mapDeps([62,1]), import.meta.url),
			"viva-dark": () => __vitePreload(() => import("./theme-BcqUIucb.js"), __vite__mapDeps([63,1]), import.meta.url),
			"viva-light": () => __vitePreload(() => import("./theme-3nDUSV9H.js"), __vite__mapDeps([64,1]), import.meta.url)
		};
	})))();
}
// ../../core/blong-browser/src/components/Theme/Theme.tsx
/**
* Access the effective theme and the switcher setters from any descendant of
* `<Theme>` (e.g. the portal menubar's theme switcher).
*/
function useTheme() {
	const context = (0, import_react$2.use)(ThemeContext);
	if (!context) throw new Error("useTheme must be used within <Theme>");
	return context;
}
/**
* The palette in force, for a component that may be rendered outside `<Theme>`.
*
* `useTheme` throws where there is no provider, which is right for a component that
* *needs* the theme: without one it is being used wrongly, and a crash names the
* mistake. A viewer is not such a component — it draws what it is handed, and which
* colours it draws in is an appearance rather than a requirement — so it reads the
* palette when one is in force and gets `undefined` when none is, leaving the
* meaning of "no theme" to the caller.
*/
function useThemePalette() {
	return (0, import_react$2.use)(ThemeContext)?.palette;
}
function Theme({ theme, children }) {
	const appRef = (0, import_react$2.useRef)(null);
	const language = useAppStore((s) => s.language);
	(0, import_react$2.useEffect)(() => {
		if (theme.languages) for (const [lang, options] of Object.entries(theme.languages)) addLocale(lang, options);
	}, [theme.languages]);
	(0, import_react$2.useEffect)(() => {
		locale(language && language !== "en" ? language : "en");
	}, [language]);
	const palette = theme.palette ?? "dark";
	const type = theme.type ?? "compact";
	const selection = useAppStore((s) => s.theme);
	const setTheme = useAppStore((s) => s.setTheme);
	const direction = selection.direction ?? theme.direction;
	const defaultFolder = PRIMEREACT_PALETTE_THEMES[type][palette];
	const named = theme.name ? themeOptionByName(theme.name) : void 0;
	const baseFolder = named && !named.option.variant ? resolveThemeFolder(named.option, named.palette) : defaultFolder;
	const basePalette = named?.palette ?? paletteOfFolder(defaultFolder) ?? palette;
	const configOption = named?.option ?? (theme.variant && theme.variant !== "standard" ? themeOptionById(theme.variant) : void 0) ?? themeOptionByFolder(baseFolder) ?? FALLBACK_THEME_OPTION;
	const option = (selection.themeId ? themeOptionById(selection.themeId) : void 0) ?? configOption;
	const isBlongVariant = option.variant !== void 0;
	const paletteToggle = Boolean(option.light && option.dark);
	const preferredPalette = selection.palette ?? basePalette;
	const activePalette = isBlongVariant ? basePalette : option.light && option.dark ? preferredPalette : option.dark ? "dark" : "light";
	const variant = option.variant ?? "standard";
	const folder = isBlongVariant ? baseFolder : resolveThemeFolder(option, activePalette);
	const selectTheme = (0, import_react$2.useCallback)((themeId) => {
		const next = themeOptionById(themeId);
		if (!next) return;
		if (next.variant) {
			setTheme({ themeId });
			return;
		}
		const nextPalette = next.light && next.dark ? activePalette : next.dark ? "dark" : "light";
		setTheme({
			themeId,
			palette: nextPalette
		});
	}, [setTheme, activePalette]);
	const selectPalette = (0, import_react$2.useCallback)((nextPalette) => setTheme({
		themeId: option.id,
		palette: nextPalette
	}), [setTheme, option.id]);
	const rootMarker = variant === "standard" ? null : `blong-theme-${variant}`;
	(0, import_react$2.useEffect)(() => {
		if (!rootMarker) return void 0;
		const root = document.documentElement;
		root.classList.add(rootMarker);
		return () => root.classList.remove(rootMarker);
	}, [rootMarker]);
	const glassActive = variant === "glass";
	(0, import_react$2.useEffect)(() => {
		if (!glassActive) return void 0;
		const node = appRef.current;
		if (!node) return void 0;
		updateGlassReflections(node);
		const refresh = () => updateGlassReflections(node);
		const interval = window.setInterval(refresh, 250);
		window.addEventListener("resize", refresh);
		window.addEventListener("load", refresh);
		return () => {
			window.clearInterval(interval);
			window.removeEventListener("resize", refresh);
			window.removeEventListener("load", refresh);
		};
	}, [glassActive]);
	(0, import_react$2.useEffect)(() => {
		const fontSize = theme.fontSize ?? PALETTE_FONT_SIZES[type];
		document.documentElement.dir = direction ?? "ltr";
		document.documentElement.lang = direction === "rtl" ? "ar" : "en";
		document.documentElement.style.fontSize = `${fontSize}px`;
		if (theme.primary) document.documentElement.style.setProperty("--p-primary-color", theme.primary);
	}, [
		direction,
		theme.fontSize,
		theme.primary,
		type
	]);
	(0, import_react$2.useEffect)(() => {
		let cancelled = false;
		loadThemeCss(folder).then((css) => {
			if (cancelled || !css || typeof document === "undefined") return;
			let element = document.getElementById("blong-prime-theme");
			if (!element) {
				element = document.createElement("style");
				element.id = "blong-prime-theme";
				document.head.appendChild(element);
			}
			element.textContent = css;
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [folder]);
	const contextValue = {
		config: {
			...theme,
			palette: activePalette,
			variant,
			direction
		},
		optionId: option.id,
		option,
		palette: activePalette,
		paletteToggle,
		switcher: theme.switcher ?? true,
		selectTheme,
		selectPalette
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(ThemeContext, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
			ref: appRef,
			className: [
				"blong-app",
				`blong-app-${activePalette}`,
				`blong-app-${type}`,
				variant !== "standard" ? VARIANT_CSS_CLASS[variant] : "",
				direction === "rtl" ? "blong-app-rtl" : ""
			].filter(Boolean).join(" "),
			dir: direction ?? "ltr",
			children
		})
	});
}
var import_react$2, import_jsx_runtime$2, VARIANT_CSS_CLASS, PRIMEREACT_PALETTE_THEMES, PALETTE_FONT_SIZES, ThemeContext;
function init_Theme() {
	return (init_Theme = __esmMin((() => {
		init_shell();
		init_glassReflection();
		init_themeRegistry();
		import_react$2 = require_react();
		init_appStore();
		import_jsx_runtime$2 = require_jsx_runtime();
		VARIANT_CSS_CLASS = {
			glass: "blong-app-glass",
			wood: "blong-app-wood"
		};
		PRIMEREACT_PALETTE_THEMES = {
			big: {
				light: "lara-light-blue",
				dark: "lara-dark-blue"
			},
			compact: {
				light: "saga-blue",
				dark: "vela-blue"
			}
		};
		PALETTE_FONT_SIZES = {
			big: 16,
			compact: 14
		};
		ThemeContext = (0, import_react$2.createContext)(null);
	})))();
}
// ../../core/blong-browser/src/components/ThemeSwitcher/ThemeSwitcher.tsx
/**
* ThemeSwitcher — the theme selector shown in the portal menubar, to the left
* of the language switcher.
*
* A dropdown picks the theme family (Light/Dark variants of a family share one
* entry; Glass/Wood are standalone). When the selected theme provides both a
* light and a dark variant, a single borderless sun/moon icon button appears
* next to the dropdown to flip between them. The icon shows the mode the button
* switches **to**: a moon while light mode is active, a sun while dark mode is
* active.
*
* The choice is written to `appStore.setTheme` (persisted to localStorage) and
* applied by the `<Theme>` provider. Render it inside `<Theme>` so `useTheme()`
* has the effective theme.
*
* Renders nothing when `IThemeConfig.switcher` is `false`.
*/
function ThemeSwitcher({ className = "" }) {
	const { optionId, palette, paletteToggle, switcher, selectTheme, selectPalette } = useTheme();
	const t = useTranslate();
	const toLightLabel = useText("Switch to light mode");
	const toDarkLabel = useText("Switch to dark mode");
	if (!switcher) return null;
	const isDark = palette === "dark";
	const nextPalette = isDark ? "light" : "dark";
	const modeLabel = isDark ? toLightLabel : toDarkLabel;
	const modeIcon = isDark ? "pi pi-sun" : "pi pi-moon";
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		className: ["blong-theme-switcher", className].filter(Boolean).join(" "),
		children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Dropdown, {
			value: optionId,
			options: THEME_GROUPS,
			optionLabel: "label",
			optionValue: "id",
			optionGroupLabel: "label",
			optionGroupChildren: "items",
			onChange: (e) => selectTheme(e.value),
			className: "blong-theme-switcher__select",
			panelClassName: "blong-theme-switcher__panel",
			"aria-label": t("Theme")
		}), paletteToggle ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Button, {
			type: "button",
			icon: modeIcon,
			text: true,
			rounded: true,
			severity: "secondary",
			tooltip: modeLabel,
			tooltipOptions: { position: "bottom" },
			"aria-label": modeLabel,
			onClick: () => selectPalette(nextPalette),
			className: "blong-theme-switcher__mode"
		}) : null]
	});
}
var import_jsx_runtime$1;
function init_ThemeSwitcher$1() {
	return (init_ThemeSwitcher$1 = __esmMin((() => {
		init_useText();
		init_shell();
		init_Theme();
		init_themeRegistry();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/App/LanguageDataRefresh.tsx
function LanguageDataRefresh() {
	const language = useAppStore((s) => s.language);
	const queryClient = useQueryClient();
	const mountedRef = import_react$1.useRef(false);
	import_react$1.useEffect(() => {
		if (!mountedRef.current) {
			mountedRef.current = true;
			return;
		}
		dropdownRegistry.clear();
		queryClient.invalidateQueries();
	}, [language, queryClient]);
	return null;
}
var import_react$1;
function init_LanguageDataRefresh() {
	return (init_LanguageDataRefresh = __esmMin((() => {
		init_QueryClientProvider();
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_dropdownRegistry();
		init_appStore();
	})))();
}
// ../../core/blong-browser/src/components/App/App.tsx
var App_exports = /* @__PURE__ */ __exportAll({ App: () => App });
function AppShell({ loginComponent: LoginComponent, children, portalProps }) {
	const { handler, config } = useBlong();
	const isAuthenticated = useAppStore((s) => s.auth.isAuthenticated);
	const [restored, setRestored] = import_react.useState(false);
	import_react.useEffect(() => {
		prefetchPageSystem();
	}, []);
	import_react.useEffect(() => {
		let cancelled = false;
		(async () => {
			try {
				await handler.authSessionGet({}, {});
			} catch {} finally {
				if (!cancelled) setRestored(true);
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [handler]);
	const [oauthHandled, setOauthHandled] = import_react.useState(false);
	import_react.useEffect(() => {
		if (isAuthenticated) {
			const merged = handler.portalConfigMerge({}, {});
			Promise.resolve(merged).then((config) => {
				if (config) useAppStore.getState().setPortalConfig(withTranslationReport(config));
			}).finally(() => {
				requestAnimationFrame(() => {
					document.documentElement.setAttribute("data-portal-config", "merged");
				});
			});
		}
	}, [handler, isAuthenticated]);
	const mergedPortalConfig = useAppStore((s) => s.portal.portalConfig);
	import_react.useEffect(() => {
		const load = mergedPortalConfig?.translation?.load;
		const store = useAppStore.getState();
		if (!load?.label) {
			store.setTranslationLoader(void 0);
			return;
		}
		const methods = handler;
		store.setTranslationLoader(async (language) => {
			return { label: await methods[load.label]?.({ languageCode: language }, {}) };
		});
		if (store.auth.isAuthenticated) store.languageActivate(store.language);
	}, [mergedPortalConfig?.translation?.load, handler]);
	const loginHandler = import_react.useCallback(async ({ username, password }) => {
		await handler.authLogin({
			username,
			password
		}, {});
	}, [handler]);
	const appConfig = config;
	import_react.useEffect(() => {
		useAppStore.getState().setTranslationsByLanguage(appConfig.portal?.translations ?? {});
		if (appConfig.portal?.translation?.collect) collectStart();
	}, [appConfig.portal?.translations, appConfig.portal?.translation?.collect]);
	import_react.useEffect(() => {
		const api = globalThis.__blongI18n;
		if (api) api.activate = (language) => useAppStore.getState().languageActivate(language);
	}, []);
	const registerPage = appConfig.login?.registerPage;
	const brand = appConfig.portal?.brand;
	const googleEnabled = Boolean(appConfig.google?.baseUrl && appConfig.google?.clientId);
	const onGoogle = import_react.useCallback(() => {
		handler.authGoogleRedirect({}, {});
	}, [handler]);
	const onExchange = import_react.useCallback(async ({ code, state, redirectUri }) => {
		await handler.authGoogleLogin({
			code,
			state,
			redirectUri
		}, {});
	}, [handler]);
	if (typeof window !== "undefined" && !oauthHandled && window.location.pathname.endsWith("/oauth/callback")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OAuthCallback, {
		onExchange,
		onSuccess: () => setOauthHandled(true)
	});
	if (!restored) return null;
	if (!isAuthenticated) return LoginComponent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginComponent, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Login, {
		onLogin: loginHandler,
		logoIcon: brand?.logoIcon ?? "pi pi-globe",
		logoUrl: brand?.logoUrl,
		title: appConfig.portal?.title ?? "Blong Portal",
		orgTitle: brand?.orgTitle,
		orgIcon: brand?.orgIcon,
		orgLogoUrl: brand?.orgLogoUrl,
		registerPage,
		defaultUsername: appConfig.login?.username,
		passwordHint: appConfig.login?.tokenHint,
		googleLogin: googleEnabled ? { onGoogle } : void 0
	});
	return children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		...portalProps,
		menubarEnd: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedbackToggle, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeSwitcher, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountMenu, {})
		] })
	});
}
function App({ handlerProxy, theme = DEFAULT_THEME, children, loginComponent, log, ...portalProps }) {
	const feedbackActive = useAppStore((state) => state.feedback.active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlongProvider, {
		handlerProxy,
		log,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimeReactProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Theme, {
			theme,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeedbackActiveContext, {
				value: feedbackActive,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageDataRefresh, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
						loginComponent,
						portalProps,
						children
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginPopup, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorDialog, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmPopup, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionHint, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedbackLayer, {})
				]
			})
		}) })
	});
}
var import_react, import_jsx_runtime, DEFAULT_THEME;
function init_App$1() {
	return (init_App$1 = __esmMin((() => {
		init_shell();
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_BlongContext();
		init_collect();
		init_menu();
		init_locales();
		init_appStore();
		init_AccountMenu$1();
		init_Error();
		init_FeedbackLayer();
		init_FeedbackToggle();
		init_useFeedbackTarget();
		init_prefetch();
		init_Hint();
		init_LanguageSwitcher$1();
		init_Login$1();
		init_LoginPopup$1();
		init_OAuthCallback$1();
		init_Portal$1();
		init_Theme();
		init_ThemeSwitcher$1();
		init_LanguageDataRefresh();
		import_jsx_runtime = require_jsx_runtime();
		DEFAULT_THEME = {
			type: "compact",
			palette: "dark",
			languages: { bg: bgLocale }
		};
	})))();
}
export { init_subscribable as $, fetchState as A, isValidTimeout as B, init_BlongContext as C, useQueryClient as D, init_QueryClientProvider as E, pendingThenable as F, shallowEqualObjects as G, replaceData as H, environmentManager as I, init_timeoutManager as J, shouldThrowError as K, init_environmentManager as L, init_notifyManager as M, notifyManager as N, getDefaultState as O, init_thenable as P, Subscribable as Q, hashKey as R, BlongProvider as S, useBlong as T, resolveEnabled as U, noop as V, resolveStaleTime as W, focusManager as X, timeoutManager as Y, init_focusManager as Z, init_dropdownRegistry as _, THEME_OPTIONS as a, init_usePermission as b, init_Hint as c, arrowHeadPoints as d, init_primereact_min as et, connectorOf as f, dropdownRegistry as g, resizeBox as h, useThemePalette as i, init_query as j, init_mutation as k, init_useFeedbackConfig as l, moveBox as m, init_App$1 as n, init_primeflex as nt, init_themeRegistry as o, init_placement as p, timeUntilStale as q, init_Theme as r, Hint as s, App_exports as t, init_primeicons as tt, useFeedbackConfig as u, invalidateDropdowns as v, makeHandlerProxy as w, usePermission as x, useDropdownVersion as y, init_utils as z };
