import { common } from '@huuyafwww/eslint-config-common';
import { define } from '@praha/eslint-config-definer';

import { node } from './dist/index.mjs';

const config = define([
  common,
  node,
]);

export default config({
  tsconfigPath: './tsconfig.json',
});
