import { n as __esmMin, s as __toESM } from "./rolldown-runtime-wTHAN5bU.js";
import { t as require_react } from "./react-DUbJxPEF.js";
import { a as init_QueryClientProvider, i as useBlong, n as init_BlongContext, o as useQueryClient, t as BlongProvider } from "./BlongContext-B-oAdKSg.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BGSnrdEt.js";
import { a as init_collect, i as collectStart, n as init_appStore, r as useAppStore } from "./appStore-p_jHiGC2.js";
import { i as usePermission, n as init_dropdownRegistry, r as init_usePermission, t as dropdownRegistry } from "./dropdownRegistry-4YvbG02q.js";
import { V as PrimeReactProvider, ct as useTranslate, rt as init_useText, st as useText } from "./inputtext.esm-Da2nlmPp.js";
import { a as init_placement, c as resizeBox, i as connectorOf, l as toFraction, n as useFeedbackConfig, o as moveBox, r as arrowHeadPoints, s as placeCallout, t as init_useFeedbackConfig } from "./useFeedbackConfig-PFv4_xjq.js";
import { n as init_Theme, r as useTheme, t as Theme } from "./Theme-D6ncdTNb.js";
import { $ as init_primereact, B as ProgressSpinner, C as ConfirmPopup, Ct as rectOf, E as Dropdown, F as Message, J as TabView, N as Menu, P as Menubar, S as ConfirmDialog, St as portalFeedbackId, T as Dialog, Tt as targetOf, bt as init_ids, ct as init_useFeedbackTarget, d as ActionHint, f as Hint, g as Button, gt as FEEDBACK_UI_ATTR, h as Avatar, ht as FEEDBACK_ID_ATTR, i as init_themeRegistry, it as FeedbackActiveContext, j as InputText, lt as useFeedbackActive, mt as FEEDBACK_CAPTURE_ATTR, nt as Text, p as init_Hint, q as TabPanel, r as THEME_GROUPS, rt as init_Text, vt as closestFeedbackTarget, wt as shortTargetId, xt as isFeedbackUi, yt as feedbackAttributes, z as Password } from "./iframe-IrD74JhJ.js";
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
		setTabDirty: (0, import_react$11.useCallback)((id, dirty) => setTabDirtyStore(id, dirty), [setTabDirtyStore])
	};
}
var import_react$11;
function init_usePortal() {
	return (init_usePortal = __esmMin((() => {
		import_react$11 = require_react();
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
	const portalConfig = useAppStore((s) => s.portal.portalConfig);
	const setProfile = useAppStore((s) => s.setProfile);
	const openTab = useAppStore((s) => s.openTab);
	const menuRef = (0, import_react$10.useRef)(null);
	const page = profilePage ?? portalConfig?.profile?.page;
	const get = profileGet ?? portalConfig?.profile?.get;
	const profileLabel = useText("Profile");
	const signOutLabel = useText("Sign out");
	(0, import_react$10.useEffect)(() => {
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
	const initials = (0, import_react$10.useMemo)(() => profile?.initials ?? deriveInitials(profile?.name), [profile]);
	const onLogout = import_react$10.useCallback(async () => {
		await handler.authLogout({}, {});
	}, [handler]);
	const openProfile = import_react$10.useCallback(async () => {
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
	const model = (0, import_react$10.useMemo)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime$16.jsxs)("div", {
		className: "blong-account-menu",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$16.jsx)(Avatar, {
			label: initials,
			icon: initials ? void 0 : "pi pi-user",
			shape: "circle",
			className: "blong-account-menu__avatar",
			onClick: (e) => menuRef.current?.toggle(e),
			title: profile?.name
		}), /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)(Menu, {
			model,
			popup: true,
			ref: menuRef,
			className: "blong-account-menu__menu"
		})]
	});
}
var import_react$10, import_jsx_runtime$16;
function init_AccountMenu$1() {
	return (init_AccountMenu$1 = __esmMin((() => {
		import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_BlongContext();
		init_useText();
		init_primereact();
		init_appStore();
		import_jsx_runtime$16 = require_jsx_runtime();
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
	return /* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)(Dialog, {
		visible: true,
		header: /* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)("span", {
			className: "blong-error-dialog__title",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("i", { className: "pi pi-exclamation-circle blong-error-dialog__icon" }), " Error"]
		}),
		onHide: unauthorized ? () => {} : clearError,
		closable: !unauthorized,
		className: "blong-error-dialog",
		style: { width: "480px" },
		modal: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)("div", {
			className: "blong-error-dialog__body",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("p", {
				className: "blong-error-dialog__message",
				children: error.print ?? error.message
			}), error.validation && error.validation.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("ul", {
				className: "blong-error-dialog__validation",
				children: error.validation.map((v) => /* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)("strong", { children: [v.field, ":"] }),
					" ",
					v.message
				] }, v.field))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("div", {
			className: "blong-error-dialog__footer",
			children: unauthorized ? /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(Button, {
				label: "Login",
				icon: "pi pi-sign-in",
				onClick: handleLogin
			}) : /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(Button, {
				label: "Close",
				icon: "pi pi-times",
				onClick: clearError
			})
		})]
	});
}
var import_jsx_runtime$15, AUTH_ERROR_TYPES;
function init_Error() {
	return (init_Error = __esmMin((() => {
		init_primereact();
		init_BlongContext();
		init_appStore();
		import_jsx_runtime$15 = require_jsx_runtime();
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
// ../../core/blong-browser/src/feedback/useDrag.ts
function useDrag(onDelta) {
	const lastRef = (0, import_react$9.useRef)(null);
	return { start: (0, import_react$9.useCallback)((event) => {
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
var import_react$9;
function init_useDrag() {
	return (init_useDrag = __esmMin((() => {
		import_react$9 = require_react();
	})))();
}
// ../../core/blong-browser/src/feedback/FeedbackCallout.tsx
function FeedbackCallout({ targetId, box, comment, onChange, onRemove, onMove, onResize }) {
	const t = useTranslate();
	const move = useDrag(onMove);
	const resize = useDrag(onResize);
	return /* @__PURE__ */ (0, import_jsx_runtime$14.jsxs)("div", {
		className: "blong-feedback-callout",
		style: {
			left: box.x,
			top: box.y,
			width: box.width,
			height: box.height
		},
		[FEEDBACK_UI_ATTR]: "callout",
		"data-feedback-target": targetId,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$14.jsxs)("div", {
				className: "blong-feedback-callout__bevel",
				onPointerDown: move.start,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$14.jsx)("span", {
					className: "blong-feedback-callout__handle",
					title: targetId,
					children: shortTargetId(targetId)
				}), /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)("button", {
					type: "button",
					className: "blong-feedback-callout__remove",
					onPointerDown: (event) => event.stopPropagation(),
					onClick: onRemove,
					title: t("Remove this comment") ?? "Remove this comment",
					"aria-label": t("Remove this comment") ?? "Remove this comment",
					children: /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)("i", { className: "pi pi-times" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$14.jsx)("textarea", {
				className: "blong-feedback-callout__text",
				value: comment,
				placeholder: t("What is wrong here?") ?? "What is wrong here?",
				onChange: (event) => onChange(event.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$14.jsx)("span", {
				className: "blong-feedback-callout__resize",
				onPointerDown: resize.start,
				"aria-hidden": true
			})
		]
	});
}
var import_jsx_runtime$14;
function init_FeedbackCallout() {
	return (init_FeedbackCallout = __esmMin((() => {
		init_useText();
		init_ids();
		init_useDrag();
		import_jsx_runtime$14 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/feedback/FeedbackCrop.tsx
function FeedbackCrop({ region, onMove, onResize }) {
	const t = useTranslate();
	const move = useDrag(onMove);
	const resize = useDrag(onResize);
	return /* @__PURE__ */ (0, import_jsx_runtime$13.jsxs)("div", {
		className: "blong-feedback-crop",
		[FEEDBACK_UI_ATTR]: "crop",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$13.jsx)("div", {
			className: "blong-feedback-crop__box",
			style: {
				left: region.x,
				top: region.y,
				width: region.width,
				height: region.height
			},
			onPointerDown: move.start,
			children: /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)("span", {
				className: "blong-feedback-crop__handle",
				onPointerDown: resize.start
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)("span", {
			className: "blong-feedback-crop__hint",
			children: t("Drag to choose the part the reviewer needs") ?? "Drag to choose the part the reviewer needs"
		})]
	});
}
var import_jsx_runtime$13;
function init_FeedbackCrop() {
	return (init_FeedbackCrop = __esmMin((() => {
		init_useText();
		init_ids();
		init_useDrag();
		import_jsx_runtime$13 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/feedback/FeedbackOutline.tsx
function FeedbackOutline({ rect, targetId, tone }) {
	const badge = shortTargetId(targetId);
	return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)("div", {
		className: `blong-feedback-ring blong-feedback-ring--${tone}`,
		style: {
			left: rect.x,
			top: rect.y,
			width: rect.width,
			height: rect.height
		},
		"aria-hidden": true,
		children: badge && /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)("span", {
			className: "blong-feedback-ring__badge",
			title: targetId,
			children: badge
		})
	});
}
var import_jsx_runtime$12;
function init_FeedbackOutline() {
	return (init_FeedbackOutline = __esmMin((() => {
		init_ids();
		import_jsx_runtime$12 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/feedback/FeedbackSubmitBar.tsx
function FeedbackSubmitBar({ count, busy, cropping, cropped, onCrop, onSubmit, onDiscard }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)("div", {
		className: "blong-feedback-bar",
		[FEEDBACK_UI_ATTR]: "bar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("span", {
				className: "blong-feedback-bar__count",
				children: count === 1 ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Text, { children: "1 comment" }) : /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Text, {
					params: { count },
					children: "{count} comments"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("button", {
				type: "button",
				className: "blong-feedback-bar__button",
				onClick: onCrop,
				disabled: busy,
				"aria-pressed": cropping,
				children: cropping ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Text, { children: "Done" }) : cropped ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Text, { children: "Edit picture" }) : /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Text, { children: "Crop" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("button", {
				type: "button",
				className: "blong-feedback-bar__button",
				onClick: onDiscard,
				disabled: busy,
				children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Text, { children: "Discard" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("button", {
				type: "button",
				className: "blong-feedback-bar__button blong-feedback-bar__button--primary",
				onClick: onSubmit,
				disabled: busy || count === 0 || cropping,
				children: busy ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("i", { className: "pi pi-spin pi-spinner" }) : /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Text, { children: "Submit" })
			})
		]
	});
}
var import_jsx_runtime$11;
function init_FeedbackSubmitBar() {
	return (init_FeedbackSubmitBar = __esmMin((() => {
		init_Text();
		init_ids();
		import_jsx_runtime$11 = require_jsx_runtime();
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
	const [hovered, setHovered] = (0, import_react$8.useState)(null);
	const [rects, setRects] = (0, import_react$8.useState)({});
	const [boxes, setBoxes] = (0, import_react$8.useState)({});
	const [cropping, setCropping] = (0, import_react$8.useState)(false);
	const [crop, setCrop] = (0, import_react$8.useState)(null);
	const [busy, setBusy] = (0, import_react$8.useState)(false);
	const itemsRef = (0, import_react$8.useRef)(items);
	itemsRef.current = items;
	const measure = (0, import_react$8.useCallback)(() => {
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
	(0, import_react$8.useEffect)(() => {
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
	(0, import_react$8.useEffect)(() => {
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
	(0, import_react$8.useEffect)(() => {
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
	(0, import_react$8.useEffect)(() => {
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
		} });
	}, [
		active,
		cropping,
		add
	]);
	const onSubmit = (0, import_react$8.useCallback)(async () => {
		const state = useAppStore.getState();
		const comments = Object.values(state.feedback.items).filter((item) => (item.commentText ?? "").trim());
		if (!comments.length) return;
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
		t
	]);
	const onCrop = (0, import_react$8.useCallback)(() => {
		setCropping((previous) => {
			if (previous) return false;
			setCrop((current) => current ?? initialCrop(rects, boxes));
			return true;
		});
	}, [boxes, rects]);
	const onDiscard = (0, import_react$8.useCallback)(() => {
		reset();
		setBoxes({});
		setCrop(null);
		setCropping(false);
	}, [reset]);
	if (!active) return null;
	const connectors = Object.keys(items).filter((id) => rects[id] && boxes[id]).map((id) => ({
		id,
		...connectorOf(boxes[id], rects[id])
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)("div", {
		className: "blong-feedback-layer",
		children: [
			!cropping && hovered && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(FeedbackOutline, {
				rect: hovered.rect,
				targetId: hovered.id,
				tone: "hover"
			}),
			!cropping && Object.keys(items).map((id) => rects[id] ? /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(FeedbackOutline, {
				rect: rects[id],
				targetId: id,
				tone: "item"
			}, `ring-${id}`) : null),
			!cropping && connectors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("svg", {
				className: "blong-feedback-connectors",
				"aria-hidden": true,
				children: connectors.map(({ id, from, to }) => /* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("line", {
					className: "blong-feedback-connector",
					x1: from.x,
					y1: from.y,
					x2: to.x,
					y2: to.y
				}), /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("polygon", {
					className: "blong-feedback-connector__head",
					points: arrowHeadPoints(from, to)
				})] }, `line-${id}`))
			}),
			!cropping && Object.entries(items).map(([id, item]) => {
				const box = boxes[id];
				if (!box) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(FeedbackCallout, {
					targetId: id,
					box,
					comment: item.commentText ?? "",
					onChange: (value) => update(id, { commentText: value }),
					onRemove: () => remove(id),
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
			cropping && crop && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(FeedbackCrop, {
				region: crop,
				onMove: (dx, dy) => setCrop((previous) => previous ? moveBox(previous, dx, dy, viewportOf()) : previous),
				onResize: (dx, dy) => setCrop((previous) => previous ? resizeBox(previous, dx, dy, viewportOf()) : previous)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(FeedbackSubmitBar, {
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
var import_react$8, import_jsx_runtime$10, CALLOUT_SIZE, CALLOUT_GAP;
function init_FeedbackLayer() {
	return (init_FeedbackLayer = __esmMin((() => {
		import_react$8 = require_react();
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
		init_useFeedbackConfig();
		import_jsx_runtime$10 = require_jsx_runtime();
		CALLOUT_SIZE = {
			width: 212,
			height: 128
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
	const toggle = (0, import_react$7.useCallback)(() => {
		const state = useAppStore.getState();
		if (state.feedback.active) {
			if (Object.keys(state.feedback.items).length && !window.confirm(t("Discard the comments and leave feedback mode?") ?? "Discard the comments and leave feedback mode?")) return;
			reset();
		}
		state.feedbackActivate(!state.feedback.active);
	}, [reset, t]);
	(0, import_react$7.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsxs)("button", {
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime$9.jsx)("i", { className: "pi pi-comment" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)("span", {
			className: "blong-feedback-toggle__count",
			children: count
		})]
	});
}
var import_react$7, import_jsx_runtime$9;
function init_FeedbackToggle() {
	return (init_FeedbackToggle = __esmMin((() => {
		import_react$7 = require_react();
		init_usePermission();
		init_useText();
		init_appStore();
		init_ids();
		init_useFeedbackConfig();
		import_jsx_runtime$9 = require_jsx_runtime();
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
	const languages = (0, import_react$6.useMemo)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(Dropdown, {
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
var import_react$6, import_jsx_runtime$8;
function init_LanguageSwitcher$1() {
	return (init_LanguageSwitcher$1 = __esmMin((() => {
		import_react$6 = require_react();
		init_primereact();
		init_appStore();
		init_useText();
		import_jsx_runtime$8 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/SocialLoginButton/SocialLoginButton.tsx
function GoogleMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("svg", {
		className: "blong-social-login__mark",
		viewBox: "0 0 48 48",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("path", {
				fill: "#EA4335",
				d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("path", {
				fill: "#4285F4",
				d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("path", {
				fill: "#FBBC05",
				d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("path", {
				fill: "#34A853",
				d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
			})
		]
	});
}
function SocialLoginButton({ onClick, label = "Continue with Google", loading, disabled, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Button, {
		type: "button",
		outlined: true,
		label,
		loading,
		disabled,
		className: `blong-social-login__button ${className ?? ""}`,
		onClick,
		"data-testid": "google-login-button",
		children: !loading && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(GoogleMark, {})
	});
}
var import_jsx_runtime$7;
function init_SocialLoginButton$1() {
	return (init_SocialLoginButton$1 = __esmMin((() => {
		init_primereact();
		import_jsx_runtime$7 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/Login/Login.tsx
function Login({ onLogin, onOtp, onNewPassword, title, logoIcon = "pi pi-circle", logoUrl, titleComponent: TitleComponent, orgComponent: OrgComponent, orgTitle, orgIcon, orgLogoUrl, registerPage, registerLabel = "Register", error: externalError, loading: externalLoading, initialStep = "credentials", googleLogin, defaultUsername, passwordHint }) {
	const t = useTranslate();
	const { handler } = useBlong();
	const [step, setStep] = (0, import_react$5.useState)(initialStep);
	const [username, setUsername] = (0, import_react$5.useState)(defaultUsername ?? "");
	const [hintOpen, setHintOpen] = (0, import_react$5.useState)(false);
	const [password, setPassword] = (0, import_react$5.useState)("");
	const [otp, setOtp] = (0, import_react$5.useState)("");
	const [newPassword, setNewPassword] = (0, import_react$5.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react$5.useState)("");
	const [error, setError] = (0, import_react$5.useState)("");
	const [loading, setLoading] = (0, import_react$5.useState)(false);
	const [RegisterComp, setRegisterComp] = (0, import_react$5.useState)(null);
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
	if (RegisterComp) return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		className: "blong-login p-component",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: "blong-login__register-area",
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Button, {
				label: "Back to Login",
				icon: "pi pi-arrow-left",
				className: "p-button-text",
				onClick: () => setRegisterComp(null)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: "blong-login__register-view",
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(RegisterComp, {})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		className: "blong-login p-component",
		children: [
			registerPage && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
				className: "blong-login__register-area",
				children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Button, {
					label: registerLabel,
					className: "p-button-outlined",
					onClick: () => void handleRegister()
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
				className: "blong-login__top",
				children: [TitleComponent && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
					className: "blong-login__title-slot",
					children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(TitleComponent, {})
				}), (title || logoUrl || logoIcon) && /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
					className: "blong-login__brand",
					children: [logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("img", {
						src: logoUrl,
						alt: title ?? "logo",
						className: "blong-login__brand-img"
					}) : /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", { className: `blong-login__brand-icon ${logoIcon}` }), title && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", {
						className: "blong-login__brand-name",
						children: title
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
				className: "blong-login__card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("p", {
						className: "blong-login__card-heading",
						children: t("Login with password")
					}),
					displayError && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Message, {
						severity: "error",
						text: displayError,
						className: "blong-login__error"
					}),
					step === "credentials" && /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("form", {
						className: "blong-login__form",
						onSubmit: (e) => void handleCredentials(e),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("label", {
									htmlFor: "login-username",
									className: "blong-field__label",
									children: "Username"
								}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(InputText, {
									id: "login-username",
									name: "username",
									value: username,
									onChange: (e) => setUsername(e.target.value),
									className: "blong-login__input w-full",
									autoFocus: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
								className: "blong-field",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("label", {
										htmlFor: "login-password",
										className: "blong-field__label",
										children: ["Password", passwordHint && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Button, {
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
									/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Password, {
										inputId: "login-password",
										name: "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										className: "blong-login__input w-full",
										inputClassName: "w-full",
										toggleMask: true,
										disabled: isLoading
									}),
									passwordHint && hintOpen && /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
										className: "blong-login__hint",
										children: [passwordHint.text && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("p", { children: passwordHint.text }), passwordHint.command && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("code", {
											className: "blong-login__hint-command",
											children: passwordHint.command
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Button, {
								type: "submit",
								label: "Login",
								loading: isLoading,
								className: "blong-login__submit",
								"data-testid": "login-submit"
							})
						]
					}),
					step === "otp" && /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("form", {
						className: "blong-login__form",
						onSubmit: (e) => void handleOtp(e),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("p", {
								className: "blong-login__hint",
								children: "Enter the one-time password sent to your device."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("label", {
									htmlFor: "login-otp",
									className: "blong-field__label",
									children: "One-Time Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(InputText, {
									id: "login-otp",
									value: otp,
									onChange: (e) => setOtp(e.target.value),
									autoFocus: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Button, {
								type: "submit",
								label: "Verify",
								loading: isLoading,
								className: "blong-login__submit"
							})
						]
					}),
					step === "newPassword" && /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("form", {
						className: "blong-login__form",
						onSubmit: (e) => void handleNewPassword(e),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("p", {
								className: "blong-login__hint",
								children: "Your password has expired. Please set a new password."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("label", {
									htmlFor: "login-new-pass",
									className: "blong-field__label",
									children: "New Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Password, {
									inputId: "login-new-pass",
									value: newPassword,
									onChange: (e) => setNewPassword(e.target.value),
									toggleMask: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("label", {
									htmlFor: "login-confirm-pass",
									className: "blong-field__label",
									children: "Confirm Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Password, {
									inputId: "login-confirm-pass",
									value: confirmPassword,
									onChange: (e) => setConfirmPassword(e.target.value),
									toggleMask: true,
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Button, {
								type: "submit",
								label: "Set Password",
								loading: isLoading,
								className: "blong-login__submit"
							})
						]
					}),
					googleLogin?.onGoogle && /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
						className: "blong-login__divider",
						children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", { children: "or" })
					}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(SocialLoginButton, {
						onClick: () => void googleLogin.onGoogle?.(),
						label: googleLogin.label
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
				className: "blong-login__bottom",
				children: OrgComponent ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(OrgComponent, {}) : orgTitle || orgLogoUrl || orgIcon ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
					className: "blong-login__org-brand",
					children: [orgLogoUrl ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("img", {
						src: orgLogoUrl,
						alt: orgTitle ?? "logo",
						className: "blong-login__org-img"
					}) : orgIcon ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", { className: `blong-login__org-icon ${orgIcon}` }) : null, orgTitle && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", {
						className: "blong-login__org-name",
						children: orgTitle
					})]
				}) : null
			})
		]
	});
}
var import_react$5, import_jsx_runtime$6;
function init_Login$1() {
	return (init_Login$1 = __esmMin((() => {
		init_primereact();
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_BlongContext();
		init_SocialLoginButton$1();
		init_useText();
		import_jsx_runtime$6 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/LoginPopup/LoginPopup.tsx
function LoginPopup() {
	const t = useTranslate();
	const prompt = useAppStore((s) => s.loginPrompt);
	const setLoginPrompt = useAppStore((s) => s.setLoginPrompt);
	const { handler } = useBlong();
	const [username, setUsername] = (0, import_react$4.useState)("");
	const [password, setPassword] = (0, import_react$4.useState)("");
	const [error, setError] = (0, import_react$4.useState)(void 0);
	const [loading, setLoading] = (0, import_react$4.useState)(false);
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
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(Dialog, {
		visible: true,
		header: "Session expired — please log in",
		onHide: close,
		closable: true,
		modal: true,
		className: "blong-login-popup",
		style: { width: "380px" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
			className: "blong-login-popup__body",
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Message, {
					severity: "error",
					text: error,
					className: "blong-login-popup__error"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
					className: "blong-login-popup__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("label", {
						htmlFor: "blong-login-popup-username",
						children: t("Username")
					}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(InputText, {
						id: "blong-login-popup-username",
						name: "username",
						value: username,
						onChange: (e) => setUsername(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && onSubmit(),
						autoFocus: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
					className: "blong-login-popup__field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("label", {
						htmlFor: "blong-login-popup-password",
						children: t("Password")
					}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Password, {
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
		}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
			className: "blong-login-popup__footer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Button, {
				label: "Cancel",
				icon: "pi pi-times",
				onClick: close,
				outlined: true
			}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Button, {
				label: "Login",
				icon: "pi pi-sign-in",
				onClick: onSubmit,
				loading
			})]
		})]
	});
}
var import_react$4, import_jsx_runtime$5;
function init_LoginPopup$1() {
	return (init_LoginPopup$1 = __esmMin((() => {
		init_primereact();
		import_react$4 = require_react();
		init_BlongContext();
		init_appStore();
		init_useText();
		import_jsx_runtime$5 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/OAuthCallback/OAuthCallback.tsx
function OAuthCallback({ onExchange, onSuccess, title, logoIcon = "pi pi-google" }) {
	const t = useTranslate();
	const [error, setError] = (0, import_react$3.useState)("");
	const [loading, setLoading] = (0, import_react$3.useState)(true);
	(0, import_react$3.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
		className: "blong-oauth-callback p-component",
		children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
			className: "blong-oauth-callback__card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("i", { className: `blong-oauth-callback__icon ${logoIcon}` }),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(import_jsx_runtime$4.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
					className: "blong-oauth-callback__heading",
					children: "Signing you in with Google…"
				}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(ProgressSpinner, {
					className: "blong-oauth-callback__spinner",
					style: {
						width: "3rem",
						height: "3rem"
					}
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(import_jsx_runtime$4.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
						className: "blong-oauth-callback__heading",
						children: t("Sign in failed")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
						className: "blong-oauth-callback__error",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Button, {
						label: "Back to Login",
						icon: "pi pi-arrow-left",
						className: "p-button-outlined blong-oauth-callback__back",
						onClick: backToLogin,
						"data-testid": "oauth-back-login"
					})
				] }),
				title && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("p", {
					className: "blong-oauth-callback__brand",
					children: title
				})
			]
		})
	});
}
var import_react$3, import_jsx_runtime$4;
function init_OAuthCallback$1() {
	return (init_OAuthCallback$1 = __esmMin((() => {
		init_primereact();
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useText();
		import_jsx_runtime$4 = require_jsx_runtime();
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
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
		className: "blong-loader-overlay",
		role: "status",
		"aria-live": "polite",
		children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
			className: "blong-loader-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(ProgressSpinner, {
				style: {
					width: "50px",
					height: "50px"
				},
				strokeWidth: "4",
				animationDuration: ".8s"
			}), message && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("p", {
				className: "blong-loader-message",
				children: message
			})]
		})
	});
}
var import_jsx_runtime$3;
function init_Loader$1() {
	return (init_Loader$1 = __esmMin((() => {
		init_primereact();
		init_useLoader();
		import_jsx_runtime$3 = require_jsx_runtime();
	})))();
}
// ../../core/blong-browser/src/components/Portal/Portal.tsx
async function buildMenuModel(items, command, handler, t, feedback) {
	if (!items) return void 0;
	return Promise.all(items.map(async (item) => {
		const action = typeof item === "string" ? { method: item } : item;
		if ("items" in action) {
			const firstChild = action.items?.find((i) => typeof i === "string" || typeof i === "object" && i !== null && "method" in i);
			const firstMethod = typeof firstChild === "string" ? firstChild : firstChild?.method ?? "";
			const groupId = action.id ?? firstMethod.split(".")[0] ?? "";
			return {
				label: t(action.title),
				icon: action.icon,
				items: await buildMenuModel(action.items, command, handler, t, feedback),
				...groupId && { template: (item, options) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("a", {
					className: options.className,
					"data-testid": `portal-menu-${groupId}`,
					onClick: options.onClick,
					...feedback?.("menu", groupId, action.title),
					children: [item.icon && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", { className: options.iconClassName }), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
						className: options.labelClassName,
						children: item.label
					})]
				}) }
			};
		} else if ("method" in action) {
			const { title, permission, icon, component } = await handler[`component/${action.method}`](typeof action.params === "function" ? action.params({}) : action.params ?? {}, {});
			const menuId = (action.method ?? "").replace(/\./g, "-");
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
				template: (item, options) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("a", {
					className: options.className,
					"data-testid": `portal-menu-${menuId}`,
					onClick: options.onClick,
					...feedback?.("menuItem", action.method ?? menuId, title),
					children: [item.icon && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", { className: options.iconClassName }), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
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
	const t = useTranslate();
	const openTab = useAppStore((s) => s.openTab);
	const command = (0, import_react$2.useCallback)(({ item: { data: { component, title, action, params } } }) => {
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
	const [menu, setMenu] = import_react$2.useState(void 0);
	const feedbackActive = useFeedbackActive();
	const feedbackTarget = (0, import_react$2.useCallback)((part, id, label) => feedbackActive ? feedbackAttributes(portalFeedbackId(part, id), part, label) : void 0, [feedbackActive]);
	import_react$2.useEffect(() => {
		buildMenuModel(portalConfig?.menu, command, handler, t, feedbackTarget).then(setMenu);
	}, [
		portalConfig?.menu,
		command,
		handler,
		t,
		feedbackTarget
	]);
	const start = logo ?? (portalConfig?.title ? /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
		className: "blong-portal-brand",
		children: portalConfig.title
	}) : void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
		className: `blong-portal ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Loader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Hint, {}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(ErrorDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Menubar, {
				start,
				end: menubarEnd,
				className: "blong-portal-menubar",
				...menu && { model: menu }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
				className: "blong-portal-body",
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(TabView, {
					activeIndex: activeIndex >= 0 ? activeIndex : 0,
					onTabChange: (e) => setActiveTab(tabs[e.index]?.id ?? null),
					scrollable: true,
					className: "blong-portal-tabs",
					renderActiveOnly: false,
					children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(TabPanel, {
						__TYPE: "TabPanel",
						header: /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("span", {
							className: "blong-tab-header",
							...testid_default(`portal.tab${tab.id}`),
							...feedbackActive ? feedbackAttributes(portalFeedbackId("tab", tab.id), "tab", tab.title) : {},
							children: [
								tab.dirty && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
									className: "blong-tab-dirty",
									children: "● "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Text, { children: tab.title }),
								/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Button, {
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
						children: tab.component ? /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(TabErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(import_react$2.Suspense, {
							fallback: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
								style: { padding: 32 },
								children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(ProgressSpinner, {})
							}),
							children: import_react$2.createElement(tab.component, {
								...tab.params,
								tabId: tab.id
							})
						}) }) : /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
							className: "blong-portal-loading",
							children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(ProgressSpinner, {})
						})
					}, tab.id))
				})
			})
		]
	});
}
var import_react$2, import_jsx_runtime$2, TabErrorBoundary;
function init_Portal$1() {
	return (init_Portal$1 = __esmMin((() => {
		init_primereact();
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_BlongContext();
		init_ids();
		init_useFeedbackTarget();
		init_usePortal();
		init_useText();
		init_testid();
		init_appStore();
		init_Error();
		init_Hint();
		init_Loader$1();
		init_Text();
		import_jsx_runtime$2 = require_jsx_runtime();
		TabErrorBoundary = class extends import_react$2.Component {
			state = { error: null };
			static getDerivedStateFromError(error) {
				return { error };
			}
			render() {
				if (this.state.error) return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
					className: "blong-tab-error",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("i", { className: "pi pi-exclamation-triangle blong-tab-error__icon" }), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("p", {
						className: "blong-tab-error__message",
						children: this.state.error.message
					})]
				});
				return this.props.children;
			}
		};
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
		init_primereact();
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
		init_primereact();
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
init_App$1();
export { App };
