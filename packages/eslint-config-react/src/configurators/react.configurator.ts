import eslintPluginStylisticJs from '@stylistic/eslint-plugin-js';
import eslintPluginReact from 'eslint-plugin-react';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';
import type { Linter } from 'eslint';
import type { ReactFlatConfig } from 'eslint-plugin-react';

export const reactConfigurator: Configurator = () => {
  return [
    (eslintPluginReact.configs.flat as Record<string, ReactFlatConfig>)['recommended'] as Linter.Config,
    (eslintPluginReact.configs.flat as Record<string, ReactFlatConfig>)['jsx-runtime'] as Linter.Config,
    {
      plugins: {
        '@stylistic/js': eslintPluginStylisticJs,
      },
      rules: {
        '@stylistic/js/jsx-quotes': ['error', 'prefer-double'],

        'react/jsx-no-bind': ['error', {
          ignoreDOMComponents: false,
          ignoreRefs: false,
          allowArrowFunctions: false,
          allowFunctions: false,
          allowBind: false,
        }],
        'react/jsx-max-props-per-line': ['error', {
          maximum: {
            single: 4,
            multi: 1,
          },
        }],
        'react/function-component-definition': ['error', {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        }],
        'react/destructuring-assignment': 'error',
        'react/hook-use-state': 'error',
        'react/jsx-boolean-value': 'error',
        'react/jsx-fragments': 'error',
        'react/jsx-curly-brace-presence': 'error',
        'react/jsx-no-useless-fragment': ['error', {
          allowExpressions: true,
        }],
        'react/jsx-sort-props': ['error', {
          shorthandLast: true,
          callbacksLast: true,
          multiline: 'ignore',
          ignoreCase: false,
          noSortAlphabetically: true,
          reservedFirst: ['key', 'ref'],
        }],
        'react/self-closing-comp': 'error',
        'react/jsx-pascal-case': 'error',
        'react/no-danger': 'error',
        'react/prop-types': 'off',

      },
      files,
    },
  ];
};
