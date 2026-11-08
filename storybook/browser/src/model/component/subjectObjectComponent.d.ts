import { IAdapter, IComponent, IHandlerProxy, IModelSpec } from '@feasibleone/blong';
import { IPortalConfig } from '../../index.js';
import { IMenuNode } from '../menu.js';
/** The portal slice this aggregator reads: the portal config, read before it is composed. */
type ModelPortalConfig = Partial<IPortalConfig>;
export default function component(this: IAdapter<{
    portal?: ModelPortalConfig;
    context?: {
        menus?: Record<string, IMenuNode[]>;
    };
}, object>, models: IModelSpec[], blong: IHandlerProxy<unknown>): Promise<Record<string, () => Promise<IComponent | IPortalConfig>>>;
export {};
//# sourceMappingURL=subjectObjectComponent.d.ts.map