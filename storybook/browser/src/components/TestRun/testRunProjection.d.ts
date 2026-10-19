import { IDependencyGraph, ITestLatency, ITestProgress, StepArray } from '@feasibleone/blong-chain/browser.ts';
import { ITestRunModel } from '../../types/testRun.js';
export interface ITestRunProjectionOptions {
    name: string;
    method: string;
    steps: StepArray;
    concurrency?: number;
    source?: {
        file?: string;
    };
}
/**
 * Make a step result JSON-safe and bounded.
 *
 * A result can be circular, hold functions or be megabytes of rows; the console only needs a
 * preview. A JSON round-trip drops what cannot cross the wire, and a payload over the limit is
 * replaced by a marker so the browser never receives the whole result.
 */
export declare function sanitizeResult(value: unknown): {
    result?: unknown;
    resultTruncated?: boolean;
};
export declare function pendingBrowserRun(options: ITestRunProjectionOptions): ITestRunModel;
export declare function projectBrowserRun(base: ITestRunModel, progress: ITestProgress, graph: IDependencyGraph, latency: ITestLatency): ITestRunModel;
//# sourceMappingURL=testRunProjection.d.ts.map