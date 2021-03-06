#!/usr/bin/env node
import path from 'path'
import fs from 'fs';

import chalk from 'chalk'
import yargs from 'yargs'

import generateFromFile  from './generateIndexFromFiles'
import generateFromFolder from './generateIndexFromFolders'

export const generateIndexFromFiles = generateFromFile;
export const generateIndexFromFolders = generateFromFolder

export function runCli() {
  const argv = yargs(process.argv.slice(2))
    .option('from', {
      alias: 'from',
      demandOption: false,
      default: 'folder',
      describe: 'specify if you want to use folders or files to generate the index file.',
      type: 'string',
      choices: ['files', 'folders'],
    })
    .argv
    const folder = argv._[0] as string || './';
    const sourceFolder = path.join(process.cwd(), folder)
    const fromFiles = argv.from === 'files'

    const indexContentFile = fromFiles ?
      generateIndexFromFiles(sourceFolder) :
      generateIndexFromFolders(sourceFolder);

    fs.writeFile(path.join(sourceFolder, 'index.ts'), indexContentFile, (err) => {
      if (err) {
        console.error(err)
      }

      console.log(chalk.green('\n> Successfully to build the index.ts file :)\n'))
    })

}

runCli()
