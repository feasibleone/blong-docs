export type CommanderPane = 'tree' | 'table' | 'viewer';
export interface ICommanderKeyHandlers {
    /** Enter pressed on the active pane. */
    onEnter?: () => void;
    /** Escape pressed (clear search / close help). */
    onEscape?: () => void;
    /** Backspace pressed (go up to parent / close the viewer). */
    onBackspace?: () => void;
    /** F5 pressed (refresh current branch). */
    onRefresh?: () => void;
    /** F2 pressed (open leaf). */
    onOpen?: () => void;
    /** Ctrl/Cmd+F pressed (focus search). */
    onSearch?: () => void;
    /** `?` pressed (toggle help overlay). */
    onHelp?: () => void;
}
export declare function useCommanderNav(handlers: ICommanderKeyHandlers): {
    activePane: CommanderPane;
    setActivePane: import('../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react').Dispatch<import('../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react').SetStateAction<CommanderPane>>;
    movePane: (dir: 1 | -1) => void;
};
//# sourceMappingURL=useCommanderNav.d.ts.map