import { IUseActionResult } from '../types/action.js';
/**
 * useAction — invoke or subscribe to an action by name.
 *
 * @param actionName - Registered action name (e.g. 'model.coral.fetch')
 * @param params - Static params merged with action-level params
 */
export declare function useAction<TResult = unknown>(actionName: string, type?: 'page' | 'query' | 'mutation', params?: Record<string, unknown>): IUseActionResult<TResult>;
//# sourceMappingURL=useAction.d.ts.map