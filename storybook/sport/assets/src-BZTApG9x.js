import { n as __esmMin, s as __toESM, t as __commonJSMin } from "./rolldown-runtime-wTHAN5bU.js";
// ../../common/temp/node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/dayjs.min.js
var require_dayjs_min = /* @__PURE__ */ __commonJSMin(((exports, module, this$1) => {
	(function(t, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
	})(this$1, (function() {
		"use strict";
		var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
			name: "en",
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			ordinal: function(t) {
				var e = [
					"th",
					"st",
					"nd",
					"rd"
				], n = t % 100;
				return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
			}
		}, m = function(t, e, n) {
			var r = String(t);
			return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
		}, v = {
			s: m,
			z: function(t) {
				var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
				return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
			},
			m: function t(e, n) {
				if (e.date() < n.date()) return -t(n, e);
				var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
				return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
			},
			a: function(t) {
				return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
			},
			p: function(t) {
				return {
					M: c,
					y: h,
					w: o,
					d: a,
					D: d,
					h: u,
					m: s,
					s: i,
					ms: r,
					Q: f
				}[t] || String(t || "").toLowerCase().replace(/s$/, "");
			},
			u: function(t) {
				return void 0 === t;
			}
		}, g = "en", D = {};
		D[g] = M;
		var p = "$isDayjsObject", S = function(t) {
			return t instanceof _ || !(!t || !t[p]);
		}, w = function t(e, n, r) {
			var i;
			if (!e) return g;
			if ("string" == typeof e) {
				var s = e.toLowerCase();
				D[s] && (i = s), n && (D[s] = n, i = s);
				var u = e.split("-");
				if (!i && u.length > 1) return t(u[0]);
			} else {
				var a = e.name;
				D[a] = e, i = a;
			}
			return !r && i && (g = i), i || !r && g;
		}, O = function(t, e) {
			if (S(t)) return t.clone();
			var n = "object" == typeof e ? e : {};
			return n.date = t, n.args = arguments, new _(n);
		}, b = v;
		b.l = w, b.i = S, b.w = function(t, e) {
			return O(t, {
				locale: e.$L,
				utc: e.$u,
				x: e.$x,
				$offset: e.$offset
			});
		};
		var _ = function() {
			function M(t) {
				this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
			}
			var m = M.prototype;
			return m.parse = function(t) {
				this.$d = function(t) {
					var e = t.date, n = t.utc;
					if (null === e) return /* @__PURE__ */ new Date(NaN);
					if (b.u(e)) return /* @__PURE__ */ new Date();
					if (e instanceof Date) return new Date(e);
					if ("string" == typeof e && !/Z$/i.test(e)) {
						var r = e.match($);
						if (r) {
							var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
							return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
						}
					}
					return new Date(e);
				}(t), this.init();
			}, m.init = function() {
				var t = this.$d;
				this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
			}, m.$utils = function() {
				return b;
			}, m.isValid = function() {
				return !(this.$d.toString() === l);
			}, m.isSame = function(t, e) {
				var n = O(t);
				return this.startOf(e) <= n && n <= this.endOf(e);
			}, m.isAfter = function(t, e) {
				return O(t) < this.startOf(e);
			}, m.isBefore = function(t, e) {
				return this.endOf(e) < O(t);
			}, m.$g = function(t, e, n) {
				return b.u(t) ? this[e] : this.set(n, t);
			}, m.unix = function() {
				return Math.floor(this.valueOf() / 1e3);
			}, m.valueOf = function() {
				return this.$d.getTime();
			}, m.startOf = function(t, e) {
				var n = this, r = !!b.u(e) || e, f = b.p(t), l = function(t, e) {
					var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
					return r ? i : i.endOf(a);
				}, $ = function(t, e) {
					return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
						0,
						0,
						0,
						0
					] : [
						23,
						59,
						59,
						999
					]).slice(e)), n);
				}, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
				switch (f) {
					case h: return r ? l(1, 0) : l(31, 11);
					case c: return r ? l(1, M) : l(0, M + 1);
					case o:
						var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
						return l(r ? m - D : m + (6 - D), M);
					case a:
					case d: return $(v + "Hours", 0);
					case u: return $(v + "Minutes", 1);
					case s: return $(v + "Seconds", 2);
					case i: return $(v + "Milliseconds", 3);
					default: return this.clone();
				}
			}, m.endOf = function(t) {
				return this.startOf(t, !1);
			}, m.$set = function(t, e) {
				var n, o = b.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
				if (o === c || o === h) {
					var y = this.clone().set(d, 1);
					y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
				} else l && this.$d[l]($);
				return this.init(), this;
			}, m.set = function(t, e) {
				return this.clone().$set(t, e);
			}, m.get = function(t) {
				return this[b.p(t)]();
			}, m.add = function(r, f) {
				var d, l = this;
				r = Number(r);
				var $ = b.p(f), y = function(t) {
					var e = O(l);
					return b.w(e.date(e.date() + Math.round(t * r)), l);
				};
				if ($ === c) return this.set(c, this.$M + r);
				if ($ === h) return this.set(h, this.$y + r);
				if ($ === a) return y(1);
				if ($ === o) return y(7);
				var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
				return b.w(m, this);
			}, m.subtract = function(t, e) {
				return this.add(-1 * t, e);
			}, m.format = function(t) {
				var e = this, n = this.$locale();
				if (!this.isValid()) return n.invalidDate || l;
				var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = b.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
					return t && (t[n] || t(e, r)) || i[n].slice(0, s);
				}, d = function(t) {
					return b.s(s % 12 || 12, t, "0");
				}, $ = f || function(t, e, n) {
					var r = t < 12 ? "AM" : "PM";
					return n ? r.toLowerCase() : r;
				};
				return r.replace(y, (function(t, r) {
					return r || function(t) {
						switch (t) {
							case "YY": return String(e.$y).slice(-2);
							case "YYYY": return b.s(e.$y, 4, "0");
							case "M": return a + 1;
							case "MM": return b.s(a + 1, 2, "0");
							case "MMM": return h(n.monthsShort, a, c, 3);
							case "MMMM": return h(c, a);
							case "D": return e.$D;
							case "DD": return b.s(e.$D, 2, "0");
							case "d": return String(e.$W);
							case "dd": return h(n.weekdaysMin, e.$W, o, 2);
							case "ddd": return h(n.weekdaysShort, e.$W, o, 3);
							case "dddd": return o[e.$W];
							case "H": return String(s);
							case "HH": return b.s(s, 2, "0");
							case "h": return d(1);
							case "hh": return d(2);
							case "a": return $(s, u, !0);
							case "A": return $(s, u, !1);
							case "m": return String(u);
							case "mm": return b.s(u, 2, "0");
							case "s": return String(e.$s);
							case "ss": return b.s(e.$s, 2, "0");
							case "SSS": return b.s(e.$ms, 3, "0");
							case "Z": return i;
						}
						return null;
					}(t) || i.replace(":", "");
				}));
			}, m.utcOffset = function() {
				return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
			}, m.diff = function(r, d, l) {
				var $, y = this, M = b.p(d), m = O(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
					return b.m(y, m);
				};
				switch (M) {
					case h:
						$ = D() / 12;
						break;
					case c:
						$ = D();
						break;
					case f:
						$ = D() / 3;
						break;
					case o:
						$ = (g - v) / 6048e5;
						break;
					case a:
						$ = (g - v) / 864e5;
						break;
					case u:
						$ = g / n;
						break;
					case s:
						$ = g / e;
						break;
					case i:
						$ = g / t;
						break;
					default: $ = g;
				}
				return l ? $ : b.a($);
			}, m.daysInMonth = function() {
				return this.endOf(c).$D;
			}, m.$locale = function() {
				return D[this.$L];
			}, m.locale = function(t, e) {
				if (!t) return this.$L;
				var n = this.clone(), r = w(t, e, !0);
				return r && (n.$L = r), n;
			}, m.clone = function() {
				return b.w(this.$d, this);
			}, m.toDate = function() {
				return new Date(this.valueOf());
			}, m.toJSON = function() {
				return this.isValid() ? this.toISOString() : null;
			}, m.toISOString = function() {
				return this.$d.toISOString();
			}, m.toString = function() {
				return this.$d.toUTCString();
			}, M;
		}(), k = _.prototype;
		return O.prototype = k, [
			["$ms", r],
			["$s", i],
			["$m", s],
			["$H", u],
			["$W", a],
			["$M", c],
			["$y", h],
			["$D", d]
		].forEach((function(t) {
			k[t[1]] = function(e) {
				return this.$g(e, t[0], t[1]);
			};
		})), O.extend = function(t, e) {
			return t.$i || (t(e, _, O), t.$i = !0), O;
		}, O.locale = w, O.isDayjs = S, O.unix = function(t) {
			return O(1e3 * t);
		}, O.en = D[g], O.Ls = D, O.p = {}, O;
	}));
}));
// ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-AGHRB4JF.mjs
var import_dayjs_min, __defProp, __name, __export, LEVELS, log, setLogLevel, format$1;
function init_chunk_AGHRB4JF() {
	return (init_chunk_AGHRB4JF = __esmMin((() => {
		import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1);
		__defProp = Object.defineProperty;
		__name = (target, value) => __defProp(target, "name", {
			value,
			configurable: true
		});
		__export = (target, all) => {
			for (var name in all) __defProp(target, name, {
				get: all[name],
				enumerable: true
			});
		};
		LEVELS = {
			trace: 0,
			debug: 1,
			info: 2,
			warn: 3,
			error: 4,
			fatal: 5
		};
		log = {
			trace: /* @__PURE__ */ __name((..._args) => {}, "trace"),
			debug: /* @__PURE__ */ __name((..._args) => {}, "debug"),
			info: /* @__PURE__ */ __name((..._args) => {}, "info"),
			warn: /* @__PURE__ */ __name((..._args) => {}, "warn"),
			error: /* @__PURE__ */ __name((..._args) => {}, "error"),
			fatal: /* @__PURE__ */ __name((..._args) => {}, "fatal")
		};
		setLogLevel = /* @__PURE__ */ __name(function(level = "fatal") {
			let numericLevel = LEVELS.fatal;
			if (typeof level === "string") {
				if (level.toLowerCase() in LEVELS) numericLevel = LEVELS[level];
			} else if (typeof level === "number") numericLevel = level;
			log.trace = () => {};
			log.debug = () => {};
			log.info = () => {};
			log.warn = () => {};
			log.error = () => {};
			log.fatal = () => {};
			if (numericLevel <= LEVELS.fatal) log.fatal = console.error ? console.error.bind(console, format$1("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", format$1("FATAL"));
			if (numericLevel <= LEVELS.error) log.error = console.error ? console.error.bind(console, format$1("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", format$1("ERROR"));
			if (numericLevel <= LEVELS.warn) log.warn = console.warn ? console.warn.bind(console, format$1("WARN"), "color: orange") : console.log.bind(console, `\x1B[33m`, format$1("WARN"));
			if (numericLevel <= LEVELS.info) log.info = console.info ? console.info.bind(console, format$1("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", format$1("INFO"));
			if (numericLevel <= LEVELS.debug) log.debug = console.debug ? console.debug.bind(console, format$1("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format$1("DEBUG"));
			if (numericLevel <= LEVELS.trace) log.trace = console.debug ? console.debug.bind(console, format$1("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format$1("TRACE"));
		}, "setLogLevel");
		format$1 = /* @__PURE__ */ __name((level) => {
			return `%c${(0, import_dayjs_min.default)().format("ss.SSS")} : ${level} : `;
		}, "format");
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/ascending.js
function ascending$1(a, b) {
	return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
// ../../common/temp/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/descending.js
function descending(a, b) {
	return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
// ../../common/temp/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/bisector.js
function bisector(f) {
	let compare1, compare2, delta;
	if (f.length !== 2) {
		compare1 = ascending$1;
		compare2 = (d, x) => ascending$1(f(d), x);
		delta = (d, x) => f(d) - x;
	} else {
		compare1 = f === ascending$1 || f === descending ? f : zero$1;
		compare2 = f;
		delta = f;
	}
	function left(a, x, lo = 0, hi = a.length) {
		if (lo < hi) {
			if (compare1(x, x) !== 0) return hi;
			do {
				const mid = lo + hi >>> 1;
				if (compare2(a[mid], x) < 0) lo = mid + 1;
				else hi = mid;
			} while (lo < hi);
		}
		return lo;
	}
	function right(a, x, lo = 0, hi = a.length) {
		if (lo < hi) {
			if (compare1(x, x) !== 0) return hi;
			do {
				const mid = lo + hi >>> 1;
				if (compare2(a[mid], x) <= 0) lo = mid + 1;
				else hi = mid;
			} while (lo < hi);
		}
		return lo;
	}
	function center(a, x, lo = 0, hi = a.length) {
		const i = left(a, x, lo, hi - 1);
		return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
	}
	return {
		left,
		center,
		right
	};
}
function zero$1() {
	return 0;
}
function init_bisector() {
	return (init_bisector = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/number.js
function number$3(x) {
	return x === null ? NaN : +x;
}
// ../../common/temp/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/bisect.js
var ascendingBisect, bisectRight;
function init_bisect() {
	return (init_bisect = __esmMin((() => {
		init_bisector();
		ascendingBisect = bisector(ascending$1);
		bisectRight = ascendingBisect.right;
		ascendingBisect.left;
		bisector(number$3).center;
	})))();
}
// ../../common/temp/node_modules/.pnpm/internmap@2.0.3/node_modules/internmap/src/index.js
function intern_get({ _intern, _key }, value) {
	const key = _key(value);
	return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
	const key = _key(value);
	if (_intern.has(key)) return _intern.get(key);
	_intern.set(key, value);
	return value;
}
function intern_delete({ _intern, _key }, value) {
	const key = _key(value);
	if (_intern.has(key)) {
		value = _intern.get(key);
		_intern.delete(key);
	}
	return value;
}
function keyof(value) {
	return value !== null && typeof value === "object" ? value.valueOf() : value;
}
var InternMap;
function init_src() {
	return (init_src = __esmMin((() => {
		InternMap = class extends Map {
			constructor(entries, key = keyof) {
				super();
				Object.defineProperties(this, {
					_intern: { value: /* @__PURE__ */ new Map() },
					_key: { value: key }
				});
				if (entries != null) for (const [key, value] of entries) this.set(key, value);
			}
			get(key) {
				return super.get(intern_get(this, key));
			}
			has(key) {
				return super.has(intern_get(this, key));
			}
			set(key, value) {
				return super.set(intern_set(this, key), value);
			}
			delete(key) {
				return super.delete(intern_delete(this, key));
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/ticks.js
function tickSpec(start, stop, count) {
	const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
	let i1, i2, inc;
	if (power < 0) {
		inc = Math.pow(10, -power) / factor;
		i1 = Math.round(start * inc);
		i2 = Math.round(stop * inc);
		if (i1 / inc < start) ++i1;
		if (i2 / inc > stop) --i2;
		inc = -inc;
	} else {
		inc = Math.pow(10, power) * factor;
		i1 = Math.round(start / inc);
		i2 = Math.round(stop / inc);
		if (i1 * inc < start) ++i1;
		if (i2 * inc > stop) --i2;
	}
	if (i2 < i1 && .5 <= count && count < 2) return tickSpec(start, stop, count * 2);
	return [
		i1,
		i2,
		inc
	];
}
function ticks(start, stop, count) {
	stop = +stop, start = +start, count = +count;
	if (!(count > 0)) return [];
	if (start === stop) return [start];
	const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
	if (!(i2 >= i1)) return [];
	const n = i2 - i1 + 1, ticks = new Array(n);
	if (reverse) {
		if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;
		else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
	} else if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;
	else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
	return ticks;
}
function tickIncrement(start, stop, count) {
	stop = +stop, start = +start, count = +count;
	return tickSpec(start, stop, count)[2];
}
function tickStep(start, stop, count) {
	stop = +stop, start = +start, count = +count;
	const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
	return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}
var e10, e5, e2;
function init_ticks() {
	return (init_ticks = __esmMin((() => {
		e10 = Math.sqrt(50);
		e5 = Math.sqrt(10);
		e2 = Math.sqrt(2);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/range.js
function range(start, stop, step) {
	start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
	var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
	while (++i < n) range[i] = start + i * step;
	return range;
}
// ../../common/temp/node_modules/.pnpm/d3-axis@3.0.0/node_modules/d3-axis/src/identity.js
function identity_default$2(x) {
	return x;
}
// ../../common/temp/node_modules/.pnpm/d3-axis@3.0.0/node_modules/d3-axis/src/axis.js
function translateX(x) {
	return "translate(" + x + ",0)";
}
function translateY(y) {
	return "translate(0," + y + ")";
}
function number$2(scale) {
	return (d) => +scale(d);
}
function center(scale, offset) {
	offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
	if (scale.round()) offset = Math.round(offset);
	return (d) => +scale(d) + offset;
}
function entering() {
	return !this.__axis;
}
function axis(orient, scale) {
	var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : .5, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform = orient === top || orient === bottom ? translateX : translateY;
	function axis(context) {
		var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity_default$2 : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? center : number$2)(scale.copy(), offset), selection = context.selection ? context.selection() : context, path = selection.selectAll(".domain").data([null]), tick = selection.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
		path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
		tick = tick.merge(tickEnter);
		line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
		text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
		if (context !== selection) {
			path = path.transition(context);
			tick = tick.transition(context);
			line = line.transition(context);
			text = text.transition(context);
			tickExit = tickExit.transition(context).attr("opacity", epsilon$2).attr("transform", function(d) {
				return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
			});
			tickEnter.attr("opacity", epsilon$2).attr("transform", function(d) {
				var p = this.parentNode.__axis;
				return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset);
			});
		}
		tickExit.remove();
		path.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
		tick.attr("opacity", 1).attr("transform", function(d) {
			return transform(position(d) + offset);
		});
		line.attr(x + "2", k * tickSizeInner);
		text.attr(x, k * spacing).text(format);
		selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
		selection.each(function() {
			this.__axis = position;
		});
	}
	axis.scale = function(_) {
		return arguments.length ? (scale = _, axis) : scale;
	};
	axis.ticks = function() {
		return tickArguments = Array.from(arguments), axis;
	};
	axis.tickArguments = function(_) {
		return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
	};
	axis.tickValues = function(_) {
		return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
	};
	axis.tickFormat = function(_) {
		return arguments.length ? (tickFormat = _, axis) : tickFormat;
	};
	axis.tickSize = function(_) {
		return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
	};
	axis.tickSizeInner = function(_) {
		return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
	};
	axis.tickSizeOuter = function(_) {
		return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
	};
	axis.tickPadding = function(_) {
		return arguments.length ? (tickPadding = +_, axis) : tickPadding;
	};
	axis.offset = function(_) {
		return arguments.length ? (offset = +_, axis) : offset;
	};
	return axis;
}
function axisTop(scale) {
	return axis(top, scale);
}
function axisBottom(scale) {
	return axis(bottom, scale);
}
var top, right, bottom, left, epsilon$2;
function init_axis() {
	return (init_axis = __esmMin((() => {
		top = 1;
		right = 2;
		bottom = 3;
		left = 4;
		epsilon$2 = 1e-6;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js
function dispatch() {
	for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
		if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
		_[t] = [];
	}
	return new Dispatch(_);
}
function Dispatch(_) {
	this._ = _;
}
function parseTypenames$1(typenames, types) {
	return typenames.trim().split(/^|\s+/).map(function(t) {
		var name = "", i = t.indexOf(".");
		if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
		if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
		return {
			type: t,
			name
		};
	});
}
function get$1(type, name) {
	for (var i = 0, n = type.length, c; i < n; ++i) if ((c = type[i]).name === name) return c.value;
}
function set$1(type, name, callback) {
	for (var i = 0, n = type.length; i < n; ++i) if (type[i].name === name) {
		type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
		break;
	}
	if (callback != null) type.push({
		name,
		value: callback
	});
	return type;
}
var noop;
function init_dispatch() {
	return (init_dispatch = __esmMin((() => {
		noop = { value: () => {} };
		Dispatch.prototype = dispatch.prototype = {
			constructor: Dispatch,
			on: function(typename, callback) {
				var _ = this._, T = parseTypenames$1(typename + "", _), t, i = -1, n = T.length;
				if (arguments.length < 2) {
					while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
					return;
				}
				if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
				while (++i < n) if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
				else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
				return this;
			},
			copy: function() {
				var copy = {}, _ = this._;
				for (var t in _) copy[t] = _[t].slice();
				return new Dispatch(copy);
			},
			call: function(type, that) {
				if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
				if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
				for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
			},
			apply: function(type, that, args) {
				if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
				for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespaces.js
var xhtml, namespaces_default;
function init_namespaces() {
	return (init_namespaces = __esmMin((() => {
		xhtml = "http://www.w3.org/1999/xhtml";
		namespaces_default = {
			svg: "http://www.w3.org/2000/svg",
			xhtml,
			xlink: "http://www.w3.org/1999/xlink",
			xml: "http://www.w3.org/XML/1998/namespace",
			xmlns: "http://www.w3.org/2000/xmlns/"
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
	var prefix = name += "", i = prefix.indexOf(":");
	if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	return namespaces_default.hasOwnProperty(prefix) ? {
		space: namespaces_default[prefix],
		local: name
	} : name;
}
function init_namespace() {
	return (init_namespace = __esmMin((() => {
		init_namespaces();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
	return function() {
		var document = this.ownerDocument, uri = this.namespaceURI;
		return uri === "http://www.w3.org/1999/xhtml" && document.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? document.createElement(name) : document.createElementNS(uri, name);
	};
}
function creatorFixed(fullname) {
	return function() {
		return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	};
}
function creator_default(name) {
	var fullname = namespace_default(name);
	return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
function init_creator() {
	return (init_creator = __esmMin((() => {
		init_namespace();
		init_namespaces();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js
function none() {}
function selector_default(selector) {
	return selector == null ? none : function() {
		return this.querySelector(selector);
	};
}
function init_selector() {
	return (init_selector = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/select.js
function select_default$2(select) {
	if (typeof select !== "function") select = selector_default(select);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
		if ("__data__" in node) subnode.__data__ = node.__data__;
		subgroup[i] = subnode;
	}
	return new Selection$1(subgroups, this._parents);
}
function init_select() {
	return (init_select = __esmMin((() => {
		init_selection();
		init_selector();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/array.js
function array(x) {
	return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selectorAll.js
function empty() {
	return [];
}
function selectorAll_default(selector) {
	return selector == null ? empty : function() {
		return this.querySelectorAll(selector);
	};
}
function init_selectorAll() {
	return (init_selectorAll = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
	return function() {
		return array(select.apply(this, arguments));
	};
}
function selectAll_default$1(select) {
	if (typeof select === "function") select = arrayAll(select);
	else select = selectorAll_default(select);
	for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) {
		subgroups.push(select.call(node, node.__data__, i, group));
		parents.push(node);
	}
	return new Selection$1(subgroups, parents);
}
function init_selectAll() {
	return (init_selectAll = __esmMin((() => {
		init_selection();
		init_selectorAll();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
	return function() {
		return this.matches(selector);
	};
}
function childMatcher(selector) {
	return function(node) {
		return node.matches(selector);
	};
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChild.js
function childFind(match) {
	return function() {
		return find.call(this.children, match);
	};
}
function childFirst() {
	return this.firstElementChild;
}
function selectChild_default(match) {
	return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var find;
function init_selectChild() {
	return (init_selectChild = __esmMin((() => {
		find = Array.prototype.find;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChildren.js
function children() {
	return Array.from(this.children);
}
function childrenFilter(match) {
	return function() {
		return filter.call(this.children, match);
	};
}
function selectChildren_default(match) {
	return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
var filter;
function init_selectChildren() {
	return (init_selectChildren = __esmMin((() => {
		filter = Array.prototype.filter;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/filter.js
function filter_default$1(match) {
	if (typeof match !== "function") match = matcher_default(match);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
	return new Selection$1(subgroups, this._parents);
}
function init_filter() {
	return (init_filter = __esmMin((() => {
		init_selection();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
	return new Array(update.length);
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/enter.js
function enter_default() {
	return new Selection$1(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum) {
	this.ownerDocument = parent.ownerDocument;
	this.namespaceURI = parent.namespaceURI;
	this._next = null;
	this._parent = parent;
	this.__data__ = datum;
}
function init_enter() {
	return (init_enter = __esmMin((() => {
		init_selection();
		EnterNode.prototype = {
			constructor: EnterNode,
			appendChild: function(child) {
				return this._parent.insertBefore(child, this._next);
			},
			insertBefore: function(child, next) {
				return this._parent.insertBefore(child, next);
			},
			querySelector: function(selector) {
				return this._parent.querySelector(selector);
			},
			querySelectorAll: function(selector) {
				return this._parent.querySelectorAll(selector);
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/constant.js
function constant_default$3(x) {
	return function() {
		return x;
	};
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
	var i = 0, node, groupLength = group.length, dataLength = data.length;
	for (; i < dataLength; ++i) if (node = group[i]) {
		node.__data__ = data[i];
		update[i] = node;
	} else enter[i] = new EnterNode(parent, data[i]);
	for (; i < groupLength; ++i) if (node = group[i]) exit[i] = node;
}
function bindKey(parent, group, enter, update, exit, data, key) {
	var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
	for (i = 0; i < groupLength; ++i) if (node = group[i]) {
		keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
		if (nodeByKeyValue.has(keyValue)) exit[i] = node;
		else nodeByKeyValue.set(keyValue, node);
	}
	for (i = 0; i < dataLength; ++i) {
		keyValue = key.call(parent, data[i], i, data) + "";
		if (node = nodeByKeyValue.get(keyValue)) {
			update[i] = node;
			node.__data__ = data[i];
			nodeByKeyValue.delete(keyValue);
		} else enter[i] = new EnterNode(parent, data[i]);
	}
	for (i = 0; i < groupLength; ++i) if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function datum(node) {
	return node.__data__;
}
function data_default(value, key) {
	if (!arguments.length) return Array.from(this, datum);
	var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
	if (typeof value !== "function") value = constant_default$3(value);
	for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
		var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength);
		bind(parent, group, enterGroup, updateGroup, exit[j] = new Array(groupLength), data, key);
		for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) if (previous = enterGroup[i0]) {
			if (i0 >= i1) i1 = i0 + 1;
			while (!(next = updateGroup[i1]) && ++i1 < dataLength);
			previous._next = next || null;
		}
	}
	update = new Selection$1(update, parents);
	update._enter = enter;
	update._exit = exit;
	return update;
}
function arraylike(data) {
	return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function init_data() {
	return (init_data = __esmMin((() => {
		init_selection();
		init_enter();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/exit.js
function exit_default() {
	return new Selection$1(this._exit || this._groups.map(sparse_default), this._parents);
}
function init_exit() {
	return (init_exit = __esmMin((() => {
		init_selection();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
	var enter = this.enter(), update = this, exit = this.exit();
	if (typeof onenter === "function") {
		enter = onenter(enter);
		if (enter) enter = enter.selection();
	} else enter = enter.append(onenter + "");
	if (onupdate != null) {
		update = onupdate(update);
		if (update) update = update.selection();
	}
	if (onexit == null) exit.remove();
	else onexit(exit);
	return enter && update ? enter.merge(update).order() : update;
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/merge.js
function merge_default$1(context) {
	var selection = context.selection ? context.selection() : context;
	for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) if (node = group0[i] || group1[i]) merge[i] = node;
	for (; j < m0; ++j) merges[j] = groups0[j];
	return new Selection$1(merges, this._parents);
}
function init_merge() {
	return (init_merge = __esmMin((() => {
		init_selection();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/order.js
function order_default() {
	for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) if (node = group[i]) {
		if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
		next = node;
	}
	return this;
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sort.js
function sort_default$1(compare) {
	if (!compare) compare = ascending;
	function compareNode(a, b) {
		return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	}
	for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
		for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) if (node = group[i]) sortgroup[i] = node;
		sortgroup.sort(compareNode);
	}
	return new Selection$1(sortgroups, this._parents).order();
}
function ascending(a, b) {
	return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function init_sort() {
	return (init_sort = __esmMin((() => {
		init_selection();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/call.js
function call_default() {
	var callback = arguments[0];
	arguments[0] = this;
	callback.apply(null, arguments);
	return this;
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
	return Array.from(this);
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/node.js
function node_default() {
	for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
		var node = group[i];
		if (node) return node;
	}
	return null;
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/size.js
function size_default() {
	let size = 0;
	for (const node of this) ++size;
	return size;
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/empty.js
function empty_default() {
	return !this.node();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/each.js
function each_default$1(callback) {
	for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) if (node = group[i]) callback.call(node, node.__data__, i, group);
	return this;
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/attr.js
function attrRemove$1(name) {
	return function() {
		this.removeAttribute(name);
	};
}
function attrRemoveNS$1(fullname) {
	return function() {
		this.removeAttributeNS(fullname.space, fullname.local);
	};
}
function attrConstant$1(name, value) {
	return function() {
		this.setAttribute(name, value);
	};
}
function attrConstantNS$1(fullname, value) {
	return function() {
		this.setAttributeNS(fullname.space, fullname.local, value);
	};
}
function attrFunction$1(name, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) this.removeAttribute(name);
		else this.setAttribute(name, v);
	};
}
function attrFunctionNS$1(fullname, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
		else this.setAttributeNS(fullname.space, fullname.local, v);
	};
}
function attr_default$1(name, value) {
	var fullname = namespace_default(name);
	if (arguments.length < 2) {
		var node = this.node();
		return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
	}
	return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}
function init_attr() {
	return (init_attr = __esmMin((() => {
		init_namespace();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/window.js
function window_default(node) {
	return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/style.js
function styleRemove$1(name) {
	return function() {
		this.style.removeProperty(name);
	};
}
function styleConstant$1(name, value, priority) {
	return function() {
		this.style.setProperty(name, value, priority);
	};
}
function styleFunction$1(name, value, priority) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) this.style.removeProperty(name);
		else this.style.setProperty(name, v, priority);
	};
}
function style_default$1(name, value, priority) {
	return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
	return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}
function init_style() {
	return (init_style = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
	return function() {
		delete this[name];
	};
}
function propertyConstant(name, value) {
	return function() {
		this[name] = value;
	};
}
function propertyFunction(name, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) delete this[name];
		else this[name] = v;
	};
}
function property_default(name, value) {
	return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
function init_property() {
	return (init_property = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
	return string.trim().split(/^|\s+/);
}
function classList(node) {
	return node.classList || new ClassList(node);
}
function ClassList(node) {
	this._node = node;
	this._names = classArray(node.getAttribute("class") || "");
}
function classedAdd(node, names) {
	var list = classList(node), i = -1, n = names.length;
	while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
	var list = classList(node), i = -1, n = names.length;
	while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
	return function() {
		classedAdd(this, names);
	};
}
function classedFalse(names) {
	return function() {
		classedRemove(this, names);
	};
}
function classedFunction(names, value) {
	return function() {
		(value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
	};
}
function classed_default(name, value) {
	var names = classArray(name + "");
	if (arguments.length < 2) {
		var list = classList(this.node()), i = -1, n = names.length;
		while (++i < n) if (!list.contains(names[i])) return false;
		return true;
	}
	return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
function init_classed() {
	return (init_classed = __esmMin((() => {
		ClassList.prototype = {
			add: function(name) {
				if (this._names.indexOf(name) < 0) {
					this._names.push(name);
					this._node.setAttribute("class", this._names.join(" "));
				}
			},
			remove: function(name) {
				var i = this._names.indexOf(name);
				if (i >= 0) {
					this._names.splice(i, 1);
					this._node.setAttribute("class", this._names.join(" "));
				}
			},
			contains: function(name) {
				return this._names.indexOf(name) >= 0;
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/text.js
function textRemove() {
	this.textContent = "";
}
function textConstant$1(value) {
	return function() {
		this.textContent = value;
	};
}
function textFunction$1(value) {
	return function() {
		var v = value.apply(this, arguments);
		this.textContent = v == null ? "" : v;
	};
}
function text_default$1(value) {
	return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}
function init_text() {
	return (init_text = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
	this.innerHTML = "";
}
function htmlConstant(value) {
	return function() {
		this.innerHTML = value;
	};
}
function htmlFunction(value) {
	return function() {
		var v = value.apply(this, arguments);
		this.innerHTML = v == null ? "" : v;
	};
}
function html_default(value) {
	return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
function init_html() {
	return (init_html = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/raise.js
function raise() {
	if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
	return this.each(raise);
}
function init_raise() {
	return (init_raise = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/lower.js
function lower() {
	if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
	return this.each(lower);
}
function init_lower() {
	return (init_lower = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/append.js
function append_default(name) {
	var create = typeof name === "function" ? name : creator_default(name);
	return this.select(function() {
		return this.appendChild(create.apply(this, arguments));
	});
}
function init_append() {
	return (init_append = __esmMin((() => {
		init_creator();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/insert.js
function constantNull() {
	return null;
}
function insert_default(name, before) {
	var create = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
	return this.select(function() {
		return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	});
}
function init_insert() {
	return (init_insert = __esmMin((() => {
		init_creator();
		init_selector();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/remove.js
function remove() {
	var parent = this.parentNode;
	if (parent) parent.removeChild(this);
}
function remove_default$1() {
	return this.each(remove);
}
function init_remove() {
	return (init_remove = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
	var clone = this.cloneNode(false), parent = this.parentNode;
	return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
	var clone = this.cloneNode(true), parent = this.parentNode;
	return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
	return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function init_clone() {
	return (init_clone = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
	return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
	return function(event) {
		listener.call(this, event, this.__data__);
	};
}
function parseTypenames(typenames) {
	return typenames.trim().split(/^|\s+/).map(function(t) {
		var name = "", i = t.indexOf(".");
		if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
		return {
			type: t,
			name
		};
	});
}
function onRemove(typename) {
	return function() {
		var on = this.__on;
		if (!on) return;
		for (var j = 0, i = -1, m = on.length, o; j < m; ++j) if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
		else on[++i] = o;
		if (++i) on.length = i;
		else delete this.__on;
	};
}
function onAdd(typename, value, options) {
	return function() {
		var on = this.__on, o, listener = contextListener(value);
		if (on) {
			for (var j = 0, m = on.length; j < m; ++j) if ((o = on[j]).type === typename.type && o.name === typename.name) {
				this.removeEventListener(o.type, o.listener, o.options);
				this.addEventListener(o.type, o.listener = listener, o.options = options);
				o.value = value;
				return;
			}
		}
		this.addEventListener(typename.type, listener, options);
		o = {
			type: typename.type,
			name: typename.name,
			value,
			listener,
			options
		};
		if (!on) this.__on = [o];
		else on.push(o);
	};
}
function on_default$1(typename, value, options) {
	var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
	if (arguments.length < 2) {
		var on = this.node().__on;
		if (on) {
			for (var j = 0, m = on.length, o; j < m; ++j) for (i = 0, o = on[j]; i < n; ++i) if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
		}
		return;
	}
	on = value ? onAdd : onRemove;
	for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
	return this;
}
function init_on() {
	return (init_on = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type, params) {
	var window = window_default(node), event = window.CustomEvent;
	if (typeof event === "function") event = new event(type, params);
	else {
		event = window.document.createEvent("Event");
		if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
		else event.initEvent(type, false, false);
	}
	node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
	return function() {
		return dispatchEvent(this, type, params);
	};
}
function dispatchFunction(type, params) {
	return function() {
		return dispatchEvent(this, type, params.apply(this, arguments));
	};
}
function dispatch_default(type, params) {
	return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
function init_dispatch$1() {
	return (init_dispatch$1 = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/iterator.js
function* iterator_default$1() {
	for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) if (node = group[i]) yield node;
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js
function Selection$1(groups, parents) {
	this._groups = groups;
	this._parents = parents;
}
function selection() {
	return new Selection$1([[document.documentElement]], root);
}
function selection_selection() {
	return this;
}
var root;
function init_selection() {
	return (init_selection = __esmMin((() => {
		init_select();
		init_selectAll();
		init_selectChild();
		init_selectChildren();
		init_filter();
		init_data();
		init_enter();
		init_exit();
		init_merge();
		init_sort();
		init_attr();
		init_style();
		init_property();
		init_classed();
		init_text();
		init_html();
		init_raise();
		init_lower();
		init_append();
		init_insert();
		init_remove();
		init_clone();
		init_on();
		init_dispatch$1();
		root = [null];
		Selection$1.prototype = selection.prototype = {
			constructor: Selection$1,
			select: select_default$2,
			selectAll: selectAll_default$1,
			selectChild: selectChild_default,
			selectChildren: selectChildren_default,
			filter: filter_default$1,
			data: data_default,
			enter: enter_default,
			exit: exit_default,
			join: join_default,
			merge: merge_default$1,
			selection: selection_selection,
			order: order_default,
			sort: sort_default$1,
			call: call_default,
			nodes: nodes_default,
			node: node_default,
			size: size_default,
			empty: empty_default,
			each: each_default$1,
			attr: attr_default$1,
			style: style_default$1,
			property: property_default,
			classed: classed_default,
			text: text_default$1,
			html: html_default,
			raise: raise_default,
			lower: lower_default,
			append: append_default,
			insert: insert_default,
			remove: remove_default$1,
			clone: clone_default,
			datum: datum_default,
			on: on_default$1,
			dispatch: dispatch_default,
			[Symbol.iterator]: iterator_default$1
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js
function select_default$1(selector) {
	return typeof selector === "string" ? new Selection$1([[document.querySelector(selector)]], [document.documentElement]) : new Selection$1([[selector]], root);
}
function init_select$1() {
	return (init_select$1 = __esmMin((() => {
		init_selection();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
	constructor.prototype = factory.prototype = prototype;
	prototype.constructor = constructor;
}
function extend(parent, definition) {
	var prototype = Object.create(parent.prototype);
	for (var key in definition) prototype[key] = definition[key];
	return prototype;
}
// ../../common/temp/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/color.js
function Color() {}
function color_formatHex() {
	return this.rgb().formatHex();
}
function color_formatHex8() {
	return this.rgb().formatHex8();
}
function color_formatHsl() {
	return hslConvert(this).formatHsl();
}
function color_formatRgb() {
	return this.rgb().formatRgb();
}
function color(format) {
	var m, l;
	format = (format + "").trim().toLowerCase();
	return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
	return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
	if (a <= 0) r = g = b = NaN;
	return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
	if (!(o instanceof Color)) o = color(o);
	if (!o) return new Rgb();
	o = o.rgb();
	return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
	return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
	this.r = +r;
	this.g = +g;
	this.b = +b;
	this.opacity = +opacity;
}
function rgb_formatHex() {
	return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
	return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
	const a = clampa(this.opacity);
	return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
	return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
	return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
	value = clampi(value);
	return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
	if (a <= 0) h = s = l = NaN;
	else if (l <= 0 || l >= 1) h = s = NaN;
	else if (s <= 0) h = NaN;
	return new Hsl(h, s, l, a);
}
function hslConvert(o) {
	if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
	if (!(o instanceof Color)) o = color(o);
	if (!o) return new Hsl();
	if (o instanceof Hsl) return o;
	o = o.rgb();
	var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
	if (s) {
		if (r === max) h = (g - b) / s + (g < b) * 6;
		else if (g === max) h = (b - r) / s + 2;
		else h = (r - g) / s + 4;
		s /= l < .5 ? max + min : 2 - max - min;
		h *= 60;
	} else s = l > 0 && l < 1 ? 0 : h;
	return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
	return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
	this.h = +h;
	this.s = +s;
	this.l = +l;
	this.opacity = +opacity;
}
function clamph(value) {
	value = (value || 0) % 360;
	return value < 0 ? value + 360 : value;
}
function clampt(value) {
	return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
	return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
var darker, brighter, reI, reN, reP, reHex, reRgbInteger, reRgbPercent, reRgbaInteger, reRgbaPercent, reHslPercent, reHslaPercent, named;
function init_color() {
	return (init_color = __esmMin((() => {
		darker = .7;
		brighter = 1 / darker;
		reI = "\\s*([+-]?\\d+)\\s*";
		reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
		reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
		reHex = /^#([0-9a-f]{3,8})$/;
		reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
		reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
		reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
		reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
		reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
		reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
		named = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		};
		define_default(Color, color, {
			copy(channels) {
				return Object.assign(new this.constructor(), this, channels);
			},
			displayable() {
				return this.rgb().displayable();
			},
			hex: color_formatHex,
			formatHex: color_formatHex,
			formatHex8: color_formatHex8,
			formatHsl: color_formatHsl,
			formatRgb: color_formatRgb,
			toString: color_formatRgb
		});
		define_default(Rgb, rgb, extend(Color, {
			brighter(k) {
				k = k == null ? brighter : Math.pow(brighter, k);
				return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
			},
			darker(k) {
				k = k == null ? darker : Math.pow(darker, k);
				return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
			},
			rgb() {
				return this;
			},
			clamp() {
				return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
			},
			displayable() {
				return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
			},
			hex: rgb_formatHex,
			formatHex: rgb_formatHex,
			formatHex8: rgb_formatHex8,
			formatRgb: rgb_formatRgb,
			toString: rgb_formatRgb
		}));
		define_default(Hsl, hsl, extend(Color, {
			brighter(k) {
				k = k == null ? brighter : Math.pow(brighter, k);
				return new Hsl(this.h, this.s, this.l * k, this.opacity);
			},
			darker(k) {
				k = k == null ? darker : Math.pow(darker, k);
				return new Hsl(this.h, this.s, this.l * k, this.opacity);
			},
			rgb() {
				var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < .5 ? l : 1 - l) * s, m1 = 2 * l - m2;
				return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
			},
			clamp() {
				return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
			},
			displayable() {
				return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
			},
			formatHsl() {
				const a = clampa(this.opacity);
				return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
			}
		}));
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/math.js
var radians, degrees$1;
function init_math() {
	return (init_math = __esmMin((() => {
		radians = Math.PI / 180;
		degrees$1 = 180 / Math.PI;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/lab.js
function labConvert(o) {
	if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
	if (o instanceof Hcl) return hcl2lab(o);
	if (!(o instanceof Rgb)) o = rgbConvert(o);
	var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y = xyz2lab((.2225045 * r + .7168786 * g + .0606169 * b) / Yn), x, z;
	if (r === g && g === b) x = z = y;
	else {
		x = xyz2lab((.4360747 * r + .3850649 * g + .1430804 * b) / Xn);
		z = xyz2lab((.0139322 * r + .0971045 * g + .7141733 * b) / Zn);
	}
	return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function lab(l, a, b, opacity) {
	return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}
function Lab(l, a, b, opacity) {
	this.l = +l;
	this.a = +a;
	this.b = +b;
	this.opacity = +opacity;
}
function xyz2lab(t) {
	return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0$1;
}
function lab2xyz(t) {
	return t > t1$1 ? t * t * t : t2 * (t - t0$1);
}
function lrgb2rgb(x) {
	return 255 * (x <= .0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - .055);
}
function rgb2lrgb(x) {
	return (x /= 255) <= .04045 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4);
}
function hclConvert(o) {
	if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
	if (!(o instanceof Lab)) o = labConvert(o);
	if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
	var h = Math.atan2(o.b, o.a) * degrees$1;
	return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function hcl$1(h, c, l, opacity) {
	return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c, l, opacity) {
	this.h = +h;
	this.c = +c;
	this.l = +l;
	this.opacity = +opacity;
}
function hcl2lab(o) {
	if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
	var h = o.h * radians;
	return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
var K, Xn, Yn, Zn, t0$1, t1$1, t2, t3;
function init_lab() {
	return (init_lab = __esmMin((() => {
		init_color();
		init_math();
		K = 18;
		Xn = .96422;
		Yn = 1;
		Zn = .82521;
		t0$1 = 4 / 29;
		t1$1 = 6 / 29;
		t2 = 3 * t1$1 * t1$1;
		t3 = t1$1 * t1$1 * t1$1;
		define_default(Lab, lab, extend(Color, {
			brighter(k) {
				return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
			},
			darker(k) {
				return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
			},
			rgb() {
				var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
				x = Xn * lab2xyz(x);
				y = Yn * lab2xyz(y);
				z = Zn * lab2xyz(z);
				return new Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - .4906146 * z), lrgb2rgb(-.9787684 * x + 1.9161415 * y + .033454 * z), lrgb2rgb(.0719453 * x - .2289914 * y + 1.4052427 * z), this.opacity);
			}
		}));
		define_default(Hcl, hcl$1, extend(Color, {
			brighter(k) {
				return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
			},
			darker(k) {
				return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
			},
			rgb() {
				return hcl2lab(this).rgb();
			}
		}));
	})))();
}
function init_basis() {
	return (init_basis = __esmMin((() => {})))();
}
function init_basisClosed() {
	return (init_basisClosed = __esmMin((() => {
		init_basis();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/constant.js
var constant_default$2;
function init_constant$1() {
	return (init_constant$1 = __esmMin((() => {
		constant_default$2 = (x) => () => x;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/color.js
function linear$1(a, d) {
	return function(t) {
		return a + t * d;
	};
}
function exponential(a, b, y) {
	return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
		return Math.pow(a + t * b, y);
	};
}
function hue(a, b) {
	var d = b - a;
	return d ? linear$1(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default$2(isNaN(a) ? b : a);
}
function gamma(y) {
	return (y = +y) === 1 ? nogamma : function(a, b) {
		return b - a ? exponential(a, b, y) : constant_default$2(isNaN(a) ? b : a);
	};
}
function nogamma(a, b) {
	var d = b - a;
	return d ? linear$1(a, d) : constant_default$2(isNaN(a) ? b : a);
}
function init_color$1() {
	return (init_color$1 = __esmMin((() => {
		init_constant$1();
	})))();
}
var rgb_default;
function init_rgb() {
	return (init_rgb = __esmMin((() => {
		init_color();
		init_basis();
		init_basisClosed();
		init_color$1();
		rgb_default = (function rgbGamma(y) {
			var color = gamma(y);
			function rgb$1(start, end) {
				var r = color((start = rgb(start)).r, (end = rgb(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
				return function(t) {
					start.r = r(t);
					start.g = g(t);
					start.b = b(t);
					start.opacity = opacity(t);
					return start + "";
				};
			}
			rgb$1.gamma = rgbGamma;
			return rgb$1;
		})(1);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a, b) {
	if (!b) b = [];
	var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
	return function(t) {
		for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
		return c;
	};
}
function isNumberArray(x) {
	return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/array.js
function genericArray(a, b) {
	var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i = 0;
	for (; i < na; ++i) x[i] = value_default(a[i], b[i]);
	for (; i < nb; ++i) c[i] = b[i];
	return function(t) {
		for (i = 0; i < na; ++i) c[i] = x[i](t);
		return c;
	};
}
function init_array$1() {
	return (init_array$1 = __esmMin((() => {
		init_value();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/date.js
function date_default(a, b) {
	var d = /* @__PURE__ */ new Date();
	return a = +a, b = +b, function(t) {
		return d.setTime(a * (1 - t) + b * t), d;
	};
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js
function number_default(a, b) {
	return a = +a, b = +b, function(t) {
		return a * (1 - t) + b * t;
	};
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/object.js
function object_default(a, b) {
	var i = {}, c = {}, k;
	if (a === null || typeof a !== "object") a = {};
	if (b === null || typeof b !== "object") b = {};
	for (k in b) if (k in a) i[k] = value_default(a[k], b[k]);
	else c[k] = b[k];
	return function(t) {
		for (k in i) c[k] = i[k](t);
		return c;
	};
}
function init_object() {
	return (init_object = __esmMin((() => {
		init_value();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/string.js
function zero(b) {
	return function() {
		return b;
	};
}
function one(b) {
	return function(t) {
		return b(t) + "";
	};
}
function string_default(a, b) {
	var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
	a = a + "", b = b + "";
	while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
		if ((bs = bm.index) > bi) {
			bs = b.slice(bi, bs);
			if (s[i]) s[i] += bs;
			else s[++i] = bs;
		}
		if ((am = am[0]) === (bm = bm[0])) {
			if (s[i]) s[i] += bm;
			else s[++i] = bm;
		} else {
			s[++i] = null;
			q.push({
				i,
				x: number_default(am, bm)
			});
		}
		bi = reB.lastIndex;
	}
	if (bi < b.length) {
		bs = b.slice(bi);
		if (s[i]) s[i] += bs;
		else s[++i] = bs;
	}
	return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
		for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
		return s.join("");
	});
}
var reA, reB;
function init_string() {
	return (init_string = __esmMin((() => {
		reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
		reB = new RegExp(reA.source, "g");
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/value.js
function value_default(a, b) {
	var t = typeof b, c;
	return b == null || t === "boolean" ? constant_default$2(b) : (t === "number" ? number_default : t === "string" ? (c = color(b)) ? (b = c, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a, b);
}
function init_value() {
	return (init_value = __esmMin((() => {
		init_color();
		init_rgb();
		init_array$1();
		init_object();
		init_string();
		init_constant$1();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/round.js
function round_default$1(a, b) {
	return a = +a, b = +b, function(t) {
		return Math.round(a * (1 - t) + b * t);
	};
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/decompose.js
function decompose_default(a, b, c, d, e, f) {
	var scaleX, scaleY, skewX;
	if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
	if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
	if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
	if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
	return {
		translateX: e,
		translateY: f,
		rotate: Math.atan2(b, a) * degrees,
		skewX: Math.atan(skewX) * degrees,
		scaleX,
		scaleY
	};
}
var degrees, identity$2;
function init_decompose() {
	return (init_decompose = __esmMin((() => {
		degrees = 180 / Math.PI;
		identity$2 = {
			translateX: 0,
			translateY: 0,
			rotate: 0,
			skewX: 0,
			scaleX: 1,
			scaleY: 1
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/parse.js
function parseCss(value) {
	const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
	return m.isIdentity ? identity$2 : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
	if (value == null) return identity$2;
	if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
	svgNode.setAttribute("transform", value);
	if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
	value = value.matrix;
	return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}
var svgNode;
function init_parse() {
	return (init_parse = __esmMin((() => {
		init_decompose();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
	function pop(s) {
		return s.length ? s.pop() + " " : "";
	}
	function translate(xa, ya, xb, yb, s, q) {
		if (xa !== xb || ya !== yb) {
			var i = s.push("translate(", null, pxComma, null, pxParen);
			q.push({
				i: i - 4,
				x: number_default(xa, xb)
			}, {
				i: i - 2,
				x: number_default(ya, yb)
			});
		} else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
	}
	function rotate(a, b, s, q) {
		if (a !== b) {
			if (a - b > 180) b += 360;
			else if (b - a > 180) a += 360;
			q.push({
				i: s.push(pop(s) + "rotate(", null, degParen) - 2,
				x: number_default(a, b)
			});
		} else if (b) s.push(pop(s) + "rotate(" + b + degParen);
	}
	function skewX(a, b, s, q) {
		if (a !== b) q.push({
			i: s.push(pop(s) + "skewX(", null, degParen) - 2,
			x: number_default(a, b)
		});
		else if (b) s.push(pop(s) + "skewX(" + b + degParen);
	}
	function scale(xa, ya, xb, yb, s, q) {
		if (xa !== xb || ya !== yb) {
			var i = s.push(pop(s) + "scale(", null, ",", null, ")");
			q.push({
				i: i - 4,
				x: number_default(xa, xb)
			}, {
				i: i - 2,
				x: number_default(ya, yb)
			});
		} else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
	}
	return function(a, b) {
		var s = [], q = [];
		a = parse(a), b = parse(b);
		translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
		rotate(a.rotate, b.rotate, s, q);
		skewX(a.skewX, b.skewX, s, q);
		scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
		a = b = null;
		return function(t) {
			var i = -1, n = q.length, o;
			while (++i < n) s[(o = q[i]).i] = o.x(t);
			return s.join("");
		};
	};
}
var interpolateTransformCss, interpolateTransformSvg;
function init_transform() {
	return (init_transform = __esmMin((() => {
		init_parse();
		interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
		interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/hcl.js
function hcl(hue) {
	return function(start, end) {
		var h = hue((start = hcl$1(start)).h, (end = hcl$1(end)).h), c = nogamma(start.c, end.c), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
		return function(t) {
			start.h = h(t);
			start.c = c(t);
			start.l = l(t);
			start.opacity = opacity(t);
			return start + "";
		};
	};
}
var hcl_default;
function init_hcl() {
	return (init_hcl = __esmMin((() => {
		init_lab();
		init_color$1();
		hcl_default = hcl(hue);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timer.js
function now() {
	return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
	clockNow = 0;
}
function Timer() {
	this._call = this._time = this._next = null;
}
function timer(callback, delay, time) {
	var t = new Timer();
	t.restart(callback, delay, time);
	return t;
}
function timerFlush() {
	now();
	++frame;
	var t = taskHead, e;
	while (t) {
		if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
		t = t._next;
	}
	--frame;
}
function wake() {
	clockNow = (clockLast = clock.now()) + clockSkew;
	frame = timeout = 0;
	try {
		timerFlush();
	} finally {
		frame = 0;
		nap();
		clockNow = 0;
	}
}
function poke() {
	var now = clock.now(), delay = now - clockLast;
	if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
	var t0, t1 = taskHead, t2, time = Infinity;
	while (t1) if (t1._call) {
		if (time > t1._time) time = t1._time;
		t0 = t1, t1 = t1._next;
	} else {
		t2 = t1._next, t1._next = null;
		t1 = t0 ? t0._next = t2 : taskHead = t2;
	}
	taskTail = t0;
	sleep(time);
}
function sleep(time) {
	if (frame) return;
	if (timeout) timeout = clearTimeout(timeout);
	if (time - clockNow > 24) {
		if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
		if (interval) interval = clearInterval(interval);
	} else {
		if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
		frame = 1, setFrame(wake);
	}
}
var frame, timeout, interval, pokeDelay, taskHead, taskTail, clockLast, clockNow, clockSkew, clock, setFrame;
function init_timer() {
	return (init_timer = __esmMin((() => {
		frame = 0;
		timeout = 0;
		interval = 0;
		pokeDelay = 1e3;
		clockLast = 0;
		clockNow = 0;
		clockSkew = 0;
		clock = typeof performance === "object" && performance.now ? performance : Date;
		setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
			setTimeout(f, 17);
		};
		Timer.prototype = timer.prototype = {
			constructor: Timer,
			restart: function(callback, delay, time) {
				if (typeof callback !== "function") throw new TypeError("callback is not a function");
				time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
				if (!this._next && taskTail !== this) {
					if (taskTail) taskTail._next = this;
					else taskHead = this;
					taskTail = this;
				}
				this._call = callback;
				this._time = time;
				sleep();
			},
			stop: function() {
				if (this._call) {
					this._call = null;
					this._time = Infinity;
					sleep();
				}
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
	var t = new Timer();
	delay = delay == null ? 0 : +delay;
	t.restart((elapsed) => {
		t.stop();
		callback(elapsed + delay);
	}, delay, time);
	return t;
}
function init_timeout() {
	return (init_timeout = __esmMin((() => {
		init_timer();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js
function schedule_default(node, name, id, index, group, timing) {
	var schedules = node.__transition;
	if (!schedules) node.__transition = {};
	else if (id in schedules) return;
	create(node, id, {
		name,
		index,
		group,
		on: emptyOn,
		tween: emptyTween,
		time: timing.time,
		delay: timing.delay,
		duration: timing.duration,
		ease: timing.ease,
		timer: null,
		state: 0
	});
}
function init(node, id) {
	var schedule = get(node, id);
	if (schedule.state > 0) throw new Error("too late; already scheduled");
	return schedule;
}
function set(node, id) {
	var schedule = get(node, id);
	if (schedule.state > 3) throw new Error("too late; already running");
	return schedule;
}
function get(node, id) {
	var schedule = node.__transition;
	if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
	return schedule;
}
function create(node, id, self) {
	var schedules = node.__transition, tween;
	schedules[id] = self;
	self.timer = timer(schedule, 0, self.time);
	function schedule(elapsed) {
		self.state = 1;
		self.timer.restart(start, self.delay, self.time);
		if (self.delay <= elapsed) start(elapsed - self.delay);
	}
	function start(elapsed) {
		var i, j, n, o;
		if (self.state !== 1) return stop();
		for (i in schedules) {
			o = schedules[i];
			if (o.name !== self.name) continue;
			if (o.state === 3) return timeout_default(start);
			if (o.state === 4) {
				o.state = 6;
				o.timer.stop();
				o.on.call("interrupt", node, node.__data__, o.index, o.group);
				delete schedules[i];
			} else if (+i < id) {
				o.state = 6;
				o.timer.stop();
				o.on.call("cancel", node, node.__data__, o.index, o.group);
				delete schedules[i];
			}
		}
		timeout_default(function() {
			if (self.state === 3) {
				self.state = 4;
				self.timer.restart(tick, self.delay, self.time);
				tick(elapsed);
			}
		});
		self.state = 2;
		self.on.call("start", node, node.__data__, self.index, self.group);
		if (self.state !== 2) return;
		self.state = 3;
		tween = new Array(n = self.tween.length);
		for (i = 0, j = -1; i < n; ++i) if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
		tween.length = j + 1;
	}
	function tick(elapsed) {
		var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = 5, 1), i = -1, n = tween.length;
		while (++i < n) tween[i].call(node, t);
		if (self.state === 5) {
			self.on.call("end", node, node.__data__, self.index, self.group);
			stop();
		}
	}
	function stop() {
		self.state = 6;
		self.timer.stop();
		delete schedules[id];
		for (var i in schedules) return;
		delete node.__transition;
	}
}
var emptyOn, emptyTween;
function init_schedule() {
	return (init_schedule = __esmMin((() => {
		init_dispatch();
		init_timer(), init_timeout();
		emptyOn = dispatch("start", "end", "cancel", "interrupt");
		emptyTween = [];
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/interrupt.js
function interrupt_default$1(node, name) {
	var schedules = node.__transition, schedule, active, empty = true, i;
	if (!schedules) return;
	name = name == null ? null : name + "";
	for (i in schedules) {
		if ((schedule = schedules[i]).name !== name) {
			empty = false;
			continue;
		}
		active = schedule.state > 2 && schedule.state < 5;
		schedule.state = 6;
		schedule.timer.stop();
		schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
		delete schedules[i];
	}
	if (empty) delete node.__transition;
}
function init_interrupt() {
	return (init_interrupt = __esmMin((() => {
		init_schedule();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default(name) {
	return this.each(function() {
		interrupt_default$1(this, name);
	});
}
function init_interrupt$1() {
	return (init_interrupt$1 = __esmMin((() => {
		init_interrupt();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id, name) {
	var tween0, tween1;
	return function() {
		var schedule = set(this, id), tween = schedule.tween;
		if (tween !== tween0) {
			tween1 = tween0 = tween;
			for (var i = 0, n = tween1.length; i < n; ++i) if (tween1[i].name === name) {
				tween1 = tween1.slice();
				tween1.splice(i, 1);
				break;
			}
		}
		schedule.tween = tween1;
	};
}
function tweenFunction(id, name, value) {
	var tween0, tween1;
	if (typeof value !== "function") throw new Error();
	return function() {
		var schedule = set(this, id), tween = schedule.tween;
		if (tween !== tween0) {
			tween1 = (tween0 = tween).slice();
			for (var t = {
				name,
				value
			}, i = 0, n = tween1.length; i < n; ++i) if (tween1[i].name === name) {
				tween1[i] = t;
				break;
			}
			if (i === n) tween1.push(t);
		}
		schedule.tween = tween1;
	};
}
function tween_default(name, value) {
	var id = this._id;
	name += "";
	if (arguments.length < 2) {
		var tween = get(this.node(), id).tween;
		for (var i = 0, n = tween.length, t; i < n; ++i) if ((t = tween[i]).name === name) return t.value;
		return null;
	}
	return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}
function tweenValue(transition, name, value) {
	var id = transition._id;
	transition.each(function() {
		var schedule = set(this, id);
		(schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
	});
	return function(node) {
		return get(node, id).value[name];
	};
}
function init_tween() {
	return (init_tween = __esmMin((() => {
		init_schedule();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a, b) {
	var c;
	return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}
function init_interpolate() {
	return (init_interpolate = __esmMin((() => {
		init_color();
		init_rgb(), init_string();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attr.js
function attrRemove(name) {
	return function() {
		this.removeAttribute(name);
	};
}
function attrRemoveNS(fullname) {
	return function() {
		this.removeAttributeNS(fullname.space, fullname.local);
	};
}
function attrConstant(name, interpolate, value1) {
	var string00, string1 = value1 + "", interpolate0;
	return function() {
		var string0 = this.getAttribute(name);
		return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	};
}
function attrConstantNS(fullname, interpolate, value1) {
	var string00, string1 = value1 + "", interpolate0;
	return function() {
		var string0 = this.getAttributeNS(fullname.space, fullname.local);
		return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	};
}
function attrFunction(name, interpolate, value) {
	var string00, string10, interpolate0;
	return function() {
		var string0, value1 = value(this), string1;
		if (value1 == null) return void this.removeAttribute(name);
		string0 = this.getAttribute(name);
		string1 = value1 + "";
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	};
}
function attrFunctionNS(fullname, interpolate, value) {
	var string00, string10, interpolate0;
	return function() {
		var string0, value1 = value(this), string1;
		if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
		string0 = this.getAttributeNS(fullname.space, fullname.local);
		string1 = value1 + "";
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	};
}
function attr_default(name, value) {
	var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
	return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
function init_attr$1() {
	return (init_attr$1 = __esmMin((() => {
		init_transform();
		init_namespace();
		init_tween();
		init_interpolate();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
	return function(t) {
		this.setAttribute(name, i.call(this, t));
	};
}
function attrInterpolateNS(fullname, i) {
	return function(t) {
		this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
	};
}
function attrTweenNS(fullname, value) {
	var t0, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
		return t0;
	}
	tween._value = value;
	return tween;
}
function attrTween(name, value) {
	var t0, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
		return t0;
	}
	tween._value = value;
	return tween;
}
function attrTween_default(name, value) {
	var key = "attr." + name;
	if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	if (value == null) return this.tween(key, null);
	if (typeof value !== "function") throw new Error();
	var fullname = namespace_default(name);
	return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
function init_attrTween() {
	return (init_attrTween = __esmMin((() => {
		init_namespace();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/delay.js
function delayFunction(id, value) {
	return function() {
		init(this, id).delay = +value.apply(this, arguments);
	};
}
function delayConstant(id, value) {
	return value = +value, function() {
		init(this, id).delay = value;
	};
}
function delay_default(value) {
	var id = this._id;
	return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
}
function init_delay() {
	return (init_delay = __esmMin((() => {
		init_schedule();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/duration.js
function durationFunction(id, value) {
	return function() {
		set(this, id).duration = +value.apply(this, arguments);
	};
}
function durationConstant(id, value) {
	return value = +value, function() {
		set(this, id).duration = value;
	};
}
function duration_default(value) {
	var id = this._id;
	return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
}
function init_duration() {
	return (init_duration = __esmMin((() => {
		init_schedule();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/ease.js
function easeConstant(id, value) {
	if (typeof value !== "function") throw new Error();
	return function() {
		set(this, id).ease = value;
	};
}
function ease_default(value) {
	var id = this._id;
	return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
}
function init_ease() {
	return (init_ease = __esmMin((() => {
		init_schedule();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (typeof v !== "function") throw new Error();
		set(this, id).ease = v;
	};
}
function easeVarying_default(value) {
	if (typeof value !== "function") throw new Error();
	return this.each(easeVarying(this._id, value));
}
function init_easeVarying() {
	return (init_easeVarying = __esmMin((() => {
		init_schedule();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/filter.js
function filter_default(match) {
	if (typeof match !== "function") match = matcher_default(match);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
	return new Transition(subgroups, this._parents, this._name, this._id);
}
function init_filter$1() {
	return (init_filter$1 = __esmMin((() => {
		init_transition$1();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/merge.js
function merge_default(transition) {
	if (transition._id !== this._id) throw new Error();
	for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) if (node = group0[i] || group1[i]) merge[i] = node;
	for (; j < m0; ++j) merges[j] = groups0[j];
	return new Transition(merges, this._parents, this._name, this._id);
}
function init_merge$1() {
	return (init_merge$1 = __esmMin((() => {
		init_transition$1();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/on.js
function start(name) {
	return (name + "").trim().split(/^|\s+/).every(function(t) {
		var i = t.indexOf(".");
		if (i >= 0) t = t.slice(0, i);
		return !t || t === "start";
	});
}
function onFunction(id, name, listener) {
	var on0, on1, sit = start(name) ? init : set;
	return function() {
		var schedule = sit(this, id), on = schedule.on;
		if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
		schedule.on = on1;
	};
}
function on_default(name, listener) {
	var id = this._id;
	return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
}
function init_on$1() {
	return (init_on$1 = __esmMin((() => {
		init_schedule();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/remove.js
function removeFunction(id) {
	return function() {
		var parent = this.parentNode;
		for (var i in this.__transition) if (+i !== id) return;
		if (parent) parent.removeChild(this);
	};
}
function remove_default() {
	return this.on("end.remove", removeFunction(this._id));
}
function init_remove$1() {
	return (init_remove$1 = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/select.js
function select_default(select) {
	var name = this._name, id = this._id;
	if (typeof select !== "function") select = selector_default(select);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
		if ("__data__" in node) subnode.__data__ = node.__data__;
		subgroup[i] = subnode;
		schedule_default(subgroup[i], name, id, i, subgroup, get(node, id));
	}
	return new Transition(subgroups, this._parents, name, id);
}
function init_select$2() {
	return (init_select$2 = __esmMin((() => {
		init_selector();
		init_transition$1();
		init_schedule();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default(select) {
	var name = this._name, id = this._id;
	if (typeof select !== "function") select = selectorAll_default(select);
	for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) {
		for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) if (child = children[k]) schedule_default(child, name, id, k, children, inherit);
		subgroups.push(children);
		parents.push(node);
	}
	return new Transition(subgroups, parents, name, id);
}
function init_selectAll$1() {
	return (init_selectAll$1 = __esmMin((() => {
		init_selectorAll();
		init_transition$1();
		init_schedule();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selection.js
function selection_default() {
	return new Selection(this._groups, this._parents);
}
var Selection;
function init_selection$1() {
	return (init_selection$1 = __esmMin((() => {
		init_selection();
		Selection = selection.prototype.constructor;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
	var string00, string10, interpolate0;
	return function() {
		var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
	};
}
function styleRemove(name) {
	return function() {
		this.style.removeProperty(name);
	};
}
function styleConstant(name, interpolate, value1) {
	var string00, string1 = value1 + "", interpolate0;
	return function() {
		var string0 = styleValue(this, name);
		return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	};
}
function styleFunction(name, interpolate, value) {
	var string00, string10, interpolate0;
	return function() {
		var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
		if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	};
}
function styleMaybeRemove(id, name) {
	var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
	return function() {
		var schedule = set(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : void 0;
		if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
		schedule.on = on1;
	};
}
function style_default(name, value, priority) {
	var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
	return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
function init_style$1() {
	return (init_style$1 = __esmMin((() => {
		init_transform();
		init_style();
		init_schedule();
		init_tween();
		init_interpolate();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
	return function(t) {
		this.style.setProperty(name, i.call(this, t), priority);
	};
}
function styleTween(name, value, priority) {
	var t, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
		return t;
	}
	tween._value = value;
	return tween;
}
function styleTween_default(name, value, priority) {
	var key = "style." + (name += "");
	if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	if (value == null) return this.tween(key, null);
	if (typeof value !== "function") throw new Error();
	return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
function init_styleTween() {
	return (init_styleTween = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/text.js
function textConstant(value) {
	return function() {
		this.textContent = value;
	};
}
function textFunction(value) {
	return function() {
		var value1 = value(this);
		this.textContent = value1 == null ? "" : value1;
	};
}
function text_default(value) {
	return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
function init_text$1() {
	return (init_text$1 = __esmMin((() => {
		init_tween();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
	return function(t) {
		this.textContent = i.call(this, t);
	};
}
function textTween(value) {
	var t0, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
		return t0;
	}
	tween._value = value;
	return tween;
}
function textTween_default(value) {
	var key = "text";
	if (arguments.length < 1) return (key = this.tween(key)) && key._value;
	if (value == null) return this.tween(key, null);
	if (typeof value !== "function") throw new Error();
	return this.tween(key, textTween(value));
}
function init_textTween() {
	return (init_textTween = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/transition.js
function transition_default$1() {
	var name = this._name, id0 = this._id, id1 = newId();
	for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) {
		var inherit = get(node, id0);
		schedule_default(node, name, id1, i, group, {
			time: inherit.time + inherit.delay + inherit.duration,
			delay: 0,
			duration: inherit.duration,
			ease: inherit.ease
		});
	}
	return new Transition(groups, this._parents, name, id1);
}
function init_transition() {
	return (init_transition = __esmMin((() => {
		init_transition$1();
		init_schedule();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/end.js
function end_default() {
	var on0, on1, that = this, id = that._id, size = that.size();
	return new Promise(function(resolve, reject) {
		var cancel = { value: reject }, end = { value: function() {
			if (--size === 0) resolve();
		} };
		that.each(function() {
			var schedule = set(this, id), on = schedule.on;
			if (on !== on0) {
				on1 = (on0 = on).copy();
				on1._.cancel.push(cancel);
				on1._.interrupt.push(cancel);
				on1._.end.push(end);
			}
			schedule.on = on1;
		});
		if (size === 0) resolve();
	});
}
function init_end() {
	return (init_end = __esmMin((() => {
		init_schedule();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js
function Transition(groups, parents, name, id) {
	this._groups = groups;
	this._parents = parents;
	this._name = name;
	this._id = id;
}
function transition(name) {
	return selection().transition(name);
}
function newId() {
	return ++id;
}
var id, selection_prototype;
function init_transition$1() {
	return (init_transition$1 = __esmMin((() => {
		init_selection();
		init_attr$1();
		init_attrTween();
		init_delay();
		init_duration();
		init_ease();
		init_easeVarying();
		init_filter$1();
		init_merge$1();
		init_on$1();
		init_remove$1();
		init_select$2();
		init_selectAll$1();
		init_selection$1();
		init_style$1();
		init_styleTween();
		init_text$1();
		init_textTween();
		init_transition();
		init_tween();
		init_end();
		id = 0;
		selection_prototype = selection.prototype;
		Transition.prototype = transition.prototype = {
			constructor: Transition,
			select: select_default,
			selectAll: selectAll_default,
			selectChild: selection_prototype.selectChild,
			selectChildren: selection_prototype.selectChildren,
			filter: filter_default,
			merge: merge_default,
			selection: selection_default,
			transition: transition_default$1,
			call: selection_prototype.call,
			nodes: selection_prototype.nodes,
			node: selection_prototype.node,
			size: selection_prototype.size,
			empty: selection_prototype.empty,
			each: selection_prototype.each,
			on: on_default,
			attr: attr_default,
			attrTween: attrTween_default,
			style: style_default,
			styleTween: styleTween_default,
			text: text_default,
			textTween: textTween_default,
			remove: remove_default,
			tween: tween_default,
			delay: delay_default,
			duration: duration_default,
			ease: ease_default,
			easeVarying: easeVarying_default,
			end: end_default,
			[Symbol.iterator]: selection_prototype[Symbol.iterator]
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-ease@3.0.1/node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
	return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/transition.js
function inherit(node, id) {
	var timing;
	while (!(timing = node.__transition) || !(timing = timing[id])) if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
	return timing;
}
function transition_default(name) {
	var id, timing;
	if (name instanceof Transition) id = name._id, name = name._name;
	else id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
	for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) schedule_default(node, name, id, i, group, timing || inherit(node, id));
	return new Transition(groups, this._parents, name, id);
}
var defaultTiming;
function init_transition$2() {
	return (init_transition$2 = __esmMin((() => {
		init_transition$1();
		init_schedule();
		init_timer();
		defaultTiming = {
			time: null,
			delay: 0,
			duration: 250,
			ease: cubicInOut
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/index.js
function init_selection$2() {
	return (init_selection$2 = __esmMin((() => {
		init_selection();
		init_interrupt$1();
		init_transition$2();
		selection.prototype.interrupt = interrupt_default;
		selection.prototype.transition = transition_default;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/index.js
function init_src$1() {
	return (init_src$1 = __esmMin((() => {
		init_selection$2();
	})))();
}
function type(t) {
	return { type: t };
}
var abs$1, max$1, min$1;
function init_brush() {
	return (init_brush = __esmMin((() => {
		init_src$1();
		({abs: abs$1, max: max$1, min: min$1} = Math);
		["w", "e"].map(type);
		["n", "s"].map(type);
		[
			"n",
			"w",
			"e",
			"s",
			"nw",
			"ne",
			"sw",
			"se"
		].map(type);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-brush@3.0.0/node_modules/d3-brush/src/index.js
function init_src$2() {
	return (init_src$2 = __esmMin((() => {
		init_brush();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-path@3.1.0/node_modules/d3-path/src/path.js
function append(strings) {
	this._ += strings[0];
	for (let i = 1, n = strings.length; i < n; ++i) this._ += arguments[i] + strings[i];
}
function appendRound(digits) {
	let d = Math.floor(digits);
	if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
	if (d > 15) return append;
	const k = 10 ** d;
	return function(strings) {
		this._ += strings[0];
		for (let i = 1, n = strings.length; i < n; ++i) this._ += Math.round(arguments[i] * k) / k + strings[i];
	};
}
function path() {
	return new Path();
}
var pi$1, tau$1, epsilon$1, tauEpsilon, Path;
function init_path() {
	return (init_path = __esmMin((() => {
		pi$1 = Math.PI;
		tau$1 = 2 * pi$1;
		epsilon$1 = 1e-6;
		tauEpsilon = tau$1 - epsilon$1;
		Path = class {
			constructor(digits) {
				this._x0 = this._y0 = this._x1 = this._y1 = null;
				this._ = "";
				this._append = digits == null ? append : appendRound(digits);
			}
			moveTo(x, y) {
				this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
			}
			closePath() {
				if (this._x1 !== null) {
					this._x1 = this._x0, this._y1 = this._y0;
					this._append`Z`;
				}
			}
			lineTo(x, y) {
				this._append`L${this._x1 = +x},${this._y1 = +y}`;
			}
			quadraticCurveTo(x1, y1, x, y) {
				this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
			}
			bezierCurveTo(x1, y1, x2, y2, x, y) {
				this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
			}
			arcTo(x1, y1, x2, y2, r) {
				x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
				if (r < 0) throw new Error(`negative radius: ${r}`);
				let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
				if (this._x1 === null) this._append`M${this._x1 = x1},${this._y1 = y1}`;
				else if (!(l01_2 > epsilon$1));
				else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) this._append`L${this._x1 = x1},${this._y1 = y1}`;
				else {
					let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
					if (Math.abs(t01 - 1) > epsilon$1) this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
					this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
				}
			}
			arc(x, y, r, a0, a1, ccw) {
				x = +x, y = +y, r = +r, ccw = !!ccw;
				if (r < 0) throw new Error(`negative radius: ${r}`);
				let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
				if (this._x1 === null) this._append`M${x0},${y0}`;
				else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) this._append`L${x0},${y0}`;
				if (!r) return;
				if (da < 0) da = da % tau$1 + tau$1;
				if (da > tauEpsilon) this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
				else if (da > epsilon$1) this._append`A${r},${r},0,${+(da >= pi$1)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
			}
			rect(x, y, w, h) {
				this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
			}
			toString() {
				return this._;
			}
		};
		path.prototype = Path.prototype;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x) {
	return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function formatDecimalParts(x, p) {
	if (!isFinite(x) || x === 0) return null;
	var i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e"), coefficient = x.slice(0, i);
	return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/exponent.js
function exponent_default(x) {
	return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}
function init_exponent() {
	return (init_exponent = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
	return function(value, width) {
		var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
		while (i > 0 && g > 0) {
			if (length + g + 1 > width) g = Math.max(1, width - length);
			t.push(value.substring(i -= g, i + g));
			if ((length += g + 1) > width) break;
			g = grouping[j = (j + 1) % grouping.length];
		}
		return t.reverse().join(thousands);
	};
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
	return function(value) {
		return value.replace(/[0-9]/g, function(i) {
			return numerals[+i];
		});
	};
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/formatSpecifier.js
function formatSpecifier(specifier) {
	if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
	var match;
	return new FormatSpecifier({
		fill: match[1],
		align: match[2],
		sign: match[3],
		symbol: match[4],
		zero: match[5],
		width: match[6],
		comma: match[7],
		precision: match[8] && match[8].slice(1),
		trim: match[9],
		type: match[10]
	});
}
function FormatSpecifier(specifier) {
	this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
	this.align = specifier.align === void 0 ? ">" : specifier.align + "";
	this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
	this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
	this.zero = !!specifier.zero;
	this.width = specifier.width === void 0 ? void 0 : +specifier.width;
	this.comma = !!specifier.comma;
	this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
	this.trim = !!specifier.trim;
	this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
var re;
function init_formatSpecifier() {
	return (init_formatSpecifier = __esmMin((() => {
		re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
		formatSpecifier.prototype = FormatSpecifier.prototype;
		FormatSpecifier.prototype.toString = function() {
			return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s) {
	out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) switch (s[i]) {
		case ".":
			i0 = i1 = i;
			break;
		case "0":
			if (i0 === 0) i0 = i;
			i1 = i;
			break;
		default:
			if (!+s[i]) break out;
			if (i0 > 0) i0 = 0;
	}
	return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/formatPrefixAuto.js
function formatPrefixAuto_default(x, p) {
	var d = formatDecimalParts(x, p);
	if (!d) return prefixExponent = void 0, x.toPrecision(p);
	var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
	return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0];
}
var prefixExponent;
function init_formatPrefixAuto() {
	return (init_formatPrefixAuto = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x, p) {
	var d = formatDecimalParts(x, p);
	if (!d) return x + "";
	var coefficient = d[0], exponent = d[1];
	return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}
function init_formatRounded() {
	return (init_formatRounded = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/formatTypes.js
var formatTypes_default;
function init_formatTypes() {
	return (init_formatTypes = __esmMin((() => {
		init_formatPrefixAuto();
		init_formatRounded();
		formatTypes_default = {
			"%": (x, p) => (x * 100).toFixed(p),
			"b": (x) => Math.round(x).toString(2),
			"c": (x) => x + "",
			"d": formatDecimal_default,
			"e": (x, p) => x.toExponential(p),
			"f": (x, p) => x.toFixed(p),
			"g": (x, p) => x.toPrecision(p),
			"o": (x) => Math.round(x).toString(8),
			"p": (x, p) => formatRounded_default(x * 100, p),
			"r": formatRounded_default,
			"s": formatPrefixAuto_default,
			"X": (x) => Math.round(x).toString(16).toUpperCase(),
			"x": (x) => Math.round(x).toString(16)
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/identity.js
function identity_default$1(x) {
	return x;
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/locale.js
function locale_default(locale) {
	var group = locale.grouping === void 0 || locale.thousands === void 0 ? identity_default$1 : formatGroup_default(map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === void 0 ? "" : locale.currency[0] + "", currencySuffix = locale.currency === void 0 ? "" : locale.currency[1] + "", decimal = locale.decimal === void 0 ? "." : locale.decimal + "", numerals = locale.numerals === void 0 ? identity_default$1 : formatNumerals_default(map.call(locale.numerals, String)), percent = locale.percent === void 0 ? "%" : locale.percent + "", minus = locale.minus === void 0 ? "−" : locale.minus + "", nan = locale.nan === void 0 ? "NaN" : locale.nan + "";
	function newFormat(specifier, options) {
		specifier = formatSpecifier(specifier);
		var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
		if (type === "n") comma = true, type = "g";
		else if (!formatTypes_default[type]) precision === void 0 && (precision = 12), trim = true, type = "g";
		if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
		var prefix = (options && options.prefix !== void 0 ? options.prefix : "") + (symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : ""), suffix = (symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "") + (options && options.suffix !== void 0 ? options.suffix : "");
		var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
		precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
		function format(value) {
			var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
			if (type === "c") {
				valueSuffix = formatType(value) + valueSuffix;
				value = "";
			} else {
				value = +value;
				var valueNegative = value < 0 || 1 / value < 0;
				value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
				if (trim) value = formatTrim_default(value);
				if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
				valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
				valueSuffix = (type === "s" && !isNaN(value) && prefixExponent !== void 0 ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
				if (maybeSuffix) {
					i = -1, n = value.length;
					while (++i < n) if (c = value.charCodeAt(i), 48 > c || c > 57) {
						valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
						value = value.slice(0, i);
						break;
					}
				}
			}
			if (comma && !zero) value = group(value, Infinity);
			var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
			if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
			switch (align) {
				case "<":
					value = valuePrefix + value + valueSuffix + padding;
					break;
				case "=":
					value = valuePrefix + padding + value + valueSuffix;
					break;
				case "^":
					value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
					break;
				default: value = padding + valuePrefix + value + valueSuffix;
			}
			return numerals(value);
		}
		format.toString = function() {
			return specifier + "";
		};
		return format;
	}
	function formatPrefix(specifier, value) {
		var e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k = Math.pow(10, -e), f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier), { suffix: prefixes[8 + e / 3] });
		return function(value) {
			return f(k * value);
		};
	}
	return {
		format: newFormat,
		formatPrefix
	};
}
var map, prefixes;
function init_locale() {
	return (init_locale = __esmMin((() => {
		init_exponent();
		init_formatSpecifier();
		init_formatTypes();
		init_formatPrefixAuto();
		map = Array.prototype.map;
		prefixes = [
			"y",
			"z",
			"a",
			"f",
			"p",
			"n",
			"µ",
			"m",
			"",
			"k",
			"M",
			"G",
			"T",
			"P",
			"E",
			"Z",
			"Y"
		];
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/defaultLocale.js
function defaultLocale$1(definition) {
	locale$1 = locale_default(definition);
	format = locale$1.format;
	formatPrefix = locale$1.formatPrefix;
	return locale$1;
}
var locale$1, format, formatPrefix;
function init_defaultLocale() {
	return (init_defaultLocale = __esmMin((() => {
		init_locale();
		defaultLocale$1({
			thousands: ",",
			grouping: [3],
			currency: ["$", ""]
		});
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
	return Math.max(0, -exponent_default(Math.abs(step)));
}
function init_precisionFixed() {
	return (init_precisionFixed = __esmMin((() => {
		init_exponent();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}
function init_precisionPrefix() {
	return (init_precisionPrefix = __esmMin((() => {
		init_exponent();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-format@3.1.2/node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max) {
	step = Math.abs(step), max = Math.abs(max) - step;
	return Math.max(0, exponent_default(max) - exponent_default(step)) + 1;
}
function init_precisionRound() {
	return (init_precisionRound = __esmMin((() => {
		init_exponent();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/count.js
function count(node) {
	var sum = 0, children = node.children, i = children && children.length;
	if (!i) sum = 1;
	else while (--i >= 0) sum += children[i].value;
	node.value = sum;
}
function count_default() {
	return this.eachAfter(count);
}
function init_count() {
	return (init_count = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/each.js
function each_default(callback, that) {
	let index = -1;
	for (const node of this) callback.call(that, node, ++index, this);
	return this;
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default(callback, that) {
	var node = this, nodes = [node], children, i, index = -1;
	while (node = nodes.pop()) {
		callback.call(that, node, ++index, this);
		if (children = node.children) for (i = children.length - 1; i >= 0; --i) nodes.push(children[i]);
	}
	return this;
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default(callback, that) {
	var node = this, nodes = [node], next = [], children, i, n, index = -1;
	while (node = nodes.pop()) {
		next.push(node);
		if (children = node.children) for (i = 0, n = children.length; i < n; ++i) nodes.push(children[i]);
	}
	while (node = next.pop()) callback.call(that, node, ++index, this);
	return this;
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/find.js
function find_default(callback, that) {
	let index = -1;
	for (const node of this) if (callback.call(that, node, ++index, this)) return node;
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/sum.js
function sum_default(value) {
	return this.eachAfter(function(node) {
		var sum = +value(node.data) || 0, children = node.children, i = children && children.length;
		while (--i >= 0) sum += children[i].value;
		node.value = sum;
	});
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/sort.js
function sort_default(compare) {
	return this.eachBefore(function(node) {
		if (node.children) node.children.sort(compare);
	});
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/path.js
function path_default(end) {
	var start = this, ancestor = leastCommonAncestor(start, end), nodes = [start];
	while (start !== ancestor) {
		start = start.parent;
		nodes.push(start);
	}
	var k = nodes.length;
	while (end !== ancestor) {
		nodes.splice(k, 0, end);
		end = end.parent;
	}
	return nodes;
}
function leastCommonAncestor(a, b) {
	if (a === b) return a;
	var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
	a = aNodes.pop();
	b = bNodes.pop();
	while (a === b) {
		c = a;
		a = aNodes.pop();
		b = bNodes.pop();
	}
	return c;
}
function init_path$1() {
	return (init_path$1 = __esmMin((() => {})))();
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default() {
	var node = this, nodes = [node];
	while (node = node.parent) nodes.push(node);
	return nodes;
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default() {
	return Array.from(this);
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default() {
	var leaves = [];
	this.eachBefore(function(node) {
		if (!node.children) leaves.push(node);
	});
	return leaves;
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/links.js
function links_default() {
	var root = this, links = [];
	root.each(function(node) {
		if (node !== root) links.push({
			source: node.parent,
			target: node
		});
	});
	return links;
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/iterator.js
function* iterator_default() {
	var node = this, current, next = [node], children, i, n;
	do {
		current = next.reverse(), next = [];
		while (node = current.pop()) {
			yield node;
			if (children = node.children) for (i = 0, n = children.length; i < n; ++i) next.push(children[i]);
		}
	} while (next.length);
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/hierarchy/index.js
function hierarchy(data, children) {
	if (data instanceof Map) {
		data = [void 0, data];
		if (children === void 0) children = mapChildren;
	} else if (children === void 0) children = objectChildren;
	var root = new Node(data), node, nodes = [root], child, childs, i, n;
	while (node = nodes.pop()) if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
		node.children = childs;
		for (i = n - 1; i >= 0; --i) {
			nodes.push(child = childs[i] = new Node(childs[i]));
			child.parent = node;
			child.depth = node.depth + 1;
		}
	}
	return root.eachBefore(computeHeight);
}
function node_copy() {
	return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
	return d.children;
}
function mapChildren(d) {
	return Array.isArray(d) ? d[1] : null;
}
function copyData(node) {
	if (node.data.value !== void 0) node.value = node.data.value;
	node.data = node.data.data;
}
function computeHeight(node) {
	var height = 0;
	do
		node.height = height;
	while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
	this.data = data;
	this.depth = this.height = 0;
	this.parent = null;
}
function init_hierarchy() {
	return (init_hierarchy = __esmMin((() => {
		init_count();
		init_path$1();
		Node.prototype = hierarchy.prototype = {
			constructor: Node,
			count: count_default,
			each: each_default,
			eachAfter: eachAfter_default,
			eachBefore: eachBefore_default,
			find: find_default,
			sum: sum_default,
			sort: sort_default,
			path: path_default,
			ancestors: ancestors_default,
			descendants: descendants_default,
			leaves: leaves_default,
			links: links_default,
			copy: node_copy,
			[Symbol.iterator]: iterator_default
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/accessors.js
function required(f) {
	if (typeof f !== "function") throw new Error();
	return f;
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/constant.js
function constantZero() {
	return 0;
}
function constant_default$1(x) {
	return function() {
		return x;
	};
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/treemap/round.js
function round_default(node) {
	node.x0 = Math.round(node.x0);
	node.y0 = Math.round(node.y0);
	node.x1 = Math.round(node.x1);
	node.y1 = Math.round(node.y1);
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/treemap/dice.js
function dice_default(parent, x0, y0, x1, y1) {
	var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (x1 - x0) / parent.value;
	while (++i < n) {
		node = nodes[i], node.y0 = y0, node.y1 = y1;
		node.x0 = x0, node.x1 = x0 += node.value * k;
	}
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/treemap/slice.js
function slice_default(parent, x0, y0, x1, y1) {
	var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (y1 - y0) / parent.value;
	while (++i < n) {
		node = nodes[i], node.x0 = x0, node.x1 = x1;
		node.y0 = y0, node.y1 = y0 += node.value * k;
	}
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/treemap/squarify.js
function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
	var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
	while (i0 < n) {
		dx = x1 - x0, dy = y1 - y0;
		do
			sumValue = nodes[i1++].value;
		while (!sumValue && i1 < n);
		minValue = maxValue = sumValue;
		alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
		beta = sumValue * sumValue * alpha;
		minRatio = Math.max(maxValue / beta, beta / minValue);
		for (; i1 < n; ++i1) {
			sumValue += nodeValue = nodes[i1].value;
			if (nodeValue < minValue) minValue = nodeValue;
			if (nodeValue > maxValue) maxValue = nodeValue;
			beta = sumValue * sumValue * alpha;
			newRatio = Math.max(maxValue / beta, beta / minValue);
			if (newRatio > minRatio) {
				sumValue -= nodeValue;
				break;
			}
			minRatio = newRatio;
		}
		rows.push(row = {
			value: sumValue,
			dice: dx < dy,
			children: nodes.slice(i0, i1)
		});
		if (row.dice) dice_default(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
		else slice_default(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
		value -= sumValue, i0 = i1;
	}
	return rows;
}
var phi, squarify_default;
function init_squarify() {
	return (init_squarify = __esmMin((() => {
		phi = (1 + Math.sqrt(5)) / 2;
		squarify_default = (function custom(ratio) {
			function squarify(parent, x0, y0, x1, y1) {
				squarifyRatio(ratio, parent, x0, y0, x1, y1);
			}
			squarify.ratio = function(x) {
				return custom((x = +x) > 1 ? x : 1);
			};
			return squarify;
		})(phi);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-hierarchy@3.1.2/node_modules/d3-hierarchy/src/treemap/index.js
function treemap_default() {
	var tile = squarify_default, round = false, dx = 1, dy = 1, paddingStack = [0], paddingInner = constantZero, paddingTop = constantZero, paddingRight = constantZero, paddingBottom = constantZero, paddingLeft = constantZero;
	function treemap(root) {
		root.x0 = root.y0 = 0;
		root.x1 = dx;
		root.y1 = dy;
		root.eachBefore(positionNode);
		paddingStack = [0];
		if (round) root.eachBefore(round_default);
		return root;
	}
	function positionNode(node) {
		var p = paddingStack[node.depth], x0 = node.x0 + p, y0 = node.y0 + p, x1 = node.x1 - p, y1 = node.y1 - p;
		if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
		if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
		node.x0 = x0;
		node.y0 = y0;
		node.x1 = x1;
		node.y1 = y1;
		if (node.children) {
			p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
			x0 += paddingLeft(node) - p;
			y0 += paddingTop(node) - p;
			x1 -= paddingRight(node) - p;
			y1 -= paddingBottom(node) - p;
			if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
			if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
			tile(node, x0, y0, x1, y1);
		}
	}
	treemap.round = function(x) {
		return arguments.length ? (round = !!x, treemap) : round;
	};
	treemap.size = function(x) {
		return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
	};
	treemap.tile = function(x) {
		return arguments.length ? (tile = required(x), treemap) : tile;
	};
	treemap.padding = function(x) {
		return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
	};
	treemap.paddingInner = function(x) {
		return arguments.length ? (paddingInner = typeof x === "function" ? x : constant_default$1(+x), treemap) : paddingInner;
	};
	treemap.paddingOuter = function(x) {
		return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
	};
	treemap.paddingTop = function(x) {
		return arguments.length ? (paddingTop = typeof x === "function" ? x : constant_default$1(+x), treemap) : paddingTop;
	};
	treemap.paddingRight = function(x) {
		return arguments.length ? (paddingRight = typeof x === "function" ? x : constant_default$1(+x), treemap) : paddingRight;
	};
	treemap.paddingBottom = function(x) {
		return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant_default$1(+x), treemap) : paddingBottom;
	};
	treemap.paddingLeft = function(x) {
		return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant_default$1(+x), treemap) : paddingLeft;
	};
	return treemap;
}
function init_treemap() {
	return (init_treemap = __esmMin((() => {
		init_squarify();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js
function initRange(domain, range) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(domain);
			break;
		default: this.range(range).domain(domain);
	}
	return this;
}
// ../../common/temp/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/ordinal.js
function ordinal() {
	var index = new InternMap(), domain = [], range = [], unknown = implicit;
	function scale(d) {
		let i = index.get(d);
		if (i === void 0) {
			if (unknown !== implicit) return unknown;
			index.set(d, i = domain.push(d) - 1);
		}
		return range[i % range.length];
	}
	scale.domain = function(_) {
		if (!arguments.length) return domain.slice();
		domain = [], index = new InternMap();
		for (const value of _) {
			if (index.has(value)) continue;
			index.set(value, domain.push(value) - 1);
		}
		return scale;
	};
	scale.range = function(_) {
		return arguments.length ? (range = Array.from(_), scale) : range.slice();
	};
	scale.unknown = function(_) {
		return arguments.length ? (unknown = _, scale) : unknown;
	};
	scale.copy = function() {
		return ordinal(domain, range).unknown(unknown);
	};
	initRange.apply(scale, arguments);
	return scale;
}
var implicit;
function init_ordinal() {
	return (init_ordinal = __esmMin((() => {
		init_src();
		implicit = Symbol("implicit");
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/band.js
function band() {
	var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = .5;
	delete scale.unknown;
	function rescale() {
		var n = domain().length, reverse = r1 < r0, start = reverse ? r1 : r0, stop = reverse ? r0 : r1;
		step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
		if (round) step = Math.floor(step);
		start += (stop - start - step * (n - paddingInner)) * align;
		bandwidth = step * (1 - paddingInner);
		if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
		var values = range(n).map(function(i) {
			return start + step * i;
		});
		return ordinalRange(reverse ? values.reverse() : values);
	}
	scale.domain = function(_) {
		return arguments.length ? (domain(_), rescale()) : domain();
	};
	scale.range = function(_) {
		return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
	};
	scale.rangeRound = function(_) {
		return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
	};
	scale.bandwidth = function() {
		return bandwidth;
	};
	scale.step = function() {
		return step;
	};
	scale.round = function(_) {
		return arguments.length ? (round = !!_, rescale()) : round;
	};
	scale.padding = function(_) {
		return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
	};
	scale.paddingInner = function(_) {
		return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
	};
	scale.paddingOuter = function(_) {
		return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
	};
	scale.align = function(_) {
		return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
	};
	scale.copy = function() {
		return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
	};
	return initRange.apply(rescale(), arguments);
}
function init_band() {
	return (init_band = __esmMin((() => {
		init_ordinal();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/constant.js
function constants(x) {
	return function() {
		return x;
	};
}
// ../../common/temp/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/number.js
function number$1(x) {
	return +x;
}
// ../../common/temp/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js
function identity$1(x) {
	return x;
}
function normalize(a, b) {
	return (b -= a = +a) ? function(x) {
		return (x - a) / b;
	} : constants(isNaN(b) ? NaN : .5);
}
function clamper(a, b) {
	var t;
	if (a > b) t = a, a = b, b = t;
	return function(x) {
		return Math.max(a, Math.min(b, x));
	};
}
function bimap(domain, range, interpolate) {
	var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
	if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
	else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
	return function(x) {
		return r0(d0(x));
	};
}
function polymap(domain, range, interpolate) {
	var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
	if (domain[j] < domain[0]) {
		domain = domain.slice().reverse();
		range = range.slice().reverse();
	}
	while (++i < j) {
		d[i] = normalize(domain[i], domain[i + 1]);
		r[i] = interpolate(range[i], range[i + 1]);
	}
	return function(x) {
		var i = bisectRight(domain, x, 1, j) - 1;
		return r[i](d[i](x));
	};
}
function copy(source, target) {
	return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
	var domain = unit, range = unit, interpolate = value_default, transform, untransform, unknown, clamp = identity$1, piecewise, output, input;
	function rescale() {
		var n = Math.min(domain.length, range.length);
		if (clamp !== identity$1) clamp = clamper(domain[0], domain[n - 1]);
		piecewise = n > 2 ? polymap : bimap;
		output = input = null;
		return scale;
	}
	function scale(x) {
		return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
	}
	scale.invert = function(y) {
		return clamp(untransform((input || (input = piecewise(range, domain.map(transform), number_default)))(y)));
	};
	scale.domain = function(_) {
		return arguments.length ? (domain = Array.from(_, number$1), rescale()) : domain.slice();
	};
	scale.range = function(_) {
		return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
	};
	scale.rangeRound = function(_) {
		return range = Array.from(_), interpolate = round_default$1, rescale();
	};
	scale.clamp = function(_) {
		return arguments.length ? (clamp = _ ? true : identity$1, rescale()) : clamp !== identity$1;
	};
	scale.interpolate = function(_) {
		return arguments.length ? (interpolate = _, rescale()) : interpolate;
	};
	scale.unknown = function(_) {
		return arguments.length ? (unknown = _, scale) : unknown;
	};
	return function(t, u) {
		transform = t, untransform = u;
		return rescale();
	};
}
function continuous() {
	return transformer()(identity$1, identity$1);
}
var unit;
function init_continuous() {
	return (init_continuous = __esmMin((() => {
		init_bisect();
		init_value();
		unit = [0, 1];
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/tickFormat.js
function tickFormat(start, stop, count, specifier) {
	var step = tickStep(start, stop, count), precision;
	specifier = formatSpecifier(specifier == null ? ",f" : specifier);
	switch (specifier.type) {
		case "s":
			var value = Math.max(Math.abs(start), Math.abs(stop));
			if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value))) specifier.precision = precision;
			return formatPrefix(specifier, value);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
			break;
		case "f":
		case "%": if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step))) specifier.precision = precision - (specifier.type === "%") * 2;
	}
	return format(specifier);
}
function init_tickFormat() {
	return (init_tickFormat = __esmMin((() => {
		init_ticks();
		init_defaultLocale(), init_formatSpecifier(), init_precisionFixed(), init_precisionPrefix(), init_precisionRound();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js
function linearish(scale) {
	var domain = scale.domain;
	scale.ticks = function(count) {
		var d = domain();
		return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
	};
	scale.tickFormat = function(count, specifier) {
		var d = domain();
		return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
	};
	scale.nice = function(count) {
		if (count == null) count = 10;
		var d = domain();
		var i0 = 0;
		var i1 = d.length - 1;
		var start = d[i0];
		var stop = d[i1];
		var prestep;
		var step;
		var maxIter = 10;
		if (stop < start) {
			step = start, start = stop, stop = step;
			step = i0, i0 = i1, i1 = step;
		}
		while (maxIter-- > 0) {
			step = tickIncrement(start, stop, count);
			if (step === prestep) {
				d[i0] = start;
				d[i1] = stop;
				return domain(d);
			} else if (step > 0) {
				start = Math.floor(start / step) * step;
				stop = Math.ceil(stop / step) * step;
			} else if (step < 0) {
				start = Math.ceil(start * step) / step;
				stop = Math.floor(stop * step) / step;
			} else break;
			prestep = step;
		}
		return scale;
	};
	return scale;
}
function linear() {
	var scale = continuous();
	scale.copy = function() {
		return copy(scale, linear());
	};
	initRange.apply(scale, arguments);
	return linearish(scale);
}
function init_linear() {
	return (init_linear = __esmMin((() => {
		init_ticks();
		init_continuous();
		init_tickFormat();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/nice.js
function nice(domain, interval) {
	domain = domain.slice();
	var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
	if (x1 < x0) {
		t = i0, i0 = i1, i1 = t;
		t = x0, x0 = x1, x1 = t;
	}
	domain[i0] = interval.floor(x0);
	domain[i1] = interval.ceil(x1);
	return domain;
}
// ../../common/temp/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/interval.js
function timeInterval(floori, offseti, count, field) {
	function interval(date) {
		return floori(date = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date)), date;
	}
	interval.floor = (date) => {
		return floori(date = /* @__PURE__ */ new Date(+date)), date;
	};
	interval.ceil = (date) => {
		return floori(date = /* @__PURE__ */ new Date(date - 1)), offseti(date, 1), floori(date), date;
	};
	interval.round = (date) => {
		const d0 = interval(date), d1 = interval.ceil(date);
		return date - d0 < d1 - date ? d0 : d1;
	};
	interval.offset = (date, step) => {
		return offseti(date = /* @__PURE__ */ new Date(+date), step == null ? 1 : Math.floor(step)), date;
	};
	interval.range = (start, stop, step) => {
		const range = [];
		start = interval.ceil(start);
		step = step == null ? 1 : Math.floor(step);
		if (!(start < stop) || !(step > 0)) return range;
		let previous;
		do
			range.push(previous = /* @__PURE__ */ new Date(+start)), offseti(start, step), floori(start);
		while (previous < start && start < stop);
		return range;
	};
	interval.filter = (test) => {
		return timeInterval((date) => {
			if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
		}, (date, step) => {
			if (date >= date) {
				if (step < 0) while (++step <= 0) while (offseti(date, -1), !test(date));
				else while (--step >= 0) while (offseti(date, 1), !test(date));
			}
		});
	};
	if (count) {
		interval.count = (start, end) => {
			t0.setTime(+start), t1.setTime(+end);
			floori(t0), floori(t1);
			return Math.floor(count(t0, t1));
		};
		interval.every = (step) => {
			step = Math.floor(step);
			return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d) => field(d) % step === 0 : (d) => interval.count(0, d) % step === 0);
		};
	}
	return interval;
}
var t0, t1;
function init_interval() {
	return (init_interval = __esmMin((() => {
		t0 = /* @__PURE__ */ new Date();
		t1 = /* @__PURE__ */ new Date();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/millisecond.js
var millisecond;
function init_millisecond() {
	return (init_millisecond = __esmMin((() => {
		init_interval();
		millisecond = timeInterval(() => {}, (date, step) => {
			date.setTime(+date + step);
		}, (start, end) => {
			return end - start;
		});
		millisecond.every = (k) => {
			k = Math.floor(k);
			if (!isFinite(k) || !(k > 0)) return null;
			if (!(k > 1)) return millisecond;
			return timeInterval((date) => {
				date.setTime(Math.floor(date / k) * k);
			}, (date, step) => {
				date.setTime(+date + step * k);
			}, (start, end) => {
				return (end - start) / k;
			});
		};
		millisecond.range;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/duration.js
var durationSecond, durationMinute, durationHour, durationDay, durationWeek, durationMonth, durationYear;
function init_duration$1() {
	return (init_duration$1 = __esmMin((() => {
		durationSecond = 1e3;
		durationMinute = durationSecond * 60;
		durationHour = durationMinute * 60;
		durationDay = durationHour * 24;
		durationWeek = durationDay * 7;
		durationMonth = durationDay * 30;
		durationYear = durationDay * 365;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/second.js
var second;
function init_second() {
	return (init_second = __esmMin((() => {
		init_interval();
		init_duration$1();
		second = timeInterval((date) => {
			date.setTime(date - date.getMilliseconds());
		}, (date, step) => {
			date.setTime(+date + step * durationSecond);
		}, (start, end) => {
			return (end - start) / durationSecond;
		}, (date) => {
			return date.getUTCSeconds();
		});
		second.range;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/minute.js
var timeMinute, utcMinute;
function init_minute() {
	return (init_minute = __esmMin((() => {
		init_interval();
		init_duration$1();
		timeMinute = timeInterval((date) => {
			date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
		}, (date, step) => {
			date.setTime(+date + step * durationMinute);
		}, (start, end) => {
			return (end - start) / durationMinute;
		}, (date) => {
			return date.getMinutes();
		});
		timeMinute.range;
		utcMinute = timeInterval((date) => {
			date.setUTCSeconds(0, 0);
		}, (date, step) => {
			date.setTime(+date + step * durationMinute);
		}, (start, end) => {
			return (end - start) / durationMinute;
		}, (date) => {
			return date.getUTCMinutes();
		});
		utcMinute.range;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/hour.js
var timeHour, utcHour;
function init_hour() {
	return (init_hour = __esmMin((() => {
		init_interval();
		init_duration$1();
		timeHour = timeInterval((date) => {
			date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
		}, (date, step) => {
			date.setTime(+date + step * durationHour);
		}, (start, end) => {
			return (end - start) / durationHour;
		}, (date) => {
			return date.getHours();
		});
		timeHour.range;
		utcHour = timeInterval((date) => {
			date.setUTCMinutes(0, 0, 0);
		}, (date, step) => {
			date.setTime(+date + step * durationHour);
		}, (start, end) => {
			return (end - start) / durationHour;
		}, (date) => {
			return date.getUTCHours();
		});
		utcHour.range;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/day.js
var timeDay, utcDay, unixDay;
function init_day() {
	return (init_day = __esmMin((() => {
		init_interval();
		init_duration$1();
		timeDay = timeInterval((date) => date.setHours(0, 0, 0, 0), (date, step) => date.setDate(date.getDate() + step), (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay, (date) => date.getDate() - 1);
		timeDay.range;
		utcDay = timeInterval((date) => {
			date.setUTCHours(0, 0, 0, 0);
		}, (date, step) => {
			date.setUTCDate(date.getUTCDate() + step);
		}, (start, end) => {
			return (end - start) / durationDay;
		}, (date) => {
			return date.getUTCDate() - 1;
		});
		utcDay.range;
		unixDay = timeInterval((date) => {
			date.setUTCHours(0, 0, 0, 0);
		}, (date, step) => {
			date.setUTCDate(date.getUTCDate() + step);
		}, (start, end) => {
			return (end - start) / durationDay;
		}, (date) => {
			return Math.floor(date / durationDay);
		});
		unixDay.range;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/week.js
function timeWeekday(i) {
	return timeInterval((date) => {
		date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
		date.setHours(0, 0, 0, 0);
	}, (date, step) => {
		date.setDate(date.getDate() + step * 7);
	}, (start, end) => {
		return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
	});
}
function utcWeekday(i) {
	return timeInterval((date) => {
		date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
		date.setUTCHours(0, 0, 0, 0);
	}, (date, step) => {
		date.setUTCDate(date.getUTCDate() + step * 7);
	}, (start, end) => {
		return (end - start) / durationWeek;
	});
}
var timeSunday, timeMonday, timeTuesday, timeWednesday, timeThursday, timeFriday, timeSaturday, utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday;
function init_week() {
	return (init_week = __esmMin((() => {
		init_interval();
		init_duration$1();
		timeSunday = timeWeekday(0);
		timeMonday = timeWeekday(1);
		timeTuesday = timeWeekday(2);
		timeWednesday = timeWeekday(3);
		timeThursday = timeWeekday(4);
		timeFriday = timeWeekday(5);
		timeSaturday = timeWeekday(6);
		timeSunday.range;
		timeMonday.range;
		timeTuesday.range;
		timeWednesday.range;
		timeThursday.range;
		timeFriday.range;
		timeSaturday.range;
		utcSunday = utcWeekday(0);
		utcMonday = utcWeekday(1);
		utcTuesday = utcWeekday(2);
		utcWednesday = utcWeekday(3);
		utcThursday = utcWeekday(4);
		utcFriday = utcWeekday(5);
		utcSaturday = utcWeekday(6);
		utcSunday.range;
		utcMonday.range;
		utcTuesday.range;
		utcWednesday.range;
		utcThursday.range;
		utcFriday.range;
		utcSaturday.range;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/month.js
var timeMonth, utcMonth;
function init_month() {
	return (init_month = __esmMin((() => {
		init_interval();
		timeMonth = timeInterval((date) => {
			date.setDate(1);
			date.setHours(0, 0, 0, 0);
		}, (date, step) => {
			date.setMonth(date.getMonth() + step);
		}, (start, end) => {
			return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
		}, (date) => {
			return date.getMonth();
		});
		timeMonth.range;
		utcMonth = timeInterval((date) => {
			date.setUTCDate(1);
			date.setUTCHours(0, 0, 0, 0);
		}, (date, step) => {
			date.setUTCMonth(date.getUTCMonth() + step);
		}, (start, end) => {
			return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
		}, (date) => {
			return date.getUTCMonth();
		});
		utcMonth.range;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/year.js
var timeYear, utcYear;
function init_year() {
	return (init_year = __esmMin((() => {
		init_interval();
		timeYear = timeInterval((date) => {
			date.setMonth(0, 1);
			date.setHours(0, 0, 0, 0);
		}, (date, step) => {
			date.setFullYear(date.getFullYear() + step);
		}, (start, end) => {
			return end.getFullYear() - start.getFullYear();
		}, (date) => {
			return date.getFullYear();
		});
		timeYear.every = (k) => {
			return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date) => {
				date.setFullYear(Math.floor(date.getFullYear() / k) * k);
				date.setMonth(0, 1);
				date.setHours(0, 0, 0, 0);
			}, (date, step) => {
				date.setFullYear(date.getFullYear() + step * k);
			});
		};
		timeYear.range;
		utcYear = timeInterval((date) => {
			date.setUTCMonth(0, 1);
			date.setUTCHours(0, 0, 0, 0);
		}, (date, step) => {
			date.setUTCFullYear(date.getUTCFullYear() + step);
		}, (start, end) => {
			return end.getUTCFullYear() - start.getUTCFullYear();
		}, (date) => {
			return date.getUTCFullYear();
		});
		utcYear.every = (k) => {
			return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date) => {
				date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
				date.setUTCMonth(0, 1);
				date.setUTCHours(0, 0, 0, 0);
			}, (date, step) => {
				date.setUTCFullYear(date.getUTCFullYear() + step * k);
			});
		};
		utcYear.range;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
	const tickIntervals = [
		[
			second,
			1,
			durationSecond
		],
		[
			second,
			5,
			5 * durationSecond
		],
		[
			second,
			15,
			15 * durationSecond
		],
		[
			second,
			30,
			30 * durationSecond
		],
		[
			minute,
			1,
			durationMinute
		],
		[
			minute,
			5,
			5 * durationMinute
		],
		[
			minute,
			15,
			15 * durationMinute
		],
		[
			minute,
			30,
			30 * durationMinute
		],
		[
			hour,
			1,
			durationHour
		],
		[
			hour,
			3,
			3 * durationHour
		],
		[
			hour,
			6,
			6 * durationHour
		],
		[
			hour,
			12,
			12 * durationHour
		],
		[
			day,
			1,
			durationDay
		],
		[
			day,
			2,
			2 * durationDay
		],
		[
			week,
			1,
			durationWeek
		],
		[
			month,
			1,
			durationMonth
		],
		[
			month,
			3,
			3 * durationMonth
		],
		[
			year,
			1,
			durationYear
		]
	];
	function ticks(start, stop, count) {
		const reverse = stop < start;
		if (reverse) [start, stop] = [stop, start];
		const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
		const ticks = interval ? interval.range(start, +stop + 1) : [];
		return reverse ? ticks.reverse() : ticks;
	}
	function tickInterval(start, stop, count) {
		const target = Math.abs(stop - start) / count;
		const i = bisector(([, , step]) => step).right(tickIntervals, target);
		if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
		if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
		const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
		return t.every(step);
	}
	return [ticks, tickInterval];
}
var utcTicks, utcTickInterval, timeTicks, timeTickInterval;
function init_ticks$1() {
	return (init_ticks$1 = __esmMin((() => {
		init_bisector(), init_ticks();
		init_duration$1();
		init_millisecond();
		init_second();
		init_minute();
		init_hour();
		init_day();
		init_week();
		init_month();
		init_year();
		[utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
		[timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time-format@4.1.0/node_modules/d3-time-format/src/locale.js
function localDate(d) {
	if (0 <= d.y && d.y < 100) {
		var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
		date.setFullYear(d.y);
		return date;
	}
	return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
	if (0 <= d.y && d.y < 100) {
		var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
		date.setUTCFullYear(d.y);
		return date;
	}
	return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y, m, d) {
	return {
		y,
		m,
		d,
		H: 0,
		M: 0,
		S: 0,
		L: 0
	};
}
function formatLocale(locale) {
	var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_weekdays = locale.days, locale_shortWeekdays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
	var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
	var formats = {
		"a": formatShortWeekday,
		"A": formatWeekday,
		"b": formatShortMonth,
		"B": formatMonth,
		"c": null,
		"d": formatDayOfMonth,
		"e": formatDayOfMonth,
		"f": formatMicroseconds,
		"g": formatYearISO,
		"G": formatFullYearISO,
		"H": formatHour24,
		"I": formatHour12,
		"j": formatDayOfYear,
		"L": formatMilliseconds,
		"m": formatMonthNumber,
		"M": formatMinutes,
		"p": formatPeriod,
		"q": formatQuarter,
		"Q": formatUnixTimestamp,
		"s": formatUnixTimestampSeconds,
		"S": formatSeconds,
		"u": formatWeekdayNumberMonday,
		"U": formatWeekNumberSunday,
		"V": formatWeekNumberISO,
		"w": formatWeekdayNumberSunday,
		"W": formatWeekNumberMonday,
		"x": null,
		"X": null,
		"y": formatYear,
		"Y": formatFullYear,
		"Z": formatZone,
		"%": formatLiteralPercent
	};
	var utcFormats = {
		"a": formatUTCShortWeekday,
		"A": formatUTCWeekday,
		"b": formatUTCShortMonth,
		"B": formatUTCMonth,
		"c": null,
		"d": formatUTCDayOfMonth,
		"e": formatUTCDayOfMonth,
		"f": formatUTCMicroseconds,
		"g": formatUTCYearISO,
		"G": formatUTCFullYearISO,
		"H": formatUTCHour24,
		"I": formatUTCHour12,
		"j": formatUTCDayOfYear,
		"L": formatUTCMilliseconds,
		"m": formatUTCMonthNumber,
		"M": formatUTCMinutes,
		"p": formatUTCPeriod,
		"q": formatUTCQuarter,
		"Q": formatUnixTimestamp,
		"s": formatUnixTimestampSeconds,
		"S": formatUTCSeconds,
		"u": formatUTCWeekdayNumberMonday,
		"U": formatUTCWeekNumberSunday,
		"V": formatUTCWeekNumberISO,
		"w": formatUTCWeekdayNumberSunday,
		"W": formatUTCWeekNumberMonday,
		"x": null,
		"X": null,
		"y": formatUTCYear,
		"Y": formatUTCFullYear,
		"Z": formatUTCZone,
		"%": formatLiteralPercent
	};
	var parses = {
		"a": parseShortWeekday,
		"A": parseWeekday,
		"b": parseShortMonth,
		"B": parseMonth,
		"c": parseLocaleDateTime,
		"d": parseDayOfMonth,
		"e": parseDayOfMonth,
		"f": parseMicroseconds,
		"g": parseYear,
		"G": parseFullYear,
		"H": parseHour24,
		"I": parseHour24,
		"j": parseDayOfYear,
		"L": parseMilliseconds,
		"m": parseMonthNumber,
		"M": parseMinutes,
		"p": parsePeriod,
		"q": parseQuarter,
		"Q": parseUnixTimestamp,
		"s": parseUnixTimestampSeconds,
		"S": parseSeconds,
		"u": parseWeekdayNumberMonday,
		"U": parseWeekNumberSunday,
		"V": parseWeekNumberISO,
		"w": parseWeekdayNumberSunday,
		"W": parseWeekNumberMonday,
		"x": parseLocaleDate,
		"X": parseLocaleTime,
		"y": parseYear,
		"Y": parseFullYear,
		"Z": parseZone,
		"%": parseLiteralPercent
	};
	formats.x = newFormat(locale_date, formats);
	formats.X = newFormat(locale_time, formats);
	formats.c = newFormat(locale_dateTime, formats);
	utcFormats.x = newFormat(locale_date, utcFormats);
	utcFormats.X = newFormat(locale_time, utcFormats);
	utcFormats.c = newFormat(locale_dateTime, utcFormats);
	function newFormat(specifier, formats) {
		return function(date) {
			var string = [], i = -1, j = 0, n = specifier.length, c, pad, format;
			if (!(date instanceof Date)) date = /* @__PURE__ */ new Date(+date);
			while (++i < n) if (specifier.charCodeAt(i) === 37) {
				string.push(specifier.slice(j, i));
				if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
				else pad = c === "e" ? " " : "0";
				if (format = formats[c]) c = format(date, pad);
				string.push(c);
				j = i + 1;
			}
			string.push(specifier.slice(j, i));
			return string.join("");
		};
	}
	function newParse(specifier, Z) {
		return function(string) {
			var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
			if (i != string.length) return null;
			if ("Q" in d) return new Date(d.Q);
			if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
			if (Z && !("Z" in d)) d.Z = 0;
			if ("p" in d) d.H = d.H % 12 + d.p * 12;
			if (d.m === void 0) d.m = "q" in d ? d.q : 0;
			if ("V" in d) {
				if (d.V < 1 || d.V > 53) return null;
				if (!("w" in d)) d.w = 1;
				if ("Z" in d) {
					week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
					week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
					week = utcDay.offset(week, (d.V - 1) * 7);
					d.y = week.getUTCFullYear();
					d.m = week.getUTCMonth();
					d.d = week.getUTCDate() + (d.w + 6) % 7;
				} else {
					week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
					week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
					week = timeDay.offset(week, (d.V - 1) * 7);
					d.y = week.getFullYear();
					d.m = week.getMonth();
					d.d = week.getDate() + (d.w + 6) % 7;
				}
			} else if ("W" in d || "U" in d) {
				if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
				day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
				d.m = 0;
				d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
			}
			if ("Z" in d) {
				d.H += d.Z / 100 | 0;
				d.M += d.Z % 100;
				return utcDate(d);
			}
			return localDate(d);
		};
	}
	function parseSpecifier(d, specifier, string, j) {
		var i = 0, n = specifier.length, m = string.length, c, parse;
		while (i < n) {
			if (j >= m) return -1;
			c = specifier.charCodeAt(i++);
			if (c === 37) {
				c = specifier.charAt(i++);
				parse = parses[c in pads ? specifier.charAt(i++) : c];
				if (!parse || (j = parse(d, string, j)) < 0) return -1;
			} else if (c != string.charCodeAt(j++)) return -1;
		}
		return j;
	}
	function parsePeriod(d, string, i) {
		var n = periodRe.exec(string.slice(i));
		return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	}
	function parseShortWeekday(d, string, i) {
		var n = shortWeekdayRe.exec(string.slice(i));
		return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	}
	function parseWeekday(d, string, i) {
		var n = weekdayRe.exec(string.slice(i));
		return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	}
	function parseShortMonth(d, string, i) {
		var n = shortMonthRe.exec(string.slice(i));
		return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	}
	function parseMonth(d, string, i) {
		var n = monthRe.exec(string.slice(i));
		return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	}
	function parseLocaleDateTime(d, string, i) {
		return parseSpecifier(d, locale_dateTime, string, i);
	}
	function parseLocaleDate(d, string, i) {
		return parseSpecifier(d, locale_date, string, i);
	}
	function parseLocaleTime(d, string, i) {
		return parseSpecifier(d, locale_time, string, i);
	}
	function formatShortWeekday(d) {
		return locale_shortWeekdays[d.getDay()];
	}
	function formatWeekday(d) {
		return locale_weekdays[d.getDay()];
	}
	function formatShortMonth(d) {
		return locale_shortMonths[d.getMonth()];
	}
	function formatMonth(d) {
		return locale_months[d.getMonth()];
	}
	function formatPeriod(d) {
		return locale_periods[+(d.getHours() >= 12)];
	}
	function formatQuarter(d) {
		return 1 + ~~(d.getMonth() / 3);
	}
	function formatUTCShortWeekday(d) {
		return locale_shortWeekdays[d.getUTCDay()];
	}
	function formatUTCWeekday(d) {
		return locale_weekdays[d.getUTCDay()];
	}
	function formatUTCShortMonth(d) {
		return locale_shortMonths[d.getUTCMonth()];
	}
	function formatUTCMonth(d) {
		return locale_months[d.getUTCMonth()];
	}
	function formatUTCPeriod(d) {
		return locale_periods[+(d.getUTCHours() >= 12)];
	}
	function formatUTCQuarter(d) {
		return 1 + ~~(d.getUTCMonth() / 3);
	}
	return {
		format: function(specifier) {
			var f = newFormat(specifier += "", formats);
			f.toString = function() {
				return specifier;
			};
			return f;
		},
		parse: function(specifier) {
			var p = newParse(specifier += "", false);
			p.toString = function() {
				return specifier;
			};
			return p;
		},
		utcFormat: function(specifier) {
			var f = newFormat(specifier += "", utcFormats);
			f.toString = function() {
				return specifier;
			};
			return f;
		},
		utcParse: function(specifier) {
			var p = newParse(specifier += "", true);
			p.toString = function() {
				return specifier;
			};
			return p;
		}
	};
}
function pad(value, fill, width) {
	var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
	return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
	return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
	return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
	return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 1));
	return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 1));
	return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 2));
	return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 2));
	return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 2));
	return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 4));
	return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 2));
	return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
	var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
	return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 1));
	return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 2));
	return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 2));
	return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 3));
	return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 2));
	return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 2));
	return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 2));
	return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 3));
	return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
	var n = numberRe.exec(string.slice(i, i + 6));
	return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
	var n = percentRe.exec(string.slice(i, i + 1));
	return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
	var n = numberRe.exec(string.slice(i));
	return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
	var n = numberRe.exec(string.slice(i));
	return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
	return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
	return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
	return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
	return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
	return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
	return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
	return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
	return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
	return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
	var day = d.getDay();
	return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
	return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
	var day = d.getDay();
	return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
	d = dISO(d);
	return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
	return d.getDay();
}
function formatWeekNumberMonday(d, p) {
	return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
	return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
	d = dISO(d);
	return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
	return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
	var day = d.getDay();
	d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
	return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
	var z = d.getTimezoneOffset();
	return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
	return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
	return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
	return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
	return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
	return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
	return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
	return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
	return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
	return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
	var dow = d.getUTCDay();
	return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
	return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
	var day = d.getUTCDay();
	return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
	d = UTCdISO(d);
	return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
	return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
	return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
	return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
	d = UTCdISO(d);
	return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
	return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
	var day = d.getUTCDay();
	d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
	return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
	return "+0000";
}
function formatLiteralPercent() {
	return "%";
}
function formatUnixTimestamp(d) {
	return +d;
}
function formatUnixTimestampSeconds(d) {
	return Math.floor(+d / 1e3);
}
var pads, numberRe, percentRe, requoteRe;
function init_locale$1() {
	return (init_locale$1 = __esmMin((() => {
		init_day(), init_week(), init_year();
		pads = {
			"-": "",
			"_": " ",
			"0": "0"
		};
		numberRe = /^\s*\d+/;
		percentRe = /^%/;
		requoteRe = /[\\^$*+?|[\]().{}]/g;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-time-format@4.1.0/node_modules/d3-time-format/src/defaultLocale.js
function defaultLocale(definition) {
	locale = formatLocale(definition);
	timeFormat = locale.format;
	timeParse = locale.parse;
	utcFormat = locale.utcFormat;
	utcParse = locale.utcParse;
	return locale;
}
var locale, timeFormat, timeParse, utcFormat, utcParse;
function init_defaultLocale$1() {
	return (init_defaultLocale$1 = __esmMin((() => {
		init_locale$1();
		defaultLocale({
			dateTime: "%x, %X",
			date: "%-m/%-d/%Y",
			time: "%-I:%M:%S %p",
			periods: ["AM", "PM"],
			days: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			],
			shortDays: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			months: [
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
			shortMonths: [
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
			]
		});
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/time.js
function date(t) {
	return new Date(t);
}
function number(t) {
	return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
	var scale = continuous(), invert = scale.invert, domain = scale.domain;
	var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
	function tickFormat(date) {
		return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
	}
	scale.invert = function(y) {
		return new Date(invert(y));
	};
	scale.domain = function(_) {
		return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
	};
	scale.ticks = function(interval) {
		var d = domain();
		return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
	};
	scale.tickFormat = function(count, specifier) {
		return specifier == null ? tickFormat : format(specifier);
	};
	scale.nice = function(interval) {
		var d = domain();
		if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
		return interval ? domain(nice(d, interval)) : scale;
	};
	scale.copy = function() {
		return copy(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
	};
	return scale;
}
function time() {
	return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function init_time() {
	return (init_time = __esmMin((() => {
		init_year(), init_month(), init_week(), init_day(), init_hour(), init_minute(), init_second(), init_ticks$1();
		init_defaultLocale$1();
		init_continuous();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-scale-chromatic@3.1.0/node_modules/d3-scale-chromatic/src/colors.js
function colors_default(specifier) {
	var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
	while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
	return colors;
}
// ../../common/temp/node_modules/.pnpm/d3-scale-chromatic@3.1.0/node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default;
function init_Tableau10() {
	return (init_Tableau10 = __esmMin((() => {
		Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/constant.js
function constant_default(x) {
	return function constant() {
		return x;
	};
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/math.js
function acos(x) {
	return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
	return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}
var abs, atan2, cos, max, min, sin, sqrt, pi, halfPi, tau;
function init_math$1() {
	return (init_math$1 = __esmMin((() => {
		abs = Math.abs;
		atan2 = Math.atan2;
		cos = Math.cos;
		max = Math.max;
		min = Math.min;
		sin = Math.sin;
		sqrt = Math.sqrt;
		pi = Math.PI;
		halfPi = pi / 2;
		tau = 2 * pi;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/path.js
function withPath(shape) {
	let digits = 3;
	shape.digits = function(_) {
		if (!arguments.length) return digits;
		if (_ == null) digits = null;
		else {
			const d = Math.floor(_);
			if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
			digits = d;
		}
		return shape;
	};
	return () => new Path(digits);
}
function init_path$2() {
	return (init_path$2 = __esmMin((() => {
		init_path();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/arc.js
function arcInnerRadius(d) {
	return d.innerRadius;
}
function arcOuterRadius(d) {
	return d.outerRadius;
}
function arcStartAngle(d) {
	return d.startAngle;
}
function arcEndAngle(d) {
	return d.endAngle;
}
function arcPadAngle(d) {
	return d && d.padAngle;
}
function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
	var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
	if (t * t < 1e-12) return;
	t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
	return [x0 + t * x10, y0 + t * y10];
}
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
	var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
	if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
	return {
		cx: cx0,
		cy: cy0,
		x01: -ox,
		y01: -oy,
		x11: cx0 * (r1 / r - 1),
		y11: cy0 * (r1 / r - 1)
	};
}
function arc_default() {
	var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant_default(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null, path = withPath(arc);
	function arc() {
		var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs(a1 - a0), cw = a1 > a0;
		if (!context) context = buffer = path();
		if (r1 < r0) r = r1, r1 = r0, r0 = r;
		if (!(r1 > 1e-12)) context.moveTo(0, 0);
		else if (da > tau - 1e-12) {
			context.moveTo(r1 * cos(a0), r1 * sin(a0));
			context.arc(0, 0, r1, a0, a1, !cw);
			if (r0 > 1e-12) {
				context.moveTo(r0 * cos(a1), r0 * sin(a1));
				context.arc(0, 0, r0, a1, a0, cw);
			}
		} else {
			var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > 1e-12 && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)), rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
			if (rp > 1e-12) {
				var p0 = asin(rp / r0 * sin(ap)), p1 = asin(rp / r1 * sin(ap));
				if ((da0 -= p0 * 2) > 1e-12) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
				else da0 = 0, a00 = a10 = (a0 + a1) / 2;
				if ((da1 -= p1 * 2) > 1e-12) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
				else da1 = 0, a01 = a11 = (a0 + a1) / 2;
			}
			var x01 = r1 * cos(a01), y01 = r1 * sin(a01), x10 = r0 * cos(a10), y10 = r0 * sin(a10);
			if (rc > 1e-12) {
				var x11 = r1 * cos(a11), y11 = r1 * sin(a11), x00 = r0 * cos(a00), y00 = r0 * sin(a00), oc;
				if (da < pi) {
					if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
						var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2), lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
						rc0 = min(rc, (r0 - lc) / (kc - 1));
						rc1 = min(rc, (r1 - lc) / (kc + 1));
					} else rc0 = rc1 = 0;
				}
			}
			if (!(da1 > 1e-12)) context.moveTo(x01, y01);
			else if (rc1 > 1e-12) {
				t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
				t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
				context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
				if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
				else {
					context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
					context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
					context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
				}
			} else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
			if (!(r0 > 1e-12) || !(da0 > 1e-12)) context.lineTo(x10, y10);
			else if (rc0 > 1e-12) {
				t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
				t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
				context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
				if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
				else {
					context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
					context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
					context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
				}
			} else context.arc(0, 0, r0, a10, a00, cw);
		}
		context.closePath();
		if (buffer) return context = null, buffer + "" || null;
	}
	arc.centroid = function() {
		var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
		return [cos(a) * r, sin(a) * r];
	};
	arc.innerRadius = function(_) {
		return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant_default(+_), arc) : innerRadius;
	};
	arc.outerRadius = function(_) {
		return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant_default(+_), arc) : outerRadius;
	};
	arc.cornerRadius = function(_) {
		return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant_default(+_), arc) : cornerRadius;
	};
	arc.padRadius = function(_) {
		return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant_default(+_), arc) : padRadius;
	};
	arc.startAngle = function(_) {
		return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default(+_), arc) : startAngle;
	};
	arc.endAngle = function(_) {
		return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default(+_), arc) : endAngle;
	};
	arc.padAngle = function(_) {
		return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default(+_), arc) : padAngle;
	};
	arc.context = function(_) {
		return arguments.length ? (context = _ == null ? null : _, arc) : context;
	};
	return arc;
}
function init_arc() {
	return (init_arc = __esmMin((() => {
		init_math$1();
		init_path$2();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/array.js
function array_default(x) {
	return typeof x === "object" && "length" in x ? x : Array.from(x);
}
function init_array$2() {
	return (init_array$2 = __esmMin((() => {
		Array.prototype.slice;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
	this._context = context;
}
function linear_default(context) {
	return new Linear(context);
}
function init_linear$1() {
	return (init_linear$1 = __esmMin((() => {
		Linear.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1: this._point = 2;
					default: this._context.lineTo(x, y);
				}
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/point.js
function x(p) {
	return p[0];
}
function y(p) {
	return p[1];
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/line.js
function line_default(x$1, y$1) {
	var defined = constant_default(true), context = null, curve = linear_default, output = null, path = withPath(line);
	x$1 = typeof x$1 === "function" ? x$1 : x$1 === void 0 ? x : constant_default(x$1);
	y$1 = typeof y$1 === "function" ? y$1 : y$1 === void 0 ? y : constant_default(y$1);
	function line(data) {
		var i, n = (data = array_default(data)).length, d, defined0 = false, buffer;
		if (context == null) output = curve(buffer = path());
		for (i = 0; i <= n; ++i) {
			if (!(i < n && defined(d = data[i], i, data)) === defined0) {
				if (defined0 = !defined0) output.lineStart();
				else output.lineEnd();
			}
			if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
		}
		if (buffer) return output = null, buffer + "" || null;
	}
	line.x = function(_) {
		return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant_default(+_), line) : x$1;
	};
	line.y = function(_) {
		return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant_default(+_), line) : y$1;
	};
	line.defined = function(_) {
		return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default(!!_), line) : defined;
	};
	line.curve = function(_) {
		return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
	};
	line.context = function(_) {
		return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
	};
	return line;
}
function init_line() {
	return (init_line = __esmMin((() => {
		init_array$2();
		init_linear$1();
		init_path$2();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/descending.js
function descending_default(a, b) {
	return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/identity.js
function identity_default(d) {
	return d;
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/pie.js
function pie_default() {
	var value = identity_default, sortValues = descending_default, sort = null, startAngle = constant_default(0), endAngle = constant_default(tau), padAngle = constant_default(0);
	function pie(data) {
		var i, n = (data = array_default(data)).length, j, k, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
		for (i = 0; i < n; ++i) if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) sum += v;
		if (sortValues != null) index.sort(function(i, j) {
			return sortValues(arcs[i], arcs[j]);
		});
		else if (sort != null) index.sort(function(i, j) {
			return sort(data[i], data[j]);
		});
		for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
			data: data[j],
			index: i,
			value: v,
			startAngle: a0,
			endAngle: a1,
			padAngle: p
		};
		return arcs;
	}
	pie.value = function(_) {
		return arguments.length ? (value = typeof _ === "function" ? _ : constant_default(+_), pie) : value;
	};
	pie.sortValues = function(_) {
		return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
	};
	pie.sort = function(_) {
		return arguments.length ? (sort = _, sortValues = null, pie) : sort;
	};
	pie.startAngle = function(_) {
		return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default(+_), pie) : startAngle;
	};
	pie.endAngle = function(_) {
		return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default(+_), pie) : endAngle;
	};
	pie.padAngle = function(_) {
		return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default(+_), pie) : padAngle;
	};
	return pie;
}
function init_pie() {
	return (init_pie = __esmMin((() => {
		init_array$2();
		init_math$1();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/bump.js
function bumpX(context) {
	return new Bump(context, true);
}
function bumpY(context) {
	return new Bump(context, false);
}
var Bump;
function init_bump() {
	return (init_bump = __esmMin((() => {
		Bump = class {
			constructor(context, x) {
				this._context = context;
				this._x = x;
			}
			areaStart() {
				this._line = 0;
			}
			areaEnd() {
				this._line = NaN;
			}
			lineStart() {
				this._point = 0;
			}
			lineEnd() {
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			}
			point(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						if (this._line) this._context.lineTo(x, y);
						else this._context.moveTo(x, y);
						break;
					case 1: this._point = 2;
					default: if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
					else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
				}
				this._x0 = x, this._y0 = y;
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/noop.js
function noop_default() {}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basis.js
function point$3(that, x, y) {
	that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}
function Basis(context) {
	this._context = context;
}
function basis_default(context) {
	return new Basis(context);
}
function init_basis$1() {
	return (init_basis$1 = __esmMin((() => {
		Basis.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 3: point$3(this, this._x1, this._y1);
					case 2: this._context.lineTo(this._x1, this._y1);
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
					default: point$3(this, x, y);
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
	this._context = context;
}
function basisClosed_default(context) {
	return new BasisClosed(context);
}
function init_basisClosed$1() {
	return (init_basisClosed$1 = __esmMin((() => {
		init_basis$1();
		BasisClosed.prototype = {
			areaStart: noop_default,
			areaEnd: noop_default,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x2, this._y2);
						this._context.closePath();
						break;
					case 2:
						this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
						this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
						this._context.closePath();
						break;
					case 3:
						this.point(this._x2, this._y2);
						this.point(this._x3, this._y3);
						this.point(this._x4, this._y4);
				}
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._x2 = x, this._y2 = y;
						break;
					case 1:
						this._point = 2;
						this._x3 = x, this._y3 = y;
						break;
					case 2:
						this._point = 3;
						this._x4 = x, this._y4 = y;
						this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
						break;
					default: point$3(this, x, y);
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
	this._context = context;
}
function basisOpen_default(context) {
	return new BasisOpen(context);
}
function init_basisOpen() {
	return (init_basisOpen = __esmMin((() => {
		init_basis$1();
		BasisOpen.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6;
						this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
						break;
					case 3: this._point = 4;
					default: point$3(this, x, y);
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
	this._basis = new Basis(context);
	this._beta = beta;
}
var bundle_default;
function init_bundle() {
	return (init_bundle = __esmMin((() => {
		init_basis$1();
		Bundle.prototype = {
			lineStart: function() {
				this._x = [];
				this._y = [];
				this._basis.lineStart();
			},
			lineEnd: function() {
				var x = this._x, y = this._y, j = x.length - 1;
				if (j > 0) {
					var x0 = x[0], y0 = y[0], dx = x[j] - x0, dy = y[j] - y0, i = -1, t;
					while (++i <= j) {
						t = i / j;
						this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
					}
				}
				this._x = this._y = null;
				this._basis.lineEnd();
			},
			point: function(x, y) {
				this._x.push(+x);
				this._y.push(+y);
			}
		};
		bundle_default = (function custom(beta) {
			function bundle(context) {
				return beta === 1 ? new Basis(context) : new Bundle(context, beta);
			}
			bundle.beta = function(beta) {
				return custom(+beta);
			};
			return bundle;
		})(.85);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/cardinal.js
function point$2(that, x, y) {
	that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
}
function Cardinal(context, tension) {
	this._context = context;
	this._k = (1 - tension) / 6;
}
var cardinal_default;
function init_cardinal() {
	return (init_cardinal = __esmMin((() => {
		Cardinal.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x2, this._y2);
						break;
					case 3: point$2(this, this._x1, this._y1);
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						this._x1 = x, this._y1 = y;
						break;
					case 2: this._point = 3;
					default: point$2(this, x, y);
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		cardinal_default = (function custom(tension) {
			function cardinal(context) {
				return new Cardinal(context, tension);
			}
			cardinal.tension = function(tension) {
				return custom(+tension);
			};
			return cardinal;
		})(0);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
	this._context = context;
	this._k = (1 - tension) / 6;
}
var cardinalClosed_default;
function init_cardinalClosed() {
	return (init_cardinalClosed = __esmMin((() => {
		init_cardinal();
		CardinalClosed.prototype = {
			areaStart: noop_default,
			areaEnd: noop_default,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 2:
						this._context.lineTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 3:
						this.point(this._x3, this._y3);
						this.point(this._x4, this._y4);
						this.point(this._x5, this._y5);
				}
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._x3 = x, this._y3 = y;
						break;
					case 1:
						this._point = 2;
						this._context.moveTo(this._x4 = x, this._y4 = y);
						break;
					case 2:
						this._point = 3;
						this._x5 = x, this._y5 = y;
						break;
					default: point$2(this, x, y);
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		cardinalClosed_default = (function custom(tension) {
			function cardinal(context) {
				return new CardinalClosed(context, tension);
			}
			cardinal.tension = function(tension) {
				return custom(+tension);
			};
			return cardinal;
		})(0);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
	this._context = context;
	this._k = (1 - tension) / 6;
}
var cardinalOpen_default;
function init_cardinalOpen() {
	return (init_cardinalOpen = __esmMin((() => {
		init_cardinal();
		CardinalOpen.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
						break;
					case 3: this._point = 4;
					default: point$2(this, x, y);
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		cardinalOpen_default = (function custom(tension) {
			function cardinal(context) {
				return new CardinalOpen(context, tension);
			}
			cardinal.tension = function(tension) {
				return custom(+tension);
			};
			return cardinal;
		})(0);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/catmullRom.js
function point$1(that, x, y) {
	var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
	if (that._l01_a > 1e-12) {
		var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
		x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
		y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
	}
	if (that._l23_a > 1e-12) {
		var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
		x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
		y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
	}
	that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
	this._context = context;
	this._alpha = alpha;
}
var catmullRom_default;
function init_catmullRom() {
	return (init_catmullRom = __esmMin((() => {
		init_math$1();
		init_cardinal();
		CatmullRom.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x2, this._y2);
						break;
					case 3: this.point(this._x2, this._y2);
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) {
					var x23 = this._x2 - x, y23 = this._y2 - y;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
				}
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						break;
					case 2: this._point = 3;
					default: point$1(this, x, y);
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a;
				this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		catmullRom_default = (function custom(alpha) {
			function catmullRom(context) {
				return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
			}
			catmullRom.alpha = function(alpha) {
				return custom(+alpha);
			};
			return catmullRom;
		})(.5);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
	this._context = context;
	this._alpha = alpha;
}
var catmullRomClosed_default;
function init_catmullRomClosed() {
	return (init_catmullRomClosed = __esmMin((() => {
		init_cardinalClosed();
		init_catmullRom();
		CatmullRomClosed.prototype = {
			areaStart: noop_default,
			areaEnd: noop_default,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
				this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 2:
						this._context.lineTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 3:
						this.point(this._x3, this._y3);
						this.point(this._x4, this._y4);
						this.point(this._x5, this._y5);
				}
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) {
					var x23 = this._x2 - x, y23 = this._y2 - y;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
				}
				switch (this._point) {
					case 0:
						this._point = 1;
						this._x3 = x, this._y3 = y;
						break;
					case 1:
						this._point = 2;
						this._context.moveTo(this._x4 = x, this._y4 = y);
						break;
					case 2:
						this._point = 3;
						this._x5 = x, this._y5 = y;
						break;
					default: point$1(this, x, y);
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a;
				this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		catmullRomClosed_default = (function custom(alpha) {
			function catmullRom(context) {
				return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
			}
			catmullRom.alpha = function(alpha) {
				return custom(+alpha);
			};
			return catmullRom;
		})(.5);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
	this._context = context;
	this._alpha = alpha;
}
var catmullRomOpen_default;
function init_catmullRomOpen() {
	return (init_catmullRomOpen = __esmMin((() => {
		init_cardinalOpen();
		init_catmullRom();
		CatmullRomOpen.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) {
					var x23 = this._x2 - x, y23 = this._y2 - y;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
				}
				switch (this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
						break;
					case 3: this._point = 4;
					default: point$1(this, x, y);
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a;
				this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		catmullRomOpen_default = (function custom(alpha) {
			function catmullRom(context) {
				return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
			}
			catmullRom.alpha = function(alpha) {
				return custom(+alpha);
			};
			return catmullRom;
		})(.5);
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
	this._context = context;
}
function linearClosed_default(context) {
	return new LinearClosed(context);
}
function init_linearClosed() {
	return (init_linearClosed = __esmMin((() => {
		LinearClosed.prototype = {
			areaStart: noop_default,
			areaEnd: noop_default,
			lineStart: function() {
				this._point = 0;
			},
			lineEnd: function() {
				if (this._point) this._context.closePath();
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) this._context.lineTo(x, y);
				else this._point = 1, this._context.moveTo(x, y);
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/monotone.js
function sign(x) {
	return x < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
	var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
	return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), .5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
	var h = that._x1 - that._x0;
	return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point(that, t0, t1) {
	var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
	that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function MonotoneX(context) {
	this._context = context;
}
function MonotoneY(context) {
	this._context = new ReflectContext(context);
}
function ReflectContext(context) {
	this._context = context;
}
function monotoneX(context) {
	return new MonotoneX(context);
}
function monotoneY(context) {
	return new MonotoneY(context);
}
function init_monotone() {
	return (init_monotone = __esmMin((() => {
		MonotoneX.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x1, this._y1);
						break;
					case 3: point(this, this._t0, slope2(this, this._t0));
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				var t1 = NaN;
				x = +x, y = +y;
				if (x === this._x1 && y === this._y1) return;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						point(this, slope2(this, t1 = slope3(this, x, y)), t1);
						break;
					default: point(this, this._t0, t1 = slope3(this, x, y));
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
				this._t0 = t1;
			}
		};
		(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
			MonotoneX.prototype.point.call(this, y, x);
		};
		ReflectContext.prototype = {
			moveTo: function(x, y) {
				this._context.moveTo(y, x);
			},
			closePath: function() {
				this._context.closePath();
			},
			lineTo: function(x, y) {
				this._context.lineTo(y, x);
			},
			bezierCurveTo: function(x1, y1, x2, y2, x, y) {
				this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
	this._context = context;
}
function controlPoints(x) {
	var i, n = x.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
	a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
	for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
	a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
	for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
	a[n - 1] = r[n - 1] / b[n - 1];
	for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
	b[n - 1] = (x[n] + a[n - 1]) / 2;
	for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
	return [a, b];
}
function natural_default(context) {
	return new Natural(context);
}
function init_natural() {
	return (init_natural = __esmMin((() => {
		Natural.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x = [];
				this._y = [];
			},
			lineEnd: function() {
				var x = this._x, y = this._y, n = x.length;
				if (n) {
					this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
					if (n === 2) this._context.lineTo(x[1], y[1]);
					else {
						var px = controlPoints(x), py = controlPoints(y);
						for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
					}
				}
				if (this._line || this._line !== 0 && n === 1) this._context.closePath();
				this._line = 1 - this._line;
				this._x = this._y = null;
			},
			point: function(x, y) {
				this._x.push(+x);
				this._y.push(+y);
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
	this._context = context;
	this._t = t;
}
function step_default(context) {
	return new Step(context, .5);
}
function stepBefore(context) {
	return new Step(context, 0);
}
function stepAfter(context) {
	return new Step(context, 1);
}
function init_step() {
	return (init_step = __esmMin((() => {
		Step.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x = this._y = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1: this._point = 2;
					default: if (this._t <= 0) {
						this._context.lineTo(this._x, y);
						this._context.lineTo(x, y);
					} else {
						var x1 = this._x * (1 - this._t) + x * this._t;
						this._context.lineTo(x1, this._y);
						this._context.lineTo(x1, y);
					}
				}
				this._x = x, this._y = y;
			}
		};
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/transform.js
function Transform(k, x, y) {
	this.k = k;
	this.x = x;
	this.y = y;
}
function transform(node) {
	while (!node.__zoom) if (!(node = node.parentNode)) return identity;
	return node.__zoom;
}
var identity;
function init_transform$1() {
	return (init_transform$1 = __esmMin((() => {
		Transform.prototype = {
			constructor: Transform,
			scale: function(k) {
				return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
			},
			translate: function(x, y) {
				return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
			},
			apply: function(point) {
				return [point[0] * this.k + this.x, point[1] * this.k + this.y];
			},
			applyX: function(x) {
				return x * this.k + this.x;
			},
			applyY: function(y) {
				return y * this.k + this.y;
			},
			invert: function(location) {
				return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
			},
			invertX: function(x) {
				return (x - this.x) / this.k;
			},
			invertY: function(y) {
				return (y - this.y) / this.k;
			},
			rescaleX: function(x) {
				return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
			},
			rescaleY: function(y) {
				return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
			},
			toString: function() {
				return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
			}
		};
		identity = new Transform(1, 0, 0);
		transform.prototype = Transform.prototype;
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/zoom.js
function init_zoom() {
	return (init_zoom = __esmMin((() => {
		init_src$1();
		init_transform$1();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/index.js
function init_src$3() {
	return (init_src$3 = __esmMin((() => {
		init_zoom();
		init_transform$1();
	})))();
}
// ../../common/temp/node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js
function init_src$4() {
	return (init_src$4 = __esmMin((() => {
		init_axis();
		init_src$2();
		init_defaultLocale();
		init_hierarchy();
		init_treemap();
		init_hcl();
		init_band();
		init_linear();
		init_ordinal();
		init_time();
		init_Tableau10();
		init_select$1();
		init_arc();
		init_line();
		init_pie();
		init_basisClosed$1();
		init_basisOpen();
		init_basis$1();
		init_bump();
		init_bundle();
		init_cardinalClosed();
		init_cardinalOpen();
		init_cardinal();
		init_catmullRomClosed();
		init_catmullRomOpen();
		init_catmullRom();
		init_linearClosed();
		init_linear$1();
		init_monotone();
		init_natural();
		init_step();
		init_millisecond();
		init_second();
		init_minute();
		init_hour();
		init_day();
		init_week();
		init_month();
		init_defaultLocale$1();
		init_src$1();
		init_src$3();
	})))();
}
export { timeFriday as $, init_basisClosed$1 as A, init_select$1 as At, init_linear$1 as B, require_dayjs_min as Bt, cardinal_default as C, treemap_default as Ct, basisOpen_default as D, init_defaultLocale as Dt, init_bundle as E, format as Et, init_bump as F, __export as Ft, init_Tableau10 as G, arc_default as H, init_pie as I, __name as It, init_defaultLocale$1 as J, init_time as K, pie_default as L, init_chunk_AGHRB4JF as Lt, init_basis$1 as M, axisBottom as Mt, bumpX as N, axisTop as Nt, init_basisOpen as O, hcl_default as Ot, bumpY as P, init_axis as Pt, init_week as Q, init_line as R, log as Rt, init_cardinalClosed as S, init_treemap as St, bundle_default as T, init_hierarchy as Tt, init_arc as U, linear_default as V, Tableau10_default as W, init_month as X, timeFormat as Y, timeMonth as Z, catmullRom_default as _, linear as _t, step_default as a, timeWednesday as at, init_cardinalOpen as b, init_ordinal as bt, init_monotone as c, init_hour as ct, init_linearClosed as d, timeMinute as dt, timeMonday as et, linearClosed_default as f, init_second as ft, init_catmullRomClosed as g, init_linear as gt, catmullRomClosed_default as h, millisecond as ht, stepBefore as i, timeTuesday as it, basis_default as j, select_default$1 as jt, basisClosed_default as k, init_hcl as kt, monotoneX as l, timeHour as lt, init_catmullRomOpen as m, init_millisecond as mt, init_step as n, timeSunday as nt, init_natural as o, init_day as ot, catmullRomOpen_default as p, second as pt, time as q, stepAfter as r, timeThursday as rt, natural_default as s, timeDay as st, init_src$4 as t, timeSaturday as tt, monotoneY as u, init_minute as ut, init_catmullRom as v, band as vt, init_cardinal as w, hierarchy as wt, cardinalClosed_default as x, ordinal as xt, cardinalOpen_default as y, init_band as yt, line_default as z, setLogLevel as zt };
