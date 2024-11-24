import { define } from '@praha/eslint-config-definer';

import { common } from './dist/index.mjs';
import { node } from '../eslint-config-node/dist/index.mjs';

const config = define([
  common,
  node,
]);

export default config({
  tsconfigPath: './tsconfig.json',
});
