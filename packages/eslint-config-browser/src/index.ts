import { define } from '@praha/eslint-config-definer';

import { browserConfigurator } from './configurators/browser.configurator';

export const browser = define([
  browserConfigurator,
]);
