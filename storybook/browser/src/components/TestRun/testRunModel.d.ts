import { progressTree } from '@feasibleone/blong-chain/browser.ts';
import { ITestAssertionCounts, ITestLogRowModel, ITestRunEvent, ITestRunModel, ITestRunRecording, ITestSourceLinkConfig, ITestSourcePointer, TestStepStatus } from '../../types/testRun.js';
export { progressTree };
export declare const EMPTY_ASSERTIONS: ITestAssertionCounts;
export declare function emptyTestRun(partial?: Partial<ITestRunModel>): ITestRunModel;
/** Group key used by the tree and by the collapse state. */
export declare const groupKey: (path: string[]) => string;
/** Step key used by the tree, selection and details. */
export declare const stepKey: (stepName: string) => string;
/**
 * Recompute everything that is a function of the steps and edges.
 *
 * The executor reports counts and dependencies progressively; deriving them here keeps the view
 * consistent even when an event is missed, and keeps the reducer free of duplicated bookkeeping.
 */
export declare function deriveTestRun(run: ITestRunModel): ITestRunModel;
/** A model that has started but whose steps are all pending. */
export declare function pendingRun(run: ITestRunModel): ITestRunModel;
/** Apply one event to the model. */
export declare function reduceTestRunEvent(run: ITestRunModel, event: ITestRunEvent): ITestRunModel;
export declare function applyTestRunEvents(run: ITestRunModel, events: Array<{
    event: ITestRunEvent;
}>): ITestRunModel;
/**
 * A recording derived from a completed model.
 *
 * This is the phase 1 stand-in for a real recorder: the final timings are already in the model, so
 * the replay only has to put them in order. A failing step emits `step:error`; a completed one
 * emits `step:end`.
 */
export declare function recordingFromRun(run: ITestRunModel, source: {
    file: string;
    recordedAt?: number;
}): ITestRunRecording;
/** The model as it stood at `atMs` after the recording started. */
export declare function replayTo(recording: ITestRunRecording, atMs: number): ITestRunModel;
/** Total recorded duration, used by a replay control's seek. */
export declare function recordingDuration(recording: ITestRunRecording): number;
/** `3/4` — assertions that passed out of the assertions the step made. */
export declare function assertionLabel(counts: ITestAssertionCounts | undefined): string;
export declare function assertionFailed(counts: ITestAssertionCounts | undefined): boolean;
/** A short label for a source pointer: `testSessionFlow.ts:42:5`. */
export declare function sourceLabel(source: ITestSourcePointer | undefined): string;
/**
 * Turn a captured source pointer into an editor or web URL. A missing config
 * keeps the pointer unlinked; the scheme defaults from the base prefix and can be
 * overridden by config.
 */
export declare function sourceHref(source: ITestSourcePointer | undefined, config: ITestSourceLinkConfig | undefined): string | undefined;
/**
 * The source-link config for this build.
 *
 * DEV points at the editor (`vscode://file/<workspace path>`); a captured CI run
 * points at the branch the run came from. Absent (a build without the define)
 * leaves source pointers unlinked.
 */
export declare function defaultSourceLinkConfig(): ITestSourceLinkConfig | undefined;
/**
 * The Log tab's stream: the executor's log lines plus the assertion messages, in time order. A
 * step filter keeps the run-level lines as context; without a step the whole run is shown.
 */
export declare function logRows(run: ITestRunModel, stepName?: string): ITestLogRowModel[];
export declare function formatDuration(ms: number | undefined): string;
export declare function formatOffset(ms: number): string;
export declare function statusRank(status: TestStepStatus): number;
/** The step names of a run in declaration order. */
export declare function stepNames(run: ITestRunModel): string[];
//# sourceMappingURL=testRunModel.d.ts.map