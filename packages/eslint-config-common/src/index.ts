import { define } from '@praha/eslint-config-definer';

import { ignoreConfigurator } from './configurators/ignore-configurator';
import { importConfigurator } from './configurators/import.configurator';
import { javascriptConfigurator } from './configurators/javascript.configurator';
import { typescriptConfigurator } from './configurators/typescript.configurator';

export const common: ReturnType<typeof define> = define([
  ignoreConfigurator,
  javascriptConfigurator,
  typescriptConfigurator,
  importConfigurator,
]);
