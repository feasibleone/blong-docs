import { default as React } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
/** Props shared by all commander viewers. */
export interface ICommanderViewerProps {
    /** The leaf node row data (list fields as returned by the parent). */
    node: Record<string, unknown>;
    /** Optional fetcher that loads the full node content (e.g. `node.get`). */
    fetch?: (params?: Record<string, unknown>) => Promise<unknown>;
    /** Fetched content (set by the parent, or loaded via `fetch`). */
    data?: unknown;
    /** Optional content-type hint (e.g. for files/images). */
    contentType?: string;
    className?: string;
}
export type CommanderViewer = React.ComponentType<ICommanderViewerProps>;
/** Register a viewer for a resource type. Later registrations win. */
export declare function registerViewer(type: string, component: CommanderViewer): void;
/** Resolve the viewer component for a resource type. */
export declare function getViewer(type?: string): CommanderViewer | undefined;
/** Whether a viewer is registered for the given type. */
export declare function hasViewer(type?: string): boolean;
/** List all registered viewer type keys (for diagnostics / tests). */
export declare function listViewers(): string[];
//# sourceMappingURL=registry.d.ts.map