# @sleavely/eslint-config

My personal crutches and preferences for Javascript and Typescript.

## Usage

```sh
npm i --save-dev @sleavely/eslint-config
```

Regardless of you're using Javascript or Typescript you just have to extend `@sleavely`:

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@sleavely'],
}
```

However, **Typescript** projects need to ensure they use strict mode:

```jsonc
// tsconfig.json
{
  strict: true
}
```

## Rules

I rely on [`standard`](https://github.com/standard/eslint-config-standard) and [`standard-with-typescript`](https://github.com/standard/eslint-config-standard-with-typescript) to do a lot of the heavy lifting, but I've made a few amendments.

### JS

* `comma-dangle` - `always-multiline` makes for easier changes, code reviews, and merges
* `import/no-cycle` - prevents the most obvious cases of circular dependencies
* all of [`@sleavely/js-rules`](https://github.com/Sleavely/eslint-plugin-js-rules)

### TS

In addition to the JS rules, these apply:

* `@typescript-eslint/no-explicit-any` - Javascript goes in .js, not .ts
* ~~`@typescript-eslint/strict-boolean-expressions`~~ is turned off.
* all of [`@sleavely/ts-rules`](https://github.com/Sleavely/eslint-plugin-ts-rules)
