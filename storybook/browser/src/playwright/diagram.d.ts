import { Expect } from '@playwright/test';
import { Portal } from '../playwright.js';
/** The element a diagram renderer leaves behind, whatever state it reached. */
export declare const DIAGRAM_SELECTOR = "[data-diagram-rendered], [data-diagram-pending], [data-diagram-fallback]";
/** True when the artifact should be rewritten rather than compared. */
export declare function shouldRegenerateDiagrams(): boolean;
/**
 * Whether a diagram drew a call at all, in either style.
 *
 * This is the condition a capture is written under, and it has to accept **both**
 * arrows: `->>` when the receiver answered and `--x` when nothing did. Accepting only
 * the crossed one is a capture that silently stops writing the moment the framework
 * starts recording calls — which is exactly what it did, and the skips read as "this
 * deployment declares nothing", which was true only before the fix (T-118).
 *
 * A crossed arrow is content rather than a failure: "the caller declared a call and
 * nothing answered" is a deployment fact, and a diagram drawn from deductions could
 * not show it. What is *not* an artifact is a participant list with no arrow at all —
 * that records a flow nobody called (D-209).
 */
export declare function drawsACall(diagram: string): boolean;
/**
 * The markdown body for a set of diagrams — one fenced mermaid block each.
 *
 * Pure, and exported, so the artifact format is testable without a browser: the
 * page capture is the part that needs one, not the file.
 */
export declare function diagramArtifactContent(diagrams: readonly string[]): string;
export interface ICaptureDiagramOptions {
    /** Baseline name for the screenshot, without the platform suffix Playwright adds. */
    name: string;
    /**
     * The diagram text, when the caller already has it. Left out, it is read from
     * the rendered diagram's `data-diagram-text` — the page was given the text, so
     * there is no reason for a spec to fetch it a second way.
     */
    diagram?: string;
    /**
     * Markdown file the text is written into (and compared against), relative to
     * the working directory of the package running the spec — e.g.
     * `docs/observedFlows.md`.
     */
    artifact?: string;
    /** Where the rendered diagram is; defaults to {@link DIAGRAM_SELECTOR}. */
    selector?: string;
    /**
     * How long to wait for the diagram to appear. Defaults to 30s: mermaid is
     * loaded lazily, and a cold chunk on a first run is more than the suite's
     * deliberately short element budget covers.
     */
    timeout?: number;
}
/**
 * Capture a diagram the page is showing: wait for it, screenshot it, and write
 * its text to the markdown artifact.
 *
 * Fails with the page's own text if no diagram element appears at all, because
 * "nothing rendered" is a different defect from "rendered the wrong thing", and
 * a bare locator timeout says neither.
 */
export declare function captureDiagram(portal: Portal, expect: Expect, { name, diagram, artifact, selector, timeout, }: ICaptureDiagramOptions): Promise<void>;
/**
 * The mermaid text the visible drawn diagram was given, or an empty string.
 *
 * Exported because a spec decides whether there is anything to capture *before* it
 * captures: it has to ask the same question the capture will answer, about the same
 * element, or the policy and the artifact can disagree about which diagram is meant.
 */
export declare function diagramText(portal: Portal): Promise<string>;
/** Wait for a diagram element to reach a drawn state, or a fallback if it refused. */
export declare function expectDiagramDrawn(portal: Portal, expect: Expect, { timeout }?: {
    timeout?: number;
}): Promise<void>;
//# sourceMappingURL=diagram.d.ts.map