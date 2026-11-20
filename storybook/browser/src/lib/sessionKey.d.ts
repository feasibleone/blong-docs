import { PermissionMap } from '../types/permission.js';
/**
 * What the session may do, as one string.
 *
 * A cookie minted from a session is only good while that session's authority holds: a reader whose
 * role changed must be given a new one, and one whose session merely re-rendered must not be given a
 * second. Comparing two strings is the cheapest way to say which happened — the actor plus the names
 * it was granted, sorted so the same set always spells the same thing (`@@D-836`).
 */
export declare function sessionKey(actorId: string | number | undefined, permissions: PermissionMap): string;
//# sourceMappingURL=sessionKey.d.ts.map