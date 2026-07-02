const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  // Text content
  { regex: /Obembe Construction/g, replacement: 'Inclusive Social Services' },
  { regex: /Obembe/g, replacement: 'Inclusive' },
  { regex: /Quality Construction & Building Solutions Provider/g, replacement: 'Compassionate Family Support & Social Services' },
  { regex: /top-tier engineering and construction services, built to stand the test of time/g, replacement: 'culturally responsive home assessments and dedicated family therapy support.' },
  { regex: /Construction Team/g, replacement: 'Support Team' },
  { regex: /construction/gi, replacement: 'support' },
  { regex: /engineering/gi, replacement: 'counseling' },
  { regex: /building/gi, replacement: 'growing' },
  { regex: /EPC/g, replacement: 'Family Support' },
  { regex: /Home Assessments/g, replacement: 'Family Assessments' },
  
  // Colors
  { regex: /#d16c49/gi, replacement: '#FF994F' },
  { regex: /#b05b3e/gi, replacement: '#e68a47' }, // darker orange
  { regex: /#2B2B2B/gi, replacement: '#1C3234' },
  { regex: /#1a1c18/gi, replacement: '#1C3234' },
  
  // Font weights
  { regex: /font-medium/g, replacement: '' },
  
  // Images - just override the projectImages logic to use an unsplash list
  { regex: /import\.meta\.glob\(.*?\)/g, replacement: 'import.meta.glob("../../assets/*")' }
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
      
      // Specifically fix the hero image logic in AboutPage and others
      if (content.includes('projectImages[')) {
        content = content.replace(/const heroImg = projectImages\[.*?\] \|\| "".*?;/s, 'const heroImg = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop";');
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log("Refactoring complete.");
