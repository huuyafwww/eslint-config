import { common } from '@huuyafwww/eslint-config-common';
import { define } from '@praha/eslint-config-definer';

import { node } from './dist/index.mjs';

import type { Linter } from 'eslint';

const config = define([
  common,
  node,
]);

export default config({
  tsconfigPath: './tsconfig.json',
}) satisfies Linter.Config[];
