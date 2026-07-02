import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (!dirPath.includes('node_modules') && !dirPath.includes('.git') && !dirPath.includes('.gemini')) {
                walkDir(dirPath, callback);
            }
        } else {
            callback(path.join(dir, f));
        }
    });
}

walkDir('.', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.html') || filePath.endsWith('.md')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/Obembe Construction/g, 'Inclusive Social Services')
            .replace(/Obembe/g, 'Inclusive Social Services')
            .replace(/obembe_projects/g, 'projects')
            .replace(/obembeconstruction\.com/g, 'inclusivesocialservices.com')
            .replace(/info@obembeconstruction\.com/g, 'info@inclusivesocialservices.com')
            .replace(/figma:asset\//g, 'local:asset/')
            .replace(/Figma Make/g, 'Inclusive Social Services')
            .replace(/@figma\/my-make-file/g, 'inclusive-social-services');
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated', filePath);
        }
    }
});
