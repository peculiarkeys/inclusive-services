const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('.jpg')) {
        content = content.replace(/\.jpg/g, '_compressed.webp');
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${path.basename(fullPath)}`);
      }
    }
  }
}

processDir('/Users/mac/Desktop/Inclusive Services/src/app');
