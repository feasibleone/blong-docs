import { IPortalConfig } from './types/portal.js';
/**
 * Compose the portal configuration any number of realms provide into the one the
 * shell renders. Missing or empty answers are skipped, so a realm that ships no
 * pages contributes nothing rather than blanking the portal.
 */
export declare function mergePortalConfigs(configs: readonly (Partial<IPortalConfig> | undefined | null)[]): IPortalConfig;
//# sourceMappingURL=portalConfig.d.ts.map