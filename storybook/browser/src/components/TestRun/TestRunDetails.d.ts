import { ITestRunModel, ITestSourceLinkConfig } from '../../types/testRun.js';
export interface ITestRunDetailsProps {
    run: ITestRunModel;
    stepName?: string;
    open: boolean;
    /** Base and scheme for source links; the pointer is always shown, linked or not. */
    sourceLink?: ITestSourceLinkConfig;
    onClose(): void;
}
/**
 * The panel is keyed by the selected step: a different step starts on the Log tab, while a live
 * refresh of the same step keeps the tab the user chose.
 */
export declare function TestRunDetails(props: ITestRunDetailsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TestRunDetails.d.ts.map