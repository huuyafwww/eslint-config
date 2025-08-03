import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';

export const importConfigurator: Configurator = () => {
  return [
    {
      files,
      plugins: {
        'unused-imports': eslintPluginUnusedImports,
      },
      rules: {
        'unused-imports/no-unused-imports': 'error',
      },
    },
  ];
};
