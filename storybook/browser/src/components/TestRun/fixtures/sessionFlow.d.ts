import { ITestRunModel, ITestRunRecording } from '../../../types/testRun.js';
export declare function sessionFlowRun(): ITestRunModel;
export declare function sessionFlowFailure(): ITestRunModel;
export declare function sessionFlowRecording(): ITestRunRecording;
export declare function sessionFlowFailureRecording(): ITestRunRecording;
/** The same scenario before anything ran, for the Pending story. */
export declare function sessionFlowPending(): ITestRunModel;
/** 40 synthetic steps in six groups, for the density story. */
export declare function denseRun(): ITestRunModel;
export declare function denseRecording(): ITestRunRecording;
//# sourceMappingURL=sessionFlow.d.ts.map