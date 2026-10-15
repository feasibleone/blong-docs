import { IEnrichedSchema } from '@feasibleone/blong';
export interface IReportColumn {
    field: string;
    header?: string;
    sortable?: boolean;
    width?: string | number;
    /** Aggregate function for footer */
    aggregate?: 'sum' | 'count' | 'avg';
}
export interface IReportSummaryMetric {
    label: string;
    /** Field path from the report data */
    field: string;
    icon?: string;
    /** Color class */
    color?: 'success' | 'warn' | 'danger' | 'info';
}
export interface IReportProps {
    /** Action name returning report data */
    dataAction?: string;
    /** Schema for the filter form */
    filterSchema?: IEnrichedSchema;
    /** Initial filter values */
    defaultFilter?: Record<string, unknown>;
    /** Columns for the detail table */
    columns?: IReportColumn[];
    /** Summary metric definitions shown above the table */
    metrics?: IReportSummaryMetric[];
    /** Title */
    title?: string;
    /** Enable CSV/XLS/PDF export buttons */
    exportable?: boolean;
    className?: string;
}
export declare function Report({ dataAction, filterSchema, defaultFilter, columns, metrics, title, exportable, className, }: IReportProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Report.d.ts.map