import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';

export const javascriptConfigurator: Configurator = () => {
  return [
    js.configs.recommended,
    {
      files,
      plugins: {
        '@stylistic': stylistic,
      },
      rules: {
        ...stylistic.configs.customize({
          semi: true,
        }).rules,
        'yoda': 'off',
        'object-curly-spacing': 'off',
        'unused-imports/no-unused-imports': 'error',
      },
    },
  ];
};
