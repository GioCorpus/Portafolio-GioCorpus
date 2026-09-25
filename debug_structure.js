import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\pages\\ResearchPage.tsx';
let c = fs.readFileSync(f, 'utf8');
const lines = c.split('\n');
for(let i=0; i<lines.length; i++) {
  if (lines[i].includes('min-h-screen') || lines[i].includes('return') || lines[i].trim() === '</div>' || lines[i].trim() === ');' || lines[i].trim() === '}' || lines[i].includes('export default')) {
    console.log(i+1, JSON.stringify(lines[i]));
  }
}