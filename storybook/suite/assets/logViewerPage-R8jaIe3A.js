import { n as __esmMin, s as __toESM } from "./rolldown-runtime-wTHAN5bU.js";
import { t as require_react } from "./react-DUbJxPEF.js";
import { i as useThemePalette, w as useBlong } from "./App-j-lPdz5p.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BGSnrdEt.js";
import { t as require_react_dom } from "./react-dom-BZ-DbxSX.js";
import { n as init_src } from "./iframe-D5_otGjj.js";
function init_dist() {
	return (init_dist = __esmMin((() => {
		(/* @__PURE__ */ new Date()).valueOf();
	})))();
}
// ../../common/temp/node_modules/.pnpm/@svar-ui+lib-react@1.2.2/node_modules/@svar-ui/lib-react/dist/index.js
function useWritableProp$1(propValue) {
	const [value, setValue] = (0, import_react$8.useState)(propValue);
	const prevPropRef = (0, import_react$8.useRef)(propValue);
	(0, import_react$8.useEffect)(() => {
		if (prevPropRef.current !== propValue) {
			if (Array.isArray(prevPropRef.current) && Array.isArray(propValue) && prevPropRef.current.length === 0 && propValue.length === 0) return;
			prevPropRef.current = propValue;
			setValue(propValue);
		}
	}, [propValue]);
	return [value, setValue];
}
function snippet(name, arg) {
	if (typeof name === "function") {
		if (typeof arg === "object") return name(arg);
		else return name();
	}
	return name;
}
var import_react$8;
function init_dist$1() {
	return (init_dist$1 = __esmMin((() => {
		import_react$8 = require_react();
		init_dist();
	})))();
}
// ../../common/temp/node_modules/.pnpm/@svar-ui+lib-dom@0.12.1/node_modules/@svar-ui/lib-dom/dist/index.js
function locate(el, attr = "data-id") {
	let node = el;
	if (!node.tagName && el.target) node = el.target;
	while (node) {
		if (node.getAttribute) {
			if (node.getAttribute(attr)) return node;
		}
		node = node.parentNode;
	}
	return null;
}
function locateID(el, attr = "data-id") {
	const node = locate(el, attr);
	if (node) return getID(node, attr);
	return null;
}
function getID(el, attr = "data-id") {
	const value = el.getAttribute(attr);
	if (!value) return null;
	return id(value);
}
function setID(id3) {
	return typeof id3 === "string" ? ":" + id3 : id3;
}
function id(value) {
	if (value.startsWith(":")) return value.substring(1);
	const t = value * 1;
	if (!isNaN(t)) return t;
	return value;
}
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
function setEnv(update) {
	Object.assign(env, update);
}
function delegateEvent$1(node, handlers, event) {
	function handleEvent(ev) {
		const node2 = locate(ev);
		if (!node2) return;
		const id3 = getID(node2);
		if (typeof handlers === "function") return handlers(id3, ev);
		let action;
		let test = ev.target;
		while (test != node2) {
			action = test.dataset ? test.dataset.action : null;
			if (action) {
				if (handlers[action]) {
					handlers[action](id3, ev);
					return;
				}
			}
			test = test.parentNode;
		}
		if (handlers[event]) handlers[event](id3, ev);
	}
	env.addEvent(node, event, handleEvent);
}
function delegateClick$1(node, handlers) {
	delegateEvent$1(node, handlers, "click");
	if (handlers.dblclick) delegateEvent$1(node, handlers.dblclick, "dblclick");
}
function remove(items, node) {
	for (let i = items.length - 1; i >= 0; i--) if (items[i] === node) {
		items.splice(i, 1);
		break;
	}
}
function clickOutside(node, props) {
	if (!outsideHandlers.length) outsideHandlers = [
		env.addGlobalEvent("click", handleOutsideClick, node),
		env.addGlobalEvent("contextmenu", handleOutsideClick, node),
		env.addGlobalEvent("mousedown", handleMouseDown, node)
	];
	if (typeof props !== "object") props = { callback: props };
	const pack = {
		node,
		date: /* @__PURE__ */ new Date(),
		props
	};
	outsideListners.push(pack);
	return { destroy() {
		remove(outsideListners, pack);
		if (!outsideListners.length) {
			outsideHandlers.forEach((e) => e());
			outsideHandlers = [];
		}
	} };
}
function getMaxIndex(p, ap) {
	let zi = 0;
	const top = env.getTopNode(p);
	while (p) {
		if (p === top) break;
		const pos2 = getComputedStyle(p)["position"];
		if (pos2 === "absolute" || pos2 === "relative" || pos2 === "fixed") zi = parseInt(getComputedStyle(p)["zIndex"]) || 0;
		p = p.parentNode;
		if (p === ap) break;
	}
	return zi;
}
function calculatePosition(self, parent, at = "bottom", left = 0, top = 0) {
	if (!self) return null;
	x = left;
	y$1 = top;
	width = "auto";
	let z = 0;
	let fixLeft = 0;
	const body = getAbsParent(self);
	const cont = isOverlap(at) ? env.getTopNode(self) : body;
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
		z = Math.max(zi + 1, 20);
	}
	if (parent) {
		pos = parent.getBoundingClientRect();
		if (isFit(at)) width = pos.width + "px";
		if (at !== "point") {
			if (isCenter(at)) {
				if (isFit(at)) x = 0;
				else {
					x = contRect.width / 2;
					fixLeft = 1;
				}
				y$1 = (contRect.height - selfRect.height) / 2;
			} else {
				const fix = isOverlap(at) ? 0 : 1;
				x = isRight(at) ? pos.right + fix : pos.left - fix;
				y$1 = isBottom(at) ? pos.bottom + 1 : pos.top;
				const align = getAlign(at);
				if (align) {
					if (isRight(at) || isLeft(at)) {
						if (align === "center") y$1 -= (selfRect.height - pos.height) / 2;
						else if (align === "end") y$1 -= selfRect.height - pos.height;
					} else if (isBottom(at) || isTop(at)) {
						if (align === "center") x -= (selfRect.width - pos.width) / 2;
						else if (align === "end") x -= selfRect.width - pos.width;
						if (!isOverlap(at)) x += 1;
					}
				}
			}
		}
	} else pos = {
		left,
		right: left,
		top,
		bottom: top
	};
	const isCorner = (isLeft(at) || isRight(at)) && (isBottom(at) || isTop(at));
	if (isLeft(at)) fixLeft = 2;
	const dxL = x - selfRect.width - contRect.left;
	if (parent && isLeft(at) && !isCorner && dxL < 0) {
		x = pos.right;
		fixLeft = 0;
	}
	const dxR = x + selfRect.width * (1 - fixLeft / 2) - contRect.right;
	if (dxR > 0) {
		if (!isRight(at)) x = contRect.right - border.right - selfRect.width;
		else {
			const dx = pos.left - contRect.x - selfRect.width;
			if (parent && !isCorner && dx >= 0) x = pos.left - selfRect.width;
			else x -= dxR + border.right;
		}
	}
	if (fixLeft) x = Math.round(x - selfRect.width * fixLeft / 2);
	const needSwap = dxL < 0 || dxR > 0 || !isCorner;
	if (isTop(at)) {
		y$1 = pos.top - selfRect.height;
		if (parent && y$1 < contRect.y && needSwap) y$1 = pos.bottom;
	}
	const dy = y$1 + selfRect.height - contRect.bottom;
	if (dy > 0) {
		if (parent && isBottom(at) && needSwap) y$1 -= selfRect.height + pos.height + 1;
		else y$1 -= dy + border.bottom;
	}
	x -= bodyRect.left + border.left;
	y$1 -= bodyRect.top + border.top;
	x = (isOverlap(at) ? x : Math.max(x, 0)) + cont.scrollLeft;
	y$1 = (isOverlap(at) ? y$1 : Math.max(y$1, 0)) + cont.scrollTop;
	width = width || "auto";
	return {
		x,
		y: y$1,
		z,
		width
	};
}
function getAbsParent(el) {
	const top = env.getTopNode(el);
	if (el) el = el.parentElement;
	while (el) {
		const pos2 = getComputedStyle(el)["position"];
		if (el === top || pos2 === "relative" || pos2 === "absolute" || pos2 === "fixed") return el;
		el = el.parentNode;
	}
	return null;
}
function uid() {
	id2 += 1;
	return id2;
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
	if (nday === 0) nday = 7;
	nday = (nday - weekStart + 7) % 7;
	const first_thursday = new Date(ndate.valueOf());
	first_thursday.setDate(ndate.getDate() + (3 - nday));
	const year_number = first_thursday.getFullYear();
	const ordinal_date = Math.floor((first_thursday.getTime() - new Date(year_number, 0, 1).getTime()) / 864e5);
	return 1 + Math.floor(ordinal_date / 7);
}
function date2str(mask, date, locale2) {
	switch (mask) {
		case "%d": return toFixed(date.getDate());
		case "%m": return toFixed(date.getMonth() + 1);
		case "%j": return date.getDate();
		case "%n": return date.getMonth() + 1;
		case "%y": return toFixed(date.getFullYear() % 100);
		case "%Y": return date.getFullYear();
		case "%D": return locale2.dayShort[date.getDay()];
		case "%l": return locale2.dayFull[date.getDay()];
		case "%M": return locale2.monthShort[date.getMonth()];
		case "%F": return locale2.monthFull[date.getMonth()];
		case "%h": return toFixed((date.getHours() + 11) % 12 + 1);
		case "%g": return (date.getHours() + 11) % 12 + 1;
		case "%G": return date.getHours();
		case "%H": return toFixed(date.getHours());
		case "%i": return toFixed(date.getMinutes());
		case "%a": return ((date.getHours() > 11 ? locale2.pm : locale2.am) || emptyAmPm)[0];
		case "%A": return ((date.getHours() > 11 ? locale2.pm : locale2.am) || emptyAmPm)[1];
		case "%s": return toFixed(date.getSeconds());
		case "%S": return toFixedMs(date.getMilliseconds());
		case "%W": return toFixed(getWeekNumber(date));
		case "%w": return toFixed(getWeekNumber(date, locale2.weekStart ?? 1));
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
		case "%Q": return Math.floor(date.getMonth() / 3) + 1;
		default: return mask;
	}
}
function dateToString(format, locale2) {
	if (typeof format == "function") return format;
	return function(date) {
		if (!date) return "";
		if (!date.getMonth) date = new Date(date);
		return format.replace(formatFlags, (s) => date2str(s, date, locale2));
	};
}
function isObject(a) {
	return a && typeof a === "object" && !Array.isArray(a);
}
function extend(a, b) {
	for (const key in b) {
		const from = b[key];
		if (isObject(a[key]) && isObject(from)) a[key] = extend({ ...a[key] }, b[key]);
		else a[key] = b[key];
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
			let data;
			if (optional) data = extend({ ...values }, words);
			else data = extend({ ...words }, values);
			return locale(data);
		}
	};
}
var env, activationDate, skipNext, outsideHandlers, outsideListners, handleOutsideClick, handleMouseDown, isBottom, isLeft, isRight, isTop, isFit, isOverlap, isCenter, getAlign, x, y$1, width, pos, id2, emptyAmPm, formatFlags;
function init_dist$2() {
	return (init_dist$2 = __esmMin((() => {
		env = getEnv();
		activationDate = /* @__PURE__ */ new Date();
		skipNext = false;
		outsideHandlers = [];
		outsideListners = [];
		handleOutsideClick = (event) => {
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
		handleMouseDown = (event) => {
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
		isBottom = (mode) => mode.indexOf("bottom") !== -1;
		isLeft = (mode) => mode.indexOf("left") !== -1;
		isRight = (mode) => mode.indexOf("right") !== -1;
		isTop = (mode) => mode.indexOf("top") !== -1;
		isFit = (mode) => mode.indexOf("fit") !== -1;
		isOverlap = (mode) => mode.indexOf("overlap") !== -1;
		isCenter = (mode) => {
			return mode.split("-").every((v) => ["center", "fit"].indexOf(v) > -1);
		};
		getAlign = (mode) => {
			const match = mode.match(/(start|center|end)/);
			return match ? match[0] : null;
		};
		id2 = (/* @__PURE__ */ new Date()).valueOf();
		emptyAmPm = ["", ""];
		formatFlags = /%[a-zA-Z]/g;
	})))();
}
// ../../common/temp/node_modules/.pnpm/@svar-ui+core-locales@2.5.1/node_modules/@svar-ui/core-locales/locales/en.js
var data;
function init_en() {
	return (init_en = __esmMin((() => {
		data = {
			core: {
				ok: "OK",
				cancel: "Cancel",
				select: "Select",
				"No data": "No data",
				"Rows per page": "Rows per page",
				"Total pages": "Total pages"
			},
			calendar: {
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
				dayShort: [
					"Sun",
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat"
				],
				hours: "Hours",
				minutes: "Minutes",
				done: "Done",
				clear: "Clear",
				today: "Today",
				am: ["am", "AM"],
				pm: ["pm", "PM"],
				weekStart: 0,
				clockFormat: 24
			},
			formats: {
				timeFormat: "%H:%i",
				dateFormat: "%m/%d/%Y",
				monthYearFormat: "%F %Y",
				yearFormat: "%Y"
			},
			lang: "en-US"
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/@svar-ui+react-core@2.5.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@svar-ui/react-core/dist/index.es.js
function z$2(e) {
	const n = (0, import_react$7.useContext)(ue), [t] = (0, import_react$7.useState)(() => e || n || uid());
	return t;
}
function re$1({ type: e = "", css: n = "", icon: t = "", disabled: s = !1, title: r = "", text: u = "", children: i, onClick: c }) {
	const a = (0, import_react$7.useMemo)(() => {
		let f = e ? e.split(" ").filter((d) => d !== "").map((d) => "wx-" + d).join(" ") : "";
		return n + (n ? " " : "") + f;
	}, [e, n]), o = (f) => {
		c && c(f);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("button", {
		title: r,
		className: `wx-2ZWgb4 wx-button ${a} ${t && !i ? "wx-icon" : ""}`,
		disabled: s,
		onClick: o,
		children: [t && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", { className: "wx-2ZWgb4 " + t }), i || u || " "]
	});
}
function Ye$1({ id: e, label: n = "", inputValue: t = "", value: s = !1, onChange: r, disabled: u = !1, style: i }) {
	const c = z$2(e), [a, o] = useWritableProp$1(s);
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		style: i,
		className: "wx-2IvefP wx-checkbox",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("input", {
			type: "checkbox",
			id: c,
			disabled: u,
			className: "wx-2IvefP wx-check",
			checked: a,
			value: t,
			onChange: ({ target: d }) => {
				const p = d.checked;
				o(p), r && r({
					value: p,
					inputValue: t
				});
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("label", {
			htmlFor: c,
			className: "wx-2IvefP wx-label",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", { className: "wx-2IvefP wx-before" }), n && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", {
				className: "wx-2IvefP wx-after",
				children: n
			})]
		})]
	});
}
function nt({ theme: e = "", target: n, children: t }) {
	const s = (0, import_react$7.useRef)(null), r = (0, import_react$7.useRef)(null), [u, i] = (0, import_react$7.useState)(null);
	s.current || (s.current = document.createElement("div"));
	const c = (0, import_react$7.useContext)(ie$1);
	return (0, import_react$7.useEffect)(() => {
		i(n || rt(r.current) || env.getTopNode(r.current));
	}, [r.current]), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", {
		ref: r,
		style: { display: "none" }
	}), r.current && u ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: `wx-3ZWsT0 wx-${e || c}-theme`,
		children: t
	}), u) : null] });
}
function rt(e) {
	const n = env.getTopNode(e);
	for (; e && e !== n && !e.getAttribute("data-wx-portal-root");) e = e.parentNode;
	return e;
}
function lt({ left: e = 0, top: n = 0, at: t = "bottom", parent: s = null, width: r = "auto", css: u = "", onCancel: i, children: c, trackScroll: a = !1 }) {
	const [o, f] = (0, import_react$7.useState)(0), [d, p] = (0, import_react$7.useState)(0), [v, x] = (0, import_react$7.useState)("auto"), [w, h] = (0, import_react$7.useState)(!1), m = (0, import_react$7.useRef)(null), g = (0, import_react$7.useRef)(null);
	function T(N) {
		return s && (r + "").indexOf("%") > -1 ? r.replace(/(\d+)%/, (k, M) => (M = M * s.offsetWidth / 100 + "px", r.replace(k, M))) : r && r !== "auto" ? r : N;
	}
	const b = (0, import_react$7.useCallback)(() => {
		if (!m.current) return;
		const N = calculatePosition(m.current, s, t, e, n);
		N && (f(N.x), p(N.y), x(T(N.width)));
	}, [
		m,
		s,
		t,
		e,
		n,
		r
	]);
	return (0, import_react$7.useLayoutEffect)(() => {
		const N = (k) => {
			i && k.target !== g.current && m.current && !m.current.contains(k.target) && i(k);
		};
		return requestAnimationFrame(() => {
			b(), h(!0), a && m.current && (g.current = getAbsParent(m.current), g.current && g.current.addEventListener("scroll", N, !0));
		}), () => {
			a && g.current && g.current.removeEventListener("scroll", N, !0);
		};
	}, []), (0, import_react$7.useLayoutEffect)(() => {
		b();
	}, [
		s,
		t,
		e,
		n
	]), (0, import_react$7.useEffect)(() => {
		const N = (k) => {
			i && i(k);
		};
		if (m.current) return clickOutside(m.current, N).destroy;
	}, [i]), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		ref: m,
		className: [
			"wx-37M6Fj",
			"wx-popup",
			u
		].filter(Boolean).join(" "),
		style: {
			position: "absolute",
			visibility: w ? "visible" : "hidden",
			top: d + "px",
			left: o + "px",
			width: v
		},
		children: c
	});
}
function ct({ position: e = "bottom", align: n = "start", autoFit: t = !0, onCancel: s = null, width: r = "100%", css: u = "", children: i }) {
	const c = (0, import_react$7.useRef)(null), [a, o] = (0, import_react$7.useState)(e), [f, d] = (0, import_react$7.useState)(n);
	return (0, import_react$7.useEffect)(() => {
		if (t) {
			const p = c.current;
			if (p) {
				const v = p.getBoundingClientRect(), x = document.body.getBoundingClientRect();
				v.right >= x.right && d("end"), v.bottom >= x.bottom && o("top");
			}
		}
	}, []), (0, import_react$7.useEffect)(() => {
		if (c.current) {
			const p = (v) => {
				s && s(v);
			};
			return clickOutside(c.current, p).destroy;
		}
	}, [s]), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		ref: c,
		className: [
			"wx-dropdown",
			`wx-${a}-${f}`,
			u || "",
			"wx-aaaVytZW"
		].filter(Boolean).join(" "),
		style: { width: r },
		children: i
	});
}
function le$1({ position: e = "bottom", align: n = "start", autoFit: t = !0, inline: s = !1, onCancel: r, width: u = "100%", children: i, ...c }) {
	const [a, o] = (0, import_react$7.useState)(void 0), f = (0, import_react$7.useRef)(null), d = (0, import_react$7.useMemo)(() => `${e}-${n}`, [e, n]);
	return (0, import_react$7.useLayoutEffect)(() => {
		f.current && o(f.current.parentNode);
	}, []), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [a && (s ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ct, {
		onCancel: r,
		position: e,
		align: n,
		autoFit: t,
		width: u,
		...c,
		children: i
	}) : /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(nt, { children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(lt, {
		parent: a,
		at: d,
		onCancel: r,
		width: u,
		...c,
		children: i
	}) })), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", {
		ref: f,
		className: "wx-portal-node wx-32GZ52"
	})] });
}
function X() {
	return locale(data);
}
function it() {
	let e = null, n = !1, t = !1, s, r, u, i;
	const c = (v, x, w, h, m) => {
		s = v, r = x, u = w, i = h, t = m;
	}, a = (v) => {
		e = v, n = e !== null, u(e);
	}, o = (v, x) => {
		if (!t && v !== null && s) {
			const w = s.querySelectorAll(".wx-list > .wx-item")[v];
			w && (w.scrollIntoView({ block: "nearest" }), x && x.preventDefault());
		}
	}, f = (v, x) => {
		const w = v === null ? null : Math.max(0, Math.min(e + v, r.length - 1));
		w !== e && (a(w), s ? o(w, x) : requestAnimationFrame(() => o(w, x)));
	};
	return {
		move: (v) => {
			const x = locateID(v), w = r.findIndex((h) => h.id === x);
			w !== e && a(w);
		},
		keydown: (v, x) => {
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
					f(n ? 1 : x || 0, v);
					break;
				case "ArrowUp": f(n ? -1 : x || 0, v);
			}
		},
		init: c,
		navigate: f
	};
}
function $e({ visibleItems: e, visibleRange: n, navIndex: t, checkboxes: s, children: r, value: u, measureRefCallback: i }) {
	return e.map((c, a) => {
		const o = n.start + a;
		return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			ref: a === 0 ? i : void 0,
			className: `wx-233fr7 wx-item ${o === t ? "wx-focus" : ""}`,
			"data-id": c.id,
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ut, {
				data: c,
				checkboxes: s,
				children: r,
				value: u
			})
		}, c.id);
	});
}
function ge$1({ items: e = [], children: n, onSelect: t, onReady: s, virtualized: r = !1, checkboxes: u, multiselect: i, value: c, ...a }) {
	const o = (0, import_react$7.useRef)(), f = (0, import_react$7.useRef)(!1), d = (0, import_react$7.useRef)(it()), [p, v] = (0, import_react$7.useState)(null), x = (0, import_react$7.useRef)(p), [w, h] = (0, import_react$7.useState)(0), [m, g] = (0, import_react$7.useState)(24), T = (0, import_react$7.useRef)(!1), b = ((0, import_react$7.useContext)(q$2) || X()).getGroup("core"), N = (0, import_react$7.useRef)(e);
	(0, import_react$7.useEffect)(() => {
		N.current = e;
	}, [e]);
	const k = (0, import_react$7.useRef)(c);
	(0, import_react$7.useEffect)(() => {
		k.current = c;
	}, [c]);
	const M = (0, import_react$7.useRef)(0);
	(0, import_react$7.useEffect)(() => {
		M.current = m;
	}, [m]);
	const $ = (0, import_react$7.useCallback)((y) => {
		y && y.stopPropagation();
		const E = N.current, Z = k.current, ce = x.current;
		let ee;
		const te = E[ce]?.id;
		i ? Z && Z.includes(te) ? ee = Z.filter((we) => we !== te) : ee = [...Z || [], te] : ee = te, t && t({ id: ee });
	}, [i, t]), V = (0, import_react$7.useRef)($);
	(0, import_react$7.useEffect)(() => {
		V.current = $;
	}, [$]);
	const F = (0, import_react$7.useCallback)((y) => {
		if (o.current) {
			let E = y * M.current - o.current.clientHeight + M.current;
			h(E), o.current.scrollTop = E;
		}
	}, [M.current]), j = (0, import_react$7.useCallback)((y) => {
		o.current = y, r && (y && !f.current && x.current !== null && requestAnimationFrame(() => {
			o.current && (F(x.current), f.current = !0);
		}), y || (f.current = !1));
	}, [F]), H = (0, import_react$7.useCallback)((y) => {
		if (!y || T.current) return;
		const E = y.getBoundingClientRect().height;
		E && (g(E), M.current = E, T.current = !0);
	}, []);
	(0, import_react$7.useEffect)(() => {
		d.current.init(o.current, e, (y) => {
			v(y), x.current = y;
		}, (y) => V.current(y), r);
	}, [
		e,
		o.current,
		r
	]), (0, import_react$7.useEffect)(() => {
		const y = (Z, ce) => {
			d.current.navigate(Z, ce), F(x.current);
		}, E = (Z, ce) => {
			const ee = x.current, te = N.current;
			if (ee !== 0 && ee !== te.length - 1 && (Z.key === "ArrowDown" || Z.key === "ArrowUp") && Z.preventDefault(), d.current.keydown(Z, ce), o.current) {
				const we = o.current.scrollTop <= x.current * M.current, Ge = o.current.scrollTop + o.current.clientHeight >= x.current * M.current + M.current;
				we ? Ge || F(x.current) : (o.current.scrollTop = x.current * M.current, h(o.current.scrollTop));
			}
		};
		s && s({
			navigate: r ? y : d.current.navigate,
			keydown: r ? E : d.current.keydown,
			move: d.current.move
		});
	}, []);
	const L = (0, import_react$7.useRef)(0), P = (0, import_react$7.useRef)(e);
	P.current !== e && (P.current = e, L.current += 1);
	const C = (0, import_react$7.useCallback)(() => {
		d.current.navigate(null);
	}, [d]), O = (0, import_react$7.useCallback)((y) => {
		r && h(y.target.scrollTop);
	}, [r]), U = (0, import_react$7.useMemo)(() => Math.ceil((o.current?.clientHeight || 0) / m), [m, w]), Y = (0, import_react$7.useMemo)(() => {
		if (!r) return {
			start: 0,
			end: e.length
		};
		if (!e.length) return {
			start: 0,
			end: 0
		};
		const y = Math.floor(w / m), E = y + U;
		return {
			start: Math.max(0, y - Re$1),
			end: Math.min(e.length, E + Re$1)
		};
	}, [
		r,
		e,
		w,
		m,
		U
	]), I = (0, import_react$7.useMemo)(() => {
		if (!r) return e;
		const { start: y, end: E } = Y;
		return e.slice(y, E).map((Z) => ({ ...Z }));
	}, [
		r,
		e,
		Y
	]), G = Y.start * m, Q = e.length * m;
	return (0, import_react$7.useEffect)(() => {
		p === null && (f.current = !1);
	}, [p]), p === null ? null : /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(le$1, {
		onCancel: C,
		...a,
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: "wx-233fr7 wx-list",
			ref: j,
			onClick: $,
			onMouseMove: d.current.move,
			onScroll: O,
			children: e.length ? r ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
				className: "wx-233fr7 wx-list-wrapper",
				style: { height: `${Q}px` },
				children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
					className: "wx-233fr7 wx-list-content",
					style: { transform: `translateY(${G}px)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)($e, {
						visibleRange: Y,
						visibleItems: I,
						navIndex: p,
						measureRefCallback: H,
						checkboxes: u,
						children: n,
						value: c
					})
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)($e, {
				visibleRange: Y,
				visibleItems: I,
				navIndex: p,
				measureRefCallback: H,
				checkboxes: u,
				children: n,
				value: c
			}) : /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
				className: "wx-233fr7 wx-no-data",
				children: b("No data")
			})
		})
	}, L.current);
}
function Ne({ value: e = "", id: n, readonly: t = !1, focus: s = !1, select: r = !1, type: u = "text", placeholder: i = "", disabled: c = !1, error: a = !1, inputStyle: o = {}, title: f = "", css: d = "", icon: p = "", clear: v = !1, onChange: x }) {
	const w = z$2(n), [h, m] = useWritableProp$1(e), g = (0, import_react$7.useRef)(null), T = (0, import_react$7.useMemo)(() => p && d.indexOf("wx-icon-left") === -1 ? "wx-icon-right " + d : d, [p, d]), b = (0, import_react$7.useMemo)(() => p && d.indexOf("wx-icon-left") !== -1, [p, d]);
	(0, import_react$7.useEffect)(() => {
		const V = setTimeout(() => {
			s && g.current && g.current.focus(), r && g.current && g.current.select();
		}, 1);
		return () => clearTimeout(V);
	}, [s, r]);
	const N = (0, import_react$7.useCallback)((V) => {
		const F = V.target.value;
		m(F), x && x({
			value: F,
			input: !0
		});
	}, [x]), k = (0, import_react$7.useCallback)((V) => x && x({ value: V.target.value }), [x]);
	function M(V) {
		V.stopPropagation(), m(""), x && x({ value: "" });
	}
	let $ = u;
	return u !== "password" && u !== "number" && ($ = "text"), (0, import_react$7.useEffect)(() => {
		const V = k, F = g.current;
		return F.addEventListener("change", V), () => {
			F && F.removeEventListener("change", V);
		};
	}, [k]), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		className: `wx-hQ64J4 wx-text ${T} ${a ? "wx-error" : ""} ${c ? "wx-disabled" : ""} ${v ? "wx-clear" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("input", {
			className: "wx-hQ64J4 wx-input",
			ref: g,
			id: w,
			readOnly: t,
			disabled: c,
			placeholder: i,
			type: $,
			style: o,
			title: f,
			value: h,
			onInput: N
		}), v && !c && h ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", {
			className: "wx-hQ64J4 wx-icon wxi-close",
			onClick: M
		}), b && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", { className: `wx-hQ64J4 wx-icon ${p}` })] }) : p ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", { className: `wx-hQ64J4 wx-icon ${p}` }) : null]
	});
}
function dt({ date: e, type: n, part: t, onShift: s }) {
	const { calendar: r, formats: u } = (0, import_react$7.useContext)(q$2).getRaw(), i = e.getFullYear(), c = (0, import_react$7.useMemo)(() => {
		switch (n) {
			case "month": return dateToString(u.monthYearFormat, r)(e);
			case "year": return dateToString(u.yearFormat, r)(e);
			case "duodecade": {
				const { start: o, end: f } = getDuodecade(i), d = dateToString(u.yearFormat, r);
				return `${d(new Date(o, 0, 1))} - ${d(new Date(f, 11, 31))}`;
			}
			default: return "";
		}
	}, [
		e,
		n,
		i,
		r,
		u
	]);
	function a() {
		s && s({
			diff: 0,
			type: n
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		className: "wx-8HQVQV wx-header",
		children: [
			t !== "right" ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", {
				className: "wx-8HQVQV wx-pager wxi-angle-left",
				onClick: () => s && s({
					diff: -1,
					type: n
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", { className: "wx-8HQVQV wx-spacer" }),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", {
				className: "wx-8HQVQV wx-label",
				onClick: a,
				children: c
			}),
			t !== "left" ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", {
				className: "wx-8HQVQV wx-pager wxi-angle-right",
				onClick: () => s && s({
					diff: 1,
					type: n
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", { className: "wx-8HQVQV wx-spacer" })
		]
	});
}
function ke$1({ onClick: e, children: n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("button", {
		className: "wx-3s8W4d wx-button",
		onClick: e,
		children: n
	});
}
function ft({ value: e, current: n, part: t = "", markers: s = null, onCancel: r, onChange: u }) {
	const i = ((0, import_react$7.useContext)(q$2) || X()).getRaw().calendar, c = (i.weekStart || 7) % 7, a = i.dayShort.slice(c).concat(i.dayShort.slice(0, c)), o = (b, N, k) => new Date(b.getFullYear(), b.getMonth() + (N || 0), b.getDate() + (k || 0));
	let f = t !== "normal";
	function d(b) {
		const N = b.getDay();
		return N === 0 || N === 6;
	}
	function p() {
		const b = o(n, 0, 1 - n.getDate());
		return b.setDate(b.getDate() - (b.getDay() - (c - 7)) % 7), b;
	}
	function v() {
		const b = o(n, 1, -n.getDate());
		return b.setDate(b.getDate() + (6 - b.getDay() + c) % 7), b;
	}
	const x = (0, import_react$7.useRef)(0);
	function w(b, N) {
		N.timeStamp !== x.current && (x.current = N.timeStamp, N.stopPropagation(), u && u(new Date(b)), r && r());
	}
	const h = (0, import_react$7.useMemo)(() => t == "normal" ? [e ? o(e).valueOf() : 0] : e ? [e.start ? o(e.start).valueOf() : 0, e.end ? o(e.end).valueOf() : 0] : [0, 0], [t, e]), m = (0, import_react$7.useMemo)(() => {
		const b = p(), N = v(), k = n.getMonth();
		let M = [];
		for (let $ = b; $ <= N; $.setDate($.getDate() + 1)) {
			const V = {
				day: $.getDate(),
				in: $.getMonth() === k,
				date: $.valueOf()
			};
			let F = "";
			if (F += V.in ? "" : " wx-inactive", F += h.indexOf(V.date) > -1 ? " wx-selected" : "", f) {
				const j = V.date == h[0], H = V.date == h[1];
				j && !H ? F += " wx-left" : H && !j && (F += " wx-right"), V.date > h[0] && V.date < h[1] && (F += " wx-inrange");
			}
			if (F += d($) ? " wx-weekend" : "", s) {
				const j = s($);
				j && (F += " " + j);
			}
			M.push({
				...V,
				css: F
			});
		}
		return M;
	}, [
		n,
		h,
		f,
		s
	]), g = (0, import_react$7.useRef)(null);
	let T = (0, import_react$7.useRef)({});
	return T.current.click = w, (0, import_react$7.useEffect)(() => {
		delegateClick$1(g.current, T.current);
	}, []), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: "wx-398RBS wx-weekdays",
		children: a.map((b) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: "wx-398RBS wx-weekday",
			children: b
		}, b))
	}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: "wx-398RBS wx-days",
		ref: g,
		children: m.map((b) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: `wx-398RBS wx-day ${b.css} ${b.in ? "" : "wx-out"}`,
			"data-id": b.date,
			children: b.day
		}, b.date))
	})] });
}
function wt({ value: e, current: n, part: t, onCancel: s, onChange: r, onShift: u }) {
	const i = (0, import_react$7.useRef)(/* @__PURE__ */ new Date()), [c, a] = useWritableProp$1(e || i.current), [o, f] = useWritableProp$1(n || i.current), d = (0, import_react$7.useContext)(q$2).getRaw().calendar, p = d.monthShort || [], v = (0, import_react$7.useMemo)(() => o.getMonth(), [o]), x = (0, import_react$7.useCallback)((m, g) => {
		if (m != null) {
			g.stopPropagation();
			const T = new Date(o);
			T.setMonth(m), f(T), u && u({ current: T });
		}
		t === "normal" && a(new Date(o)), s && s();
	}, [
		o,
		t,
		u,
		s
	]), w = (0, import_react$7.useCallback)(() => {
		const m = new Date(je(c, t) || o);
		m.setMonth(o.getMonth()), m.setFullYear(o.getFullYear()), r && r(m);
	}, [
		c,
		o,
		t,
		r
	]), h = (0, import_react$7.useCallback)((m) => {
		const g = m.target.closest("[data-id]");
		if (g) {
			const T = parseInt(g.getAttribute("data-id"), 10);
			x(T, m);
		}
	}, [x]);
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: "wx-34U8T8 wx-months",
		onClick: h,
		children: p.map((m, g) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: "wx-34U8T8 wx-month" + (v === g ? " wx-current" : ""),
			"data-id": g,
			children: m
		}, g))
	}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: "wx-34U8T8 wx-buttons",
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ke$1, {
			onClick: w,
			children: d.done
		})
	})] });
}
function mt(e) {
	return e = new Date(e), e.setMonth(e.getMonth() - 1), e;
}
function ht(e) {
	return e = new Date(e), e.setMonth(e.getMonth() + 1), e;
}
function pt(e) {
	return e = new Date(e), e.setFullYear(e.getFullYear() - 1), e;
}
function vt$1(e) {
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
function yt$1(e) {
	if (e === "done") return -1;
	if (e === "clear") return null;
	if (e === "today") return /* @__PURE__ */ new Date();
}
function de$1({ value: e, current: n, onCurrentChange: t, part: s = "normal", markers: r = null, buttons: u, onShift: i, onChange: c }) {
	const a = (0, import_react$7.useContext)(q$2).getGroup("calendar"), [o, f] = (0, import_react$7.useState)("month"), d = Array.isArray(u) ? u : u ? kt : [], p = (m, g) => {
		m.preventDefault(), c && c({ value: g });
	}, v = () => {
		o === "duodecade" ? f("year") : o === "year" && f("month");
	}, x = (m) => {
		const { diff: g, current: T } = m;
		if (g === 0) {
			o === "month" ? f("year") : o === "year" && f("duodecade");
			return;
		}
		if (g) {
			const b = Me$1[o];
			t(g > 0 ? b.next(n) : b.prev(n));
		} else T && t(T);
		i && i();
	}, w = (m) => {
		f("month"), c && c({
			select: !0,
			value: m
		});
	}, h = (0, import_react$7.useMemo)(() => Me$1[o].component, [o]);
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: `wx-2Gr4AS wx-calendar ${s !== "normal" && s !== "both" ? "wx-part" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
			className: "wx-2Gr4AS wx-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(dt, {
				date: n,
				part: s,
				type: o,
				onShift: x
			}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(h, {
				value: e,
				current: n,
				onCurrentChange: t,
				part: s,
				markers: r,
				onCancel: v,
				onChange: w,
				onShift: x
			}), o === "month" && d.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
				className: "wx-2Gr4AS wx-buttons",
				children: d.map((m) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
					className: "wx-2Gr4AS wx-button-item",
					children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ke$1, {
						onClick: (g) => p(g, yt$1(m)),
						children: a(m)
					})
				}, m))
			})] })]
		})
	});
}
function he$1(e) {
	let { words: n = null, optional: t = !1, children: s } = e, r = (0, import_react$7.useContext)(q$2);
	const u = (0, import_react$7.useMemo)(() => {
		let i = r;
		return (!i || !i.extend) && (i = locale(data)), n !== null && (i = i.extend(n, t)), i;
	}, [
		n,
		t,
		r
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(q$2.Provider, {
		value: u,
		children: s
	});
}
function Ie$1(e, n, t, s) {
	if (!e || s) {
		const r = n ? new Date(n) : /* @__PURE__ */ new Date();
		r.setDate(1), t(r);
	} else if (e.getDate() !== 1) {
		const r = new Date(e);
		r.setDate(1), t(r);
	}
}
function Dt({ value: e, current: n, markers: t = null, buttons: s = bt$1, onChange: r }) {
	const [u, i] = useWritableProp$1(e), [c, a] = useWritableProp$1(n);
	(0, import_react$7.useEffect)(() => {
		Ie$1(c, u, a, !1);
	}, [u, c]);
	const o = (0, import_react$7.useCallback)((d) => {
		const p = d.value;
		p ? (i(new Date(p)), Ie$1(c, new Date(p), a, !0)) : i(null), r && r({ value: p ? new Date(p) : null });
	}, [r, c]), f = (0, import_react$7.useCallback)((d) => {
		a(d);
	}, [a]);
	return c ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(he$1, { children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(de$1, {
		value: u,
		current: c,
		markers: t,
		buttons: s,
		onChange: o,
		onCurrentChange: f
	}) }) : null;
}
function ye$1(e) {
	return e || (e = {}), e.width || (e.width = "unset"), e;
}
function zt({ value: e, id: n, disabled: t = !1, error: s = !1, placeholder: r = "", format: u = "", buttons: i = Vt, css: c = "", title: a = "", editable: o = !1, clear: f = !1, onChange: d, dropdown: p = {} }) {
	const { calendar: v, formats: x } = ((0, import_react$7.useContext)(q$2) || X()).getRaw(), w = u || x?.dateFormat;
	let h = typeof w == "function" ? w : dateToString(w, v);
	const [m, g] = (0, import_react$7.useState)(e), [T, b] = (0, import_react$7.useState)(!1);
	(0, import_react$7.useEffect)(() => {
		g(e);
	}, [e]);
	function N() {
		b(!1);
	}
	function k(V) {
		const F = V === m || V && m && V.valueOf() === m.valueOf() || !V && !m;
		g(V), F || d && d({ value: V }), setTimeout(N, 1);
	}
	const M = (0, import_react$7.useMemo)(() => m ? h(m) : "", [m, h]);
	function $({ value: V, input: F }) {
		if (!o && !f || F) return;
		let j = typeof o == "function" ? o(V) : V ? new Date(V) : null;
		j = isNaN(j) ? m || null : j || null, k(j);
	}
	return (0, import_react$7.useEffect)(() => {
		const V = N;
		return window.addEventListener("scroll", V), () => window.removeEventListener("scroll", V);
	}, []), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		className: "wx-1lKOFG wx-datepicker",
		onClick: () => b(!0),
		children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Ne, {
			css: c,
			title: a,
			value: M,
			id: n,
			readonly: !o,
			disabled: t,
			error: s,
			placeholder: r,
			onInput: N,
			onChange: $,
			icon: "wxi-calendar",
			inputStyle: {
				cursor: "pointer",
				width: "100%",
				paddingRight: "calc(var(--wx-input-icon-size) + var(--wx-input-icon-indent) * 2)"
			},
			clear: f
		}), T && !t && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(le$1, {
			onCancel: N,
			...ye$1(p),
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Dt, {
				buttons: i,
				value: m,
				onChange: (V) => k(V.value)
			})
		})]
	});
}
function cn({ value: e = "", options: n = [], textOptions: t = null, placeholder: s = "", disabled: r = !1, error: u = !1, title: i = "", textField: c = "label", clear: a = !1, children: o, onChange: f, dropdown: d = {} }) {
	const p = (0, import_react$7.useRef)(null), v = (0, import_react$7.useRef)(null);
	let [x, w] = useWritableProp$1(e);
	function h(N) {
		p.current = N.navigate, v.current = N.keydown;
	}
	const m = (0, import_react$7.useMemo)(() => x || x === 0 ? (t || n).find((N) => N.id === x) : null, [
		x,
		t,
		n
	]), g = (0, import_react$7.useCallback)(({ id: N }) => {
		(N || N === 0) && (w(N), p.current(null), f && f({ value: N }));
	}, [w, f]), T = (0, import_react$7.useCallback)((N) => {
		N.stopPropagation(), w(""), f && f({ value: "" });
	}, [w, f]), b = (0, import_react$7.useCallback)(() => n.findIndex((N) => N.id === x), [n, x]);
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		className: `wx-2YgblL wx-richselect ${u ? "wx-2YgblL wx-error" : ""} ${r ? "wx-2YgblL wx-disabled" : ""} ${o ? "" : "wx-2YgblL wx-nowrap"}`,
		title: i,
		onClick: () => p.current(b()),
		onKeyDown: (N) => v.current(N, b()),
		tabIndex: 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
				className: "wx-2YgblL wx-label",
				children: m ? o ? o(m) : m[c] : s ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", {
					className: "wx-2YgblL wx-placeholder",
					children: s
				}) : "\xA0"
			}),
			a && !r && x ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", {
				className: "wx-2YgblL wx-icon wxi-close",
				onClick: T
			}) : /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", { className: "wx-2YgblL wx-icon wxi-angle-down" }),
			!r && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ge$1, {
				items: n,
				onReady: h,
				onSelect: g,
				...d,
				children: ({ option: N }) => o ? o(N) : N[c]
			})
		]
	});
}
function Ct$1({ notice: e = {} }) {
	function n() {
		e.remove && e.remove();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
		className: `wx-11sNg5 wx-notice wx-${e.type ? e.type : ""}`,
		role: "status",
		"aria-live": "polite",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: "wx-11sNg5 wx-text",
			children: e.text
		}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: "wx-11sNg5 wx-button",
			children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", {
				className: "wx-11sNg5 wxi-close",
				onClick: n
			})
		})]
	});
}
function St({ data: e = [] }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: "wx-3nwoO9 wx-notices",
		children: e.map((n) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Ct$1, { notice: n }, n.id))
	});
}
function Lt$1({ title: e = "", buttons: n = ["cancel", "ok"], header: t, children: s, footer: r, onConfirm: u, onCancel: i }) {
	const c = ((0, import_react$7.useContext)(q$2) || X()).getGroup("core"), a = (0, import_react$7.useRef)(null);
	(0, import_react$7.useEffect)(() => {
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
			case "Escape": i && i({ event: d });
		}
	}
	function f(d, p) {
		const v = {
			event: d,
			button: p
		};
		p === "cancel" ? i && i(v) : u && u(v);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: "wx-1FxkZa wx-modal",
		ref: a,
		tabIndex: 0,
		onKeyDown: o,
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
			className: "wx-1FxkZa wx-window",
			children: [
				t || (e ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
					className: "wx-1FxkZa wx-header",
					children: e
				}) : null),
				/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", { children: s }),
				r || n && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
					className: "wx-1FxkZa wx-buttons",
					children: n.map((d) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
						className: "wx-1FxkZa wx-button",
						children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(re$1, {
							type: `block ${d === "ok" ? "primary" : "secondary"}`,
							onClick: (p) => f(p, d),
							children: c(d)
						})
					}, d))
				})
			]
		})
	});
}
function Ft({ children: e }, n) {
	const [t, s] = (0, import_react$7.useState)(null), [r, u] = (0, import_react$7.useState)([]);
	return (0, import_react$7.useImperativeHandle)(n, () => ({
		showModal: (i) => {
			const c = { ...i };
			return s(c), new Promise((a, o) => {
				c.resolve = (f) => {
					s(null), a(f);
				}, c.reject = (f) => {
					s(null), o(f);
				};
			});
		},
		showNotice: (i) => {
			i = { ...i }, i.id = i.id || uid(), i.remove = () => u((c) => c.filter((a) => a.id !== i.id)), i.expire != -1 && setTimeout(i.remove, i.expire || 5100), u((c) => [...c, i]);
		}
	}), []), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [
		e,
		t && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Lt$1, {
			title: t.title,
			buttons: t.buttons,
			onConfirm: t.resolve,
			onCancel: t.reject,
			children: t.message
		}),
		/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(St, { data: r })
	] });
}
function Je() {
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(import_jsx_runtime$6.Fragment, {});
}
function vn(e) {
	const { fonts: n = !0, children: t } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ie$1.Provider, {
		value: "willow",
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [t && t && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: "wx-theme wx-willow-theme",
			children: t
		}), n && /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("link", {
				rel: "preconnect",
				href: "https://cdn.svar.dev",
				crossOrigin: "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Je, {}),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("link", {
				rel: "stylesheet",
				href: "https://cdn.svar.dev/fonts/wxi/wx-icons.css"
			})
		] })] })
	});
}
function gn(e) {
	const { fonts: n = !0, children: t } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ie$1.Provider, {
		value: "willow-dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [t && t && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
			className: "wx-theme wx-willow-dark-theme",
			children: t
		}), n && /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("link", {
				rel: "preconnect",
				href: "https://cdn.svar.dev",
				crossOrigin: "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Je, {}),
			/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("link", {
				rel: "stylesheet",
				href: "https://cdn.svar.dev/fonts/wxi/wx-icons.css"
			})
		] })] })
	});
}
var import_jsx_runtime$6, import_react$7, import_react_dom, ie$1, Oe, q$2, ue, Ut$1, Re$1, ut, xe$2, xt, Me$1, kt, bt$1, Vt;
function init_index_es() {
	return (init_index_es = __esmMin((() => {
		import_jsx_runtime$6 = require_jsx_runtime();
		import_react$7 = require_react();
		init_dist$1();
		init_dist$2();
		import_react_dom = require_react_dom();
		init_en();
		ie$1 = (0, import_react$7.createContext)("");
		Oe = (0, import_react$7.createContext)({});
		q$2 = (0, import_react$7.createContext)(null);
		ue = (0, import_react$7.createContext)(null);
		Ut$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
			__proto__: null,
			fieldId: ue,
			helpers: Oe,
			i18n: q$2,
			theme: ie$1
		}, Symbol.toStringTag, { value: "Module" }));
		Re$1 = 10;
		ut = (0, import_react$7.memo)(function({ data: n, checkboxes: t, children: s, value: r }) {
			return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [t && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Ye$1, {
				id: n.id,
				style: {
					marginRight: "8px",
					pointerEvents: "none"
				},
				value: r && r.includes(n.id)
			}), s ? snippet(s, { option: n }) : n.label] });
		});
		xe$2 = "wx-1XEF33";
		xt = ({ value: e, current: n, onCancel: t, onChange: s, onShift: r, part: u }) => {
			const i = (0, import_react$7.useContext)(q$2).getRaw().calendar, [c, a] = useWritableProp$1(n), [o, f] = useWritableProp$1(e), d = (0, import_react$7.useMemo)(() => c.getFullYear(), [c]), p = (0, import_react$7.useMemo)(() => {
				const { start: m, end: g } = getDuodecade(d), T = [];
				for (let b = m; b <= g; ++b) T.push(b);
				return T;
			}, [d]), v = { click: x };
			function x(m, g) {
				if (m) {
					g.stopPropagation();
					const T = new Date(c);
					T.setFullYear(m), a(T), r && r({ current: T });
				}
				u === "normal" && f(new Date(c)), t && t();
			}
			function w() {
				const m = new Date(je(o, u) || c);
				m.setFullYear(c.getFullYear()), s && s(m);
			}
			const h = (0, import_react$7.useRef)(null);
			return (0, import_react$7.useEffect)(() => {
				h.current && delegateClick$1(h.current, v);
			}, []), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
				className: xe$2 + " wx-years",
				ref: h,
				children: p.map((m, g) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
					className: `wx-1XEF33 wx-year ${d == m ? "wx-current" : ""} ${g === 0 ? "wx-prev-decade" : ""} ${g === 11 ? "wx-next-decade" : ""}`,
					"data-id": m,
					children: m
				}, g))
			}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
				className: xe$2 + " wx-buttons",
				children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ke$1, {
					onClick: w,
					children: i.done
				})
			})] });
		};
		Me$1 = {
			month: {
				component: ft,
				next: ht,
				prev: mt
			},
			year: {
				component: wt,
				next: vt$1,
				prev: pt
			},
			duodecade: {
				component: xt,
				next: Nt,
				prev: gt
			}
		};
		kt = ["clear", "today"];
		bt$1 = ["clear", "today"];
		Vt = ["clear", "today"];
		(0, import_react$7.forwardRef)(Ft);
		setEnv(env);
	})))();
}
// ../../common/temp/node_modules/.pnpm/@svar-ui+grid-locales@2.6.1/node_modules/@svar-ui/grid-locales/locales/en.js
var en_default;
function init_en$1() {
	return (init_en$1 = __esmMin((() => {
		en_default = { grid: {
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
		} };
	})))();
}
// ../../common/temp/node_modules/.pnpm/@svar-ui+lib-state@1.9.6/node_modules/@svar-ui/lib-state/dist/index.js
var EventBusRouter;
function init_dist$3() {
	return (init_dist$3 = __esmMin((() => {
		(/* @__PURE__ */ new Date()).valueOf();
		EventBusRouter = class {
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
	})))();
}
// ../../common/temp/node_modules/.pnpm/@svar-ui+grid-store@2.6.1/node_modules/@svar-ui/grid-store/dist/index.js
function F(r, e) {
	if (Object.keys(r).length !== Object.keys(e).length) return !1;
	for (const o in e) {
		const t = r[o], n = e[o];
		if (!k(t, n)) return !1;
	}
	return !0;
}
function k(r, e) {
	if (typeof r == "number" || typeof r == "string" || typeof r == "boolean" || r === null) return r === e;
	if (typeof r != typeof e || (r === null || e === null) && r !== e || r instanceof Date && e instanceof Date && r.getTime() !== e.getTime()) return !1;
	if (typeof r == "object") if (Array.isArray(r) && Array.isArray(e)) {
		if (r.length !== e.length) return !1;
		for (let o = r.length - 1; o >= 0; o--) if (!k(r[o], e[o])) return !1;
		return !0;
	} else return F(r, e);
	return r === e;
}
function D(r) {
	if (typeof r != "object" || r === null) return r;
	if (r instanceof Date) return new Date(r);
	if (r instanceof Array) return r.map(D);
	const e = {};
	for (const o in r) e[o] = D(r[o]);
	return e;
}
function H(r, e, o) {
	const t = e.get(r);
	if (!t) return o;
	const n = Object.keys(t).map((i) => H(i, e, o + 1));
	return Math.max(...n);
}
function B(r) {
	return (e) => e[r];
}
function Y(r) {
	return (e, o) => e[r] = o;
}
function y(r, e) {
	return (e.getter || B(e.id))(r);
}
function I(r, e, o) {
	return (e.setter || Y(e.id))(r, o);
}
function q$1(r, e) {
	const o = document.createElement("a");
	o.href = URL.createObjectURL(r), o.download = e, document.body.appendChild(o), o.click(), document.body.removeChild(o);
}
function S$1(r, e) {
	let o = y(r, e) ?? "";
	return e.template ? o = e.template(o, r, e) : e.optionsMap && (Array.isArray(o) ? o = o.map((t) => e.optionsMap.get(t)) : o = e.optionsMap.get(o)), typeof o > "u" ? "" : o + "";
}
function Z$1(r, e) {
	const o = /\n|"|;|,/;
	let t = "";
	const n = e.rows || `
`, i = e.cols || "	", a = r._columns, s = r.flatData;
	e.header !== !1 && a[0].header && (t = P("header", a, t, i, n));
	for (let c = 0; c < s.length; c++) {
		const l = [];
		for (let d = 0; d < a.length; d++) {
			let h = S$1(s[c], a[d]);
			o.test(h) && (h = "\"" + h.replace(/"/g, "\"\"") + "\""), l.push(h);
		}
		t += (t ? n : "") + l.join(i);
	}
	return e.footer !== !1 && a[0].footer && (t = P("footer", a, t, i, n)), t;
}
function P(r, e, o, t, n) {
	const i = /\n|"|;|,/;
	for (let a = 0; a < e[0][r].length; a++) {
		const s = [];
		for (let c = 0; c < e.length; c++) {
			let l = (e[c][r][a].text || "") + "";
			i.test(l) && (l = "\"" + l.replace(/"/g, "\"\"") + "\""), s.push(l);
		}
		o += (o ? n : "") + s.join(t);
	}
	return o;
}
function te(r, e) {
	const o = [];
	let t = [], n = 0;
	const i = r.filter((s) => !s.hidden), a = ne$1(e);
	return i.forEach((s, c) => {
		n + s.width <= a ? (n += s.width, t.push(s)) : (t.length && o.push(t), t = [s], n = s.width), c === i.length - 1 && t.length && o.push(t);
	}), o;
}
function oe(r, e, o) {
	const t = [];
	return r.forEach((n, i) => {
		const a = n[e];
		for (let s = 0; s < o.length; s++) {
			t[s] || (t[s] = []);
			const c = { ...a[s] };
			if (t[s][i] !== null) {
				if (!i && !c.rowspan && !c.colspan) {
					let l = 1, d = r[i + l][e][s], h = c.width;
					for (; !d.rowspan && !d.colspan;) l++, d = r[i + l][e][s], h += d.width;
					c.colspan = l, c.width = h, c.height = o[s];
				}
				if (t[s].push(c), !c.collapsed && c.colspan > 1) {
					let l = c.colspan - 1;
					if (c.colspan + i > r.length) {
						const d = c.colspan - (c.colspan + i - r.length);
						c.colspan = d, c.width = r.slice(i, i + l + 1).reduce((h, u) => h + u.width, 0), d > 1 && (l = d - 1);
					}
					for (let d = 0; d < l; d++) t[s].push(null);
				}
				if (c.rowspan > 1) {
					const l = c.rowspan;
					for (let d = 1; d < l; d++) t[s + d] || (t[s + d] = []), t[s + d].push(null);
				}
			}
		}
		if (n.collapsed) for (let s = 0; s < t.length; s++) {
			const c = t[s], l = c[i];
			if (l && l.collapsed) {
				if (c[i] = null, !s) break;
			} else {
				const d = l || c.findLast((h) => h?.colspan >= 1);
				d && (d.colspan = d.colspan - 1, d.width = d.width - n.width);
			}
		}
	}), t.map((n) => n.filter((i) => i && i.colspan !== 0));
}
function ne$1(r) {
	const { mode: e, ppi: o, paper: t } = r, { width: n, height: i } = ee[t];
	return ie(e === "portrait" ? n : i, o);
}
function ie(r, e) {
	return r * e;
}
function re(r = {}) {
	const { mode: e, ppi: o, paper: t } = r;
	return {
		mode: e || G,
		ppi: o || J,
		paper: t || Q
	};
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
function fe() {
	return !0;
}
function A$1(r, e) {
	return typeof r > "u" || r === null ? -1 : typeof e > "u" || e === null ? 1 : r === e ? 0 : r > e ? 1 : -1;
}
function ge(r, e) {
	return -A$1(r, e);
}
function pe(r, e) {
	if (typeof e.sort == "function") return function(t, n) {
		const i = e.sort(t, n);
		return r === "asc" ? i : -i;
	};
	const o = r === "asc" ? A$1 : ge;
	return function(t, n) {
		return o(y(t, e), y(n, e));
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
function xe$1() {
	if (typeof document > "u") return "willow";
	const r = document.querySelector("[class^=\"wx\"][class$=\"theme\"]");
	return r ? r.className.substring(3, r.className.length - 6) : "willow";
}
function R(r, e, o, t, n) {
	const i = document.createElement("div"), a = document.createElement("div"), s = document.body;
	n = n ? `${n}px` : "auto";
	let c, l;
	a.className = e, i.classList.add(`wx-${o}-theme`), i.style.cssText = `height:auto;position:absolute;top:0px;left:100px;overflow:hidden;width=${n};white-space:nowrap;`, i.appendChild(a), s.appendChild(i), typeof r != "object" && (r = [r]);
	for (let d = 0; d < r.length; d++) {
		a.innerText = r[d] + "";
		const h = i.getBoundingClientRect(), u = Math.ceil(h.width) + (t && t.length ? t[d] : 0), f = Math.ceil(h.height);
		c = Math.max(c || 0, u), l = Math.max(l || 0, f);
	}
	return i.remove(), {
		width: c,
		height: l
	};
}
function L(r, e, o, t, n) {
	const i = [];
	for (let a = 0; a < r.length; a++) {
		const s = r[a][e], c = s.length;
		for (let l = 0; l < c; l++) {
			const { text: d, vertical: h, collapsed: u, rowspan: f, css: p } = s[l];
			if (!d) {
				i[l] = Math.max(i[l] || 0, t);
				continue;
			}
			let g = 0;
			if (h && !u) {
				let w = `wx-measure-cell-${e}`;
				if (w += p ? ` ${p}` : "", g = R(d, w, n).width, (f > 1 || !s[l + 1]) && o > l + 1) {
					const x = f || o - l, m = i.slice(l, l + x).reduce((v, _) => v + _, 0);
					if (m < g) {
						const v = Math.ceil((g - m) / x);
						for (let _ = l; _ < l + x; _++) i[_] = (i[_] || t) + v;
					}
					continue;
				}
			}
			i[l] = Math.max(i[l] || t, g);
		}
	}
	return i;
}
function ye(r, e, o) {
	const t = [], n = [];
	let i = "wx-measure-cell-body";
	i += r.css ? ` ${r.css}` : "";
	for (let a = 0; a < e.length; a++) {
		const s = e[a], c = S$1(s, r);
		c && (t.push(c), r.treetoggle ? n.push(e[a].$level * C + (e[a].$count ? C : 0) + (r.draggable ? C : 0)) : r.draggable && n.push(C));
	}
	return R(t, i, o, n).width;
}
function _e(r, e) {
	const o = "wx-measure-cell-header", t = r.sort ? me : 0;
	let n = r.header;
	if (typeof n == "string") return R(n, o, e).width + t;
	let i;
	Array.isArray(n) || (n = [n]);
	for (let a = 0; a < n.length; a++) {
		const s = n[a];
		let d = R(typeof s == "string" ? s : s.text, o + (typeof s == "string" ? "" : ` ${s.css}`), e).width;
		a === n.length - 1 && (d += t), i = Math.max(i || 0, d);
	}
	return i;
}
function $(r) {
	return Se[r];
}
function N(r, e) {
	const o = [];
	for (const t in r) {
		const n = e.find((c) => c.id == t), { config: i, type: a } = n.header.find((c) => c.filter).filter, s = r[t];
		o.push((c) => {
			const l = y(c, n);
			return i?.handler ? i.handler(l, s) : $(a)(l, s);
		});
	}
	return (t) => {
		for (let n = 0; n < o.length; n++) if (!o[n](t)) return !1;
		return !0;
	};
}
function be(r, e) {
	return r.getFullYear() === e.getFullYear() && r.getMonth() === e.getMonth() && r.getDate() === e.getDate();
}
function E() {
	return "temp://" + ke++;
}
function Ce(r, e = "data-id") {
	let o = r;
	for (!o.tagName && r.target && (o = r.target); o;) {
		if (o.getAttribute && o.getAttribute(e)) return o;
		o = o.parentNode;
	}
	return null;
}
function De() {
	O || (O = !0, document.addEventListener("keydown", (r) => {
		if (b.length && (r.ctrlKey || r.altKey || r.metaKey || r.shiftKey || r.key.length > 1 || r.key === " ")) {
			const e = [];
			r.ctrlKey && e.push("ctrl"), r.altKey && e.push("alt"), r.metaKey && e.push("meta"), r.shiftKey && e.push("shift");
			let o = r.code.replace("Key", "").toLocaleLowerCase();
			r.key === " " && (o = "space"), e.push(o);
			const t = e.join("+");
			for (let n = b.length - 1; n >= 0; n--) {
				const i = b[n], a = i.store.get(t) || i.store.get(o);
				a && i.node.contains(r.target) && a(r, {
					key: t,
					evKey: o
				});
			}
		}
	}));
}
function Me(r, { keys: e, exec: o }) {
	if (!e) return;
	function t(a) {
		const s = a.target;
		return s.tagName === "INPUT" || s.tagName === "TEXTAREA" || Ce(s, "data-header-id")?.classList.contains("wx-filter") || !!s.closest(".wx-cell.wx-editor");
	}
	const n = {};
	for (const a in e) {
		const s = e[a];
		typeof s < "u" && (typeof s == "function" ? n[a] = s : s && (n[a] = (c) => {
			const l = t(c);
			o({
				key: a,
				event: c,
				isInput: l
			});
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
		const { left: n, top: i, height: a, width: s } = t, c = e.getHeight(), l = e.getWidth(), d = e.getScrollMargin();
		if (i >= 0) {
			const h = r.scrollTop;
			i < h ? r.scrollTop = i : i + a > h + c && (r.scrollTop = i - c + a);
		}
		if (n >= 0) {
			const h = r.scrollLeft;
			n < h ? r.scrollLeft = n : n + s > h + l - d && (r.scrollLeft = n - l + s + d);
		}
	});
}
var T, W$1, U, K$1, G, J, Q, ee, z$1, ce, le, de, he, C, me, Se, ve, ke, Re, b, Ee, O, Ie;
function init_dist$4() {
	return (init_dist$4 = __esmMin((() => {
		(/* @__PURE__ */ new Date()).valueOf();
		T = 2;
		W$1 = class {
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
					const s = e[a], c = o[a], l = r[a];
					if (s && (c === l && typeof l != "object" || l instanceof Date && c instanceof Date && c.getTime() === l.getTime())) continue;
					const d = t + (t ? "." : "") + a;
					s ? (s.__parse(l, d, n, i) && (o[a] = l), i & T ? n[d] = s.__trigger : s.__trigger()) : (l && l.__reactive ? e[a] = this._wrapNested(l, l, d, n) : e[a] = this._wrapWritable(l), o[a] = l), n[d] = n[d] || null;
				}
			}
			_wrapNested(r, e, o, t) {
				const n = this._wrapWritable(r);
				return this._wrapProperties(r, n, e, o, t, 0), n.__parse = (i, a, s, c) => (this._wrapProperties(i, n, e, a, s, c), !1), n;
			}
			_wrapWritable(r) {
				const e = [], o = function() {
					for (let t = 0; t < e.length; t++) e[t](r);
				};
				return {
					subscribe: (t) => (e.push(t), this._async ? setTimeout(t, 1, r) : t(r), () => {
						const n = e.indexOf(t);
						n >= 0 && e.splice(n, 1);
					}),
					__trigger: () => {
						e.length && (this._async ? setTimeout(o, 1) : o());
					},
					__parse: function(t) {
						return r = t, !0;
					}
				};
			}
		};
		U = class {
			constructor(r, e, o, t) {
				typeof r == "function" ? this._setter = r : this._setter = r.setState.bind(r), this._routes = e, this._parsers = o, this._prev = {}, this._triggers = /* @__PURE__ */ new Map(), this._sources = /* @__PURE__ */ new Map(), this._routes.forEach((n) => {
					n.in.forEach((i) => {
						const a = this._triggers.get(i) || [];
						a.push(n), this._triggers.set(i, a);
					}), n.out.forEach((i) => {
						const a = this._sources.get(i) || {};
						n.in.forEach((s) => a[s] = !0), this._sources.set(i, a);
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
				this._prev = this._prev ? {
					...this._prev,
					...r
				} : { ...r }, this.setState(e), this._bus && this._bus.exec("init-state", e);
			}
			setStateAsync(r) {
				const e = this._setter(r, T);
				return this._async ? Object.assign(this._async.signals, e) : this._async = {
					signals: e,
					timer: setTimeout(this._applyState.bind(this), 1)
				}, e;
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
				for (; r.length;) {
					r.sort((o, t) => o.length < t.length ? 1 : -1);
					const e = r[r.length - 1];
					r.splice(r.length - 1), e.exec(r);
				}
			}
		};
		K$1 = class {
			constructor() {
				this._nextHandler = null, this._handlers = {}, this._tag = /* @__PURE__ */ new WeakMap(), this.exec = this.exec.bind(this);
			}
			on(r, e, o) {
				let t = this._handlers[r];
				t ? o && o.intercept ? t.unshift(e) : t.push(e) : t = this._handlers[r] = [e], o && o.tag && this._tag.set(e, o.tag);
			}
			intercept(r, e, o) {
				this.on(r, e, {
					...o,
					intercept: !0
				});
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
					if (n === !1 || n && n.then && await n === !1) return;
				}
				return this._nextHandler && await this._nextHandler.exec(r, e), e;
			}
			setNext(r) {
				return this._nextHandler = r;
			}
		};
		G = "portrait";
		J = 100;
		Q = "a4";
		ee = {
			a3: {
				width: 11.7,
				height: 16.5
			},
			a4: {
				width: 8.27,
				height: 11.7
			},
			letter: {
				width: 8.5,
				height: 11
			}
		};
		z$1 = [
			"resize-column",
			"hide-column",
			"update-cell"
		];
		ce = [
			"delete-row",
			"update-row",
			"update-cell"
		];
		le = ["move-item"];
		de = ["resize-column", "move-item"];
		he = class {
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
				return {
					"add-row": { handler: (e) => ({
						action: "delete-row",
						data: { id: e.id },
						source: {
							action: "add-row",
							data: e
						}
					}) },
					"delete-row": { handler: (e) => {
						const { id: o } = e, { data: t } = this.getPrev(), n = t.findIndex((i) => i.id === o);
						return {
							action: "add-row",
							data: {
								id: o,
								row: t[n],
								before: n < t.length - 1 ? t[n + 1].id : void 0
							},
							source: {
								action: "delete-row",
								data: e
							}
						};
					} },
					"update-cell": { handler: (e) => {
						const { id: o, column: t } = e, a = y(this.getRow(o), this.getColumn(t));
						return k(a, e.value) ? null : {
							action: "update-cell",
							data: {
								id: o,
								column: t,
								value: a
							},
							source: {
								action: "update-cell",
								data: e
							}
						};
					} },
					"update-row": { handler: (e) => {
						const { id: o, row: t } = e, n = this.getRow(o);
						for (const i in t) Object.keys(n).includes(i) || (n[i] = void 0);
						return {
							action: "update-row",
							data: {
								id: o,
								row: n
							},
							source: {
								action: "update-row",
								data: e
							}
						};
					} },
					"copy-row": { handler: (e) => {
						const { id: o } = e, { data: t } = this.getState(), n = t.findIndex((a) => a.id === o), i = t[n];
						return {
							action: "delete-row",
							data: { id: o },
							source: {
								action: "add-row",
								data: {
									id: o,
									row: i,
									before: n < t.length - 1 ? t[n + 1].id : void 0
								}
							}
						};
					} },
					"resize-column": { handler: (e) => {
						const { id: o, width: t } = e, n = this.getColumn(o), { _sizes: i } = this.getState();
						return {
							action: "resize-column",
							data: {
								id: o,
								width: n.width ?? i.columnWidth
							},
							source: {
								action: "resize-column",
								data: {
									id: o,
									width: t
								}
							}
						};
					} },
					"hide-column": { handler: (e) => {
						const { id: o } = e;
						return {
							action: "hide-column",
							data: {
								id: o,
								mode: this.getColumn(o).hidden
							},
							source: {
								action: "hide-column",
								data: e
							}
						};
					} },
					"collapse-column": { handler: (e) => {
						const { id: o, row: t, mode: n } = e;
						return {
							action: "collapse-column",
							data: {
								id: o,
								row: t,
								mode: typeof n == "boolean" ? !n : n
							},
							source: {
								action: "collapse-column",
								data: e
							}
						};
					} },
					"move-item": { handler: (e) => {
						const { id: o, target: t, mode: n } = e, { flatData: i } = this.getPrev(), a = i.findIndex((s) => s.id === o);
						return {
							action: "move-item",
							data: {
								id: o,
								target: i[a + (a ? -1 : 1)].id,
								mode: a ? "after" : "before"
							},
							source: {
								action: "move-item",
								data: {
									id: o,
									target: t,
									mode: n
								}
							}
						};
					} },
					"open-row": { handler: (e) => {
						const { id: o, nested: t } = e;
						return {
							action: "close-row",
							data: {
								id: o,
								nested: t
							},
							source: {
								action: "open-row",
								data: e
							}
						};
					} },
					"close-row": { handler: (e) => {
						const { id: o, nested: t } = e;
						return {
							action: "open-row",
							data: {
								id: o,
								nested: t
							},
							source: {
								action: "close-row",
								data: e
							}
						};
					} }
				};
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
						if (de.includes(o)) {
							(t.inProgress && !this.progress[o] || typeof t.inProgress != "boolean") && (le.includes(o) && this.setPrev("flatData"), z$1.includes(o) && this.setPrev("columns")), this.progress[o] = t.inProgress;
							return;
						}
						ce.includes(o) && this.setPrev("data"), z$1.includes(o) && this.setPrev("columns");
					}
				}), this.in.on(o, (t) => {
					if (t.eventSource === "undo" || t.eventSource === "redo" || t.skipUndo || t.inProgress) return;
					const n = e[o].handler(t);
					n && this.addToHistory(n);
				});
			}
			setPrev(e) {
				this._previousValues[e] = D(this.getState()[e]);
			}
			addToHistory(e) {
				this.undo.push(e), this.redo = [], this.setStateHistory();
			}
			handleUndo() {
				if (!this.undo.length) return;
				const e = this.undo.pop();
				this.redo.push({
					...e.source,
					source: e
				}), this.in.exec(e.action, {
					...e.data,
					eventSource: "undo"
				}), this.setStateHistory();
			}
			handleRedo() {
				if (!this.redo.length) return;
				const e = this.redo.pop();
				this.undo.push({
					...e.source,
					source: e
				}), this.in.exec(e.action, {
					...e.data,
					eventSource: "redo"
				}), this.setStateHistory();
			}
			resetStateHistory() {
				this.setState({ history: {
					undo: 0,
					redo: 0
				} });
			}
			setStateHistory() {
				this.setState({ history: {
					undo: this.undo.length,
					redo: this.redo.length
				} });
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
		C = 28;
		me = 20;
		Se = {
			text: (r, e) => r ? r.toString().toLowerCase().indexOf(e.toLowerCase()) !== -1 : !e,
			richselect: (r, e) => typeof e != "number" && !e ? !0 : r == e,
			datepicker: (r, e) => e ? r && be(r, e) : !0
		};
		ve = class extends W$1 {
			in;
			_router;
			_branches;
			_xlsxWorker;
			_historyManager;
			constructor(e) {
				super({
					writable: e,
					async: !1
				});
				const o = {
					rowHeight: 37,
					columnWidth: 160,
					headerHeight: 36,
					footerHeight: 36
				};
				this._router = new U(super.setState.bind(this), [{
					in: [
						"columns",
						"sizes",
						"_skin"
					],
					out: ["_columns", "_sizes"],
					exec: (n) => {
						const { columns: i, sizes: a, _skin: s } = this.getState(), c = this.copyColumns(i), l = c.reduce((u, f) => Math.max(f.header.length, u), 0), d = c.reduce((u, f) => Math.max(f.footer.length, u), 0);
						c.forEach(this.setCollapsibleColumns);
						const h = this.normalizeSizes(c, a, l, d, s);
						for (let u = 0; u < c.length; u++) this.normalizeColumns(c, u, "header", l, h), this.normalizeColumns(c, u, "footer", d, h);
						this.setState({
							_columns: c,
							_sizes: h
						}, n);
					}
				}, {
					in: [
						"data",
						"tree",
						"_filterIds"
					],
					out: ["flatData", "_rowHeightFromData"],
					exec: (n) => {
						const { data: i, tree: a, dynamic: s, _filterIds: c } = this.getState(), l = c && new Set(c), d = a ? this.flattenRows(i, [], c) : l ? i.filter((u) => l.has(u.id)) : i, h = !s && d.some((u) => u.rowHeight);
						this.setState({
							flatData: d,
							_rowHeightFromData: h
						}, n);
					}
				}], { sizes: (n) => ({
					...o,
					...n
				}) });
				const t = this.in = new K$1();
				t.on("close-editor", ({ ignore: n }) => {
					const { editor: i } = this.getState();
					i && (n || t.exec("update-cell", i), this.setState({ editor: null }));
				}), t.on("open-editor", ({ id: n, column: i }) => {
					let a = this.getState().editor;
					a && t.exec("close-editor", {});
					const s = this.getRow(n), c = i ? this.getColumn(i) : this.getNextEditor(s);
					if (c?.editor) {
						let l = c.editor;
						if (typeof l == "function" && (l = l(s, c)), !l) return;
						a = {
							column: c.id,
							id: n,
							value: y(s, c) ?? "",
							renderedValue: S$1(s, c),
							type: l.type || l
						}, typeof l == "object" && l.config && (a.config = l.config, l.config.options && (a.options = l.config.options)), c.options && !a.options && (a.options = c.options), this.setState({ editor: a });
					}
				}), t.on("editor", ({ value: n }) => {
					let i = this.getState().editor;
					if (i) {
						i = { ...i }, i.value = n;
						const a = this.getColumn(i.column), s = { ...this.getRow(i.id) };
						I(s, a, n), i.renderedValue = S$1(s, a), this.setState({ editor: i });
					}
				}), t.on("add-row", (n) => {
					const i = this.getState();
					let { data: a } = i;
					const { select: s, _filterIds: c } = i, { row: l, before: d, after: h, select: u } = n;
					if (n.id = l.id = n.id || l.id || E(), d || h) {
						const p = d || h, g = a.findIndex((w) => w.id === p);
						a = [...a], a.splice(g + (h ? 1 : 0), 0, n.row);
					} else a = [...a, n.row];
					const f = { data: a };
					c && (f._filterIds = [...c, n.id]), this.setState(f), (typeof u != "boolean" || u) && (u || s) && t.exec("select-row", {
						id: l.id,
						show: !0
					});
				}), t.on("delete-row", (n) => {
					const { data: i, selectedRows: a, focusCell: s, editor: c } = this.getState(), { id: l } = n, d = { data: i.filter((h) => h.id !== l) };
					this.isSelected(l) && (d.selectedRows = a.filter((h) => h !== l)), c?.id === l && (d.editor = null), this.setState(d), s?.row === l && this.in.exec("focus-cell", { eventSource: "delete-row" });
				}), t.on("update-cell", (n) => {
					const i = this.getState();
					let { data: a } = i;
					a = [...a];
					const { tree: s } = i, { id: c, column: l, value: d } = n, h = this.getColumn(l);
					if (s) {
						const u = { ...this._branches[c] };
						I(u, h, d);
						const f = this.updateTreeRow(u);
						u.$parent === 0 && (a = f);
					} else {
						const u = a.findIndex((p) => p.id === c), f = { ...a[u] };
						I(f, h, d), a[u] = f;
					}
					this.setState({ data: a });
				}), t.on("update-row", (n) => {
					let { data: i } = this.getState();
					const { id: a, row: s } = n, c = i.findIndex((l) => l.id === a);
					i = [...i], i[c] = {
						...i[c],
						...s
					}, this.setState({ data: i });
				}), t.on("select-row", ({ id: n, toggle: i, range: a, mode: s, show: c, column: l }) => {
					const d = this.getState(), { focusCell: h } = d;
					let { selectedRows: u } = d;
					if (u.length || (a = i = !1), a) {
						const { data: f } = this.getState();
						let p = f.findIndex((w) => w.id === u[u.length - 1]), g = f.findIndex((w) => w.id === n);
						p > g && ([p, g] = [g, p]), f.slice(p, g + 1).forEach((w) => {
							this.isSelected(w.id) || u.push(w.id);
						});
					} else if (i && this.isSelected(n)) {
						if (s === !0) return;
						u = u.filter((f) => f !== n);
					} else if (i) {
						if (s === !1) return;
						u.push(n);
					} else u = [n];
					this.setState({ selectedRows: [...u] }), h?.row !== n && this.in.exec("focus-cell", { eventSource: "select-row" }), c && this.in.exec("scroll", {
						row: n,
						column: l
					});
				}), this.in.on("focus-cell", (n) => {
					const { row: i, column: a, eventSource: s } = n, { _columns: c, split: l } = this.getState();
					i && a ? (this.setState({ focusCell: {
						row: i,
						column: a
					} }), s !== "click" && ((!l.left || c.findIndex((d) => d.id === n.column) >= l.left) && (!l.right || c.findIndex((d) => d.id === n.column) < c.length - l.right) ? this.in.exec("scroll", {
						row: i,
						column: a
					}) : this.in.exec("scroll", { row: i }))) : this.setState({ focusCell: null });
				}), t.on("resize-column", (n) => {
					const { id: i, auto: a, maxRows: s, inProgress: c } = n;
					if (c === !1) return;
					let l = n.width || 0;
					const d = [...this.getState().columns], h = this.getColumn(i);
					if (a) {
						if (a === "data" || a === !0) {
							const { flatData: u, _skin: f } = this.getState();
							let p = u.length;
							s && (p = Math.min(s, p));
							l = ye(h, u.slice(0, p), f);
						}
						if (a === "header" || a === !0) {
							const { _skin: u } = this.getState();
							l = Math.max(_e(h, u), l);
						}
					}
					h.width = Math.max(17, l), delete h.flexgrow, this.setState({ columns: d });
				}), t.on("hide-column", (n) => {
					const { id: i, mode: a } = n, s = [...this.getState().columns], c = this.getColumn(i), l = s.reduce((d, h) => d + (h.hidden ? 0 : 1), 0);
					!a || l > 1 ? (c.hidden = !c.hidden, this.setState({ columns: s })) : n.skipUndo = !0;
				}), t.on("sort-rows", (n) => {
					const { key: i, add: a, sort: s } = n, c = this.getState(), { columns: l, data: d, tree: h } = c;
					if (s) {
						const m = [...d];
						m.sort(s), this.setState({ data: m });
						return;
					}
					const { order: u = "asc" } = n;
					let f = c.sortMarks;
					const p = Object.keys(f), g = p.length;
					!a || !g || g === 1 && f[i] ? f = { [i]: { order: u } } : (g === 1 && (f[p[0]] = {
						...f[p[0]],
						index: 0
					}), f = {
						...f,
						[i]: {
							order: u,
							index: typeof a == "number" ? a : f[i]?.index ?? g
						}
					});
					const w = Object.keys(f).sort((m, v) => f[m].index - f[v].index).map((m) => ({
						key: m,
						order: f[m].order
					}));
					this.setState({ sortMarks: f });
					const x = we(w, l);
					if (x) {
						const m = [...d];
						h ? this.sortTree(m, x) : m.sort(x), this.setState({ data: m });
					}
				}), t.on("filter-rows", (n) => {
					const { value: i, key: a, filter: s } = n;
					if (!Object.keys(n).length) {
						this.setState({
							filterValues: {},
							_filterIds: null
						});
						return;
					}
					const c = this.getState(), { data: l, tree: d, _columns: h } = c;
					let u = c.filterValues;
					const f = {};
					a && (u = {
						...u,
						[a]: i
					}, f.filterValues = u);
					const p = s ?? N(u, h);
					let g = [];
					d ? g = this.filterTree(l, p, g) : l.forEach((w) => {
						p(w) && g.push(w.id);
					}), f._filterIds = g, this.setState(f);
				}), t.on("collapse-column", (n) => {
					const { id: i, row: a, mode: s } = n, c = [...this.getState().columns], l = this.getColumn(i).header, d = Array.isArray(l) ? l[a] : l;
					typeof d == "object" && (d.collapsed = s ?? !d.collapsed, this.setState({ columns: c }));
				}), t.on("move-item", (n) => {
					const { id: i, inProgress: a } = n;
					let { target: s, mode: c = "after" } = n;
					const { data: l, flatData: d, tree: h } = this.getState(), u = d.findIndex((g) => g.id === i);
					let f;
					if (c === "up" || c === "down") {
						if (c === "up") {
							if (u === 0) return;
							f = u - 1, c = "before";
						} else if (c === "down") {
							if (u === d.length - 1) return;
							f = u + 1, c = "after";
						}
						s = d[f] && d[f].id;
					} else f = d.findIndex((g) => g.id === s);
					if (u === -1 || f === -1 || a === !1) return;
					let p;
					h || (p = this.moveItem(i, s, l, c)), this.setState({ data: h ? this.normalizeTreeRows(p) : p });
				}), t.on("copy-row", (n) => {
					const { id: i, target: a, mode: s = "after" } = n, c = this.getState(), { flatData: l, _filterIds: d } = c;
					let { data: h } = c;
					const u = this.getRow(i);
					if (!u) return;
					const f = {
						...u,
						id: E()
					};
					n.id = f.id;
					const p = l.findIndex((w) => w.id === a);
					if (p === -1) return;
					h.splice(p + (s === "after" ? 1 : 0), 0, f), h = [...h];
					const g = { data: h };
					d && (g._filterIds = [...d, f.id]), this.setState(g);
				}), t.on("open-row", (n) => {
					const { id: i, nested: a } = n;
					this.toggleBranch(i, !0, a);
				}), t.on("close-row", (n) => {
					const { id: i, nested: a } = n;
					this.toggleBranch(i, !1, a);
				}), t.on("export-data", (n) => new Promise((i, a) => {
					const s = n.format || "csv", c = `${n.fileName || "data"}.${s}`;
					if (s === "csv") {
						const l = Z$1(this.getState(), n.csv || {});
						n.download !== !1 ? q$1(new Blob(["﻿" + l], { type: "text/csv" }), c) : n.result = l, i(!0);
					} else a();
				})), t.on("hotkey", ({ key: n, event: i, isInput: a }) => {
					switch (n) {
						case "arrowup": {
							const { flatData: s, focusCell: c, select: l } = this.getState();
							if (i.preventDefault(), a) return;
							const d = c ? c.column : this._getFirstVisibleColumn()?.id, h = c ? this.getPrevRow(c.row)?.id : s[s.length - 1]?.id;
							d && h && (this.in.exec("focus-cell", {
								row: h,
								column: d,
								eventSource: "key"
							}), l && this.in.exec("select-row", { id: h }));
							break;
						}
						case "arrowdown": {
							const { flatData: s, focusCell: c, select: l } = this.getState();
							if (i.preventDefault(), a) return;
							const d = c ? c.column : this._getFirstVisibleColumn()?.id, h = c ? this.getNextRow(c.row)?.id : s[0]?.id;
							d && h && (this.in.exec("focus-cell", {
								row: h,
								column: d,
								eventSource: "key"
							}), l && this.in.exec("select-row", { id: h }));
							break;
						}
						case "arrowright": {
							const { focusCell: s } = this.getState();
							if (a) return;
							if (i.preventDefault(), s) {
								const c = this.getNextColumn(s.column, !0)?.id;
								c && this.in.exec("focus-cell", {
									row: s.row,
									column: c,
									eventSource: "key"
								});
							}
							break;
						}
						case "arrowleft": {
							const { focusCell: s } = this.getState();
							if (a) return;
							if (i.preventDefault(), s) {
								const c = this.getPrevColumn(s.column, !0)?.id;
								c && this.in.exec("focus-cell", {
									row: s.row,
									column: c,
									eventSource: "key"
								});
							}
							break;
						}
						case "tab": {
							const { editor: s, focusCell: c, select: l } = this.getState();
							if (s) {
								i.preventDefault();
								const d = s.column;
								let h = s.id, u = this.getNextEditor(this.getRow(h), this.getColumn(d));
								if (!u) {
									const f = this.getNextRow(h);
									f && (h = f.id, u = this.getNextEditor(f));
								}
								u && (this.in.exec("open-editor", {
									id: h,
									column: u.id
								}), this.in.exec("focus-cell", {
									row: h,
									column: u.id,
									eventSource: "key"
								}), l && !this.isSelected(h) && this.in.exec("select-row", { id: h }));
							} else c && this.in.exec("focus-cell", { eventSource: "key" });
							break;
						}
						case "shift+tab": {
							const { editor: s, focusCell: c, select: l } = this.getState();
							if (s) {
								i.preventDefault();
								const d = s.column;
								let h = s.id, u = this.getPrevEditor(this.getRow(h), this.getColumn(d));
								if (!u) {
									const f = this.getPrevRow(h);
									f && (h = f.id, u = this.getPrevEditor(f));
								}
								u && (this.in.exec("open-editor", {
									id: h,
									column: u.id
								}), this.in.exec("focus-cell", {
									row: h,
									column: u.id,
									eventSource: "key"
								}), l && !this.isSelected(h) && this.in.exec("select-row", { id: h }));
							} else c && this.in.exec("focus-cell", { eventSource: "key" });
							break;
						}
						case "escape": {
							const { editor: s } = this.getState();
							s && (this.in.exec("close-editor", { ignore: s.type != "multiselect" }), this.in.exec("focus-cell", {
								row: s.id,
								column: s.column,
								eventSource: "key"
							}));
							break;
						}
						case "f2": {
							const { editor: s, focusCell: c } = this.getState();
							!s && c && this.in.exec("open-editor", {
								id: c.row,
								column: c.column
							});
							break;
						}
						case "enter": {
							const { focusCell: s, tree: c } = this.getState();
							if (!a && c && s && this.getColumn(s.column).treetoggle) {
								const l = this.getRow(s.row);
								if (!l.data) return;
								this.in.exec(l.open ? "close-row" : "open-row", {
									id: s.row,
									nested: !0
								});
							}
							break;
						}
						case "home": {
							const { editor: s, focusCell: c } = this.getState();
							if (!s && c) {
								i.preventDefault();
								const l = this._getFirstVisibleColumn()?.id;
								this.in.exec("focus-cell", {
									row: c.row,
									column: l,
									eventSource: "key"
								});
							}
							break;
						}
						case "ctrl+home": {
							const { editor: s, focusCell: c, flatData: l, select: d } = this.getState();
							if (!s && c) {
								i.preventDefault();
								const h = l[0]?.id, u = this._getFirstVisibleColumn()?.id;
								h && u && (this.in.exec("focus-cell", {
									row: h,
									column: u,
									eventSource: "key"
								}), d && !this.isSelected(h) && this.in.exec("select-row", { id: h }));
							}
							break;
						}
						case "end": {
							const { editor: s, focusCell: c } = this.getState();
							if (!s && c) {
								i.preventDefault();
								const l = this._getLastVisibleColumn()?.id, d = c.row;
								this.in.exec("focus-cell", {
									row: d,
									column: l,
									eventSource: "key"
								});
							}
							break;
						}
						case "ctrl+end": {
							const { editor: s, focusCell: c, flatData: l, select: d } = this.getState();
							if (!s && c) {
								i.preventDefault();
								const h = l.at(-1).id, u = this._getLastVisibleColumn()?.id;
								h && u && (this.in.exec("focus-cell", {
									row: h,
									column: u,
									eventSource: "key"
								}), d && !this.isSelected(h) && this.in.exec("select-row", { id: h }));
							}
							break;
						}
						case "ctrl+z":
							this.in.exec("undo", {});
							break;
						case "ctrl+y": this.in.exec("redo", {});
					}
				}), t.on("scroll", (n) => {
					const { _columns: i, split: a, _sizes: s, flatData: c, dynamic: l, _rowHeightFromData: d } = this.getState();
					let h = -1, u = -1, f = 0, p = 0;
					if (n.column) {
						h = 0;
						const g = i.findIndex((w) => w.id === n.column);
						f = i[g].width;
						for (let w = a.left ?? 0; w < g; w++) {
							const x = i[w];
							x.hidden || (h += x.width);
						}
					}
					if (n.row && !l) {
						const g = c.findIndex((w) => w.id === n.row);
						g >= 0 && (d ? (u = c.slice(0, g).reduce((w, x) => w + (x.rowHeight || s.rowHeight), 0), p = c[g].rowHeight) : u = s.rowHeight * g);
					}
					this.setState({ scroll: {
						top: u,
						left: h,
						width: f,
						height: p || s.rowHeight
					} });
				}), t.on("print", (n) => {
					const i = re(n);
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
				this._router.init({
					sortMarks: {},
					_filterIds: null,
					data: [],
					filterValues: {},
					scroll: null,
					editor: null,
					focusCell: null,
					_print: null,
					history: {
						undo: 0,
						redo: 0
					},
					search: null
				});
			}
			init(e) {
				e.hasOwnProperty("_skin") && !e._skin && (e._skin = xe$1()), e.columns && e.columns.forEach((o) => {
					o.options && (o.optionsMap = new Map(o.options.map((t) => [t.id, t.label])));
				}), k(this.getState().data, e.data) || (e.tree ? e.data = this.normalizeTreeRows(e.data) : e.data = this.normalizeRows(e.data), this.setState({
					_filterIds: null,
					filterValues: {},
					sortMarks: {},
					search: null
				}), this._historyManager && this._historyManager.resetHistory()), e.tree && (e.undo = !1, e.reorder = !1), e.split?.right && (e.split.right = 0), e.undo && !this._historyManager && (this._historyManager = new he(this.in, this.getState.bind(this), this.setState.bind(this))), this._router.init({ ...e });
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
				const o = this.getState().flatData;
				return o[this.getRowIndex(e, o) + 1];
			}
			getPrevRow(e) {
				const o = this.getState().flatData;
				return o[this.getRowIndex(e, o) - 1];
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
				for (; t < o.length && (o[t]?.hidden || o[t]?.collapsed);) t++;
				return o[t];
			}
			_getLastVisibleColumn(e) {
				const o = this.getState()._columns;
				let t = e ?? o.length - 1;
				for (; t < o.length && (o[t]?.hidden || o[t]?.collapsed);) t--;
				return o[t];
			}
			isCellEditable(e, o) {
				const { editor: t, hidden: n } = o;
				return !t || n ? !1 : typeof t == "function" ? t(e, o) : !0;
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
					n = {
						...n,
						open: o
					};
					const a = this.updateTreeRow(n);
					n.$parent === 0 && (i = a);
				}
				t && n.data?.length && n.data.forEach((a) => {
					const s = this.toggleKids(a, o, t);
					e === 0 && (i = s);
				}), this.setState({ data: i });
			}
			toggleKids(e, o, t) {
				e = {
					...e,
					open: o
				};
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
						if (i) return e[t] = {
							...e[t],
							data: n
						}, i;
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
								const c = i > 0 ? e[i - 1] : null;
								return c?.data && c.open ? e[i - 1] = {
									...c,
									data: [...c.data, t]
								} : e.splice(s, 0, t), !0;
							} else if (a.open) return e[i] = {
								...a,
								data: [t, ...a.data]
							}, !0;
						}
						return e.splice(s, 0, t), !0;
					}
					if (e[i].data && (e[i] = {
						...e[i],
						data: [...e[i].data]
					}, this.insertItem(e[i].data, o, t, n))) return !0;
				}
				return !1;
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
							e.collapsed = !0, e.width = 36, a.vertical = !0;
							const c = n.length - i;
							n = n.slice(0, i + 1), n[i].rowspan = c;
						}
						const s = a.colspan;
						if (s) {
							const c = n[i + 1];
							let l = 1;
							c && c.colspan && !c.collapsed && (l = c.colspan);
							for (let d = l; d < s; d++) {
								const h = t[o + d];
								h && (h.hidden = !0);
							}
						}
					}
				}
			}
			normalizeColumns(e, o, t, n, i) {
				const a = e[o];
				a.width || (a.width = a.flexgrow ? 17 : i.columnWidth), a._colindex = o + 1;
				const s = a[t], c = i[`${t}RowHeights`];
				for (let l = 0; l < n; l++) {
					const d = s[l];
					d.id = a.id, l === s.length - 1 && (d.rowspan = d.rowspan ? Math.min(d.rowspan, n - l) : n - l);
					for (let h = 1; h < d.rowspan; h++) {
						s.splice(l + h, 0, { _hidden: !0 });
						for (let u = 1; u < d.colspan; u++) e[o + u][t].splice(l + h, 0, {});
					}
					if (d.rowspan) d.height = (d.rowspan === n ? c : c.slice(l, d.rowspan + l)).reduce((u, f) => u + f, 0), l + d.rowspan != n && d.height--;
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
					(!t || t.includes(i.id)) && n.push(i), i.data?.length && i.open !== !1 && this.flattenRows(i.data, n, t);
				}), n;
			}
			createFilter(e) {
				const { _columns: o } = this.getState(), t = [];
				for (const n in e) {
					const i = o.find((l) => l.id == n), { config: a, type: s } = i.header.find((l) => l.filter).filter, c = e[n];
					t.push((l) => {
						const d = y(l, i);
						return a?.handler ? a.handler(d, c) : $(s)(d, c);
					});
				}
				return (n) => {
					for (let i = 0; i < t.length; i++) if (!t[i](n)) return !1;
					return !0;
				};
			}
			searchRows(e, o) {
				e = e.trim().toLowerCase();
				const t = {};
				if (!e) return t;
				const { flatData: n, columns: i } = this.getState(), a = o ? i.filter((s) => o[s.id]) : i;
				return n.forEach((s) => {
					const c = {};
					a.forEach((l) => {
						const d = S$1(s, l);
						String(d).toLowerCase().includes(e) && (c[l.id] = !0);
					}), Object.keys(c).length && (t[s.id] = c);
				}), t;
			}
			normalizeSizes(e, o, t, n, i) {
				const a = L(e, "header", t, o.headerHeight, i), s = L(e, "footer", n, o.footerHeight, i), c = a.reduce((d, h) => d + h, 0), l = s.reduce((d, h) => d + h, 0);
				return {
					...o,
					headerRowHeights: a,
					footerRowHeights: s,
					headerHeight: c,
					footerHeight: l
				};
			}
		};
		ke = (/* @__PURE__ */ new Date()).valueOf();
		(/* @__PURE__ */ new Date()).valueOf();
		Re = class {
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
		b = [];
		Ee = { subscribe: (r) => {
			De();
			const e = new Re();
			return b.push(e), r(e), () => {
				const o = b.findIndex((t) => t === e);
				o >= 0 && b.splice(o, 1);
			};
		} };
		O = !1;
		Ie = {
			tab: !0,
			"shift+tab": !0,
			arrowup: !0,
			arrowdown: !0,
			arrowright: !0,
			arrowleft: !0,
			enter: !0,
			escape: !0,
			f2: !0,
			home: !0,
			end: !0,
			"ctrl+home": !0,
			"ctrl+end": !0,
			"ctrl+z": !0,
			"ctrl+y": !0
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/@svar-ui+lib-react@1.3.0/node_modules/@svar-ui/lib-react/dist/index.js
function useWritableProp(propValue) {
	const [value, setValue] = (0, import_react$6.useState)(propValue);
	const prevPropRef = (0, import_react$6.useRef)(propValue);
	(0, import_react$6.useEffect)(() => {
		if (prevPropRef.current !== propValue) {
			if (Array.isArray(prevPropRef.current) && Array.isArray(propValue) && prevPropRef.current.length === 0 && propValue.length === 0) return;
			prevPropRef.current = propValue;
			setValue(propValue);
		}
	}, [propValue]);
	return [value, setValue];
}
function useWritable(writable2, initialValue, name) {
	const [state, setState] = (0, import_react$6.useState)(() => initialValue);
	if (!writable2) console.warn(`Writable ${name} is not defined`);
	(0, import_react$6.useEffect)(() => {
		if (!writable2) return;
		return writable2.subscribe((newValue) => {
			setState(() => newValue);
		});
	}, [writable2]);
	return state;
}
function useStore(store, name) {
	const s = store.getState();
	return useWritable(store.getReactiveState()[name], s[name], name);
}
function useWritableWithCounter(writable2, initialValue) {
	const state = (0, import_react$6.useRef)(initialValue);
	state.current = initialValue;
	const [counter, setCounter] = (0, import_react$6.useState)(1);
	(0, import_react$6.useEffect)(() => {
		return writable2.subscribe((newValue) => {
			state.current = newValue;
			setCounter((v) => v + 1);
		});
	}, [writable2]);
	return [state.current, counter];
}
function useStoreWithCounter(store, name) {
	const s = store.getState();
	return useWritableWithCounter(store.getReactiveState()[name], s[name]);
}
function styleObject(text) {
	const out = {};
	text.split(";").forEach((x) => {
		const [k, v] = x.split(":");
		if (v) {
			let n = k.trim();
			if (n.indexOf("-")) n = n.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
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
		listeners = listeners.filter((l) => l !== cb);
	};
	const update = (cb) => {
		_value = cb(_value);
		listeners.forEach((l) => l(_value));
	};
	const set = (v) => {
		_value = v;
		listeners.forEach((l) => l(_value));
	};
	return {
		subscribe,
		unsubscribe,
		set,
		update
	};
}
function delegateEvent(node, handlers, event) {
	function handleEvent(ev) {
		const node2 = locate(ev);
		if (!node2) return;
		const id = getID(node2);
		if (typeof handlers === "function") return handlers(id, ev);
		let action;
		let test = ev.target;
		while (test != node2) {
			action = test.dataset ? test.dataset.action : null;
			if (action) {
				if (handlers[action]) {
					handlers[action](id, ev);
					return;
				}
			}
			test = test.parentNode;
		}
		if (handlers[event]) handlers[event](id, ev);
	}
	return env.addEvent(node, event, handleEvent);
}
function delegateClick(node, handlers) {
	const result = [delegateEvent(node, handlers, "click")];
	if (handlers.dblclick) result.push(delegateEvent(node, handlers.dblclick, "dblclick"));
	return () => {
		result.forEach((r) => r());
	};
}
var import_react$6;
function init_dist$5() {
	return (init_dist$5 = __esmMin((() => {
		import_react$6 = require_react();
		init_dist$2();
	})))();
}
// ../../common/temp/node_modules/.pnpm/@svar-ui+react-grid@2.6.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@svar-ui/react-grid/dist/index.es.js
function Cn(t, e) {
	const n = new ResizeObserver((r) => {
		requestAnimationFrame(() => e(r[0].contentRect));
	});
	return n.observe(t.parentNode), { destroy() {
		n.disconnect();
	} };
}
function Ke(t) {
	const e = t.getBoundingClientRect(), n = document.body, r = e.top + n.scrollTop - n.clientTop || 0, p = e.left + n.scrollLeft - n.clientLeft || 0;
	return {
		y: Math.round(r),
		x: Math.round(p),
		width: t.offsetWidth,
		height: t.offsetHeight
	};
}
function tt(t, e) {
	const n = Ke(e);
	return {
		x: t.clientX - n.x,
		y: t.clientY - n.y
	};
}
function Rn(t, e) {
	const n = e.current;
	let r = null, p, x, s = !1, v = !1;
	const f = document.createElement("DIV");
	f.className = "wx-drag-zone", f.setAttribute("tabindex", -1);
	function u() {
		clearTimeout(p), p = null;
	}
	function g(l) {
		const H = locate(l);
		H && (r = {
			container: f,
			sourceNode: l.target,
			from: getID(H),
			pos: tt(l, t)
		}, x = r.pos, a(l));
	}
	function a(l) {
		if (!r) return;
		const H = r.pos = tt(l, t);
		if (!s) {
			if (!v && !l?.target?.getAttribute("draggable-data") && Math.abs(x.x - H.x) < yt && Math.abs(x.y - H.y) < yt) return;
			if (T(l) === !1) return N();
		}
		if (v) {
			const P = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft, G = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
			r.targetNode = document.elementFromPoint(l.pageX - P, l.pageY - G);
		} else r.targetNode = l.target;
		n.move && n.move(l, r), f.style.left = -(r.offset ? r.offset.x : 0) + "px", f.style.top = r.pos.y + (r.offset ? r.offset.y : 0) + "px";
	}
	function b(l) {
		f.parentNode && f.parentNode.removeChild(f), f.innerHTML = "", s && n.end && n.end(l, r), r = x = null, N();
	}
	function D(l) {
		n.getReorder && !n.getReorder() || l.button === 0 && (R(l), window.addEventListener("mousemove", C), window.addEventListener("mouseup", d), g(l));
	}
	function C(l) {
		a(l);
	}
	function d(l) {
		b(l);
	}
	function m(l) {
		if (n.getReorder && !n.getReorder()) return;
		p = setTimeout(() => {
			v = !0, g(l.touches[0]);
		}, Sn), R(l);
		function H() {
			p && u(), l.target.removeEventListener("touchmove", h), l.target.removeEventListener("touchend", H), b(l);
		}
		l.target.addEventListener("touchmove", h), l.target.addEventListener("touchend", H), t.addEventListener("contextmenu", y);
	}
	function h(l) {
		s ? (l.preventDefault(), a(l.touches[0])) : p && u();
	}
	function y(l) {
		if (s || p) return l.preventDefault(), !1;
	}
	function i(l) {
		l.preventDefault();
	}
	function R(l) {
		if (!n.getDraggableInfo) return;
		const { hasDraggable: H } = n.getDraggableInfo();
		(!H || l.target.getAttribute("draggable-data")) && (document.body.style.userSelect = "none", document.body.style.webkitUserSelect = "none");
	}
	function T(l) {
		if (s = !0, n.start) {
			if (n.start(l, r) === !1) return !1;
			t.appendChild(f), document.body.style.cursor = "move";
		}
	}
	function N(l) {
		s = v = !1, document.body.style.cursor = "", document.body.style.userSelect = "", document.body.style.webkitUserSelect = "", window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", d), l && (t.removeEventListener("mousedown", D), t.removeEventListener("touchstart", m), t.removeEventListener("dragstart", i));
	}
	return t.addEventListener("mousedown", D), t.addEventListener("touchstart", m), t.addEventListener("dragstart", i), { destroy() {
		N(!0);
	} };
}
function Dn() {
	return {
		dirX: 0,
		dirY: 0,
		scrollSpeedFactor: 1
	};
}
function Tn(t, e, n, r) {
	const { node: p, left: x, top: s, bottom: v, sense: f, xScroll: u, yScroll: g } = r, a = tt(t, p);
	n.scrollState || (n.scrollState = Dn());
	let b = 0, D = 0;
	a.x < x + f ? b = -1 : a.x > e.width - f && (b = 1), a.y < s + Math.round(f / 2) ? D = -1 : a.y > e.height - v - Math.round(f / 2) && (D = 1), (n.scrollState.dirX !== b || n.scrollState.dirY !== D) && (Et(n), n.scrollState.dirX = b, n.scrollState.dirY = D), (u && n.scrollState.dirX !== 0 || g && n.scrollState.dirY !== 0) && kn(n, r, {
		x: n.scrollState.dirX,
		y: n.scrollState.dirY
	});
}
function kn(t, e, n) {
	t.autoScrollTimer || (t.autoScrollTimer = setTimeout(() => {
		t.activeAutoScroll = setInterval(En, 15, t, e, n);
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
	Lt(r + Math.round(e.sense / 3) * t.scrollSpeedFactor * n, "scrollTop", e);
}
function Hn(t, e, n) {
	const r = e.node.scrollLeft;
	Lt(r + Math.round(e.sense / 3) * t.scrollSpeedFactor * n, "scrollLeft", e);
}
function Lt(t, e, n) {
	n.node[e] = t;
}
function Ye(t, e, n, r, p, x) {
	const s = {};
	return t && (s.width = `${t}px`, s.minWidth = `${t}px`), e && (s.flexGrow = e), x && (s.height = `${x}px`), n && (s.position = "sticky", n.left && (s.left = `${r}px`), n.right && (s.right = `${p}px`)), s;
}
function Ht(t, e, n) {
	let r = "";
	if (t.fixed) for (const p in t.fixed) {
		let x = t.fixed[p] === -1;
		!x && t.fixed.leftSize && e.colspan && (x = e.colspan + t._colindex - 1 === t.fixed.leftSize), r += x ? "wx-shadow " : "wx-fixed ";
	}
	return r += e.rowspan > 1 ? "wx-rowspan " : "", r += e.colspan > 1 ? "wx-colspan " : "", r += e.vertical ? "wx-vertical " : "", r += n ? n(t) + " " : "", r;
}
function $n(t) {
	const { row: e, column: n, cellStyle: r = null, columnStyle: p = null, children: x } = t, [s, v] = useWritableProp(t.focusable), f = (0, import_react$5.useContext)(ne), u = useStore(f, "focusCell"), g = useStore(f, "search"), a = useStore(f, "reorder"), b = (0, import_react$5.useMemo)(() => g?.rows[e.id] && g.rows[e.id][n.id], [
		g,
		e.id,
		n.id
	]), D = (0, import_react$5.useMemo)(() => Ye(n.width, n.flexgrow, n.fixed, n.left, n.right), [
		n.width,
		n.flexgrow,
		n.fixed,
		n.left,
		n.right
	]);
	function C(N, l) {
		let H = "wx-cell";
		return H += n.fixed ? " " + (n.fixed === -1 ? "wx-shadow" : "wx-fixed") : "", H += N ? " " + N(n) : "", H += l ? " " + l(e, n) : "", H += n.treetoggle ? " wx-tree-cell" : "", H;
	}
	const d = (0, import_react$5.useMemo)(() => C(p, r), [
		p,
		r,
		n,
		e
	]), m = (0, import_react$5.useMemo)(() => typeof n.draggable == "function" ? n.draggable(e, n) !== !1 : n.draggable, [n, e]), h = (0, import_react$5.useRef)(null);
	(0, import_react$5.useEffect)(() => {
		h.current && s && u?.row === e.id && u?.column === n.id && h.current.focus();
	}, [
		u,
		s,
		e.id,
		n.id
	]);
	const y = (0, import_react$5.useCallback)(() => {
		s && f.exec("focus-cell", {
			row: e.id,
			column: n.id,
			eventSource: "focus"
		});
	}, [
		f,
		s,
		e.id,
		n.id
	]);
	(0, import_react$5.useEffect)(() => () => {
		s && u && (f.exec("focus-cell", { eventSource: "destroy" }), v(!1));
	}, [f, v]);
	function i(N) {
		const l = new RegExp(`(${g.value.trim()})`, "gi");
		return String(N).split(l).map((P) => ({
			text: P,
			highlight: l.test(P)
		}));
	}
	const R = (0, import_react$5.useMemo)(() => {
		const N = n.fixed && n.fixed.left === -1 || n.fixed.right === -1, l = n.fixed && n.fixed.right;
		return [
			d,
			N ? "wx-shadow" : "",
			l ? "wx-fixed-right" : ""
		].filter(Boolean).join(" ");
	}, [d, n]), T = n.cell;
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
		className: "wx-TSCaXsGV " + R,
		ref: h,
		onFocus: y,
		style: D,
		"data-row-id": setID(e.id),
		"data-col-id": setID(n.id),
		tabIndex: s ? "0" : "-1",
		role: "gridcell",
		"aria-colindex": n._colindex,
		"aria-readonly": n.editor ? void 0 : !0,
		children: [
			a && n.draggable ? m ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("i", {
				"draggable-data": "true",
				className: "wx-TSCaXsGV wx-draggable wxi-drag"
			}) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("i", { className: "wx-TSCaXsGV wx-draggable-stub" }) : null,
			n.treetoggle ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", { style: { marginLeft: `${e.$level * 28}px` } }), e.$count ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("i", {
				"data-action": "toggle-row",
				className: `wx-TSCaXsGV wx-table-tree-toggle wxi-menu-${e.open !== !1 ? "down" : "right"}`
			}) : null] }) : null,
			T ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(T, {
				api: f,
				row: e,
				column: n,
				onAction: ({ action: N, data: l }) => f.exec(N, l)
			}) : x ? x() : b ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", { children: i(S$1(e, n)).map(({ highlight: N, text: l }, H) => N ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("mark", {
				className: "wx-TSCaXsGV wx-search",
				children: l
			}, H) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", { children: l }, H)) }) : S$1(e, n)
		]
	});
}
function vt(t, e) {
	let n, r;
	function p(v) {
		n = v.clientX, t.style.opacity = 1, document.body.style.cursor = "ew-resize", document.body.style.userSelect = "none", window.addEventListener("mousemove", x), window.addEventListener("mouseup", s), e && e.down && e.down(t);
	}
	function x(v) {
		r = v.clientX - n, e && e.move && e.move(r);
	}
	function s() {
		t.style.opacity = "", document.body.style.cursor = "", document.body.style.userSelect = "", e && e.up && e.up(r), window.removeEventListener("mousemove", x), window.removeEventListener("mouseup", s);
	}
	return t.addEventListener("mousedown", p), { destroy() {
		t.removeEventListener("mousedown", p);
	} };
}
function Mn({ filter: t, column: e, action: n, filterValue: r }) {
	function p({ value: x }) {
		n({
			value: x,
			key: e.id
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Ne, {
		...t.config ?? {},
		value: r,
		onChange: p
	});
}
function An({ filter: t, column: e, action: n, filterValue: r }) {
	const x = useStore((0, import_react$5.useContext)(ne), "flatData"), s = (0, import_react$5.useMemo)(() => t?.config?.options || e?.options || f(), [
		t,
		e,
		x
	]), v = (0, import_react$5.useMemo)(() => t?.config?.template, [t]);
	function f() {
		const a = [];
		return x.forEach((b) => {
			const D = y(b, e);
			a.includes(D) || a.push(D);
		}), a.map((b) => ({
			id: b,
			label: b
		}));
	}
	function u({ value: a }) {
		n({
			value: a,
			key: e.id
		});
	}
	function g(a) {
		a.key !== "Tab" && a.preventDefault();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		style: { width: "100%" },
		onKeyDown: g,
		children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(cn, {
			placeholder: "",
			clear: !0,
			...t?.config ?? {},
			options: s,
			value: r,
			onChange: u,
			children: (a) => v ? v(a) : a.label
		})
	});
}
function In({ filter: t, column: e, action: n, filterValue: r }) {
	function p({ value: x }) {
		n({
			value: x,
			key: e.id
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: "wx-aaaK5VYO",
		style: { width: "100%" },
		children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(zt, {
			placeholder: "",
			clear: !0,
			...t?.config ?? {},
			value: r,
			onChange: p
		})
	});
}
function Vn({ filter: t, column: e }) {
	const n = (0, import_react$5.useContext)(ne), r = useStore(n, "filterValues");
	function p(s) {
		n.exec("filter-rows", s);
	}
	const x = (0, import_react$5.useMemo)(() => zn[t.type], [t.type]);
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(x, {
		filter: t,
		column: e,
		action: p,
		filterValue: r[e.id]
	});
}
function On(t) {
	const { cell: e, column: n, row: r, lastRow: p, sortRow: x, columnStyle: s, bodyHeight: v, hasSplit: f } = t, u = (0, import_react$5.useContext)(ne), g = useStore(u, "sortMarks"), a = (0, import_react$5.useMemo)(() => g ? g[n.id] : void 0, [g, n.id]), b = (0, import_react$5.useRef)(), D = (0, import_react$5.useCallback)((E) => {
		b.current = e.flexgrow ? E.parentNode.clientWidth : e.width;
	}, [e.flexgrow, e.width]), C = (0, import_react$5.useCallback)((E, $) => {
		u.exec("resize-column", {
			id: e.id,
			width: Math.max(1, (b.current || 0) + E),
			inProgress: $
		});
	}, [u, e.id]), d = (0, import_react$5.useCallback)((E) => C(E, !0), [C]), m = (0, import_react$5.useCallback)((E) => C(E, !1), [C]), h = (0, import_react$5.useCallback)((E) => {
		if (!n.sort || e.filter) return;
		let $ = a?.order;
		$ && ($ = $ === "asc" ? "desc" : "asc"), u.exec("sort-rows", {
			key: e.id,
			add: E.ctrlKey || E.metaKey,
			order: $
		});
	}, [
		u,
		e.id,
		e.filter,
		n.sort,
		a?.order
	]), y = (0, import_react$5.useCallback)((E) => {
		E && E.stopPropagation(), u.exec("collapse-column", {
			id: e.id,
			row: r
		});
	}, [
		u,
		e.id,
		r
	]), i = (0, import_react$5.useCallback)((E) => {
		E.key === "Enter" && y();
	}, [y]), R = (0, import_react$5.useCallback)((E) => {
		E.key === "Enter" && !e.filter && h(E);
	}, [h, e.filter]), T = (0, import_react$5.useMemo)(() => e.collapsed && n.collapsed, [e.collapsed, n.collapsed]), N = (0, import_react$5.useMemo)(() => T && !f && e.collapsible !== "header", [
		T,
		f,
		e.collapsible
	]), l = (0, import_react$5.useMemo)(() => N ? {
		top: -v / 2,
		position: "absolute"
	} : {}, [N, v]), H = (0, import_react$5.useMemo)(() => Ye(e.width, e.flexgrow, n.fixed, n.left, e.right ?? n.right, e.height + (T && N ? v : 0)), [
		e.width,
		e.flexgrow,
		n.fixed,
		n.left,
		e.right,
		n.right,
		e.height,
		T,
		N,
		v
	]), P = (0, import_react$5.useMemo)(() => Ht(n, e, s), [
		n,
		e,
		s
	]), G = (0, import_react$5.useCallback)(() => Object.fromEntries(Object.entries(e).filter(([E]) => E !== "cell")), [e]), ae = `wx-cell ${P} ${e.css || ""} wx-collapsed`, oe = [
		"wx-cell",
		P,
		e.css || "",
		e.filter ? "wx-filter" : "",
		n.fixed && n.fixed.right ? "wx-fixed-right" : ""
	].filter(Boolean).join(" "), V = (0, import_react$5.useRef)(null);
	return (0, import_react$5.useEffect)(() => {
		const E = V.current;
		if (!E) return;
		const $ = vt(E, {
			down: D,
			move: d,
			up: m
		});
		return () => {
			typeof $ == "function" && $();
		};
	}, [
		D,
		d,
		m,
		vt
	]), T ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: "wx-RsQD74qC " + ae,
		style: H,
		role: "button",
		"aria-label": `Expand column ${e.text || ""}`,
		"aria-expanded": !e.collapsed,
		tabIndex: 0,
		onKeyDown: i,
		onClick: y,
		"data-header-id": setID(n.id),
		children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
			className: "wx-RsQD74qC wx-text",
			style: l,
			children: e.text || ""
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
		className: "wx-RsQD74qC " + oe,
		style: H,
		onClick: h,
		"data-header-id": setID(n.id),
		tabIndex: !e._hidden && n.sort && !e.filter ? 0 : void 0,
		role: "columnheader",
		"aria-colindex": e._colindex,
		"aria-colspan": e.colspan > 1 ? e.colspan : void 0,
		"aria-rowspan": e.rowspan > 1 ? e.rowspan : void 0,
		"aria-sort": !a?.order || e.filter ? "none" : a?.order === "asc" ? "ascending" : "descending",
		onKeyDown: R,
		children: [
			e.collapsible ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
				className: "wx-RsQD74qC wx-collapse",
				role: "button",
				"aria-label": e.collapsed ? "Expand column" : "Collapse column",
				"aria-expanded": !e.collapsed,
				tabIndex: 0,
				onKeyDown: i,
				onClick: y,
				children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("i", { className: `wx-RsQD74qC wxi-angle-${e.collapsed ? "down" : "right"}` })
			}) : null,
			e.cell ? (() => {
				const E = e.cell;
				return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(E, {
					api: u,
					cell: G(),
					column: n,
					row: r,
					onAction: ({ action: $, data: fe }) => u.exec($, fe)
				});
			})() : e.filter ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Vn, {
				filter: e.filter,
				column: n
			}) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
				className: "wx-RsQD74qC wx-text",
				children: e.text || ""
			}),
			n.resize && p && !e._hidden ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
				className: "wx-RsQD74qC wx-grip",
				role: "presentation",
				"aria-label": "Resize column",
				ref: V,
				onClick: (E) => E.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {})
			}) : null,
			x ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
				className: "wx-RsQD74qC wx-sort",
				children: a ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [typeof a.index < "u" ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
					className: "wx-RsQD74qC wx-order",
					children: a.index + 1
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("i", { className: `wx-RsQD74qC wxi-arrow-${a.order === "asc" ? "up" : "down"}` })] }) : null
			}) : null
		]
	});
}
function Kn({ cell: t, column: e, row: n, columnStyle: r }) {
	const p = (0, import_react$5.useContext)(ne), x = (0, import_react$5.useMemo)(() => Ye(t?.width, t?.flexgrow, e?.fixed, e?.left, t?.right ?? e?.right, t?.height), [
		t?.width,
		t?.flexgrow,
		e?.fixed,
		e?.left,
		t?.right,
		e?.right,
		t?.height
	]), s = (0, import_react$5.useMemo)(() => Ht(e, t, r), [
		e,
		t,
		r
	]), v = (0, import_react$5.useCallback)(() => Object.fromEntries(Object.entries(t || {}).filter(([u]) => u !== "cell")), [t]), f = `wx-6Sdi3Dfd wx-cell ${s || ""} ${t?.css || ""}` + (e?.fixed && e?.fixed.right ? " wx-fixed-right" : "");
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: f,
		style: x,
		children: !e?.collapsed && !t?.collapsed ? t?.cell ? import_react$5.createElement(t.cell, {
			api: p,
			cell: v(),
			column: e,
			row: n,
			onAction: ({ action: u, data: g }) => p.exec(u, g)
		}) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
			className: "wx-6Sdi3Dfd wx-text",
			children: t?.text || ""
		}) : null
	});
}
function bt({ deltaLeft: t, contentWidth: e, columns: n, type: r = "header", columnStyle: p, bodyHeight: x }) {
	const s = (0, import_react$5.useContext)(ne), v = useStore(s, "_sizes"), f = useStore(s, "split"), u = (0, import_react$5.useMemo)(() => v?.[`${r}RowHeights`], [v, r]), g = (0, import_react$5.useMemo)(() => {
		let d = [];
		if (n && n.length) {
			const m = n[0][r].length;
			for (let h = 0; h < m; h++) {
				let y = 0;
				d.push([]), n.forEach((i, R) => {
					const T = { ...i[r][h] };
					if (y || d[h].push(T), T.colspan > 1) {
						if (y = T.colspan - 1, !fe() && i.right) {
							let N = i.right;
							for (let l = 1; l < T.colspan; l++) N -= n[R + l].width;
							T.right = N;
						}
					} else y && y--;
				});
			}
		}
		return d;
	}, [n, r]), a = (0, import_react$5.useMemo)(() => f?.left || f?.right, [f]);
	function b(d) {
		return n.find((m) => m.id === d);
	}
	function D(d, m) {
		let h = m;
		return d.rowspan && (h += d.rowspan - 1), h === g.length - 1;
	}
	function C(d, m, h) {
		if (!h.sort) return !1;
		for (let y = g.length - 1; y >= 0; y--) {
			const i = h.header[y];
			if (!i.filter && !i._hidden) return m === y;
		}
		return D(d, m);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: `wx-sAsPVaUK wx-${r}`,
		style: {
			paddingLeft: `${t}px`,
			width: `${e}px`
		},
		role: "rowgroup",
		children: g.map((d, m) => /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
			className: r === "header" ? "wx-sAsPVaUK wx-h-row" : "wx-sAsPVaUK wx-f-row",
			style: {
				height: `${u?.[m]}px`,
				display: "flex"
			},
			role: "row",
			children: d.map((h) => {
				const y = b(h.id);
				return r === "header" ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(On, {
					cell: h,
					columnStyle: p,
					column: y,
					row: m,
					lastRow: D(h, m),
					bodyHeight: x,
					sortRow: C(h, m, y),
					hasSplit: a
				}, h.id) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Kn, {
					cell: h,
					columnStyle: p,
					column: b(h.id),
					row: m
				}, h.id);
			})
		}, m))
	});
}
function Pn({ overlay: t }) {
	const e = (0, import_react$5.useContext)(ne);
	function n(p) {
		return typeof p == "function";
	}
	const r = t;
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: "wx-1ty666CQ wx-overlay",
		children: n(t) ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(r, { onAction: ({ action: p, data: x }) => e.exec(p, x) }) : t
	});
}
function Wn(t) {
	const { editor: e, onSave: n, onApply: r } = t, [p, x] = (0, import_react$5.useState)(e?.value || ""), s = (0, import_react$5.useRef)(null);
	(0, import_react$5.useEffect)(() => {
		s.current && s.current.focus();
	}, []), (0, import_react$5.useEffect)(() => {
		if (!s.current) return;
		const u = clickOutside(s.current, () => n(!0));
		return () => u.destroy();
	}, [n]);
	function v() {
		s.current && (x(s.current.value), r(s.current.value));
	}
	function f({ key: u }) {
		u === "Enter" && n();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("input", {
		className: "wx-e7Ao5ejY wx-text",
		onInput: v,
		onKeyDown: f,
		ref: s,
		type: "text",
		value: p
	});
}
function Yn({ editor: t, onAction: e, onSave: n, onApply: r, onCancel: p }) {
	const [x, s] = (0, import_react$5.useState)(t?.value), [v, f] = (0, import_react$5.useState)(t?.renderedValue), [u, g] = (0, import_react$5.useState)(t?.options || []), a = (0, import_react$5.useMemo)(() => t?.config?.template, [t]), b = (0, import_react$5.useMemo)(() => t?.config?.cell, [t]), D = (0, import_react$5.useMemo)(() => t?.config?.dropdown || {}, [t]), C = (0, import_react$5.useMemo)(() => ({
		trackScroll: !0,
		...D
	}), [D]), d = (0, import_react$5.useMemo)(() => (u || []).findIndex((l) => l.id === x), [u, x]), m = (0, import_react$5.useRef)(null), h = (0, import_react$5.useRef)(null), y = (0, import_react$5.useCallback)((l) => {
		m.current = l.navigate, h.current = l.keydown, m.current(d);
	}, [d, m]), i = (0, import_react$5.useCallback)((l) => {
		const H = l?.target?.value ?? "";
		f(H);
		const P = H ? (t?.options || []).filter((G) => (G.label || "").toLowerCase().includes(H.toLowerCase())) : t?.options || [];
		g(P), P.length ? m.current(-1 / 0) : m.current(null);
	}, [t]), R = (0, import_react$5.useRef)(null);
	(0, import_react$5.useEffect)(() => {
		R.current && R.current.focus();
	}, []);
	const T = (0, import_react$5.useRef)(n);
	(0, import_react$5.useEffect)(() => {
		T.current = n;
	}, [n]), (0, import_react$5.useEffect)(() => {
		if (!R.current) return;
		const l = clickOutside(R.current, () => T.current(!0));
		return () => l.destroy();
	}, []), (0, import_react$5.useEffect)(() => {
		s(t?.value), f(t?.renderedValue), g(t?.options || []);
	}, [t]);
	const N = (0, import_react$5.useCallback)(({ id: l }) => {
		r(l), n();
	}, [r, n]);
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("input", {
		className: "wx-0UYfSd1x wx-input",
		ref: R,
		value: v ?? "",
		onChange: i,
		onKeyDown: (l) => h.current ? h.current(l, d) : void 0
	}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(ge$1, {
		items: u,
		onReady: y,
		onSelect: N,
		...C,
		onCancel: p,
		children: ({ option: l }) => a ? a(l) : b ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(b, {
			data: l,
			onAction: e
		}) : l.label
	})] });
}
function _n({ editor: t, onAction: e, onSave: n, onApply: r, onCancel: p }) {
	const [x] = (0, import_react$5.useState)(() => t.value || /* @__PURE__ */ new Date()), { template: s, cell: v, dropdown: f = {} } = t?.config || {}, u = (0, import_react$5.useMemo)(() => ({
		trackScroll: !0,
		width: "auto",
		...f
	}), [f]);
	function g({ value: C }) {
		r(C), n();
	}
	const a = (0, import_react$5.useRef)(null), [b, D] = (0, import_react$5.useState)(null);
	return (0, import_react$5.useEffect)(() => {
		a.current && a.current.focus(), typeof window < "u" && window.getSelection && window.getSelection().removeAllRanges();
	}, []), (0, import_react$5.useEffect)(() => {
		if (!b) return;
		const C = clickOutside(b, () => n(!0));
		return () => C.destroy();
	}, [b, n]), /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: "wx-lNWNYUb6 wx-value",
		ref: a,
		tabIndex: 0,
		onClick: p,
		onKeyDown: (C) => C.preventDefault(),
		children: s ? s(x) : v ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(v, {
			data: t.value,
			onAction: e
		}) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
			className: "wx-lNWNYUb6 wx-text",
			children: t.renderedValue
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(le$1, {
		...u,
		onCancel: p,
		children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
			ref: D,
			className: "wx-lNWNYUb6",
			children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Dt, {
				value: x,
				onChange: g,
				buttons: t.config?.buttons
			})
		})
	})] });
}
function Fn(t) {
	const { editor: e } = t, n = t.onAction ?? t.onaction, r = t.onSave ?? t.onsave, p = t.onApply ?? t.onapply, x = t.onCancel ?? t.oncancel, s = e.config || {}, { dropdown: v = {} } = s, f = (0, import_react$5.useMemo)(() => ({
		trackScroll: !0,
		...v
	}), [v]), [u] = (0, import_react$5.useState)(e.options.find((i) => i.id === e.value)), [g] = (0, import_react$5.useState)(e.value), [a] = (0, import_react$5.useState)(e.options), b = (0, import_react$5.useMemo)(() => a.findIndex((i) => i.id === g), [a, g]);
	function D({ id: i }) {
		p(i), r();
	}
	let C;
	const [d, m] = (0, import_react$5.useState)();
	function h(i) {
		C = i.navigate, m(() => i.keydown), C(b);
	}
	const y = (0, import_react$5.useRef)(null);
	return (0, import_react$5.useEffect)(() => {
		y.current && y.current.focus(), typeof window < "u" && window.getSelection && window.getSelection().removeAllRanges();
	}, []), (0, import_react$5.useEffect)(() => {
		if (!y.current) return;
		const i = clickOutside(y.current, () => r(!0));
		return () => i.destroy();
	}, [r]), /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		ref: y,
		className: "wx-ywGRk611 wx-value",
		tabIndex: 0,
		onClick: x,
		onKeyDown: (i) => {
			d(i, b), i.preventDefault();
		},
		children: s.template ? s.template(u) : s.cell ? (() => {
			const i = s.cell;
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(i, {
				data: u,
				onAction: n
			});
		})() : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
			className: "wx-ywGRk611 wx-text",
			children: e.renderedValue
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(ge$1, {
		items: a,
		onReady: h,
		onSelect: D,
		...f,
		onCancel: x,
		children: ({ option: i }) => s.template ? s.template(i) : s.cell ? (() => {
			const R = s.cell;
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(R, {
				data: i,
				onAction: n
			});
		})() : i.label
	})] });
}
function Xn(t) {
	const { editor: e, onAction: n, onApply: r, onCancel: p, onSave: x } = t, s = e?.config || {}, v = (0, import_react$5.useMemo)(() => ({
		trackScroll: !0,
		...s?.dropdown || {}
	}), [s]), f = e?.options ?? [], u = e?.value || [], g = e?.renderedValue, a = f.find((i) => u.includes(i.id)), b = a ? f.indexOf(a) : -1, D = (0, import_react$5.useRef)(null);
	function C({ id: i }) {
		r(i), D.current && D.current.focus();
	}
	let d;
	const [m, h] = (0, import_react$5.useState)();
	function y(i) {
		d = i.navigate, h(() => i.keydown), d(b);
	}
	return (0, import_react$5.useEffect)(() => {
		D.current && D.current.focus(), typeof window < "u" && window.getSelection && window.getSelection().removeAllRanges();
	}, []), (0, import_react$5.useEffect)(() => {
		if (!D.current) return;
		const i = clickOutside(D.current, () => x(!0));
		return () => i.destroy();
	}, [x]), /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		ref: D,
		className: "wx-value wx-aacZ4gNU",
		tabIndex: 0,
		onClick: p,
		onKeyDown: (i) => {
			m(i, b), i.preventDefault();
		},
		children: s.template ? s.template(u?.map((i) => f.find((R) => R.id === i))) : s.cell ? (() => {
			const i = s.cell;
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(i, { data: u.map((R) => f.find((T) => T.id === R)) });
		})() : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
			className: "wx-text wx-aacZ4gNU",
			children: g
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(ge$1, {
		items: f,
		onReady: y,
		onSelect: C,
		checkboxes: !0,
		multiselect: !0,
		...v,
		onCancel: p,
		value: u,
		children: ({ option: i }) => /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
			className: "wx-option wx-aacZ4gNU",
			children: s.template ? s.template(i) : s.cell ? (() => {
				const R = s.cell;
				return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(R, {
					data: i,
					onAction: n
				});
			})() : i.label
		})
	})] });
}
function Un({ column: t, row: e }) {
	const n = (0, import_react$5.useContext)(ne), r = useStore(n, "editor"), p = (0, import_react$5.useCallback)((C, d) => {
		n.exec("close-editor", { ignore: C }), d && setTimeout(() => {
			n.exec("focus-cell", {
				...d,
				eventSource: "click"
			});
		});
	}, [n]), x = (0, import_react$5.useCallback)((C) => {
		const d = C ? null : {
			row: r?.id,
			column: r?.column
		};
		p(!1, d);
	}, [r, p]), s = (0, import_react$5.useCallback)(() => {
		p(!0, {
			row: r?.id,
			column: r?.column
		});
	}, [r, p]), v = (0, import_react$5.useCallback)((C) => {
		n.exec("editor", { value: C });
	}, [n]), f = (0, import_react$5.useCallback)((C) => {
		C.key === "Enter" && r && (t.editor.type === "multiselect" ? v(r.value) : s());
	}, [
		r,
		t.editor,
		s,
		v
	]), u = (0, import_react$5.useMemo)(() => Ye(t.width, t.flexgrow, t.fixed, t.left, t.right), [
		t.width,
		t.flexgrow,
		t.fixed,
		t.left,
		t.right
	]), g = (0, import_react$5.useMemo)(() => {
		let C = t.editor;
		if (typeof C == "function" && (C = C(e, t)), !C) return null;
		let d = typeof C == "string" ? C : C.type;
		return $t[d];
	}, [t, e]), a = (0, import_react$5.useRef)(null);
	(0, import_react$5.useEffect)(() => {
		a.current && typeof u == "string" && a.current.setAttribute("style", u);
	}, [u]);
	const b = typeof e.$parent < "u" ? "gridcell" : "cell", D = typeof e.$parent < "u" ? !t.editor : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: "wx-8l724t2g wx-cell wx-editor",
		ref: a,
		style: typeof u == "object" && u !== null ? u : void 0,
		role: b,
		"aria-readonly": D,
		tabIndex: -1,
		onClick: (C) => C.stopPropagation(),
		onDoubleClick: (C) => C.stopPropagation(),
		onKeyDown: f,
		children: g ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(g, {
			editor: r,
			onSave: x,
			onApply: v,
			onCancel: s,
			onAction: ({ action: C, data: d }) => n.exec(C, d)
		}) : null
	});
}
function Ct(t) {
	const { columns: e, type: n, columnStyle: r } = t, p = (0, import_react$5.useContext)(ne), { filterValues: x, _columns: s, _sizes: v } = p.getState();
	function f(u) {
		return r ? " " + r(u) : "";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(import_jsx_runtime$5.Fragment, { children: e.map((u, g) => /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("tr", { children: u.map((a) => {
		const b = s.find((d) => d.id === a.id), D = `wx-print-cell-${n}${f(b)}${a.filter ? " wx-print-cell-filter" : ""}${a.vertical ? " wx-vertical" : ""}`, C = a.cell;
		return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("th", {
			style: styleObject(se(a, v.columnWidth)),
			className: "wx-Gy81xq2u " + D,
			rowSpan: a.rowspan,
			colSpan: a.colspan,
			children: C ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(C, {
				api: p,
				cell: Object.fromEntries(Object.entries(a).filter(([d]) => d !== "cell")),
				column: b,
				row: g
			}) : a.filter ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
				className: "wx-Gy81xq2u wx-print-filter",
				children: ae(x, s, a)
			}) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
				className: "wx-Gy81xq2u wx-text",
				children: a.text ?? ""
			})
		}, a.id);
	}) }, g)) });
}
function jn(t) {
	const { columns: e, rowStyle: n, columnStyle: r, cellStyle: p, header: x, footer: s, reorder: v } = t, f = (0, import_react$5.useContext)(ne), { flatData: u, _sizes: g } = f.getState(), a = x && oe(e, "header", g.headerRowHeights), b = s && oe(e, "footer", g.footerRowHeights);
	function D(d, m) {
		let h = "";
		return h += r ? " " + r(m) : "", h += p ? " " + p(d, m) : "", h;
	}
	function C(d, m) {
		return typeof m.draggable == "function" ? m.draggable(d, m) !== !1 : m.draggable;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("table", {
		className: `wx-8NTMLH0z wx-print-grid ${e.some((d) => d.flexgrow) ? "wx-flex-columns" : ""}`,
		children: [
			x ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Ct, {
				columns: a,
				type: "header",
				columnStyle: r
			}) }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("tbody", { children: u.map((d, m) => /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("tr", {
				className: "wx-8NTMLH0z wx-row" + (n ? " " + n(d) : ""),
				style: { height: `${d.rowHeight || g.rowHeight}px` },
				children: e.map((h) => h.collapsed ? null : /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("td", {
					className: `wx-8NTMLH0z wx-print-cell wx-cell ${D(d, h)}`,
					style: styleObject(se(h, g.columnWidth)),
					children: [
						v && h.draggable ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
							className: "wx-8NTMLH0z wx-print-draggable",
							children: C(d, h) ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("i", { className: "wx-8NTMLH0z wxi-drag" }) : null
						}) : null,
						h.treetoggle ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", { style: { marginLeft: d.$level * 28 + "px" } }), d.$count ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("i", { className: `wx-8NTMLH0z wx-print-grid-tree-toggle wxi-menu-${d.open !== !1 ? "down" : "right"}` }) : null] }) : null,
						h.cell ? (() => {
							const y = h.cell;
							return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(y, {
								api: f,
								row: d,
								column: h
							});
						})() : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", { children: S$1(d, h) })
					]
				}, h.id))
			}, m)) }),
			s ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("tfoot", { children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Ct, {
				columns: b,
				type: "footer",
				columnStyle: r
			}) }) : null
		]
	});
}
function Bn(t) {
	const { config: e, ...n } = t, { _skin: p, _columns: x } = (0, import_react$5.useContext)(ne).getState(), s = (0, import_react$5.useMemo)(() => te(x, e), []), v = (0, import_react$5.useRef)(null);
	return (0, import_react$5.useEffect)(() => {
		const f = document.body;
		f.classList.add("wx-print");
		const u = v.current;
		if (!u) return;
		const g = u.cloneNode(!0);
		f.appendChild(g);
		const a = `@media print { @page { size: ${e.paper} ${e.mode}; }`, b = document.createElement("style");
		b.setAttribute("type", "text/css"), b.setAttribute("media", "print"), document.getElementsByTagName("head")[0].appendChild(b), b.appendChild(document.createTextNode(a)), window.print(), b.remove(), f.classList.remove("wx-print"), g.remove();
	}, []), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: `wx-4zwCKA7C wx-${p}-theme wx-print-container`,
		ref: v,
		children: s.map((f, u) => /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
			className: "wx-4zwCKA7C wx-print-grid-wrapper",
			children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(jn, {
				columns: f,
				...n
			})
		}, u))
	});
}
function Gn(t) {
	const { header: e, footer: n, overlay: r, multiselect: p, onreorder: x, rowStyle: s, columnStyle: v, cellStyle: f, autoRowHeight: u, resize: g, clientWidth: a, clientHeight: b, responsiveLevel: D, hotkeys: C } = t, d = (0, import_react$5.useContext)(ne), m = useStore(d, "dynamic"), h = useStore(d, "_columns"), y = useStore(d, "flatData"), i = useStore(d, "split"), R = useStore(d, "_sizes"), [T, N] = useStoreWithCounter(d, "selectedRows"), l = useStore(d, "select"), H = useStore(d, "editor"), P = useStore(d, "tree"), G = useStore(d, "focusCell"), ae = useStore(d, "_print"), oe = useStore(d, "undo"), V = useStore(d, "reorder"), E = useStore(d, "_rowHeightFromData"), [$, fe] = (0, import_react$5.useState)(0);
	(0, import_react$5.useEffect)(() => {
		fe(Wt());
	}, []);
	const [Se, _e] = (0, import_react$5.useState)(0), [me, Fe] = (0, import_react$5.useState)(0), se = (0, import_react$5.useMemo)(() => (h || []).some((o) => !o.hidden && o.flexgrow), [h]), j = (0, import_react$5.useMemo)(() => R?.rowHeight || 0, [R]), X = (0, import_react$5.useRef)(null), [Xe, Re] = (0, import_react$5.useState)(null), [de, Me$2] = (0, import_react$5.useState)(null), te = (0, import_react$5.useMemo)(() => {
		let o = [], w = 0;
		return i && i.left && (o = (h || []).slice(0, i.left).filter((k) => !k.hidden).map((k) => ({ ...k })), o.forEach((k) => {
			k.fixed = {
				left: 1,
				leftSize: i.left
			}, k.left = w, w += k.width;
		}), o.length && (o[o.length - 1].fixed.left = -1)), {
			columns: o,
			width: w
		};
	}, [i, h]), ie = (0, import_react$5.useMemo)(() => {
		let o = [], w = 0;
		if (i && i.right) {
			o = (h || []).slice(i.right * -1).filter((k) => !k.hidden).map((k) => ({ ...k }));
			for (let k = o.length - 1; k >= 0; k--) {
				const M = o[k];
				M.fixed = { right: 1 }, M.right = w, w += M.width;
			}
			o.length && (o[0].fixed = { right: -1 });
		}
		return {
			columns: o,
			width: w
		};
	}, [i, h]), I = (0, import_react$5.useMemo)(() => {
		const o = (h || []).slice(i?.left || 0, (h || []).length - (i?.right ?? 0)).filter((w) => !w.hidden);
		return o.forEach((w) => {
			w.fixed = 0;
		}), o;
	}, [h, i]), U = (0, import_react$5.useMemo)(() => (h || []).reduce((o, w) => (w.hidden || (o += w.width), o), 0), [h]), J = 1;
	function ue(o, w, k) {
		let M = w, _ = o;
		if (I.length) {
			let O = I.length;
			for (let L = o; L >= 0; L--) I[L][k].forEach((Q) => {
				Q.colspan > 1 && L > o - Q.colspan && L < O && (O = L);
			});
			if (O !== I.length && O < o) {
				for (let L = O; L < o; L++) M -= I[L].width;
				_ = O;
			}
		}
		return {
			index: _,
			delta: M
		};
	}
	const ee = (0, import_react$5.useMemo)(() => {
		let o, w, k;
		const M = Se, _ = Se + (a || 0);
		let O = 0, L = 0, F = 0, Q = 0;
		I.forEach((ge, ke) => {
			M > F && (O = ke, Q = F), F = F + ge.width, _ > F && (L = ke + J);
		});
		const ce = {
			header: 0,
			footer: 0
		};
		for (let ge = L; ge >= O; ge--) ["header", "footer"].forEach((ke) => {
			I[ge] && I[ge][ke].forEach((Xt) => {
				const Je = Xt.colspan;
				if (Je && Je > 1) {
					const ht = Je - (L - ge + 1);
					ht > 0 && (ce[ke] = Math.max(ce[ke], ht));
				}
			});
		});
		const B = ue(O, Q, "header"), le = ue(O, Q, "footer"), Ze = B.delta, $e = B.index, Ve = le.delta, Oe = le.index;
		return se && U > (a || 0) ? o = w = k = [
			...te.columns,
			...I,
			...ie.columns
		] : (o = [
			...te.columns,
			...I.slice(O, L + 1),
			...ie.columns
		], w = [
			...te.columns,
			...I.slice($e, L + ce.header + 1),
			...ie.columns
		], k = [
			...te.columns,
			...I.slice(Oe, L + ce.footer + 1),
			...ie.columns
		]), {
			data: o || [],
			header: w || [],
			footer: k || [],
			d: Q,
			df: Ve,
			dh: Ze
		};
	}, [
		I,
		te,
		ie,
		Se,
		a,
		se,
		U
	]), ve = (0, import_react$5.useMemo)(() => e && R?.headerHeight || 0, [e, R]), be = (0, import_react$5.useMemo)(() => n && R?.footerHeight || 0, [n, R]), ye = (0, import_react$5.useMemo)(() => a && b ? U >= a : !1, [
		a,
		b,
		U
	]), Ne = (0, import_react$5.useMemo)(() => (b || 0) - ve - be - (ye ? $ : 0), [
		b,
		ve,
		be,
		ye,
		$
	]), lt = (0, import_react$5.useMemo)(() => Math.ceil((Ne || 0) / (j || 1)) + 1, [Ne, j]), Ue = (0, import_react$5.useRef)([]), [st, Mt] = (0, import_react$5.useState)(0), [it, At] = (0, import_react$5.useState)(void 0), re = (0, import_react$5.useMemo)(() => {
		let o = 0, w = 0;
		const k = 2;
		if (u) {
			let O = me;
			for (; O > 0;) O -= Ue.current[o] || j, o++;
			w = me - O;
			for (let L = Math.max(0, o - k - 1); L < o; L++) w -= Ue.current[o - L] || j;
			o = Math.max(0, o - k);
		} else {
			if (E) {
				let O = 0, L = 0;
				for (let B = 0; B < (y || []).length; B++) {
					const le = y[B].rowHeight || j;
					if (L + le > me) {
						O = B;
						break;
					}
					L += le;
				}
				o = Math.max(0, O - k);
				for (let B = 0; B < o; B++) w += y[B].rowHeight || j;
				let F = 0, Q = 0;
				for (let B = O + 1; B < (y || []).length; B++) {
					const le = y[B].rowHeight || j;
					if (F++, Q + le > Ne) break;
					Q += le;
				}
				const ce = Math.min(m ? m.rowCount : (y || []).length, O + F + k);
				return {
					d: w,
					start: o,
					end: ce
				};
			}
			o = Math.floor(me / (j || 1)), o = Math.max(0, o - k), w = o * (j || 0);
		}
		const M = m ? m.rowCount : (y || []).length, _ = Math.min(M, o + (lt || 0) + k);
		return {
			d: w,
			start: o,
			end: _
		};
	}, [
		u,
		E,
		me,
		j,
		m,
		y,
		lt,
		Ne
	]), je = (0, import_react$5.useMemo)(() => {
		const o = m ? m.rowCount : (y || []).length;
		if (u) return st + re.d + (o - (it || 0)) * (j || 0);
		if (!E) return o * (j || 0);
		let w = 0;
		for (let k = 0; k < o; k++) w += y[k]?.rowHeight || j;
		return w;
	}, [
		m,
		y,
		j,
		u,
		E,
		st,
		re.d,
		it
	]), he = (0, import_react$5.useMemo)(() => a && b ? je + ve + be >= b - (U >= (a || 0) ? $ : 0) : !1, [
		a,
		b,
		je,
		ve,
		be,
		U,
		$
	]), Ce = (0, import_react$5.useMemo)(() => se && U <= (a || 0) ? (a || 0) - 0 - (he ? $ : 0) : U, [
		se,
		U,
		a,
		he,
		$,
		ye
	]), Be = (0, import_react$5.useMemo)(() => se && U <= (a || 0) ? a || 0 : Ce < (a || 0) ? U + (he ? $ : 0) : -1, [
		se,
		U,
		a,
		Ce,
		he,
		$
	]), Ge = (0, import_react$5.useRef)({});
	(0, import_react$5.useEffect)(() => {
		if (m && (Ge.current.start !== re.start || Ge.current.end !== re.end)) {
			const { start: o, end: w } = re;
			Ge.current = {
				start: o,
				end: w
			}, d && d.exec && d.exec("request-data", { row: {
				start: o,
				end: w
			} });
		}
	}, [
		m,
		re,
		d
	]);
	const pe = (0, import_react$5.useMemo)(() => m ? y || [] : (y || []).slice(re.start, re.end), [
		m,
		y,
		re
	]), He = (0, import_react$5.useMemo)(() => (T || []).filter((o) => (pe || []).some((w) => w.id === o)), [N, pe]), qe = (0, import_react$5.useMemo)(() => re.start, [re.start]), It = (0, import_react$5.useCallback)((o) => {
		Fe(o.target.scrollTop), _e(o.target.scrollLeft);
	}, []), zt = (0, import_react$5.useCallback)((o) => {
		o.shiftKey && o.preventDefault(), X.current && X.current.focus && X.current.focus();
	}, []), ct = (0, import_react$5.useCallback)(() => !!(h || []).find((o) => !!o.draggable), [h]), Qe = (0, import_react$5.useRef)(null), De = (0, import_react$5.useRef)(null), Vt = (0, import_react$5.useRef)({
		dblclick: (o, w) => {
			const k = {
				id: o,
				column: locateID(w, "data-col-id")
			};
			d.exec("open-editor", k);
		},
		click: (o, w) => {
			if (w.target.closest("input") || Qe.current) return;
			const k = locateID(w, "data-col-id");
			if (G?.id !== o && d.exec("focus-cell", {
				row: o,
				column: k,
				eventSource: "click"
			}), l === !1) return;
			const M = p && (w.ctrlKey || w.metaKey), _ = p && w.shiftKey;
			(M || T.length > 1 || !T.includes(o)) && d.exec("select-row", {
				id: o,
				toggle: M,
				range: _
			});
		},
		"toggle-row": (o) => {
			const w = d.getRow(o);
			d.exec(w.open !== !1 ? "close-row" : "open-row", { id: o });
		},
		"ignore-click": () => !1
	}), Ae = (0, import_react$5.useMemo)(() => ({
		top: ve,
		bottom: be,
		left: te.width,
		xScroll: ye,
		yScroll: he,
		sense: u && de ? de.offsetHeight : Math.max(R?.rowHeight || 0, 40),
		node: X.current && X.current.firstElementChild
	}), [
		ve,
		be,
		te.width,
		ye,
		he,
		u,
		de,
		R
	]);
	function Ot(o, w) {
		const { container: k, sourceNode: M, from: _ } = w;
		if (ct() && !M.getAttribute("draggable-data")) return !1;
		Re(_), P && d.getRow(_).open && d.exec("close-row", {
			id: _,
			nested: !0
		});
		const L = locate(M), F = L.cloneNode(!0);
		F.classList.remove("wx-selected"), F.querySelectorAll("[tabindex]").forEach((le) => le.setAttribute("tabindex", "-1")), k.appendChild(F), Me$2(F);
		const Q = Se - ee.d, ce = he ? $ : 0;
		k.style.width = Math.min((a || 0) - ce, se && U <= (a || 0) ? Ce : Ce - ce) + Q + "px";
		const B = Ke(L);
		w.offset = {
			x: Q,
			y: -Math.round(B.height / 2)
		}, De.current || (De.current = o.clientY);
	}
	function Kt(o, w) {
		const { from: k } = w, M = w.pos, _ = Ke(X.current);
		M.x = _.x;
		const O = Ae.top;
		if (M.y < O) M.y = O;
		else {
			const L = _.height - (ye && $ > 0 ? $ : Math.round(Ae.sense / 2)) - Ae.bottom;
			M.y > L && (M.y = L);
		}
		if (X.current.contains(w.targetNode)) {
			const L = locate(w.targetNode), F = L && getID(L);
			if (F && F !== k) {
				w.to = F;
				const Q = u ? de?.offsetHeight : R?.rowHeight;
				if (de && (me === 0 || M.y > O + Q - 1)) {
					const ce = L.getBoundingClientRect(), $e = Ke(de).y > ce.y ? -1 : 1, Ve = $e === 1 ? "after" : "before", Oe = Math.abs(d.getRowIndex(k) - d.getRowIndex(F)), ge = Oe !== 1 ? Ve === "before" ? "after" : "before" : Ve;
					if (Oe === 1 && ($e === -1 && o.clientY > De.current || $e === 1 && o.clientY < De.current)) return;
					De.current = o.clientY, d.exec("move-item", {
						id: k,
						target: F,
						mode: ge,
						inProgress: !0
					});
				}
			}
			x && x({
				event: o,
				context: w
			});
		}
		Tn(o, _, w, Ae);
	}
	function Pt(o, w) {
		const { from: k, to: M } = w;
		d.exec("move-item", {
			id: k,
			target: M,
			inProgress: !1
		}), Qe.current = setTimeout(() => {
			Qe.current = 0;
		}, 1), Re(null), Me$2(null), De.current = null, Et(w);
	}
	function Wt() {
		const o = document.createElement("div");
		o.style.cssText = "position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;min-height:100px;overflow-y:scroll;", document.body.appendChild(o);
		const w = o.offsetWidth - o.clientWidth;
		return document.body.removeChild(o), w;
	}
	const Yt = (0, import_react$5.useMemo)(() => Be > 0 ? { width: `${Be}px` } : void 0, [Be]), at = (0, import_react$5.useRef)(null);
	function _t() {
		Promise.resolve().then(() => {
			let o = 0, w = qe;
			const k = at.current;
			k && (Array.from(k.children).forEach((M, _) => {
				Ue.current[qe + _] = M.offsetHeight, o += M.offsetHeight, w++;
			}), Mt(o), At(w));
		});
	}
	(0, import_react$5.useEffect)(() => {
		pe && u && _t();
	}, [
		pe,
		u,
		qe
	]);
	let [Te$1, Ie$2] = (0, import_react$5.useState)();
	(0, import_react$5.useEffect)(() => {
		if (G && (!l || !He.length || He.includes(G.row))) Ie$2({ ...G });
		else if (pe.length && ee.data.length) {
			if (!Te$1 || He.length && !He.includes(Te$1.row) || pe.findIndex((o) => o.id === Te$1.row) === -1 || ee.data.findIndex((o) => o.id === Te$1.column && !o.collapsed) === -1) {
				const o = He[0] || pe[0].id, w = ee.data.findIndex((k) => !k.collapsed);
				Ie$2(w !== -1 ? {
					row: o,
					column: ee.data[w].id
				} : null);
			}
		} else Ie$2(null);
	}, [G]);
	const dt = (0, import_react$5.useRef)(null);
	(0, import_react$5.useEffect)(() => {
		const o = X.current;
		if (!o) return;
		const w = Cn(o, g);
		return () => {
			typeof w == "function" && w();
		};
	}, [g]);
	const ut = (0, import_react$5.useRef)({});
	Object.assign(ut.current, {
		start: Ot,
		move: Kt,
		end: Pt,
		getReorder: () => V,
		getDraggableInfo: () => ({ hasDraggable: ct() })
	}), (0, import_react$5.useEffect)(() => {
		const o = X.current;
		return o ? Rn(o, ut).destroy : void 0;
	}, [V, X.current]), (0, import_react$5.useEffect)(() => {
		const o = X.current;
		return o ? Me(o, {
			keys: C !== !1 && {
				...Ie,
				"ctrl+z": oe,
				"ctrl+y": oe,
				...C
			},
			exec: (k) => d.exec("hotkey", k)
		}).destroy : void 0;
	}, [
		d,
		oe,
		C
	]);
	const ze = (0, import_react$5.useRef)({ scroll: d.getReactiveState().scroll });
	ze.current.getWidth = () => (a || 0) - (he ? $ : 0), ze.current.getHeight = () => Ne, ze.current.getScrollMargin = () => te.width + ie.width, (0, import_react$5.useEffect)(() => {
		Te(dt.current, ze.current);
	}, []);
	const ft = (0, import_react$5.useRef)(null);
	(0, import_react$5.useEffect)(() => {
		const o = ft.current;
		if (!o) return;
		const w = [];
		return w.push(clickOutside(o, () => G && d.exec("focus-cell", { eventSource: "click" })).destroy), w.push(delegateClick(o, Vt.current)), () => w.forEach((k) => k());
	}, []);
	const Ft = `wx-grid ${D ? `wx-responsive-${D}` : ""}`;
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: "wx-4VuBwK2D " + Ft,
		style: {
			"--header-height": `${ve}px`,
			"--footer-height": `${be}px`,
			"--split-left-width": `${te.width}px`,
			"--split-right-width": `${ie.width}px`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
			ref: X,
			className: "wx-4VuBwK2D wx-table-box",
			style: Yt,
			role: P ? "treegrid" : "grid",
			"aria-colcount": ee.data.length,
			"aria-rowcount": pe.length,
			"aria-multiselectable": P && p ? !0 : void 0,
			tabIndex: -1,
			children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
				ref: dt,
				className: "wx-4VuBwK2D wx-scroll",
				style: {
					overflowX: ye ? "scroll" : "hidden",
					overflowY: he ? "scroll" : "hidden"
				},
				onScroll: It,
				children: [
					e ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
						className: "wx-4VuBwK2D wx-header-wrapper",
						children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(bt, {
							contentWidth: Ce,
							deltaLeft: ee.dh,
							columns: ee.header,
							columnStyle: v,
							bodyHeight: Ne - +n
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
						ref: ft,
						className: "wx-4VuBwK2D wx-body",
						style: {
							width: `${Ce}px`,
							height: `${je}px`
						},
						onMouseDown: (o) => zt(o),
						children: [r ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Pn, { overlay: r }) : null, /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
							ref: at,
							className: "wx-4VuBwK2D wx-data",
							style: {
								paddingTop: `${re.d}px`,
								paddingLeft: `${ee.d}px`
							},
							children: pe.map((o, w) => {
								const k = T.indexOf(o.id) !== -1, M = Xe === o.id, _ = "wx-row" + (u ? " wx-autoheight" : "") + (s ? " " + s(o) : "") + (k ? " wx-selected" : "") + (M ? " wx-inactive" : ""), O = u ? { minHeight: `${o.rowHeight || j}px` } : { height: `${o.rowHeight || j}px` };
								return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
									className: "wx-4VuBwK2D " + _,
									"data-id": setID(o.id),
									"data-context-id": setID(o.id),
									style: O,
									role: "row",
									"aria-rowindex": w,
									"aria-expanded": o.open,
									"aria-level": P ? o.$level + 1 : void 0,
									"aria-selected": P ? k : void 0,
									tabIndex: -1,
									children: ee.data.map((L) => L.collapsed ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", { className: "wx-4VuBwK2D wx-cell wx-collapsed" }, L.id) : H?.id === o.id && H.column === L.id ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Un, {
										row: o,
										column: L
									}, L.id) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)($n, {
										row: o,
										column: L,
										columnStyle: v,
										cellStyle: f,
										reorder: V,
										focusable: Te$1?.row === o.id && Te$1?.column === L.id
									}, L.id))
								}, o.id);
							})
						})]
					}),
					n && (y || []).length ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(bt, {
						type: "footer",
						contentWidth: Ce,
						deltaLeft: ee.df,
						columns: ee.footer,
						columnStyle: v
					}) : null
				]
			})
		})
	}), ae ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Bn, {
		config: ae,
		rowStyle: s,
		columnStyle: v,
		cellStyle: f,
		header: e,
		footer: n,
		reorder: V
	}) : null] });
}
function wo({ fonts: t = !0, children: e }) {
	return e ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(vn, {
		fonts: t,
		children: e
	}) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(vn, { fonts: t });
}
function xo({ fonts: t = !0, children: e }) {
	return e ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(gn, {
		fonts: t,
		children: e
	}) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(gn, { fonts: t });
}
var import_jsx_runtime$5, import_react$5, ne, yt, Sn, Nn, zn, $t, qn, ao;
function init_index_es$1() {
	return (init_index_es$1 = __esmMin((() => {
		import_jsx_runtime$5 = require_jsx_runtime();
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_index_es();
		init_en$1();
		init_dist$3();
		init_dist$4();
		init_dist$5();
		init_dist$2();
		ne = (0, import_react$5.createContext)(null);
		yt = 5;
		Sn = 700;
		Nn = .004;
		zn = {
			text: Mn,
			richselect: An,
			datepicker: In
		};
		$t = {
			text: Wn,
			combo: Yn,
			datepicker: _n,
			richselect: Fn,
			multiselect: Xn
		};
		qn = (t) => t.split("-").map((e) => e ? e.charAt(0).toUpperCase() + e.slice(1) : "").join("");
		ao = (0, import_react$5.forwardRef)(function({ data: e = [], columns: n = [], rowStyle: r = null, columnStyle: p = null, cellStyle: x = null, selectedRows: s, select: v = !0, multiselect: f = !1, header: u = !0, footer: g = !1, dynamic: a = null, overlay: b = null, reorder: D = !1, onReorder: C = null, autoRowHeight: d = !1, sizes: m, split: h, tree: y = !1, autoConfig: i = !1, init: R = null, responsive: T = null, sortMarks: N, undo: l = !1, hotkeys: H = null, filterValues: P, ...G }, ae) {
			const oe = (0, import_react$5.useRef)();
			oe.current = G;
			const V = (0, import_react$5.useMemo)(() => new ve(writable), []), E = (0, import_react$5.useMemo)(() => V.in, [V]), $ = (0, import_react$5.useRef)(null);
			$.current === null && ($.current = new EventBusRouter((I, U) => {
				const J = "on" + qn(I);
				oe.current && oe.current[J] && oe.current[J](U);
			}), E.setNext($.current));
			const fe = (0, import_react$5.useMemo)(() => ({
				getState: V.getState.bind(V),
				getReactiveState: V.getReactive.bind(V),
				getStores: () => ({ data: V }),
				exec: E.exec,
				setNext: (I) => ($.current = $.current.setNext(I), $.current),
				intercept: E.intercept.bind(E),
				on: E.on.bind(E),
				detach: E.detach.bind(E),
				getRow: V.getRow.bind(V),
				getRowIndex: V.getRowIndex.bind(V),
				getColumn: V.getColumn.bind(V)
			}), [V, E]), [Se, _e] = (0, import_react$5.useState)(0), [me, Fe] = (0, import_react$5.useState)(0), [se, j] = (0, import_react$5.useState)(null), [X, Xe] = (0, import_react$5.useState)(null), Re = (0, import_react$5.useMemo)(() => {
				if (i && !n.length && e.length) {
					const I = e[0], U = [];
					for (let J in I) if (J !== "id" && J[0] !== "$") {
						let ue = {
							id: J,
							header: J[0].toUpperCase() + J.slice(1)
						};
						typeof i == "object" && (ue = {
							...ue,
							...i
						}), U.push(ue);
					}
					return U;
				}
				return (X && X.columns) ?? n;
			}, [
				i,
				n,
				e,
				X
			]), de = (0, import_react$5.useMemo)(() => (X && X.sizes) ?? m, [X, m]), Me = (0, import_react$5.useCallback)((I) => {
				if (_e(I.width), Fe(I.height), T) {
					const J = Object.keys(T).map(Number).sort((ue, ee) => ue - ee).find((ue) => I.width <= ue) ?? null;
					J !== se && (Xe(T[J]), j(J));
				}
			}, [T, se]), te = (0, import_react$5.useContext)(Ut$1.theme), ie = (0, import_react$5.useRef)(0);
			return (0, import_react$5.useEffect)(() => {
				if (!ie.current) R && R(fe);
				else {
					const I = V.getState();
					V.init({
						data: e,
						columns: Re,
						split: h || I.split,
						sizes: de || I.sizes,
						selectedRows: s || I.selectedRows,
						dynamic: a,
						tree: y,
						sortMarks: N || I.sortMarks,
						filterValues: P || I.filterValues,
						undo: l,
						reorder: D,
						_skin: te,
						_select: v
					});
				}
				ie.current++;
			}, [
				V,
				e,
				Re,
				h,
				de,
				s,
				a,
				y,
				N,
				P,
				l,
				D,
				te,
				v,
				R,
				fe
			]), ie.current === 0 && V.init({
				data: e,
				columns: Re,
				split: h || { left: 0 },
				sizes: de || {},
				selectedRows: s || [],
				dynamic: a,
				tree: y,
				sortMarks: N || {},
				filterValues: P || {},
				undo: l,
				reorder: D,
				_skin: te,
				select: v
			}), (0, import_react$5.useImperativeHandle)(ae, () => ({ ...fe }), [fe]), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(ne.Provider, {
				value: fe,
				children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(he$1, {
					words: en_default,
					optional: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Gn, {
						header: u,
						footer: g,
						overlay: b,
						rowStyle: r,
						columnStyle: p,
						cellStyle: x,
						onReorder: C,
						multiselect: f,
						autoRowHeight: d,
						clientWidth: Se,
						clientHeight: me,
						responsiveLevel: se,
						resize: Me,
						hotkeys: H
					})
				})
			});
		});
		setEnv(env);
	})))();
}
// ../../tools/blong-log/src/record.ts
/** The fields of one record, or an empty bag — never `undefined`, so callers can read through it. */
function fieldsOf(record) {
	const fields = record.fields;
	return fields !== null && typeof fields === "object" ? fields : {};
}
/** The service the record came from — `blong` unless a suite names its own. */
function serviceOf(record) {
	const service = record.service;
	if (typeof service === "string" && service.length > 0) return service;
	return typeof record.name === "string" ? record.name : void 0;
}
/**
* The component or port that reported it — a port's instance id (`srv.db`), a component's class name.
*
* This is what the viewer used to call the service name: with one process writing every line, the
* service is the same on all of them, and the identity an operator filters by is the port.
*/
function contextOf(record) {
	const context = fieldsOf(record)["context"];
	if (typeof context === "string" && context.length > 0) return context;
}
/** The declared signal identifier — `frameworkPortFailure`, `frameworkTcpFrame`. */
function signalOf(record) {
	const signal = record.signal ?? fieldsOf(record)["signal"];
	return typeof signal === "string" && signal.length > 0 ? signal : void 0;
}
/** The values the signal was called with, as declared placeholders resolved them. */
function paramsOf(record) {
	const params = fieldsOf(record)["params"];
	return params !== null && typeof params === "object" ? params : void 0;
}
/** The operation the record is about — `db.subject.find`, `watch.config.reload`. */
function operationOf(record) {
	const operation = fieldsOf(record)["operation"] ?? record.$meta?.method;
	return typeof operation === "string" && operation.length > 0 ? operation : void 0;
}
/** The kind of event in the framework's envelope — `event`, `error`, `deprecation`. */
function messageIdOf(record) {
	const messageId = fieldsOf(record)["messageId"] ?? record.$meta?.mtid;
	return typeof messageId === "string" && messageId.length > 0 ? messageId : void 0;
}
/**
* The trace the record belongs to, or `undefined` when it belongs to none.
*
* A record carries it at `refs.trace` — the causal identity propagated from the ambient context — while
* the viewer's own column and filter were written for the pino-era `traceId` at the top level. Reading
* both here is what keeps a lukaot record's trace visible; a record without one was emitted outside a
* traced context (a boot step, a timer, an emit before any request entered the trace), which is why the
* column is empty on some rows and not on others rather than broken.
*/
function traceOf(record) {
	const refs = record.refs;
	const fromRefs = refs !== null && typeof refs === "object" ? refs.trace : void 0;
	for (const candidate of [fromRefs, record.traceId]) if (typeof candidate === "string" && candidate.length > 0) return candidate;
}
/** The record that caused this one, or `undefined` for the root of a chain. */
function parentOf(record) {
	const refs = record.refs;
	const parent = refs !== null && typeof refs === "object" ? refs.parent : void 0;
	return typeof parent === "string" && parent.length > 0 ? parent : void 0;
}
/**
* The decision a record reports, or `undefined` when it reports none.
*
* A decision is the one-shot rationale a handler attaches with `decide()`: the same shape a sequence
* diagram draws an `alt` block from, and the reason a chosen branch is explainable after the fact. It is
* not the same thing as `progress.regions` — a region says the record was *emitted inside* a branch, a
* decision says *why the branch was chosen*.
*/
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
/**
* The flow a record belongs to, or `undefined` when it belongs to none.
*
* A leg is present only on the records of a call that crossed a participant boundary, and the caller and
* the callee both report the same `leg` — which is what makes one arrow out of two records, and why the
* `seq` counter rather than a timestamp is what orders them (`core/lukaot/src/record.ts`).
*/
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
/** The intent a record was emitted under, or `undefined` when nothing declared one. */
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
/** The request/response detail a record carries, or `undefined` when it carries neither. */
function exchangeOf(record) {
	const req = record.req;
	const res = record.res;
	if ((req === null || typeof req !== "object") && (res === null || typeof res !== "object")) return void 0;
	const q = req ?? {};
	const s = res ?? {};
	const request = [
		typeof q["operation"] === "string" ? q["operation"] : void 0,
		typeof q["method"] === "string" ? q["method"] : void 0,
		typeof q["target"] === "string" ? q["target"] : void 0,
		typeof q["url"] === "string" ? q["url"] : void 0
	].filter((part) => part !== void 0 && part.length > 0);
	const status = typeof s["status"] === "number" ? s["status"] : typeof s["statusCode"] === "number" ? s["statusCode"] : void 0;
	const elapsedMs = typeof s["elapsedMs"] === "number" ? s["elapsedMs"] : typeof s["responseTime"] === "number" ? s["responseTime"] : void 0;
	return {
		...request.length === 0 ? {} : { request: request.join(" ") },
		...status === void 0 ? {} : { status },
		...elapsedMs === void 0 ? {} : { elapsedMs },
		...headerBag(q["headers"]) === void 0 ? {} : { requestHeaders: headerBag(q["headers"]) },
		...headerBag(s["headers"]) === void 0 ? {} : { responseHeaders: headerBag(s["headers"]) },
		...q["body"] === void 0 ? {} : { requestBody: q["body"] },
		...s["body"] === void 0 ? {} : { responseBody: s["body"] }
	};
}
/**
* The capture a record carries, or `undefined` when it is an ordinary line.
*
* A capture is recognised by its declaration's `capture` field rather than by a level or a message: the
* rule is the vocabulary's, and a line that happens to be worded like a capture is still a line.
*/
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
/**
* The bytes of a hex payload, or `undefined` when the payload is not hex.
*
* The framework writes a frame as `ff d8 ff db …`; a space-less string is accepted too, because a
* payload that reached a reader by some other path should still render rather than be hidden.
*/
function bytesOfHex(payload) {
	const compact = payload.replace(/\s+/g, "");
	if (compact.length === 0 || compact.length % 2 !== 0) return void 0;
	if (!/^[0-9a-fA-F]+$/.test(compact)) return void 0;
	const bytes = [];
	for (let index = 0; index < compact.length; index += 2) bytes.push(parseInt(compact.slice(index, index + 2), 16));
	return bytes;
}
/**
* A frame as the rows a hex editor draws: offset, bytes, and their ASCII beside them.
*
* Sixteen per row because that is what every dump tool a developer has used does, and the ASCII column
* is what makes a text protocol readable at a glance — a `POST /iso8583` opening is visible there in a
* way that `50 4f 53 54` is not (`@@D-927`).
*/
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
var headerBag;
function init_record() {
	return (init_record = __esmMin((() => {
		headerBag = (value) => value !== null && typeof value === "object" ? value : void 0;
	})))();
}
// ../../tools/blong-log/src/types.ts
var LEVEL_NAME;
function init_types() {
	return (init_types = __esmMin((() => {
		LEVEL_NAME = {
			10: "trace",
			20: "debug",
			30: "info",
			40: "warn",
			50: "error",
			60: "fatal"
		};
	})))();
}
// ../../tools/blong-log/src/client/Highlight.tsx
function escapeRegExp(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
/** The search term marked with a highlight, or the text unchanged when there is no search. */
function highlightSearch(text, search) {
	if (!search) return text;
	return text.split(new RegExp(`(${escapeRegExp(search)})`, "gi")).map((part, i) => part.toLowerCase() === search.toLowerCase() ? /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("mark", {
		style: {
			background: "#e3b341",
			color: "#000",
			padding: "0 1px",
			borderRadius: "2px"
		},
		children: part
	}, i) : part);
}
/**
* Tokenizes JSON and wraps each token with the colour from `theme.syntax`.
* Also applies search highlighting to matching tokens.
*/
function SyntaxHighlight({ json, theme, searchText = "" }) {
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
		if (token === "true" || token === "false") color = syntax.boolean;
		else if (token === "null") color = syntax.null;
		else if (token[0] === "\"") {
			if (json.substring(pattern.lastIndex).trimStart()[0] === ":") color = syntax.key;
			else color = syntax.string;
		} else if (!isNaN(Number(token)) && token !== "") color = syntax.number;
		else if (/[{}[\]:,]/.test(token)) color = syntax.punctuation;
		const tokenContent = searchText ? highlightSearch(token, searchText) : token;
		tokens.push(color ? /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
			style: { color },
			children: tokenContent
		}, lastIndex) : tokenContent);
		lastIndex = pattern.lastIndex;
	}
	if (lastIndex < json.length) {
		const remaining = json.substring(lastIndex);
		tokens.push(searchText ? highlightSearch(remaining, searchText) : remaining);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(import_jsx_runtime$4.Fragment, { children: tokens });
}
var import_jsx_runtime$4;
function init_Highlight() {
	return (init_Highlight = __esmMin((() => {
		require_react();
		import_jsx_runtime$4 = require_jsx_runtime();
	})))();
}
// ../../tools/blong-log/src/client/CapturePanel.tsx
/**
* The panel's header: what the row does not already say.
*
* The identifier is the `Signal` column and the message is the declaration's sentence, so repeating
* either here — or the shape, which is the identifier's own name — would be the row saying one thing
* three times. What is left is what only the capture knows: the rung it was kept at, which half of an
* exchange it is, how large it was, and the labels the shape put on it.
*/
function CaptureHeader({ capture, isDark }) {
	const facts = [
		capture.rung === void 0 ? void 0 : `rung ${capture.rung}`,
		typeof capture.fields["direction"] === "string" ? String(capture.fields["direction"]) : void 0,
		capture.bytes === void 0 ? void 0 : `${capture.bytes} B`,
		typeof capture.fields["method"] === "string" ? String(capture.fields["method"]) : void 0,
		typeof capture.fields["label"] === "string" ? String(capture.fields["label"]) : void 0
	].filter((fact) => fact !== void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
		style: {
			display: "flex",
			flexWrap: "wrap",
			gap: "6px",
			alignItems: "center",
			marginBottom: "6px"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
			title: `${capture.signal} captured as ${capture.shape}`,
			style: {
				fontSize: "10px",
				padding: "1px 6px",
				borderRadius: "3px",
				fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
				background: isDark ? "#1f6feb" : "#ddf4ff",
				color: isDark ? "#c9d1d9" : "#0969da"
			},
			children: capture.shape
		}), facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
			style: {
				fontSize: "10px",
				padding: "1px 6px",
				borderRadius: "3px",
				background: isDark ? "#21262d" : "#eef2f6",
				color: isDark ? "#c9d1d9" : "#24292f",
				fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
			},
			children: fact
		}, fact))]
	});
}
/** A header/value table, which is how a reader scans an exchange's headers. */
function HeaderTable({ headers, isDark }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
		style: {
			fontSize: "10px",
			fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
		},
		children: Object.entries(headers).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("span", {
				style: { color: isDark ? "#79c0ff" : "#0969da" },
				children: [key, ":"]
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
				style: { color: isDark ? "#c9d1d9" : "#24292f" },
				children: String(value)
			})
		] }, key))
	});
}
/**
* A frame as a hex editor draws it: the offset, sixteen bytes, then what they read as.
*
* The ASCII is computed from the payload rather than taken from the record: the shape writes it only
* for the first bytes at the `hex` rung, and the bytes it does write are the whole frame, so deriving
* it here is both complete and free. Bytes the masker withheld arrive as `00`, which reads as `.` and
* is the honest picture — the value is gone, not hidden.
*/
function FrameDump({ payload, isDark }) {
	const rows = hexDump(payload);
	if (rows.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
		style: {
			fontSize: "10px",
			fontStyle: "italic",
			color: isDark ? "#8b949e" : "#57606a"
		},
		children: "the payload is not a hex dump"
	});
	const mono = {
		fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
		fontSize: "10px",
		lineHeight: "14px",
		whiteSpace: "pre"
	};
	const cells = (row) => row.map((cell, index) => index === 8 ? ` ${cell}` : cell).join(" ");
	const width = cells(Array.from({ length: 16 }, () => "00")).length;
	const header = cells(Array.from({ length: 16 }, (_, index) => index.toString(16).padStart(2, "0")));
	const grid = {
		display: "grid",
		gridTemplateColumns: `5ch ${width}ch auto`,
		columnGap: "12px",
		alignItems: "baseline"
	};
	const asciiColumn = {
		borderLeft: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`,
		paddingLeft: "12px"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
		style: {
			display: "inline-block",
			width: "max-content",
			maxWidth: "100%",
			overflowX: "auto",
			padding: "6px 8px",
			borderRadius: "4px",
			background: isDark ? "#0d1117" : "#ffffff",
			border: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
			style: {
				...mono,
				...grid,
				color: isDark ? "#8b949e" : "#57606a",
				borderBottom: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`,
				paddingBottom: "2px"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", { children: "Offset" }),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", { children: header }),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
					style: asciiColumn,
					children: "ASCII"
				})
			]
		}), rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
			style: {
				...mono,
				...grid
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
					style: { color: isDark ? "#6e7681" : "#8c959f" },
					children: row.offset
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
					style: { color: isDark ? "#ffa657" : "#953800" },
					children: cells(row.hex).padEnd(width)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
					style: {
						...asciiColumn,
						color: isDark ? "#7ee787" : "#116329"
					},
					children: row.ascii
				})
			]
		}, row.offset))]
	});
}
/**
* A payload that is a JSON document where it can be, and its text where it cannot.
*
* A document is drawn with the same highlighter the record cells use, so a captured body and a record's
* fields read the same way; a body that is not JSON — a form post, a protocol frame, a sentence — is
* shown as it arrived (`@@D-926`).
*/
function PayloadText({ text, theme }) {
	const isDark = theme.mode !== "light";
	let document;
	try {
		document = JSON.stringify(JSON.parse(text), null, 2);
	} catch {}
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("pre", {
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
		},
		children: document === void 0 ? text : /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(SyntaxHighlight, {
			json: document,
			theme
		})
	});
}
/** The keys a document was captured with, before any of its content. */
function KeyList({ keys, isDark }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
		style: {
			display: "flex",
			flexWrap: "wrap",
			gap: "4px",
			marginBottom: "6px"
		},
		children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
			style: {
				fontSize: "10px",
				padding: "1px 6px",
				borderRadius: "3px",
				background: isDark ? "#21262d" : "#eef2f6",
				color: isDark ? "#79c0ff" : "#0969da",
				fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
			},
			children: key
		}, key))
	});
}
/**
* The capture a record carries, drawn by shape.
*
* An unknown shape — a realm's own renderer, a shape shipped after this viewer — falls back to the
* payload as text rather than to nothing: the identifier and the rung are still worth reading, and a
* viewer that refused what it does not recognise would hide the very captures an operator added it for.
*/
function CapturePanel({ record, theme }) {
	const capture = captureOf(record);
	if (capture === void 0) return null;
	const isDark = theme.mode !== "light";
	const headers = capture.fields["headers"];
	const keys = capture.fields["keys"];
	const statusCode = typeof capture.fields["statusCode"] === "number" ? capture.fields["statusCode"] : void 0;
	const url = typeof capture.fields["url"] === "string" ? capture.fields["url"] : void 0;
	const phase = typeof capture.fields["phase"] === "string" ? capture.fields["phase"] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
		"data-capture": capture.shape,
		style: {
			marginTop: "4px",
			padding: "6px 8px",
			borderRadius: "4px",
			borderLeft: `3px solid ${isDark ? "#1f6feb" : "#0969da"}`,
			background: isDark ? "#161b22" : "#f6f8fa"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(CaptureHeader, {
				capture,
				isDark
			}),
			url !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
				style: {
					fontSize: "11px",
					fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
					marginBottom: "6px"
				},
				children: [
					statusCode !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
						style: {
							color: statusCode < 400 ? "#22c55e" : "#ef4444",
							marginRight: "6px"
						},
						children: statusCode
					}),
					phase === void 0 ? "" : `${phase} `,
					url
				]
			}),
			keys !== void 0 && Array.isArray(keys) && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(KeyList, {
				keys: keys.map(String),
				isDark
			}),
			headers !== void 0 && typeof headers === "object" && headers !== null && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(HeaderTable, {
				headers,
				isDark
			}),
			capture.shape === "tcp.frame" && capture.payload !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(FrameDump, {
				payload: capture.payload,
				isDark
			}),
			capture.shape !== "tcp.frame" && capture.payload !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(PayloadText, {
				text: capture.payload,
				theme
			}),
			capture.payload === void 0 && capture.rung === "line" && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
				style: {
					fontSize: "10px",
					fontStyle: "italic",
					color: isDark ? "#8b949e" : "#57606a"
				},
				children: "captured at the line rung — raise it in the configuration to keep the payload"
			})
		]
	});
}
var import_jsx_runtime$3;
function init_CapturePanel() {
	return (init_CapturePanel = __esmMin((() => {
		require_react();
		init_record();
		init_Highlight();
		import_jsx_runtime$3 = require_jsx_runtime();
	})))();
}
// ../../tools/blong-log/src/client/RecordPanels.tsx
/** A fact drawn as a small rounded label; `onClick` makes it a filter. */
function Chip({ label, title, tone, isDark, onClick }) {
	const tone_ = {
		intent: {
			dark: "#8957e5",
			light: "#e6dcff",
			inkDark: "#e6dcff",
			inkLight: "#5a32a3"
		},
		flow: {
			dark: "#1f6feb",
			light: "#ddf4ff",
			inkDark: "#c9d1d9",
			inkLight: "#0969da"
		},
		parent: {
			dark: "#30363d",
			light: "#eef2f6",
			inkDark: "#c9d1d9",
			inkLight: "#24292f"
		},
		decision: {
			dark: "#9e6a03",
			light: "#fff4d6",
			inkDark: "#ffd33d",
			inkLight: "#7d4e00"
		}
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
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
		},
		children: label
	});
}
/** The flow facts worth a chip: the process and step, the call and its ends, how the run stood. */
function flowChips(flow) {
	const chips = [];
	const process = [flow.kind, flow.step].filter((part) => part !== void 0);
	if (process.length > 0) chips.push({
		label: process.join(" · "),
		title: "the flow and the step this record is in"
	});
	if (flow.leg !== void 0) {
		const ends = flow.from === void 0 && flow.to === void 0 ? flow.leg : `${flow.from ?? "?"} → ${flow.to ?? "?"}`;
		const seq = flow.seq === void 0 ? "" : ` · ${flow.seq}`;
		chips.push({
			label: `${ends}${seq}`,
			title: "the call this record is one end of, and its position in the execution"
		});
	}
	if (flow.status !== void 0) chips.push({
		label: flow.status,
		title: "how the run stood here"
	});
	return chips;
}
function intentChip(intent) {
	const who = [intent.actor, intent.tenant].filter((part) => !!part).join("@");
	const priority = intent.priority === void 0 ? "" : ` · p${intent.priority}`;
	return {
		label: `${intent.name}${who === "" ? "" : ` (${who})`}${priority}`,
		title: "who asked for this work"
	};
}
/**
* The facts a row carries beside its sentence, as one line of chips.
*
* Every chip that names an identifier is a **filter**: clicking the flow id asks the table for the rest
* of that run, clicking the parent asks it for the record that caused this one. That is what turns the
* line into a place to start reading from rather than a datum to copy out.
*/
function RecordContextStrip({ record, theme, onFilter }) {
	const isDark = theme.mode !== "light";
	const intent = intentOf(record);
	const flow = flowOf(record);
	const decision = decisionOf(record);
	const parent = parentOf(record);
	const chips = [];
	if (intent !== void 0) {
		const { label, title } = intentChip(intent);
		chips.push(/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Chip, {
			label,
			title,
			tone: "intent",
			isDark,
			onClick: () => onFilter(intent.name)
		}, "intent"));
	}
	if (flow !== void 0) {
		for (const { label, title } of flowChips(flow)) chips.push(/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Chip, {
			label,
			title,
			tone: "flow",
			isDark,
			onClick: () => onFilter(flow.id)
		}, `flow-${label}`));
		chips.push(/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Chip, {
			label: `run ${flow.id.slice(0, 8)}…`,
			title: `show every record of run ${flow.id}`,
			tone: "flow",
			isDark,
			onClick: () => onFilter(flow.id)
		}, "flow-run"));
	}
	if (decision !== void 0) chips.push(/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Chip, {
		label: `⚖ ${decision.discriminator}${decision.chosen === void 0 ? "" : ` → ${decision.chosen}`}`,
		title: "the branch this record explains",
		tone: "decision",
		isDark,
		onClick: () => onFilter(decision.discriminator)
	}, "decision"));
	if (parent !== void 0) chips.push(/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Chip, {
		label: `⤴ ${parent.slice(0, 8)}…`,
		title: `show the record that caused this one (${parent})`,
		tone: "parent",
		isDark,
		onClick: () => onFilter(parent)
	}, "parent"));
	if (chips.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
		style: {
			display: "flex",
			flexWrap: "wrap",
			gap: "4px",
			alignItems: "center",
			marginBottom: "4px"
		},
		children: chips
	});
}
/**
* The decision a record reports: what the branch was about, what it chose between, and what it chose.
*
* The candidates are listed **in evaluation order** and the chosen one is marked, because the order is
* the rule: a reader checking "why this branch" is reading the precedence, and a list sorted for looks
* would answer a different question. The values are often absent — they are retained locally rather than
* transmitted — which the panel says instead of drawing an empty block.
*/
function DecisionPanel({ decision, theme }) {
	const isDark = theme.mode !== "light";
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
		"data-decision": decision.discriminator,
		style: {
			marginTop: "4px",
			padding: "4px 8px",
			borderRadius: "4px",
			borderLeft: `3px solid ${isDark ? "#9e6a03" : "#bf8700"}`,
			background: isDark ? "#161b22" : "#fffbef",
			fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
			fontSize: "10px",
			lineHeight: "15px"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
				style: { marginBottom: "2px" },
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
					style: { color: isDark ? "#ffd33d" : "#7d4e00" },
					children: decision.discriminator
				})
			}),
			decision.candidates.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
				style: {
					fontStyle: "italic",
					color: isDark ? "#8b949e" : "#57606a"
				},
				children: "the branch reported no candidates"
			}) : /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", { children: decision.candidates.map((candidate) => {
				const chosen = candidate === decision.chosen;
				return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
					style: {
						color: chosen ? isDark ? "#7ee787" : "#116329" : isDark ? "#8b949e" : "#57606a",
						fontWeight: chosen ? "bold" : "normal"
					},
					children: [chosen ? "✓ " : "· ", candidate]
				}, candidate);
			}) }),
			decision.values !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
				style: { marginTop: "2px" },
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SyntaxHighlight, {
					json: JSON.stringify(decision.values, null, 2),
					theme
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
				style: {
					fontStyle: "italic",
					color: isDark ? "#8b949e" : "#57606a"
				},
				children: "the values it was decided from stayed in the process that decided"
			})
		]
	});
}
/**
* The HTTP exchange a record reports, as the two blocks it always was.
*
* A request block and a response block, each with its own tint and a bar down the left: the request's is
* blue, the response's follows its status. The status and the time it took head the response block
* (`200 (45ms)`), which is where a reader looks for them, and the bodies are labelled because a block
* with two payloads and no words is a guess.
*
* What changed is only **how they are read**: the panel used to take `method`/`url` and
* `statusCode`/`responseTime`, so a lukaot record — `operation`/`target`, `status`/`elapsedMs` — drew an
* empty request line and no status at all. `exchangeOf` reads both spellings; the picture is the one
* that was already good (`@@D-926`).
*/
function ExchangePanel({ exchange, theme, searchText = "" }) {
	const isDark = theme.mode !== "light";
	const status = exchange.status;
	const statusColour = (status ?? 200) < 400 ? "#22c55e" : "#ef4444";
	const headers = (bag, colour) => bag === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
		style: {
			fontSize: "10px",
			marginTop: "4px"
		},
		children: Object.entries(bag).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
				style: { color: colour },
				children: key + ":"
			}),
			" ",
			highlightSearch(String(value), searchText)
		] }, key))
	});
	const body = (value, label, colour, tint) => value === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
		style: {
			marginTop: "6px",
			fontSize: "10px",
			lineHeight: "15px",
			background: isDark ? "#161b22" : tint,
			padding: "6px",
			borderRadius: "3px",
			fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
			style: {
				color: colour,
				marginBottom: "3px"
			},
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
			style: { whiteSpace: "pre-wrap" },
			children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SyntaxHighlight, {
				json: typeof value === "string" ? value : JSON.stringify(value, null, 2),
				theme,
				searchText
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
		"data-exchange": "",
		children: [exchange.request !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
			style: {
				marginTop: "4px",
				padding: "6px 8px",
				background: isDark ? "#1c2128" : "#f0f6ff",
				borderLeft: "3px solid #1f6feb",
				borderRadius: "4px"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
					style: {
						fontWeight: "bold",
						marginBottom: "4px",
						fontSize: "11px"
					},
					children: highlightSearch(exchange.request, searchText)
				}),
				headers(exchange.requestHeaders, isDark ? "#79c0ff" : "#0969da"),
				body(exchange.requestBody, "Request Body:", isDark ? "#79c0ff" : "#0969da", "#e8f0ff")
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
			style: {
				marginTop: "4px",
				padding: "6px 8px",
				background: isDark ? "#1c2128" : "#f0fff4",
				borderLeft: `3px solid ${statusColour}`,
				borderRadius: "4px"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
					style: {
						fontWeight: "bold",
						fontSize: "11px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
						style: { color: statusColour },
						children: status ?? 200
					}), exchange.elapsedMs === void 0 ? "" : ` (${exchange.elapsedMs}ms)`]
				}),
				headers(exchange.responseHeaders, statusColour),
				body(exchange.responseBody, "Response Body:", statusColour, "#e8fff0")
			]
		})]
	});
}
var import_jsx_runtime$2;
function init_RecordPanels() {
	return (init_RecordPanels = __esmMin((() => {
		require_react();
		init_record();
		init_Highlight();
		import_jsx_runtime$2 = require_jsx_runtime();
	})))();
}
// ../../tools/blong-log/src/client/LogViewer.tsx
/** The lines a payload occupies once it is drawn: pretty-printed when it is a document. */
function payloadLines(payload) {
	try {
		return JSON.stringify(JSON.parse(payload), null, 2).split("\n").length;
	} catch {
		return monospaceLines(payload);
	}
}
/**
* The height the detail of an expanded row needs, in pixels, before it starts to scroll.
*
* Estimated from what will be drawn, from the record alone — never by measuring: a frame is 14px a row
* plus its header and the facts above it, a document is 15px a pretty-printed line, a capture that kept
* no payload is a single line, and a plain message is its sentence plus whatever block the record
* carried beside it. The numbers were calibrated against the rendered stories, so a row is neither a
* band of empty space nor a box that clips the thing it was opened to show (`@@F-774`).
*/
function detailHeightOf(row, part) {
	if (part === "json") return clamp(JSON.stringify(row, null, 2).split("\n").length * 15 + 20, DETAIL_MIN, DETAIL_MAX);
	const capture = captureOf(row);
	if (capture !== void 0) {
		const headers = capture.fields["headers"];
		const headerRows = headers !== null && typeof headers === "object" ? Object.keys(headers).length : 0;
		const requestLine = capture.fields["url"] === void 0 ? 0 : 20;
		if (capture.shape === "tcp.frame" && capture.payload !== void 0) {
			const bytes = bytesOfHex(capture.payload)?.length ?? 0;
			return clamp(Math.ceil(bytes / 16) * 14 + 82 + headerRows * 15, DETAIL_MIN, DETAIL_MAX);
		}
		if (capture.payload !== void 0) return clamp(payloadLines(capture.payload) * 15 + 70 + requestLine + headerRows * 15, DETAIL_MIN, DETAIL_MAX);
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
/** The height a row is drawn at: the detail it shows, or one line when it is closed. */
function rowHeightOf(row, expanded) {
	const json = expanded.json.has(row.id);
	const message = expanded.message.has(row.id);
	if (!json && !message) return SINGLE_ROW_HEIGHT;
	const detail = Math.max(json ? detailHeightOf(row, "json") : 0, message ? detailHeightOf(row, "message") : 0);
	return Math.min(detail, DETAIL_MAX) + CELL_CHROME;
}
/** Whether this row's message is expanded, and the toggle for it. */
function useMessageExpanded(rowId) {
	const { onToggleExpanded } = (0, import_react$1.use)(ViewerContext);
	return {
		isExpanded: import_react$1.use(ExpandedRowsContext)?.message.has(rowId) ?? false,
		toggle: (0, import_react$1.useCallback)(() => onToggleExpanded(rowId, "message"), [onToggleExpanded, rowId])
	};
}
/** Whether this row's JSON is expanded, and the toggle for it. */
function useJsonExpanded(rowId) {
	const { onToggleExpanded } = (0, import_react$1.use)(ViewerContext);
	return {
		isExpanded: import_react$1.use(ExpandedRowsContext)?.json.has(rowId) ?? false,
		toggle: (0, import_react$1.useCallback)(() => onToggleExpanded(rowId, "json"), [onToggleExpanded, rowId])
	};
}
function formatTimestamp(time) {
	if (!time) return "";
	const timeMs = time < 1e10 ? time * 1e3 : time;
	const d = new Date(timeMs);
	return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}.${String(d.getMilliseconds()).padStart(3, "0")}`;
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
	const [copied, setCopied] = (0, import_react$1.useState)(false);
	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		navigator.clipboard.writeText(text).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		}, (err) => {
			console.error("Failed to copy:", err);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("button", {
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
		title: copied ? "Copied!" : "Copy to clipboard",
		children: copied ? "✓" : "📋"
	});
}
function LevelCell({ row }) {
	const { theme } = (0, import_react$1.use)(ViewerContext);
	const [isHovered, setIsHovered] = (0, import_react$1.useState)(false);
	const name = row.levelName ?? LEVEL_NAME[row.level ?? 30] ?? "unknown";
	const color = (theme.levels ?? {})[name] ?? "#6b7280";
	const isDark = theme.mode === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
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
		onMouseLeave: () => setIsHovered(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
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
			},
			children: name
		}), isHovered && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
			style: {
				position: "absolute",
				right: "4px",
				top: "50%",
				transform: "translateY(-50%)",
				pointerEvents: "auto"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(CopyButton, {
				text: name,
				isDark
			})
		})]
	});
}
function NameCell({ row }) {
	const { searchText, theme } = (0, import_react$1.use)(ViewerContext);
	const [isHovered, setIsHovered] = (0, import_react$1.useState)(false);
	const isDark = theme.mode === "dark";
	const service = serviceOf(row);
	const context = contextOf(row);
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
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
		title: context === void 0 ? service ?? "" : `${service ?? ""} · ${context}`,
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("span", {
			style: {
				flex: 1,
				overflow: "hidden",
				textOverflow: "ellipsis",
				display: "flex",
				gap: "6px"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", { children: highlightSearch(service ?? "", searchText) }), context !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
				style: {
					color: isDark ? "#8b949e" : "#57606a",
					fontSize: "11px",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				children: highlightSearch(context, searchText)
			})]
		}), isHovered && service && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
			style: {
				position: "absolute",
				right: "4px",
				top: "50%",
				transform: "translateY(-50%)",
				pointerEvents: "auto"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(CopyButton, {
				text: service,
				isDark
			})
		})]
	});
}
function TraceLinkCell({ row }) {
	const { clientConfig, onTraceFilter, theme } = (0, import_react$1.use)(ViewerContext);
	const [isHovered, setIsHovered] = (0, import_react$1.useState)(false);
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
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		style: {
			display: "flex",
			alignItems: "center",
			gap: "4px",
			minHeight: "18px",
			position: "relative"
		},
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		children: [
			clientConfig?.traceUrlPattern && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
				style: {
					cursor: "pointer",
					color: "#58a6ff",
					fontSize: "14px",
					lineHeight: "1"
				},
				onClick: handleExternalLink,
				title: "Open trace in external viewer",
				children: "↗"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
				style: {
					cursor: "pointer",
					color: "#58a6ff",
					textDecoration: "underline",
					fontSize: "12px"
				},
				onClick: handleFilterClick,
				title: "Click to filter by this trace ID",
				children: trace.substring(0, 16) + "…"
			}),
			isHovered && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
				style: {
					position: "absolute",
					right: "4px",
					top: "50%",
					transform: "translateY(-50%)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(CopyButton, {
					text: trace,
					isDark
				})
			})
		]
	});
}
/**
* The declared identifier, which is the line's identity since the conversion.
*
* A level says how loud a line is; an identifier says what happened, and it is what an operator filters
* by, raises or silences. A capture's identifier is the same token, so the cell marks the ones that
* carry a payload — that is what the expanded row will draw (`@@D-926`).
*/
function SignalCell({ row }) {
	const { theme, searchText } = (0, import_react$1.use)(ViewerContext);
	const isDark = isDarkMode(theme);
	const signal = signalOf(row);
	const capture = captureOf(row);
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		style: {
			display: "flex",
			alignItems: "center",
			gap: "4px",
			minHeight: "18px",
			overflow: "hidden",
			fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
			fontSize: "11px"
		},
		title: capture === void 0 ? signal ?? "" : `${signal ?? ""} · ${capture.shape}`,
		children: [capture !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
			style: {
				flexShrink: 0,
				padding: "0 4px",
				borderRadius: "3px",
				background: isDark ? "rgba(56, 139, 253, 0.25)" : "#ddf4ff",
				color: isDark ? "#79c0ff" : "#0969da"
			},
			children: "⌗"
		}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
			style: {
				overflow: "hidden",
				textOverflow: "ellipsis",
				color: signal === void 0 ? isDark ? "#6e7681" : "#8c959f" : void 0
			},
			children: highlightSearch(signal ?? "—", searchText)
		})]
	});
}
function MessageCell({ row }) {
	const { searchText, theme, onFilterText } = (0, import_react$1.use)(ViewerContext);
	const { isExpanded, toggle } = useMessageExpanded(row.id);
	const [isHovered, setIsHovered] = (0, import_react$1.useState)(false);
	const isDark = isDarkMode(theme);
	const capture = captureOf(row);
	const decision = decisionOf(row);
	const exchange = exchangeOf(row);
	const handleClick = (0, import_react$1.useCallback)((e) => {
		if (e.target.closest("[data-copy-button]")) return;
		toggle();
	}, [toggle]);
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
		overflow: "auto"
	};
	/**
	* `pre-wrap` belongs on the text, not on the cell that holds it.
	*
	* On the cell it made every newline and every indent between the elements of this JSX a rendered
	* line, so an expanded record began with a band of blank space above its first panel — the space a
	* `white-space` rule reserves for whitespace that a layout would otherwise collapse.
	*/
	const textStyle = { whiteSpace: "pre-wrap" };
	const getFullText = () => {
		let text = row.msg ?? "";
		if (row.err) {
			text += `\n\n[${row.err.type ?? "Error"}: ${row.err.message ?? "No message"}]`;
			if (row.err.stack) text += `\n${row.err.stack}`;
		}
		if (row.req) {
			text += `\n\n=== HTTP Request ===\n${row.req.method ?? "GET"} ${row.req.url ?? ""}`;
			if (row.req.headers) {
				text += "\n\nHeaders:";
				Object.entries(row.req.headers).forEach(([key, value]) => {
					text += `\n${key}: ${value}`;
				});
			}
			if (row.req.body) text += `\n\nRequest Body:\n${JSON.stringify(row.req.body, null, 2)}`;
		}
		if (row.res) {
			text += `\n\n=== HTTP Response ===\nStatus: ${row.res.statusCode ?? 200}`;
			if (row.res.responseTime) text += ` (${row.res.responseTime}ms)`;
			if (row.res.headers) {
				text += "\n\nHeaders:";
				Object.entries(row.res.headers).forEach(([key, value]) => {
					text += `\n${key}: ${value}`;
				});
			}
			if (row.res.body) text += `\n\nResponse Body:\n${JSON.stringify(row.res.body, null, 2)}`;
		}
		return text;
	};
	const messageContent = highlightSearch(row.msg ?? "", searchText);
	if (!isExpanded) return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		style: {
			...singleLineStyle,
			position: "relative",
			cursor: "pointer"
		},
		title: row.msg ?? "",
		onClick: handleClick,
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("span", {
			style: {
				overflow: "hidden",
				textOverflow: "ellipsis",
				paddingRight: isHovered ? "36px" : "0"
			},
			children: [messageContent, row.err && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
				style: {
					color: theme.levels?.error ?? "#ef4444",
					marginLeft: "8px"
				},
				children: highlightSearch(` [${row.err.type ?? "Error"}: ${row.err.message ?? ""}]`, searchText)
			})]
		}), isHovered && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
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
			onDoubleClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(CopyButton, {
				text: getFullText(),
				isDark
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		style: {
			...multiLineStyle,
			position: "relative",
			cursor: "pointer"
		},
		onClick: handleClick,
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		children: [
			" ",
			isHovered && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
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
				onDoubleClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(CopyButton, {
					text: getFullText(),
					isDark
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
				style: {
					...EXPANDED_DETAIL_STYLE,
					maxHeight: `${detailHeightOf(row, "message")}px`
				},
				children: [
					capture === void 0 && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
						style: {
							...textStyle,
							marginBottom: "4px"
						},
						children: messageContent
					}),
					row.err && /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
						style: {
							marginBottom: "8px",
							padding: "8px",
							background: isDarkMode(theme) ? "#1c2128" : "#fff8e6",
							borderLeft: `3px solid ${theme.levels?.error ?? "#ef4444"}`,
							borderRadius: "4px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
							style: {
								color: theme.levels?.error ?? "#ef4444",
								fontWeight: "bold",
								marginBottom: "4px"
							},
							children: highlightSearch(`${row.err.type ?? "Error"}: ${row.err.message ?? "No message"}`, searchText)
						}), row.err.stack && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
							style: {
								fontSize: "11px",
								fontFamily: "monospace",
								whiteSpace: "pre"
							},
							children: highlightSearch(row.err.stack, searchText)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(RecordContextStrip, {
						record: row,
						theme,
						onFilter: onFilterText
					}),
					exchange !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ExchangePanel, {
						exchange,
						theme,
						searchText
					}),
					decision !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DecisionPanel, {
						decision,
						theme
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(CapturePanel, {
						record: row,
						theme
					}),
					paramsOf(row) !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
						style: {
							marginTop: "4px",
							padding: "6px 8px",
							borderRadius: "4px",
							borderLeft: `3px solid ${isDarkMode(theme) ? "#6e7681" : "#8c959f"}`,
							background: isDarkMode(theme) ? "#161b22" : "#f6f8fa",
							fontSize: "10px",
							fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
							style: {
								marginBottom: "4px",
								fontWeight: "bold"
							},
							children: [operationOf(row), messageIdOf(row)].filter((fact) => fact !== void 0).join(" · ")
						}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
							style: textStyle,
							children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SyntaxHighlight, {
								json: JSON.stringify(paramsOf(row), null, 2),
								theme,
								searchText
							})
						})]
					})
				]
			})
		]
	});
}
function isDarkMode(theme) {
	return theme.mode === "dark";
}
function JSONCell({ row }) {
	const { theme, searchText } = (0, import_react$1.use)(ViewerContext);
	const { isExpanded, toggle } = useJsonExpanded(row.id);
	const [isHovered, setIsHovered] = (0, import_react$1.useState)(false);
	const isDark = isDarkMode(theme);
	const handleClick = (0, import_react$1.useCallback)((e) => {
		if (e.target.closest("[data-copy-button]")) return;
		toggle();
	}, [toggle]);
	const jsonString = JSON.stringify(row, null, 2);
	if (!isExpanded) return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
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
		onMouseLeave: () => setIsHovered(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
			style: {
				overflow: "hidden",
				textOverflow: "ellipsis",
				paddingRight: isHovered ? "36px" : "0"
			},
			children: JSON.stringify(row)
		}), isHovered && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
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
			onDoubleClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(CopyButton, {
				text: jsonString,
				isDark
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
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
		onMouseLeave: () => setIsHovered(false),
		children: [isHovered && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
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
			onDoubleClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(CopyButton, {
				text: jsonString,
				isDark
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SyntaxHighlight, {
			json: jsonString,
			theme,
			searchText
		})]
	});
}
function LogViewer({ config: configProp, source, theme: themeProp, initialSearchText = "", initialExpandedRows, initialExpandedJsonRows }) {
	const [entries, setEntries] = (0, import_react$1.useState)([]);
	const [clientConfig, setClientConfig] = (0, import_react$1.useState)(null);
	const [connected, setConnected] = (0, import_react$1.useState)(false);
	const [filters, setFilters] = (0, import_react$1.useState)({});
	const [searchText, setSearchText] = (0, import_react$1.useState)(initialSearchText);
	const [expandedRows, setExpandedRows] = (0, import_react$1.useState)(() => ({
		message: initialExpandedRows ?? /* @__PURE__ */ new Set(),
		json: initialExpandedJsonRows ?? /* @__PURE__ */ new Set()
	}));
	const [autoScroll, setAutoScroll] = (0, import_react$1.useState)(false);
	const [timeMode, setTimeMode] = (0, import_react$1.useState)("absolute");
	const wsRef = (0, import_react$1.useRef)(null);
	const gridApiRef = (0, import_react$1.useRef)(null);
	const lastIdRef = (0, import_react$1.useRef)("");
	const entriesRef = (0, import_react$1.useRef)([]);
	const filtersRef = (0, import_react$1.useRef)({});
	const uniqueServiceNames = (0, import_react$1.useMemo)(() => {
		const names = /* @__PURE__ */ new Set();
		entries.forEach((e) => {
			const context = contextOf(e);
			const service = serviceOf(e);
			if (context !== void 0) names.add(context);
			else if (service !== void 0) names.add(service);
		});
		return Array.from(names).sort();
	}, [entries]);
	const uniqueSignals = (0, import_react$1.useMemo)(() => {
		const signals = /* @__PURE__ */ new Set();
		for (const entry of entries) {
			const signal = signalOf(entry);
			if (signal !== void 0) signals.add(signal);
		}
		return Array.from(signals).sort();
	}, [entries]);
	const uniqueShapes = (0, import_react$1.useMemo)(() => {
		const shapes = /* @__PURE__ */ new Set();
		for (const entry of entries) {
			const capture = captureOf(entry);
			if (capture !== void 0) shapes.add(capture.shape);
		}
		return Array.from(shapes).sort();
	}, [entries]);
	const theme = (0, import_react$1.useMemo)(() => ({
		...clientConfig?.theme ?? {},
		...themeProp
	}), [clientConfig?.theme, themeProp]);
	const isDark = theme.mode === "dark";
	entriesRef.current = entries;
	filtersRef.current = filters;
	(0, import_react$1.useEffect)(() => {
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
		fetch(typeof configProp === "string" ? configProp : "/api/config").then((r) => r.json()).then(setClientConfig).catch((err) => console.error("[blong-log] Failed to load config:", err));
	}, [configProp, source]);
	(0, import_react$1.useEffect)(() => {
		if (!source) return;
		let cancelled = false;
		let timer;
		const abort = new AbortController();
		const loadOnce = async () => {
			try {
				const answer = await source.load({ ...lastIdRef.current ? { after: lastIdRef.current } : { limit: 200 } });
				if (cancelled) return;
				setConnected(true);
				if (answer.entries.length > 0) setEntries((prev) => {
					const seen = new Set(prev.map((entry) => entry.id));
					const added = answer.entries.filter((entry) => !seen.has(entry.id));
					if (added.length === 0) return prev;
					const next = [...prev, ...added];
					next.sort((a, b) => a.id.localeCompare(b.id));
					lastIdRef.current = next[next.length - 1].id;
					return next.length > 1e4 ? next.slice(-5e3) : next;
				});
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
			if (source.subscribe) watch();
			else if (!cancelled) timer = setTimeout(watch, source.intervalMs ?? 1e3);
		};
		start();
		return () => {
			cancelled = true;
			abort.abort();
			if (timer) clearTimeout(timer);
		};
	}, [source]);
	(0, import_react$1.useEffect)(() => {
		if (!clientConfig || source) return;
		const wsUrl = clientConfig.wsUrl;
		let ws;
		let reconnectTimer;
		function connect() {
			ws = new WebSocket(wsUrl);
			ws.onopen = () => {
				setConnected(true);
				const msg = {
					type: "subscribe",
					filters: filtersRef.current
				};
				ws.send(JSON.stringify(msg));
			};
			ws.onmessage = (event) => {
				try {
					const msg = JSON.parse(String(event.data));
					if (msg.type === "entries") setEntries((prev) => {
						const combined = [...prev, ...msg.entries];
						const seen = /* @__PURE__ */ new Set();
						const unique = combined.filter((e) => {
							if (seen.has(e.id)) return false;
							seen.add(e.id);
							return true;
						});
						unique.sort((a, b) => a.id.localeCompare(b.id));
						if (unique.length > 0) lastIdRef.current = unique[unique.length - 1].id;
						return unique;
					});
					else if (msg.type === "entry") setEntries((prev) => {
						const next = [...prev, msg.entry];
						lastIdRef.current = msg.entry.id;
						if (next.length > 1e4) return next.slice(-5e3);
						return next;
					});
				} catch {}
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
	(0, import_react$1.useEffect)(() => {
		if (wsRef.current?.readyState === WebSocket.OPEN) {
			const msg = {
				type: "subscribe",
				filters
			};
			wsRef.current.send(JSON.stringify(msg));
		}
	}, [filters]);
	(0, import_react$1.useEffect)(() => {
		if (autoScroll && lastIdRef.current && gridApiRef.current) try {
			gridApiRef.current.exec("scroll", { row: lastIdRef.current });
		} catch {}
	}, [entries, autoScroll]);
	const handleLevelChange = (0, import_react$1.useCallback)((e) => {
		setFilters((f) => ({
			...f,
			level: e.target.value || void 0
		}));
	}, []);
	const handleNameChange = (0, import_react$1.useCallback)((e) => {
		setFilters((f) => ({
			...f,
			name: e.target.value || void 0
		}));
	}, []);
	const handleSignalChange = (0, import_react$1.useCallback)((e) => {
		setFilters((f) => ({
			...f,
			signal: e.target.value || void 0
		}));
	}, []);
	const handleCaptureChange = (0, import_react$1.useCallback)((e) => {
		setFilters((f) => ({
			...f,
			capture: e.target.value || void 0
		}));
	}, []);
	const handleHasErrorChange = (0, import_react$1.useCallback)((e) => {
		setFilters((f) => ({
			...f,
			hasError: e.target.checked || void 0
		}));
	}, []);
	const handleCustomPropertyChange = (0, import_react$1.useCallback)((propName, value) => {
		setFilters((f) => ({
			...f,
			properties: value ? {
				...f.properties ?? {},
				[propName]: value
			} : (() => {
				const { [propName]: _, ...rest } = f.properties ?? {};
				return Object.keys(rest).length > 0 ? rest : void 0;
			})()
		}));
	}, []);
	const handleTraceFilter = (0, import_react$1.useCallback)((traceId) => {
		setFilters((f) => f.traceId === traceId ? {
			...f,
			traceId: void 0
		} : {
			...f,
			traceId
		});
	}, []);
	const handleSearchChange = (0, import_react$1.useCallback)((e) => {
		setSearchText(e.target.value);
	}, []);
	const handleSearchSubmit = (0, import_react$1.useCallback)((e) => {
		if (e.key === "Enter") setFilters((f) => ({
			...f,
			search: searchText || void 0
		}));
	}, [searchText]);
	const clearFilters = (0, import_react$1.useCallback)(() => {
		setFilters({});
		setSearchText("");
	}, []);
	const displayEntries = (0, import_react$1.useMemo)(() => {
		let result = entries;
		if (filters.traceId) result = result.filter((e) => traceOf(e) === filters.traceId);
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
		if (filters.name) result = result.filter((e) => (contextOf(e) ?? serviceOf(e)) === filters.name);
		if (filters.signal) result = result.filter((e) => signalOf(e) === filters.signal);
		if (filters.capture) result = result.filter((e) => captureOf(e)?.shape === filters.capture);
		if (filters.hasError) result = result.filter((e) => e.err || (e.level ?? 0) >= 50);
		if (searchText) {
			const search = searchText.toLowerCase();
			result = result.filter((e) => JSON.stringify(e).toLowerCase().includes(search));
		}
		return result;
	}, [
		entries,
		searchText,
		filters
	]);
	/**
	* The rows the grid is given, each carrying the height it is drawn at.
	*
	* The grid reads a row's height off the row (`rowHeight`), not from a function: given a function it
	* falls back to one height for every row. And the height is decided from the expansion state alone —
	* never measured — so a row drawn again after being scrolled out of view keeps the height it had and
	* the table's scroll position does not move (`@@F-774`).
	*/
	const gridRows = (0, import_react$1.useMemo)(() => displayEntries.map((entry) => ({
		...entry,
		rowHeight: rowHeightOf(entry, expandedRows)
	})), [displayEntries, expandedRows]);
	const columns = (0, import_react$1.useMemo)(() => [
		{
			id: "time",
			header: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
				style: {
					cursor: "pointer",
					userSelect: "none"
				},
				onClick: () => setTimeMode((m) => m === "absolute" ? "relative" : "absolute"),
				title: "Click to toggle between absolute and relative time",
				children: timeMode === "absolute" ? "Time" : "Ago"
			}),
			width: timeMode === "absolute" ? 105 : 65,
			cell: ({ row }) => {
				const [isHovered, setIsHovered] = (0, import_react$1.useState)(false);
				const timeText = timeMode === "absolute" ? formatTimestamp(row.time) : timeAgo(row.time);
				const timeMs = row.time && row.time < 1e10 ? row.time * 1e3 : row.time;
				const fullTimeText = timeMs ? new Date(timeMs).toISOString() : "";
				return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
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
					onMouseLeave: () => setIsHovered(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
						style: { flexShrink: 0 },
						children: timeText
					}), isHovered && fullTimeText && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
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
						onDoubleClick: (e) => e.stopPropagation(),
						children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(CopyButton, {
							text: fullTimeText,
							isDark
						})
					})]
				});
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
	], [timeMode, isDark]);
	const initGrid = (0, import_react$1.useCallback)((api) => {
		gridApiRef.current = api;
	}, []);
	const rowStyle = (0, import_react$1.useCallback)((row) => {
		if (filters.traceId && traceOf(row) === filters.traceId) return "blong-log-trace-highlight";
		return "";
	}, [filters.traceId]);
	const handleFilterTrace = (0, import_react$1.useCallback)((ev) => {
		handleTraceFilter(ev.traceId);
	}, [handleTraceFilter]);
	const handleToggleExpanded = (0, import_react$1.useCallback)((rowId, part) => {
		setExpandedRows((prev) => {
			const next = new Set(prev[part]);
			if (next.has(rowId)) next.delete(rowId);
			else next.add(rowId);
			return {
				...prev,
				[part]: next
			};
		});
		setTimeout(() => {
			if (gridApiRef.current?.exec) gridApiRef.current.exec("resize");
		}, 0);
	}, []);
	/**
	* Space toggles the focused row's detail, the way it toggles a disclosure in a file tree.
	*
	* The **column under the focus** decides which detail: a space in the JSON column opens the record's
	* JSON, anywhere else opens its message. The grid keeps the focus and the selection itself, so the
	* handler reads both off the element the key event came from — the cell's `data-col-id` and the
	* row's `data-row-id`, written as CSS-safe values with a leading colon (`:json`, `:perf-101`) — and
	* falls back to the row the grid marked selected. A space typed into the toolbar's inputs is not
	* ours: those are outside the wrapper this listens on.
	*/
	const handleGridKeyDown = (0, import_react$1.useCallback)((e) => {
		if (e.key !== " ") return;
		const container = e.currentTarget;
		const cell = e.target.closest(".wx-cell");
		const row = cell?.closest(".wx-row[data-id]") ?? container.querySelector(".wx-row[data-id].wx-selected");
		const bare = (value) => value?.startsWith(":") ? value.slice(1) : value;
		const rowId = bare(row?.dataset["id"]);
		if (rowId === void 0) return;
		e.preventDefault();
		handleToggleExpanded(rowId, bare(cell?.dataset["colId"]) === "json" ? "json" : "message");
	}, [handleToggleExpanded]);
	const contextValue = (0, import_react$1.useMemo)(() => ({
		theme,
		searchText,
		clientConfig,
		onTraceFilter: handleTraceFilter,
		onToggleExpanded: handleToggleExpanded,
		onFilterText: setSearchText
	}), [
		theme,
		searchText,
		clientConfig,
		handleTraceFilter,
		handleToggleExpanded
	]);
	const toolbarStyle = {
		display: "flex",
		gap: "8px",
		padding: "8px 12px",
		borderBottom: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`,
		background: isDark ? "#161b22" : "#f6f8fa",
		alignItems: "center",
		flexWrap: "wrap",
		fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif"
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
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ViewerContext, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ExpandedRowsContext, {
			value: expandedRows,
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					height: "100%",
					background: isDark ? "#0d1117" : "#ffffff",
					color: isDark ? "#c9d1d9" : "#24292f"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("style", { children: [
						".blong-log-trace-highlight:not(.selected) .cell { background: " + (isDark ? "#1c2128" : "#ddf4ff") + " !important; }",
						".wx-theme { height: 100%; display: flex; flex-direction: column; }",
						".wx-grid { flex: 1; min-height: 0; }",
						".wx-row, .wx-header { line-height: 16px; }",
						".wx-row .wx-cell, .wx-header .wx-cell { padding-top: 4px; padding-bottom: 4px; }"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
						style: toolbarStyle,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("select", {
								style: selectStyle,
								value: filters.level ?? "",
								onChange: handleLevelChange,
								children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", {
									value: "",
									children: "All Levels"
								}), [
									"trace",
									"debug",
									"info",
									"warn",
									"error",
									"fatal"
								].map((l) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", {
									value: l,
									children: l.toUpperCase()
								}, l))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("input", {
								style: {
									...inputStyle,
									width: "160px"
								},
								placeholder: "Port or component...",
								value: filters.name ?? "",
								onChange: handleNameChange,
								list: "service-names-datalist"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("select", {
								style: selectStyle,
								value: filters.signal ?? "",
								onChange: handleSignalChange,
								title: "Filter by the declared signal identifier",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", {
									value: "",
									children: "All signals"
								}), uniqueSignals.map((signal) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", {
									value: signal,
									children: signal
								}, signal))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("select", {
								style: selectStyle,
								value: filters.capture ?? "",
								onChange: handleCaptureChange,
								title: "Filter by the capture shape",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", {
									value: "",
									children: "All shapes"
								}), uniqueShapes.map((shape) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", {
									value: shape,
									children: shape
								}, shape))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("datalist", {
								id: "service-names-datalist",
								children: uniqueServiceNames.map((name) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", { value: name }, name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("label", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "4px",
									padding: "4px 8px",
									fontSize: "12px",
									cursor: "pointer",
									userSelect: "none",
									color: isDark ? "#c9d1d9" : "#24292f"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("input", {
									type: "checkbox",
									checked: !!filters.hasError,
									onChange: handleHasErrorChange
								}), "Has Error"]
							}),
							clientConfig?.properties.custom?.filter((p) => p.filterable).map((prop) => prop.values ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("select", {
								style: selectStyle,
								value: filters.properties?.[prop.name] ?? "",
								onChange: (e) => handleCustomPropertyChange(prop.name, e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", {
									value: "",
									children: `All ${prop.label}`
								}), prop.values.map((val) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", {
									value: val,
									children: val
								}, val))]
							}, prop.name) : /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("input", {
								style: {
									...inputStyle,
									width: "140px"
								},
								placeholder: `${prop.label}...`,
								value: filters.properties?.[prop.name] ?? "",
								onChange: (e) => handleCustomPropertyChange(prop.name, e.target.value)
							}, prop.name)),
							filters.traceId && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
								style: {
									padding: "4px 8px",
									borderRadius: "3px",
									fontSize: "12px",
									background: "#1f6feb",
									color: "#fff",
									cursor: "pointer"
								},
								onClick: () => handleTraceFilter(filters.traceId),
								title: "Click to remove trace filter",
								children: "Trace: " + filters.traceId.substring(0, 12) + "… ×"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("input", {
								style: {
									...inputStyle,
									flex: 1,
									minWidth: "200px"
								},
								placeholder: "Search logs... (Enter to apply)",
								value: searchText,
								onChange: handleSearchChange,
								onKeyDown: handleSearchSubmit
							}),
							hasFilters && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("button", {
								style: {
									...inputStyle,
									cursor: "pointer",
									border: "1px solid #da3633",
									color: "#da3633"
								},
								onClick: clearFilters,
								children: "Clear"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
						style: {
							flex: 1,
							overflow: "hidden"
						},
						onKeyDown: handleGridKeyDown,
						children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ThemeWrapper, {
							fonts: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ao, {
								data: gridRows,
								columns,
								select: true,
								rowStyle,
								rowHeight: SINGLE_ROW_HEIGHT,
								_rowHeightFromData: true,
								init: initGrid,
								onFilterTrace: handleFilterTrace
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
						style: statusBarStyle,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", { style: {
								width: "8px",
								height: "8px",
								borderRadius: "50%",
								display: "inline-block",
								background: connected ? "#22c55e" : "#ef4444"
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", { children: connected ? "Connected" : "Disconnected" }),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", { children: displayEntries.length + " entries" }),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
								style: { cursor: "pointer" },
								onClick: () => setAutoScroll((a) => !a),
								title: "Toggle auto-scroll",
								children: autoScroll ? "⬇ Auto-scroll" : "⏸ Paused"
							})
						]
					})
				]
			})
		})
	});
}
var import_react$1, import_jsx_runtime$1, ViewerContext, ExpandedRowsContext, DETAIL_MAX, CELL_CHROME, DETAIL_MIN, clamp, monospaceLines, SINGLE_ROW_HEIGHT, EXPANDED_DETAIL_STYLE;
function init_LogViewer() {
	return (init_LogViewer = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_index_es$1();
		init_record();
		init_types();
		init_CapturePanel();
		init_Highlight();
		init_RecordPanels();
		import_jsx_runtime$1 = require_jsx_runtime();
		ViewerContext = (0, import_react$1.createContext)({
			theme: {},
			searchText: "",
			clientConfig: null,
			onTraceFilter: () => {},
			onToggleExpanded: () => {},
			onFilterText: () => {}
		});
		ExpandedRowsContext = (0, import_react$1.createContext)(null);
		DETAIL_MAX = 520;
		CELL_CHROME = 16;
		DETAIL_MIN = 68;
		clamp = (value, low, high) => Math.min(Math.max(value, low), high);
		monospaceLines = (text, columns = 90) => Math.ceil(text.length / columns) + (text.match(/\n/g)?.length ?? 0);
		SINGLE_ROW_HEIGHT = 26;
		EXPANDED_DETAIL_STYLE = {
			overflow: "auto",
			paddingRight: "2px"
		};
	})))();
}
// ../../realm/blong-viewer/src/pages/logViewerPage.tsx
function LogViewerPage() {
	const { handler } = useBlong();
	const call = handler;
	const [live, setLive] = (0, import_react.useState)({
		open: false,
		wakes: 0
	});
	const cursorRef = (0, import_react.useRef)(void 0);
	const palette = useThemePalette();
	const theme = (0, import_react.useMemo)(() => palette === "dark" || palette === "light" ? { mode: palette } : void 0, [palette]);
	const source = (0, import_react.useMemo)(() => ({
		intervalMs: 5e3,
		load: async ({ after, limit }) => {
			const answer = await call["viewer.entry.find"]?.({
				...after === void 0 ? {} : { after },
				...limit === void 0 ? {} : { limit }
			}, {});
			if (answer?.last) cursorRef.current = answer.last;
			return { entries: answer?.entries ?? [] };
		},
		subscribe: async ({ signal }) => {
			const frames = await call["viewer.entry.watch"]?.(cursorRef.current ? { after: cursorRef.current } : {}, { stream: "binary" });
			if (!frames) return void 0;
			setLive((state) => ({
				...state,
				open: true,
				end: void 0
			}));
			return (async function* () {
				try {
					for await (const wake of frames) {
						if (signal.aborted) return;
						setLive((state) => ({
							...state,
							wakes: state.wakes + 1
						}));
						yield wake;
					}
					setLive((state) => ({
						...state,
						open: false,
						end: "ended"
					}));
				} catch (error) {
					setLive((state) => ({
						...state,
						open: false,
						end: String(error?.message ?? error).slice(0, 160)
					}));
					throw error;
				}
			})();
		}
	}), [call]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-stream": live.open ? "open" : "closed",
		"data-wakes": live.wakes,
		"data-stream-end": live.end,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogViewer, {
			source,
			theme
		})
	});
}
var import_react, import_jsx_runtime;
function init_logViewerPage() {
	return (init_logViewerPage = __esmMin((() => {
		init_src();
		init_LogViewer();
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
init_logViewerPage();
export { LogViewerPage };
