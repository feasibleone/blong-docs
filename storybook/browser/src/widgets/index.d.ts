import { IWidgetProps, IWidgetRegistry } from '@feasibleone/blong';
import { default as React } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
declare class WidgetRegistryImpl implements IWidgetRegistry {
    private map;
    register(type: string, component: React.ComponentType<IWidgetProps>): void;
    get(type: string): React.ComponentType<IWidgetProps> | undefined;
    list(): string[];
}
/** Global singleton widget registry */
export declare const widgetRegistry: WidgetRegistryImpl;
/** Register all built-in widgets synchronously */
export declare function registerBuiltinWidgets(): void;
export {};
//# sourceMappingURL=index.d.ts.map