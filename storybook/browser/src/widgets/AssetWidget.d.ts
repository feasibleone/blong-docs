import { IWidgetProps } from '@feasibleone/blong';
/** The `x-widget` config a field carries to become an asset. */
export interface IAssetWidgetConfig {
    /** The namespace the consuming realm claimed; the store refuses one it does not serve. */
    namespace?: string;
    /** The scopes the blob is written with — who may read it back. */
    scopes?: string[];
    /** What the file picker offers, e.g. `image/*`. */
    accept?: string;
    /** Sibling fields this field fills from the record it stored, and which piece each receives. */
    fill?: Record<string, 'contentType' | 'size' | 'digest' | 'extension' | 'filename'>;
    /** Which stored variant the preview shows — `thumb` when omitted (`@@D-844`). */
    variant?: string;
}
/**
 * `AssetWidget` — a field that holds a stored file, not a copy of one.
 *
 * The three calls are the whole upload (@@D-840): `blob.upload.prepare` reserves a key and answers the
 * route the bytes go to, the browser `PUT`s the file to that route — where the bytes never become a
 * string and a byte limit is enforced as they arrive — and `blob.upload.commit` promotes the record and
 * answers the `blob://` reference the field then holds.
 *
 * A form somebody abandoned is why the widget discards: a key that was prepared and never kept is a blob
 * nobody references, and it would sit in the store until the sweep found it. So an unmount with no value
 * left discards what it reserved, and a failed upload discards its own key rather than leaving it behind
 * (@@D-840).
 */
export declare function AssetWidget({ id, name, schema, value, onChange, onBlur, error, readOnly, disabled, onFill, }: IWidgetProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AssetWidget.d.ts.map