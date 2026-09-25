import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\pages\\ResearchPage.tsx';
let c = fs.readFileSync(f, 'utf8');
const lines = c.split('\n');
for(let i=0; i<lines.length; i++) {
  if (lines[i].includes('section id=') || lines[i].includes('<ResearchMap') || lines[i].includes('export function') || lines[i].includes('return (') || (lines[i].trim() === '</div>' && !lines[i].includes('className'))) {
    console.log(i+1, JSON.stringify(lines[i]));
  }
}
console.log('--- Total lines:', lines.length);
console.log('--- Last 10 lines:');
for(let i=Math.max(0, lines.length-10); i<lines.length; i++) {
  console.log(i+1, JSON.stringify(lines[i]));
}