import { ITestEdgeModel, ITestGraphLayout, ITestRunModel, ITestRunTreeLayout, ITestStepModel } from '../../types/testRun.js';
export interface ITestTreeOptions {
    collapsed?: ReadonlySet<string>;
    order?: 'tree' | 'start';
    now?: number;
    filter?: (step: ITestStepModel) => boolean;
}
export interface ITestGraphOptions {
    nodeWidth?: number;
    nodeHeight?: number;
    columnGap?: number;
    rowGap?: number;
    minHeight?: number;
    /** Fill this box instead of using fixed node sizes. */
    targetWidth?: number;
    targetHeight?: number;
    /** `auto` draws vertically when fewer than five steps share a level. */
    orientation?: 'auto' | 'horizontal' | 'vertical';
}
/** A connected part of the dependency graph. */
export interface IGraphComponent {
    steps: string[];
    edges: ITestEdgeModel[];
}
export interface IGraphSplit {
    /** Components with at least three steps: these are worth drawing as a graph. */
    graph: IGraphComponent;
    /** Single steps and pairs, rendered as a compact flex list instead of the graph. */
    loose: IGraphComponent[];
}
interface ITimeSpan {
    start: number;
    queueEnd: number;
    end: number;
}
/**
 * The tree-table's rows: group rows followed by their children, or a flat start-time list.
 *
 * A collapsed group keeps its row and its envelope span, so its timing stays visible while its
 * children are hidden. A filter removes steps and any group left with no matching step.
 */
export declare function buildTreeLayout(run: ITestRunModel, options?: ITestTreeOptions): ITestRunTreeLayout;
/** Ticks at `1/2/5 × 10^n`, labelled relative to `t0`. */
export declare function niceTicks(t0: number, t1: number, max?: number): Array<{
    at: number;
    label: string;
}>;
/** Percentages for a bar inside the shared time axis. */
export declare function barPct(span: ITimeSpan, t0: number, t1: number): {
    left: number;
    queueWidth: number;
    width: number;
};
export declare function nowPct(now: number, t0: number, t1: number): number;
/** Where an instant sits on the shared time axis, as a percentage. */
export declare function timePct(at: number, t0: number, t1: number): number;
/**
 * Separate the connected components of the dependency graph.
 *
 * A run often has one real chain plus several independent steps. Drawing the independent steps in
 * the same layered graph stretches its widest level and scales the whole drawing down, so single
 * steps and pairs are returned separately; the caller renders them as a compact flex list.
 */
export declare function splitDependencies(run: ITestRunModel): IGraphSplit;
/**
 * Layered graph: a dependency sits one level before its dependent.
 *
 * The graph draws left to right when a level is wide (five or more parallel steps) and top to
 * bottom when it is not, because the graph's card is tall and narrow. Within a level, steps are
 * ordered by the mean position of their dependencies, falling back to declaration order, which
 * keeps a chain on one straight line and stacks parallel steps across the other axis.
 */
export declare function buildGraphLayout(run: ITestRunModel, options?: ITestGraphOptions): ITestGraphLayout;
/** A tiny helper for the graph's edge tooltips. */
export declare const edgeLabel: (edge: ITestEdgeModel) => string;
export {};
//# sourceMappingURL=testRunLayout.d.ts.map