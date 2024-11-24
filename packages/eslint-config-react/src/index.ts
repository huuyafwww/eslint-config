import { define } from '@praha/eslint-config-definer';

import { importConfigurator } from './configurators/import.configurator';
import { reactHooksConfigurator } from './configurators/react-hooks.configurator';
import { reactConfigurator } from './configurators/react.configurator';

export const react = define([
  reactConfigurator,
  reactHooksConfigurator,
  importConfigurator,
]);
