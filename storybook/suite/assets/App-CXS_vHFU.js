import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { n as init_BlongContext, r as useBlong, t as BlongProvider } from "./BlongContext-Gs5GTHA4.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { n as init_appStore, r as useAppStore } from "./appStore-8DTFQjf-.js";
import { i as init_Error, n as init_Portal, r as ErrorDialog, t as Portal } from "./Portal-BBR7dqjc.js";
import { V as PrimeReactProvider, it as useText, rt as init_useText } from "./inputtext.esm-BsWCZcbt.js";
import { n as init_Theme, r as useTheme, t as Theme } from "./Theme-DlFJmlox.js";
import { $ as init_primereact, B as ProgressSpinner, C as ConfirmPopup, E as Dropdown, F as Message, N as Menu, S as ConfirmDialog, T as Dialog, d as ActionHint, g as Button, h as Avatar, i as init_themeRegistry, j as InputText, p as init_Hint, r as THEME_GROUPS, z as Password } from "./iframe-jjCxrJpo.js";
//#endregion
//#region ../../core/blong-browser/src/components/AccountMenu/AccountMenu.tsx
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
	const portalConfig = useAppStore((s) => s.portal.portalConfig);
	const setProfile = useAppStore((s) => s.setProfile);
	const openTab = useAppStore((s) => s.openTab);
	const menuRef = (0, import_react$5.useRef)(null);
	const page = profilePage ?? portalConfig?.profile?.page;
	const get = profileGet ?? portalConfig?.profile?.get;
	const profileLabel = useText("Profile");
	const signOutLabel = useText("Sign out");
	(0, import_react$5.useEffect)(() => {
		if (!get) return;
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
		setProfile
	]);
	const initials = (0, import_react$5.useMemo)(() => profile?.initials ?? deriveInitials(profile?.name), [profile]);
	const onLogout = import_react$5.useCallback(async () => {
		await handler.authLogout({}, {});
	}, [handler]);
	const openProfile = import_react$5.useCallback(async () => {
		if (!page) return;
		try {
			const resolved = await handler[`component/${page}`]({}, {});
			const component = await resolved.component();
			openTab({
				id: `page-${page}`,
				actionName: page,
				title: resolved.title ?? profileLabel,
				component
			});
		} catch {}
	}, [
		page,
		handler,
		openTab,
		profileLabel
	]);
	const model = (0, import_react$5.useMemo)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
		className: "blong-account-menu",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Avatar, {
			label: initials,
			icon: initials ? void 0 : "pi pi-user",
			shape: "circle",
			className: "blong-account-menu__avatar",
			onClick: (e) => menuRef.current?.toggle(e),
			title: profile?.name
		}), /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Menu, {
			model,
			popup: true,
			ref: menuRef,
			className: "blong-account-menu__menu"
		})]
	});
}
var import_react$5, import_jsx_runtime$7;
function init_AccountMenu$1() {
	return (init_AccountMenu$1 = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_primereact();
		init_BlongContext();
		init_appStore();
		init_useText();
		import_jsx_runtime$7 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/primereact/locales.ts
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
//#endregion
//#region ../../core/blong-browser/src/components/LanguageSwitcher/LanguageSwitcher.tsx
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
	const language = useAppStore((s) => s.language);
	const setLanguage = useAppStore((s) => s.setLanguage);
	const portalConfig = useAppStore((s) => s.portal.portalConfig);
	const languages = (0, import_react$4.useMemo)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Dropdown, {
		value: language,
		options: languages,
		optionLabel: "label",
		optionValue: "value",
		onChange: (e) => setLanguage(e.value),
		className: "blong-language-switcher",
		panelClassName: "blong-language-switcher__panel",
		"aria-label": "Language"
	});
}
var import_react$4, import_jsx_runtime$6;
function init_LanguageSwitcher$1() {
	return (init_LanguageSwitcher$1 = __esmMin((() => {
		import_react$4 = require_react();
		init_primereact();
		init_appStore();
		import_jsx_runtime$6 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/SocialLoginButton/SocialLoginButton.tsx
function GoogleMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("svg", {
		className: "blong-social-login__mark",
		viewBox: "0 0 48 48",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("path", {
				fill: "#EA4335",
				d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("path", {
				fill: "#4285F4",
				d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("path", {
				fill: "#FBBC05",
				d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("path", {
				fill: "#34A853",
				d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
			})
		]
	});
}
function SocialLoginButton({ onClick, label = "Continue with Google", loading, disabled, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Button, {
		type: "button",
		outlined: true,
		label,
		loading,
		disabled,
		className: `blong-social-login__button ${className ?? ""}`,
		onClick,
		"data-testid": "google-login-button",
		children: !loading && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(GoogleMark, {})
	});
}
var import_jsx_runtime$5;
function init_SocialLoginButton$1() {
	return (init_SocialLoginButton$1 = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$5 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Login/Login.tsx
function Login({ onLogin, onOtp, onNewPassword, title, logoIcon = "pi pi-circle", logoUrl, titleComponent: TitleComponent, orgComponent: OrgComponent, orgTitle, orgIcon, orgLogoUrl, registerPage, registerLabel = "Register", error: externalError, loading: externalLoading, initialStep = "credentials", googleLogin, defaultUsername, passwordHint }) {
	const { handler } = useBlong();
	const [step, setStep] = (0, import_react$3.useState)(initialStep);
	const [username, setUsername] = (0, import_react$3.useState)(defaultUsername ?? "");
	const [hintOpen, setHintOpen] = (0, import_react$3.useState)(false);
	const [password, setPassword] = (0, import_react$3.useState)("");
	const [otp, setOtp] = (0, import_react$3.useState)("");
	const [newPassword, setNewPassword] = (0, import_react$3.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react$3.useState)("");
	const [error, setError] = (0, import_react$3.useState)("");
	const [loading, setLoading] = (0, import_react$3.useState)(false);
	const [RegisterComp, setRegisterComp] = (0, import_react$3.useState)(null);
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
	if (RegisterComp) return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
		className: "blong-login p-component",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
			className: "blong-login__register-area",
			children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Button, {
				label: "Back to Login",
				icon: "pi pi-arrow-left",
				className: "p-button-text",
				onClick: () => setRegisterComp(null)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
			className: "blong-login__register-view",
			children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(RegisterComp, {})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
		className: "blong-login p-component",
		children: [
			registerPage && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
				className: "blong-login__register-area",
				children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Button, {
					label: registerLabel,
					className: "p-button-outlined",
					onClick: () => void handleRegister()
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
				className: "blong-login__top",
				children: [TitleComponent && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
					className: "blong-login__title-slot",
					children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(TitleComponent, {})
				}), (title || logoUrl || logoIcon) && /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-login__brand",
					children: [logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("img", {
						src: logoUrl,
						alt: title ?? "logo",
						className: "blong-login__brand-img"
					}) : /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("i", { className: `blong-login__brand-icon ${logoIcon}` }), title && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
						className: "blong-login__brand-name",
						children: title
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
				className: "blong-login__card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
						className: "blong-login__card-heading",
						children: "Login with password"
					}),
					displayError && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Message, {
						severity: "error",
						text: displayError,
						className: "blong-login__error"
					}),
					step === "credentials" && /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("form", {
						className: "blong-login__form",
						onSubmit: (e) => void handleCredentials(e),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
									htmlFor: "login-username",
									className: "blong-field__label",
									children: "Username"
								}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(InputText, {
									id: "login-username",
									name: "username",
									value: username,
									onChange: (e) => setUsername(e.target.value),
									className: "blong-login__input w-full",
									autoFocus: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
								className: "blong-field",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("label", {
										htmlFor: "login-password",
										className: "blong-field__label",
										children: ["Password", passwordHint && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Button, {
											type: "button",
											icon: "pi pi-question-circle",
											text: true,
											rounded: true,
											size: "small",
											"aria-label": "What belongs in this field",
											"aria-expanded": hintOpen,
											onClick: () => setHintOpen((open) => !open)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Password, {
										inputId: "login-password",
										name: "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										className: "blong-login__input w-full",
										inputClassName: "w-full",
										toggleMask: true,
										disabled: isLoading
									}),
									passwordHint && hintOpen && /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
										className: "blong-login__hint",
										children: [passwordHint.text && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", { children: passwordHint.text }), passwordHint.command && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("code", {
											className: "blong-login__hint-command",
											children: passwordHint.command
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Button, {
								type: "submit",
								label: "Login",
								loading: isLoading,
								className: "blong-login__submit",
								"data-testid": "login-submit"
							})
						]
					}),
					step === "otp" && /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("form", {
						className: "blong-login__form",
						onSubmit: (e) => void handleOtp(e),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
								className: "blong-login__hint",
								children: "Enter the one-time password sent to your device."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
									htmlFor: "login-otp",
									className: "blong-field__label",
									children: "One-Time Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(InputText, {
									id: "login-otp",
									value: otp,
									onChange: (e) => setOtp(e.target.value),
									autoFocus: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Button, {
								type: "submit",
								label: "Verify",
								loading: isLoading,
								className: "blong-login__submit"
							})
						]
					}),
					step === "newPassword" && /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("form", {
						className: "blong-login__form",
						onSubmit: (e) => void handleNewPassword(e),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
								className: "blong-login__hint",
								children: "Your password has expired. Please set a new password."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
									htmlFor: "login-new-pass",
									className: "blong-field__label",
									children: "New Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Password, {
									inputId: "login-new-pass",
									value: newPassword,
									onChange: (e) => setNewPassword(e.target.value),
									toggleMask: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("label", {
									htmlFor: "login-confirm-pass",
									className: "blong-field__label",
									children: "Confirm Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Password, {
									inputId: "login-confirm-pass",
									value: confirmPassword,
									onChange: (e) => setConfirmPassword(e.target.value),
									toggleMask: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Button, {
								type: "submit",
								label: "Set Password",
								loading: isLoading,
								className: "blong-login__submit"
							})
						]
					}),
					googleLogin?.onGoogle && /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(import_jsx_runtime$4.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
						className: "blong-login__divider",
						children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", { children: "or" })
					}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(SocialLoginButton, {
						onClick: () => void googleLogin.onGoogle?.(),
						label: googleLogin.label
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
				className: "blong-login__bottom",
				children: OrgComponent ? /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(OrgComponent, {}) : orgTitle || orgLogoUrl || orgIcon ? /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
					className: "blong-login__org-brand",
					children: [orgLogoUrl ? /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("img", {
						src: orgLogoUrl,
						alt: orgTitle ?? "logo",
						className: "blong-login__org-img"
					}) : orgIcon ? /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("i", { className: `blong-login__org-icon ${orgIcon}` }) : null, orgTitle && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
						className: "blong-login__org-name",
						children: orgTitle
					})]
				}) : null
			})
		]
	});
}
var import_react$3, import_jsx_runtime$4;
function init_Login$1() {
	return (init_Login$1 = __esmMin((() => {
		init_primereact();
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_BlongContext();
		init_SocialLoginButton$1();
		import_jsx_runtime$4 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/LoginPopup/LoginPopup.tsx
function LoginPopup() {
	const prompt = useAppStore((s) => s.loginPrompt);
	const setLoginPrompt = useAppStore((s) => s.setLoginPrompt);
	const { handler } = useBlong();
	const [username, setUsername] = (0, import_react$2.useState)("");
	const [password, setPassword] = (0, import_react$2.useState)("");
	const [error, setError] = (0, import_react$2.useState)(void 0);
	const [loading, setLoading] = (0, import_react$2.useState)(false);
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
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)(Dialog, {
		visible: true,
		header: "Session expired — please log in",
		onHide: close,
		closable: true,
		modal: true,
		className: "blong-login-popup",
		style: { width: "380px" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
			className: "blong-login-popup__body",
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Message, {
					severity: "error",
					text: error,
					className: "blong-login-popup__error"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
					className: "blong-login-popup__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("label", {
						htmlFor: "blong-login-popup-username",
						children: "Username"
					}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(InputText, {
						id: "blong-login-popup-username",
						name: "username",
						value: username,
						onChange: (e) => setUsername(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && onSubmit(),
						autoFocus: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
					className: "blong-login-popup__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("label", {
						htmlFor: "blong-login-popup-password",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Password, {
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
		}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
			className: "blong-login-popup__footer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Button, {
				label: "Cancel",
				icon: "pi pi-times",
				onClick: close,
				outlined: true
			}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Button, {
				label: "Login",
				icon: "pi pi-sign-in",
				onClick: onSubmit,
				loading
			})]
		})]
	});
}
var import_react$2, import_jsx_runtime$3;
function init_LoginPopup$1() {
	return (init_LoginPopup$1 = __esmMin((() => {
		init_primereact();
		import_react$2 = require_react();
		init_BlongContext();
		init_appStore();
		import_jsx_runtime$3 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/OAuthCallback/OAuthCallback.tsx
function OAuthCallback({ onExchange, onSuccess, title, logoIcon = "pi pi-google" }) {
	const [error, setError] = (0, import_react$1.useState)("");
	const [loading, setLoading] = (0, import_react$1.useState)(true);
	(0, import_react$1.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
		className: "blong-oauth-callback p-component",
		children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
			className: "blong-oauth-callback__card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("i", { className: `blong-oauth-callback__icon ${logoIcon}` }),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(import_jsx_runtime$2.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("p", {
					className: "blong-oauth-callback__heading",
					children: "Signing you in with Google…"
				}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(ProgressSpinner, {
					className: "blong-oauth-callback__spinner",
					style: {
						width: "3rem",
						height: "3rem"
					}
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(import_jsx_runtime$2.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("p", {
						className: "blong-oauth-callback__heading",
						children: "Sign in failed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("p", {
						className: "blong-oauth-callback__error",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Button, {
						label: "Back to Login",
						icon: "pi pi-arrow-left",
						className: "p-button-outlined blong-oauth-callback__back",
						onClick: backToLogin,
						"data-testid": "oauth-back-login"
					})
				] }),
				title && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("p", {
					className: "blong-oauth-callback__brand",
					children: title
				})
			]
		})
	});
}
var import_react$1, import_jsx_runtime$2;
function init_OAuthCallback$1() {
	return (init_OAuthCallback$1 = __esmMin((() => {
		init_primereact();
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_jsx_runtime$2 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/ThemeSwitcher/ThemeSwitcher.tsx
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
			"aria-label": "Theme"
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
		init_primereact();
		init_Theme();
		init_themeRegistry();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/App/App.tsx
function AppShell({ loginComponent: LoginComponent, children, portalProps }) {
	const { handler, config } = useBlong();
	const isAuthenticated = useAppStore((s) => s.auth.isAuthenticated);
	const [restored, setRestored] = import_react.useState(false);
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
				if (config) useAppStore.getState().setPortalConfig(config);
			}).finally(() => {
				requestAnimationFrame(() => {
					document.documentElement.setAttribute("data-portal-config", "merged");
				});
			});
		}
	}, [handler, isAuthenticated]);
	const loginHandler = import_react.useCallback(async ({ username, password }) => {
		await handler.authLogin({
			username,
			password
		}, {});
	}, [handler]);
	const appConfig = config;
	import_react.useEffect(() => {
		const dicts = appConfig.portal?.translations;
		if (dicts && Object.keys(dicts).length > 0) useAppStore.getState().setTranslationsByLanguage(dicts);
	}, [appConfig.portal?.translations]);
	const registerPage = appConfig.login?.registerPage;
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
		logoIcon: "pi pi-globe",
		title: "Blong Portal",
		registerPage,
		defaultUsername: appConfig.login?.username,
		passwordHint: appConfig.login?.tokenHint,
		googleLogin: googleEnabled ? { onGoogle } : void 0
	});
	return children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		...portalProps,
		menubarEnd: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeSwitcher, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountMenu, {})
		] })
	});
}
function App({ handlerProxy, theme = DEFAULT_THEME, children, loginComponent, log, ...portalProps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlongProvider, {
		handlerProxy,
		log,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimeReactProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Theme, {
			theme,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
					loginComponent,
					portalProps,
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginPopup, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorDialog, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmPopup, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionHint, {})
			]
		}) })
	});
}
var import_react, import_jsx_runtime, DEFAULT_THEME;
function init_App$1() {
	return (init_App$1 = __esmMin((() => {
		init_primereact();
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_BlongContext();
		init_locales();
		init_appStore();
		init_AccountMenu$1();
		init_Error();
		init_Hint();
		init_LanguageSwitcher$1();
		init_Login$1();
		init_LoginPopup$1();
		init_OAuthCallback$1();
		init_Portal();
		init_Theme();
		init_ThemeSwitcher$1();
		import_jsx_runtime = require_jsx_runtime();
		DEFAULT_THEME = {
			type: "compact",
			palette: "dark",
			languages: { bg: bgLocale }
		};
	})))();
}
//#endregion
init_App$1();
export { App };
