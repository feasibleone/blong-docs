import { ITestRunRowLayout, ITestRunTreeLayout } from '../../types/testRun.js';
export declare function TestRunRuler({ layout }: {
    layout: ITestRunTreeLayout;
}): import("react/jsx-runtime").JSX.Element;
export interface ITestRunBarProps {
    row: ITestRunRowLayout;
    layout: ITestRunTreeLayout;
    /** Present only while the run is live; a finished run has no now marker. */
    now?: number;
    critical?: boolean;
}
export declare function TestRunBar({ row, layout, now, critical }: ITestRunBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TestRunBars.d.ts.map