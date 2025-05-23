# @huuyafwww/eslint-config


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

This repository is a detailed package of ESLint rules for me.


## packages

|Name|Include rule|Package|
|---|---|---|
|[`@huuyafwww/eslint-config-browser`](packages/eslint-config-browser)|Browser|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-browser.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-browser)|
|[`@huuyafwww/eslint-config-common`](packages/eslint-config-common)|JavaScript, TypeScript, import in ESM|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-common.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-common)|
|[`@huuyafwww/eslint-config-next`](packages/eslint-config-next)|Next.js|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-next.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-next)|
|[`@huuyafwww/eslint-config-node`](packages/eslint-config-node)|Node.js|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-node.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-node)|
|[`@huuyafwww/eslint-config-react`](packages/eslint-config-react)|React|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-react.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-react)|
|[`@huuyafwww/eslint-config-storybook`](packages/eslint-config-storybook)|Storybook|[![npm version](https://badge.fury.io/js/@huuyafwww%2Feslint-config-storybook.svg)](https://www.npmjs.com/package/@huuyafwww/eslint-config-storybook)|


## Features

All packages support Flat Config 🚀

However, legacy Config is not supported 😀

## Usage

### Require

|Name|Version|
|---|---|
|eslint|9.18.0|
|jiti|^2.4.2|

<details>

<summary>Node.js</summary>

### Installation

```sh
pnpm add -D @huuyafwww/eslint-config-common @huuyafwww/eslint-config-node @praha/eslint-config-definer
```

### eslint.config.ts

```typescript
import { common } from '@huuyafwww/eslint-config-common';
import { node } from '@huuyafwww/eslint-config-node';
import { define } from '@praha/eslint-config-definer';

import type { Linter } from 'eslint';

const config = define([
  common,
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
pnpm add -D @huuyafwww/eslint-config-common @huuyafwww/eslint-config-browser @huuyafwww/eslint-config-react @huuyafwww/eslint-config-next @praha/eslint-config-definer

# Optional
pnpm add -D @huuyafwww/eslint-config-storybook
```

### eslint.config.ts

```typescript
import { browser } from '@huuyafwww/eslint-config-browser';
import { common } from '@huuyafwww/eslint-config-common';
import { next } from '@huuyafwww/eslint-config-next';
import { react } from '@huuyafwww/eslint-config-react';
import { storybook } from '@huuyafwww/eslint-config-storybook';
import { define } from '@praha/eslint-config-definer';

import type { Linter } from 'eslint';

const config = define([
  common,
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

## License

[MIT](https://github.com/huuyafwww/eslint-config/blob/main/LICENSE)
