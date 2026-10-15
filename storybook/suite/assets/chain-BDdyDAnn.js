const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-BfCOoPG7.js","./rolldown-runtime-V4kyJ4NV.js","./preload-helper-C3TOwP4X.js","./react-DUVFSkmT.js","./jsx-runtime-C3rgXVcg.js","./appStore-8DTFQjf-.js","./inputtext.esm-BsWCZcbt.js","./react-dom--p2_7awc.js","./datatable.esm-DBe2lB30.js","./iframe-Dy8lWZD5.css"])))=>i.map(i=>d[i]);
import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Ct as PQueue, Rt as init_blong_lib, Vt as withProgress, bt as require___vite_browser_external, wt as init_dist } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-chain/progress.ts
/**
* Nest the entries an invocation announced into the tree a report draws.
*
* A branch becomes a group even when nothing was announced inside it: it was taken, and a
* report that dropped it would be saying the code did not go that way.
*/
function progressTree(entries) {
	const roots = [];
	/** The group a chain of branches stands for, created where the chain was first named. */
	const opened = /* @__PURE__ */ new Map();
	/**
	* The list a chain's children belong to, creating the group for any mark in it that no
	* entry has named yet — which is what a branch whose `run` threw leaves behind: the point
	* announced inside it still says which branch it was in, so the group is drawn from that.
	*/
	const childrenOf = (chain) => {
		let siblings = roots;
		const path = [];
		for (const mark of chain) {
			path.push(mark);
			const key = keyOf(path);
			let node = opened.get(key);
			if (node === void 0) {
				node = {
					name: labelOf(mark),
					kind: "region",
					children: []
				};
				opened.set(key, node);
				siblings.push(node);
			}
			siblings = node.children;
		}
		return siblings;
	};
	for (const entry of entries ?? []) if (entry.kind === "region") childrenOf([...entry.regions ?? [], entry]);
	else childrenOf(entry.regions ?? []).push({
		name: entry.name,
		kind: "point",
		data: entry.data,
		children: []
	});
	return roots;
}
var MAX_COMMENT_PROPERTIES, MAX_VALUE_CHARS, MAX_COMMENT_CHARS, renderValue, labelOf, commentLine, keyOf, reportProgress;
function init_progress() {
	return (init_progress = __esmMin((() => {
		MAX_COMMENT_PROPERTIES = 5;
		MAX_VALUE_CHARS = 40;
		MAX_COMMENT_CHARS = 120;
		renderValue = (value) => {
			if (typeof value === "string") return value.length <= MAX_VALUE_CHARS ? `'${value}'` : void 0;
			if (typeof value === "number" || typeof value === "boolean") return String(value);
			if (value === null) return "null";
			const json = JSON.stringify(value);
			return json !== void 0 && json.length <= MAX_VALUE_CHARS ? json : void 0;
		};
		labelOf = (mark) => `${mark.discriminator} = ${mark.chosen}`;
		commentLine = (node) => {
			const entries = Object.entries(node.data ?? {});
			if (entries.length === 0) return node.name;
			const rendered = [];
			entries.forEach(([key, value], order) => {
				const text = renderValue(value);
				if (text !== void 0) rendered.push({
					text: `${key}=${text}`,
					order
				});
			});
			rendered.sort((a, b) => a.text.length - b.text.length || a.order - b.order);
			const parts = [];
			let width = node.name.length;
			for (const property of rendered) {
				if (parts.length === MAX_COMMENT_PROPERTIES) break;
				if (width + property.text.length + 2 > MAX_COMMENT_CHARS) break;
				parts.push(property.text);
				width += property.text.length + 2;
			}
			const omitted = entries.length - parts.length;
			const data = parts.length > 0 ? `: ${parts.join(", ")}` : "";
			const rest = omitted > 0 ? `${parts.length > 0 ? ", " : ": "}+${omitted} more` : "";
			return `${node.name}${data}${rest}`;
		};
		keyOf = (chain) => JSON.stringify(chain.map((mark) => [mark.discriminator, mark.chosen]));
		reportProgress = async (context, node) => {
			if (node.kind === "point") {
				context.comment?.(commentLine(node));
				return;
			}
			await context.test(node.name, async (nested) => {
				const inner = nested;
				if (typeof inner?.test !== "function") return;
				for (const child of node.children) await reportProgress(inner, child);
			});
		};
	})))();
}
//#endregion
//#region ../../core/blong-chain/index.ts
/**
* Creates a thenable proxy for a given context path.
* The proxy acts as a Promise and supports nested property access.
*
* @param path - The context path (e.g., 'setupData' or 'setupData.user.name')
* @param promiseManager - The promise manager to get/create promises
* @returns A thenable proxy that can be awaited or have properties accessed
*/
function createThenableProxy(path, promiseManager) {
	const promiseEntry = promiseManager.getOrCreate(path);
	return new Proxy(promiseEntry.promise, { get(target, prop) {
		if (prop === "then" || prop === "catch" || prop === "finally") return target[prop].bind(target);
		if (typeof prop === "symbol") return target[prop];
		return createThenableProxy(`${path}.${prop}`, promiseManager);
	} });
}
/**
* Creates a context proxy that returns thenable proxies for all properties
* except $meta, which is always available directly.
*
* Also tracks which properties are accessed for dependency detection.
*/
function createContextProxy(realContext, promiseManager, currentStep, dependencyTracker) {
	return new Proxy(realContext, { get(target, prop) {
		if (prop === "$meta") return target.$meta;
		if (currentStep && typeof prop === "string") dependencyTracker.trackAccess(currentStep, prop);
		if (typeof prop === "string") return createThenableProxy(prop, promiseManager);
		return target[prop];
	} });
}
/**
* Captures source location information for error reporting
*/
function captureSourceLocation() {
	try {
		const lines = ((/* @__PURE__ */ new Error()).stack || "").split("\n");
		for (let i = 2; i < lines.length; i++) {
			const line = lines[i];
			if (!line.includes("executor.ts") && !line.includes("executor.js")) {
				const match = line.match(/\((.+):(\d+):(\d+)\)/);
				if (match) return {
					file: match[1],
					line: parseInt(match[2], 10),
					column: parseInt(match[3], 10)
				};
				const altMatch = line.match(/at (.+):(\d+):(\d+)/);
				if (altMatch) return {
					file: altMatch[1],
					line: parseInt(altMatch[2], 10),
					column: parseInt(altMatch[3], 10)
				};
			}
		}
	} catch {}
	return {
		file: "unknown",
		line: 0,
		column: 0
	};
}
/**
* Deep-clone `value` and replace the leaf at each dot-path in `paths` with
* `'<masked>'`. Supports `'*'` as a wildcard in any path segment, meaning
* "apply to every direct child of the current object".
*
* Examples:
*   maskPaths({id: '1', name: 'A'}, ['id'])
*     → {id: '<masked>', name: 'A'}
*   maskPaths({a: {id: '1'}, b: {id: '2'}}, ['*.id'])
*     → {a: {id: '<masked>'}, b: {id: '<masked>'}}
*/
function maskPaths(value, paths) {
	if (value === null || value === void 0 || typeof value !== "object") return value;
	const clone = JSON.parse(JSON.stringify(value));
	for (const path of paths) setAtPath(clone, path.split("."));
	return clone;
}
function setAtPath(obj, parts) {
	if (typeof obj !== "object" || obj === null || parts.length === 0) return;
	const [head, ...tail] = parts;
	if (head === "__proto__" || head === "constructor" || head === "prototype") return;
	const record = obj;
	if (tail.length === 0) {
		if (Object.prototype.hasOwnProperty.call(record, head)) record[head] = "<masked>";
	} else if (head === "*") for (const key of Object.keys(record)) setAtPath(record[key], tail);
	else setAtPath(record[head], tail);
}
var import___vite_browser_external, import___vite_browser_external$1, PromiseManager, DependencyTracker, DEFAULT_MAX_RETRIES, TestExecutor, keeps;
function init_blong_chain() {
	return (init_blong_chain = __esmMin((() => {
		import___vite_browser_external = /* @__PURE__ */ __toESM(require___vite_browser_external(), 1);
		import___vite_browser_external$1 = require___vite_browser_external();
		init_dist();
		init_progress();
		PromiseManager = class {
			promises = /* @__PURE__ */ new Map();
			realContext;
			constructor(realContext) {
				this.realContext = realContext;
			}
			/**
			* Gets an existing promise or creates a new one for the given path
			*/
			getOrCreate(path) {
				if (this.promises.has(path)) return this.promises.get(path);
				let resolve;
				let reject;
				const entry = {
					promise: new Promise((res, rej) => {
						resolve = res;
						reject = rej;
					}),
					resolve,
					reject
				};
				this.promises.set(path, entry);
				const parts = path.split(".");
				const stepName = parts[0];
				if (parts.length === 1 && stepName in this.realContext) entry.resolve(this.realContext[stepName]);
				else if (parts.length > 1 && stepName in this.realContext) {
					const value = this._getNestedValue(this.realContext[stepName], parts.slice(1).join("."));
					entry.resolve(value);
				} else this._autoResolveIfParentResolved(path, entry);
				return entry;
			}
			/**
			* If parent path is already resolved, resolve this child path immediately
			*/
			_autoResolveIfParentResolved(path, entry) {
				const parts = path.split(".");
				if (parts.length <= 1) return;
				for (let i = parts.length - 1; i > 0; i--) {
					const parentPath = parts.slice(0, i).join(".");
					const parentEntry = this.promises.get(parentPath);
					if (parentEntry) {
						parentEntry.promise.then((parentValue) => {
							const childPath = parts.slice(i).join(".");
							const childValue = this._getNestedValue(parentValue, childPath);
							entry.resolve(childValue);
						}).catch((error) => {
							entry.reject(error);
						});
						return;
					}
				}
			}
			/**
			* Gets nested value from an object by path
			*/
			_getNestedValue(obj, path) {
				const parts = path.split(".");
				let current = obj;
				for (const part of parts) if (current && typeof current === "object") current = current[part];
				else return;
				return current;
			}
			/**
			* Checks if a promise exists for the given path
			*/
			has(path) {
				return this.promises.has(path);
			}
			/**
			* Resolves all promises related to a step's output
			*/
			resolveStep(stepName, output) {
				if (this.promises.has(stepName)) this.promises.get(stepName).resolve(output);
				if (typeof output === "object" && output !== null) this._resolveNestedProperties(stepName, output);
			}
			/**
			* Recursively resolves promises for nested properties
			*/
			_resolveNestedProperties(basePath, obj, depth = 0) {
				if (depth > 10) return;
				for (const [key, value] of Object.entries(obj)) {
					const nestedPath = `${basePath}.${key}`;
					if (this.promises.has(nestedPath)) this.promises.get(nestedPath).resolve(value);
					if (typeof value === "object" && value !== null) this._resolveNestedProperties(nestedPath, value, depth + 1);
				}
			}
			/**
			* Rejects a promise for a given path
			*/
			reject(path, error) {
				if (this.promises.has(path)) this.promises.get(path).reject(error);
			}
		};
		DependencyTracker = class {
			dependencies = /* @__PURE__ */ new Map();
			validStepNames = /* @__PURE__ */ new Set();
			/**
			* Sets the valid step names that can be referenced
			*/
			setValidStepNames(stepNames) {
				this.validStepNames = stepNames;
			}
			/**
			* Records that a step accessed a property
			*/
			trackAccess(fromStep, property) {
				if (!this.dependencies.has(fromStep)) this.dependencies.set(fromStep, /* @__PURE__ */ new Set());
				this.dependencies.get(fromStep).add(property);
				if (this.validStepNames.size > 0) {
					const stepName = property.split(".")[0];
					if (!this.validStepNames.has(stepName)) throw new Error(`Invalid step reference(s) detected: Step "${fromStep}" references "context.${property}", but no step named "${stepName}" exists. Available steps: ${Array.from(this.validStepNames).sort().join(", ")}`);
				}
			}
			/**
			* Gets all dependencies for a step
			*/
			getDependencies(stepName) {
				return Array.from(this.dependencies.get(stepName) || []);
			}
			/**
			* Gets all dependency edges as graph edges
			*/
			getEdges() {
				const edges = [];
				for (const [from, properties] of this.dependencies.entries()) for (const property of properties) {
					const to = property.split(".")[0];
					edges.push({
						from,
						to,
						property
					});
				}
				return edges;
			}
		};
		DEFAULT_MAX_RETRIES = 1;
		TestExecutor = class extends import___vite_browser_external$1.EventEmitter {
			config;
			queue;
			dependencyTracker = new DependencyTracker();
			log;
			progress = {
				testName: "test",
				startTime: 0,
				status: "pending",
				totalSteps: 0,
				completedSteps: 0,
				failedSteps: 0,
				steps: /* @__PURE__ */ new Map(),
				groups: []
			};
			graph = {
				nodes: /* @__PURE__ */ new Map(),
				edges: []
			};
			latencyMetrics = /* @__PURE__ */ new Map();
			realContext = {};
			promiseManager;
			testContext;
			stepNamesUsed = /* @__PURE__ */ new Set();
			constructor(config = {}) {
				super();
				this.config = {
					concurrency: config.concurrency ?? 10,
					captureStackTraces: config.captureStackTraces ?? false,
					framework: config.framework,
					log: config.log,
					rerun: config.rerun,
					mask: config.mask,
					maskFn: config.maskFn,
					autoSnapshot: config.autoSnapshot
				};
				this.log = config.log;
				this.queue = new PQueue({ concurrency: this.config.concurrency });
				this.promiseManager = new PromiseManager(this.realContext);
			}
			/**
			* Executes an array of test steps
			*/
			async execute(steps, $meta, testContext) {
				this.testContext = testContext;
				Object.keys(this.realContext).forEach((key) => delete this.realContext[key]);
				this.realContext.$meta = $meta;
				this.stepNamesUsed.clear();
				this.progress.testName = steps.name || "test";
				this.progress.startTime = Date.now();
				this.progress.status = "running";
				this.progress.completedSteps = 0;
				this.progress.failedSteps = 0;
				this.progress.steps.clear();
				this.progress.groups = [];
				this.graph.nodes.clear();
				this.graph.edges = [];
				this.latencyMetrics.clear();
				this.progress.totalSteps = this._countSteps(steps);
				const allStepNames = this._collectStepNames(steps);
				this.dependencyTracker.setValidStepNames(allStepNames);
				this.emit("test:start", this.progress);
				try {
					await this._executeSteps(steps, [], this.testContext);
					this.progress.status = "completed";
					this.progress.endTime = Date.now();
					this.graph.edges = this.dependencyTracker.getEdges();
				} catch (error) {
					this.progress.status = "failed";
					this.progress.endTime = Date.now();
					throw error;
				} finally {
					this.emit("test:end", this.progress);
				}
			}
			/**
			* Recursively executes steps, handling both functions and nested arrays
			*/
			async _executeSteps(steps, groupPath, parentTestContext) {
				const stepPromises = [];
				const namedPromises = /* @__PURE__ */ new Map();
				let snapshotIndex = 0;
				for (const step of steps) if (Array.isArray(step)) {
					if (step.length === 0) {
						await Promise.all(stepPromises);
						stepPromises.length = 0;
						continue;
					}
					if (step.every((s) => typeof s === "string")) {
						const marker = step;
						if (marker.length === 1 && marker[0] === "*") {
							await Promise.all(stepPromises);
							stepPromises.length = 0;
						} else {
							const namedToWait = marker.map((name) => namedPromises.get(name)).filter((p) => p !== void 0);
							await Promise.all(namedToWait);
						}
						const cpName = marker.name ?? (marker.length === 1 && marker[0] === "*" ? `context` : marker.join("-"));
						const snapshotName = snapshotIndex === 0 ? cpName : `${cpName}-${snapshotIndex}`;
						snapshotIndex++;
						const stepsToSnapshot = marker.length === 1 && marker[0] === "*" ? [...this.progress.steps.entries()].filter(([, s]) => s.status === "completed").map(([name]) => name) : marker.filter((name) => Object.prototype.hasOwnProperty.call(this.realContext, name));
						const contextSnapshot = Object.fromEntries(stepsToSnapshot.map((name) => [name, this._applyMask(this.realContext[name])]));
						const snapshotTarget = parentTestContext;
						if (snapshotTarget && typeof snapshotTarget.matchSnapshot === "function") snapshotTarget.matchSnapshot(contextSnapshot, snapshotName);
						continue;
					}
					await Promise.all(stepPromises);
					stepPromises.length = 0;
					const nestedGroupPath = [...groupPath, step.name || `group-${groupPath.length}`];
					if (this.testContext && parentTestContext) {
						const nestedName = step.name || `group-${groupPath.length}`;
						await parentTestContext.test(nestedName, async (nestedContext) => {
							await this._executeSteps(step, nestedGroupPath, nestedContext);
						});
					} else if (this.testContext && groupPath.length === 0) {
						const nestedName = step.name || `group-${groupPath.length}`;
						await this.testContext.test(nestedName, async (nestedContext) => {
							await this._executeSteps(step, nestedGroupPath, nestedContext);
						});
					} else await this._executeSteps(step, nestedGroupPath, parentTestContext);
				} else if (typeof step === "function") {
					const promise = this._executeStep(step, groupPath, parentTestContext);
					const stepName = step.name || "anonymous";
					stepPromises.push(promise);
					namedPromises.set(stepName, promise);
				}
				await Promise.all(stepPromises);
			}
			/**
			* The invocation's progress list as it stands, for a read at a step boundary (PRD R26/R27).
			*
			* The `$meta` object is the one every step of this run shares — the same object the steps
			* destructure, and the one the handlers they call are handed.
			*/
			_progressList() {
				const progress = this.realContext.$meta?.progress;
				return Array.isArray(progress) ? progress : void 0;
			}
			/**
			* What was announced since `seen`, or `undefined` when nothing was (PRD R26/R27).
			*
			* Two shapes, and both are ordinary. A list that still holds what it held is *appended* to,
			* and the difference between the two boundary reads is the step's own progress. A list that
			* no longer begins with those entries was **replaced**: a step that resets it to scope its
			* own assertions (`$meta.progress = []`, which is how a scenario keeps one step's
			* checkpoints out of the next one's) then owns everything in the new list, including when it
			* happens to end up as long as it started.
			*
			* Best-effort attribution, and deliberately so: steps that run in parallel share the one
			* list, so a point announced while two of them were running is reported by whichever
			* boundary read it. It is never lost, and a scenario whose steps are ordered by their
			* dependencies — which is what a test that asserts on progress is — has one at a time.
			*/
			_announcedSince(seen) {
				const progress = this._progressList();
				if (progress === void 0 || progress.length === 0) return;
				if (!keeps(progress, seen)) return progress;
				return progress.length > seen.length ? progress.slice(seen.length) : void 0;
			}
			/**
			* Executes a single step function
			*/
			async _executeStep(fn, groupPath, parentTestContext) {
				const stepName = fn.name || "anonymous";
				this._checkForDuplicateStepName(stepName);
				const stepProgress = {
					stepName,
					displayName: stepName,
					groupPath,
					status: "pending",
					dependencies: [],
					dependents: [],
					sourceLocation: this.config.captureStackTraces ? captureSourceLocation() : void 0
				};
				this.progress.steps.set(stepName, stepProgress);
				this.graph.nodes.set(stepName, {
					stepName,
					groupPath,
					status: "pending"
				});
				const latency = {
					stepName,
					queuedAt: Date.now(),
					queueTime: 0,
					waitTime: 0,
					executionTime: 0,
					totalTime: 0
				};
				this.latencyMetrics.set(stepName, latency);
				const self = this;
				const executeStepFn = async (stepTestContext) => {
					const hasSnapshotTarget = stepTestContext !== void 0 && typeof stepTestContext.matchSnapshot === "function";
					const snapshotRequest = {};
					const stepAssert = hasSnapshotTarget ? new Proxy(import___vite_browser_external.default, { get(target, prop) {
						if (prop === "matchSnapshot") return stepTestContext?.matchSnapshot ? stepTestContext.matchSnapshot.bind(stepTestContext) : void 0;
						if (prop === "snapshot") return (valueOrOpts, nameOrNothing, opts) => {
							if (typeof nameOrNothing === "string") {
								if (!valueOrOpts) throw new import___vite_browser_external.default.AssertionError({ message: `snapshot "${nameOrNothing}": value is falsy` });
								const masked = self._applyMask(valueOrOpts, opts?.mask);
								stepTestContext.matchSnapshot(masked, nameOrNothing);
							} else snapshotRequest.deferred = { mask: (typeof valueOrOpts === "object" && valueOrOpts !== null && !Array.isArray(valueOrOpts) ? valueOrOpts : {}).mask };
						};
						return target[prop];
					} }) : import___vite_browser_external.default;
					latency.startedAt = Date.now();
					latency.queueTime = latency.startedAt - latency.queuedAt;
					stepProgress.status = "running";
					stepProgress.startTime = latency.startedAt;
					this.graph.nodes.get(stepName).status = "running";
					this.graph.nodes.get(stepName).startTime = latency.startedAt;
					const progressBefore = this._progressList();
					this.emit("step:start", stepName, stepProgress);
					try {
						const context = createContextProxy(this.realContext, this.promiseManager, stepName, this.dependencyTracker);
						const maxRetries = this.config.rerun?.enabled ? this.config.rerun.maxRetries ?? DEFAULT_MAX_RETRIES : 0;
						let result;
						let lastError;
						for (let attempt = 0; attempt <= maxRetries; attempt++) {
							delete snapshotRequest.deferred;
							try {
								result = await fn(stepAssert, context);
								lastError = void 0;
								break;
							} catch (err) {
								lastError = err;
								if (attempt < maxRetries) this.log?.warn?.({ err }, `step ${stepName} failed (attempt ${attempt + 1}/${maxRetries + 1}), retrying`);
							}
						}
						if (lastError !== void 0) throw lastError;
						if (snapshotRequest.deferred !== void 0 && hasSnapshotTarget) {
							if (!result) throw new import___vite_browser_external.default.AssertionError({ message: `snapshot "${stepName}": step returned a falsy value` });
							const masked = self._applyMask(result, snapshotRequest.deferred.mask);
							stepTestContext.matchSnapshot(masked, stepName);
						} else if (self.config.autoSnapshot && hasSnapshotTarget) {
							if (!result) throw new import___vite_browser_external.default.AssertionError({ message: `snapshot "${stepName}": step returned a falsy value` });
							const masked = self._applyMask(result);
							stepTestContext.matchSnapshot(masked, stepName);
						}
						this.realContext[stepName] = result;
						const announced = this._announcedSince(progressBefore);
						if (announced !== void 0) stepProgress.progress = announced;
						this.promiseManager.resolveStep(stepName, result);
						latency.completedAt = Date.now();
						latency.totalTime = latency.completedAt - latency.queuedAt;
						latency.executionTime = latency.completedAt - latency.startedAt;
						latency.queueTime = latency.startedAt - latency.queuedAt;
						latency.waitTime = 0;
						stepProgress.status = "completed";
						stepProgress.endTime = latency.completedAt;
						stepProgress.duration = latency.totalTime;
						stepProgress.queueTime = latency.queueTime;
						stepProgress.executionTime = latency.executionTime;
						stepProgress.waitTime = latency.waitTime;
						stepProgress.result = result;
						stepProgress.dependencies = this.dependencyTracker.getDependencies(stepName);
						this.graph.nodes.get(stepName).status = "completed";
						this.graph.nodes.get(stepName).endTime = latency.completedAt;
						this.progress.completedSteps++;
						this.emit("step:end", stepName, stepProgress);
						if (typeof stepTestContext?.test === "function" && stepProgress.progress !== void 0) for (const node of progressTree(stepProgress.progress)) await reportProgress(stepTestContext, node);
					} catch (error) {
						latency.completedAt = Date.now();
						latency.totalTime = latency.completedAt - latency.queuedAt;
						latency.executionTime = latency.completedAt - latency.startedAt;
						latency.queueTime = latency.startedAt - latency.queuedAt;
						latency.waitTime = 0;
						stepProgress.status = "failed";
						stepProgress.endTime = latency.completedAt;
						stepProgress.duration = latency.totalTime;
						stepProgress.dependencies = this.dependencyTracker.getDependencies(stepName);
						const stepError = {
							message: error.message,
							stack: error.stack || "",
							context: { ...this.realContext }
						};
						stepProgress.error = stepError;
						this.graph.nodes.get(stepName).status = "failed";
						this.graph.nodes.get(stepName).endTime = latency.completedAt;
						this.graph.nodes.get(stepName).error = error;
						const announcedOnFailure = this._announcedSince(progressBefore);
						if (announcedOnFailure !== void 0) stepProgress.progress = announcedOnFailure;
						this.progress.failedSteps++;
						this.emit("step:error", stepName, error, stepProgress);
						this.log?.error?.({ err: error }, `step ${stepName} failed`);
						this.promiseManager.reject(stepName, error);
						throw error;
					}
				};
				const scope = this.testContext ? parentTestContext ?? (groupPath.length === 0 ? this.testContext : void 0) : void 0;
				if (scope) await this.queue.add(() => this.runInScope(scope, stepName, (stepTestContext) => executeStepFn(stepTestContext)));
				else await this.queue.add(executeStepFn);
			}
			/**
			* Run a step as a sub-test of `scope`, falling back to a direct run when the
			* scope cannot nest one.
			*
			* The fallback is the point: `test()` can throw before the callback ever runs
			* — tap does exactly that when its `this` is not the test the method belongs
			* to — and swallowing that error silently dropped the step (a cucumber
			* scenario reported as a passing test that executed nothing).  A failure
			* *inside* the sub-test is still the framework's to report, so it is not
			* re-thrown here.
			*/
			async runInScope(scope, name, run) {
				let started = false;
				try {
					await scope.test(name, async (sub) => {
						started = true;
						await run(sub);
					});
				} catch {}
				if (!started) await run(void 0);
			}
			/**
			* Counts total number of steps (including nested)
			*/
			_countSteps(steps) {
				let count = 0;
				for (const step of steps) if (Array.isArray(step)) count += this._countSteps(step);
				else if (typeof step === "function") count++;
				return count;
			}
			/**
			* Collects all step names (including nested)
			*/
			_collectStepNames(steps) {
				const stepNames = /* @__PURE__ */ new Set();
				for (const step of steps) if (Array.isArray(step)) {
					if (step.every((s) => typeof s === "string")) continue;
					this._collectStepNames(step).forEach((name) => stepNames.add(name));
				} else if (typeof step === "function") {
					const stepName = step.name || "anonymous";
					stepNames.add(stepName);
				}
				return stepNames;
			}
			/**
			* Checks for duplicate step names and throws an error if found
			*/
			_checkForDuplicateStepName(stepName) {
				if (this.stepNamesUsed.has(stepName)) throw new Error(`Duplicate step name detected: "${stepName}". Each step must have a unique function name within the same test context.`);
				this.stepNamesUsed.add(stepName);
			}
			/**
			* Applies the chain-level `mask` (and optional per-call `extraPaths`) to
			* `value`. Returns the original reference unchanged when no masking is
			* configured. Falls back to the deprecated `maskFn` when supplied.
			*/
			_applyMask(value, extraPaths) {
				const paths = [...this.config.mask ?? [], ...extraPaths ?? []];
				if (!paths.length && !this.config.maskFn) return value;
				if (this.config.maskFn) return this.config.maskFn(value, paths);
				return maskPaths(value, paths);
			}
			/**
			* Gets the current progress snapshot
			*/
			getProgress() {
				return this.progress;
			}
			/**
			* Gets the dependency graph
			*/
			getDependencyGraph() {
				return this.graph;
			}
			/**
			* Gets latency metrics
			*/
			getLatencyReport() {
				const totalDuration = this.progress.endTime ? this.progress.endTime - this.progress.startTime : 0;
				const criticalPath = this._calculateCriticalPath();
				const totalStepTime = Array.from(this.latencyMetrics.values()).reduce((sum, l) => sum + l.executionTime, 0);
				const parallelEfficiency = totalDuration > 0 ? totalStepTime / totalDuration : 0;
				const bottlenecks = this._identifyBottlenecks();
				return {
					testName: this.progress.testName,
					totalDuration,
					steps: this.latencyMetrics,
					criticalPath,
					parallelEfficiency,
					bottlenecks
				};
			}
			/**
			* Calculates the critical path (longest dependency chain)
			*/
			_calculateCriticalPath() {
				const adjacency = /* @__PURE__ */ new Map();
				for (const edge of this.graph.edges) {
					if (!adjacency.has(edge.to)) adjacency.set(edge.to, []);
					adjacency.get(edge.to).push(edge.from);
				}
				const visited = /* @__PURE__ */ new Set();
				let longestPath = [];
				const dfs = (node, path) => {
					if (visited.has(node)) return;
					visited.add(node);
					const newPath = [...path, node];
					const children = adjacency.get(node) || [];
					if (children.length === 0) {
						if (newPath.length > longestPath.length) longestPath = newPath;
					} else for (const child of children) dfs(child, newPath);
					visited.delete(node);
				};
				const allNodes = new Set(this.graph.nodes.keys());
				const dependentNodes = new Set(this.graph.edges.map((e) => e.from));
				const roots = Array.from(allNodes).filter((n) => !dependentNodes.has(n));
				for (const root of roots) dfs(root, []);
				return longestPath.reverse();
			}
			/**
			* Identifies bottleneck steps that blocked many other steps
			*/
			_identifyBottlenecks() {
				const bottlenecks = /* @__PURE__ */ new Map();
				for (const edge of this.graph.edges) {
					if (!bottlenecks.has(edge.to)) bottlenecks.set(edge.to, /* @__PURE__ */ new Set());
					bottlenecks.get(edge.to).add(edge.from);
				}
				return Array.from(bottlenecks.entries()).map(([stepName, blockedSteps]) => ({
					stepName,
					executionTime: this.latencyMetrics.get(stepName)?.executionTime || 0,
					blockedSteps: Array.from(blockedSteps)
				})).sort((a, b) => b.blockedSteps.length - a.blockedSteps.length).slice(0, 5);
			}
			/**
			* Type-safe event emitter
			*/
			on(event, handler) {
				return super.on(event, handler);
			}
			emit(event, ...args) {
				return super.emit(event, ...args);
			}
		};
		keeps = (progress, seen) => progress === seen || seen !== void 0 && progress.length >= seen.length && seen.every((entry, at) => progress[at] === entry);
	})))();
}
//#endregion
//#region ../../core/blong-gogo/src/chain.ts
/**
* Whether this platform can write Allure's files at all.
*
* The browser platform is the one that cannot: it has no `node:fs`, so the lazy
* import of `blong-allure` there can only fail — and a failure caught per group is
* a failure reported per group over a run whose tests were fine. Its tests report
* through their own producer (Allure's Playwright integration), so the results this
* guard withholds are ones that were never going to exist on that platform.
*
* The allowed kinds are listed rather than the refused one, so a platform added
* later has to be considered here instead of inheriting a report nobody can write.
*/
function canWriteReport(platform) {
	return platform === void 0 || platform === "server";
}
/** The results directory and history file, defaulted the way Allure documents them. */
function sessionConfig(options) {
	return {
		outputDir: options.outputDir ?? "allure-results",
		historyPath: options.historyPath ?? ".allure/history.jsonl",
		logUrl: options.logUrl
	};
}
/**
* Start the Allure session if this run wants one, once.
*
* `blong-allure` is imported here rather than at the top of the file, for the
* reason the log implementation is chosen lazily: a run that does not report to
* Allure should not load it.
*
* The platform is checked *before* the attempt, and the reason it cannot report is
* said out loud — as a configuration mistake rather than an error in a test, so the
* absence of a report is explained rather than discovered.
*
* An unexpected failure (a package that cannot be imported on a platform that
* should be able to write results) is reported on the same terms, and the session
* is dropped rather than left rejected: there is nothing for the end of the run to
* close, and a later group must not await a promise that has already failed.
*
* This never throws. A report that cannot be written is not a test that failed —
* the run is judged on its tests — and a caller that had to guard the call would be
* one place too many for that decision to live.
*/
async function ensureSession(options, platform, log) {
	if (options?.enabled !== true || blocked !== void 0) return false;
	if (!canWriteReport(platform)) {
		blocked = `Allure reporting is enabled for this run but the ${platform} platform cannot write its files, so a report will not be produced`;
		log?.warn?.(blocked);
		return false;
	}
	if (session === void 0) {
		sessionOptions = options;
		session = (async () => {
			const { allureSessionStart } = await __vitePreload(async () => {
				const { allureSessionStart } = await import(
					/* @vite-ignore */
					allurePackage()
);
				return { allureSessionStart };
			}, [], import.meta.url);
			await allureSessionStart(sessionConfig(options));
		})();
	}
	try {
		await session;
		return true;
	} catch (error) {
		session = void 0;
		sessionOptions = void 0;
		if (blocked === void 0) {
			blocked = `Allure reporting failed: ${String(error)}`;
			log?.error?.(error);
		}
		return false;
	}
}
/**
* The Allure context for a group's wire name.
*
* `test.order.checkpoint` reads as realm `test`, collection `order`, group
* `checkpoint`. A name that does not split stays the realm, so a suite with its
* own naming still gets a label rather than a result filed under nothing.
*/
function contextOf(method, options) {
	const [realm, collection, ...rest] = (method ?? "").split(".").filter(Boolean);
	return {
		realm,
		collection,
		group: rest.length > 0 ? rest.join(".") : void 0,
		logUrl: options.logUrl
	};
}
/** The steps an executor recorded, in the order they completed. */
function stepsOf(executor) {
	return Array.from(executor.getProgress().steps.values());
}
/**
* What tap says about the group, when its steps say something else.
*
* A step that hangs is a step that records nothing, so the executor reports a group
* whose every recorded step passed — while the test around it failed, and the run's own
* summary counts that failure. tap sets it on the test this run was handed (`timeout!`
* for a timeout), and that verdict is the only place it exists: `undefined` for every
* other group leaves the steps as the sole authority for one that ended the ordinary way.
*/
function verdictOf(t, startedAt) {
	if ((typeof t.passing === "function" ? t.passing() : t.passing) !== false) return void 0;
	return {
		status: "broken",
		message: t.timedOut ? "timeout! — the group did not finish within its time budget" : "the group did not pass although no step it recorded failed: a timeout reports that way, because the step it cut off recorded nothing",
		start: startedAt,
		stop: Date.now()
	};
}
/** Write one group result, standing in for a step list its executor may not have. */
async function writeGroupResult(options, name, executor, method, verdict) {
	const steps = stepsOf(executor);
	const final = steps.some((step) => step.status === "failed") ? void 0 : verdict;
	if (steps.length === 0 && !final) return;
	const { allureGroupResultWrite } = await __vitePreload(async () => {
		const { allureGroupResultWrite } = await import(
			/* @vite-ignore */
			allurePackage()
);
		return { allureGroupResultWrite };
	}, [], import.meta.url);
	await allureGroupResultWrite(sessionConfig(options).outputDir, {
		name,
		steps,
		...final ? {
			status: final.status,
			statusDetails: { message: final.message },
			start: final.start,
			stop: final.stop
		} : {}
	}, contextOf(method, options));
}
/**
* End the Allure session, if one was started, and optionally generate its report.
*
* Called by the runner once every group has finished, because the results
* directory belongs to the run rather than to any one group.
*/
async function endAllureSession() {
	if (session === void 0) return;
	const options = sessionOptions ?? {};
	const closing = session;
	session = void 0;
	sessionOptions = void 0;
	await closing;
	const { allureSessionEnd } = await __vitePreload(async () => {
		const { allureSessionEnd } = await import(
			/* @vite-ignore */
			allurePackage()
);
		return { allureSessionEnd };
	}, [], import.meta.url);
	await allureSessionEnd({
		...sessionConfig(options),
		generateOnEnd: options.generateOnEnd
	});
}
var allurePackage, session, sessionOptions, blocked, runSteps, chain_default;
function init_chain() {
	return (init_chain = __esmMin((() => {
		init_blong_chain();
		init_blong_lib();
		init_preload_helper();
		allurePackage = () => ["@feasibleone", "blong-allure"].join("/");
		runSteps = (steps, log, options = {}, results = { $meta: {} }) => async (t) => {
			const executor = new TestExecutor({
				concurrency: 10,
				log,
				autoSnapshot: steps.autoSnapshot,
				mask: steps.mask
			});
			const resolvedSteps = [];
			for (const stepPromise of steps) resolvedSteps.push(await stepPromise);
			const reporting = await ensureSession(options.allure, options.platform, log);
			const startedAt = Date.now();
			try {
				await withProgress(log, `run ${steps.name}`, executor.execute(resolvedSteps, results.$meta || {}, t), { getProgress: () => {
					const progress = executor.getProgress();
					return {
						done: progress.completedSteps,
						total: progress.totalSteps
					};
				} });
				const progress = executor.getProgress();
				for (const [name, stepProgress] of progress.steps) if (stepProgress.result !== void 0) results[name] = stepProgress.result;
			} catch (error) {
				throw error;
			} finally {
				if (reporting && options.allure) await writeGroupResult(options.allure, steps.name, executor, options.method, verdictOf(t, startedAt)).catch((error) => log?.error?.(error));
			}
		};
		chain_default = async (test, log, options = {}) => {
			const context = test || (await __vitePreload(async () => {
				const { default: __vite_default__ } = await import("./iframe-BfCOoPG7.js").then((n) => /* @__PURE__ */ __toESM(n.bt(), 1));
				return { default: __vite_default__ };
			}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]), import.meta.url)).default;
			return (steps) => context.test(steps.name, runSteps(steps, log, options));
		};
	})))();
}
//#endregion
init_chain();
export { chain_default as default, endAllureSession };
