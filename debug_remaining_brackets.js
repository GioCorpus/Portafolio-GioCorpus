import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\data\\research.ts';
let c = fs.readFileSync(f, 'utf8');
const lines = c.split('\n');
for(let i=0; i<lines.length; i++) {
  const trimmed = lines[i].trim();
  if (trimmed === '];' && i < 320) {
    console.log(i+1, JSON.stringify(lines[i]));
  }
}