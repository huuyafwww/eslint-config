import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';

export type importConfiguratorOptions = {
  tsconfigPath: string;
};

export const importConfigurator: Configurator<importConfiguratorOptions> = (options) => {
  return [
    {
      name: 'import-x',
      files,
      ...eslintPluginImportX.flatConfigs.typescript,
    },
    {
      files,
      settings: {
        'import-x/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts', '.js', '.mjs'],
        },
        'import-x/resolver-next': [
          createTypeScriptImportResolver({
            project: options.tsconfigPath,
          }),
        ],
      },
      plugins: {
        'unused-imports': eslintPluginUnusedImports,
      },
      rules: {
        'unused-imports/no-unused-imports': 'error',
        'import-x/newline-after-import': ['error', {
          count: 1,
        }],
        'import-x/order': ['error', {
          'groups': [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'object',
            'index',
            'type',
          ],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
          'pathGroupsExcludedImportTypes': ['builtin', 'object', 'type'],
        }],
      },
    },
  ];
};
