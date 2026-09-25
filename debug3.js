import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\pages\\ResearchPage.tsx';
let c = fs.readFileSync(f, 'utf8');
const lines = c.split('\n');
for(let i=0; i<lines.length; i++) {
  if (lines[i].includes('section id=') || lines[i].includes('<ResearchMap') || lines[i].includes('export function') || lines[i].includes('return (') || lines[i].includes('</div>') && lines[i].trim() === '</div>') {
    console.log(i+1, JSON.stringify(lines[i]));
  }
}