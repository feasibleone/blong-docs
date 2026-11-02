import { n as __esmMin, r as __exportAll, s as __toESM } from "./rolldown-runtime-wTHAN5bU.js";
import { t as require_react } from "./react-DUbJxPEF.js";
// ../../common/temp/node_modules/.pnpm/zustand@5.0.12_@types+react@19.2.14_react@19.2.4_use-sync-external-store@1.6.0_react@19.2.4_/node_modules/zustand/esm/vanilla.mjs
var createStoreImpl, createStore;
function init_vanilla() {
	return (init_vanilla = __esmMin((() => {
		createStoreImpl = (createState) => {
			let state;
			const listeners = /* @__PURE__ */ new Set();
			const setState = (partial, replace) => {
				const nextState = typeof partial === "function" ? partial(state) : partial;
				if (!Object.is(nextState, state)) {
					const previousState = state;
					state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
					listeners.forEach((listener) => listener(state, previousState));
				}
			};
			const getState = () => state;
			const getInitialState = () => initialState;
			const subscribe = (listener) => {
				listeners.add(listener);
				return () => listeners.delete(listener);
			};
			const api = {
				setState,
				getState,
				getInitialState,
				subscribe
			};
			const initialState = state = createState(setState, getState, api);
			return api;
		};
		createStore = ((createState) => createState ? createStoreImpl(createState) : createStoreImpl);
	})))();
}
// ../../common/temp/node_modules/.pnpm/zustand@5.0.12_@types+react@19.2.14_react@19.2.4_use-sync-external-store@1.6.0_react@19.2.4_/node_modules/zustand/esm/react.mjs
function useStore(api, selector = identity) {
	const slice = import_react.useSyncExternalStore(api.subscribe, import_react.useCallback(() => selector(api.getState()), [api, selector]), import_react.useCallback(() => selector(api.getInitialState()), [api, selector]));
	import_react.useDebugValue(slice);
	return slice;
}
var import_react, identity, createImpl, create;
function init_react() {
	return (init_react = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_vanilla();
		identity = (arg) => arg;
		createImpl = (createState) => {
			const api = createStore(createState);
			const useBoundStore = (selector) => useStore(api, selector);
			Object.assign(useBoundStore, api);
			return useBoundStore;
		};
		create = ((createState) => createState ? createImpl(createState) : createImpl);
	})))();
}
// ../../core/blong-browser/src/i18n/bundled.ts
/**
* The active dictionary: bundled, then the suite's portal configuration, then
* the database — later layers win, and English is an empty base (`D-627`).
*/
function composeTranslations(language, config, database) {
	return {
		...bundledTranslations[language] ?? {},
		...config?.[language] ?? {},
		...database?.[language] ?? {}
	};
}
var bundledTranslations;
function init_bundled() {
	return (init_bundled = __esmMin((() => {
		bundledTranslations = {
			en: {},
			bg: {
				"Back to Login": "Обратно към входа",
				Cancel: "Отказ",
				"Create your account": "Създайте своя профил",
				Login: "Вход",
				"Login with password": "Вход с парола",
				Password: "Парола",
				"Password is required": "Паролата е задължителна",
				"Passwords do not match": "Паролите не съвпадат",
				"Select a row to see details": "Изберете ред за показване на детайли",
				"Set Password": "Задай парола",
				"Sign in failed": "Неуспешен вход",
				Username: "Потребителско име",
				"Username is required": "Потребителското име е задължително",
				Verify: "Потвърди"
			}
		};
	})))();
}
// ../../core/blong-browser/src/i18n/collect.ts
/** Turn collection on and drop what an earlier screen recorded. */
function collectStart() {
	collecting = true;
	counts.clear();
	publish();
}
/** Turn collection off — the normal state of a production app. */
function collectStop() {
	collecting = false;
}
/**
* Record one rendered key. Called from `useText`, so it covers `<Text>`, the
* `Button` wrapper and every widget that renders through them.
*/
function recordRendered(key) {
	if (!collecting || !key) return;
	counts.set(key, (counts.get(key) ?? 0) + 1);
}
/**
* The current report, for the language the provider answers with.
*
* A key is missing when the active dictionary has no entry or an empty one — an
* empty `labelText` is a seed TODO marker, not a translation (`D-631`).
*/
function translationReport() {
	const { language, dictionary } = provider();
	const rendered = [...counts.keys()].sort((a, b) => a.localeCompare(b, "en"));
	return {
		language,
		rendered,
		missing: rendered.filter((key) => !dictionary[key])
	};
}
/** The render count of one key, for the in-app page. */
function renderedCounts() {
	return Object.fromEntries([...counts.entries()].sort(([a], [b]) => a.localeCompare(b, "en")));
}
/** Let the store answer "which language, which dictionary" without a cycle. */
function setTranslationProvider(next) {
	provider = next;
	publish();
}
/**
* Publish the collector on `window` so a Playwright test and the report page can
* reach it. `report()` is the only thing a test needs; `start`/`stop` let a dev
* session turn collection on from the console.
*/
function publish() {
	if (typeof window === "undefined") return;
	window.__blongI18n = {
		start: collectStart,
		stop: collectStop,
		report: translationReport,
		counts: renderedCounts
	};
}
var counts, collecting, provider;
function init_collect() {
	return (init_collect = __esmMin((() => {
		counts = /* @__PURE__ */ new Map();
		collecting = false;
		provider = () => ({
			language: "en",
			dictionary: {}
		});
		if (typeof window !== "undefined" && window.__blongI18nCollect) collectStart();
	})))();
}
// ../../core/blong-browser/src/state/appStore.ts
var appStore_exports = /* @__PURE__ */ __exportAll({ useAppStore: () => useAppStore });
function readThemeSelection() {
	if (typeof localStorage === "undefined") return {};
	try {
		const raw = localStorage.getItem(THEME_STORAGE_KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		const selection = {};
		if (typeof parsed.themeId === "string") selection.themeId = parsed.themeId;
		if (parsed.palette === "light" || parsed.palette === "dark") selection.palette = parsed.palette;
		if (parsed.direction === "ltr" || parsed.direction === "rtl") selection.direction = parsed.direction;
		return selection;
	} catch {
		return {};
	}
}
function writeThemeSelection(selection) {
	if (typeof localStorage === "undefined") return;
	try {
		if (!selection.themeId && !selection.palette && !selection.direction) localStorage.removeItem(THEME_STORAGE_KEY);
		else localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(selection));
	} catch {}
}
/**
* The active dictionary for a language, from every layer.
*
* Composed on every write rather than on every render: `useText` then stays one
* object lookup, and the collector reports exactly the dictionary the screen used.
*/
function appliedTranslations(state, language = state.language ?? "en") {
	const database = {};
	for (const [code, bundle] of Object.entries(state.translationBundle)) if (bundle.label) database[code] = bundle.label;
	return { translations: {
		...composeTranslations(language, state.translationsByLanguage, database),
		...state.translationOverride ?? {}
	} };
}
/**
* Mark the active language on the document.
*
* A Playwright test waits on `html[data-language]` instead of guessing how long a
* dictionary load takes, the same trick the portal uses for its composed config.
*/
function markLanguage(language) {
	if (typeof document !== "undefined") document.documentElement.dataset.language = language;
}
var THEME_STORAGE_KEY, initialAuth, initialPortal, toastIdCounter, pendingBundles, useAppStore;
function init_appStore() {
	return (init_appStore = __esmMin((() => {
		init_react();
		init_bundled();
		init_collect();
		THEME_STORAGE_KEY = "blong.theme";
		initialAuth = {
			token: null,
			profile: null,
			permissions: {},
			isAuthenticated: false
		};
		initialPortal = {
			tabs: [],
			activeTabId: null,
			portalConfig: null
		};
		toastIdCounter = 0;
		pendingBundles = /* @__PURE__ */ new Map();
		useAppStore = create((set, get) => ({
			auth: initialAuth,
			portal: initialPortal,
			toasts: [],
			feedback: {
				active: false,
				items: {}
			},
			loader: {
				active: false,
				count: 0
			},
			translations: {},
			translationsByLanguage: {},
			translationBundle: {},
			language: "en",
			format: {},
			actions: {},
			error: null,
			hint: null,
			theme: readThemeSelection(),
			loginPrompt: false,
			setToken: (token) => set((state) => ({ auth: {
				...state.auth,
				token,
				isAuthenticated: token != null
			} })),
			setProfile: (profile) => set((state) => ({ auth: {
				...state.auth,
				profile
			} })),
			setPermissions: (permissions) => set((state) => ({ auth: {
				...state.auth,
				permissions
			} })),
			logout: () => set({
				auth: initialAuth,
				portal: initialPortal,
				toasts: []
			}),
			openTab: (tab) => set((state) => {
				const existing = state.portal.tabs.find((t) => t.actionName === tab.actionName && JSON.stringify(t.params) === JSON.stringify(tab.params));
				if (existing) return { portal: {
					...state.portal,
					activeTabId: existing.id
				} };
				return { portal: {
					...state.portal,
					tabs: [...state.portal.tabs, tab],
					activeTabId: tab.id
				} };
			}),
			closeTab: (id) => set((state) => {
				const tabs = state.portal.tabs.filter((t) => t.id !== id);
				const activeTabId = state.portal.activeTabId === id ? tabs[tabs.length - 1]?.id ?? null : state.portal.activeTabId;
				return { portal: {
					...state.portal,
					tabs,
					activeTabId
				} };
			}),
			setActiveTab: (id) => set((state) => ({ portal: {
				...state.portal,
				activeTabId: id
			} })),
			setTabDirty: (id, dirty) => set((state) => ({ portal: {
				...state.portal,
				tabs: state.portal.tabs.map((t) => t.id === id ? {
					...t,
					dirty
				} : t)
			} })),
			setTabTitle: (id, title) => set((state) => ({ portal: {
				...state.portal,
				tabs: state.portal.tabs.map((t) => t.id === id ? {
					...t,
					title
				} : t)
			} })),
			updateTabComponent: (id, component) => set((state) => ({ portal: {
				...state.portal,
				tabs: state.portal.tabs.map((t) => t.id === id ? {
					...t,
					component
				} : t)
			} })),
			setPortalConfig: (config) => set((state) => ({ portal: {
				...state.portal,
				portalConfig: config
			} })),
			showToast: (toast) => {
				const id = String(++toastIdCounter);
				if (toast.severity === "error") console.error("[blong] error toast", toast.summary ?? "", toast.detail ?? "");
				set((state) => ({ toasts: [...state.toasts, {
					...toast,
					id
				}] }));
				const life = toast.life ?? (toast.severity === "error" ? 8e3 : 4e3);
				setTimeout(() => get().clearToast(id), life);
			},
			clearToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
			clearAllToasts: () => set({ toasts: [] }),
			setLoading: (active, message) => set((state) => {
				const count = state.loader.count + (active ? 1 : -1);
				return { loader: {
					active: count > 0,
					message,
					count: Math.max(0, count)
				} };
			}),
			setTranslations: (dict) => set((state) => ({
				translationOverride: dict,
				...appliedTranslations({
					...state,
					translationOverride: dict
				})
			})),
			setTranslationsByLanguage: (dicts) => set((state) => ({
				translationsByLanguage: dicts,
				translationOverride: void 0,
				...appliedTranslations({
					...state,
					translationsByLanguage: dicts,
					translationOverride: void 0
				})
			})),
			setTranslationBundle: (language, bundle) => set((state) => {
				const translationBundle = {
					...state.translationBundle,
					[language]: bundle
				};
				return state.language === language ? {
					translationBundle,
					...appliedTranslations({
						...state,
						translationBundle
					})
				} : { translationBundle };
			}),
			setTranslationLoader: (loader) => set({ translationLoader: loader }),
			setLanguage: (language) => {
				set((state) => {
					markLanguage(language);
					return {
						language,
						...appliedTranslations(state, language)
					};
				});
				const { translationLoader, translationBundle, languageActivate } = get();
				if (translationLoader && !translationBundle[language]) languageActivate(language);
			},
			languageActivate: async (language) => {
				set((state) => {
					markLanguage(language);
					return {
						language,
						...appliedTranslations(state, language)
					};
				});
				const { translationLoader, translationBundle, setTranslationBundle } = get();
				if (!translationLoader || translationBundle[language]) return;
				let pending = pendingBundles.get(language);
				if (!pending) {
					pending = translationLoader(language).finally(() => pendingBundles.delete(language));
					pendingBundles.set(language, pending);
				}
				try {
					setTranslationBundle(language, await pending);
				} catch {}
			},
			setFormat: (scope, config) => set((state) => ({ format: {
				...state.format,
				[scope]: config
			} })),
			registerActions: (actions) => set((state) => ({ actions: {
				...state.actions,
				...actions
			} })),
			showError: (error) => {
				console.error("[blong] error dialog", error.type, error.print ?? error.message, error);
				set({ error });
			},
			clearError: () => set({ error: null }),
			setTheme: (selection) => {
				writeThemeSelection(selection);
				set({ theme: selection });
			},
			setDirection: (direction) => set((state) => {
				if (state.theme.direction === direction) return {};
				const theme = {
					...state.theme,
					direction
				};
				writeThemeSelection(theme);
				return { theme };
			}),
			setLoginPrompt: (visible) => set({ loginPrompt: visible }),
			showHint: (target, message, error) => set({ hint: {
				target,
				message,
				error
			} }),
			clearHint: () => set({ hint: null }),
			feedbackActivate: (active) => set((state) => ({ feedback: {
				...state.feedback,
				active
			} })),
			feedbackAdd: (item) => set((state) => ({ feedback: {
				...state.feedback,
				items: {
					...state.feedback.items,
					[item.targetId]: item
				}
			} })),
			feedbackUpdate: (targetId, patch) => set((state) => {
				const existing = state.feedback.items[targetId];
				if (!existing) return {};
				return { feedback: {
					...state.feedback,
					items: {
						...state.feedback.items,
						[targetId]: {
							...existing,
							...patch
						}
					}
				} };
			}),
			feedbackRemove: (targetId) => set((state) => {
				if (!(targetId in state.feedback.items)) return {};
				const items = { ...state.feedback.items };
				delete items[targetId];
				return { feedback: {
					...state.feedback,
					items
				} };
			}),
			feedbackReset: () => set((state) => ({ feedback: {
				...state.feedback,
				items: {}
			} }))
		}));
		setTranslationProvider(() => {
			const state = useAppStore.getState();
			return {
				language: state.language,
				dictionary: state.translations
			};
		});
	})))();
}
export { init_collect as a, translationReport as c, collectStart as i, init_appStore as n, recordRendered as o, useAppStore as r, renderedCounts as s, appStore_exports as t };
