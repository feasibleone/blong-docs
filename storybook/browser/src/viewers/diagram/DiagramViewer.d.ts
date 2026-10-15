import { IDiagramRendererProps } from './rendererRegistry.js';
/** The notation the semantic-log service emits, and the default until told otherwise. */
export declare const DEFAULT_DIAGRAM_RENDERER = "mermaid";
export interface IDiagramViewerProps extends IDiagramRendererProps {
    /**
     * Which notation `diagram` is in — a name the registry knows. A realm sets
     * this from its own config, so the choice is a deployment's.
     */
    renderer?: string;
}
/**
 * Draw a diagram through the registered renderer for its notation.
 *
 * An unknown notation is shown as it came rather than as nothing: the text *is*
 * the diagram, and a renderer for it may exist in another build.
 */
export default function DiagramViewer({ diagram, renderer, className, }: IDiagramViewerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DiagramViewer.d.ts.map