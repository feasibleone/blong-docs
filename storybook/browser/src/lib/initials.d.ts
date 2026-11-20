/**
 * The two letters a nameless picture falls back to.
 *
 * One behaviour, two callers: the account menu's avatar and a blob that has no photograph yet. A name of
 * two or more words answers its first and last initial, a single long word answers its first two letters
 * — which is what makes `Jane Doe` read `JD` and `blong` read `BL` (@@D-842).
 */
export declare function deriveInitials(name: string | undefined | null): string | undefined;
//# sourceMappingURL=initials.d.ts.map