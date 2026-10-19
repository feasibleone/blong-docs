import { TestExecutor, IDependencyGraph, IMeta, ITestLatency, ITestProgress, StepArray } from '@feasibleone/blong-chain/browser.ts';
import { ITestRunEvent, ITestRunModel, ITestRunSource } from '../../types/testRun.js';
export interface IBrowserTestRunOptions {
    /** Display name of the scenario, e.g. `session flow browser`. */
    name: string;
    /** Wire name of the group, e.g. `test.session.flow`. */
    method: string;
    /** The resolved step array; the host owns the registry lookup. */
    steps: StepArray;
    /** Forwarded to every step; usually the logged-in user's meta. */
    $meta?: IMeta;
    concurrency?: number;
    /** Provenance of the source file, shown in the details panel. */
    source?: {
        file?: string;
    };
    /** Override the browser assert (for a host that owns a richer one). */
    assert?: ITestExecutorConfigAssert;
}
/** The assert slot of the executor config, without importing node-only types. */
type ITestExecutorConfigAssert = NonNullable<NonNullable<ConstructorParameters<typeof TestExecutor>[0]>['assert']>;
/** The pending model a run starts from, with declaration order preserved. */
export declare function pendingBrowserRun(options: IBrowserTestRunOptions): ITestRunModel;
/**
 * Project the executor's current progress into the console's model.
 *
 * The graph is merged with the edges the model already received from `step:dependency`: the
 * executor builds its final graph at the end of a successful run, and a failing run never gets
 * there, while the live edges are already known.
 */
export declare function projectBrowserRun(base: ITestRunModel, progress: ITestProgress, graph: IDependencyGraph, latency: ITestLatency): ITestRunModel;
/**
 * Run a scenario in the page.
 *
 * `start()` resolves when the run ends, whether it passed or failed; the failure is in the model
 * and in the emitted `step:error`/`run:end` events, not in a rejected promise that would crash the
 * page.
 */
export declare class BrowserTestRunSource implements ITestRunSource {
    private readonly options;
    private readonly initial;
    private readonly executor;
    private model;
    private listeners;
    private started;
    private finished;
    constructor(options: IBrowserTestRunOptions);
    snapshot(): ITestRunModel;
    subscribe(listener: (event: ITestRunEvent) => void): () => void;
    private emit;
    private stepEvent;
    private finish;
    start(): Promise<void>;
    stop(): Promise<void>;
}
export {};
//# sourceMappingURL=browserTestRunSource.d.ts.map