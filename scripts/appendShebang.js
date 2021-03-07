// https://github.com/formium/tsdx/issues/793
// https://github.com/formium/tsdx/issues/338
const path = require('path');
const fs = require('fs');

const indexPath = path.join(__dirname, '../dist/index.js');

const content = fs.readFileSync(indexPath);
fs.writeFile(indexPath, `#!/usr/bin/env node\n${content}`, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('> Successfully to add the Shebang to the dist/index.js file.');
});
