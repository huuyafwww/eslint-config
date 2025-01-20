import { define } from '@praha/eslint-config-definer';

import { common } from './dist/index.mjs';
import { node } from '../eslint-config-node/dist/index.mjs';

import type { Linter } from 'eslint';

const config = define([
  common,
  node,
]);

export default config({
  tsconfigPath: './tsconfig.json',
}) satisfies Linter.Config[];
