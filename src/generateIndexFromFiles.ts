import path from 'path';
import fs from 'fs';

import { getFileList, isFile } from './utils';

function generateIndexFromFiles(srcFolder: string): string {
  const fileList = getFileList(srcFolder);
  const files = fileList
    .map(f => path.join(srcFolder, f))
    .filter(isFile)
    .filter(filepath => {
      const filename = path.basename(filepath);
      return filename !== 'index.ts' && filename !== 'index.tsx';
    });

  const indexContentArr = files.map((filePath: string) => {
    const filename = path.basename(filePath);
    const isTsxExtension = filename.includes('.tsx');
    const name = filename.split(isTsxExtension ? '.tsx' : '.ts')[0];

    const fileContent = fs.readFileSync(filePath, 'utf8');

    const hasExportDefault = fileContent.includes('export default');

    return hasExportDefault
      ? `export { default as ${name} } from './${name}';\n`
      : `export * as ${name} from './${name}';\n`;
  });

  return indexContentArr.join('');
}

export default generateIndexFromFiles;
