import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { et as init_browser, tt as monotonicFactory } from "./iframe-DRWtcwdA.js";
// ../../core/lukaot/src/site.ts
/** A frame of this package's own code, as opposed to one of its tests. */
function isOwnCode(frame) {
	return (frame.includes(OWN_FILE) || PACKAGE.test(frame)) && !/\.test\.ts/.test(frame);
}
/** The frame list, without this package's own frames. */
function callerFrames() {
	return ((/* @__PURE__ */ new Error()).stack?.split("\n") ?? []).slice(1).map((frame) => frame.trim()).filter((frame) => !isOwnCode(frame));
}
/** The first frame that is not this package's own code, as a site. */
function captureSite(keepStack = false) {
	const frames = callerFrames();
	for (const frame of frames) {
		const match = FRAME.exec(frame);
		const file = match?.groups?.["file"]?.trim();
		if (!file || file.startsWith("node:")) continue;
		return {
			file,
			line: match?.groups?.["line"] === void 0 ? void 0 : Number(match.groups["line"]),
			function: match?.groups?.["function"]?.trim(),
			...keepStack ? { stack: frames } : {}
		};
	}
}
/** A site as one short string, for a message that has to name two of them. */
function describeSite(site) {
	if (!site) return "an unknown site";
	const file = site.file.replace(/^file:\/\//, "");
	return site.line === void 0 ? file : `${file}:${site.line}`;
}
var OWN_FILE, FRAME, PACKAGE;
function init_site() {
	return (init_site = __esmMin((() => {
		OWN_FILE = import.meta.url.replace(/^file:\/\//, "");
		FRAME = /^\s*at\s+(?:(?<function>.+?)\s+\()?(?<file>[^()]+?):(?<line>\d+):(?<column>\d+)\)?$/;
		PACKAGE = /[\\/](?:core[\\/]lukaot|node_modules[\\/]@feasibleone[\\/]lukaot)[\\/]/;
	})))();
}
// ../../core/lukaot/src/declare.ts
/** The identifier a declaration key names, kept for the error a bad key raises. */
function identifierOf(id) {
	if (!IDENTIFIER.test(id)) throw new Error(`lukaot: "${id}" is not an identifier — a signal is one camelCase token (\`agentTicketNotFound\`), never a dotted name`);
	return id;
}
/** The message with `?name?` rewritten to `{name}`, so one interpolation serves both spellings. */
function normaliseMessage(message) {
	return message.replace(QUESTION_PLACEHOLDER, (_, name) => `{${name}}`);
}
/** A declared entry with its defaults, or a message naming what is wrong with it. */
function signalOf(kind, id, entry) {
	const declared = typeof entry === "string" ? { message: entry } : entry;
	if (!declared.message) throw new Error(`lukaot: "${id}" declares no message`);
	const message = normaliseMessage(declared.message);
	if (declared.level !== void 0 && !LEVEL_NAMES.includes(declared.level)) throw new Error(`lukaot: "${id}" declares level "${String(declared.level)}", which is not one of ` + LEVEL_NAMES.join(", "));
	return kind === "log" ? {
		kind,
		id,
		level: "info",
		...declared,
		message
	} : {
		kind,
		id,
		level: "error",
		...declared,
		message
	};
}
function declare(definition) {
	const signal = {};
	for (const kind of ["log", "error"]) for (const [id, entry] of Object.entries(definition[kind] ?? {})) {
		identifierOf(id);
		if (signal[id]) throw new Error(`lukaot: "${id}" is declared twice — in "${signal[id].kind}" and in "${kind}"`);
		signal[id] = signalOf(kind, id, entry);
	}
	const capture = {};
	for (const [id, entry] of Object.entries(definition.capture ?? {})) {
		identifierOf(id);
		if (signal[id] || capture[id]) throw new Error(`lukaot: "${id}" is declared twice`);
		capture[id] = {
			kind: "capture",
			id,
			...entry
		};
	}
	const decision = {};
	for (const [id, entry] of Object.entries(definition.decision ?? {})) {
		identifierOf(id);
		if (signal[id] || capture[id] || decision[id]) throw new Error(`lukaot: "${id}" is declared twice`);
		if (Object.keys(entry.branch).length === 0) throw new Error(`lukaot: decision "${id}" declares no arms — a decision is the set of arms it offers`);
		for (const arm of Object.keys(entry.branch)) identifierOf(arm);
		decision[id] = {
			kind: "decision",
			id,
			...entry
		};
	}
	for (const key of Object.keys(definition)) if (key !== "log" && key !== "error" && key !== "capture" && key !== "decision") throw new Error(`lukaot: "${key}" is not a declaration kind — declare "log", "error", "capture" or "decision"`);
	return Object.defineProperty({
		kind: "vocabulary",
		signal,
		...Object.keys(capture).length === 0 ? {} : { capture },
		...Object.keys(decision).length === 0 ? {} : { decision },
		declared: definition,
		origin: captureSite()
	}, Kind, {
		value: VOCABULARY_KIND,
		enumerable: false
	});
}
/**
* Merge several vocabularies into one — a layer's, a `library()`'s, a handler group's.
*
* Some names are only known at assembly time, which is what makes a declaration callable from code;
* that declaration is not a second mechanism, so it lands in the same map as the one in
* `lukaot/signal.ts` and is refused if it repeats a name. The two origins are named because the
* likely cause is one signal declared on both paths, and a reader needs the pair to delete one.
*/
function compose(...vocabularies) {
	const signal = {};
	const origin = /* @__PURE__ */ new Map();
	for (const vocabulary of vocabularies) for (const [id, entry] of Object.entries(vocabulary.signal)) {
		const first = origin.get(id);
		if (signal[id]) throw new Error(`lukaot: "${id}" is declared twice — at ${describeSite(first)} and at ${describeSite(vocabulary.origin)}`);
		signal[id] = entry;
		origin.set(id, vocabulary.origin);
	}
	const decision = {};
	for (const vocabulary of vocabularies) for (const [id, entry] of Object.entries(vocabulary.decision ?? {})) {
		if (signal[id] || decision[id]) throw new Error(`lukaot: "${id}" is declared twice — at ${describeSite(origin.get(id))} and at ${describeSite(vocabulary.origin)}`);
		decision[id] = entry;
	}
	return {
		kind: "vocabulary",
		signal,
		...Object.keys(decision).length === 0 ? {} : { decision },
		origin: vocabularies[0]?.origin
	};
}
/** Declare a package's vocabulary, for every port in this process to carry. */
function contribute(definition) {
	const vocabulary = declare(definition);
	if (!contributed.includes(vocabulary)) contributed.push(vocabulary);
	return vocabulary;
}
/** The vocabularies packages have contributed, in the order they were declared. */
function contributedVocabularies() {
	return contributed;
}
var LEVEL_NAMES, IDENTIFIER, QUESTION_PLACEHOLDER, Kind, VOCABULARY_KIND, contributed;
function init_declare() {
	return (init_declare = __esmMin((() => {
		init_site();
		LEVEL_NAMES = [
			"trace",
			"debug",
			"info",
			"warn",
			"error",
			"fatal"
		];
		IDENTIFIER = /^[a-z][A-Za-z0-9]*$/;
		QUESTION_PLACEHOLDER = /\?([A-Za-z][A-Za-z0-9]*)\?/g;
		Kind = Symbol.for("blong:kind");
		VOCABULARY_KIND = "vocabulary";
		contributed = [];
	})))();
}
// ../../core/lukaot/src/emit.ts
/** The values a call supplied, as a lookup, so a nested object cannot throw the record away. */
function valuesOf(params) {
	return params !== null && typeof params === "object" ? params : {};
}
/**
* The declared message with its values filled in.
*
* A placeholder whose value did not arrive keeps its name and gains a question mark, which is the
* spelling the realm that wrote `?name?` already used — so a repaired message reads the same way a
* reader of the old one expected.
*/
function render(message, params) {
	const values = valuesOf(params);
	return message.replace(PLACEHOLDER, (_, name) => values[name] === void 0 || values[name] === null ? `?${name}?` : String(values[name]));
}
/**
* Build the emitter the proxy calls.
*
* One record per reached call: the sampler has already decided whether this call is recorded, so the
* emitter's only accounting is `emitted` — a counter the report reads beside `reached`, which is how
* a reader tells "the code never asked" from "the policy said no".
*/
function createEmitter(options) {
	const { registry, write, now = Date.now, identity } = options;
	return (signal, params, site) => {
		const policy = registry.policy(signal.id);
		const ambient = identity?.();
		const record = {
			signal: signal.id,
			kind: signal.kind,
			level: policy.level,
			message: render(signal.message, params),
			...signal.kind === "log" && signal.mtid !== void 0 ? { mtid: signal.mtid } : {},
			...signal.kind === "log" && signal.method !== void 0 ? { method: render(signal.method, params) } : {},
			...params === void 0 ? {} : { params },
			...site === void 0 ? {} : { site },
			...ambient === void 0 ? {} : { identity: ambient },
			time: now()
		};
		registry.count(signal.id, "emitted");
		write(record);
	};
}
var PLACEHOLDER;
function init_emit() {
	return (init_emit = __esmMin((() => {
		PLACEHOLDER = /\{([^}]*)\}/g;
	})))();
}
// ../../core/lukaot/src/compat.ts
function init_compat() {
	return (init_compat = __esmMin((() => {
		init_declare();
	})))();
}
// ../../core/lukaot/src/error.ts
/**
* Build the emitter an error signal's call goes through.
*
* The record is written before the value is returned, so the order a reader sees — the line, then
* the failure — is the order the process produced. A silent declaration writes nothing; a silent
* declaration an operator has named in the policy writes at the level that policy set.
*/
function createErrorEmitter(options) {
	const { registry, write, now = Date.now, identity } = options;
	return (signal, params, site, call) => {
		const declared = signal;
		const policy = registry.policy(declared.id);
		const message = render(declared.message, params);
		const error = Object.assign(new Error(message), {
			type: declared.id,
			message,
			...declared.print === void 0 ? {} : { print: render(declared.print, params) },
			...params === void 0 ? {} : { params },
			...declared.statusCode === void 0 ? {} : { statusCode: declared.statusCode },
			...declared.silent ? { silent: true } : {},
			...call?.cause === void 0 ? {} : { cause: call.cause }
		});
		if (declared.silent !== true || registry.hasPolicy(declared.id)) {
			const ambient = identity?.();
			write({
				signal: declared.id,
				kind: "error",
				level: policy.level,
				message,
				...params === void 0 ? {} : { params },
				...site === void 0 ? {} : { site },
				...ambient === void 0 ? {} : { identity: ambient },
				time: now()
			});
			registry.count(declared.id, "emitted");
		}
		return error;
	};
}
function init_error() {
	return (init_error = __esmMin((() => {
		init_emit();
	})))();
}
// ../../core/lukaot/src/capture.ts
/**
* A short stable digest for a `hash` mask.
*
* FNV-1a, base36, six characters: enough to tell two values apart in one reader's session and not
* enough to be worth attacking offline. It is *not* a secret — a hash of a low-entropy value is a
* disclosure in itself — which is why `hide` remains the default and `hash` is chosen deliberately.
*/
function digest(value) {
	let hash = 2166136261;
	for (let index = 0; index < value.length; index += 1) hash = Math.imul(hash ^ value.charCodeAt(index), 16777619);
	return `#${(hash >>> 0).toString(36).slice(0, 6)}`;
}
/** The text a `partial` mask shows: the ends kept, the middle starred. */
function partial(value, keep) {
	const head = Math.max(0, keep?.head ?? 4);
	const tail = Math.max(0, keep?.tail ?? 4);
	if (value.length <= head + tail) return HIDDEN;
	return `${value.slice(0, head)}${"*".repeat(Math.min(8, value.length - head - tail))}${value.slice(-tail)}`;
}
/** Withhold one value, in the mode the rule asked for. */
function withhold(value, how = "hide", keep) {
	const text = typeof value === "string" ? value : JSON.stringify(value);
	if (text === void 0) return HIDDEN;
	if (how === "partial") return partial(text, keep);
	if (how === "hash") return digest(text);
	return HIDDEN;
}
/**
* Withhold every value a mask names.
*
* Total and non-throwing: a payload is arbitrary data, and a mask that could crash the call site it
* protects would be worse than the leak it prevents. A path that matches nothing withholds nothing —
* the same silent miss `redact.ts` documents, and for the same reason: a typo must not take a process
* down, but a reader must not be told the rule ran when it did not.
*
* The result is a deep copy down the paths that changed; anything untouched is shared with the input,
* because a capture may be a large object and copying all of it to withhold one field is a cost paid by
* every record.
*/
function applyMask(value, mask) {
	if (!mask || value === null || typeof value !== "object") return {
		value,
		masked: 0
	};
	let masked = 0;
	const seen = /* @__PURE__ */ new WeakMap();
	const walk = (node, at, ignoreCase) => {
		if (node === null || typeof node !== "object") return node;
		if (seen.has(node)) return seen.get(node);
		const own = node;
		const out = Array.isArray(node) ? [] : {};
		for (const [key, child] of Object.entries(own)) {
			const path = [...at, key];
			const deep = mask.deep?.find((rule) => nameMatches(rule.match, key));
			const hit = lastMatching(mask.paths, path, ignoreCase);
			if (deep || hit) {
				const rule = hit ?? deep;
				out[key] = withhold(child, rule.how, rule.keep);
				masked += 1;
				continue;
			}
			out[key] = walk(child, path, ignoreCase);
		}
		seen.set(node, out);
		return out;
	};
	return {
		value: walk(value, [], false),
		masked
	};
}
/** The last path rule that matches `at`, so a later rule can tighten an earlier one. */
function lastMatching(rules, at, ignoreCase) {
	if (!rules) return void 0;
	for (let index = rules.length - 1; index >= 0; index -= 1) {
		const rule = rules[index];
		if (pathMatches(segmentsOf(rule.at), at, ignoreCase || Boolean(rule.ignoreCase))) return rule;
	}
}
/** Whether a rule's path matches the path a value sits at. */
function pathMatches(pattern, at, ignoreCase) {
	for (let index = 0; index < pattern.length; index += 1) {
		const part = pattern[index];
		if (part === "**") return at.length >= index;
		if (index >= at.length) return false;
		if (!segmentMatches(part, at[index], ignoreCase)) return false;
	}
	return pattern.length === at.length;
}
/** Text of a body for a rung, truncated and saying so. */
function bodyText(body, level) {
	const text = typeof body === "string" ? body : body instanceof Uint8Array ? `<${body.length} bytes>` : JSON.stringify(body) ?? "";
	const bytes = text.length;
	const limit = BODY_LIMIT[level];
	if (limit === void 0 || text.length <= limit) return {
		text,
		bytes
	};
	return {
		text: `${text.slice(0, limit)}… (${text.length} chars)`,
		bytes
	};
}
/** The header names a rung shows, with their values withheld by the mask. */
function headerText(headers) {
	if (!headers) return "";
	return Object.keys(headers).join(", ");
}
/**
* A shape's floor of rules plus what the scope configured.
*
* Additive, never subtractive: a scope may add a path of its own (its own secret header) and may raise
* the rung, but it cannot switch off the floor — a deployment that wants a header out of a capture has
* no way to ask for `authorization` back, which is the property that makes the default trustworthy
* (`@@D-906`).
*/
function mergeMask(floor, configured) {
	if (!floor) return configured ?? {};
	if (!configured) return floor;
	return {
		paths: [...floor.paths ?? [], ...configured.paths ?? []],
		deep: [...floor.deep ?? [], ...configured.deep ?? []],
		bytes: [...floor.bytes ?? [], ...configured.bytes ?? []]
	};
}
var HIDDEN, BODY_LIMIT, FRAME_PREVIEW, segmentsOf, segmentMatches, nameMatches, httpExchange, tcpFrame, jsonPayload;
function init_capture() {
	return (init_capture = __esmMin((() => {
		HIDDEN = "[redacted]";
		BODY_LIMIT = {
			body: 2048,
			full: 8192
		};
		FRAME_PREVIEW = 32;
		segmentsOf = (at) => at.split(".").filter((part) => part.length > 0);
		segmentMatches = (pattern, segment, ignoreCase) => {
			if (pattern === "*") return true;
			if (pattern === "**") return true;
			return ignoreCase ? pattern.toLowerCase() === segment.toLowerCase() : pattern === segment;
		};
		nameMatches = (match, name) => typeof match === "string" ? match === name : match.test(name);
		httpExchange = {
			name: "http.exchange",
			levels: [
				"line",
				"headers",
				"body",
				"full"
			],
			mask: {
				deep: [{ match: /token|secret|key|password|authorization|cookie/i }],
				paths: [
					{
						at: "headers.authorization",
						ignoreCase: true
					},
					{
						at: "headers.cookie",
						ignoreCase: true
					},
					{
						at: "headers.set-cookie",
						ignoreCase: true
					},
					{
						at: "headers.proxy-authorization",
						ignoreCase: true
					},
					{
						at: "headers.x-api-key",
						ignoreCase: true
					}
				]
			},
			render(exchange, level, mask) {
				const { value, masked } = applyMask(exchange, mergeMask(httpExchange.mask, mask));
				const head = value.phase === "request" ? `${value.method ?? "GET"} ${value.url ?? ""}` : `${value.statusCode ?? 0} ${value.statusMessage ?? ""} ${value.method ?? ""} ${value.url ?? ""}`.trim();
				const summary = value.durationMs === void 0 ? head : `${head} (${value.durationMs}ms)`;
				const fields = {
					phase: value.phase,
					...value.method === void 0 ? {} : { method: value.method },
					...value.url === void 0 ? {} : { url: value.url },
					...value.statusCode === void 0 ? {} : { statusCode: value.statusCode },
					...value.durationMs === void 0 ? {} : { durationMs: value.durationMs },
					...level === "line" || value.headers === void 0 ? {} : { headers: headerText(value.headers) }
				};
				const body = level === "line" || level === "headers" ? void 0 : bodyText(value.body, level);
				return {
					summary,
					fields,
					...body === void 0 ? {} : { payload: body.text },
					bytes: body?.bytes ?? 0,
					masked
				};
			}
		};
		tcpFrame = {
			name: "tcp.frame",
			levels: [
				"line",
				"hex",
				"full"
			],
			render(frame, level, mask) {
				const { data } = frame;
				const bytes = data.length;
				let masked = 0;
				const copy = new Uint8Array(data);
				for (const rule of mask.bytes ?? []) for (let index = rule.offset; index < Math.min(rule.offset + rule.length, bytes); index += 1) {
					copy[index] = 0;
					masked += 1;
				}
				const hex = (from, to) => Array.from(copy.subarray(from, to), (byte) => byte.toString(16).padStart(2, "0")).join(" ");
				const ascii = (from, to) => Array.from(copy.subarray(from, to), (byte) => byte >= 32 && byte < 127 ? String.fromCharCode(byte) : ".").join("");
				const summary = `${frame.direction} ${bytes}B ${hex(0, Math.min(FRAME_PREVIEW, bytes))}`;
				const preview = level === "line" ? void 0 : hex(0, bytes);
				return {
					summary,
					fields: {
						direction: frame.direction,
						bytes,
						...level === "line" ? {} : { ascii: ascii(0, Math.min(bytes, level === "full" ? bytes : FRAME_PREVIEW)) }
					},
					...preview === void 0 ? {} : { payload: preview },
					bytes,
					masked
				};
			}
		};
		jsonPayload = {
			name: "json",
			levels: [
				"line",
				"keys",
				"body"
			],
			mask: { deep: [{ match: /password|secret|token|pin|pan|cvv|iban|msisdn/i }] },
			render(payload, level, mask) {
				const { value, masked } = applyMask(payload.value, mergeMask(jsonPayload.mask, mask));
				const keys = value !== null && typeof value === "object" ? Object.keys(value) : [];
				const body = bodyText(value, level === "body" ? "body" : "line");
				return {
					summary: `${payload.label ?? "json"} ${body.bytes}B ${keys.slice(0, 6).join(", ")}`.trim(),
					fields: {
						...payload.label === void 0 ? {} : { label: payload.label },
						bytes: body.bytes,
						keys
					},
					...level === "body" ? { payload: body.text } : {},
					bytes: body.bytes,
					masked
				};
			}
		};
		httpExchange.name, tcpFrame.name, jsonPayload.name;
	})))();
}
// ../../core/lukaot/src/captureWriter.ts
function init_captureWriter() {
	return (init_captureWriter = __esmMin((() => {
		init_capture();
	})))();
}
// ../../core/lukaot/src/proxy.ts
/**
* Build the vocabulary a handler destructures.
*
* One proxy per registry, so a realm's vocabulary and its policy are the same object: the `get` trap
* asks the registry on every read, which is what makes a reload take effect without rebuilding it.
*/
function createSignalProxy(options) {
	const { registry, captureStack = false, threshold = "trace", emit, random = Math.random } = options;
	const edge = /* @__PURE__ */ new Map();
	/** The dependency edge is recorded once per identifier, on the first reach. */
	const siteOf = (id) => {
		if (edge.has(id)) return edge.get(id);
		const site = captureSite(captureStack);
		edge.set(id, site);
		return site;
	};
	/** Whether the policy lets the signal be reached at all — the threshold and the switch. */
	const allowed = (id) => {
		if (!registry.signal(id)) return false;
		const policy = registry.policy(id);
		if (!policy.enabled) return false;
		return (LEVEL_ORDER$1.get(policy.level) ?? 0) >= (LEVEL_ORDER$1.get(threshold) ?? 0);
	};
	/**
	* Whether this call is sampled in.
	*
	* An error signal always is: the caller has to throw something, so the sample decides whether
	* the record is written, never whether the value exists.
	*/
	const sampled = (id) => {
		const policy = registry.policy(id);
		return registry.signal(id)?.kind === "error" || policy.sample >= 1 || random() < policy.sample;
	};
	return {
		vocabulary: new Proxy(Object.create(null), {
			get(_target, name) {
				if (typeof name !== "string") return void 0;
				const signal = registry.signal(name);
				if (!signal || !allowed(name)) {
					if (signal) registry.count(name, "suppressed");
					return;
				}
				if (!sampled(name)) {
					registry.count(name, "sampledOut");
					return;
				}
				const site = siteOf(name);
				return (params, call) => {
					registry.count(name, "reached");
					return emit?.(signal, params, site, call);
				};
			},
			has(_target, name) {
				return typeof name === "string" && registry.signal(name) !== void 0;
			}
		}),
		sites() {
			return Object.fromEntries(edge);
		},
		dependencies() {
			const edges = {};
			for (const [id, site] of edge) {
				const file = site?.file;
				if (!file) continue;
				(edges[file] ??= []).push(id);
			}
			return edges;
		},
		reachable: allowed
	};
}
var LEVEL_ORDER$1;
function init_proxy() {
	return (init_proxy = __esmMin((() => {
		init_declare();
		init_site();
		LEVEL_ORDER$1 = new Map(LEVEL_NAMES.map((name, index) => [name, index]));
	})))();
}
// ../../core/lukaot/src/view.ts
/** Build the callable surface for one writer, over a registry the caller owns. */
function signalView(registry, write) {
	const emitted = createEmitter({
		registry,
		write
	});
	const failed = createErrorEmitter({
		registry,
		write
	});
	return createSignalProxy({
		registry,
		emit: (signal, params, site) => signal.kind === "error" ? failed(signal, params, site) : emitted(signal, params, site)
	});
}
/** A writer that hands a record to a level-bound face — what a port and a child both do. */
function writeThroughFace(face) {
	return (record) => {
		const line = face?.[record.level];
		if (typeof line !== "function") return;
		line.call(face, signalBindings(record), record.message);
	};
}
/**
* The bindings a line carries beside its message.
*
* The identifier first, because it is what a reader greps for, then the values as they were supplied.
* Nothing is derived from the message: a reworded message is the same line.
*
* The envelope travels as `$meta`, which is where the framework's printer looks for it: it lifts
* `mtid` and `method` onto the header line (`info watch.config.reload …`), so a record that declared
* them must hand them over in that shape or the line loses two of its fields (`@@F-764`).
*/
function signalBindings(record) {
	const envelope = record.mtid === void 0 && record.method === void 0 ? void 0 : {
		...record.mtid === void 0 ? {} : { mtid: record.mtid },
		...record.method === void 0 ? {} : { method: record.method }
	};
	return {
		signal: record.signal,
		...record.params === void 0 ? {} : { params: record.params },
		...envelope === void 0 ? {} : { $meta: envelope }
	};
}
function init_view() {
	return (init_view = __esmMin((() => {
		init_emit();
		init_error();
		init_proxy();
	})))();
}
// ../../core/lukaot/src/refs.ts
var KIND_SEGMENT;
function init_refs() {
	return (init_refs = __esmMin((() => {
		init_browser();
		KIND_SEGMENT = {
			record: "r",
			template: "t",
			trace: "x",
			payload: "p"
		};
		monotonicFactory();
		Object.fromEntries(Object.entries(KIND_SEGMENT).map(([kind, segment]) => [segment, kind]));
	})))();
}
// ../../core/lukaot/src/registry.ts
/** Build a registry from a declaration. */
function createRegistry(vocabulary) {
	return new SignalRegistry(vocabulary);
}
var LEVEL_ORDER, SignalRegistry;
function init_registry() {
	return (init_registry = __esmMin((() => {
		init_declare();
		LEVEL_ORDER = new Map(LEVEL_NAMES.map((name, index) => [name, index]));
		SignalRegistry = class {
			#signal = /* @__PURE__ */ new Map();
			#policy = /* @__PURE__ */ new Map();
			#counters = /* @__PURE__ */ new Map();
			#version = 0;
			constructor(vocabulary) {
				for (const [id, signal] of Object.entries(vocabulary.signal)) {
					this.#signal.set(id, signal);
					this.#counters.set(id, {
						reached: 0,
						emitted: 0,
						sampledOut: 0,
						suppressed: 0
					});
				}
			}
			/** Every declared identifier, in declaration order. */
			identifiers() {
				return [...this.#signal.keys()];
			}
			/**
			* Declare one more signal after construction.
			*
			* The compatibility logger declares a signal on the first call a package makes through it, and
			* a policy has to be able to reach that signal like any other — so it joins the same map and
			* gets the same counters. Declaring an identifier twice is a no-op, because a legacy signal is
			* keyed off its own derived name.
			*/
			declareSignal(signal) {
				if (this.#signal.has(signal.id)) return;
				this.#signal.set(signal.id, signal);
				this.#counters.set(signal.id, {
					reached: 0,
					emitted: 0,
					sampledOut: 0,
					suppressed: 0
				});
				this.#version += 1;
			}
			/** One declared signal, or `undefined` when the identifier is not declared. */
			signal(id) {
				return this.#signal.get(id);
			}
			/** The counters of one identifier, or `undefined` when it is not declared. */
			counters(id) {
				return this.#counters.get(id);
			}
			/** A counter moved by the code that observed it. */
			count(id, counter) {
				const counters = this.#counters.get(id);
				if (counters) counters[counter] += 1;
			}
			/** Bumped by every patch, so a reader that caches a resolution can tell it went stale. */
			get version() {
				return this.#version;
			}
			/**
			* Merge overrides into the policy.
			*
			* Called once at assembly with the realm's `lukaot.policy` block and again whenever that block
			* reloads. A key naming an undeclared identifier is reported rather than dropped, because a
			* typo in configuration is otherwise an override that silently does nothing.
			*/
			patch(overrides) {
				const unknown = [];
				for (const [key, policy] of Object.entries(overrides)) {
					if (!this.#matches(key)) {
						unknown.push(key);
						continue;
					}
					if (policy.level !== void 0 && !LEVEL_ORDER.has(policy.level)) throw new Error(`lukaot: "${key}" sets level "${String(policy.level)}", which is not one of ` + LEVEL_NAMES.join(", "));
					this.#policy.set(key, {
						...this.#policy.get(key),
						...policy
					});
				}
				this.#version += 1;
				return unknown;
			}
			/** Whether an operator has named this identifier — the question a silent signal asks. */
			hasPolicy(id) {
				return this.#policy.has(id);
			}
			/**
			* The policy in force for one identifier, resolved on every read.
			*
			* The namespace answer is the base and the exact answer is laid over it, so a realm-wide level
			* and one method's sample compose instead of replacing each other.
			*/
			policy(id) {
				const base = {
					enabled: true,
					level: this.#signal.get(id)?.level ?? "info",
					sample: 1
				};
				const namespace = this.#namespaceOf(id);
				const resolved = {
					...base,
					...namespace === void 0 ? {} : this.#policy.get(namespace),
					...this.#policy.get(id)
				};
				return {
					enabled: resolved.enabled !== false,
					level: resolved.level ?? base.level,
					sample: resolved.sample ?? 1
				};
			}
			/** The namespace a policy key may name: the identifier's leading word. */
			#namespaceOf(id) {
				const namespace = /^[a-z]+/.exec(id)?.[0];
				return namespace === id ? void 0 : namespace;
			}
			/** Whether a policy key names something: an identifier, or the namespace of one. */
			#matches(key) {
				return this.#signal.has(key) || [...this.#signal.keys()].some((id) => id.startsWith(key));
			}
		};
	})))();
}
// ../../core/lukaot/index.ts
function init_lukaot() {
	return (init_lukaot = __esmMin((() => {
		init_compat();
		init_declare();
		init_capture();
		init_captureWriter();
		init_proxy();
		init_view();
		init_refs();
		init_registry();
		init_site();
	})))();
}
export { signalView as a, contribute as c, init_declare as d, init_view as i, contributedVocabularies as l, createRegistry as n, writeThroughFace as o, init_registry as r, compose as s, init_lukaot as t, declare as u };
