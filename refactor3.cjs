const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  // Fix the "counseling & design" weirdness
  { regex: /counseling \& Design/gi, replacement: 'Individual Counseling' },
  { regex: /counseling and design/gi, replacement: 'individual counseling' },
  { regex: /Counseling and Design/g, replacement: 'Individual Counseling' },
  { regex: /counselingDesignPage/g, replacement: 'IndividualCounselingPage' },
  { regex: /counseling-and-design/g, replacement: 'individual-counseling' },
  
  // Fix other awkward replacements
  { regex: /design and child welfare/gi, replacement: 'planning and support' },
  { regex: /integrated design/gi, replacement: 'integrated support' },
  { regex: /structural counseling/gi, replacement: 'family counseling' },
  { regex: /designers/gi, replacement: 'counselors' },
  { regex: /design/g, replacement: 'plan' },
  { regex: /Design/g, replacement: 'Plan' },
  { regex: /counseling and precise plan solutions/gi, replacement: 'counseling and precise support solutions' },
  { regex: /counseling designs/gi, replacement: 'counseling plans' },
  { regex: /design services/gi, replacement: 'counseling services' },
  { regex: /Schematic Plan/gi, replacement: 'Initial Assessment' },
  { regex: /Plan Development/gi, replacement: 'Therapy Development' },
  { regex: /Plans Completed/gi, replacement: 'Families Helped' }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log("Refactoring 3 complete.");
