// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ...eslintPluginNext.configs.recommended.rules as Linter.RulesRecord,

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
