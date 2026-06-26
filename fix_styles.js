import fs from 'fs';
import path from 'path';

const dir = './src/app/components';

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Replace bold fontWeights in inline styles (just in case any were missed)
      content = content.replace(/fontWeight:\s*600/g, 'fontWeight: 400');
      content = content.replace(/fontWeight:\s*700/g, 'fontWeight: 400');
      content = content.replace(/fontWeight:\s*800/g, 'fontWeight: 400');
      content = content.replace(/font-semibold/g, 'font-medium');
      content = content.replace(/font-bold/g, 'font-medium');
      
      // Remove all blue shades
      content = content.replace(/#0d1b2a/g, '#111111');
      content = content.replace(/#0a1628/g, '#1a1a1a');
      content = content.replace(/#e6f2fe/g, '#f9f9f9');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(dir);
