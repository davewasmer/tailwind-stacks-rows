<h1 align="center">⇣ tailwind-stacks-rows ⇢</h1>

Simple Tailwind shortcut utilities to define "stacks" and "rows", i.e.:

```html
<div class="stack-4"></div>
```

is equivalent to ...

```html
<div class="flex flex-col gap-4"></div>
```

## Usage

```sh
$ npm install -D tailwind-stacks-rows
$ pnpm add -D tailwind-stacks-rows
```

In your `tailwind.config.js` file, add the plugin:

```js
const config = {
  // ...
  plugins: [
    require('tailwind-stacks-rows'),
```
