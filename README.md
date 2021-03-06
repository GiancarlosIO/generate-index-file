# create-index-ts

Automatic creation of index.ts file with export-values from a list of files or folders


It will generate something like this for folders:
```
--src/
-----a/
-----b/
-----c/
```
Index.ts:
```ts
  export { default as a } from './a';
  export { default as b } from './b';
  export * as c from './c' // if the c folder doesn't have a index.ts with a default export.
```
And this for files:
```
--src/
-----a.ts
-----b.tsx
-----c.ts
```
```ts
// the generated
export { default as a } from './a';
export { default as b } from './b';
export { default as c } from './c';
```

**By default, it will ignore folders without index.(ts|tsx).**

### Install
npm:
```bash
npm install create-index-ts
```
Yarn
```bash
yarn add create-index-ts
```
### Usage
npm
```bash
npx create-index-ts ./
npx create-index-ts ./src --from=folders
npx create-index-ts ./icons --from=filers
```
yarn
```bash
yarn create-index-ts ./
yarn create-index-ts ./src --from=folders
yarn create-index-ts ./icons --from=filers
```



### Options
```
  --help
  --version  Show the version package
  --from     Specify if you want to use folders or files to generate the index file. Default to folders
```