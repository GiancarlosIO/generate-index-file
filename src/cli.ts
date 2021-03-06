// import fs from 'fs';

import yargs from 'yargs'

// import generateIndexFromFiles from './generateIndexFromFiles'
// import generateIndexFromFolders from './generateIndexFromFolders'

// import {
//   sourceFolder,
// } from './utils'

export function runCli() {
  const argv = yargs(process.argv.slice(2))
    .option('from', {
      alias: 'from',
      demandOption: false,
      default: 'folder',
      describe: 'specify if you want to use folders or files to generate the index file.',
      type: 'string',
      choices: ['files', 'folder'],
    })
    .argv

    const sourceFolder = argv._[0];

    console.log({ sourceFolder })

    console.log({ argv })

//   const content =
//   argvs[0] === '--from' && argvs[1] === 'files'
//     ? generateIndexFromFiles()
//     : generateIndexFromFolders();

// fs.writeFile(indexFilePath, content, err => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('> Successfully to generate the index file.');
// });

}

// export const mkdir = promisify(fs.mkdir)
// export const writeFile = promisify(fs.writeFile)
// export const readFile = promisify(fs.readFile);
// export const readdir = promisify(fs.readdir)

// export function generateIndexFromFolders(srcFolder: string) {
//   const fileList = getFileList(srcFolder);
//   const folders = fileList.filter(isDirectory).filter(folderIncludesIndexFile);

//   const indexContentArr = folders.map((currentFolder: string) => {
//     const files = fs.readdirSync(path.join(sourceFolder, currentFolder));

//     // the folder can have an index.ts or an index.tsx
//     const hasIndexWithTsExtension = files.includes('index.ts');
//     const fileContent = fs.readFileSync(
//       path.join(
//         sourceFolder,
//         `${currentFolder}/index.${hasIndexWithTsExtension ? 'ts' : 'tsx'}`,
//       ),
//       'utf8',
//     );

//     const hasExportDefault = fileContent.includes('export { default } from');

//     return hasExportDefault
//       ? `export { default as ${currentFolder} } from './${currentFolder}';\n`
//       : `export * as ${currentFolder} from './${currentFolder}';\n`;
//   });

//   return indexContentArr.join('');
// }

// export function generateIndexFromFiles(srcFolder: string) {
//   const fileList = getFileList(srcFolder);
//   const files = fileList
//     .filter(isFile)
//     .filter(f => f !== 'index.ts' && f !== 'index.tsx');

//   const indexContentArr = files.map((file: string) => {
//     const name = file.split('.tsx')[0];

//     return `export { default as ${name} } from './${name}';\n`;
//   });

//   return indexContentArr.join('');
// }

// const content =
//   argvs[0] === '--from' && argvs[1] === 'files'
//     ? generateIndexFromFiles()
//     : generateIndexFromFolders();

// fs.writeFile(indexFilePath, content, err => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('> Successfully to generate the index file.');
// });
