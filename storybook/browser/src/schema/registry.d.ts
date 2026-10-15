import { IEnrichedSchema } from '@feasibleone/blong';
import { IJsonSchemaExtended, ISchemaRegistry } from '../types/schema.js';
declare class SchemaRegistry implements ISchemaRegistry {
    private cache;
    private document;
    private loadPromise;
    load(url?: string): Promise<void>;
    get(name: string): IEnrichedSchema | undefined;
    resolve(name: string): Promise<IEnrichedSchema>;
    set(name: string, schema: IEnrichedSchema): void;
    has(name: string): boolean;
}
/** Enrich a raw JSON Schema into a normalized IEnrichedSchema */
export declare function enrichSchema(name: string, raw: IJsonSchemaExtended): IEnrichedSchema;
/** Singleton registry instance */
export declare const schemaRegistry: SchemaRegistry;
export {};
//# sourceMappingURL=registry.d.ts.map