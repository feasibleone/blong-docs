import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { A as Subscribable, C as shallowEqualObjects, D as timeoutManager, E as init_timeoutManager, O as focusManager, S as resolveStaleTime, T as timeUntilStale, _ as init_utils, a as useQueryClient, b as replaceData, c as fetchState, d as notifyManager, g as hashKey, h as init_environmentManager, i as init_QueryClientProvider, j as init_subscribable, k as init_focusManager, l as init_query, m as environmentManager, n as init_BlongContext, o as getDefaultState, p as pendingThenable, r as useBlong, s as init_mutation, u as init_notifyManager, v as isValidTimeout, w as shouldThrowError, x as resolveEnabled, y as noop$1 } from "./BlongContext-Gs5GTHA4.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { n as init_appStore, r as useAppStore } from "./appStore-8DTFQjf-.js";
import { t as require_react_dom } from "./react-dom--p2_7awc.js";
import { $ as init_primereact, A as InputNumber, B as ProgressSpinner, D as FileUpload, E as Dropdown, G as Steps, H as Skeleton, I as MultiSelect, K as TabMenu, L as OverlayPanel, M as InputTextarea, O as Image, Q as TreeTable, R as PanelMenu, St as renderAll, U as SplitButton, V as SelectButton, W as Splitter, X as Tree, Y as Toolbar, Z as TreeSelect, _ as Calendar, b as Chips, et as Text, g as Button, it as confirmPopup, j as InputText, k as InputMask, m as AutoComplete, nt as SplitterPanel, ot as confirmDialog, tt as init_Text, v as Card$1, w as DataTable, x as Column, xt as init_browser, y as Checkbox, z as Password } from "./iframe-BfCOoPG7.js";
//#region ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/queryObserver.js
function shouldLoadOnMount(query, options) {
	return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
	return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
	if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
		const value = typeof field === "function" ? field(query) : field;
		return value === "always" || value !== false && isStale(query, options);
	}
	return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
	return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
	return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
	if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) return true;
	return false;
}
var QueryObserver;
function init_queryObserver() {
	return (init_queryObserver = __esmMin((() => {
		init_focusManager();
		init_environmentManager();
		init_notifyManager();
		init_query();
		init_subscribable();
		init_utils();
		init_timeoutManager();
		QueryObserver = class extends Subscribable {
			constructor(client, options) {
				super();
				this.options = options;
				this.#client = client;
				this.#selectError = null;
				this.#currentThenable = pendingThenable();
				this.bindMethods();
				this.setOptions(options);
			}
			#client;
			#currentQuery = void 0;
			#currentQueryInitialState = void 0;
			#currentResult = void 0;
			#currentResultState;
			#currentResultOptions;
			#currentThenable;
			#selectError;
			#selectFn;
			#selectResult;
			#lastQueryWithDefinedData;
			#staleTimeoutId;
			#refetchIntervalId;
			#currentRefetchInterval;
			#trackedProps = /* @__PURE__ */ new Set();
			bindMethods() {
				this.refetch = this.refetch.bind(this);
			}
			onSubscribe() {
				if (this.listeners.size === 1) {
					this.#currentQuery.addObserver(this);
					if (shouldFetchOnMount(this.#currentQuery, this.options)) this.#executeFetch();
					else this.updateResult();
					this.#updateTimers();
				}
			}
			onUnsubscribe() {
				if (!this.hasListeners()) this.destroy();
			}
			shouldFetchOnReconnect() {
				return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
			}
			shouldFetchOnWindowFocus() {
				return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
			}
			destroy() {
				this.listeners = /* @__PURE__ */ new Set();
				this.#clearStaleTimeout();
				this.#clearRefetchInterval();
				this.#currentQuery.removeObserver(this);
			}
			setOptions(options) {
				const prevOptions = this.options;
				const prevQuery = this.#currentQuery;
				this.options = this.#client.defaultQueryOptions(options);
				if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, this.#currentQuery) !== "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
				this.#updateQuery();
				this.#currentQuery.setOptions(this.options);
				if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) this.#client.getQueryCache().notify({
					type: "observerOptionsUpdated",
					query: this.#currentQuery,
					observer: this
				});
				const mounted = this.hasListeners();
				if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) this.#executeFetch();
				this.updateResult();
				if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || resolveStaleTime(this.options.staleTime, this.#currentQuery) !== resolveStaleTime(prevOptions.staleTime, this.#currentQuery))) this.#updateStaleTimeout();
				const nextRefetchInterval = this.#computeRefetchInterval();
				if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) this.#updateRefetchInterval(nextRefetchInterval);
			}
			getOptimisticResult(options) {
				const query = this.#client.getQueryCache().build(this.#client, options);
				const result = this.createResult(query, options);
				if (shouldAssignObserverCurrentProperties(this, result)) {
					this.#currentResult = result;
					this.#currentResultOptions = this.options;
					this.#currentResultState = this.#currentQuery.state;
				}
				return result;
			}
			getCurrentResult() {
				return this.#currentResult;
			}
			trackResult(result, onPropTracked) {
				return new Proxy(result, { get: (target, key) => {
					this.trackProp(key);
					onPropTracked?.(key);
					if (key === "promise") {
						this.trackProp("data");
						if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") this.#currentThenable.reject(/* @__PURE__ */ new Error("experimental_prefetchInRender feature flag is not enabled"));
					}
					return Reflect.get(target, key);
				} });
			}
			trackProp(key) {
				this.#trackedProps.add(key);
			}
			getCurrentQuery() {
				return this.#currentQuery;
			}
			refetch({ ...options } = {}) {
				return this.fetch({ ...options });
			}
			fetchOptimistic(options) {
				const defaultedOptions = this.#client.defaultQueryOptions(options);
				const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
				return query.fetch().then(() => this.createResult(query, defaultedOptions));
			}
			fetch(fetchOptions) {
				return this.#executeFetch({
					...fetchOptions,
					cancelRefetch: fetchOptions.cancelRefetch ?? true
				}).then(() => {
					this.updateResult();
					return this.#currentResult;
				});
			}
			#executeFetch(fetchOptions) {
				this.#updateQuery();
				let promise = this.#currentQuery.fetch(this.options, fetchOptions);
				if (!fetchOptions?.throwOnError) promise = promise.catch(noop$1);
				return promise;
			}
			#updateStaleTimeout() {
				this.#clearStaleTimeout();
				const staleTime = resolveStaleTime(this.options.staleTime, this.#currentQuery);
				if (environmentManager.isServer() || this.#currentResult.isStale || !isValidTimeout(staleTime)) return;
				const timeout = timeUntilStale(this.#currentResult.dataUpdatedAt, staleTime) + 1;
				this.#staleTimeoutId = timeoutManager.setTimeout(() => {
					if (!this.#currentResult.isStale) this.updateResult();
				}, timeout);
			}
			#computeRefetchInterval() {
				return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
			}
			#updateRefetchInterval(nextInterval) {
				this.#clearRefetchInterval();
				this.#currentRefetchInterval = nextInterval;
				if (environmentManager.isServer() || resolveEnabled(this.options.enabled, this.#currentQuery) === false || !isValidTimeout(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) return;
				this.#refetchIntervalId = timeoutManager.setInterval(() => {
					if (this.options.refetchIntervalInBackground || focusManager.isFocused()) this.#executeFetch();
				}, this.#currentRefetchInterval);
			}
			#updateTimers() {
				this.#updateStaleTimeout();
				this.#updateRefetchInterval(this.#computeRefetchInterval());
			}
			#clearStaleTimeout() {
				if (this.#staleTimeoutId) {
					timeoutManager.clearTimeout(this.#staleTimeoutId);
					this.#staleTimeoutId = void 0;
				}
			}
			#clearRefetchInterval() {
				if (this.#refetchIntervalId) {
					timeoutManager.clearInterval(this.#refetchIntervalId);
					this.#refetchIntervalId = void 0;
				}
			}
			createResult(query, options) {
				const prevQuery = this.#currentQuery;
				const prevOptions = this.options;
				const prevResult = this.#currentResult;
				const prevResultState = this.#currentResultState;
				const prevResultOptions = this.#currentResultOptions;
				const queryInitialState = query !== prevQuery ? query.state : this.#currentQueryInitialState;
				const { state } = query;
				let newState = { ...state };
				let isPlaceholderData = false;
				let data;
				if (options._optimisticResults) {
					const mounted = this.hasListeners();
					const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
					const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
					if (fetchOnMount || fetchOptionally) newState = {
						...newState,
						...fetchState(state.data, query.options)
					};
					if (options._optimisticResults === "isRestoring") newState.fetchStatus = "idle";
				}
				let { error, errorUpdatedAt, status } = newState;
				data = newState.data;
				let skipSelect = false;
				if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
					let placeholderData;
					if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
						placeholderData = prevResult.data;
						skipSelect = true;
					} else placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
					if (placeholderData !== void 0) {
						status = "success";
						data = replaceData(prevResult?.data, placeholderData, options);
						isPlaceholderData = true;
					}
				}
				if (options.select && data !== void 0 && !skipSelect) {
					if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) data = this.#selectResult;
					else try {
						this.#selectFn = options.select;
						data = options.select(data);
						data = replaceData(prevResult?.data, data, options);
						this.#selectResult = data;
						this.#selectError = null;
					} catch (selectError) {
						this.#selectError = selectError;
					}
				}
				if (this.#selectError) {
					error = this.#selectError;
					data = this.#selectResult;
					errorUpdatedAt = Date.now();
					status = "error";
				}
				const isFetching = newState.fetchStatus === "fetching";
				const isPending = status === "pending";
				const isError = status === "error";
				const isLoading = isPending && isFetching;
				const hasData = data !== void 0;
				const nextResult = {
					status,
					fetchStatus: newState.fetchStatus,
					isPending,
					isSuccess: status === "success",
					isError,
					isInitialLoading: isLoading,
					isLoading,
					data,
					dataUpdatedAt: newState.dataUpdatedAt,
					error,
					errorUpdatedAt,
					failureCount: newState.fetchFailureCount,
					failureReason: newState.fetchFailureReason,
					errorUpdateCount: newState.errorUpdateCount,
					isFetched: query.isFetched(),
					isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
					isFetching,
					isRefetching: isFetching && !isPending,
					isLoadingError: isError && !hasData,
					isPaused: newState.fetchStatus === "paused",
					isPlaceholderData,
					isRefetchError: isError && hasData,
					isStale: isStale(query, options),
					refetch: this.refetch,
					promise: this.#currentThenable,
					isEnabled: resolveEnabled(options.enabled, query) !== false
				};
				if (this.options.experimental_prefetchInRender) {
					const hasResultData = nextResult.data !== void 0;
					const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
					const finalizeThenableIfPossible = (thenable) => {
						if (isErrorWithoutData) thenable.reject(nextResult.error);
						else if (hasResultData) thenable.resolve(nextResult.data);
					};
					const recreateThenable = () => {
						const pending = this.#currentThenable = nextResult.promise = pendingThenable();
						finalizeThenableIfPossible(pending);
					};
					const prevThenable = this.#currentThenable;
					switch (prevThenable.status) {
						case "pending":
							if (query.queryHash === prevQuery.queryHash) finalizeThenableIfPossible(prevThenable);
							break;
						case "fulfilled":
							if (isErrorWithoutData || nextResult.data !== prevThenable.value) recreateThenable();
							break;
						case "rejected": if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) recreateThenable();
					}
				}
				return nextResult;
			}
			updateResult() {
				const prevResult = this.#currentResult;
				const nextResult = this.createResult(this.#currentQuery, this.options);
				this.#currentResultState = this.#currentQuery.state;
				this.#currentResultOptions = this.options;
				if (this.#currentResultState.data !== void 0) this.#lastQueryWithDefinedData = this.#currentQuery;
				if (shallowEqualObjects(nextResult, prevResult)) return;
				this.#currentResult = nextResult;
				const shouldNotifyListeners = () => {
					if (!prevResult) return true;
					const { notifyOnChangeProps } = this.options;
					const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
					if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) return true;
					const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
					if (this.options.throwOnError) includedProps.add("error");
					return Object.keys(this.#currentResult).some((key) => {
						const typedKey = key;
						return this.#currentResult[typedKey] !== prevResult[typedKey] && includedProps.has(typedKey);
					});
				};
				this.#notify({ listeners: shouldNotifyListeners() });
			}
			#updateQuery() {
				const query = this.#client.getQueryCache().build(this.#client, this.options);
				if (query === this.#currentQuery) return;
				const prevQuery = this.#currentQuery;
				this.#currentQuery = query;
				this.#currentQueryInitialState = query.state;
				if (this.hasListeners()) {
					prevQuery?.removeObserver(this);
					query.addObserver(this);
				}
			}
			onQueryUpdate() {
				this.updateResult();
				if (this.hasListeners()) this.#updateTimers();
			}
			#notify(notifyOptions) {
				notifyManager.batch(() => {
					if (notifyOptions.listeners) this.listeners.forEach((listener) => {
						listener(this.#currentResult);
					});
					this.#client.getQueryCache().notify({
						query: this.#currentQuery,
						type: "observerResultsUpdated"
					});
				});
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@tanstack+query-core@5.95.2/node_modules/@tanstack/query-core/build/modern/mutationObserver.js
var MutationObserver;
function init_mutationObserver() {
	return (init_mutationObserver = __esmMin((() => {
		init_mutation();
		init_notifyManager();
		init_subscribable();
		init_utils();
		MutationObserver = class extends Subscribable {
			#client;
			#currentResult = void 0;
			#currentMutation;
			#mutateOptions;
			constructor(client, options) {
				super();
				this.#client = client;
				this.setOptions(options);
				this.bindMethods();
				this.#updateResult();
			}
			bindMethods() {
				this.mutate = this.mutate.bind(this);
				this.reset = this.reset.bind(this);
			}
			setOptions(options) {
				const prevOptions = this.options;
				this.options = this.#client.defaultMutationOptions(options);
				if (!shallowEqualObjects(this.options, prevOptions)) this.#client.getMutationCache().notify({
					type: "observerOptionsUpdated",
					mutation: this.#currentMutation,
					observer: this
				});
				if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) this.reset();
				else if (this.#currentMutation?.state.status === "pending") this.#currentMutation.setOptions(this.options);
			}
			onUnsubscribe() {
				if (!this.hasListeners()) this.#currentMutation?.removeObserver(this);
			}
			onMutationUpdate(action) {
				this.#updateResult();
				this.#notify(action);
			}
			getCurrentResult() {
				return this.#currentResult;
			}
			reset() {
				this.#currentMutation?.removeObserver(this);
				this.#currentMutation = void 0;
				this.#updateResult();
				this.#notify();
			}
			mutate(variables, options) {
				this.#mutateOptions = options;
				this.#currentMutation?.removeObserver(this);
				this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
				this.#currentMutation.addObserver(this);
				return this.#currentMutation.execute(variables);
			}
			#updateResult() {
				const state = this.#currentMutation?.state ?? getDefaultState();
				this.#currentResult = {
					...state,
					isPending: state.status === "pending",
					isSuccess: state.status === "success",
					isError: state.status === "error",
					isIdle: state.status === "idle",
					mutate: this.mutate,
					reset: this.reset
				};
			}
			#notify(action) {
				notifyManager.batch(() => {
					if (this.#mutateOptions && this.hasListeners()) {
						const variables = this.#currentResult.variables;
						const onMutateResult = this.#currentResult.context;
						const context = {
							client: this.#client,
							meta: this.options.meta,
							mutationKey: this.options.mutationKey
						};
						if (action?.type === "success") {
							try {
								this.#mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
							} catch (e) {
								Promise.reject(e);
							}
							try {
								this.#mutateOptions.onSettled?.(action.data, null, variables, onMutateResult, context);
							} catch (e) {
								Promise.reject(e);
							}
						} else if (action?.type === "error") {
							try {
								this.#mutateOptions.onError?.(action.error, variables, onMutateResult, context);
							} catch (e) {
								Promise.reject(e);
							}
							try {
								this.#mutateOptions.onSettled?.(void 0, action.error, variables, onMutateResult, context);
							} catch (e) {
								Promise.reject(e);
							}
						}
					}
					this.listeners.forEach((listener) => {
						listener(this.#currentResult);
					});
				});
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@tanstack+react-query@5.95.2_react@19.2.4/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js
var import_react$37, IsRestoringContext, useIsRestoring;
function init_IsRestoringProvider() {
	return (init_IsRestoringProvider = __esmMin((() => {
		import_react$37 = /* @__PURE__ */ __toESM(require_react(), 1);
		IsRestoringContext = import_react$37.createContext(false);
		useIsRestoring = () => import_react$37.useContext(IsRestoringContext);
		IsRestoringContext.Provider;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@tanstack+react-query@5.95.2_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
function createValue() {
	let isReset = false;
	return {
		clearReset: () => {
			isReset = false;
		},
		reset: () => {
			isReset = true;
		},
		isReset: () => {
			return isReset;
		}
	};
}
var import_react$36, QueryErrorResetBoundaryContext, useQueryErrorResetBoundary;
function init_QueryErrorResetBoundary() {
	return (init_QueryErrorResetBoundary = __esmMin((() => {
		import_react$36 = /* @__PURE__ */ __toESM(require_react(), 1);
		require_jsx_runtime();
		QueryErrorResetBoundaryContext = import_react$36.createContext(createValue());
		useQueryErrorResetBoundary = () => import_react$36.useContext(QueryErrorResetBoundaryContext);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@tanstack+react-query@5.95.2_react@19.2.4/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
var import_react$35, ensurePreventErrorBoundaryRetry, useClearResetErrorBoundary, getHasError;
function init_errorBoundaryUtils() {
	return (init_errorBoundaryUtils = __esmMin((() => {
		import_react$35 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_utils();
		ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
			const throwOnError = query?.state.error && typeof options.throwOnError === "function" ? shouldThrowError(options.throwOnError, [query.state.error, query]) : options.throwOnError;
			if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
				if (!errorResetBoundary.isReset()) options.retryOnMount = false;
			}
		};
		useClearResetErrorBoundary = (errorResetBoundary) => {
			import_react$35.useEffect(() => {
				errorResetBoundary.clearReset();
			}, [errorResetBoundary]);
		};
		getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense }) => {
			return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@tanstack+react-query@5.95.2_react@19.2.4/node_modules/@tanstack/react-query/build/modern/suspense.js
var ensureSuspenseTimers, willFetch, shouldSuspend, fetchOptimistic;
function init_suspense() {
	return (init_suspense = __esmMin((() => {
		ensureSuspenseTimers = (defaultedOptions) => {
			if (defaultedOptions.suspense) {
				const MIN_SUSPENSE_TIME_MS = 1e3;
				const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
				const originalStaleTime = defaultedOptions.staleTime;
				defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
				if (typeof defaultedOptions.gcTime === "number") defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
			}
		};
		willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
		shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
		fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
			errorResetBoundary.clearReset();
		});
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@tanstack+react-query@5.95.2_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
function useBaseQuery(options, Observer, queryClient) {
	const isRestoring = useIsRestoring();
	const errorResetBoundary = useQueryErrorResetBoundary();
	const client = useQueryClient(queryClient);
	const defaultedOptions = client.defaultQueryOptions(options);
	client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
	const query = client.getQueryCache().get(defaultedOptions.queryHash);
	defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
	ensureSuspenseTimers(defaultedOptions);
	ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
	useClearResetErrorBoundary(errorResetBoundary);
	const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
	const [observer] = import_react$34.useState(() => new Observer(client, defaultedOptions));
	const result = observer.getOptimisticResult(defaultedOptions);
	const shouldSubscribe = !isRestoring && options.subscribed !== false;
	import_react$34.useSyncExternalStore(import_react$34.useCallback((onStoreChange) => {
		const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop$1;
		observer.updateResult();
		return unsubscribe;
	}, [observer, shouldSubscribe]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
	import_react$34.useEffect(() => {
		observer.setOptions(defaultedOptions);
	}, [defaultedOptions, observer]);
	if (shouldSuspend(defaultedOptions, result)) throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
	if (getHasError({
		result,
		errorResetBoundary,
		throwOnError: defaultedOptions.throwOnError,
		query,
		suspense: defaultedOptions.suspense
	})) throw result.error;
	client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
	if (defaultedOptions.experimental_prefetchInRender && !environmentManager.isServer() && willFetch(result, isRestoring)) (isNewCacheEntry ? fetchOptimistic(defaultedOptions, observer, errorResetBoundary) : query?.promise)?.catch(noop$1).finally(() => {
		observer.updateResult();
	});
	return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
var import_react$34;
function init_useBaseQuery() {
	return (init_useBaseQuery = __esmMin((() => {
		import_react$34 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_environmentManager(), init_utils(), init_notifyManager();
		init_QueryClientProvider();
		init_QueryErrorResetBoundary();
		init_errorBoundaryUtils();
		init_IsRestoringProvider();
		init_suspense();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@tanstack+react-query@5.95.2_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js
function useQuery(options, queryClient) {
	return useBaseQuery(options, QueryObserver, queryClient);
}
function init_useQuery() {
	return (init_useQuery = __esmMin((() => {
		init_queryObserver();
		init_useBaseQuery();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@tanstack+react-query@5.95.2_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useMutation.js
function useMutation(options, queryClient) {
	const client = useQueryClient(queryClient);
	const [observer] = import_react$33.useState(() => new MutationObserver(client, options));
	import_react$33.useEffect(() => {
		observer.setOptions(options);
	}, [observer, options]);
	const result = import_react$33.useSyncExternalStore(import_react$33.useCallback((onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)), [observer]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
	const mutate = import_react$33.useCallback((variables, mutateOptions) => {
		observer.mutate(variables, mutateOptions).catch(noop$1);
	}, [observer]);
	if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) throw result.error;
	return {
		...result,
		mutate,
		mutateAsync: result.mutate
	};
}
var import_react$33;
function init_useMutation() {
	return (init_useMutation = __esmMin((() => {
		import_react$33 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_mutationObserver(), init_utils(), init_notifyManager();
		init_QueryClientProvider();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/lib/ulid.ts
/**
* Minimal ULID generator (time-ordered unique IDs).
* Used for tab IDs and toast IDs.
*/
function ulid() {
	const time = Date.now();
	const random = Math.random().toString(36).slice(2, 12).toUpperCase().padEnd(10, "0");
	return `${time.toString(36).toUpperCase().padStart(10, "0")}${random}`;
}
//#endregion
//#region ../../core/blong-browser/src/hooks/useAction.ts
function isComponentAction(a) {
	return !a || "component" in a;
}
function isMutationAction(a) {
	return a && "mutates" in a && a.mutates === true;
}
function isQueryAction(a) {
	return a && "method" in a && !("mutates" in a);
}
/**
* useAction — invoke or subscribe to an action by name.
*
* @param actionName - Registered action name (e.g. 'model.coral.fetch')
* @param params - Static params merged with action-level params
*/
function useAction(actionName, type, params) {
	const { handler } = useBlong();
	const queryClient = useQueryClient();
	const actions = useAppStore((s) => s.actions);
	const openTab = useAppStore((s) => s.openTab);
	const showError = useAppStore((s) => s.showError);
	const action = (0, import_react$32.useMemo)(() => actions[actionName] ?? (actionName && !actionName.startsWith("component") && {
		method: actionName,
		type: type || "query",
		...type === "mutation" && { mutates: true }
	}), [
		actionName,
		actions,
		type
	]);
	const method = !isComponentAction(action) ? action.method ?? action.handler ?? actionName : actionName;
	const mergedParams = (0, import_react$32.useCallback)((callParams) => {
		const actionParams = !isComponentAction(action) && action.params ? typeof action.params === "function" ? action.params(callParams ?? {}) : action.params : {};
		return {
			...params ?? {},
			...actionParams,
			...callParams ?? {}
		};
	}, [action, params]);
	const open = (0, import_react$32.useCallback)(async (callParams) => {
		const resolved = mergedParams(callParams);
		const componentAction = action || await handler[actionName](resolved, {});
		if (componentAction && isComponentAction(componentAction)) try {
			const component = await componentAction.component(resolved);
			const tab = {
				id: ulid(),
				actionName,
				params: resolved,
				title: componentAction.title,
				component
			};
			openTab(tab);
		} catch (err) {
			showError({
				type: "error.component.load",
				message: String(err)
			});
		}
		else showError({
			type: "error.action.notfound",
			message: `Action "${actionName}" not found`
		});
	}, [
		action,
		actionName,
		mergedParams,
		openTab,
		showError,
		handler
	]);
	const { data, isLoading, error: queryError, refetch } = useQuery({
		queryKey: [method, params ?? {}],
		queryFn: () => handler[method](mergedParams(), {}),
		enabled: !!action && isQueryAction(action),
		staleTime: 0
	});
	const queryCall = (0, import_react$32.useCallback)((callParams) => handler[method](mergedParams(callParams), {}), [
		method,
		mergedParams,
		handler
	]);
	const { mutateAsync, isPending, error: mutationError } = useMutation({
		mutationFn: (callParams) => handler[method](mergedParams(callParams), {}),
		onSuccess: () => {
			if (isMutationAction(action)) {
				const invalidates = action.invalidates ?? [];
				for (const name of invalidates) {
					const invalidAction = actions[name];
					const invalidMethod = invalidAction && !isComponentAction(invalidAction) ? invalidAction.method ?? invalidAction.handler ?? name : name;
					queryClient.invalidateQueries({ queryKey: [invalidMethod] });
				}
			}
		}
	});
	const mutationCall = (0, import_react$32.useCallback)((callParams) => mutateAsync(callParams ?? {}), [mutateAsync]);
	if (actionName && isComponentAction(action)) return {
		call: open,
		open,
		loading: false
	};
	if (isQueryAction(action)) return {
		call: queryCall,
		open: queryCall,
		data,
		loading: isLoading,
		error: queryError ?? void 0,
		refetch: () => refetch().then((r) => r.data)
	};
	if (isMutationAction(action)) return {
		call: mutationCall,
		open: mutationCall,
		loading: isPending,
		error: mutationError ?? void 0
	};
	return {
		call: async () => void 0,
		open: () => void 0,
		loading: false
	};
}
var import_react$32;
function init_useAction() {
	return (init_useAction = __esmMin((() => {
		init_useMutation(), init_useQuery(), init_QueryClientProvider();
		import_react$32 = require_react();
		init_BlongContext();
		init_appStore();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/hooks/useLayout.ts
/** Type guard: is the layout config in tab/steps form? */
function isTabLayout(config) {
	return !Array.isArray(config) && "items" in config;
}
/** Type guard: is the layout config a split layout? */
function isSplitLayout(config) {
	return !Array.isArray(config) && config.type === "split";
}
/**
* Check whether a dot-notation field path resolves to a leaf property in the schema.
* E.g. 'input.input' checks schema.properties.input.properties.input.
* Single-segment paths (e.g. 'table') are checked directly in schemaProps.
* Paths with '#id' suffix (ICardWidgetEntry column-override keys) strip the suffix first.
*/
function schemaHasField(schemaProps, fieldPath) {
	const hashIdx = fieldPath.indexOf("#");
	const basePath = hashIdx >= 0 ? fieldPath.slice(0, hashIdx) : fieldPath;
	const dot = basePath.indexOf(".");
	if (dot === -1) return basePath in schemaProps;
	const head = basePath.slice(0, dot);
	const tail = basePath.slice(dot + 1);
	const nested = schemaProps[head]?.properties;
	return nested != null && schemaHasField(nested, tail);
}
/**
* Compute layout structure from schema + cards config + layout key.
*/
function useLayout(schema, cardsConfig, layoutKey, layouts, editors) {
	return (0, import_react$31.useMemo)(() => {
		const schemaProps = schema?.properties ?? {};
		const cards = {};
		const cardDefs = { ...cardsConfig ?? {} };
		if (Object.keys(cardDefs).length === 0) {
			const allFieldNames = Object.keys(schemaProps);
			cardDefs["default"] = {
				label: schema?.title ?? "Details",
				fields: allFieldNames
			};
		}
		for (const [name, cardCfg] of Object.entries(cardDefs)) {
			let fields;
			const columnOverrides = {};
			const widgetList = cardCfg.widgets ?? cardCfg.fields;
			if (Array.isArray(widgetList)) {
				fields = [];
				for (const entry of widgetList) if (typeof entry === "string") fields.push(entry);
				else {
					const key = `${entry.name}#${entry.id}`;
					fields.push(key);
					columnOverrides[key] = entry.widgets;
				}
			} else if (widgetList && typeof widgetList === "object") fields = Object.keys(widgetList);
			else fields = Object.keys(schemaProps);
			const validFields = !!cardCfg.watch || !schema ? fields : fields.filter((f) => schemaHasField(schemaProps, f) || !!editors?.[f]);
			cards[name] = {
				name,
				label: "label" in cardCfg ? cardCfg.label : name,
				fields: validFields,
				config: cardCfg,
				...Object.keys(columnOverrides).length > 0 ? { columnOverrides } : {}
			};
		}
		const expandField = (f) => editors?.[f]?.properties ?? [f];
		const layoutDef = layouts?.[layoutKey];
		if (layoutDef && isTabLayout(layoutDef)) {
			const tabs = layoutDef.items.map((item) => ({
				id: item.id,
				label: item.label,
				icon: item.icon,
				cardNames: item.component ? [] : flattenLayout(item.widgets),
				component: item.component
			}));
			const allTabCards = tabs.flatMap((t) => t.cardNames.flat());
			return {
				rows: [],
				cards,
				allFields: [...new Set(allTabCards.flatMap((c) => (cards[c]?.fields ?? []).flatMap(expandField)))],
				tabs,
				layoutType: layoutDef.type === "steps" ? "steps" : "tabs",
				orientation: layoutDef.orientation
			};
		}
		if (layoutDef && isSplitLayout(layoutDef)) {
			const panels = layoutDef.panels;
			const allPanelCards = panels.flatMap((p) => p.cards);
			return {
				rows: [],
				cards,
				allFields: [...new Set(allPanelCards.flatMap((c) => (cards[c]?.fields ?? []).flatMap(expandField)))],
				layoutType: "split",
				orientation: layoutDef.orientation ?? "horizontal",
				panels
			};
		}
		let rows;
		if (layoutDef) rows = flattenLayout(layoutDef);
		else rows = Object.keys(cards).map((c) => [c]);
		const allFields = [...new Set(Object.values(cards).flatMap((c) => c.fields.flatMap(expandField)))];
		return {
			rows,
			cards,
			allFields,
			layoutType: "flat"
		};
	}, [
		schema,
		cardsConfig,
		layoutKey,
		layouts,
		editors
	]);
}
/** Flatten layout definition to array of column groups.
*
* Each top-level element in the layout array = **one grid column**.
* - A string element    → one card alone in that column.
* - An array element    → multiple cards stacked vertically in that column.
*
* Examples:
*   'habitat'               → [['habitat']]           (one column, one card)
*   ['edit', 'denied']      → [['edit', 'denied']]    (one column, two stacked cards)
*   [['edit'], ['denied']]  → [['edit', 'denied']]    (also one column — inner arrays merge)
*/
function flattenLayout(layout) {
	const result = [];
	for (const row of layout) if (typeof row === "string") result.push([row]);
	else if (Array.isArray(row)) {
		const columnCards = [];
		for (const item of row) if (typeof item === "string") columnCards.push(item);
		else if (Array.isArray(item)) columnCards.push(...item);
		if (columnCards.length) result.push(columnCards);
	}
	return result;
}
var import_react$31;
function init_useLayout() {
	return (init_useLayout = __esmMin((() => {
		import_react$31 = require_react();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/hooks/usePermission.ts
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
//#endregion
//#region ../../core/blong-browser/src/components/ActionButton/ActionButton.tsx
function ActionButton({ label, icon, action: actionRef, method, permission, submit: shouldSubmit = false, confirm: confirmMessage, enabled = true, visible = true, menu, params: extraParams, successHint, refresh, formId, className = "", onBusyChange, disabled: externalDisabled = false }) {
	const permitted = usePermission(permission);
	const [loading, setLoading] = (0, import_react$30.useState)(false);
	/**
	* Set for as long as the failure hint is on screen, so visual themes can
	* style the button that errored (the wood variant paints it rust).
	*/
	const [failed, setFailed] = (0, import_react$30.useState)(false);
	const queryClient = useQueryClient();
	const actionMethod = typeof actionRef === "string" ? actionRef : actionRef?.method;
	const actionParamsOverride = typeof actionRef === "object" && actionRef !== null ? actionRef.params : void 0;
	const mergedParams = extraParams !== null && typeof extraParams === "object" && !Array.isArray(extraParams) ? {
		...actionParamsOverride ?? {},
		...extraParams
	} : { ...actionParamsOverride ?? {} };
	const callParams = extraParams !== null && typeof extraParams === "object" && !Array.isArray(extraParams) ? mergedParams : extraParams ?? mergedParams;
	const directMethod = method ?? actionMethod ?? "";
	const testId = directMethod ? `action-${directMethod.replace(/[/.]/g, "-")}` : void 0;
	const { call } = useAction(directMethod, "mutation", mergedParams);
	const clearError = useAppStore((s) => s.clearError);
	const showHint = useAppStore((s) => s.showHint);
	const hintTargetRef = (0, import_react$30.useRef)(null);
	if (!visible || !permitted) return null;
	const isDisabled = externalDisabled || enabled === false || loading;
	const doCall = async () => {
		if (shouldSubmit && formId) {
			const form = document.getElementById(formId);
			if (form) {
				form.requestSubmit();
				return;
			}
		}
		setLoading(true);
		onBusyChange?.(true);
		try {
			await call(callParams);
			if (refresh && directMethod) {
				const ns = directMethod.split(".").slice(0, -1).join(".");
				if (ns) {
					queryClient.invalidateQueries({ queryKey: [ns + ".find"] });
					queryClient.invalidateQueries({ queryKey: [ns + ".get"] });
				}
			}
			if (successHint) showHint(hintTargetRef.current, successHint, false);
		} catch (err) {
			const e = err;
			clearError();
			showHint(hintTargetRef.current, e.print ?? e.message ?? "Error", true);
			setFailed(true);
			window.setTimeout(() => setFailed(false), 2e3);
		} finally {
			setLoading(false);
			onBusyChange?.(false);
		}
	};
	const handleClick = () => {
		if (confirmMessage) confirmDialog({
			message: confirmMessage,
			header: "Confirm",
			icon: "pi pi-exclamation-triangle",
			accept: () => void doCall()
		});
		else doCall();
	};
	const buttonProps = {
		label,
		icon: loading ? "pi pi-spinner pi-spin" : icon,
		disabled: isDisabled,
		onClick: handleClick,
		className: `blong-action-btn ${className}${failed ? " blong-action-error" : ""}`
	};
	if (menu && menu.length > 0) {
		const splitItems = menu.map((item) => ({
			label: item.label,
			icon: item.icon,
			command: () => {
				const subAction = typeof item.action === "string" ? item.action : item.action?.method;
				if (subAction) call({
					...mergedParams,
					_action: subAction
				});
			}
		}));
		return /* @__PURE__ */ (0, import_jsx_runtime$40.jsx)("span", {
			ref: hintTargetRef,
			style: { display: "inline-block" },
			"data-testid": testId,
			children: /* @__PURE__ */ (0, import_jsx_runtime$40.jsx)(SplitButton, {
				...buttonProps,
				model: splitItems
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$40.jsx)("span", {
		ref: hintTargetRef,
		style: { display: "inline-block" },
		"data-testid": testId,
		children: /* @__PURE__ */ (0, import_jsx_runtime$40.jsx)(Button, { ...buttonProps })
	});
}
var import_react$30, import_jsx_runtime$40;
function init_ActionButton() {
	return (init_ActionButton = __esmMin((() => {
		init_primereact();
		init_QueryClientProvider();
		import_react$30 = require_react();
		init_useAction();
		init_usePermission();
		init_appStore();
		import_jsx_runtime$40 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@19.2.4/node_modules/@dnd-kit/utilities/dist/utilities.esm.js
function isWindow(element) {
	const elementString = Object.prototype.toString.call(element);
	return elementString === "[object Window]" || elementString === "[object global]";
}
function isNode(node) {
	return "nodeType" in node;
}
function getWindow(target) {
	var _target$ownerDocument, _target$ownerDocument2;
	if (!target) return window;
	if (isWindow(target)) return target;
	if (!isNode(target)) return window;
	return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}
function isDocument(node) {
	const { Document } = getWindow(node);
	return node instanceof Document;
}
function isHTMLElement$1(node) {
	if (isWindow(node)) return false;
	return node instanceof getWindow(node).HTMLElement;
}
function isSVGElement(node) {
	return node instanceof getWindow(node).SVGElement;
}
function getOwnerDocument(target) {
	if (!target) return document;
	if (isWindow(target)) return target.document;
	if (!isNode(target)) return document;
	if (isDocument(target)) return target;
	if (isHTMLElement$1(target) || isSVGElement(target)) return target.ownerDocument;
	return document;
}
function useEvent(handler) {
	const handlerRef = (0, import_react$29.useRef)(handler);
	useIsomorphicLayoutEffect$1(() => {
		handlerRef.current = handler;
	});
	return (0, import_react$29.useCallback)(function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		return handlerRef.current == null ? void 0 : handlerRef.current(...args);
	}, []);
}
function useInterval() {
	const intervalRef = (0, import_react$29.useRef)(null);
	return [(0, import_react$29.useCallback)((listener, duration) => {
		intervalRef.current = setInterval(listener, duration);
	}, []), (0, import_react$29.useCallback)(() => {
		if (intervalRef.current !== null) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, [])];
}
function useLatestValue(value, dependencies) {
	if (dependencies === void 0) dependencies = [value];
	const valueRef = (0, import_react$29.useRef)(value);
	useIsomorphicLayoutEffect$1(() => {
		if (valueRef.current !== value) valueRef.current = value;
	}, dependencies);
	return valueRef;
}
function useLazyMemo(callback, dependencies) {
	const valueRef = (0, import_react$29.useRef)();
	return (0, import_react$29.useMemo)(() => {
		const newValue = callback(valueRef.current);
		valueRef.current = newValue;
		return newValue;
	}, [...dependencies]);
}
function useNodeRef(onChange) {
	const onChangeHandler = useEvent(onChange);
	const node = (0, import_react$29.useRef)(null);
	return [node, (0, import_react$29.useCallback)((element) => {
		if (element !== node.current) onChangeHandler?.(element, node.current);
		node.current = element;
	}, [])];
}
function usePrevious(value) {
	const ref = (0, import_react$29.useRef)();
	(0, import_react$29.useEffect)(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}
function useUniqueId(prefix, value) {
	return (0, import_react$29.useMemo)(() => {
		if (value) return value;
		const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
		ids[prefix] = id;
		return prefix + "-" + id;
	}, [prefix, value]);
}
function createAdjustmentFn(modifier) {
	return function(object) {
		for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) adjustments[_key - 1] = arguments[_key];
		return adjustments.reduce((accumulator, adjustment) => {
			const entries = Object.entries(adjustment);
			for (const [key, valueAdjustment] of entries) {
				const value = accumulator[key];
				if (value != null) accumulator[key] = value + modifier * valueAdjustment;
			}
			return accumulator;
		}, { ...object });
	};
}
function hasViewportRelativeCoordinates(event) {
	return "clientX" in event && "clientY" in event;
}
function isKeyboardEvent(event) {
	if (!event) return false;
	const { KeyboardEvent } = getWindow(event.target);
	return KeyboardEvent && event instanceof KeyboardEvent;
}
function isTouchEvent(event) {
	if (!event) return false;
	const { TouchEvent } = getWindow(event.target);
	return TouchEvent && event instanceof TouchEvent;
}
/**
* Returns the normalized x and y coordinates for mouse and touch events.
*/
function getEventCoordinates(event) {
	if (isTouchEvent(event)) {
		if (event.touches && event.touches.length) {
			const { clientX: x, clientY: y } = event.touches[0];
			return {
				x,
				y
			};
		} else if (event.changedTouches && event.changedTouches.length) {
			const { clientX: x, clientY: y } = event.changedTouches[0];
			return {
				x,
				y
			};
		}
	}
	if (hasViewportRelativeCoordinates(event)) return {
		x: event.clientX,
		y: event.clientY
	};
	return null;
}
function findFirstFocusableNode(element) {
	if (element.matches(SELECTOR)) return element;
	return element.querySelector(SELECTOR);
}
var import_react$29, canUseDOM, useIsomorphicLayoutEffect$1, ids, add, subtract, CSS, SELECTOR;
function init_utilities_esm() {
	return (init_utilities_esm = __esmMin((() => {
		import_react$29 = require_react();
		canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
		useIsomorphicLayoutEffect$1 = canUseDOM ? import_react$29.useLayoutEffect : import_react$29.useEffect;
		ids = {};
		add = /*#__PURE__*/ createAdjustmentFn(1);
		subtract = /*#__PURE__*/ createAdjustmentFn(-1);
		CSS = /*#__PURE__*/ Object.freeze({
			Translate: { toString(transform) {
				if (!transform) return;
				const { x, y } = transform;
				return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
			} },
			Scale: { toString(transform) {
				if (!transform) return;
				const { scaleX, scaleY } = transform;
				return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
			} },
			Transform: { toString(transform) {
				if (!transform) return;
				return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(" ");
			} },
			Transition: { toString(_ref) {
				let { property, duration, easing } = _ref;
				return property + " " + duration + "ms " + easing;
			} }
		});
		SELECTOR = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@dnd-kit+accessibility@3.1.1_react@19.2.4/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
function HiddenText(_ref) {
	let { id, value } = _ref;
	return import_react$28.createElement("div", {
		id,
		style: hiddenStyles
	}, value);
}
function LiveRegion(_ref) {
	let { id, announcement, ariaLiveType = "assertive" } = _ref;
	return import_react$28.createElement("div", {
		id,
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			width: 1,
			height: 1,
			margin: -1,
			border: 0,
			padding: 0,
			overflow: "hidden",
			clip: "rect(0 0 0 0)",
			clipPath: "inset(100%)",
			whiteSpace: "nowrap"
		},
		role: "status",
		"aria-live": ariaLiveType,
		"aria-atomic": true
	}, announcement);
}
function useAnnouncement() {
	const [announcement, setAnnouncement] = (0, import_react$28.useState)("");
	return {
		announce: (0, import_react$28.useCallback)((value) => {
			if (value != null) setAnnouncement(value);
		}, []),
		announcement
	};
}
var import_react$28, hiddenStyles;
function init_accessibility_esm() {
	return (init_accessibility_esm = __esmMin((() => {
		import_react$28 = /* @__PURE__ */ __toESM(require_react());
		hiddenStyles = { display: "none" };
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@dnd-kit/core/dist/core.esm.js
function useDndMonitor(listener) {
	const registerListener = (0, import_react$27.useContext)(DndMonitorContext);
	(0, import_react$27.useEffect)(() => {
		if (!registerListener) throw new Error("useDndMonitor must be used within a children of <DndContext>");
		return registerListener(listener);
	}, [listener, registerListener]);
}
function useDndMonitorProvider() {
	const [listeners] = (0, import_react$27.useState)(() => /* @__PURE__ */ new Set());
	const registerListener = (0, import_react$27.useCallback)((listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	}, [listeners]);
	return [(0, import_react$27.useCallback)((_ref) => {
		let { type, event } = _ref;
		listeners.forEach((listener) => {
			var _listener$type;
			return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
		});
	}, [listeners]), registerListener];
}
function Accessibility(_ref) {
	let { announcements = defaultAnnouncements, container, hiddenTextDescribedById, screenReaderInstructions = defaultScreenReaderInstructions } = _ref;
	const { announce, announcement } = useAnnouncement();
	const liveRegionId = useUniqueId("DndLiveRegion");
	const [mounted, setMounted] = (0, import_react$27.useState)(false);
	(0, import_react$27.useEffect)(() => {
		setMounted(true);
	}, []);
	useDndMonitor((0, import_react$27.useMemo)(() => ({
		onDragStart(_ref2) {
			let { active } = _ref2;
			announce(announcements.onDragStart({ active }));
		},
		onDragMove(_ref3) {
			let { active, over } = _ref3;
			if (announcements.onDragMove) announce(announcements.onDragMove({
				active,
				over
			}));
		},
		onDragOver(_ref4) {
			let { active, over } = _ref4;
			announce(announcements.onDragOver({
				active,
				over
			}));
		},
		onDragEnd(_ref5) {
			let { active, over } = _ref5;
			announce(announcements.onDragEnd({
				active,
				over
			}));
		},
		onDragCancel(_ref6) {
			let { active, over } = _ref6;
			announce(announcements.onDragCancel({
				active,
				over
			}));
		}
	}), [announce, announcements]));
	if (!mounted) return null;
	const markup = import_react$27.createElement(import_react$27.Fragment, null, import_react$27.createElement(HiddenText, {
		id: hiddenTextDescribedById,
		value: screenReaderInstructions.draggable
	}), import_react$27.createElement(LiveRegion, {
		id: liveRegionId,
		announcement
	}));
	return container ? (0, import_react_dom.createPortal)(markup, container) : markup;
}
function noop() {}
function useSensor(sensor, options) {
	return (0, import_react$27.useMemo)(() => ({
		sensor,
		options: options != null ? options : {}
	}), [sensor, options]);
}
function useSensors() {
	for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) sensors[_key] = arguments[_key];
	return (0, import_react$27.useMemo)(() => [...sensors].filter((sensor) => sensor != null), [...sensors]);
}
/**
* Returns the distance between two points
*/
function distanceBetween(p1, p2) {
	return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
function getRelativeTransformOrigin(event, rect) {
	const eventCoordinates = getEventCoordinates(event);
	if (!eventCoordinates) return "0 0";
	const transformOrigin = {
		x: (eventCoordinates.x - rect.left) / rect.width * 100,
		y: (eventCoordinates.y - rect.top) / rect.height * 100
	};
	return transformOrigin.x + "% " + transformOrigin.y + "%";
}
/**
* Sort collisions from smallest to greatest value
*/
function sortCollisionsAsc(_ref, _ref2) {
	let { data: { value: a } } = _ref;
	let { data: { value: b } } = _ref2;
	return a - b;
}
/**
* Sort collisions from greatest to smallest value
*/
function sortCollisionsDesc(_ref3, _ref4) {
	let { data: { value: a } } = _ref3;
	let { data: { value: b } } = _ref4;
	return b - a;
}
function getFirstCollision(collisions, property) {
	if (!collisions || collisions.length === 0) return null;
	const [firstCollision] = collisions;
	return property ? firstCollision[property] : firstCollision;
}
/**
* Returns the coordinates of the center of a given ClientRect
*/
function centerOfRectangle(rect, left, top) {
	if (left === void 0) left = rect.left;
	if (top === void 0) top = rect.top;
	return {
		x: left + rect.width * .5,
		y: top + rect.height * .5
	};
}
/**
* Returns the intersecting rectangle area between two rectangles
*/
function getIntersectionRatio(entry, target) {
	const top = Math.max(target.top, entry.top);
	const left = Math.max(target.left, entry.left);
	const right = Math.min(target.left + target.width, entry.left + entry.width);
	const bottom = Math.min(target.top + target.height, entry.top + entry.height);
	const width = right - left;
	const height = bottom - top;
	if (left < right && top < bottom) {
		const targetArea = target.width * target.height;
		const entryArea = entry.width * entry.height;
		const intersectionArea = width * height;
		const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
		return Number(intersectionRatio.toFixed(4));
	}
	return 0;
}
function adjustScale(transform, rect1, rect2) {
	return {
		...transform,
		scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
		scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
	};
}
function getRectDelta(rect1, rect2) {
	return rect1 && rect2 ? {
		x: rect1.left - rect2.left,
		y: rect1.top - rect2.top
	} : defaultCoordinates;
}
function createRectAdjustmentFn(modifier) {
	return function adjustClientRect(rect) {
		for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) adjustments[_key - 1] = arguments[_key];
		return adjustments.reduce((acc, adjustment) => ({
			...acc,
			top: acc.top + modifier * adjustment.y,
			bottom: acc.bottom + modifier * adjustment.y,
			left: acc.left + modifier * adjustment.x,
			right: acc.right + modifier * adjustment.x
		}), { ...rect });
	};
}
function parseTransform(transform) {
	if (transform.startsWith("matrix3d(")) {
		const transformArray = transform.slice(9, -1).split(/, /);
		return {
			x: +transformArray[12],
			y: +transformArray[13],
			scaleX: +transformArray[0],
			scaleY: +transformArray[5]
		};
	} else if (transform.startsWith("matrix(")) {
		const transformArray = transform.slice(7, -1).split(/, /);
		return {
			x: +transformArray[4],
			y: +transformArray[5],
			scaleX: +transformArray[0],
			scaleY: +transformArray[3]
		};
	}
	return null;
}
function inverseTransform(rect, transform, transformOrigin) {
	const parsedTransform = parseTransform(transform);
	if (!parsedTransform) return rect;
	const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
	const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
	const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
	const w = scaleX ? rect.width / scaleX : rect.width;
	const h = scaleY ? rect.height / scaleY : rect.height;
	return {
		width: w,
		height: h,
		top: y,
		right: x + w,
		bottom: y + h,
		left: x
	};
}
/**
* Returns the bounding client rect of an element relative to the viewport.
*/
function getClientRect(element, options) {
	if (options === void 0) options = defaultOptions$1;
	let rect = element.getBoundingClientRect();
	if (options.ignoreTransform) {
		const { transform, transformOrigin } = getWindow(element).getComputedStyle(element);
		if (transform) rect = inverseTransform(rect, transform, transformOrigin);
	}
	const { top, left, width, height, bottom, right } = rect;
	return {
		top,
		left,
		width,
		height,
		bottom,
		right
	};
}
/**
* Returns the bounding client rect of an element relative to the viewport.
*
* @remarks
* The ClientRect returned by this method does not take into account transforms
* applied to the element it measures.
*
*/
function getTransformAgnosticClientRect(element) {
	return getClientRect(element, { ignoreTransform: true });
}
function getWindowClientRect(element) {
	const width = element.innerWidth;
	const height = element.innerHeight;
	return {
		top: 0,
		left: 0,
		right: width,
		bottom: height,
		width,
		height
	};
}
function isFixed(node, computedStyle) {
	if (computedStyle === void 0) computedStyle = getWindow(node).getComputedStyle(node);
	return computedStyle.position === "fixed";
}
function isScrollable(element, computedStyle) {
	if (computedStyle === void 0) computedStyle = getWindow(element).getComputedStyle(element);
	const overflowRegex = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((property) => {
		const value = computedStyle[property];
		return typeof value === "string" ? overflowRegex.test(value) : false;
	});
}
function getScrollableAncestors(element, limit) {
	const scrollParents = [];
	function findScrollableAncestors(node) {
		if (limit != null && scrollParents.length >= limit) return scrollParents;
		if (!node) return scrollParents;
		if (isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
			scrollParents.push(node.scrollingElement);
			return scrollParents;
		}
		if (!isHTMLElement$1(node) || isSVGElement(node)) return scrollParents;
		if (scrollParents.includes(node)) return scrollParents;
		const computedStyle = getWindow(element).getComputedStyle(node);
		if (node !== element) {
			if (isScrollable(node, computedStyle)) scrollParents.push(node);
		}
		if (isFixed(node, computedStyle)) return scrollParents;
		return findScrollableAncestors(node.parentNode);
	}
	if (!element) return scrollParents;
	return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
	const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
	return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}
function getScrollableElement(element) {
	if (!canUseDOM || !element) return null;
	if (isWindow(element)) return element;
	if (!isNode(element)) return null;
	if (isDocument(element) || element === getOwnerDocument(element).scrollingElement) return window;
	if (isHTMLElement$1(element)) return element;
	return null;
}
function getScrollXCoordinate(element) {
	if (isWindow(element)) return element.scrollX;
	return element.scrollLeft;
}
function getScrollYCoordinate(element) {
	if (isWindow(element)) return element.scrollY;
	return element.scrollTop;
}
function getScrollCoordinates(element) {
	return {
		x: getScrollXCoordinate(element),
		y: getScrollYCoordinate(element)
	};
}
function isDocumentScrollingElement(element) {
	if (!canUseDOM || !element) return false;
	return element === document.scrollingElement;
}
function getScrollPosition(scrollingContainer) {
	const minScroll = {
		x: 0,
		y: 0
	};
	const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
		height: window.innerHeight,
		width: window.innerWidth
	} : {
		height: scrollingContainer.clientHeight,
		width: scrollingContainer.clientWidth
	};
	const maxScroll = {
		x: scrollingContainer.scrollWidth - dimensions.width,
		y: scrollingContainer.scrollHeight - dimensions.height
	};
	return {
		isTop: scrollingContainer.scrollTop <= minScroll.y,
		isLeft: scrollingContainer.scrollLeft <= minScroll.x,
		isBottom: scrollingContainer.scrollTop >= maxScroll.y,
		isRight: scrollingContainer.scrollLeft >= maxScroll.x,
		maxScroll,
		minScroll
	};
}
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
	let { top, left, right, bottom } = _ref;
	if (acceleration === void 0) acceleration = 10;
	if (thresholdPercentage === void 0) thresholdPercentage = defaultThreshold;
	const { isTop, isBottom, isLeft, isRight } = getScrollPosition(scrollContainer);
	const direction = {
		x: 0,
		y: 0
	};
	const speed = {
		x: 0,
		y: 0
	};
	const threshold = {
		height: scrollContainerRect.height * thresholdPercentage.y,
		width: scrollContainerRect.width * thresholdPercentage.x
	};
	if (!isTop && top <= scrollContainerRect.top + threshold.height) {
		direction.y = Direction.Backward;
		speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
	} else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
		direction.y = Direction.Forward;
		speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
	}
	if (!isRight && right >= scrollContainerRect.right - threshold.width) {
		direction.x = Direction.Forward;
		speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
	} else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
		direction.x = Direction.Backward;
		speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
	}
	return {
		direction,
		speed
	};
}
function getScrollElementRect(element) {
	if (element === document.scrollingElement) {
		const { innerWidth, innerHeight } = window;
		return {
			top: 0,
			left: 0,
			right: innerWidth,
			bottom: innerHeight,
			width: innerWidth,
			height: innerHeight
		};
	}
	const { top, left, right, bottom } = element.getBoundingClientRect();
	return {
		top,
		left,
		right,
		bottom,
		width: element.clientWidth,
		height: element.clientHeight
	};
}
function getScrollOffsets(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return add(acc, getScrollCoordinates(node));
	}, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return acc + getScrollXCoordinate(node);
	}, 0);
}
function getScrollYOffset(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return acc + getScrollYCoordinate(node);
	}, 0);
}
function scrollIntoViewIfNeeded(element, measure) {
	if (measure === void 0) measure = getClientRect;
	if (!element) return;
	const { top, left, bottom, right } = measure(element);
	if (!getFirstScrollableAncestor(element)) return;
	if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) element.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
function getEventListenerTarget(target) {
	const { EventTarget } = getWindow(target);
	return target instanceof EventTarget ? target : getOwnerDocument(target);
}
function hasExceededDistance(delta, measurement) {
	const dx = Math.abs(delta.x);
	const dy = Math.abs(delta.y);
	if (typeof measurement === "number") return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
	if ("x" in measurement && "y" in measurement) return dx > measurement.x && dy > measurement.y;
	if ("x" in measurement) return dx > measurement.x;
	if ("y" in measurement) return dy > measurement.y;
	return false;
}
function preventDefault(event) {
	event.preventDefault();
}
function stopPropagation(event) {
	event.stopPropagation();
}
function isDistanceConstraint(constraint) {
	return Boolean(constraint && "distance" in constraint);
}
function isDelayConstraint(constraint) {
	return Boolean(constraint && "delay" in constraint);
}
function useAutoScroller(_ref) {
	let { acceleration, activator = AutoScrollActivator.Pointer, canScroll, draggingRect, enabled, interval = 5, order = TraversalOrder.TreeOrder, pointerCoordinates, scrollableAncestors, scrollableAncestorRects, delta, threshold } = _ref;
	const scrollIntent = useScrollIntent({
		delta,
		disabled: !enabled
	});
	const [setAutoScrollInterval, clearAutoScrollInterval] = useInterval();
	const scrollSpeed = (0, import_react$27.useRef)({
		x: 0,
		y: 0
	});
	const scrollDirection = (0, import_react$27.useRef)({
		x: 0,
		y: 0
	});
	const rect = (0, import_react$27.useMemo)(() => {
		switch (activator) {
			case AutoScrollActivator.Pointer: return pointerCoordinates ? {
				top: pointerCoordinates.y,
				bottom: pointerCoordinates.y,
				left: pointerCoordinates.x,
				right: pointerCoordinates.x
			} : null;
			case AutoScrollActivator.DraggableRect: return draggingRect;
		}
	}, [
		activator,
		draggingRect,
		pointerCoordinates
	]);
	const scrollContainerRef = (0, import_react$27.useRef)(null);
	const autoScroll = (0, import_react$27.useCallback)(() => {
		const scrollContainer = scrollContainerRef.current;
		if (!scrollContainer) return;
		const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
		const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
		scrollContainer.scrollBy(scrollLeft, scrollTop);
	}, []);
	const sortedScrollableAncestors = (0, import_react$27.useMemo)(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
	(0, import_react$27.useEffect)(() => {
		if (!enabled || !scrollableAncestors.length || !rect) {
			clearAutoScrollInterval();
			return;
		}
		for (const scrollContainer of sortedScrollableAncestors) {
			if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) continue;
			const index = scrollableAncestors.indexOf(scrollContainer);
			const scrollContainerRect = scrollableAncestorRects[index];
			if (!scrollContainerRect) continue;
			const { direction, speed } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);
			for (const axis of ["x", "y"]) if (!scrollIntent[axis][direction[axis]]) {
				speed[axis] = 0;
				direction[axis] = 0;
			}
			if (speed.x > 0 || speed.y > 0) {
				clearAutoScrollInterval();
				scrollContainerRef.current = scrollContainer;
				setAutoScrollInterval(autoScroll, interval);
				scrollSpeed.current = speed;
				scrollDirection.current = direction;
				return;
			}
		}
		scrollSpeed.current = {
			x: 0,
			y: 0
		};
		scrollDirection.current = {
			x: 0,
			y: 0
		};
		clearAutoScrollInterval();
	}, [
		acceleration,
		autoScroll,
		canScroll,
		clearAutoScrollInterval,
		enabled,
		interval,
		JSON.stringify(rect),
		JSON.stringify(scrollIntent),
		setAutoScrollInterval,
		scrollableAncestors,
		sortedScrollableAncestors,
		scrollableAncestorRects,
		JSON.stringify(threshold)
	]);
}
function useScrollIntent(_ref2) {
	let { delta, disabled } = _ref2;
	const previousDelta = usePrevious(delta);
	return useLazyMemo((previousIntent) => {
		if (disabled || !previousDelta || !previousIntent) return defaultScrollIntent;
		const direction = {
			x: Math.sign(delta.x - previousDelta.x),
			y: Math.sign(delta.y - previousDelta.y)
		};
		return {
			x: {
				[Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
				[Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
			},
			y: {
				[Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
				[Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
			}
		};
	}, [
		disabled,
		delta,
		previousDelta
	]);
}
function useCachedNode(draggableNodes, id) {
	const draggableNode = id != null ? draggableNodes.get(id) : void 0;
	const node = draggableNode ? draggableNode.node.current : null;
	return useLazyMemo((cachedNode) => {
		var _ref;
		if (id == null) return null;
		return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
	}, [node, id]);
}
function useCombineActivators(sensors, getSyntheticHandler) {
	return (0, import_react$27.useMemo)(() => sensors.reduce((accumulator, sensor) => {
		const { sensor: Sensor } = sensor;
		const sensorActivators = Sensor.activators.map((activator) => ({
			eventName: activator.eventName,
			handler: getSyntheticHandler(activator.handler, sensor)
		}));
		return [...accumulator, ...sensorActivators];
	}, []), [sensors, getSyntheticHandler]);
}
function useDroppableMeasuring(containers, _ref) {
	let { dragging, dependencies, config } = _ref;
	const [queue, setQueue] = (0, import_react$27.useState)(null);
	const { frequency, measure, strategy } = config;
	const containersRef = (0, import_react$27.useRef)(containers);
	const disabled = isDisabled();
	const disabledRef = useLatestValue(disabled);
	const measureDroppableContainers = (0, import_react$27.useCallback)(function(ids) {
		if (ids === void 0) ids = [];
		if (disabledRef.current) return;
		setQueue((value) => {
			if (value === null) return ids;
			return value.concat(ids.filter((id) => !value.includes(id)));
		});
	}, [disabledRef]);
	const timeoutId = (0, import_react$27.useRef)(null);
	const droppableRects = useLazyMemo((previousValue) => {
		if (disabled && !dragging) return defaultValue;
		if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
			const map = /* @__PURE__ */ new Map();
			for (let container of containers) {
				if (!container) continue;
				if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
					map.set(container.id, container.rect.current);
					continue;
				}
				const node = container.node.current;
				const rect = node ? new Rect(measure(node), node) : null;
				container.rect.current = rect;
				if (rect) map.set(container.id, rect);
			}
			return map;
		}
		return previousValue;
	}, [
		containers,
		queue,
		dragging,
		disabled,
		measure
	]);
	(0, import_react$27.useEffect)(() => {
		containersRef.current = containers;
	}, [containers]);
	(0, import_react$27.useEffect)(() => {
		if (disabled) return;
		measureDroppableContainers();
	}, [dragging, disabled]);
	(0, import_react$27.useEffect)(() => {
		if (queue && queue.length > 0) setQueue(null);
	}, [JSON.stringify(queue)]);
	(0, import_react$27.useEffect)(() => {
		if (disabled || typeof frequency !== "number" || timeoutId.current !== null) return;
		timeoutId.current = setTimeout(() => {
			measureDroppableContainers();
			timeoutId.current = null;
		}, frequency);
	}, [
		frequency,
		disabled,
		measureDroppableContainers,
		...dependencies
	]);
	return {
		droppableRects,
		measureDroppableContainers,
		measuringScheduled: queue != null
	};
	function isDisabled() {
		switch (strategy) {
			case MeasuringStrategy.Always: return false;
			case MeasuringStrategy.BeforeDragging: return dragging;
			default: return !dragging;
		}
	}
}
function useInitialValue(value, computeFn) {
	return useLazyMemo((previousValue) => {
		if (!value) return null;
		if (previousValue) return previousValue;
		return typeof computeFn === "function" ? computeFn(value) : value;
	}, [computeFn, value]);
}
function useInitialRect(node, measure) {
	return useInitialValue(node, measure);
}
/**
* Returns a new MutationObserver instance.
* If `MutationObserver` is undefined in the execution environment, returns `undefined`.
*/
function useMutationObserver(_ref) {
	let { callback, disabled } = _ref;
	const handleMutations = useEvent(callback);
	const mutationObserver = (0, import_react$27.useMemo)(() => {
		if (disabled || typeof window === "undefined" || typeof window.MutationObserver === "undefined") return;
		const { MutationObserver } = window;
		return new MutationObserver(handleMutations);
	}, [handleMutations, disabled]);
	(0, import_react$27.useEffect)(() => {
		return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
	}, [mutationObserver]);
	return mutationObserver;
}
/**
* Returns a new ResizeObserver instance bound to the `onResize` callback.
* If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
*/
function useResizeObserver(_ref) {
	let { callback, disabled } = _ref;
	const handleResize = useEvent(callback);
	const resizeObserver = (0, import_react$27.useMemo)(() => {
		if (disabled || typeof window === "undefined" || typeof window.ResizeObserver === "undefined") return;
		const { ResizeObserver } = window;
		return new ResizeObserver(handleResize);
	}, [disabled]);
	(0, import_react$27.useEffect)(() => {
		return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
	}, [resizeObserver]);
	return resizeObserver;
}
function defaultMeasure(element) {
	return new Rect(getClientRect(element), element);
}
function useRect(element, measure, fallbackRect) {
	if (measure === void 0) measure = defaultMeasure;
	const [rect, setRect] = (0, import_react$27.useState)(null);
	function measureRect() {
		setRect((currentRect) => {
			if (!element) return null;
			if (element.isConnected === false) {
				var _ref;
				return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
			}
			const newRect = measure(element);
			if (JSON.stringify(currentRect) === JSON.stringify(newRect)) return currentRect;
			return newRect;
		});
	}
	const mutationObserver = useMutationObserver({ callback(records) {
		if (!element) return;
		for (const record of records) {
			const { type, target } = record;
			if (type === "childList" && target instanceof HTMLElement && target.contains(element)) {
				measureRect();
				break;
			}
		}
	} });
	const resizeObserver = useResizeObserver({ callback: measureRect });
	useIsomorphicLayoutEffect$1(() => {
		measureRect();
		if (element) {
			resizeObserver?.observe(element);
			mutationObserver?.observe(document.body, {
				childList: true,
				subtree: true
			});
		} else {
			resizeObserver?.disconnect();
			mutationObserver?.disconnect();
		}
	}, [element]);
	return rect;
}
function useRectDelta(rect) {
	return getRectDelta(rect, useInitialValue(rect));
}
function useScrollableAncestors(node) {
	const previousNode = (0, import_react$27.useRef)(node);
	const ancestors = useLazyMemo((previousValue) => {
		if (!node) return defaultValue$1;
		if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) return previousValue;
		return getScrollableAncestors(node);
	}, [node]);
	(0, import_react$27.useEffect)(() => {
		previousNode.current = node;
	}, [node]);
	return ancestors;
}
function useScrollOffsets(elements) {
	const [scrollCoordinates, setScrollCoordinates] = (0, import_react$27.useState)(null);
	const prevElements = (0, import_react$27.useRef)(elements);
	const handleScroll = (0, import_react$27.useCallback)((event) => {
		const scrollingElement = getScrollableElement(event.target);
		if (!scrollingElement) return;
		setScrollCoordinates((scrollCoordinates) => {
			if (!scrollCoordinates) return null;
			scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
			return new Map(scrollCoordinates);
		});
	}, []);
	(0, import_react$27.useEffect)(() => {
		const previousElements = prevElements.current;
		if (elements !== previousElements) {
			cleanup(previousElements);
			const entries = elements.map((element) => {
				const scrollableElement = getScrollableElement(element);
				if (scrollableElement) {
					scrollableElement.addEventListener("scroll", handleScroll, { passive: true });
					return [scrollableElement, getScrollCoordinates(scrollableElement)];
				}
				return null;
			}).filter((entry) => entry != null);
			setScrollCoordinates(entries.length ? new Map(entries) : null);
			prevElements.current = elements;
		}
		return () => {
			cleanup(elements);
			cleanup(previousElements);
		};
		function cleanup(elements) {
			elements.forEach((element) => {
				getScrollableElement(element)?.removeEventListener("scroll", handleScroll);
			});
		}
	}, [handleScroll, elements]);
	return (0, import_react$27.useMemo)(() => {
		if (elements.length) return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => add(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
		return defaultCoordinates;
	}, [elements, scrollCoordinates]);
}
function useScrollOffsetsDelta(scrollOffsets, dependencies) {
	if (dependencies === void 0) dependencies = [];
	const initialScrollOffsets = (0, import_react$27.useRef)(null);
	(0, import_react$27.useEffect)(() => {
		initialScrollOffsets.current = null;
	}, dependencies);
	(0, import_react$27.useEffect)(() => {
		const hasScrollOffsets = scrollOffsets !== defaultCoordinates;
		if (hasScrollOffsets && !initialScrollOffsets.current) initialScrollOffsets.current = scrollOffsets;
		if (!hasScrollOffsets && initialScrollOffsets.current) initialScrollOffsets.current = null;
	}, [scrollOffsets]);
	return initialScrollOffsets.current ? subtract(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}
function useSensorSetup(sensors) {
	(0, import_react$27.useEffect)(() => {
		if (!canUseDOM) return;
		const teardownFns = sensors.map((_ref) => {
			let { sensor } = _ref;
			return sensor.setup == null ? void 0 : sensor.setup();
		});
		return () => {
			for (const teardown of teardownFns) teardown?.();
		};
	}, sensors.map((_ref2) => {
		let { sensor } = _ref2;
		return sensor;
	}));
}
function useSyntheticListeners(listeners, id) {
	return (0, import_react$27.useMemo)(() => {
		return listeners.reduce((acc, _ref) => {
			let { eventName, handler } = _ref;
			acc[eventName] = (event) => {
				handler(event, id);
			};
			return acc;
		}, {});
	}, [listeners, id]);
}
function useWindowRect(element) {
	return (0, import_react$27.useMemo)(() => element ? getWindowClientRect(element) : null, [element]);
}
function useRects(elements, measure) {
	if (measure === void 0) measure = getClientRect;
	const [firstElement] = elements;
	const windowRect = useWindowRect(firstElement ? getWindow(firstElement) : null);
	const [rects, setRects] = (0, import_react$27.useState)(defaultValue$2);
	function measureRects() {
		setRects(() => {
			if (!elements.length) return defaultValue$2;
			return elements.map((element) => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
		});
	}
	const resizeObserver = useResizeObserver({ callback: measureRects });
	useIsomorphicLayoutEffect$1(() => {
		resizeObserver?.disconnect();
		measureRects();
		elements.forEach((element) => resizeObserver == null ? void 0 : resizeObserver.observe(element));
	}, [elements]);
	return rects;
}
function getMeasurableNode(node) {
	if (!node) return null;
	if (node.children.length > 1) return node;
	const firstChild = node.children[0];
	return isHTMLElement$1(firstChild) ? firstChild : node;
}
function useDragOverlayMeasuring(_ref) {
	let { measure } = _ref;
	const [rect, setRect] = (0, import_react$27.useState)(null);
	const resizeObserver = useResizeObserver({ callback: (0, import_react$27.useCallback)((entries) => {
		for (const { target } of entries) if (isHTMLElement$1(target)) {
			setRect((rect) => {
				const newRect = measure(target);
				return rect ? {
					...rect,
					width: newRect.width,
					height: newRect.height
				} : newRect;
			});
			break;
		}
	}, [measure]) });
	const [nodeRef, setRef] = useNodeRef((0, import_react$27.useCallback)((element) => {
		const node = getMeasurableNode(element);
		resizeObserver?.disconnect();
		if (node) resizeObserver?.observe(node);
		setRect(node ? measure(node) : null);
	}, [measure, resizeObserver]));
	return (0, import_react$27.useMemo)(() => ({
		nodeRef,
		rect,
		setRef
	}), [
		rect,
		nodeRef,
		setRef
	]);
}
function getInitialState() {
	return {
		draggable: {
			active: null,
			initialCoordinates: {
				x: 0,
				y: 0
			},
			nodes: /* @__PURE__ */ new Map(),
			translate: {
				x: 0,
				y: 0
			}
		},
		droppable: { containers: new DroppableContainersMap() }
	};
}
function reducer(state, action) {
	switch (action.type) {
		case Action.DragStart: return {
			...state,
			draggable: {
				...state.draggable,
				initialCoordinates: action.initialCoordinates,
				active: action.active
			}
		};
		case Action.DragMove:
			if (state.draggable.active == null) return state;
			return {
				...state,
				draggable: {
					...state.draggable,
					translate: {
						x: action.coordinates.x - state.draggable.initialCoordinates.x,
						y: action.coordinates.y - state.draggable.initialCoordinates.y
					}
				}
			};
		case Action.DragEnd:
		case Action.DragCancel: return {
			...state,
			draggable: {
				...state.draggable,
				active: null,
				initialCoordinates: {
					x: 0,
					y: 0
				},
				translate: {
					x: 0,
					y: 0
				}
			}
		};
		case Action.RegisterDroppable: {
			const { element } = action;
			const { id } = element;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.set(id, element);
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		case Action.SetDroppableDisabled: {
			const { id, key, disabled } = action;
			const element = state.droppable.containers.get(id);
			if (!element || key !== element.key) return state;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.set(id, {
				...element,
				disabled
			});
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		case Action.UnregisterDroppable: {
			const { id, key } = action;
			const element = state.droppable.containers.get(id);
			if (!element || key !== element.key) return state;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.delete(id);
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		default: return state;
	}
}
function RestoreFocus(_ref) {
	let { disabled } = _ref;
	const { active, activatorEvent, draggableNodes } = (0, import_react$27.useContext)(InternalContext);
	const previousActivatorEvent = usePrevious(activatorEvent);
	const previousActiveId = usePrevious(active == null ? void 0 : active.id);
	(0, import_react$27.useEffect)(() => {
		if (disabled) return;
		if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
			if (!isKeyboardEvent(previousActivatorEvent)) return;
			if (document.activeElement === previousActivatorEvent.target) return;
			const draggableNode = draggableNodes.get(previousActiveId);
			if (!draggableNode) return;
			const { activatorNode, node } = draggableNode;
			if (!activatorNode.current && !node.current) return;
			requestAnimationFrame(() => {
				for (const element of [activatorNode.current, node.current]) {
					if (!element) continue;
					const focusableNode = findFirstFocusableNode(element);
					if (focusableNode) {
						focusableNode.focus();
						break;
					}
				}
			});
		}
	}, [
		activatorEvent,
		disabled,
		draggableNodes,
		previousActiveId,
		previousActivatorEvent
	]);
	return null;
}
function applyModifiers(modifiers, _ref) {
	let { transform, ...args } = _ref;
	return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
		return modifier({
			transform: accumulator,
			...args
		});
	}, transform) : transform;
}
function useMeasuringConfiguration(config) {
	return (0, import_react$27.useMemo)(() => ({
		draggable: {
			...defaultMeasuringConfiguration.draggable,
			...config == null ? void 0 : config.draggable
		},
		droppable: {
			...defaultMeasuringConfiguration.droppable,
			...config == null ? void 0 : config.droppable
		},
		dragOverlay: {
			...defaultMeasuringConfiguration.dragOverlay,
			...config == null ? void 0 : config.dragOverlay
		}
	}), [
		config == null ? void 0 : config.draggable,
		config == null ? void 0 : config.droppable,
		config == null ? void 0 : config.dragOverlay
	]);
}
function useLayoutShiftScrollCompensation(_ref) {
	let { activeNode, measure, initialRect, config = true } = _ref;
	const initialized = (0, import_react$27.useRef)(false);
	const { x, y } = typeof config === "boolean" ? {
		x: config,
		y: config
	} : config;
	useIsomorphicLayoutEffect$1(() => {
		if (!x && !y || !activeNode) {
			initialized.current = false;
			return;
		}
		if (initialized.current || !initialRect) return;
		const node = activeNode == null ? void 0 : activeNode.node.current;
		if (!node || node.isConnected === false) return;
		const rectDelta = getRectDelta(measure(node), initialRect);
		if (!x) rectDelta.x = 0;
		if (!y) rectDelta.y = 0;
		initialized.current = true;
		if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
			const firstScrollableAncestor = getFirstScrollableAncestor(node);
			if (firstScrollableAncestor) firstScrollableAncestor.scrollBy({
				top: rectDelta.y,
				left: rectDelta.x
			});
		}
	}, [
		activeNode,
		x,
		y,
		initialRect,
		measure
	]);
}
function useDraggable(_ref) {
	let { id, data, disabled = false, attributes } = _ref;
	const key = useUniqueId(ID_PREFIX);
	const { activators, activatorEvent, active, activeNodeRect, ariaDescribedById, draggableNodes, over } = (0, import_react$27.useContext)(InternalContext);
	const { role = defaultRole, roleDescription = "draggable", tabIndex = 0 } = attributes != null ? attributes : {};
	const isDragging = (active == null ? void 0 : active.id) === id;
	const transform = (0, import_react$27.useContext)(isDragging ? ActiveDraggableContext : NullContext);
	const [node, setNodeRef] = useNodeRef();
	const [activatorNode, setActivatorNodeRef] = useNodeRef();
	const listeners = useSyntheticListeners(activators, id);
	const dataRef = useLatestValue(data);
	useIsomorphicLayoutEffect$1(() => {
		draggableNodes.set(id, {
			id,
			key,
			node,
			activatorNode,
			data: dataRef
		});
		return () => {
			const node = draggableNodes.get(id);
			if (node && node.key === key) draggableNodes.delete(id);
		};
	}, [draggableNodes, id]);
	return {
		active,
		activatorEvent,
		activeNodeRect,
		attributes: (0, import_react$27.useMemo)(() => ({
			role,
			tabIndex,
			"aria-disabled": disabled,
			"aria-pressed": isDragging && role === defaultRole ? true : void 0,
			"aria-roledescription": roleDescription,
			"aria-describedby": ariaDescribedById.draggable
		}), [
			disabled,
			role,
			tabIndex,
			isDragging,
			roleDescription,
			ariaDescribedById.draggable
		]),
		isDragging,
		listeners: disabled ? void 0 : listeners,
		node,
		over,
		setNodeRef,
		setActivatorNodeRef,
		transform
	};
}
function useDndContext() {
	return (0, import_react$27.useContext)(PublicContext);
}
function useDroppable(_ref) {
	let { data, disabled = false, id, resizeObserverConfig } = _ref;
	const key = useUniqueId(ID_PREFIX$1);
	const { active, dispatch, over, measureDroppableContainers } = (0, import_react$27.useContext)(InternalContext);
	const previous = (0, import_react$27.useRef)({ disabled });
	const resizeObserverConnected = (0, import_react$27.useRef)(false);
	const rect = (0, import_react$27.useRef)(null);
	const callbackId = (0, import_react$27.useRef)(null);
	const { disabled: resizeObserverDisabled, updateMeasurementsFor, timeout: resizeObserverTimeout } = {
		...defaultResizeObserverConfig,
		...resizeObserverConfig
	};
	const ids = useLatestValue(updateMeasurementsFor != null ? updateMeasurementsFor : id);
	const resizeObserver = useResizeObserver({
		callback: (0, import_react$27.useCallback)(() => {
			if (!resizeObserverConnected.current) {
				resizeObserverConnected.current = true;
				return;
			}
			if (callbackId.current != null) clearTimeout(callbackId.current);
			callbackId.current = setTimeout(() => {
				measureDroppableContainers(Array.isArray(ids.current) ? ids.current : [ids.current]);
				callbackId.current = null;
			}, resizeObserverTimeout);
		}, [resizeObserverTimeout]),
		disabled: resizeObserverDisabled || !active
	});
	const [nodeRef, setNodeRef] = useNodeRef((0, import_react$27.useCallback)((newElement, previousElement) => {
		if (!resizeObserver) return;
		if (previousElement) {
			resizeObserver.unobserve(previousElement);
			resizeObserverConnected.current = false;
		}
		if (newElement) resizeObserver.observe(newElement);
	}, [resizeObserver]));
	const dataRef = useLatestValue(data);
	(0, import_react$27.useEffect)(() => {
		if (!resizeObserver || !nodeRef.current) return;
		resizeObserver.disconnect();
		resizeObserverConnected.current = false;
		resizeObserver.observe(nodeRef.current);
	}, [nodeRef, resizeObserver]);
	(0, import_react$27.useEffect)(() => {
		dispatch({
			type: Action.RegisterDroppable,
			element: {
				id,
				key,
				disabled,
				node: nodeRef,
				rect,
				data: dataRef
			}
		});
		return () => dispatch({
			type: Action.UnregisterDroppable,
			key,
			id
		});
	}, [id]);
	(0, import_react$27.useEffect)(() => {
		if (disabled !== previous.current.disabled) {
			dispatch({
				type: Action.SetDroppableDisabled,
				id,
				key,
				disabled
			});
			previous.current.disabled = disabled;
		}
	}, [
		id,
		key,
		disabled,
		dispatch
	]);
	return {
		active,
		rect,
		isOver: (over == null ? void 0 : over.id) === id,
		node: nodeRef,
		over,
		setNodeRef
	};
}
function AnimationManager(_ref) {
	let { animation, children } = _ref;
	const [clonedChildren, setClonedChildren] = (0, import_react$27.useState)(null);
	const [element, setElement] = (0, import_react$27.useState)(null);
	const previousChildren = usePrevious(children);
	if (!children && !clonedChildren && previousChildren) setClonedChildren(previousChildren);
	useIsomorphicLayoutEffect$1(() => {
		if (!element) return;
		const key = clonedChildren == null ? void 0 : clonedChildren.key;
		const id = clonedChildren == null ? void 0 : clonedChildren.props.id;
		if (key == null || id == null) {
			setClonedChildren(null);
			return;
		}
		Promise.resolve(animation(id, element)).then(() => {
			setClonedChildren(null);
		});
	}, [
		animation,
		clonedChildren,
		element
	]);
	return import_react$27.createElement(import_react$27.Fragment, null, children, clonedChildren ? (0, import_react$27.cloneElement)(clonedChildren, { ref: setElement }) : null);
}
function NullifiedContextProvider(_ref) {
	let { children } = _ref;
	return import_react$27.createElement(InternalContext.Provider, { value: defaultInternalContext }, import_react$27.createElement(ActiveDraggableContext.Provider, { value: defaultTransform }, children));
}
function useDropAnimation(_ref3) {
	let { config, draggableNodes, droppableContainers, measuringConfiguration } = _ref3;
	return useEvent((id, node) => {
		if (config === null) return;
		const activeDraggable = draggableNodes.get(id);
		if (!activeDraggable) return;
		const activeNode = activeDraggable.node.current;
		if (!activeNode) return;
		const measurableNode = getMeasurableNode(node);
		if (!measurableNode) return;
		const { transform } = getWindow(node).getComputedStyle(node);
		const parsedTransform = parseTransform(transform);
		if (!parsedTransform) return;
		const animation = typeof config === "function" ? config : createDefaultDropAnimation(config);
		scrollIntoViewIfNeeded(activeNode, measuringConfiguration.draggable.measure);
		return animation({
			active: {
				id,
				data: activeDraggable.data,
				node: activeNode,
				rect: measuringConfiguration.draggable.measure(activeNode)
			},
			draggableNodes,
			dragOverlay: {
				node,
				rect: measuringConfiguration.dragOverlay.measure(measurableNode)
			},
			droppableContainers,
			measuringConfiguration,
			transform: parsedTransform
		});
	});
}
function createDefaultDropAnimation(options) {
	const { duration, easing, sideEffects, keyframes } = {
		...defaultDropAnimationConfiguration,
		...options
	};
	return (_ref4) => {
		let { active, dragOverlay, transform, ...rest } = _ref4;
		if (!duration) return;
		const delta = {
			x: dragOverlay.rect.left - active.rect.left,
			y: dragOverlay.rect.top - active.rect.top
		};
		const scale = {
			scaleX: transform.scaleX !== 1 ? active.rect.width * transform.scaleX / dragOverlay.rect.width : 1,
			scaleY: transform.scaleY !== 1 ? active.rect.height * transform.scaleY / dragOverlay.rect.height : 1
		};
		const finalTransform = {
			x: transform.x - delta.x,
			y: transform.y - delta.y,
			...scale
		};
		const animationKeyframes = keyframes({
			...rest,
			active,
			dragOverlay,
			transform: {
				initial: transform,
				final: finalTransform
			}
		});
		const [firstKeyframe] = animationKeyframes;
		const lastKeyframe = animationKeyframes[animationKeyframes.length - 1];
		if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) return;
		const cleanup = sideEffects == null ? void 0 : sideEffects({
			active,
			dragOverlay,
			...rest
		});
		const animation = dragOverlay.node.animate(animationKeyframes, {
			duration,
			easing,
			fill: "forwards"
		});
		return new Promise((resolve) => {
			animation.onfinish = () => {
				cleanup?.();
				resolve();
			};
		});
	};
}
function useKey(id) {
	return (0, import_react$27.useMemo)(() => {
		if (id == null) return;
		key++;
		return key;
	}, [id]);
}
var import_react$27, import_react_dom, DndMonitorContext, defaultScreenReaderInstructions, defaultAnnouncements, Action, defaultCoordinates, closestCenter, rectIntersection, getAdjustedRect, defaultOptions$1, Direction, defaultThreshold, properties, Rect, Listeners, EventName, KeyboardCode, defaultKeyboardCodes, defaultKeyboardCoordinateGetter, KeyboardSensor, AbstractPointerSensor, events, PointerSensor, events$1, MouseButton, MouseSensor, events$2, TouchSensor, AutoScrollActivator, TraversalOrder, defaultScrollIntent, MeasuringStrategy, MeasuringFrequency, defaultValue, defaultValue$1, defaultValue$2, defaultSensors, defaultData, defaultMeasuringConfiguration, DroppableContainersMap, defaultPublicContext, defaultInternalContext, InternalContext, PublicContext, ActiveDraggableContext, Status, DndContext, NullContext, defaultRole, ID_PREFIX, ID_PREFIX$1, defaultResizeObserverConfig, defaultTransform, baseStyles, defaultTransition, PositionedOverlay, defaultDropAnimationSideEffects, defaultKeyframeResolver, defaultDropAnimationConfiguration, key, DragOverlay;
function init_core_esm() {
	return (init_core_esm = __esmMin((() => {
		import_react$27 = /* @__PURE__ */ __toESM(require_react());
		import_react_dom = require_react_dom();
		init_utilities_esm();
		init_accessibility_esm();
		DndMonitorContext = /*#__PURE__*/ (0, import_react$27.createContext)(null);
		defaultScreenReaderInstructions = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " };
		defaultAnnouncements = {
			onDragStart(_ref) {
				let { active } = _ref;
				return "Picked up draggable item " + active.id + ".";
			},
			onDragOver(_ref2) {
				let { active, over } = _ref2;
				if (over) return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
				return "Draggable item " + active.id + " is no longer over a droppable area.";
			},
			onDragEnd(_ref3) {
				let { active, over } = _ref3;
				if (over) return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
				return "Draggable item " + active.id + " was dropped.";
			},
			onDragCancel(_ref4) {
				let { active } = _ref4;
				return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
			}
		};
		(function(Action) {
			Action["DragStart"] = "dragStart";
			Action["DragMove"] = "dragMove";
			Action["DragEnd"] = "dragEnd";
			Action["DragCancel"] = "dragCancel";
			Action["DragOver"] = "dragOver";
			Action["RegisterDroppable"] = "registerDroppable";
			Action["SetDroppableDisabled"] = "setDroppableDisabled";
			Action["UnregisterDroppable"] = "unregisterDroppable";
		})(Action || (Action = {}));
		defaultCoordinates = /*#__PURE__*/ Object.freeze({
			x: 0,
			y: 0
		});
		closestCenter = (_ref) => {
			let { collisionRect, droppableRects, droppableContainers } = _ref;
			const centerRect = centerOfRectangle(collisionRect, collisionRect.left, collisionRect.top);
			const collisions = [];
			for (const droppableContainer of droppableContainers) {
				const { id } = droppableContainer;
				const rect = droppableRects.get(id);
				if (rect) {
					const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);
					collisions.push({
						id,
						data: {
							droppableContainer,
							value: distBetween
						}
					});
				}
			}
			return collisions.sort(sortCollisionsAsc);
		};
		rectIntersection = (_ref) => {
			let { collisionRect, droppableRects, droppableContainers } = _ref;
			const collisions = [];
			for (const droppableContainer of droppableContainers) {
				const { id } = droppableContainer;
				const rect = droppableRects.get(id);
				if (rect) {
					const intersectionRatio = getIntersectionRatio(rect, collisionRect);
					if (intersectionRatio > 0) collisions.push({
						id,
						data: {
							droppableContainer,
							value: intersectionRatio
						}
					});
				}
			}
			return collisions.sort(sortCollisionsDesc);
		};
		getAdjustedRect = /*#__PURE__*/ createRectAdjustmentFn(1);
		defaultOptions$1 = { ignoreTransform: false };
		(function(Direction) {
			Direction[Direction["Forward"] = 1] = "Forward";
			Direction[Direction["Backward"] = -1] = "Backward";
		})(Direction || (Direction = {}));
		defaultThreshold = {
			x: .2,
			y: .2
		};
		properties = [[
			"x",
			["left", "right"],
			getScrollXOffset
		], [
			"y",
			["top", "bottom"],
			getScrollYOffset
		]];
		Rect = class {
			constructor(rect, element) {
				this.rect = void 0;
				this.width = void 0;
				this.height = void 0;
				this.top = void 0;
				this.bottom = void 0;
				this.right = void 0;
				this.left = void 0;
				const scrollableAncestors = getScrollableAncestors(element);
				const scrollOffsets = getScrollOffsets(scrollableAncestors);
				this.rect = { ...rect };
				this.width = rect.width;
				this.height = rect.height;
				for (const [axis, keys, getScrollOffset] of properties) for (const key of keys) Object.defineProperty(this, key, {
					get: () => {
						const currentOffsets = getScrollOffset(scrollableAncestors);
						const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
						return this.rect[key] + scrollOffsetsDeltla;
					},
					enumerable: true
				});
				Object.defineProperty(this, "rect", { enumerable: false });
			}
		};
		Listeners = class {
			constructor(target) {
				this.target = void 0;
				this.listeners = [];
				this.removeAll = () => {
					this.listeners.forEach((listener) => {
						var _this$target;
						return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
					});
				};
				this.target = target;
			}
			add(eventName, handler, options) {
				var _this$target2;
				(_this$target2 = this.target) == null || _this$target2.addEventListener(eventName, handler, options);
				this.listeners.push([
					eventName,
					handler,
					options
				]);
			}
		};
		(function(EventName) {
			EventName["Click"] = "click";
			EventName["DragStart"] = "dragstart";
			EventName["Keydown"] = "keydown";
			EventName["ContextMenu"] = "contextmenu";
			EventName["Resize"] = "resize";
			EventName["SelectionChange"] = "selectionchange";
			EventName["VisibilityChange"] = "visibilitychange";
		})(EventName || (EventName = {}));
		(function(KeyboardCode) {
			KeyboardCode["Space"] = "Space";
			KeyboardCode["Down"] = "ArrowDown";
			KeyboardCode["Right"] = "ArrowRight";
			KeyboardCode["Left"] = "ArrowLeft";
			KeyboardCode["Up"] = "ArrowUp";
			KeyboardCode["Esc"] = "Escape";
			KeyboardCode["Enter"] = "Enter";
			KeyboardCode["Tab"] = "Tab";
		})(KeyboardCode || (KeyboardCode = {}));
		defaultKeyboardCodes = {
			start: [KeyboardCode.Space, KeyboardCode.Enter],
			cancel: [KeyboardCode.Esc],
			end: [
				KeyboardCode.Space,
				KeyboardCode.Enter,
				KeyboardCode.Tab
			]
		};
		defaultKeyboardCoordinateGetter = (event, _ref) => {
			let { currentCoordinates } = _ref;
			switch (event.code) {
				case KeyboardCode.Right: return {
					...currentCoordinates,
					x: currentCoordinates.x + 25
				};
				case KeyboardCode.Left: return {
					...currentCoordinates,
					x: currentCoordinates.x - 25
				};
				case KeyboardCode.Down: return {
					...currentCoordinates,
					y: currentCoordinates.y + 25
				};
				case KeyboardCode.Up: return {
					...currentCoordinates,
					y: currentCoordinates.y - 25
				};
			}
		};
		KeyboardSensor = class {
			constructor(props) {
				this.props = void 0;
				this.autoScrollEnabled = false;
				this.referenceCoordinates = void 0;
				this.listeners = void 0;
				this.windowListeners = void 0;
				this.props = props;
				const { event: { target } } = props;
				this.props = props;
				this.listeners = new Listeners(getOwnerDocument(target));
				this.windowListeners = new Listeners(getWindow(target));
				this.handleKeyDown = this.handleKeyDown.bind(this);
				this.handleCancel = this.handleCancel.bind(this);
				this.attach();
			}
			attach() {
				this.handleStart();
				this.windowListeners.add(EventName.Resize, this.handleCancel);
				this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
				setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
			}
			handleStart() {
				const { activeNode, onStart } = this.props;
				const node = activeNode.node.current;
				if (node) scrollIntoViewIfNeeded(node);
				onStart(defaultCoordinates);
			}
			handleKeyDown(event) {
				if (isKeyboardEvent(event)) {
					const { active, context, options } = this.props;
					const { keyboardCodes = defaultKeyboardCodes, coordinateGetter = defaultKeyboardCoordinateGetter, scrollBehavior = "smooth" } = options;
					const { code } = event;
					if (keyboardCodes.end.includes(code)) {
						this.handleEnd(event);
						return;
					}
					if (keyboardCodes.cancel.includes(code)) {
						this.handleCancel(event);
						return;
					}
					const { collisionRect } = context.current;
					const currentCoordinates = collisionRect ? {
						x: collisionRect.left,
						y: collisionRect.top
					} : defaultCoordinates;
					if (!this.referenceCoordinates) this.referenceCoordinates = currentCoordinates;
					const newCoordinates = coordinateGetter(event, {
						active,
						context: context.current,
						currentCoordinates
					});
					if (newCoordinates) {
						const coordinatesDelta = subtract(newCoordinates, currentCoordinates);
						const scrollDelta = {
							x: 0,
							y: 0
						};
						const { scrollableAncestors } = context.current;
						for (const scrollContainer of scrollableAncestors) {
							const direction = event.code;
							const { isTop, isRight, isLeft, isBottom, maxScroll, minScroll } = getScrollPosition(scrollContainer);
							const scrollElementRect = getScrollElementRect(scrollContainer);
							const clampedCoordinates = {
								x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
								y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
							};
							const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
							const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;
							if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
								const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
								const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;
								if (canScrollToNewCoordinates && !coordinatesDelta.y) {
									scrollContainer.scrollTo({
										left: newScrollCoordinates,
										behavior: scrollBehavior
									});
									return;
								}
								if (canScrollToNewCoordinates) scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
								else scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
								if (scrollDelta.x) scrollContainer.scrollBy({
									left: -scrollDelta.x,
									behavior: scrollBehavior
								});
								break;
							} else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
								const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
								const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;
								if (canScrollToNewCoordinates && !coordinatesDelta.x) {
									scrollContainer.scrollTo({
										top: newScrollCoordinates,
										behavior: scrollBehavior
									});
									return;
								}
								if (canScrollToNewCoordinates) scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
								else scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
								if (scrollDelta.y) scrollContainer.scrollBy({
									top: -scrollDelta.y,
									behavior: scrollBehavior
								});
								break;
							}
						}
						this.handleMove(event, add(subtract(newCoordinates, this.referenceCoordinates), scrollDelta));
					}
				}
			}
			handleMove(event, coordinates) {
				const { onMove } = this.props;
				event.preventDefault();
				onMove(coordinates);
			}
			handleEnd(event) {
				const { onEnd } = this.props;
				event.preventDefault();
				this.detach();
				onEnd();
			}
			handleCancel(event) {
				const { onCancel } = this.props;
				event.preventDefault();
				this.detach();
				onCancel();
			}
			detach() {
				this.listeners.removeAll();
				this.windowListeners.removeAll();
			}
		};
		KeyboardSensor.activators = [{
			eventName: "onKeyDown",
			handler: (event, _ref, _ref2) => {
				let { keyboardCodes = defaultKeyboardCodes, onActivation } = _ref;
				let { active } = _ref2;
				const { code } = event.nativeEvent;
				if (keyboardCodes.start.includes(code)) {
					const activator = active.activatorNode.current;
					if (activator && event.target !== activator) return false;
					event.preventDefault();
					onActivation?.({ event: event.nativeEvent });
					return true;
				}
				return false;
			}
		}];
		AbstractPointerSensor = class {
			constructor(props, events, listenerTarget) {
				var _getEventCoordinates;
				if (listenerTarget === void 0) listenerTarget = getEventListenerTarget(props.event.target);
				this.props = void 0;
				this.events = void 0;
				this.autoScrollEnabled = true;
				this.document = void 0;
				this.activated = false;
				this.initialCoordinates = void 0;
				this.timeoutId = null;
				this.listeners = void 0;
				this.documentListeners = void 0;
				this.windowListeners = void 0;
				this.props = props;
				this.events = events;
				const { event } = props;
				const { target } = event;
				this.props = props;
				this.events = events;
				this.document = getOwnerDocument(target);
				this.documentListeners = new Listeners(this.document);
				this.listeners = new Listeners(listenerTarget);
				this.windowListeners = new Listeners(getWindow(target));
				this.initialCoordinates = (_getEventCoordinates = getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
				this.handleStart = this.handleStart.bind(this);
				this.handleMove = this.handleMove.bind(this);
				this.handleEnd = this.handleEnd.bind(this);
				this.handleCancel = this.handleCancel.bind(this);
				this.handleKeydown = this.handleKeydown.bind(this);
				this.removeTextSelection = this.removeTextSelection.bind(this);
				this.attach();
			}
			attach() {
				const { events, props: { options: { activationConstraint, bypassActivationConstraint } } } = this;
				this.listeners.add(events.move.name, this.handleMove, { passive: false });
				this.listeners.add(events.end.name, this.handleEnd);
				if (events.cancel) this.listeners.add(events.cancel.name, this.handleCancel);
				this.windowListeners.add(EventName.Resize, this.handleCancel);
				this.windowListeners.add(EventName.DragStart, preventDefault);
				this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
				this.windowListeners.add(EventName.ContextMenu, preventDefault);
				this.documentListeners.add(EventName.Keydown, this.handleKeydown);
				if (activationConstraint) {
					if (bypassActivationConstraint != null && bypassActivationConstraint({
						event: this.props.event,
						activeNode: this.props.activeNode,
						options: this.props.options
					})) return this.handleStart();
					if (isDelayConstraint(activationConstraint)) {
						this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
						this.handlePending(activationConstraint);
						return;
					}
					if (isDistanceConstraint(activationConstraint)) {
						this.handlePending(activationConstraint);
						return;
					}
				}
				this.handleStart();
			}
			detach() {
				this.listeners.removeAll();
				this.windowListeners.removeAll();
				setTimeout(this.documentListeners.removeAll, 50);
				if (this.timeoutId !== null) {
					clearTimeout(this.timeoutId);
					this.timeoutId = null;
				}
			}
			handlePending(constraint, offset) {
				const { active, onPending } = this.props;
				onPending(active, constraint, this.initialCoordinates, offset);
			}
			handleStart() {
				const { initialCoordinates } = this;
				const { onStart } = this.props;
				if (initialCoordinates) {
					this.activated = true;
					this.documentListeners.add(EventName.Click, stopPropagation, { capture: true });
					this.removeTextSelection();
					this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
					onStart(initialCoordinates);
				}
			}
			handleMove(event) {
				var _getEventCoordinates2;
				const { activated, initialCoordinates, props } = this;
				const { onMove, options: { activationConstraint } } = props;
				if (!initialCoordinates) return;
				const coordinates = (_getEventCoordinates2 = getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
				const delta = subtract(initialCoordinates, coordinates);
				if (!activated && activationConstraint) {
					if (isDistanceConstraint(activationConstraint)) {
						if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) return this.handleCancel();
						if (hasExceededDistance(delta, activationConstraint.distance)) return this.handleStart();
					}
					if (isDelayConstraint(activationConstraint)) {
						if (hasExceededDistance(delta, activationConstraint.tolerance)) return this.handleCancel();
					}
					this.handlePending(activationConstraint, delta);
					return;
				}
				if (event.cancelable) event.preventDefault();
				onMove(coordinates);
			}
			handleEnd() {
				const { onAbort, onEnd } = this.props;
				this.detach();
				if (!this.activated) onAbort(this.props.active);
				onEnd();
			}
			handleCancel() {
				const { onAbort, onCancel } = this.props;
				this.detach();
				if (!this.activated) onAbort(this.props.active);
				onCancel();
			}
			handleKeydown(event) {
				if (event.code === KeyboardCode.Esc) this.handleCancel();
			}
			removeTextSelection() {
				var _this$document$getSel;
				(_this$document$getSel = this.document.getSelection()) == null || _this$document$getSel.removeAllRanges();
			}
		};
		events = {
			cancel: { name: "pointercancel" },
			move: { name: "pointermove" },
			end: { name: "pointerup" }
		};
		PointerSensor = class extends AbstractPointerSensor {
			constructor(props) {
				const { event } = props;
				const listenerTarget = getOwnerDocument(event.target);
				super(props, events, listenerTarget);
			}
		};
		PointerSensor.activators = [{
			eventName: "onPointerDown",
			handler: (_ref, _ref2) => {
				let { nativeEvent: event } = _ref;
				let { onActivation } = _ref2;
				if (!event.isPrimary || event.button !== 0) return false;
				onActivation?.({ event });
				return true;
			}
		}];
		events$1 = {
			move: { name: "mousemove" },
			end: { name: "mouseup" }
		};
		(function(MouseButton) {
			MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
		})(MouseButton || (MouseButton = {}));
		MouseSensor = class extends AbstractPointerSensor {
			constructor(props) {
				super(props, events$1, getOwnerDocument(props.event.target));
			}
		};
		MouseSensor.activators = [{
			eventName: "onMouseDown",
			handler: (_ref, _ref2) => {
				let { nativeEvent: event } = _ref;
				let { onActivation } = _ref2;
				if (event.button === MouseButton.RightClick) return false;
				onActivation?.({ event });
				return true;
			}
		}];
		events$2 = {
			cancel: { name: "touchcancel" },
			move: { name: "touchmove" },
			end: { name: "touchend" }
		};
		TouchSensor = class extends AbstractPointerSensor {
			constructor(props) {
				super(props, events$2);
			}
			static setup() {
				window.addEventListener(events$2.move.name, noop, {
					capture: false,
					passive: false
				});
				return function teardown() {
					window.removeEventListener(events$2.move.name, noop);
				};
				function noop() {}
			}
		};
		TouchSensor.activators = [{
			eventName: "onTouchStart",
			handler: (_ref, _ref2) => {
				let { nativeEvent: event } = _ref;
				let { onActivation } = _ref2;
				const { touches } = event;
				if (touches.length > 1) return false;
				onActivation?.({ event });
				return true;
			}
		}];
		(function(AutoScrollActivator) {
			AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
			AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
		})(AutoScrollActivator || (AutoScrollActivator = {}));
		(function(TraversalOrder) {
			TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
			TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
		})(TraversalOrder || (TraversalOrder = {}));
		defaultScrollIntent = {
			x: {
				[Direction.Backward]: false,
				[Direction.Forward]: false
			},
			y: {
				[Direction.Backward]: false,
				[Direction.Forward]: false
			}
		};
		(function(MeasuringStrategy) {
			MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
			MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
			MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
		})(MeasuringStrategy || (MeasuringStrategy = {}));
		(function(MeasuringFrequency) {
			MeasuringFrequency["Optimized"] = "optimized";
		})(MeasuringFrequency || (MeasuringFrequency = {}));
		defaultValue = /*#__PURE__*/ new Map();
		defaultValue$1 = [];
		defaultValue$2 = [];
		defaultSensors = [{
			sensor: PointerSensor,
			options: {}
		}, {
			sensor: KeyboardSensor,
			options: {}
		}];
		defaultData = { current: {} };
		defaultMeasuringConfiguration = {
			draggable: { measure: getTransformAgnosticClientRect },
			droppable: {
				measure: getTransformAgnosticClientRect,
				strategy: MeasuringStrategy.WhileDragging,
				frequency: MeasuringFrequency.Optimized
			},
			dragOverlay: { measure: getClientRect }
		};
		DroppableContainersMap = class extends Map {
			get(id) {
				var _super$get;
				return id != null ? (_super$get = super.get(id)) != null ? _super$get : void 0 : void 0;
			}
			toArray() {
				return Array.from(this.values());
			}
			getEnabled() {
				return this.toArray().filter((_ref) => {
					let { disabled } = _ref;
					return !disabled;
				});
			}
			getNodeFor(id) {
				var _this$get$node$curren, _this$get;
				return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : void 0;
			}
		};
		defaultPublicContext = {
			activatorEvent: null,
			active: null,
			activeNode: null,
			activeNodeRect: null,
			collisions: null,
			containerNodeRect: null,
			draggableNodes: /*#__PURE__*/ new Map(),
			droppableRects: /*#__PURE__*/ new Map(),
			droppableContainers: /*#__PURE__*/ new DroppableContainersMap(),
			over: null,
			dragOverlay: {
				nodeRef: { current: null },
				rect: null,
				setRef: noop
			},
			scrollableAncestors: [],
			scrollableAncestorRects: [],
			measuringConfiguration: defaultMeasuringConfiguration,
			measureDroppableContainers: noop,
			windowRect: null,
			measuringScheduled: false
		};
		defaultInternalContext = {
			activatorEvent: null,
			activators: [],
			active: null,
			activeNodeRect: null,
			ariaDescribedById: { draggable: "" },
			dispatch: noop,
			draggableNodes: /*#__PURE__*/ new Map(),
			over: null,
			measureDroppableContainers: noop
		};
		InternalContext = /*#__PURE__*/ (0, import_react$27.createContext)(defaultInternalContext);
		PublicContext = /*#__PURE__*/ (0, import_react$27.createContext)(defaultPublicContext);
		ActiveDraggableContext = /*#__PURE__*/ (0, import_react$27.createContext)({
			...defaultCoordinates,
			scaleX: 1,
			scaleY: 1
		});
		(function(Status) {
			Status[Status["Uninitialized"] = 0] = "Uninitialized";
			Status[Status["Initializing"] = 1] = "Initializing";
			Status[Status["Initialized"] = 2] = "Initialized";
		})(Status || (Status = {}));
		DndContext = /*#__PURE__*/ (0, import_react$27.memo)(function DndContext(_ref) {
			var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;
			let { id, accessibility, autoScroll = true, children, sensors = defaultSensors, collisionDetection = rectIntersection, measuring, modifiers, ...props } = _ref;
			const [state, dispatch] = (0, import_react$27.useReducer)(reducer, void 0, getInitialState);
			const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
			const [status, setStatus] = (0, import_react$27.useState)(Status.Uninitialized);
			const isInitialized = status === Status.Initialized;
			const { draggable: { active: activeId, nodes: draggableNodes, translate }, droppable: { containers: droppableContainers } } = state;
			const node = activeId != null ? draggableNodes.get(activeId) : null;
			const activeRects = (0, import_react$27.useRef)({
				initial: null,
				translated: null
			});
			const active = (0, import_react$27.useMemo)(() => {
				var _node$data;
				return activeId != null ? {
					id: activeId,
					data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
					rect: activeRects
				} : null;
			}, [activeId, node]);
			const activeRef = (0, import_react$27.useRef)(null);
			const [activeSensor, setActiveSensor] = (0, import_react$27.useState)(null);
			const [activatorEvent, setActivatorEvent] = (0, import_react$27.useState)(null);
			const latestProps = useLatestValue(props, Object.values(props));
			const draggableDescribedById = useUniqueId("DndDescribedBy", id);
			const enabledDroppableContainers = (0, import_react$27.useMemo)(() => droppableContainers.getEnabled(), [droppableContainers]);
			const measuringConfiguration = useMeasuringConfiguration(measuring);
			const { droppableRects, measureDroppableContainers, measuringScheduled } = useDroppableMeasuring(enabledDroppableContainers, {
				dragging: isInitialized,
				dependencies: [translate.x, translate.y],
				config: measuringConfiguration.droppable
			});
			const activeNode = useCachedNode(draggableNodes, activeId);
			const activationCoordinates = (0, import_react$27.useMemo)(() => activatorEvent ? getEventCoordinates(activatorEvent) : null, [activatorEvent]);
			const autoScrollOptions = getAutoScrollerOptions();
			const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
			useLayoutShiftScrollCompensation({
				activeNode: activeId != null ? draggableNodes.get(activeId) : null,
				config: autoScrollOptions.layoutShiftCompensation,
				initialRect: initialActiveNodeRect,
				measure: measuringConfiguration.draggable.measure
			});
			const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
			const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
			const sensorContext = (0, import_react$27.useRef)({
				activatorEvent: null,
				active: null,
				activeNode,
				collisionRect: null,
				collisions: null,
				droppableRects,
				draggableNodes,
				draggingNode: null,
				draggingNodeRect: null,
				droppableContainers,
				over: null,
				scrollableAncestors: [],
				scrollAdjustedTranslate: null
			});
			const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
			const dragOverlay = useDragOverlayMeasuring({ measure: measuringConfiguration.dragOverlay.measure });
			const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
			const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
			const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect);
			const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect);
			const windowRect = useWindowRect(draggingNode ? getWindow(draggingNode) : null);
			const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
			const scrollableAncestorRects = useRects(scrollableAncestors);
			const modifiedTranslate = applyModifiers(modifiers, {
				transform: {
					x: translate.x - nodeRectDelta.x,
					y: translate.y - nodeRectDelta.y,
					scaleX: 1,
					scaleY: 1
				},
				activatorEvent,
				active,
				activeNodeRect,
				containerNodeRect,
				draggingNodeRect,
				over: sensorContext.current.over,
				overlayNodeRect: dragOverlay.rect,
				scrollableAncestors,
				scrollableAncestorRects,
				windowRect
			});
			const pointerCoordinates = activationCoordinates ? add(activationCoordinates, translate) : null;
			const scrollOffsets = useScrollOffsets(scrollableAncestors);
			const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets);
			const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
			const scrollAdjustedTranslate = add(modifiedTranslate, scrollAdjustment);
			const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
			const collisions = active && collisionRect ? collisionDetection({
				active,
				collisionRect,
				droppableRects,
				droppableContainers: enabledDroppableContainers,
				pointerCoordinates
			}) : null;
			const overId = getFirstCollision(collisions, "id");
			const [over, setOver] = (0, import_react$27.useState)(null);
			const transform = adjustScale(usesDragOverlay ? modifiedTranslate : add(modifiedTranslate, activeNodeScrollDelta), (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
			const activeSensorRef = (0, import_react$27.useRef)(null);
			const instantiateSensor = (0, import_react$27.useCallback)((event, _ref2) => {
				let { sensor: Sensor, options } = _ref2;
				if (activeRef.current == null) return;
				const activeNode = draggableNodes.get(activeRef.current);
				if (!activeNode) return;
				const activatorEvent = event.nativeEvent;
				const sensorInstance = new Sensor({
					active: activeRef.current,
					activeNode,
					event: activatorEvent,
					options,
					context: sensorContext,
					onAbort(id) {
						if (!draggableNodes.get(id)) return;
						const { onDragAbort } = latestProps.current;
						const event = { id };
						onDragAbort?.(event);
						dispatchMonitorEvent({
							type: "onDragAbort",
							event
						});
					},
					onPending(id, constraint, initialCoordinates, offset) {
						if (!draggableNodes.get(id)) return;
						const { onDragPending } = latestProps.current;
						const event = {
							id,
							constraint,
							initialCoordinates,
							offset
						};
						onDragPending?.(event);
						dispatchMonitorEvent({
							type: "onDragPending",
							event
						});
					},
					onStart(initialCoordinates) {
						const id = activeRef.current;
						if (id == null) return;
						const draggableNode = draggableNodes.get(id);
						if (!draggableNode) return;
						const { onDragStart } = latestProps.current;
						const event = {
							activatorEvent,
							active: {
								id,
								data: draggableNode.data,
								rect: activeRects
							}
						};
						(0, import_react_dom.unstable_batchedUpdates)(() => {
							onDragStart?.(event);
							setStatus(Status.Initializing);
							dispatch({
								type: Action.DragStart,
								initialCoordinates,
								active: id
							});
							dispatchMonitorEvent({
								type: "onDragStart",
								event
							});
							setActiveSensor(activeSensorRef.current);
							setActivatorEvent(activatorEvent);
						});
					},
					onMove(coordinates) {
						dispatch({
							type: Action.DragMove,
							coordinates
						});
					},
					onEnd: createHandler(Action.DragEnd),
					onCancel: createHandler(Action.DragCancel)
				});
				activeSensorRef.current = sensorInstance;
				function createHandler(type) {
					return async function handler() {
						const { active, collisions, over, scrollAdjustedTranslate } = sensorContext.current;
						let event = null;
						if (active && scrollAdjustedTranslate) {
							const { cancelDrop } = latestProps.current;
							event = {
								activatorEvent,
								active,
								collisions,
								delta: scrollAdjustedTranslate,
								over
							};
							if (type === Action.DragEnd && typeof cancelDrop === "function") {
								if (await Promise.resolve(cancelDrop(event))) type = Action.DragCancel;
							}
						}
						activeRef.current = null;
						(0, import_react_dom.unstable_batchedUpdates)(() => {
							dispatch({ type });
							setStatus(Status.Uninitialized);
							setOver(null);
							setActiveSensor(null);
							setActivatorEvent(null);
							activeSensorRef.current = null;
							const eventName = type === Action.DragEnd ? "onDragEnd" : "onDragCancel";
							if (event) {
								const handler = latestProps.current[eventName];
								handler?.(event);
								dispatchMonitorEvent({
									type: eventName,
									event
								});
							}
						});
					};
				}
			}, [draggableNodes]);
			const activators = useCombineActivators(sensors, (0, import_react$27.useCallback)((handler, sensor) => {
				return (event, active) => {
					const nativeEvent = event.nativeEvent;
					const activeDraggableNode = draggableNodes.get(active);
					if (activeRef.current !== null || !activeDraggableNode || nativeEvent.dndKit || nativeEvent.defaultPrevented) return;
					const activationContext = { active: activeDraggableNode };
					if (handler(event, sensor.options, activationContext) === true) {
						nativeEvent.dndKit = { capturedBy: sensor.sensor };
						activeRef.current = active;
						instantiateSensor(event, sensor);
					}
				};
			}, [draggableNodes, instantiateSensor]));
			useSensorSetup(sensors);
			useIsomorphicLayoutEffect$1(() => {
				if (activeNodeRect && status === Status.Initializing) setStatus(Status.Initialized);
			}, [activeNodeRect, status]);
			(0, import_react$27.useEffect)(() => {
				const { onDragMove } = latestProps.current;
				const { active, activatorEvent, collisions, over } = sensorContext.current;
				if (!active || !activatorEvent) return;
				const event = {
					active,
					activatorEvent,
					collisions,
					delta: {
						x: scrollAdjustedTranslate.x,
						y: scrollAdjustedTranslate.y
					},
					over
				};
				(0, import_react_dom.unstable_batchedUpdates)(() => {
					onDragMove?.(event);
					dispatchMonitorEvent({
						type: "onDragMove",
						event
					});
				});
			}, [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
			(0, import_react$27.useEffect)(() => {
				const { active, activatorEvent, collisions, droppableContainers, scrollAdjustedTranslate } = sensorContext.current;
				if (!active || activeRef.current == null || !activatorEvent || !scrollAdjustedTranslate) return;
				const { onDragOver } = latestProps.current;
				const overContainer = droppableContainers.get(overId);
				const over = overContainer && overContainer.rect.current ? {
					id: overContainer.id,
					rect: overContainer.rect.current,
					data: overContainer.data,
					disabled: overContainer.disabled
				} : null;
				const event = {
					active,
					activatorEvent,
					collisions,
					delta: {
						x: scrollAdjustedTranslate.x,
						y: scrollAdjustedTranslate.y
					},
					over
				};
				(0, import_react_dom.unstable_batchedUpdates)(() => {
					setOver(over);
					onDragOver?.(event);
					dispatchMonitorEvent({
						type: "onDragOver",
						event
					});
				});
			}, [overId]);
			useIsomorphicLayoutEffect$1(() => {
				sensorContext.current = {
					activatorEvent,
					active,
					activeNode,
					collisionRect,
					collisions,
					droppableRects,
					draggableNodes,
					draggingNode,
					draggingNodeRect,
					droppableContainers,
					over,
					scrollableAncestors,
					scrollAdjustedTranslate
				};
				activeRects.current = {
					initial: draggingNodeRect,
					translated: collisionRect
				};
			}, [
				active,
				activeNode,
				collisions,
				collisionRect,
				draggableNodes,
				draggingNode,
				draggingNodeRect,
				droppableRects,
				droppableContainers,
				over,
				scrollableAncestors,
				scrollAdjustedTranslate
			]);
			useAutoScroller({
				...autoScrollOptions,
				delta: translate,
				draggingRect: collisionRect,
				pointerCoordinates,
				scrollableAncestors,
				scrollableAncestorRects
			});
			const publicContext = (0, import_react$27.useMemo)(() => {
				return {
					active,
					activeNode,
					activeNodeRect,
					activatorEvent,
					collisions,
					containerNodeRect,
					dragOverlay,
					draggableNodes,
					droppableContainers,
					droppableRects,
					over,
					measureDroppableContainers,
					scrollableAncestors,
					scrollableAncestorRects,
					measuringConfiguration,
					measuringScheduled,
					windowRect
				};
			}, [
				active,
				activeNode,
				activeNodeRect,
				activatorEvent,
				collisions,
				containerNodeRect,
				dragOverlay,
				draggableNodes,
				droppableContainers,
				droppableRects,
				over,
				measureDroppableContainers,
				scrollableAncestors,
				scrollableAncestorRects,
				measuringConfiguration,
				measuringScheduled,
				windowRect
			]);
			const internalContext = (0, import_react$27.useMemo)(() => {
				return {
					activatorEvent,
					activators,
					active,
					activeNodeRect,
					ariaDescribedById: { draggable: draggableDescribedById },
					dispatch,
					draggableNodes,
					over,
					measureDroppableContainers
				};
			}, [
				activatorEvent,
				activators,
				active,
				activeNodeRect,
				dispatch,
				draggableDescribedById,
				draggableNodes,
				over,
				measureDroppableContainers
			]);
			return import_react$27.createElement(DndMonitorContext.Provider, { value: registerMonitorListener }, import_react$27.createElement(InternalContext.Provider, { value: internalContext }, import_react$27.createElement(PublicContext.Provider, { value: publicContext }, import_react$27.createElement(ActiveDraggableContext.Provider, { value: transform }, children)), import_react$27.createElement(RestoreFocus, { disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false })), import_react$27.createElement(Accessibility, {
				...accessibility,
				hiddenTextDescribedById: draggableDescribedById
			}));
			function getAutoScrollerOptions() {
				const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
				const autoScrollGloballyDisabled = typeof autoScroll === "object" ? autoScroll.enabled === false : autoScroll === false;
				const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;
				if (typeof autoScroll === "object") return {
					...autoScroll,
					enabled
				};
				return { enabled };
			}
		});
		NullContext = /*#__PURE__*/ (0, import_react$27.createContext)(null);
		defaultRole = "button";
		ID_PREFIX = "Draggable";
		ID_PREFIX$1 = "Droppable";
		defaultResizeObserverConfig = { timeout: 25 };
		defaultTransform = {
			x: 0,
			y: 0,
			scaleX: 1,
			scaleY: 1
		};
		baseStyles = {
			position: "fixed",
			touchAction: "none"
		};
		defaultTransition = (activatorEvent) => {
			return isKeyboardEvent(activatorEvent) ? "transform 250ms ease" : void 0;
		};
		PositionedOverlay = /*#__PURE__*/ (0, import_react$27.forwardRef)((_ref, ref) => {
			let { as, activatorEvent, adjustScale, children, className, rect, style, transform, transition = defaultTransition } = _ref;
			if (!rect) return null;
			const scaleAdjustedTransform = adjustScale ? transform : {
				...transform,
				scaleX: 1,
				scaleY: 1
			};
			const styles = {
				...baseStyles,
				width: rect.width,
				height: rect.height,
				top: rect.top,
				left: rect.left,
				transform: CSS.Transform.toString(scaleAdjustedTransform),
				transformOrigin: adjustScale && activatorEvent ? getRelativeTransformOrigin(activatorEvent, rect) : void 0,
				transition: typeof transition === "function" ? transition(activatorEvent) : transition,
				...style
			};
			return import_react$27.createElement(as, {
				className,
				style: styles,
				ref
			}, children);
		});
		defaultDropAnimationSideEffects = (options) => (_ref) => {
			let { active, dragOverlay } = _ref;
			const originalStyles = {};
			const { styles, className } = options;
			if (styles != null && styles.active) for (const [key, value] of Object.entries(styles.active)) {
				if (value === void 0) continue;
				originalStyles[key] = active.node.style.getPropertyValue(key);
				active.node.style.setProperty(key, value);
			}
			if (styles != null && styles.dragOverlay) for (const [key, value] of Object.entries(styles.dragOverlay)) {
				if (value === void 0) continue;
				dragOverlay.node.style.setProperty(key, value);
			}
			if (className != null && className.active) active.node.classList.add(className.active);
			if (className != null && className.dragOverlay) dragOverlay.node.classList.add(className.dragOverlay);
			return function cleanup() {
				for (const [key, value] of Object.entries(originalStyles)) active.node.style.setProperty(key, value);
				if (className != null && className.active) active.node.classList.remove(className.active);
			};
		};
		defaultKeyframeResolver = (_ref2) => {
			let { transform: { initial, final } } = _ref2;
			return [{ transform: CSS.Transform.toString(initial) }, { transform: CSS.Transform.toString(final) }];
		};
		defaultDropAnimationConfiguration = {
			duration: 250,
			easing: "ease",
			keyframes: defaultKeyframeResolver,
			sideEffects: /*#__PURE__*/ defaultDropAnimationSideEffects({ styles: { active: { opacity: "0" } } })
		};
		key = 0;
		DragOverlay = /*#__PURE__*/ import_react$27.memo((_ref) => {
			let { adjustScale = false, children, dropAnimation: dropAnimationConfig, style, transition, modifiers, wrapperElement = "div", className, zIndex = 999 } = _ref;
			const { activatorEvent, active, activeNodeRect, containerNodeRect, draggableNodes, droppableContainers, dragOverlay, over, measuringConfiguration, scrollableAncestors, scrollableAncestorRects, windowRect } = useDndContext();
			const transform = (0, import_react$27.useContext)(ActiveDraggableContext);
			const key = useKey(active == null ? void 0 : active.id);
			const modifiedTransform = applyModifiers(modifiers, {
				activatorEvent,
				active,
				activeNodeRect,
				containerNodeRect,
				draggingNodeRect: dragOverlay.rect,
				over,
				overlayNodeRect: dragOverlay.rect,
				scrollableAncestors,
				scrollableAncestorRects,
				transform,
				windowRect
			});
			const initialRect = useInitialValue(activeNodeRect);
			const dropAnimation = useDropAnimation({
				config: dropAnimationConfig,
				draggableNodes,
				droppableContainers,
				measuringConfiguration
			});
			const ref = initialRect ? dragOverlay.setRef : void 0;
			return import_react$27.createElement(NullifiedContextProvider, null, import_react$27.createElement(AnimationManager, { animation: dropAnimation }, active && key ? import_react$27.createElement(PositionedOverlay, {
				key,
				id: active.id,
				ref,
				as: wrapperElement,
				activatorEvent,
				adjustScale,
				className,
				transition,
				rect: initialRect,
				style: {
					zIndex,
					...style
				},
				transform: modifiedTransform
			}, children) : null));
		});
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/lib/label.ts
/** Simple utility to convert camelCase object names to title case (Camel Case) for default card titles.
*  It also strips common prefixes and suffixes, e.g. fieldId -> Field, isActive → Active, itemType → Type, entityName → Name.
*  Stripping happens after splitting camelCase, so e.g. userId becomes User Id → User and solid becomes Solid (not Sol).
*/
function label(title, name) {
	return title ?? (typeof name === "string" ? name?.split(".").pop().replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^(is|has|can|should|field)?(.*?)(Id)?$/i, "$2").trim().replace(/\b\w/g, (c) => c.toUpperCase()) : name);
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/react-hook-form@7.72.0_react@19.2.4/node_modules/react-hook-form/dist/index.esm.mjs
function cloneObject(data) {
	if (data instanceof Date) return new Date(data);
	const isFileListInstance = typeof FileList !== "undefined" && data instanceof FileList;
	if (isWeb && (data instanceof Blob || isFileListInstance)) return data;
	const isArray = Array.isArray(data);
	if (!isArray && !(isObject(data) && isPlainObject(data))) return data;
	const copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
	for (const key in data) if (Object.prototype.hasOwnProperty.call(data, key)) copy[key] = cloneObject(data[key]);
	return copy;
}
/**
* This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
*
* @remarks
* [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
*
* @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
*
* @example
* ```tsx
* function App() {
*   const { register, handleSubmit, control } = useForm({
*     defaultValues: {
*     firstName: "firstName"
*   }});
*   const { dirtyFields } = useFormState({
*     control
*   });
*   const onSubmit = (data) => console.log(data);
*
*   return (
*     <form onSubmit={handleSubmit(onSubmit)}>
*       <input {...register("firstName")} placeholder="First Name" />
*       {dirtyFields.firstName && <p>Field is dirty.</p>}
*       <input type="submit" />
*     </form>
*   );
* }
* ```
*/
function useFormState(props) {
	const formControl = useFormControlContext();
	const { control = formControl, disabled, name, exact } = props || {};
	const [formState, updateFormState] = import_react$26.useState(control._formState);
	const _localProxyFormState = import_react$26.useRef({
		isDirty: false,
		isLoading: false,
		dirtyFields: false,
		touchedFields: false,
		validatingFields: false,
		isValidating: false,
		isValid: false,
		errors: false
	});
	useIsomorphicLayoutEffect(() => control._subscribe({
		name,
		formState: _localProxyFormState.current,
		exact,
		callback: (formState) => {
			!disabled && updateFormState({
				...control._formState,
				...formState
			});
		}
	}), [
		name,
		disabled,
		exact
	]);
	import_react$26.useEffect(() => {
		_localProxyFormState.current.isValid && control._setValid(true);
	}, [control]);
	return import_react$26.useMemo(() => getProxyFormState(formState, control, _localProxyFormState.current, false), [formState, control]);
}
function deepEqual(object1, object2, _internal_visited = /* @__PURE__ */ new WeakSet()) {
	if (isPrimitive(object1) || isPrimitive(object2)) return Object.is(object1, object2);
	if (isDateObject(object1) && isDateObject(object2)) return Object.is(object1.getTime(), object2.getTime());
	const keys1 = Object.keys(object1);
	const keys2 = Object.keys(object2);
	if (keys1.length !== keys2.length) return false;
	if (_internal_visited.has(object1) || _internal_visited.has(object2)) return true;
	_internal_visited.add(object1);
	_internal_visited.add(object2);
	for (const key of keys1) {
		const val1 = object1[key];
		if (!keys2.includes(key)) return false;
		if (key !== "ref") {
			const val2 = object2[key];
			if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2, _internal_visited) : !Object.is(val1, val2)) return false;
		}
	}
	return true;
}
/**
* Custom hook to subscribe to field change and isolate re-rendering at the component level.
*
* @remarks
*
* [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
*
* @example
* ```tsx
* const { control } = useForm();
* const values = useWatch({
*   name: "fieldName"
*   control,
* })
* ```
*/
function useWatch(props) {
	const formControl = useFormControlContext();
	const { control = formControl, name, defaultValue, disabled, exact, compute } = props || {};
	const _defaultValue = import_react$26.useRef(defaultValue);
	const _compute = import_react$26.useRef(compute);
	const _computeFormValues = import_react$26.useRef(void 0);
	const _prevControl = import_react$26.useRef(control);
	const _prevName = import_react$26.useRef(name);
	_compute.current = compute;
	const [value, updateValue] = import_react$26.useState(() => {
		const defaultValue = control._getWatch(name, _defaultValue.current);
		return _compute.current ? _compute.current(defaultValue) : defaultValue;
	});
	const getCurrentOutput = import_react$26.useCallback((values) => {
		const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
		return _compute.current ? _compute.current(formValues) : formValues;
	}, [
		control._formValues,
		control._names,
		name
	]);
	const refreshValue = import_react$26.useCallback((values) => {
		if (!disabled) {
			const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
			if (_compute.current) {
				const computedFormValues = _compute.current(formValues);
				if (!deepEqual(computedFormValues, _computeFormValues.current)) {
					updateValue(computedFormValues);
					_computeFormValues.current = computedFormValues;
				}
			} else updateValue(formValues);
		}
	}, [
		control._formValues,
		control._names,
		disabled,
		name
	]);
	useIsomorphicLayoutEffect(() => {
		if (_prevControl.current !== control || !deepEqual(_prevName.current, name)) {
			_prevControl.current = control;
			_prevName.current = name;
			refreshValue();
		}
		return control._subscribe({
			name,
			formState: { values: true },
			exact,
			callback: (formState) => {
				refreshValue(formState.values);
			}
		});
	}, [
		control,
		exact,
		name,
		refreshValue
	]);
	import_react$26.useEffect(() => control._removeUnmounted());
	const controlChanged = _prevControl.current !== control;
	const prevName = _prevName.current;
	const computedOutput = import_react$26.useMemo(() => {
		if (disabled) return null;
		const nameChanged = !controlChanged && !deepEqual(prevName, name);
		return controlChanged || nameChanged ? getCurrentOutput() : null;
	}, [
		disabled,
		controlChanged,
		name,
		prevName,
		getCurrentOutput
	]);
	return computedOutput !== null ? computedOutput : value;
}
/**
* Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
*
* @remarks
* [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
*
* @param props - the path name to the form field value, and validation rules.
*
* @returns field properties, field and form state. {@link UseControllerReturn}
*
* @example
* ```tsx
* function Input(props) {
*   const { field, fieldState, formState } = useController(props);
*   return (
*     <div>
*       <input {...field} placeholder={props.name} />
*       <p>{fieldState.isTouched && "Touched"}</p>
*       <p>{formState.isSubmitted ? "submitted" : ""}</p>
*     </div>
*   );
* }
* ```
*/
function useController(props) {
	const formControl = useFormControlContext();
	const { name, disabled, control = formControl, shouldUnregister, defaultValue, exact = true } = props;
	const isArrayField = isNameInFieldArray(control._names.array, name);
	const value = useWatch({
		control,
		name,
		defaultValue: import_react$26.useMemo(() => get(control._formValues, name, get(control._defaultValues, name, defaultValue)), [
			control,
			name,
			defaultValue
		]),
		exact
	});
	const formState = useFormState({
		control,
		name,
		exact
	});
	const _props = import_react$26.useRef(props);
	const _previousNameRef = import_react$26.useRef(void 0);
	const _registerProps = import_react$26.useRef(control.register(name, {
		...props.rules,
		value,
		...isBoolean(props.disabled) ? { disabled: props.disabled } : {}
	}));
	_props.current = props;
	const fieldState = import_react$26.useMemo(() => Object.defineProperties({}, {
		invalid: {
			enumerable: true,
			get: () => !!get(formState.errors, name)
		},
		isDirty: {
			enumerable: true,
			get: () => !!get(formState.dirtyFields, name)
		},
		isTouched: {
			enumerable: true,
			get: () => !!get(formState.touchedFields, name)
		},
		isValidating: {
			enumerable: true,
			get: () => !!get(formState.validatingFields, name)
		},
		error: {
			enumerable: true,
			get: () => get(formState.errors, name)
		}
	}), [formState, name]);
	const onChange = import_react$26.useCallback((event) => _registerProps.current.onChange({
		target: {
			value: getEventValue(event),
			name
		},
		type: EVENTS.CHANGE
	}), [name]);
	const onBlur = import_react$26.useCallback(() => _registerProps.current.onBlur({
		target: {
			value: get(control._formValues, name),
			name
		},
		type: EVENTS.BLUR
	}), [name, control._formValues]);
	const ref = import_react$26.useCallback((elm) => {
		const field = get(control._fields, name);
		if (field && field._f && elm) field._f.ref = {
			focus: () => isFunction(elm.focus) && elm.focus(),
			select: () => isFunction(elm.select) && elm.select(),
			setCustomValidity: (message) => isFunction(elm.setCustomValidity) && elm.setCustomValidity(message),
			reportValidity: () => isFunction(elm.reportValidity) && elm.reportValidity()
		};
	}, [control._fields, name]);
	const field = import_react$26.useMemo(() => ({
		name,
		value,
		...isBoolean(disabled) || formState.disabled ? { disabled: formState.disabled || disabled } : {},
		onChange,
		onBlur,
		ref
	}), [
		name,
		disabled,
		formState.disabled,
		onChange,
		onBlur,
		ref,
		value
	]);
	import_react$26.useEffect(() => {
		const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
		const previousName = _previousNameRef.current;
		if (previousName && previousName !== name && !isArrayField) control.unregister(previousName);
		control.register(name, {
			..._props.current.rules,
			...isBoolean(_props.current.disabled) ? { disabled: _props.current.disabled } : {}
		});
		const updateMounted = (name, value) => {
			const field = get(control._fields, name);
			if (field && field._f) field._f.mount = value;
		};
		updateMounted(name, true);
		if (_shouldUnregisterField) {
			const value = cloneObject(get(control._options.defaultValues, name, _props.current.defaultValue));
			set(control._defaultValues, name, value);
			if (isUndefined(get(control._formValues, name))) set(control._formValues, name, value);
		}
		!isArrayField && control.register(name);
		_previousNameRef.current = name;
		return () => {
			(isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
		};
	}, [
		name,
		control,
		isArrayField,
		shouldUnregister
	]);
	import_react$26.useEffect(() => {
		control._setDisabledField({
			disabled,
			name
		});
	}, [
		disabled,
		name,
		control
	]);
	return import_react$26.useMemo(() => ({
		field,
		formState,
		fieldState
	}), [
		field,
		formState,
		fieldState
	]);
}
function extractFormValues(fieldsState, formValues) {
	const values = {};
	for (const key in fieldsState) if (fieldsState.hasOwnProperty(key)) {
		const fieldState = fieldsState[key];
		const fieldValue = formValues[key];
		if (fieldState && isObject(fieldState) && fieldValue) {
			const nestedFieldsState = extractFormValues(fieldState, fieldValue);
			if (isObject(nestedFieldsState)) values[key] = nestedFieldsState;
		} else if (fieldsState[key]) values[key] = fieldValue;
	}
	return values;
}
function baseGet(object, updatePath) {
	const length = updatePath.slice(0, -1).length;
	let index = 0;
	while (index < length) object = isUndefined(object) ? index++ : object[updatePath[index++]];
	return object;
}
function isEmptyArray(obj) {
	for (const key in obj) if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) return false;
	return true;
}
function unset(object, path) {
	const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
	const childObject = paths.length === 1 ? object : baseGet(object, paths);
	const index = paths.length - 1;
	const key = paths[index];
	if (childObject) delete childObject[key];
	if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) unset(object, paths.slice(0, -1));
	return object;
}
function isTraversable(value) {
	return Array.isArray(value) || isObject(value) && !objectHasFunction(value);
}
function markFieldsDirty(data, fields = {}) {
	for (const key in data) {
		const value = data[key];
		if (isTraversable(value)) {
			fields[key] = Array.isArray(value) ? [] : {};
			markFieldsDirty(value, fields[key]);
		} else if (!isUndefined(value)) fields[key] = true;
	}
	return fields;
}
function getDirtyFields(data, formValues, dirtyFieldsFromValues) {
	if (!dirtyFieldsFromValues) dirtyFieldsFromValues = markFieldsDirty(formValues);
	for (const key in data) {
		const value = data[key];
		if (isTraversable(value)) {
			if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) dirtyFieldsFromValues[key] = markFieldsDirty(value, Array.isArray(value) ? [] : {});
			else getDirtyFields(value, isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
		} else {
			const formValue = formValues[key];
			dirtyFieldsFromValues[key] = !deepEqual(value, formValue);
		}
	}
	return dirtyFieldsFromValues;
}
function getFieldValue(_f) {
	const ref = _f.ref;
	if (isFileInput(ref)) return ref.files;
	if (isRadioInput(ref)) return getRadioValue(_f.refs).value;
	if (isMultipleSelect(ref)) return [...ref.selectedOptions].map(({ value }) => value);
	if (isCheckBoxInput(ref)) return getCheckboxValue(_f.refs).value;
	return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
function schemaErrorLookup(errors, _fields, name) {
	const error = get(errors, name);
	if (error || isKey(name)) return {
		error,
		name
	};
	const names = name.split(".");
	while (names.length) {
		const fieldName = names.join(".");
		const field = get(_fields, fieldName);
		const foundError = get(errors, fieldName);
		if (field && !Array.isArray(field) && name !== fieldName) return { name };
		if (foundError && foundError.type) return {
			name: fieldName,
			error: foundError
		};
		if (foundError && foundError.root && foundError.root.type) return {
			name: `${fieldName}.root`,
			error: foundError.root
		};
		names.pop();
	}
	return { name };
}
function getValidateError(result, ref, type = "validate") {
	if (isString(result) || Array.isArray(result) && result.every(isString) || isBoolean(result) && !result) return {
		type,
		message: isString(result) ? result : "",
		ref
	};
}
function createFormControl(props = {}) {
	let _options = {
		...defaultOptions,
		...props
	};
	let _formState = {
		submitCount: 0,
		isDirty: false,
		isReady: false,
		isLoading: isFunction(_options.defaultValues),
		isValidating: false,
		isSubmitted: false,
		isSubmitting: false,
		isSubmitSuccessful: false,
		isValid: false,
		touchedFields: {},
		dirtyFields: {},
		validatingFields: {},
		errors: _options.errors || {},
		disabled: _options.disabled || false
	};
	let _fields = {};
	let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
	let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
	let _state = {
		action: false,
		mount: false,
		watch: false,
		keepIsValid: false
	};
	let _names = {
		mount: /* @__PURE__ */ new Set(),
		disabled: /* @__PURE__ */ new Set(),
		unMount: /* @__PURE__ */ new Set(),
		array: /* @__PURE__ */ new Set(),
		watch: /* @__PURE__ */ new Set()
	};
	let delayErrorCallback;
	let timer = 0;
	const defaultProxyFormState = {
		isDirty: false,
		dirtyFields: false,
		validatingFields: false,
		touchedFields: false,
		isValidating: false,
		isValid: false,
		errors: false
	};
	const _proxyFormState = { ...defaultProxyFormState };
	let _proxySubscribeFormState = { ..._proxyFormState };
	const _subjects = {
		array: createSubject(),
		state: createSubject()
	};
	const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
	const debounce = (callback) => (wait) => {
		clearTimeout(timer);
		timer = setTimeout(callback, wait);
	};
	const _setValid = async (shouldUpdateValid) => {
		if (_state.keepIsValid) return;
		if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
			let isValid;
			if (_options.resolver) {
				isValid = isEmptyObject((await _runSchema()).errors);
				_updateIsValidating();
			} else isValid = await executeBuiltInValidation({
				fields: _fields,
				onlyCheckValid: true,
				eventType: EVENTS.VALID
			});
			if (isValid !== _formState.isValid) _subjects.state.next({ isValid });
		}
	};
	const _updateIsValidating = (names, isValidating) => {
		if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
			(names || Array.from(_names.mount)).forEach((name) => {
				if (name) isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
			});
			_subjects.state.next({
				validatingFields: _formState.validatingFields,
				isValidating: !isEmptyObject(_formState.validatingFields)
			});
		}
	};
	const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
		if (args && method && !_options.disabled) {
			_state.action = true;
			if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
				const fieldValues = method(get(_fields, name), args.argA, args.argB);
				shouldSetValues && set(_fields, name, fieldValues);
			}
			if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
				const errors = method(get(_formState.errors, name), args.argA, args.argB);
				shouldSetValues && set(_formState.errors, name, errors);
				unsetEmptyArray(_formState.errors, name);
			}
			if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
				const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
				shouldSetValues && set(_formState.touchedFields, name, touchedFields);
			}
			if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
				const fullDirtyFields = getDirtyFields(_defaultValues, _formValues);
				const rootName = getNodeParentName(name);
				set(_formState.dirtyFields, rootName, get(fullDirtyFields, rootName));
			}
			_subjects.state.next({
				name,
				isDirty: _getDirty(name, values),
				dirtyFields: _formState.dirtyFields,
				errors: _formState.errors,
				isValid: _formState.isValid
			});
		} else set(_formValues, name, values);
	};
	const updateErrors = (name, error) => {
		set(_formState.errors, name, error);
		_subjects.state.next({ errors: _formState.errors });
	};
	const _setErrors = (errors) => {
		_formState.errors = errors;
		_subjects.state.next({
			errors: _formState.errors,
			isValid: false
		});
	};
	const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
		const field = get(_fields, name);
		if (field) {
			const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
			isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
			_state.mount && !_state.action && _setValid();
		}
	};
	const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
		let shouldUpdateField = false;
		let isPreviousDirty = false;
		const output = { name };
		if (!_options.disabled) {
			if (!isBlurEvent || shouldDirty) {
				if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
					isPreviousDirty = _formState.isDirty;
					_formState.isDirty = output.isDirty = _getDirty();
					shouldUpdateField = isPreviousDirty !== output.isDirty;
				}
				const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
				isPreviousDirty = !!get(_formState.dirtyFields, name);
				isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
				output.dirtyFields = _formState.dirtyFields;
				shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
			}
			if (isBlurEvent) {
				const isPreviousFieldTouched = get(_formState.touchedFields, name);
				if (!isPreviousFieldTouched) {
					set(_formState.touchedFields, name, isBlurEvent);
					output.touchedFields = _formState.touchedFields;
					shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
				}
			}
			shouldUpdateField && shouldRender && _subjects.state.next(output);
		}
		return shouldUpdateField ? output : {};
	};
	const shouldRenderByError = (name, isValid, error, fieldState) => {
		const previousFieldError = get(_formState.errors, name);
		const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
		if (_options.delayError && error) {
			delayErrorCallback = debounce(() => updateErrors(name, error));
			delayErrorCallback(_options.delayError);
		} else {
			clearTimeout(timer);
			delayErrorCallback = null;
			error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
		}
		if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
			const updatedFormState = {
				...fieldState,
				...shouldUpdateValid && isBoolean(isValid) ? { isValid } : {},
				errors: _formState.errors,
				name
			};
			_formState = {
				..._formState,
				...updatedFormState
			};
			_subjects.state.next(updatedFormState);
		}
	};
	const _runSchema = async (name) => {
		_updateIsValidating(name, true);
		return await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
	};
	const executeSchemaAndUpdateState = async (names) => {
		const { errors } = await _runSchema(names);
		_updateIsValidating(names);
		if (names) for (const name of names) {
			const error = get(errors, name);
			error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
		}
		else _formState.errors = errors;
		return errors;
	};
	const validateForm = async ({ name, eventType }) => {
		if (props.validate) {
			const result = await props.validate({
				formValues: _formValues,
				formState: _formState,
				name,
				eventType
			});
			if (isObject(result)) {
				for (const key in result) if (result[key]) setError(`${FORM_ERROR_TYPE}.${key}`, {
					message: isString(result.message) ? result.message : "",
					type: INPUT_VALIDATION_RULES.validate
				});
			} else if (isString(result) || !result) setError(FORM_ERROR_TYPE, {
				message: result || "",
				type: INPUT_VALIDATION_RULES.validate
			});
			else clearErrors(FORM_ERROR_TYPE);
			return result;
		}
		return true;
	};
	const executeBuiltInValidation = async ({ fields, onlyCheckValid, name, eventType, context = {
		valid: true,
		runRootValidation: false
	} }) => {
		if (props.validate) {
			context.runRootValidation = true;
			if (!await validateForm({
				name,
				eventType
			})) {
				context.valid = false;
				if (onlyCheckValid) return context.valid;
			}
		}
		for (const name in fields) {
			const field = fields[name];
			if (field) {
				const { _f, ...fieldValue } = field;
				if (_f) {
					const isFieldArrayRoot = _names.array.has(_f.name);
					const isPromiseFunction = field._f && hasPromiseValidation(field._f);
					if (isPromiseFunction && _proxyFormState.validatingFields) _updateIsValidating([_f.name], true);
					const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !onlyCheckValid, isFieldArrayRoot);
					if (isPromiseFunction && _proxyFormState.validatingFields) _updateIsValidating([_f.name]);
					if (fieldError[_f.name]) {
						context.valid = false;
						if (onlyCheckValid) break;
					}
					!onlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
					if (props.shouldUseNativeValidation && fieldError[_f.name]) break;
				}
				!isEmptyObject(fieldValue) && await executeBuiltInValidation({
					context,
					onlyCheckValid,
					fields: fieldValue,
					name,
					eventType
				});
			}
		}
		return context.valid;
	};
	const _removeUnmounted = () => {
		for (const name of _names.unMount) {
			const field = get(_fields, name);
			field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
		}
		_names.unMount = /* @__PURE__ */ new Set();
	};
	const _getDirty = (name, data) => !_options.disabled && (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
	const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, { ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue }, isGlobal, defaultValue);
	const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
	const setFieldValue = (name, value, options = {}) => {
		const field = get(_fields, name);
		let fieldValue = value;
		if (field) {
			const fieldReference = field._f;
			if (fieldReference) {
				!fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
				fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
				if (isMultipleSelect(fieldReference.ref)) [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
				else if (fieldReference.refs) {
					if (isCheckBoxInput(fieldReference.ref)) fieldReference.refs.forEach((checkboxRef) => {
						if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
							if (Array.isArray(fieldValue)) checkboxRef.checked = !!fieldValue.find((data) => data === checkboxRef.value);
							else checkboxRef.checked = fieldValue === checkboxRef.value || !!fieldValue;
						}
					});
					else fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
				} else if (isFileInput(fieldReference.ref)) fieldReference.ref.value = "";
				else {
					fieldReference.ref.value = fieldValue;
					if (!fieldReference.ref.type) _subjects.state.next({
						name,
						values: cloneObject(_formValues)
					});
				}
			}
		}
		(options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
		options.shouldValidate && trigger(name);
	};
	const setValues = (name, value, options) => {
		for (const fieldKey in value) {
			if (!value.hasOwnProperty(fieldKey)) return;
			const fieldValue = value[fieldKey];
			const fieldName = name + "." + fieldKey;
			const field = get(_fields, fieldName);
			(_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
		}
	};
	const setValue = (name, value, options = {}) => {
		const field = get(_fields, name);
		const isFieldArray = _names.array.has(name);
		const cloneValue = cloneObject(value);
		set(_formValues, name, cloneValue);
		if (isFieldArray) {
			_subjects.array.next({
				name,
				values: cloneObject(_formValues)
			});
			if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) _subjects.state.next({
				name,
				dirtyFields: getDirtyFields(_defaultValues, _formValues),
				isDirty: _getDirty(name, cloneValue)
			});
		} else field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
		if (isWatched(name, _names)) _subjects.state.next({
			..._formState,
			name,
			values: cloneObject(_formValues)
		});
		else _subjects.state.next({
			name: _state.mount ? name : void 0,
			values: cloneObject(_formValues)
		});
	};
	const onChange = async (event) => {
		_state.mount = true;
		const target = event.target;
		let name = target.name;
		let isFieldValueUpdated = true;
		const field = get(_fields, name);
		const _updateIsFieldValueUpdated = (fieldValue) => {
			isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
		};
		const validationModeBeforeSubmit = getValidationModes(_options.mode);
		const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
		if (field) {
			let error;
			let isValid;
			const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
			const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
			const shouldSkipValidation = !hasValidation(field._f) && !props.validate && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
			const watched = isWatched(name, _names, isBlurEvent);
			set(_formValues, name, fieldValue);
			if (isBlurEvent) {
				if (!target || !target.readOnly) {
					field._f.onBlur && field._f.onBlur(event);
					delayErrorCallback && delayErrorCallback(0);
				}
			} else if (field._f.onChange) field._f.onChange(event);
			const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
			const shouldRender = !isEmptyObject(fieldState) || watched;
			!isBlurEvent && _subjects.state.next({
				name,
				type: event.type,
				values: cloneObject(_formValues)
			});
			if (shouldSkipValidation) {
				if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
					if (_options.mode === "onBlur") {
						if (isBlurEvent) _setValid();
					} else if (!isBlurEvent) _setValid();
				}
				return shouldRender && _subjects.state.next({
					name,
					...watched ? {} : fieldState
				});
			}
			if (!_options.resolver && props.validate) await validateForm({
				name,
				eventType: event.type
			});
			!isBlurEvent && watched && _subjects.state.next({ ..._formState });
			if (_options.resolver) {
				const { errors } = await _runSchema([name]);
				_updateIsValidating([name]);
				_updateIsFieldValueUpdated(fieldValue);
				if (isFieldValueUpdated) {
					const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
					const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
					error = errorLookupResult.error;
					name = errorLookupResult.name;
					isValid = isEmptyObject(errors);
				}
			} else {
				_updateIsValidating([name], true);
				error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
				_updateIsValidating([name]);
				_updateIsFieldValueUpdated(fieldValue);
				if (isFieldValueUpdated) {
					if (error) isValid = false;
					else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) isValid = await executeBuiltInValidation({
						fields: _fields,
						onlyCheckValid: true,
						name,
						eventType: event.type
					});
				}
			}
			if (isFieldValueUpdated) {
				field._f.deps && (!Array.isArray(field._f.deps) || field._f.deps.length > 0) && trigger(field._f.deps);
				shouldRenderByError(name, isValid, error, fieldState);
			}
		}
	};
	const _focusInput = (ref, key) => {
		if (get(_formState.errors, key) && ref.focus) {
			ref.focus();
			return 1;
		}
	};
	const trigger = async (name, options = {}) => {
		let isValid;
		let validationResult;
		const fieldNames = convertToArrayPayload(name);
		if (_options.resolver) {
			const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
			isValid = isEmptyObject(errors);
			validationResult = name ? !fieldNames.some((name) => get(errors, name)) : isValid;
		} else if (name) {
			validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
				const field = get(_fields, fieldName);
				return await executeBuiltInValidation({
					fields: field && field._f ? { [fieldName]: field } : field,
					eventType: EVENTS.TRIGGER
				});
			}))).every(Boolean);
			!(!validationResult && !_formState.isValid) && _setValid();
		} else validationResult = isValid = await executeBuiltInValidation({
			fields: _fields,
			name,
			eventType: EVENTS.TRIGGER
		});
		_subjects.state.next({
			...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : { name },
			..._options.resolver || !name ? { isValid } : {},
			errors: _formState.errors
		});
		options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
		return validationResult;
	};
	const getValues = (fieldNames, config) => {
		let values = { ..._state.mount ? _formValues : _defaultValues };
		if (config) values = extractFormValues(config.dirtyFields ? _formState.dirtyFields : _formState.touchedFields, values);
		return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
	};
	const getFieldState = (name, formState) => ({
		invalid: !!get((formState || _formState).errors, name),
		isDirty: !!get((formState || _formState).dirtyFields, name),
		error: get((formState || _formState).errors, name),
		isValidating: !!get(_formState.validatingFields, name),
		isTouched: !!get((formState || _formState).touchedFields, name)
	});
	const clearErrors = (name) => {
		const names = name ? convertToArrayPayload(name) : void 0;
		names === null || names === void 0 || names.forEach((inputName) => unset(_formState.errors, inputName));
		if (names) names.forEach((inputName) => {
			_subjects.state.next({
				name: inputName,
				errors: _formState.errors
			});
		});
		else _subjects.state.next({ errors: {} });
	};
	const setError = (name, error, options) => {
		const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
		const { ref: currentRef, message, type, ...restOfErrorTree } = get(_formState.errors, name) || {};
		set(_formState.errors, name, {
			...restOfErrorTree,
			...error,
			ref
		});
		_subjects.state.next({
			name,
			errors: _formState.errors,
			isValid: false
		});
		options && options.shouldFocus && ref && ref.focus && ref.focus();
	};
	const watch = (name, defaultValue) => isFunction(name) ? _subjects.state.subscribe({ next: (payload) => "values" in payload && name(_getWatch(void 0, defaultValue), payload) }) : _getWatch(name, defaultValue, true);
	const _subscribe = (props) => _subjects.state.subscribe({ next: (formState) => {
		if (shouldSubscribeByName(props.name, formState.name, props.exact) && shouldRenderFormState(formState, props.formState || _proxyFormState, _setFormState, props.reRenderRoot)) props.callback({
			values: { ..._formValues },
			..._formState,
			...formState,
			defaultValues: _defaultValues
		});
	} }).unsubscribe;
	const subscribe = (props) => {
		_state.mount = true;
		_proxySubscribeFormState = {
			..._proxySubscribeFormState,
			...props.formState
		};
		return _subscribe({
			...props,
			formState: {
				...defaultProxyFormState,
				...props.formState
			}
		});
	};
	const unregister = (name, options = {}) => {
		for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
			_names.mount.delete(fieldName);
			_names.array.delete(fieldName);
			if (!options.keepValue) {
				unset(_fields, fieldName);
				unset(_formValues, fieldName);
			}
			!options.keepError && unset(_formState.errors, fieldName);
			!options.keepDirty && unset(_formState.dirtyFields, fieldName);
			!options.keepTouched && unset(_formState.touchedFields, fieldName);
			!options.keepIsValidating && unset(_formState.validatingFields, fieldName);
			!_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
		}
		_subjects.state.next({ values: cloneObject(_formValues) });
		_subjects.state.next({
			..._formState,
			...!options.keepDirty ? {} : { isDirty: _getDirty() }
		});
		!options.keepIsValid && _setValid();
	};
	const _setDisabledField = ({ disabled, name }) => {
		if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
			const disabledStateChanged = _names.disabled.has(name) !== !!disabled;
			disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
			disabledStateChanged && _state.mount && !_state.action && _setValid();
		}
	};
	const register = (name, options = {}) => {
		let field = get(_fields, name);
		const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
		set(_fields, name, {
			...field || {},
			_f: {
				...field && field._f ? field._f : { ref: { name } },
				name,
				mount: true,
				...options
			}
		});
		_names.mount.add(name);
		if (field) _setDisabledField({
			disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
			name
		});
		else updateValidAndValue(name, true, options.value);
		return {
			...disabledIsDefined ? { disabled: options.disabled || _options.disabled } : {},
			..._options.progressive ? {
				required: !!options.required,
				min: getRuleValue(options.min),
				max: getRuleValue(options.max),
				minLength: getRuleValue(options.minLength),
				maxLength: getRuleValue(options.maxLength),
				pattern: getRuleValue(options.pattern)
			} : {},
			name,
			onChange,
			onBlur: onChange,
			ref: (ref) => {
				if (ref) {
					register(name, options);
					field = get(_fields, name);
					const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
					const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
					const refs = field._f.refs || [];
					if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) return;
					set(_fields, name, { _f: {
						...field._f,
						...radioOrCheckbox ? {
							refs: [
								...refs.filter(live),
								fieldRef,
								...Array.isArray(get(_defaultValues, name)) ? [{}] : []
							],
							ref: {
								type: fieldRef.type,
								name
							}
						} : { ref: fieldRef }
					} });
					updateValidAndValue(name, false, void 0, fieldRef);
				} else {
					field = get(_fields, name, {});
					if (field._f) field._f.mount = false;
					(_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
				}
			}
		};
	};
	const _focusError = () => _options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
	const _disableForm = (disabled) => {
		if (isBoolean(disabled)) {
			_subjects.state.next({ disabled });
			iterateFieldsByAction(_fields, (ref, name) => {
				const currentField = get(_fields, name);
				if (currentField) {
					ref.disabled = currentField._f.disabled || disabled;
					if (Array.isArray(currentField._f.refs)) currentField._f.refs.forEach((inputRef) => {
						inputRef.disabled = currentField._f.disabled || disabled;
					});
				}
			}, 0, false);
		}
	};
	const handleSubmit = (onValid, onInvalid) => async (e) => {
		let onValidError = void 0;
		if (e) {
			e.preventDefault && e.preventDefault();
			e.persist && e.persist();
		}
		let fieldValues = cloneObject(_formValues);
		_subjects.state.next({ isSubmitting: true });
		if (_options.resolver) {
			const { errors, values } = await _runSchema();
			_updateIsValidating();
			_formState.errors = errors;
			fieldValues = cloneObject(values);
		} else await executeBuiltInValidation({
			fields: _fields,
			eventType: EVENTS.SUBMIT
		});
		if (_names.disabled.size) for (const name of _names.disabled) unset(fieldValues, name);
		unset(_formState.errors, ROOT_ERROR_TYPE);
		if (isEmptyObject(_formState.errors)) {
			_subjects.state.next({ errors: {} });
			try {
				await onValid(fieldValues, e);
			} catch (error) {
				onValidError = error;
			}
		} else {
			if (onInvalid) await onInvalid({ ..._formState.errors }, e);
			_focusError();
			setTimeout(_focusError);
		}
		_subjects.state.next({
			isSubmitted: true,
			isSubmitting: false,
			isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
			submitCount: _formState.submitCount + 1,
			errors: _formState.errors
		});
		if (onValidError) throw onValidError;
	};
	const resetField = (name, options = {}) => {
		if (get(_fields, name)) {
			if (isUndefined(options.defaultValue)) setValue(name, cloneObject(get(_defaultValues, name)));
			else {
				setValue(name, options.defaultValue);
				set(_defaultValues, name, cloneObject(options.defaultValue));
			}
			if (!options.keepTouched) unset(_formState.touchedFields, name);
			if (!options.keepDirty) {
				unset(_formState.dirtyFields, name);
				_formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
			}
			if (!options.keepError) {
				unset(_formState.errors, name);
				_proxyFormState.isValid && _setValid();
			}
			_subjects.state.next({ ..._formState });
		}
	};
	const _reset = (formValues, keepStateOptions = {}) => {
		const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
		const cloneUpdatedValues = cloneObject(updatedValues);
		const isEmptyResetValues = isEmptyObject(formValues);
		const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
		if (!keepStateOptions.keepDefaultValues) _defaultValues = updatedValues;
		if (!keepStateOptions.keepValues) {
			if (keepStateOptions.keepDirtyValues) {
				const fieldsToCheck = /* @__PURE__ */ new Set([..._names.mount, ...Object.keys(getDirtyFields(_defaultValues, _formValues))]);
				for (const fieldName of Array.from(fieldsToCheck)) {
					const isDirty = get(_formState.dirtyFields, fieldName);
					const existingValue = get(_formValues, fieldName);
					const newValue = get(values, fieldName);
					if (isDirty && !isUndefined(existingValue)) set(values, fieldName, existingValue);
					else if (!isDirty && !isUndefined(newValue)) setValue(fieldName, newValue);
				}
			} else {
				if (isWeb && isUndefined(formValues)) for (const name of _names.mount) {
					const field = get(_fields, name);
					if (field && field._f) {
						const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
						if (isHTMLElement(fieldReference)) {
							const form = fieldReference.closest("form");
							if (form) {
								form.reset();
								break;
							}
						}
					}
				}
				if (keepStateOptions.keepFieldsRef) for (const fieldName of _names.mount) setValue(fieldName, get(values, fieldName));
				else _fields = {};
			}
			_formValues = _options.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
			_subjects.array.next({ values: { ...values } });
			_subjects.state.next({ values: { ...values } });
		}
		_names = {
			mount: keepStateOptions.keepDirtyValues ? _names.mount : /* @__PURE__ */ new Set(),
			unMount: /* @__PURE__ */ new Set(),
			array: /* @__PURE__ */ new Set(),
			disabled: /* @__PURE__ */ new Set(),
			watch: /* @__PURE__ */ new Set(),
			watchAll: false,
			focus: ""
		};
		_state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues || !_options.shouldUnregister && !isEmptyObject(values);
		_state.watch = !!_options.shouldUnregister;
		_state.keepIsValid = !!keepStateOptions.keepIsValid;
		_state.action = false;
		if (!keepStateOptions.keepErrors) _formState.errors = {};
		_subjects.state.next({
			submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
			isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
			isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
			dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
			touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
			errors: keepStateOptions.keepErrors ? _formState.errors : {},
			isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
			isSubmitting: false,
			defaultValues: _defaultValues
		});
	};
	const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, {
		..._options.resetOptions,
		...keepStateOptions
	});
	const setFocus = (name, options = {}) => {
		const field = get(_fields, name);
		const fieldReference = field && field._f;
		if (fieldReference) {
			const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
			if (fieldRef.focus) setTimeout(() => {
				fieldRef.focus();
				options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
			});
		}
	};
	const _setFormState = (updatedFormState) => {
		_formState = {
			..._formState,
			...updatedFormState
		};
	};
	const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
		reset(values, _options.resetOptions);
		_subjects.state.next({ isLoading: false });
	});
	const methods = {
		control: {
			register,
			unregister,
			getFieldState,
			handleSubmit,
			setError,
			_subscribe,
			_runSchema,
			_updateIsValidating,
			_focusError,
			_getWatch,
			_getDirty,
			_setValid,
			_setFieldArray,
			_setDisabledField,
			_setErrors,
			_getFieldArray,
			_reset,
			_resetDefaultValues,
			_removeUnmounted,
			_disableForm,
			_subjects,
			_proxyFormState,
			get _fields() {
				return _fields;
			},
			get _formValues() {
				return _formValues;
			},
			get _state() {
				return _state;
			},
			set _state(value) {
				_state = value;
			},
			get _defaultValues() {
				return _defaultValues;
			},
			get _names() {
				return _names;
			},
			set _names(value) {
				_names = value;
			},
			get _formState() {
				return _formState;
			},
			get _options() {
				return _options;
			},
			set _options(value) {
				_options = {
					..._options,
					...value
				};
			}
		},
		subscribe,
		trigger,
		register,
		handleSubmit,
		watch,
		setValue,
		getValues,
		reset,
		resetField,
		clearErrors,
		unregister,
		setError,
		setFocus,
		getFieldState
	};
	return {
		...methods,
		formControl: methods
	};
}
/**
* Custom hook to manage the entire form.
*
* @remarks
* [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
*
* @param props - form configuration and validation parameters.
*
* @returns methods - individual functions to manage the form state. {@link UseFormReturn}
*
* @example
* ```tsx
* function App() {
*   const { register, handleSubmit, watch, formState: { errors } } = useForm();
*   const onSubmit = data => console.log(data);
*
*   console.log(watch("example"));
*
*   return (
*     <form onSubmit={handleSubmit(onSubmit)}>
*       <input defaultValue="test" {...register("example")} />
*       <input {...register("exampleRequired", { required: true })} />
*       {errors.exampleRequired && <span>This field is required</span>}
*       <button>Submit</button>
*     </form>
*   );
* }
* ```
*/
function useForm(props = {}) {
	const _formControl = import_react$26.useRef(void 0);
	const _values = import_react$26.useRef(void 0);
	const [formState, updateFormState] = import_react$26.useState({
		isDirty: false,
		isValidating: false,
		isLoading: isFunction(props.defaultValues),
		isSubmitted: false,
		isSubmitting: false,
		isSubmitSuccessful: false,
		isValid: false,
		submitCount: 0,
		dirtyFields: {},
		touchedFields: {},
		validatingFields: {},
		errors: props.errors || {},
		disabled: props.disabled || false,
		isReady: false,
		defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
	});
	if (!_formControl.current) {
		if (props.formControl) {
			_formControl.current = {
				...props.formControl,
				formState
			};
			if (props.defaultValues && !isFunction(props.defaultValues)) props.formControl.reset(props.defaultValues, props.resetOptions);
		} else {
			const { formControl, ...rest } = createFormControl(props);
			_formControl.current = {
				...rest,
				formState
			};
		}
	}
	const control = _formControl.current.control;
	control._options = props;
	useIsomorphicLayoutEffect(() => {
		const sub = control._subscribe({
			formState: control._proxyFormState,
			callback: () => updateFormState({ ...control._formState }),
			reRenderRoot: true
		});
		updateFormState((data) => ({
			...data,
			isReady: true
		}));
		control._formState.isReady = true;
		return sub;
	}, [control]);
	import_react$26.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
	import_react$26.useEffect(() => {
		if (props.mode) control._options.mode = props.mode;
		if (props.reValidateMode) control._options.reValidateMode = props.reValidateMode;
	}, [
		control,
		props.mode,
		props.reValidateMode
	]);
	import_react$26.useEffect(() => {
		if (props.errors) {
			control._setErrors(props.errors);
			control._focusError();
		}
	}, [control, props.errors]);
	import_react$26.useEffect(() => {
		props.shouldUnregister && control._subjects.state.next({ values: control._getWatch() });
	}, [control, props.shouldUnregister]);
	import_react$26.useEffect(() => {
		if (control._proxyFormState.isDirty) {
			const isDirty = control._getDirty();
			if (isDirty !== formState.isDirty) control._subjects.state.next({ isDirty });
		}
	}, [control, formState.isDirty]);
	import_react$26.useEffect(() => {
		var _a;
		if (props.values && !deepEqual(props.values, _values.current)) {
			control._reset(props.values, {
				keepFieldsRef: true,
				...control._options.resetOptions
			});
			if (!((_a = control._options.resetOptions) === null || _a === void 0 ? void 0 : _a.keepIsValid)) control._setValid();
			_values.current = props.values;
			updateFormState((state) => ({ ...state }));
		} else control._resetDefaultValues();
	}, [control, props.values]);
	import_react$26.useEffect(() => {
		if (!control._state.mount) {
			control._setValid();
			control._state.mount = true;
		}
		if (control._state.watch) {
			control._state.watch = false;
			control._subjects.state.next({ ...control._formState });
		}
		control._removeUnmounted();
	});
	_formControl.current.formState = import_react$26.useMemo(() => getProxyFormState(formState, control), [control, formState]);
	return _formControl.current;
}
var import_react$26, isCheckBoxInput, isDateObject, isNullOrUndefined, isObjectType, isObject, getEventValue, getNodeParentName, isNameInFieldArray, isPlainObject, isWeb, isKey, isUndefined, compact, stringToPath, get, isBoolean, isFunction, set, EVENTS, VALIDATION_MODE, INPUT_VALIDATION_RULES, FORM_ERROR_TYPE, ROOT_ERROR_TYPE, HookFormControlContext, useFormControlContext, getProxyFormState, useIsomorphicLayoutEffect, isString, generateWatchOutput, isPrimitive, Controller, HookFormContext, appendErrors, convertToArrayPayload, createSubject, isEmptyObject, isFileInput, isHTMLElement, isMultipleSelect, isRadioInput, isRadioOrCheckbox, live, objectHasFunction, defaultResult, validResult, getCheckboxValue, getFieldValueAs, defaultReturn, getRadioValue, getResolverOptions, isRegex, getRuleValue, getValidationModes, ASYNC_FUNCTION, hasPromiseValidation, hasValidation, isWatched, iterateFieldsByAction, shouldRenderFormState, shouldSubscribeByName, skipValidation, unsetEmptyArray, updateFieldArrayRootError, getValueAndMessage, validateField, defaultOptions;
function init_index_esm() {
	return (init_index_esm = __esmMin((() => {
		import_react$26 = /* @__PURE__ */ __toESM(require_react(), 1);
		isCheckBoxInput = (element) => element.type === "checkbox";
		isDateObject = (value) => value instanceof Date;
		isNullOrUndefined = (value) => value == null;
		isObjectType = (value) => typeof value === "object";
		isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
		getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
		getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
		isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
		isPlainObject = (tempObject) => {
			const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
			return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
		};
		isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
		isKey = (value) => /^\w*$/.test(value);
		isUndefined = (val) => val === void 0;
		compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
		stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
		get = (object, path, defaultValue) => {
			if (!path || !isObject(object)) return defaultValue;
			const result = (isKey(path) ? [path] : stringToPath(path)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], object);
			return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
		};
		isBoolean = (value) => typeof value === "boolean";
		isFunction = (value) => typeof value === "function";
		set = (object, path, value) => {
			let index = -1;
			const tempPath = isKey(path) ? [path] : stringToPath(path);
			const length = tempPath.length;
			const lastIndex = length - 1;
			while (++index < length) {
				const key = tempPath[index];
				let newValue = value;
				if (index !== lastIndex) {
					const objValue = object[key];
					newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
				}
				if (key === "__proto__" || key === "constructor" || key === "prototype") return;
				object[key] = newValue;
				object = object[key];
			}
		};
		EVENTS = {
			BLUR: "blur",
			FOCUS_OUT: "focusout",
			CHANGE: "change",
			SUBMIT: "submit",
			TRIGGER: "trigger",
			VALID: "valid"
		};
		VALIDATION_MODE = {
			onBlur: "onBlur",
			onChange: "onChange",
			onSubmit: "onSubmit",
			onTouched: "onTouched",
			all: "all"
		};
		INPUT_VALIDATION_RULES = {
			max: "max",
			min: "min",
			maxLength: "maxLength",
			minLength: "minLength",
			pattern: "pattern",
			required: "required",
			validate: "validate"
		};
		FORM_ERROR_TYPE = "form";
		ROOT_ERROR_TYPE = "root";
		HookFormControlContext = import_react$26.createContext(null);
		HookFormControlContext.displayName = "HookFormControlContext";
		useFormControlContext = () => import_react$26.useContext(HookFormControlContext);
		getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
			const result = { defaultValues: control._defaultValues };
			for (const key in formState) Object.defineProperty(result, key, { get: () => {
				const _key = key;
				if (control._proxyFormState[_key] !== VALIDATION_MODE.all) control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
				localProxyFormState && (localProxyFormState[_key] = true);
				return formState[_key];
			} });
			return result;
		};
		useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react$26.useLayoutEffect : import_react$26.useEffect;
		isString = (value) => typeof value === "string";
		generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
			if (isString(names)) {
				isGlobal && _names.watch.add(names);
				return get(formValues, names, defaultValue);
			}
			if (Array.isArray(names)) return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
			isGlobal && (_names.watchAll = true);
			return formValues;
		};
		isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
		Controller = (props) => props.render(useController(props));
		HookFormContext = import_react$26.createContext(null);
		HookFormContext.displayName = "HookFormContext";
		appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
			...errors[name],
			types: {
				...errors[name] && errors[name].types ? errors[name].types : {},
				[type]: message || true
			}
		} : {};
		convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
		createSubject = () => {
			let _observers = [];
			const next = (value) => {
				for (const observer of _observers) observer.next && observer.next(value);
			};
			const subscribe = (observer) => {
				_observers.push(observer);
				return { unsubscribe: () => {
					_observers = _observers.filter((o) => o !== observer);
				} };
			};
			const unsubscribe = () => {
				_observers = [];
			};
			return {
				get observers() {
					return _observers;
				},
				next,
				subscribe,
				unsubscribe
			};
		};
		isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
		isFileInput = (element) => element.type === "file";
		isHTMLElement = (value) => {
			if (!isWeb) return false;
			const owner = value ? value.ownerDocument : 0;
			return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
		};
		isMultipleSelect = (element) => element.type === `select-multiple`;
		isRadioInput = (element) => element.type === "radio";
		isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
		live = (ref) => isHTMLElement(ref) && ref.isConnected;
		objectHasFunction = (data) => {
			for (const key in data) if (isFunction(data[key])) return true;
			return false;
		};
		defaultResult = {
			value: false,
			isValid: false
		};
		validResult = {
			value: true,
			isValid: true
		};
		getCheckboxValue = (options) => {
			if (Array.isArray(options)) {
				if (options.length > 1) {
					const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
					return {
						value: values,
						isValid: !!values.length
					};
				}
				return options[0].checked && !options[0].disabled ? options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : {
					value: options[0].value,
					isValid: true
				} : validResult : defaultResult;
			}
			return defaultResult;
		};
		getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
		defaultReturn = {
			isValid: false,
			value: null
		};
		getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
			isValid: true,
			value: option.value
		} : previous, defaultReturn) : defaultReturn;
		getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
			const fields = {};
			for (const name of fieldsNames) {
				const field = get(_fields, name);
				field && set(fields, name, field._f);
			}
			return {
				criteriaMode,
				names: [...fieldsNames],
				fields,
				shouldUseNativeValidation
			};
		};
		isRegex = (value) => value instanceof RegExp;
		getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
		getValidationModes = (mode) => ({
			isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
			isOnBlur: mode === VALIDATION_MODE.onBlur,
			isOnChange: mode === VALIDATION_MODE.onChange,
			isOnAll: mode === VALIDATION_MODE.all,
			isOnTouch: mode === VALIDATION_MODE.onTouched
		});
		ASYNC_FUNCTION = "AsyncFunction";
		hasPromiseValidation = (fieldReference) => !!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION));
		hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
		isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
		iterateFieldsByAction = (fields, action, fieldsNames, abortEarly) => {
			for (const key of fieldsNames || Object.keys(fields)) {
				const field = get(fields, key);
				if (field) {
					const { _f, ...currentField } = field;
					if (_f) {
						if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) return true;
						else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) return true;
						else if (iterateFieldsByAction(currentField, action)) break;
					} else if (isObject(currentField)) {
						if (iterateFieldsByAction(currentField, action)) break;
					}
				}
			}
		};
		shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
			updateFormState(formStateData);
			const { name, ...formState } = formStateData;
			return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
		};
		shouldSubscribeByName = (name, signalName, exact) => !name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName) => currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
		skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
			if (mode.isOnAll) return false;
			else if (!isSubmitted && mode.isOnTouch) return !(isTouched || isBlurEvent);
			else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) return !isBlurEvent;
			else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) return isBlurEvent;
			return true;
		};
		unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
		updateFieldArrayRootError = (errors, error, name) => {
			const fieldArrayErrors = convertToArrayPayload(get(errors, name));
			set(fieldArrayErrors, ROOT_ERROR_TYPE, error[name]);
			set(errors, name, fieldArrayErrors);
			return errors;
		};
		getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
			value: validationData,
			message: ""
		};
		validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
			const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
			const inputValue = get(formValues, name);
			if (!mount || disabledFieldNames.has(name)) return {};
			const inputRef = refs ? refs[0] : ref;
			const setCustomValidity = (message) => {
				if (shouldUseNativeValidation && inputRef.reportValidity) {
					inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
					inputRef.reportValidity();
				}
			};
			const error = {};
			const isRadio = isRadioInput(ref);
			const isCheckBox = isCheckBoxInput(ref);
			const isRadioOrCheckbox = isRadio || isCheckBox;
			const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
			const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
			const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
				const message = exceedMax ? maxLengthMessage : minLengthMessage;
				error[name] = {
					type: exceedMax ? maxType : minType,
					message,
					ref,
					...appendErrorsCurry(exceedMax ? maxType : minType, message)
				};
			};
			if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
				const { value, message } = isString(required) ? {
					value: !!required,
					message: required
				} : getValueAndMessage(required);
				if (value) {
					error[name] = {
						type: INPUT_VALIDATION_RULES.required,
						message,
						ref: inputRef,
						...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
					};
					if (!validateAllFieldCriteria) {
						setCustomValidity(message);
						return error;
					}
				}
			}
			if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
				let exceedMax;
				let exceedMin;
				const maxOutput = getValueAndMessage(max);
				const minOutput = getValueAndMessage(min);
				if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
					const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
					if (!isNullOrUndefined(maxOutput.value)) exceedMax = valueNumber > maxOutput.value;
					if (!isNullOrUndefined(minOutput.value)) exceedMin = valueNumber < minOutput.value;
				} else {
					const valueDate = ref.valueAsDate || new Date(inputValue);
					const convertTimeToDate = (time) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + time);
					const isTime = ref.type == "time";
					const isWeek = ref.type == "week";
					if (isString(maxOutput.value) && inputValue) exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
					if (isString(minOutput.value) && inputValue) exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
				}
				if (exceedMax || exceedMin) {
					getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
					if (!validateAllFieldCriteria) {
						setCustomValidity(error[name].message);
						return error;
					}
				}
			}
			if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
				const maxLengthOutput = getValueAndMessage(maxLength);
				const minLengthOutput = getValueAndMessage(minLength);
				const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
				const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
				if (exceedMax || exceedMin) {
					getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
					if (!validateAllFieldCriteria) {
						setCustomValidity(error[name].message);
						return error;
					}
				}
			}
			if (pattern && !isEmpty && isString(inputValue)) {
				const { value: patternValue, message } = getValueAndMessage(pattern);
				if (isRegex(patternValue) && !inputValue.match(patternValue)) {
					error[name] = {
						type: INPUT_VALIDATION_RULES.pattern,
						message,
						ref,
						...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
					};
					if (!validateAllFieldCriteria) {
						setCustomValidity(message);
						return error;
					}
				}
			}
			if (validate) {
				if (isFunction(validate)) {
					const validateError = getValidateError(await validate(inputValue, formValues), inputRef);
					if (validateError) {
						error[name] = {
							...validateError,
							...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
						};
						if (!validateAllFieldCriteria) {
							setCustomValidity(validateError.message);
							return error;
						}
					}
				} else if (isObject(validate)) {
					let validationResult = {};
					for (const key in validate) {
						if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) break;
						const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
						if (validateError) {
							validationResult = {
								...validateError,
								...appendErrorsCurry(key, validateError.message)
							};
							setCustomValidity(validateError.message);
							if (validateAllFieldCriteria) error[name] = validationResult;
						}
					}
					if (!isEmptyObject(validationResult)) {
						error[name] = {
							ref: inputRef,
							...validationResult
						};
						if (!validateAllFieldCriteria) return error;
					}
				}
			}
			setCustomValidity(true);
			return error;
		};
		defaultOptions = {
			mode: VALIDATION_MODE.onSubmit,
			reValidateMode: VALIDATION_MODE.onChange,
			shouldFocusError: true
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/design/DesignModeContext.tsx
function DesignModeProvider({ active, permission = "portal.design", initialConfig, onSave, children }) {
	const [selected, setSelected] = (0, import_react$25.useState)(null);
	const [config, setConfig] = (0, import_react$25.useState)(initialConfig);
	const [history, setHistory] = (0, import_react$25.useState)([]);
	const [historyIndex, setHistoryIndex] = (0, import_react$25.useState)(-1);
	const [saving, setSaving] = (0, import_react$25.useState)(false);
	const updateConfig = (0, import_react$25.useCallback)((patch) => {
		setConfig((prev) => ({
			...prev,
			...patch
		}));
	}, []);
	const pushHistory = (0, import_react$25.useCallback)((description) => {
		setHistory((prev) => {
			return [...prev.slice(0, historyIndex + 1), {
				config,
				description
			}];
		});
		setHistoryIndex((prev) => prev + 1);
	}, [config, historyIndex]);
	const undo = (0, import_react$25.useCallback)(() => {
		if (historyIndex >= 0) {
			setConfig(history[historyIndex].config);
			setHistoryIndex((prev) => prev - 1);
		}
	}, [history, historyIndex]);
	const redo = (0, import_react$25.useCallback)(() => {
		if (historyIndex < history.length - 1) {
			const next = history[historyIndex + 1];
			setConfig(next.config);
			setHistoryIndex((prev) => prev + 1);
		}
	}, [history, historyIndex]);
	const saveConfig = (0, import_react$25.useCallback)(async () => {
		if (!onSave) return;
		setSaving(true);
		try {
			await onSave(config);
		} finally {
			setSaving(false);
		}
	}, [onSave, config]);
	if (!active) return /* @__PURE__ */ (0, import_jsx_runtime$39.jsx)(DesignModeContext, {
		value: inertContext,
		children
	});
	const value = {
		active,
		selected,
		select: setSelected,
		config,
		updateConfig,
		permission,
		canUndo: historyIndex >= 0,
		canRedo: historyIndex < history.length - 1,
		undo,
		redo,
		pushHistory,
		saving,
		saveConfig
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$39.jsx)(DesignModeContext, {
		value,
		children
	});
}
var import_react$25, import_jsx_runtime$39, DesignModeContext, inertContext;
function init_DesignModeContext() {
	return (init_DesignModeContext = __esmMin((() => {
		import_react$25 = require_react();
		import_jsx_runtime$39 = require_jsx_runtime();
		DesignModeContext = (0, import_react$25.createContext)(null);
		inertContext = {
			active: false,
			selected: null,
			select: () => void 0,
			config: {
				cards: {},
				layouts: {},
				schema: {}
			},
			updateConfig: () => void 0,
			permission: "portal.design",
			canUndo: false,
			canRedo: false,
			undo: () => void 0,
			redo: () => void 0,
			pushHistory: () => void 0,
			saving: false,
			saveConfig: async () => void 0
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/design/useDesignMode.ts
function useDesignMode() {
	return (0, import_react$24.use)(DesignModeContext) ?? inertResult;
}
var import_react$24, inertResult;
function init_useDesignMode() {
	return (init_useDesignMode = __esmMin((() => {
		import_react$24 = require_react();
		init_DesignModeContext();
		inertResult = {
			active: false,
			selected: null,
			select: () => void 0,
			config: {
				cards: {},
				layouts: {},
				schema: {}
			},
			updateConfig: () => void 0,
			permission: "portal.design",
			canUndo: false,
			canRedo: false,
			undo: () => void 0,
			redo: () => void 0,
			pushHistory: () => void 0,
			saving: false,
			saveConfig: async () => void 0
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/design/DropZone.tsx
function DropZone({ id, accept, sourceId }) {
	const { active: isDesignActive } = useDesignMode();
	const { active: dragging } = useDndContext();
	const { isOver, setNodeRef } = useDroppable({ id });
	if (!isDesignActive) return null;
	const dragType = dragging?.data?.current?.type;
	const dragSourceId = dragging?.data?.current?.sourceId;
	const dragLabel = dragging?.data?.current?.label;
	const isValid = !!dragging && dragType === accept && dragSourceId !== sourceId;
	return /* @__PURE__ */ (0, import_jsx_runtime$38.jsx)("div", {
		ref: setNodeRef,
		className: [
			"blong-drop-zone",
			`blong-drop-zone--${accept}`,
			!dragging ? "" : isValid ? "blong-drop-zone--valid" : "blong-drop-zone--hidden",
			isOver && isValid ? "blong-drop-zone--over" : ""
		].filter(Boolean).join(" "),
		children: isValid && dragLabel && /* @__PURE__ */ (0, import_jsx_runtime$38.jsxs)("span", {
			className: "blong-drop-zone__label",
			children: ["+ ", dragLabel]
		})
	});
}
var import_jsx_runtime$38;
function init_DropZone() {
	return (init_DropZone = __esmMin((() => {
		init_core_esm();
		init_useDesignMode();
		import_jsx_runtime$38 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/design/SelectionIndicator.tsx
function SelectionIndicator({ id, label }) {
	const { active, selected } = useDesignMode();
	if (!active || selected?.id !== id) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$37.jsx)("div", {
		className: "blong-selection-indicator",
		"aria-hidden": true,
		children: label && /* @__PURE__ */ (0, import_jsx_runtime$37.jsx)("span", {
			className: "blong-selection-indicator__badge",
			children: label
		})
	});
}
var import_jsx_runtime$37;
function init_SelectionIndicator() {
	return (init_SelectionIndicator = __esmMin((() => {
		init_useDesignMode();
		import_jsx_runtime$37 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/design/useDesignable.ts
/**
* @param id        - Unique drag/drop id (e.g. 'card-tree')
* @param type      - Element type
* @param extraData - Additional data stored in active.data.current during drag.
*                    Include at minimum: { label, sourceId } so DropZone can validate.
*/
function useDesignable(id, type, extraData) {
	const { active, selected, select } = useDesignMode();
	const isSelected = selected?.id === id;
	const selectSelf = (0, import_react$23.useCallback)(() => {
		select({
			id,
			type
		});
	}, [
		id,
		type,
		select
	]);
	const data = (0, import_react$23.useMemo)(() => ({
		type,
		...extraData
	}), [type, JSON.stringify(extraData)]);
	const { attributes, listeners, setNodeRef: setDragRef, isDragging } = useDraggable({
		id,
		disabled: !active,
		data
	});
	const { setNodeRef: setDropRef } = useDroppable({
		id,
		disabled: !active
	});
	const setRef = (0, import_react$23.useCallback)((node) => {
		setDragRef(node);
		setDropRef(node);
	}, [setDragRef, setDropRef]);
	if (!active) return {
		isSelected: false,
		select: () => void 0,
		dragProps: {},
		setRef: null,
		designClass: ""
	};
	const style = { opacity: isDragging ? .4 : 1 };
	const designClass = [
		"blong-designable",
		isSelected ? "blong-designable--selected" : "",
		isDragging ? "blong-designable--dragging" : ""
	].filter(Boolean).join(" ");
	return {
		isSelected,
		select: selectSelf,
		dragProps: {
			...attributes,
			...listeners
		},
		setRef,
		designClass,
		style
	};
}
var import_react$23;
function init_useDesignable() {
	return (init_useDesignable = __esmMin((() => {
		init_core_esm();
		import_react$23 = require_react();
		init_useDesignMode();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/schema/validate.ts
/** Build react-hook-form validation rules from an enriched field schema */
function buildValidationRules(schema) {
	const rules = {};
	if (schema.fieldRequired) rules.required = "{field} is required";
	if (schema.minLength != null) rules.minLength = {
		value: schema.minLength,
		message: "{field} must be at least {minLength} characters"
	};
	if (schema.maxLength != null) rules.maxLength = {
		value: schema.maxLength,
		message: "{field} must be at most {maxLength} characters"
	};
	if (schema.minimum != null) rules.min = {
		value: schema.minimum,
		message: "{field} must be at least {minimum}"
	};
	if (schema.maximum != null) rules.max = {
		value: schema.maximum,
		message: "{field} must be at most {maximum}"
	};
	if (schema.pattern) rules.pattern = {
		value: new RegExp(schema.pattern),
		message: "{field} has invalid format"
	};
	return rules;
}
//#endregion
//#region ../../core/blong-browser/src/widgets/AutoCompleteWidget.tsx
/**
* AutoCompleteWidget — wraps PrimeReact AutoComplete.
*
* The widget value is an object `{value: string | null, suggestions: string[]}`.
* Suggestion population is driven by the host form via onChange events.
*/
function AutoCompleteWidget({ id, name, value, onChange, onBlur, error, readOnly, disabled }) {
	const val = value;
	return /* @__PURE__ */ (0, import_jsx_runtime$36.jsx)(AutoComplete, {
		inputId: id ?? name,
		value: val?.value ?? "",
		suggestions: val?.suggestions ?? [],
		completeMethod: (e) => onChange({
			value: val?.value ?? null,
			suggestions: [],
			query: e.query
		}),
		onSelect: (e) => onChange({
			...e,
			value: e.value
		}),
		onChange: (e) => onChange({
			value: e.value || null,
			suggestions: val?.suggestions ?? []
		}),
		onClear: () => onChange({
			value: null,
			suggestions: []
		}),
		onBlur,
		readOnly,
		disabled,
		inputClassName: "w-full",
		className: `blong-autocomplete w-full ${error ? "p-invalid" : ""}`
	});
}
var import_jsx_runtime$36;
function init_AutoCompleteWidget() {
	return (init_AutoCompleteWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$36 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/BigIntWidget.tsx
/**
* BigIntWidget — numeric input for large integers (e.g. `bigint` columns).
*
* NumberWidget/IntegerWidget build on PrimeReact InputNumber, which is
* JS-number based and silently rounds integers beyond Number.MAX_SAFE_INTEGER
* (2^53−1).  This widget keeps the raw text in local state so 64-bit values
* are not corrupted, and on change it emits:
*  - a JS `number` when the value is within the safe range — so strict
*    integer validation and existing consumers keep working; or
*  - the raw `string` otherwise — preserving full bigint precision.
*
* The `bigInt*` schema types accept both forms (BigInt, Integer, or an
* integer string), and the database column coerces the string back to bigint.
*/
function BigIntWidget({ id, name, value, onChange, onBlur, error, readOnly, disabled }) {
	const handleChange = (raw) => {
		const trimmed = raw.trim();
		if (trimmed === "") {
			onChange(null);
			return;
		}
		if (!INTEGER_RE.test(trimmed)) return;
		const num = Number(trimmed);
		onChange(Number.isSafeInteger(num) ? num : trimmed);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$35.jsx)("input", {
		id: id ?? name,
		name,
		type: "text",
		inputMode: "numeric",
		autoComplete: "off",
		className: `blong-bigint w-full p-inputtext p-component${error ? " p-invalid" : ""}`,
		value: value == null ? "" : String(value),
		onChange: (e) => handleChange(e.target.value),
		onBlur,
		readOnly,
		disabled
	});
}
var import_jsx_runtime$35, INTEGER_RE;
function init_BigIntWidget() {
	return (init_BigIntWidget = __esmMin((() => {
		import_jsx_runtime$35 = require_jsx_runtime();
		INTEGER_RE = /^-?\d+$/;
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/BooleanWidget.tsx
function BooleanWidget({ id, name, value, onChange, onBlur, error: _error, readOnly, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$34.jsx)(Checkbox, {
		inputId: id ?? name,
		checked: Boolean(value),
		onChange: (e) => onChange(e.checked),
		onBlur,
		readOnly,
		disabled,
		className: "blong-boolean"
	});
}
var import_jsx_runtime$34;
function init_BooleanWidget() {
	return (init_BooleanWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$34 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/ChipsWidget.tsx
function ChipsWidget({ id, name, value, onChange, onBlur, error, readOnly, disabled }) {
	const chipsValue = typeof value === "string" ? value.split(" ").filter(Boolean) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime$33.jsx)(Chips, {
		inputId: id ?? name,
		value: chipsValue,
		onChange: (e) => onChange(Array.isArray(e.value) && e.value.length ? e.value.join(" ") : null),
		onBlur,
		disabled: disabled || readOnly,
		className: `blong-chips w-full ${error ? "p-invalid" : ""}`
	});
}
var import_jsx_runtime$33;
function init_ChipsWidget() {
	return (init_ChipsWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$33 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Form/FormContext.tsx
/**
* Returns the stable form context, or null when called outside a Form.
* Deck and Card use the null return to decide whether to operate in
* context-driven mode or children-passthrough mode.
*/
function useBlongForm() {
	return (0, import_react$22.use)(FormContext);
}
/**
* Returns the slow-changing form state context (tableSelections, readOnly, loading).
* Components that only need these values will not rerender during typing.
*/
function useBlongFormState() {
	return (0, import_react$22.use)(FormStateContext);
}
var import_react$22, FormContext, FormStateContext;
function init_FormContext() {
	return (init_FormContext = __esmMin((() => {
		import_react$22 = require_react();
		FormContext = (0, import_react$22.createContext)(null);
		FormStateContext = (0, import_react$22.createContext)(null);
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/ComponentWidget.tsx
function ComponentWidget(widgetProps) {
	const { schema, loading } = widgetProps;
	const { handler } = useBlong();
	const formCtx = useBlongForm();
	const page = schema.widget?.component ?? "";
	const params = schema.widget?.params;
	const [errorRender, setErrorRender] = import_react$21.useState(null);
	const [LoadedComponent, setLoadedComponent] = import_react$21.useState(null);
	const vars = formCtx?.getValues();
	import_react$21.useEffect(() => {
		if (!page || loading) return;
		let resolvedPage;
		let resolvedParams = {};
		try {
			resolvedPage = renderAll(page, vars ?? {});
			if (!resolvedPage) return;
			resolvedParams = params ? renderAll(params, vars ?? {}) : {};
		} catch (error) {
			setErrorRender(error);
			return;
		}
		handler[`component/${resolvedPage}`]({ ...resolvedParams }, {})?.then((component) => {
			if (component) {
				setErrorRender(null);
				setLoadedComponent(() => component);
			}
		});
	}, [
		page,
		params,
		formCtx,
		handler,
		loading,
		vars
	]);
	if (!LoadedComponent) return /* @__PURE__ */ (0, import_jsx_runtime$32.jsx)("div", {
		style: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "100%"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime$32.jsx)(ProgressSpinner, { title: errorRender ? errorRender.message : "Loading..." })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$32.jsx)(LoadedComponent, { ...widgetProps });
}
var import_react$21, import_jsx_runtime$32;
function init_ComponentWidget() {
	return (init_ComponentWidget = __esmMin((() => {
		init_browser();
		import_react$21 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FormContext();
		init_BlongContext();
		init_primereact();
		import_jsx_runtime$32 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/CurrencyWidget.tsx
function CurrencyWidget({ id, name, schema: _schema, value, onChange, onBlur, error, readOnly, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$31.jsx)(InputNumber, {
		inputId: id ?? name,
		name,
		value: value == null ? null : Number(value),
		onValueChange: (e) => onChange(e.value),
		onBlur,
		readOnly,
		disabled,
		className: `blong-currency w-full ${error ? "p-invalid" : ""}`,
		inputClassName: "text-right",
		minFractionDigits: 2,
		maxFractionDigits: 2
	});
}
var import_jsx_runtime$31;
function init_CurrencyWidget() {
	return (init_CurrencyWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$31 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/DateRange/DateRange.tsx
/** Parse stored JSON string value to [Date, Date] or [undefined, undefined] */
function parseValue(value) {
	if (!value) return [void 0, void 0];
	if (typeof value === "string" && value.startsWith("[")) try {
		const parsed = JSON.parse(value);
		return [parsed[0] ? new Date(parsed[0]) : void 0, parsed[1] ? new Date(parsed[1]) : void 0];
	} catch {
		return [void 0, void 0];
	}
	return [void 0, void 0];
}
/** Compute [from, to] dates from a relative string like "now-1h" */
function computeRelative(relVal, exclusive, timeOnly) {
	const match = relVal.match(RELATIVE_RE);
	if (!match) return [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()];
	const interval = Number(match[1]);
	const unit = match[2];
	const newTo = timeOnly ? /* @__PURE__ */ new Date(0) : /* @__PURE__ */ new Date();
	const newFrom = timeOnly ? /* @__PURE__ */ new Date(0) : /* @__PURE__ */ new Date();
	if ([
		"d",
		"M",
		"y"
	].includes(unit)) newFrom.setHours(0, 0, 0, 0);
	if (unit === "m" || unit === "h") newFrom.setTime(newFrom.getTime() - interval * INTERVALS[unit]);
	else if (unit === "d") newFrom.setTime(newFrom.getTime() - (interval - 1) * INTERVALS.d);
	else if (unit === "M") newFrom.setMonth(newFrom.getMonth() - interval);
	else if (unit === "y") newFrom.setFullYear(newFrom.getFullYear() - interval);
	if (exclusive) newTo.setHours(23, 59, 59, 999);
	else newTo.setHours(24, 0, 0, 0);
	return [newFrom, newTo];
}
function formatDate(date, timeOnly) {
	if (!date || !(date instanceof Date) || isNaN(date.getTime())) return "---";
	if (timeOnly) return date.toLocaleTimeString(void 0, {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	});
	return date.toLocaleString(void 0, {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit"
	});
}
function DateRange({ value, onChange, exclusive = false, timeOnly = false, className, disabled }) {
	const panelRef = (0, import_react$20.useRef)(null);
	const [from, setFrom] = (0, import_react$20.useState)(void 0);
	const [to, setTo] = (0, import_react$20.useState)(void 0);
	const [displayText, setDisplayText] = (0, import_react$20.useState)("");
	const [displayFrom, setDisplayFrom] = (0, import_react$20.useState)(void 0);
	const [displayTo, setDisplayTo] = (0, import_react$20.useState)(void 0);
	const [storedFrom, storedTo] = parseValue(value);
	import_react$20.useEffect(() => {
		if (typeof value === "string" && !value.startsWith("[") && RELATIVE_RE.test(value)) {
			const preset = PRESETS.find((p) => p.from === value || p.display === value);
			const [f, t] = computeRelative(preset?.from ?? value, exclusive, timeOnly);
			setDisplayText(preset?.display ?? value);
			setDisplayFrom(f);
			setDisplayTo(t);
			onChange?.({ value: [f, t] });
		}
	}, [value]);
	const openPanel = import_react$20.useCallback((e) => {
		panelRef.current?.toggle(e);
		setFrom(storedFrom);
		setTo(storedTo);
		if (!(displayFrom && storedFrom && displayFrom.getTime() === storedFrom.getTime()) || !(displayTo && storedTo && displayTo.getTime() === storedTo.getTime())) setDisplayText("");
	}, [
		storedFrom,
		storedTo,
		displayFrom,
		displayTo
	]);
	const applyRange = (e) => {
		panelRef.current?.toggle(e);
		if (!from || !to) return;
		onChange?.({ value: [from, to] });
	};
	const applyPreset = import_react$20.useCallback((preset, e) => {
		const [f, t] = computeRelative(preset.from, exclusive, timeOnly);
		setDisplayText(preset.display);
		setDisplayFrom(f);
		setDisplayTo(t);
		panelRef.current?.toggle(e);
		onChange?.({ value: [f, t] });
	}, [
		exclusive,
		timeOnly,
		onChange
	]);
	const buttonLabel = (() => {
		if (!storedFrom && !storedTo) return "Select period";
		if (displayFrom && storedFrom && displayFrom.getTime() === storedFrom.getTime() && displayTo && storedTo && displayTo.getTime() === storedTo.getTime() && displayText) return displayText;
		return "Custom period";
	})();
	const tooltip = storedFrom || storedTo ? `${formatDate(storedFrom, timeOnly)}\n÷\n${formatDate(storedTo, timeOnly)}` : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime$30.jsxs)("div", {
		className: `blong-date-range w-full ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$30.jsx)(Button, {
			type: "button",
			tooltip,
			tooltipOptions: {
				className: "text-center",
				event: "both",
				position: "top"
			},
			disabled,
			onClick: openPanel,
			className: "blong-date-range__btn w-full",
			children: buttonLabel
		}), /* @__PURE__ */ (0, import_jsx_runtime$30.jsx)(OverlayPanel, {
			ref: panelRef,
			showCloseIcon: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime$30.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$30.jsxs)("div", {
					className: "card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime$30.jsxs)("div", {
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime$30.jsx)("label", {
								htmlFor: "blongDRFrom",
								children: "From"
							}), /* @__PURE__ */ (0, import_jsx_runtime$30.jsx)(Calendar, {
								inputId: "blongDRFrom",
								value: from,
								onChange: (e) => setFrom(e.value),
								timeOnly,
								showTime: !timeOnly,
								showSeconds: true,
								showIcon: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime$30.jsxs)("div", {
							className: "field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime$30.jsx)("label", {
								htmlFor: "blongDRTo",
								children: "To"
							}), /* @__PURE__ */ (0, import_jsx_runtime$30.jsx)(Calendar, {
								inputId: "blongDRTo",
								value: to,
								minDate: from,
								onChange: (e) => setTo(e.value),
								timeOnly,
								showTime: !timeOnly,
								showSeconds: true,
								showIcon: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime$30.jsx)(Button, {
							type: "button",
							onClick: applyRange,
							disabled: !from || !to,
							children: "Apply Time Range"
						})
					]
				}), !timeOnly && /* @__PURE__ */ (0, import_jsx_runtime$30.jsx)("div", {
					className: "blong-date-range__presets",
					children: PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime$30.jsx)("div", {
						className: "blong-date-range__preset-item cursor-pointer p-2",
						onClick: (e) => applyPreset(preset, e),
						children: preset.display
					}, preset.from))
				})]
			})
		})]
	});
}
var import_react$20, import_jsx_runtime$30, PRESETS, RELATIVE_RE, INTERVALS;
function init_DateRange() {
	return (init_DateRange = __esmMin((() => {
		init_primereact();
		import_react$20 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_jsx_runtime$30 = require_jsx_runtime();
		PRESETS = [
			{
				from: "now-30m",
				display: "Last 30 minutes"
			},
			{
				from: "now-1h",
				display: "Last hour"
			},
			{
				from: "now-12h",
				display: "Last 12 hours"
			},
			{
				from: "now-24h",
				display: "Last 24 hours"
			},
			{
				from: "now-1d",
				display: "Today"
			},
			{
				from: "now-2d",
				display: "Since yesterday"
			},
			{
				from: "now-7d",
				display: "Last 7 days"
			},
			{
				from: "now-1M",
				display: "Last month"
			},
			{
				from: "now-3M",
				display: "Last 3 months"
			},
			{
				from: "now-6M",
				display: "Last 6 months"
			},
			{
				from: "now-1y",
				display: "Last 12 months"
			},
			{
				from: "now-2y",
				display: "Last 2 years"
			},
			{
				from: "now-5y",
				display: "Last 5 years"
			}
		];
		RELATIVE_RE = /^now-(\d+)(m|h|d|M|y)$/;
		INTERVALS = {
			m: 6e4,
			h: 36e5,
			d: 864e5
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/DateRangeWidget.tsx
/**
* DateRangeWidget — wraps the DateRange component.
*
* Form storage: `[Date, Date]` array (or null/undefined).
* Component interface: JSON string "[from, to]" → onChange fires `{value: [Date, Date]}`.
*/
function DateRangeWidget({ name: _name, schema, value, onChange, readOnly, disabled }) {
	const { exclusive, timeOnly } = schema.widget ?? {};
	let strValue = null;
	if (Array.isArray(value) && value.length === 2) strValue = JSON.stringify(value);
	else if (typeof value === "string") strValue = value;
	return /* @__PURE__ */ (0, import_jsx_runtime$29.jsx)(DateRange, {
		value: strValue,
		onChange: (e) => onChange(e.value),
		exclusive: Boolean(exclusive),
		timeOnly: Boolean(timeOnly),
		disabled: disabled || readOnly
	});
}
var import_jsx_runtime$29;
function init_DateRangeWidget() {
	return (init_DateRangeWidget = __esmMin((() => {
		init_DateRange();
		import_jsx_runtime$29 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/DateTimeWidget.tsx
function DateTimeWidget({ id, name, value, onChange, onBlur, error, readOnly, disabled }) {
	const dateValue = import_react$19.useMemo(() => value instanceof Date ? value : value ? new Date(value) : null, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime$28.jsx)(Calendar, {
		inputId: id ?? name,
		value: dateValue,
		onChange: (e) => onChange(e.value ?? null),
		onHide: onBlur,
		readOnlyInput: readOnly,
		disabled,
		className: `blong-datetime w-full ${error ? "p-invalid" : ""}`,
		showIcon: true,
		showOnFocus: false,
		showTime: true,
		showSeconds: true
	});
}
var import_react$19, import_jsx_runtime$28;
function init_DateTimeWidget() {
	return (init_DateTimeWidget = __esmMin((() => {
		init_primereact();
		import_react$19 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_jsx_runtime$28 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/DateWidget.tsx
function DateWidget({ id, name, value, onChange, onBlur, error, readOnly, disabled }) {
	const dateValue = import_react$18.useMemo(() => value != null ? dateIn(value) : null, [value]);
	const handleChange = import_react$18.useMemo(() => (event) => {
		if (event.value instanceof Date) event.value = dateOut(event.value);
		onChange(event.value);
	}, [onChange]);
	return /* @__PURE__ */ (0, import_jsx_runtime$27.jsx)(Calendar, {
		inputId: id ?? name,
		value: dateValue,
		onChange: handleChange,
		onHide: onBlur,
		readOnlyInput: readOnly,
		disabled: disabled || readOnly,
		className: `blong-date w-full ${error ? "p-invalid" : ""}`,
		showIcon: true,
		showOnFocus: false
	});
}
var import_react$18, import_jsx_runtime$27, dateIn, dateOut;
function init_DateWidget() {
	return (init_DateWidget = __esmMin((() => {
		init_primereact();
		import_react$18 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_jsx_runtime$27 = require_jsx_runtime();
		dateIn = (d) => {
			const dd = new Date(d);
			const properDate = new Date(new Date(d).getTime() + new Date(d).getTimezoneOffset() * 60 * 1e3);
			const timezoneDiff = properDate.getTimezoneOffset() - dd.getTimezoneOffset();
			if (!timezoneDiff) return properDate;
			return new Date(properDate.getTime() + timezoneDiff * 60 * 1e3);
		};
		dateOut = (d) => /* @__PURE__ */ new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1e3);
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/model/dropdownRegistry.ts
var DropdownRegistry, dropdownRegistry;
function init_dropdownRegistry() {
	return (init_dropdownRegistry = __esmMin((() => {
		DropdownRegistry = class {
			cache = /* @__PURE__ */ new Map();
			pending = /* @__PURE__ */ new Map();
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
			/** Clear the cache (useful in tests) */
			clear() {
				this.cache.clear();
				this.pending.clear();
			}
		};
		dropdownRegistry = new DropdownRegistry();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/DropdownTreeWidget.tsx
function DropdownTreeWidget({ id, name, schema, value, onChange, onBlur, error, readOnly, disabled }) {
	const { fetch: fetchAction, options: staticOptions, dropdown: dropdownKey } = schema.widget ?? {};
	const { handler } = useBlong();
	const [options, setOptions] = (0, import_react$17.useState)(staticOptions ?? []);
	(0, import_react$17.useEffect)(() => {
		if (staticOptions) return;
		let cancelled = false;
		if (dropdownKey) {
			const loader = (key) => handler.portalDropdownList({ names: [key] }, {}).then((result) => result[key]);
			dropdownRegistry.get(dropdownKey, loader).then((data) => {
				if (!cancelled) setOptions(data);
			}).catch(() => {});
			return () => {
				cancelled = true;
			};
		}
		if (!fetchAction) return;
		handler[fetchAction]({}, {}).then((data) => {
			if (!cancelled) setOptions(Array.isArray(data) ? data : []);
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [
		fetchAction,
		dropdownKey,
		handler,
		staticOptions
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime$26.jsx)(TreeSelect, {
		inputId: id ?? name,
		"data-testid": id ?? name,
		value: value == null ? null : String(value),
		options,
		onChange: (e) => onChange(e.value ?? null),
		onHide: onBlur,
		disabled: disabled || readOnly,
		className: `blong-dropdown-tree w-full ${error ? "p-invalid" : ""}`,
		placeholder: schema.placeholder ?? "Select…"
	});
}
var import_react$17, import_jsx_runtime$26;
function init_DropdownTreeWidget() {
	return (init_DropdownTreeWidget = __esmMin((() => {
		import_react$17 = require_react();
		init_BlongContext();
		init_dropdownRegistry();
		init_primereact();
		import_jsx_runtime$26 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/DropdownWidget.tsx
function toOptions$2(data) {
	if (!Array.isArray(data)) return [];
	return data.map((item) => ({
		...item,
		label: String(item.label ?? item.name ?? item.value ?? item),
		value: item.value ?? item
	}));
}
/**
* Core rendering logic for DropdownWidget.
* Receives `parentValue` already resolved — either from `useWatch` (inside a Form)
* or `undefined` (standalone / no cascade needed).
*/
function DropdownCore({ id, name, schema, value, onChange, onBlur, error, readOnly, disabled, parentValue }) {
	const { fetch: fetchAction, options: staticOptions, dropdown: dropdownKey, parent } = schema.widget ?? {};
	const { handler } = useBlong();
	const [options, setOptions] = (0, import_react$16.useState)(() => staticOptions ? toOptions$2(staticOptions) : []);
	const prevParentValueRef = (0, import_react$16.useRef)(parentValue);
	(0, import_react$16.useEffect)(() => {
		if (parent === void 0) return;
		if (prevParentValueRef.current !== parentValue) {
			prevParentValueRef.current = parentValue;
			if (value !== void 0 && value !== null) onChange(void 0);
		}
	}, [
		parentValue,
		parent,
		onChange,
		value
	]);
	(0, import_react$16.useEffect)(() => {
		let cancelled = false;
		if (staticOptions) return;
		if (dropdownKey) {
			const loader = (key) => handler.portalDropdownList({ names: [key] }, {}).then((result) => toOptions$2(result[key]));
			dropdownRegistry.get(dropdownKey, loader).then((data) => {
				if (!cancelled) setOptions(data);
			}).catch(() => {});
			return () => {
				cancelled = true;
			};
		}
		if (!fetchAction) return;
		const params = {};
		if (parent && parentValue !== void 0) params[parent] = parentValue;
		handler[fetchAction](params, {}).then((data) => {
			if (!cancelled) setOptions(toOptions$2(data));
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [
		fetchAction,
		dropdownKey,
		handler,
		parentValue
	]);
	const visibleOptions = parent && parentValue !== void 0 ? options.filter((o) => {
		const opt = o;
		return opt[parent] === parentValue || opt["parent"] === parentValue;
	}) : options;
	if (readOnly) {
		const found = visibleOptions.find((o) => o.value === value);
		return /* @__PURE__ */ (0, import_jsx_runtime$25.jsx)("span", {
			className: "blong-display",
			children: found?.label ?? (value != null ? String(value) : "")
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$25.jsx)(Dropdown, {
		inputId: id ?? name,
		"data-testid": id ?? name,
		value,
		options: visibleOptions,
		onChange: (e) => onChange(e.value),
		onHide: onBlur,
		disabled: disabled || !!parent && (parentValue === void 0 || parentValue === null),
		className: `blong-dropdown w-full ${error ? "p-invalid" : ""}`,
		showClear: !schema.fieldRequired,
		filter: visibleOptions.length > 8,
		placeholder: schema.placeholder ?? "Select…"
	});
}
/**
* Connected variant — uses `useWatch` to subscribe only to the specific parent field.
* This component is only rendered when inside a Form that has a `control` and a `parent`
* field is configured.  It re-renders only when the parent field value changes, not on
* every keystroke in any other field.
*/
function ConnectedDropdown({ parentFieldName, control, ...props }) {
	const parentValue = useWatch({
		control,
		name: parentFieldName
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$25.jsx)(DropdownCore, {
		...props,
		parentValue
	});
}
/**
* DropdownWidget — wraps PrimeReact Dropdown with cascade-filtering support.
*
* When a `parent` field is configured in the schema and the widget is rendered inside
* a Form, it delegates to `ConnectedDropdown` which subscribes only to that specific
* parent field via `useWatch`.  This means the dropdown only rerenders when the parent
* field changes — not on every keystroke in any field.
*
* When used standalone (no Form context / no parent), rendering is handled directly.
*/
function DropdownWidget(props) {
	const formCtx = useBlongForm();
	const parent = props.schema.widget?.parent;
	if (formCtx?.control && parent) return /* @__PURE__ */ (0, import_jsx_runtime$25.jsx)(ConnectedDropdown, {
		...props,
		parentFieldName: parent,
		control: formCtx.control
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$25.jsx)(DropdownCore, {
		...props,
		parentValue: void 0
	});
}
var import_react$16, import_jsx_runtime$25;
function init_DropdownWidget() {
	return (init_DropdownWidget = __esmMin((() => {
		init_primereact();
		import_react$16 = require_react();
		init_index_esm();
		init_FormContext();
		init_BlongContext();
		init_dropdownRegistry();
		import_jsx_runtime$25 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/FileWidget.tsx
function FileWidget({ name: _name, schema, onChange, error: _error, readOnly, disabled }) {
	const uploadRef = (0, import_react$15.useRef)(null);
	const { accept, maxSize = 5e6 } = schema.widget ?? {};
	if (readOnly || disabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$24.jsx)(FileUpload, {
		ref: uploadRef,
		mode: "basic",
		accept: accept ?? "*",
		maxFileSize: maxSize,
		customUpload: true,
		uploadHandler: (e) => {
			onChange(e.files[0] ?? null);
			uploadRef.current?.clear();
		},
		className: "blong-file",
		auto: true,
		chooseLabel: "Choose",
		chooseOptions: FILE_UPLOAD_OPTIONS$2,
		uploadOptions: FILE_UPLOAD_OPTIONS$2,
		cancelOptions: FILE_UPLOAD_OPTIONS$2
	});
}
var import_react$15, import_jsx_runtime$24, FILE_UPLOAD_OPTIONS$2;
function init_FileWidget() {
	return (init_FileWidget = __esmMin((() => {
		init_primereact();
		import_react$15 = require_react();
		import_jsx_runtime$24 = require_jsx_runtime();
		FILE_UPLOAD_OPTIONS$2 = {
			label: void 0,
			icon: void 0,
			iconOnly: false,
			className: void 0,
			style: void 0
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/ImageUploadWidget.tsx
/**
* ImageUploadWidget — advanced FileUpload with image preview.
* `value` can be a string URL or an array of File objects `[{objectURL: string}]`.
*/
function ImageUploadWidget({ name: _name, schema, value, onChange, readOnly, disabled }) {
	const { maxSize = 2e6, basePath = "" } = schema.widget ?? {};
	let src = null;
	if (Array.isArray(value)) src = value[0]?.objectURL ?? null;
	else if (value) src = basePath + String(value);
	const imagePreview = src ? /* @__PURE__ */ (0, import_jsx_runtime$23.jsx)(Image, {
		imageClassName: "w-full",
		preview: true,
		src
	}) : /* @__PURE__ */ (0, import_jsx_runtime$23.jsx)("div", { children: "No picture..." });
	if (readOnly || disabled) return src ? /* @__PURE__ */ (0, import_jsx_runtime$23.jsx)(Image, {
		imageClassName: "w-full",
		preview: true,
		src
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime$23.jsx)(FileUpload, {
		accept: "image/*",
		multiple: false,
		maxFileSize: maxSize,
		onSelect: (e) => onChange([...e.files]),
		chooseOptions: FILE_UPLOAD_OPTIONS$1,
		uploadOptions: FILE_UPLOAD_OPTIONS$1,
		cancelOptions: FILE_UPLOAD_OPTIONS$1,
		headerTemplate: (options) => {
			const { className, chooseButton } = options;
			return /* @__PURE__ */ (0, import_jsx_runtime$23.jsx)("div", {
				className,
				children: chooseButton
			});
		},
		itemTemplate: () => imagePreview,
		emptyTemplate: () => imagePreview,
		className: "blong-image-upload"
	});
}
var import_jsx_runtime$23, FILE_UPLOAD_OPTIONS$1;
function init_ImageUploadWidget() {
	return (init_ImageUploadWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$23 = require_jsx_runtime();
		FILE_UPLOAD_OPTIONS$1 = {
			label: void 0,
			icon: void 0,
			iconOnly: false,
			className: void 0,
			style: void 0
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/ImageWidget.tsx
function ImageWidget({ name: _name, schema, value, onChange, error: _error, readOnly, disabled }) {
	const uploadRef = (0, import_react$14.useRef)(null);
	const { maxSize = 2e6 } = schema.widget ?? {};
	const [preview, setPreview] = (0, import_react$14.useState)(typeof value === "string" ? value : null);
	if (readOnly || disabled) return preview ? /* @__PURE__ */ (0, import_jsx_runtime$22.jsx)("img", {
		src: preview,
		alt: "",
		className: "blong-image-preview",
		style: {
			maxWidth: 240,
			maxHeight: 160
		}
	}) : null;
	const handleUpload = (e) => {
		const file = e.files[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = (ev) => {
			const dataUrl = ev.target?.result;
			setPreview(dataUrl);
			onChange(dataUrl);
		};
		reader.readAsDataURL(file);
		uploadRef.current?.clear();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$22.jsxs)("div", {
		className: "blong-image-widget",
		children: [preview && /* @__PURE__ */ (0, import_jsx_runtime$22.jsx)("img", {
			src: preview,
			alt: "",
			className: "blong-image-preview",
			style: {
				maxWidth: 240,
				maxHeight: 160,
				display: "block",
				marginBottom: 8
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime$22.jsx)(FileUpload, {
			ref: uploadRef,
			mode: "basic",
			accept: "image/*",
			maxFileSize: maxSize,
			customUpload: true,
			uploadHandler: handleUpload,
			className: "blong-image",
			auto: true,
			chooseLabel: "Upload image",
			chooseOptions: FILE_UPLOAD_OPTIONS,
			uploadOptions: FILE_UPLOAD_OPTIONS,
			cancelOptions: FILE_UPLOAD_OPTIONS
		})]
	});
}
var import_react$14, import_jsx_runtime$22, FILE_UPLOAD_OPTIONS;
function init_ImageWidget() {
	return (init_ImageWidget = __esmMin((() => {
		init_primereact();
		import_react$14 = require_react();
		import_jsx_runtime$22 = require_jsx_runtime();
		FILE_UPLOAD_OPTIONS = {
			label: void 0,
			icon: void 0,
			iconOnly: false,
			className: void 0,
			style: void 0
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/IntegerWidget.tsx
function IntegerWidget({ id, name, schema, value, onChange, onBlur, error, readOnly, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$21.jsx)(InputNumber, {
		inputId: id ?? name,
		name,
		value: value == null ? null : Number(value),
		onValueChange: (e) => onChange(e.value),
		onBlur,
		readOnly,
		disabled,
		className: `blong-integer w-full ${error ? "p-invalid" : ""}`,
		inputClassName: "w-full text-right",
		showButtons: true,
		min: schema.minimum,
		max: schema.maximum
	});
}
var import_jsx_runtime$21;
function init_IntegerWidget() {
	return (init_IntegerWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$21 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/JsonWidget.tsx
function JsonWidget({ name, value, onChange, onBlur, error, readOnly, disabled }) {
	const serialized = value == null ? "" : typeof value === "string" ? value : JSON.stringify(value, null, 2);
	const [parseError, setParseError] = (0, import_react$13.useState)(null);
	const [raw, setRaw] = (0, import_react$13.useState)(serialized);
	const handleChange = (text) => {
		setRaw(text);
		try {
			onChange(JSON.parse(text));
			setParseError(null);
		} catch {
			setParseError("Invalid JSON");
		}
	};
	const format = () => {
		try {
			const parsed = JSON.parse(raw);
			const pretty = JSON.stringify(parsed, null, 2);
			setRaw(pretty);
			setParseError(null);
		} catch {
			setParseError("Invalid JSON");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$20.jsxs)("div", {
		className: "blong-json-widget",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$20.jsx)(InputTextarea, {
				id: name,
				value: raw,
				onChange: (e) => handleChange(e.target.value),
				onBlur,
				readOnly,
				disabled,
				className: `blong-json-input ${error || parseError ? "p-invalid" : ""}`,
				rows: 6,
				autoResize: true
			}),
			!readOnly && !disabled && /* @__PURE__ */ (0, import_jsx_runtime$20.jsx)(Button, {
				icon: "pi pi-align-left",
				className: "p-button-text p-button-sm blong-json-format",
				onClick: format,
				type: "button",
				tooltip: "Format JSON"
			}),
			parseError && /* @__PURE__ */ (0, import_jsx_runtime$20.jsx)("small", {
				className: "p-error",
				children: parseError
			})
		]
	});
}
var import_react$13, import_jsx_runtime$20;
function init_JsonWidget() {
	return (init_JsonWidget = __esmMin((() => {
		init_primereact();
		import_react$13 = require_react();
		import_jsx_runtime$20 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/MaskWidget.tsx
function MaskWidget({ id, name, schema, value, onChange, onBlur, error, readOnly, disabled }) {
	const mask = schema.widget?.mask ?? "999.999.999.999";
	return /* @__PURE__ */ (0, import_jsx_runtime$19.jsx)(InputMask, {
		id: id ?? name,
		name,
		value: value == null ? "" : String(value),
		onChange: (e) => onChange(e.target.value),
		onBlur,
		readOnly,
		disabled,
		className: `blong-mask w-full ${error ? "p-invalid" : ""}`,
		mask
	});
}
var import_jsx_runtime$19;
function init_MaskWidget() {
	return (init_MaskWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$19 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/MultiSelectTreeTableWidget.tsx
function MultiSelectTreeTableWidget({ id, name, schema, value, onChange, error, readOnly, disabled }) {
	const { fetch: fetchAction, options: staticOptions, dropdown: dropdownKey } = schema.widget ?? {};
	const { handler } = useBlong();
	const [options, setOptions] = (0, import_react$12.useState)(staticOptions ?? []);
	(0, import_react$12.useEffect)(() => {
		if (staticOptions) return;
		let cancelled = false;
		if (dropdownKey) {
			const loader = (key) => handler.portalDropdownList({ names: [key] }, {}).then((result) => result[key]);
			dropdownRegistry.get(dropdownKey, loader).then((data) => {
				if (!cancelled) setOptions(data);
			}).catch(() => {});
			return () => {
				cancelled = true;
			};
		}
		if (!fetchAction) return;
		handler[fetchAction]({}, {}).then((data) => {
			if (!cancelled) setOptions(Array.isArray(data) ? data : []);
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [
		fetchAction,
		dropdownKey,
		handler,
		staticOptions
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)(TreeTable, {
		"data-testid": id ?? name,
		value: options,
		selectionKeys: value,
		onSelectionChange: (e) => onChange(e.value ?? null),
		selectionMode: "checkbox",
		disabled: disabled || readOnly,
		className: `blong-multiselect-tree-table w-full ${error ? "p-invalid" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)(Column, {
			expander: true,
			body: (node) => node.label
		})
	});
}
var import_react$12, import_jsx_runtime$18;
function init_MultiSelectTreeTableWidget() {
	return (init_MultiSelectTreeTableWidget = __esmMin((() => {
		import_react$12 = require_react();
		init_BlongContext();
		init_dropdownRegistry();
		init_primereact();
		import_jsx_runtime$18 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/MultiSelectTreeWidget.tsx
function MultiSelectTreeWidget({ id, name, schema, value, onChange, onBlur, error, readOnly, disabled }) {
	const { fetch: fetchAction, options: staticOptions, dropdown: dropdownKey } = schema.widget ?? {};
	const { handler } = useBlong();
	const [options, setOptions] = (0, import_react$11.useState)(staticOptions ?? []);
	(0, import_react$11.useEffect)(() => {
		if (staticOptions) return;
		let cancelled = false;
		if (dropdownKey) {
			const loader = (key) => handler.portalDropdownList({ names: [key] }, {}).then((result) => result[key]);
			dropdownRegistry.get(dropdownKey, loader).then((data) => {
				if (!cancelled) setOptions(data);
			}).catch(() => {});
			return () => {
				cancelled = true;
			};
		}
		if (!fetchAction) return;
		handler[fetchAction]({}, {}).then((data) => {
			if (!cancelled) setOptions(Array.isArray(data) ? data : []);
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [
		fetchAction,
		dropdownKey,
		handler,
		staticOptions
	]);
	const treeValue = Object.fromEntries((Array.isArray(value) ? value : []).map((v) => [v, true]));
	return /* @__PURE__ */ (0, import_jsx_runtime$17.jsx)(TreeSelect, {
		inputId: id ?? name,
		"data-testid": id ?? name,
		value: treeValue,
		options,
		selectionMode: "multiple",
		display: "chip",
		metaKeySelection: false,
		onChange: (e) => onChange(e.value && typeof e.value === "object" ? Object.keys(e.value) : []),
		onHide: onBlur,
		disabled: disabled || readOnly,
		className: `blong-multiselect-tree w-full ${error ? "p-invalid" : ""}`,
		placeholder: schema.placeholder ?? "Select…"
	});
}
var import_react$11, import_jsx_runtime$17;
function init_MultiSelectTreeWidget() {
	return (init_MultiSelectTreeWidget = __esmMin((() => {
		import_react$11 = require_react();
		init_BlongContext();
		init_dropdownRegistry();
		init_primereact();
		import_jsx_runtime$17 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/MultiSelectWidget.tsx
function toOptions$1(data) {
	if (!Array.isArray(data)) return [];
	return data.map((item) => ({
		label: String(item.label ?? item.name ?? item.value ?? item),
		value: item.value ?? item
	}));
}
function MultiSelectWidget({ id, name, schema, value, onChange, onBlur, error, readOnly, disabled }) {
	const { fetch: fetchAction, options: staticOptions, dropdown: dropdownKey, type: widgetType } = schema.widget ?? {};
	const { handler } = useBlong();
	const [options, setOptions] = (0, import_react$10.useState)(() => staticOptions ? toOptions$1(staticOptions) : []);
	(0, import_react$10.useEffect)(() => {
		let cancelled = false;
		if (staticOptions) return;
		if (dropdownKey) {
			const loader = (key) => handler.portalDropdownList({ names: [key] }, {}).then((result) => toOptions$1(result[key]));
			dropdownRegistry.get(dropdownKey, loader).then((data) => {
				if (!cancelled) setOptions(data);
			}).catch(() => {});
			return () => {
				cancelled = true;
			};
		}
		if (!fetchAction) return;
		handler[fetchAction]({}, {}).then((data) => {
			if (!cancelled) setOptions(toOptions$1(data));
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [
		fetchAction,
		dropdownKey,
		handler,
		staticOptions
	]);
	const arrValue = Array.isArray(value) ? value : value != null ? [value] : [];
	const isPanel = widgetType === "multiSelectPanel";
	if (readOnly && !isPanel) {
		const labels = arrValue.map((v) => options.find((o) => o.value === v)?.label ?? String(v));
		return /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)("span", {
			className: "blong-display",
			children: labels.join(", ")
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)(MultiSelect, {
		inputId: id ?? name,
		"data-testid": id ?? name,
		value: arrValue,
		options,
		onChange: readOnly ? void 0 : (e) => onChange(e.value),
		onHide: isPanel || readOnly ? void 0 : onBlur,
		disabled: disabled || readOnly,
		className: `blong-multiselect w-full ${error ? "p-invalid" : ""}`,
		display: "chip",
		filter: !isPanel && options.length > 8,
		placeholder: schema.placeholder ?? "Select…",
		...isPanel ? {
			inline: true,
			flex: true,
			itemClassName: "col-3"
		} : {}
	});
}
var import_react$10, import_jsx_runtime$16;
function init_MultiSelectWidget() {
	return (init_MultiSelectWidget = __esmMin((() => {
		init_primereact();
		import_react$10 = require_react();
		init_BlongContext();
		init_dropdownRegistry();
		import_jsx_runtime$16 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/NavigatorWidget.tsx
function buildTree(items, keyField, parentField, labelField) {
	const roots = [];
	const map = /* @__PURE__ */ new Map();
	for (const item of items) {
		const node = {
			key: String(item[keyField]),
			label: String(item[labelField] ?? item[keyField]),
			data: item,
			children: []
		};
		map.set(item[keyField], node);
	}
	for (const item of items) {
		const parentKey = item[parentField];
		const node = map.get(item[keyField]);
		if (parentKey == null || !map.has(parentKey)) roots.push(node);
		else {
			const parent = map.get(parentKey);
			parent.children = [...parent.children ?? [], node];
		}
	}
	return roots;
}
function NavigatorWidget({ name, schema, value, onSelect }) {
	const { handler, log } = useBlong();
	const widget = schema.widget;
	const listAction = widget?.listAction ?? "";
	const resultSet = widget?.resultSet ?? "items";
	const keyField = widget?.keyField ?? "id";
	const parentField = widget?.parentField ?? "parentId";
	const labelField = widget?.labelField ?? "name";
	const title = widget?.label;
	const staticRows = !listAction && Array.isArray(value) ? value : void 0;
	const [treeData, setTreeData] = (0, import_react$9.useState)(() => {
		if (staticRows) return buildTree(staticRows, keyField, parentField, labelField);
		return [];
	});
	const [expandedKeys, setExpandedKeys] = (0, import_react$9.useState)(() => {
		if (staticRows) {
			const keys = {};
			for (const item of staticRows) if (item[parentField] == null) keys[String(item[keyField])] = true;
			return keys;
		}
		return {};
	});
	const setTreeDataAndExpand = import_react$9.useCallback(async (items) => {
		const data = buildTree(items, keyField, parentField, labelField);
		setTreeData(data);
		setExpandedKeys(data.reduce((acc, node) => ({
			...acc,
			[String(node.key)]: true
		}), {}));
		if (items.length) {
			const firstKey = String(items[0][keyField]);
			setSelectedKey(firstKey);
			onSelect?.(name, {
				row: items[0],
				index: 0
			});
		}
	}, [
		keyField,
		parentField,
		labelField,
		name,
		onSelect
	]);
	const [loading, setLoading] = (0, import_react$9.useState)(false);
	const [selectedKey, setSelectedKey] = (0, import_react$9.useState)(null);
	(0, import_react$9.useEffect)(() => {
		if (!listAction) return;
		setLoading(true);
		const params = widget?.listParams ?? {};
		handler[listAction](params, {}).then((result) => {
			let items;
			if (resultSet && Array.isArray(result[resultSet])) items = result[resultSet];
			else if (Array.isArray(result)) items = result;
			else {
				const firstArray = Object.values(result).find((v) => Array.isArray(v));
				if (firstArray) {
					log?.warn?.(`[NavigatorWidget] listAction "${listAction}" did not return expected resultSet "${resultSet}"; using first array property.`);
					items = firstArray;
				} else items = [];
			}
			setTreeDataAndExpand(items).catch((err) => {
				log?.error?.("[NavigatorWidget] Error setting tree data:", err);
			});
		}).finally(() => setLoading(false));
	}, [
		listAction,
		widget?.listParams,
		resultSet,
		keyField,
		parentField,
		labelField,
		handler,
		setTreeDataAndExpand,
		log
	]);
	(0, import_react$9.useEffect)(() => {
		if (staticRows) setTreeDataAndExpand(staticRows).catch((err) => {
			log?.error?.("[NavigatorWidget] Error setting tree data:", err);
		});
	}, [
		staticRows,
		setTreeDataAndExpand,
		log
	]);
	const handleSelection = (key) => {
		if (key == null) return;
		setSelectedKey(key);
		const findNode = (nodes) => {
			for (const n of nodes) {
				if (n.key === key) return n;
				const found = findNode(n.children ?? []);
				if (found) return found;
			}
		};
		const node = findNode(treeData);
		onSelect?.(name, node ? {
			row: node.data,
			index: 0
		} : null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)("div", {
		className: "blong-navigator w-full",
		style: {
			height: "100%",
			display: "flex",
			flexDirection: "column"
		},
		children: [title && /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("h4", {
			className: "blong-navigator__title",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(Tree, {
			value: treeData,
			expandedKeys,
			onToggle: (e) => setExpandedKeys(e.value),
			loading,
			selectionMode: "single",
			selectionKeys: selectedKey ?? void 0,
			onSelectionChange: (e) => handleSelection(e.value),
			className: "border-none p-0 blong-navigator__tree",
			filterPlaceholder: "Search…",
			style: {
				flex: 1,
				overflow: "auto"
			}
		})]
	});
}
var import_react$9, import_jsx_runtime$15;
function init_NavigatorWidget() {
	return (init_NavigatorWidget = __esmMin((() => {
		import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_BlongContext();
		init_primereact();
		import_jsx_runtime$15 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/NumberWidget.tsx
function NumberWidget({ id, name, schema, value, onChange, onBlur, error, readOnly, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)(InputNumber, {
		inputId: id ?? name,
		name,
		value: value == null ? null : Number(value),
		onValueChange: (e) => onChange(e.value),
		onBlur,
		readOnly,
		disabled,
		className: `blong-number w-full ${error ? "p-invalid" : ""}`,
		inputClassName: "text-right",
		min: schema.minimum,
		max: schema.maximum,
		useGrouping: true
	});
}
var import_jsx_runtime$14;
function init_NumberWidget() {
	return (init_NumberWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$14 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/PasswordWidget.tsx
function PasswordWidget({ id, name, value, onChange, onBlur, error, readOnly, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(Password, {
		inputId: id ?? name,
		name,
		value: value == null ? "" : String(value),
		onChange: (e) => onChange(e.target.value || null),
		onBlur,
		readOnly,
		disabled,
		className: `blong-password w-full ${error ? "p-invalid" : ""}`,
		toggleMask: true,
		role: "textbox",
		inputClassName: "w-full"
	});
}
var import_jsx_runtime$13;
function init_PasswordWidget() {
	return (init_PasswordWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$13 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/SelectTableWidget.tsx
function toOptions(data) {
	if (!Array.isArray(data)) return [];
	return data.map((item) => ({
		...item,
		label: String(item.label ?? item.name ?? item.value ?? item),
		value: item.value ?? item
	}));
}
/**
* SelectTableWidget — DataTable with row selection.
* Source rows come from the dropdown registry (same as `dropdown`).
* `value` stores the selected row's `value` key (single mode) or an array of keys (multi mode).
*/
function SelectTableWidget({ id, name: _name, schema, value, onChange, error, readOnly, disabled }) {
	const { fetch: fetchAction, options: staticOptions, dropdown: dropdownKey, selectionMode = "single", columns } = schema.widget ?? {};
	const { handler } = useBlong();
	const [rows, setRows] = (0, import_react$8.useState)(() => staticOptions ? toOptions(staticOptions) : []);
	(0, import_react$8.useEffect)(() => {
		if (staticOptions) return;
		let cancelled = false;
		if (dropdownKey) {
			const loader = (key) => handler.portalDropdownList({ names: [key] }, {}).then((result) => toOptions(result[key]));
			dropdownRegistry.get(dropdownKey, loader).then((data) => {
				if (!cancelled) setRows(data);
			}).catch(() => {});
			return () => {
				cancelled = true;
			};
		}
		if (!fetchAction) return;
		handler[fetchAction]({}, {}).then((data) => {
			if (!cancelled) setRows(toOptions(data));
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [
		fetchAction,
		dropdownKey,
		handler,
		staticOptions
	]);
	const isSingle = selectionMode === "single";
	const selectedRows = isSingle ? rows.find((r) => r.value === value) ?? null : rows.filter((r) => value?.includes(r.value));
	const cols = Array.isArray(columns) ? columns : (columns ? Object.keys(columns) : null) ?? (schema.items?.properties ? Object.keys(schema.items.properties) : ["label"]);
	const colHeaders = schema.items?.properties ? Object.fromEntries(Object.entries(schema.items.properties).map(([k, v]) => [k, v.title ?? k])) : {};
	return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(DataTable, {
		value: rows,
		dataKey: "value",
		"data-testid": id ?? _name,
		size: "small",
		selectionMode: isSingle ? "single" : "multiple",
		selection: selectedRows,
		onSelectionChange: (e) => {
			if (disabled || readOnly) return;
			if (isSingle) onChange(e.value?.value ?? null);
			else onChange(e.value.map((r) => r.value));
		},
		metaKeySelection: false,
		className: `blong-select-table w-full ${error ? "p-invalid" : ""}`,
		children: cols.map((field) => /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(Column, {
			field,
			header: colHeaders[field] ?? field
		}, field))
	});
}
var import_react$8, import_jsx_runtime$12;
function init_SelectTableWidget() {
	return (init_SelectTableWidget = __esmMin((() => {
		init_primereact();
		import_react$8 = require_react();
		init_BlongContext();
		init_dropdownRegistry();
		import_jsx_runtime$12 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/SelectWidget.tsx
function SelectWidget({ id, name, schema, value, onChange, onBlur, error: _error, readOnly, disabled }) {
	const { options = [] } = schema.widget ?? {};
	return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", {
		id: id ?? name,
		"data-testid": id ?? name,
		className: "blong-select-wrapper",
		children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(SelectButton, {
			value,
			options,
			onChange: (e) => {
				onChange(e.value);
				onBlur();
			},
			disabled: disabled || readOnly,
			className: "blong-select"
		})
	});
}
var import_jsx_runtime$11;
function init_SelectWidget() {
	return (init_SelectWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$11 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/TableWidget.tsx
function resolveWidgetType$1(schema) {
	if (schema.widget?.type) return schema.widget.type;
	if (schema.widget?.cycle || schema.widget?.states) return "cycle";
	if (schema.action) return "action";
	if (schema.type === "boolean") return "boolean";
	if (schema.type === "number") return "number";
	if (schema.type === "integer") return "integer";
	if (schema.format === "date-time") return "dateTime";
	if (schema.format === "date") return "date";
	return "input";
}
function resolveCycleStates(schema) {
	const cfg = schema.widget;
	if (cfg?.states?.length) return cfg.states;
	if (cfg?.cycle && CYCLE_PRESETS[cfg.cycle]) return CYCLE_PRESETS[cfg.cycle];
	return CYCLE_PRESETS["tri-state"];
}
function isCycleCell(schema) {
	return schema.widget?.type === "cycle" || !!schema.widget?.cycle || !!schema.widget?.states;
}
/** Cycle values compare loosely, so `true`/`1` and `null`/`undefined` are one state. */
function sameCycleValue(a, b) {
	if (a == null || b == null) return (a ?? null) === (b ?? null);
	if (typeof a === "boolean" || typeof b === "boolean") return Boolean(a) === Boolean(b);
	return a === b;
}
function currentCycleState(states, value) {
	return states.find((s) => sameCycleValue(s.value, value));
}
/** An unset cell advances to the first state of the cycle. */
function nextCycleState(states, value) {
	return states[(states.findIndex((s) => sameCycleValue(s.value, value)) + 1) % states.length];
}
function getColumnOptions(schema, dropdowns) {
	const raw = schema.widget?.options ?? (schema.widget?.dropdown && dropdowns?.[schema.widget.dropdown]);
	if (!Array.isArray(raw)) return [];
	return raw;
}
function resolveColumns(widget, items) {
	const properties = items?.properties;
	const cols = widget?.columns;
	if (cols && Array.isArray(cols)) return cols.map((c) => ({
		field: c,
		header: label(properties?.[c]?.title, c),
		filter: !!(properties?.[c])?.filter,
		sortable: !!(properties?.[c])?.sort,
		fieldSchema: properties?.[c] ?? {}
	}));
	if (cols && typeof cols === "object") return Object.entries(cols).map(([field, cfg]) => ({
		field,
		header: label(cfg?.title, field),
		fieldSchema: properties?.[field] ?? {}
	}));
	const hidden = new Set(widget?.hidden ?? []);
	const show = cols ? Array.isArray(cols) ? cols : Object.keys(cols) : null;
	if (properties) return Object.entries(properties).filter(([field]) => !hidden.has(field) && (!show || show.includes(field))).map(([field, schema]) => ({
		field,
		header: label(schema.title, field),
		filter: !!schema.filter,
		sortable: !!schema.sort,
		fieldSchema: schema
	}));
	return [];
}
function newRow(colFields, properties) {
	const row = {};
	for (const field of colFields) {
		const schema = properties?.[field];
		if (schema && "default" in schema) row[field] = schema.default;
		else if (schema?.type === "boolean" || schema?.widget?.type === "boolean") row[field] = false;
		else if (schema?.type === "number" || schema?.type === "integer" || [
			"number",
			"integer",
			"currency",
			"percent"
		].includes(schema?.widget?.type ?? "")) row[field] = null;
		else row[field] = "";
	}
	row[KEY] = Math.random().toString();
	return row;
}
function renderBody(widgetType, field, rowData, cellId, options, keyFieldName, fieldSchema, onCycle) {
	const value = rowData[field];
	switch (widgetType) {
		case "action": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(ActionButton, {
			label: String(value),
			className: "p-button-link p-0",
			action: fieldSchema?.action,
			params: {
				[keyFieldName]: rowData[keyFieldName],
				id: rowData[keyFieldName],
				current: rowData
			}
		});
		case "cycle": {
			const states = resolveCycleStates(fieldSchema);
			const state = currentCycleState(states, value);
			return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
				"data-testid": cellId,
				className: "blong-cycle cursor-pointer",
				title: state?.label ?? "Not set",
				onClick: (event) => {
					event.stopPropagation();
					onCycle?.(nextCycleState(states, value).value);
				},
				children: state?.icon ? /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("i", { className: state.icon }) : /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", { children: "\xA0" })
			});
		}
		case "password": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
			"data-testid": cellId,
			children: value ? "*".repeat(10) : ""
		});
		case "dropdown": {
			const item = options.find((o) => o.value === value);
			return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
				"data-testid": cellId,
				children: item?.label ?? (value != null ? String(value) : "")
			});
		}
		case "dropdownTree": {
			function findLabel(nodes, v) {
				for (const n of nodes) {
					if (n.key === v || n.value === v) return n.label;
					if (Array.isArray(n.children)) {
						const found = findLabel(n.children, v);
						if (found != null) return found;
					}
				}
			}
			return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
				"data-testid": cellId,
				children: findLabel(options, value) ?? (value != null ? String(value) : "")
			});
		}
		case "multiSelect":
		case "multiSelectTree": {
			const labels = (Array.isArray(value) ? value : []).map((v) => options.find((o) => o.value === v)?.label ?? String(v));
			return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
				"data-testid": cellId,
				children: labels.join(", ")
			});
		}
		case "select": {
			const item = options.find((o) => o.value === value);
			return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
				"data-testid": cellId,
				children: item?.label ?? (value != null ? String(value) : "")
			});
		}
		case "date":
			if (value == null) return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", { "data-testid": cellId });
			try {
				const d = dateIn(value);
				return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
					"data-testid": cellId,
					children: d instanceof Date ? d.toLocaleDateString() : String(value)
				});
			} catch {
				return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
					"data-testid": cellId,
					children: String(value)
				});
			}
		case "time": {
			if (value == null) return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", { "data-testid": cellId });
			const d = value instanceof Date ? value : new Date(value);
			return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
				"data-testid": cellId,
				children: isNaN(d.getTime()) ? String(value) : d.toLocaleTimeString()
			});
		}
		case "dateTime":
			if (value == null) return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", { "data-testid": cellId });
			try {
				const d = dateIn(value);
				return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
					"data-testid": cellId,
					children: d instanceof Date ? d.toLocaleString() : String(value)
				});
			} catch {
				return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
					"data-testid": cellId,
					children: String(value)
				});
			}
		case "number":
		case "integer":
		case "currency":
		case "percent": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
			"data-testid": cellId,
			className: "block text-right",
			children: value != null ? String(value) : ""
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
			"data-testid": cellId,
			children: value != null ? String(value) : ""
		});
	}
}
function renderEditor(widgetType, fieldSchema, field, rowData, cellId, cellName, editorCallback, options) {
	const value = rowData[field];
	switch (widgetType) {
		case "integer": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(InputNumber, {
			inputId: cellId,
			name: cellName,
			"data-testid": cellId,
			value: value == null ? null : Number(value),
			onValueChange: (e) => editorCallback(e.value),
			className: "w-full",
			inputClassName: "w-full text-right",
			showButtons: true,
			min: fieldSchema.minimum,
			max: fieldSchema.maximum
		});
		case "number": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(InputNumber, {
			inputId: cellId,
			name: cellName,
			"data-testid": cellId,
			value: value == null ? null : Number(value),
			onValueChange: (e) => editorCallback(e.value),
			className: "w-full",
			inputClassName: "w-full text-right",
			min: fieldSchema.minimum,
			max: fieldSchema.maximum
		});
		case "currency":
		case "percent": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(InputNumber, {
			inputId: cellId,
			name: cellName,
			"data-testid": cellId,
			value: value == null ? null : Number(value),
			onValueChange: (e) => editorCallback(e.value),
			className: "w-full",
			inputClassName: "w-full text-right",
			mode: "decimal",
			minFractionDigits: 2,
			maxFractionDigits: 4,
			min: fieldSchema.minimum,
			max: fieldSchema.maximum
		});
		case "dropdown":
		case "dropdownTree": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Dropdown, {
			inputId: cellId,
			name: cellName,
			"data-testid": cellId,
			value,
			options,
			onChange: (e) => editorCallback(e.value),
			className: "w-full blong-dropdown",
			showClear: !fieldSchema.fieldRequired,
			placeholder: "Select…",
			filter: options.length > 8
		});
		case "multiSelect":
		case "multiSelectTree": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(MultiSelect, {
			inputId: cellId,
			name: cellName,
			"data-testid": cellId,
			value: Array.isArray(value) ? value : [],
			options,
			onChange: (e) => editorCallback(e.value),
			className: "w-full blong-multiselect",
			display: "chip",
			placeholder: "Select…"
		});
		case "select": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(SelectButton, {
			id: cellId,
			name: cellName,
			"data-testid": cellId,
			value,
			options,
			onChange: (e) => editorCallback(e.value),
			className: "white-space-nowrap"
		});
		case "password": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Password, {
			inputId: cellId,
			name: cellName,
			"data-testid": cellId,
			value: value != null ? String(value) : "",
			onInput: (e) => editorCallback(e.currentTarget.value),
			className: "w-full",
			inputClassName: "w-full",
			feedback: false
		});
		case "date": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Calendar, {
			inputId: cellId,
			name: cellName,
			"data-testid": cellId,
			showOnFocus: false,
			value: value != null ? dateIn(value) : null,
			onChange: (e) => editorCallback(e.value instanceof Date ? dateOut(e.value) : e.value),
			showIcon: true,
			className: "w-full"
		});
		case "time": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Calendar, {
			inputId: cellId,
			name: cellName,
			"data-testid": cellId,
			showOnFocus: false,
			value: value != null ? new Date(value) : new Date(1970, 0, 1),
			onChange: (e) => editorCallback(e.value),
			timeOnly: true,
			showIcon: true,
			className: "w-full"
		});
		case "dateTime": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Calendar, {
			inputId: cellId,
			name: cellName,
			"data-testid": cellId,
			showOnFocus: false,
			value: value != null ? dateIn(value) : null,
			onChange: (e) => editorCallback(e.value instanceof Date ? dateOut(e.value) : e.value),
			showTime: true,
			showIcon: true,
			className: "w-full"
		});
		case "mask": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(InputMask, {
			id: cellId,
			name: cellName,
			"data-testid": cellId,
			value: value != null ? String(value) : "",
			onChange: (e) => editorCallback(e.value),
			mask: fieldSchema.widget?.mask ?? "",
			className: "w-full"
		});
		case "boolean":
		case "checkbox": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
			"data-testid": cellId,
			onClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Checkbox, {
				inputId: cellId,
				checked: Boolean(value),
				onChange: (e) => editorCallback(e.checked)
			})
		});
		case "text":
		case "textArea": return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(InputTextarea, {
			id: cellId,
			name: cellName,
			"data-testid": cellId,
			value: value != null ? String(value) : "",
			onChange: (e) => editorCallback(e.target.value),
			autoFocus: true,
			className: "w-full",
			rows: 2
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(InputText, {
			id: cellId,
			name: cellName,
			"data-testid": cellId,
			value: value != null ? String(value) : "",
			onChange: (e) => editorCallback(e.target.value),
			autoFocus: true,
			className: "w-full"
		});
	}
}
function resolveParentField(parent) {
	if (!parent) return void 0;
	if (parent.startsWith("$.selected.")) return parent.slice(11);
	return parent;
}
/**
* Extract the stable key value from a parent selection row.
* Uses `keyFieldName` as the primary key field.
* `keyFieldName` defaults to 'id' in the widget config, so this value
* is always valid when the widget is properly configured.
*/
function getParentKeyValue(parentRow, keyFieldName) {
	if (!parentRow) return null;
	return parentRow[keyFieldName];
}
function getPath$1(obj, path) {
	if (!obj || typeof obj !== "object") return void 0;
	const parts = path.split(".");
	let cur = obj;
	for (const part of parts) {
		if (cur === null || cur === void 0) return void 0;
		cur = cur[part];
	}
	return cur;
}
function resolveToolbarParams(params, context) {
	if (params === void 0 || params === null) return void 0;
	if (typeof params === "string") {
		const singleExpr = params.trim().match(/^\$\{([^}]+)\}$/);
		if (singleExpr) {
			const val = getPath$1(context, singleExpr[1].trim());
			if (val !== null && typeof val === "object") return val;
			return { value: val };
		}
		return { value: params.replace(/\$\{([^}]+)\}/g, (_, expr) => {
			const v = getPath$1(context, expr.trim());
			return v === void 0 || v === null ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
		}) };
	}
	return Object.fromEntries(Object.entries(params).map(([k, v]) => {
		if (typeof v === "string") {
			const r = resolveToolbarParams(v, context);
			return [k, r?.value !== void 0 ? r.value : r];
		}
		return [k, v];
	}));
}
function evalToolbarEnabled(enabled, selection, currentRow) {
	if (enabled === "current") return currentRow !== null;
	if (enabled === "selected") return selection.length > 0 || currentRow !== null;
	return enabled !== false;
}
function TableWidget({ id, name, schema, value, onChange, readOnly, disabled, onSelect, dropdowns }) {
	const cols = resolveColumns(schema.widget, schema.items ?? schema);
	const colFields = cols.map((c) => c.field);
	const tableId = id ?? name;
	const properties = schema.items?.properties;
	const listAction = schema.widget?.listAction ?? "";
	const listParams = schema.widget?.listParams;
	const resultSet = schema.widget?.resultSet ?? "items";
	const keyFieldName = schema.widget?.keyField ?? "id";
	const initialPageSize = schema.widget?.pageSize ?? 25;
	const widgetToolbar = schema.widget?.toolbar ?? [];
	const widgetToolbarRight = schema.widget?.toolbarRight ?? [];
	const isListMode = !!listAction;
	const [searchInput, setSearchInput] = (0, import_react$7.useState)("");
	const [committedSearch, setCommittedSearch] = (0, import_react$7.useState)("");
	const [columnFilterInputs, setColumnFilterInputs] = (0, import_react$7.useState)({});
	const [committedFilters, setCommittedFilters] = (0, import_react$7.useState)({});
	const [listSortField, setListSortField] = (0, import_react$7.useState)(null);
	const [listSortOrder, setListSortOrder] = (0, import_react$7.useState)(1);
	const [listFirst, setListFirst] = (0, import_react$7.useState)(0);
	const [listPageSize, setListPageSize] = (0, import_react$7.useState)(initialPageSize);
	const filterDebounceRef = (0, import_react$7.useRef)(null);
	const searchDebounceRef = (0, import_react$7.useRef)(null);
	const { handler } = useBlong();
	const [pivotOptions, setPivotOptions] = (0, import_react$7.useState)(void 0);
	const pivotDropdownKey = (schema.widget?.pivot)?.dropdown;
	(0, import_react$7.useEffect)(() => {
		if (!pivotDropdownKey) return;
		if (dropdowns?.[pivotDropdownKey]) return;
		let cancelled = false;
		const loader = (name) => handler.portalDropdownList({ names: [name] }, {}).then((result) => {
			const data = result[name];
			return Array.isArray(data) ? data : [];
		});
		dropdownRegistry.get(pivotDropdownKey, loader).then((data) => {
			if (!cancelled) setPivotOptions(data);
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [
		pivotDropdownKey,
		dropdowns,
		handler
	]);
	const formState = useBlongFormState();
	const reportMode = formState?.reportMode ?? false;
	const reportParams = formState?.reportParams;
	const parentFieldName = resolveParentField(schema.widget?.parent);
	const masterMapping = schema.widget?.master;
	const parentSelection = parentFieldName ? formState?.tableSelections[parentFieldName] : void 0;
	const prevParentKeyForPagingRef = (0, import_react$7.useRef)(void 0);
	(0, import_react$7.useEffect)(() => {
		if (!isListMode || !parentFieldName) return;
		const curKey = getParentKeyValue(parentSelection?.row ?? null, keyFieldName);
		if (prevParentKeyForPagingRef.current === curKey) return;
		prevParentKeyForPagingRef.current = curKey;
		setListFirst(0);
		setSingleSelected(null);
	}, [
		isListMode,
		parentFieldName,
		parentSelection?.row,
		keyFieldName
	]);
	const prevReportParamsRef = (0, import_react$7.useRef)(void 0);
	(0, import_react$7.useEffect)(() => {
		if (!isListMode || !reportMode) return;
		if (prevReportParamsRef.current === reportParams) return;
		prevReportParamsRef.current = reportParams;
		if (reportParams !== void 0) setListFirst(0);
	}, [
		isListMode,
		reportMode,
		reportParams
	]);
	const mergedListParams = (0, import_react$7.useMemo)(() => {
		const filterBy = Object.fromEntries(Object.entries(committedFilters).filter(([, v]) => v !== ""));
		const cascadeFilter = {};
		if (isListMode && parentFieldName && masterMapping && parentSelection) for (const [ownKey, parentKey] of Object.entries(masterMapping)) cascadeFilter[ownKey] = parentSelection.row[parentKey];
		return {
			...listParams ?? {},
			...reportParams ?? {},
			...cascadeFilter,
			...Object.keys(filterBy).length > 0 ? { filterBy } : {},
			...committedSearch ? { search: committedSearch } : {},
			...listSortField ? { orderBy: [{
				field: listSortField,
				dir: listSortOrder === 1 ? "ASC" : "DESC"
			}] } : {},
			paging: {
				pageSize: listPageSize,
				pageNumber: Math.floor(listFirst / listPageSize) + 1
			}
		};
	}, [
		listParams,
		reportParams,
		isListMode,
		parentFieldName,
		masterMapping,
		parentSelection,
		committedFilters,
		committedSearch,
		listSortField,
		listSortOrder,
		listFirst,
		listPageSize
	]);
	const { data: listQueryData, isFetching: listLoading } = useQuery({
		queryKey: [listAction, mergedListParams],
		queryFn: () => handler[listAction](mergedListParams, {}),
		enabled: isListMode && (!reportMode || reportParams !== void 0),
		staleTime: 0,
		placeholderData: (previousData) => previousData
	});
	const listRows = (0, import_react$7.useMemo)(() => {
		if (!listQueryData) return [];
		if (resultSet && Array.isArray(listQueryData[resultSet])) return listQueryData[resultSet];
		if (Array.isArray(listQueryData)) return listQueryData;
		return [];
	}, [listQueryData, resultSet]);
	const listTotal = (0, import_react$7.useMemo)(() => {
		if (!listQueryData) return 0;
		const pagination = listQueryData.pagination;
		return typeof pagination?.recordsTotal === "number" ? pagination.recordsTotal : listRows.length;
	}, [listQueryData, listRows.length]);
	const handleSearchChange = (0, import_react$7.useCallback)((v) => {
		setSearchInput(v);
		if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		searchDebounceRef.current = setTimeout(() => {
			setCommittedSearch(v);
			setListFirst(0);
		}, v === "" ? 0 : 350);
	}, []);
	const handleColumnFilterChange = (0, import_react$7.useCallback)((field, v) => {
		setColumnFilterInputs((prev) => ({
			...prev,
			[field]: v
		}));
		if (filterDebounceRef.current) clearTimeout(filterDebounceRef.current);
		filterDebounceRef.current = setTimeout(() => {
			setCommittedFilters((prev) => {
				const next = {
					...prev,
					[field]: v
				};
				if (v === "") delete next[field];
				return next;
			});
			setListFirst(0);
		}, v === "" ? 0 : 350);
	}, []);
	const rows = isListMode ? listRows : (Array.isArray(value) ? value : []).map((r, i) => ({
		...r,
		[KEY]: r[KEY] ?? i
	}));
	const pivotCfg = schema.widget?.pivot;
	const pivotBaseRows = pivotCfg ? pivotCfg.examples ?? (pivotCfg.dropdown ? dropdowns?.[pivotCfg.dropdown] ?? pivotOptions ?? void 0 : void 0) : void 0;
	const pivotJoinDataFields = new Set(Object.values(pivotCfg?.join ?? {}));
	const baseRows = pivotBaseRows ? (() => {
		const joinEntries = Object.entries(pivotCfg.join ?? {});
		return pivotBaseRows.map((pivotRow, i) => {
			const found = rows.find((r) => joinEntries.every(([pivotKey, rowKey]) => pivotRow[pivotKey] === r[rowKey]));
			if (found) return {
				...pivotCfg.defaults,
				...found,
				[KEY]: `pivot-${i}`
			};
			const seeded = {
				...pivotCfg.defaults,
				[KEY]: `pivot-${i}`
			};
			for (const [pivotKey, rowKey] of joinEntries) seeded[rowKey] = pivotRow[pivotKey];
			return seeded;
		});
	})() : rows;
	const filteredRows = (0, import_react$7.useMemo)(() => !isListMode && parentFieldName && masterMapping ? parentSelection ? baseRows.filter((r) => Object.entries(masterMapping).every(([ownKey, parentKey]) => r[ownKey] === parentSelection.row[parentKey])) : [] : baseRows, [
		isListMode,
		parentFieldName,
		masterMapping,
		parentSelection,
		baseRows
	]);
	const filterFields = (0, import_react$7.useMemo)(() => cols.filter((c) => c.filter).map((c) => c.field), [cols]);
	const displayRows = (0, import_react$7.useMemo)(() => {
		if (isListMode || filterFields.length === 0) return filteredRows;
		const active = filterFields.map((field) => [field, committedFilters[field] ?? ""]).filter(([, text]) => text !== "");
		if (active.length === 0) return filteredRows;
		return filteredRows.filter((row) => active.every(([field, text]) => String(row[field] ?? "").toLocaleLowerCase().includes(text.toLocaleLowerCase())));
	}, [
		isListMode,
		filteredRows,
		filterFields,
		committedFilters
	]);
	const [editingRows, setEditingRows] = (0, import_react$7.useState)({});
	const [pendingEdit, setPendingEdit] = (0, import_react$7.useState)(null);
	const [selected, setSelected] = (0, import_react$7.useState)([]);
	const [singleSelected, setSingleSelected] = (0, import_react$7.useState)(null);
	const allowEdit = schema.widget?.actions?.allowEdit !== false;
	const allowAdd = schema.widget?.actions?.allowAdd !== false && !pivotBaseRows;
	const allowDelete = schema.widget?.actions?.allowDelete !== false && !pivotBaseRows;
	const editable = !readOnly && allowEdit;
	const cycleOnly = cols.some((c) => isCycleCell(c.fieldSchema)) && cols.every((c) => isCycleCell(c.fieldSchema) || c.fieldSchema.readOnly === true);
	const needsRowEditor = !isListMode && editable && !cycleOnly;
	const interactionDisabled = disabled || readOnly;
	const isSingleSelect = schema.widget?.selectionMode === "single";
	const widgetLabel = schema.widget?.label;
	const fireSingleSelect = (0, import_react$7.useCallback)((row) => {
		if (!row) {
			onSelect?.(name, null);
			return;
		}
		if (isListMode) {
			const originalIndex = rows.findIndex((r) => r[keyFieldName] === row[keyFieldName]);
			onSelect?.(name, {
				row,
				index: originalIndex
			});
			return;
		}
		const { [KEY]: _k, ...clean } = row;
		const originalIndex = rows.findIndex((r) => r[KEY] === row[KEY]);
		onSelect?.(name, {
			row: clean,
			index: originalIndex
		});
	}, [
		rows,
		name,
		onSelect,
		isListMode,
		keyFieldName
	]);
	const rowClass = (0, import_react$7.useCallback)((data) => {
		if (!isSingleSelect || !singleSelected) return "";
		const matchKey = isListMode ? keyFieldName : KEY;
		return data[matchKey] === singleSelected[matchKey] ? "blong-table-current" : "";
	}, [
		isSingleSelect,
		singleSelected,
		isListMode,
		keyFieldName
	]);
	const prevParentKeyForAutoSelectRef = (0, import_react$7.useRef)(void 0);
	(0, import_react$7.useEffect)(() => {
		if (!schema.widget?.autoSelect || !parentFieldName) return;
		const curKey = getParentKeyValue(parentSelection?.row ?? null, keyFieldName);
		if (prevParentKeyForAutoSelectRef.current === curKey) return;
		prevParentKeyForAutoSelectRef.current = curKey;
		if (filteredRows.length > 0) {
			setSingleSelected(filteredRows[0]);
			fireSingleSelect(filteredRows[0]);
		} else {
			setSingleSelected(null);
			onSelect?.(name, null);
		}
	}, [
		name,
		parentSelection,
		parentFieldName,
		schema.widget?.autoSelect,
		filteredRows,
		fireSingleSelect,
		onSelect,
		keyFieldName
	]);
	(0, import_react$7.useEffect)(() => {
		if (!pendingEdit) return;
		setPendingEdit(null);
		setEditingRows((prev) => ({
			...prev,
			...pendingEdit
		}));
	}, [pendingEdit]);
	const onRowEditChange = (0, import_react$7.useCallback)((e) => setEditingRows(e.data), []);
	/**
	* Write one row back into the form value.  For a pivot table the row may not
	* exist in the value yet (its slot comes from the dropdown), so the merge is
	* keyed on the pivot's `join` fields — the same rule the row editor uses.
	*/
	const mergeRow = (0, import_react$7.useCallback)((rowData) => {
		const { [KEY]: rowKey, ...rest } = rowData;
		if (pivotCfg) {
			const joinEntries = Object.entries(pivotCfg.join ?? {});
			const isMatch = (r) => joinEntries.every(([, jk]) => r[jk] === rest[jk]);
			return (rows.some(isMatch) ? rows.map((r) => isMatch(r) ? {
				...r,
				...rest
			} : r) : [...rows, rest]).map(({ [KEY]: _k, ...r }) => r);
		}
		return rows.map((r) => r[KEY] === rowKey ? {
			...rest,
			[KEY]: rowKey
		} : r).map(({ [KEY]: _k, ...r }) => r);
	}, [rows, pivotCfg]);
	const onRowEditComplete = (0, import_react$7.useCallback)((e) => onChange(mergeRow(e.newData)), [mergeRow, onChange]);
	/** Commit one cycle-cell value straight into the form value. */
	const commitCell = (0, import_react$7.useCallback)((rowData, field, nextValue) => onChange(mergeRow({
		...rowData,
		[field]: nextValue
	})), [mergeRow, onChange]);
	const addRow = (0, import_react$7.useCallback)((event) => {
		event.preventDefault();
		const row = newRow(colFields, properties);
		if (parentSelection && masterMapping) for (const [ownKey, parentKey] of Object.entries(masterMapping)) row[ownKey] = parentSelection.row[String(parentKey)];
		onChange([...rows, row].map(({ [KEY]: _k, ...r }) => r));
		setPendingEdit({ [rows.length]: true });
	}, [
		rows,
		colFields,
		properties,
		onChange,
		parentSelection,
		masterMapping
	]);
	const deleteSelected = (0, import_react$7.useCallback)((event) => {
		event.preventDefault();
		const selectedKeys = /* @__PURE__ */ new Set();
		for (const r of selected) selectedKeys.add(r[KEY]);
		if (singleSelected) selectedKeys.add(singleSelected[KEY]);
		if (selectedKeys.size === 0) return;
		const updated = rows.filter((r) => !selectedKeys.has(r[KEY]));
		setSelected([]);
		setSingleSelected(null);
		onSelect?.(name, null);
		onChange(updated.map(({ [KEY]: _k, ...r }) => r));
	}, [
		rows,
		selected,
		singleSelected,
		onChange,
		onSelect,
		name
	]);
	const currentRowKey = singleSelected?.[isListMode ? keyFieldName : KEY];
	const templateContext = (0, import_react$7.useMemo)(() => ({
		[keyFieldName]: currentRowKey,
		id: currentRowKey,
		current: singleSelected,
		selected: selected.length > 0 ? selected : singleSelected ? [singleSelected] : [],
		...singleSelected ?? {}
	}), [
		singleSelected,
		selected,
		keyFieldName,
		currentRowKey
	]);
	const [busyCount, setBusyCount] = (0, import_react$7.useState)(0);
	const isBusy = busyCount > 0;
	const renderCustomButton = (btn, idx) => {
		const isEnabled = evalToolbarEnabled(btn.enabled, selected, singleSelected);
		const resolvedParams = resolveToolbarParams(btn.params, templateContext);
		return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Button, {
			label: btn.label,
			icon: btn.icon,
			className: "p-button mr-2",
			type: "button",
			disabled: isBusy || !isEnabled,
			onClick: (e) => {
				e.preventDefault();
				if (!btn.method) return;
				setBusyCount((c) => c + 1);
				handler[btn.method](resolvedParams ?? {}, {}).finally(() => setBusyCount((c) => c - 1));
			}
		}, idx);
	};
	const listModeSearchBar = isListMode ? /* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)("span", {
		style: {
			position: "relative",
			display: "inline-flex",
			alignItems: "center",
			flexShrink: 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("i", {
				className: "pi pi-search",
				style: {
					position: "absolute",
					left: "0.5rem",
					pointerEvents: "none"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(InputText, {
				value: searchInput,
				onChange: (e) => handleSearchChange(e.target.value),
				placeholder: "Search…",
				"data-testid": "browse-search",
				style: {
					width: "9rem",
					paddingLeft: "1.75rem"
				}
			}),
			searchInput && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Button, {
				icon: "pi pi-times",
				className: "p-button-text p-button-sm",
				style: {
					position: "absolute",
					right: 0,
					padding: "0.25rem"
				},
				type: "button",
				onClick: () => handleSearchChange("")
			})
		]
	}) : null;
	const hasCustomToolbar = widgetToolbar.length > 0 || widgetToolbarRight.length > 0 || isListMode;
	const actionButtons = !isListMode && editable ? /* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)(import_jsx_runtime$10.Fragment, { children: [allowAdd && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Button, {
		label: "Add",
		icon: "pi pi-plus",
		className: "p-button mr-2",
		onClick: addRow,
		type: "button",
		disabled: interactionDisabled,
		"data-testid": `${tableId}-addButton`
	}), allowDelete && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Button, {
		label: "Delete",
		icon: "pi pi-trash",
		className: "p-button",
		onClick: deleteSelected,
		type: "button",
		disabled: interactionDisabled || !selected.length && !singleSelected,
		"data-testid": `${tableId}-deleteButton`
	})] }) : null;
	const toolbarLeftContent = /* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)(import_jsx_runtime$10.Fragment, { children: [
		widgetLabel && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
			className: "p-card-title mr-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Text, { children: widgetLabel })
		}),
		widgetToolbar.map(renderCustomButton),
		!widgetLabel && actionButtons
	] });
	const toolbarRightContent = /* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)(import_jsx_runtime$10.Fragment, { children: [
		widgetToolbarRight.map(renderCustomButton),
		widgetLabel && actionButtons,
		listModeSearchBar
	] });
	const showToolbar = editable || widgetLabel || hasCustomToolbar;
	if (parentFieldName && masterMapping && !parentSelection) return null;
	const dataKeyField = isListMode ? keyFieldName : KEY;
	return /* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)("div", {
		"data-testid": `${tableId}`,
		className: "blong-table-widget w-full",
		style: isListMode ? {
			display: "flex",
			flexDirection: "column"
		} : void 0,
		children: [
			showToolbar && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Toolbar, {
				left: toolbarLeftContent,
				right: toolbarRightContent,
				className: "p-0 border-none",
				style: { background: "none" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)(DataTable, {
				value: displayRows,
				editMode: !isListMode && editable ? "row" : void 0,
				editingRows: !isListMode && editable ? editingRows : void 0,
				onRowEditChange: !isListMode && editable ? onRowEditChange : void 0,
				onRowEditComplete: !isListMode && editable ? onRowEditComplete : void 0,
				dataKey: dataKeyField,
				size: "small",
				loading: isListMode ? listLoading : void 0,
				lazy: isListMode,
				rowClassName: rowClass,
				selection: isSingleSelect ? singleSelected : selected,
				onSelectionChange: (e) => {
					if (isSingleSelect) {
						const row = e.value;
						setSingleSelected(row);
						fireSingleSelect(row);
					} else setSelected(e.value);
				},
				selectionMode: isSingleSelect ? "single" : "multiple",
				metaKeySelection: false,
				removableSort: isListMode,
				sortField: isListMode ? listSortField ?? void 0 : void 0,
				sortOrder: isListMode ? listSortOrder : void 0,
				onSort: isListMode ? (e) => {
					const order = e.sortOrder ?? 0;
					setListSortField(order === 0 ? null : e.sortField ?? null);
					setListSortOrder(order === 0 ? 1 : order);
					setListFirst(0);
				} : void 0,
				children: [
					!isSingleSelect && (editable || isListMode) && !pivotBaseRows && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Column, {
						selectionMode: "multiple",
						style: {
							width: "3rem",
							flexGrow: 0
						}
					}),
					cols.map(({ field, header, filter, sortable, fieldSchema }) => {
						const widgetType = resolveWidgetType$1(fieldSchema);
						const options = getColumnOptions(fieldSchema, dropdowns);
						const isNumeric = [
							"number",
							"integer",
							"currency",
							"percent"
						].includes(widgetType);
						const isBoolType = ["boolean", "checkbox"].includes(widgetType);
						return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Column, {
							field,
							header: filter ? /* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: "0.25rem"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Text, { children: header }), /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(InputText, {
									value: columnFilterInputs[field] ?? "",
									onChange: (e) => handleColumnFilterChange(field, e.target.value),
									placeholder: "Filter…",
									className: "p-inputtext-sm",
									style: {
										width: "100%",
										fontSize: "0.8125rem"
									},
									onClick: (e) => e.stopPropagation(),
									"data-testid": `${tableId}-filter-${field}`
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Text, { children: header }),
							sortable: sortable || isListMode,
							alignHeader: isNumeric ? "right" : void 0,
							bodyClassName: isNumeric ? "text-right" : void 0,
							body: (rowData, colOptions) => {
								const cellId = `${tableId}-${colOptions.rowIndex}-${field}`;
								if (isBoolType) {
									if (rowData[field] == null) return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", { "data-testid": cellId });
									return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
										"data-testid": cellId,
										children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("i", { className: `pi ${rowData[field] ? "pi-check text-green-500" : "pi-times text-red-500"}` })
									});
								}
								return renderBody(widgetType, field, rowData, cellId, options, keyFieldName, fieldSchema, (nextValue) => commitCell(rowData, field, nextValue));
							},
							editor: !isListMode && editable && !fieldSchema.readOnly && !pivotJoinDataFields.has(field) ? (colOptions) => {
								const cellId = `${tableId}-${colOptions.rowIndex}-${field}`;
								const cellName = `${tableId}[${colOptions.rowIndex}].${field}`;
								return renderEditor(widgetType, fieldSchema, field, colOptions.rowData, cellId, cellName, (v) => colOptions.editorCallback?.(v), options);
							} : void 0
						}, field);
					}),
					needsRowEditor && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Column, {
						rowEditor: true,
						style: {
							width: "7rem",
							textAlign: "center"
						}
					})
				]
			}),
			isListMode && listTotal > 0 && /* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)("div", {
				className: "blong-table-paginator",
				style: {
					display: "flex",
					alignItems: "center",
					gap: "0.25rem",
					padding: "0.5rem",
					justifyContent: "center",
					userSelect: "none",
					flexShrink: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Button, {
						icon: "pi pi-angle-double-left",
						className: "p-button-text p-button-sm",
						type: "button",
						disabled: listFirst === 0,
						onClick: () => setListFirst(0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Button, {
						icon: "pi pi-angle-left",
						className: "p-button-text p-button-sm",
						type: "button",
						disabled: listFirst === 0,
						onClick: () => setListFirst(Math.max(0, listFirst - listPageSize))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)("span", {
						style: {
							padding: "0 0.5rem",
							fontSize: "0.875rem"
						},
						children: [
							Math.floor(listFirst / listPageSize) + 1,
							" /",
							" ",
							Math.ceil(listTotal / listPageSize)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Button, {
						icon: "pi pi-angle-right",
						className: "p-button-text p-button-sm",
						type: "button",
						disabled: listFirst + listPageSize >= listTotal,
						onClick: () => setListFirst(listFirst + listPageSize)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Button, {
						icon: "pi pi-angle-double-right",
						className: "p-button-text p-button-sm",
						type: "button",
						disabled: listFirst + listPageSize >= listTotal,
						onClick: () => setListFirst((Math.ceil(listTotal / listPageSize) - 1) * listPageSize)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("select", {
						value: listPageSize,
						onChange: (e) => {
							setListPageSize(Number(e.target.value));
							setListFirst(0);
						},
						style: {
							marginLeft: "0.5rem",
							background: "var(--surface-overlay)",
							color: "var(--text-color)",
							border: "1px solid var(--surface-border)",
							borderRadius: "var(--border-radius)",
							padding: "0.2rem"
						},
						children: [
							10,
							25,
							50,
							100
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("option", {
							value: n,
							children: n
						}, n))
					})
				]
			})
		]
	});
}
var import_react$7, import_jsx_runtime$10, KEY, CYCLE_PRESETS;
function init_TableWidget() {
	return (init_TableWidget = __esmMin((() => {
		init_ActionButton();
		init_primereact();
		init_useQuery();
		import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FormContext();
		init_Text();
		init_BlongContext();
		init_dropdownRegistry();
		init_DateWidget();
		import_jsx_runtime$10 = require_jsx_runtime();
		KEY = "__key";
		CYCLE_PRESETS = {
			"tri-state": [
				{
					value: true,
					icon: "pi pi-check text-green-500",
					label: "Yes"
				},
				{
					value: false,
					icon: "pi pi-times text-red-500",
					label: "No"
				},
				{
					value: null,
					label: "Not set"
				}
			],
			"check-empty": [{
				value: true,
				icon: "pi pi-check text-green-500",
				label: "Yes"
			}, {
				value: null,
				label: "Not set"
			}],
			"check-cross": [{
				value: true,
				icon: "pi pi-check text-green-500",
				label: "Yes"
			}, {
				value: false,
				icon: "pi pi-times text-red-500",
				label: "No"
			}]
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/TextWidget.tsx
function TextWidget({ id, name, schema, value, onChange, onBlur, error, readOnly, disabled }) {
	const strValue = value == null ? "" : String(value);
	const { copy } = schema.widget ?? {};
	const copyToClipboard = () => void navigator.clipboard.writeText(strValue);
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsxs)("span", {
		className: "blong-input-wrapper w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(InputText, {
			id: id ?? name,
			name,
			value: strValue,
			onChange: (e) => onChange(e.target.value || null),
			onBlur,
			readOnly,
			disabled,
			className: `blong-input w-full ${error ? "p-invalid" : ""}`,
			maxLength: schema.maxLength
		}), copy && strValue && /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(Button, {
			icon: "pi pi-copy",
			className: "p-button-text p-button-sm blong-input-copy",
			onClick: copyToClipboard,
			type: "button",
			tooltip: "Copy"
		})]
	});
}
var import_jsx_runtime$9;
function init_TextWidget() {
	return (init_TextWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$9 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/TextareaWidget.tsx
function TextareaWidget({ id, name, schema, value, onChange, onBlur, error, readOnly, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(InputTextarea, {
		id: id ?? name,
		name,
		value: value == null ? "" : String(value),
		onChange: (e) => onChange(e.target.value || null),
		onBlur,
		readOnly,
		disabled,
		className: `blong-textarea w-full ${error ? "p-invalid" : ""}`,
		autoResize: true,
		rows: 3,
		maxLength: schema.maxLength
	});
}
var import_jsx_runtime$8;
function init_TextareaWidget() {
	return (init_TextareaWidget = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$8 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/TimeWidget.tsx
function TimeWidget({ id, name, value, onChange, onBlur, error, readOnly, disabled }) {
	const dateValue = value instanceof Date ? value : value ? timeIn(value) : null;
	const handleChange = import_react$6.useMemo(() => (event) => {
		if (event.value instanceof Date) event.value = timeOut(event.value);
		onChange(event.value);
	}, [onChange]);
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Calendar, {
		inputId: id ?? name,
		value: dateValue,
		onChange: handleChange,
		onHide: onBlur,
		readOnlyInput: readOnly,
		disabled,
		className: `blong-time w-full ${error ? "p-invalid" : ""}`,
		showIcon: true,
		showOnFocus: false,
		timeOnly: true
	});
}
var import_react$6, import_jsx_runtime$7, timeIn, timeOut;
function init_TimeWidget() {
	return (init_TimeWidget = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_primereact();
		import_jsx_runtime$7 = require_jsx_runtime();
		timeIn = (d) => {
			const dd = new Date(d);
			const properDate = new Date(new Date(d).getTime() + new Date(d).getTimezoneOffset() * 60 * 1e3);
			const timezoneDiff = properDate.getTimezoneOffset() - dd.getTimezoneOffset();
			if (!timezoneDiff) return properDate;
			return new Date(properDate.getTime() + timezoneDiff * 60 * 1e3);
		};
		timeOut = (d) => new Date(d.setFullYear(1970, 0, 1));
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/widgets/index.ts
/** Register all built-in widgets synchronously */
function registerBuiltinWidgets() {
	for (const [type, component] of builtins) widgetRegistry.register(type, component);
}
var WidgetRegistryImpl, widgetRegistry, builtins;
function init_widgets() {
	return (init_widgets = __esmMin((() => {
		init_AutoCompleteWidget();
		init_BigIntWidget();
		init_BooleanWidget();
		init_ChipsWidget();
		init_ComponentWidget();
		init_CurrencyWidget();
		init_DateRangeWidget();
		init_DateTimeWidget();
		init_DateWidget();
		init_DropdownTreeWidget();
		init_DropdownWidget();
		init_FileWidget();
		init_ImageUploadWidget();
		init_ImageWidget();
		init_IntegerWidget();
		init_JsonWidget();
		init_MaskWidget();
		init_MultiSelectTreeTableWidget();
		init_MultiSelectTreeWidget();
		init_MultiSelectWidget();
		init_NavigatorWidget();
		init_NumberWidget();
		init_PasswordWidget();
		init_SelectTableWidget();
		init_SelectWidget();
		init_TableWidget();
		init_TextWidget();
		init_TextareaWidget();
		init_TimeWidget();
		WidgetRegistryImpl = class {
			map = /* @__PURE__ */ new Map();
			register(type, component) {
				this.map.set(type, component);
			}
			get(type) {
				return this.map.get(type);
			}
			list() {
				return [...this.map.keys()];
			}
		};
		widgetRegistry = new WidgetRegistryImpl();
		builtins = [
			["input", TextWidget],
			["text", TextareaWidget],
			["textArea", TextareaWidget],
			["number", NumberWidget],
			["currency", CurrencyWidget],
			["percent", NumberWidget],
			["integer", IntegerWidget],
			["bigint", BigIntWidget],
			["boolean", BooleanWidget],
			["checkbox", BooleanWidget],
			["date", DateWidget],
			["time", TimeWidget],
			["dateTime", DateTimeWidget],
			["dateRange", DateRangeWidget],
			["password", PasswordWidget],
			["mask", MaskWidget],
			["chips", ChipsWidget],
			["autocomplete", AutoCompleteWidget],
			["dropdown", DropdownWidget],
			["dropdownTree", DropdownTreeWidget],
			["multiSelect", MultiSelectWidget],
			["multiSelectTree", MultiSelectTreeWidget],
			["multiSelectPanel", MultiSelectWidget],
			["multiSelectTreeTable", MultiSelectTreeTableWidget],
			["select", SelectWidget],
			["selectTable", SelectTableWidget],
			["table", TableWidget],
			["navigator", NavigatorWidget],
			["json", JsonWidget],
			["file", FileWidget],
			["image", ImageWidget],
			["imageUpload", ImageUploadWidget],
			["component", ComponentWidget]
		];
		registerBuiltinWidgets();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Card/Card.tsx
function DraggableFieldRow({ fieldName, cardName, isLast, cardReadOnly }) {
	const { active: isDesignMode, selected, select } = useDesignMode();
	const stableCtx = useBlongForm();
	const fieldId = `field:${fieldName}:${cardName}`;
	const fieldSchema = stableCtx?.schema?.properties?.[fieldName];
	const fieldLabel = label(fieldSchema?.title, fieldName);
	const isSelected = selected?.id === fieldId;
	const { active: dragCtx } = useDndContext();
	const activeDragType = dragCtx?.data?.current?.type;
	const { attributes, listeners, setNodeRef: setDragRef, isDragging } = useDraggable({
		id: fieldId,
		data: {
			type: "field",
			fieldName,
			cardName,
			label: fieldLabel,
			sourceId: cardName
		},
		disabled: !isDesignMode
	});
	const { setNodeRef: setDropRef, isOver: isDropOver } = useDroppable({
		id: fieldId,
		disabled: !isDesignMode
	});
	const fieldRef = (0, import_react$5.useCallback)((node) => {
		setDragRef(node);
		setDropRef(node);
	}, [setDragRef, setDropRef]);
	const handleClick = (0, import_react$5.useCallback)((e) => {
		if (!isDesignMode) return;
		e.stopPropagation();
		select({
			id: fieldId,
			type: "field",
			label: fieldLabel
		});
	}, [
		isDesignMode,
		fieldId,
		fieldLabel,
		select
	]);
	const fieldContent = /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(FieldRow, {
		fieldName,
		cardReadOnly,
		isLast
	});
	if (!isDesignMode) return fieldContent;
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		ref: fieldRef,
		style: { opacity: isDragging ? .4 : 1 },
		className: [
			"blong-field-row--design",
			isSelected ? "blong-field-row--design--selected" : "",
			isDragging ? "blong-field-row--design--dragging" : "",
			isDropOver && !isDragging && activeDragType === "field" ? "blong-field-row--design--over" : ""
		].filter(Boolean).join(" "),
		onClick: handleClick,
		...attributes,
		...listeners,
		children: fieldContent
	});
}
function resolveWidgetType(fieldSchema, fieldName) {
	if (fieldSchema.widget?.type) return fieldSchema.widget.type;
	const fmt = fieldSchema.format;
	if (fmt === "date") return "date";
	if (fmt === "date-time" || fmt === "dateTime") return "dateTime";
	if (fmt === "time") return "time";
	if (fieldSchema.type === "boolean") return "boolean";
	if (fieldSchema.widget?.dropdown) return "dropdown";
	if (fieldSchema.widget?.options) return "select";
	if (fieldName.endsWith("Description")) return "textArea";
	if (fieldSchema.type === "integer") return "integer";
	if (fieldSchema.type === "number") return "number";
	if (fieldSchema.type === "bigint") return "bigint";
	if (fieldSchema.anyOf instanceof Array) return resolveWidgetType(fieldSchema.anyOf.find((schema) => schema.type !== "null") || fieldSchema.anyOf[0], fieldName);
	return "input";
}
/**
* Resolve a dot-notation field path to its leaf IEnrichedFieldSchema.
* E.g. 'input.input' → schema.properties.input.properties.input.
* '#id' suffixes (column-override keys like 'table#table1') are stripped before resolution.
*/
function resolveFieldSchema(schema, fieldPath) {
	if (!schema?.properties) return void 0;
	const hashIdx = fieldPath.indexOf("#");
	const basePath = hashIdx >= 0 ? fieldPath.slice(0, hashIdx) : fieldPath;
	const dot = basePath.indexOf(".");
	if (dot === -1) return {
		fieldRequired: schema?.required?.includes(basePath),
		...schema.properties[basePath]
	};
	const head = basePath.slice(0, dot);
	const tail = basePath.slice(dot + 1);
	return resolveFieldSchema({
		properties: schema.properties[head]?.properties,
		required: schema.properties[head]?.required
	}, tail);
}
/**
* Deep-set a value at a dot-notation path within a plain object.
* E.g. setFieldValue({}, 'input.input', 'v') → {input: {input: 'v'}}.
*/
function setFieldValue(obj, path, value) {
	const dot = path.indexOf(".");
	if (dot === -1) return {
		...obj,
		[path]: value
	};
	const head = path.slice(0, dot);
	const tail = path.slice(dot + 1);
	return {
		...obj,
		[head]: setFieldValue(obj[head] ?? {}, tail, value)
	};
}
/**
* FieldRow — renders a single field row controlled by react-hook-form.
*
* Subscribes to FormStateContext (slow) directly so that Card itself does not
* rerender every time a field value changes.  Only FieldRow instances rerender
* when their subscribed context changes.
*
* Error markup is rendered inside the Controller render callback using
* `fieldState.error`, so errors are always up-to-date without requiring a
* separate context subscription.
*
* All hooks are called unconditionally (before any early returns) to satisfy
* React's rules of hooks. `validationRules` and `renderController` are memoised
* so that Controller — which is React.memo'd internally by react-hook-form —
* can skip rerenders when neither the schema nor the field/form state has changed.
*/
function FieldRow({ fieldName, fieldClass, cardReadOnly, isLast, columnOverride, log, hideLabel }) {
	const stableCtx = useBlongForm();
	const stateCtx = useBlongFormState();
	const translations = useAppStore((s) => s.translations);
	const schema = stableCtx?.schema;
	const control = stableCtx?.control;
	const dropdowns = stableCtx?.dropdowns;
	const onChange = stableCtx?.onChange;
	const handleTableSelect = stableCtx?.handleTableSelect;
	const getValues = stableCtx?.getValues;
	const setValue = stableCtx?.setValue;
	const methods = stableCtx?.methods;
	const onFieldChange = stableCtx?.onFieldChange;
	const { readOnly: fieldDisabled = false, loading = false } = stateCtx ?? {};
	const hashIdx = fieldName.indexOf("#");
	const baseName = hashIdx >= 0 ? fieldName.slice(0, hashIdx) : fieldName;
	const instanceId = hashIdx >= 0 ? fieldName.slice(hashIdx + 1) : baseName.replace(/\./g, "-");
	const rawSchema = resolveFieldSchema(schema, fieldName);
	const dropdownKey = rawSchema?.widget?.dropdown;
	const fieldSchema = (0, import_react$5.useMemo)(() => dropdowns && dropdownKey && dropdowns[dropdownKey] && rawSchema ? {
		...rawSchema,
		widget: {
			...rawSchema.widget,
			required: rawSchema.fieldRequired,
			options: dropdowns[dropdownKey],
			dropdown: void 0
		}
	} : rawSchema, [
		dropdowns,
		dropdownKey,
		rawSchema
	]);
	const effectiveSchema = (0, import_react$5.useMemo)(() => fieldSchema && columnOverride ? {
		...fieldSchema,
		widget: {
			...fieldSchema.widget,
			columns: columnOverride
		}
	} : fieldSchema, [fieldSchema, columnOverride]);
	const WidgetComponent = effectiveSchema ? widgetRegistry.get(resolveWidgetType(effectiveSchema, fieldName)) : void 0;
	const schemaReadOnly = cardReadOnly || effectiveSchema?.readOnly || effectiveSchema?.widget?.readOnly;
	const needsOnSelect = effectiveSchema?.widget?.selectionMode === "single" || effectiveSchema?.widget?.type === "navigator";
	const widgetExtra = effectiveSchema?.widget;
	const visiblePath = typeof widgetExtra?.visible === "string" ? widgetExtra.visible : void 0;
	const enabledPath = typeof widgetExtra?.enabled === "string" ? widgetExtra.enabled : void 0;
	const onChangeName = typeof widgetExtra?.onChange === "string" ? widgetExtra.onChange : onFieldChange;
	const watchedVisible = useWatch({
		control: stableCtx?.control,
		name: visiblePath ?? "__never__",
		disabled: !visiblePath || !stableCtx?.control
	});
	const watchedEnabled = useWatch({
		control: stableCtx?.control,
		name: enabledPath ?? "__never__",
		disabled: !enabledPath || !stableCtx?.control
	});
	const validationRules = (0, import_react$5.useMemo)(() => effectiveSchema ? buildValidationRules(effectiveSchema) : {}, [effectiveSchema]);
	const isWidgetDisabled = enabledPath != null ? !watchedEnabled : (effectiveSchema?.widget)?.enabled === false;
	const widgetDisabled = fieldDisabled || isWidgetDisabled;
	const renderController = (0, import_react$5.useCallback)(({ field, fieldState }) => {
		const Widget = WidgetComponent;
		const hasLabel = !hideLabel && effectiveSchema?.title !== "";
		const error = fieldState.error;
		return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
			className: `flex align-items-center relative col-12${hasLabel ? " md:col-8" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Widget, {
				id: instanceId,
				name: baseName,
				schema: effectiveSchema,
				value: field.value,
				onChange: async (val) => {
					if (onChangeName && methods?.[onChangeName]) try {
						if (await methods[onChangeName]({
							field: { name: baseName },
							value: val,
							form: {
								getValues,
								setValue
							}
						}) === false) return;
					} catch (err) {
						log?.error?.(err, "[blong] Field onChange method error:");
						return;
					}
					field.onChange(val);
					onChange?.(setFieldValue(getValues(), baseName, val));
				},
				onBlur: field.onBlur,
				error,
				readOnly: schemaReadOnly,
				loading,
				disabled: widgetDisabled,
				dropdowns,
				onSelect: needsOnSelect ? handleTableSelect : void 0
			}), effectiveSchema?.description && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("small", {
				className: "blong-field-hint",
				children: effectiveSchema.description
			})]
		}), error && /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("small", { className: "col-12 md:col-4" }), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("small", {
			className: "p-error blong-field-error col-12 md:col-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Text, {
				params: {
					field: translations[effectiveSchema?.title ?? baseName] ?? effectiveSchema?.title ?? baseName,
					minLength: effectiveSchema?.minLength ?? 0,
					maxLength: effectiveSchema?.maxLength ?? 0,
					minimum: effectiveSchema?.minimum ?? 0,
					maximum: effectiveSchema?.maximum ?? 0
				},
				children: error.message ?? "{field} is invalid"
			})
		})] })] });
	}, [
		WidgetComponent,
		instanceId,
		baseName,
		effectiveSchema,
		hideLabel,
		onChange,
		onChangeName,
		methods,
		schemaReadOnly,
		loading,
		widgetDisabled,
		dropdowns,
		needsOnSelect,
		handleTableSelect,
		translations,
		log,
		getValues,
		setValue
	]);
	if (!stableCtx || !stateCtx) return null;
	if (!effectiveSchema || !WidgetComponent) return null;
	if (visiblePath != null ? !watchedVisible : effectiveSchema.widget?.visible === false) return null;
	const hasLabel = !hideLabel && effectiveSchema.title !== "";
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		className: `field grid${isLast ? " mb-0" : ""}`,
		children: [hasLabel && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("label", {
			className: "col-12 md:col-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Text, { children: label(effectiveSchema.title, baseName) })
		}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: `flex align-items-center col-12${hasLabel ? " md:col-8" : ""}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Skeleton, { className: "p-inputtext w-full" })
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		className: `field grid${isLast ? " mb-0" : ""}${fieldClass ? " " + fieldClass : ""}`,
		children: [hasLabel && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("label", {
			htmlFor: instanceId,
			className: `col-12 md:col-4${effectiveSchema.fieldRequired ? " blong-required" : ""}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Text, { children: label(effectiveSchema.title, baseName) })
		}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Controller, {
			name: baseName,
			control,
			rules: validationRules,
			render: renderController
		})]
	});
}
/**
* `Input` factory for custom editors.
* Renders the widget for a named schema field using react-hook-form Controller.
* Accepts `name` (required) and an optional `className`/`fieldClass` for the wrapper div.
*/
function CustomInput({ name, className, fieldClass }) {
	const stableCtx = useBlongForm();
	const stateCtx = useBlongFormState();
	if (!stableCtx || !stateCtx) return null;
	const { schema, control, dropdowns, onChange, getValues } = stableCtx;
	const { readOnly: fieldDisabled, loading } = stateCtx;
	const fieldSchema = resolveFieldSchema(schema, name);
	if (!fieldSchema) return null;
	const WidgetComponent = widgetRegistry.get(resolveWidgetType(fieldSchema, name));
	if (!WidgetComponent) return null;
	const dropdownKey = fieldSchema.widget?.dropdown;
	const effectiveSchema = dropdowns && dropdownKey && dropdowns[dropdownKey] ? {
		...fieldSchema,
		widget: {
			...fieldSchema.widget,
			options: dropdowns[dropdownKey],
			dropdown: void 0
		}
	} : fieldSchema;
	const containerClass = className ?? fieldClass ?? "";
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: `flex align-items-center ${containerClass}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Skeleton, { className: "p-inputtext w-full" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Controller, {
		name,
		control,
		render: ({ field, fieldState }) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: `flex align-items-center ${containerClass}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(WidgetComponent, {
				id: name.replace(/\./g, "-"),
				name,
				schema: effectiveSchema,
				value: field.value,
				onChange: (val) => {
					field.onChange(val);
					onChange?.(setFieldValue(getValues(), name, val));
				},
				onBlur: field.onBlur,
				error: fieldState.error,
				readOnly: fieldDisabled || effectiveSchema.readOnly || effectiveSchema.widget?.readOnly,
				dropdowns
			})
		})
	});
}
/**
* `Label` factory for custom editors.
* Renders the label for a named schema field.
*/
function CustomLabel({ name, className = "col-12 md:col-4", label: labelOverride }) {
	const stableCtx = useBlongForm();
	const fieldSchema = name ? resolveFieldSchema(stableCtx?.schema, name) : void 0;
	const title = label(labelOverride ?? fieldSchema?.title, name);
	if (!title) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("label", {
		htmlFor: name?.replace(/\./g, "-"),
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Text, { children: title })
	});
}
/**
* `ErrorLabel` factory for custom editors.
* Renders the validation error message for a named field.
* When called without a `name`, renders nothing.
*/
function CustomErrorLabel({ name, className }) {
	const { errors } = useFormState({ control: useBlongForm()?.control });
	if (!name || !errors[name]) return null;
	const error = errors[name];
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("small", {
		className: `p-error blong-field-error ${className ?? ""}`,
		children: error?.message
	});
}
/**
* CustomEditorRow — renders a custom editor component registered via the `editors` prop.
* The editor receives stable `Input`, `Label`, `ErrorLabel` factory components.
*/
function CustomEditorRow({ fieldName, isLast }) {
	const stableCtx = useBlongForm();
	if (!stableCtx) return null;
	const CustomEditorComponent = stableCtx.editors?.[fieldName];
	if (!CustomEditorComponent) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: `blong-custom-editor${isLast ? "" : " mb-3"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(CustomEditorComponent, {
			Input: CustomInput,
			Label: CustomLabel,
			ErrorLabel: CustomErrorLabel
		})
	});
}
/**
* WatchFieldRow — renders a single field from a master-detail (watch) card.
*
* Reads from the selected table row and writes back via setValue.
* Subscribes to FormStateContext (slow) directly
* so that the parent Card component does not rerender when values change.
*/
function WatchFieldRow({ rawFieldName, isLast, selection, watchField, cardReadOnly, hideLabel }) {
	const stableCtx = useBlongForm();
	const stateCtx = useBlongFormState();
	const watchedArray = useWatch({
		control: stableCtx?.control,
		name: watchField,
		disabled: !stableCtx?.control
	});
	if (!stableCtx || !stateCtx) return null;
	const { schema, setValue, onChange, handleTableSelect, getValues } = stableCtx;
	const fieldName = rawFieldName.startsWith("$.edit.") ? rawFieldName.split(".").pop() : rawFieldName;
	const fieldSchema = (schema?.properties?.[watchField]?.items?.properties ?? schema?.properties?.[watchField]?.properties)?.[fieldName] ?? schema?.properties?.[fieldName];
	if (!fieldSchema) return null;
	const WidgetComponent = widgetRegistry.get(resolveWidgetType(fieldSchema, fieldName));
	if (!WidgetComponent) return null;
	const hasLabel = !hideLabel && fieldSchema.title !== "";
	const hasFormData = Array.isArray(watchedArray) && watchedArray.length > selection.index;
	const currentVal = hasFormData ? watchedArray[selection.index]?.[fieldName] : selection.row?.[fieldName];
	const widgetKey = `${fieldName}-${selection.index}-${String(currentVal)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		className: `field grid${isLast ? " mb-0" : ""}`,
		children: [hasLabel && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("label", {
			htmlFor: fieldName,
			className: "col-12 md:col-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Text, { children: fieldSchema.title ?? fieldName })
		}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: `flex align-items-center relative col-12${hasLabel ? " md:col-8" : ""}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(WidgetComponent, {
				name: fieldName,
				schema: fieldSchema,
				value: currentVal,
				onChange: (newVal) => {
					if (hasFormData) {
						const current = [...watchedArray];
						current[selection.index] = {
							...current[selection.index] ?? {},
							[fieldName]: newVal
						};
						setValue(watchField, current);
						onChange?.({
							...getValues(),
							[watchField]: current
						});
					} else {
						const updatedRow = {
							...selection.row,
							[fieldName]: newVal
						};
						handleTableSelect(watchField, {
							row: updatedRow,
							index: selection.index
						});
					}
				},
				onBlur: () => {},
				readOnly: cardReadOnly || fieldSchema.readOnly || fieldSchema.widget?.readOnly
			}, widgetKey)
		})]
	});
}
function Card({ title, children, readOnly, loading, collapsible, className, id, cardName, colIdx, hideTitle }) {
	const [collapsed, setCollapsed] = (0, import_react$5.useState)(false);
	const { active: isDesignMode } = useDesignMode();
	const elementId = id ?? (cardName ? `card-${cardName}` : "card");
	const formCtx = useBlongForm();
	const formState = useBlongFormState();
	const resolved = cardName && formCtx ? formCtx.cards[cardName] : void 0;
	const resolvedTitle = label(resolved?.label, title);
	const titleLabel = typeof resolvedTitle === "string" ? resolvedTitle : cardName ?? elementId;
	const hasCardTitle = resolvedTitle != null && resolvedTitle !== "";
	const { log } = useBlong();
	const { isSelected, select, dragProps, setRef, designClass, style } = useDesignable(elementId, "card", {
		colIdx,
		cardName,
		label: titleLabel,
		sourceId: colIdx
	});
	const resolvedCollapsible = resolved ? resolved.config.collapsible : collapsible;
	const resolvedLoading = resolved ? formState?.loading ?? false : loading;
	const cardReadOnly = resolved ? resolved.config.readOnly : readOnly;
	let content;
	if (cardName && formCtx) {
		if (!resolved) content = /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("span", {
			className: "p-error text-sm",
			children: [
				"❌ Card \"",
				cardName,
				"\" not found"
			]
		});
		else {
			const rawWatch = resolved.config.watch;
			if (rawWatch) {
				const watchField = rawWatch.startsWith("$.selected.") ? rawWatch.slice(11) : rawWatch;
				const selection = (formState?.tableSelections ?? {})[watchField] ?? null;
				const singleWatchWidget = resolved.fields.length === 1;
				content = selection ? resolved.fields.map((rawFieldName, idx) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(WatchFieldRow, {
					rawFieldName,
					isLast: idx === resolved.fields.length - 1,
					selection,
					watchField,
					cardReadOnly,
					hideLabel: singleWatchWidget && hasCardTitle
				}, rawFieldName)) : /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", {
					className: "p-text-secondary text-sm",
					children: "Select a row to see details"
				});
			} else if (isDesignMode) content = resolved.fields.map((fieldName, idx) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(DraggableFieldRow, {
				fieldName,
				cardName,
				isLast: idx === resolved.fields.length - 1,
				cardReadOnly
			}, fieldName));
			else {
				const hideWidgetLabel = resolved.fields.length === 1 && hasCardTitle;
				content = resolved.fields.map((fieldName, idx) => {
					const isLast = idx === resolved.fields.length - 1;
					if (formCtx?.editors?.[fieldName]) return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(CustomEditorRow, {
						fieldName,
						isLast,
						cardReadOnly
					}, fieldName);
					return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(FieldRow, {
						fieldName,
						fieldClass: resolved.config.fieldClass,
						cardReadOnly,
						isLast,
						columnOverride: resolved.columnOverrides?.[fieldName],
						log,
						hideLabel: hideWidgetLabel
					}, fieldName);
				});
			}
		}
	} else content = children;
	const titleNode = !(hideTitle && !isDesignMode) && (resolvedTitle || resolvedCollapsible) ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("span", {
		className: "blong-card__label",
		onClick: resolvedCollapsible ? (e) => {
			e.stopPropagation();
			setCollapsed((c) => !c);
		} : void 0,
		style: resolvedCollapsible ? { cursor: "pointer" } : void 0,
		children: [resolvedCollapsible && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", { className: `pi ${collapsed ? "pi-chevron-right" : "pi-chevron-down"} blong-card__collapse-icon` }), typeof resolvedTitle === "string" ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Text, { children: resolvedTitle }) : resolvedTitle]
	}) : void 0;
	const cardClassName = [
		collapsed ? "blong-card--collapsed" : "",
		resolvedLoading ? "blong-card--loading" : "",
		designClass,
		!isDesignMode ? className ?? "" : ""
	].filter(Boolean).join(" ") || void 0;
	const cardBody = /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		className: "blong-card__body",
		children: [resolvedLoading && !(cardName && formCtx) ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: "blong-card__skeleton",
			children: [
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", { className: "blong-skeleton-row" }, i))
		}) : content, isDesignMode && cardName && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(DropZone, {
			id: `card-end:${cardName}`,
			accept: "field",
			sourceId: cardName
		})]
	}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(SelectionIndicator, {
		id: elementId,
		label: typeof resolvedTitle === "string" ? resolvedTitle : elementId
	})] });
	if (isDesignMode && setRef) return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		ref: setRef,
		className: [className ?? "", "blong-design-card-wrapper"].filter(Boolean).join(" "),
		style,
		onClick: select,
		...dragProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Card$1, {
			id: elementId,
			title: titleNode,
			className: cardClassName,
			children: cardBody
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Card$1, {
		id: elementId,
		title: titleNode,
		className: [
			collapsed ? "blong-card--collapsed" : "",
			resolvedLoading ? "blong-card--loading" : "",
			className ?? ""
		].filter(Boolean).join(" ") || void 0,
		children: !collapsed && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: "blong-card__body",
			children: resolvedLoading && !(cardName && formCtx) ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
				className: "blong-card__skeleton",
				children: [
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", { className: "blong-skeleton-row" }, i))
			}) : content
		})
	});
}
var import_react$5, import_jsx_runtime$6;
function init_Card$1() {
	return (init_Card$1 = __esmMin((() => {
		init_core_esm();
		init_primereact();
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_index_esm();
		init_DropZone();
		init_SelectionIndicator();
		init_useDesignable();
		init_useDesignMode();
		init_BlongContext();
		init_appStore();
		init_widgets();
		init_FormContext();
		init_Text();
		import_jsx_runtime$6 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Deck/Deck.tsx
function TabContent({ deckGroups, cards }) {
	const singleCardTab = deckGroups.reduce((sum, g) => sum + g.length, 0) === 1;
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: "grid col align-self-start max-w-screen",
		children: deckGroups.map((groupNames, groupIdx) => {
			if (!groupNames.length) return null;
			const colClass = groupNames.map((n) => cards[n]).find(Boolean)?.config.className ?? "col-12 xl:col-6";
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Deck, {
				id: `deck-tab-${groupIdx}`,
				className: colClass,
				cardNames: groupNames,
				hideCardTitles: singleCardTab
			}, groupIdx);
		})
	});
}
function Deck({ id, cardNames, hiddenCardNames, children, className, hideCardTitles }) {
	const { active: isDesignMode } = useDesignMode();
	const formCtx = useBlongForm();
	const formState = useBlongFormState();
	if (id === "root" && cardNames === void 0 && formCtx?.layoutResult) return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(RootDeck, {});
	const colIdx = parseInt(id.replace(/^deck-/, ""), 10);
	let body;
	if (cardNames !== void 0 && formCtx) {
		const { cards, checkPermission, control, schema } = formCtx;
		const tableSelections = formState?.tableSelections ?? {};
		const visibleCards = cardNames.filter((name) => {
			const resolved = cards[name];
			if (!resolved) return false;
			if (resolved.config.permission !== void 0) return !!checkPermission?.(resolved.config.permission);
			if (resolved.config.match) {
				const rawWatch = resolved.config.watch;
				const watchField = rawWatch?.startsWith("$.selected.") ? rawWatch.slice(11) : rawWatch;
				if (!watchField) return false;
				const selection = tableSelections[watchField];
				if (!selection) return false;
				return Object.entries(resolved.config.match).every(([k, v]) => selection.row[k] === v);
			}
			return true;
		});
		const hiddenInputs = (hiddenCardNames ?? []).flatMap((cardName) => {
			const resolved = cards[cardName];
			if (!resolved) return [];
			return resolved.fields.map((fieldName) => {
				if (!schema?.properties?.[fieldName]) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Controller, {
					name: fieldName,
					control,
					render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("input", {
						type: "hidden",
						name: fieldName,
						value: field.value != null ? String(field.value) : ""
					})
				}, fieldName);
			});
		});
		if (!visibleCards.length && !hiddenInputs.length) return null;
		const cardElements = visibleCards.map((cardName, idx) => {
			const isLast = idx === visibleCards.length - 1;
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Card, {
				cardName,
				colIdx,
				className: isLast ? "w-full" : "w-full mb-3",
				hideTitle: hideCardTitles
			}, cardName);
		});
		body = /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [hiddenInputs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
			style: { display: "none" },
			children: hiddenInputs
		}), cardElements] });
	} else {
		const childCount = import_react$4.Children.count(children);
		body = import_react$4.Children.map(children, (child, idx) => import_react$4.isValidElement(child) && idx < childCount - 1 ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
			className: "mb-3",
			children: child
		}) : child) ?? [];
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
		className: ["blong-deck", className ?? ""].filter(Boolean).join(" "),
		children: [body, isDesignMode && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(DropZone, {
			id: `col-end:${colIdx}`,
			accept: "card",
			sourceId: colIdx
		})]
	});
}
var import_react$4, import_jsx_runtime$5, noCards, RootDeck;
function init_Deck() {
	return (init_Deck = __esmMin((() => {
		init_core_esm();
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_index_esm();
		init_DropZone();
		init_useDesignMode();
		init_primereact();
		init_Card$1();
		init_FormContext();
		import_jsx_runtime$5 = require_jsx_runtime();
		noCards = {};
		RootDeck = (0, import_react$4.memo)(function RootDeck() {
			const formCtx = useBlongForm();
			const designCtx = useDesignMode();
			const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));
			const [activeDragLabel, setActiveDragLabel] = (0, import_react$4.useState)(null);
			const [activeTabIndex, setActiveTabIndex] = (0, import_react$4.useState)(0);
			const rows = (0, import_react$4.useMemo)(() => formCtx?.layoutResult?.rows ?? [], [formCtx?.layoutResult?.rows]);
			const cards = formCtx?.cards ?? noCards;
			const columnDecks = (0, import_react$4.useMemo)(() => rows.map((columnCards) => {
				const hiddenCards = columnCards.filter((name) => cards[name]?.config.hidden);
				const nonHiddenCards = columnCards.filter((name) => !cards[name]?.config.hidden);
				return {
					hiddenCards,
					nonHiddenCards,
					colClass: (nonHiddenCards[0] ? cards[nonHiddenCards[0]] : void 0)?.config.className ?? "col-12 xl:col-6"
				};
			}), [rows, cards]);
			if (!formCtx?.layoutResult) return null;
			const { layoutResult, layout, formId, onLayoutChange } = formCtx;
			const { layoutType, tabs, orientation, panels } = layoutResult;
			if (layoutType === "split") return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Splitter, {
				layout: orientation === "vertical" ? "vertical" : "horizontal",
				gutterSize: 4,
				style: { height: "100%" },
				children: (panels ?? []).map((panel, idx) => /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(SplitterPanel, {
					size: panel.size,
					minSize: panel.minSize ?? 5,
					style: { overflow: "auto" },
					children: panel.cards.map((cardName, ci) => {
						if (!cards[cardName]) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Card, {
							cardName,
							colIdx: idx,
							className: ci < panel.cards.length - 1 ? "w-full mb-3" : "w-full"
						}, cardName);
					})
				}, idx))
			});
			if (layoutType === "tabs" || layoutType === "steps") {
				const resolvedTabs = tabs ?? [];
				const activeEntry = resolvedTabs[activeTabIndex];
				const tabContent = activeEntry?.component ? import_react$4.createElement(activeEntry.component) : activeEntry ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(TabContent, {
					deckGroups: activeEntry.cardNames,
					cards
				}) : null;
				if (layoutType === "steps") {
					const stepItems = resolvedTabs.map((t) => ({
						label: t.label,
						icon: t.icon
					}));
					const isFirst = activeTabIndex === 0;
					const isLast = activeTabIndex === resolvedTabs.length - 1;
					return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
						className: "blong-form-steps",
						children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
							className: "blong-form-steps__nav flex align-items-center justify-content-center sticky top-0 z-1 surface-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("button", {
									type: "button",
									className: `p-button p-component p-button-text p-button-icon-only m-1${isFirst ? " p-disabled" : ""}`,
									"aria-label": "Back",
									disabled: isFirst,
									onClick: () => setActiveTabIndex((i) => i - 1),
									children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", { className: "p-button-icon pi pi-caret-left" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Steps, {
									model: stepItems,
									activeIndex: activeTabIndex,
									onSelect: (e) => setActiveTabIndex(e.index),
									className: "blong-steps-indicator"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("button", {
									type: isLast ? "submit" : "button",
									form: isLast ? formId : void 0,
									className: "p-button p-component p-button-text p-button-icon-only m-1",
									"aria-label": isLast ? "Save" : "Next",
									onClick: isLast ? void 0 : () => setActiveTabIndex((i) => i + 1),
									children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", { className: `p-button-icon pi ${isLast ? "pi-save" : "pi-caret-right"}` })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
							className: "blong-form-tab-content",
							children: tabContent
						})]
					});
				}
				const orient = orientation ?? "top";
				if (orient === "left" || orient === "right") {
					const panelItems = resolvedTabs.map((t, i) => ({
						id: t.id,
						label: t.label,
						icon: t.icon,
						className: i === activeTabIndex ? "p-highlight" : "",
						command: () => setActiveTabIndex(i)
					}));
					return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
						className: `blong-form-panel-layout blong-form-panel-layout--${orient}`,
						style: {
							display: "flex",
							flexDirection: orient === "left" ? "row" : "row-reverse"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(PanelMenu, {
							model: panelItems,
							className: "blong-form-panelmenu flex-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
							className: "blong-form-panel-content flex-1",
							children: tabContent
						})]
					});
				}
				const tabItems = resolvedTabs.map((t) => ({
					label: t.label,
					icon: t.icon
				}));
				return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
					className: "blong-form-tabs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(TabMenu, {
						model: tabItems,
						activeIndex: activeTabIndex,
						onTabChange: (e) => setActiveTabIndex(e.index),
						className: "blong-form-tab-menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
						className: "blong-form-tab-content",
						children: tabContent
					})]
				});
			}
			/**
			* handleDragEnd — handles card and field moves in design mode.
			* - card over card-{name}       → insert dragged card at that position
			* - card over col-end:{colIdx}  → append card to column
			* - field over field:{f}:{c}    → insert dragged field before that field
			* - field over card-end:{c}     → append field to card
			*/
			const handleDragEnd = (event) => {
				setActiveDragLabel(null);
				const { active, over } = event;
				if (!over || active.id === over.id) return;
				const activeId = String(active.id);
				const overId = String(over.id);
				const activeType = active.data.current?.type;
				const findCard = (name) => {
					for (let ci = 0; ci < rows.length; ci++) {
						const idx = rows[ci].indexOf(name);
						if (idx !== -1) return {
							ci,
							idx
						};
					}
					return null;
				};
				const applyNewRows = (newRows) => {
					const newLayoutConfig = newRows.filter((col) => col.length > 0).map((group) => group.length === 1 ? group[0] : group);
					onLayoutChange?.(layout, newLayoutConfig);
				};
				if (activeType === "card") {
					const activeCardName = activeId.replace(/^card-/, "");
					if (overId.startsWith("col-end:")) {
						const toColIdx = parseInt(overId.replace("col-end:", ""), 10);
						if (Number.isNaN(toColIdx)) return;
						const from = findCard(activeCardName);
						if (!from) return;
						if (from.ci === toColIdx) return;
						const newRows = rows.map((col) => [...col]);
						newRows[from.ci].splice(from.idx, 1);
						if (!newRows[toColIdx]) return;
						newRows[toColIdx].push(activeCardName);
						applyNewRows(newRows);
					} else if (overId.startsWith("card-") && !overId.startsWith("card-end:")) {
						const overCardName = overId.replace(/^card-/, "");
						const from = findCard(activeCardName);
						const to = findCard(overCardName);
						if (!from || !to) return;
						const newRows = rows.map((col) => [...col]);
						newRows[from.ci].splice(from.idx, 1);
						const insertIdx = from.ci === to.ci && to.idx > from.idx ? to.idx - 1 : to.idx;
						newRows[to.ci].splice(insertIdx, 0, activeCardName);
						applyNewRows(newRows);
					}
				} else if (activeType === "field") {
					const withoutPrefix = activeId.replace(/^field:/, "");
					const firstColon = withoutPrefix.indexOf(":");
					if (firstColon === -1) return;
					const fromField = withoutPrefix.substring(0, firstColon);
					const fromCard = withoutPrefix.substring(firstColon + 1);
					const moveField = (targetField, targetCard) => {
						const fromCardResolved = cards[fromCard];
						const toCardResolved = cards[targetCard];
						if (!fromCardResolved) return;
						const fromFields = [...fromCardResolved.fields];
						const toFields = fromCard === targetCard ? fromFields : [...toCardResolved?.fields ?? []];
						const fromIdx = fromFields.indexOf(fromField);
						if (fromIdx === -1) return;
						fromFields.splice(fromIdx, 1);
						if (fromCard === targetCard) {
							const insertIdx = targetField !== null ? Math.max(0, fromFields.indexOf(targetField)) : fromFields.length;
							fromFields.splice(insertIdx, 0, fromField);
							designCtx.updateConfig({ cards: {
								...designCtx.config.cards,
								[fromCard]: {
									...designCtx.config.cards[fromCard] ?? {},
									widgets: fromFields,
									fields: void 0
								}
							} });
						} else {
							const insertIdx = targetField !== null ? toFields.indexOf(targetField) : -1;
							toFields.splice(insertIdx === -1 ? toFields.length : insertIdx, 0, fromField);
							designCtx.updateConfig({ cards: {
								...designCtx.config.cards,
								[fromCard]: {
									...designCtx.config.cards[fromCard] ?? {},
									widgets: fromFields,
									fields: void 0
								},
								[targetCard]: {
									...designCtx.config.cards[targetCard] ?? {},
									widgets: toFields,
									fields: void 0
								}
							} });
						}
					};
					if (overId.startsWith("card-end:")) {
						const toCard = overId.replace("card-end:", "");
						if (fromCard === toCard) return;
						moveField(null, toCard);
					} else if (overId.startsWith("field:")) {
						const rest = overId.replace(/^field:/, "");
						const colonIdx = rest.indexOf(":");
						if (colonIdx === -1) return;
						moveField(rest.substring(0, colonIdx), rest.substring(colonIdx + 1));
					}
				}
			};
			const gridContent = /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
				className: "grid col align-self-start max-w-screen",
				children: columnDecks.map(({ hiddenCards, nonHiddenCards, colClass }, colIdx) => {
					if (!nonHiddenCards.length && !hiddenCards.length) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Deck, {
						id: `deck-${colIdx}`,
						className: colClass,
						cardNames: nonHiddenCards,
						hiddenCardNames: hiddenCards
					}, colIdx);
				})
			});
			if (designCtx.active && onLayoutChange) return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(DndContext, {
				sensors,
				collisionDetection: closestCenter,
				onDragStart: ({ active: a }) => setActiveDragLabel(a.data.current?.label ?? null),
				onDragEnd: handleDragEnd,
				onDragCancel: () => setActiveDragLabel(null),
				children: [gridContent, /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(DragOverlay, {
					dropAnimation: null,
					children: activeDragLabel && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
						className: "blong-drag-ghost",
						children: activeDragLabel
					})
				})]
			});
			return gridContent;
		});
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/design/PropertyEditor.tsx
function PropertyEditor() {
	const { active, selected, config, updateConfig } = useDesignMode();
	const formCtx = useBlongForm();
	if (!active) return null;
	if (!selected) return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
		className: "blong-property-editor blong-property-editor--empty",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("i", { className: "pi pi-info-circle blong-property-editor__icon" }), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
			className: "blong-property-editor__hint",
			children: "Click a card or field to inspect it"
		})]
	});
	if (selected.type === "card") {
		const cardName = selected.id.replace(/^card-/, "");
		const origCard = formCtx?.cards[cardName];
		const cardOverride = config.cards[cardName] ?? {};
		const cardConfig = {
			...origCard?.config ?? {},
			...cardOverride
		};
		const update = (patch) => updateConfig({ cards: {
			...config.cards,
			[cardName]: {
				...cardOverride,
				...patch
			}
		} });
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
			className: "blong-property-editor",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
					className: "blong-property-editor__title",
					children: "Card"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-card-label",
						children: "Label"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-card-label",
						type: "text",
						className: "blong-property-editor__input",
						value: cardConfig.label ?? origCard?.label ?? "",
						onChange: (e) => update({ label: e.target.value })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-card-class",
						children: "CSS class"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-card-class",
						type: "text",
						className: "blong-property-editor__input",
						value: cardConfig.className ?? "",
						onChange: (e) => update({ className: e.target.value || void 0 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__check",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-card-collapsible",
						type: "checkbox",
						checked: cardConfig.collapsible ?? false,
						onChange: (e) => update({ collapsible: e.target.checked || void 0 })
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-card-collapsible",
						children: "Collapsible"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__check",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-card-hidden",
						type: "checkbox",
						checked: cardConfig.hidden ?? false,
						onChange: (e) => update({ hidden: e.target.checked || void 0 })
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-card-hidden",
						children: "Hidden"
					})]
				})
			]
		});
	}
	if (selected.type === "field") {
		const colonIdx = selected.id.indexOf(":", 6);
		const fieldName = selected.id.substring(6, colonIdx);
		const cardName = selected.id.substring(colonIdx + 1);
		const baseSchema = formCtx?.schema?.properties?.[fieldName];
		const schemaOverride = config.schema?.[fieldName] ?? {};
		const card = formCtx?.cards[cardName];
		const updateField = (patch) => updateConfig({ schema: {
			...config.schema ?? {},
			[fieldName]: {
				...schemaOverride,
				...patch
			}
		} });
		const currentTitle = schemaOverride.title ?? baseSchema?.title ?? fieldName;
		const currentType = schemaOverride.type ?? baseSchema?.type ?? "";
		const currentWidgetType = schemaOverride.widget?.type ?? baseSchema?.widget?.type ?? "input";
		const currentRequired = schemaOverride.fieldRequired ?? baseSchema?.fieldRequired ?? false;
		const currentReadOnly = schemaOverride.readOnly ?? baseSchema?.readOnly ?? false;
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
			className: "blong-property-editor p-component m-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__title",
					children: ["Field · ", fieldName]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
						className: "blong-property-editor__key",
						children: "Card"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
						className: "blong-property-editor__val",
						children: card?.label ?? cardName
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-field-title",
						children: "Label"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-field-title",
						type: "text",
						className: "blong-property-editor__input",
						value: currentTitle,
						onChange: (e) => updateField({ title: e.target.value || void 0 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-field-type",
						children: "Type"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("select", {
						id: "pe-field-type",
						className: "blong-property-editor__input",
						value: currentType,
						onChange: (e) => updateField({ type: e.target.value || void 0 }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("option", {
							value: "",
							children: "—"
						}), FIELD_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("option", {
							value: t,
							children: t
						}, t))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-field-widget",
						children: "Widget"
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("select", {
						id: "pe-field-widget",
						className: "blong-property-editor__input",
						value: currentWidgetType,
						onChange: (e) => updateField({ widget: {
							...schemaOverride.widget ?? {},
							type: e.target.value
						} }),
						children: WIDGET_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("option", {
							value: t,
							children: t
						}, t))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__check",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-field-required",
						type: "checkbox",
						checked: currentRequired,
						onChange: (e) => updateField({ required: e.target.checked || void 0 })
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-field-required",
						children: "Required"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-property-editor__check",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
						id: "pe-field-readonly",
						type: "checkbox",
						checked: currentReadOnly,
						onChange: (e) => updateField({ readOnly: e.target.checked || void 0 })
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
						htmlFor: "pe-field-readonly",
						children: "Read-only"
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
		className: "blong-property-editor",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
			className: "blong-property-editor__title",
			children: selected.type
		}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
			className: "blong-property-editor__hint",
			children: selected.id
		})]
	});
}
function DesignAddCardButton({ onCardAdded }) {
	const { updateConfig, config } = useDesignMode();
	const handleAdd = () => {
		const name = `card_${Date.now()}`;
		updateConfig({ cards: {
			...config.cards,
			[name]: {
				label: "New Card",
				widgets: []
			}
		} });
		onCardAdded(name);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("button", {
		type: "button",
		className: "p-button p-component p-button-icon-only ml-1",
		"aria-label": "Add card",
		title: "Add card",
		onClick: handleAdd,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", { className: "p-button-icon p-c pi pi-id-card" }), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
			className: "p-button-label p-c",
			children: "\xA0"
		})]
	});
}
function DesignAddFieldButton({ schema: schemaProp }) {
	const { updateConfig, config, selected } = useDesignMode();
	const formCtx = useBlongForm();
	const [open, setOpen] = (0, import_react$3.useState)(false);
	const allFields = Object.keys(formCtx?.schema?.properties ?? schemaProp ?? {});
	const usedFields = /* @__PURE__ */ new Set([...Object.values(formCtx?.cards ?? {}).flatMap((c) => c.fields), ...Object.values(config.cards).flatMap((c) => {
		return c.widgets ?? (Array.isArray(c.fields) ? c.fields : []);
	})]);
	const availableFields = allFields.filter((f) => !usedFields.has(f));
	const handleAddField = (fieldName) => {
		const cardName = selected?.type === "card" ? selected.id.replace(/^card-/, "") : Object.keys(formCtx?.cards ?? {})[0] ?? Object.keys(config.cards)[0];
		if (!cardName) return;
		const baseCard = formCtx?.cards[cardName];
		const designCard = config.cards[cardName];
		const existing = designCard?.widgets ?? baseCard?.fields ?? [];
		updateConfig({ cards: {
			...config.cards,
			[cardName]: {
				...designCard ?? {},
				widgets: [...existing, fieldName],
				fields: void 0
			}
		} });
		setOpen(false);
	};
	if (!open && availableFields.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("span", {
		style: {
			position: "relative",
			display: "inline-block"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("button", {
			type: "button",
			className: "p-button p-component p-button-icon-only ml-1",
			"aria-label": "Add field",
			title: "Add field",
			disabled: availableFields.length === 0,
			onClick: () => setOpen((o) => !o),
			children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", { className: "p-button-icon p-c pi pi-plus-circle" }), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
				className: "p-button-label p-c",
				children: "\xA0"
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
			className: "blong-design-field-picker",
			children: availableFields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
				className: "blong-design-field-picker__item",
				onClick: () => handleAddField(f),
				children: formCtx?.schema?.properties?.[f]?.title ?? f
			}, f))
		})]
	});
}
var import_react$3, import_jsx_runtime$4, WIDGET_TYPES, FIELD_TYPES;
function init_PropertyEditor() {
	return (init_PropertyEditor = __esmMin((() => {
		import_react$3 = require_react();
		init_FormContext();
		init_useDesignMode();
		import_jsx_runtime$4 = require_jsx_runtime();
		WIDGET_TYPES = [
			"input",
			"text",
			"textArea",
			"password",
			"number",
			"integer",
			"boolean",
			"checkbox",
			"switch",
			"date",
			"time",
			"dateTime",
			"dropdown",
			"multiSelect",
			"select",
			"selectTable",
			"chips",
			"file",
			"image",
			"table",
			"json",
			"code",
			"label",
			"link",
			"divider"
		];
		FIELD_TYPES = [
			"string",
			"number",
			"boolean",
			"object",
			"array"
		];
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Json/Json.tsx
function buildDiff(current, previous) {
	if (typeof current !== "object" || current === null) return [{
		key: "value",
		current,
		previous,
		status: previous === void 0 ? "added" : current === previous ? "unchanged" : "changed"
	}];
	const currentObj = current;
	const previousObj = previous ?? {};
	const allKeys = /* @__PURE__ */ new Set([...Object.keys(currentObj), ...Object.keys(previousObj)]);
	const lines = [];
	for (const key of allKeys) {
		const curr = currentObj[key];
		const prev = previousObj[key];
		let status = "unchanged";
		if (!(key in previousObj)) status = "added";
		else if (!(key in currentObj)) status = "removed";
		else if (JSON.stringify(curr) !== JSON.stringify(prev)) status = "changed";
		lines.push({
			key,
			current: curr,
			previous: prev,
			status
		});
	}
	return lines;
}
function Json({ value, previous, showUnchangedValues = true, keyValue }) {
	if (keyValue) {
		const diff = buildDiff(value, previous);
		return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("dl", {
			className: "blong-json blong-json--kv",
			children: diff.filter((l) => showUnchangedValues || l.status !== "unchanged").map((line) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
				className: `blong-json__line blong-json__line--${line.status}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("dt", {
					className: "blong-json__key",
					children: line.key
				}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("dd", {
					className: "blong-json__value",
					children: [line.status === "changed" && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
						className: "blong-json__prev",
						children: JSON.stringify(line.previous)
					}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
						className: "blong-json__curr",
						children: JSON.stringify(line.current ?? line.previous)
					})]
				})]
			}, line.key))
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("pre", {
		className: "blong-json",
		children: JSON.stringify(value, null, 2)
	});
}
var import_jsx_runtime$3;
function init_Json() {
	return (init_Json = __esmMin((() => {
		import_jsx_runtime$3 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/design/FormInspector.tsx
function Section({ title, value, defaultOpen = false, children }) {
	const [open, setOpen] = (0, import_react$2.useState)(defaultOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
		className: "blong-inspector__section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("button", {
			type: "button",
			className: "blong-inspector__toggle",
			onClick: () => setOpen((o) => !o),
			children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", { className: `pi pi-chevron-${open ? "down" : "right"} blong-inspector__chevron` }), title]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
			className: "blong-inspector__body",
			children: children ?? /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Json, { value })
		})]
	});
}
/**
* Renders one row per field showing dirty / touched / error status.
* Uses useFormState (subscribes to dirty/touched/errors) and useWatch (subscribes
* to values) separately so each only triggers when its own slice changes.
*/
function FieldsSection({ dirtyFields, touchedFields, errors }) {
	const allFields = /* @__PURE__ */ new Set([
		...Object.keys(dirtyFields),
		...Object.keys(touchedFields),
		...Object.keys(errors)
	]);
	if (allFields.size === 0) return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("p", {
		className: "blong-inspector__empty",
		children: "No dirty / touched / error fields yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("dl", {
		className: "blong-inspector__fields",
		children: [...allFields].map((field) => {
			const dirty = !!dirtyFields[field];
			const touched = !!touchedFields[field];
			const error = errors[field];
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
				className: "blong-inspector__field-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("dt", {
					className: `blong-inspector__field-name${dirty ? " blong-inspector__field-name--dirty" : ""}`,
					children: field
				}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("dd", {
					className: "blong-inspector__field-flags",
					children: [
						dirty && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
							className: "blong-inspector__badge blong-inspector__badge--dirty",
							children: "D"
						}),
						touched && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
							className: "blong-inspector__badge blong-inspector__badge--touched",
							children: "T"
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
							className: "blong-inspector__badge blong-inspector__badge--error",
							title: error.message,
							children: String(error.type ?? "E")
						}),
						error?.message && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
							className: "blong-inspector__error-msg",
							children: error.message
						})
					]
				})]
			}, field);
		})
	});
}
function FormInspectorInner({ control }) {
	const stateCtx = useBlongFormState();
	const values = useWatch({ control });
	const { dirtyFields, touchedFields, errors, isDirty, isLoading, submitCount, isValid } = useFormState({ control });
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
		className: "blong-property-editor blong-inspector p-component m-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
				className: "blong-property-editor__title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("i", { className: "pi pi-info-circle blong-inspector__icon" }), "Form Inspector"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Section, {
				title: "Fields",
				defaultOpen: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(FieldsSection, {
					dirtyFields,
					touchedFields,
					errors
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Section, {
				title: "Values",
				value: values,
				defaultOpen: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Section, {
				title: "Table Selections",
				value: stateCtx?.tableSelections ?? {},
				defaultOpen: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Section, {
				title: "State",
				value: {
					editorMode: stateCtx?.editorMode,
					editorLayout: stateCtx?.editorLayout,
					readOnly: stateCtx?.readOnly,
					loading: stateCtx?.loading,
					isDirty,
					isValid,
					submitCount,
					isLoading
				},
				defaultOpen: true
			})
		]
	});
}
/**
* FormInspector — render inside a <Form> to display live form state in debug mode.
* Returns null when rendered outside a Form context (guards against both FormContext
* and FormStateContext being unavailable).
*/
function FormInspector() {
	const formCtx = useBlongForm();
	if (!formCtx) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(FormInspectorInner, { control: formCtx.control });
}
var import_react$2, import_jsx_runtime$2;
function init_FormInspector() {
	return (init_FormInspector = __esmMin((() => {
		import_react$2 = require_react();
		init_index_esm();
		init_FormContext();
		init_Json();
		import_jsx_runtime$2 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Form/Form.tsx
function Form({ schema, cards: cardsConfig, layout = "default", layouts, value, onChange, onSubmit, readOnly = false, loading = false, serverErrors, id, checkPermission, dropdowns, onTableSelect, onLayoutChange, onDirtyChange, resetKey, rightPanel, methods, onFieldChange, editors, editorMode, editorLayout, reportMode, reportParams }) {
	const fallbackId = (0, import_react$1.useId)();
	const formId = id ?? fallbackId;
	const designCtx = useDesignMode();
	const effectiveCards = (0, import_react$1.useMemo)(() => {
		if (!designCtx.active || !cardsConfig) return cardsConfig;
		const result = {};
		for (const [name, card] of Object.entries(cardsConfig)) {
			const override = designCtx.config.cards[name];
			result[name] = override ? {
				...card,
				...override
			} : card;
		}
		for (const [name, override] of Object.entries(designCtx.config.cards)) if (!(name in result)) result[name] = override;
		return result;
	}, [
		cardsConfig,
		designCtx.active,
		designCtx.config.cards
	]);
	const effectiveSchema = (0, import_react$1.useMemo)(() => {
		if (!designCtx.active || !schema) return schema;
		const overrides = designCtx.config.schema;
		if (!overrides || Object.keys(overrides).length === 0) return schema;
		const newProps = { ...schema.properties };
		for (const [fieldName, override] of Object.entries(overrides)) if (newProps[fieldName]) {
			newProps[fieldName] = {
				...newProps[fieldName],
				...override
			};
			const o = override;
			if (o.widget && newProps[fieldName].widget) newProps[fieldName] = {
				...newProps[fieldName],
				widget: {
					...newProps[fieldName].widget,
					...o.widget
				}
			};
		}
		return {
			...schema,
			properties: newProps
		};
	}, [
		schema,
		designCtx.active,
		designCtx.config.schema
	]);
	const layoutResult = useLayout(effectiveSchema, effectiveCards, layout, layouts, editors);
	const { cards } = layoutResult;
	/**
	* Tracks rows selected in table widgets with selectionMode: 'single'.
	* Key = field name; value = {row, index} (without __key) or null.
	*/
	const [tableSelections, setTableSelections] = (0, import_react$1.useState)({});
	const handleTableSelect = (0, import_react$1.useCallback)((fieldName, selection) => {
		setTableSelections((prev) => ({
			...prev,
			[fieldName]: selection
		}));
		onTableSelect?.(fieldName, selection);
	}, [onTableSelect]);
	const { control, handleSubmit, reset, setError, getValues, setValue, formState } = useForm({ mode: "onBlur" });
	(0, import_react$1.useEffect)(() => {
		onDirtyChange?.(formState.isDirty);
	}, [formState.isDirty, onDirtyChange]);
	(0, import_react$1.useEffect)(() => {
		if (value !== void 0) reset(value);
	}, [value, reset]);
	(0, import_react$1.useEffect)(() => {
		if (resetKey === void 0 || resetKey === 0) return;
		reset(value ?? {});
	}, [resetKey]);
	(0, import_react$1.useEffect)(() => {
		if (!serverErrors) return;
		for (const [field, message] of Object.entries(serverErrors)) setError(field, {
			type: "server",
			message
		});
	}, [serverErrors, setError]);
	const handleFormSubmit = async (data) => {
		await onSubmit?.(data);
	};
	const handleFormInvalid = (fieldErrors) => {
		const count = Object.keys(fieldErrors).length;
		if (count === 0) return;
		useAppStore.getState().showToast({
			severity: "error",
			summary: "Validation error",
			detail: count === 1 ? "Please correct the highlighted field." : `Please correct ${count} highlighted fields.`
		});
	};
	const { config: { portal } } = useBlong();
	const debug = portal?.debug ?? false;
	const stableContextValue = (0, import_react$1.useMemo)(() => ({
		schema: effectiveSchema,
		cards,
		control,
		dropdowns,
		onChange,
		handleTableSelect,
		setValue,
		getValues,
		checkPermission,
		layoutResult,
		layout,
		formId,
		onLayoutChange,
		methods,
		onFieldChange,
		editors
	}), [
		effectiveSchema,
		cards,
		dropdowns,
		onChange,
		handleTableSelect,
		checkPermission,
		layoutResult,
		layout,
		formId,
		onLayoutChange,
		methods,
		onFieldChange,
		editors,
		control,
		getValues,
		setValue
	]);
	const stateContextValue = (0, import_react$1.useMemo)(() => ({
		tableSelections,
		readOnly,
		loading,
		editorMode,
		editorLayout,
		reportMode,
		reportParams
	}), [
		tableSelections,
		readOnly,
		loading,
		editorMode,
		editorLayout,
		reportMode,
		reportParams
	]);
	const effectiveRightPanel = debug ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(import_jsx_runtime$1.Fragment, { children: [rightPanel, /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(FormInspector, {})] }) : rightPanel;
	const formBody = effectiveRightPanel ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		className: "blong-form-layout",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("form", {
			id: formId,
			onSubmit: handleSubmit(handleFormSubmit, handleFormInvalid),
			className: "blong-form",
			noValidate: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Deck, { id: "root" })
		}), effectiveRightPanel]
	}) : /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("form", {
		id: formId,
		onSubmit: handleSubmit(handleFormSubmit, handleFormInvalid),
		className: "blong-form",
		noValidate: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Deck, { id: "root" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(FormContext, {
		value: stableContextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(FormStateContext, {
			value: stateContextValue,
			children: formBody
		})
	});
}
var import_react$1, import_jsx_runtime$1;
function init_Form$1() {
	return (init_Form$1 = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_index_esm();
		init_BlongContext();
		init_FormInspector(), init_useDesignMode();
		init_useLayout();
		init_appStore();
		init_Deck();
		init_FormContext();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Editor/Editor.tsx
function deriveInitialMode(mode, editMode) {
	if (mode !== void 0) return mode;
	return editMode ? "edit" : "view";
}
/**
* Derive effective layout key from mode and layout name with sensible fallbacks.
*
* Resolution order:
* 1. `{mode}{Capital(layout)}` — e.g. `editDefault`, `newDefault`, `viewDefault`
* 2. For non-edit modes: `edit{Capital(layout)}` — e.g. `editDefault`
* 3. `layout` as-is — e.g. `default`
*/
function resolveLayoutKey(mode, layout, layouts) {
	if (!layouts) return layout;
	const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
	const modeKey = mode + cap(layout);
	if (modeKey in layouts) return modeKey;
	if (mode !== "edit") {
		const editKey = "edit" + cap(layout);
		if (editKey in layouts) return editKey;
	}
	return layout;
}
/**
* Derive a display title from the current mode and resolved layout key.
*
* Splits the layout key at capital-letter boundaries and capitalises each word.
* When the layout starts with the current mode the mode word is used directly;
* otherwise only the capitalized mode is returned.
*
* Examples:
*   ('edit', 'editSplit')       → 'Edit Split'
*   ('edit', 'editThumbIndex')  → 'Edit Thumb Index'
*   ('new',  'edit')            → 'New'   (mode != layout prefix → no suffix)
*   ('view', 'viewDefault')     → 'View'  ('default' suffix filtered out)
*/
function resolveTabTitle(mode, resolvedLayout) {
	const words = resolvedLayout.replace(/([A-Z])/g, " $1").trim().split(/\s+/);
	const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
	const suffix = words[0]?.toLowerCase() === mode ? words.slice(1).filter((w) => w.toLowerCase() !== "default") : [];
	const modeTitle = cap(mode);
	return suffix.length ? `${modeTitle} ${suffix.map(cap).join(" ")}` : modeTitle;
}
function getPath(obj, path) {
	if (!obj || typeof obj !== "object") return void 0;
	const parts = path.split(".");
	let cur = obj;
	for (const part of parts) {
		if (cur === null || cur === void 0) return void 0;
		cur = cur[part];
	}
	return cur;
}
function resolveTemplate(params, context) {
	if (params === void 0 || params === null) return void 0;
	if (typeof params === "string") {
		const singleExpr = params.trim().match(/^\$\{([^{}]+)\}$/);
		if (singleExpr) {
			const val = getPath(context, singleExpr[1].trim());
			if (val !== null && typeof val === "object") return val;
			return { value: val };
		}
		return { value: params.replace(/\$\{([^{}]+)\}/g, (_, expr) => {
			const v = getPath(context, expr.trim());
			return v === void 0 || v === null ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
		}) };
	}
	return Object.fromEntries(Object.entries(params).map(([k, v]) => {
		if (typeof v === "string") {
			const r = resolveTemplate(v, context);
			return [k, r?.value !== void 0 ? r.value : r];
		}
		return [k, v];
	}));
}
function evalEnabled(enabled, currentRow, selectedRows, isDirty) {
	if (enabled === "current") return currentRow !== null;
	if (enabled === "selected") return selectedRows.length > 0;
	if (enabled === "dirty") return isDirty;
	if (enabled === "clean") return !isDirty;
	return enabled !== false;
}
function Editor({ schema, cards, layout = "default", layouts, value: staticValue, loadAction, loadParams, saveAction, createAction, onSave, dropdowns, toolbar = [], toolbarRight = [], mode: initialModeProp, editMode: initialEditMode = false, editable = true, designable = false, initialDesignMode = false, checkPermission, methods, onFieldChange, editors, className = "blong-editor", title: titleProp, tabId, refreshNamespace, queryAction }) {
	const formId = (0, import_react.useId)();
	const [currentMode, setCurrentMode] = (0, import_react.useState)(() => deriveInitialMode(initialModeProp, initialEditMode));
	const editMode = currentMode !== "view";
	const [localValue, setLocalValue] = (0, import_react.useState)(void 0);
	const [serverErrors, setServerErrors] = (0, import_react.useState)(void 0);
	const [isDirty, setIsDirty] = (0, import_react.useState)(false);
	/** Incremented by doReset to imperatively reset the Form's RHF state to the current value */
	const [formResetKey, setFormResetKey] = (0, import_react.useState)(0);
	/** Whether the last save succeeded and the form hasn't been touched since */
	const [savedSuccess, setSavedSuccess] = (0, import_react.useState)(false);
	/** Number of in-flight toolbar button calls — form is read-only while > 0 */
	const [toolbarBusy, setToolbarBusy] = (0, import_react.useState)(0);
	const handleToolbarBusy = (0, import_react.useCallback)((busy) => {
		setToolbarBusy((n) => n + (busy ? 1 : -1));
	}, []);
	/** error.print from the last failed save — shown in OverlayPanel anchored to save button */
	const [validationHint, setValidationHint] = (0, import_react.useState)(void 0);
	const saveButtonRef = (0, import_react.useRef)(null);
	const cancelButtonRef = (0, import_react.useRef)(null);
	const hintOverlayRef = (0, import_react.useRef)(null);
	const [designMode, setDesignMode] = (0, import_react.useState)(designable && initialDesignMode);
	const [localLayouts, setLocalLayouts] = (0, import_react.useState)(() => layouts);
	/**
	* Report params submitted by the "Run Report" button.
	* Undefined until the first report run; set to the submitted form values on each run.
	* Passed to Form → FormStateContext → TableWidget to trigger a re-fetch with new filter params.
	*/
	const [reportParams, setReportParams] = (0, import_react.useState)(void 0);
	const isReportMode = !!queryAction;
	/**
	* Per-field table selection tracking for toolbar button enabled/params resolution.
	* Only table widgets (not navigator) contribute to toolbar context.
	*/
	const [tableSelections, setTableSelections] = (0, import_react.useState)({});
	const [lastTableFieldName, setLastTableFieldName] = (0, import_react.useState)(null);
	/**
	* Returns true if the field drives the Editor toolbar context.
	* Navigator widgets publish selections for cascade filtering only —
	* all other array-field widgets (table, etc.) update toolbar context.
	*/
	const isTableWidget = (0, import_react.useCallback)((fieldName) => {
		return schema?.properties?.[fieldName]?.widget?.type !== "navigator";
	}, [schema?.properties]);
	const handleTableSelect = (0, import_react.useCallback)((fieldName, selection) => {
		if (!isTableWidget(fieldName)) return;
		setTableSelections((prev) => ({
			...prev,
			[fieldName]: selection
		}));
		setLastTableFieldName((prev) => {
			if (selection) return fieldName;
			if (prev === fieldName) return null;
			return prev;
		});
	}, [isTableWidget]);
	/** Template context derived from the most recent non-null table widget selection */
	const lastRow = lastTableFieldName ? tableSelections[lastTableFieldName]?.row ?? null : null;
	const selectionContext = {
		id: lastRow?.id,
		current: lastRow,
		selected: lastRow ? [lastRow] : [],
		...lastRow ?? {}
	};
	const resolvedLayout = resolveLayoutKey(currentMode, layout, localLayouts ?? layouts);
	const titlePropRef = (0, import_react.useRef)(titleProp);
	titlePropRef.current = titleProp;
	const setTabTitleStore = useAppStore((s) => s.setTabTitle);
	(0, import_react.useEffect)(() => {
		if (!tabId || !setTabTitleStore) return;
		const tp = titlePropRef.current;
		const computedTitle = tp === null || tp === void 0 ? resolveTabTitle(currentMode, resolvedLayout) : typeof tp === "string" ? tp : tp[currentMode] ?? resolveTabTitle(currentMode, resolvedLayout);
		setTabTitleStore(tabId, computedTitle);
	}, [
		tabId,
		currentMode,
		resolvedLayout,
		setTabTitleStore
	]);
	const handleCardAdded = (0, import_react.useCallback)((name) => {
		setLocalLayouts((prev) => {
			const key = resolveLayoutKey(currentMode, layout, prev ?? layouts);
			const cur = prev?.[key];
			const flat = Array.isArray(cur) ? [...cur] : [];
			return {
				...prev ?? {},
				[key]: [...flat, name]
			};
		});
	}, [
		currentMode,
		layout,
		layouts
	]);
	const handleFormChange = (0, import_react.useCallback)(() => {
		setSavedSuccess(false);
		setValidationHint(void 0);
	}, []);
	const handleLayoutChange = (0, import_react.useCallback)((key, newLayout) => {
		setLocalLayouts((prev) => ({
			...prev ?? {},
			[key]: newLayout
		}));
	}, []);
	const loader = useAction(staticValue ? "" : loadAction ?? "", "query", loadParams);
	const entityValue = localValue ?? staticValue ?? loader.data ?? void 0;
	const queryClient = useQueryClient();
	const creator = useAction(createAction ?? saveAction ?? "", "mutation");
	const saver = useAction(saveAction ?? "", "mutation");
	const activeSaver = currentMode === "new" ? creator : saver;
	const activeSaving = creator.loading || saver.loading;
	(0, import_react.useEffect)(() => {
		if (validationHint && saveButtonRef.current) hintOverlayRef.current?.show(null, saveButtonRef.current);
		else hintOverlayRef.current?.hide();
	}, [validationHint]);
	const handleSubmit = async (formValue) => {
		if (isReportMode) {
			setReportParams(formValue);
			return;
		}
		setServerErrors(void 0);
		const isCreate = currentMode === "new";
		try {
			const savedValue = await activeSaver.call(formValue) ?? formValue;
			setLocalValue(savedValue);
			setIsDirty(false);
			setSavedSuccess(true);
			if (isCreate) {
				setCurrentMode("edit");
				setFormResetKey((k) => k + 1);
			}
			setValidationHint(void 0);
			onSave?.(savedValue);
			const ns = (isCreate ? createAction ?? saveAction : saveAction)?.split(".").slice(0, -1).join(".");
			if (ns) {
				queryClient.invalidateQueries({ queryKey: [ns + ".find"] });
				queryClient.invalidateQueries({ queryKey: [ns + ".get"] });
			}
		} catch (err) {
			const blongErr = err;
			if (Array.isArray(blongErr?.validation)) {
				const fieldErrors = {};
				for (const { field, message } of blongErr.validation) fieldErrors[field] = message;
				setServerErrors(fieldErrors);
				if (blongErr.print) setValidationHint(blongErr.print);
			}
		}
	};
	const leftButtons = [...isReportMode ? [{
		label: "Run Report",
		icon: "pi pi-play",
		submit: true,
		title: "Run Report"
	}] : [...editable && currentMode === "view" ? [{
		label: "Edit",
		icon: "pi pi-pencil",
		action: "__edit__"
	}] : [], ...editMode ? [{
		label: "Save",
		icon: savedSuccess ? "pi pi-check" : "pi pi-save",
		submit: true,
		action: "__save__"
	}, {
		label: "Reset",
		icon: "pi pi-replay",
		action: "__cancel__"
	}] : []], ...toolbar];
	const rightButtons = [...toolbarRight, ...designable ? [{
		label: "Design",
		icon: "pi pi-cog",
		action: "__design__"
	}] : []];
	/** True while any toolbar action or save is in-flight — disables all remaining buttons */
	const globalBusy = toolbarBusy > 0 || activeSaving;
	const handleToolbarAction = (actionName) => {
		if (actionName === "__edit__") setCurrentMode("edit");
		if (actionName === "__design__") setDesignMode((d) => !d);
		if (actionName === "__refresh__" && refreshNamespace) queryClient.invalidateQueries({ predicate: (q) => typeof q.queryKey[0] === "string" && q.queryKey[0].startsWith(refreshNamespace + ".") });
		if (actionName === "__cancel__") {
			const doReset = () => {
				setLocalValue(void 0);
				setIsDirty(false);
				setSavedSuccess(false);
				setValidationHint(void 0);
				setCurrentMode(deriveInitialMode(initialModeProp, initialEditMode));
				setFormResetKey((k) => k + 1);
			};
			if (isDirty) confirmPopup({
				target: cancelButtonRef.current,
				message: "Changed data will not be saved. Are you sure you want to proceed?",
				icon: "pi pi-exclamation-triangle",
				accept: doReset
			});
			else doReset();
		}
	};
	/** Render a custom ActionButton with selection-aware enabled/params resolution */
	const renderActionBtn = (btn, i) => {
		const resolvedParams = resolveTemplate(btn.params, selectionContext);
		const resolvedDisabled = globalBusy || !evalEnabled(btn.enabled, selectionContext.current, selectionContext.selected, isDirty);
		const resolvedBtn = resolvedParams != null ? {
			...btn,
			params: resolvedParams
		} : btn;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
			...resolvedBtn,
			disabled: resolvedDisabled,
			formId,
			className: "mr-2",
			onBusyChange: handleToolbarBusy
		}, i);
	};
	const leftContent = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "blong-toolbar-left",
		children: leftButtons.map((btn, i) => {
			const actionName = typeof btn.action === "string" ? btn.action : btn.action?.method ?? "";
			const isDisabled = (actionName === "__save__" || actionName === "__cancel__") && (!isDirty || activeSaving || toolbarBusy > 0);
			if (actionName === "__edit__" || actionName === "__cancel__" || actionName === "__refresh__") {
				const testIdSuffix = actionName.replace(/__/g, "");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					ref: actionName === "__cancel__" ? cancelButtonRef : void 0,
					type: "button",
					className: `p-button p-component p-button-icon-only mr-2${isDisabled ? " p-disabled" : ""}`,
					"aria-label": btn.label || btn.title,
					title: btn.title,
					disabled: isDisabled,
					"data-testid": `editor-${testIdSuffix}`,
					onClick: () => handleToolbarAction(actionName),
					children: [btn.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `p-button-icon p-c pi ${btn.icon}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "p-button-label p-c",
						children: "\xA0"
					})]
				}, i);
			}
			if (actionName === "__save__") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				ref: saveButtonRef,
				type: "submit",
				form: formId,
				className: `p-button p-component p-button-icon-only mr-2${isDisabled ? " p-disabled" : ""}`,
				"aria-label": btn.label,
				disabled: isDisabled,
				"data-testid": "editor-save",
				children: [btn.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `p-button-icon p-c pi ${activeSaving || toolbarBusy > 0 ? "pi-spin pi-spinner" : btn.icon}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "p-button-label p-c",
					children: "\xA0"
				})]
			}, i);
			return renderActionBtn(btn, i);
		})
	});
	const rightContent = rightButtons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "blong-toolbar-right",
		children: rightButtons.map((btn, i) => {
			const actionName = typeof btn.action === "string" ? btn.action : btn.action?.method ?? "";
			if (actionName === "__design__") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "blong-design-toolbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `p-button p-component p-button-icon-only${designMode ? " p-button-success" : ""}`,
					"aria-label": btn.label,
					"aria-pressed": designMode,
					onClick: () => handleToolbarAction(actionName),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `p-button-icon p-c pi ${designMode ? "pi-check" : "pi-cog"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "p-button-label p-c",
						children: "\xA0"
					})]
				}), designMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAddCardButton, { onCardAdded: handleCardAdded }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignAddFieldButton, {
					schema,
					cards
				})] })]
			}, i);
			return renderActionBtn(btn, i);
		})
	}) : void 0;
	const editorContent = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		"data-testid": "blong-browser-test",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverlayPanel, {
				ref: hintOverlayRef,
				className: "blong-validation-hint",
				style: { maxWidth: 320 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "p-error",
					children: validationHint
				})
			}),
			(leftButtons.length > 0 || rightButtons.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolbar, {
				left: leftContent,
				right: rightContent,
				className: "border-none border-bottom-1 border-50 p-2",
				style: backgroundNone
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
				id: formId,
				schema,
				cards,
				layout: resolvedLayout,
				layouts: localLayouts,
				value: entityValue,
				onChange: handleFormChange,
				onSubmit: isReportMode || saveAction || createAction ? handleSubmit : void 0,
				onDirtyChange: setIsDirty,
				resetKey: formResetKey,
				onTableSelect: handleTableSelect,
				readOnly: isReportMode ? false : !editMode || activeSaving || toolbarBusy > 0 || loader.loading,
				loading: loader.loading,
				serverErrors,
				checkPermission,
				methods,
				editors,
				onFieldChange,
				dropdowns,
				onLayoutChange: designMode ? handleLayoutChange : void 0,
				rightPanel: designable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyEditor, {}) : void 0,
				editorMode: currentMode,
				editorLayout: resolvedLayout,
				reportMode: isReportMode,
				reportParams
			})
		]
	});
	if (!designable) return editorContent;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignModeProvider, {
		active: designMode,
		initialConfig: {
			cards: cards ?? {},
			layouts: localLayouts ?? {}
		},
		children: editorContent
	});
}
var import_react, import_jsx_runtime, backgroundNone;
function init_Editor() {
	return (init_Editor = __esmMin((() => {
		init_primereact();
		init_QueryClientProvider();
		import_react = require_react();
		init_DesignModeContext();
		init_PropertyEditor();
		init_useAction();
		init_appStore();
		init_ActionButton();
		init_Form$1();
		import_jsx_runtime = require_jsx_runtime();
		backgroundNone = { background: "none" };
	})))();
}
//#endregion
init_Editor();
export { Editor, resolveTabTitle };
