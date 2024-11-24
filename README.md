
# @huuyafwww/eslint-config


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

This repository is a detailed package of ESLint rules for me.


## packages

|Name|Include rule|
|---|---|
|@huuyafwww/eslint-config-browser|Browser|
|@huuyafwww/eslint-config-common|JavaScript, TypeScript, import in ESM|
|@huuyafwww/eslint-config-next|Next.js|
|@huuyafwww/eslint-config-node|Node.js|
|@huuyafwww/eslint-config-react|React|
|@huuyafwww/eslint-config-storybook|Storybook|


## Features

All packages support Flat Config 🚀

However, legacy Config is not supported  😀

## Usage

<details>

<summary> Node.js </summary>

### Installation

```
pnpm add -D @huuyafwww/eslint-config-common @huuyafwww/eslint-config-node
```

### eslint.config.js

```javascript
import { define } from '@praha/eslint-config-definer';

import { common } from './dist/index.mjs';
import { node } from '../eslint-config-node/dist/index.mjs';

const config = define([
  common,
  node,
]);

export default config({
  tsconfigPath: './tsconfig.json',
});

```

</details>

<details>

<summary> Next.js </summary>

### Installation

```
pnpm add -D @huuyafwww/eslint-config-common @huuyafwww/eslint-config-browser @huuyafwww/eslint-config-react @huuyafwww/eslint-config-next

# Optional
pnpm add -D @huuyafwww/eslint-config-storybook
```

### eslint.config.js

```javascript
import { browser } from '@huuyafwww/eslint-config-browser';
import { common } from '@huuyafwww/eslint-config-common';
import { next } from '@huuyafwww/eslint-config-next';
import { react } from '@huuyafwww/eslint-config-react';
import { storybook } from '@huuyafwww/eslint-config-storybook';
import { define } from '@praha/eslint-config-definer';

const config = define([
  common,
  browser,
  react,
  next,
  storybook, // Optional
]);

export default config({
  tsconfigPath: './tsconfig.json',
});
```

</details>

## License

[MIT](https://github.com/huuyafwww/eslint-config/blob/main/LICENSE)
