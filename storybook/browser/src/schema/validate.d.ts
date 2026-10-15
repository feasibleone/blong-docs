import { IEnrichedFieldSchema } from '@feasibleone/blong';
import { RegisterOptions } from 'react-hook-form';
/** Build react-hook-form validation rules from an enriched field schema */
export declare function buildValidationRules(schema: IEnrichedFieldSchema): RegisterOptions;
/** Strip reserved $ keys from a form values object before sending to the backend */
export declare function stripDollarKeys<T extends Record<string, unknown>>(values: T): Omit<T, '$'>;
//# sourceMappingURL=validate.d.ts.map