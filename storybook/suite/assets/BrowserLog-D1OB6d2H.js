import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { G as Internal, H as withProgress, J as init_types, z as init_blong_lib } from "./iframe-DXhqEaHK.js";
//#region ../../core/blong-gogo/src/BrowserLog.ts
function write(rec, logByLevel) {
	const levelNum = rec.level;
	const levelKey = NAME_FROM_VALUE[levelNum] ?? "info";
	const paddedLevel = levelKey.toUpperCase().padStart(5);
	let consoleMethod = console.log;
	if (logByLevel) {
		const mapped = levelNum <= 10 ? "debug" : levelNum >= 60 ? "error" : levelKey;
		const c = console;
		consoleMethod = typeof c[mapped] === "function" ? c[mapped] : console.log;
	}
	const levelCss = LEVEL_CSS[levelKey] ?? LEVEL_CSS.info;
	const details = {};
	for (const [k, v] of Object.entries(rec)) if (v != null && !SKIP.has(k)) details[k] = v;
	const hasDetails = Object.keys(details).length > 0;
	const loggerName = rec.childName ? `${rec.name}/${rec.childName}` : rec.name ?? "";
	const time = new Date(rec.time ?? Date.now()).toISOString().slice(11, 23);
	const fmt = `[%s] %c%s %c(%s): %c%s%s%c%s%c%s%c%s${hasDetails ? " %c%o" : ""}`;
	const pad = (s) => s ? s + " " : "";
	const args = [
		fmt,
		time,
		levelCss,
		paddedLevel,
		DEFAULT_CSS.service,
		loggerName,
		DEFAULT_CSS.context,
		pad(rec.context),
		pad(rec.prefix),
		DEFAULT_CSS.mtid,
		pad(rec.$meta?.mtid),
		DEFAULT_CSS.method,
		pad(rec.$meta?.method),
		DEFAULT_CSS.msg,
		rec.msg
	];
	if (hasDetails) args.push(DEFAULT_CSS.src, details);
	consoleMethod(...args);
	if (rec.error && rec.error.stack) console.error(rec.error);
}
function createLogger(level, bindings, logByLevel) {
	const levelNum = LEVEL_VALUES[level] ?? LEVEL_VALUES.info;
	function log(methodLevel, obj, msg) {
		const methodNum = LEVEL_VALUES[methodLevel] ?? LEVEL_VALUES.info;
		if (methodNum < levelNum) return;
		const rec = {
			...bindings,
			level: methodNum,
			time: Date.now(),
			msg: typeof obj === "string" ? obj : msg ?? ""
		};
		if (typeof obj === "object" && obj !== null) Object.assign(rec, obj);
		write(rec, logByLevel);
	}
	return {
		level,
		child: (childBindings, options) => createLogger(options?.level ?? level, {
			...bindings,
			...childBindings
		}, logByLevel),
		trace: (obj, msg) => log("trace", obj, msg),
		debug: (obj, msg) => log("debug", obj, msg),
		info: (obj, msg) => log("info", obj, msg),
		warn: (obj, msg) => log("warn", obj, msg),
		error: (obj, msg) => log("error", obj, msg),
		fatal: (obj, msg) => log("fatal", obj, msg)
	};
}
var LEVEL_VALUES, NAME_FROM_VALUE, LEVEL_CSS, DEFAULT_CSS, SKIP, BrowserLog;
function init_BrowserLog() {
	return (init_BrowserLog = __esmMin((() => {
		init_blong_lib();
		init_types();
		LEVEL_VALUES = {
			trace: 10,
			debug: 20,
			info: 30,
			warn: 40,
			error: 50,
			fatal: 60,
			silent: Infinity
		};
		NAME_FROM_VALUE = {
			10: "trace",
			20: "debug",
			30: "info",
			40: "warn",
			50: "error",
			60: "fatal"
		};
		LEVEL_CSS = {
			trace: "color: grey",
			debug: "color: blue",
			info: "color: cyan",
			warn: "color: magenta",
			error: "color: red",
			fatal: "color: red; font-weight: bold"
		};
		DEFAULT_CSS = {
			def: "color: black",
			msg: "color: cyan",
			service: "color: darkorange",
			context: "color: lightgreen",
			mtid: "color: magenta",
			method: "color: gold",
			src: "color: DimGray; font-style: italic; font-size: 0.9em"
		};
		SKIP = /* @__PURE__ */ new Set([
			"time",
			"level",
			"name",
			"context",
			"prefix",
			"$meta",
			"msg"
		]);
		BrowserLog = class extends Internal {
			#config = {
				level: "info",
				logByLevel: false
			};
			#logger;
			constructor(config) {
				super();
				this.merge(this.#config, config);
				this.#logger = createLogger(this.#config.level ?? "info", {}, this.#config.logByLevel ?? false);
			}
			child(...params) {
				const [bindings, options] = params;
				return this.#logger.child(bindings, options);
			}
			logger(level = this.#config.level ?? "info", bindings) {
				const child = this.#logger.child(bindings, { level });
				const result = {
					trace: void 0,
					debug: void 0,
					info: void 0,
					warn: void 0,
					error: void 0,
					fatal: void 0
				};
				switch (level) {
					case "trace": result.trace = child.trace.bind(child);
					case "debug": result.debug = child.debug.bind(child);
					case "info": result.info = child.info.bind(child);
					case "warn": result.warn = child.warn.bind(child);
					case "error": result.error = child.error.bind(child);
					case "fatal": result.fatal = child.fatal.bind(child);
				}
				return {
					...result,
					progress: (label, promise, options) => withProgress(result, label, promise, options)
				};
			}
		};
	})))();
}
//#endregion
init_BrowserLog();
export { BrowserLog as default };
