const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..', 'src');

const replaceRules = [
  { regex: /#348B93/gi, replacement: '#62B9AB' },
  { regex: /#1C3234/gi, replacement: '#074E80' },
];

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;
      replaceRules.forEach(rule => {
        newContent = newContent.replace(rule.regex, rule.replacement);
      });
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  });
}

walkDir(directoryPath);
console.log('Color replacement complete.');
