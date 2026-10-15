import { IHandlerProxy, IResolvedModelSpec } from '@feasibleone/blong';
import { default as React } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
/**
 * Report page factory.
 *
 * Builds an Editor-based report page with two cards:
 * - **params**: filter fields that the user fills in before running the report.
 * - **result**: a server-fetched table that populates when the user clicks "Run Report".
 *
 * @param model    Resolved model spec.
 * @param blong    Handler proxy from the orchestrator context.
 * @param reportId Optional report identifier. Defaults to `${subject}${Capital(object)}List`
 *                 which generates a standard list report using `methods.find`.
 */
export declare function subjectObjectReport(model: IResolvedModelSpec, blong: IHandlerProxy<unknown>, reportId?: string): Promise<() => Promise<{
    title: string;
    permission: string;
    icon: string;
    component: () => Promise<React.ComponentType<{}>>;
}>>;
//# sourceMappingURL=subjectObjectReport.d.ts.map