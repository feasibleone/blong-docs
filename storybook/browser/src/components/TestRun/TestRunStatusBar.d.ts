import { ReactNode } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { ITestRunModel } from '../../types/testRun.js';
export interface ITestRunStatusBarProps {
    run: ITestRunModel;
    now?: number;
    detailsOpen: boolean;
    onToggleDetails(): void;
    /** Replay controls supplied by a fixture source or, later, by a live source. */
    controls?: ReactNode;
}
export declare function TestRunStatusBar({ run, now, detailsOpen, onToggleDetails, controls, }: ITestRunStatusBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TestRunStatusBar.d.ts.map