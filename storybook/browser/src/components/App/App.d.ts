import { IHandlerProxy, ILogger } from '@feasibleone/blong';
import { default as React } from '../../../../../common/temp/node_modules/.pnpm/react@19.2.4/node_modules/react';
import { IBlongPortalConfig } from '../../context/BlongContext.js';
import { IPortalProps } from '../Portal/Portal.js';
import { IThemeConfig } from '../Theme/Theme.js';
export interface IAppProps extends IPortalProps {
    /**
     * Handler proxy injected by the browser platform.
     * config.portal may contain schemaUrl, baseUrl, debug, loginRoute.
     */
    handlerProxy: IHandlerProxy<{
        portal?: IBlongPortalConfig;
    } & Record<string, unknown>>;
    /** Logger instance */
    log?: ILogger;
    /** PrimeReact theme configuration (defaults to compact / dark palette) */
    theme?: IThemeConfig;
    /**
     * When provided, renders in place of the Portal shell.
     * Useful for Storybook decorators and unit tests that need provider
     * context (BlongProvider + Theme) without the full portal UI.
     */
    children?: React.ReactNode;
    /**
     * Optional component rendered instead of the portal when the user is not
     * authenticated (i.e. `auth.isAuthenticated` is false).
     * The component may call useBlong() to access the handler proxy.
     */
    loginComponent?: React.ComponentType;
}
export declare function App({ handlerProxy, theme, children, loginComponent, log, ...portalProps }: IAppProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=App.d.ts.map