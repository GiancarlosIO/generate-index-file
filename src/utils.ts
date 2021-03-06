import path from 'path';
import fs from 'fs';

export const currentPath = process.cwd();
export const sourceFolder = path.join(currentPath, 'src');
export const indexFilePath = path.join(sourceFolder, 'index.ts');

export const getFileList = (src: string) => fs.readdirSync(src);

export const isDirectory = (filePath: string) =>
  fs.lstatSync(filePath).isDirectory();
export const isFile = (filePath: string) => fs.lstatSync(filePath).isFile();

export const folderIncludesIndexFile = (filePath: string) => {
  const files = fs.readdirSync(filePath);
  return files.includes('index.ts') || files.includes('index.tsx');
};
