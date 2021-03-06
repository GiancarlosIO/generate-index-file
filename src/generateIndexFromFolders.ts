import fs from 'fs';
import path from 'path';

import { getFileList, isDirectory, folderIncludesIndexFile } from './utils';

export function generateIndexFromFolders(srcFolder: string): string {
  const fileList = getFileList(srcFolder);
  const folders = fileList
    .map(f => path.join(srcFolder, f))
    .filter(isDirectory)
    .filter(folderIncludesIndexFile);

  const indexContentArr = folders.map((folderPath: string) => {
    const files = fs.readdirSync(folderPath);

    const currentFolder = path.basename(folderPath);
    // the folder can have an index.ts or an index.tsx
    const hasIndexWithTsExtension = files.includes('index.ts');
    const fileContent = fs.readFileSync(
      path.join(
        srcFolder,
        `${currentFolder}/index.${hasIndexWithTsExtension ? 'ts' : 'tsx'}`
      ),
      'utf8'
    );

    const hasExportDefault = fileContent.includes('export { default } from');

    return hasExportDefault
      ? `export { default as ${currentFolder} } from './${currentFolder}';\n`
      : `export * as ${currentFolder} from './${currentFolder}';\n`;
  });

  return indexContentArr.join('');
}

export default generateIndexFromFolders;
