import { IPortalConfig, ITab } from '../types/portal.js';
export interface IUsePortalResult {
    tabs: ITab[];
    activeTabId: string | null;
    activeTab: ITab | undefined;
    portalConfig: IPortalConfig | null;
    openTab: (tab: ITab) => void;
    closeTab: (id: string) => void;
    setActiveTab: (id: string) => void;
    setTabDirty: (id: string, dirty: boolean) => void;
}
export declare function usePortal(): IUsePortalResult;
//# sourceMappingURL=usePortal.d.ts.map