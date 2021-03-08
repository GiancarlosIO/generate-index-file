# generate-index-file

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
npm install generate-index-file
```
Yarn
```bash
yarn add generate-index-file
```
### Usage
npm
```bash
npx generate-index-file ./
npx generate-index-file ./src --from=folders
npx generate-index-file ./icons --from=filers
```
yarn
```bash
yarn generate-index-file ./
yarn generate-index-file ./src --from=folders
yarn generate-index-file ./icons --from=files
```



### Options
```
  --help
  --version  Show the version package
  --from     Specify if you want to use folders or files to generate the index file. Default to folders
```