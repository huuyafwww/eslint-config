import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import eslintPluginImportX from 'eslint-plugin-import-x';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';
import type { ESLint } from 'eslint';

export type importConfiguratorOptions = {
  tsconfigPath: string;
};

export const importConfigurator: Configurator<importConfiguratorOptions> = (options) => {
  return [
    {
      files,
      settings: {
        'import-x/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts', '.jsx', '.cjs', '.mjs'],
        },
        'import-x/resolver-next': [
          createTypeScriptImportResolver({
            project: options.tsconfigPath,
          }),
        ],
        'import-x/extensions': ['.ts', '.tsx', '.cts', '.mts', '.jsx', '.cjs', '.mjs'],
        'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import-x/resolver': {
          typescript: true,
        },
      },
      plugins: {
        'import-x': eslintPluginImportX as unknown as ESLint.Plugin,
      },
      rules: {
        'import-x/named': 'off',
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
