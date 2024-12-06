import eslintPluginJs from '@eslint/js';
import eslintPluginStylistic from '@stylistic/eslint-plugin';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';

export const javascriptConfigurator: Configurator = () => {
  return [
    eslintPluginJs.configs.recommended,
    {
      files,
      plugins: {
        '@stylistic': eslintPluginStylistic,
      },
      rules: {
        ...eslintPluginStylistic.configs.customize({
          semi: true,
        }).rules,
        'yoda': 'off',
        'object-curly-spacing': 'off',
        'unused-imports/no-unused-imports': 'error',
        'no-extra-boolean-cast': 'off',
      },
    },
  ];
};
