import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { n as init_BlongContext, r as useBlong } from "./BlongContext-Gs5GTHA4.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { n as init_appStore, r as useAppStore } from "./appStore-8DTFQjf-.js";
import { $ as init_primereact, B as ProgressSpinner, J as TabView, P as Menubar, T as Dialog, et as Text, f as Hint, g as Button, p as init_Hint, q as TabPanel, tt as init_Text } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-browser/src/hooks/useLoader.ts
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
//#endregion
//#region ../../core/blong-browser/src/hooks/usePortal.ts
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
		setTabDirty: (0, import_react$1.useCallback)((id, dirty) => setTabDirtyStore(id, dirty), [setTabDirtyStore])
	};
}
var import_react$1;
function init_usePortal() {
	return (init_usePortal = __esmMin((() => {
		import_react$1 = require_react();
		init_appStore();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Error/Error.tsx
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
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(Dialog, {
		visible: true,
		header: /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("span", {
			className: "blong-error-dialog__title",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("i", { className: "pi pi-exclamation-circle blong-error-dialog__icon" }), " Error"]
		}),
		onHide: unauthorized ? () => {} : clearError,
		closable: !unauthorized,
		className: "blong-error-dialog",
		style: { width: "480px" },
		modal: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
			className: "blong-error-dialog__body",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("p", {
				className: "blong-error-dialog__message",
				children: error.print ?? error.message
			}), error.validation && error.validation.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("ul", {
				className: "blong-error-dialog__validation",
				children: error.validation.map((v) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("strong", { children: [v.field, ":"] }),
					" ",
					v.message
				] }, v.field))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
			className: "blong-error-dialog__footer",
			children: unauthorized ? /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Button, {
				label: "Login",
				icon: "pi pi-sign-in",
				onClick: handleLogin
			}) : /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Button, {
				label: "Close",
				icon: "pi pi-times",
				onClick: clearError
			})
		})]
	});
}
var import_jsx_runtime$2, AUTH_ERROR_TYPES;
function init_Error() {
	return (init_Error = __esmMin((() => {
		init_primereact();
		init_BlongContext();
		init_appStore();
		import_jsx_runtime$2 = require_jsx_runtime();
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
//#endregion
//#region ../../core/blong-browser/src/lib/testid.ts
var testid_default;
function init_testid() {
	return (init_testid = __esmMin((() => {
		testid_default = (id) => id && { "data-testid": id.replace(/[/.]/g, (match) => match === "." ? "-" : "_") };
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Loader/Loader.tsx
function Loader() {
	const { loading, message } = useLoader();
	if (!loading) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
		className: "blong-loader-overlay",
		role: "status",
		"aria-live": "polite",
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
			className: "blong-loader-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ProgressSpinner, {
				style: {
					width: "50px",
					height: "50px"
				},
				strokeWidth: "4",
				animationDuration: ".8s"
			}), message && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("p", {
				className: "blong-loader-message",
				children: message
			})]
		})
	});
}
var import_jsx_runtime$1;
function init_Loader$1() {
	return (init_Loader$1 = __esmMin((() => {
		init_primereact();
		init_useLoader();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Portal/Portal.tsx
async function buildMenuModel(items, command, handler) {
	if (!items) return void 0;
	return Promise.all(items.map(async (item) => {
		const action = typeof item === "string" ? { method: item } : item;
		if ("items" in action) {
			const firstChild = action.items?.find((i) => typeof i === "string" || typeof i === "object" && i !== null && "method" in i);
			const firstMethod = typeof firstChild === "string" ? firstChild : firstChild?.method ?? "";
			const groupId = action.id ?? firstMethod.split(".")[0] ?? "";
			return {
				label: action.title,
				icon: action.icon,
				items: await buildMenuModel(action.items, command, handler),
				...groupId && { template: (item, options) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: options.className,
					"data-testid": `portal-menu-${groupId}`,
					onClick: options.onClick,
					children: [item.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: options.iconClassName }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: options.labelClassName,
						children: item.label
					})]
				}) }
			};
		} else if ("method" in action) {
			const { title, permission, icon, component } = await handler[`component/${action.method}`](typeof action.params === "function" ? action.params({}) : action.params ?? {}, {});
			const menuId = (action.method ?? "").replace(/\./g, "-");
			return {
				label: title,
				icon,
				data: {
					action: action.method,
					params: action.params,
					title,
					permission,
					component
				},
				command,
				template: (item, options) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: options.className,
					"data-testid": `portal-menu-${menuId}`,
					onClick: options.onClick,
					children: [item.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: options.iconClassName }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: options.labelClassName,
						children: item.label
					})]
				})
			};
		} else return {
			label: action.title,
			icon: action.icon
		};
	}));
}
function Portal({ logo, menubarEnd, className = "" }) {
	const { tabs, activeTabId, setActiveTab, closeTab, portalConfig } = usePortal();
	const { handler } = useBlong();
	const openTab = useAppStore((s) => s.openTab);
	const command = (0, import_react.useCallback)(({ item: { data: { component, title, action, params } } }) => {
		(async () => {
			try {
				openTab({
					id: `${action}?${JSON.stringify(params)}`,
					actionName: action,
					params,
					title,
					component: await component()
				});
			} catch {}
		})();
	}, [openTab]);
	const activeIndex = tabs.findIndex((t) => t.id === activeTabId);
	const [menu, setMenu] = import_react.useState(void 0);
	import_react.useEffect(() => {
		buildMenuModel(portalConfig?.menu, command, handler).then(setMenu);
	}, [
		portalConfig?.menu,
		command,
		handler
	]);
	const start = logo ?? (portalConfig?.title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "blong-portal-brand",
		children: portalConfig.title
	}) : void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `blong-portal ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menubar, {
				start,
				end: menubarEnd,
				className: "blong-portal-menubar",
				...menu && { model: menu }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "blong-portal-body",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabView, {
					activeIndex: activeIndex >= 0 ? activeIndex : 0,
					onTabChange: (e) => setActiveTab(tabs[e.index]?.id ?? null),
					scrollable: true,
					className: "blong-portal-tabs",
					renderActiveOnly: false,
					children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabPanel, {
						__TYPE: "TabPanel",
						header: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "blong-tab-header",
							...testid_default(`portal.tab${tab.id}`),
							children: [
								tab.dirty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "blong-tab-dirty",
									children: "● "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: tab.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
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
						children: tab.component ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
							fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { padding: 32 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressSpinner, {})
							}),
							children: import_react.createElement(tab.component, {
								...tab.params,
								tabId: tab.id
							})
						}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "blong-portal-loading",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressSpinner, {})
						})
					}, tab.id))
				})
			})
		]
	});
}
var import_react, import_jsx_runtime, TabErrorBoundary;
function init_Portal$1() {
	return (init_Portal$1 = __esmMin((() => {
		init_primereact();
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_BlongContext();
		init_usePortal();
		init_testid();
		init_appStore();
		init_Error();
		init_Hint();
		init_Loader$1();
		init_Text();
		import_jsx_runtime = require_jsx_runtime();
		TabErrorBoundary = class extends import_react.Component {
			state = { error: null };
			static getDerivedStateFromError(error) {
				return { error };
			}
			render() {
				if (this.state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "blong-tab-error",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "pi pi-exclamation-triangle blong-tab-error__icon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "blong-tab-error__message",
						children: this.state.error.message
					})]
				});
				return this.props.children;
			}
		};
	})))();
}
//#endregion
export { init_Error as i, init_Portal$1 as n, ErrorDialog as r, Portal as t };
