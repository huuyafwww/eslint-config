import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';

export const importConfigurator: Configurator = () => {
  return [
    {
      plugins: {},
      rules: {
        'import-x/order': ['error', {
          'groups': ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],

          'pathGroups': [{
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          }, {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          }],

          'newlines-between': 'always',
          'pathGroupsExcludedImportTypes': [
            'builtin',
            'type',
          ],

          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
        }],
      },
      files,
    },
  ];
};
