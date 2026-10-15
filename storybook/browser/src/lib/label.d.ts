/** Simple utility to convert camelCase object names to title case (Camel Case) for default card titles.
 *  It also strips common prefixes and suffixes, e.g. fieldId -> Field, isActive → Active, itemType → Type, entityName → Name.
 *  Stripping happens after splitting camelCase, so e.g. userId becomes User Id → User and solid becomes Solid (not Sol).
 */
export default function label<T>(title: T, name: T): T | string;
//# sourceMappingURL=label.d.ts.map