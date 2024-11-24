import { define } from '@praha/eslint-config-definer';

import { nodeConfigurator } from './configurators/node.configurator';

export const node = define([
  nodeConfigurator,
]);
