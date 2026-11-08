/**
 * Fetch the library's page code in the background.
 *
 * The package root is the list: everything the library can render is exported there,
 * and a hand-written list of modules would fall behind the day a page kind is added.
 * This is one of the few places a root import is right — a dev server does not
 * tree-shake, which is the whole point here.
 */
export declare function prefetchPageSystem(): void;
//# sourceMappingURL=prefetch.d.ts.map