import { IDropdownOption } from '@feasibleone/blong';
type LoaderFn = (name: string) => Promise<IDropdownOption[]>;
type BatchLoaderFn = (names: string[]) => Promise<Record<string, IDropdownOption[]>>;
declare class DropdownRegistry {
    private cache;
    private pending;
    /**
     * Get a dropdown by name, loading it via the provided loader if not cached.
     *
     * @param name - Dropdown key, e.g. 'marine.species'
     * @param loader - Function that fetches the dropdown data from the backend
     */
    get(name: string, loader: LoaderFn): Promise<IDropdownOption[]>;
    /**
     * Pre-populate the cache without async loading (used by mocks and preload).
     */
    set(name: string, data: IDropdownOption[]): void;
    /**
     * Batch-preload multiple dropdowns.  Names already cached are skipped.
     *
     * @param names - Dropdown names to load
     * @param loader - Batch loader that returns a map of name → options
     */
    preload(names: string[], loader: BatchLoaderFn): Promise<void>;
    /** Return true if the named dropdown is already loaded */
    has(name: string): boolean;
    /** Clear the cache (useful in tests) */
    clear(): void;
}
/** Singleton dropdown registry — shared across all components */
export declare const dropdownRegistry: DropdownRegistry;
export {};
//# sourceMappingURL=dropdownRegistry.d.ts.map