import { IAuthState } from '../types/permission.js';
export interface IUseAuthResult extends IAuthState {
    logout: () => void;
    setToken: (token: string | null) => void;
}
export declare function useAuth(): IUseAuthResult;
//# sourceMappingURL=useAuth.d.ts.map