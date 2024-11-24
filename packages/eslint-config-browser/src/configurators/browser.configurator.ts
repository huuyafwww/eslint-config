import globals from 'globals';

import type { Configurator } from '@praha/eslint-config-definer';

export const browserConfigurator: Configurator = () => {
  return [
    {
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
      files: [
        '**/*.js',
        '**/*.jsx',
        '**/*.ts',
        '**/*.tsx',
      ],
    },
  ];
};
