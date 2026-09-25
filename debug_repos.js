import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\pages\\ResearchPage.tsx';
let c = fs.readFileSync(f, 'utf8');
const lines = c.split('\n');
for(let i=190; i<220; i++) {
  console.log(i+1, JSON.stringify(lines[i]));
}