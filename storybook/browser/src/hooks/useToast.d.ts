import { IToast } from '../state/appStore.js';
export interface IUseToastResult {
    show: (toast: Omit<IToast, 'id'>) => void;
    success: (message: string, detail?: string) => void;
    error: (message: string, detail?: string) => void;
    info: (message: string, detail?: string) => void;
    warn: (message: string, detail?: string) => void;
    clear: (id: string) => void;
    clearAll: () => void;
}
export declare function useToast(): IUseToastResult;
//# sourceMappingURL=useToast.d.ts.map