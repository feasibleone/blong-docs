import { IAdapter, IComponent, IHandlerProxy, IModelSpec } from '@feasibleone/blong';
import { IPortalConfig } from '../../index.js';
export default function component(this: IAdapter<{
    portal?: IPortalConfig;
    context?: {
        menus?: Record<string, unknown[]>;
    };
}, object>, models: IModelSpec[], blong: IHandlerProxy<unknown>): Promise<Record<string, () => Promise<IComponent | IPortalConfig>>>;
//# sourceMappingURL=subjectObjectComponent.d.ts.map