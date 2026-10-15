import { n as __esmMin, r as __exportAll, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
//#region ../../common/temp/node_modules/.pnpm/zustand@5.0.12_@types+react@19.2.14_react@19.2.4_use-sync-external-store@1.6.0_react@19.2.4_/node_modules/zustand/esm/vanilla.mjs
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
//#endregion
//#region ../../common/temp/node_modules/.pnpm/zustand@5.0.12_@types+react@19.2.14_react@19.2.4_use-sync-external-store@1.6.0_react@19.2.4_/node_modules/zustand/esm/react.mjs
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
//#endregion
//#region ../../core/blong-browser/src/state/appStore.ts
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
var THEME_STORAGE_KEY, initialAuth, initialPortal, toastIdCounter, useAppStore;
function init_appStore() {
	return (init_appStore = __esmMin((() => {
		init_react();
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
		useAppStore = create((set, get) => ({
			auth: initialAuth,
			portal: initialPortal,
			toasts: [],
			loader: {
				active: false,
				count: 0
			},
			translations: {},
			translationsByLanguage: {},
			language: "en",
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
			setTranslations: (dict) => set({ translations: dict }),
			setTranslationsByLanguage: (dicts) => set((state) => ({
				translationsByLanguage: dicts,
				translations: Object.keys(dicts).length > 0 ? dicts[state.language] ?? {} : state.translations
			})),
			setLanguage: (language) => set((state) => ({
				language,
				translations: Object.keys(state.translationsByLanguage).length > 0 ? state.translationsByLanguage[language] ?? {} : state.translations
			})),
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
			clearHint: () => set({ hint: null })
		}));
	})))();
}
//#endregion
export { init_appStore as n, useAppStore as r, appStore_exports as t };
