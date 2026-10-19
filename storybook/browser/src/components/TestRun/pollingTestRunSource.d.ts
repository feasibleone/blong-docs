import { IMeta } from '@feasibleone/blong-chain/browser.ts';
import { ITestRunEvent, ITestRunModel, ITestRunSource } from '../../types/testRun.js';
export interface ITestRunEventPage {
    /** Events after the cursor, in cursor order. */
    events: Array<{
        cursor: number;
        event: ITestRunEvent;
    }>;
    /** True once the run reached `run:end`; a final empty page is allowed. */
    done: boolean;
}
export interface ITestRunServerTransport {
    /** Start the run and return its initial model (usually `run:start`'s model). */
    start(method: string, $meta: IMeta): Promise<{
        runId: string;
        run: ITestRunModel;
    }>;
    /** Read the events after `cursor`. */
    events(runId: string, cursor: number): Promise<ITestRunEventPage>;
    /** A full snapshot, used when the event page cannot be reduced. */
    snapshot(runId: string): Promise<ITestRunModel>;
    cancel(runId: string): Promise<void>;
}
export interface IPollingTestRunOptions {
    transport: ITestRunServerTransport;
    method: string;
    $meta?: IMeta;
    /** How long to wait between empty pages (default 250 ms). */
    pollIntervalMs?: number;
}
export declare class PollingTestRunSource implements ITestRunSource {
    private readonly transport;
    private readonly method;
    private readonly $meta;
    private readonly pollIntervalMs;
    private listeners;
    private model;
    private runId;
    /** -1 so a server whose first event cursor is 0 is not skipped. */
    private cursor;
    private started;
    private stopped;
    private wake;
    constructor({ transport, method, $meta, pollIntervalMs }: IPollingTestRunOptions);
    snapshot(): ITestRunModel;
    subscribe(listener: (event: ITestRunEvent) => void): () => void;
    private emit;
    private wait;
    private poll;
    start(): Promise<void>;
    cancel(): Promise<void>;
    stop(): Promise<void>;
}
//# sourceMappingURL=pollingTestRunSource.d.ts.map