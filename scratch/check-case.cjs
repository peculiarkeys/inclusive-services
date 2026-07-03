const fs = require('fs');
const path = require('path');

function checkFileCase(file) {
    let currentPath = path.resolve(file);
    const parsedPath = path.parse(currentPath);
    let pathsToCheck = [];

    while (currentPath !== parsedPath.root) {
        pathsToCheck.unshift({
            dir: path.dirname(currentPath),
            base: path.basename(currentPath)
        });
        currentPath = path.dirname(currentPath);
    }

    for (const { dir, base } of pathsToCheck) {
        if (!fs.existsSync(dir)) return false; // Parent doesn't exist
        const actualFiles = fs.readdirSync(dir);
        if (!actualFiles.includes(base)) {
            return {
                expected: base,
                actual: actualFiles.find(f => f.toLowerCase() === base.toLowerCase()),
                dir
            };
        }
    }
    return true; // Case matches perfectly
}
// Removed glob require
// Since we might not have glob installed, let's just do a manual recursion
function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
}

const srcDir = path.join(__dirname, '../src');

walk(srcDir, (err, files) => {
    if (err) throw err;
    const jsFiles = files.filter(f => /\.(tsx?|jsx?)$/.test(f));
    let foundIssues = false;
    
    jsFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        // Match import something from '...';
        const importRegex = /import\s+.*?from\s+['"](.*?)['"]/g;
        let match;
        while ((match = importRegex.exec(content)) !== null) {
            const importPath = match[1];
            if (importPath.startsWith('.')) {
                // Resolve it
                let resolved = path.resolve(path.dirname(file), importPath);
                // Handle missing extension
                if (!fs.existsSync(resolved)) {
                    if (fs.existsSync(resolved + '.ts')) resolved += '.ts';
                    else if (fs.existsSync(resolved + '.tsx')) resolved += '.tsx';
                    else if (fs.existsSync(resolved + '.js')) resolved += '.js';
                    else if (fs.existsSync(resolved + '.jsx')) resolved += '.jsx';
                    else if (fs.existsSync(resolved + '/index.ts')) resolved += '/index.ts';
                    else if (fs.existsSync(resolved + '/index.tsx')) resolved += '/index.tsx';
                    else if (fs.existsSync(resolved + '/index.js')) resolved += '/index.js';
                    else if (fs.existsSync(resolved + '/index.jsx')) resolved += '/index.jsx';
                    // Check css/assets
                    else if (fs.existsSync(resolved + '.css')) resolved += '.css';
                }
                
                if (fs.existsSync(resolved)) {
                    const result = checkFileCase(resolved);
                    if (result !== true) {
                        foundIssues = true;
                        console.log(`\nMismatch in file: ${file}`);
                        console.log(`Import statement: '${importPath}'`);
                        console.log(`Expected casing: ${result.expected}`);
                        console.log(`Actual casing in file system: ${result.actual}`);
                    }
                }
            }
        }
    });
    if (!foundIssues) {
        console.log("No case mismatches found in imports.");
    }
});
