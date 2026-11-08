import { Browser } from '@playwright/test';
/** One boot, from `goto` to the composed portal. */
export interface IBootSample {
    /** What this sample measures — `dev #1`, `build + trace`, … */
    label: string;
    /** Document navigations the boot cost. More than one is a reload, not a boot. */
    documents: number;
    /** Script requests, which is the module graph a fresh context has to fetch. */
    scripts: number;
    /** `page.goto()` resolving. */
    gotoMs: number;
    /** The login form becoming visible — the milestone that says the app is up. */
    bootMs: number;
    /** Filling the form and submitting it. */
    submitMs: number;
    /** The portal menubar appearing. */
    menubarMs: number;
    /** The composed menu and brand landing (`html[data-portal-config="merged"]`). */
    mergedMs: number;
    /** Everything above, from the start of the navigation. */
    totalMs: number;
}
/** How to measure one boot. */
export interface IMeasureBootOptions {
    /** What to call the sample in the report. */
    label: string;
    /** The page to open — the app's base URL, e.g. `http://localhost:5173/s/`. */
    url: string;
    /** Login name. */
    username: string;
    /** Login password. */
    password: string;
    /**
     * Start a trace before the first navigation.
     *
     * CI keeps a trace only for a failure (`retain-on-failure`), so the question "does
     * collecting one cost anything" is answered by a sample that asks for it — the
     * screenshots and snapshots a trace captures are the difference.
     */
    trace?: boolean;
    /** Budget for the app to appear (default {@link BLONG_BOOT_TIMEOUT}). */
    bootTimeout?: number;
    /** Budget for an element once the app is up (default {@link BLONG_ELEMENT_TIMEOUT}). */
    elementTimeout?: number;
}
/**
 * Boot the app in a fresh context and time each phase.
 *
 * The context is closed before returning, trace included: a sample must not leave a
 * browser behind, and the caller usually wants several.
 */
export declare function measureBoot(browser: Browser, options: IMeasureBootOptions): Promise<IBootSample>;
/** Options for {@link reportLatency}. */
export interface ILatencyReportOptions {
    /** Where to write the samples, as JSON. */
    file?: string;
}
/**
 * The samples as a fixed-width table, one row each.
 *
 * Fixed-width on purpose: the numbers are read next to the previous run's, and a table
 * that re-flows is compared by eye and reported as a change. `ms` is in the header
 * rather than on every cell for the same reason.
 */
export declare function latencyTable(samples: readonly IBootSample[]): string;
/**
 * One line per leg: the median of its samples.
 *
 * A single boot on a shared machine is noisy — a dev server re-optimising a dependency
 * mid-leg doubles the number — so the medians are what a reader compares, and the table
 * above them says how wide the spread was. A leg is identified by its label without the
 * run number (`dev #3` is `dev`), which is why the labels end in one.
 */
export declare function latencySummary(samples: readonly IBootSample[]): string;
/**
 * The samples as a table, plus the same samples as JSON beside it.
 *
 * Returns the table so the caller decides where it is logged: a spec prints it to the
 * run's output and adds it to the test's annotations, which is what the CI report
 * carries.
 */
export declare function reportLatency(samples: readonly IBootSample[], options?: ILatencyReportOptions): string;
/** How to build and serve a package for a measurement. */
export interface IServeBuiltAppOptions {
    /** The package to build — its own `vite.config.ts` applies. */
    packageDir: string;
    /** Where the build goes (default `.playwright/latency-dist` inside the package). */
    outDir?: string;
    /**
     * Origin the build's `/rpc` calls are proxied to.
     *
     * Defaults to `http://localhost:8080`, which is the gateway a local run uses. A run
     * whose backend sits elsewhere — a CI port pair, or the dev server that is already
     * proxying — passes its own, because the preview server proxies `/rpc` the same way
     * the dev server does (`preview.proxy` in `vite.ts`).
     */
    rpcOrigin?: string;
    /** Budget for the build, then for the server to answer (default 180 s, then 30 s). */
    buildTimeoutMs?: number;
    serverTimeoutMs?: number;
}
/** A build served from disk, ready to be measured. */
export interface IBuiltApp {
    /** The app's base URL, as the server printed it, e.g. `http://localhost:42429/s/`. */
    url: string;
    /** The build's directory. */
    outDir: string;
    /** Stop the server. Always call it: a leaked preview holds its port. */
    stop: () => Promise<void>;
}
/**
 * Build the package and serve it with `vite preview`.
 *
 * Compression is switched off for the build (`BLONG_SKIP_COMPRESSION`): a `.gz` sibling is
 * a publish artifact no browser reads, and it is 92% of the build's time — a measurement
 * that waited for it would spend half a minute timing nothing.
 *
 * The server picks its own free port (`--port 0`) and this reads the URL it prints, rather
 * than deriving one: CI hands every package a unique pair derived from its index, so any
 * port arithmetic here would collide with another package's the moment one was added.
 */
export declare function serveBuiltApp(options: IServeBuiltAppOptions): Promise<IBuiltApp>;
//# sourceMappingURL=latency.d.ts.map