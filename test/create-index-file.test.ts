import path from 'path';
import {promisify}  from 'util'

import rimraf from 'rimraf';

import generateIndexFromFolders from '../src/generateIndexFromFolders'
import generateIndexFromFiles from '../src/generateIndexFromFiles'

const rmraf = promisify(rimraf)

async function clear() {
  await rmraf(path.join(__dirname, './package-test/index.ts'))
}

describe('blah', () => {
  afterAll(() => {
    return clear()
  })

  it('Generates the index file content from Folders', async () => {
    const given = generateIndexFromFolders(path.join(__dirname, './package-test'))
    const result = `export { default as a } from './a';
export { default as b } from './b';
export * as c from './c';
`
    expect(given).toEqual(result);
  });

  it('Generates the index file content from Files', () => {
    const given = generateIndexFromFiles(path.join(__dirname, './package-test'))
    const result = `export { default as a } from './a';
export { default as b } from './b';
export { default as c } from './c';
`
    expect(given).toEqual(result)
  })
});
