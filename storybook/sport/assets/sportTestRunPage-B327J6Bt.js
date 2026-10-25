const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./testAthlete.flow-T9Ckg6xi.js","./rolldown-runtime-V4kyJ4NV.js","./iframe-DxBhgsxq.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./browser-vpOcWc6g.js","./__vite-browser-external-bwQQhMfC.js","./attachable-B3-ly0Fu.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./primereact-_rYrCq5a.js","./Deck-B7MkA9kL.js","./BlongContext-B_6NAJve.js","./inputtext.esm-DVdHXlQv.js","./react-dom--p2_7awc.js","./Deck-DVlB4hMN.css","./datatable.esm-CRrgT_ub.js","./iframe-Dy8lWZD5.css"])))=>i.map(i=>d[i]);
import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { n as init_BlongContext, r as useBlong } from "./BlongContext-B_6NAJve.js";
import { i as init_Card, n as init_Deck, r as Card, t as Deck } from "./Deck-B7MkA9kL.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { H as Text, U as init_Text, V as init_primereact, W as SplitterPanel, j as Splitter, p as Dropdown, r as Button, v as InputText } from "./primereact-_rYrCq5a.js";
import { i as progressTree, n as init_executor, r as init_progress, t as TestExecutor$1 } from "./executor-DV0RacEh.js";
//#endregion
//#region ../../core/blong-chain/browser-assert.ts
/** Structural equality with cycle protection; Dates, RegExps, Maps, Sets and arrays included. */
function deepEqual(actual, expected, seen = /* @__PURE__ */ new WeakMap()) {
	if (Object.is(actual, expected)) return true;
	if (!isObject(actual) || !isObject(expected)) return false;
	if (actual instanceof Date || expected instanceof Date) return actual instanceof Date && expected instanceof Date && actual.getTime() === expected.getTime();
	if (actual instanceof RegExp || expected instanceof RegExp) return actual instanceof RegExp && expected instanceof RegExp && String(actual) === String(expected);
	if (Array.isArray(actual) !== Array.isArray(expected)) return false;
	if (Array.isArray(actual) && Array.isArray(expected)) {
		if (actual.length !== expected.length) return false;
		let pairs = seen.get(actual);
		if (pairs?.has(expected)) return true;
		if (!pairs) seen.set(actual, pairs = /* @__PURE__ */ new WeakSet());
		pairs.add(expected);
		return actual.every((value, index) => deepEqual(value, expected[index], seen));
	}
	if (actual instanceof Map || expected instanceof Map) {
		if (!(actual instanceof Map) || !(expected instanceof Map) || actual.size !== expected.size) return false;
		for (const [key, value] of actual) if (!expected.has(key) || !deepEqual(value, expected.get(key), seen)) return false;
		return true;
	}
	if (actual instanceof Set || expected instanceof Set) {
		if (!(actual instanceof Set) || !(expected instanceof Set) || actual.size !== expected.size) return false;
		for (const value of actual) if (!expected.has(value)) return false;
		return true;
	}
	let pairs = seen.get(actual);
	if (pairs?.has(expected)) return true;
	if (!pairs) seen.set(actual, pairs = /* @__PURE__ */ new WeakSet());
	pairs.add(expected);
	const actualKeys = Object.keys(actual);
	const expectedKeys = Object.keys(expected);
	return actualKeys.length === expectedKeys.length && actualKeys.every((key) => Object.prototype.hasOwnProperty.call(expected, key) && deepEqual(actual[key], expected[key], seen));
}
/** A fresh assert object, so a run cannot mutate the shared one. */
function createBrowserAssert() {
	return assert;
}
var AssertionError, isObject, fail, check, same, notSame, looseSame, looseNotSame, deepSame, deepNotSame, matches, throws, doesNotThrow, rejects, doesNotReject, ifError, assert;
function init_browser_assert() {
	return (init_browser_assert = __esmMin((() => {
		AssertionError = class extends Error {
			actual;
			expected;
			operator;
			code = "ERR_ASSERTION";
			constructor(options = {}) {
				const details = typeof options === "string" ? { message: options } : options;
				super(details.message ?? "Assertion failed");
				this.name = "AssertionError";
				this.actual = details.actual;
				this.expected = details.expected;
				this.operator = details.operator;
			}
		};
		isObject = (value) => typeof value === "object" && value !== null;
		fail = (options) => {
			throw new AssertionError(options);
		};
		check = (value, message) => {
			if (!value) fail({
				message: message ?? "The expression evaluated to a falsy value",
				actual: value,
				operator: "=="
			});
		};
		same = (actual, expected, message) => {
			if (!Object.is(actual, expected)) fail({
				message: message ?? `Expected values to be strictly equal: ${String(actual)} !== ${String(expected)}`,
				actual,
				expected,
				operator: "strictEqual"
			});
		};
		notSame = (actual, expected, message) => {
			if (Object.is(actual, expected)) fail({
				message: message ?? "Expected values to be strictly not equal",
				actual,
				expected,
				operator: "notStrictEqual"
			});
		};
		looseSame = (actual, expected, message) => {
			if (!(actual == expected)) fail({
				message: message ?? `Expected values to be equal: ${String(actual)} != ${String(expected)}`,
				actual,
				expected,
				operator: "equal"
			});
		};
		looseNotSame = (actual, expected, message) => {
			if (actual == expected) fail({
				message: message ?? "Expected values to be not equal",
				actual,
				expected,
				operator: "notEqual"
			});
		};
		deepSame = (actual, expected, message) => {
			if (!deepEqual(actual, expected)) fail({
				message: message ?? "Expected values to be deeply equal",
				actual,
				expected,
				operator: "deepEqual"
			});
		};
		deepNotSame = (actual, expected, message) => {
			if (deepEqual(actual, expected)) fail({
				message: message ?? "Expected values to be not deeply equal",
				actual,
				expected,
				operator: "notDeepEqual"
			});
		};
		matches = (actual, expected) => {
			if (expected instanceof RegExp) return expected.test(String(actual));
			if (typeof expected === "string") return String(actual).includes(expected);
			return false;
		};
		throws = (fn, expected, message) => {
			let thrown;
			try {
				fn();
			} catch (error) {
				thrown = error;
			}
			if (thrown === void 0) fail({
				message: message ?? "Missing expected exception",
				operator: "throws"
			});
			if (expected instanceof RegExp && !expected.test(String(thrown?.message ?? thrown))) fail({
				message: message ?? "The thrown error did not match the pattern",
				actual: thrown,
				expected,
				operator: "throws"
			});
			if (typeof expected === "function" && expected.prototype instanceof Error) {
				if (!(thrown instanceof expected)) fail({
					message: message ?? "The thrown error was not an instance of the expected type",
					actual: thrown,
					expected,
					operator: "throws"
				});
			}
		};
		doesNotThrow = (fn, message) => {
			try {
				fn();
			} catch (error) {
				fail({
					message: message ?? `Got unwanted exception: ${error?.message ?? error}`,
					actual: error,
					operator: "doesNotThrow"
				});
			}
		};
		rejects = async (promise, expected, message) => {
			try {
				await promise;
			} catch (error) {
				if (expected instanceof RegExp && !expected.test(String(error?.message ?? error))) fail({
					message: message ?? "The rejection did not match the pattern",
					actual: error,
					expected,
					operator: "rejects"
				});
				return;
			}
			fail({
				message: message ?? "Missing expected rejection",
				operator: "rejects"
			});
		};
		doesNotReject = async (promise, message) => {
			try {
				await promise;
			} catch (error) {
				fail({
					message: message ?? `Got unwanted rejection: ${error?.message ?? error}`,
					actual: error,
					operator: "doesNotReject"
				});
			}
		};
		ifError = (value) => {
			if (value) throw value;
		};
		assert = ((value, message) => check(value, message));
		Object.assign(assert, {
			AssertionError,
			ok: check,
			equal: looseSame,
			notEqual: looseNotSame,
			strictEqual: same,
			notStrictEqual: notSame,
			deepEqual: deepSame,
			notDeepEqual: deepNotSame,
			deepStrictEqual: deepSame,
			notDeepStrictEqual: deepNotSame,
			fail: (message) => fail(typeof message === "string" ? { message } : message ?? {}),
			throws,
			doesNotThrow,
			rejects,
			doesNotReject,
			ifError,
			match: (actual, expected, message) => {
				if (!matches(actual, expected)) fail({
					message: message ?? "The string did not match the pattern",
					actual,
					expected,
					operator: "match"
				});
			},
			doesNotMatch: (actual, expected, message) => {
				if (matches(actual, expected)) fail({
					message: message ?? "The string matched the pattern",
					actual,
					expected,
					operator: "doesNotMatch"
				});
			}
		});
		assert.strict = assert;
	})))();
}
//#endregion
//#region ../../core/blong-chain/browser.ts
var TestExecutor;
function init_browser() {
	return (init_browser = __esmMin((() => {
		init_browser_assert();
		init_executor();
		init_progress();
		TestExecutor = class extends TestExecutor$1 {
			constructor(config = {}) {
				super({
					...config,
					assert: config.assert ?? createBrowserAssert()
				});
			}
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/testRunModel.ts
/** The step names of a run, in declaration order, including any the order list missed. */
function orderedNames(run) {
	const seen = /* @__PURE__ */ new Set();
	const names = [];
	for (const name of run.order) if (run.steps[name] && !seen.has(name)) {
		seen.add(name);
		names.push(name);
	}
	for (const name of Object.keys(run.steps)) if (!seen.has(name)) {
		seen.add(name);
		names.push(name);
	}
	return names;
}
function countSteps(steps) {
	const counts = {
		total: steps.length,
		pending: 0,
		running: 0,
		completed: 0,
		failed: 0
	};
	for (const step of steps) counts[step.status] += 1;
	return counts;
}
function sumAssertions$1(steps) {
	return steps.reduce((total, step) => ({
		total: total.total + (step.assertions?.total ?? 0),
		threw: total.threw + (step.assertions?.threw ?? 0)
	}), { ...EMPTY_ASSERTIONS });
}
function groupStatus(steps) {
	if (!steps.length) return "pending";
	if (steps.some((step) => step.status === "failed")) return "failed";
	if (steps.some((step) => step.status === "running")) return "running";
	if (steps.some((step) => step.status === "pending")) return steps.some((step) => step.status === "completed") ? "running" : "pending";
	return "completed";
}
function deriveGroups(run, steps) {
	const byPath = /* @__PURE__ */ new Map();
	for (const step of steps) {
		const key = groupKey(step.groupPath);
		const groupSteps = byPath.get(key);
		if (groupSteps) groupSteps.push(step);
		else byPath.set(key, [step]);
	}
	return Array.from(byPath.values()).map((groupSteps) => {
		const path = groupSteps[0].groupPath;
		const counts = countSteps(groupSteps);
		return {
			groupName: path.length ? path[path.length - 1] : run.name,
			path,
			status: groupStatus(groupSteps),
			stepNames: groupSteps.map((step) => step.stepName),
			totalSteps: counts.total,
			completedSteps: counts.completed,
			failedSteps: counts.failed
		};
	});
}
/**
* Recompute everything that is a function of the steps and edges.
*
* The executor reports counts and dependencies progressively; deriving them here keeps the view
* consistent even when an event is missed, and keeps the reducer free of duplicated bookkeeping.
*/
function deriveTestRun(run) {
	const names = orderedNames(run);
	const dependents = /* @__PURE__ */ new Map();
	const dependencies = /* @__PURE__ */ new Map();
	for (const edge of run.edges) {
		if (!run.steps[edge.from] || !run.steps[edge.to]) continue;
		if (!dependents.has(edge.to)) dependents.set(edge.to, /* @__PURE__ */ new Set());
		dependents.get(edge.to).add(edge.from);
		if (!dependencies.has(edge.from)) dependencies.set(edge.from, /* @__PURE__ */ new Set());
		dependencies.get(edge.from).add(edge.to);
	}
	const steps = {};
	for (const name of names) {
		const step = run.steps[name];
		steps[name] = {
			...step,
			dependencies: Array.from(dependencies.get(name) ?? step.dependencies ?? []),
			dependents: Array.from(dependents.get(name) ?? step.dependents ?? [])
		};
	}
	const stepList = names.map((name) => steps[name]);
	const counts = countSteps(stepList);
	const anyFailed = stepList.some((step) => step.status === "failed");
	const anyRunning = stepList.some((step) => step.status === "running");
	const anyPending = stepList.some((step) => step.status === "pending");
	const allTerminal = stepList.every((step) => step.status === "completed" || step.status === "failed");
	let status = run.status;
	if (run.status !== "pending") {
		if (run.error) status = "failed";
		else if (stepList.length) status = anyFailed ? "failed" : anyRunning || anyPending ? "running" : "completed";
	}
	const endedAt = allTerminal && stepList.length ? Math.max(...stepList.map((step) => step.endedAt ?? 0), run.startedAt) : status === "completed" || status === "failed" ? run.endedAt : void 0;
	return {
		...run,
		order: names,
		steps,
		counts,
		assertions: sumAssertions$1(stepList),
		groups: deriveGroups(run, stepList),
		status,
		endedAt
	};
}
function mergeEdges(existing, incoming, status) {
	const byId = new Map(existing.map((edge) => [edge.id, edge]));
	for (const edge of incoming) {
		const previous = byId.get(edge.id);
		byId.set(edge.id, {
			...previous,
			...edge,
			status: status ?? edge.status
		});
	}
	return Array.from(byId.values());
}
/** Apply one event to the model. */
function reduceTestRunEvent(run, event) {
	switch (event.kind) {
		case "run:start":
		case "run:snapshot":
		case "run:end": return deriveTestRun(event.run);
		case "step:start": {
			const step = {
				...event.step,
				assertions: event.step.assertions ?? { ...EMPTY_ASSERTIONS }
			};
			const edges = mergeEdges(run.edges, event.edges ?? [], "active");
			return deriveTestRun({
				...run,
				steps: {
					...run.steps,
					[step.stepName]: step
				},
				edges
			});
		}
		case "step:end":
		case "step:error": {
			const step = {
				...event.step,
				assertions: event.step.assertions ?? { ...EMPTY_ASSERTIONS }
			};
			const edges = run.edges.map((edge) => edge.from === step.stepName ? {
				...edge,
				status: "done"
			} : edge);
			return deriveTestRun({
				...run,
				steps: {
					...run.steps,
					[step.stepName]: step
				},
				edges
			});
		}
		case "step:dependency": return deriveTestRun({
			...run,
			edges: mergeEdges(run.edges, event.edges)
		});
		case "log": {
			const logs = [...run.logs ?? [], event.entry].slice(-500);
			return {
				...run,
				logs
			};
		}
	}
}
/** `3/4` — assertions that passed out of the assertions the step made. */
function assertionLabel(counts) {
	const total = counts?.total ?? 0;
	const threw = counts?.threw ?? 0;
	return `${Math.max(0, total - threw)}/${total}`;
}
function assertionFailed(counts) {
	return (counts?.threw ?? 0) > 0;
}
/** A short label for a source pointer: `testSessionFlow.ts:42:5`. */
function sourceLabel(source) {
	if (!source?.file) return "";
	return `${source.file.split("/").pop() ?? source.file}${source.line === void 0 ? "" : `:${source.line}`}${source.column === void 0 ? "" : `:${source.column}`}`;
}
/**
* Turn a captured source pointer into an editor or web URL. A missing config
* keeps the pointer unlinked; the scheme defaults from the base prefix and can be
* overridden by config.
*/
function sourceHref(source, config) {
	if (!source?.file || !config) return void 0;
	const { absolute, repoPath } = resolveSourcePath(source.file, config);
	const line = Math.max(1, source.line ?? 1);
	const column = Math.max(1, source.column ?? 1);
	if ((config.scheme ?? (config.vscodeRemote || config.base?.startsWith("vscode://") ? "vscode" : "https")) === "vscode") {
		const { prefix, root } = vscodeBase(config);
		const target = absolute ?? (repoPath && root ? `${root}/${repoPath}` : repoPath);
		if (!target) return void 0;
		return `${prefix}${target.startsWith("/") ? target : `/${target}`}:${line}:${column}`;
	}
	const base = config.base?.trim().replace(/\/+$/, "");
	if (!base || !repoPath) return void 0;
	return `${/^https?:\/\//i.test(base) ? base : `https://${base}`}/${repoPath}#L${line}`;
}
/**
* The source-link config for this build.
*
* DEV points at the editor (`vscode://file/<workspace path>`); a captured CI run
* points at the branch the run came from. Absent (a build without the define)
* leaves source pointers unlinked.
*/
function defaultSourceLinkConfig() {
	const injected = {
		"ci": false,
		"repository": "feasibleone/blong",
		"branch": "main",
		"workspaceRoot": "/home/kalin/work/blong/blong",
		"packagePath": "realm/blong-sport",
		"vscodeRemote": "ssh-remote+ms-02"
	};
	if (!injected) return void 0;
	const repository = injected.repository || "feasibleone/blong";
	const branch = injected.branch || "main";
	return {
		scheme: injected.ci ? "https" : "vscode",
		base: injected.ci ? `https://github.com/${repository}/blob/${branch}` : void 0,
		packagePath: injected.packagePath,
		workspaceRoot: injected.workspaceRoot,
		vscodeRemote: injected.vscodeRemote || void 0
	};
}
/** The `vscode://` prefix and local workspace root a source pointer is joined to. */
function vscodeBase(config) {
	const base = config.base?.trim().replace(/\/+$/, "");
	if (base?.startsWith("vscode://")) {
		const rest = base.slice(9);
		if (rest === "file") return { prefix: "vscode://file" };
		if (rest.startsWith("file/")) return {
			prefix: "vscode://file",
			root: rest.slice(4)
		};
		return {
			prefix: base,
			root: config.workspaceRoot?.replace(/\/+$/, "")
		};
	}
	if (base?.startsWith("/")) return {
		prefix: "vscode://file",
		root: base
	};
	const remote = config.vscodeRemote?.trim().replace(/^vscode:\/\//i, "").replace(/\/+$/, "");
	return {
		prefix: remote ? `vscode://${remote.includes("/") ? remote : `vscode-remote/${remote}`}` : "vscode://file",
		root: config.workspaceRoot?.replace(/\/+$/, "")
	};
}
/** Split a captured file into an absolute path and a workspace-relative path. */
function resolveSourcePath(file, config) {
	const raw = file.replace(/[?#].*$/, "");
	let absolute;
	let relativePath;
	if (raw.startsWith("file://")) {
		const path = decodeURIComponent(raw.slice(7));
		absolute = path.startsWith("/") ? path : `/${path}`;
	} else if (/^https?:\/\//i.test(raw)) {
		const match = /^https?:\/\/[^/]+\/s\/(.+)$/i.exec(raw);
		if (match) {
			const rest = decodeURIComponent(match[1]);
			if (rest.startsWith("@fs/")) absolute = rest.slice(3);
			else relativePath = rest;
		} else relativePath = raw.replace(/^https?:\/\/[^/]+\//i, "");
	} else if (/^[A-Za-z]:[\\/]/.test(raw) || raw.startsWith("/")) absolute = raw;
	else relativePath = raw;
	if (relativePath && config.packagePath) {
		const first = relativePath.split("/")[0] ?? "";
		if (!REPO_FOLDERS.has(first) && !relativePath.startsWith(`${config.packagePath}/`)) relativePath = `${config.packagePath}/${relativePath}`;
	}
	const repoPath = relativePath ? relativePath.replace(/^\.?\/+/, "") : absolute ? workspaceRelative(absolute, config.workspaceRoot) : void 0;
	return {
		absolute,
		repoPath
	};
}
/** Strip the workspace root, or fall back to the last monorepo folder in the path. */
function workspaceRelative(absolute, workspaceRoot) {
	const normalized = absolute.replace(/\\/g, "/");
	const root = workspaceRoot?.replace(/\\/g, "/").replace(/\/+$/, "");
	if (root && (normalized === root || normalized.startsWith(`${root}/`))) return normalized.slice(root.length + 1);
	const segments = normalized.split("/").filter(Boolean);
	let start;
	for (let index = 0; index < segments.length - 1; index += 1) if (REPO_FOLDERS.has(segments[index])) start = index;
	return start === void 0 ? void 0 : segments.slice(start).join("/");
}
/**
* The Log tab's stream: the executor's log lines plus the assertion messages, in time order. A
* step filter keeps the run-level lines as context; without a step the whole run is shown.
*/
function logRows(run, stepName) {
	const rows = [];
	for (const entry of run.logs ?? []) {
		if (stepName && entry.stepName && entry.stepName !== stepName) continue;
		rows.push({
			kind: "log",
			timestamp: entry.timestamp,
			level: entry.level,
			message: entry.message,
			stepName: entry.stepName,
			source: entry.source,
			data: entry.data
		});
	}
	for (const name of stepName ? [stepName] : orderedNames(run)) {
		const step = run.steps[name];
		for (const assertion of step?.assertionLog ?? []) rows.push({
			kind: "assertion",
			timestamp: assertion.timestamp ?? step?.startedAt ?? run.startedAt,
			level: assertion.passed ? "assert" : "assert-failed",
			message: assertion.message,
			stepName: name,
			passed: assertion.passed,
			source: assertion.source
		});
	}
	return rows.sort((a, b) => a.timestamp - b.timestamp || (a.stepName ?? "").localeCompare(b.stepName ?? "") || a.message.localeCompare(b.message));
}
function formatDuration(ms) {
	if (ms === void 0 || !Number.isFinite(ms)) return "—";
	if (ms === 0) return "0 ms";
	if (ms < 10) return `${ms.toFixed(1)} ms`;
	if (ms < 1e3) return `${Math.round(ms)} ms`;
	if (ms < 6e4) return `${(ms / 1e3).toFixed(2)} s`;
	return `${Math.floor(ms / 6e4)}m ${(ms % 6e4 / 1e3).toFixed(1)}s`;
}
function formatOffset(ms) {
	if (ms < 1) return "0";
	if (ms < 1e3) return `${Math.round(ms)} ms`;
	if (ms < 1e4) return `${(ms / 1e3).toFixed(1)} s`;
	return `${Math.round(ms / 1e3)} s`;
}
/** The step names of a run in declaration order. */
function stepNames(run) {
	return orderedNames(run);
}
var EMPTY_ASSERTIONS, groupKey, REPO_FOLDERS;
function init_testRunModel() {
	return (init_testRunModel = __esmMin((() => {
		init_browser();
		EMPTY_ASSERTIONS = {
			total: 0,
			threw: 0
		};
		groupKey = (path) => `group:${path.join("/")}`;
		REPO_FOLDERS = /* @__PURE__ */ new Set([
			"core",
			"realm",
			"suite",
			"demo",
			"test",
			"tools",
			"ext"
		]);
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/TestRunDetails.tsx
function safeStringify(value) {
	if (value === void 0) return "";
	try {
		return JSON.stringify(value, null, 2) ?? String(value);
	} catch {
		return String(value);
	}
}
/** A captured source pointer, linked when a base is configured and plain otherwise. */
function SourceLink({ source, config }) {
	if (!source?.file) return null;
	const href = sourceHref(source, config);
	const label = sourceLabel(source);
	const title = `${source.file}${source.line === void 0 ? "" : `:${source.line}`}${source.symbol ? ` · ${source.symbol}` : ""}`;
	return href ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("a", {
		className: "blong-test-run__source",
		href,
		title,
		target: "_blank",
		rel: "noreferrer",
		children: label
	}) : /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("span", {
		className: "blong-test-run__source",
		title,
		children: label
	});
}
/** The Log tab: executor lines and assertion messages in one stream. */
function LogList({ rows, startedAt, sourceLink }) {
	if (!rows.length) return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("p", {
		className: "blong-test-run__muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, { children: "No log entries or assertions" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("ul", {
		className: "blong-test-run__logs",
		children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("li", {
			className: `blong-test-run__log blong-test-run__log--${row.level}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("span", {
					className: "blong-test-run__log-time",
					children: formatDuration(Math.max(0, row.timestamp - startedAt))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("span", {
					className: "blong-test-run__log-level",
					children: row.kind === "assertion" ? row.passed ? "✓ assert" : "✗ assert" : row.level
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("span", {
					className: "blong-test-run__log-message",
					children: [
						row.stepName && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("span", {
							className: "blong-test-run__log-step",
							children: row.stepName
						}),
						row.message,
						/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(SourceLink, {
							source: row.source,
							config: sourceLink
						})
					]
				})
			]
		}, `${row.kind}-${row.timestamp}-${index}-${row.stepName ?? ""}`))
	});
}
function ProgressNodes({ nodes, depth = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("ul", {
		className: `blong-test-run__progress-tree depth-${depth}`,
		children: nodes.map((node, index) => /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("li", {
			className: `blong-test-run__progress-node blong-test-run__progress-node--${node.kind}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("span", {
					className: "blong-test-run__progress-label",
					children: node.name
				}),
				node.data && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("span", {
					className: "blong-test-run__progress-data",
					children: Object.entries(node.data).slice(0, 4).map(([key, value]) => `${key}=${safeStringify(value).replace(/\n/g, " ")}`).join(" · ")
				}),
				node.children.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(ProgressNodes, {
					nodes: node.children,
					depth: depth + 1
				})
			]
		}, `${depth}-${index}-${node.name}`))
	});
}
function TestRunDetailsContent({ run, stepName, open, sourceLink, onClose }) {
	const step = stepName ? run.steps[stepName] : void 0;
	const link = (0, import_react$5.useMemo)(() => sourceLink ?? defaultSourceLinkConfig(), [sourceLink]);
	const [tab, setTab] = (0, import_react$5.useState)("log");
	const tree = (0, import_react$5.useMemo)(() => progressTree(step?.progress), [step?.progress]);
	const rows = (0, import_react$5.useMemo)(() => logRows(run, stepName), [run, stepName]);
	if (!open) return null;
	const selectStep = /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("p", {
		className: "blong-test-run__muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, { children: "Select a step to see its details" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("section", {
		className: "blong-test-run__details p-card p-component",
		"aria-label": "Step details",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("header", {
				className: "blong-test-run__details-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
					className: "blong-test-run__details-title",
					children: step ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)(import_jsx_runtime$7.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("i", { className: `blong-test-run__status pi ${step.status === "failed" ? "pi-times" : step.status === "running" ? "pi-spin pi-spinner" : step.status === "completed" ? "pi-check" : "pi-circle-fill"}` }),
						/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("span", { children: step.displayName }),
						/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("span", {
							className: "blong-test-run__details-meta",
							children: [
								formatDuration(step.duration),
								" · assertions",
								" ",
								assertionLabel(step.assertions)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(SourceLink, {
							source: step.sourceLocation,
							config: link
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, { children: "Run log" })
				}), /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("button", {
					type: "button",
					className: "blong-test-run__graph-button",
					"aria-label": "Close details",
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("i", { className: "pi pi-times" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("nav", {
				className: "blong-test-run__tabs",
				role: "tablist",
				children: TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("button", {
					type: "button",
					role: "tab",
					"aria-selected": tab === item.id,
					className: `blong-test-run__tab${tab === item.id ? " is-active" : ""}`,
					onClick: () => setTab(item.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, { children: item.label }),
						item.id === "error" && step?.error && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("span", {
							className: "blong-test-run__tab-badge",
							children: "1"
						}),
						item.id === "log" && rows.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("span", {
							className: "blong-test-run__tab-badge",
							children: rows.length
						})
					]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
				className: "blong-test-run__details-body",
				children: [
					tab === "log" && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(LogList, {
						rows,
						startedAt: run.startedAt,
						sourceLink: link
					}),
					tab === "progress" && (!step ? selectStep : tree.length ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(ProgressNodes, { nodes: tree }) : /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("p", {
						className: "blong-test-run__muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, { children: "This step announced no checkpoints" })
					})),
					tab === "result" && (!step ? selectStep : step.result === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("p", {
						className: "blong-test-run__muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, { children: "The step returned nothing" })
					}) : /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("pre", {
						className: "blong-test-run__code",
						children: safeStringify(step.result)
					})),
					tab === "error" && (!step ? selectStep : step.error ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("div", {
						className: "blong-test-run__error",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
								className: "blong-test-run__error-message",
								children: step.error.message
							}),
							step.error.type && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
								className: "blong-test-run__error-type",
								children: step.error.type
							}),
							step.error.stack && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("pre", {
								className: "blong-test-run__code",
								children: step.error.stack
							}),
							step.error.context && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("pre", {
								className: "blong-test-run__code",
								children: safeStringify(step.error.context)
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("p", {
						className: "blong-test-run__muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, { children: "The step did not fail" })
					}))
				]
			})
		]
	});
}
/**
* The panel is keyed by the selected step: a different step starts on the Log tab, while a live
* refresh of the same step keeps the tab the user chose.
*/
function TestRunDetails(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(TestRunDetailsContent, { ...props }, props.stepName ?? "none");
}
var import_react$5, import_jsx_runtime$7, TABS;
function init_TestRunDetails() {
	return (init_TestRunDetails = __esmMin((() => {
		import_react$5 = require_react();
		init_Text();
		init_testRunModel();
		import_jsx_runtime$7 = require_jsx_runtime();
		TABS = [
			{
				id: "progress",
				label: "Progress"
			},
			{
				id: "result",
				label: "Result"
			},
			{
				id: "error",
				label: "Error"
			},
			{
				id: "log",
				label: "Log"
			}
		];
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/testRunLayout.ts
function aggregateStatus(steps) {
	if (steps.some((step) => step.status === "failed")) return "failed";
	if (steps.some((step) => step.status === "running")) return "running";
	if (steps.some((step) => step.status === "completed")) return steps.every((step) => step.status === "completed") ? "completed" : "running";
	return "pending";
}
function stepSpan(step, now) {
	const start = step.queuedAt ?? step.startedAt;
	if (start === void 0) return void 0;
	const queueEnd = step.startedAt ?? start;
	const end = step.endedAt ?? (step.status === "running" ? Math.max(now, queueEnd) : queueEnd);
	return {
		start,
		queueEnd,
		end: Math.max(end, queueEnd)
	};
}
/**
* The union of the leaves' execution spans, used by a parent row.
*
* A parent shows what its leaves did, not the queue they waited in: the earliest leaf start to
* the latest leaf end.
*/
function envelope(steps, now) {
	const spans = steps.map((step) => {
		const start = step.startedAt ?? step.queuedAt;
		if (start === void 0) return void 0;
		return {
			start,
			end: step.endedAt ?? (step.status === "running" ? Math.max(now, start) : start)
		};
	}).filter((span) => !!span);
	if (!spans.length) return void 0;
	const start = Math.min(...spans.map((span) => span.start));
	return {
		start,
		queueEnd: start,
		end: Math.max(...spans.map((span) => span.end))
	};
}
function sumAssertions(steps) {
	return steps.reduce((total, step) => ({
		total: total.total + (step.assertions?.total ?? 0),
		threw: total.threw + (step.assertions?.threw ?? 0)
	}), {
		total: 0,
		threw: 0
	});
}
/** Build the group tree from the steps' `groupPath` values. */
function buildTree(run) {
	const root = {
		path: [],
		name: run.name,
		entries: [],
		steps: []
	};
	const groups = /* @__PURE__ */ new Map([[groupKey([]), root]]);
	const ensure = (path) => {
		const key = groupKey(path);
		const existing = groups.get(key);
		if (existing) return existing;
		const parent = ensure(path.slice(0, -1));
		const node = {
			path,
			name: path[path.length - 1] ?? run.name,
			entries: [],
			steps: []
		};
		groups.set(key, node);
		parent.entries.push({
			kind: "group",
			node
		});
		return node;
	};
	for (const name of stepNames(run)) {
		const step = run.steps[name];
		ensure(step.groupPath).entries.push({
			kind: "step",
			step
		});
		let path = step.groupPath;
		while (true) {
			groups.get(groupKey(path)).steps.push(step);
			if (!path.length) break;
			path = path.slice(0, -1);
		}
	}
	return root;
}
/**
* The tree-table's rows: group rows followed by their children, or a flat start-time list.
*
* A collapsed group keeps its row and its envelope span, so its timing stays visible while its
* children are hidden. A filter removes steps and any group left with no matching step.
*/
function buildTreeLayout(run, options = {}) {
	const now = options.now ?? Date.now();
	const filter = options.filter;
	const rows = [];
	const visibleSteps = [];
	if (options.order === "start") {
		const steps = stepNames(run).map((name) => run.steps[name]).filter((step) => !filter || filter(step)).sort((a, b) => (a.startedAt ?? a.queuedAt ?? 0) - (b.startedAt ?? b.queuedAt ?? 0) || run.order.indexOf(a.stepName) - run.order.indexOf(b.stepName));
		for (const step of steps) {
			rows.push(stepRow(step, 0, now));
			visibleSteps.push(step.stepName);
		}
	} else {
		const root = buildTree(run);
		const visit = (group, depth) => {
			const matching = filter ? group.steps.filter((step) => filter(step)) : group.steps;
			if (filter && !matching.length) return;
			const collapsed = options.collapsed?.has(groupKey(group.path)) ?? false;
			const span = envelope(group.steps, now);
			rows.push({
				kind: "group",
				key: groupKey(group.path),
				label: group.name,
				depth,
				groupPath: group.path,
				status: aggregateStatus(group.steps),
				span,
				duration: span ? span.end - span.start : void 0,
				assertions: sumAssertions(group.steps),
				childKeys: group.steps.map((step) => step.stepName),
				collapsed,
				hiddenCount: group.steps.length - (collapsed ? 0 : matching.length)
			});
			if (collapsed) return;
			for (const entry of group.entries) {
				if (entry.kind === "group") {
					visit(entry.node, depth + 1);
					continue;
				}
				if (filter && !filter(entry.step)) continue;
				rows.push(stepRow(entry.step, depth + 1, now));
				visibleSteps.push(entry.step.stepName);
			}
		};
		visit(root, 0);
	}
	const spans = stepNames(run).map((name) => stepSpan(run.steps[name], now)).filter((span) => !!span);
	const t0 = Math.min(run.startedAt, ...spans.map((span) => span.start));
	const latest = spans.length ? Math.max(...spans.map((span) => span.end)) : run.startedAt;
	const running = run.status === "running" || stepNames(run).some((name) => run.steps[name].status === "running");
	const t1 = Math.max(latest, running ? now : latest, t0 + 1);
	return {
		t0,
		t1,
		ticks: niceTicks(t0, t1),
		rows,
		totalRows: stepNames(run).length,
		visibleSteps
	};
}
function stepRow(step, depth, now) {
	const span = stepSpan(step, now);
	const duration = step.duration ?? (step.startedAt !== void 0 ? Math.max(0, (step.endedAt ?? now) - step.startedAt) : void 0);
	return {
		kind: "step",
		key: step.stepName,
		label: step.displayName || step.stepName,
		depth,
		groupPath: step.groupPath,
		stepName: step.stepName,
		status: step.status,
		span,
		duration,
		assertions: step.assertions,
		hiddenCount: 0
	};
}
/** Ticks at `1/2/5 × 10^n`, labelled relative to `t0`. */
function niceTicks(t0, t1, max = 8) {
	if (t1 - t0 <= 1) return [{
		at: t0,
		label: "0"
	}];
	const raw = Math.max(1, t1 - t0) / Math.max(1, max);
	const magnitude = 10 ** Math.floor(Math.log10(raw));
	const residual = raw / magnitude;
	const step = (residual > 5 ? 10 : residual > 2 ? 5 : residual > 1 ? 2 : 1) * magnitude;
	const first = Math.ceil(t0 / step) * step;
	const ticks = [];
	for (let at = first; at <= t1 + step * .001; at += step) {
		ticks.push({
			at,
			label: formatOffset(at - t0)
		});
		if (ticks.length > 100) break;
	}
	return ticks;
}
/** Percentages for a bar inside the shared time axis. */
function barPct(span, t0, t1) {
	const total = Math.max(1, t1 - t0);
	const left = clampPct((span.start - t0) / total * 100);
	const fullWidth = clampPct((span.end - t0) / total * 100) - left;
	const queueWidth = clampPct((span.queueEnd - span.start) / total * 100);
	return {
		left,
		queueWidth: Math.min(queueWidth, Math.max(0, fullWidth)),
		width: Math.max(0, fullWidth)
	};
}
function nowPct(now, t0, t1) {
	return clampPct((now - t0) / Math.max(1, t1 - t0) * 100);
}
/** Where an instant sits on the shared time axis, as a percentage. */
function timePct(at, t0, t1) {
	return clampPct((at - t0) / Math.max(1, t1 - t0) * 100);
}
/**
* Separate the connected components of the dependency graph.
*
* A run often has one real chain plus several independent steps. Drawing the independent steps in
* the same layered graph stretches its widest level and scales the whole drawing down, so single
* steps and pairs are returned separately; the caller renders them as a compact flex list.
*/
function splitDependencies(run) {
	const names = stepNames(run);
	const adjacency = new Map(names.map((name) => [name, /* @__PURE__ */ new Set()]));
	for (const edge of run.edges) {
		if (!run.steps[edge.from] || !run.steps[edge.to]) continue;
		adjacency.get(edge.from).add(edge.to);
		adjacency.get(edge.to).add(edge.from);
	}
	const seen = /* @__PURE__ */ new Set();
	const components = [];
	for (const name of names) {
		if (seen.has(name)) continue;
		const stack = [name];
		const steps = [];
		seen.add(name);
		while (stack.length) {
			const current = stack.pop();
			steps.push(current);
			for (const next of adjacency.get(current) ?? []) {
				if (seen.has(next)) continue;
				seen.add(next);
				stack.push(next);
			}
		}
		steps.sort((a, b) => (run.order.indexOf(a) ?? 0) - (run.order.indexOf(b) ?? 0));
		const edges = run.edges.filter((edge) => steps.includes(edge.from) && steps.includes(edge.to));
		if (steps.length === 2 && edges.length) steps.splice(0, steps.length, edges[0].to, edges[0].from);
		components.push({
			steps,
			edges
		});
	}
	const graph = {
		steps: [],
		edges: []
	};
	const loose = [];
	for (const component of components) if (component.steps.length >= 3) {
		graph.steps.push(...component.steps);
		graph.edges.push(...component.edges);
	} else loose.push(component);
	graph.steps.sort((a, b) => (run.order.indexOf(a) ?? 0) - (run.order.indexOf(b) ?? 0));
	return {
		graph,
		loose
	};
}
/**
* Layered graph: a dependency sits one level before its dependent.
*
* The graph draws left to right when a level is wide (five or more parallel steps) and top to
* bottom when it is not, because the graph's card is tall and narrow. Within a level, steps are
* ordered by the mean position of their dependencies, falling back to declaration order, which
* keeps a chain on one straight line and stacks parallel steps across the other axis.
*/
function buildGraphLayout(run, options = {}) {
	let nodeWidth = options.nodeWidth ?? 128;
	let nodeHeight = options.nodeHeight ?? 26;
	let columnGap = options.columnGap ?? 48;
	let rowGap = options.rowGap ?? 14;
	const names = stepNames(run);
	const present = new Set(names);
	const upstream = /* @__PURE__ */ new Map();
	for (const name of names) upstream.set(name, []);
	for (const edge of run.edges) {
		if (!present.has(edge.from) || !present.has(edge.to)) continue;
		upstream.get(edge.from).push(edge.to);
	}
	const levelCache = /* @__PURE__ */ new Map();
	const levelOf = (name, seen = /* @__PURE__ */ new Set()) => {
		const cached = levelCache.get(name);
		if (cached !== void 0) return cached;
		if (seen.has(name)) return 0;
		seen.add(name);
		const deps = upstream.get(name) ?? [];
		const level = deps.length ? 1 + Math.max(...deps.map((dep) => levelOf(dep, new Set(seen)))) : 0;
		levelCache.set(name, level);
		return level;
	};
	const levels = /* @__PURE__ */ new Map();
	for (const name of names) {
		const level = levelOf(name);
		const bucket = levels.get(level);
		if (bucket) bucket.push(name);
		else levels.set(level, [name]);
	}
	const orderIndex = new Map(names.map((name, index) => [name, index]));
	const position = /* @__PURE__ */ new Map();
	const sortedLevels = Array.from(levels.entries()).sort(([a], [b]) => a - b);
	for (const [level, bucket] of sortedLevels) {
		bucket.sort((a, b) => {
			const mean = (name) => {
				const deps = upstream.get(name) ?? [];
				if (!deps.length) return orderIndex.get(name) ?? 0;
				const positions = deps.map((dep) => position.get(dep)).filter((value) => value !== void 0);
				return positions.length ? positions.reduce((sum, value) => sum + value, 0) / positions.length : orderIndex.get(name) ?? 0;
			};
			return mean(a) - mean(b) || (orderIndex.get(a) ?? 0) - (orderIndex.get(b) ?? 0);
		});
		bucket.forEach((name, index) => position.set(name, index));
		levels.set(level, bucket);
	}
	const nodes = [];
	const byName = {};
	const maxRows = sortedLevels.reduce((max, [, bucket]) => Math.max(max, bucket.length), 0);
	const vertical = options.orientation === "vertical" || options.orientation !== "horizontal" && maxRows < 5;
	const columns = vertical ? maxRows : sortedLevels.length;
	const rows = vertical ? sortedLevels.length : maxRows;
	let startX = 0;
	let startY = 0;
	if (options.targetWidth && options.targetHeight && columns > 0 && rows > 0) {
		const minGap = 20;
		nodeWidth = Math.max(56, Math.min(vertical ? 280 : 200, options.targetWidth / columns - minGap));
		nodeHeight = Math.max(vertical ? 28 : 24, Math.min(vertical ? 64 : 44, options.targetHeight / rows - minGap));
		columnGap = columns > 1 ? Math.max(minGap, (options.targetWidth - columns * nodeWidth) / (columns - 1)) : 0;
		rowGap = rows > 1 ? Math.max(minGap, (options.targetHeight - rows * nodeHeight) / (rows - 1)) : 0;
		const totalWidth = columns * nodeWidth + (columns - 1) * columnGap;
		const totalHeight = rows * nodeHeight + (rows - 1) * rowGap;
		startX = (options.targetWidth - totalWidth) / 2;
		startY = (options.targetHeight - totalHeight) / 2;
	}
	for (const [level, bucket] of sortedLevels) bucket.forEach((name, index) => {
		const node = {
			stepName: name,
			label: run.steps[name].displayName || name,
			level,
			index,
			x: vertical ? startX + index * (nodeWidth + columnGap) : startX + level * (nodeWidth + columnGap),
			y: vertical ? startY + level * (nodeHeight + rowGap) : startY + index * (nodeHeight + rowGap),
			width: nodeWidth,
			height: nodeHeight
		};
		nodes.push(node);
		byName[name] = node;
	});
	const edges = [];
	for (const edge of run.edges) {
		const dependent = byName[edge.from];
		const dependency = byName[edge.to];
		if (!dependent || !dependency) continue;
		edges.push({
			edge,
			path: edgePath(dependency, dependent, vertical)
		});
	}
	const computedWidth = columns * nodeWidth + Math.max(0, columns - 1) * columnGap;
	const computedHeight = rows * nodeHeight + Math.max(0, rows - 1) * rowGap;
	return {
		width: Math.max(options.targetWidth ?? nodeWidth, computedWidth),
		height: Math.max(options.targetHeight ?? options.minHeight ?? 120, computedHeight),
		nodes,
		edges,
		byName
	};
}
/** A cubic curve from a dependency's edge to its dependent's edge. */
function edgePath(from, to, vertical) {
	if (vertical) {
		const x1 = from.x + from.width / 2;
		const y1 = from.y + from.height;
		const x2 = to.x + to.width / 2;
		const y2 = to.y;
		const bend = Math.max(18, (y2 - y1) * .45);
		return `M ${x1} ${y1} C ${x1} ${y1 + bend}, ${x2} ${y2 - bend}, ${x2} ${y2}`;
	}
	const x1 = from.x + from.width;
	const y1 = from.y + from.height / 2;
	const x2 = to.x;
	const y2 = to.y + to.height / 2;
	const bend = Math.max(18, (x2 - x1) * .45);
	return `M ${x1} ${y1} C ${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2} ${y2}`;
}
var clampPct, edgeLabel;
function init_testRunLayout() {
	return (init_testRunLayout = __esmMin((() => {
		init_testRunModel();
		clampPct = (value) => Math.min(100, Math.max(0, value));
		edgeLabel = (edge) => `${edge.from} reads ${edge.property} from ${edge.to}`;
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/TestRunGraph.tsx
function TestRunGraph({ run, selectedKey, hoveredKey, onSelect, onHover }) {
	const split = (0, import_react$4.useMemo)(() => splitDependencies(run), [run]);
	const graphRun = (0, import_react$4.useMemo)(() => {
		if (!split.graph.steps.length) return void 0;
		const steps = Object.fromEntries(split.graph.steps.map((name) => [name, run.steps[name]]));
		return deriveTestRun({
			...run,
			order: split.graph.steps,
			steps,
			edges: split.graph.edges
		});
	}, [run, split]);
	const layout = (0, import_react$4.useMemo)(() => graphRun ? buildGraphLayout(graphRun) : void 0, [graphRun]);
	const ref = (0, import_react$4.useRef)(null);
	const [zoom, setZoom] = (0, import_react$4.useState)(1);
	const [pan, setPan] = (0, import_react$4.useState)({
		x: 0,
		y: 0
	});
	const dragRef = (0, import_react$4.useRef)(null);
	const viewWidth = (layout?.width ?? 1) / zoom;
	const viewHeight = (layout?.height ?? 1) / zoom;
	const maxPanX = Math.max(0, ((layout?.width ?? 1) - viewWidth) / 2);
	const maxPanY = Math.max(0, ((layout?.height ?? 1) - viewHeight) / 2);
	const viewBox = [
		((layout?.width ?? 1) - viewWidth) / 2 + clamp(pan.x, -maxPanX, maxPanX),
		((layout?.height ?? 1) - viewHeight) / 2 + clamp(pan.y, -maxPanY, maxPanY),
		viewWidth,
		viewHeight
	].join(" ");
	(0, import_react$4.useEffect)(() => {
		const element = ref.current;
		if (!element) return;
		const onWheel = (event) => {
			event.preventDefault();
			setZoom((value) => clamp(value * Math.exp(-event.deltaY * .0015), .6, 3));
		};
		element.addEventListener("wheel", onWheel, { passive: false });
		return () => element.removeEventListener("wheel", onWheel);
	}, []);
	const onPointerDown = (event) => {
		if (event.button !== 0) return;
		const element = event.currentTarget;
		element.setPointerCapture?.(event.pointerId);
		dragRef.current = {
			x: event.clientX,
			y: event.clientY,
			panX: pan.x,
			panY: pan.y,
			vbWidth: viewWidth,
			vbHeight: viewHeight,
			clientWidth: element.clientWidth || 1,
			clientHeight: element.clientHeight || 1
		};
	};
	const onPointerMove = (event) => {
		const start = dragRef.current;
		if (!start) return;
		setPan({
			x: start.panX - (event.clientX - start.x) / start.clientWidth * start.vbWidth,
			y: start.panY - (event.clientY - start.y) / start.clientHeight * start.vbHeight
		});
	};
	const endDrag = () => {
		dragRef.current = null;
	};
	const focus = hoveredKey ?? selectedKey;
	const graphFocus = graphRun && focus && graphRun.steps[focus] ? focus : void 0;
	const related = (0, import_react$4.useMemo)(() => {
		if (!graphFocus) return void 0;
		const set = /* @__PURE__ */ new Set([graphFocus]);
		for (const edge of graphRun?.edges ?? []) {
			if (edge.from === graphFocus) set.add(edge.to);
			if (edge.to === graphFocus) set.add(edge.from);
		}
		return set;
	}, [graphFocus, graphRun]);
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: "blong-test-run__graph",
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
			className: "blong-test-run__graph-main",
			children: [layout ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("div", {
				className: "blong-test-run__graph-controls",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("button", {
						type: "button",
						className: "blong-test-run__graph-button",
						"aria-label": "Zoom in",
						onClick: () => setZoom((value) => clamp(value * 1.2, .6, 3)),
						children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", { className: "pi pi-plus" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("button", {
						type: "button",
						className: "blong-test-run__graph-button",
						"aria-label": "Zoom out",
						onClick: () => setZoom((value) => clamp(value / 1.2, .6, 3)),
						children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", { className: "pi pi-minus" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("button", {
						type: "button",
						className: "blong-test-run__graph-button",
						"aria-label": "Fit graph",
						onClick: () => {
							setZoom(1);
							setPan({
								x: 0,
								y: 0
							});
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", { className: "pi pi-expand" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("svg", {
				ref,
				className: "blong-test-run__graph-svg",
				viewBox,
				style: {
					width: layout.width,
					height: layout.height
				},
				preserveAspectRatio: "xMidYMid meet",
				role: "group",
				"aria-label": "Step dependency graph",
				onPointerDown,
				onPointerMove,
				onPointerUp: endDrag,
				onPointerCancel: endDrag,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("g", {
					className: "blong-test-run__edges",
					children: layout.edges.map(({ edge, path }) => {
						const active = graphFocus !== void 0 && (edge.from === graphFocus || edge.to === graphFocus);
						return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("path", {
							d: path,
							className: [
								"blong-test-run__edge",
								`blong-test-run__edge--${edge.status}`,
								active ? "is-active" : ""
							].filter(Boolean).join(" "),
							onClick: () => onSelect(edge.from),
							children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("title", { children: edgeLabel(edge) })
						}, edge.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("g", {
					className: "blong-test-run__nodes",
					children: layout.nodes.map((node) => {
						const step = run.steps[node.stepName];
						const selected = selectedKey === node.stepName;
						const hovered = hoveredKey === node.stepName;
						const dim = !!related && !related.has(node.stepName);
						const maxChars = Math.max(6, Math.floor((node.width - 26) / 6.2));
						return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("g", {
							className: [
								"blong-test-run__node",
								`blong-test-run__node--${step.status}`,
								selected ? "is-selected" : "",
								hovered ? "is-hovered" : "",
								dim ? "is-dim" : "",
								run.criticalPath.includes(node.stepName) ? "is-critical" : ""
							].filter(Boolean).join(" "),
							transform: `translate(${node.x} ${node.y})`,
							"data-testid": `test-run-node-${node.stepName}`,
							role: "button",
							tabIndex: 0,
							"aria-label": `${step.displayName}: ${step.status}`,
							onClick: (event) => {
								event.stopPropagation();
								onSelect(selected ? void 0 : node.stepName);
							},
							onMouseEnter: () => onHover(node.stepName),
							onMouseLeave: () => onHover(void 0),
							onKeyDown: (event) => {
								if (event.key === "Enter" || event.key === " ") {
									event.preventDefault();
									onSelect(node.stepName);
								}
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("rect", {
									width: node.width,
									height: node.height,
									rx: 5
								}),
								/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("circle", {
									cx: 10,
									cy: node.height / 2,
									r: 3.5,
									className: "blong-test-run__node-dot"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("text", {
									x: 20,
									y: node.height / 2 + 3.5,
									className: "blong-test-run__node-label",
									children: node.label.length > maxChars ? `${node.label.slice(0, maxChars - 1)}…` : node.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("title", { children: `${node.stepName} · ${step.status}${step.dependencies.length ? ` · after ${step.dependencies.join(", ")}` : ""}` })
							]
						}, node.stepName);
					})
				})]
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
				className: "blong-test-run__graph-empty",
				children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Text, { children: split.loose.length ? "No linked steps" : "No steps to graph" })
			}), split.loose.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
				className: "blong-test-run__loose",
				role: "list",
				"aria-label": "Steps outside the dependency graph",
				children: split.loose.map((component) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", {
					className: "blong-test-run__loose-group",
					role: "listitem",
					children: component.steps.map((name, index) => {
						const step = run.steps[name];
						const selected = selectedKey === name;
						return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_react$4.Fragment, { children: [index > 0 && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("i", { className: "pi pi-arrow-right blong-test-run__loose-arrow" }), /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)("button", {
							type: "button",
							className: [
								"blong-test-run__graph-node",
								`blong-test-run__graph-node--${step.status}`,
								selected ? "is-selected" : ""
							].filter(Boolean).join(" "),
							title: `${name} · ${step.status}`,
							onClick: () => onSelect(selected ? void 0 : name),
							onMouseEnter: () => onHover(name),
							onMouseLeave: () => onHover(void 0),
							children: [/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", { className: "blong-test-run__graph-node-dot" }), /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", {
								className: "blong-test-run__graph-node-label",
								children: step.displayName
							})]
						})] }, name);
					})
				}, component.steps.join(">")))
			})]
		})
	});
}
var import_react$4, import_jsx_runtime$6, clamp;
function init_TestRunGraph() {
	return (init_TestRunGraph = __esmMin((() => {
		import_react$4 = require_react();
		init_Text();
		init_testRunLayout();
		init_testRunModel();
		import_jsx_runtime$6 = require_jsx_runtime();
		clamp = (value, min, max) => Math.min(max, Math.max(min, value));
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/TestRunStatusBar.tsx
function TestRunStatusBar({ run, now, detailsOpen, onToggleDetails, controls }) {
	const end = run.endedAt ?? now ?? run.startedAt;
	const elapsed = run.status === "pending" ? 0 : Math.max(0, end - run.startedAt);
	const passed = Math.max(0, run.assertions.total - run.assertions.threw);
	const progress = run.counts.total ? Math.round(run.counts.completed / run.counts.total * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
		className: "blong-test-run__status-bar p-card p-component",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
				className: "blong-test-run__identity",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
					className: "blong-test-run__run-name",
					children: run.name
				}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
					className: "blong-test-run__method",
					children: run.method
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("span", {
				className: `blong-test-run__state blong-test-run__state--${run.status}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("i", { className: STATUS_ICON$1[run.status] }), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Text, { children: STATUS_LABEL[run.status] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
				className: "blong-test-run__elapsed",
				children: formatDuration(elapsed)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
				className: "blong-test-run__progress",
				role: "progressbar",
				"aria-valuemin": 0,
				"aria-valuemax": run.counts.total,
				"aria-valuenow": run.counts.completed,
				"aria-label": "Completed steps",
				children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
					className: "blong-test-run__progress-fill",
					style: { width: `${progress}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("span", {
				className: "blong-test-run__step-count",
				"aria-live": "polite",
				children: [
					run.counts.completed,
					"/",
					run.counts.total,
					run.counts.failed > 0 && /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("span", {
						className: "blong-test-run__failed-count",
						children: [
							" ",
							run.counts.failed,
							" failed"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("span", {
				className: "blong-test-run__assertions-summary",
				"aria-live": "polite",
				title: `${passed} passed, ${run.assertions.threw} threw`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("span", {
					className: "blong-test-run__passed",
					children: ["✓ ", passed]
				}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("span", {
					className: run.assertions.threw ? "blong-test-run__threw" : "blong-test-run__threw is-zero",
					children: ["✗ ", run.assertions.threw]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("span", {
				className: "blong-test-run__concurrency",
				title: "Maximum parallel steps",
				children: ["×", run.concurrency]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("div", {
				className: "blong-test-run__controls",
				children: [controls, /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Button, {
					type: "button",
					text: true,
					size: "small",
					icon: detailsOpen ? "pi pi-chevron-right" : "pi pi-list",
					label: detailsOpen ? "Hide details" : "Details",
					"aria-pressed": detailsOpen,
					onClick: onToggleDetails
				})]
			})
		]
	});
}
var import_jsx_runtime$5, STATUS_ICON$1, STATUS_LABEL;
function init_TestRunStatusBar() {
	return (init_TestRunStatusBar = __esmMin((() => {
		init_primereact();
		init_Text();
		init_testRunModel();
		import_jsx_runtime$5 = require_jsx_runtime();
		STATUS_ICON$1 = {
			pending: "pi pi-circle-fill",
			running: "pi pi-spin pi-spinner",
			completed: "pi pi-check",
			failed: "pi pi-times"
		};
		STATUS_LABEL = {
			pending: "pending",
			running: "running",
			completed: "completed",
			failed: "failed"
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/TestRunBars.tsx
function TestRunRuler({ layout }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
		className: "blong-test-run__grid blong-test-run__ruler",
		"aria-hidden": "true",
		children: [
			EMPTY_CELL,
			EMPTY_CELL,
			EMPTY_CELL,
			/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
				className: "blong-test-run__track",
				children: layout.ticks.map((tick) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
					className: "blong-test-run__tick",
					style: { left: `${timePct(tick.at, layout.t0, layout.t1)}%` },
					children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
						className: "blong-test-run__tick-label",
						children: tick.label
					})
				}, tick.at))
			})
		]
	});
}
function TestRunBar({ row, layout, now, critical }) {
	const queueMs = row.span && row.kind === "step" ? row.span.queueEnd - row.span.start : 0;
	const tooltip = [
		row.label,
		formatDuration(row.duration),
		queueMs > 0 ? `queued ${formatDuration(queueMs)}` : void 0,
		row.assertions ? `assertions ${assertionLabel(row.assertions)}` : void 0
	].filter(Boolean).join(" · ");
	if (!row.span) return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
		className: "blong-test-run__track",
		title: tooltip,
		children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", { className: "blong-test-run__bar-empty" })
	});
	const { left, width, queueWidth } = barPct(row.span, layout.t0, layout.t1);
	const classes = [
		"blong-test-run__bar",
		`blong-test-run__bar--${row.status}`,
		row.kind === "group" ? "blong-test-run__bar--group" : "",
		critical ? "blong-test-run__bar--critical" : ""
	].filter(Boolean).join(" ");
	const nowMarker = now === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
		className: "blong-test-run__now",
		style: { left: `${nowPct(now, layout.t0, layout.t1)}%` }
	});
	const sr = /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("span", {
		className: "blong-test-run__sr",
		children: ["duration ", formatDuration(row.duration)]
	});
	if (row.kind === "group") return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
		className: "blong-test-run__track",
		title: tooltip,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
				className: classes,
				style: {
					left: `${left}%`,
					width: `${Math.max(width, .6)}%`
				}
			}),
			nowMarker,
			sr
		]
	});
	const executionLeft = left + queueWidth;
	const executionWidth = Math.max(0, width - queueWidth);
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
		className: "blong-test-run__track",
		title: tooltip,
		"data-step-name": row.stepName,
		children: [
			queueMs > 0 && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
				className: "blong-test-run__queue-line",
				style: {
					left: `${left}%`,
					width: `${queueWidth}%`
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
				className: classes,
				style: {
					left: `${executionLeft}%`,
					width: `${Math.max(executionWidth, 1.2)}%`
				},
				children: row.status === "failed" && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", { className: "blong-test-run__bar-fail" })
			}),
			nowMarker,
			sr
		]
	});
}
var import_jsx_runtime$4, EMPTY_CELL;
function init_TestRunBars() {
	return (init_TestRunBars = __esmMin((() => {
		init_testRunLayout();
		init_testRunModel();
		import_jsx_runtime$4 = require_jsx_runtime();
		EMPTY_CELL = /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", { className: "blong-test-run__cell" });
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/TestRunTreeTable.tsx
function TestRunTreeTable({ run, layout, selectedKey, hoveredKey, filter, search, order, collapsed, now, onSelect, onHover, onToggleGroup, onFilterChange, onSearchChange, onOrderChange, onOpenDetails }) {
	const visible = layout.visibleSteps;
	const move = (delta) => {
		if (!visible.length) return;
		const index = selectedKey ? visible.indexOf(selectedKey) : -1;
		const next = Math.min(visible.length - 1, Math.max(0, index + delta));
		onSelect(visible[next]);
	};
	const onKeyDown = (event) => {
		if (event.key === "ArrowDown") {
			event.preventDefault();
			move(selectedKey ? 1 : 0);
		} else if (event.key === "ArrowUp") {
			event.preventDefault();
			move(-1);
		} else if (event.key === "Home") {
			event.preventDefault();
			onSelect(visible[0]);
		} else if (event.key === "End") {
			event.preventDefault();
			onSelect(visible[visible.length - 1]);
		} else if (event.key === "Enter" && selectedKey) {
			event.preventDefault();
			onOpenDetails?.(selectedKey);
		} else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
			const row = layout.rows.find((item) => item.stepName === selectedKey);
			if (!row) return;
			const parent = layout.rows.filter((item) => item.kind === "group" && item.key === `group:${row.groupPath.join("/")}`).at(-1);
			if (!parent) return;
			const isCollapsed = collapsed.has(parent.key);
			if (event.key === "ArrowLeft" && !isCollapsed) {
				event.preventDefault();
				onToggleGroup(parent.key);
			} else if (event.key === "ArrowRight" && isCollapsed) {
				event.preventDefault();
				onToggleGroup(parent.key);
			}
		}
	};
	const groupCounts = (0, import_react$3.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const group of run.groups) map.set(`group:${group.path.join("/")}`, {
			total: group.totalSteps,
			completed: group.completedSteps,
			failed: group.failedSteps
		});
		return map;
	}, [run.groups]);
	const renderRow = (row) => {
		if (row.kind === "group") {
			const counts = groupCounts.get(row.key);
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
				id: `test-run-${row.key}`,
				role: "row",
				"aria-level": row.depth + 1,
				"aria-expanded": !row.collapsed,
				className: "blong-test-run__grid blong-test-run__row blong-test-run__row--group",
				onMouseEnter: () => onHover(void 0),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
						role: "gridcell",
						className: "blong-test-run__name",
						style: { paddingLeft: `${6 + row.depth * 14}px` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("button", {
								type: "button",
								className: "blong-test-run__chevron",
								"aria-label": row.collapsed ? "Expand group" : "Collapse group",
								onClick: () => onToggleGroup(row.key),
								children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("i", { className: `pi ${row.collapsed ? "pi-chevron-right" : "pi-chevron-down"}` })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("i", { className: `blong-test-run__status ${STATUS_ICON[row.status]}` }),
							/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
								className: "blong-test-run__label",
								children: row.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
								className: "blong-test-run__count",
								children: counts ? `${counts.completed}/${counts.total}` : ""
							}),
							row.hiddenCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
								className: "blong-test-run__muted",
								children: row.collapsed ? `${row.hiddenCount} hidden` : `${row.hiddenCount} filtered`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
						role: "gridcell",
						className: "blong-test-run__assertions",
						children: row.assertions && row.assertions.total > 0 ? assertionLabel(row.assertions) : ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
						role: "gridcell",
						className: "blong-test-run__duration",
						children: formatDuration(row.duration)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
						role: "gridcell",
						className: "blong-test-run__bar-cell",
						children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(TestRunBar, {
							row,
							layout,
							now
						})
					})
				]
			}, row.key);
		}
		const selected = row.stepName === selectedKey;
		const hovered = row.stepName === hoveredKey;
		return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
			id: `test-run-step-${row.stepName}`,
			role: "row",
			"aria-level": row.depth + 1,
			"aria-selected": selected,
			"data-testid": `test-run-step-${row.stepName}`,
			className: [
				"blong-test-run__grid",
				"blong-test-run__row",
				"blong-test-run__row--step",
				`blong-test-run__row--${row.status}`,
				selected ? "is-selected" : "",
				hovered ? "is-hovered" : ""
			].filter(Boolean).join(" "),
			onClick: () => onSelect(selected ? void 0 : row.stepName),
			onDoubleClick: () => row.stepName && onOpenDetails?.(row.stepName),
			onMouseEnter: () => onHover(row.stepName),
			onMouseLeave: () => onHover(void 0),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
					role: "gridcell",
					className: "blong-test-run__name",
					style: { paddingLeft: `${10 + row.depth * 14}px` },
					title: row.stepName ? `${row.stepName}${run.steps[row.stepName]?.dependencies.length ? ` · depends on ${run.steps[row.stepName].dependencies.join(", ")}` : ""}` : row.label,
					children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("i", { className: `blong-test-run__status ${STATUS_ICON[row.status]}` }), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
						className: "blong-test-run__label",
						children: row.label
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
					role: "gridcell",
					className: ["blong-test-run__assertions", assertionFailed(row.assertions) ? "is-failed" : ""].filter(Boolean).join(" "),
					children: row.assertions && row.assertions.total > 0 ? assertionLabel(row.assertions) : ""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
					role: "gridcell",
					className: "blong-test-run__duration",
					children: formatDuration(row.duration)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
					role: "gridcell",
					className: "blong-test-run__bar-cell",
					children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(TestRunBar, {
						row,
						layout,
						now,
						critical: !!row.stepName && run.criticalPath.includes(row.stepName)
					})
				})
			]
		}, row.key);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
		className: "blong-test-run__tree",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
				className: "blong-test-run__tree-toolbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
						className: "blong-test-run__filters",
						role: "group",
						"aria-label": "Filter steps",
						children: FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("button", {
							type: "button",
							className: `blong-test-run__chip${filter === item.value ? " is-active" : ""}`,
							"aria-pressed": filter === item.value,
							onClick: () => onFilterChange(item.value),
							children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Text, { children: item.label })
						}, item.value))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("span", {
						className: "blong-test-run__search",
						children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("i", { className: "pi pi-search" }), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(InputText, {
							value: search,
							"aria-label": "Search steps",
							placeholder: "Search",
							onChange: (event) => onSearchChange(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("button", {
						type: "button",
						className: "blong-test-run__chip",
						title: order === "tree" ? "Order by start time" : "Restore the tree order",
						onClick: () => onOrderChange(order === "tree" ? "start" : "tree"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("i", { className: `pi ${order === "tree" ? "pi-sitemap" : "pi-list"}` }), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Text, { children: order === "tree" ? "Tree" : "By start" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(TestRunRuler, { layout }),
			/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
				className: "blong-test-run__rows",
				role: "treegrid",
				"aria-label": "Test steps and their timing",
				"aria-activedescendant": selectedKey ? `test-run-step-${selectedKey}` : void 0,
				tabIndex: 0,
				onKeyDown,
				onMouseLeave: () => onHover(void 0),
				children: [layout.rows.map(renderRow), !layout.rows.length && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
					className: "blong-test-run__empty",
					children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Text, { children: "No steps match the filter" })
				})]
			})
		]
	});
}
var import_react$3, import_jsx_runtime$3, FILTERS, STATUS_ICON;
function init_TestRunTreeTable() {
	return (init_TestRunTreeTable = __esmMin((() => {
		import_react$3 = require_react();
		init_primereact();
		init_Text();
		init_TestRunBars();
		init_testRunModel();
		import_jsx_runtime$3 = require_jsx_runtime();
		FILTERS = [
			{
				value: "all",
				label: "All"
			},
			{
				value: "running",
				label: "Running"
			},
			{
				value: "failed",
				label: "Failed"
			},
			{
				value: "slow",
				label: "Slow"
			}
		];
		STATUS_ICON = {
			pending: "pi pi-circle-fill",
			running: "pi pi-spin pi-spinner",
			completed: "pi pi-check",
			failed: "pi pi-times"
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/TestRun.tsx
function TestRun({ run, now: fixedNow, selectedKey: controlledSelected, hoveredKey: controlledHovered, detailsOpen: controlledDetails, defaultSelectedKey, defaultDetailsOpen = false, defaultCollapsed = [], defaultOrder = "tree", defaultFilter = "all", onSelect, onHover, onToggleDetails, controls, sourceLink, className }) {
	const [internalSelected, setInternalSelected] = (0, import_react$2.useState)(defaultSelectedKey);
	const [internalDetails, setInternalDetails] = (0, import_react$2.useState)(defaultDetailsOpen);
	const [hovered, setHovered] = (0, import_react$2.useState)(controlledHovered);
	const [collapsed, setCollapsed] = (0, import_react$2.useState)(() => new Set(defaultCollapsed));
	const [order, setOrder] = (0, import_react$2.useState)(defaultOrder);
	const [filter, setFilter] = (0, import_react$2.useState)(defaultFilter);
	const [search, setSearch] = (0, import_react$2.useState)("");
	const [follow, setFollow] = (0, import_react$2.useState)(true);
	const [clock, setClock] = (0, import_react$2.useState)(() => Date.now());
	const selectedKey = controlledSelected !== void 0 ? controlledSelected : internalSelected;
	const detailsOpen = controlledDetails !== void 0 ? controlledDetails : internalDetails;
	const hoveredKey = controlledHovered !== void 0 ? controlledHovered : hovered;
	const isLive = run.status === "running";
	(0, import_react$2.useEffect)(() => {
		if (!isLive || fixedNow !== void 0) return;
		const id = window.setInterval(() => setClock(Date.now()), 250);
		return () => window.clearInterval(id);
	}, [isLive, fixedNow]);
	const now = fixedNow ?? (isLive ? clock : void 0);
	const matches = (0, import_react$2.useMemo)(() => {
		const query = search.trim().toLowerCase();
		return (step) => {
			if (filter === "running" && step.status !== "running") return false;
			if (filter === "failed" && step.status !== "failed") return false;
			if (filter === "slow" && (step.duration ?? 0) < 250) return false;
			if (query && !`${step.stepName} ${step.displayName}`.toLowerCase().includes(query)) return false;
			return true;
		};
	}, [filter, search]);
	const layout = (0, import_react$2.useMemo)(() => buildTreeLayout(run, {
		collapsed,
		order,
		now,
		filter: matches
	}), [
		run,
		collapsed,
		order,
		now,
		matches
	]);
	const select = (stepName) => {
		if (controlledSelected === void 0) setInternalSelected(stepName);
		onSelect?.(stepName);
	};
	const setDetails = (open) => {
		if (controlledDetails === void 0) setInternalDetails(open);
		onToggleDetails?.(open);
	};
	const toggleDetails = () => setDetails(!detailsOpen);
	const setHover = (stepName) => {
		if (controlledHovered === void 0) setHovered(stepName);
		onHover?.(stepName);
	};
	const toggleGroup = (key) => {
		setCollapsed((current) => {
			const next = new Set(current);
			if (next.has(key)) next.delete(key);
			else next.add(key);
			return next;
		});
	};
	const runningStep = run.order.find((name) => run.steps[name]?.status === "running");
	(0, import_react$2.useEffect)(() => {
		if (!follow || !runningStep || order !== "tree") return;
		const element = document.getElementById(`test-run-step-${runningStep}`);
		if (!element?.scrollIntoView) return;
		element.scrollIntoView({ block: "nearest" });
	}, [
		follow,
		runningStep,
		order,
		layout.rows.length
	]);
	const onKeyDown = (event) => {
		const target = event.target;
		if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;
		if (event.key === "l") {
			event.preventDefault();
			toggleDetails();
		} else if (event.key === "f") {
			event.preventDefault();
			setFollow((value) => !value);
		} else if (event.key === "Escape") {
			event.preventDefault();
			select(void 0);
		}
	};
	const renderBody = () => /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(Splitter, {
		layout: "horizontal",
		gutterSize: 6,
		className: "blong-test-run__body",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SplitterPanel, {
			size: 66,
			minSize: 30,
			className: "blong-test-run__main",
			children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Deck, {
				id: "test-run-main",
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Card, {
					title: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Text, { children: "Steps" }),
					className: "blong-test-run__card",
					children: run.order.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
						className: "blong-test-run__empty",
						children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Text, { children: "No steps in this run" })
					}) : /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(TestRunTreeTable, {
						run,
						layout,
						selectedKey,
						hoveredKey,
						filter,
						search,
						order,
						collapsed,
						now: isLive ? now : void 0,
						onSelect: select,
						onHover: setHover,
						onToggleGroup: toggleGroup,
						onFilterChange: setFilter,
						onSearchChange: setSearch,
						onOrderChange: setOrder,
						onOpenDetails: (stepName) => {
							select(stepName);
							setDetails(true);
						}
					})
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SplitterPanel, {
			size: 34,
			minSize: 22,
			className: "blong-test-run__side",
			children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Deck, {
				id: "test-run-side",
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Card, {
					title: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Text, { children: "Dependencies" }),
					className: "blong-test-run__card",
					children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(TestRunGraph, {
						run,
						selectedKey,
						hoveredKey,
						onSelect: select,
						onHover: setHover
					})
				})
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
		className: ["blong-test-run", className ?? ""].filter(Boolean).join(" "),
		onKeyDown,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(TestRunStatusBar, {
				run,
				now,
				detailsOpen,
				onToggleDetails: toggleDetails,
				controls
			}),
			run.error && /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
				className: "blong-test-run__error-banner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("i", { className: "pi pi-exclamation-triangle" }), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", { children: run.error.message })]
			}),
			detailsOpen ? /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(Splitter, {
				layout: "vertical",
				gutterSize: 6,
				className: "blong-test-run__split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SplitterPanel, {
					size: 76,
					minSize: 30,
					className: "blong-test-run__body-panel",
					children: renderBody()
				}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SplitterPanel, {
					size: 24,
					minSize: 15,
					className: "blong-test-run__details-panel",
					children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(TestRunDetails, {
						run,
						stepName: selectedKey,
						open: true,
						sourceLink,
						onClose: () => setDetails(false)
					})
				})]
			}) : renderBody()
		]
	});
}
var import_react$2, import_jsx_runtime$2;
function init_TestRun$1() {
	return (init_TestRun$1 = __esmMin((() => {
		import_react$2 = require_react();
		init_Card();
		init_Deck();
		init_Text();
		init_primereact();
		init_TestRunDetails();
		init_TestRunGraph();
		init_testRunLayout();
		init_TestRunStatusBar();
		init_TestRunTreeTable();
		import_jsx_runtime$2 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/testRunProjection.ts
/**
* Make a step result JSON-safe and bounded.
*
* A result can be circular, hold functions or be megabytes of rows; the console only needs a
* preview. A JSON round-trip drops what cannot cross the wire, and a payload over the limit is
* replaced by a marker so the browser never receives the whole result.
*/
function sanitizeResult(value) {
	if (value === void 0) return {};
	try {
		const json = JSON.stringify(value);
		if (json === void 0) return {};
		if (json.length > RESULT_LIMIT) return {
			result: {
				truncated: true,
				bytes: json.length
			},
			resultTruncated: true
		};
		return { result: JSON.parse(json) };
	} catch {
		return {
			result: { truncated: true },
			resultTruncated: true
		};
	}
}
var RESULT_LIMIT;
function init_testRunProjection() {
	return (init_testRunProjection = __esmMin((() => {
		RESULT_LIMIT = 32e3;
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/browserTestRunSource.ts
function pointer(source) {
	return source ? {
		file: source.file,
		line: source.line,
		column: source.column
	} : void 0;
}
function assertionModel(assertion) {
	return {
		message: assertion.message,
		passed: assertion.passed,
		timestamp: assertion.timestamp,
		source: pointer(assertion.source)
	};
}
function edgeModel(edge, run) {
	const from = run.steps[edge.from]?.status;
	const to = run.steps[edge.to]?.status;
	const status = from === "completed" && to === "completed" ? "done" : from === "running" || to === "running" ? "active" : "pending";
	return {
		id: `${edge.from}->${edge.to}:${edge.property}`,
		from: edge.from,
		to: edge.to,
		property: edge.property,
		status
	};
}
function countsOf(run) {
	const counts = {
		total: 0,
		pending: 0,
		running: 0,
		completed: 0,
		failed: 0
	};
	for (const step of Object.values(run.steps)) {
		counts.total += 1;
		counts[step.status] += 1;
	}
	return counts;
}
function stepModels(steps, groupPath, order, map) {
	for (const item of steps) {
		if (Array.isArray(item)) {
			if (item.every((entry) => typeof entry === "string")) continue;
			const group = item;
			stepModels(group, [...groupPath, group.name ?? `group-${groupPath.length}`], order, map);
			continue;
		}
		if (typeof item !== "function") continue;
		const stepName = item.name || "anonymous";
		if (map[stepName]) continue;
		order.push(stepName);
		map[stepName] = {
			stepName,
			displayName: stepName,
			groupPath,
			status: "pending",
			dependencies: [],
			dependents: [],
			assertions: {
				total: 0,
				threw: 0
			}
		};
	}
}
/** The pending model a run starts from, with declaration order preserved. */
function pendingBrowserRun(options) {
	const order = [];
	const steps = {};
	stepModels(options.steps, [], order, steps);
	return deriveTestRun({
		runId: `run-browser-${Date.now()}-${runCounter++}`,
		name: options.name,
		method: options.method,
		host: "browser",
		status: "pending",
		startedAt: Date.now(),
		concurrency: options.concurrency ?? 10,
		order,
		steps,
		edges: [],
		groups: [],
		counts: {
			total: 0,
			pending: 0,
			running: 0,
			completed: 0,
			failed: 0
		},
		assertions: {
			total: 0,
			threw: 0
		},
		criticalPath: [],
		logs: [],
		source: options.source
	});
}
/**
* Project the executor's current progress into the console's model.
*
* The graph is merged with the edges the model already received from `step:dependency`: the
* executor builds its final graph at the end of a successful run, and a failing run never gets
* there, while the live edges are already known.
*/
function projectBrowserRun(base, progress, graph, latency) {
	const steps = {};
	for (const [name, step] of progress.steps) {
		const firstAssertionSource = step.assertionLog?.find((assertion) => assertion.source)?.source;
		const projectedResult = sanitizeResult(step.result);
		steps[name] = {
			stepName: step.stepName,
			displayName: step.displayName,
			groupPath: step.groupPath,
			status: wireStatus(step.status),
			queuedAt: step.startTime === void 0 ? void 0 : step.startTime - (step.queueTime ?? 0),
			startedAt: step.startTime,
			endedAt: step.endTime,
			queueTime: step.queueTime,
			waitTime: step.waitTime,
			executionTime: step.executionTime,
			duration: step.duration,
			dependencies: [...step.dependencies],
			dependents: [...step.dependents],
			assertions: step.assertions ?? {
				total: 0,
				threw: 0
			},
			assertionLog: step.assertionLog?.map(assertionModel),
			progress: step.progress,
			...projectedResult,
			error: step.error ? {
				message: step.error.message,
				stack: step.error.stack,
				context: step.error.context
			} : void 0,
			sourceLocation: pointer(step.sourceLocation ?? firstAssertionSource)
		};
	}
	const edgeList = [...base.edges];
	for (const edge of graph.edges) {
		const model = edgeModel(edge, base);
		if (!edgeList.some((item) => item.id === model.id)) edgeList.push(model);
	}
	const run = deriveTestRun({
		...base,
		status: progress.status === "failed" ? "failed" : progress.status === "completed" ? "completed" : progress.status === "running" ? "running" : "pending",
		startedAt: progress.startTime || base.startedAt,
		endedAt: progress.endTime,
		order: base.order.filter((name) => steps[name]).concat(Object.keys(steps).filter((name) => !base.order.includes(name))),
		steps,
		edges: edgeList,
		counts: {
			total: 0,
			pending: 0,
			running: 0,
			completed: 0,
			failed: 0
		},
		assertions: progress.assertions ?? {
			total: 0,
			threw: 0
		},
		criticalPath: latency.criticalPath
	});
	return {
		...run,
		counts: countsOf(run)
	};
}
var runCounter, wireStatus, BrowserTestRunSource;
function init_browserTestRunSource() {
	return (init_browserTestRunSource = __esmMin((() => {
		init_browser();
		init_testRunProjection();
		init_testRunModel();
		runCounter = 0;
		wireStatus = (status) => status;
		BrowserTestRunSource = class {
			options;
			initial;
			executor;
			model;
			listeners = /* @__PURE__ */ new Set();
			started = false;
			finished = false;
			constructor(options) {
				this.options = options;
				this.initial = pendingBrowserRun(options);
				this.model = this.initial;
				this.executor = new TestExecutor({
					concurrency: options.concurrency,
					assert: options.assert
				});
			}
			snapshot() {
				return this.model;
			}
			subscribe(listener) {
				this.listeners.add(listener);
				return () => this.listeners.delete(listener);
			}
			emit(event) {
				this.model = reduceTestRunEvent(this.model, event);
				for (const listener of this.listeners) listener(event);
			}
			stepEvent(kind, name) {
				if (!this.executor.getProgress().steps.get(name)) return;
				const projected = projectBrowserRun(this.model, this.executor.getProgress(), this.executor.getDependencyGraph(), this.executor.getLatencyReport());
				const model = projected.steps[name];
				if (!model) return;
				const edges = projected.edges.filter((edge) => edge.from === name);
				const event = kind === "step:error" ? {
					kind,
					cursor: 0,
					step: model,
					counts: projected.counts,
					assertions: projected.assertions
				} : kind === "step:end" ? {
					kind,
					cursor: 0,
					step: model,
					counts: projected.counts,
					assertions: projected.assertions
				} : {
					kind,
					cursor: 0,
					step: model,
					counts: projected.counts,
					assertions: projected.assertions,
					edges
				};
				this.model = projected;
				for (const listener of this.listeners) listener(event);
			}
			finish(progress) {
				if (this.finished) return;
				this.finished = true;
				const run = projectBrowserRun(this.model, progress, this.executor.getDependencyGraph(), this.executor.getLatencyReport());
				this.model = run;
				const event = {
					kind: "run:end",
					cursor: 0,
					run
				};
				for (const listener of this.listeners) listener(event);
			}
			async start() {
				if (this.started) return;
				this.started = true;
				this.model = deriveTestRun({
					...this.initial,
					status: "running",
					startedAt: Date.now()
				});
				this.emit({
					kind: "run:start",
					cursor: 0,
					run: this.model
				});
				this.executor.on("step:start", (name) => this.stepEvent("step:start", name));
				this.executor.on("step:end", (name) => this.stepEvent("step:end", name));
				this.executor.on("step:error", (name) => this.stepEvent("step:error", name));
				this.executor.on("step:dependency", (edge) => {
					const model = edgeModel(edge, this.model);
					this.model = {
						...this.model,
						edges: this.model.edges.some((item) => item.id === model.id) ? this.model.edges : [...this.model.edges, model]
					};
					const event = {
						kind: "step:dependency",
						cursor: 0,
						edges: [model]
					};
					for (const listener of this.listeners) listener(event);
				});
				this.executor.on("test:end", (progress) => this.finish(progress));
				try {
					await this.executor.execute(this.options.steps, this.options.$meta ?? {});
				} catch {}
				this.finish(this.executor.getProgress());
			}
			stop() {
				this.executor.removeAllListeners();
				this.listeners.clear();
				return Promise.resolve();
			}
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/pollingTestRunSource.ts
var PollingTestRunSource;
function init_pollingTestRunSource() {
	return (init_pollingTestRunSource = __esmMin((() => {
		init_testRunModel();
		PollingTestRunSource = class {
			transport;
			method;
			$meta;
			pollIntervalMs;
			listeners = /* @__PURE__ */ new Set();
			model;
			runId;
			/** -1 so a server whose first event cursor is 0 is not skipped. */
			cursor = -1;
			started = false;
			stopped = false;
			wake;
			constructor({ transport, method, $meta = {}, pollIntervalMs = 250 }) {
				this.transport = transport;
				this.method = method;
				this.$meta = $meta;
				this.pollIntervalMs = pollIntervalMs;
			}
			snapshot() {
				if (!this.model) throw new Error("the run has not started");
				return this.model;
			}
			subscribe(listener) {
				this.listeners.add(listener);
				return () => this.listeners.delete(listener);
			}
			emit(event) {
				if (this.model) this.model = reduceTestRunEvent(this.model, event);
				for (const listener of this.listeners) listener(event);
			}
			wait() {
				return new Promise((resolve) => {
					const id = setTimeout(() => {
						this.wake = void 0;
						resolve();
					}, this.pollIntervalMs);
					this.wake = () => {
						clearTimeout(id);
						this.wake = void 0;
						resolve();
					};
				});
			}
			async poll() {
				while (!this.stopped && this.runId) {
					const page = await this.transport.events(this.runId, this.cursor);
					for (const entry of page.events) {
						if (entry.cursor <= this.cursor) continue;
						this.cursor = entry.cursor;
						this.emit(entry.event);
					}
					if (page.done) return;
					await this.wait();
				}
			}
			async start() {
				if (this.started) return;
				this.started = true;
				try {
					const { runId, run } = await this.transport.start(this.method, this.$meta);
					this.runId = runId;
					this.model = run;
					this.emit({
						kind: "run:start",
						cursor: 0,
						run
					});
					await this.poll();
				} catch (reason) {
					if (this.model) {
						this.model = {
							...this.model,
							status: "failed",
							error: { message: reason?.message ?? String(reason) }
						};
						this.emit({
							kind: "run:end",
							cursor: this.cursor,
							run: this.model
						});
					}
				}
			}
			async cancel() {
				this.stopped = true;
				this.wake?.();
				if (this.runId) await this.transport.cancel(this.runId);
			}
			stop() {
				this.stopped = true;
				this.wake?.();
				this.listeners.clear();
				return Promise.resolve();
			}
		};
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/TestRun/TestRunPage.tsx
/** JSON for a capture, falling back to a marker rather than throwing on a circular result. */
function captureJson(value) {
	try {
		return JSON.stringify(value);
	} catch {
		return JSON.stringify({ truncated: true });
	}
}
function TestRunPage({ catalog, load, transport, $meta, sourceLink, title = "Test run", defaultDetailsOpen, capture = false, className }) {
	const [method, setMethod] = (0, import_react$1.useState)(() => catalog[0] ? entryKey(catalog[0]) : void 0);
	const [run, setRun] = (0, import_react$1.useState)();
	const [busy, setBusy] = (0, import_react$1.useState)(false);
	const [error, setError] = (0, import_react$1.useState)();
	const sourceRef = (0, import_react$1.useRef)(void 0);
	const unsubscribeRef = (0, import_react$1.useRef)(void 0);
	const eventsRef = (0, import_react$1.useRef)([]);
	const options = (0, import_react$1.useMemo)(() => catalog.map((entry) => ({
		label: entry.name,
		value: entryKey(entry)
	})), [catalog]);
	const selectedMethod = method && catalog.some((entry) => entryKey(entry) === method) ? method : catalog[0] ? entryKey(catalog[0]) : void 0;
	(0, import_react$1.useEffect)(() => () => {
		unsubscribeRef.current?.();
		const source = sourceRef.current;
		if (source instanceof PollingTestRunSource) source.cancel();
		else source?.stop();
	}, []);
	const stop = () => {
		unsubscribeRef.current?.();
		unsubscribeRef.current = void 0;
		const source = sourceRef.current;
		if (source instanceof PollingTestRunSource) source.cancel();
		else source?.stop();
		sourceRef.current = void 0;
		setBusy(false);
	};
	const start = async () => {
		const entry = catalog.find((item) => entryKey(item) === selectedMethod);
		if (!entry) {
			setError("Select a scenario from the catalog");
			return;
		}
		stop();
		setError(void 0);
		setBusy(true);
		try {
			let source;
			let initialRun;
			if (entry.host === "server") {
				if (!transport) throw new Error("No server transport is configured");
				source = new PollingTestRunSource({
					transport,
					method: entry.method,
					$meta
				});
				initialRun = {
					...pendingBrowserRun({
						name: entry.name,
						method: entry.method,
						steps: [],
						$meta
					}),
					host: "server"
				};
			} else {
				if (!load) throw new Error("No browser loader is configured");
				const steps = await load(entry.method);
				if (!Array.isArray(steps)) throw new Error(`"${entry.method}" did not return a step array`);
				source = new BrowserTestRunSource({
					name: entry.name,
					method: entry.method,
					steps,
					$meta
				});
			}
			sourceRef.current = source;
			eventsRef.current = [];
			setRun(initialRun ?? source.snapshot());
			unsubscribeRef.current = source.subscribe((event) => {
				eventsRef.current.push(event);
				setRun(source.snapshot());
			});
			source.start().finally(() => setBusy(false));
		} catch (reason) {
			setError(reason?.message ?? String(reason));
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		className: ["blong-test-run-page", className ?? ""].filter(Boolean).join(" "),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("header", {
				className: "blong-test-run-page__bar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
						className: "blong-test-run-page__title",
						children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Text, { children: title })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Dropdown, {
						value: selectedMethod,
						options,
						onChange: (event) => setMethod(event.value ?? void 0),
						placeholder: "Select a scenario",
						"aria-label": "Scenario",
						className: "blong-test-run-page__picker",
						disabled: busy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Button, {
						type: "button",
						size: "small",
						icon: "pi pi-play",
						label: run ? "Run again" : "Run",
						disabled: !selectedMethod || busy,
						onClick: () => void start()
					}),
					busy && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Button, {
						type: "button",
						size: "small",
						text: true,
						icon: "pi pi-stop",
						label: "Stop",
						onClick: stop
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
						className: "blong-test-run-page__error",
						role: "alert",
						children: error
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
				className: "blong-test-run-page__console",
				children: run ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(TestRun, {
					run,
					sourceLink,
					defaultDetailsOpen
				}) : /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
					className: "blong-test-run-page__empty",
					children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Text, { children: "Select a scenario and run it" })
				})
			}),
			capture && run && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("pre", {
				className: "blong-test-run-page__model",
				"data-testid": "test-run-model",
				hidden: true,
				children: captureJson(run)
			}),
			capture && run && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("pre", {
				className: "blong-test-run-page__model",
				"data-testid": "test-run-events",
				hidden: true,
				children: captureJson(eventsRef.current)
			})
		]
	});
}
var import_react$1, import_jsx_runtime$1, entryKey;
function init_TestRunPage$1() {
	return (init_TestRunPage$1 = __esmMin((() => {
		import_react$1 = require_react();
		init_primereact();
		init_Text();
		init_browserTestRunSource();
		init_pollingTestRunSource();
		init_TestRun$1();
		import_jsx_runtime$1 = require_jsx_runtime();
		entryKey = (entry) => `${entry.host ?? "browser"}:${entry.method}`;
	})))();
}
//#endregion
//#region src/pages/sportTestRunCatalog.ts
var sportTestRunCatalog;
function init_sportTestRunCatalog() {
	return (init_sportTestRunCatalog = __esmMin((() => {
		sportTestRunCatalog = [{
			method: "test.athlete.flow",
			name: "athlete flow browser"
		}, {
			method: "test.athlete",
			name: "athlete flow server",
			host: "server"
		}];
	})))();
}
//#endregion
//#region src/pages/sportTestRunPage.tsx
/**
* TestRunSportPage — the browser test console for the `sport` realm.
*
* The catalog is the guard; the loader resolves a catalog method to its browser
* test group's step array, invoking the group definition with the page's handler
* proxy so the group's login/access calls reach the gateway. The page ships only
* with the `test-ui` intent, and it refuses a method that is not in the catalog.
*
* The server entry calls the `test.run.*` methods through the UI backend: the UI
* handler proxy has no sender for the test namespace, while the backend adapter
* forwards to the gateway.
*/
function TestRunSportPage() {
	const { handler } = useBlong();
	const backend = handler;
	const transport = {
		start: (method, $meta) => backend["backend/test.run.start"]({
			method,
			name: `${method} server`
		}, $meta),
		events: (runId, cursor) => backend["backend/test.run.eventFind"]({
			runId,
			cursor
		}, {}),
		snapshot: (runId) => backend["backend/test.run.snapshotGet"]({ runId }, {}),
		cancel: async (runId) => {
			await backend["backend/test.run.cancel"]({ runId }, {});
		}
	};
	const load = async (method) => {
		const module = await testGroups[method]?.();
		if (!module) throw new Error(`no browser test group for ${method}`);
		const definition = module.default;
		const group = (name) => (steps) => Object.defineProperty(steps, "name", {
			value: name,
			enumerable: false
		});
		const invoke = definition({
			lib: { group },
			handler
		})[method.split(".").filter(Boolean).map((part, index) => index === 0 ? part : part[0].toUpperCase() + part.slice(1)).join("")];
		if (typeof invoke !== "function") throw new Error(`no test group method for ${method}`);
		const steps = invoke({ hasSession: true });
		if (!Array.isArray(steps)) throw new Error(`"${method}" did not return a step array`);
		return steps;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestRunPage, {
		title: "Test runs",
		catalog: sportTestRunCatalog,
		load,
		transport,
		defaultDetailsOpen: true,
		capture: true
	});
}
var import_jsx_runtime, testGroups;
function init_sportTestRunPage() {
	return (init_sportTestRunPage = __esmMin((() => {
		init_TestRunPage$1(), init_BlongContext();
		require_react();
		init_sportTestRunCatalog();
		import_jsx_runtime = require_jsx_runtime();
		init_preload_helper();
		testGroups = { "test.athlete.flow": () => __vitePreload(() => import("./testAthlete.flow-T9Ckg6xi.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url) };
		try {
			TestRunSportPage.displayName = "TestRunSportPage";
			TestRunSportPage.__docgenInfo = {
				"description": "TestRunSportPage — the browser test console for the `sport` realm.\n\nThe catalog is the guard; the loader resolves a catalog method to its browser\ntest group's step array, invoking the group definition with the page's handler\nproxy so the group's login/access calls reach the gateway. The page ships only\nwith the `test-ui` intent, and it refuses a method that is not in the catalog.\n\nThe server entry calls the `test.run.*` methods through the UI backend: the UI\nhandler proxy has no sender for the test namespace, while the backend adapter\nforwards to the gateway.",
				"displayName": "TestRunSportPage",
				"filePath": "/home/kalin/work/blong/blong/realm/blong-sport/src/pages/sportTestRunPage.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
init_sportTestRunPage();
export { TestRunSportPage };
