export interface IDropZoneProps {
    id: string;
    /** What drag type this zone accepts: 'card' to receive dragged cards,
     *  'field' to receive dragged field rows. */
    accept: 'card' | 'field';
    /**
     * The "source" identifier used to reject same-origin drops:
     * - For card zones: the column index (number) — reject if active.data.colIdx === sourceId.
     * - For field zones: the card name (string)   — reject if active.data.cardName === sourceId.
     */
    sourceId?: string | number;
}
export declare function DropZone({ id, accept, sourceId }: IDropZoneProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=DropZone.d.ts.map