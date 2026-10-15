import { StoryObj } from '@storybook/react-vite';
/**
 * Create a Storybook story that renders a model page.
 *
 * @param componentName - The model component name, e.g. `'marine.coral.browse'`
 * @param idOrParams    - Record ID (for `.open`) or initial params object
 * @param extraParams   - Additional params merged on top (highest precedence)
 */
export declare function page(componentName: string, idOrParams?: number | Record<string, unknown>, extraParams?: Record<string, unknown>): StoryObj;
/**
 * Create a Storybook story that renders the full portal shell.
 *
 * Useful for full end-to-end portal stories that exercise navigation,
 * tabs, and multiple realm pages together.
 */
export declare function portal(): StoryObj;
//# sourceMappingURL=storyHelper.d.ts.map