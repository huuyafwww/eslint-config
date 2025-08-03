import { define } from '@praha/eslint-config-definer';

import { ignoreConfigurator } from './configurators/ignore-configurator';

export const common: ReturnType<typeof define> = define([
  ignoreConfigurator,
]);
