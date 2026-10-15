import { ICardConfig, IEnrichedFieldSchema } from '@feasibleone/blong';
import { ReactNode } from '../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { LayoutConfig } from '../hooks/useLayout.js';
export type DesignElementType = 'card' | 'field' | 'deck' | 'widget';
export interface IDesignElement {
    id: string;
    type: DesignElementType;
    label?: string;
}
export interface ILayoutEditorConfig {
    cards: Record<string, ICardConfig>;
    layouts: Record<string, LayoutConfig>;
    /** Per-field schema overrides (title, widget.type, readOnly, required, etc.) */
    schema?: Record<string, Partial<IEnrichedFieldSchema>>;
}
export interface IHistoryEntry {
    config: ILayoutEditorConfig;
    description: string;
}
export interface IDesignModeContextValue {
    active: boolean;
    selected: IDesignElement | null;
    select: (element: IDesignElement | null) => void;
    config: ILayoutEditorConfig;
    updateConfig: (patch: Partial<ILayoutEditorConfig>) => void;
    permission: string;
    /** Undo / redo */
    canUndo: boolean;
    canRedo: boolean;
    undo: () => void;
    redo: () => void;
    pushHistory: (description: string) => void;
    /** Saving */
    saving: boolean;
    saveConfig: () => Promise<void>;
}
export declare const DesignModeContext: import('../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react').Context<IDesignModeContextValue | null>;
export declare function useDesignModeContext(): IDesignModeContextValue;
export interface IDesignModeProviderProps {
    active: boolean;
    permission?: string;
    initialConfig: ILayoutEditorConfig;
    onSave?: (config: ILayoutEditorConfig) => Promise<void>;
    children: ReactNode;
}
export declare function DesignModeProvider({ active, permission, initialConfig, onSave, children, }: IDesignModeProviderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DesignModeContext.d.ts.map