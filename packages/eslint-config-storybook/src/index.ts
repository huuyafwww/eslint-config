import { define } from '@praha/eslint-config-definer';

import { storybookConfigurator } from './configurators/storybook.configurator';

export const storybook = define([
  storybookConfigurator,
]);
