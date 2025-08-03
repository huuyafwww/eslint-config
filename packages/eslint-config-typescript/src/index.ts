import { define } from '@praha/eslint-config-definer';

import { importConfigurator } from './configurators/import.configurator';
import { typescriptConfigurator } from './configurators/typescript.configurator';

export const typescript: ReturnType<typeof define> = define([
  typescriptConfigurator,
  importConfigurator,
]);
