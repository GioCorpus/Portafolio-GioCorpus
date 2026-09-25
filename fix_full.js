import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\pages\\ResearchPage.tsx';

// Read the current mangled file
let c = fs.readFileSync(f, 'utf8');

// The correct structure should have these sections in order:
// 1. qeos-research
// 2. qpu-research
// 3. telemetry-research
// 4. compute-research
// 5. distributed-research
// 6. error-correction-research
// 7. majorana-research
// 8. ResearchMap
// 9. experiments
// 10. evidence
// 11. repositories

// Since the file is mangled, let me extract the needed parts and rebuild

// Extract the imports and function start
const importMatch = c.match(/^([\s\S]*?export function ResearchPage\(\) \{\s*return \([\s\S]*?<div className="min-h-screen bg-neutral-950 text-white">)/);
const importsAndStart = importMatch ? importMatch[1] : '';

// Extract individual sections by their id
const sections = {};
const sectionIds = ['qeos-research', 'qpu-research', 'telemetry-research', 'compute-research', 'distributed-research', 'error-correction-research', 'majorana-research', 'experiments', 'evidence', 'evidence-limitations', 'future-questions', 'repositories'];

for (const id of sectionIds) {
  const regex = new RegExp(`(<section id="${id}"[\\s\\S]*?</section>)`, 'm');
  const match = c.match(regex);
  if (match) {
    sections[id] = match[1];
  }
}

// Extract ResearchMap
const researchMapMatch = c.match(/(<ResearchMap \/>)/);
const researchMap = researchMapMatch ? researchMapMatch[1] : '<ResearchMap />';

// Extract the ending
const endMatch = c.match(/(\s*\);\s*\}\s*export default ResearchPage;[\s\S]*$)/);
const ending = endMatch ? endMatch[1] : '\n    </div>\n  );\n}\n\nexport default ResearchPage;';

// Build the correct file
let newContent = importsAndStart;

const sectionOrder = [
  'qeos-research',
  'qpu-research',
  'telemetry-research',
  'compute-research',
  'distributed-research',
  'error-correction-research',
  'majorana-research'
];

for (const id of sectionOrder) {
  if (sections[id]) {
    newContent += '\n' + sections[id];
  }
}

newContent += '\n      ' + researchMap;

if (sections['experiments']) {
  newContent += '\n' + sections['experiments'];
}

// Use evidence if available, otherwise evidence-limitations
if (sections['evidence']) {
  newContent += '\n' + sections['evidence'];
} else if (sections['evidence-limitations']) {
  // Rename evidence-limitations to evidence
  let evidenceSection = sections['evidence-limitations'];
  evidenceSection = evidenceSection.replace('id="evidence-limitations"', 'id="evidence"');
  evidenceSection = evidenceSection.replace('aria-labelledby="evidence-heading"', 'aria-labelledby="evidence-heading"');
  evidenceSection = evidenceSection.replace('id="evidence-heading"', 'id="evidence-heading"');
  // Update heading text
  evidenceSection = evidenceSection.replace('Evidence & Limitations', 'Evidence & Validation');
  evidenceSection = evidenceSection.replace('Reproducible benchmarks, formal verification artifacts, and third-party validation of research claims.', 'Reproducible benchmarks, formal verification artifacts, and third-party validation of research claims.');
  newContent += '\n' + evidenceSection;
}

if (sections['repositories']) {
  newContent += '\n' + sections['repositories'];
}

newContent += ending;

fs.writeFileSync(f, newContent);
console.log('File rebuilt successfully');