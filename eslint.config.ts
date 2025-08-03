import { yaml } from './packages/eslint-config-yaml/dist/index.mjs';
import { define } from '@praha/eslint-config-definer';

import type { Linter } from 'eslint';

const config = define([
  yaml,
]);

export default config({}) satisfies Linter.Config[];