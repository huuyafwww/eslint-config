import eslintPluginNext from '@next/eslint-plugin-next';

import type { Configurator } from '@praha/eslint-config-definer';
import type { ESLint, Linter } from 'eslint';

export const nextConfigurator: Configurator = () => {
  return [
    {
      plugins: {
        '@next/next': eslintPluginNext as ESLint.Plugin,
      },
      rules: {
        ...eslintPluginNext.configs.recommended.rules as Linter.RulesRecord,
        ...eslintPluginNext.configs['core-web-vitals'].rules as Linter.RulesRecord,
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
