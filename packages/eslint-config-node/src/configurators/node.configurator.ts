import globals from 'globals';

import type { Configurator } from '@praha/eslint-config-definer';

export const nodeConfigurator: Configurator = () => {
  return [
    {
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
      files: [
        '**/*.js',
        '**/*.ts',
      ],
    },
  ];
};
