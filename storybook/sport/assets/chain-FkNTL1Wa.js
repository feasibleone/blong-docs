const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./__vite-browser-external-bwQQhMfC.js","./rolldown-runtime-V4kyJ4NV.js"])))=>i.map(i=>d[i]);
import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { t as require___vite_browser_external } from "./__vite-browser-external-bwQQhMfC.js";
import { n as init_executor, t as TestExecutor$1 } from "./executor-DV0RacEh.js";
import { H as withProgress, z as init_blong_lib } from "./iframe-DxBhgsxq.js";
//#region ../../core/blong-chain/index.ts
var import___vite_browser_external, TestExecutor;
function init_blong_chain() {
	return (init_blong_chain = __esmMin((() => {
		import___vite_browser_external = /* @__PURE__ */ __toESM(require___vite_browser_external(), 1);
		init_executor();
		TestExecutor = class extends TestExecutor$1 {
			constructor(config = {}) {
				super({
					...config,
					assert: config.assert ?? import___vite_browser_external.default
				});
			}
		};
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
				const { default: __vite_default__ } = await import("./__vite-browser-external-bwQQhMfC.js").then((n) => /* @__PURE__ */ __toESM(n.t(), 1));
				return { default: __vite_default__ };
			}, __vite__mapDeps([0,1]), import.meta.url)).default;
			return (steps) => context.test(steps.name, runSteps(steps, log, options));
		};
	})))();
}
//#endregion
init_chain();
export { chain_default as default, endAllureSession };
