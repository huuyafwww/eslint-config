import { define } from '@praha/eslint-config-definer';

import { nextConfigurator } from './configurators/next.configurator';

export const next: ReturnType<typeof define> = define([
  nextConfigurator,
]);
