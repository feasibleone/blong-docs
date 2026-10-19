import { ITestRunModel, ITestRunTreeLayout, TestRunFilter, TestRunOrder } from '../../types/testRun.js';
export declare const SLOW_STEP_MS = 250;
export interface ITestRunTreeTableProps {
    run: ITestRunModel;
    layout: ITestRunTreeLayout;
    selectedKey?: string;
    hoveredKey?: string;
    filter: TestRunFilter;
    search: string;
    order: TestRunOrder;
    collapsed: ReadonlySet<string>;
    /** Present only while the run is live. */
    now?: number;
    onSelect(stepName: string | undefined): void;
    onHover(stepName: string | undefined): void;
    onToggleGroup(key: string): void;
    onFilterChange(filter: TestRunFilter): void;
    onSearchChange(search: string): void;
    onOrderChange(order: TestRunOrder): void;
    onOpenDetails?(stepName: string): void;
}
export declare function TestRunTreeTable({ run, layout, selectedKey, hoveredKey, filter, search, order, collapsed, now, onSelect, onHover, onToggleGroup, onFilterChange, onSearchChange, onOrderChange, onOpenDetails, }: ITestRunTreeTableProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TestRunTreeTable.d.ts.map