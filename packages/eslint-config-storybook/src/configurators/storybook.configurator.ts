import storybook from 'eslint-plugin-storybook';

import type { Configurator } from '@praha/eslint-config-definer';
import type { Linter } from 'eslint';

export const storybookConfigurator: Configurator = () => {
  return [
    ...storybook.configs['flat/recommended'] as unknown as Linter.Config[],
  ];
};
