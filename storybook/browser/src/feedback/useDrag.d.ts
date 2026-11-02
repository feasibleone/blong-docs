import { PointerEvent } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
export interface IDrag {
    start: (event: PointerEvent<HTMLElement>) => void;
}
export declare function useDrag(onDelta: (dx: number, dy: number) => void): IDrag;
//# sourceMappingURL=useDrag.d.ts.map