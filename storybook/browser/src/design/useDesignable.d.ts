import { DesignElementType } from './DesignModeContext.js';
export interface IDesignableResult {
    isSelected: boolean;
    select: () => void;
    /** Drag event handlers (pointer listeners + aria attributes). Spread onto the drag element.
     *  Does NOT include a ref — use setRef for that. */
    dragProps: Record<string, unknown>;
    /** Combined drag+drop ref. Attach to the outermost DOM element of the draggable component.
     *  Null when design mode is inactive. */
    setRef: ((node: HTMLElement | null) => void) | null;
    designClass: string;
    style?: React.CSSProperties;
}
/**
 * @param id        - Unique drag/drop id (e.g. 'card-tree')
 * @param type      - Element type
 * @param extraData - Additional data stored in active.data.current during drag.
 *                    Include at minimum: { label, sourceId } so DropZone can validate.
 */
export declare function useDesignable(id: string, type: DesignElementType, extraData?: Record<string, unknown>): IDesignableResult;
//# sourceMappingURL=useDesignable.d.ts.map