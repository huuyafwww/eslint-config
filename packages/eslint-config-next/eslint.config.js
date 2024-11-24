import { common } from '@huuyafwww/eslint-config-common';
import { node } from '@huuyafwww/eslint-config-node';
import { define } from '@praha/eslint-config-definer';

const config = define([
  common,
  node,
]);

export default config({
  tsconfigPath: './tsconfig.json',
});
