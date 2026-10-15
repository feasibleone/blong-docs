import { DependencyList } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { IBlongError } from '../types/action.js';
export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';
export interface IUseAsyncResult<T> {
    status: AsyncStatus;
    data?: T;
    error?: IBlongError | Error;
    loading: boolean;
    reload: () => void;
}
export declare function useAsync<T>(asyncFn: () => Promise<T>, deps?: DependencyList): IUseAsyncResult<T>;
//# sourceMappingURL=useAsync.d.ts.map