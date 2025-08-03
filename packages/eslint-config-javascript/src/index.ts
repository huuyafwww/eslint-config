import { define } from '@praha/eslint-config-definer';

import { importConfigurator } from './configurators/import.configurator';
import { javascriptConfigurator } from './configurators/javascript.configurator';

export const javascript: ReturnType<typeof define> = define([
  javascriptConfigurator,
  importConfigurator,
]);
