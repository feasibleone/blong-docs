/** Humanize a camelCase / snake_case field name for display. */
export declare function humanize(key: string): string;
/**
 * Resolve a viewer's content: prefer the `data` prop, else the `fetch` result,
 * else the leaf `node` itself. `fetch` is called once and its result cached.
 */
export declare function useViewerContent(node: Record<string, unknown>, fetch: ((params?: Record<string, unknown>) => Promise<unknown>) | undefined, data: unknown): unknown;
export declare const viewerRowStyle: {
    readonly display: "flex";
    readonly gap: "0.5rem";
    readonly padding: "0.25rem 0";
    readonly borderBottom: "1px solid var(--surface-border)";
};
export declare const viewerLabelStyle: {
    readonly fontWeight: 600;
    readonly minWidth: "10rem";
    readonly color: "var(--text-color-secondary)";
};
export declare const viewerValueStyle: {
    readonly wordBreak: "break-all";
};
//# sourceMappingURL=util.d.ts.map