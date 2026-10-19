import { IMeta, StepArray } from '@feasibleone/blong-chain/browser.ts';
import { ITestSourceLinkConfig } from '../../types/testRun.js';
import { ITestRunServerTransport } from './pollingTestRunSource.js';
export interface ITestRunCatalogEntry {
    /** Wire name of the test group, e.g. `test.session.flow`. */
    method: string;
    /** Display name shown in the picker. */
    name: string;
    /** Where the steps run; browser by default. */
    host?: 'browser' | 'server';
    /** Groups the scenario covers, when the host knows them. */
    groups?: string[];
    description?: string;
}
export interface ITestRunPageProps {
    /** The scenarios the page may run. Nothing outside this list is ever loaded. */
    catalog: ITestRunCatalogEntry[];
    /** Resolve a browser catalog method to its step array (the host's registry lookup). */
    load?(method: string): StepArray | Promise<StepArray>;
    /** The transport for server-hosted entries; required when the catalog names one. */
    transport?: ITestRunServerTransport;
    /** Forwarded to the run; usually the logged-in user's meta. */
    $meta?: IMeta;
    /** Base and scheme for source links in the console. */
    sourceLink?: ITestSourceLinkConfig;
    title?: string;
    defaultDetailsOpen?: boolean;
    /** Write the final model and event stream into hidden nodes for a Playwright capture. */
    capture?: boolean;
    className?: string;
}
export declare function TestRunPage({ catalog, load, transport, $meta, sourceLink, title, defaultDetailsOpen, capture, className, }: ITestRunPageProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TestRunPage.d.ts.map