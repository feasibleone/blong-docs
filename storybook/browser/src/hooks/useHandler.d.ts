import { IBlongError } from '../types/action.js';
/**
 * useHandler — subscribe to a registry method result.
 * Equivalent to useQuery but directly calling the registry.
 */
export declare function useHandler<TResult = unknown>(method: string, params?: Record<string, unknown>, options?: {
    enabled?: boolean;
    staleTime?: number;
}): import('@tanstack/react-query').UseQueryResult<import('@tanstack/react-query').NoInfer<TResult>, IBlongError>;
/**
 * useHandlerMutation — call a registry method as a mutation.
 */
export declare function useHandlerMutation<TResult = unknown, TParams extends Record<string, unknown> = Record<string, unknown>>(method: string, invalidateQueries?: string[]): import('@tanstack/react-query').UseMutationResult<TResult, IBlongError, TParams, unknown>;
/** useHandler as an imperative call (no subscription) */
export declare function useHandlerCall<TResult = unknown>(method: string): (params?: Record<string, unknown>) => Promise<TResult>;
//# sourceMappingURL=useHandler.d.ts.map