import { Row } from './model.js';
/** A column whose list is narrowed by a sibling, or by its `parent`. */
export interface ICascadeColumn {
    fieldSchema: {
        widget?: {
            parent?: string;
            optionsFilter?: Record<string, string>;
        };
    };
}
export declare function useRowDrafts(columns: ICascadeColumn[]): {
    rowDrafts: Record<string, Row>;
    recordRowDraft: (row: Row, field: string, value: unknown) => void;
    clearRowDrafts: () => void;
};
//# sourceMappingURL=useRowDrafts.d.ts.map