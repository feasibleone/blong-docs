import { IWidgetToolbarButton } from '@feasibleone/blong';
import { Row } from './model.js';
export declare function getPath(obj: unknown, path: string): unknown;
export declare function resolveToolbarParams(params: Record<string, unknown> | string | undefined, context: Record<string, unknown>): Record<string, unknown> | undefined;
export declare function evalToolbarEnabled(enabled: IWidgetToolbarButton['enabled'], selection: Row[], currentRow: Row | null): boolean;
//# sourceMappingURL=toolbar.d.ts.map