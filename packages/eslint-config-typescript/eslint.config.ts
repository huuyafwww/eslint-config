import { common } from '@huuyafwww/eslint-config-common';
import { javascript } from '@huuyafwww/eslint-config-javascript';
import { define } from '@praha/eslint-config-definer';

import { typescript } from './dist/index.mjs';
import { node } from '../eslint-config-node/dist/index.mjs';

import type { Linter } from 'eslint';

const config = define([
  common,
  javascript,
  typescript,
  node,
]);

export default config({
  tsconfigPath: './tsconfig.json',
}) satisfies Linter.Config[];
