import { IAssetOptions } from '../../blob/assetReference.js';
/**
 * `BlobImage` — a stored picture, or the name it stands for.
 *
 * A record holds a `blob://` reference or a URL; a person who has not chosen a photograph holds
 * nothing. So this renders one of three things: the picture, its thumbnail when the store derived one,
 * or the initials of a name in the same box — which is what the account menu already does for an avatar
 * (@@D-842).
 *
 * The thumbnail is asked for by reading the record: a variant is a blob of its own with its own key, and
 * only the record says which keys exist (@@D-844). One call, then the bytes are the browser's business —
 * the cookie the serving route reads is already set, so the `img` needs no header of its own.
 */
export interface IBlobImageProps {
    /** The stored value: `blob://<namespace>/<key>`, a URL, or empty. */
    value?: string | null;
    /** What the initials fall back to, when there is no picture to show. */
    name?: string;
    /** The box, in pixels. A number is square; `undefined` fills the parent. */
    size?: number;
    /** A circle (an avatar) or a rounded square (a card). */
    shape?: 'circle' | 'square';
    /** How the picture fills the box. */
    fit?: 'cover' | 'contain';
    /** The alternative text; defaults to the name, then to an empty string (a decorative picture). */
    alt?: string;
    className?: string;
    /** Ask the record for its thumbnail before the original; `false` serves the blob as stored. */
    thumbnail?: boolean;
    /**
     * Which stored variant to show, when the record has one — `thumb` by default.
     *
     * A variant is a blob of its own with its own key, so this is a name the record answers with and
     * not a size the browser asks for (`@@D-844`). An unknown name falls back to the original, which
     * is what makes a page that asks for `crop` work against a photograph stored without one.
     */
    variant?: string;
    /** The method that answers a record; a deployment may point this at its own. */
    infoMethod?: string;
    /** Where the serving route is mounted. */
    basePath?: IAssetOptions['basePath'];
    /** A test id, so a page test can find the element it rendered. */
    testId?: string;
}
export declare function BlobImage({ value, name, size, shape, fit, alt, className, thumbnail, variant, infoMethod, basePath, testId, }: IBlobImageProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=BlobImage.d.ts.map