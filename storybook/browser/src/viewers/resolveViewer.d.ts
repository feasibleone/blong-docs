import { CommanderViewer } from './registry.js';
export interface ICommanderModelRef {
    subject: string;
    object: string;
}
/** Leaf meta carried by the source descriptor level. */
export interface ICommanderLeafMeta {
    /** Explicit viewer type (registered in the viewer registry). */
    viewer?: string;
    /** Model-system reference for recognition of `{subject}.{object}` resources. */
    model?: ICommanderModelRef;
}
export interface IResolvedViewer {
    /** A registered viewer component (for direct mount). */
    component?: CommanderViewer;
    /** A portal page-action component key (e.g. `component/party.person.browse`). */
    page?: string;
    /** Resolved type key ('model' when the model system owns it). */
    type: string;
}
/**
 * Resolve the viewer for a leaf node.
 * `models` should be the list of `{subject, object}` pairs declared by the
 * model system (e.g. from `subject.model.list` / the model aggregator).
 */
export declare function resolveViewer(meta: ICommanderLeafMeta | undefined, models?: ICommanderModelRef[]): IResolvedViewer;
//# sourceMappingURL=resolveViewer.d.ts.map