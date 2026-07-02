import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (!dirPath.includes('node_modules') && !dirPath.includes('.git') && !dirPath.includes('.gemini') && !dirPath.includes('dist')) {
                walkDir(dirPath, callback);
            }
        } else {
            callback(path.join(dir, f));
        }
    });
}

walkDir('.', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/font-bold/g, 'font-semibold')
            .replace(/font-extrabold/g, 'font-semibold')
            .replace(/font-black/g, 'font-semibold');
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Removed bold fonts from', filePath);
        }
    }
});
