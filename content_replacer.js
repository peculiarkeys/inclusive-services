import fs from 'fs';
import path from 'path';

const replacements = [
  ["Engineering & Design", "Therapy & Counselling"],
  ["Developing detailed engineering designs using the latest tools.", "Providing supportive counselling services for individuals and families."],
  ["Procurement", "Home Assessments"],
  ["Sourcing high-quality materials globally.", "Delivering professional and culturally sensitive assessment reports."],
  ["Construction", "One-to-One Support"],
  ["Bringing projects to life with unmatched craftsmanship.", "Providing individualized support for children and youth."],
  ["Turnkey Solutions", "Supervised Visitation"],
  ["Taking full responsibility for the entire project lifecycle.", "Ensuring safe and structured visitation services."],
  ["Renovation", "Transportation Services"],
  ["Breathing new life into existing structures.", "Offering safe and reliable transportation."],
  ["Maintenance & Facility", "Adoption & Foster Care"],
  ["Maximizing lifespan and operational efficiency of your assets.", "Providing guidance for caregivers navigating foster care."],
  
  ["engineering, procurement, and construction", "support for children, youth, and families"],
  ["Engineering, Procurement, and Construction", "Therapy, Assessment, and Support"],
  
  ["Architectural Design Estate", "Family Transition Program"],
  ["Transcorp Hilton Renovation", "Child Welfare Support"],
  ["Golf Center Development", "Youth Mentorship Initiative"],
  ["Furnitures and Furnishing", "Community Outreach Program"],
  ["Modern City Jahi", "Caregiver Support Group"],
  ["Residential Development Asokoro", "Crisis Intervention Services"],
  ["Maitama Private Residence", "Family Reintegration Plan"],
  ["Transcorp Hilton", "Child Welfare"],
  ["Maitama", "Family Reintegration"],
  ["Asokoro", "Crisis Intervention"],
  ["Jahi", "Caregiver Support"],
  ["Golf Center", "Youth Mentorship"],
  
  ["HardHat", "Heart"],
  ["Truck", "Car"],
  ["Hammer", "Users"],
  ["Key", "Shield"],
  ["RefreshCw", "Activity"],
  ["Settings", "LifeBuoy"],
  ["<HardHat ", "<Heart "],
  ["<Truck ", "<Car "],
  ["<Hammer ", "<Users "],
  ["<Key ", "<Shield "],
  ["<RefreshCw ", "<Activity "],
  ["<Settings ", "<LifeBuoy "],

  ["const { HardHat, Truck, Hammer, Key, RefreshCw, Settings }", "const { Heart, Car, Users, Shield, Activity, LifeBuoy }"],
  ["import { HardHat, Truck, Hammer, Key, RefreshCw, Settings ", "import { Heart, Car, Users, Shield, Activity, LifeBuoy "],
  ["import { ArrowRight, HardHat, Truck, Hammer, Key, RefreshCw, Settings }", "import { ArrowRight, Heart, Car, Users, Shield, Activity, LifeBuoy }"]
];

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
        let newContent = content;
        for (const [oldStr, newStr] of replacements) {
            // using string split/join to replace all occurrences without regex escaping issues
            newContent = newContent.split(oldStr).join(newStr);
        }
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated', filePath);
        }
    }
});
