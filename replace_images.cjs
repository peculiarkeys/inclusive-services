const fs = require('fs');
const path = require('path');

const mappings = {
  'SupervisedVisitationPage.tsx': {
    hero: '"/images/people-sharing-feelings-emotions-group-therapy-session.jpg"',
    target: '"/images/pexels-shvets-production-7176298.jpg"'
  },
  'BlogPage.tsx': {
    hero: '"/images/pexels-rdne-9064323.jpg"'
  },
  'OneToOneSupportPage.tsx': {
    hero: '"/images/full-shot-young-woman-undergoing-therapy.jpg"',
    target: '"/images/psychology-therapy-psychiatry-mental-health-counseling-concept-candid-shot-nervous-self-conscious-young-male-glasses-telling-middle-aged-female-counselor-about-his-problems-work.jpg"'
  },
  'HomeAssessmentPage.tsx': {
    hero: '"/images/family-counseling-session-home-with-therapist-pshycologist-showing-pictures-emotions-girl-african-american-father-european-mother.jpg"',
    target: '"/images/close-up-smiley-family-therapist.jpg"'
  },
  'DivorceSupportPage.tsx': {
    hero: '"/images/married-couple-having-problems-their-relationship-they-are-attending-pshycologist-advice (1).jpg"',
    target: '"/images/pexels-gustavo-fring-7447058.jpg"'
  },
  'TransportationPage.tsx': {
    hero: '"/images/pexels-shvets-production-7176137.jpg"',
    target: '"/images/pexels-shvets-production-7176029.jpg"'
  },
  'TherapyCounsellingPage.tsx': {
    hero: '"/images/african-american-man-sharing-addiction-story-with-group-people-aa-therapy-meeting-adult-having-conversation-with-psychologist-patients-circle-rehabilitation-session.jpg"',
    target: '"/images/male-psychologist-taking-notes-couple-therapy-session-help-with-relationship-issues-counselor-giving-advice-explaining-marriage-problems-using-paper-psychoanalysis-close-up.jpg"'
  },
  'CommunitySupportPage.tsx': {
    hero: '"/images/psychologist-advising-group-patients.jpg"',
    target: '"/images/pexels-ai25studioai-7579187.jpg"'
  },
  'AdoptionPage.tsx': {
    hero: '"/images/pexels-shvets-production-7176305.jpg"',
    target: '"/images/pexels-shvets-production-7176305 (1).jpg"'
  },
  'ContactPage.tsx': {
    hero: '"/images/woman-asking-questions-interview.jpg"'
  },
  'AboutPage.tsx': {
    hero: '"/images/people-sharing-feelings-emotions-group-therapy-session.jpg"',
    side: '"/images/close-up-smiley-family-therapist.jpg"'
  },
  'WorksHero.tsx': {
    hero: '"/images/family-counseling-session-home-with-therapist-pshycologist-showing-pictures-emotions-girl-african-american-father-european-mother.jpg"'
  }
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      const filename = path.basename(fullPath);
      const map = mappings[filename];
      if (map) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let changed = false;
        
        if (map.hero && content.includes('const heroImg = "https://images.unsplash.com')) {
          content = content.replace(/const heroImg = "https:\/\/images\.unsplash\.com[^"]*";/, `const heroImg = ${map.hero};`);
          changed = true;
        }
        if (map.target && content.includes('const targetImg = "https://images.unsplash.com')) {
          content = content.replace(/const targetImg = "https:\/\/images\.unsplash\.com[^"]*";/, `const targetImg = ${map.target};`);
          changed = true;
        }
        if (map.side && content.includes('const sideImg = "https://images.unsplash.com')) {
          content = content.replace(/const sideImg = "https:\/\/images\.unsplash\.com[^"]*";/, `const sideImg = ${map.side};`);
          changed = true;
        }
        
        if (changed) {
          fs.writeFileSync(fullPath, content);
          console.log(`Updated ${filename}`);
        }
      }
    }
  }
}

processDir('/Users/mac/Desktop/Inclusive Services/src/app');
