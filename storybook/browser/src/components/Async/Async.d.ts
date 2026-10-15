import { default as React, ComponentType } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
interface IAsyncProps {
    component: () => Promise<ComponentType<Record<string, unknown>>>;
    params?: Record<string, unknown>;
    fallback?: React.ReactNode;
}
export declare function Async({ component, params, fallback }: IAsyncProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Async.d.ts.map