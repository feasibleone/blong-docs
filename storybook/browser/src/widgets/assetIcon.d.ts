/** The media type a `data:` URI carries, e.g. `image/png`, else undefined. */
export declare function assetDataType(value: string | undefined): string | undefined;
/**
 * The icon a stored file is shown with, from its type or its name.
 *
 * A thumbnail is only possible for a picture, so everything else needs something that says what it is at
 * a glance. The mapping is PrimeIcons' own file vocabulary; an unknown type answers a plain file rather
 * than nothing, because a row with no icon reads as a row with no value (@@D-842).
 */
export declare function assetIcon(contentTypeOrName: string | undefined): string;
/** Whether this value can be shown as a picture. */
export declare function assetIsImage(contentTypeOrName: string | undefined): boolean;
/**
 * What the field says the value is: a file's own name where the value carries one.
 *
 * A reference is `blob://<namespace>/<key>` and a key is generated, so it names nothing a reader
 * recognises; a URL is shortened to its last segment, and a `data:` URI is its media type — printing the
 * bytes into a form cell is what this exists to avoid (@@D-842).
 */
export declare function assetLabel(value: string | undefined): string;
//# sourceMappingURL=assetIcon.d.ts.map