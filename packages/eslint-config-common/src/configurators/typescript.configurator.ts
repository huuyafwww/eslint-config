import stylisticTs from '@stylistic/eslint-plugin-ts';
// import parser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';
import type { Linter } from 'eslint';

export type typescriptConfiguratorOptions = {
  tsconfigPath: string;
};

export const typescriptConfigurator: Configurator<typescriptConfiguratorOptions> = (options) => {
  return [
    ...tseslint.configs.recommendedTypeChecked.map(config => ({
      files,
      ...config,
    })) as Linter.Config[],
    {
      files,
      languageOptions: {
        parserOptions: {
          // parser,
          project: options.tsconfigPath,
          tsconfigRootDir: process.cwd(),
        },
      },
      plugins: {
        '@stylistic/ts': stylisticTs,
      },
      rules: {
        '@typescript-eslint/consistent-type-imports': ['error', {
          prefer: 'type-imports',
        }],
        '@typescript-eslint/no-duplicate-type-constituents': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-deprecated': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/naming-convention': ['error', {
          selector: 'variableLike',
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          filter: '^(?!__)',
        }],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/triple-slash-reference': ['error', {
          types: 'prefer-import',
        }],
        '@typescript-eslint/no-misused-promises': ['error', {
          checksVoidReturn: {
            attributes: false,
          },
        }],
        '@stylistic/ts/semi': ['error', 'always'],
        '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/ts/space-before-function-paren': ['error', {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        }],
        '@stylistic/ts/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },

          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        }],
      },
    },
  ];
};
