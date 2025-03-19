import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';
import type { ESLint } from 'eslint';

export const reactHooksConfigurator: Configurator = () => {
  return [
    {
      plugins: {
        'react-hooks': eslintPluginReactHooks as ESLint.Plugin,
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
      },
      files,
    },
  ];
};
