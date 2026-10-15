import { IBlongError } from '../types/action.js';
export interface IUseSubmitOptions {
    successMessage?: string;
    errorMessage?: string;
    /** Called on successful submission */
    onSuccess?: (result: unknown) => void;
    /** Called on error */
    onError?: (error: IBlongError | Error) => void;
}
export interface IUseSubmitResult<T extends Record<string, unknown>> {
    submitting: boolean;
    submit: (values: T) => Promise<unknown>;
}
export declare function useSubmit<T extends Record<string, unknown>>(fn: (values: T) => Promise<unknown>, options?: IUseSubmitOptions): IUseSubmitResult<T>;
//# sourceMappingURL=useSubmit.d.ts.map