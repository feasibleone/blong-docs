/** What the browser reads back from `globalThis.__BLONG_SOURCE_LINK__`. */
export interface IInjectedSourceLink {
    /** The process is a captured CI run, so links point at the repository, not the editor. */
    ci: boolean;
    /** GitHub `owner/repository`, from `GITHUB_REPOSITORY`. */
    repository: string;
    /** PR head branch, tag or SHA, from `GITHUB_HEAD_REF`/`GITHUB_REF_NAME`. */
    branch: string;
    /** Absolute path of the monorepo root. */
    workspaceRoot: string;
    /** Package path from the workspace root, e.g. `realm/blong-access`. */
    packagePath: string;
    /**
     * The remote segment of a `vscode://` URI, from `BLONG_VSCODE_REMOTE` or
     * `VSCODE_REMOTE_AUTHORITY`, e.g. `vscode-remote/ssh-remote+ms-02`.
     */
    vscodeRemote?: string;
}
/** Walk up from `start` to the first folder holding `rush.json` or `.git`. */
export declare function workspaceRootOf(start: string): string;
/** The package root a Vite config is written in. */
export declare function packageRootOf(importMetaUrl: string): string;
/** The `define` entry, shaped as the global the console reads. */
export declare function sourceLinkDefine(packageRoot: string, env?: NodeJS.ProcessEnv): Record<string, string>;
//# sourceMappingURL=sourceLinkDefine.d.ts.map