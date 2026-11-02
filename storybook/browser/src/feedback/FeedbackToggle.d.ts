interface IShortcut {
    alt: boolean;
    ctrl: boolean;
    shift: boolean;
    key: string;
}
/** Parse `F2` / `ctrl+shift+F` / `Alt+f` into the parts a keydown carries. */
export declare function parseShortcut(shortcut: string): IShortcut;
/** Does this event match the shortcut? */
export declare function matchesShortcut(event: KeyboardEvent, shortcut: string): boolean;
export declare function FeedbackToggle(): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=FeedbackToggle.d.ts.map