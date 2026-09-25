import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\data\\research.ts';
let c = fs.readFileSync(f, 'utf8');
const lines = c.split('\n');
for(let i=318; i<325; i++) {
  console.log(i+1, JSON.stringify(lines[i]));
}