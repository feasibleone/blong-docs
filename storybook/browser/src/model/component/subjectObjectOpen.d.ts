import { IHandlerProxy, IResolvedModelSpec } from '@feasibleone/blong';
export declare function subjectObjectOpen(model: IResolvedModelSpec, blong: IHandlerProxy<unknown>): Promise<() => Promise<{
    title: string;
    permission: string;
    icon: string;
    component: (params?: Record<string, unknown>) => Promise<(props: Record<string, unknown>) => import("react/jsx-runtime").JSX.Element>;
}>>;
//# sourceMappingURL=subjectObjectOpen.d.ts.map