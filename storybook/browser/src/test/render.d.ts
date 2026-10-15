import { RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
export interface IRenderOptions extends Omit<RenderOptions, 'wrapper'> {
    dispatch?: (method: string, params?: Record<string, unknown>) => Promise<unknown>;
}
export declare function render(ui: ReactElement, { dispatch, ...options }?: IRenderOptions): RenderResult;
/**
 * Flush all pending macro-task callbacks (e.g. PrimeReact focus/overlay management
 * scheduled via setTimeout) inside act() so they don't fire during a later
 * findByTestId / waitFor polling window — which would produce "not configured to
 * support act" warnings because @testing-library temporarily sets
 * IS_REACT_ACT_ENVIRONMENT = false while polling.
 *
 * Call this after any `await act(() => Story.play!({...}))` that performs user
 * interactions (clicks, keyboard input) on PrimeReact components.
 */
export declare const flushEffects: () => Promise<void>;
export * from '@testing-library/react';
//# sourceMappingURL=render.d.ts.map