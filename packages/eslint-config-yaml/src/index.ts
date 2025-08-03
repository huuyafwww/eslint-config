import { define } from '@praha/eslint-config-definer';

import { yamlConfigurator } from './configurators/yaml.configurator';

export const yaml: ReturnType<typeof define> = define([
  yamlConfigurator,
]);
