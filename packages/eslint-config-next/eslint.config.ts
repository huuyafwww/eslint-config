import { common } from '@huuyafwww/eslint-config-common';
import { node } from '@huuyafwww/eslint-config-node';
import { define } from '@praha/eslint-config-definer';

import type { Linter } from 'eslint';

const config = define([
  common,
  node,
]);

export default config({
  tsconfigPath: './tsconfig.json',
}) satisfies Linter.Config[];
