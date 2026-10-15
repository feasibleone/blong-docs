export * from './registry.js';
export { JsonViewer } from './JsonViewer.js';
export { KeyValueViewer } from './KeyValueViewer.js';
export { FileImageViewer } from './FileImageViewer.js';
export { PodLogViewer } from './PodLogViewer.js';
export { TableViewer } from './TableViewer.js';
export { YamlViewer } from './YamlViewer.js';
export { MessageViewer } from './MessageViewer.js';
export { DocumentViewer } from './DocumentViewer.js';
export { SecretViewer } from './SecretViewer.js';
/** Register the built-in generic viewers. Idempotent — safe to call repeatedly. */
export declare function registerBuiltinViewers(): void;
//# sourceMappingURL=index.d.ts.map