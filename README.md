# @huuyafwww/eslint-config


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

This repository is a detailed package of ESLint rules for me.


## packages

|Name|Include rule|Package|
|---|---|---|
|[`@huuyafwww/eslint-config-browser`](packages/eslint-config-browser)|Browser|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-browser.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-browser)|
|[`@huuyafwww/eslint-config-common`](packages/eslint-config-common)|Ignore setting|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-common.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-common)|
|[`@huuyafwww/eslint-config-javascript`](packages/eslint-config-javascript)|JavaScript, import in ESM|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-javascript.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-javascript)|
|[`@huuyafwww/eslint-config-next`](packages/eslint-config-next)|Next.js|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-next.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-next)|
|[`@huuyafwww/eslint-config-node`](packages/eslint-config-node)|Node.js|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-node.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-node)|
|[`@huuyafwww/eslint-config-react`](packages/eslint-config-react)|React|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-react.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-react)|
|[`@huuyafwww/eslint-config-storybook`](packages/eslint-config-storybook)|Storybook|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-storybook.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-storybook)|
|[`@huuyafwww/eslint-config-typescript`](packages/eslint-config-typescript)|Typescript, import in ESM|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-typescript.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-typescript)|
|[`@huuyafwww/eslint-config-yaml`](packages/eslint-config-yaml)|Yaml|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-yaml.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-yaml)|


## Features

All packages support Flat Config 🚀

However, legacy Config is not supported 😀

## Usage

### Require

|Name|Version|
|---|---|
|eslint|^9.32.0|
|jiti|^2.5.1|

<details>

<summary>Node.js</summary>

### Installation

```sh
pnpm add -D @huuyafwww/eslint-config-common @huuyafwww/eslint-config-javascript @huuyafwww/eslint-config-typescript @huuyafwww/eslint-config-node @praha/eslint-config-definer
```

### eslint.config.ts

```typescript
import { common } from '@huuyafwww/eslint-config-common';
import { javascript } from '@huuyafwww/eslint-config-javascript';
import { node } from '@huuyafwww/eslint-config-node';
import { typescript } from '@huuyafwww/eslint-config-typescript';
import { define } from '@praha/eslint-config-definer';

import type { Linter } from 'eslint';

const config = define([
  common,
  javascript,
  typescript,
  node,
]);

export default config({
  tsconfigPath: './tsconfig.json',
}) satisfies Linter.Config[];
```

</details>

<details>

<summary>Next.js</summary>

### Installation

```sh
pnpm add -D @huuyafwww/eslint-config-common @huuyafwww/eslint-config-javascript @huuyafwww/eslint-config-typescript @huuyafwww/eslint-config-browser @huuyafwww/eslint-config-react @huuyafwww/eslint-config-next @praha/eslint-config-definer

# Optional
pnpm add -D @huuyafwww/eslint-config-storybook
```

### eslint.config.ts

```typescript
import { browser } from '@huuyafwww/eslint-config-browser';
import { common } from '@huuyafwww/eslint-config-common';
import { javascript } from '@huuyafwww/eslint-config-javascript';
import { next } from '@huuyafwww/eslint-config-next';
import { react } from '@huuyafwww/eslint-config-react';
import { storybook } from '@huuyafwww/eslint-config-storybook';
import { typescript } from '@huuyafwww/eslint-config-typescript';
import { define } from '@praha/eslint-config-definer';

import type { Linter } from 'eslint';

const config = define([
  common,
  javascript,
  typescript,
  browser,
  react,
  next,
  storybook, // Optional
]);

export default config({
  tsconfigPath: './tsconfig.json',
}) satisfies Linter.Config[];
```

</details>

<details>

<summary>Yaml</summary>

### Installation

```sh
pnpm add -D @huuyafwww/eslint-config-yaml @praha/eslint-config-definer
```

### eslint.config.ts

```typescript
import { yaml } from '@huuyafwww/eslint-config-yaml';
import { define } from '@praha/eslint-config-definer';

import type { Linter } from 'eslint';

const config = define([
  yaml,
]);

export default config({}) satisfies Linter.Config[];
```

</details>

## License

[MIT](https://github.com/huuyafwww/eslint-config/blob/main/LICENSE)
