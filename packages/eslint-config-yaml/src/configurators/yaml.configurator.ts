import eslintPluginYml from 'eslint-plugin-yml';

import type { Configurator } from '@praha/eslint-config-definer';

export const yamlConfigurator: Configurator = () => {
  return [
    {
      ignores: [
        'pnpm-lock.yaml',
        '**/pnpm-lock.yaml',
      ],
    },
    ...eslintPluginYml.configs['flat/standard'],
    {
      rules: {
        'yml/block-mapping-colon-indicator-newline': 'error',
        'yml/vue-custom-block/no-parsing-error': 'error',
        'yml/no-empty-mapping-value': 'off',
      },
    },
  ];
};
