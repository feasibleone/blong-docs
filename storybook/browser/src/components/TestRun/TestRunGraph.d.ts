import { ITestRunModel } from '../../types/testRun.js';
export interface ITestRunGraphProps {
    run: ITestRunModel;
    selectedKey?: string;
    hoveredKey?: string;
    onSelect(stepName: string | undefined): void;
    onHover(stepName: string | undefined): void;
}
export declare function TestRunGraph({ run, selectedKey, hoveredKey, onSelect, onHover, }: ITestRunGraphProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TestRunGraph.d.ts.map