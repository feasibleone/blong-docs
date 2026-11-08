import { IDropdownOption } from '@feasibleone/blong';
type LoaderFn = (name: string) => Promise<IDropdownOption[]>;
type BatchLoaderFn = (names: string[]) => Promise<Record<string, IDropdownOption[]>>;
declare class DropdownRegistry {
    private cache;
    private pending;
    /**
     * Bumped whenever the cache is emptied, so a widget that already renders an
     * option list reads it again. A widget mounts once and keeps its list in state;
     * without this, adding a classifier in one tab left the picker in another tab
     * offering the old list until it was reopened.
     */
    private version;
    private listeners;
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
    /** The current generation of the cache — read by `useDropdownVersion`. */
    getVersion: () => number;
    /** Subscribe to a cache generation change; returns the unsubscribe function. */
    subscribe: (listener: () => void) => (() => void);
    /** Empty the cache and tell the mounted widgets that the answer moved. */
    private bump;
    /** Clear the cache (useful in tests) */
    clear(): void;
}
/** Singleton dropdown registry — shared across all components */
export declare const dropdownRegistry: DropdownRegistry;
/**
 * Drop every cached option list, so the next form reads them again.
 *
 * A list is cached for the life of the page, and a write changes what belongs in one: a
 * document created in this session must appear in the attachment form's picker, and it did
 * not until the page was reloaded. The cost is one read per form opened after a write — the
 * same read a reload would have made (`@@D-748`).
 */
export declare function invalidateDropdowns(): void;
/**
 * The cache generation, as a render-visible value.
 *
 * A widget that lists options puts the value in its load effect's dependencies: when
 * a write empties the cache, the effect runs again and the list the picker offers is
 * the one the server now answers (`@@D-784`).
 */
export declare function useDropdownVersion(): number;
export {};
//# sourceMappingURL=dropdownRegistry.d.ts.map