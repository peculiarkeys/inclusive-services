const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  // Page names & component names
  { regex: /ConstructionPage/g, replacement: 'FamilyTherapyPage' },
  { regex: /EngineeringDesignPage/g, replacement: 'IndividualCounselingPage' },
  { regex: /MaintenancePage/g, replacement: 'GroupSupportPage' },
  { regex: /ProcurementPage/g, replacement: 'ChildWelfarePage' },
  { regex: /RenovationPage/g, replacement: 'CrisisInterventionPage' },
  { regex: /TurnkeySolutionsPage/g, replacement: 'CommunityProgramsPage' },
  
  // Routes & Slugs
  { regex: /services\/construction/g, replacement: 'services/family-therapy' },
  { regex: /services\/engineering/g, replacement: 'services/individual-counseling' },
  { regex: /services\/maintenance/g, replacement: 'services/group-support' },
  { regex: /services\/procurement/g, replacement: 'services/child-welfare' },
  { regex: /services\/renovation/g, replacement: 'services/crisis-intervention' },
  { regex: /services\/turnkey/g, replacement: 'services/community-programs' },

  // Text content - case sensitive where possible
  { regex: /Engineering Design/g, replacement: 'Individual Counseling' },
  { regex: /Turnkey Solutions/g, replacement: 'Community Programs' },
  { regex: /Turnkey/g, replacement: 'Community' },
  { regex: /Procurement/g, replacement: 'Child Welfare' },
  { regex: /procurement/gi, replacement: 'child welfare' },
  { regex: /Renovation( and Rehabilitation)?/g, replacement: 'Crisis Intervention' },
  { regex: /Renovation/g, replacement: 'Crisis Intervention' },
  { regex: /Maintenance( and Facility Management)?/g, replacement: 'Group Support' },
  { regex: /Maintenance/g, replacement: 'Group Support' },
  { regex: /Construction/g, replacement: 'Family Therapy' },
  { regex: /construction/g, replacement: 'family therapy' },
  { regex: /EPC/g, replacement: 'Care Provider' },
  { regex: /Engineering/g, replacement: 'Counseling' },
  { regex: /engineering/g, replacement: 'counseling' },
  { regex: /Contractor/g, replacement: 'Provider' },
  { regex: /contractor/g, replacement: 'provider' },
  { regex: /Facility Management/g, replacement: 'Support Groups' },
  { regex: /facility management/gi, replacement: 'support groups' },
  
  // Specific lingering texts
  { regex: /projects/gi, replacement: 'programs' },
  { regex: /Projects/g, replacement: 'Programs' },
  { regex: /project/gi, replacement: 'program' },
  { regex: /Project/g, replacement: 'Program' },
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
console.log("Refactoring 2 complete.");
